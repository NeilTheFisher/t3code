/**
 * Converts assistant-message markdown into text suitable for speech
 * synthesis: strips heading markers, emphasis, code fences, links, and other
 * syntax that would otherwise be read aloud, and inlines `[pause:Ns]` tags at
 * structural boundaries (the Kokoro endpoint renders them as silence).
 *
 * Two shapes: a flat spoken string (single-request playback) and paragraphs
 * (per-paragraph streaming + playback highlighting). Pure, no dependencies.
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
