# Development Guide

Everything you need to run, test, and extend Flute Fingering Charts.

## Prerequisites

- **Node.js** ≥ 18 (Vite 5 requires it)
- **npm** (or your favourite package manager)

## Setup

```bash
npm install
```

## Daily Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server → http://localhost:5173 |
| `npm run build` | Type-check (`tsc -b`) + production build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Testing

The project has no automated test suite. `npm run build` runs `tsc -b`
followed by a Vite production build, so a green build is the primary
verification gate.

## Adding a New Instrument

1. **Image** — add a resized (~300px wide) card image to `public/images/`.
2. **Home card** — add an entry to the `instruments` array in
   `src/pages/Home.tsx`.
3. **Header subtitle** — add the route → subtitle mapping in
   `src/components/Layout.tsx` (`SUBTITLE_MAP`).
4. **Page** — create a page in `src/pages/` (see `TransverseFluteChart.tsx`
   for the minimal wrapper around `FluteChartTable`).
5. **Route** — register it in `src/App.tsx`.
6. **Data** — add a `src/data/` file following
   [DATA_FORMAT.md](./DATA_FORMAT.md).

## Conventions

- **Components** are function components with hooks, one component per file,
  PascalCase file names, default export.
- **Style**: plain CSS following the token system (see
  [ARCHITECTURE.md](./ARCHITECTURE.md)). Never introduce a CSS framework for a
  single rule; keep new rules in `main.css` unless they are home-only
  (`home.css`).
- **Accessibility**: interactive elements need `aria-label`; the fingering
  diagrams carry `role="img"` + descriptive `aria-label`s.
- Run `npm run build` (which runs `tsc -b`) before pushing — the repo treats
  type errors as build failures.

## Troubleshooting

**The page shows an old version / stale content.**
A leftover Vite process may be holding port 5173. Kill stray processes and
restart:

```bash
pkill -f "node_modules/.bin/vite"
npm run dev
```
