"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const BUILD_STAGES = [
  {
    step: "01",
    phase: "IDEA",
    time: "21:00 HRS // DAY 01",
    title: "Problem Statement Infiltration",
    summary: "Deconstructing complex ministry briefs into operational user stories and architectural constraints.",
    deliverable: "Functional Spec & System Topology",
    codeSnippet: `// 21:00 HRS — REQUIREMENT VECTOR ANALYSIS
const problem = await parseMinistryBrief("SIH2026-PS101");
const constraints = { latency: "<90s", edgeInference: true, powerBudget: "12W" };
const architecture = new SystemTopology(problem, constraints);`,
  },
  {
    step: "02",
    phase: "SKETCH",
    time: "03:00 HRS // DAY 02",
    title: "Blueprint at 3AM",
    summary: "The defining hour. Whiteboard schematics solidify into microservice schemas and PCB trace layouts.",
    deliverable: "Schema Migrations & Pinout Wireframes",
    codeSnippet: `// 03:00 HRS — EMBEDDED SENSOR TELEMETRY BUS
#include <HardwareSerial.h>
#define PH_PIN 34
#define TURBIDITY_ADC 35
void configureTelemetry() {
  Wire.begin(I2C_SDA, I2C_SCL, 400000); // 400kHz fast-mode
  initEdgeComputePipeline();
}`,
  },
  {
    step: "03",
    phase: "PROTOTYPE",
    time: "11:00 HRS // DAY 02",
    title: "First Working Heartbeat",
    summary: "Hardware sensors stream live packets into Next.js dashboard. First end-to-end pipeline test succeeds.",
    deliverable: "Containerized Microservices & Firmware Binary",
    codeSnippet: `// 11:00 HRS — STREAM PROTOCOL HANDSHAKE
const socket = new WebSocket("wss://telemetry.sih.local/stream");
socket.onmessage = (event) => {
  const telemetry = decodeProtobuf(event.data);
  updateLiveGridState(telemetry); // Verified 14ms latency
};`,
  },
  {
    step: "04",
    phase: "SOLUTION",
    time: "18:00 HRS // DAY 02",
    title: "Hardened Production Deployment",
    summary: "Jury round 2 feedback incorporated. Zero-latency fallback, stress-tested with 10k simulated requests.",
    deliverable: "Production Candidate & Security Audit",
    codeSnippet: `// 18:00 HRS — JURY BENCHMARK RESILIENCE
const benchmark = await stressTestCluster({
  concurrentConnections: 10000,
  packetDropTolerance: "0.001%",
  failoverTime: "42ms"
});
console.log("PASS: 100% SLA COMPLIANT");`,
  },
  {
    step: "05",
    phase: "IMPACT",
    time: "09:00 HRS // DAY 03",
    title: "National Demonstration to Ministers",
    summary: "Live pitch to senior ministry delegates. Solution recommended for pilot deployment across public sector.",
    deliverable: "National Deployment Clearance & ₹1L Cash Award",
    codeSnippet: `// 09:00 HRS — DEPLOYMENT PIPELINE AUTHORIZATION
const deploymentClearance = {
  status: "APPROVED_BY_MINISTRY",
  pilotLocation: "Delhi-NCR Sector 4 Hub",
  grantDisbursement: "INR 1,00,000",
  nationalRolloutYear: 2026
};`,
  },
];

export default function BuildStory() {
  const [activeStep, setActiveStep] = useState(1); // Default to Blueprint at 3AM

  return (
    <section className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300">
      {/* Background drafting lines */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="reveal-on-scroll text-xs font-mono text-[#E7962B] tracking-wider uppercase block mb-3 font-semibold">
            // 36-HOUR TRANSFORMATION // THE BUILD STORY
          </span>
          <h2 className="reveal-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold font-['Fraunces'] text-[var(--chalk)] leading-tight">
            Idea → Sketch → Prototype → Impact.
          </h2>
          <p className="reveal-on-scroll stagger-2 text-sm sm:text-base text-[var(--subtle-text)] mt-3 font-['Instrument_Sans'] leading-relaxed">
            The crucible of SIH is what happens between 21:00 on Day 1 and 09:00 on Day 3. Step through how raw concepts evolve into national infrastructure.
          </p>
        </div>

        {/* Interactive Step Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {BUILD_STAGES.map((s, idx) => (
            <button
              key={s.phase}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-xs font-mono tracking-wide uppercase transition-all duration-200 border whitespace-nowrap flex items-center gap-2 shadow-sm",
                activeStep === idx
                  ? "bg-[#E7962B] text-[#0B1622] font-bold border-[#E7962B] shadow-lg shadow-[#E7962B]/20"
                  : "bg-[var(--ink-2)] text-[var(--subtle-text)] border-[#3E5C76]/40 hover:border-[#E7962B]/60 hover:text-[var(--chalk)]"
              )}
            >
              <span className="opacity-60">{s.step}</span>
              <span>{s.phase}</span>
            </button>
          ))}
        </div>

        {/* Stage Presentation Box */}
        {BUILD_STAGES[activeStep] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Stage Narrative & Deliverables (6 cols) */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/50 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#2FAE82] mb-3">
                  <span className="font-semibold">STAGE {BUILD_STAGES[activeStep].step} OF 05</span>
                  <span className="text-[#3E5C76]">{BUILD_STAGES[activeStep].time}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-['Fraunces'] text-[var(--chalk)] mb-3">
                  {BUILD_STAGES[activeStep].title}
                </h3>

                <p className="text-sm text-[var(--subtle-text)] leading-relaxed font-['Instrument_Sans'] mb-6">
                  {BUILD_STAGES[activeStep].summary}
                </p>

                <div className="p-4 rounded-xl bg-[var(--ink)] border border-[#3E5C76]/30 space-y-2">
                  <span className="text-xs font-mono text-[#3E5C76] block font-semibold">MILESTONE DELIVERABLE</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--chalk)]">
                    <CheckCircle2 className="w-4 h-4 text-[#2FAE82]" />
                    <span>{BUILD_STAGES[activeStep].deliverable}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#3E5C76]/30 flex items-center justify-between text-xs font-mono text-[#3E5C76]">
                <span>SIH PROTOCOL SPECIFICATION</span>
                <span className="text-[#E7962B] font-semibold">CONTINUOUS SPRINT</span>
              </div>
            </div>

            {/* Right Box: Blueprint Code / Technical Artifact (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0B1622] border border-[#3E5C76]/60 font-mono text-xs shadow-2xl flex flex-col justify-between overflow-hidden text-white">
              {/* Fake Terminal Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#3E5C76]/30 mb-4 text-[11px] text-[#3E5C76]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C1442E]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E7962B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2FAE82]/70" />
                    <span className="ml-2 text-white/70">stage_{BUILD_STAGES[activeStep].step}_telemetry.ts</span>
                  </div>
                  <span>UTF-8 // UNIX</span>
                </div>

                {/* Code Snippet Box */}
                <pre className="text-white/90 font-mono text-xs overflow-x-auto p-4 rounded-lg bg-[#121C2B]/90 border border-[#3E5C76]/20 leading-relaxed">
                  <code>{BUILD_STAGES[activeStep].codeSnippet}</code>
                </pre>
              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-[#3E5C76]/20 flex items-center justify-between text-[11px] text-[#2FAE82]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#2FAE82] animate-ping" />
                  PIPELINE HEALTHY
                </span>
                <span className="text-[#3E5C76]">STAGE_LATENCY: &lt;18ms</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
