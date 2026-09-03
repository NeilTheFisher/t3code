/**
 * Highlights the assistant-message paragraph currently being spoken by TTS.
 * Renders nothing: it observes its parent (the markdown container), reads the
 * shared audio player store, and toggles a class on the top-level block whose
 * text matches the active paragraph's opening words.
 */
import { memo, useEffect, useRef } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useAudioPlayerStore } from "~/audioPlayerStore";

const HIGHLIGHT_CLASS = "tts-active-paragraph";

export const TtsParagraphHighlight = memo(function TtsParagraphHighlight({
  messageId,
}: {
  messageId: MessageId;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const status = useAudioPlayerStore((s) => s.status);
  const playingId = useAudioPlayerStore((s) => s.playingMessageId);
  const cue = useAudioPlayerStore((s) => s.activeParagraphCue);

  const active = playingId === messageId && status !== "idle" && cue !== null;

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container === null || container === undefined) return;

    const blocks = Array.from(container.children) as HTMLElement[];
    for (const block of blocks) {
      block.classList.toggle(HIGHLIGHT_CLASS, false);
    }
    if (!active || cue === null || cue.length === 0) return;

    const normalized = (text: string) => text.toLowerCase().replace(/\s+/g, " ").trim();

    // First block whose text starts with (or contains) the active cue.
    const match = blocks.find((block) => {
      const text = normalized(block.innerText ?? block.textContent ?? "");
      return text.length > 0 && (text.startsWith(cue) || text.includes(cue));
    });
    if (match !== undefined) {
      match.classList.add(HIGHLIGHT_CLASS);
    }
  }, [active, cue, status]);

  return <div ref={ref} aria-hidden className="hidden" />;
});
