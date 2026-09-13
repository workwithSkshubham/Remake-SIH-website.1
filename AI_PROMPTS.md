# AI Prompts Used — Smart India Hackathon Remake

This log documents the **complete, sequential AI prompts and engineering specifications** utilized during the architecture, design, and development of the Smart India Hackathon (SIH) website redesign — following the "Blueprint at 3AM" visual direction.

> **Tool Used:** Google Antigravity (AGY) AI Coding Assistant
> **Model:** Claude Sonnet (Thinking Mode)
> **Total Prompts:** 12
> **Project Duration:** Single sprint, production-grade output

---

## Prompt 001 — Project Architecture & Design System Setup

> **Context:** Initializing the production-grade Next.js App Router workspace with the "Blueprint at 3AM" visual identity.
>
> **Prompt:**
> Build a production-quality redesign and remake of the Smart India Hackathon (SIH) website following the official SIH remake brief and visual prototype. Implement Next.js with App Router, React, GSAP, Framer Motion, and Lenis smooth scrolling. Establish the core design tokens: ink (#0B1622), ink-2 (#121C2B), chalk (#ECEEE7), marigold (#E7962B), signal (#2FAE82), blueprint (#3E5C76), and kumkum (#C1442E). Use Fraunces for display headings, Instrument Sans for UI/body, and IBM Plex Mono for restricted technical digits. Adhere to the core motion philosophy: exactly one authored opening moment (Hero), with all subsequent motion answering the user's direct interaction.

**Outcome:** `app/globals.css` design tokens, `app/layout.tsx` with Google Fonts, `next.config.mjs`, `tsconfig.json`, and `package.json` with all dependencies initialized.

---

## Prompt 002 — Hero Section & Interactive Drafting Canvas

> **Context:** Engineering the cinematic hero section inspired by the visual prototype reference.
>
> **Prompt:**
> Create an editorial hero section featuring an authored GSAP entrance animation. Integrate a technical drafting grid background with subtle node network lines, SplitText-inspired line stagger typography for "SMART INDIA HACKATHON", supporting copy "Where Ideas Meet Opportunity, and Innovation Builds a Better Tomorrow", dual CTAs ("Explore Challenges" and "Watch Video"), live metrics quick-pill, and a double-exposure visual celebrating Indian youth innovation and national progress.

**Outcome:** `components/Hero.tsx` — curtain wipe on mount, word-by-word skew stagger via GSAP, blueprint grid canvas, patriotic stat pills.

---

## Prompt 003 — Live Scale Counters & Editorial About Section

> **Context:** Displaying verified national-scale hackathon statistics and the mission story.
>
> **Prompt:**
> Implement an animated statistics section using GSAP ScrollTrigger odometer count-ups for verified SIH metrics: 1.5L+ Students Participated, 20K+ Teams Formed, 300+ Problem Statements, 500+ Institutions Involved, and 36-Hour Non-stop Finale. Follow with an asymmetric editorial "About SIH" section highlighting the transformation of college ingenuity into national technology solutions, annotated with blueprint crosshairs and engineering coordinates.

**Outcome:** `components/StatsSection.tsx` (GSAP ScrollTrigger odometers), `components/AboutSection.tsx` (3-pillar breakdown with dual-image layout).

---

## Prompt 004 — Team Eligibility & Visual Team Structure Diagram

> **Context:** Highlighting SIH's defining 6-member team composition rule.
>
> **Prompt:**
> Build an interactive Team Eligibility section featuring an oversized Fraunces numeral "6" and a visual 6-member team formation schematic. Emphasize the mandatory requirement of at least one female innovator per team, interactive role cards (Team Lead, Backend Architect, Hardware/Embedded Engineer, AI/ML Specialist, UI/UX Designer, Domain Specialist), and official institutional SPOC consent requirements.

**Outcome:** `components/EligibilitySection.tsx` — visual role matrix, gender diversity mandate badge, SPOC workflow tabs.

---

## Prompt 005 — Filterable Themes & Problem Statements Engine

> **Context:** Creating the interactive sector rail and searchable problem statements database.
>
> **Prompt:**
> Develop the Themes & Categories component with a horizontal filter rail and Framer Motion layout animations across 17 official SIH sectors (AI, MedTech, Clean Energy, Space, Agriculture, Cyber Security, etc.). Pair with a dedicated Problem Statements section with instant keyword search, keyboard shortcut ('/') focus, Software/Hardware category filters, Ministry/Department tags, and expandable solution submission criteria.

**Outcome:** `components/ThemesSection.tsx` (17-sector grid with animated filter rail), `components/ProblemStatements.tsx` (live search engine), `lib/sih-data.ts` (typed data layer).

---

## Prompt 006 — Pinned Timeline Journey & Idea-to-Impact Build Story

> **Context:** Crafting the flagship scroll-scrubbed journey and 36-hour transformation narrative.
>
> **Prompt:**
> Implement the "From Idea to Impact" build story illustrating the progression from Idea → Sketch → Prototype → Solution → Impact. Build the flagship Pinned Timeline using GSAP ScrollTrigger with horizontal progress synchronization, Lenis integration, illuminated stage nodes (Discover, Build, Compete, Grand Finale), and dynamic stage descriptions.

**Outcome:** `components/BuildStory.tsx` (5-stage transformation sequence), `components/TimelineSection.tsx` (4-stage pinned GSAP timeline with highway visual), `components/SmoothScroll.tsx` (Lenis + GSAP ticker sync).

---

## Prompt 007 — Interactive India Map of Nodal Centers

> **Context:** Visualizing national reach across premier evaluation centers.
>
> **Prompt:**
> Create an interactive SVG-based India map with animated outline drawing (`stroke-dashoffset` scrubbed to scroll), glowing nodal pins (New Delhi, Pune, Bengaluru, Hyderabad, Jaipur, Bhubaneswar, Bhopal, etc.), animated connection lines, and responsive center info cards displaying hosted problem tracks.

**Outcome:** `components/IndiaMapSection.tsx` — full schematic SVG, glowing nodal pins, live coordinate telemetry panel.

---

## Prompt 008 — Why Join SIH, Partner Wall, Countdown & Sticky CTA

> **Context:** Completing social proof, government backing, urgency countdown, and accessible FAQs.
>
> **Prompt:**
> Build the "Why SIH?" feature grid with interactive hover reveals, alongside a categorized sponsor wall (Ministries, Global Tech Leaders, Premier Academia). Implement an IBM Plex Mono split-flap countdown timer that dynamically flips to kumkum urgency under 24 hours, an unobtrusive persistent sticky CTA, an accessible FAQ accordion with Framer Motion height transitions, and a technical footer.

**Outcome:** `components/WhySIHSection.tsx`, `components/SponsorsSection.tsx` (dual infinite marquee), `components/CountdownCTA.tsx` (split-flap + urgency logic), `components/StickyCTA.tsx`, `components/FAQSection.tsx`, `components/Footer.tsx`.

---

## Prompt 009 — Light/Dark Mode Color Grading, Realistic Prototype Bottom Area & Simplified ID Search

> **Context:** Implementing dual Light/Dark color grading, exact realistic layout recreation of the bottom sections matching the visual prototype, subtle patriotic tricolor and Ashoka Chakra accents, and user-friendly numerical ID challenge search.
>
> **Prompt:**
> 1. **Color Grading & Theme Switcher:** Implement an interactive Light and Dark mode theme engine with a Sun/Moon toggle in the top-right navbar corner and mobile drawer. Provide distinct architectural ivory & blueprint styling in light mode, and deep Ashoka-chakra navy in dark mode with smooth CSS variable transitions.
> 2. **Patriotic Visual Elegance:** Enhance the national identity subtly and prestigiously with tricolor hairline borders, an Ashoka Chakra 24-spoke geometric drafting watermark, and a curved 'Ideas for a Viksit Bharat' tricolor sash.
> 3. **User-Friendly Problem Access:** Upgrade problem statements search so students can simply type the numerical ID (e.g., 101, 102) without prefixes or years, backed by dedicated Hackathon Edition and Track Classification selectors and quick-select ID chips.
> 4. **Realistic Bottom UI:** Recreate the bottom sections matching the visual prototype:
>    - Journey: Cinematic winding mountain highway at dusk with illuminated traffic streaks and horizontal glowing line connecting 4 circular milestone badges (01 Discover, 02 Build, 03 Compete, 04 Grand Finale).
>    - Why Join SIH: 4 clean feature columns with icons, accompanied by the team hoodie sunset photograph and handwritten cursive callout ('Your idea can change lives ~').
>    - Partners: Clean horizontal enterprise and ministry logo row.
>    - Final CTA & Footer: Mountain summit dawn banner with gradient 'Register Now' button, and streamlined footer with social channels and legal links.

**Outcome:** Dark/light CSS variable system in `globals.css`, theme toggle in `components/Navbar.tsx`, updated `components/TimelineSection.tsx`, `components/WhySIHSection.tsx`, and `components/SponsorsSection.tsx`.

---

## Prompt 010 — khanhnguyen.design Visual Overhaul, Tab Imagery & Cinematic Transitions

> **Context:** Elevating the website to match the cinematic visual language and bold transitions of khanhnguyen.design.
>
> **Prompt:**
> 1. **Rich Full-Bleed Imagery:** Place cinematic, high-resolution thematic visuals in each tab and key section:
>    - ThemesSection: High-resolution cards for Agriculture, Health & Biotech, Clean Energy, Space Exploration, and Cyber Security with dark gradient overlays and hover zoom.
>    - AboutSection: Full-bleed Ashoka Pillar Lion Capital visual at twilight with subtle blueprint grid annotations.
>    - SponsorsSection: Dark cinematic backdrop with dual-track infinite marquee logo animation.
>    - ProblemStatements: Thematic domain thumbnail headers for agriculture, health, energy, space, and cybersecurity.
> 2. **Strong Cinematic Transitions:**
>    - Page-enter dark curtain wipe (`curtainReveal`) sweeping smoothly away on load.
>    - GSAP skew and translateY word-by-word headline reveals (`headlineReveal`).
>    - Clip-path wipes (`clipWipeUp`, `reveal-clip`) synchronized with Intersection Observer on scroll.
>    - Filter tab FLIP and clip-path re-flow transitions when switching between categories.

**Outcome:** Updated `components/Hero.tsx`, `components/AboutSection.tsx`, `components/SponsorsSection.tsx`, `components/ProblemStatements.tsx`, `components/ThemesSection.tsx` with full-bleed imagery and cinematic clip-path transitions.

---

## Prompt 011 — Interactive SVG Donut Analytics & Unified Login Portal

> **Context:** Adding the interactive 17-sector donut analytics chart and the multi-persona authentication hub.
>
> **Prompt:**
> Build an interactive SVG donut/pie analytics chart showing the distribution of all 300+ SIH problem statements across 17 official sectors. Each slice should expand on hover and display a center telemetry readout (theme name, count, percentage share, track category). Add an animated toggle between "Grid Cards View" and "Sector Pie Analytics" within the Themes section.
>
> Additionally, create a unified `/login` page with 4 distinct persona tabs (Student, SPOC, Ministry Officer, Jury & Mentor), each with branded role badges, dynamic color accents, password/OTP toggle, auto-fill demo credential buttons, and a government-grade security compliance banner.

**Outcome:** `components/ThemesDistributionChart.tsx` (interactive 17-sector SVG donut), `app/login/page.tsx` (multi-persona auth hub), updated `components/ThemesSection.tsx` with view toggle.

---

## Prompt 012 — Git Cleanup, Vercel Compatibility & Documentation Update

> **Context:** Preparing the repository for public GitHub hosting and zero-config Vercel deployment.
>
> **Prompt:**
> Fix git merge conflicts in `.gitignore` and `README.md`. Update all documentation files: clean up README to include the correct GitHub clone URL, Vercel one-click deploy button, dashboard settings table, and tech stack table. Update AI_PROMPTS.md with the complete prompt engineering log. Add `vercel.json` for explicit Vercel build configuration. Ensure no `.next/`, `node_modules/`, or generated files are tracked.

**Outcome:** Resolved `.gitignore` conflict, updated `README.md` (full version preserved + Vercel guide added), updated `AI_PROMPTS.md` (this file), created `vercel.json`.

---

## Design Decisions & Engineering Notes

### Why Not Fade-and-Slide-Up on Every Section?
The single most common indicator of a templated site is fade-and-slide-up on every scroll entry. This project deliberately avoids it — **only the Hero has an authored opening moment**; all other animations are scroll-scrubbed (position tied 1:1 to user scroll) or interaction-triggered.

### Why GSAP + Lenis + Motion Together?
- **GSAP**: Handles timeline-based scrub animations (timeline, odometers) where frame-precise control is needed.
- **Lenis**: Provides lag-smoothed inertia scrolling, synchronized with GSAP ticker so ScrollTrigger positions are always accurate.
- **Motion (Framer Motion)**: Handles layout animations and `AnimatePresence` for React-driven UI state changes (filter grids, modals, accordions).

### Why Tailwind CSS v4 + CSS Custom Properties?
Tailwind v4 is utility-first for spacing/layout decisions. CSS Custom Properties (`--ink`, `--marigold`, etc.) are used for the design token system because they enable instant theme switching at runtime without re-rendering — critical for the light/dark mode switcher.

### Why TypeScript Strict Mode?
`lib/sih-data.ts` contains the entire strongly-typed data layer (themes, problem statements, nodal centers). Strict mode ensures all component props, data shapes, and event handlers are correctly typed, preventing runtime errors in the interactive search and filter systems.
