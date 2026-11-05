import fs from 'node:fs/promises';
import nodemailer from 'nodemailer';
import formidable from 'formidable';

const DEFAULT_EMAIL = 'echooroom.enquiries@starkscpl.com';

function normalizeValue(value) {
  if (Array.isArray(value)) return value[0] || '';
  return value || '';
}

export default async function contactHandler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const form = formidable({
      multiples: false,
      maxFiles: 1,
      maxFileSize: 10 * 1024 * 1024,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (error, parsedFields, parsedFiles) => {
        if (error) {
          reject(error);
          return;
        }

        resolve([parsedFields, parsedFiles]);
      });
    });

    const name = normalizeValue(fields.name);
    const email = normalizeValue(fields.email);
    const company = normalizeValue(fields.company);
    const budget = normalizeValue(fields.budget);
    const timeline = normalizeValue(fields.timeline);
    const preferredChannel = normalizeValue(fields.preferredChannel);
    const size = normalizeValue(fields.size);
    const rawMessage = normalizeValue(fields.message || fields.projectGoals);
    const uploadedBrief = files.brief || files.file || files.attachment;
    const uploadedFile = Array.isArray(uploadedBrief) ? uploadedBrief[0] : uploadedBrief;
    const briefFileName = uploadedFile ? uploadedFile.originalFilename || uploadedFile.newFilename : 'None';

    if (!name || !email || !rawMessage) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const smtpUser = process.env.SMTP_USER || DEFAULT_EMAIL;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      res.status(500).json({ error: 'SMTP password not configured' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.RECIPIENT_EMAIL || DEFAULT_EMAIL;
    const subject = `New enquiry from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || ''}`,
      `Size: ${size || ''}`,
      `Budget: ${budget || ''}`,
      `Timeline: ${timeline || ''}`,
      `Preferred channel: ${preferredChannel || ''}`,
      `Attachment: ${briefFileName}`,
      '',
      'Project brief:',
      rawMessage,
    ].join('\n');

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || ''}</p>
      <p><strong>Size:</strong> ${size || ''}</p>
      <p><strong>Budget:</strong> ${budget || ''}</p>
      <p><strong>Timeline:</strong> ${timeline || ''}</p>
      <p><strong>Preferred channel:</strong> ${preferredChannel || ''}</p>
      <p><strong>Attachment:</strong> ${briefFileName}</p>
      <hr />
      <p><strong>Project brief:</strong></p>
      <p>${(rawMessage || '').replace(/\n/g, '<br/>')}</p>
    `;

    const attachments = [];
    if (uploadedFile) {
      const fileContents = await fs.readFile(uploadedFile.filepath);
      attachments.push({
        filename: briefFileName,
        content: fileContents,
        contentType: uploadedFile.mimetype || 'application/octet-stream',
      });
    }

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `EchooRoom Enquiries <${smtpUser}>`,
      replyTo: email,
      to: recipient,
      subject,
      text,
      html,
      attachments,
    });

    console.log('Email sent', info.messageId);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Send mail error', error);
    res.status(500).json({ error: 'Server error' });
  }
}
