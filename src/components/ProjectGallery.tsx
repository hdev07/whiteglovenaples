"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";

const categories = ["All", "Assessments", "Shielding", "Grounding", "Before & After", "Equipment"];

const galleryItems = [
  { category: "Assessments", label: "Full Home RF Scan", src: "/images/gallery/assessment-1.jpg" },
  { category: "Assessments", label: "Bedroom EMF Reading", src: "/images/gallery/assessment-2.jpg" },
  { category: "Shielding", label: "Window Shielding Film", src: "/images/gallery/shielding-1.jpg" },
  { category: "Shielding", label: "Wall Shielding Install", src: "/images/gallery/shielding-2.jpg" },
  { category: "Shielding", label: "Canopy Bed Shield", src: "/images/gallery/shielding-3.jpg" },
  { category: "Grounding", label: "Medical-Grade Grounding", src: "/images/gallery/grounding-1.jpg" },
  { category: "Grounding", label: "Earthing System Install", src: "/images/gallery/grounding-2.jpg" },
  { category: "Before & After", label: "RF Before Shielding", src: "/images/gallery/before-1.jpg" },
  { category: "Before & After", label: "RF After Shielding", src: "/images/gallery/after-1.jpg" },
  { category: "Equipment", label: "TriField TF2 Meter", src: "/images/gallery/equipment-1.jpg" },
  { category: "Equipment", label: "RF Spectrum Analyzer", src: "/images/gallery/equipment-2.jpg" },
  { category: "Assessments", label: "Smart Meter Testing", src: "/images/gallery/assessment-3.jpg" },
];

const categoryColors: Record<string, string> = {
  Assessments: "bg-sky-500/80",
  Shielding: "bg-blue-600/80",
  Grounding: "bg-violet-500/80",
  "Before & After": "bg-emerald-500/80",
  Equipment: "bg-amber-500/80",
};

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  return (
    <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card border-0">
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Placeholder when image missing */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 to-blue-900/30 flex items-center justify-center">
        <div className="text-center opacity-30">
          <Images className="w-10 h-10 text-sky-400 mx-auto mb-2" strokeWidth={1} />
          <span className="text-xs text-sky-400">{item.label}</span>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
        <p className="text-white font-medium text-sm">{item.label}</p>
      </div>
      {/* Category badge */}
      <span
        className={`absolute top-3 left-3 text-[10px] font-semibold text-white uppercase tracking-wider px-2 py-0.5 rounded-full ${
          categoryColors[item.category] ?? "bg-sky-500/80"
        }`}
      >
        {item.category}
      </span>
    </div>
  );
}

export default function ProjectGallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#07101f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <Images className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
              Real Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real assessments, real homes, real results — across Naples and
            Southwest Florida.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "btn-electric text-white"
                  : "border border-sky-500/20 text-slate-400 hover:text-sky-400 hover:border-sky-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <GalleryCard key={item.src} item={item} />
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Gallery photos will appear here as projects are completed. Add images to{" "}
          <code className="text-sky-600">/public/images/gallery/</code>
        </p>
      </div>
    </section>
  );
}
