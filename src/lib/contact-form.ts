export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
};

export function formatContactEmailSubject(name: string): string {
  return `New Assessment Request — ${name}`;
}

export function formatContactEmailText(form: ContactFormData): string {
  const lines = [
    "New EMF Assessment Request",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
  ];

  if (form.email.trim()) {
    lines.push(`Email: ${form.email.trim()}`);
  }

  if (form.propertyType) {
    lines.push(`Property Type: ${form.propertyType}`);
  }

  if (form.message.trim()) {
    lines.push("", "Message:", form.message.trim());
  }

  lines.push("", "Sent via whiteglovenaples.com contact form");

  return lines.join("\n");
}

export function formatContactEmailHtml(form: ContactFormData): string {
  const rows = [
    ["Name", form.name],
    ["Phone", form.phone],
  ];

  if (form.email.trim()) {
    rows.push(["Email", form.email.trim()]);
  }

  if (form.propertyType) {
    rows.push(["Property Type", form.propertyType]);
  }

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#64748b;font-size:14px;vertical-align:top;">${label}</td><td style="padding:8px 0;font-size:14px;color:#0f172a;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const messageBlock = form.message.trim()
    ? `<p style="margin:24px 0 8px;font-size:14px;color:#64748b;">Message</p><p style="margin:0;font-size:14px;color:#0f172a;white-space:pre-wrap;">${escapeHtml(form.message.trim())}</p>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;color:#0f172a;">
      <h2 style="margin:0 0 20px;font-size:20px;">New EMF Assessment Request</h2>
      <table style="border-collapse:collapse;width:100%;">${tableRows}</table>
      ${messageBlock}
      <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">Sent via whiteglovenaples.com contact form</p>
    </div>
  `.trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function isValidContactForm(data: ContactFormData): boolean {
  return Boolean(data.name.trim() && data.phone.trim());
}
