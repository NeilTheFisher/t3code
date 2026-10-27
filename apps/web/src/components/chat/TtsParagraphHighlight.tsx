/**
 * Highlights the block being spoken and makes matched blocks clickable to seek.
 * Renders nothing: it observes the markdown container, reads the shared audio
 * store, and matches blocks by normalized word prefix (`findActiveBlockIndex`).
 */
import { memo, useEffect, useRef } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { canSeekToParagraph, getActiveParagraphCues, seekToParagraph } from "~/hooks/useTtsPlayer";
import { findActiveBlockIndex, findParagraphIndexForBlock } from "~/lib/ttsParagraphMatching";

const HIGHLIGHT_CLASS = "tts-active-paragraph";
/** Tailwind utility added to blocks that can be clicked to seek. */
const CLICKABLE_CLASS = "cursor-pointer";

/** Block-level elements a spoken paragraph can map onto. */
const BLOCK_SELECTOR = "p, li, h1, h2, h3, h4, h5, h6, blockquote, dt, dd, td, th, figcaption";

function blockText(element: HTMLElement): string {
  return element.innerText ?? element.textContent ?? "";
}

/**
 * Text of the rendered line the click landed on, or null when it cannot be
 * resolved. The whole line is returned, not the prefix before the caret, so
 * leading-word matching works even when the first word is clicked.
 */
function clickedLineText(block: HTMLElement, event: MouseEvent): string | null {
  const doc = block.ownerDocument;
  const caretDoc = doc as Document & {
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
  };
  let node: Node | null = null;
  const range = caretDoc.caretRangeFromPoint?.(event.clientX, event.clientY) ?? null;
  if (range !== null) node = range.startContainer;
  else node = caretDoc.caretPositionFromPoint?.(event.clientX, event.clientY)?.offsetNode ?? null;
  if (node === null || !block.contains(node)) return null;

  const lines: string[] = [];
  let caretLine = -1;
  let current = "";
  const visit = (element: Node): void => {
    if (element.nodeName === "BR") {
      lines.push(current);
      current = "";
      return;
    }
    if (element.nodeType === Node.TEXT_NODE) {
      if (element === node && caretLine < 0) caretLine = lines.length;
      current += (element as Text).data;
      return;
    }
    for (const child of Array.from(element.childNodes)) visit(child);
  };
  visit(block);
  lines.push(current);
  return caretLine >= 0 ? (lines[caretLine]?.trim() ?? null) : null;
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
  // Auto-scroll follows the narration only for its first paragraph; after that
  // the reader scrolls freely and the highlight never yanks the page back.
  const autoScrolledRef = useRef(false);
  const status = useAudioPlayerStore((s) => s.status);
  const playingId = useAudioPlayerStore((s) => s.playingMessageId);
  const cue = useAudioPlayerStore((s) => s.activeParagraphCue);
  const scrollRequest = useAudioPlayerStore((s) => s.scrollToActiveRequest);
  // Grows as more paragraphs are synthesized, so blocks that become seekable
  // ahead of the playback head are (re)marked clickable.
  const synthesizedParagraphs = useAudioPlayerStore((s) => s.synthesizedParagraphs);

  const active = playingId === messageId && status !== "idle" && cue !== null;

  // Clickability only: which blocks can be clicked to seek. Re-runs as
  // synthesis advances so newly-synthesized paragraphs become clickable, but
  // never touches the highlight, so it can't flicker.
  // oxlint-disable-next-line t3code/react-effect-budget -- The markdown DOM is built outside React; classes follow the active cue.
  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;
    const blocks = Array.from(container.querySelectorAll<HTMLElement>(BLOCK_SELECTOR));
    const cues = active ? getActiveParagraphCues() : [];
    for (const block of blocks) {
      const paragraph = active ? findParagraphIndexForBlock(cues, blockText(block)) : -1;
      block.classList.toggle(CLICKABLE_CLASS, paragraph >= 0 && canSeekToParagraph(paragraph));
    }
  }, [
    active,
    // oxlint-disable-next-line react/exhaustive-effect-dependencies -- Synthesis state lives in the audio store; this cue refreshes when blocks gain seek targets.
    synthesizedParagraphs,
  ]);

  // Highlight + scroll: only on a new active paragraph or an explicit reveal.
  // oxlint-disable-next-line t3code/react-effect-budget -- Highlighting writes classes on markdown DOM built outside React.
  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;

    if (!active) {
      autoScrolledRef.current = false;
    }

    const blocks = Array.from(container.querySelectorAll<HTMLElement>(BLOCK_SELECTOR));
    for (const block of blocks) block.classList.remove(HIGHLIGHT_CLASS);
    if (!active || cue === null || cue.length === 0) return;

    const matchIndex = findActiveBlockIndex(blocks.map(blockText), cue);
    const match = matchIndex >= 0 ? blocks[matchIndex] : undefined;
    if (match === undefined) return;

    match.classList.add(HIGHLIGHT_CLASS);

    // Follow the narration once after play, then never again; a mini-player
    // click bumps the request to force a reveal.
    const forceScroll = scrollRequest !== consumedScrollRequestRef.current;
    consumedScrollRequestRef.current = scrollRequest;
    if (forceScroll || (!autoScrolledRef.current && !isBlockVisible(match))) {
      scrollBlockIntoView(match);
      autoScrolledRef.current = true;
    }
  }, [active, cue, scrollRequest]);

  // Delegated click: any matched block seeks to its paragraph. A single
  // listener survives the markdown DOM re-rendering under us.
  const handleClick = (event: MouseEvent) => {
    const store = useAudioPlayerStore.getState();
    if (store.playingMessageId !== messageId || store.status === "idle") return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    // Let links, controls, and text selection behave normally.
    if (target.closest("a, button, input, textarea, select, [role='button']") !== null) return;
    if (window.getSelection()?.toString()) return;
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;
    const block = target.closest<HTMLElement>(BLOCK_SELECTOR);
    if (block === null || !container.contains(block)) return;
    const lineText = clickedLineText(block, event) ?? undefined;
    const paragraph = findParagraphIndexForBlock(
      getActiveParagraphCues(),
      blockText(block),
      lineText,
    );
    if (paragraph < 0) return;
    seekToParagraph(paragraph);
    // Reflect the seek on the clicked block immediately, before its audio (and
    // the synthesis-progress re-run) catches up.
    block.classList.add(HIGHLIGHT_CLASS);
    block.classList.add(CLICKABLE_CLASS);
  };

  // oxlint-disable-next-line t3code/react-effect-budget -- The delegated listener outlives markdown re-renders.
  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;
    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [handleClick]);

  return <div ref={ref} aria-hidden className="hidden" />;
});
