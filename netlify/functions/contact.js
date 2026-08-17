const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, company, size, message } = data;

    if (!name || !email || !message) {
      return { statusCode: 400, body: 'Missing required fields' };
    }

    // Transport configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.RECIPIENT_EMAIL || 'theworkwithleo@gmail.com';

    const subject = `Website contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || ''}\nSize: ${size || ''}\n\nMessage:\n${message}`;

    const info = await transporter.sendMail({
      from: `${name} <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipient,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company || ''}</p><p><strong>Size:</strong> ${size || ''}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    console.log('Email sent', info);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('Send mail error', err);
    return { statusCode: 500, body: 'Server error' };
  }
};
