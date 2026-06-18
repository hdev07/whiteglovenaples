import { Phone, Search, FileText, ClipboardList, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Consultation",
    duration: "15–30 min",
    description:
      "A no-pressure conversation about your home, your concerns, and your goals. We confirm scope and schedule a convenient time.",
  },
  {
    number: "02",
    icon: Search,
    title: "Assessment",
    duration: "2.5–4 hrs on-site",
    description:
      "Our specialist visits with calibrated, professional instruments — measuring RF radiation, magnetic and electric fields, and dirty electricity room by room.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Review",
    duration: "Within 48 hrs",
    description:
      "You receive a clear written report with actual measurements, an annotated floor plan, and findings ranked by significance against established guidelines.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Recommendations",
    duration: "Tailored plan",
    description:
      "A prioritized action plan — from free behavioral changes to professional shielding — sequenced by health impact and cost-effectiveness.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Implementation",
    duration: "As needed + verification",
    description:
      "Where you choose to proceed, we install shielding and grounding solutions, then re-measure to verify and document the improvement.",
  },
];

export default function AssessmentProcess() {
  return (
    <section id="process" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Our process
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            A straightforward, science-based path — from your first call to a verified,
            healthier home.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <FadeIn key={step.number} delay={idx * 0.08}>
                <div className="relative flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#008CFF]/12 border border-[#008CFF]/30 flex items-center justify-center shadow-[0_0_22px_-6px_rgba(0,140,255,0.7)]">
                      <Icon className="w-5 h-5 text-[#49B4FF]" strokeWidth={1.6} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 my-2 min-h-12 bg-gradient-to-b from-[#008CFF]/40 to-transparent" />
                    )}
                  </div>

                  <div className={isLast ? "pb-0" : "pb-12"}>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-semibold text-[#7D8BA0] uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <span className="text-[11px] font-medium text-[#49B4FF] bg-[#008CFF]/10 border border-[#008CFF]/25 px-2.5 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-[#AAB8C8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="text-center mt-12">
          <a href="#contact" className="btn btn-blue text-sm px-8 py-3.5 rounded-xl">
            Start With a Consultation
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
