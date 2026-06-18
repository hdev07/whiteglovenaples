"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const categories = ["All", "Assessments", "Shielding", "Grounding", "Before & After", "Equipment"];

const galleryItems = [
  { category: "Assessments", label: "Full Home RF Scan", src: "/images/gallery/assessment-1.jpg" },
  { category: "Assessments", label: "Bedroom EMF Reading", src: "/images/gallery/assessment-2.jpg" },
  { category: "Assessments", label: "Smart Meter Testing", src: "/images/gallery/assessment-3.jpg" },
  { category: "Shielding", label: "Window Shielding Film", src: "/images/gallery/shielding-1.jpg" },
  { category: "Shielding", label: "Wall Shielding Install", src: "/images/gallery/shielding-2.jpg" },
  { category: "Shielding", label: "Canopy Bed Shield", src: "/images/gallery/shielding-3.jpg" },
  { category: "Grounding", label: "Medical-Grade Grounding", src: "/images/gallery/grounding-1.jpg" },
  { category: "Grounding", label: "Earthing System Install", src: "/images/gallery/grounding-2.jpg" },
  { category: "Before & After", label: "RF Before Shielding", src: "/images/gallery/before-1.jpg" },
  { category: "Before & After", label: "RF After Shielding", src: "/images/gallery/after-1.jpg" },
  { category: "Equipment", label: "TriField TF2 Meter", src: "/images/gallery/equipment-1.jpg" },
  { category: "Equipment", label: "RF Spectrum Analyzer", src: "/images/gallery/equipment-2.jpg" },
];

type Item = (typeof galleryItems)[number];

function GalleryCard({ item, onOpen }: { item: Item; onOpen: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-[rgba(255,255,255,0.08)] cursor-pointer text-left w-full"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <Images className="w-8 h-8 text-[#7D8BA0] mx-auto mb-1.5" strokeWidth={1.5} />
          <span className="text-xs text-[#7D8BA0]">{item.label}</span>
        </div>
      </div>
      {!imgError && (
        <Image
          src={item.src}
          alt={item.label}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImgError(true)}
        />
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[#49B4FF]/50 transition-all" />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050B14]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white font-medium text-sm">{item.label}</p>
        <p className="text-[#49B4FF] text-xs mt-0.5">{item.category}</p>
      </div>
    </button>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  const item = items[index];
  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#020509]/90 backdrop-blur-md" />
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-white/70 hover:text-white"
      >
        <X className="w-7 h-7" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        aria-label="Previous"
        className="absolute left-3 sm:left-6 text-white/60 hover:text-white p-2"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        aria-label="Next"
        className="absolute right-3 sm:right-6 text-white/60 hover:text-white p-2"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <motion.div
        className="relative w-full max-w-3xl"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-[rgba(255,255,255,0.12)] flex items-center justify-center">
          <div className="text-center">
            <Images className="w-12 h-12 text-[#7D8BA0] mx-auto mb-2" strokeWidth={1.2} />
            <p className="text-[#AAB8C8] text-sm">{item.label}</p>
            <p className="text-[#7D8BA0] text-xs mt-1">Project photo coming soon</p>
          </div>
          {/* Real image renders on top if present */}
          <Image
            src={item.src}
            alt={item.label}
            fill
            className="object-contain"
            sizes="768px"
          />
        </div>
        <p className="mt-3 text-center text-white font-medium text-sm">
          {item.label} <span className="text-[#49B4FF]">· {item.category}</span>
        </p>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function ProjectGallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  const nav = (dir: number) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + filtered.length) % filtered.length;
    });
  };

  return (
    <section id="gallery" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Real Projects</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Project gallery
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Real assessments, real homes, real results — across Naples and Southwest Florida.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                active === cat
                  ? "bg-[#008CFF] text-white shadow-[0_0_18px_rgba(0,140,255,0.5)]"
                  : "border border-[rgba(255,255,255,0.12)] text-[#AAB8C8] hover:text-white hover:border-[#49B4FF]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <FadeIn key={item.src} delay={idx * 0.04}>
              <GalleryCard item={item} onOpen={() => setLightboxIndex(idx)} />
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-[#7D8BA0] text-sm mt-8">
          Gallery photos will appear here as projects are completed.
        </p>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={nav}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
