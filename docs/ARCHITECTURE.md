# Architecture

Flute Fingering Charts is a single-page application built with React 18,
TypeScript, and Vite. Every chart is **data-driven**: pages render structured
fingering data, never hand-written markup.

## Tech Stack

| Layer | Choice |
|---|---|
| Build tool | [Vite](https://vitejs.dev/) 5 |
| UI framework | [React](https://react.dev/) 18 (function components + hooks) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 (`strict`) |
| Routing | [React Router](https://reactrouter.com/) v6 |
| Styling | Plain CSS (`src/styles/main.css`, `src/styles/home.css`) |

## Directory Layout

```
├── index.html                  Vite entry point (fonts, title, #root)
├── vite.config.ts              Vite configuration
├── tsconfig.json               TypeScript configuration
├── package.json                Scripts + dependencies
├── public/images/              Instrument card images (resized)
├── src/
│   ├── main.tsx                React root: BrowserRouter + DarkModeProvider
│   ├── App.tsx                 Route table + <Layout> wrapper
│   ├── styles/                 main.css + home.css
│   ├── context/
│   │   └── DarkModeContext.tsx     Dark mode state + localStorage + <body> class
│   ├── components/
│   │   ├── Layout.tsx              Header, footer, dark toggle, back link
│   │   ├── DarkToggle.tsx          ☾/☀ toggle button
│   │   ├── BackToTop.tsx           Scroll-to-top FAB
│   │   ├── OctaveNav.tsx           Sticky octave nav + IntersectionObserver
│   │   ├── KeyLever.tsx            SVG key-pill for the classic table view
│   │   ├── FluteDiagram.tsx        SVG fingering diagram (transverse flute)
│   │   └── FluteChartTable.tsx     Shared table component for all charts
│   ├── data/                   Typed fingering datasets
│   └── pages/
│       ├── Home.tsx                Instrument card grid
│       ├── BaroqueFluteChart.tsx
│       ├── TransverseFluteChart.tsx
│       ├── PiccoloChart.tsx
│       └── RecorderChart.tsx
```

## Routing

Defined in [`src/App.tsx`](../src/App.tsx) and wrapped by `Layout`:

| Route | Page | Subtitle | Status |
|---|---|---|---|
| `/` | Home — instrument grid | — | ✅ |
| `/baroque-flute` | Baroque Flute chart | Baroque Flute | ✅ Complete |
| `/transverse-flute` | Transverse Flute chart | Transverse Flute | ✅ Complete |
| `/piccolo` | Piccolo chart | Piccolo | ✅ Complete |
| `/recorder` | Recorder chart | Recorder | 🚧 Placeholder |

`Layout` derives the per-page subtitle from `SUBTITLE_MAP` and only shows the
`← All Instruments` back link on non-home pages.

## Rendering a Chart

Every chart page is a thin wrapper that passes data to the shared
`FluteChartTable` component:

```tsx
// src/pages/TransverseFluteChart.tsx
import FluteChartTable from '../components/FluteChartTable';
import { transverseFluteData } from '../data/transverseFluteData';

export default function TransverseFluteChart() {
  return <FluteChartTable data={transverseFluteData} diagram />;
}
```

`FluteChartTable` renders one `<tbody>` per octave (with `id="octave-N"`), a
note header per note, and one row per fingering variation. It supports two
visual modes:

- **Pill mode** (default) — one column per thumb/hole/G♯/key, using
  `KeyLever` SVG pills. Used by Piccolo and Baroque Flute.
- **Diagram mode** (`diagram` prop) — each variation renders a self-contained
  `FluteDiagram` SVG with all holes and keys drawn in one place. Used by
  Transverse Flute.

The octave navigation is fully self-aware: `OctaveNav` reads the octave
`<tbody>` ids that actually exist in the DOM, so it never offers an octave that
is not on the page (e.g. Piccolo stops at octave 3).

## State & Dark Mode

- Dark mode lives in `DarkModeContext` (localStorage key `dark`), persisted and
  applied by toggling the `dark-mode` class on `<body>`. Toggling mutates the
  DOM class directly, so chart tables never re-render on theme switch.
- There is no other global state; all pages are purely derived from their
  imported data files.

## Styling & Design Tokens

The design identity is instrument-inspired (parchment, ebony, brass, boxwood,
leather) and defined as CSS custom properties in `src/styles/main.css`:

- **Palette**: `--parchment`, `--ebony`, `--brass`, `--boxwood`, `--leather`
- **Type**: Instrument Serif (display), Source Serif 4 (body), JetBrains Mono
  (utility), loaded in `index.html` via Google Fonts
- **Physical rendering**: holes are drawn with CSS radial gradients; rows use a
  subtle wood-grain background; the fingering diagram uses SVG fills/strokes
- **Responsive**: the home card grid collapses to a single column ≤640px; chart
  tables are designed for quick consultation on small screens

New CSS must stay compatible with the token system — the original hole/table
rendering and palette should not be altered.
