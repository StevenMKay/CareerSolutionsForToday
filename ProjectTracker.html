require('dotenv').config();
const express = require('express');
const fetch   = require('node-fetch');
const cors    = require('cors');
const admin   = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');
const Stripe  = require('stripe');

// Stripe init (graceful if key not set yet)
const stripe = process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.startsWith('YOUR_')
    ? Stripe(process.env.STRIPE_SECRET_KEY)
    : null;

// ============================================================
// FIREBASE ADMIN INITIALISATION
// ============================================================
// Place your service account JSON file at:
//   projectbackend/serviceAccountKey.json
// Download it from: Firebase Console -> Project Settings ->
// Service Accounts -> Generate new private key.
//
// SECURITY: NEVER commit this file to git.
// Add to .gitignore:  serviceAccountKey.json
//
let adminInitialised = false;
try {
    let serviceAccount;
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
        // Railway / cloud: credentials stored as env var
        serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    } else {
        // Local development: credentials stored as file
        serviceAccount = require('./serviceAccountKey.json');
    }
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    adminInitialised = true;
    console.log('[Firebase Admin] Initialised successfully');
} catch (e) {
    console.warn('[Firebase Admin] Could not initialise - admin routes disabled:', e.message);
}

const auth = adminInitialised ? admin.auth() : null;
const db   = adminInitialised ? getFirestore(admin.app()) : null;

const app = express();

// Manual CORS — handles preflight OPTIONS reliably on Railway
app.use((req, res, next) => {
    const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Diagnostic endpoint — confirms which version is deployed
app.get('/api/ping', (req, res) => res.json({ ok: true, version: 'v3' }));

const API_KEY = process.env.YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY';

// ============================================================
// YOUTUBE PROXY (existing)
// ============================================================
app.get('/api/youtube', async (req, res) => {
  const { playlistId, maxResults, id } = req.query;
  let url = '';
  if (id) {
    url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${id}&key=${API_KEY}`;
  } else {
    url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults || 5}&key=${API_KEY}`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from YouTube API' });
  }
});

// ============================================================
// ADMIN AUTH MIDDLEWARE
// ============================================================
// Verifies the Firebase ID token in the Authorization header
// and checks the user has role: "admin" in Firestore.
//
async function requireAdmin(req, res, next) {
    if (!adminInitialised) {
        return res.status(503).json({ error: 'Admin service not configured. See backend setup instructions.' });
    }
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = await auth.verifyIdToken(token);
        const userDoc  = await db.collection('users').doc(decoded.uid).get();
        if (!userDoc.exists || userDoc.data().role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden: admin role required' });
        }
        req.adminUid = decoded.uid;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

// ============================================================
// ADMIN ROUTES — TENANTS
// ============================================================

// List all tenants
app.get('/api/admin/tenants', requireAdmin, async (req, res) => {
    try {
        const snapshot = await db.collection('tenants').get();
        const tenants  = [];
        for (const doc of snapshot.docs) {
            // Count users in this tenant
            const users = await db.collection('users')
                .where('tenantId', '==', doc.id).get();
            tenants.push({ id: doc.id, ...doc.data(), userCount: users.size });
        }
        res.json(tenants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to list tenants' });
    }
});

// Create a tenant
app.post('/api/admin/tenants', requireAdmin, async (req, res) => {
    const { tenantId, companyName, plan, maxSeats } = req.body;
    if (!tenantId || !companyName) {
        return res.status(400).json({ error: 'tenantId and companyName are required' });
    }
    // tenantId must be slug-safe
    if (!/^[a-z0-9-]+$/.test(tenantId)) {
        return res.status(400).json({ error: 'tenantId must be lowercase letters, numbers and hyphens only' });
    }
    try {
        const ref = db.collection('tenants').doc(tenantId);
        const existing = await ref.get();
        if (existing.exists) return res.status(409).json({ error: 'Tenant ID already exists' });
        await ref.set({
            companyName,
            plan:     plan     || 'standard',
            maxSeats: maxSeats || 10,
            active:   true,
            createdAt: new Date().toISOString()
        });
        res.json({ success: true, tenantId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create tenant' });
    }
});

// Update a tenant (plan, seats, active status)
app.patch('/api/admin/tenants/:tenantId', requireAdmin, async (req, res) => {
    const { tenantId } = req.params;
    const updates = {};
    const allowed = ['companyName', 'plan', 'maxSeats', 'active'];
    allowed.forEach(function(k) { if (req.body[k] !== undefined) updates[k] = req.body[k]; });
    try {
        await db.collection('tenants').doc(tenantId).update(updates);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update tenant' });
    }
});

// ============================================================
// ADMIN ROUTES — USERS
// ============================================================

// List all users
app.get('/api/admin/users', requireAdmin, async (req, res) => {
    try {
        const snapshot = await db.collection('users').get();
        const users = snapshot.docs.map(function(doc) {
            return { uid: doc.id, ...doc.data() };
        });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to list users' });
    }
});

// Create a user and assign to a tenant
app.post('/api/admin/users', requireAdmin, async (req, res) => {
    const { email, password, displayName, tenantId, role } = req.body;
    if (!email || !password || !tenantId) {
        return res.status(400).json({ error: 'email, password and tenantId are required' });
    }
    // Verify tenant exists and is active
    const tenantDoc = await db.collection('tenants').doc(tenantId).get();
    if (!tenantDoc.exists) return res.status(404).json({ error: 'Tenant not found' });
    if (!tenantDoc.data().active) return res.status(403).json({ error: 'Tenant is inactive' });

    // Check seat limit
    const existingUsers = await db.collection('users').where('tenantId', '==', tenantId).get();
    if (existingUsers.size >= (tenantDoc.data().maxSeats || 10)) {
        return res.status(403).json({ error: 'Seat limit reached for this tenant' });
    }

    try {
        const userRecord = await auth.createUser({ email, password, displayName: displayName || '' });
        await db.collection('users').doc(userRecord.uid).set({
            tenantId,
            displayName: displayName || '',
            email,
            role: role || 'member',
            createdAt: new Date().toISOString()
        });
        res.json({ success: true, uid: userRecord.uid });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Failed to create user' });
    }
});

// Update a user (role, tenantId, displayName)
app.patch('/api/admin/users/:uid', requireAdmin, async (req, res) => {
    const { uid } = req.params;
    const updates = {};
    const allowed = ['role', 'tenantId', 'displayName'];
    allowed.forEach(function(k) { if (req.body[k] !== undefined) updates[k] = req.body[k]; });
    try {
        await db.collection('users').doc(uid).update(updates);
        if (req.body.displayName) await auth.updateUser(uid, { displayName: req.body.displayName });
        if (req.body.email)       await auth.updateUser(uid, { email: req.body.email });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// Disable / re-enable a user
app.patch('/api/admin/users/:uid/status', requireAdmin, async (req, res) => {
    const { uid } = req.params;
    const { disabled } = req.body;
    try {
        await auth.updateUser(uid, { disabled: !!disabled });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update user status' });
    }
});

// Delete a user permanently
app.delete('/api/admin/users/:uid', requireAdmin, async (req, res) => {
    const { uid } = req.params;
    try {
        await auth.deleteUser(uid);
        await db.collection('users').doc(uid).delete();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

// ============================================================
// BILLING ROUTES — STRIPE SUBSCRIPTIONS
// ============================================================

const PLANS = {
    standard:     { priceId: () => process.env.STRIPE_PRICE_STANDARD,     maxSeats: 10  },
    professional: { priceId: () => process.env.STRIPE_PRICE_PROFESSIONAL, maxSeats: 25  },
    enterprise:   { priceId: () => process.env.STRIPE_PRICE_ENTERPRISE,   maxSeats: 100 }
};

// Create Stripe Checkout Session
app.post('/api/billing/checkout', async (req, res) => {
    try {
    if (!stripe) return res.status(503).json({ error: 'Billing not configured' });
    if (!db)     return res.status(503).json({ error: 'Database not configured' });

    const { plan, companyName, adminEmail, tenantId } = req.body;

    if (!plan || !PLANS[plan])            return res.status(400).json({ error: 'Invalid plan' });
    if (!companyName || !adminEmail)      return res.status(400).json({ error: 'Missing companyName or adminEmail' });
    if (!tenantId || !/^[a-z0-9-]+$/.test(tenantId))
                                          return res.status(400).json({ error: 'Invalid tenantId — lowercase letters, numbers, hyphens only' });
    if (!adminEmail.includes('@'))        return res.status(400).json({ error: 'Invalid email' });

    // Prevent duplicate tenant IDs
    const existing = await db.collection('tenants').doc(tenantId).get();
    if (existing.exists) return res.status(409).json({ error: 'That company ID is already taken. Choose a different one.' });

    const priceId = PLANS[plan].priceId();
    if (!priceId || priceId.startsWith('price_YOUR_'))
        return res.status(503).json({ error: 'Plan price not configured yet' });

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            customer_email: adminEmail,
            line_items: [{ price: priceId, quantity: 1 }],
            metadata: {
                companyName,
                tenantId,
                adminEmail,
                plan,
                maxSeats: String(PLANS[plan].maxSeats)
            },
            success_url: `${process.env.SITE_URL || 'https://www.careersolutionsfortoday.com'}/license-success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url:  `${process.env.SITE_URL || 'https://www.careersolutionsfortoday.com'}/license-pricing.html?cancelled=1`,
        });
        res.json({ url: session.url });
    } catch (err) {
        console.error('[Billing] Checkout error:', err.message);
        res.status(500).json({ error: err.message || 'Failed to create checkout session' });
    }
    } catch (err) {
        console.error('[Billing] Outer checkout error:', err.message);
        res.status(500).json({ error: err.message || 'Server error' });
    }
});

// Stripe Webhook — auto-provision tenant on successful payment
// Must use express.raw() so Stripe can verify the request signature
app.post('/api/billing/webhook',
    express.raw({ type: 'application/json' }),
    async (req, res) => {
        if (!stripe) return res.status(503).send('Billing not configured');

        const sig = req.headers['stripe-signature'];
        let event;
        try {
            event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            console.error('[Billing] Webhook signature failed:', err.message);
            return res.status(400).send('Webhook signature verification failed');
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const { companyName, tenantId, adminEmail, plan, maxSeats } = session.metadata || {};

            if (!tenantId || !adminEmail) {
                console.error('[Billing] Missing metadata on session', session.id);
                return res.status(400).send('Missing metadata');
            }

            try {
                // 1. Create tenant record in Firestore
                await db.collection('tenants').doc(tenantId).set({
                    companyName,
                    plan,
                    maxSeats: parseInt(maxSeats, 10),
                    active: true,
                    stripeCustomerId: session.customer,
                    stripeSubscriptionId: session.subscription,
                    createdAt: new Date().toISOString()
                });

                // 2. Create admin Firebase Auth account with a random temp password
                const tempPassword = Math.random().toString(36).slice(-8)
                    + Math.random().toString(36).slice(-8).toUpperCase() + '1!';
                const userRecord = await auth.createUser({
                    email: adminEmail,
                    password: tempPassword,
                    displayName: companyName + ' Admin'
                });

                // 3. Write user record to Firestore
                await db.collection('users').doc(userRecord.uid).set({
                    tenantId,
                    email: adminEmail,
                    displayName: companyName + ' Admin',
                    role: 'admin',
                    createdAt: new Date().toISOString()
                });

                // 4. Generate a password-reset link so the buyer sets their own password
                //    (send via your email provider: SendGrid, Resend, etc.)
                const resetLink = await auth.generatePasswordResetLink(adminEmail);
                console.log('[Billing] Provisioned:', tenantId, '| Admin:', adminEmail, '| Reset:', resetLink);

            } catch (err) {
                console.error('[Billing] Provisioning error for', tenantId, err.message);
                // Return 200 so Stripe doesn't retry — log for manual resolution
            }
        }

        if (event.type === 'customer.subscription.deleted') {
            // Deactivate tenant when subscription is cancelled
            const sub = event.data.object;
            const snap = await db.collection('tenants')
                .where('stripeSubscriptionId', '==', sub.id).limit(1).get();
            if (!snap.empty) {
                await snap.docs[0].ref.update({ active: false });
                console.log('[Billing] Deactivated tenant for subscription', sub.id);
            }
        }

        res.json({ received: true });
    }
);

// ============================================================
// START SERVER
// ============================================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
