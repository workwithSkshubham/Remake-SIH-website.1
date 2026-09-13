"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, FileCode, Building2, ExternalLink, Hash, Calendar, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROBLEM_STATEMENTS, type ProblemStatement } from "@/lib/sih-data";
import { cn } from "@/lib/utils";

// Domain-to-image mapping for PS card thumbnails (All 17 SIH official domains supported)
const DOMAIN_IMAGES: Record<string, string> = {
  "AI & Data Science": "/images/theme-ai.jpg",
  "Health & Biotechnology": "/images/theme-health.jpg",
  "Agriculture & Rural Development": "/images/theme-agriculture.jpg",
  "Agriculture": "/images/theme-agriculture.jpg",
  "Clean Energy & Environment": "/images/theme-energy.jpg",
  "Space & Astronomy": "/images/theme-space.jpg",
  "Cyber Security": "/images/theme-cyber.jpg",
  "Robotics & Automation": "/images/theme-robotics.jpg",
  "Smart Vehicles & EV Mobility": "/images/theme-vehicles.jpg",
  "Disaster Management": "/images/theme-disaster.jpg",
  "Heritage & Culture": "/images/theme-heritage.jpg",
  "Smart Education & EdTech": "/images/theme-education.jpg",
  "Water Management & Sanitation": "/images/theme-water.jpg",
  "Fitness & Sports Tech": "/images/theme-sports.jpg",
  "Travel & Smart Tourism": "/images/theme-tourism.jpg",
  "Smart Cities & Urban Infra": "/images/theme-cities.jpg",
  "Defence & Maritime Tech": "/images/theme-defence.jpg",
  "Open Innovation": "/images/theme-innovation.jpg",
};

const getDomainImage = (domain: string): string => {
  return DOMAIN_IMAGES[domain] || "/images/theme-innovation.jpg";
};

const YEARS = ["2026 (Active)", "2025 (Archive)", "2024 (Archive)"] as const;

export default function ProblemStatements() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("2026 (Active)");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Software" | "Hardware">("All");
  const [activeStatement, setActiveStatement] = useState<ProblemStatement | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-clip").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const filteredStatements = PROBLEM_STATEMENTS.filter((ps) => {
    const matchesCategory =
      selectedCategory === "All" ||
      ps.category === selectedCategory ||
      ps.category === "Both";

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    // Extract numerical digits from query and statement code for ultra-fast ID search (e.g. typing "101")
    const queryDigits = query.replace(/\D/g, "");
    const codeDigits = ps.code.replace(/\D/g, "");

    const matchesIdDigits = queryDigits !== "" && codeDigits.includes(queryDigits);
    const matchesCode = ps.code.toLowerCase().includes(query);
    const matchesTitle = ps.title.toLowerCase().includes(query);
    const matchesDomain = ps.domain.toLowerCase().includes(query);
    const matchesOrg = ps.organization.toLowerCase().includes(query);

    return matchesCategory && (matchesIdDigits || matchesCode || matchesTitle || matchesDomain || matchesOrg);
  });

  // Helper to extract clean numerical ID like 101 from SIH-2026-PS101
  const getShortId = (code: string) => {
    const match = code.match(/\d+$/);
    return match ? match[0] : code;
  };

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 reveal-on-scroll">
          <div className="text-slide-mask">
            <span className="text-slide-up text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              // PROBLEM STATEMENTS // REAL-WORLD CHALLENGES
            </span>
          </div>
          <div className="text-slide-mask">
            <h2 className="text-slide-up text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              Real Problems.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">Real Impact.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--subtle-text)] mt-3 font-['Instrument_Sans'] leading-relaxed">
            Search challenges directly by simple ID number (e.g. <span className="text-[#E7962B] font-mono font-bold">101</span>, <span className="text-[#E7962B] font-mono font-bold">102</span>) without typing prefixes or years. Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--ink-2)] border border-[#3E5C76]/60 text-xs font-mono text-[#E7962B]">/</kbd> to focus.
          </p>
        </div>

        {/* Selection & Access Bar (Year + Category + Prefix Selector) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/40 mb-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Year / Edition Selector */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E7962B] shrink-0" />
              <div className="flex-1">
                <label className="text-[10px] font-mono text-[#3E5C76] block mb-1 uppercase font-semibold">
                  HACKATHON EDITION
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-[var(--ink)] text-[var(--chalk)] border border-[#3E5C76]/40 rounded-lg px-3 py-1.5 text-xs font-mono focus:outline-none focus:border-[#E7962B]"
                >
                  {YEARS.map((y) => (
                    <option key={y} value={y} className="bg-[#0B1622] text-[#ECEEE7]">
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Track Selector */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2FAE82] shrink-0" />
              <div className="flex-1">
                <label className="text-[10px] font-mono text-[#3E5C76] block mb-1 uppercase font-semibold">
                  TRACK CLASSIFICATION
                </label>
                <div className="flex items-center gap-1 bg-[var(--ink)] p-1 rounded-lg border border-[#3E5C76]/40">
                  {(["All", "Software", "Hardware"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "flex-1 py-1 px-2 rounded text-[11px] font-medium transition-all",
                        selectedCategory === cat
                          ? "bg-[#E7962B] text-[#0B1622] font-semibold shadow-sm"
                          : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Prefix & Direct ID Input */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#3E5C76] shrink-0" />
              <div className="flex-1">
                <label className="text-[10px] font-mono text-[#3E5C76] block mb-1 uppercase font-semibold">
                  SEARCH BY NUMBER OR KEYWORD
                </label>
                <div className="relative">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] font-mono text-[#3E5C76] pointer-events-none hidden xs:inline">
                    PS-
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type ID (e.g. 101, 102) or keywords..."
                    className="w-full pl-3 xs:pl-10 pr-10 py-1.5 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40 text-[var(--chalk)] placeholder-[#3E5C76] text-xs font-mono focus:outline-none focus:border-[#E7962B] transition-colors"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#3E5C76] border border-[#3E5C76]/30 px-1 py-0.2 rounded pointer-events-none">
                    /
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Select ID Pills */}
          <div className="mt-4 pt-3 border-t border-[#3E5C76]/25 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-mono text-[#3E5C76] shrink-0 font-semibold">
              QUICK SELECT:
            </span>
            {PROBLEM_STATEMENTS.map((ps) => {
              const shortId = getShortId(ps.code);
              const isSelected = searchQuery === shortId;
              return (
                <button
                  key={ps.id}
                  onClick={() => setSearchQuery(shortId)}
                  className={cn(
                    "px-2.5 py-1 rounded-md text-xs font-mono transition-all border shrink-0 flex items-center gap-1",
                    isSelected
                      ? "bg-[#E7962B] text-[#0B1622] font-bold border-[#E7962B]"
                      : "bg-[var(--ink)] text-[var(--subtle-text)] border-[#3E5C76]/30 hover:border-[#E7962B] hover:text-[var(--chalk)]"
                  )}
                >
                  <span className="text-[#E7962B] font-bold">#{shortId}</span>
                  <span className="max-w-[120px] truncate hidden md:inline opacity-80">
                    {ps.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[11px] font-mono text-[#C1442E] hover:underline ml-2 shrink-0"
              >
                Reset Search
              </button>
            )}
          </div>
        </div>

        {/* Problem Statements Grid */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredStatements.length > 0 ? (
              filteredStatements.map((ps) => {
                const shortId = getShortId(ps.code);
                return (
                  <motion.div
                    key={ps.id}
                    layout
                    initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
                    animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                    exit={{ opacity: 0, scale: 0.95, clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/40 hover:border-[#E7962B]/80 transition-all duration-400 flex flex-col justify-between group shadow-lg overflow-hidden theme-card"
                  >
                    {/* Domain image thumbnail */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <Image
                        src={getDomainImage(ps.domain)}
                        alt={ps.domain}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-[#0B1622]/50 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] font-mono text-[#2FAE82] font-semibold">{ps.domain}</span>
                    </div>

                    <div className="p-6">
                      <div>
                      {/* Header: Clean Short ID Badge + Full Code + Category */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-[#E7962B]/15 text-[#E7962B] font-mono text-xs font-bold border border-[#E7962B]/40">
                            #{shortId}
                          </span>
                          <span className="font-mono text-xs text-[#2FAE82] font-semibold">
                            {ps.code}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-mono uppercase border",
                            ps.category === "Software"
                              ? "bg-[#3E5C76]/20 text-[#3E5C76] border-[#3E5C76]/40"
                              : "bg-[#E7962B]/15 text-[#E7962B] border-[#E7962B]/40"
                          )}
                        >
                          {ps.category}
                        </span>
                      </div>

                      {/* PS Title */}
                      <h3 className="text-base font-bold text-[var(--chalk)] font-['Fraunces'] group-hover:text-[#E7962B] transition-colors mb-3 leading-snug">
                        {ps.title}
                      </h3>

                      {/* Ministry / Organization Badge */}
                      <div className="flex items-center gap-2 text-xs text-[var(--subtle-text)] font-['Instrument_Sans'] mb-4">
                        <Building2 className="w-3.5 h-3.5 text-[#3E5C76] shrink-0" />
                        <span className="line-clamp-1">{ps.organization}</span>
                      </div>

                      {/* Description preview */}
                      <p className="text-xs text-[var(--subtle-text)] font-['Instrument_Sans'] leading-relaxed line-clamp-3 mb-6">
                        {ps.description}
                      </p>
                    </div>

                      {/* Card Bottom Meta */}
                      <div className="pt-4 border-t border-[#3E5C76]/30 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#3E5C76]">
                          {ps.domain}
                        </span>
                        <button
                          onClick={() => setActiveStatement(ps)}
                          className="text-xs font-semibold text-[#E7962B] hover:text-[var(--chalk)] flex items-center gap-1 transition-colors"
                        >
                          Inspect Brief
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-[var(--subtle-text)]">
                <FileCode className="w-8 h-8 text-[#3E5C76] mx-auto mb-3" />
                <p className="text-base font-medium">No problem statements matched ID &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-[var(--ink-2)] text-xs font-mono text-[#E7962B] border border-[#3E5C76]/40"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Problem Statement Brief */}
        <AnimatePresence>
          {activeStatement && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1622]/85 backdrop-blur-sm animate-in fade-in duration-200">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl bg-[var(--ink-2)] border border-[#E7962B]/70 shadow-2xl overflow-hidden"
              >
                <div className="flex items-start justify-between border-b border-[#3E5C76]/30 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-[#E7962B] text-[#0B1622] font-mono text-xs font-bold">
                        #{getShortId(activeStatement.code)}
                      </span>
                      <span className="font-mono text-xs text-[#2FAE82] font-semibold">
                        {activeStatement.code} // {activeStatement.category.toUpperCase()} TRACK
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-['Fraunces'] text-[var(--chalk)] mt-1">
                      {activeStatement.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveStatement(null)}
                    className="text-[var(--subtle-text)] hover:text-[var(--chalk)] text-xl font-mono p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#3E5C76] block mb-1 font-semibold">PROPOSING MINISTRY / ENTITY</span>
                    <p className="text-sm font-semibold text-[var(--chalk)]">{activeStatement.organization}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#3E5C76] block mb-1 font-semibold">DETAILED TECHNICAL SPECIFICATION</span>
                    <p className="text-sm text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                      {activeStatement.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/30 text-xs font-mono">
                    <div>
                      <span className="text-[#3E5C76] block">Domain Cluster</span>
                      <span className="text-[var(--chalk)]">{activeStatement.domain}</span>
                    </div>
                    <div>
                      <span className="text-[#3E5C76] block">Award Amount</span>
                      <span className="text-[#E7962B] font-bold">₹1,00,000 INR</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <a
                    href="#registration"
                    onClick={() => setActiveStatement(null)}
                    className="px-5 py-2.5 rounded-lg bg-[#E7962B] text-[#0B1622] font-semibold text-xs shadow-md hover:bg-[#E7962B]/90 transition-colors"
                  >
                    Register Team for this Challenge
                  </a>
                  <button
                    onClick={() => setActiveStatement(null)}
                    className="px-4 py-2.5 rounded-lg bg-[var(--ink)] text-[var(--chalk)] border border-[#3E5C76]/40 text-xs font-medium"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
