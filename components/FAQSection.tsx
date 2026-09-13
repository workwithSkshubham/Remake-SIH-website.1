"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SIH_FAQS } from "@/lib/sih-data";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-dots opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--ink-2)] border border-[#3E5C76]/40 text-xs font-mono text-[#E7962B] mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#E7962B]" />
            KNOWLEDGE BASE // RULES & SPOC PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-[var(--subtle-text)] mt-3 font-['Instrument_Sans']">
            Clear guidelines on team qualification, SPOC nominations, IP rights, and finale logistics.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {SIH_FAQS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-[var(--ink-2)] border border-[#3E5C76]/40 hover:border-[#3E5C76]/80 transition-colors overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7962B]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#3E5C76] font-semibold">
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--chalk)] font-['Fraunces']">
                      {item.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="p-1 rounded-md text-[#3E5C76] shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans'] border-t border-[#3E5C76]/20">
                        <p>{item.answer}</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#2FAE82]">
                          <FileText className="w-3 h-3" />
                          <span>OFFICIAL SIH 2026 RULEBOOK CLAUSE</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
