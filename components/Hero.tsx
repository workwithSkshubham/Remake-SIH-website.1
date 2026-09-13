"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Compass, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const [curtainDone, setCurtainDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCurtainDone(true);
      return;
    }

    const ctx = gsap.context(() => {
      // ── 0. Page-enter curtain wipe (dark panel slides up and away)
      const tl = gsap.timeline({
        onComplete: () => setCurtainDone(true),
      });

      tl.to(curtainRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.1,
        ease: "expo.inOut",
        delay: 0.1,
      });

      // ── 1. Grid fade in after curtain
      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

      // ── 2. Eyebrow badge clip-path wipe in from left
      tl.fromTo(
        eyebrowRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 1 },
        { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "expo.out" },
        "-=0.4"
      );

      // ── 3. Headline words — dramatic skew + translateY reveal
      const words = headlineRef.current?.querySelectorAll(".stagger-word");
      if (words && words.length > 0) {
        tl.fromTo(
          words,
          { y: 90, skewY: 6, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            skewY: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.0,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.3"
        );
      }

      // ── 4. Subhead, CTAs, Stats — stagger fade
      tl.fromTo(
        [subheadRef.current, ctaRef.current, statsRef.current],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // ── 5. Hero image clip-path reveal from bottom + entrance scale
      if (imageWrapperRef.current) {
        tl.fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(100% 0 0 0)", scale: 1.04 },
          {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.9"
        );

        // Parallax scroll effect on image
        gsap.to(imageWrapperRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 lg:py-32 flex flex-col justify-center overflow-hidden bg-[var(--ink)] transition-colors duration-300"
    >
      {/* ── Page-Enter Curtain Panel */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[200] bg-[#0B1622] pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      {/* Blueprint Grid Canvas Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none z-0"
      />

      {/* Patriotic Ashoka Chakra geometry */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[#3E5C76]/20 pointer-events-none opacity-40 z-0 flex items-center justify-center">
        <div className="w-[460px] h-[460px] rounded-full border border-dashed border-[#3E5C76]/25 animate-[spin_160s_linear_infinite]" />
        <div className="w-[320px] h-[320px] rounded-full border border-[#E7962B]/20" />
        <div className="w-[180px] h-[180px] rounded-full border border-[#2FAE82]/20" />
      </div>

      {/* Radial ambient glow accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3E5C76]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-[#E7962B]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Blueprint Coordinates */}
      <div className="hidden lg:block absolute top-28 left-8 text-[11px] font-mono text-[#3E5C76]/70 tracking-widest pointer-events-none">
        GRID // LAT 28.6139° N · LON 77.2090° E [NDLS-01]
      </div>
      <div className="hidden lg:block absolute bottom-12 right-8 text-[11px] font-mono text-[#3E5C76]/70 tracking-widest pointer-events-none">
        STATUS // 36H PROTOTYPE STACK ACTIVE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--ink-2)] border border-[#3E5C76]/40 text-xs font-mono text-[var(--chalk)] mb-6 shadow-sm"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7962B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white border border-gray-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FAE82]" />
            </span>
            <span className="text-[var(--subtle-text)] font-semibold">INDIA&apos;S BIGGEST INNOVATION PLATFORM</span>
            <span className="text-[#3E5C76]">·</span>
            <span className="text-[#E7962B] font-bold">2026 EDITION</span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--chalk)] font-['Fraunces'] leading-[1.08] mb-6"
            style={{ overflow: "hidden" }}
          >
            <span className="inline-block stagger-word">SMART</span>{" "}
            <span className="inline-block stagger-word">INDIA</span>
            <br />
            <span className="inline-block stagger-word text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] via-[#E7962B] to-[#2FAE82] drop-shadow-[0_4px_25px_rgba(231,150,43,0.3)]">
              HACKATHON
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={subheadRef}
            className="text-base sm:text-lg lg:text-xl text-[var(--subtle-text)] max-w-2xl mb-8 leading-relaxed font-['Instrument_Sans']"
          >
            Where Ideas Meet Opportunity, and Innovation Builds a Better Tomorrow. Join 1,50,000+ student innovators transforming bold ideas into working prototypes over one intense 36-hour national hackathon.
          </p>

          {/* Action CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#problems"
              className="px-6 py-3.5 rounded-full bg-[#E7962B] text-[#0B1622] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_35px_rgba(231,150,43,0.6)] hover:scale-[1.04] active:scale-95 group"
            >
              <span>Explore Challenges</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            <a
              href="#journey"
              className="px-6 py-3.5 rounded-full bg-[var(--ink-2)] text-[var(--chalk)] border border-[#3E5C76]/50 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:border-[var(--chalk)]/60 hover:bg-[#3E5C76]/20 shadow-sm"
            >
              <Play className="w-4 h-4 text-[#2FAE82] fill-[#2FAE82]" />
              <span>Watch Journey</span>
            </a>
          </div>

          {/* Live Quick Metrics Pill */}
          <div
            ref={statsRef}
            className="w-full sm:w-auto inline-flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 px-4 py-3 rounded-xl bg-[var(--ink-2)]/85 border border-[#3E5C76]/30 backdrop-blur-md shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-[#2FAE82]/15 text-[#2FAE82]">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs text-[var(--subtle-text)]">Finale Format</p>
                <p className="text-xs font-semibold text-[var(--chalk)] font-mono">36-Hour Non-Stop</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#3E5C76]/30" />

            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-[#E7962B]/15 text-[#E7962B]">
                <Compass className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs text-[var(--subtle-text)]">Nodal Centers</p>
                <p className="text-xs font-semibold text-[var(--chalk)] font-mono">40+ Nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with clip-path reveal */}
        <div className="lg:col-span-5 relative">
          <div
            ref={imageWrapperRef}
            className="relative rounded-2xl overflow-hidden border border-[#3E5C76]/40 shadow-2xl shadow-black/40 group"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            {/* Aspect ratio frame with image */}
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full bg-[var(--ink-2)]">
              <Image
                src="/images/hero-visual.jpg"
                alt="Smart India Hackathon Innovator Visualizing Technology for Viksit Bharat"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/40 via-transparent to-transparent" />

              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

              {/* Blueprint Crosshair Overlays */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E7962B]/80 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E7962B]/80 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E7962B]/80 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E7962B]/80 pointer-events-none" />

              {/* Viksit Bharat Badge */}
              <div className="absolute top-4 right-4 bg-[#0B1622]/90 backdrop-blur-md border border-[#3E5C76]/70 rounded-lg p-2 shadow-xl flex flex-col gap-1 text-right">
                <div className="flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2FAE82] animate-pulse" />
                  <span className="text-[12px] font-bold text-white font-['Fraunces']">
                    Ideas for a <span className="text-[#E7962B]">Viksit Bharat</span>
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-[#E7962B] via-white to-[#2FAE82] opacity-90" />
              </div>

              {/* Bottom Card Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1622]/90 backdrop-blur-md border border-[#3E5C76]/40 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#2FAE82] flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#2FAE82]" />
                    PROTOTYPE SCHEMATIC #01
                  </span>
                  <span className="font-mono text-white/60 text-[10px]">VERIFIED MIC/AICTE</span>
                </div>
                <p className="text-xs text-white/80 mt-1 font-['Instrument_Sans']">
                  Transforming grassroots engineering talent into deployable national public infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hidden md:flex flex-col items-center justify-center mt-12 text-[#3E5C76] hover:text-[var(--chalk)] transition-colors">
        <span className="text-[11px] font-mono tracking-widest uppercase mb-1">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
