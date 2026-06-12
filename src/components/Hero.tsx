"use client";

import { Phone, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  "Licensed & Certified",
  "Naples, Florida",
  "Dr. Ritter Trained",
  "Same-Week Availability",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0D1117]">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">

        {/* Tag */}
        <motion.p
          {...fade(0.1)}
          className="text-xs font-semibold text-[#5A7A90] uppercase tracking-widest mb-7"
        >
          EMF Assessment &amp; Shielding — Naples, Florida
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fade(0.25)}
          className="text-4xl sm:text-5xl lg:text-[68px] font-semibold text-white leading-[1.06] tracking-tight mb-6"
        >
          Healthy Homes.{" "}
          <span className="block text-[#7EA8BF]">Better Sleep.</span>
          Peace of Mind.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fade(0.4)}
          className="text-base sm:text-lg text-white/45 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Professional EMF Assessments, Shielding Solutions, and Medical-Grade
          Grounding Systems for Florida Families.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.54)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#contact"
            className="btn-light font-semibold text-sm px-8 py-3.5 rounded-lg w-full sm:w-auto"
          >
            Schedule Assessment
            <ChevronRight className="w-4 h-4 inline ml-1.5" />
          </a>
          <a
            href="#videos"
            className="btn-outline-light font-medium text-sm px-8 py-3.5 rounded-lg w-full sm:w-auto"
          >
            <Play className="w-3.5 h-3.5 inline mr-1.5" />
            Watch Real Projects
          </a>
        </motion.div>

        {/* Phone */}
        <motion.a
          {...fade(0.66)}
          href="tel:2393757090"
          className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 transition-colors font-medium mb-14 cursor-pointer text-sm"
        >
          <Phone className="w-4 h-4" />
          239-375-7090
        </motion.a>

        {/* Trust badges */}
        <motion.div
          {...fade(0.78)}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="text-xs text-white/28 font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
