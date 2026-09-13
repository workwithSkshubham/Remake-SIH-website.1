"use client";

import { useState } from "react";
import { UserCheck, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_ROLES = [
  {
    role: "01 // Team Lead",
    title: "Project Architect",
    desc: "Guides technical roadmap, coordinates sprint benchmarks, and leads the jury pitch presentation.",
    highlight: "Leadership & System Design",
  },
  {
    role: "02 // Core Developer",
    title: "Backend / Cloud Engineer",
    desc: "Builds high-throughput API endpoints, containerized services, and database schemas.",
    highlight: "Microservices & Database",
  },
  {
    role: "03 // Intelligence",
    title: "AI / ML Specialist",
    desc: "Develops model pipelines, edge inference routines, and computer vision / NLP models.",
    highlight: "TensorFlow / PyTorch / Edge ML",
  },
  {
    role: "04 // Systems",
    title: "Hardware / Embedded Lead",
    desc: "Interfaces microcontrollers (ESP32, Raspberry Pi), sensor telemetry, and hardware prototypes.",
    highlight: "Firmware & PCB Circuitry",
  },
  {
    role: "05 // Interface",
    title: "UI/UX & Frontend Designer",
    desc: "Designs responsive interfaces, dashboards, and accessible citizen-facing experiences.",
    highlight: "React / Modern Design Systems",
  },
  {
    role: "06 // Domain Lead",
    title: "Subject Matter Specialist",
    desc: "Validates problem context, regulatory compliance, field feasibility, and economic viability.",
    highlight: "Policy & Impact Analytics",
  },
];

export default function EligibilitySection() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--ink-2)] border border-[#3E5C76]/40 text-xs font-mono text-[#E7962B] mb-4 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-[#E7962B]" />
            MANDATORY PARTICIPATION CRITERIA
          </div>
          <div className="text-slide-mask">
            <h2 className="text-slide-up text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              The Blueprint of a Winning Team.
            </h2>
          </div>
          <p className="reveal-on-scroll stagger-2 text-base text-[var(--subtle-text)] mt-4 leading-relaxed font-['Instrument_Sans']">
            SIH mandates a strict collaborative structure designed to emulate cross-functional industry innovation units. Every registered team must strictly adhere to these national guidelines.
          </p>
        </div>

        {/* Heroic Dual Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Oversized Numeral Card: Exactly 6 Members (6 cols) */}
          <div className="lg:col-span-6 relative p-8 sm:p-10 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/50 flex flex-col justify-between overflow-hidden shadow-xl">
            {/* Giant watermark numeral in the background */}
            <div className="absolute -right-8 -bottom-10 text-[180px] sm:text-[220px] font-bold font-['Fraunces'] text-[#3E5C76]/10 select-none pointer-events-none leading-none">
              6
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono text-[#3E5C76] tracking-wider uppercase block mb-2 font-semibold">
                RULE_01 // STRICT COMPOSITION
              </span>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl sm:text-7xl font-bold font-['Fraunces'] text-[#E7962B]">
                  6
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Fraunces'] text-[var(--chalk)]">
                    Members Per Team
                  </h3>
                  <p className="text-xs font-mono text-[#2FAE82] font-semibold">STRICTLY NON-NEGOTIABLE</p>
                </div>
              </div>
              <p className="text-sm text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                Each team must consist of exactly 6 regular bona fide college students from the same institution. Multidisciplinary teams combining engineering, design, and computer science streams are highly recommended.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-[#3E5C76]/30 flex items-center gap-3 text-xs text-[var(--subtle-text)] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#2FAE82]" />
              <span>COLLEGE SPOC ENDORSEMENT MANDATORY FOR ENTRY</span>
            </div>
          </div>

          {/* Mandatory Female Representation Card (6 cols) */}
          <div className="lg:col-span-6 relative p-8 sm:p-10 rounded-2xl bg-[var(--ink-2)] border border-[#2FAE82]/50 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2FAE82]/15 border border-[#2FAE82]/40 text-xs font-mono text-[#2FAE82] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#2FAE82]" />
                DIVERSITY MANDATE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Fraunces'] text-[var(--chalk)] mb-3">
                Minimum 1 Woman Innovator.
              </h3>
              <p className="text-sm text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                To foster gender inclusion across India&apos;s technological frontier, every registered team must include at least one female student. Teams lacking female representation are disqualified during automated system screening.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E7962B] shrink-0 mt-0.5" />
              <div className="text-xs text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                <span className="font-semibold text-[var(--chalk)]">Inclusive Innovation:</span> Over 38% of SIH Grand Finale winners in the recent editions were led by women engineering captains.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 6-Member Team Schematic */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-[#3E5C76] tracking-wider uppercase font-semibold">
              RECOMMENDED 6-SEAT ROLE SCHEMATIC
            </span>
            <span className="text-xs font-mono text-[#E7962B] font-semibold">
              CLICK ROLES TO INSPECT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM_ROLES.map((role, idx) => (
              <button
                key={role.role}
                onClick={() => setActiveRole(idx)}
                className={cn(
                  "p-5 rounded-xl text-left transition-all duration-200 border relative group shadow-sm",
                  activeRole === idx
                    ? "bg-[var(--ink-2)] border-[#E7962B] shadow-lg shadow-[#E7962B]/10"
                    : "bg-[var(--ink-2)]/70 border-[#3E5C76]/30 hover:border-[#3E5C76]/70 hover:bg-[var(--ink-2)]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#E7962B] font-semibold">{role.role}</span>
                  <span className="w-2 h-2 rounded-full bg-[#3E5C76] group-hover:bg-[#2FAE82] transition-colors" />
                </div>
                <h4 className="text-base font-bold text-[var(--chalk)] font-['Fraunces'] mb-1">
                  {role.title}
                </h4>
                <p className="text-xs text-[var(--subtle-text)] font-['Instrument_Sans'] mb-3 line-clamp-2">
                  {role.desc}
                </p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--ink)] text-[#2FAE82] border border-[#3E5C76]/30">
                  {role.highlight}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
