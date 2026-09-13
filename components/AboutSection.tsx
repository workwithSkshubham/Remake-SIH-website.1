"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Target, Cpu, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function AboutSection() {
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
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const revealEls = sectionRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-clip");
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-detail"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--ink)] overflow-hidden transition-colors duration-300"
    >
      {/* Blueprint Spine Hairline */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3E5C76]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Editorial narrative */}
          <div className="lg:col-span-6">
            <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-2)] border border-[#3E5C76]/40 text-xs font-mono text-[#2FAE82] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FAE82]" />
              NATIONAL INNOVATION MANDATE
            </div>

            <div className="text-slide-mask mb-6">
              <h2 className="text-slide-up text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
                A Nationwide Crucible for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">
                  Working Prototypes.
                </span>
              </h2>
            </div>

            <div className="reveal-on-scroll stagger-2 space-y-4 text-base text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
              <p>
                Launched by the <span className="text-[var(--chalk)] font-semibold">Ministry of Education</span> and <span className="text-[var(--chalk)] font-semibold">AICTE</span>, Smart India Hackathon is a non-stop, 36-hour digital and product development competition that invites college students across India to address pressing public governance and industrial challenges.
              </p>
              <p>
                Unlike standard hackathons that end at slide decks, SIH bridges academia with operational governance. Solutions developed during the finale are incubated, peer-reviewed, and deployed across Indian railways, agricultural supply chains, national disaster telemetry, and healthcare dispensaries.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="reveal-on-scroll stagger-3 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Target, color: "#E7962B", title: "Grassroots Realism", desc: "Real ministry problem statements, not simulated exercises." },
                { icon: Cpu, color: "#2FAE82", title: "Software & Hardware", desc: "Dual-track competition covering code and embedded systems." },
                { icon: Sparkles, color: "#E7962B", title: "Scale & Seed Grants", desc: "Direct acceleration paths and incubation grants for winners." },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-[var(--ink-2)] border border-[#3E5C76]/40 shadow-sm group hover:border-[#E7962B]/60 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-2 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/30 w-fit mb-3">
                      <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--chalk)] group-hover:text-[#E7962B] transition-colors">{pillar.title}</h4>
                    <p className="text-xs text-[var(--subtle-text)] mt-1">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="reveal-on-scroll stagger-4 mt-8">
              <a
                href="#themes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7962B] hover:text-[var(--chalk)] transition-colors group"
              >
                <span>Explore All 17 Themes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Cinematic Ashoka Pillar Image */}
          <div className="lg:col-span-6 reveal-clip">
            <div className="relative rounded-2xl overflow-hidden border border-[#3E5C76]/40 shadow-2xl shadow-black/50 group" style={{ minHeight: "520px" }}>
              <Image
                src="/images/about-bg.jpg"
                alt="Ashoka Pillar Lion Capital — National Symbol of India at twilight"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1622]/20 via-transparent to-transparent" />

              {/* Blueprint corner marks */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#E7962B]/70 pointer-events-none" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#E7962B]/70 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#E7962B]/70 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#E7962B]/70 pointer-events-none" />

              {/* Floating Stats Overlay */}
              <div className="absolute top-6 right-6 bg-[#0B1622]/85 backdrop-blur-md border border-[#E7962B]/40 rounded-xl p-4 shadow-xl">
                <p className="text-xs font-mono text-[#E7962B] font-semibold mb-2">ABOUT SIH</p>
                <div className="space-y-2">
                  {[
                    { val: "50,000+", label: "Students" },
                    { val: "10,000+", label: "Colleges" },
                    { val: "2000+", label: "Problem Statements" },
                    { val: "36", label: "Hours" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-6 text-xs">
                      <span className="font-bold font-['Fraunces'] text-white text-base">{s.val}</span>
                      <span className="text-white/60 font-['Instrument_Sans']">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="p-4 rounded-xl bg-[#0B1622]/90 backdrop-blur-md border border-[#3E5C76]/40">
                  <p className="text-xs font-mono text-[#E7962B] font-semibold mb-1">NATIONAL MANDATE</p>
                  <p className="text-sm font-semibold text-white font-['Fraunces']">
                    Innovating for a <span className="text-[#2FAE82]">Better Tomorrow</span>
                  </p>
                  <p className="text-xs text-white/60 font-['Instrument_Sans'] mt-1">
                    A flagship initiative of the Government of India
                  </p>
                </div>
              </div>

              {/* Technical spec steps — hidden, revealed on hover */}
              <div className="absolute inset-0 bg-[#0B1622]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
                <p className="text-xs font-mono text-[#E7962B] font-semibold mb-4 tracking-wider">THE 36-HOUR OPERATING ARCHITECTURE</p>
                <div className="space-y-3">
                  {[
                    { stage: "01", title: "Multi-Tier Screening", desc: "Internal college rounds filter top 30 teams before central committee vetting." },
                    { stage: "02", title: "36-Hour Continuous Sprint", desc: "Zero-pause build sprint with 3 evaluation checkpoints by ministry mentors." },
                    { stage: "03", title: "Direct Dignitary Demo", desc: "Grand finale teams pitch live to union ministers and tech CEOs." },
                  ].map((step) => (
                    <div key={step.stage} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--ink-2)] border border-[#3E5C76]/30">
                      <CheckCircle2 className="w-5 h-5 text-[#2FAE82] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-semibold text-[var(--chalk)]">Stage {step.stage}: {step.title}</h5>
                        <p className="text-xs text-[var(--subtle-text)] mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#3E5C76]/30 flex items-center justify-between text-xs font-mono text-[#3E5C76]">
                  <span>GOVERNMENT OF INDIA // AICTE // MIC</span>
                  <span className="text-[#E7962B]">VIKSIT BHARAT @ 2047</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
