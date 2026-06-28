# Client Guide: Set Up Your info@whiteglovenaples.com Email

**For:** White Glove Exteriors owner  
**Level:** No tech experience needed — just follow the steps  
**Estimated time:** About 1 hour (plus DNS wait time, up to 24 hours)

---

## What will we accomplish?

When you finish, you will have:

- A professional email address: **info@whiteglovenaples.com**
- An inbox where you **receive** customer messages (including from your website contact form)
- The ability to **reply** from that same address, so customers see `info@whiteglovenaples.com` — not your personal Gmail

### Why are we doing this?

| What you want | How we get it |
|---------------|---------------|
| Form submissions from your website to reach you | Your developer connects the site; you activate the `info@` inbox |
| Email that looks professional | Zoho Mail (free) creates the mailbox on your domain |
| Avoid paying for Google Workspace | We use free Zoho Mail instead of Google |

> **Important:** Your developer (Devifly) will set up the **website** side. **You** only need to complete this guide to get your `info@` email working.

---

## What YOU need to do (summary)

1. Create a free **Zoho Mail** account
2. Connect your domain **whiteglovenaples.com** (it's on Wix)
3. Add a few records in **Wix** (copy and paste — we guide you)
4. Create the **info@** user
5. Test that you can receive and send email

**You do NOT need:** to install software, know how to code, or buy Google Workspace.

---

## Before you start — have these ready

- [ ] Your **Wix** username and password (where you bought the domain)
- [ ] A personal email (Gmail, Yahoo, etc.) to create your Zoho account
- [ ] Paper or notes to save your **info@ password**
- [ ] A phone or computer with internet

If you forgot your Wix login, recover it first: [wix.com](https://www.wix.com) → **Log In** → **Forgot password?**

---

## STEP 1 — Create your Zoho Mail account

### Why?

Zoho is the **free** service that gives you a real mailbox with your domain (`info@whiteglovenaples.com`). Without this, `info@` doesn't exist and form messages have nowhere to go.

### What to do

1. Open in your browser: **https://www.zoho.com/mail/**
2. Look for **Sign Up** or the **Forever Free** plan (free forever).
3. Fill out the form with:
   - Your name
   - A personal email (to activate the account)
   - A password for Zoho
4. Check your personal email and click the **verification** link from Zoho.
5. Log in to Zoho when prompted.

### ✅ Done when…

You are inside the Zoho Mail dashboard (you'll see options like "Add Domain").

---

## STEP 2 — Add your domain in Zoho

### Why?

You tell Zoho: *"I want to use whiteglovenaples.com for my email."* Zoho will give you codes to put in Wix to prove the domain is yours.

### What to do

1. In Zoho, click **Add Domain**.
2. Type exactly: `whiteglovenaples.com`
3. Zoho will show a screen with **DNS records** (tables with Type, Name, Value).
4. **Do not close this screen.** Leave it open in a browser tab.
5. Open another tab and log in to **Wix** (Step 3).

### ✅ Done when…

Zoho shows pending records and you have Wix open in another tab.

---

## STEP 3 — Add records in Wix (copy and paste)

### Why?

Your domain lives on **Wix**. Zoho needs permission (via DNS) to receive mail at `@whiteglovenaples.com`. Think of it like giving the mail carrier the correct address — without these records, mail won't reach your inbox.

### What to do

1. In **Wix**, go to:
   - **Domains**
   - Select **whiteglovenaples.com**
   - Look for **DNS** / **DNS Settings** / **Manage DNS Records**
2. You'll see a list of records or an **Add Record** button.
3. For **each row** Zoho shows, create a record in Wix:

   | Zoho says | In Wix choose |
   |-----------|---------------|
   | TXT | Type: **TXT** |
   | MX | Type: **MX** |
   | CNAME | Type: **CNAME** |

4. Copy the **Name/Host** and **Value** from Zoho and paste them into Wix **exactly** (no extra spaces).
5. If Zoho asks for **Priority** on an MX record, use the number shown (e.g. 10, 20).
6. Save each record.
7. Go back to the **Zoho** tab and click **Verify**.

### If verification fails

- **That's normal** at first. Internet updates can take **15 minutes to 24 hours**.
- Wait 30 minutes and click **Verify** again in Zoho.
- Double-check you copied values **with no typos** (one wrong letter breaks it).

### ⚠️ Very important

- **Do not delete** existing records in Wix if you don't know what they're for. If your developer sends you extra records (for the website form), **add them** without removing Zoho's records.
- If unsure, **take a screenshot** and send it to your developer before deleting anything.

### ✅ Done when…

Zoho shows the domain as **Verified** (green check or success message).

---

## STEP 4 — Create your info@ email

### Why?

You've connected the domain. Now you create the **actual account** you'll use every day: `info@whiteglovenaples.com`.

### What to do

1. In Zoho, find **Users** → **Add User**.
2. Fill in:
   - **Name:** Info (or your business name)
   - **Email:** `info` (Zoho adds `@whiteglovenaples.com` automatically)
   - **Password:** create a **strong** password and **write it down** somewhere safe
3. Finish the setup wizard.
4. Open **https://mail.zoho.com** and log in with:
   - Email: `info@whiteglovenaples.com`
   - The password you created

### ✅ Done when…

You can see the inbox (empty or with welcome messages) for `info@`.

---

## STEP 5 — Test that everything works

### Why?

Confirming receive and send works **before** relying on the website form prevents surprises later.

### Test A — Receive email

1. From your **personal email** (Gmail, etc.), send a message to:  
   **info@whiteglovenaples.com**  
   Subject: `Test`  
   Message: `Hello, this is a test`
2. Wait up to **10 minutes**.
3. Check your Zoho inbox at `mail.zoho.com`. Also check **Spam**.

**Did it arrive?** ✅ Great.  
**Didn't arrive?** Wait 1 hour and try again. If it still fails, contact your developer with a screenshot of your Wix DNS records.

### Test B — Send email

1. From Zoho (`info@`), send an email to your personal address.
2. In your personal inbox, confirm the sender shows **info@whiteglovenaples.com**.

**Looks good?** ✅ You now have professional email active.

---

## STEP 6 — What your developer does (you don't need to do this)

For your website **contact form** to send messages to `info@`, your developer will set up:

- **Resend** (automatic sending from the website)
- Additional DNS records in Wix (they may ask you to add them the same way as Step 3)
- The connection on the server where your website is hosted

**You only need to:**

1. Complete Steps 1–5 in this guide
2. If your developer sends you **more DNS records for Wix**, add them like in Step 3 (copy and paste)
3. Let them know when `info@` already receives and sends mail correctly

---

## STEP 7 — Using your email day to day

### Receiving messages from the website form

When someone fills out the form on **whiteglovenaples.com**, you'll get an email at `info@` with:

- Customer name
- Phone number
- Email (if they provided it)
- Property type
- Message

The subject will look like: **New Assessment Request — [Name]**

### Replying to a customer

1. Open the email in Zoho.
2. Click **Reply**.
3. Write your response and send.

The customer will see you replied from **info@whiteglovenaples.com** (professional).

### Access from your phone

1. Download the **Zoho Mail** app (App Store or Google Play).
2. Log in with `info@whiteglovenaples.com` and your password.

---

## Final checklist

Check off each item when done:

- [ ] Zoho account created and verified
- [ ] Domain `whiteglovenaples.com` verified in Zoho
- [ ] DNS records added in Wix
- [ ] User `info@whiteglovenaples.com` created
- [ ] **Receive** email test — OK
- [ ] **Send** email test — OK
- [ ] `info@` password saved in a safe place
- [ ] Developer notified that email is ready

---

## Common problems (in plain language)

| Problem | What it means | What to do |
|---------|---------------|------------|
| Zoho won't verify the domain | The internet hasn't updated the records yet | Wait 30 min – 24 h and verify again |
| Mail doesn't arrive at info@ | The "mail carrier" doesn't know where to deliver | Review MX records in Wix with your developer |
| Emails in Spam | The filter flagged them | Check Spam folder; mark as "Not spam" |
| Forgot info@ password | — | Use Zoho password recovery or ask your account admin |
| Can't find DNS in Wix | Menus vary by Wix version | Search Wix help for "DNS" or ask your developer for a 10-min call |

---

## Need help?

**Contact your developer (Devifly)** if:

- You can't log in to Wix
- Zoho won't verify the domain after 24 hours
- You're not sure whether to delete a DNS record
- The website form doesn't send you email (after manual tests to info@ already work)

**Before you call, prepare:**

- Screenshots of Wix (DNS records)
- Screenshot of Zoho (domain status)
- Exact time you sent your test email

---

## Glossary (words you might see)

| Word | Simple meaning |
|------|----------------|
| **Domain** | Your address on the internet: whiteglovenaples.com |
| **DNS** | The internet "phone book" that says where mail should go |
| **MX** | Record that tells where to receive email |
| **Inbox** | Your mailbox |
| **Wix** | Where you bought and manage your domain |
| **Zoho Mail** | Where you read and send info@ email |

---

*Guide prepared for White Glove Exteriors — Devifly*  
*Your website: https://whiteglovenaples.com*  
*Your professional email: info@whiteglovenaples.com*
