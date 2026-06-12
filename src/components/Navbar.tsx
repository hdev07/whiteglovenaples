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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-[#E0DDD8] ${
        scrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo.png"
              alt="White Glove Exteriors"
              width={160}
              height={48}
              className="h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#555552] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:2393757090"
              className="flex items-center gap-1.5 text-sm font-medium text-[#555552] hover:text-[#1A1A1A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              239-375-7090
            </a>
            <a
              href="#contact"
              className="btn-primary font-semibold text-sm px-5 py-2.5 rounded-lg"
            >
              Schedule Assessment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#555552] hover:text-[#1A1A1A] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E0DDD8] bg-white">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 px-3 text-[#555552] hover:text-[#1A1A1A] hover:bg-[#F2F0ED] rounded-lg transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-[#E0DDD8] mt-3">
              <a
                href="tel:2393757090"
                className="flex items-center gap-2 py-2.5 px-3 text-[#1A1A1A] font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                239-375-7090
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full font-semibold text-sm px-5 py-3 rounded-lg text-center block"
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
