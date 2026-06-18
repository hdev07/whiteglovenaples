import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23 12s0-3.2-.41-4.73a2.5 2.5 0 0 0-1.76-1.77C19.3 5.09 12 5.09 12 5.09s-7.3 0-8.83.41A2.5 2.5 0 0 0 1.41 7.27C1 8.8 1 12 1 12s0 3.2.41 4.73a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  );
}

const services = [
  { label: "Full Home EMF Assessment", href: "/#contact" },
  { label: "RF Radiation Testing", href: "/#contact" },
  { label: "Dirty Electricity Testing", href: "/#contact" },
  { label: "EMF Shielding Installation", href: "/#contact" },
  { label: "Medical-Grade Grounding", href: "/#contact" },
];

const explore = [
  { label: "Our Process", href: "/#process" },
  { label: "Project Gallery", href: "/#gallery" },
  { label: "Video Library", href: "/#videos" },
  { label: "Meet the Team", href: "/#team" },
  { label: "The Partnership", href: "/#partnership" },
];

const learn = [
  { label: "What Are EMFs?", href: "/learn/what-are-emfs" },
  { label: "Dirty Electricity", href: "/learn/dirty-electricity" },
  { label: "Smart Meters", href: "/learn/smart-meters" },
  { label: "Cell Towers", href: "/learn/cell-tower-proximity" },
  { label: "Healthy Bedrooms", href: "/learn/healthy-bedroom-guide" },
  { label: "FAQ", href: "/#faq" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030710] border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/images/logos/logo.png"
                alt="White Glove Exteriors"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[#7D8BA0] text-sm leading-relaxed mb-6 max-w-sm">
              Professional EMF assessments, shielding solutions, and medical-grade
              grounding systems for Florida families.
            </p>
            <div className="space-y-2.5">
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 text-[#AAB8C8] hover:text-white transition-colors text-sm font-medium">
                <Phone className="w-4 h-4 shrink-0 text-[#49B4FF]" />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-[#7D8BA0] hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0 text-[#49B4FF]" />
                {site.email}
              </a>
              <div className="flex items-start gap-2 text-[#7D8BA0] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#49B4FF]" />
                <span>Naples &amp; Southwest Florida</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#AAB8C8] hover:text-white hover:border-[#49B4FF]/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol title="Services" links={services} />
          <FooterCol title="Explore" links={explore} />
          <FooterCol title="Learn" links={learn} />
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 text-center text-[#7D8BA0] text-xs leading-relaxed">
          <p>
            © {year}, {site.name}{" "}
            Powered by{" "}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              devifly.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[#7D8BA0] hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
