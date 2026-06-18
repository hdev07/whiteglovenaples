"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Play, Search, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import VideoModal, { type VideoSource } from "./VideoModal";

const POSTER =
  "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/thumbnail/ELECTRICAL_POISONING_THE_HIDDEN_EMF_THREAT_CLEAN_1758305844501.jpg";
const MP4 =
  "https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/mp4/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.mp4";

const categories = ["All", "Interviews", "Projects", "Educational", "Demonstrations"];

type Video = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  featured?: boolean;
  source: VideoSource;
};

const baseSource = (title: string): VideoSource => ({
  title,
  mp4: MP4,
  poster: POSTER,
});

const videos: Video[] = [
  {
    id: "v1",
    title: "Electrical Poisoning: The Hidden EMF Threat",
    description: "An expert interview on what EMF really does inside your home — and why most Florida families don't know what they're being exposed to.",
    category: "Interviews",
    duration: "18 min",
    featured: true,
    source: baseSource("Electrical Poisoning: The Hidden EMF Threat"),
  },
  {
    id: "v2",
    title: "EMF Assessment: What Happens During a Home Visit",
    description: "Walk through a complete assessment of a Naples home — what we measure, what we find, and what it means.",
    category: "Projects",
    duration: "12 min",
    source: baseSource("EMF Assessment: What Happens During a Home Visit"),
  },
  {
    id: "v3",
    title: "Understanding EMF in the Home",
    description: "The different types of EMF, how they affect biology, and the practical steps homeowners can take.",
    category: "Educational",
    duration: "14 min",
    source: baseSource("Understanding EMF in the Home"),
  },
  {
    id: "v4",
    title: "Real Shielding Project: Master Bedroom",
    description: "A complete before-and-after of a bedroom shielding project — measurements before, installation, and verification.",
    category: "Projects",
    duration: "9 min",
    source: baseSource("Real Shielding Project: Master Bedroom"),
  },
  {
    id: "v5",
    title: "Medical-Grade Grounding System Installation",
    description: "See how we install a grounding system in a Florida home and what the measurements show afterward.",
    category: "Demonstrations",
    duration: "7 min",
    source: baseSource("Medical-Grade Grounding System Installation"),
  },
  {
    id: "v6",
    title: "Dirty Electricity: The Hidden Stressor in Your Wiring",
    description: "What dirty electricity is, how to measure it, and how filters resolve it in typical Florida homes.",
    category: "Educational",
    duration: "11 min",
    source: baseSource("Dirty Electricity: The Hidden Stressor in Your Wiring"),
  },
  {
    id: "v7",
    title: "Live RF Measurement Demo Near a 5G Small Cell",
    description: "Real-time readings showing how distance and line-of-sight change indoor RF levels.",
    category: "Demonstrations",
    duration: "8 min",
    source: baseSource("Live RF Measurement Demo Near a 5G Small Cell"),
  },
];

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group glass-card overflow-hidden text-left w-full cursor-pointer"
    >
      <div className="relative aspect-video bg-surface overflow-hidden">
        <Image
          src={POSTER}
          alt={video.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-[#008CFF]/90 flex items-center justify-center shadow-[0_0_24px_rgba(0,140,255,0.6)] transition-transform duration-300 group-hover:scale-110">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </span>
        </span>
        <span className="absolute bottom-3 right-3 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded-full">
          {video.duration}
        </span>
      </div>
      <div className="p-5">
        <span className="text-[10px] font-semibold text-[#49B4FF] uppercase tracking-widest">
          {video.category}
        </span>
        <h3 className="text-white font-semibold leading-snug mt-1.5 mb-2">{video.title}</h3>
        <p className="text-[#AAB8C8] text-sm leading-relaxed">{video.description}</p>
      </div>
    </button>
  );
}

export default function VideosSection() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<VideoSource | null>(null);

  const featured = videos.find((v) => v.featured)!;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return videos.filter((v) => {
      const matchCat = active === "All" || v.category === active;
      const matchQuery =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <section id="videos" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Video Library</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Watch &amp; learn
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Real assessments, expert interviews, and educational content — so you can
            make an informed decision.
          </p>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={0.06}>
          <button
            type="button"
            onClick={() => setPlaying(featured.source)}
            className="group relative grid lg:grid-cols-2 gap-0 rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] mb-12 w-full text-left cursor-pointer bg-surface"
          >
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px]">
              <Image src={POSTER} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 640px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/60 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-[72px] h-[72px] rounded-full bg-[#008CFF] flex items-center justify-center shadow-[0_0_40px_rgba(0,140,255,0.7)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </span>
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#49B4FF] uppercase tracking-widest mb-3">
                <Star className="w-3.5 h-3.5 fill-[#49B4FF]" /> Featured · {featured.category}
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-[#AAB8C8] leading-relaxed">{featured.description}</p>
            </div>
          </button>
        </FadeIn>

        {/* Search + categories */}
        <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  active === cat
                    ? "bg-[#008CFF] text-white shadow-[0_0_18px_rgba(0,140,255,0.5)]"
                    : "border border-[rgba(255,255,255,0.12)] text-[#AAB8C8] hover:text-white hover:border-[#49B4FF]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative sm:w-64">
            <Search className="w-4 h-4 text-[#7D8BA0] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search videos..."
              aria-label="Search videos"
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface border border-[rgba(255,255,255,0.12)] text-white placeholder-[#7D8BA0] text-sm focus:outline-none focus:border-[#49B4FF]/60"
            />
          </div>
        </FadeIn>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, idx) => (
              <FadeIn key={video.id} delay={idx * 0.05}>
                <VideoCard video={video} onPlay={() => setPlaying(video.source)} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#7D8BA0] py-12">No videos match your search.</p>
        )}
      </div>

      <VideoModal open={playing !== null} onClose={() => setPlaying(null)} video={playing} />
    </section>
  );
}
