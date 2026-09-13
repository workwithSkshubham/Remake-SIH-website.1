"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PieChart, Sparkles, Layers, ArrowUpRight, BarChart3 } from "lucide-react";
import { SIH_THEMES, type SIHTheme } from "@/lib/sih-data";
import { cn } from "@/lib/utils";

// Distinct curated color palette for the 17 themes
const THEME_COLORS: Record<string, string> = {
  "ai-data": "#38BDF8",           // Sky blue
  "health-biotech": "#EF4444",    // Red
  "agri-rural": "#10B981",        // Emerald
  "clean-energy": "#F59E0B",      // Amber
  "space-astronomy": "#8B5CF6",    // Purple
  "cyber-security": "#06B6D4",    // Cyan
  "robotics-auto": "#EC4899",     // Pink
  "smart-vehicles": "#E7962B",    // Marigold
  "disaster-mgmt": "#DC2626",     // Dark Red
  "heritage-culture": "#D97706",  // Ochre
  "smart-education": "#6366F1",   // Indigo
  "water-sanitation": "#0284C7",  // Blue
  "fitness-sports": "#84CC16",    // Lime
  "travel-tourism": "#14B8A6",    // Teal
  "smart-cities": "#A855F7",      // Violet
  "defence-maritime": "#2563EB",  // Royal Blue
  "open-innovation": "#F97316",   // Orange
};

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

export default function ThemesDistributionChart() {
  const [hoveredThemeId, setHoveredThemeId] = useState<string | null>("ai-data");
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Software" | "Hardware" | "Both">("All");

  const filteredThemes = useMemo(() => {
    if (selectedFilter === "All") return SIH_THEMES;
    return SIH_THEMES.filter((t) => t.category === selectedFilter);
  }, [selectedFilter]);

  const totalStatements = useMemo(() => {
    return filteredThemes.reduce((acc, t) => acc + t.totalStatements, 0);
  }, [filteredThemes]);

  // Compute donut slice angles
  const slices = useMemo(() => {
    let currentAngle = -90; // Start at 12 o'clock
    return filteredThemes.map((theme) => {
      const percentage = (theme.totalStatements / totalStatements) * 100;
      const angleSpan = (theme.totalStatements / totalStatements) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angleSpan;
      currentAngle = endAngle;

      return {
        theme,
        percentage,
        startAngle,
        endAngle,
        color: THEME_COLORS[theme.id] || "#E7962B",
      };
    });
  }, [filteredThemes, totalStatements]);

  const activeTheme = useMemo(() => {
    return SIH_THEMES.find((t) => t.id === hoveredThemeId) || SIH_THEMES[0];
  }, [hoveredThemeId]);

  // Helper to convert polar to cartesian
  const polarToCartesian = (cx: number, cy: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + radius * Math.cos(angleInRadians),
      y: cy + radius * Math.sin(angleInRadians),
    };
  };

  // Helper to generate SVG Donut Arc path
  const createDonutPath = (
    cx: number,
    cy: number,
    innerRadius: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number
  ) => {
    // Avoid full 360 overlap glitch
    const adjustedEnd = endAngle - startAngle >= 359.99 ? startAngle + 359.99 : endAngle;
    const startOuter = polarToCartesian(cx, cy, outerRadius, adjustedEnd);
    const endOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
    const startInner = polarToCartesian(cx, cy, innerRadius, startAngle);
    const endInner = polarToCartesian(cx, cy, innerRadius, adjustedEnd);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", startOuter.x, startOuter.y,
      "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
      "L", startInner.x, startInner.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 1, endInner.x, endInner.y,
      "Z",
    ].join(" ");
  };

  return (
    <div className="rounded-3xl bg-[var(--ink-2)] border border-[#3E5C76]/40 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      {/* Top Header & Filter Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#3E5C76]/30 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink)] border border-[#3E5C76]/50 text-xs font-mono text-[#E7962B] mb-2 shadow-sm">
            <PieChart className="w-3.5 h-3.5 text-[#E7962B]" />
            NATIONAL TELEMETRY // 17 OFFICIAL DOMAINS
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Fraunces'] text-[var(--chalk)]">
            Problem Statements Distribution Matrix
          </h3>
          <p className="text-xs sm:text-sm text-[var(--subtle-text)] mt-1 font-['Instrument_Sans']">
            Interactive sector breakdown of {totalStatements}+ verified Ministry challenges. Hover any sector slice to inspect telemetry.
          </p>
        </div>

        {/* Filter Pills with animated background */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[var(--ink)] border border-[#3E5C76]/40">
          {(["All", "Software", "Hardware", "Both"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={cn(
                "relative px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300",
                selectedFilter === tab
                  ? "text-[#0B1622] font-bold"
                  : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
              )}
            >
              {selectedFilter === tab && (
                <motion.div
                  layoutId="pieFilterPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E7962B] to-[#F59E0B] shadow-md shadow-[#E7962B]/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout: Chart Left, Detail Telemetry Right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (6 cols): SVG Donut Chart with Center Display */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full filter drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] transform rotate-90"
            >
              {slices.map((slice) => {
                const isHovered = hoveredThemeId === slice.theme.id;
                const pathData = createDonutPath(
                  200,
                  200,
                  isHovered ? 100 : 108,
                  isHovered ? 185 : 172,
                  slice.startAngle,
                  slice.endAngle
                );

                return (
                  <path
                    key={slice.theme.id}
                    d={pathData}
                    fill={slice.color}
                    opacity={hoveredThemeId === null || isHovered ? 1 : 0.4}
                    className="transition-all duration-300 cursor-pointer stroke-[var(--ink-2)] stroke-2"
                    onMouseEnter={() => setHoveredThemeId(slice.theme.id)}
                  />
                );
              })}
            </svg>

            {/* Center Donut Hub */}
            <div className="absolute inset-0 m-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#0B1622] border-2 border-[#3E5C76]/50 shadow-inner flex flex-col items-center justify-center p-3 text-center pointer-events-none">
              <span className="text-[10px] font-mono text-[#3E5C76] uppercase tracking-wider font-semibold">
                ACTIVE SECTOR
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-['Fraunces'] text-[#E7962B] leading-none my-1">
                {activeTheme.totalStatements}
              </span>
              <span className="text-[11px] font-mono text-[#2FAE82] font-semibold">
                {((activeTheme.totalStatements / totalStatements) * 100).toFixed(1)}% OF TOTAL
              </span>
              <span className="text-[10px] text-white/70 line-clamp-1 font-['Instrument_Sans'] mt-1 px-2">
                {activeTheme.title}
              </span>
            </div>
          </div>

          <p className="text-[11px] font-mono text-[var(--subtle-text)] mt-4">
            Total Verified Statements: <span className="text-[#E7962B] font-bold">{totalStatements}</span> across {filteredThemes.length} Sectors
          </p>
        </div>

        {/* Right Column (6 cols): Active Sector Inspection Card */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTheme.id}
              initial={{ opacity: 0, x: 20, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-[#3E5C76]/50 bg-[#0B1622] shadow-xl"
            >
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={THEME_IMAGES[activeTheme.id] || "/images/hero-visual.jpg"}
                  alt={activeTheme.title}
                  fill
                  className="object-cover object-center brightness-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/60 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: THEME_COLORS[activeTheme.id] || "#E7962B" }}
                  />
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#0B1622]/80 backdrop-blur-md border border-white/20 text-[#2FAE82] font-semibold">
                    {activeTheme.category} TRACK
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h4 className="text-xl sm:text-2xl font-bold font-['Fraunces'] text-white drop-shadow-md">
                    {activeTheme.title}
                  </h4>
                </div>
              </div>

              {/* Card Detail Telemetry */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-white/80 font-['Instrument_Sans'] leading-relaxed">
                  {activeTheme.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#121C2B] border border-[#3E5C76]/30">
                    <span className="text-[10px] font-mono text-[#3E5C76] block uppercase font-semibold">
                      CHALLENGES LISTED
                    </span>
                    <span className="text-lg font-bold font-['Fraunces'] text-[#E7962B]">
                      {activeTheme.totalStatements} PS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#121C2B] border border-[#3E5C76]/30">
                    <span className="text-[10px] font-mono text-[#3E5C76] block uppercase font-semibold">
                      NATIONAL SHARE
                    </span>
                    <span className="text-lg font-bold font-['Fraunces'] text-[#2FAE82]">
                      {((activeTheme.totalStatements / totalStatements) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <a
                  href="#problems"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-gradient-to-r from-[#E7962B]/15 to-[#2FAE82]/15 border border-[#E7962B]/40 text-xs font-semibold text-[var(--chalk)] hover:border-[#E7962B] transition-all group"
                >
                  <span>Filter Problem Statements by {activeTheme.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E7962B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Horizontal Sector Legend Ribbon */}
      <div className="relative z-10 mt-8 pt-6 border-t border-[#3E5C76]/30">
        <span className="text-[10px] font-mono text-[#3E5C76] tracking-widest uppercase font-semibold block mb-3">
          CLICK OR HOVER TO SWITCH DOMAIN FOCUS
        </span>

        <div className="flex flex-wrap gap-2">
          {SIH_THEMES.map((theme) => {
            const isHovered = hoveredThemeId === theme.id;
            return (
              <button
                key={theme.id}
                onMouseEnter={() => setHoveredThemeId(theme.id)}
                onClick={() => setHoveredThemeId(theme.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border flex items-center gap-2",
                  isHovered
                    ? "bg-[#121C2B] text-white border-[#E7962B] shadow-md shadow-[#E7962B]/20 scale-105"
                    : "bg-[var(--ink)] text-[var(--subtle-text)] border-[#3E5C76]/30 hover:border-[#3E5C76]/70 hover:text-white"
                )}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: THEME_COLORS[theme.id] || "#E7962B" }}
                />
                <span className="text-[11px] font-sans font-medium">{theme.title}</span>
                <span className="text-[10px] text-[#3E5C76] font-mono font-bold">({theme.totalStatements})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
