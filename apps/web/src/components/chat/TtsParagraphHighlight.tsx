/**
 * Highlights the assistant-message block currently being spoken by TTS.
 * Renders nothing: it observes its parent (the markdown container), reads the
 * shared audio player store, and toggles a class on the block whose normalized
 * text best matches the active paragraph's opening words.
 *
 * Spoken paragraphs are markdown-stripped and can span several DOM blocks, so
 * matching is delegated to `findActiveBlockIndex` (normalized word prefix,
 * punctuation-insensitive) rather than an exact substring.
 */
import { memo, useEffect, useRef } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { findActiveBlockIndex } from "~/lib/ttsParagraphMatching";

const HIGHLIGHT_CLASS = "tts-active-paragraph";

/** Block-level elements a spoken paragraph can map onto. */
const BLOCK_SELECTOR = "p, li, h1, h2, h3, h4, h5, h6, blockquote, dt, dd, td, th, figcaption";

function blockText(element: HTMLElement): string {
  return element.innerText ?? element.textContent ?? "";
}

/** Whether the block is fully inside its scroll viewport (or the window). */
function isBlockVisible(block: HTMLElement): boolean {
  const rect = block.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;
  const viewport = block.closest<HTMLElement>("[data-assistant-citation-viewport]");
  const bounds = viewport?.getBoundingClientRect() ?? {
    top: 0,
    left: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
  };
  return (
    rect.top >= bounds.top &&
    rect.bottom <= bounds.bottom &&
    rect.left >= bounds.left &&
    rect.right <= bounds.right
  );
}

function scrollBlockIntoView(block: HTMLElement): void {
  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  block.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
}

export const TtsParagraphHighlight = memo(function TtsParagraphHighlight({
  messageId,
}: {
  messageId: MessageId;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Last scroll request consumed by this message, so a click in the mini-player
  // forces a reveal even when the cue did not change.
  const consumedScrollRequestRef = useRef(0);
  const status = useAudioPlayerStore((s) => s.status);
  const playingId = useAudioPlayerStore((s) => s.playingMessageId);
  const cue = useAudioPlayerStore((s) => s.activeParagraphCue);
  const scrollRequest = useAudioPlayerStore((s) => s.scrollToActiveRequest);

  const active = playingId === messageId && status !== "idle" && cue !== null;

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;

    const blocks = Array.from(container.querySelectorAll<HTMLElement>(BLOCK_SELECTOR));
    for (const block of blocks) {
      block.classList.toggle(HIGHLIGHT_CLASS, false);
    }
    if (!active || cue === null || cue.length === 0) return;

    const matchIndex = findActiveBlockIndex(blocks.map(blockText), cue);
    const match = matchIndex >= 0 ? blocks[matchIndex] : undefined;
    if (match === undefined) return;

    match.classList.add(HIGHLIGHT_CLASS);

    // Follow the narration, but leave the page alone when the new block is
    // already on screen. A mini-player click bumps the request to force it.
    const forceScroll = scrollRequest !== consumedScrollRequestRef.current;
    consumedScrollRequestRef.current = scrollRequest;
    if (forceScroll || !isBlockVisible(match)) {
      scrollBlockIntoView(match);
    }
  }, [active, cue, scrollRequest]);

  return <div ref={ref} aria-hidden className="hidden" />;
});
