import { readFileSync, writeFileSync } from 'fs';

const html = readFileSync('chart.legacy.html', 'utf-8');

// Helper: extract hole class from a td fragment
function getHoleState(td) {
  const m = td.match(/hole\s+(\w+)/);
  if (!m) return null;
  switch (m[1]) {
    case 'closed': return 'c';
    case 'open': return 'o';
    case 'shaded': return 's';
    default: return null;
  }
}

// Split the HTML into octave sections using the tbody boundaries
const octaveRegex = /<tbody id="octave-(\d+)">(.*?)<\/tbody>/gs;
const octaves = [];

let octMatch;
while ((octMatch = octaveRegex.exec(html)) !== null) {
  const octaveNum = parseInt(octMatch[1]);
  const octaveHtml = octMatch[2];
  const notes = [];

  // Split by note-header trs
  const noteSections = octaveHtml.split(/<tr class="note-header">/);
  // First part is cruft before any note header (octave header row etc), skip it
  for (let s = 1; s < noteSections.length; s++) {
    const section = noteSections[s];

    // Extract note name and anchor
    const nameMatch = section.match(/<a name="(\w+)">([^<]+)<\/a><\/h3>/);
    if (!nameMatch) continue;

    const anchorName = nameMatch[1];
    const noteName = nameMatch[2];

    // Find all fingering rows in this section
    // A fingering row is: <tr>\n(<td>...</td>\n)*<td>SOURCES</td>\n</tr>
    const variations = [];
    const fingeringRegex = /<tr>([\s\S]*?)<\/tr>/g;
    let rowMatch;
    while ((rowMatch = fingeringRegex.exec(section)) !== null) {
      const rowHtml = rowMatch[1];

      // Skip non-fingering rows (spacer rows with colspan, etc.)
      if (rowHtml.includes('colspan')) continue;
      if (!rowHtml.includes('hole ')) continue;

      // Extract tds
      const tdRegex = /<td>(.*?)<\/td>/gs;
      const tds = [];
      let tdMatch;
      while ((tdMatch = tdRegex.exec(rowHtml)) !== null) {
        tds.push(tdMatch[1].replace(/\s+/g, ' ').trim());
      }

      // We need at least 10 hole positions + 1 source (11 tds)
      if (tds.length < 11) {
        // Try a relaxed match - check if rows span multiple lines oddly
        continue;
      }

      // Hole positions are td[0-9] (indices 0-2, 4-6, 8), spacers are 3, 7, 9
      // But: only positions 0,1,2 (LH), 4,5,6 (RH), 8 (key) have holes
      const holeIndices = [0, 1, 2, 4, 5, 6, 8];
      let holes = '';
      let valid = true;
      for (const idx of holeIndices) {
        if (idx >= tds.length) {
          valid = false;
          break;
        }
        const state = getHoleState(tds[idx]);
        if (state) {
          holes += state;
        } else {
          // Hole cell without a hole span — shouldn't happen
          holes += 'o'; // assume open as default
        }
      }

      if (!valid) continue;

      // Sources are in td[10]
      let sources = '';
      if (tds.length > 10) {
        sources = tds[10]
          .replace(/<br\s*\/?>/g, '')
          .replace(/&amp;/g, '&')
          .replace(/&nbsp;/g, '')
          .replace(/\s+/g, ' ')
          .trim();
      }

      if (holes.length !== 7) {
        console.warn(`  WARNING: ${noteName} has ${holes.length} holes instead of 7: "${holes}"`);
      }
      variations.push({ holes, sources });
    }

    if (variations.length > 0) {
      notes.push({ noteName, anchorName, variations });
    } else {
      console.warn(`  WARNING: ${noteName} has no variations`);
    }
  }

  if (notes.length > 0) {
    octaves.push({ number: octaveNum, notes });
  }
}

// Generate TypeScript
let output = `// Auto-generated from chart.legacy.html
// Do not edit directly — re-run \`node scripts/extract-data.mjs\` to regenerate

export type HoleState = 'c' | 'o' | 's';

export interface FingeringVariation {
  holes: string; // 7-char string: LH1-3, RH1-3, Key (c=closed, o=open, s=shaded)
  sources: string;
}

export interface NoteEntry {
  noteName: string;
  anchorName: string;
  variations: FingeringVariation[];
}

export interface OctaveData {
  number: number;
  notes: NoteEntry[];
}

export const baroqueFluteData: OctaveData[] = ${JSON.stringify(octaves, null, 2)};
`;

writeFileSync('src/data/baroqueFluteData.ts', output, 'utf-8');
console.log(`Extracted ${octaves.length} octaves`);
octaves.forEach(o => console.log(`  Octave ${o.number}: ${o.notes.length} notes`));
const totalNotes = octaves.reduce((a, o) => a + o.notes.length, 0);
const totalVars = octaves.reduce((a, o) => a + o.notes.reduce((b, n) => b + n.variations.length, 0), 0);
console.log(`Total: ${totalNotes} notes, ${totalVars} variations`);
