# Developer Guide

> This guide is a quick entry point. The full documentation now lives in the
> [`docs/`](docs/) folder — start there.

**Flute Fingering Charts** is a central hub for historical flute fingering
charts, migrated from static HTML/CSS/JS to a modern Vite + React + TypeScript
stack.

## Current Instruments

- Baroque Flute (Traverso) — fully ported chart (70 notes, 256 variations)
- Transverse Flute — complete (50 notes, 239 variations)
- Piccolo — complete (39 notes, 94 variations)
- Recorder — placeholder ("Coming soon" badge)

**Audience:** performers (quick mobile lookup) and musicologists (source research).

## Documentation Index

| Doc | Covers |
|---|---|
| [Architecture](docs/ARCHITECTURE.md) | Routing, components, rendering modes, styling tokens |
| [Data Format](docs/DATA_FORMAT.md) | Data model, hole encoding, per-instrument differences |
| [Development](docs/DEVELOPMENT.md) | Setup, testing, adding an instrument, troubleshooting |
| [Contributing](docs/CONTRIBUTING.md) | Ground rules, PRs, and issue reporting |

## Quick Start

```bash
npm install
npm run dev        # development server at localhost:5173
npm run build      # production build to dist/
```

