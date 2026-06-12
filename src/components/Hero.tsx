"use client";

import { Phone, ChevronRight, Play } from "lucide-react";

const trustBadges = [
  "Licensed & Certified",
  "Naples, Florida",
  "Dr. Ritter Trained",
  "Same-Week Availability",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">

      {/* 2 clean rings — no particles, no spinning dashes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative" style={{ width: "min(700px, 92vw)", height: "min(700px, 92vw)" }}>
          <div className="hero-energy-ring w-full h-full animate-pulse-shield" style={{ animationDelay: "0s" }} />
          <div
            className="hero-energy-ring w-[56%] h-[56%] animate-pulse-shield"
            style={{ animationDelay: "1.1s", borderColor: "rgba(255,255,255,0.1)" }}
          />
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-44 h-44 rounded-full animate-glow-breathe"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/8 mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
            EMF Assessment &amp; Shielding — Naples, Florida
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Healthy Homes.{" "}
          <span className="block text-gradient">Better Sleep.</span>
          Peace of Mind.
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          Professional EMF Assessments, Shielding Solutions, and Medical-Grade
          Grounding Systems for Florida Families.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <a
            href="#contact"
            className="btn-electric cursor-pointer text-white font-bold text-base px-8 py-4 rounded-xl gap-2 w-full sm:w-auto"
          >
            Schedule Assessment
            <ChevronRight className="w-4 h-4 inline ml-1" />
          </a>
          <a
            href="#videos"
            className="btn-outline-electric cursor-pointer font-semibold text-base px-8 py-4 rounded-xl gap-2 w-full sm:w-auto"
          >
            <Play className="w-4 h-4 inline mr-1" />
            Watch Real Projects
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:2393757090"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-lg mb-12 animate-fade-up cursor-pointer"
          style={{ animationDelay: "0.72s", opacity: 0 }}
        >
          <Phone className="w-5 h-5" />
          239-375-7090
        </a>

        {/* Trust badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.85s", opacity: 0 }}
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs font-medium text-slate-400 border border-slate-700/60 rounded-full bg-white/3"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-float">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-sky-500/60 to-transparent" />
      </div>
    </section>
  );
}
