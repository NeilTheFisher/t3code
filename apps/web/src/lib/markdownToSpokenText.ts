/**
 * Converts assistant markdown into speech: strips syntax that would be read
 * aloud and inlines `[pause:Ns]` tags at structural boundaries. Pure. Three
 * shapes: a flat string, merged paragraphs, and sentence-sized spoken units.
 */

/** Pause lengths (seconds) at markdown structural boundaries. */
export const PARAGRAPH_PAUSE = "0.6";
const HEADING_PAUSE = "0.8";
const LIST_ITEM_PAUSE = "0.4";
const CODE_BLOCK_PAUSE = "0.5";

/** Link/image alt or inline-code text to keep when the syntax is dropped. */
const KEEP_TEXT = "$1";

/** All syntax stripping + intra-paragraph pause inlining, one line per input line. */
function convertLines(markdown: string): string[] {
  let text = markdown;

  // A literal `[pause:Ns]` in the message text is prose, not our directive —
  // the speech server would otherwise render it as that many seconds of
  // silence. Neutralize it before we inline our own tags further down.
  text = text.replace(/\[pause:[\d.]+s\]/gi, " ");

  // Fenced code blocks: drop the contents entirely — code read aloud is noise,
  // and Kokoro can mangle it. Pause where the block stood.
  text = text.replace(/```[\s\S]*?```/g, `[pause:${CODE_BLOCK_PAUSE}s]`);
  // Inline code: keep the code text itself, drop the backticks.
  text = text.replace(/`([^`\n]+)`/g, KEEP_TEXT);

  // Images: keep alt text (it describes the image). Drop the URL.
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1 ");
  // Links: keep the label, drop the URL.
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  // Bare URLs and autolinks: drop entirely.
  text = text.replace(/<https?:\/\/[^>]+>/g, " ");
  text = text.replace(/https?:\/\/\S+/g, " ");

  // Github alerts: `> [!NOTE]` etc. — keep the type word, drop the bracket.
  // Must run before the blockquote strip removes the leading `>`.
  text = text.replace(/^\s*>?\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/gim, "$1.");

  // Headings: drop the hashes, pause after the heading line.
  text = text.replace(
    /^#{1,6}[ \t]+.*$/gm,
    (line) => `${line.replace(/^#{1,6}[ \t]+/, "")} [pause:${HEADING_PAUSE}s]`,
  );
  // Setext headings (===/--- under a line) — drop the marker lines and pause.
  text = text.replace(/^(.+)\n\s*[=]{2,}\s*$/gm, `$1 [pause:${HEADING_PAUSE}s]`);
  text = text.replace(/^(.+)\n\s*[-]{2,}\s*$/gm, `$1 [pause:${HEADING_PAUSE}s]`);
  // Horizontal rules: replace with a pause.
  text = text.replace(/^\s*([-*_])\s*(\1\s*){2,}$/gm, `[pause:${PARAGRAPH_PAUSE}s]`);

  // Blockquotes: strip the leading marker, keep the content.
  text = text.replace(/^>\s?/gm, "");

  // Emphasis + strikethrough: unwrap.
  text = text.replace(/(\*\*|__)(.*?)\1/g, "$2");
  text = text.replace(/(\*|_)(.*?)\1/g, "$2");
  text = text.replace(/~~(.*?)~~/g, "$1");

  // Task list markers before bullet stripping: "- [x] done" -> "done".
  text = text.replace(/^(\s*)[-*+][ \t]+\[[ xX]\][ \t]*/gm, "$1- ");

  // Lists: strip bullets/numbers, pause after each item so speech doesn't
  // run items together.
  text = text.replace(
    /^(\s*)[-*+][ \t]+(.*)$/gm,
    (_line, _indent: string, item: string) => `${item} [pause:${LIST_ITEM_PAUSE}s]`,
  );
  text = text.replace(
    /^(\s*)\d+[.)][ \t]+(.*)$/gm,
    (_line, _indent: string, item: string) => `${item} [pause:${LIST_ITEM_PAUSE}s]`,
  );

  // Tables: strip the separator row; cells stay separated by pipes for now
  // (rare enough in speech that heavy processing isn't warranted).
  text = text.replace(/^\s*\|?\s*:?-{2,}.*\|.*$/gm, " ");

  return text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim());
}

/**
 * Spoken paragraphs: consecutive non-empty converted lines join into one
 * paragraph (soft wraps merge); blank lines separate paragraphs. Each entry
 * is one block-level unit with its pauses already inlined — the joiner adds
 * the paragraph pause.
 */
export function toSpokenParagraphs(markdown: string): string[] {
  const paragraphs: string[] = [];
  let current: string[] = [];
  for (const line of convertLines(markdown)) {
    if (line.length === 0) {
      if (current.length > 0) {
        paragraphs.push(
          current
            .join(" ")
            .replace(/\s{2,}/g, " ")
            .trim(),
        );
        current = [];
      }
    } else {
      current.push(line);
    }
  }
  if (current.length > 0) {
    paragraphs.push(
      current
        .join(" ")
        .replace(/\s{2,}/g, " ")
        .trim(),
    );
  }
  return paragraphs.filter((p) => p.length > 0);
}

/** Flat spoken text for the whole message. */
export function markdownToSpokenText(markdown: string): string {
  return toSpokenParagraphs(markdown).join(` [pause:${PARAGRAPH_PAUSE}s] `);
}

/** One synthesized piece: its text plus any silence to append after it. */
export interface SpokenUnit {
  readonly text: string;
  readonly pauseAfter: number;
}

/**
 * Upper bound on a unit: it is the unit's time-to-first-audio, so keeping units
 * short starts playback quickly. Longer sentences are cut at word boundaries.
 */
const MAX_UNIT_CHARS = 160;

const TRAILING_PAUSE = /\[pause:([\d.]+)s\]\s*$/;
const PAUSE_ONLY_LINE = /^\[pause:([\d.]+)s\]$/;

type LineKind = "blank" | "heading" | "listItem" | "pause" | "plain";

interface ParsedLine {
  kind: LineKind;
  text: string;
  pause: number;
}

/** Classify one converted line — structural lines carry their own pause tag. */
function parseLine(line: string): ParsedLine {
  if (line.length === 0) return { kind: "blank", text: "", pause: 0 };
  const pauseOnly = PAUSE_ONLY_LINE.exec(line);
  if (pauseOnly !== null) return { kind: "pause", text: "", pause: Number(pauseOnly[1]) };
  const trailing = TRAILING_PAUSE.exec(line);
  if (trailing !== null) {
    const pause = Number(trailing[1]);
    const text = line.slice(0, trailing.index).trim();
    if (pause === Number(HEADING_PAUSE)) return { kind: "heading", text, pause };
    if (pause === Number(LIST_ITEM_PAUSE)) return { kind: "listItem", text, pause };
    return { kind: "plain", text, pause };
  }
  return { kind: "plain", text: line, pause: 0 };
}

/** Split a line into sentence-sized pieces, hard-wrapping any that run long. */
function splitLine(line: string): string[] {
  const pieces: string[] = [];
  for (const sentence of splitSentences(line)) {
    if (sentence.length <= MAX_UNIT_CHARS) pieces.push(sentence);
    else pieces.push(...hardWrap(sentence, MAX_UNIT_CHARS));
  }
  return pieces;
}

/** Sentences end at `.`/`!`/`?`/`…` followed by whitespace; keep pause tags. */
function splitSentences(text: string): string[] {
  const sentences: string[] = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if (!/[.!?…]/.test(text[i]!)) continue;
    const next = text[i + 1];
    if (next !== undefined && !/\s/.test(next)) continue;
    let end = i + 1;
    while (end < text.length && /\s/.test(text[end]!)) end += 1;
    const pause = /^\[pause:[\d.]+s\]/.exec(text.slice(end));
    if (pause !== null) end += pause[0].length;
    const sentence = text.slice(start, end).trim();
    if (sentence.length > 0) sentences.push(sentence);
    start = end;
    i = end - 1;
  }
  const tail = text.slice(start).trim();
  if (tail.length > 0) sentences.push(tail);
  return sentences;
}

/** Greedily pack words into pieces no longer than `maxChars`. */
function hardWrap(text: string, maxChars: number): string[] {
  const pieces: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/).filter((w) => w.length > 0)) {
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

/** Append a line's piece(s), giving only the last piece the line's pause. */
function pushLine(units: SpokenUnit[], lineText: string, trailingPause: number): void {
  const pieces = splitLine(lineText);
  for (let i = 0; i < pieces.length; i++) {
    units.push({ text: pieces[i]!, pauseAfter: i === pieces.length - 1 ? trailingPause : 0 });
  }
}

/**
 * Spoken units for streaming and seek/highlight matching: each structural line
 * is its own unit and paragraphs split into sentences, so every unit maps to one
 * rendered line.
 */
export function toSpokenUnits(markdown: string): SpokenUnit[] {
  const lines = convertLines(markdown).map(parseLine);
  const units: SpokenUnit[] = [];
  // Consecutive plain lines are one paragraph; its pause goes on the last line.
  let paragraph: ParsedLine[] = [];
  let leadingPause = 0;

  const flushParagraph = () => {
    for (let i = 0; i < paragraph.length; i++) {
      const line = paragraph[i]!;
      const isLast = i === paragraph.length - 1;
      const pause = (isLast ? Number(PARAGRAPH_PAUSE) : 0) + line.pause;
      pushLine(units, line.text, pause);
    }
    paragraph = [];
  };

  for (const line of lines) {
    switch (line.kind) {
      case "blank":
        flushParagraph();
        break;
      case "pause":
        // A standalone silence (code block, rule): extend the nearest unit.
        if (paragraph.length > 0) paragraph[paragraph.length - 1]!.pause += line.pause;
        else if (units.length > 0) {
          const last = units[units.length - 1]!;
          units[units.length - 1] = { ...last, pauseAfter: last.pauseAfter + line.pause };
        } else leadingPause += line.pause;
        break;
      case "heading":
      case "listItem":
        flushParagraph();
        pushLine(units, line.text, line.pause);
        break;
      case "plain":
        paragraph.push(line);
        break;
    }
  }
  flushParagraph();

  if (leadingPause > 0 && units.length > 0) {
    const first = units[0]!;
    units[0] = { ...first, text: `[pause:${leadingPause}s] ${first.text}` };
  }
  return units.filter((unit) => unit.text.length > 0);
}
