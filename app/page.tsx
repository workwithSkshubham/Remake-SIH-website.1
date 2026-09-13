"use client";

import { useState, useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import EligibilitySection from "@/components/EligibilitySection";
import ThemesSection from "@/components/ThemesSection";
import ProblemStatements from "@/components/ProblemStatements";
import BuildStory from "@/components/BuildStory";
import TimelineSection from "@/components/TimelineSection";
import IndiaMapSection from "@/components/IndiaMapSection";
import WhySIHSection from "@/components/WhySIHSection";
import SponsorsSection from "@/components/SponsorsSection";
import CountdownCTA from "@/components/CountdownCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global key listener for '~' or '`' to launch easter egg terminal
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--ink)] text-[var(--chalk)] selection:bg-[#E7962B]/30 selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

        <main id="main-content">
          {/* 01: Hero Area */}
          <Hero />

          {/* 02: Progress Area/ Stats */}
          <StatsSection />

          {/* 03: About SIH */}
          <AboutSection />

          {/* 04: Team Eligibility Block */}
          <EligibilitySection />

          {/* 05: Themes & Categories */}
          <ThemesSection />

          {/* 06: Problem Statements Engine */}
          <ProblemStatements />

          {/* 07: Build Story (Idea to Impact) */}
          <BuildStory />

          {/* 08: Flagship Timeline */}
          <TimelineSection />

          {/* 09: India Map & Nodal Centers */}
          <IndiaMapSection />

          {/* 10: Why Join SIH */}
          <WhySIHSection />

          {/* 11: Sponsors & Institutional Wall */}
          <SponsorsSection />

          {/* 12: Registration Countdown & CTA */}
          <CountdownCTA />

          {/* 13: FAQ / SPOC Guidelines */}
          <FAQSection />
        </main>

        {/* 14: Footer */}
        <Footer />

        {/* Persistent Floating Sticky CTA */}
        <StickyCTA />

        {/* Developer Terminal Easter Egg */}
        <TerminalEasterEgg
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
