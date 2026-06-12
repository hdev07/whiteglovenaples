import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

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
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            What Families Are Saying
          </h2>
          <p className="text-text-2 text-lg max-w-xl mx-auto">
            Florida families who chose to understand their home environment — and
            what they experienced after.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <FadeIn key={t.name} delay={idx * 0.08}>
              <div className="bg-white border border-border rounded-xl p-7 flex flex-col gap-4 h-full">
                <Stars count={t.stars} />
                <p className="text-text-2 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-text font-semibold text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs mt-0.5">{t.location}</p>
                  </div>
                  <span className="text-xs text-text-muted font-medium border border-border px-2.5 py-1 rounded-full">
                    {t.context}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-text-muted text-xs mt-8">
          * Replace with real client stories as they are collected.
        </p>
      </div>
    </section>
  );
}
