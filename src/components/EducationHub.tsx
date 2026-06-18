import Link from "next/link";
import { Radio, Zap, Gauge, RadioTower, BedDouble, Home, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const cards = [
  {
    icon: Radio,
    title: "What Are EMFs",
    blurb: "The invisible fields in every home — explained without the hype.",
    href: "/learn/what-are-emfs",
  },
  {
    icon: Zap,
    title: "Dirty Electricity",
    blurb: "High-frequency noise on your wiring — and how to clean it up.",
    href: "/learn/dirty-electricity",
  },
  {
    icon: Gauge,
    title: "Smart Meters",
    blurb: "What utility meters emit, and your options in Florida.",
    href: "/learn/smart-meters",
  },
  {
    icon: RadioTower,
    title: "Cell Towers",
    blurb: "How proximity and 5G small cells affect your indoor RF levels.",
    href: "/learn/cell-tower-proximity",
  },
  {
    icon: BedDouble,
    title: "Healthy Bedrooms",
    blurb: "Build a low-EMF sleep environment, step by step.",
    href: "/learn/healthy-bedroom-guide",
  },
  {
    icon: Home,
    title: "Healthy Home",
    blurb: "A whole-home approach to a calmer, healthier environment.",
    href: "/learn/healthy-home",
  },
];

export default function EducationHub() {
  return (
    <section id="education" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">Education Hub</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Learn the essentials
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Clear, factual guides to help you understand your home environment and make
            confident decisions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={idx * 0.06}>
                <Link
                  href={card.href}
                  className="glass-card p-7 h-full flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#49B4FF]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-[#AAB8C8] text-sm leading-relaxed flex-1">{card.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#49B4FF] mt-5">
                    Read guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
