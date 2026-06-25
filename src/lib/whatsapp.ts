type AssessmentRequest = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
};

export function formatAssessmentRequestMessage(form: AssessmentRequest): string {
  const lines = [
    "*New EMF Assessment Request*",
    "",
    `*Name:* ${form.name}`,
    `*Phone:* ${form.phone}`,
  ];

  if (form.email.trim()) {
    lines.push(`*Email:* ${form.email.trim()}`);
  }

  if (form.propertyType) {
    lines.push(`*Property Type:* ${form.propertyType}`);
  }

  if (form.message.trim()) {
    lines.push("", "*Message:*", form.message.trim());
  }

  lines.push("", "_Sent via whiteglovenaples.com_");

  return lines.join("\n");
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
