/**
 * Shared state + handlers for the TTS player surfaces (the sidebar player and
 * the mobile mini-bar). Reads the singleton audio player store and wraps the
 * imperative playback controls in React-friendly callbacks.
 */
import { useRef, useState } from "react";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import {
  seekPlayback,
  setPlaybackRate,
  setPlaybackVolume,
  skipPlayback,
  stopPlayback,
  togglePausePlayback,
} from "~/hooks/useTtsPlayer";
import type { AppRouter } from "~/router";

export const RATE_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const;

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function useTtsControls(router: AppRouter) {
  const status = useAudioPlayerStore((s) => s.status);
  const currentTime = useAudioPlayerStore((s) => s.currentTime);
  const duration = useAudioPlayerStore((s) => s.duration);
  const volume = useAudioPlayerStore((s) => s.volume);
  const rate = useAudioPlayerStore((s) => s.rate);
  const title = useAudioPlayerStore((s) => s.title);
  const threadRef = useAudioPlayerStore((s) => s.threadRef);
  const requestScrollToActiveParagraph = useAudioPlayerStore(
    (s) => s.requestScrollToActiveParagraph,
  );

  const visible = status !== "idle";
  const isPlaying = status === "playing";
  const isLoading = status === "loading" || status === "waking";
  const displayTitle = isLoading
    ? status === "waking"
      ? "Starting TTS server…"
      : "Loading…"
    : (title ?? "Audio");

  const revealThread = () => {
    if (threadRef === null) return;
    requestScrollToActiveParagraph();
    void router.navigate({
      to: "/$environmentId/$threadId",
      params: { environmentId: threadRef.environmentId, threadId: threadRef.threadId },
    });
  };

  // The thumb drag stays local for smoothness (a live seek per input event would
  // stop/reschedule sources and stutter the thumb); the seek commits on release.
  const [scrubValue, setScrubValue] = useState<number | null>(null);
  const draggingRef = useRef(false);

  const handleScrubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    if (draggingRef.current) {
      setScrubValue(value);
      return;
    }
    if (Number.isFinite(value)) seekPlayback(value);
  };

  const handleScrubPointerDown = () => {
    draggingRef.current = true;
  };

  const commitScrub = () => {
    draggingRef.current = false;
    if (scrubValue === null) return;
    seekPlayback(scrubValue);
    setScrubValue(null);
  };

  const cancelScrub = () => {
    draggingRef.current = false;
    setScrubValue(null);
  };

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaybackVolume(Number(event.target.value));
  };

  const cycleRate = () => {
    const next =
      RATE_OPTIONS[
        (RATE_OPTIONS.indexOf(rate as (typeof RATE_OPTIONS)[number]) + 1) % RATE_OPTIONS.length
      ] ?? RATE_OPTIONS[0]!;
    setPlaybackRate(next);
  };

  return {
    visible,
    isPlaying,
    isLoading,
    displayTitle,
    currentTime,
    duration,
    volume,
    rate,
    threadRef,
    scrubValue,
    revealThread,
    handleScrubChange,
    handleScrubPointerDown,
    commitScrub,
    cancelScrub,
    handleVolume,
    cycleRate,
    setPlaybackVolume,
    togglePausePlayback,
    stopPlayback,
    skipPlayback,
  };
}
