// Serverless contact form handler for Vercel (Node.js)
// Uses Resend for email delivery if RESEND_API_KEY is provided.

export default async function handler(req, res) {
  // Basic CORS (allow same-origin and typical deployments)
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
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Honeypot and timing anti-spam
    if (body.website && String(body.website).trim() !== '') {
      // Silent success to avoid bot learning
      return res.status(200).json({ success: true });
    }
    const start = parseInt(body.form_start_time, 10);
    if (!isNaN(start)) {
      const elapsed = Math.floor(Date.now() / 1000) - start;
      if (elapsed < 3) {
        return res.status(200).json({ success: true });
      }
    }

    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'serviceType', 'message'];
    const missing = required.filter((k) => !body[k] || String(body[k]).trim() === '');
    if (missing.length) {
      return res.status(400).json({ success: false, errors: missing.map((m) => `${m} is required`) });
    }

    // Compose email content
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || 'contact-form@careersolutionsfortoday.com';
    const subject = `New Contact Form Submission - ${body.serviceType}`;

    const lines = [
      'New contact form submission:',
      `Name: ${body.firstName} ${body.lastName}`,
      `Email: ${body.email}`,
      `Company: ${body.company || 'Not provided'}`,
      `Service Interest: ${body.serviceType}`,
      `Budget: ${body.budget || 'Not specified'}`,
      `Timeline: ${body.timeline || 'Not specified'}`,
      'Message:',
      body.message,
      '',
      `Submitted: ${new Date().toISOString()}`,
      `IP Address: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''}`,
    ];
    const text = lines.join('\n');

    // If no email destination configured, ack success so the UI flows
    if (!to) {
      return res.status(200).json({
        success: true,
        message: 'Form received (email sending not configured). Set CONTACT_TO env var to enable email.'
      });
    }

    // Try to send using Resend if API key provided
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        await resend.emails.send({
          from,
          to,
          subject,
          text,
        });
        return res.status(200).json({ success: true, message: 'Message sent successfully' });
      } catch (err) {
        console.error('Resend error', err);
        // Fall through to generic success to avoid exposing system details
        return res.status(500).json({ success: false, error: 'Email send failed' });
      }
    }

    // If no provider configured
    return res.status(200).json({
      success: true,
      message: 'Form received (no email provider configured). Set RESEND_API_KEY + CONTACT_TO to send email.'
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(400).json({ success: false, error: 'Invalid request body' });
  }
}
