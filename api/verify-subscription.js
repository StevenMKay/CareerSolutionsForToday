import Stripe from 'stripe';
import crypto from 'node:crypto';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_KEY;
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' }) : null;
const allowedPriceIds = (process.env.UPLOAD_ALLOWED_PRICE_IDS || '').split(',').map((id) => id.trim()).filter(Boolean);
const allowedPriceSet = new Set(allowedPriceIds);
const tokenTtlMs = Number(process.env.UPLOAD_TOKEN_TTL || 15 * 60 * 1000);
const tokenSecret = process.env.UPLOAD_GATE_SECRET || STRIPE_SECRET_KEY || 'excel-upload-placeholder-secret';

function createSignedToken(payload) {
  const json = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', tokenSecret).update(json).digest('base64url');
  return `${json}.${signature}`;
}

function success(res, data) {
  return res.status(200).json({ success: true, ...data });
}

function error(res, status, message) {
  return res.status(status).json({ success: false, error: message });
}

async function findCustomerByEmail(email) {
  const list = await stripe.customers.list({ email, limit: 5 });
  return list.data;
}

async function customerHasAllowedSubscription(customerId) {
  const subscriptions = await stripe.subscriptions.list({ customer: customerId, status: 'active', limit: 10 });
  if (!subscriptions.data.length) {
    return false;
  }
  if (!allowedPriceSet.size) {
    return true;
  }
  return subscriptions.data.some((sub) => {
    if (!sub.items || !sub.items.data) {
      return false;
    }
    return sub.items.data.some((item) => item.price && allowedPriceSet.has(item.price.id));
  });
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

export default async function handler(req, res) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return error(res, 405, 'Method not allowed');
  }

  if (!stripe) {
    return error(res, 500, 'Stripe secret key not configured');
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const email = normalizeEmail(body.email);

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return error(res, 400, 'Valid email is required');
    }

    const customers = await findCustomerByEmail(email);
    if (!customers.length) {
      return error(res, 403, 'No active subscription found for that email.');
    }

    let isAuthorized = false;
    let matchedCustomer = null;

    for (const customer of customers) {
      const authorized = await customerHasAllowedSubscription(customer.id);
      if (authorized) {
        isAuthorized = true;
        matchedCustomer = customer;
        break;
      }
    }

    if (!isAuthorized) {
      return error(res, 403, 'An active subscription is required for uploads.');
    }

    const expiresAt = Date.now() + tokenTtlMs;
    const token = createSignedToken({ email, customerId: matchedCustomer?.id, exp: expiresAt });

    return success(res, { token, email, expiresAt });
  } catch (err) {
    console.error('verify-subscription error', err);
    return error(res, 500, 'Unable to verify subscription');
  }
}
