/**
 * Minimal markdown-to-speech flattening for mobile playback: drops syntax that
 * would otherwise be read aloud and keeps the prose. The web app has a richer
 * variant (`apps/web/src/lib/markdownToSpokenText.ts`) that is not shared.
 */
export function markdownToSpokenText(markdown: string): string {
  return (
    markdown
      // A literal `[pause:Ns]` is prose, not a directive; the speech server would
      // otherwise render it as silence.
      .replace(/\[pause:[\d.]+s\]/gi, " ")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`([^`\n]+)`/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1 ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<https?:\/\/[^>]+>/g, " ")
      .replace(/https?:\/\/\S+/g, " ")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+[.)]\s+/gm, "")
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      .replace(/~~(.*?)~~/g, "$1")
      .replace(/[ \t]+/g, " ")
      .replace(/\n{2,}/g, ". ")
      .replace(/\n/g, " ")
      .trim()
  );
}

/**
 * Upper bound on a spoken unit. Mobile synthesizes one request per unit before
 * any audio plays, so unit length is its time-to-first-sound; shorter units
 * start playback sooner. Mirrors the cap in the web splitter.
 */
const MAX_UNIT_CHARS = 160;

/** Sentences end at `.`/`!`/`?`/`…` followed by whitespace or the end of text. */
function splitSentences(text: string): string[] {
  const sentences: string[] = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if (!/[.!?…]/.test(text[i]!)) continue;
    const next = text[i + 1];
    if (next !== undefined && !/\s/.test(next)) continue;
    const sentence = text.slice(start, i + 1).trim();
    if (sentence.length > 0) sentences.push(sentence);
    start = i + 1;
  }
  const tail = text.slice(start).trim();
  if (tail.length > 0) sentences.push(tail);
  return sentences;
}

/** Greedily pack words into pieces no longer than `maxChars`. */
function hardWrap(text: string, maxChars: number): string[] {
  const pieces: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/).filter((word) => word.length > 0)) {
    const candidate = current.length === 0 ? word : `${current} ${word}`;
    if (current.length > 0 && candidate.length > maxChars) {
      pieces.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current.length > 0) pieces.push(current);
  return pieces;
}

/**
 * Sentence-sized slices of already-flattened spoken text, each synthesized and
 * played on its own so narration starts after the first sentence rather than the
 * whole message. Paragraph and list breaks are already sentence boundaries in
 * `markdownToSpokenText` output; long sentences are cut at word boundaries.
 */
export function splitSpokenUnits(spokenText: string): string[] {
  const units: string[] = [];
  for (const sentence of splitSentences(spokenText)) {
    if (sentence.length <= MAX_UNIT_CHARS) units.push(sentence);
    else units.push(...hardWrap(sentence, MAX_UNIT_CHARS));
  }
  return units;
}

const FENCE_OPEN = /^\s*(?:`{3,}|~{3,})/;
/** A top-level list item line (no indent), so nested items stay with their parent. */
const TOP_LEVEL_LIST_ITEM = /^(?:[-*+]|\d+[.)])[ \t]+\S/;

/**
 * Top-level markdown blocks — paragraphs, headings, list items, tables,
 * blockquotes — split on blank lines and never inside a fenced code block. Each
 * top-level list item is its own block so it can be highlighted and seeked
 * individually; the item's own marker is kept so ordered numbering survives
 * being rendered on its own.
 *
 * Rendering and speech share this list, so a spoken unit maps back to the exact
 * block it came from: that block is what gets highlighted while it plays and
 * what seeks when tapped.
 */
export function splitMarkdownBlocks(markdown: string): string[] {
  const blocks: string[] = [];
  let current: string[] = [];
  let fenceChar: string | null = null;
  let fenceLength = 0;

  const flush = () => {
    const block = current.join("\n").trim();
    if (block.length > 0) blocks.push(block);
    current = [];
  };

  for (const line of markdown.replace(/\r\n?/g, "\n").split("\n")) {
    if (fenceChar === null && FENCE_OPEN.test(line)) {
      const trimmed = line.trimStart();
      fenceChar = trimmed[0]!;
      fenceLength = trimmed.length - trimmed.replace(/^[`~]+/, "").length;
      current.push(line);
      continue;
    }
    if (fenceChar !== null) {
      current.push(line);
      const trimmed = line.trim();
      if (
        trimmed.length >= fenceLength &&
        trimmed[0] === fenceChar &&
        trimmed.split("").every((char) => char === fenceChar)
      ) {
        fenceChar = null;
        fenceLength = 0;
      }
      continue;
    }
    if (line.trim().length === 0) {
      flush();
      continue;
    }
    if (TOP_LEVEL_LIST_ITEM.test(line) && current.length > 0) flush();
    current.push(line);
  }
  flush();
  return blocks;
}
