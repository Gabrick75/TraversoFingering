# Baroque Flute Fingering Chart

Transcription of Margaret Neuhaus's baroque flute (traverso) fingering chart. Designed for quick consultation on mobile during practice.

## Structure

```
index.html      — landing page with CTA, notes, abbreviations
chart.html      — the fingering chart (5982 lines, 4 octaves)
css/main.css    — design tokens (parchment/ebony/brass palette), dark mode, responsive
js/chart.js     — dark toggle, back-to-top, IntersectionObserver octave nav
js/index.js     — dark toggle only
```

## Features

- **Sticky nav** with 4 octave links + IntersectionObserver highlight
- **Dark mode** with localStorage persistence
- **Responsive** — works from 320px mobile up to desktop
- **Print-friendly** — hides nav rows, adjusts colors for paper

## Design

Instrument-inspired palette:
- Parchment `#EDE3D0` / Ebony `#2A1B12` / Brass `#BF8B4A` / Boxwood `#DDC8A8`
- Instrument Serif (display), Source Serif 4 (body), JetBrains Mono (utility)

## Credits

Site by [Gabrick75](https://github.com/Gabrick75).
