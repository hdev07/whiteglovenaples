# Guide: Set Up `info@whiteglovenaples.com` Email (Wix + Zoho + Resend)

This guide walks you through activating professional email at **`info@whiteglovenaples.com`** without buying Google Workspace, using:

| Service | Purpose |
|---------|---------|
| **Wix** | Where the domain is registered and DNS records are managed |
| **Zoho Mail (free)** | Real inbox to receive and send from `info@` |
| **Resend** | Sends contact form submissions from the website |
| **Site hosting** (e.g. Vercel) | Where the Next.js site runs and `RESEND_API_KEY` is stored |

> **Note:** The website does **not** need to be hosted on Wix. Only the domain and its DNS are managed in Wix.

---

## What you will achieve

1. Your client will have an inbox at **`info@whiteglovenaples.com`**.
2. They can **read and reply** to emails from that address (Zoho web or mobile app).
3. When someone submits the **contact form** on [whiteglovenaples.com](https://whiteglovenaples.com), an email arrives at `info@` with all form details.
4. When replying from Zoho, outgoing mail shows as **`info@whiteglovenaples.com`** (if the visitor left an email, **Reply** goes directly to them).

---

## Prerequisites

- [ ] Domain **`whiteglovenaples.com`** connected in Wix.
- [ ] Access to the client's Wix account (domain owner).
- [ ] Access to the site hosting (e.g. Vercel).
- [ ] A personal email for the client (Gmail, etc.) to create Zoho and Resend accounts.
- [ ] Estimated time: **45–90 minutes** (plus DNS propagation, up to 24–48 hours in rare cases).

---

## Part 1 — Create the `info@` inbox with Zoho Mail (free)

### Step 1.1 — Create a Zoho account

1. Go to [https://www.zoho.com/mail/](https://www.zoho.com/mail/).
2. Click **Sign Up Now** or **Get Started**.
3. Choose the **Forever Free** plan (free email with your own domain).
4. Sign up with the client's personal email or one that manages the business.
5. Complete registration and verify Zoho's confirmation email.

### Step 1.2 — Add the domain in Zoho

1. In the Zoho Mail dashboard, go to **Add Domain**.
2. Enter: `whiteglovenaples.com`
3. Zoho will show DNS records to add in Wix (MX, verification TXT, sometimes CNAME).
4. **Keep this screen open** — you will need it for Step 1.3.

### Step 1.3 — Add DNS records in Wix

1. Log in to [Wix](https://www.wix.com/).
2. Go to **Domains** → select **`whiteglovenaples.com`**.
3. Open **DNS Settings** or **Manage DNS Records**.
4. Add **exactly** the records Zoho shows. They typically include:

| Type | Name / Host | Value | Priority |
|------|-------------|-------|----------|
| **TXT** | `@` or blank | Zoho verification code | — |
| **MX** | `@` or blank | `mx.zoho.com` | 10 |
| **MX** | `@` or blank | `mx2.zoho.com` | 20 |
| **MX** | `@` or blank | `mx3.zoho.com` | 50 |
| **TXT** | `@` | `v=spf1 include:zoho.com ~all` | — |

> **Important:** Use the **exact** values shown in your Zoho screen. The table above is illustrative; values may vary by region or panel version.

5. Save each record.
6. Return to Zoho and click **Verify**.
7. If verification fails, wait 15–30 minutes and try again (DNS propagation).

### Step 1.4 — Create the `info@` user

1. In Zoho Mail, go to **Users** → **Add User**.
2. Create the mailbox:
   - **Email:** `info`
   - **Domain:** `whiteglovenaples.com`
   - **Password:** a strong password (store in a password manager).
3. Complete the mailbox setup wizard.
4. Log in at [https://mail.zoho.com](https://mail.zoho.com) with `info@whiteglovenaples.com`.

### Step 1.5 — Test receiving in Zoho

1. From your personal email, send a test message **to** `info@whiteglovenaples.com`.
2. Check the Zoho inbox (and Spam folder).
3. If nothing arrives within 30 minutes, review MX records in Wix (Part 5 — Troubleshooting).

### Step 1.6 — Test sending from Zoho

1. From the `info@` inbox, send an email to your personal address.
2. Confirm the sender shows **`info@whiteglovenaples.com`**.

---

## Part 2 — Configure Resend (website contact form)

The site contact form sends email through **Resend**. Messages are sent **from** and **to** `info@whiteglovenaples.com`, with **Reply-To** set to the visitor's email (if provided).

### Step 2.1 — Create a Resend account

1. Go to [https://resend.com](https://resend.com).
2. Sign up (GitHub or email works).
3. Confirm the verification email.

### Step 2.2 — Add and verify the domain

1. In Resend, go to **Domains** → **Add Domain**.
2. Enter: `whiteglovenaples.com`
3. Resend will show DNS records (usually **DKIM** as TXT/CNAME records and **SPF** guidance).
4. In **Wix → DNS** for the same domain, add those records **without removing** Zoho records.

#### SPF coexistence (Zoho + Resend)

If you already have a Zoho SPF record, **merge them into a single TXT record** at `@`, for example:

```txt
v=spf1 include:zoho.com include:amazonses.com ~all
```

> Resend often uses `include:amazonses.com` in SPF. Confirm the exact value in the Resend dashboard when verifying the domain.

**Rule:** There can only be **one** SPF record (`v=spf1 ...`) per domain. When adding Resend, **edit** the existing record instead of creating a second one.

5. In Resend, click **Verify DNS Records**.
6. Wait until the domain shows as **Verified**.

### Step 2.3 — Create an API key

1. In Resend, go to **API Keys** → **Create API Key**.
2. Suggested name: `whiteglovenaples-contact-form`
3. Permission: **Sending access**.
4. Copy the key (starts with `re_`). **It is only shown once.**

---

## Part 3 — Configure site hosting

The site requires the `RESEND_API_KEY` environment variable.

### Step 3.1 — If using Vercel

1. Open the project in [Vercel](https://vercel.com).
2. Go to **Settings** → **Environment Variables**.
3. Add:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_xxxxxxxx` (your Resend key)
   - **Environments:** Production (and Preview if you want staging tests)
4. Save.
5. Go to **Deployments** → on the latest deploy, **⋯** menu → **Redeploy** to apply the variable.

### Step 3.2 — Local development (optional)

1. In the project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and paste the API key:
   ```env
   RESEND_API_KEY=re_xxxxxxxx
   ```
3. Restart the dev server (`npm run dev`).
4. **Do not commit `.env.local` to Git** (it should be in `.gitignore`).

---

## Part 4 — Test the contact form

### Step 4.1 — Submit a test on the site

1. Open [https://whiteglovenaples.com/#contact](https://whiteglovenaples.com/#contact) (or your staging URL).
2. Fill out the form with test data:
   - Name and phone (required)
   - Email, property type, message (optional)
3. Click **Request My Assessment**.
4. You should see the success message: *"Request received"*.

### Step 4.2 — Confirm email in Zoho

1. Open the `info@whiteglovenaples.com` inbox in Zoho.
2. An email should arrive with a subject like:
   ```
   New Assessment Request — [Client Name]
   ```
3. The body includes: name, phone, email, property type, and message.

### Step 4.3 — Test replying to the customer

1. In Zoho, open the form submission email.
2. Click **Reply**.
3. If the visitor provided an email, the reply should go to **their** address (via the form's Reply-To header).

---

## Part 5 — Troubleshooting

### Form shows "Email service is not configured"

- `RESEND_API_KEY` is missing on hosting.
- Fix: add the variable in Vercel and redeploy.

### Form shows "Failed to send email"

- Domain not verified in Resend.
- Invalid or revoked API key.
- Check **Logs** in Resend → **Emails** for the exact error.

### Emails do not arrive at `info@` (form or manual test)

1. Verify **MX** records in Wix (must point to Zoho).
2. Wait for DNS propagation (up to 24 hours).
3. Check **Spam** in Zoho.
4. Use [https://mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx) → enter `whiteglovenaples.com` → **MX Lookup**.

### Form emails land in Spam

- Complete Resend DKIM and SPF verification in Wix.
- Ensure a single combined SPF record (Zoho + Resend).

### SPF record conflict

- Only one TXT record with `v=spf1` at `@`.
- Combine: `include:zoho.com` + the include Resend provides.

### Wix does not allow DNS editing

- The domain must be **connected** to Wix, not only purchased elsewhere without Wix nameservers.
- If DNS is managed elsewhere, add records **there**, not in Wix.

---

## Quick alternative (forwarding only, no Zoho inbox)

If the client has a **Wix premium plan** and only wants to **receive** mail in personal Gmail (no full `info@` mailbox):

1. In Wix, find **Email Forwarding**.
2. Set `info@whiteglovenaples.com` → client's personal email.
3. **Limitation:** replying "as info@" from Gmail requires extra SMTP setup. For a professional business setup, **Zoho remains the best free option**.

---

## Final checklist

- [ ] Domain verified in Zoho Mail
- [ ] `info@whiteglovenaples.com` user created and accessible
- [ ] Manual send/receive test in Zoho OK
- [ ] Domain verified in Resend (DKIM/SPF)
- [ ] `RESEND_API_KEY` set in Vercel (or hosting)
- [ ] Site redeployed after adding the variable
- [ ] Production contact form test OK
- [ ] Form email arrives in `info@` inbox (not only Spam)

---

## Project technical reference

| Item | Value |
|------|-------|
| Contact email | `info@whiteglovenaples.com` |
| Form endpoint | `POST /api/contact` |
| Environment variable | `RESEND_API_KEY` |
| Site config file | `src/lib/site.ts` |
| Form component | `src/components/CTASection.tsx` |

---

## Support links

- **Zoho Mail:** [https://help.zoho.com/portal/en/kb/mail](https://help.zoho.com/portal/en/kb/mail)
- **Resend:** [https://resend.com/docs](https://resend.com/docs)
- **Wix DNS:** [https://support.wix.com/en/article/editing-dns-records-in-your-wix-account](https://support.wix.com/en/article/editing-dns-records-in-your-wix-account)

*Document prepared for White Glove Exteriors — Devifly*
