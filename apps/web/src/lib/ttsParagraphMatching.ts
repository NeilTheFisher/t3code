/**
 * Locates the rendered markdown block for the TTS active-paragraph cue.
 *
 * The cue is the opening words of a *spoken* paragraph (markdown stripped),
 * which does not line up with the DOM text exactly: casing and punctuation are
 * gone, `[pause:Ns]` tags were inlined, and one spoken paragraph can span
 * several blocks (a heading plus its body, a list, a table row). Matching on a
 * normalized word prefix — rather than an exact substring of the raw text —
 * tolerates all of those differences.
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

/**
 * Index of the candidate block whose normalized text shares the longest
 * leading run of words with `cue`, or -1 when no block starts with it. Ties
 * keep the earliest block, so document order breaks them predictably.
 */
export function findActiveBlockIndex(blockTexts: readonly string[], cue: string): number {
  const cueWords = normalizeWords(cue);
  if (cueWords.length === 0) return -1;
  const probeLength = Math.min(cueWords.length, MAX_PROBE_WORDS);

  let bestIndex = -1;
  let bestLead = 0;
  for (let index = 0; index < blockTexts.length; index++) {
    const words = normalizeWords(blockTexts[index] ?? "");
    let lead = 0;
    while (lead < probeLength && lead < words.length && words[lead] === cueWords[lead]) {
      lead += 1;
    }
    if (lead > bestLead) {
      bestLead = lead;
      bestIndex = index;
    }
  }
  // One shared opening word is enough to locate a heading or a short list
  // item; longer cues still prefer the block matching the most words.
  return bestLead > 0 ? bestIndex : -1;
}
