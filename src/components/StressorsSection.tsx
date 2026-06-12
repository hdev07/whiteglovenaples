import { Wifi, Zap, Radio, Activity, Home, Cpu } from "lucide-react";
import { FadeIn } from "./FadeIn";

const stressors = [
  {
    icon: Wifi,
    title: "WiFi & 5G Radiation",
    description:
      "High-frequency radiofrequency fields from routers, access points, and nearby 5G infrastructure saturate modern homes 24/7.",
    level: "High Concern",
  },
  {
    icon: Radio,
    title: "Smart Meters",
    description:
      "Utility smart meters emit pulsed RF radiation hundreds of times per day directly from the wall of your home.",
    level: "High Concern",
  },
  {
    icon: Zap,
    title: "Dirty Electricity",
    description:
      "High-frequency harmonics riding your home's wiring from solar inverters, LED drivers, and electronics affect biology.",
    level: "Moderate Concern",
  },
  {
    icon: Radio,
    title: "Cell Tower Exposure",
    description:
      "External RF sources from nearby towers can penetrate walls and accumulate throughout your living spaces.",
    level: "Variable",
  },
  {
    icon: Activity,
    title: "Magnetic Fields",
    description:
      "Power lines, electrical panels, and incorrectly wired circuits create strong alternating magnetic fields in sleeping areas.",
    level: "Moderate Concern",
  },
  {
    icon: Cpu,
    title: "Smart Home Devices",
    description:
      "IoT devices, smart TVs, and connected appliances create a complex web of low-level EMF sources within the home.",
    level: "Cumulative",
  },
];

export default function StressorsSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Environmental Awareness
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Hidden Stressors in Modern Homes
          </h2>
          <p className="text-text-2 text-lg max-w-2xl mx-auto leading-relaxed">
            Today&apos;s connected homes introduce invisible environmental factors that
            weren&apos;t present in previous generations. Awareness is the first step
            to a healthier home.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stressors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={idx * 0.07}>
                <div className="bg-bg border border-border rounded-xl p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-medium text-text-muted uppercase tracking-wide mt-1">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="text-text font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="text-center mt-14">
          <p className="text-text-2 mb-5">
            Not sure what&apos;s in your home? A professional assessment reveals exactly
            what you&apos;re dealing with.
          </p>
          <a href="#contact" className="btn-primary font-semibold px-7 py-3.5 rounded-lg text-sm">
            Book a Home Assessment
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
