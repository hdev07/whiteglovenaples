"use client";

import Image from "next/image";
import { ChevronRight, Calendar, ShieldCheck, Shield, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "EMF Assessments",
    description: "Advanced testing you can trust.",
  },
  {
    icon: Shield,
    title: "Shielding Solutions",
    description: "Proven protection for your home.",
  },
  {
    icon: Zap,
    title: "Medical-Grade Grounding Systems",
    description: "Restore balance. Support wellness.",
  },
];

const fade = (delay: number, reduce: boolean | null) => ({
  initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden bg-bg"
    >
      {/* Background image — energy dome + waves are baked into the artwork */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Luxury Florida home protected by an EMF shielding dome at dusk"
          fill
          priority
          className="object-cover object-right lg:object-center"
          sizes="100vw"
        />
        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/70 to-transparent" />
        {/* Bottom gradient for feature bar */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-8">
        <div className="max-w-2xl">
          <motion.h1
            {...fade(0.15, reduce)}
            className="font-serif text-5xl sm:text-6xl lg:text-[64px] xl:text-[72px] font-medium text-white leading-[1.06] tracking-wide uppercase mb-5"
          >
            Protect What Matters Most
          </motion.h1>

          <motion.p
            {...fade(0.3, reduce)}
            className="text-xl sm:text-2xl text-[#49B4FF] font-medium mb-5 leading-snug text-glow"
          >
            Healthy Homes. Better Sleep. Peace of Mind.
          </motion.p>

          <motion.p
            {...fade(0.42, reduce)}
            className="text-base sm:text-lg text-[#AAB8C8] max-w-lg mb-9 leading-relaxed"
          >
            Professional EMF Assessments, Shielding Solutions, and Medical-Grade
            Grounding Systems for Florida Families.
          </motion.p>

          <motion.div
            {...fade(0.54, reduce)}
            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3"
          >
            <a
              href="#contact"
              className="btn btn-blue text-sm px-7 py-4 rounded-xl uppercase tracking-widest"
            >
              Schedule Assessment
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="btn btn-outline text-sm px-7 py-4 rounded-xl uppercase tracking-widest"
            >
              Free 15-Minute Consultation
              <Calendar className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Feature bar */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16">
        <motion.div
          {...fade(0.7, reduce)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10"
        >
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                <feature.icon
                  className="w-7 h-7 text-[#008CFF] hero-icon-glow"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-xs font-bold text-[#49B4FF] uppercase tracking-widest mb-1">
                  {feature.title}
                </h2>
                <p className="text-xs text-[#AAB8C8] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
