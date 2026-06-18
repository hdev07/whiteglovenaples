"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#team" },
  { label: "Learn", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#050B14]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="White Glove Exteriors — home">
            <Image
              src="/images/logos/logo.png"
              alt="White Glove Exteriors"
              loading="eager"
              width={180}
              height={54}
              className="h-9 lg:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#AAB8C8] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#49B4FF] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="btn btn-blue text-sm px-5 py-2.5 rounded-xl"
            >
              Schedule Assessment
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white hover:text-[#49B4FF] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[rgba(255,255,255,0.08)] bg-[#050B14]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 rounded-xl transition-colors font-medium text-[15px] text-[#AAB8C8] hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-[rgba(255,255,255,0.08)] mt-3">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 py-2 px-3 font-medium text-[15px] text-white"
              >
                <Phone className="w-4 h-4" />
                {site.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-blue w-full text-sm px-5 py-3.5 rounded-xl"
              >
                Schedule Assessment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
