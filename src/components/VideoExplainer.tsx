"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Radio, ScanLine, ShieldCheck, Captions, FileText, BarChart3, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import VideoModal, { type VideoSource } from "./VideoModal";

const topics = [
  {
    icon: Radio,
    title: "What EMF actually is",
    body: "A plain-language explanation of the invisible fields modern homes are bathed in — without fear or hype.",
  },
  {
    icon: ScanLine,
    title: "How an assessment works",
    body: "See the calibrated instruments we use and how we measure RF, magnetic fields, and dirty electricity room by room.",
  },
  {
    icon: ShieldCheck,
    title: "What mitigation means",
    body: "Understand the practical, measurable steps that reduce exposure — shielding, grounding, and source reduction.",
  },
];

const features = [
  { icon: Captions, label: "Captions" },
  { icon: FileText, label: "Transcript" },
  { icon: BarChart3, label: "Progress tracking" },
];

const explainerVideo: VideoSource = {
  title: "Electrical Poisoning: The Hidden EMF Threat",
  mp4: "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/mp4/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.mp4",
  hls: "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/hls/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.m3u8",
  poster:
    "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/thumbnail/ELECTRICAL_POISONING_THE_HIDDEN_EMF_THREAT_CLEAN_1758305844501.jpg",
};

export default function VideoExplainer() {
  const [open, setOpen] = useState(false);

  return (
    <section id="learn-video" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Start Here · 90 Seconds</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Understand EMF in under two minutes
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Confused about EMF? You&apos;re not alone. This short explainer covers the
            essentials so you can make an informed, calm decision about your home.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video */}
          <FadeIn>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_30px_80px_-30px_rgba(0,140,255,0.5)] cursor-pointer"
              aria-label="Play EMF explainer video"
            >
              <div className="relative aspect-video bg-surface">
                <Image
                  src={explainerVideo.poster!}
                  alt="EMF explainer video thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-[72px] h-[72px] rounded-full bg-[#008CFF] flex items-center justify-center shadow-[0_0_40px_rgba(0,140,255,0.7)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                  Featured Interview · EMF Threat
                </span>
              </div>
            </button>
          </FadeIn>

          {/* Benefits */}
          <FadeIn delay={0.12}>
            <div className="space-y-6 mb-8">
              {topics.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#49B4FF]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{t.title}</h3>
                      <p className="text-[#AAB8C8] text-sm leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#AAB8C8] bg-white/5 border border-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-full"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#49B4FF]" />
                    {f.label}
                  </span>
                );
              })}
            </div>

            <a href="#contact" className="btn btn-blue text-sm px-7 py-3.5 rounded-xl">
              Book Assessment
              <ChevronRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} video={explainerVideo} />
    </section>
  );
}
