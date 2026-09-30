# Retina Educational Consultancy — Inquiry Form & Email Service Setup

This documentation explains the backend email architecture implemented for the **“Send an Inquiry”** form.

---

## 🔒 Security & Architecture Overview

1. **Frontend Isolation**:
   - The frontend form ([src/components/ContactForm.jsx](file:///src/components/ContactForm.jsx)) submits asynchronously to `/api/send-inquiry`.
   - **Company email credentials, passwords, and API keys are NEVER bundled or exposed in frontend code.**
   - No `mailto:` popups or redirects to user email clients are used.

2. **Backend Dispatch**:
   - Inquiries are processed server-side via [server/emailService.js](file:///server/emailService.js) and [server/sendInquiryHandler.js](file:///server/sendInquiryHandler.js).
   - The destination address is set to `consultretina8@gmail.com`.
   - Dispatches both responsive HTML and plain-text email with the student's details, click-to-call link, WhatsApp direct link, and `Reply-To` set to the student's email.
   - Every inquiry is safely backed up to `data/inquiries.json` (ignored in `.gitignore`) so zero leads are ever lost.

---

## 📧 How to Enable Live Email Delivery via Gmail SMTP

To send emails directly from `consultretina8@gmail.com` using Google's secure SMTP:

1. Log in to the Google Account for `consultretina8@gmail.com`.
2. Go to **Google Account Settings** -> **Security** ([https://myaccount.google.com/security](https://myaccount.google.com/security)).
3. Ensure **2-Step Verification** is turned ON.
4. Search for **App passwords** or go directly to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
5. Create a new app password named **"Retina Website"**.
6. Google will generate a 16-character code (e.g. `abcd efgh ijkl mnop`).
7. Open `.env` in the project root and add the password:
   ```env
   COMPANY_INQUIRY_EMAIL=consultretina8@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=consultretina8@gmail.com
   SMTP_PASS=abcdefghijklmnop
   SMTP_FROM="Retina Admissions Desk" <consultretina8@gmail.com>
   ```
8. Save `.env`. The backend will immediately start sending all inquiries directly to `consultretina8@gmail.com` via Google SMTP.

---

## 🚀 Running Locally & in Production

- **Development (`npm run dev`)**:
  Vite includes a custom dev middleware plugin that automatically handles `POST /api/send-inquiry`.

- **Production Node Server (`npm run build && npm start`)**:
  Builds the site and starts the Node server on port 3000 (or `PORT` env var).

- **Serverless (Vercel / Netlify)**:
  The file [api/send-inquiry.js](file:///api/send-inquiry.js) is pre-configured and automatically recognized as a serverless function endpoint when deployed to Vercel or Netlify. Add your `.env` variables to the Vercel/Netlify dashboard under Project Settings -> Environment Variables.

---

## 📋 Inquiry Fields Sent in the Email

| Field | Description |
|---|---|
| **Full Name** | Visitor's full name (validated min 2 characters) |
| **Phone / WhatsApp** | Contact number with direct click-to-call and WhatsApp links |
| **Email Address** | Visitor's email address (with `Reply-To` header set) |
| **Area of Interest** | Selected course/destination program (e.g. Bangladesh Medical Admissions) |
| **Questions / Background** | Complete message / 10+2 / CEE scores entered by the student |
| **Submission Timestamp** | Nepal local time (Asia/Kathmandu) |
