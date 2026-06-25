"use client";

import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import type { VideoSource } from "./VideoModal";
import { site } from "@/lib/site";

interface VideoLandingPlayerProps {
  video: VideoSource;
}

export default function VideoLandingPlayer({ video }: VideoLandingPlayerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <header className="border-b border-[rgba(255,255,255,0.08)] bg-[#050B14]/90 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {site.name}
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-1.5 text-sm text-[#49B4FF] hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="main" className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="eyebrow mb-3">Featured Interview</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight mb-3">
          {video.title}
        </h1>
        <p className="text-[#AAB8C8] mb-8 leading-relaxed">
          Learn what EMF exposure means for your home and what a professional assessment can reveal.
        </p>

        <div className="rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.12)] shadow-[0_30px_120px_-20px_rgba(0,140,255,0.35)] bg-black">
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

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/#contact" className="btn btn-blue text-sm px-7 py-3.5 rounded-xl justify-center">
            Book Assessment
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="btn text-sm px-7 py-3.5 rounded-xl justify-center border border-[rgba(255,255,255,0.12)] text-white/80 hover:text-white"
          >
            Explore the site
          </Link>
        </div>
      </main>
    </div>
  );
}
