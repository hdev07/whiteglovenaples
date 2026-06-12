"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to form submission endpoint (e.g. Formspree, Netlify Forms, or custom API)
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold text-[#5A7A90] uppercase tracking-widest mb-4">
            Book Your Assessment
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white mb-5 tracking-tight">
            Protect What Matters Most
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            Schedule your EMF assessment today. Same-week availability throughout
            Naples and Southwest Florida.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — form */}
          <FadeIn delay={0.1}>
            <div className="bg-white/4 border border-white/10 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-white/60 mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-white mb-3">Request Received</h3>
                  <p className="text-white/45 leading-relaxed">
                    Thank you! We&apos;ll be in touch within one business day to confirm
                    your assessment time.
                  </p>
                  <p className="text-white font-semibold mt-5">239-375-7090</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-6">Schedule Your Assessment</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/45 uppercase tracking-wide mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/45 uppercase tracking-wide mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(239) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/45 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/45 uppercase tracking-wide mb-1.5">
                      Property Address / City
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Naples, FL"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/45 uppercase tracking-wide mb-1.5">
                      Tell Us About Your Situation
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="New home, sleep concerns, smart meter, cell tower nearby..."
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-light w-full font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Request My Assessment
                  </button>

                  <p className="text-xs text-white/25 text-center">
                    We respond within one business day · No spam · Your info is private
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Right — contact info */}
          <FadeIn delay={0.2} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-5">Prefer to Call?</h3>
              <a
                href="tel:2393757090"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-white/60" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white group-hover:text-white/80 transition-colors">
                    239-375-7090
                  </p>
                  <p className="text-sm text-white/35">Mon–Fri 8am–6pm · Same-week availability</p>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-white/60 font-medium text-sm">Service Area</p>
                  <p className="text-white/35 text-sm">Naples · Bonita Springs · Marco Island · Fort Myers · SW Florida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-white/60 font-medium text-sm">Email</p>
                  <a
                    href="mailto:info@whiteglovenaples.com"
                    className="text-white/35 text-sm hover:text-white/60 transition-colors"
                  >
                    info@whiteglovenaples.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 pt-8 space-y-3">
              {[
                "Professional assessment using calibrated instruments",
                "Trained in Dr. Carlos Ritter's protocols",
                "Comprehensive written report included",
                "Local Florida team — not a national franchise",
                "Follow-up support and verification testing",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-white/25 mt-2 shrink-0" />
                  <span className="text-white/35 text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
