import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (err) {
    console.error('Failed to create data directory:', err);
  }
}

// Company email address destination - strictly configured on the server side
const DESTINATION_EMAIL = process.env.COMPANY_INQUIRY_EMAIL || 'consultretina8@gmail.com';

/**
 * Validates the inquiry input data
 */
export function validateInquiry(data) {
  const errors = {};
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const interest = typeof data.interest === 'string' ? data.interest.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  // Basic international/local phone validation: digits, plus, spaces, hyphens, parentheses (min 7 digits)
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 7) {
    errors.phone = 'Please provide a valid phone or WhatsApp number (minimum 7 digits).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!interest) {
    errors.interest = 'Please select your area of interest.';
  }

  if (!message || message.length < 5) {
    errors.message = 'Please provide details about your questions or academic background (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name,
      phone,
      email,
      interest,
      message,
    }
  };
}

/**
 * Clean phone number to create a valid WhatsApp click-to-chat URL
 */
function getWhatsAppUrl(phone) {
  const cleanNumber = phone.replace(/[^0-9]/g, '');
  return cleanNumber ? `https://wa.me/${cleanNumber}` : null;
}

/**
 * Generates plain text email content
 */
function generatePlainTextEmail(inquiry, timestamp) {
  return `
==================================================
NEW STUDENT INQUIRY - RETINA EDUCATIONAL CONSULTANCY
==================================================

A new student inquiry has been submitted via the website contact form.

STUDENT DETAILS:
--------------------------------------------------
• Full Name:                    ${inquiry.name}
• Phone / WhatsApp Number:     ${inquiry.phone}
• Email Address:               ${inquiry.email}
• Area of Interest:            ${inquiry.interest}

QUESTIONS / ACADEMIC BACKGROUND:
--------------------------------------------------
${inquiry.message}

--------------------------------------------------
Submitted on: ${timestamp}
Destination:  ${DESTINATION_EMAIL}
Reply-To:     ${inquiry.name} <${inquiry.email}>
==================================================
`.trim();
}

/**
 * Generates an executive, responsive HTML email template
 */
function generateHtmlEmail(inquiry, timestamp) {
  const waUrl = getWhatsAppUrl(inquiry.phone);
  const cleanTel = inquiry.phone.replace(/[^0-9+]/g, '');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Student Inquiry - Retina Educational Consultancy</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #102A43;
      background-color: #F8FAFC;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      max-width: 620px;
      margin: 24px auto;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(14, 75, 164, 0.06);
    }
    .header {
      background: linear-gradient(135deg, #0E4BA4 0%, #0A3B82 100%);
      padding: 32px 28px;
      color: #FFFFFF;
      text-align: left;
    }
    .header h1 {
      margin: 0 0 6px 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .header p {
      margin: 0;
      font-size: 13px;
      color: #E2E8F0;
      font-weight: 400;
    }
    .badge {
      display: inline-block;
      background: rgba(255, 145, 77, 0.2);
      border: 1px solid #FF914D;
      color: #FF914D;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }
    .content {
      padding: 28px;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .info-table td {
      padding: 12px 14px;
      border-bottom: 1px solid #F1F5F9;
      font-size: 14px;
      vertical-align: top;
    }
    .label {
      width: 38%;
      color: #627D98;
      font-weight: 600;
    }
    .value {
      width: 62%;
      color: #102A43;
      font-weight: 500;
    }
    .interest-pill {
      background: #EEF4FF;
      color: #0E4BA4;
      padding: 4px 10px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      display: inline-block;
    }
    .message-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-left: 4px solid #0E4BA4;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .message-box h3 {
      margin: 0 0 8px 0;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0E4BA4;
      font-weight: 700;
    }
    .message-box p {
      margin: 0;
      font-size: 14px;
      color: #334E68;
      white-space: pre-wrap;
      line-height: 1.6;
    }
    .actions {
      padding-top: 8px;
      margin-bottom: 24px;
    }
    .button {
      display: inline-block;
      padding: 11px 20px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      border-radius: 8px;
      margin-right: 10px;
      margin-bottom: 8px;
    }
    .button-primary {
      background: #0E4BA4;
      color: #FFFFFF !important;
    }
    .button-whatsapp {
      background: #10B981;
      color: #FFFFFF !important;
    }
    .footer {
      background: #F1F5F9;
      padding: 18px 28px;
      text-align: center;
      font-size: 12px;
      color: #627D98;
      border-top: 1px solid #E2E8F0;
    }
    .footer a {
      color: #0E4BA4;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <span class="badge">Official Website Inquiry</span>
      <h1>New Student Inquiry Received</h1>
      <p>Submitted via Retina Educational Consultancy Website</p>
    </div>

    <div class="content">
      <table class="info-table">
        <tr>
          <td class="label">Full Name:</td>
          <td class="value"><strong>${inquiry.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp:</td>
          <td class="value">
            <a href="tel:${cleanTel}" style="color: #0E4BA4; text-decoration: none; font-weight: 600;">
              ${inquiry.phone}
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td class="value">
            <a href="mailto:${inquiry.email}" style="color: #0E4BA4; text-decoration: none;">
              ${inquiry.email}
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Area of Interest:</td>
          <td class="value">
            <span class="interest-pill">${inquiry.interest}</span>
          </td>
        </tr>
        <tr>
          <td class="label">Submission Time:</td>
          <td class="value" style="color: #627D98; font-size: 13px;">${timestamp}</td>
        </tr>
      </table>

      <div class="message-box">
        <h3>Questions / Academic Background:</h3>
        <p>${inquiry.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>

      <div class="actions">
        <a href="mailto:${inquiry.email}?subject=${encodeURIComponent(`Re: Your Inquiry on ${inquiry.interest} - Retina Educational Consultancy`)}" class="button button-primary">
          ✉️ Reply via Email
        </a>
        ${
          waUrl
            ? `<a href="${waUrl}" target="_blank" class="button button-whatsapp">💬 Chat on WhatsApp</a>`
            : ''
        }
      </div>
    </div>

    <div class="footer">
      <strong>Retina Educational Consultancy Pvt. Ltd.</strong><br>
      New Plaza, Putalisadak-29, Kathmandu, Nepal &bull; Tel: 01-4547423<br>
      Delivered directly to: <strong>${DESTINATION_EMAIL}</strong>
    </div>
  </div>
</body>
</html>
`.trim();
}

/**
 * Saves lead locally to data/inquiries.json
 */
function archiveInquiryLocally(inquiry, timestamp) {
  try {
    let list = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      const fileData = fs.readFileSync(INQUIRIES_FILE, 'utf8');
      list = JSON.parse(fileData);
      if (!Array.isArray(list)) list = [];
    }
    const entry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      timestamp,
      destination: DESTINATION_EMAIL,
      ...inquiry
    };
    list.unshift(entry);
    // Keep max 500 inquiries
    if (list.length > 500) list = list.slice(0, 500);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf8');
    return entry;
  } catch (err) {
    console.error('Failed to archive inquiry locally:', err);
    return null;
  }
}

/**
 * Sends email using Nodemailer SMTP transport if configured
 */
async function sendViaNodemailer(inquiry, timestamp) {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || (process.env.SMTP_SECURE === 'false' ? '587' : '465'), 10);
  const secure = process.env.SMTP_SECURE !== 'false';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return {
      configured: false,
      message: 'SMTP credentials not configured in environment variables'
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    // Useful for local testing with self-signed certificates
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Retina Inquiry System" <${user}>`,
    to: DESTINATION_EMAIL,
    replyTo: `"${inquiry.name}" <${inquiry.email}>`,
    subject: `🎓 New Student Inquiry: ${inquiry.name} (${inquiry.interest})`,
    text: generatePlainTextEmail(inquiry, timestamp),
    html: generateHtmlEmail(inquiry, timestamp)
  };

  const info = await transporter.sendMail(mailOptions);
  return {
    configured: true,
    success: true,
    messageId: info.messageId
  };
}

/**
 * Handles the complete inquiry processing
 */
export async function processInquiry(rawPayload) {
  // 1. Validate
  const validation = validateInquiry(rawPayload);
  if (!validation.isValid) {
    return {
      status: 400,
      body: {
        success: false,
        error: 'Validation failed',
        fieldErrors: validation.errors
      }
    };
  }

  const inquiry = validation.sanitized;
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  // 2. Always archive locally so lead is never lost
  const archivedEntry = archiveInquiryLocally(inquiry, timestamp);

  console.log('----------------------------------------------------');
  console.log(`[NEW INQUIRY RECEIVED FOR ${DESTINATION_EMAIL}]`);
  console.log(`Student:   ${inquiry.name}`);
  console.log(`Phone/WA:  ${inquiry.phone}`);
  console.log(`Email:     ${inquiry.email}`);
  console.log(`Interest:  ${inquiry.interest}`);
  console.log(`Timestamp: ${timestamp}`);
  console.log('----------------------------------------------------');

  // 3. Dispatch Email via SMTP
  try {
    const smtpResult = await sendViaNodemailer(inquiry, timestamp);
    if (smtpResult.configured) {
      console.log(`[EMAIL DISPATCHED] Email successfully sent to ${DESTINATION_EMAIL} (Message ID: ${smtpResult.messageId})`);
      return {
        status: 200,
        body: {
          success: true,
          message: 'Your inquiry has been sent directly to consultretina8@gmail.com. Our team will contact you shortly.',
          id: archivedEntry?.id
        }
      };
    } else {
      console.log(`[SMTP NOTICE] ${smtpResult.message}. Inquiry archived locally in data/inquiries.json.`);
      return {
        status: 200,
        body: {
          success: true,
          message: 'Your inquiry has been successfully received. Our medical counseling team will review it and connect with you shortly.',
          id: archivedEntry?.id
        }
      };
    }
  } catch (emailErr) {
    console.error(`[EMAIL DISPATCH ERROR] Failed to send email via SMTP to ${DESTINATION_EMAIL}:`, emailErr);
    
    // We still have the lead archived in data/inquiries.json
    return {
      status: 200,
      body: {
        success: true,
        message: 'Your inquiry has been received and safely logged for our counselors. We will be in touch shortly.',
        id: archivedEntry?.id
      }
    };
  }
}
