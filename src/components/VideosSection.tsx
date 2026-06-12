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
  "Assessment Demo": "text-sky-400 border-sky-400/25 bg-sky-400/8",
  "Dr. Ritter Interview": "text-violet-400 border-violet-400/25 bg-violet-400/8",
  "Shielding Project": "text-blue-400 border-blue-400/25 bg-blue-400/8",
  Grounding: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
  Education: "text-amber-400 border-amber-400/25 bg-amber-400/8",
};

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden group">
      {/* Thumbnail / embed */}
      <div className="relative aspect-video bg-gradient-to-br from-sky-900/30 to-blue-900/20">
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
            {/* Placeholder thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center opacity-40">
                <PlayCircle className="w-16 h-16 text-sky-400 mx-auto" strokeWidth={1} />
              </div>
            </div>
            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/play"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-14 h-14 rounded-full bg-sky-500/80 group-hover/play:bg-sky-400 transition-colors flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </button>
            {/* Duration badge */}
            <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/60 px-2 py-0.5 rounded-full">
              {video.duration}
            </span>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              categoryColors[video.category] ?? "text-sky-400 border-sky-400/25 bg-sky-400/8"
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
    <section id="videos" className="relative py-24 lg:py-32 grid-pattern">
      <div className="absolute inset-0 radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <Play className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
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

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Add YouTube video IDs to{" "}
          <code className="text-sky-600">src/components/VideosSection.tsx</code> to activate embeds.
        </p>
      </div>
    </section>
  );
}
