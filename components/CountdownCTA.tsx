"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Clock, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Configurable Registration Deadline (e.g., October 15, 2026, 23:59:59 IST)
const REGISTRATION_DEADLINE = new Date("2026-10-15T23:59:59+05:30").getTime();

export default function CountdownCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 14,
    minutes: 45,
    seconds: 20,
    totalHours: 782,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = REGISTRATION_DEADLINE - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, totalHours: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      const totalHours = Math.floor(difference / (1000 * 60 * 60));

      setTimeLeft({ days, hours, minutes, seconds, totalHours });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isUrgent = timeLeft.totalHours < 24;

  const renderDigit = (value: number, label: string) => {
    const formatted = String(value).padStart(2, "0");
    return (
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative w-16 sm:w-20 h-20 sm:h-24 rounded-xl flex items-center justify-center border font-mono text-3xl sm:text-4xl font-bold shadow-2xl transition-colors duration-500",
            isUrgent
              ? "bg-[#C1442E]/20 border-[#C1442E] text-[#C1442E]"
              : "bg-[#0B1622]/90 border-[#3E5C76]/60 text-white"
          )}
        >
          <motion.span
            key={formatted}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {formatted}
          </motion.span>

          {/* Central split-flap line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 pointer-events-none" />
        </div>
        <span className="text-[11px] font-mono text-white/70 mt-2 tracking-widest uppercase">
          {label}
        </span>
      </div>
    );
  };

  return (
    <section
      id="registration"
      className="relative py-20 lg:py-28 bg-[var(--ink)] border-t border-[#3E5C76]/25 overflow-hidden transition-colors duration-300"
    >
      {/* Background blueprint dots */}
      <div className="absolute inset-0 bg-blueprint-dots opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Summit Banner Frame matching Prototype */}
        <div className="relative rounded-3xl overflow-hidden border border-[#3E5C76]/50 shadow-2xl bg-[#0B1622]">
          {/* Background image */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full min-h-[480px]">
            <Image
              src="/images/summit-visual.jpg"
              alt="Solitary innovator standing atop mountain summit looking at dawn sunrise"
              fill
              className="object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1622]/85 via-transparent to-[#0B1622]/85" />

            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

            {/* Content Over the Banner */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">
              {/* Urgency Pill */}
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-6 transition-colors duration-300 backdrop-blur-md",
                  isUrgent
                    ? "bg-[#C1442E]/30 border-[#C1442E] text-[#C1442E] animate-pulse"
                    : "bg-[#0B1622]/80 border-[#3E5C76]/60 text-[#2FAE82]"
                )}
              >
                {isUrgent ? (
                  <AlertTriangle className="w-3.5 h-3.5" />
                ) : (
                  <Clock className="w-3.5 h-3.5" />
                )}
                <span>
                  {isUrgent
                    ? "URGENT // FINAL REGISTRATION WINDOW CLOSING"
                    : "OFFICIAL REGISTRATION WINDOW ACTIVE"}
                </span>
              </div>

              {/* Main Banner Headline matching Prototype */}
              <div className="text-slide-mask mb-3">
                <h2 className="text-slide-up text-3xl sm:text-5xl md:text-6xl font-bold font-['Fraunces'] text-white leading-tight max-w-3xl tracking-wide">
                  <span className="text-[#E7962B]">THE NEXT</span> BIG IDEA
                  <br />
                  COULD START <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">WITH YOU.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-white/90 max-w-xl mb-8 font-['Instrument_Sans']">
                Be a part of India&apos;s largest innovation challenge.
              </p>

              {/* Split-Flap Countdown Display */}
              <div className="flex items-center gap-3 sm:gap-6 mb-8">
                {renderDigit(timeLeft.days, "Days")}
                <span className="text-2xl font-mono text-white/50 -mt-6">:</span>
                {renderDigit(timeLeft.hours, "Hours")}
                <span className="text-2xl font-mono text-white/50 -mt-6">:</span>
                {renderDigit(timeLeft.minutes, "Mins")}
                <span className="text-2xl font-mono text-white/50 -mt-6">:</span>
                {renderDigit(timeLeft.seconds, "Secs")}
              </div>

              {/* Gradient Pill Button matching Prototype */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.sih.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E7962B] to-[#2FAE82] text-[#0B1622] font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_35px_rgba(231,150,43,0.5)] hover:shadow-[0_0_50px_rgba(47,174,130,0.7)] hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#faq"
                  className="px-6 py-4 rounded-full bg-[#0B1622]/90 text-white border border-white/30 text-sm font-medium hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  SPOC Nomination Guidelines
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-white/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2FAE82]" />
                <span>NO DIRECT REGISTRATION FEE // 100% GOVERNMENT SUBSIDIZED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
