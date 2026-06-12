import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-[#080B11] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <div className="leading-none">
                <span className="block text-white font-semibold text-sm tracking-wide">WHITE GLOVE</span>
                <span className="block text-white/35 text-[10px] tracking-widest font-medium uppercase">Exteriors</span>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-5">
              Professional EMF assessments, shielding solutions, and medical-grade
              grounding systems for Florida families.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:2393757090"
                className="flex items-center gap-2 text-white/55 hover:text-white/80 transition-colors text-sm font-medium"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                239-375-7090
              </a>
              <a
                href="mailto:info@whiteglovenaples.com"
                className="flex items-center gap-2 text-white/30 hover:text-white/55 transition-colors text-sm"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                info@whiteglovenaples.com
              </a>
              <div className="flex items-start gap-2 text-white/30 text-sm">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Naples &amp; Southwest Florida</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/55 font-semibold text-xs uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/30 hover:text-white/55 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/55 font-semibold text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-white/30 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/55 font-semibold text-xs uppercase tracking-widest mb-4">
              Learning Center
            </h4>
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <li key={r.label} className="flex items-center gap-2">
                  <a
                    href={r.href}
                    className="text-white/30 hover:text-white/55 transition-colors text-sm"
                  >
                    {r.label}
                  </a>
                  {r.comingSoon && (
                    <span className="text-[9px] font-semibold text-white/25 uppercase tracking-wider border border-white/15 px-1.5 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs">
          <p>© {year} White Glove Exteriors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Serving Naples &amp; Southwest Florida</span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span>whiteglovenaples.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
