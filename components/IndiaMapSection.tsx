"use client";

import { useState } from "react";
import { Building, Compass } from "lucide-react";
import { NODAL_CENTERS, type NodalCenter } from "@/lib/sih-data";

export default function IndiaMapSection() {
  const [selectedCenter, setSelectedCenter] = useState<NodalCenter>(NODAL_CENTERS[0]);

  return (
    <section
      id="map"
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--ink-2)] border border-[#3E5C76]/40 text-xs font-mono text-[#2FAE82] mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#2FAE82]" />
            NATIONAL EVALUATION HUBS
          </div>
          <h2 className="reveal-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
            40+ Nodal Centers Across India.
          </h2>
          <p className="reveal-on-scroll stagger-2 text-sm sm:text-base text-[var(--subtle-text)] mt-3 font-['Instrument_Sans'] leading-relaxed">
            During the Grand Finale, thousands of student finalists travel to premier engineering universities and central institutes across every region of India for the 36-hour physical hackathon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols): India Map SVG Visualization */}
          <div className="lg:col-span-7 relative p-6 sm:p-10 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/50 shadow-2xl flex items-center justify-center min-h-[480px]">
            {/* Coordinates in corner */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#3E5C76]">
              GEOSPATIAL GRID // 8.4°N – 37.6°N // 68.7°E – 97.2°E
            </div>

            {/* India Map Stylized SVG Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full filter drop-shadow-[0_0_15px_rgba(62,92,118,0.3)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified Schematic Coastline & Border of India */}
                <path
                  d="M180,30 L220,50 L240,80 L230,110 L250,130 L290,125 L340,140 L350,170 L320,185 L280,180 L260,200 L270,240 L260,280 L240,320 L210,380 L180,440 L160,400 L130,340 L110,300 L90,270 L70,240 L80,200 L110,180 L130,150 L140,110 L160,80 Z"
                  stroke="#3E5C76"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  fill="#0B1622"
                  fillOpacity="0.7"
                />

                {/* Internal telemetry contour lines */}
                <path
                  d="M180,80 L220,130 L240,220 L180,420"
                  stroke="#3E5C76"
                  strokeWidth="0.75"
                  strokeOpacity="0.4"
                />
                <path
                  d="M110,240 L180,240 L260,240"
                  stroke="#3E5C76"
                  strokeWidth="0.75"
                  strokeOpacity="0.4"
                />

                {/* Animated Connection Lines to active center */}
                <line
                  x1="180"
                  y1="130"
                  x2={selectedCenter.x * 4}
                  y2={selectedCenter.y * 5}
                  stroke="#E7962B"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className="animate-pulse"
                />

                {/* Nodal Center Pins */}
                {NODAL_CENTERS.map((center) => {
                  const isSelected = selectedCenter.id === center.id;
                  const cx = center.x * 4;
                  const cy = center.y * 5;
                  return (
                    <g
                      key={center.id}
                      onClick={() => setSelectedCenter(center)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="14"
                          fill="none"
                          stroke="#E7962B"
                          strokeWidth="1.5"
                          className="animate-ping origin-center"
                        />
                      )}

                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "7" : "5"}
                        fill={isSelected ? "#E7962B" : "#2FAE82"}
                        stroke="#0B1622"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />

                      {/* City label text */}
                      <text
                        x={cx + 8}
                        y={cy + 4}
                        fill={isSelected ? "#E7962B" : "#3E5C76"}
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                        className="pointer-events-none transition-colors font-bold"
                      >
                        {center.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#2FAE82]">
              ALL HUBS SYNCHRONIZED
            </div>
          </div>

          {/* Right Column (5 cols): Active Nodal Center Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[var(--ink-2)] border border-[#E7962B]/60 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#2FAE82] mb-3">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#2FAE82]" />
                  ACTIVE EVALUATION HUB
                </span>
                <span className="text-[#3E5C76] font-semibold">{selectedCenter.state}</span>
              </div>

              <h3 className="text-3xl font-bold font-['Fraunces'] text-[var(--chalk)] mb-2">
                {selectedCenter.city}
              </h3>

              <div className="flex items-center gap-2 text-sm text-[#E7962B] font-semibold mb-6">
                <Building className="w-4 h-4 shrink-0" />
                <span>{selectedCenter.institution}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/30">
                  <span className="text-xs font-mono text-[#3E5C76] block mb-1 font-semibold">
                    PRIMARY PROBLEM DOMAINS HOSTED
                  </span>
                  <p className="text-sm font-semibold text-[var(--chalk)] font-['Instrument_Sans']">
                    {selectedCenter.specialization}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/30 text-xs font-mono">
                  <div>
                    <span className="text-[#3E5C76] block">Concurrent Teams</span>
                    <span className="text-[var(--chalk)] font-bold">50+ Teams</span>
                  </div>
                  <div>
                    <span className="text-[#3E5C76] block">Problem Tracks</span>
                    <span className="text-[#2FAE82] font-bold">{selectedCenter.trackCount} Tracks</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans']">
                Equipped with high-bandwidth 1Gbps test clusters, hardware fabrication test-benches, and direct video conferencing links to central ministry command centers in New Delhi.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3E5C76]/30 flex items-center justify-between text-xs font-mono text-[#3E5C76]">
              <span>FREE BOARDING & LODGING</span>
              <span className="text-[#2FAE82] font-semibold">SLEEPER FARE REIMBURSED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
