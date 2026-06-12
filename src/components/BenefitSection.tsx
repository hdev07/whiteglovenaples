import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

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
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
              Is It Right For You?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-6 tracking-tight leading-tight">
              Could Your Home Benefit From Testing?
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-8">
              Most Florida homeowners have never measured the EMF environment
              inside their home. A single assessment gives you data, clarity,
              and a clear path forward — whether you need mitigation or simply
              peace of mind.
            </p>
            <a
              href="#contact"
              className="btn-primary font-semibold px-7 py-3.5 rounded-lg text-sm inline-flex items-center gap-2"
            >
              Schedule My Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-text-muted">
              Same-week availability · No obligation · Naples &amp; Southwest Florida
            </p>
          </FadeIn>

          {/* Right — checklist */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {checks.map((item) => (
                <div key={item} className="flex items-start gap-3 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-text-2 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
