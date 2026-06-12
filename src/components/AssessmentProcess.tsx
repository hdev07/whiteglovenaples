import { CalendarCheck, Search, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

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
    <section id="process" className="relative py-24 lg:py-32 bg-brand-surface">
      <div className="absolute inset-0 radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Our <span className="text-gradient">Assessment Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A straightforward, science-based process — from your first call to a
            verified, healthier home.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.number} className="relative flex gap-6">
                {/* Left — number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-sky-500/40 bg-sky-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sky-400" strokeWidth={1.5} />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 my-2 step-connector min-h-[40px]" />
                  )}
                </div>

                {/* Right — content */}
                <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-500/70 uppercase">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="btn-electric text-white font-semibold px-8 py-4 rounded-xl"
          >
            Start With Step One
          </a>
        </div>
      </div>
    </section>
  );
}
