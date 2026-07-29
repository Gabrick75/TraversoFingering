# Flute Fingering Charts — Developer Guide

## Overview

A centralized hub for historical flute fingering charts, migrated from static HTML/CSS/JS to a modern Vite + React + TypeScript stack.

**Global title:** "Flute Fingering Charts" with per-instrument subtitle

**Current instruments:**
- Baroque Flute (Traverso) — fully ported fingering chart
- Transverse Flute — placeholder ("Coming soon" badge)
- Piccolo — placeholder ("Coming soon" badge)
- Recorder — placeholder ("Coming soon" badge)

**Audience:** Performers (quick mobile lookup) and musicologists (source research)

## Architecture

```
./
├── index.legacy.html             Original home page (reference)
├── chart.legacy.html             Original chart page (reference)
├── css/
│   └── main.css                  Original CSS (reference)
├── index.html                    Vite entry point
├── vite.config.ts                Vite config
├── tsconfig.json                 TypeScript config
├── scripts/
│   └── extract-data.mjs          Extracts fingering data from chart.legacy.html
├── public/
│   └── images/                   Instrument card images (resized)
├── images/                       Original instrument images (full resolution)
├── src/
│   ├── main.tsx                  React entry point
│   ├── App.tsx                   Router + layout wrapper
│   ├── vite-env.d.ts
│   ├── styles/
│   │   ├── main.css              Original CSS + back-link additions
│   │   └── home.css              Home page card grid styles
│   ├── context/
│   │   └── DarkModeContext.tsx    Dark mode via localStorage + body class
│   ├── components/
│   │   ├── Layout.tsx            Header (h1 + subtitle + back link), footer, dark toggle, back-to-top
│   │   ├── DarkToggle.tsx        Moon/sun toggle button
│   │   ├── BackToTop.tsx         Scroll-to-top FAB
│   │   └── OctaveNav.tsx         Sticky octave navigation + IntersectionObserver
│   ├── data/
│   │   └── baroqueFluteData.ts   Structured fingering data (auto-generated)
│   └── pages/
│       ├── Home.tsx              Central hub with instrument card grid
│       ├── BaroqueFluteChart.tsx Complete fingering chart
│       ├── TransverseFluteChart.tsx
│       ├── PiccoloChart.tsx
│       └── RecorderChart.tsx
```

## Getting Started

```bash
npm install
npm run dev        # development server at localhost:5173
npm run build      # production build to dist/
npm run preview    # preview production build
```

## Adding a New Instrument

1. Add the instrument image to `public/images/` (resized to ~300px wide)
2. Add an entry to the `instruments` array in `src/pages/Home.tsx`
3. Add the path → subtitle mapping in `src/components/Layout.tsx` (`SUBTITLE_MAP`)
4. Create a page in `src/pages/`
5. Add a route in `src/App.tsx`
6. For data-driven charts: create a data file in `src/data/` (or adapt `scripts/extract-data.mjs`)

**New instrument data format (simple):** note name + single fingering (no historical variations). The Baroque Flute data format with sources array is specific to that instrument.

## Data Format

Fingering data uses a compact 7-character string to represent hole states:

```
LH1 LH2 LH3 | RH1 RH2 RH3 | Key
 c   c   c  |  c   c   c  |  c
```

- `c` = closed (finger covering hole)
- `o` = open (hole uncovered)
- `s` = shaded / half-hole

### Baroque Flute Data

Auto-generated from `chart.legacy.html`. To regenerate:

```bash
node scripts/extract-data.mjs
```

This parses the original HTML table and produces `src/data/baroqueFluteData.ts`.

## Design Tokens

The design identity is instrument-inspired:

- **Palette**: parchment, ebony, brass, boxwood, leather
- **Type**: Instrument Serif (display), Source Serif 4 (body), JetBrains Mono (utility)
- **Visual**: Physical hole rendering via CSS radial gradients, wood-grain rows
- **Dark mode**: body.dark-mode class, localStorage persistence

Additions to `src/styles/main.css` must stay compatible with the token system. The original hole/table rendering and palette should not be altered.

## Routing

| Route | Page | Subtitle | Status |
|---|---|---|---|
| `/` | Home with instrument card grid | (none) | ✅ |
| `/baroque-flute` | Baroque Flute chart | "Baroque Flute" | ✅ Complete |
| `/transverse-flute` | Transverse Flute chart | "Transverse Flute" | 🚧 Placeholder |
| `/piccolo` | Piccolo chart | "Piccolo" | 🚧 Placeholder |
| `/recorder` | Recorder chart | "Recorder" | 🚧 Placeholder |

## Home Page Layout

2×2 card grid (responsive: stacks to 1 column ≤640px):
- **Card:** Image (120×90, object-fit:cover) left + text right
- **Background:** `var(--cream)` with soft shadow
- **Hover:** lifts 2px, shadow deepens
- **Badge:** "Coming soon" on placeholder instruments in boxwood/leather tones
- Cards are `<Link>` for active instruments, `<div>` for placeholders

CSS in `src/styles/home.css` (separate from `main.css`).

## Header Layout

```
Flute Fingering Charts          ← h1, link to /
  Baroque Flute                 ← .subtitle (per page via SUBTITLE_MAP)
← All Instruments               ← .back-link (only on chart pages)
```

## Performance Notes

- The Baroque Flute chart renders ~256 fingering variations from structured data
- React keys use note anchor names + hole strings for stable reconciliation
- The OctaveNav uses the same IntersectionObserver pattern as the original
- Dark mode toggle avoids re-renders — mutates body class directly
