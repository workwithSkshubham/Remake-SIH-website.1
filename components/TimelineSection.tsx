"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbulb, Code2, Trophy, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const JOURNEY_STAGES = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Identify real-world challenges",
    icon: Lightbulb,
    color: "from-[#E7962B] to-[#F59E0B]",
    border: "border-[#E7962B]",
    textCol: "text-[#E7962B]",
    timeline: "August – September",
    description: "Colleges nominate official SPOCs, and Union Ministries release 300+ vetted problem statements.",
    details: ["SPOC Institutional Onboarding", "Problem Statement Analysis", "Team Ideation Sessions"],
  },
  {
    step: "02",
    title: "Build",
    subtitle: "Develop innovative solutions",
    icon: Code2,
    color: "from-[#2FAE82] to-[#10B981]",
    border: "border-[#2FAE82]",
    textCol: "text-[#2FAE82]",
    timeline: "October",
    description: "Campus internal hackathons shortlist top 30 teams with mandatory female innovator representation.",
    details: ["Internal College Hackathons", "Rapid Agile Prototyping", "Synopsis Submission to Portal"],
  },
  {
    step: "03",
    title: "Compete",
    subtitle: "Pitch & get evaluated",
    icon: Trophy,
    color: "from-[#38BDF8] to-[#0284C7]",
    border: "border-[#38BDF8]",
    textCol: "text-[#38BDF8]",
    timeline: "November",
    description: "National screening by industry architects and ministry experts selects Grand Finale teams.",
    details: ["Double-Blind Peer Review", "Scalability & Novelty Scoring", "Nodal Center Destination Allotment"],
  },
  {
    step: "04",
    title: "Grand Finale",
    subtitle: "Showcase at the national level",
    icon: Star,
    color: "from-[#F59E0B] to-[#E7962B]",
    border: "border-[#F59E0B]",
    textCol: "text-[#F59E0B]",
    timeline: "December",
    description: "36-hour non-stop continuous build marathon across 40+ nodal centers pitching directly to Union Ministers.",
    details: ["36-Hour Continuous Sprint", "3 Iterative Jury Checkpoints", "₹1,00,000 Award Per Statement"],
  },
];

export default function TimelineSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="timeline"
      className="relative py-20 lg:py-28 bg-[var(--ink)] overflow-hidden border-t border-[#3E5C76]/25"
    >
      {/* Anchor alias for journey links */}
      <span id="journey" className="absolute -top-20" aria-hidden="true" />
      {/* Cinematic Panoramic Mountain Highway Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/journey-highway.jpg"
          alt="Curved mountain highway with glowing light trails at dusk"
          fill
          className="object-cover object-center opacity-60 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/95 via-transparent to-[var(--ink)]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row matching Prototype Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="reveal-on-scroll text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              JOURNEY
            </span>
            <div className="text-slide-mask">
              <h2 className="text-slide-up text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-white leading-tight">
                FROM IDEA → IMPACT
              </h2>
            </div>
            <p className="reveal-on-scroll stagger-2 text-sm sm:text-base text-white/80 mt-2 font-['Instrument_Sans']">
              A structured journey from ideation to execution, culminating in a grand finale.
            </p>
          </div>

          <div className="reveal-on-scroll stagger-2">
            <a
              href="#problems"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-xs font-medium text-white hover:bg-white/10 hover:border-white/60 transition-all group backdrop-blur-sm shadow-md"
            >
              <span>Explore Full Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Realistic Horizontal Stage Nodes with Connecting Illuminated Line */}
        <div className="relative py-8 mb-12">
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-[42px] left-[8%] right-[8%] h-[2px] bg-white/20 z-0">
            <div
              className="h-full bg-gradient-to-r from-[#E7962B] via-[#2FAE82] to-[#F59E0B] transition-all duration-500"
              style={{ width: `${(activeStage / (JOURNEY_STAGES.length - 1)) * 100}%` }}
            />
          </div>

          {/* 4 Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Circular Icon Milestone Badge */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-400 relative shadow-xl backdrop-blur-md mb-4",
                      isSelected
                        ? `bg-gradient-to-tr ${stage.color} ${stage.border} scale-110 shadow-[0_0_30px_rgba(231,150,43,0.4)]`
                        : "bg-[#0B1622]/80 border-white/30 text-white/70 hover:border-white hover:text-white group-hover:scale-105"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6 transition-transform",
                        isSelected ? "text-[#0B1622] scale-110" : "text-white/80"
                      )}
                    />
                    {/* Ring ping on selected */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Step Numeral */}
                  <span className="text-xs font-mono font-bold text-white/50 mb-1">
                    {stage.step}
                  </span>

                  {/* Step Title */}
                  <h3
                    className={cn(
                      "text-lg font-bold font-['Fraunces'] transition-colors mb-1",
                      isSelected ? stage.textCol : "text-white group-hover:text-white/90"
                    )}
                  >
                    {stage.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-white/70 max-w-[200px] leading-relaxed font-['Instrument_Sans']">
                    {stage.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Expanded Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--ink)]/90 backdrop-blur-md border border-[#3E5C76]/50 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#3E5C76]/30 pb-4 mb-4 gap-2">
            <div>
              <span className="text-xs font-mono text-[#E7962B] font-semibold">
                PHASE {JOURNEY_STAGES[activeStage].step} // {JOURNEY_STAGES[activeStage].timeline}
              </span>
              <h4 className="text-2xl font-bold font-['Fraunces'] text-white mt-1">
                {JOURNEY_STAGES[activeStage].title} — {JOURNEY_STAGES[activeStage].subtitle}
              </h4>
            </div>
            <span className="text-xs font-mono text-[#2FAE82] px-3 py-1 rounded-full bg-[#2FAE82]/15 border border-[#2FAE82]/40 self-start md:self-auto">
              NATIONAL MANDATE
            </span>
          </div>

          <p className="text-sm text-white/80 leading-relaxed font-['Instrument_Sans'] mb-6">
            {JOURNEY_STAGES[activeStage].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {JOURNEY_STAGES[activeStage].details.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-3 rounded-xl bg-[var(--ink-2)]/80 border border-[#3E5C76]/30 text-xs text-[var(--chalk)]/90"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2FAE82] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
