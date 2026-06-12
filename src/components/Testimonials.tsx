import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Naples, FL",
    stars: 5,
    text: "After our assessment, I finally understood why our kids were sleeping so poorly. Renee was incredibly patient and educational — she explained everything we were seeing on the meters and what it meant for our family. The shielding work made a noticeable difference.",
    context: "Master Bedroom Assessment & Shielding",
  },
  {
    name: "David & Lisa T.",
    location: "Bonita Springs, FL",
    stars: 5,
    text: "We were building a new home and wanted to get ahead of any EMF issues before we moved in. This team was thorough, professional, and clearly knowledgeable. The report was detailed and easy to understand. Worth every penny for the peace of mind.",
    context: "New Construction Assessment",
  },
  {
    name: "Michael C.",
    location: "Marco Island, FL",
    stars: 5,
    text: "I had a smart meter installed last year and started noticing fatigue and sleep issues. After testing, the readings were high. The mitigation solution was clean and effective — my numbers dropped dramatically and I noticed the difference within the first week.",
    context: "Smart Meter Assessment & Mitigation",
  },
  {
    name: "Jennifer R.",
    location: "Naples, FL",
    stars: 5,
    text: "Renee took the time to educate us on what she was measuring and why it mattered. She wasn't alarmist about any of it — just clear and factual. We now have a baseline for our home and a plan to address the areas of concern.",
    context: "Full Home Assessment",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#07101f] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <Star className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
              Client Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            What Families <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Florida families who chose to understand their home environment — and
            what they experienced after.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <Stars count={t.stars} />
                <Quote className="w-7 h-7 text-sky-500/25 flex-shrink-0" />
              </div>
              <p className="text-slate-300 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-sky-500/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
                <span className="text-xs text-sky-500/70 font-medium border border-sky-500/15 px-2.5 py-1 rounded-full">
                  {t.context}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          * Testimonials represent client experiences. Replace with real client stories as they are collected.
        </p>
      </div>
    </section>
  );
}
