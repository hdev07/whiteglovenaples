"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050b14]/95 backdrop-blur-md border-b border-white/8 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logos/logo.png"
              alt="White Glove Exteriors"
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2393757090"
              className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">239-375-7090</span>
            </a>
            <a
              href="#contact"
              className="btn-electric font-semibold text-sm px-5 py-2.5 rounded-lg"
            >
              Schedule Assessment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/8 bg-brand-bg/98 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-white/8 mt-3">
              <a
                href="tel:2393757090"
                className="flex items-center gap-2 py-3 px-3 text-white font-medium"
              >
                <Phone className="w-4 h-4" />
                239-375-7090
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-electric w-full font-semibold text-sm px-5 py-3 rounded-lg text-center block"
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
