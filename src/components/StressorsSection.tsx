import { Wifi, RadioTower, Zap, Cpu, PlugZap, Building2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const stressors = [
  {
    icon: Wifi,
    title: "Wireless & WiFi",
    description:
      "Routers, access points, and connected devices saturate modern homes with radiofrequency fields around the clock.",
  },
  {
    icon: RadioTower,
    title: "Cell Towers & 5G",
    description:
      "External RF from nearby macro towers and 5G small cells penetrates walls and accumulates throughout living spaces.",
  },
  {
    icon: Zap,
    title: "Dirty Electricity",
    description:
      "High-frequency harmonics ride your wiring from LED drivers, solar inverters, and electronics — a hidden, correctable source.",
  },
  {
    icon: Cpu,
    title: "Smart Devices",
    description:
      "IoT gadgets, smart TVs, and connected appliances create a complex web of low-level emissions inside the home.",
  },
  {
    icon: PlugZap,
    title: "Electrical Systems",
    description:
      "Panels, wiring errors, and power lines create alternating magnetic and electric fields, often strongest in sleeping areas.",
  },
  {
    icon: Building2,
    title: "Construction Materials",
    description:
      "Metal framing, foil-backed insulation, and reflective surfaces can amplify or trap fields in unexpected ways.",
  },
];

export default function StressorsSection() {
  return (
    <section id="services" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Environmental Awareness</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Hidden environmental stressors
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Today&apos;s connected homes introduce invisible factors that weren&apos;t
            present a generation ago. Awareness is the first step toward a healthier home.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stressors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={idx * 0.06}>
                <div className="glass-card p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#49B4FF]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#AAB8C8] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="text-center mt-14">
          <p className="text-[#7D8BA0] mb-6">
            Not sure what&apos;s in your home? A professional assessment reveals exactly
            what you&apos;re dealing with.
          </p>
          <a href="#contact" className="btn btn-blue text-sm px-8 py-3.5 rounded-xl">
            Book a Home Assessment
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
