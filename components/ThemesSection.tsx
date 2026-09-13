"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  BrainCircuit, HeartPulse, Sprout, SunMedium, Rocket, ShieldCheck,
  Cpu, CarFront, AlertTriangle, Landmark, GraduationCap, Droplets,
  Activity, Compass, Building, Radar, Lightbulb, ArrowRight, Filter,
  LayoutGrid, PieChart as PieChartIcon,
} from "lucide-react";
import { SIH_THEMES, type SIHTheme } from "@/lib/sih-data";
import { cn } from "@/lib/utils";
import ThemesDistributionChart from "@/components/ThemesDistributionChart";

const FILTER_TABS = ["All", "Software", "Hardware", "Both"] as const;

// All 17 Official SIH Themes Mapped to Dedicated High-Res Visuals
const THEME_IMAGES: Record<string, string> = {
  "ai-data": "/images/theme-ai.jpg",
  "health-biotech": "/images/theme-health.jpg",
  "agri-rural": "/images/theme-agriculture.jpg",
  "clean-energy": "/images/theme-energy.jpg",
  "space-astronomy": "/images/theme-space.jpg",
  "cyber-security": "/images/theme-cyber.jpg",
  "robotics-auto": "/images/theme-robotics.jpg",
  "smart-vehicles": "/images/theme-vehicles.jpg",
  "disaster-mgmt": "/images/theme-disaster.jpg",
  "heritage-culture": "/images/theme-heritage.jpg",
  "smart-education": "/images/theme-education.jpg",
  "water-sanitation": "/images/theme-water.jpg",
  "fitness-sports": "/images/theme-sports.jpg",
  "travel-tourism": "/images/theme-tourism.jpg",
  "smart-cities": "/images/theme-cities.jpg",
  "defence-maritime": "/images/theme-defence.jpg",
  "open-innovation": "/images/theme-innovation.jpg",
};

export default function ThemesSection() {
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_TABS[number]>("All");
  const [selectedTheme, setSelectedTheme] = useState<SIHTheme | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "analytics">("grid");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reveal-on-scroll observer
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
    const revealEls = sectionRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-clip, .text-slide-up, .img-pop");
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [viewMode]);

  const filteredThemes = SIH_THEMES.filter((theme) => {
    if (activeFilter === "All") return true;
    return theme.category === activeFilter;
  });

  const getThemeIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case "BrainCircuit": return <BrainCircuit {...props} />;
      case "HeartPulse": return <HeartPulse {...props} />;
      case "Sprout": return <Sprout {...props} />;
      case "SunMedium": return <SunMedium {...props} />;
      case "Rocket": return <Rocket {...props} />;
      case "ShieldCheck": return <ShieldCheck {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "CarFront": return <CarFront {...props} />;
      case "AlertTriangle": return <AlertTriangle {...props} />;
      case "Landmark": return <Landmark {...props} />;
      case "GraduationCap": return <GraduationCap {...props} />;
      case "Droplets": return <Droplets {...props} />;
      case "Activity": return <Activity {...props} />;
      case "Compass": return <Compass {...props} />;
      case "Building": return <Building {...props} />;
      case "Radar": return <Radar {...props} />;
      case "Lightbulb": return <Lightbulb {...props} />;
      default: return <Lightbulb {...props} />;
    }
  };

  return (
    <section
      id="themes"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Sliding Text Mask */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="reveal-on-scroll">
            <span className="text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
              // THEMES & CATEGORIES // OFFICIAL SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
              <span className="text-slide-mask">
                <span className="text-slide-up">17 Official Themes.</span>
              </span>{" "}
              <span className="text-slide-mask">
                <span className="text-slide-up stagger-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">
                  Countless Possibilities.
                </span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--subtle-text)] mt-3 max-w-2xl font-['Instrument_Sans']">
              Every edition of SIH spans critical frontiers of national importance. Explore high-resolution visual cards or inspect the interactive sector telemetry chart.
            </p>
          </div>

          {/* Right Controls: View Switcher (Grid vs Pie Analytics) + Category Filter Tabs */}
          <div className="reveal-on-scroll flex flex-wrap items-center gap-3 self-start lg:self-end">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-[var(--ink-2)] p-1 rounded-xl border border-[#3E5C76]/40 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300",
                  viewMode === "grid"
                    ? "bg-[#E7962B] text-[#0B1622] font-bold shadow-md shadow-[#E7962B]/20"
                    : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                )}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid Cards</span>
              </button>

              <button
                onClick={() => setViewMode("analytics")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300",
                  viewMode === "analytics"
                    ? "bg-[#2FAE82] text-[#0B1622] font-bold shadow-md shadow-[#2FAE82]/20"
                    : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                )}
              >
                <PieChartIcon className="w-3.5 h-3.5" />
                <span>Pie Analytics</span>
              </button>
            </div>

            {/* Category Filter Tabs with Animated Sliding Pill */}
            {viewMode === "grid" && (
              <div className="flex items-center gap-1 bg-[var(--ink-2)] p-1 rounded-xl border border-[#3E5C76]/40 shadow-sm">
                <Filter className="w-3.5 h-3.5 text-[#3E5C76] ml-2 hidden sm:inline" />
                {FILTER_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300",
                      activeFilter === tab
                        ? "text-[#0B1622] font-bold"
                        : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                    )}
                  >
                    {activeFilter === tab && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#E7962B] to-[#F59E0B] shadow-md shadow-[#E7962B]/30"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* View Mode 1: Analytics Pie Chart Matrix */}
        {viewMode === "analytics" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ThemesDistributionChart />
          </motion.div>
        )}

        {/* View Mode 2: 17 High-Resolution Theme Cards Grid with Pop Spring Animation */}
        {viewMode === "grid" && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredThemes.map((theme, idx) => {
                const imageSrc = THEME_IMAGES[theme.id] || "/images/hero-visual.jpg";

                return (
                  <motion.div
                    key={theme.id}
                    layout
                    initial={{ opacity: 0, scale: 0.88, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(idx * 0.04, 0.3),
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    onClick={() => setSelectedTheme(theme)}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden border border-[#3E5C76]/40 hover:border-[#E7962B]/80 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5"
                    style={{ minHeight: "290px" }}
                  >
                    {/* Full-Bleed Background Image with Pop & Hover Scale */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={theme.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Dual Layer Gradient Overlays for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/75 to-[#0B1622]/35 group-hover:via-[#0B1622]/55 group-hover:to-transparent transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E7962B]/0 via-transparent to-transparent group-hover:from-[#E7962B]/20 transition-all duration-500" />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-6" style={{ minHeight: "290px" }}>
                      {/* Top Row: Icon + Track Badge */}
                      <div className="flex items-start justify-between mb-auto">
                        <div className="p-2.5 rounded-xl bg-[#0B1622]/85 backdrop-blur-md border border-[#3E5C76]/50 group-hover:border-[#E7962B]/70 transition-all duration-300 text-[#E7962B] group-hover:scale-110 group-hover:rotate-3 shadow-md">
                          {getThemeIcon(theme.icon)}
                        </div>
                        <span
                          className={cn(
                            "px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wide uppercase border backdrop-blur-md shadow-sm",
                            theme.category === "Software"
                              ? "bg-[#3E5C76]/40 text-[#8ab4cc] border-[#3E5C76]/60"
                              : theme.category === "Hardware"
                              ? "bg-[#E7962B]/25 text-[#E7962B] border-[#E7962B]/50"
                              : "bg-[#2FAE82]/20 text-[#2FAE82] border-[#2FAE82]/50"
                          )}
                        >
                          {theme.category}
                        </span>
                      </div>

                      {/* Bottom Row: Title + Stats + Animated Arrow */}
                      <div className="mt-8">
                        <h3 className="text-lg font-bold font-['Fraunces'] text-white group-hover:text-[#E7962B] transition-colors duration-300 mb-1 leading-tight drop-shadow-md">
                          {theme.title}
                        </h3>
                        <p className="text-xs text-white/70 font-['Instrument_Sans'] leading-relaxed line-clamp-2 mb-4">
                          {theme.description}
                        </p>

                        <div className="flex items-center justify-between text-xs border-t border-white/10 pt-3">
                          <span className="font-mono text-[#2FAE82] font-semibold">
                            {theme.totalStatements}+ Challenges
                          </span>
                          <span className="text-white/80 group-hover:text-[#E7962B] flex items-center gap-1 font-semibold group-hover:translate-x-1.5 transition-all duration-300">
                            Explore <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_0_1px_rgba(231,150,43,0.6)]" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal for Theme Detail Inspection */}
        <AnimatePresence>
          {selectedTheme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1622]/90 backdrop-blur-md"
              onClick={() => setSelectedTheme(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 350, damping: 28 }}
                className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-[#E7962B]/60 shadow-2xl bg-[#0B1622]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Full-Bleed Image Header Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={THEME_IMAGES[selectedTheme.id] || "/images/hero-visual.jpg"}
                    alt={selectedTheme.title}
                    fill
                    className="object-cover object-center brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[#0B1622]/80 backdrop-blur-md text-[#E7962B] border border-white/20">
                      {getThemeIcon(selectedTheme.icon)}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#0B1622]/80 backdrop-blur-md border border-white/20 text-[#2FAE82] font-semibold">
                      {selectedTheme.category} Track
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTheme(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0B1622]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-2xl font-bold font-['Fraunces'] text-white drop-shadow-md">
                      {selectedTheme.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-white/80 font-['Instrument_Sans'] leading-relaxed">
                    {selectedTheme.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#121C2B] border border-[#3E5C76]/30">
                    <div>
                      <span className="text-[10px] font-mono text-[#3E5C76] uppercase block">AVAILABLE CHALLENGES</span>
                      <span className="text-xl font-bold font-['Fraunces'] text-[#E7962B]">
                        {selectedTheme.totalStatements}+ PS
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#3E5C76] uppercase block">EVALUATION TRACK</span>
                      <span className="text-sm font-bold font-mono text-[#2FAE82] mt-1 block">
                        {selectedTheme.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#problems"
                      onClick={() => setSelectedTheme(null)}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E7962B] to-[#F59E0B] text-[#0B1622] font-bold text-xs shadow-md shadow-[#E7962B]/20 hover:brightness-110 transition-all"
                    >
                      View Problem Statements
                    </a>
                    <button
                      onClick={() => setSelectedTheme(null)}
                      className="py-2.5 px-4 rounded-xl border border-[#3E5C76]/50 text-white/80 hover:text-white text-xs font-mono transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
