"use client";

import { useEffect, useRef } from "react";
import { Users, Flame, FileCode, Building2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SIH_STATS } from "@/lib/sih-data";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const revealRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    revealRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-clip").forEach((el) => revealObserver.observe(el));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      countersRef.current.forEach((el, index) => {
        if (el) {
          const stat = SIH_STATS[index];
          if (stat.label.includes("Students")) el.innerText = "1.5L+";
          else if (stat.label.includes("Teams")) el.innerText = "20K+";
          else if (stat.label.includes("Statements")) el.innerText = "300+";
          else if (stat.label.includes("Institutions")) el.innerText = "500+";
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          countersRef.current.forEach((el, index) => {
            if (!el) return;
            const stat = SIH_STATS[index];
            const target = stat.value;

            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power2.out",
              onUpdate: () => {
                if (stat.label.includes("Students")) {
                  const lakhs = (obj.val / 100000).toFixed(1);
                  el.innerText = `${lakhs}L+`;
                } else if (stat.label.includes("Teams")) {
                  const k = Math.floor(obj.val / 1000);
                  el.innerText = `${k}K+`;
                } else {
                  el.innerText = `${Math.floor(obj.val)}+`;
                }
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      revealObserver.disconnect();
    };
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="w-5 h-5 text-[#2FAE82]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#E7962B]" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-[#3E5C76]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#2FAE82]" />;
      default:
        return <Users className="w-5 h-5 text-[#2FAE82]" />;
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-b border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 bg-blueprint-dots opacity-40 pointer-events-none" />

      <div ref={revealRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 reveal-on-scroll">
            <span className="text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              // THE NUMBERS // VERIFIED NATIONAL METRICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              INDIA HAS PROBLEMS.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">YOU BUILD THE SOLUTIONS.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2 reveal-on-scroll stagger-2">
            <p className="text-base sm:text-lg text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans'] mb-6">
              Smart India Hackathon brings together young engineering minds from across 28 States and 8 Union Territories to solve real-world challenges formulated by union ministries, state departments, and premier industries.
            </p>
            <div>
              <a
                href="#journey"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2FAE82] hover:text-[var(--chalk)] transition-colors group"
              >
                <span>Understand the 36-Hour Hackathon Mission</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Large Odometer Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIH_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal-on-scroll stagger-${index + 1} relative p-6 sm:p-8 rounded-xl bg-[var(--ink-2)] border border-[#3E5C76]/40 hover:border-[#E7962B]/80 transition-all duration-400 group hover:-translate-y-2 shadow-lg overflow-hidden`}
            >
              {/* Subtle gradient bg on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7962B]/0 to-transparent group-hover:from-[#E7962B]/8 transition-all duration-500 pointer-events-none" />
              {/* Corner accent bracket */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#3E5C76]/70 group-hover:border-[#E7962B] transition-colors" />

              {/* Icon & Index */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40">
                  {getIcon(stat.iconName)}
                </div>
                <span className="font-mono text-xs text-[#3E5C76] tracking-wider">
                  STAT_0{index + 1}
                </span>
              </div>

              {/* Big Fraunces Numeral */}
              <div className="mb-2">
                <span
                  ref={(el) => {
                    countersRef.current[index] = el;
                  }}
                  className="text-4xl sm:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] tracking-tight group-hover:text-[#E7962B] transition-colors"
                >
                  0
                </span>
              </div>

              {/* Title & Sublabel */}
              <h3 className="text-base font-semibold text-[var(--chalk)] font-['Instrument_Sans'] mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
