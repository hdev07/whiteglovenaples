"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import { FadeIn } from "./FadeIn";

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

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative aspect-4/3 rounded-xl overflow-hidden bg-bg-alt border border-border">
      {/* Placeholder — visible when image is missing */}
      <div className="absolute inset-0 bg-bg-alt flex items-center justify-center">
        <div className="text-center">
          <Images className="w-8 h-8 text-text-muted mx-auto mb-1.5" strokeWidth={1.5} />
          <span className="text-xs text-text-muted">{item.label}</span>
        </div>
      </div>
      {/* Image — covers placeholder when loaded; unmounted on error */}
      {!imgError && (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-104"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgError(true)}
        />
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-text/60 opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
        <p className="text-white font-medium text-sm">{item.label}</p>
        <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Real Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Project Gallery
          </h2>
          <p className="text-text-2 text-lg max-w-xl mx-auto">
            Real assessments, real homes, real results — across Naples and
            Southwest Florida.
          </p>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                active === cat
                  ? "bg-accent text-white"
                  : "border border-border text-text-2 hover:text-text hover:border-text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <FadeIn key={item.src} delay={idx * 0.04}>
              <GalleryCard item={item} />
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          Gallery photos will appear here as projects are completed.
        </p>
      </div>
    </section>
  );
}
