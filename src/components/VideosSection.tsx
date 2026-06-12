"use client";

import { useState } from "react";
import { Play, PlayCircle } from "lucide-react";

const videos = [
  {
    id: "placeholder-1",
    title: "EMF Assessment: What Happens During a Home Visit",
    description: "Walk through a complete assessment of a Naples, FL home — what we measure, what we find, and what it means.",
    youtubeId: "",
    category: "Assessment Demo",
    duration: "12 min",
  },
  {
    id: "placeholder-2",
    title: "Dr. Carlos Ritter: Understanding EMF in the Home",
    description: "Dr. Ritter explains the different types of EMF, how they affect biology, and what practical steps homeowners can take.",
    youtubeId: "",
    category: "Dr. Ritter Interview",
    duration: "18 min",
  },
  {
    id: "placeholder-3",
    title: "Real Shielding Project: Master Bedroom",
    description: "A complete before-and-after of a bedroom shielding project — measurements before, installation, and final verification.",
    youtubeId: "",
    category: "Shielding Project",
    duration: "9 min",
  },
  {
    id: "placeholder-4",
    title: "Medical-Grade Grounding System Installation",
    description: "See how we install Dr. Ritter's grounding system in a Florida home and what the measurements show afterward.",
    youtubeId: "",
    category: "Grounding",
    duration: "7 min",
  },
  {
    id: "placeholder-5",
    title: "Cell Tower Awareness: What to Know About 5G",
    description: "Educational content on how close cell towers affect indoor RF levels — with live measurements at different distances.",
    youtubeId: "",
    category: "Education",
    duration: "14 min",
  },
  {
    id: "placeholder-6",
    title: "Dirty Electricity: The Hidden Stressor in Your Wiring",
    description: "What dirty electricity is, how to measure it, and how Greenwave filters resolve it in typical Florida homes.",
    youtubeId: "",
    category: "Education",
    duration: "11 min",
  },
];

const categoryColors: Record<string, string> = {
  "Assessment Demo": "text-white border-white/25 bg-white/8",
  "Dr. Ritter Interview": "text-slate-200 border-white/20 bg-white/6",
  "Shielding Project": "text-white border-white/25 bg-white/8",
  Grounding: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
  Education: "text-amber-400 border-amber-400/25 bg-amber-400/8",
};

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden group">
      <div className="relative aspect-video bg-gradient-to-br from-white/5 to-slate-800/20">
        {playing && video.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center opacity-30">
                <PlayCircle className="w-16 h-16 text-white mx-auto" strokeWidth={1} />
              </div>
            </div>
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-14 h-14 rounded-full bg-white/75 group-hover/play:bg-white transition-colors flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Play className="w-6 h-6 text-brand-bg ml-0.5" />
              </div>
            </button>
            <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/60 px-2 py-0.5 rounded-full">
              {video.duration}
            </span>
          </>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              categoryColors[video.category] ?? "text-white border-white/25 bg-white/8"
            }`}
          >
            {video.category}
          </span>
        </div>
        <h3 className="text-white font-semibold leading-snug mb-2">{video.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="relative py-24 lg:py-32 bg-brand-surface">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
            <Play className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              See It In Action
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Educational <span className="text-gradient">Videos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real assessments, expert interviews with Dr. Ritter, and
            educational content — so you can make an informed decision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Add YouTube video IDs to{" "}
          <code className="text-white/40">src/components/VideosSection.tsx</code> to activate embeds.
        </p>
      </div>
    </section>
  );
}
