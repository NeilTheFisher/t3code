/**
 * Locates the rendered markdown block for the TTS cue. The cue is markdown-free
 * opening words while the DOM keeps punctuation, headings and list structure, so
 * matching uses a normalized word prefix rather than an exact substring.
 */

const PAUSE_TAG = /\[pause:[\d.]+s\]/g;

/** Cue words compared before a weaker (shorter) match is accepted. */
const MAX_PROBE_WORDS = 6;

/** Lowercase word tokens with punctuation, pause tags, and whitespace removed. */
export function normalizeWords(text: string): string[] {
  return text
    .replace(PAUSE_TAG, " ")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
}

/** Length of the leading run of words `words` and `cueWords` share. */
function leadingMatch(words: readonly string[], cueWords: readonly string[]): number {
  const probeLength = Math.min(cueWords.length, MAX_PROBE_WORDS);
  let lead = 0;
  while (lead < probeLength && lead < words.length && words[lead] === cueWords[lead]) {
    lead += 1;
  }
  return lead;
}

/**
 * Longest run of `cueWords` matched anywhere in `words` (not only at the
 * start). A spoken unit can begin mid-block — a later sentence of a paragraph
 * or a later line of a multi-line block — so the containing block still
 * matches the unit's opening words.
 */
function bestWindowMatch(words: readonly string[], cueWords: readonly string[]): number {
  const probeLength = Math.min(cueWords.length, MAX_PROBE_WORDS);
  let best = 0;
  for (let start = 0; start < words.length; start++) {
    let lead = 0;
    while (
      lead < probeLength &&
      start + lead < words.length &&
      words[start + lead] === cueWords[lead]
    ) {
      lead += 1;
    }
    if (lead > best) best = lead;
    if (best === probeLength) break;
  }
  return best;
}

/**
 * Index of the candidate block whose normalized text shares the longest run of
 * words with `cue`, or -1 when no block contains it. Ties keep the earliest
 * block, so document order breaks them predictably.
 */
export function findActiveBlockIndex(blockTexts: readonly string[], cue: string): number {
  const cueWords = normalizeWords(cue);
  if (cueWords.length === 0) return -1;

  let bestIndex = -1;
  let bestLead = 0;
  for (let index = 0; index < blockTexts.length; index++) {
    const lead = bestWindowMatch(normalizeWords(blockTexts[index] ?? ""), cueWords);
    if (lead > bestLead) {
      bestLead = lead;
      bestIndex = index;
    }
  }
  // One shared word is enough to locate a heading or a short list item; longer
  // cues still prefer the block matching the most words.
  return bestLead > 0 ? bestIndex : -1;
}

/**
 * The inverse of `findActiveBlockIndex`: index of the cue whose normalized
 * opening words best match the clicked text's leading words, or -1. Maps a
 * clicked rendered line (or the whole block when no line is known) back to the
 * spoken unit to seek to — the unit that begins that line.
 */
export function findParagraphIndexForBlock(
  cues: readonly string[],
  blockText: string,
  lineText?: string,
): number {
  const words = normalizeWords(lineText ?? blockText);
  if (words.length === 0) return -1;

  let bestIndex = -1;
  let bestLead = 0;
  for (let index = 0; index < cues.length; index++) {
    const lead = leadingMatch(words, normalizeWords(cues[index] ?? ""));
    if (lead > bestLead) {
      bestLead = lead;
      bestIndex = index;
    }
  }
  return bestLead > 0 ? bestIndex : -1;
}
