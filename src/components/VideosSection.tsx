"use client";

import { useState } from "react";
import { Play, PlayCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";

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

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="relative aspect-video bg-bg-alt">
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
              <PlayCircle className="w-12 h-12 text-border" strokeWidth={1} />
            </div>
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shadow-sm group-hover/play:shadow-md group-hover/play:border-text-muted transition-all">
                <Play className="w-4 h-4 text-text ml-0.5" />
              </div>
            </button>
            <span className="absolute bottom-3 right-3 text-xs font-medium text-text-2 bg-white/90 border border-border px-2 py-0.5 rounded-full">
              {video.duration}
            </span>
          </>
        )}
      </div>

      <div className="p-5">
        <span className="text-[10px] font-semibold text-accent uppercase tracking-wide">
          {video.category}
        </span>
        <h3 className="text-text font-semibold leading-snug mt-1.5 mb-2">{video.title}</h3>
        <p className="text-text-2 text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Educational Videos
          </h2>
          <p className="text-text-2 text-lg max-w-xl mx-auto">
            Real assessments, expert interviews with Dr. Ritter, and
            educational content — so you can make an informed decision.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <FadeIn key={video.id} delay={idx * 0.07}>
              <VideoCard video={video} />
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          Add YouTube video IDs to activate embeds.
        </p>
      </div>
    </section>
  );
}
