import Image from "next/image";
import { Award, GraduationCap, Link2, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    body: "Our team has been trained directly in Dr. Ritter's assessment methods, measurement protocols, and mitigation strategies.",
  },
  {
    icon: Link2,
    title: "Ongoing Access",
    body: "We maintain close collaboration with Dr. Ritter and have continuous access to his guidance on complex cases and new technologies.",
  },
  {
    icon: Award,
    title: "Advanced Technologies",
    body: "We bring his medical-grade grounding systems and advanced shielding technologies to Florida homeowners through local installation.",
  },
];

export default function DrRitterSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Our Medical Advisor
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Our Partnership With Dr. Carlos Ritter
          </h2>
          <p className="text-text-2 text-lg max-w-2xl mx-auto">
            Science-backed methods from a nationally recognized expert — brought
            directly to Florida homes through our local team.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Portrait */}
          <FadeIn className="flex justify-center">
            <div className="relative w-64 sm:w-72 rounded-2xl overflow-hidden border border-border shadow-[0_2px_16px_rgba(0,0,0,0.07)] aspect-3/4">
              <Image
                src="/images/dr-ritter.jpg"
                alt="Dr. Carlos Ritter"
                fill
                className="object-cover object-top"
                sizes="288px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-border px-5 py-4">
                <p className="text-text font-semibold text-sm">Dr. Carlos Ritter</p>
                <p className="text-text-muted text-xs mt-0.5">EMF Expert · Texas</p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              Dr. Carlos Ritter is based in Texas and serves as our mentor,
              advisor, and technology partner. He is a recognized authority in
              EMF assessment and healthy home science, with a focus on
              practical, measurable solutions for families.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              Our team has been trained in the same assessment methods,
              measurement protocols, and mitigation strategies he uses with his
              own clients. We work closely with Dr. Ritter and maintain ongoing
              access to his expertise, ensuring that every Florida assessment
              we perform is grounded in the same standard of care he applies
              himself.
            </p>

            <div className="space-y-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-text font-semibold mb-1">{item.title}</p>
                      <p className="text-text-2 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-accent hover:text-accent/80 font-semibold text-sm transition-colors group"
            >
              Schedule an assessment using Dr. Ritter&apos;s methods
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
