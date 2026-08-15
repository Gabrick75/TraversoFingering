// Transverse Flute fingering data

export interface FluteFingering {
  thumb: string;    // 'T' (either thumb) | 'B' (B-natural lever) | 'Bb' (Bb lever) | '' (no thumb)
  lh: string;       // 3 chars: '1' closed, '0' ring, '-' open, '½' half, '¾' three-quarters
  gSharp: boolean;  // G# key (left pinky)
  rh: string;       // 3 chars, same as lh
  keys: string[];   // trill keys (Bb, D, D#) and pinky keys (B, C, C#, Eb, Gizmo)
  bell?: boolean;   // piccolo: 'X' — close the foot/bell with the right-hand little finger
  desc: string;
  src: string;
}

export interface FluteNote {
  noteName: string;
  anchorName: string;
  variations: FluteFingering[];
}

export interface FluteOctave {
  number: number;
  notes: FluteNote[];
}

export const transverseFluteData: FluteOctave[] = [
  {
    "number": 1,
    "notes": [
      {
        "noteName": "B3 / Cb4",
        "anchorName": "b3",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "B"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "B#3 / C4",
        "anchorName": "c4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "C#4 / Db4",
        "anchorName": "db4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "D4",
        "anchorName": "d4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "D#4 / Eb4",
        "anchorName": "eb4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "E4 / Fb4",
        "anchorName": "e4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "E#4 / F4",
        "anchorName": "f4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "F#4 / Gb4",
        "anchorName": "gb4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Trill fingering with E4.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G4",
        "anchorName": "g4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G#4 / Ab4",
        "anchorName": "ab4",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "A4",
        "anchorName": "a4",
        "variations": [
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "More overtones; brighter.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Fast slur with D; flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with Eb; flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with E; flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F or Bb.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "A#4 / Bb4",
        "anchorName": "bb4",
        "variations": [
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic, use in passages without B4 or B5.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Bb",
              "Eb"
            ],
            "bell": false,
            "desc": "Trill fingering with B4.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Fast slur with D.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with Eb.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with E.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "B4 / Cb5",
        "anchorName": "b4",
        "variations": [
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "B#4 / C5",
        "anchorName": "c5",
        "variations": [
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Sharp; harmonic (C4).",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Fast slur with D.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with Eb.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with E.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F or Bb.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "C#5 / Db5",
        "anchorName": "db5",
        "variations": [
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "C#",
              "Eb"
            ],
            "bell": false,
            "desc": "More colorful. For models with C# trill key.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "More colorful.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "More colorful; flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Sharp; fast slur with D.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Flat; fast slur with D.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Flat; fast slur with D.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Fast slur with D.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flat; fast slur with Eb.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great basic fingering for bass flute. Use in fast slurs with Eb on other models.",
            "src": "AZ"
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with E.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F or Bb.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Fast slur with F#.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "In tune.",
            "src": "AT"
          },
          {
            "thumb": "",
            "lh": "--3",
            "gSharp": true,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Clearer tone.",
            "src": "DH"
          }
        ]
      }
    ]
  },
  {
    "number": 2,
    "notes": [
      {
        "noteName": "D5",
        "anchorName": "d5",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Harmonic (D4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "D#5 / Eb5",
        "anchorName": "eb5",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "E5 / Fb5",
        "anchorName": "e5",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Prevents cracking.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "E#5 / F5",
        "anchorName": "f5",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "F#5 / Gb5",
        "anchorName": "gb5",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Trill fingering with E5.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G5",
        "anchorName": "g5",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Harmonic (C4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G#5 / Ab5",
        "anchorName": "ab5",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Great for pp; Harmonic (C#4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "A5",
        "anchorName": "a5",
        "variations": [
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great for ff, harder to overblow to E5.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Slur with D5. Harmonic (D4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "A#5 / Bb5",
        "anchorName": "bb5",
        "variations": [
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic, use in passages without B4 or B5.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Bb",
              "Eb"
            ],
            "bell": false,
            "desc": "Trill fingering with B5.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "Bb",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": "SN"
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp; harmonic (Eb4).",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "103",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (Eb4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "B5 / Cb6",
        "anchorName": "b5",
        "variations": [
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (E4); good for pp.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "103",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (E4).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "B#5 / C6",
        "anchorName": "c6",
        "variations": [
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp; slur from D.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Harmonic (C4).",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Sharp; harmonic (C4)",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (F4).",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1-3",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      },
      {
        "noteName": "C#6 / Db6",
        "anchorName": "db6",
        "variations": [
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Flatter.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Harmonic (C#4); sharp.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (F#4); sharp; slur from D.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Slur from D.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      }
    ]
  },
  {
    "number": 3,
    "notes": [
      {
        "noteName": "D6",
        "anchorName": "d6",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Very sharp, good for pp.",
            "src": "SS"
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (G4).",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Harmonic (D5).",
            "src": ""
          }
        ]
      },
      {
        "noteName": "D#6 / Eb6",
        "anchorName": "eb6",
        "variations": [
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Slur from D.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Slur from D; flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flat; harmonic (Eb4).",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (G#4).",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (Eb5); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Slightly flat. Excellent for ff.",
            "src": "MM"
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      },
      {
        "noteName": "E6 / Fb6",
        "anchorName": "e6",
        "variations": [
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [],
            "bell": false,
            "desc": "Flat; good for hard attacks.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp; harder to crack to A5.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp; slur from F or F#.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (E4); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (A4); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "12-",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Clear and in tune with response similar to that of D6.",
            "src": "HW"
          },
          {
            "thumb": "T",
            "lh": "-2-",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      },
      {
        "noteName": "E#6 / F6",
        "anchorName": "f6",
        "variations": [
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1½-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Good for ff.",
            "src": "NH"
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Good for pp.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Slur with A6.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (F4); flat.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (Bb4); flat.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "F#6 / Gb6",
        "anchorName": "gb6",
        "variations": [
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Slur with E6.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Slur with A6.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Slur with A6.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "-23",
            "keys": [],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (F#4); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (F#4); flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (B4); flat.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G6",
        "anchorName": "g6",
        "variations": [
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Use in combination with F6, F#6, and A6 fingerings using the C# foot key.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Harmonic (C4).",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (Eb4); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (G4); flat.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1--",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (C5); flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (Eb5); sharp.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G#6 / Ab6",
        "anchorName": "ab6",
        "variations": [
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": true,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flatter; good for ff.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "C#",
              "Eb"
            ],
            "bell": false,
            "desc": "For models with C# trill key.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Harmonic (C#4).",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Harmonic (C#4).",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "---",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Harmonic (C#5); flat.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "A6",
        "anchorName": "a6",
        "variations": [
          {
            "thumb": "T",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Slur to F or F#.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1½-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Good for ff.",
            "src": "NH"
          }
        ]
      },
      {
        "noteName": "A#6 / Bb6",
        "anchorName": "bb6",
        "variations": [
          {
            "thumb": "T",
            "lh": "---",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "---",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "Slur with F or A.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1-3",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1-3",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1--",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D",
              "B"
            ],
            "bell": false,
            "desc": "In tune.",
            "src": "PS3"
          },
          {
            "thumb": "Bb",
            "lh": "---",
            "gSharp": false,
            "rh": "---",
            "keys": [],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1--",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      },
      {
        "noteName": "B6 / Cb7",
        "anchorName": "b6",
        "variations": [
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Basic.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "1-3",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D#",
              "B"
            ],
            "bell": false,
            "desc": "Clearer, less shrill, and more in tune.",
            "src": "PS3"
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D",
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "---",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D",
              "D#"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "1-3",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D",
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "C#"
            ],
            "bell": false,
            "desc": "Great for bass flute.",
            "src": "AZ"
          }
        ]
      },
      {
        "noteName": "B#6 / C7",
        "anchorName": "c7",
        "variations": [
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "Basic with B-foot.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1--",
            "keys": [],
            "bell": false,
            "desc": "Basic with C-foot.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "1--",
            "keys": [],
            "bell": false,
            "desc": "More in tune, but stuffy.",
            "src": "KJ"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1-3",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "Use with B-foot.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1-3",
            "keys": [],
            "bell": false,
            "desc": "Use with C-foot; better balance.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "12-",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "1-3",
            "gSharp": false,
            "rh": "---",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "",
            "src": "KJ"
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "123",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": "KJ"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "1½-",
            "keys": [],
            "bell": false,
            "desc": "In tune.",
            "src": "NH"
          }
        ]
      }
    ]
  },
  {
    "number": 4,
    "notes": [
      {
        "noteName": "C#7 / Db7",
        "anchorName": "db7",
        "variations": [
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": true,
            "rh": "1--",
            "keys": [],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": true,
            "rh": "1-3",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": true,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "",
            "src": "KJ"
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "123",
            "keys": [],
            "bell": false,
            "desc": "",
            "src": "KJ"
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "Gizmo"
            ],
            "bell": false,
            "desc": "",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "1--",
            "keys": [],
            "bell": false,
            "desc": "",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "-23",
            "gSharp": true,
            "rh": "1--",
            "keys": [],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          }
        ]
      },
      {
        "noteName": "D7",
        "anchorName": "d7",
        "variations": [
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "---",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "Roll out.",
            "src": ""
          },
          {
            "thumb": "Bb",
            "lh": "---",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "B"
            ],
            "bell": false,
            "desc": "Good response. Useful in the first movement of the Prokofiev Sonata.",
            "src": "DB"
          },
          {
            "thumb": "Bb",
            "lh": "---",
            "gSharp": false,
            "rh": "--3",
            "keys": [],
            "bell": false,
            "desc": "Easy to finger, harder response than when foot keys are also depressed.",
            "src": "KJ"
          }
        ]
      },
      {
        "noteName": "D#7 / Eb7",
        "anchorName": "eb7",
        "variations": [
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "For B-footed instruments.",
            "src": "KJ"
          },
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "D",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": "DB RD2"
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": false,
            "rh": "-2-",
            "keys": [],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "B",
            "lh": "--3",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": "DB"
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": "DB"
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "1-3",
            "keys": [
              "D",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          }
        ]
      },
      {
        "noteName": "E7 / Fb7",
        "anchorName": "e7",
        "variations": [
          {
            "thumb": "",
            "lh": "12¾",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": "DB"
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": true,
            "rh": "--3",
            "keys": [
              "D",
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "Flat.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "D",
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "Difficult to finger on open-hole models.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "123",
            "gSharp": true,
            "rh": "0-3",
            "keys": [
              "D",
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Awkward but in tune. Press both the rim of RH 1 key and the D trill key with RH 1.",
            "src": "KJ"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D",
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "120",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Slightly sharp.",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Sharp. Excellent response.",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "12-",
            "keys": [],
            "bell": false,
            "desc": "Sharp, requires very fast air stream.",
            "src": "AS"
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "12-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "-23",
            "keys": [
              "D",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D",
              "C"
            ],
            "bell": false,
            "desc": "Good response.",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": true,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "",
            "src": "DB"
          }
        ]
      },
      {
        "noteName": "E#7 / F7",
        "anchorName": "f7",
        "variations": [
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "-20",
            "gSharp": false,
            "rh": "-2-",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "Better response.",
            "src": "MK"
          },
          {
            "thumb": "",
            "lh": "-2-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "",
            "lh": "10-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Flat. Excellent response.",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "-0-",
            "gSharp": false,
            "rh": "--3",
            "keys": [
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Slightly sharp.",
            "src": "DB RD2"
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "Eb",
              "B"
            ],
            "bell": false,
            "desc": "Sharp.",
            "src": "DB RD2"
          },
          {
            "thumb": "",
            "lh": "123",
            "gSharp": false,
            "rh": "1--",
            "keys": [
              "D",
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": "ET"
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "D",
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": "ET"
          },
          {
            "thumb": "",
            "lh": "12-",
            "gSharp": true,
            "rh": "---",
            "keys": [
              "D",
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          }
        ]
      },
      {
        "noteName": "F#7 / Gb7",
        "anchorName": "gb7",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "-23",
            "keys": [],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "D#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "D#",
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "--3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "D#",
              "Eb",
              "B"
            ],
            "bell": false,
            "desc": "",
            "src": "DB RD2"
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "D#",
              "C"
            ],
            "bell": false,
            "desc": "",
            "src": "ET"
          },
          {
            "thumb": "T",
            "lh": "1-3",
            "gSharp": false,
            "rh": "1-3",
            "keys": [
              "Eb",
              "C#"
            ],
            "bell": false,
            "desc": "Excellent response.",
            "src": "IR"
          }
        ]
      },
      {
        "noteName": "G7",
        "anchorName": "g7",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "D"
            ],
            "bell": false,
            "desc": "Article by Robert Dick about G4 from the Larry Krantz Flute Pages.",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "-2-",
            "keys": [
              "D",
              "B"
            ],
            "bell": false,
            "desc": "",
            "src": ""
          },
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "-23",
            "keys": [
              "B"
            ],
            "bell": false,
            "desc": "DB",
            "src": ""
          }
        ]
      },
      {
        "noteName": "G#7 / Ab7",
        "anchorName": "ab7",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "-23",
            "keys": [
              "D",
              "B"
            ],
            "bell": false,
            "desc": "",
            "src": "DB"
          }
        ]
      },
      {
        "noteName": "A7",
        "anchorName": "a7",
        "variations": []
      },
      {
        "noteName": "A#7 / Bb7",
        "anchorName": "bb7",
        "variations": [
          {
            "thumb": "T",
            "lh": "-23",
            "gSharp": true,
            "rh": "½23",
            "keys": [
              "D",
              "B"
            ],
            "bell": false,
            "desc": "Very airy. Very difficult.",
            "src": "CP"
          }
        ]
      },
      {
        "noteName": "B7 / Cb8",
        "anchorName": "b7",
        "variations": []
      },
      {
        "noteName": "B#7 / C8",
        "anchorName": "c8",
        "variations": [
          {
            "thumb": "",
            "lh": "1-3",
            "gSharp": true,
            "rh": "1--",
            "keys": [
              "D#",
              "Eb"
            ],
            "bell": false,
            "desc": "Very difficult.",
            "src": "MG"
          }
        ]
      }
    ]
  }
];
