"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Users2, Building, Sparkles, Compass, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: Building,
    color: "#E7962B",
    title: "Real-World Problem Statements",
    sub: "Solve issues that matter",
    description: "Tackle pressing challenges submitted directly by 50+ Central Ministries, State Governments, and Fortune 500 enterprises.",
  },
  {
    icon: Compass,
    color: "#2FAE82",
    title: "Mentorship & Guidance",
    sub: "Learn from industry experts",
    description: "Get hands-on architectural reviews and debugging guidance from veteran engineers from TCS, Infosys, IBM, and AWS.",
  },
  {
    icon: Users2,
    color: "#E7962B",
    title: "Networking Opportunities",
    sub: "Build a strong community",
    description: "Connect with the top 1% student technologists, venture incubators, and national technical directors across India.",
  },
  {
    icon: Award,
    color: "#2FAE82",
    title: "Recognition & Rewards",
    sub: "Get the platform you deserve",
    description: "Direct ₹1,00,000 cash prizes per statement, Ministry excellence citations, and fast-track seed incubation grants.",
  },
];

export default function WhySIHSection() {
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
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint dots */}
      <div className="absolute inset-0 bg-blueprint-dots opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="text-slide-mask">
            <span className="text-slide-up text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              WHY JOIN SIH?
            </span>
          </div>
          <div className="text-slide-mask">
            <h2 className="text-slide-up text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              MORE THAN A HACKATHON.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">
                IT&apos;S A MOVEMENT.
              </span>
            </h2>
          </div>
        </div>

        {/* Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (5 cols): Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`reveal-on-scroll stagger-${idx + 1} p-5 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/40 hover:border-[#E7962B]/80 transition-all duration-400 group shadow-md flex items-start gap-4 hover:-translate-y-1`}
                >
                  <div
                    className="p-3 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/40 group-hover:border-[#E7962B]/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0"
                    style={{ color: b.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold font-['Fraunces'] text-[var(--chalk)] group-hover:text-[#E7962B] transition-colors mb-0.5">
                      {b.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold mb-1" style={{ color: b.color }}>
                      {b.sub}
                    </p>
                    <p className="text-xs text-[var(--subtle-text)] font-['Instrument_Sans'] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Cinematic Photo */}
          <div className="lg:col-span-7 relative reveal-clip">
            <div className="relative rounded-2xl overflow-hidden border border-[#3E5C76]/50 shadow-2xl group aspect-[16/10] w-full bg-[var(--ink-2)]">
              <Image
                src="/images/community-visual.jpg"
                alt="Diverse Indian students in BUILD FOR INDIA hoodies facing sunrise"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/30 via-transparent to-transparent" />

              {/* Blueprint corner marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E7962B]/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E7962B]/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E7962B]/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E7962B]/60 pointer-events-none" />

              {/* Handwritten Script Callout */}
              <div className="absolute top-6 right-6 z-20 pointer-events-none select-none">
                <div className="relative">
                  <span className="font-['Fraunces'] italic text-lg sm:text-2xl font-bold text-[#E7962B] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] block -rotate-3">
                    Your idea
                    <br />
                    can change
                    <br />
                    lives ~
                  </span>
                  <svg
                    className="w-12 h-12 text-[#E7962B] -mt-2 ml-4 -rotate-12 drop-shadow-md"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M10,15 C20,35 30,25 40,40" />
                    <path d="M32,40 L40,40 L40,32" />
                  </svg>
                </div>
              </div>

              {/* Bottom Tag Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1622]/90 backdrop-blur-md border border-[#3E5C76]/40 text-left">
                <p className="text-xs font-mono text-[#E7962B] font-semibold">NATIONAL ENGINEERING COHORT</p>
                <p className="text-sm font-semibold text-white font-['Instrument_Sans'] mt-0.5">
                  &ldquo;Built by India&apos;s youth, solving India&apos;s challenges, creating global impact.&rdquo;
                </p>
                <div className="mt-3">
                  <a
                    href="#problems"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2FAE82] hover:text-white transition-colors group"
                  >
                    <span>Join the Movement</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
