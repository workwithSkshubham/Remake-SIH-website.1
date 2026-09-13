# 🇮🇳 Smart India Hackathon (SIH) — Production-Grade Redesign & Remake

[![Next.js](https://img.shields.io/badge/Next.js-15.2+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12+-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Motion](https://img.shields.io/badge/Motion-12.4+-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Visual Concept: "Blueprint at 3AM"**
> An award-level, motion-rich, frontend-only digital reimagination of the **Smart India Hackathon (SIH)** national platform, crafted for high-performance evaluation, accessibility, and modern aesthetic excellence.

---

## Table of Contents

- [1. Executive Summary](#1-executive-summary)
- [2. Design Identity: "Blueprint at 3AM"](#2-design-identity-blueprint-at-3am)
- [3. Key Features & Architectural Highlights](#3-key-features--architectural-highlights)
- [4. Interactive Donut / Pie Analytics Distribution](#4-interactive-donut--pie-analytics-distribution)
- [5. Unified Multi-Persona Login Portal (`/login`)](#5-unified-multi-persona-login-portal-login)
- [6. Official 17 SIH Themes Coverage](#6-official-17-sih-themes-coverage)
- [7. Tech Stack & Engineering Architecture](#7-tech-stack--engineering-architecture)
- [8. Repository & Folder Structure](#8-repository--folder-structure)
- [9. Keyboard Shortcuts & Accessibility](#9-keyboard-shortcuts--accessibility)
- [10. Getting Started Locally](#10-getting-started-locally)
- [11. Production Build & Deployment](#11-production-build--deployment)
- [12. Vercel Deployment Guide](#12-vercel-deployment-guide)
- [13. AI Prompts & Development Methodology](#13-ai-prompts--development-methodology)

---

## 1. Executive Summary

Smart India Hackathon is the world's largest open-innovation initiative organized by the **Ministry of Education's Innovation Cell (MIC)** and the **All India Council for Technical Education (AICTE)**, Government of India. Over **1,50,000+ students**, **20,000+ shortlisted teams**, and **500+ accredited institutions** compete to solve **300+ pressing national challenges** posed by Union Ministries, State Governments, and apex industries.

This remake replaces the dated legacy portal with a **cinematic, high-velocity web experience** built using modern web standards, editorial typography, and physics-driven micro-interactions.

---

## 2. Design Identity: "Blueprint at 3AM"

Rather than a generic SaaS landing page, this redesign grounds itself in the authentic atmosphere of an engineer's workroom late at night:

- **Technical Drafting Aesthetic**: Hairline coordinates, technical crosshairs, and blueprint dot/grid matrices.
- **Curated Color Tokens**:
  - `var(--ink)` (`#0B1622`): Deep Ashoka-Chakra navy night canvas.
  - `var(--chalk)` (`#ECEEE7`): Clean engineering blueprint white.
  - `var(--marigold)` (`#E7962B`): Vibrant warm marigold dawn accent.
  - `var(--signal)` (`#2FAE82`): Circuit board telemetry green.
  - `var(--kumkum)` (`#C1442E`): Urgent warning indicator for countdowns (<24 hours).
  - `var(--blueprint)` (`#3E5C76`): Drafting rule hairline borders.
- **Editorial Typography**:
  - **Fraunces**: Expressive display serif for authoritative, gazette-style headlines.
  - **Instrument Sans**: Clean, high-legibility sans-serif for long-form narrative.
  - **IBM Plex Mono**: Monospaced precision for technical metadata, telemetry, and timecodes.
- **Authored Motion Choreography**:
  - **Single authored opening moment**: Hero curtain wipe and word-by-word skew stagger.
  - **Scroll-reactive choreography**: Every other element responds smoothly to user scroll via GSAP ScrollTrigger and Lenis smooth scroll synchronization.

---

## 3. Key Features & Architectural Highlights

### 🎬 1. Cinematic Hero Entrance with Curtain Wipe
- **Page Curtain Wipe**: Dark panel slides up on mount inspired by [khanhnguyen.design](https://khanhnguyen.design/).
- **Skew & Word Stagger**: Headline reveals word-by-word with 3D skew and opacity interpolation.
- **Scale-Parallax Imagery**: Authentic Indian youth engineering visual anchored by patriotic geometry and live registration stats.

### 🔢 2. ScrollTrigger Odometer Metrics
- Single-trigger counting numbers for verified SIH metrics:
  - **1,50,000+** Student Participants
  - **20,000+** Interdisciplinary Teams
  - **300+** Union Ministry Problem Statements
  - **500+** Accredited Host Institutions

### 🏛️ 3. National Mandate (About Section)
- 3-pillar breakdown: **Real Governance Challenges**, **₹1 Crore+ Prize Purse**, and **Fast-Track Incubation & MoUs**.
- Dual-image double exposure showcasing Indian scientific progress and the Ashoka capital.

### 👥 4. Mandatory Team Eligibility Matrix
- Clear interactive guide detailing the mandatory **6-Member Team Structure**, including the required **minimum 1 female innovator**.
- Tabbed selector for **College SPOC Verification Process**, **Internal Hackathon Top-30 Quotas**, and **Grand Finale Nodal Dispatch**.

### 🔍 5. Searchable Problem Statements Engine
- Live instant search filtering across titles, domains, organizations, categories (Software/Hardware), and numeric IDs.
- **Fast Numeric Search**: Typing `101`, `102`, or `105` directly filters the corresponding challenge.
- **Domain Badges & Thumbnails**: High-resolution sector photography thumbnails for every statement card.
- **Interactive Briefing Modal**: Detailed problem statement breakdown with submission criteria and downloadable briefs.

### 📊 6. Interactive 17-Sector SVG Donut / Pie Analytics
- Complete interactive breakdown of all 300+ problem statements across all 17 official SIH sectors.
- Real-time slice hover expansion with center telemetry readout (theme name, statement count, % share, track category).
- Instant switch between **"Grid Cards View"** and **"Sector Pie Analytics"**.

### 🛣️ 7. 4-Stage Flagship Journey Timeline
- Comprehensive roadmap covering:
  - **Stage 01: Discover** (Aug–Sep) — SPOC onboarding & 300+ problem statements release.
  - **Stage 02: Build** (Oct) — Campus internal hackathons & synopsis submissions.
  - **Stage 03: Compete** (Nov) — National double-blind screening & nodal allotment.
  - **Stage 04: Grand Finale** (Dec) — 36-hour non-stop continuous build marathon.
- High-resolution panoramic mountain highway background with ambient lighting trails.

### 🗺️ 8. Interactive India Map of Nodal Centers
- Schematic SVG map of India with live coordinate telemetry.
- Glowing nodal pins for premier hubs across Delhi, Pune, Bengaluru, Hyderabad, Jaipur, Bhubaneswar, Bhopal, etc.
- Interactive telemetry panel displaying active lab tracks, bandwidth, and host colleges.

### ⏳ 9. Split-Flap Registration Countdown Timer
- IBM Plex Mono split-flap animated countdown ticking toward the national deadline.
- Dynamic color shift to `kumkum` (`#C1442E`) when under 24 hours to create psychological urgency.

### 🤝 10. Infinite Marquee Institutional Wall
- Dual-track infinite marquee displaying Government Ministries (MoE, MeitY), Industry Partners (TCS, Infosys, Accenture, IBM, Bosch, Tata Motors), and Premier Institutes (IITs, NITs).

### 💻 11. Developer Diagnostics Terminal Easter Egg
- Accessible anytime by pressing `` ` `` or `~` on the keyboard, or clicking `sys_log` in the Navbar.
- Built-in interactive shell commands: `help`, `stats`, `themes`, `nodal`, `clear`, and `exit`.

### 🌗 12. Light & Dark Blueprint Theme Switcher
- Instant toggle between **Dark Navy Canvas** (`#0B1622`) and **Crisp Light Blueprint** (`#F7FAFC`) with full localStorage persistence.

---

## 4. Interactive Donut / Pie Analytics Distribution

In the **Themes & Categories** section, users can toggle the **"Sector Pie Analytics"** view to inspect an interactive SVG Donut visualization breaking down all 300+ problem statements across India's priority sectors:

| Theme | Category | Statements | % Share |
|---|---|---|---|
| **AI & Data Science** | Software | 48 | 16.0% |
| **Health & Biotechnology** | Both | 36 | 12.0% |
| **Agriculture & Rural Development** | Both | 42 | 14.0% |
| **Clean Energy & Environment** | Both | 30 | 10.0% |
| **Space & Astronomy** | Both | 16 | 5.3% |
| **Cyber Security & Forensics** | Software | 34 | 11.3% |
| **Robotics & Automation** | Hardware | 28 | 9.3% |
| **Smart Vehicles & EV Mobility** | Hardware | 22 | 7.3% |
| **Disaster Management** | Both | 18 | 6.0% |
| **Heritage & Culture** | Software | 12 | 4.0% |
| **Smart Education & EdTech** | Software | 26 | 8.7% |
| **Water Management & Sanitation** | Both | 20 | 6.7% |
| **Fitness & Sports Tech** | Both | 14 | 4.7% |
| **Travel & Smart Tourism** | Software | 16 | 5.3% |
| **Smart Cities & Urban Infra** | Both | 24 | 8.0% |
| **Defence & Maritime Tech** | Hardware | 20 | 6.7% |
| **Open Innovation** | Both | 35 | 11.7% |

---

## 5. Unified Multi-Persona Login Portal (`/login`)

The remake features a single-sign-on hub supporting **4 distinct personas** with dynamic color accents, security compliance indicators, and 1-click demo autofill presets:

| Persona | Role Badge | Default Demo Identifier | Key Responsibilities |
|---|---|---|---|
| **Student / Team Leader** | `INNOVATOR PORTAL` | `AICTE-STU-2026-89412` | Submit synopsis, track mentor reviews, access nodal allotment. |
| **College SPOC** | `INSTITUTION PORTAL` | `AISHE-C-22419` | Nominate 30 teams, certify gender diversity, upload marks. |
| **Ministry / PSU Officer** | `ORGANIZATION PORTAL` | `GOV-MOEFCC-NODAL-09` | Formulate challenges, mentor teams, allocate grant awards. |
| **Jury & Mentor** | `EVALUATION PORTAL` | `JURY-FINALE-2026-A14` | 3-stage iterative judging, code review, rubric scoring. |

### Demo Credentials & Quick Test
- **Password Mode**: Click **"Auto-Fill Active Persona"** to instantly populate credentials.
- **OTP Mode**: Switch to OTP tab and click **"Auto-Fill Demo OTP (481920)"** to simulate instant 2-factor authentication.

---

## 6. Official 17 SIH Themes Coverage

Every single official SIH theme is represented with custom high-resolution photography, categorized problem statements, and interactive modals:

1. **AI & Data Science** (`/images/theme-ai.jpg`)
2. **Health & Biotechnology** (`/images/theme-health.jpg`)
3. **Agriculture & Rural Development** (`/images/theme-agriculture.jpg`)
4. **Clean Energy & Environment** (`/images/theme-energy.jpg`)
5. **Space & Astronomy** (`/images/theme-space.jpg`)
6. **Cyber Security & Forensics** (`/images/theme-cyber.jpg`)
7. **Robotics & Automation** (`/images/theme-robotics.jpg`)
8. **Smart Vehicles & EV Mobility** (`/images/theme-vehicles.jpg`)
9. **Disaster Management** (`/images/theme-disaster.jpg`)
10. **Heritage & Culture** (`/images/theme-heritage.jpg`)
11. **Smart Education & EdTech** (`/images/theme-education.jpg`)
12. **Water Management & Sanitation** (`/images/theme-water.jpg`)
13. **Fitness & Sports Tech** (`/images/theme-sports.jpg`)
14. **Travel & Smart Tourism** (`/images/theme-tourism.jpg`)
15. **Smart Cities & Urban Infra** (`/images/theme-cities.jpg`)
16. **Defence & Maritime Tech** (`/images/theme-defence.jpg`)
17. **Open Innovation** (`/images/theme-innovation.jpg`)

---

## 7. Tech Stack & Engineering Architecture

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router, Server & Client Components) | 15.2+ |
| **UI Runtime** | React | 19.0 |
| **Type Safety** | TypeScript (Strict Mode) | 5.7+ |
| **Styling** | Tailwind CSS v4 + Vanilla CSS Custom Properties | 4.0+ |
| **Scroll Dynamics** | Lenis (lag-smoothed inertia scroll + GSAP sync) | 1.1+ |
| **Animation Engine** | GSAP + ScrollTrigger (timeline scrub & odometers) | 3.12+ |
| **Layout Animations** | Motion for React (AnimatePresence, layout) | 12.4+ |
| **Icons** | lucide-react | latest |
| **Typography** | Google Fonts (Fraunces, Instrument Sans, IBM Plex Mono) | — |
| **Utilities** | clsx + tailwind-merge | latest |

---

## 8. Repository & Folder Structure

```
sih-remake/
├── app/
│   ├── globals.css           # Design tokens, blueprint utilities, animations
│   ├── layout.tsx            # Font injection, SEO metadata, root wrapper
│   ├── page.tsx              # Main homepage integrating all 14 sections
│   └── login/
│       └── page.tsx          # Unified 4-role authentication portal
├── components/
│   ├── AboutSection.tsx      # National mandate & 3-pillar breakdown
│   ├── BuildStory.tsx        # 5-stage transformation sequence (21:00 to 09:00)
│   ├── CountdownCTA.tsx      # Split-flap deadline countdown with urgency logic
│   ├── EligibilitySection.tsx# 6-member team criteria & SPOC workflow
│   ├── FAQSection.tsx        # Collapsible accordion FAQ
│   ├── Footer.tsx            # Digital India compliance footer
│   ├── Hero.tsx              # Page curtain wipe, skew text reveal, stats
│   ├── IndiaMapSection.tsx   # Interactive SVG map with nodal coordinates
│   ├── Navbar.tsx            # Sticky header, theme toggle, mobile drawer
│   ├── ProblemStatements.tsx # Live search engine with domain thumbnails
│   ├── SmoothScroll.tsx      # Lenis + GSAP ticker synchronization
│   ├── SponsorsSection.tsx   # Dual infinite marquee partner wall
│   ├── StatsSection.tsx      # GSAP ScrollTrigger odometer counters
│   ├── StickyCTA.tsx         # Floating registration pill
│   ├── TerminalEasterEgg.tsx # Interactive keyboard diagnostics terminal
│   ├── ThemesDistributionChart.tsx # Interactive 17-sector SVG donut chart
│   ├── ThemesSection.tsx     # 17 official SIH themes grid with modal
│   ├── TimelineSection.tsx   # 4-stage flagship timeline with highway visual
│   └── WhySIHSection.tsx     # Perks, cash prizes, and government MoUs
├── lib/
│   ├── sih-data.ts           # Strongly-typed datasets (themes, statements, nodal)
│   └── utils.ts              # Tailwind clsx + twMerge utility
├── public/
│   └── images/               # 22 high-resolution visuals & sector photography
├── AI_PROMPTS.md             # Complete prompt engineering logs & design decisions
├── SIH-Design-System.md      # Comprehensive visual tokens & motion guidelines
├── vercel.json               # Vercel deployment configuration
├── next.config.mjs           # Next.js build configuration
├── package.json              # Dependencies and build scripts
├── tsconfig.json             # TypeScript compiler configuration
└── README.md                 # Project documentation (this file)
```

---

## 9. Keyboard Shortcuts & Accessibility

| Shortcut | Action | Scope |
|---|---|---|
| `/` | Focus search bar in Problem Statements section | Global |
| `` ` `` or `~` | Toggle Developer Diagnostics Terminal | Global |
| `Escape` | Close any open modal or terminal | Global |
| `Tab` / `Shift+Tab` | Accessible keyboard focus navigation | Global |

---

## 10. Getting Started Locally

### Prerequisites
- **Node.js** 18.18+ or Node 20+ / 22+
- **npm** 9+ (or pnpm / yarn equivalent)
- **Git** 2.30+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/workwithSkshubham/Remake-SIH-website.1.git
cd Remake-SIH-website.1

# 2. Install all dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The project requires no `.env` files or external API keys. It is fully self-contained.

---

## 11. Production Build & Deployment

To verify the production build locally:

```bash
# Compile and optimize the production bundle
npm run build

# Serve the production build
npm start
```

### Linting

```bash
npm run lint
```

---

## 12. Vercel Deployment Guide

This project is pre-configured for **zero-configuration** deployment on Vercel.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/workwithSkshubham/Remake-SIH-website.1)

### Manual Vercel Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy from the project root:
   ```bash
   vercel
   ```

### Vercel Dashboard Settings

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` (repo root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x (recommended) |

> No environment variables are required for the initial deployment.

---

## 13. AI Prompts & Development Methodology

Every architectural phase, prompt iteration, component refactoring, and motion synchronization step is documented in [`AI_PROMPTS.md`](./AI_PROMPTS.md) and [`SIH-Design-System.md`](./SIH-Design-System.md).

---

## License

This project is built as an open educational demonstration. All SIH brand identity, themes, and ministry data referenced are the property of the **Ministry of Education, Government of India** and **AICTE**.

---

*Smart India Hackathon 2026 // Ministry of Education's Innovation Cell & AICTE // Government of India*
