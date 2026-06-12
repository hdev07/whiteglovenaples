"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

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
    <section id="contact" className="relative py-24 lg:py-32 grid-pattern overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" aria-hidden="true" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
              Book Your Assessment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Protect What{" "}
            <span className="text-gradient">Matters Most</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Schedule your EMF assessment today. Same-week availability throughout
            Naples and Southwest Florida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — form */}
          <div className="glass-card rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-sky-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                <p className="text-slate-400 leading-relaxed">
                  Thank you! We&apos;ll be in touch within one business day to confirm
                  your assessment time.
                </p>
                <p className="text-sky-400 font-semibold mt-4">239-375-7090</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6">Schedule Your Assessment</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-sky-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(239) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-sky-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-sky-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Property Address / City
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Naples, FL"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-sky-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="New home, sleep concerns, smart meter, cell tower nearby..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-sky-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-electric w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Request My Assessment
                </button>

                <p className="text-xs text-slate-600 text-center">
                  We respond within one business day · No spam · Your info is private
                </p>
              </form>
            )}
          </div>

          {/* Right — contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Prefer to Call?
              </h3>
              <a
                href="tel:2393757090"
                className="flex items-center gap-3 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 animate-glow-breathe">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">239-375-7090</p>
                  <p className="text-sm text-slate-500">Mon–Fri 8am–6pm · Same-week availability</p>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/8 border border-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Service Area</p>
                  <p className="text-slate-400 text-sm">Naples · Bonita Springs · Marco Island · Fort Myers · SW Florida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/8 border border-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a
                    href="mailto:info@whiteglovenaples.com"
                    className="text-sky-400 text-sm hover:text-sky-300 transition-colors"
                  >
                    info@whiteglovenaples.com
                  </a>
                </div>
              </div>
            </div>

            {/* Trust items */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              {[
                "Professional assessment using calibrated instruments",
                "Trained in Dr. Carlos Ritter's protocols",
                "Comprehensive written report included",
                "Local Florida team — not a national franchise",
                "Follow-up support and verification testing",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
