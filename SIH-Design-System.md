# SIH Website — Colour Grade, Transition & Motion System
**Direction: "Blueprint at 3AM"** — for the Next.js + GSAP + Framer Motion + Lenis rebuild

## Why this direction, not the obvious one

The obvious move for a "modern animated hackathon site" is warm cream + terracotta, or near-black with one neon accent, laid out in identical rounded SaaS cards with ALL-CAPS eyebrow labels and arrow-suffixed buttons. That's the generic AI-website look, and every judge on this circuit has seen it a hundred times.

SIH's actual identity is more specific than "startup": it's a **government-run, national-scale hackathon that turns a rough idea into a working prototype over one non-stop 36-hour night**. That gives a real visual world to draw from — technical drafting sheets, gazette title blocks, terminal glow, the specific hour when a sketch becomes a UI. Everything below is built from that, not from "tech site defaults."

---

## 0. Reference lineage — what's borrowed from where

| Reference | What we take | How it's repurposed for SIH |
|---|---|---|
| khanhnguyen.design | Kinetic type reveal, numbered chapter nav, one portrait/quote beat | One authored hero build sequence; numbers only reused on the timeline (a real sequence) |
| nixtio.com | Up-counting stat blocks, numbered service list, hover-reveal project cards | Live scale counters (teams/colleges/PS count), hover-reveal on problem-statement cards |
| grigoletti.ch | Persistent CTA that morphs on scroll, horizontal project rail, numbered accordion | Sticky "Register via SPOC" CTA that morphs into the footer CTA; horizontal scrub for the timeline |
| noxediem.ch | Full-bleed cinematic reveal, phase-based process list, grouped logo wall | Blueprint-grid hero backdrop, 4-phase build timeline, sponsors grouped by ministry/industry/academia |

---

## 1. Colour grade

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0B1622` | Primary dark background (deep navy, not pure black) |
| `ink-2` | `#121C2B` | Card/panel surface on dark |
| `chalk` | `#ECEEE7` | Light surface + primary text-on-dark |
| `marigold` | `#E7962B` | Primary accent — CTAs, active states, energy |
| `signal` | `#2FAE82` | Success / progress / "live" indicators (circuit-green, not neon) |
| `blueprint` | `#3E5C76` | Structural lines, dividers, secondary accents |
| `kumkum` | `#C1442E` | **Functional only** — deadline urgency (<24h), error states |

**Usage rules:**
- Marigold never fills a whole viewport — reserved for CTAs and the countdown until it flips to kumkum under 24 hours.
- Signal green and kumkum are both mid-contrast on `ink` — use them at large size (numerals, icons, chips) or on `chalk`, not as small body text on dark.
- No literal tricolor stripe anywhere — the palette *evokes* India (marigold, kumkum) and the Ashoka-chakra navy without reproducing the flag.

```ts
// tailwind.config.ts
colors: {
  ink: { DEFAULT: '#0B1622', 2: '#121C2B' },
  chalk: '#ECEEE7',
  marigold: '#E7962B',
  signal: '#2FAE82',
  blueprint: '#3E5C76',
  kumkum: '#C1442E',
}
```

---

## 2. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display (hero, section titles, big numerals) | **Fraunces** | Warm, high-contrast serif with an optical-size axis — reads like a gazette title block, not another geometric tech-grotesk |
| Body / UI (paragraphs, nav, buttons, forms) | **Instrument Sans** | Clean humanist workhorse, distinct from Fraunces at a glance |
| Restricted mono (countdown digits + terminal easter egg *only*) | **IBM Plex Mono** | Deliberately not used for ordinary labels — monospace-everywhere is a generic tell |

Type scale (fluid):
- Hero: `clamp(2.75rem, 6vw + 1rem, 7.5rem)`, tracking -0.02em
- Section H2: `clamp(2rem, 3vw + 1rem, 3.25rem)`
- Card H3: 1.5–1.75rem
- Body: 17px / 1.6 line-height
- Caption: 14px, **sentence case** (no all-caps eyebrows)

---

## 3. Layout spine

Left-aligned, asymmetric — not centered SaaS-card grid. A thin `blueprint` hairline runs down the page like a technical drawing centerline; content hangs off it.

```
┌───────────────────────────────────────────┐
│ SIH                                  menu  │  ← hairline below nav
│                                             │
│   No problem is too big.                   │  ← Fraunces, huge, left-aligned
│   No idea is too small.                    │
│                            │ 50,000+ teams  │  ← spine rule, stat hangs off it
│                            │ 10,000+ colleges
│   [ Register through SPOC ]                │  ← marigold, no arrow
└───────────────────────────────────────────┘
  (faint drafting-grid + drifting node lines behind, low opacity)
```

Problem-statement and FAQ sections switch to a denser structured grid for scanability — the asymmetry is spent on hero/timeline/map, not everywhere.

---

## 4. Motion philosophy — the one rule that matters

**One authored moment, everywhere else motion answers the user's own action.** Fade-and-slide-up on every section as it scrolls into view is the single most common tell of a templated site — skip it entirely.

- The hero build plays once, on load. Nothing else auto-animates independently of the user.
- Timeline, map, and sketch→prototype sections are **scroll-scrubbed** (`scrub: true`) — position is tied 1:1 to the user's scroll, not a timed reveal. This is what makes GSAP+Lenis worth using at all.
- Filter chips, FAQ accordion, hover cards — motion triggers only on click/hover, and shows *what changed*.
- Numbers (01/02/03) appear only on the timeline, where the content is genuinely sequential. The 17 problem-statement themes are **not** numbered — they're a filterable set, not a sequence.
- No arrow appended to buttons by default; copy states the action plainly ("Register through SPOC", not "Learn more →").
- `prefers-reduced-motion` disables the scrub/parallax layers and hero stagger, leaving a clean instant-appear fallback.

---

## 5. Section-by-section spec (mapped to the real SIH site)

**Hero**
Blueprint-grid canvas fades in (0.6s, `power2.out`). Headline splits into lines via GSAP `SplitText` and staggers up (`0.045s` stagger, `expo.out`, 0.9s/line). Subhead + CTA fade in last (0.4s, 1.1s delay). This is the one big moment — nothing else on the page auto-fades.

**Live scale counters** (10,000+ institutions · 50,000+ teams · 226 problem statements · 36-hour finale)
Odometer-style digit roll-up, GSAP `ScrollTrigger` fires once on first view (not scrubbed — a count-up reads better as a single completed event).

**Team eligibility block** (exactly 6 members, min. 1 woman mandatory)
Not a bullet list — one oversized Fraunces numeral treatment. This is SIH's real point of difference from generic hackathons; give it weight instead of hiding it in a paragraph.

**Timeline** (SPOC registration → PS release → internal hackathon → screening → Grand Finale)
Pinned section, horizontal scrub tied to vertical scroll via Lenis→ScrollTrigger proxy. A dot fills in as each stage is passed; snap points at each stage.

**Problem-statement themes** (17 sectors, software + hardware tracks)
Filterable chip grid, Framer Motion `layout` re-flow on filter (`0.5s`, ease `[0.22,1,0.36,1]`). Cards leaving: opacity+scale down; entering: staggered 30ms. Command-menu (`/` to search) over the statement list.

**India map — nodal centers**
SVG outline draws on via `stroke-dashoffset` scrubbed to scroll; nodal-center dots pop with a Framer Motion spring (`stiffness:300, damping:20`) staggered by data order, then pulse gently.

**Sponsors / partners**
Logo wall grouped by category (Ministries / Industry / Academia), grayscale→color on hover, marquee row for the long tail — no numbering (not a sequence).

**Registration countdown + CTA**
Split-flap digit-flip countdown to the deadline (`rotateX`, 0.4s, IBM Plex Mono). Color state changes from `blueprint` to `kumkum` under 24 hours — a functional color shift, not decoration. Sticky CTA morphs (shared `layoutId`) into the footer CTA on scroll.

**FAQ / SPOC guidelines**
Click-triggered accordion, Framer Motion height auto (`0.35s`, ease `[0.4,0,0.2,1]`), chevron rotates in sync.

**Footer**
One closing line + links — no extra motion, this is the quiet landing after the hero's one loud moment.

**Route transitions**
`AnimatePresence` wipe using a `blueprint` panel with a faint grid texture (not a flat color), `clip-path: inset()`, 0.4s, ease `[0.83,0,0.17,1]`.

**Terminal easter egg** (optional, cut first if short on time)
Hidden key combo boots a mono-font terminal overlay with typewriter reveal — the one place IBM Plex Mono shows up outside the countdown.

---

## 6. Implementation snippets

```ts
// Lenis + GSAP ScrollTrigger sync
const lenis = new Lenis({ duration: 1.1, easing: t => 1 - Math.pow(1 - t, 3) });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

```ts
// Hero headline reveal
const split = new SplitText(headlineRef.current, { type: 'lines,words' });
gsap.from(split.words, { yPercent: 110, stagger: 0.045, duration: 0.9, ease: 'expo.out', delay: 0.3 });
```

```tsx
// Theme filter — Framer Motion layout re-flow
<motion.div layout transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}>
  <AnimatePresence>
    {filtered.map(theme => (
      <motion.div key={theme.id} layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }} />
    ))}
  </AnimatePresence>
</motion.div>
```

```tsx
// Countdown digit flip — colour state tied to urgency
<motion.span key={digit}
  initial={{ rotateX: -90 }} animate={{ rotateX: 0 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
  className={hoursLeft < 24 ? 'text-kumkum' : 'text-blueprint'}>
  {digit}
</motion.span>
```

```tsx
// Route transition wipe
<AnimatePresence mode="wait">
  <motion.div key={pathname}
    initial={{ clipPath: 'inset(0 0 0 100%)' }}
    animate={{ clipPath: 'inset(0 0 0 0%)' }}
    transition={{ duration: 0.4, ease: [0.83, 0, 0.17, 1] }}>
    {children}
  </motion.div>
</AnimatePresence>
```

---

## 7. Build order for your remaining runway

Given the deadline, in priority order:
1. Colour tokens + typography set up globally (fast, affects everything after)
2. Hero build + live counters
3. Timeline scrub
4. Countdown + sticky CTA
5. Mobile pass on all of the above
6. *If time remains:* problem-statement filter, India map, route wipe
7. *Cut first:* terminal easter egg

Everything above is guidance, not a spec to follow literally — adjust hex values and timings once you see it in the browser; a palette that looks right in a table often needs a nudge on screen.
