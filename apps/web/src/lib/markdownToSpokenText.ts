/**
 * Converts assistant-message markdown into text suitable for speech
 * synthesis: strips heading markers, emphasis, code fences, links, and other
 * syntax that would otherwise be read aloud. Pure, no dependencies.
 */

/** Link/image alt or inline-code text to keep when the syntax is dropped. */
const KEEP_TEXT = "$1";

export function markdownToSpokenText(markdown: string): string {
  let text = markdown;

  // Fenced code blocks: drop the contents entirely — code read aloud is noise,
  // and Kokoro can mangle it. Keep nothing between the fences.
  text = text.replace(/```[\s\S]*?```/g, " ");
  // Inline code: keep the code text itself, drop the backticks.
  text = text.replace(/`([^`\n]+)`/g, KEEP_TEXT);

  // Images: keep alt text (it describes the image). Drop the URL.
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1 ");
  // Links: keep the label, drop the URL.
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  // Bare URLs and autolinks: drop entirely.
  text = text.replace(/<https?:\/\/[^>]+>/g, " ");
  text = text.replace(/https?:\/\/\S+/g, " ");

  // Headings: drop the hashes (spoken text carries the emphasis).
  text = text.replace(/^#{1,6}\s+/gm, "");
  // Setext headings (===/--- under a line) — drop the marker lines.
  text = text.replace(/^\s*[=]{2,}\s*$/gm, "");
  text = text.replace(/^\s*[-]{2,}\s*$/gm, "");
  // Horizontal rules: drop.
  text = text.replace(/^\s*([-*_])\s*(\1\s*){2,}$/gm, " ");

  // Github alerts: `> [!NOTE]` etc. — keep the type word, drop the bracket.
  // Must run before the blockquote strip removes the leading `>`.
  text = text.replace(/^\s*>?\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/gim, "$1.");

  // Blockquotes: strip the leading marker, keep the content.
  text = text.replace(/^>\s?/gm, "");

  // Emphasis + strikethrough: unwrap.
  text = text.replace(/(\*\*|__)(.*?)\1/g, "$2");
  text = text.replace(/(\*|_)(.*?)\1/g, "$2");
  text = text.replace(/~~(.*?)~~/g, "$1");

  // Lists: strip bullets/numbers, keep the text. "1." spoken as "one dot" is
  // noise, but numbered steps read fine without the marker.
  text = text.replace(/^\s*[-*+]\s+/gm, "");
  text = text.replace(/^\s*\d+[.)]\s+/gm, "");

  // Task list markers: read as "unchecked box"/"checked box" semantically.
  text = text.replace(/^\s*\[[ xX]\]\s+/gm, "");

  // Tables: strip the separator row; cells stay separated by pipes for now
  // (rare enough in speech that heavy processing isn't warranted).
  text = text.replace(/^\s*\|?\s*:?-{2,}.*\|.*$/gm, " ");

  return collapseWhitespace(text);
}

function collapseWhitespace(text: string): string {
  return text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
