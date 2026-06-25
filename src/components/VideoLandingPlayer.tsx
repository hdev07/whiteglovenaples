"use client";

import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Radio,
  ScanLine,
  ShieldCheck,
  Calendar,
  MapPin,
} from "lucide-react";
import type { VideoSource } from "./VideoModal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

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

interface VideoLandingPlayerProps {
  video: VideoSource;
}

export default function VideoLandingPlayer({ video }: VideoLandingPlayerProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-bg">
        {/* Ambient glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[90vw] max-w-[1100px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(0,140,255,0.16) 0%, transparent 70%)",
          }}
        />

        <main
          id="main"
          className="relative flex-1 pt-[88px] lg:pt-[110px] pb-[72px] md:pb-[100px] lg:pb-[120px]"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-3xl mb-8 md:mb-12 lg:mb-14">
              <p className="eyebrow mb-3 md:mb-4">Featured Interview</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-medium text-white leading-tight mb-4 md:mb-5">
                {video.title}
              </h1>
              <p className="text-text-2 text-base sm:text-lg leading-relaxed max-w-2xl">
                Learn what EMF exposure means for your home and what a professional
                assessment can reveal — whether you&apos;re watching on your phone,
                tablet, or desktop.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Video player */}
              <FadeIn>
                <div className="rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.12)] shadow-[0_30px_120px_-20px_rgba(0,140,255,0.35)] bg-black">
                  <video
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="w-full aspect-video"
                  >
                    {video.mp4 && <source src={video.mp4} type="video/mp4" />}
                    {video.hls && (
                      <source src={video.hls} type="application/vnd.apple.mpegurl" />
                    )}
                  </video>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 lg:hidden">
                  <Link
                    href="/#contact"
                    className="btn btn-blue text-sm px-7 py-3.5 rounded-xl justify-center"
                  >
                    Book Assessment
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/"
                    className="btn text-sm px-7 py-3.5 rounded-xl justify-center border border-border text-white/80 hover:text-white"
                  >
                    Explore the site
                  </Link>
                </div>
              </FadeIn>

              {/* Sidebar — tablet & desktop */}
              <FadeIn delay={0.1} className="lg:sticky lg:top-[120px]">
                <div className="rounded-[20px] border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-7 lg:p-8">
                  <h2 className="text-white font-semibold text-lg mb-5">
                    In this interview
                  </h2>
                  <div className="space-y-5 mb-8">
                    {topics.map((t) => {
                      const Icon = t.icon;
                      return (
                        <div key={t.title} className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue/12 border border-blue/25 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-blue-glow" strokeWidth={1.6} />
                          </div>
                          <div>
                            <h3 className="text-white font-medium text-sm mb-1">
                              {t.title}
                            </h3>
                            <p className="text-text-2 text-sm leading-relaxed">{t.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-3 mb-8 pt-6 border-t border-border">
                    <a
                      href={`tel:${site.phone}`}
                      className="flex items-center gap-3 text-sm text-white hover:text-blue-glow transition-colors"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {site.phoneDisplay}
                    </a>
                    <p className="flex items-center gap-3 text-sm text-text-2">
                      <MapPin className="w-4 h-4 shrink-0 text-blue-glow" />
                      Naples &amp; Southwest Florida
                    </p>
                    <p className="flex items-center gap-3 text-sm text-text-2">
                      <Calendar className="w-4 h-4 shrink-0 text-blue-glow" />
                      Same-week availability
                    </p>
                  </div>

                  <div className="hidden lg:flex flex-col gap-3">
                    <Link
                      href="/#contact"
                      className="btn btn-blue text-sm px-7 py-3.5 rounded-xl justify-center"
                    >
                      Book Assessment
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/"
                      className="btn text-sm px-7 py-3.5 rounded-xl justify-center border border-border text-white/80 hover:text-white"
                    >
                      Explore the site
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
