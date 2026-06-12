import { CalendarCheck, Search, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Your Assessment",
    description:
      "Call or submit a request online. We confirm a convenient time — same-week availability for Naples and Southwest Florida.",
  },
  {
    number: "02",
    icon: Search,
    title: "On-Site Evaluation",
    description:
      "Our specialist visits your home with professional-grade instruments, measuring RF radiation, magnetic fields, electric fields, and dirty electricity throughout every room.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Detailed Report",
    description:
      "You receive a comprehensive written report with actual measurements, annotated floor plan, and prioritized recommendations based on our findings.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Mitigation & Shielding",
    description:
      "Where needed, we implement shielding solutions, grounding systems, and source-reduction strategies using Dr. Ritter's advanced protocols and technologies.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Verification Testing",
    description:
      "We return to confirm all mitigations are working as intended, measuring before and after to document the improvement in your home environment.",
  },
];

export default function AssessmentProcess() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Our Assessment Process
          </h2>
          <p className="text-text-2 text-lg max-w-xl mx-auto">
            A straightforward, science-based process — from your first call to a
            verified, healthier home.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <FadeIn key={step.number} delay={idx * 0.08}>
                <div className="relative flex gap-6">
                  {/* Left — icon + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-11 h-11 rounded-full border border-border bg-accent-light flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.5} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 my-2 bg-border min-h-10" />
                    )}
                  </div>

                  {/* Right — content */}
                  <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                      Step {step.number}
                    </span>
                    <h3 className="text-text font-semibold text-xl mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="text-center mt-14">
          <a href="#contact" className="btn-primary font-semibold px-8 py-3.5 rounded-lg text-sm">
            Start With Step One
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
