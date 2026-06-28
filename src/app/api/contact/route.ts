import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  formatContactEmailHtml,
  formatContactEmailSubject,
  formatContactEmailText,
  isValidContactForm,
  type ContactFormData,
} from "@/lib/contact-form";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  let body: ContactFormData;

  try {
    body = (await request.json()) as ContactFormData;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isValidContactForm(body)) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const form: ContactFormData = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    propertyType: body.propertyType.trim(),
    message: body.message.trim(),
  };

  const fromEmail = process.env.RESEND_FROM_EMAIL ?? site.contact.fromEmail;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? site.email;
  const fromName = process.env.RESEND_FROM_NAME ?? site.contact.fromName;

  const { error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: [notifyEmail],
    replyTo: form.email || undefined,
    subject: formatContactEmailSubject(form.name),
    text: formatContactEmailText(form),
    html: formatContactEmailHtml(form),
  });

  if (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
