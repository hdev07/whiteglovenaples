"use client";

import { useEffect, useRef } from "react";
import { Phone, ChevronRight, Play } from "lucide-react";

const trustBadges = [
  "Licensed & Certified",
  "Naples, Florida",
  "Dr. Ritter Trained",
  "Same-Week Availability",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background video / image */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-bg/70 via-brand-bg/55 to-brand-bg/90" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-bg/50 via-transparent to-brand-bg/50" />

      {/* Energy field rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative w-175 h-175 max-w-[95vw] max-h-[95vw]">
          {/* Outer rings */}
          <div className="hero-energy-ring w-full h-full animate-pulse-shield" style={{ animationDelay: "0s" }} />
          <div className="hero-energy-ring w-[82%] h-[82%] animate-pulse-shield" style={{ animationDelay: "0.6s", borderColor: "rgba(14,165,233,0.3)" }} />
          <div className="hero-energy-ring w-[64%] h-[64%] animate-pulse-shield" style={{ animationDelay: "1.2s", borderColor: "rgba(14,165,233,0.4)" }} />
          <div className="hero-energy-ring w-[46%] h-[46%] animate-pulse-shield" style={{ animationDelay: "1.8s", borderColor: "rgba(56,189,248,0.35)" }} />

          {/* Rotating dashed ring */}
          <div
            className="hero-energy-ring w-[90%] h-[90%] animate-spin-slow"
            style={{
              borderStyle: "dashed",
              borderColor: "rgba(14,165,233,0.15)",
            }}
          />
          <div
            className="hero-energy-ring w-[72%] h-[72%] animate-counter-spin"
            style={{
              borderStyle: "dashed",
              borderColor: "rgba(56,189,248,0.1)",
            }}
          />

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-40 h-40 rounded-full animate-glow-breathe"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Floating particles */}
          {[
            { top: "18%", left: "20%", delay: "0s", size: 3 },
            { top: "12%", left: "65%", delay: "1.5s", size: 2 },
            { top: "75%", left: "15%", delay: "3s", size: 2 },
            { top: "80%", left: "72%", delay: "0.8s", size: 3 },
            { top: "45%", left: "8%", delay: "2.2s", size: 2 },
            { top: "35%", left: "88%", delay: "1s", size: 2 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-sky-400 animate-particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                boxShadow: `0 0 ${p.size * 3}px rgba(56,189,248,0.8)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/8 mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
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
            className="btn-electric text-white font-bold text-base px-8 py-4 rounded-xl gap-2 w-full sm:w-auto"
          >
            Schedule Assessment
            <ChevronRight className="w-4 h-4 inline ml-1" />
          </a>
          <a
            href="#videos"
            className="btn-outline-electric font-semibold text-base px-8 py-4 rounded-xl gap-2 w-full sm:w-auto"
          >
            <Play className="w-4 h-4 inline mr-1" />
            Watch Real Projects
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:2393757090"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-lg mb-12 animate-fade-up"
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
