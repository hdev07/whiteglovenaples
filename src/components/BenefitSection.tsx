"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const questions = [
  "Are you building a new home?",
  "Are you renovating an existing home?",
  "Are you focused on optimizing sleep and recovery?",
  "Do you have a smart home with many connected devices?",
  "Are wellness and a healthy environment a priority for you?",
  "Do you live near a cell tower or have a smart meter?",
  "Does anyone experience restless sleep, fatigue, or brain fog?",
  "Do you want a baseline measurement for peace of mind?",
];

export default function BenefitSection() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const count = checked.size;
  const message =
    count === 0
      ? "Tick the boxes that apply to your household."
      : count <= 2
        ? "Even one of these is a great reason to get a baseline assessment."
        : count <= 5
          ? "Several of these apply — an assessment would give you real clarity."
          : "Strong fit. A professional assessment is highly recommended for your home.";

  return (
    <section className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <FadeIn>
            <p className="eyebrow mb-4">Is It Right For You?</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Could your home benefit?
            </h2>
            <p className="text-[#AAB8C8] text-lg leading-relaxed mb-8">
              Most Florida homeowners have never measured the EMF environment inside
              their home. A single assessment gives you data, clarity, and a clear path
              forward — whether you need mitigation or simply peace of mind.
            </p>

            <div className="glass rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white">
                  {count} of {questions.length} selected
                </span>
                <span className="text-xs text-[#7D8BA0]">{Math.round((count / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/8 overflow-hidden mb-4">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#008CFF] to-[#00D1FF] transition-all duration-500"
                  style={{ width: `${(count / questions.length) * 100}%` }}
                />
              </div>
              <p className="text-sm text-[#AAB8C8] leading-relaxed">{message}</p>
            </div>

            <a href="#contact" className="btn btn-blue text-sm px-7 py-3.5 rounded-xl">
              Schedule Assessment
              <ChevronRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-[#7D8BA0]">
              Same-week availability · No obligation · Naples &amp; Southwest Florida
            </p>
          </FadeIn>

          {/* Right — interactive checklist */}
          <FadeIn delay={0.12}>
            <ul className="space-y-2.5">
              {questions.map((q, i) => {
                const isChecked = checked.has(i);
                return (
                  <li key={q}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-pressed={isChecked}
                      className={`w-full flex items-center gap-4 text-left rounded-2xl px-5 py-4 border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#008CFF]/10 border-[#49B4FF]/60 shadow-[0_0_24px_-8px_rgba(0,140,255,0.6)]"
                          : "bg-surface border-[rgba(255,255,255,0.08)] hover:border-[rgba(73,180,255,0.4)]"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                          isChecked
                            ? "bg-[#008CFF] border-[#008CFF]"
                            : "border-white/25 bg-white/5"
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                      </span>
                      <span
                        className={`text-sm leading-snug transition-colors ${
                          isChecked ? "text-white" : "text-[#AAB8C8]"
                        }`}
                      >
                        {q}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
