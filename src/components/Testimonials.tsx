import { Star, Quote } from "lucide-react";
import { FadeIn } from "./FadeIn";

const snippets = [
  "Finally understood why our kids slept poorly.",
  "Clear, factual, never alarmist.",
  "My numbers dropped within the first week.",
  "Worth every penny for the peace of mind.",
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Naples, FL",
    stars: 5,
    text: "After our assessment, I finally understood why our kids were sleeping so poorly. Renee was incredibly patient and educational — she explained everything we were seeing on the meters and what it meant for our family. The shielding work made a noticeable difference.",
    context: "Bedroom Assessment & Shielding",
  },
  {
    name: "David & Lisa T.",
    location: "Bonita Springs, FL",
    stars: 5,
    text: "We were building a new home and wanted to get ahead of any EMF issues before we moved in. The team was thorough, professional, and clearly knowledgeable. The report was detailed and easy to understand. Worth every penny for the peace of mind.",
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
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#00D1FF] fill-[#00D1FF]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            What families are saying
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Florida families who chose to understand their home environment — and what
            they experienced after.
          </p>
        </FadeIn>

        {/* Quote snippets */}
        <FadeIn delay={0.06} className="flex flex-wrap justify-center gap-3 mb-12">
          {snippets.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 text-sm text-[#AAB8C8] bg-surface border border-[rgba(255,255,255,0.08)] px-4 py-2 rounded-full"
            >
              <Quote className="w-3.5 h-3.5 text-[#49B4FF]" />
              {s}
            </span>
          ))}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <FadeIn key={t.name} delay={idx * 0.08}>
              <div className="glass-card p-7 flex flex-col gap-4 h-full">
                <Stars count={t.stars} />
                <p className="text-[#AAB8C8] leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#7D8BA0] text-xs mt-0.5">{t.location}</p>
                  </div>
                  <span className="text-xs text-[#7D8BA0] font-medium border border-[rgba(255,255,255,0.1)] px-2.5 py-1 rounded-full text-right">
                    {t.context}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-[#7D8BA0] text-xs mt-8">
          Real client stories from Southwest Florida homeowners.
        </p>
      </div>
    </section>
  );
}
