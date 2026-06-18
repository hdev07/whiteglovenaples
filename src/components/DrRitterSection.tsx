"use client";

import { useState } from "react";
import { ScanLine, ListChecks, Cpu, GraduationCap, ShieldCheck, Play, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import VideoModal, { type VideoSource } from "./VideoModal";

const pillars = [
  {
    icon: ScanLine,
    title: "Assessment methods",
    body: "The same room-by-room measurement methodology, applied to Florida homes.",
  },
  {
    icon: ListChecks,
    title: "Protocols",
    body: "Standardized testing protocols benchmarked against established guidelines.",
  },
  {
    icon: Cpu,
    title: "Technology",
    body: "Medical-grade grounding systems and advanced shielding technologies.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    body: "Direct, ongoing training so the standard of care travels intact.",
  },
  {
    icon: ShieldCheck,
    title: "Implementation",
    body: "Local installation and verification — proven methods, delivered in-state.",
  },
];

const interviewVideo: VideoSource = {
  title: "Inside the Partnership: EMF Assessment Methods",
  mp4: "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/mp4/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.mp4",
  hls: "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/hls/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.m3u8",
  poster:
    "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/thumbnail/ELECTRICAL_POISONING_THE_HIDDEN_EMF_THREAT_CLEAN_1758305844501.jpg",
};

export default function DrRitterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="partnership" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">The Partnership</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Texas expertise, delivered in Florida
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Our methods come from an established Texas practice and are brought to
            Southwest Florida homes through direct training and an ongoing partnership.
          </p>
        </FadeIn>

        {/* TX -> FL */}
        <FadeIn delay={0.1}>
          <div className="glass rounded-[24px] p-8 lg:p-10 mb-12">
            <div className="flex items-center justify-center gap-6 sm:gap-12">
              <div className="text-center">
                <div className="font-serif text-5xl lg:text-6xl text-white">TX</div>
                <p className="text-xs text-[#7D8BA0] uppercase tracking-widest mt-2">Origin</p>
              </div>
              <div className="flex-1 max-w-xs relative h-px bg-gradient-to-r from-[#008CFF]/20 via-[#49B4FF] to-[#008CFF]/20">
                <ArrowRight className="w-5 h-5 text-[#49B4FF] absolute right-0 -top-2.5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.9)]" />
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl lg:text-6xl text-[#49B4FF] text-glow">FL</div>
                <p className="text-xs text-[#7D8BA0] uppercase tracking-widest mt-2">Delivery</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={idx * 0.06}>
                <div className="glass-card p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#49B4FF]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-white font-semibold mb-1.5">{p.title}</h3>
                  <p className="text-[#AAB8C8] text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn btn-outline text-sm px-7 py-3.5 rounded-xl"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Interview
          </button>
        </FadeIn>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} video={interviewVideo} />
    </section>
  );
}
