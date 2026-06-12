import { Wifi, Zap, Radio, Activity, Home, Cpu } from "lucide-react";

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

const levelColors: Record<string, string> = {
  "High Concern": "text-red-400 bg-red-400/8 border-red-400/20",
  "Moderate Concern": "text-amber-400 bg-amber-400/8 border-amber-400/20",
  Variable: "text-sky-400 bg-sky-400/8 border-sky-400/20",
  Cumulative: "text-violet-400 bg-violet-400/8 border-violet-400/20",
};

export default function StressorsSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
              Environmental Awareness
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Hidden Stressors in{" "}
            <span className="text-gradient">Modern Homes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Today&apos;s connected homes introduce invisible environmental factors that
            weren&apos;t present in previous generations. Awareness is the first step
            to a healthier home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stressors.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-sky-400" strokeWidth={1.5} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${levelColors[item.level]}`}
                  >
                    {item.level}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-5">
            Not sure what&apos;s in your home? A professional assessment reveals exactly
            what you&apos;re dealing with.
          </p>
          <a
            href="#contact"
            className="btn-electric text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
          >
            Book a Home Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
