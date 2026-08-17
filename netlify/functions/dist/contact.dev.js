"use strict";

var nodemailer = require('nodemailer');

exports.handler = function _callee(event) {
  var data, name, email, company, size, message, transporter, recipient, subject, text, info;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(event.httpMethod !== 'POST')) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", {
            statusCode: 405,
            body: 'Method Not Allowed'
          });

        case 2:
          _context.prev = 2;
          data = JSON.parse(event.body || '{}');
          name = data.name, email = data.email, company = data.company, size = data.size, message = data.message;

          if (!(!name || !email || !message)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            statusCode: 400,
            body: 'Missing required fields'
          });

        case 7:
          // Transport configuration from environment variables
          transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: process.env.SMTP_SECURE === 'true' || false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          });
          recipient = process.env.RECIPIENT_EMAIL || 'theworkwithleo@gmail.com';
          subject = "Website contact from ".concat(name);
          text = "Name: ".concat(name, "\nEmail: ").concat(email, "\nCompany: ").concat(company || '', "\nSize: ").concat(size || '', "\n\nMessage:\n").concat(message);
          _context.next = 13;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "".concat(name, " <").concat(process.env.SMTP_USER, ">"),
            replyTo: email,
            to: recipient,
            subject: subject,
            text: text,
            html: "<p><strong>Name:</strong> ".concat(name, "</p><p><strong>Email:</strong> ").concat(email, "</p><p><strong>Company:</strong> ").concat(company || '', "</p><p><strong>Size:</strong> ").concat(size || '', "</p><hr/><p>").concat(message.replace(/\n/g, '<br/>'), "</p>")
          }));

        case 13:
          info = _context.sent;
          console.log('Email sent', info);
          return _context.abrupt("return", {
            statusCode: 200,
            body: JSON.stringify({
              ok: true
            })
          });

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          console.error('Send mail error', _context.t0);
          return _context.abrupt("return", {
            statusCode: 500,
            body: 'Server error'
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 18]]);
};