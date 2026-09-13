"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const PARTNERS_ROW1 = [
  { name: "Ministry of Education", abbr: "MoE", sub: "Government of India", badge: "Organizing Ministry", color: "#E7962B" },
  { name: "MeitY", abbr: "MeitY", sub: "Digital India", badge: "Apex Partner", color: "#2FAE82" },
  { name: "TCS", abbr: "TCS", sub: "Tata Consultancy Services", badge: "Platinum Partner", color: "#E7962B" },
  { name: "Infosys", abbr: "Infosys", sub: "Navigate Your Next", badge: "Tech Partner", color: "#2FAE82" },
  { name: "accenture", abbr: "accenture", sub: "High performance. Delivered.", badge: "Consulting Partner", color: "#E7962B" },
  { name: "IBM", abbr: "IBM", sub: "Cloud & Quantum AI", badge: "Infrastructure", color: "#2FAE82" },
];

const PARTNERS_ROW2 = [
  { name: "BOSCH", abbr: "BOSCH", sub: "Industry Solutions", badge: "Hardware Partner", color: "#E7962B" },
  { name: "Deloitte", abbr: "Deloitte.", sub: "As one. For all.", badge: "Advisory Partner", color: "#2FAE82" },
  { name: "HCL", abbr: "HCL", sub: "Technologies", badge: "Tech Partner", color: "#E7962B" },
  { name: "TATA Motors", abbr: "TATA", sub: "Motors", badge: "Industry Partner", color: "#2FAE82" },
  { name: "Mahindra", abbr: "Mahindra", sub: "Rise", badge: "Industry Partner", color: "#E7962B" },
  { name: "IITs", abbr: "IITs", sub: "Premier Institutes", badge: "Academic Partner", color: "#2FAE82" },
  { name: "NITs", abbr: "NITs", sub: "National Institutes", badge: "Academic Partner", color: "#E7962B" },
];

// Duplicated for seamless marquee loop
const MARQUEE_ROW1 = [...PARTNERS_ROW1, ...PARTNERS_ROW1];
const MARQUEE_ROW2 = [...PARTNERS_ROW2, ...PARTNERS_ROW2];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const revealEls = sectionRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-clip");
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Deep cinematic dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1622] via-[#0d1c2d] to-[#0B1622]" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E7962B]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal-on-scroll">
            <span className="text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              OUR SPONSORS & PARTNERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              Together for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">
                Smarter India
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--subtle-text)] mt-3 max-w-xl font-['Instrument_Sans']">
              Supported by the Government of India and leading organizations from industry, academia, and the private sector.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <a
              href="#sponsors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3E5C76]/60 text-xs font-medium text-[var(--chalk)] hover:bg-[#3E5C76]/20 hover:border-[#E7962B]/60 transition-all group"
            >
              <span>View All Partners</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── Marquee Row 1 (scrolls left) */}
        <div className="reveal-clip mb-4">
          <p className="text-[10px] font-mono text-[#3E5C76] tracking-widest uppercase mb-4 font-semibold">
            Government & Industry Partners
          </p>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--ink)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--ink)] to-transparent z-10 pointer-events-none" />

            <div className="marquee-track gap-4" style={{ animationDuration: "28s" }}>
              {MARQUEE_ROW1.map((partner, i) => (
                <div
                  key={`${partner.abbr}-${i}`}
                  className="flex-shrink-0 w-48 h-24 px-5 py-4 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/30 hover:border-[#E7962B]/70 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E7962B]/10"
                >
                  <span
                    className="font-['Fraunces'] text-xl font-bold transition-colors tracking-tight"
                    style={{ color: partner.color }}
                  >
                    {partner.abbr}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--subtle-text)] mt-1 line-clamp-1">
                    {partner.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#2FAE82] mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    {partner.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Marquee Row 2 (scrolls right — reverse direction) */}
        <div className="reveal-clip stagger-2">
          <p className="text-[10px] font-mono text-[#3E5C76] tracking-widest uppercase mb-4 font-semibold">
            Industry & Academic Partners
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--ink)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--ink)] to-transparent z-10 pointer-events-none" />

            <div
              className="marquee-track gap-4"
              style={{ animationDuration: "36s", animationDirection: "reverse" }}
            >
              {MARQUEE_ROW2.map((partner, i) => (
                <div
                  key={`${partner.abbr}-r2-${i}`}
                  className="flex-shrink-0 w-44 h-24 px-5 py-4 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/30 hover:border-[#2FAE82]/70 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2FAE82]/10"
                >
                  <span
                    className="font-['Fraunces'] text-lg font-bold transition-colors tracking-tight"
                    style={{ color: partner.color }}
                  >
                    {partner.abbr}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--subtle-text)] mt-1 line-clamp-1">
                    {partner.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#2FAE82] mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    {partner.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="reveal-on-scroll stagger-3 mt-14 pt-10 border-t border-[#3E5C76]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#3E5C76]">
          <span>OFFICIAL ENTERPRISE ALLIANCE // GOVERNMENT OF INDIA</span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2FAE82] animate-pulse" />
            <span className="text-[#2FAE82] font-semibold">ALL PARTNERS VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
