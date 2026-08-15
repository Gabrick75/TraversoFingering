import { memo } from 'react';
import { type FluteFingering } from '../data/transverseFluteData';

type HoleState = 'closed' | 'open' | 'half' | 'quarter';

function holeState(s: string): HoleState {
  if (s === '1' || s === '2' || s === '3') return 'closed';
  if (s === '½') return 'half';
  if (s === '¾') return 'quarter';
  return 'open';
}

interface FluteDiagramProps {
  fingering: FluteFingering;
  noteLabel?: string;
  instrument?: 'flute' | 'piccolo';
}

function FluteDiagram({ fingering: f, noteLabel, instrument = 'flute' }: FluteDiagramProps) {
  const lh = f.lh.padEnd(3, '-');
  const rh = f.rh.padEnd(3, '-');

  const pressed = (name: string) => f.keys.includes(name);

  /*
   * ============================================================
   * FLUTE BOEHM — KEY MAP
   * ============================================================
   *
   * LEFT THUMB
   *   thumb-b       = B natural thumb lever
   *   thumb-bb      = Bb thumb lever
   *
   * LEFT PINKY
   *   gsharp        = G# key
   *
   * RIGHT-HAND TRILL KEYS
   *   trill-bb      = Bb trill key
   *   trill-csharp  = C# trill key
   *   trill-d       = D trill key
   *   trill-dsharp  = D# trill key
   *
   * RIGHT PINKY / FOOTJOINT
   *   eb            = Eb key
   *   low-csharp    = Low C# key
   *   low-c         = Low C key
   *   low-b         = Low B key
   *   gizmo         = High C Facilitator / Gizmo
   *
   * IMPORTANT:
   * Bb trill and C# trill occupy the same visual position
   * in the reference fingering symbol.
   */

  const keyState = {
    thumbB: f.thumb === 'B' || f.thumb === 'T' || pressed('BThumb') || pressed('thumb-b'),
    thumbBb:
      f.thumb === 'Bb' ||
      pressed('BbThumb') ||
      pressed('thumb-bb'),

    gsharp:
      f.gSharp ||
      pressed('G#') ||
      pressed('GSharp') ||
      pressed('gsharp'),

    trillBb:
      pressed('Bb') ||
      pressed('BbTrill') ||
      pressed('Bb-trill') ||
      pressed('trill-bb'),

    trillCsharp:
      pressed('C#Trill') ||
      pressed('C#-trill') ||
      pressed('trill-csharp'),

    trillD:
      pressed('D') ||
      pressed('DTrill') ||
      pressed('D-trill') ||
      pressed('trill-d'),

    trillDsharp:
      pressed('D#') ||
      pressed('D#Trill') ||
      pressed('D#-trill') ||
      pressed('trill-dsharp'),

    eb:
      pressed('Eb') ||
      pressed('eb'),

    lowCsharp:
      pressed('C#') ||
      pressed('LowC#') ||
      pressed('Low C#') ||
      pressed('low-csharp'),

    lowC:
      pressed('C') ||
      pressed('LowC') ||
      pressed('Low C') ||
      pressed('low-c'),

    lowB:
      pressed('B') ||
      pressed('LowB') ||
      pressed('Low B') ||
      pressed('low-b'),

    gizmo:
      pressed('Gizmo') ||
      pressed('gizmo'),
  };

  /*
   * ============================================================
   * MAIN TONE HOLES
   *
   * Positions copied from the reference image.
   * ============================================================
   */

  const holes: Array<{
    cx: number;
    state: HoleState;
  }> = [
    // LH1 — C
    {
      cx: 40.5,
      state: holeState(lh[0]),
    },

    // LH2 — A
    {
      cx: 91.5,
      state: holeState(lh[1]),
    },

    // LH3 — G
    {
      cx: 142.5,
      state: holeState(lh[2]),
    },

    // RH1 — F
    {
      cx: 208.5,
      state: holeState(rh[0]),
    },

    // RH2 — E
    {
      cx: 259.5,
      state: holeState(rh[1]),
    },

    // RH3 — D
    {
      cx: 311.5,
      state: holeState(rh[2]),
    },
  ];

  const keyCls = (name: string, active: boolean) =>
    `fd-key fd-key-${name}${active ? ' is-pressed' : ''}`;

  return (
    <svg
      viewBox={instrument === 'piccolo' ? '0 0 375 125' : '0 0 433 125'}
      className="flute-diagram"
      role="img"
      aria-label={`Fingering for ${noteLabel ?? 'note'} on ${instrument === 'piccolo' ? 'piccolo' : 'transverse flute'}`}
    >
      {/* ========================================================
          MAIN TONE HOLES
          ======================================================== */}

      <g className="fd-holes">
        {holes.map((hole, index) => {
          const cx = hole.cx;
          const cy = 70.5;
          const r = 20.5;
          if (hole.state === 'half') {
            // Bottom half black, top half white — split along horizontal diameter
            return (
              <g key={index}>
                {/* top half — white */}
                <path
                  d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy} Z`}
                  className="fd-hole fd-hole-top"
                />
                {/* bottom half — black */}
                <path
                  d={`M${cx - r},${cy} A${r},${r} 0 0,0 ${cx + r},${cy} Z`}
                  className="fd-hole fd-hole-bottom"
                />
                {/* border ring */}
                <circle cx={cx} cy={cy} r={r} className="fd-hole-ring" />
              </g>
            );
          }
          if (hole.state === 'quarter') {
            // Three-quarters covered — leave the bottom-right quarter open
            return (
              <g key={index}>
                {/* background — black */}
                <circle cx={cx} cy={cy} r={r} className="fd-hole closed" />
                {/* bottom-right quarter — white (the open sliver) */}
                <path
                  d={`M${cx},${cy} L${cx + r},${cy} A${r},${r} 0 0,1 ${cx},${cy + r} Z`}
                  className="fd-hole fd-hole-top"
                />
                {/* border ring */}
                <circle cx={cx} cy={cy} r={r} className="fd-hole-ring" />
              </g>
            );
          }
          return (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r={r}
              className={`fd-hole ${hole.state}`}
            />
          );
        })}
      </g>

      {/* ========================================================
          LEFT / RIGHT HAND DIVIDER
          Reference uses a dotted vertical divider.
          ======================================================== */}

      <path
        d="M174.5 35.5V102"
        className="fd-divider"
        strokeDasharray="1.5 3"
      />

      {/* ========================================================
          1 — B THUMB
          B-natural thumb lever
          
          Upper/long shape below LH1.
          ======================================================== */}

      <g className={keyCls('thumb-b', keyState.thumbB)}>
        <path
          className="fd-shape"
          d="
            M45.5 91.5
            H84.5
            C86.5 91.5 87.5 93 87.5 95
            V99
            H58
            V108
            C58 112
            55 114
            51 114
            H45
            C40.5 114
            38 111
            38 107
            V100
            C38 95
            40.5 92
            45.5 91.5
            Z
          "
        />
      </g>

      {/* ========================================================
          2 — Bb THUMB
          Thumb Bb lever.

          Small horizontal capsule tucked into the B lever's
          notch. Nudged slightly down/right (and shrunk a touch)
          versus the raw notch bounds so there's a visible gap
          between the two keys instead of them reading as fused.
          ======================================================== */}

      <g className={keyCls('thumb-bb', keyState.thumbBb)}>
        <rect
          x="59"
          y="102"
          width="24"
          height="8"
          rx="4"
          className="fd-shape"
        />
      </g>

      {/* ========================================================
          3 — G# KEY
          
          Characteristic inverted hook above LH3. Shifted up 8
          units and right 5 units versus the raw original so it
          clears the G hole with a small gap and sits a bit
          closer to (but not overlapping) the LH/RH divider.
          ======================================================== */}

      <g className={keyCls('gsharp', keyState.gsharp)}>
        <path
          className="fd-shape"
          d="
            M150 30
            H161
            C166 30 169 33 169 38
            V47
            C169 49 167.5 51 165.5 51
            H160
            C158 51 156.5 49.5 156.5 47.5
            V42
            H150
            C145 42 142 39 142 35
            C142 32 145 30 150 30
            Z
          "
        />
      </g>

      {/* ========================================================
          4 — Bb TRILL
          
          Sits in the LH3–RH1 gap, which is split by the dotted
          divider (x=174.5). Positioned to the right of the
          divider, closer to RH1, instead of straddling the line.
          Narrowed slightly (15→13, matching D/D# trill width) so
          it comfortably clears both the divider and RH1's edge.
          
          It is intentionally represented by the same visual
          outline as the C# trill key below.
          ======================================================== */}

      <g className={keyCls('trill-bb', keyState.trillBb)}>
        <rect
          x="176"
          y="79"
          width="13"
          height="23"
          rx="6.5"
          className="fd-shape"
        />
      </g>

      {/* ========================================================
          5 — C# TRILL
          
          Same physical/visual symbol position used by the
          reference. It is kept as a separate logical key.
          ======================================================== */}

      <g
        className={keyCls(
          'trill-csharp',
          keyState.trillCsharp
        )}
      >
        {/* Deliberately no additional visible shape.
            Bb/C# trill share the reference symbol. */}
      </g>

      {/* ========================================================
          6 — D TRILL
          
          Centered in the gap between RH1 and RH2 (edges at
          x=229 and x=239, gap midpoint x=234) instead of
          hugging RH2's left edge.
          ======================================================== */}

      <g className={keyCls('trill-d', keyState.trillD)}>
        <rect
          x="227.5"
          y="79"
          width="13"
          height="23"
          rx="6.5"
          className="fd-shape"
        />
      </g>

      {/* ========================================================
          7 — D# TRILL
          
          Centered in the gap between RH2 and RH3 (edges at
          x=280 and x=291, gap midpoint x=285.5) instead of
          hugging RH3's left edge.
          ======================================================== */}

      <g
        className={keyCls(
          'trill-dsharp',
          keyState.trillDsharp
        )}
      >
        <rect
          x="279"
          y="79"
          width="13"
          height="23"
          rx="6.5"
          className="fd-shape"
        />
      </g>

      {/* ========================================================
          8 — Eb KEY
          
          Black vertical/curved key at the footjoint.
          ======================================================== */}

      <g className={keyCls('eb', keyState.eb)}>
        <path
          className="fd-shape"
          d="
            M357 50
            H362
            V61
            C362 64
            364 66
            364 70
            V82
            C364 88
            361 92
            356 92
            H351
            C346 92
            344 89
            344 85
            V70
            C344 66
            347 63
            350 63
            H357
            Z
          "
        />
      </g>

      {/* ========================================================
          9–12 — FOOTJOINT KEYS (flute only)
          Low B / Low C / Low C# / Gizmo — piccolo has no foot keys
          ======================================================== */}

      {instrument === 'flute' && (
        <>
          {/* ========================================================
              9 — LOW B KEY
              Upper horizontal footjoint key.
              ======================================================== */}

          <g className={keyCls('low-b', keyState.lowB)}>
            <rect x="367" y="50" width="40" height="8" rx="4" className="fd-shape" />
          </g>

          {/* ========================================================
              10 — LOW C KEY
              Middle horizontal footjoint key.
              ======================================================== */}

          <g className={keyCls('low-c', keyState.lowC)}>
            <rect x="367" y="61" width="40" height="8" rx="4" className="fd-shape" />
          </g>

          {/* ========================================================
              11 — LOW C# KEY
              Lower horizontal footjoint key.
              ======================================================== */}

          <g className={keyCls('low-csharp', keyState.lowCsharp)}>
            <rect x="367" y="72" width="40" height="8" rx="4" className="fd-shape" />
          </g>

          {/* ========================================================
              12 — GIZMO
              High C Facilitator.
              ======================================================== */}

          <g className={keyCls('gizmo', keyState.gizmo)}>
            <rect x="409" y="50" width="13" height="19" rx="3" className="fd-shape" />
          </g>
        </>
      )}
    </svg>
  );
}

FluteDiagram.displayName = 'FluteDiagram';

export default memo(FluteDiagram);
