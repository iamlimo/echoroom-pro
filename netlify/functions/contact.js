const nodemailer = require('nodemailer');

const DEFAULT_EMAIL = 'echooroom.enquiries@starkscpl.com';

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const {
      name,
      email,
      company,
      budget,
      projectGoals,
      timeline,
      preferredChannel,
      briefFileName,
      message,
    } = data;

    const requiredMessage = message || projectGoals;

    if (!name || !email || !requiredMessage) {
      return { statusCode: 400, body: 'Missing required fields' };
    }

    const smtpUser = process.env.SMTP_USER || DEFAULT_EMAIL;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SMTP password not configured' }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.RECIPIENT_EMAIL || DEFAULT_EMAIL;
    const subject = `New project brief from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || ''}`,
      `Budget: ${budget || ''}`,
      `Timeline: ${timeline || ''}`,
      `Preferred channel: ${preferredChannel || ''}`,
      `Attachment: ${briefFileName || 'None'}`,
      '',
      'Project brief:',
      requiredMessage,
    ].join('\n');

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || ''}</p>
      <p><strong>Budget:</strong> ${budget || ''}</p>
      <p><strong>Timeline:</strong> ${timeline || ''}</p>
      <p><strong>Preferred channel:</strong> ${preferredChannel || ''}</p>
      <p><strong>Attachment:</strong> ${briefFileName || 'None'}</p>
      <hr />
      <p><strong>Project brief:</strong></p>
      <p>${(requiredMessage || '').replace(/\n/g, '<br/>')}</p>
    `;

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `EchooRoom Enquiries <${smtpUser}>`,
      replyTo: email,
      to: recipient,
      subject,
      text,
      html,
    });

    console.log('Email sent', info.messageId);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('Send mail error', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
};
