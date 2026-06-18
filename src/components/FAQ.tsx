"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { faqs } from "@/lib/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <p className="eyebrow mb-4">Questions &amp; Answers</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Frequently asked questions
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Everything Southwest Florida homeowners ask before booking an assessment.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "bg-surface border-[#49B4FF]/40"
                      : "bg-surface/60 border-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                    >
                      <span className="text-white font-medium">{faq.question}</span>
                      <span className="shrink-0 w-7 h-7 rounded-full bg-[#008CFF]/12 border border-[#008CFF]/25 flex items-center justify-center text-[#49B4FF]">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[#AAB8C8] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
