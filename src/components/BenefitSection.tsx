import { CheckCircle, ArrowRight } from "lucide-react";

const checks = [
  "You live within 1 mile of a cell tower",
  "Your home has a smart meter installed",
  "You or your family experience poor or restless sleep",
  "You experience unexplained fatigue or brain fog",
  "You recently installed new WiFi equipment or 5G devices",
  "Your bedroom is near an electrical panel or meter",
  "You are building or renovating a home in Florida",
  "You have health-conscious children at home",
  "You experience frequent headaches without clear cause",
  "Your home has multiple smart / IoT devices",
  "You are focused on optimizing sleep and recovery",
  "You want a baseline measurement for your property",
];

export default function BenefitSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#07101f] overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(14,165,233,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-5">
              <span className="text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase">
                Is It Right For You?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Could Your Home{" "}
              <span className="text-gradient">Benefit From Testing?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Most Florida homeowners have never measured the EMF environment
              inside their home. A single assessment gives you data, clarity,
              and a clear path forward — whether you need mitigation or simply
              peace of mind.
            </p>
            <a
              href="#contact"
              className="btn-electric text-white font-semibold px-7 py-4 rounded-xl text-sm inline-flex items-center gap-2"
            >
              Schedule My Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-slate-500">
              Same-week availability · No obligation · Naples &amp; Southwest Florida
            </p>
          </div>

          {/* Right — checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checks.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-sky-500/10 bg-sky-500/3 hover:border-sky-500/25 transition-colors"
              >
                <CheckCircle
                  className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-slate-300 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
