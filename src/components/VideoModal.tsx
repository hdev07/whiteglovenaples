"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type VideoSource = {
  title: string;
  /** Direct mp4/hls url */
  mp4?: string;
  hls?: string;
  poster?: string;
  /** YouTube id (used when no mp4 provided) */
  youtubeId?: string;
};

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  video: VideoSource | null;
}

export default function VideoModal({ open, onClose, video }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && video && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[#020509]/85 backdrop-blur-md" />

          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              Close <X className="w-5 h-5" />
            </button>

            <div className="rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.12)] shadow-[0_30px_120px_-20px_rgba(0,140,255,0.4)] bg-black">
              {video.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              ) : (
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
              )}
            </div>
            <p className="mt-3 text-sm text-[#AAB8C8] text-center">{video.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
