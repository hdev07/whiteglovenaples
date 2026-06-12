import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Full Home EMF Assessment",
  "RF Radiation Testing",
  "Dirty Electricity Testing",
  "Smart Meter Assessment",
  "EMF Shielding Installation",
  "Medical-Grade Grounding",
];

const resources = [
  { label: "What Are EMFs?", href: "#", comingSoon: true },
  { label: "Dirty Electricity", href: "#", comingSoon: true },
  { label: "Smart Meters", href: "#", comingSoon: true },
  { label: "Cell Tower Proximity", href: "#", comingSoon: true },
  { label: "Healthy Bedroom Guide", href: "#", comingSoon: true },
  { label: "FAQ", href: "#", comingSoon: true },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Meet the Team", href: "#team" },
  { label: "Dr. Ritter Partnership", href: "#" },
  { label: "Project Gallery", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "Schedule Assessment", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030810] border-t border-sky-500/10">
      {/* Top accent line */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative">
                <Shield className="w-7 h-7 text-sky-400" strokeWidth={1.5} />
                <span className="absolute inset-0 rounded-full blur-md bg-sky-500/25" />
              </div>
              <div className="leading-none">
                <span className="block text-white font-semibold text-sm tracking-wide">WHITE GLOVE</span>
                <span className="block text-sky-400 text-[10px] tracking-[0.2em] font-medium uppercase">Exteriors</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Professional EMF assessments, shielding solutions, and medical-grade
              grounding systems for Florida families.
            </p>
            <div className="space-y-2">
              <a
                href="tel:2393757090"
                className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                239-375-7090
              </a>
              <a
                href="mailto:info@whiteglovenaples.com"
                className="flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors text-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                info@whiteglovenaples.com
              </a>
              <div className="flex items-start gap-2 text-slate-500 text-sm">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Naples &amp; Southwest Florida</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-sky-400 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-slate-500 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Learning Center
            </h4>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.label} className="flex items-center gap-2">
                  <a
                    href={r.href}
                    className="text-slate-500 hover:text-sky-400 transition-colors text-sm"
                  >
                    {r.label}
                  </a>
                  {r.comingSoon && (
                    <span className="text-[9px] font-semibold text-sky-600 uppercase tracking-wider border border-sky-600/30 px-1.5 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© {year} White Glove Exteriors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Serving Naples &amp; Southwest Florida</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>whiteglovenaples.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
