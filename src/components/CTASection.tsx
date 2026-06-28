"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";
import type { ContactFormData } from "@/lib/contact-form";

const propertyTypes = [
  "Single-family home",
  "New construction",
  "Renovation",
  "Condo / townhome",
  "Estate / luxury home",
  "Other",
];

const points = [
  "Professional assessment using calibrated instruments",
  "Comprehensive written report included",
  "Local Florida team — not a national franchise",
  "Follow-up support and verification testing",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(255,255,255,0.1)] text-white placeholder-[#7D8BA0] focus:outline-none focus:border-[#49B4FF]/60 focus:bg-white/8 transition-all text-sm";

export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[80vw] max-w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,140,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">Book Your Assessment</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-medium text-white leading-tight text-glow mb-5">
            Protect what matters most
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Schedule your EMF assessment today. Same-week availability throughout Naples
            and Southwest Florida.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-[24px] p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-[#5BCB91] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-white mb-3">Request received</h3>
                  <p className="text-[#AAB8C8] leading-relaxed">
                    Thank you! Your request was sent to {site.email}. We&apos;ll be in touch
                    within one business day to confirm your assessment time.
                  </p>
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-block text-[#49B4FF] font-semibold mt-5"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Schedule your assessment
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#AAB8C8] uppercase tracking-wide mb-1.5">
                        Name *
                      </label>
                      <input id="name" type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-[#AAB8C8] uppercase tracking-wide mb-1.5">
                        Phone *
                      </label>
                      <input id="phone" type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(239) 000-0000" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#AAB8C8] uppercase tracking-wide mb-1.5">
                      Email
                    </label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-medium text-[#AAB8C8] uppercase tracking-wide mb-1.5">
                      Property Type
                    </label>
                    <select id="propertyType" name="propertyType" value={form.propertyType} onChange={handleChange} className={`${inputClass} appearance-none`}>
                      <option value="" className="bg-surface">Select one…</option>
                      {propertyTypes.map((t) => (
                        <option key={t} value={t} className="bg-surface">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#AAB8C8] uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="New home, sleep concerns, smart meter, cell tower nearby…" className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-blue w-full py-4 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending…" : "Request My Assessment"}
                  </button>

                  {error ? (
                    <p className="text-xs text-red-400 text-center" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <p className="text-xs text-[#7D8BA0] text-center">
                    We respond within one business day · No spam · Your info is private
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact info */}
          <FadeIn delay={0.2} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-5">Prefer to call?</h3>
              <a href={`tel:${site.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#49B4FF]" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-white group-hover:text-[#49B4FF] transition-colors">
                    {site.phoneDisplay}
                  </p>
                  <p className="text-sm text-[#7D8BA0]">Mon–Sat 8am–6pm · Same-week availability</p>
                </div>
              </a>
              <a href={`tel:${site.phone}`} className="btn btn-outline text-sm px-6 py-3 rounded-xl mt-5">
                Call Now
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#7D8BA0]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Service Area</p>
                  <p className="text-[#7D8BA0] text-sm">Naples · Bonita Springs · Marco Island · Fort Myers · SW Florida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#7D8BA0]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a href={`mailto:${site.email}`} className="text-[#7D8BA0] text-sm hover:text-[#49B4FF] transition-colors">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] mt-2 shrink-0 shadow-[0_0_8px_rgba(0,209,255,0.9)]" />
                  <span className="text-[#AAB8C8] text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
