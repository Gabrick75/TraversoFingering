# Data Format

All fingering data lives in `src/data/` as typed, plain-JavaScript arrays. The
TypeScript types are declared in
[`src/data/transverseFluteData.ts`](../src/data/transverseFluteData.ts) and are
shared by every instrument.

## Core Types

```ts
interface FluteOctave {
  number: number;              // 1-based octave number
  notes: FluteNote[];
}

interface FluteNote {
  noteName: string;            // display name, e.g. "B3 / Cb4"
  anchorName: string;          // url-safe anchor id, e.g. "b3"
  variations: FluteFingering[];
}

interface FluteFingering {
  thumb: string;               // 'T' (either thumb) | 'B' | 'Bb' | '' (no thumb)
  lh: string;                  // 3 chars: left-hand holes 1, 2, 3
  gSharp: boolean;             // left pinky G♯ lever
  rh: string;                  // 3 chars: right-hand holes 1, 2, 3
  keys: string[];              // foot/trill keys to press (see below)
  bell?: boolean;              // piccolo: close the foot/bell with the pinky
  desc: string;                // short human note (e.g. "basic", "trill ...")
  src: string;                 // contributor code, e.g. "KJ", "SN"
}
```

## Hole Character Encoding

`lh` and `rh` are always 3 characters (right-aligned with `-` when a note has
fewer holes):

| Char | Meaning |
|---|---|
| `1` | Closed (finger covers the hole) |
| `0` | Open (hole uncovered) |
| `-` | Open (hole not present on the instrument) |
| `½` | Half-hole |
| `¾` | Three-quarter hole |

## Thumb & Keys

- **Thumb**: `'T'` means either thumb key works; `'B'` presses the B lever,
  `'Bb'` presses the B♭ lever, `''` means no thumb.
- **`keys`** mixes two groups:
  - **Pinky / foot keys**: `'B'`, `'C'`, `'C#'`, `'Eb'`, `'Gizmo'`
  - **Trill keys**: `'Bb'`, `'D'`, `'D#'`

## Example

The B3 basic fingering on the transverse flute:

```ts
{
  thumb: 'T',
  lh: '123',
  gSharp: false,
  rh: '123',
  keys: ['B'],        // right pinky presses the B key
  desc: 'basic',
  src: 'KJ',
}
```

## Baroque Flute Format

The baroque dataset ([`baroqueFluteData.ts`](../src/data/baroqueFluteData.ts))
uses a different, simpler shape inherited from the original HTML table:

```ts
interface Variation {
  holes: string;    // 7 chars, 'c' (closed) / 'o' (open), see below
  sources: string;  // historical source abbreviations, e.g. "Ht, Mh"
}
```

For the baroque flute the 7 characters map to: LH1 LH2 LH3, RH1 RH2 RH3,
and the G♯/foot key — with `c` (closed), `o` (open) and `s` (shaded). The
baroque flute has no thumb/trill system, so there is no `keys`/`thumb`/
`gSharp`/`bell` concept in this dataset.

## Dataset Sizes

| Dataset | File | Octaves | Notes | Variations |
|---|---|---|---|---|
| Baroque Flute | `baroqueFluteData.ts` | 4 | 70 | 256 |
| Transverse Flute | `transverseFluteData.ts` | 4 | 50 | 239 |
| Piccolo | `piccoloData.ts` | 3 | 39 | 94 |

## Optional Flags

- **`bell`** — only the piccolo data uses it. When `true`, the chart renders a
  "close the foot/bell" marker (`X`).
- **Piccolo transpose** — the piccolo page renders a "sounds an octave higher
  than written" note (handled in `PiccoloChart.tsx`, not in the data types).

All datasets are maintained directly in `src/data/` as plain arrays; there is
no code generation involved.
