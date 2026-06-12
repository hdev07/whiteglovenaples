import Image from "next/image";
import { Award, GraduationCap, Link2, ChevronRight } from "lucide-react";

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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" aria-hidden="true" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
            <Award className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Our Medical Advisor
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Our Partnership With{" "}
            <span className="text-gradient">Dr. Carlos Ritter</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Science-backed methods from a nationally recognized expert — brought
            directly to Florida homes through our local team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-96 sm:w-80 sm:h-105">
              <div className="absolute inset-0 rounded-3xl border border-white/15 animate-glow-breathe" />
              <div className="absolute -inset-3 rounded-3xl border border-white/8 animate-pulse-shield" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-linear-to-br from-white/5 to-slate-800/30">
                <Image
                  src="/images/dr-ritter.jpg"
                  alt="Dr. Carlos Ritter"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">CR</span>
                    </div>
                    <span className="text-sm text-white/60 font-medium">Dr. Carlos Ritter</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-brand-bg to-transparent" />
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                <p className="text-white font-semibold">Dr. Carlos Ritter</p>
                <p className="text-slate-300 text-sm">EMF Expert · Texas</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Dr. Carlos Ritter is based in Texas and serves as our mentor,
              advisor, and technology partner. He is a recognized authority in
              EMF assessment and healthy home science, with a focus on
              practical, measurable solutions for families.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Our team has been trained in the same assessment methods,
              measurement protocols, and mitigation strategies he uses with his
              own clients. We work closely with Dr. Ritter and maintain ongoing
              access to his expertise, ensuring that every Florida assessment
              we perform is grounded in the same standard of care he applies
              himself.
            </p>

            <div className="space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{item.title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-white hover:text-slate-300 font-semibold text-sm transition-colors group"
            >
              Schedule an assessment using Dr. Ritter&apos;s methods
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
