import { create } from "zustand";
import { type MessageId, type ScopedThreadRef } from "@t3tools/contracts";

/**
 * Mirrors the TTS player's status so any number of play buttons and the global
 * mini-player can render consistently without owning the shared audio element
 * (see `useTtsPlayer`).
 */

export type AudioPlayerStatus = "idle" | "loading" | "waking" | "playing" | "paused";

interface AudioPlayerState {
  status: AudioPlayerStatus;
  playingMessageId: MessageId | null;
  error: string | null;
  /** Which message the current `error` belongs to (toasts must anchor only there). */
  errorMessageId: MessageId | null;
  /** Playback position/duration of the shared audio element, for scrubbing. */
  currentTime: number;
  duration: number;
  /** Volume/playbackRate of the shared audio element, persisted per playback. */
  volume: number;
  rate: number;
  /** Excerpt of the synthesized text for display in the mini-player. */
  title: string | null;
  /** Thread the active narration belongs to, for mini-player navigation. */
  threadRef: ScopedThreadRef | null;
  /** Index of the paragraph currently being spoken, for message highlighting. */
  activeParagraph: number | null;
  /** Normalized opening words of the active paragraph, for DOM matching. */
  activeParagraphCue: string | null;
  /** Bumped by the mini-player to ask the highlight to reveal the active block. */
  scrollToActiveRequest: number;
}

interface AudioPlayerActions {
  setLoading: (id: MessageId, title: string, threadRef: ScopedThreadRef | null) => void;
  setWaking: (id: MessageId) => void;
  setPlaying: (id: MessageId) => void;
  setPaused: () => void;
  setIdle: () => void;
  setError: (message: string, id: MessageId | null) => void;
  setProgress: (currentTime: number, duration: number) => void;
  setVolume: (volume: number) => void;
  setRate: (rate: number) => void;
  setActiveParagraph: (index: number | null, cue: string | null) => void;
  requestScrollToActiveParagraph: () => void;
}
export const useAudioPlayerStore = create<AudioPlayerState & AudioPlayerActions>((set) => ({
  status: "idle",
  playingMessageId: null,
  error: null,
  errorMessageId: null,
  currentTime: 0,
  duration: 0,
  volume: 1,
  rate: 1,
  title: null,
  threadRef: null,
  activeParagraph: null,
  activeParagraphCue: null,
  scrollToActiveRequest: 0,
  setLoading: (id, title, threadRef) =>
    set({
      status: "loading",
      playingMessageId: id,
      error: null,
      errorMessageId: null,
      title,
      threadRef,
      activeParagraph: null,
      activeParagraphCue: null,
    }),
  setWaking: (id) =>
    set({ status: "waking", playingMessageId: id, error: null, errorMessageId: null }),
  setPlaying: (id) =>
    set({ status: "playing", playingMessageId: id, error: null, errorMessageId: null }),
  setPaused: () => set({ status: "paused" }),
  setIdle: () =>
    set({
      status: "idle",
      playingMessageId: null,
      threadRef: null,
      activeParagraph: null,
      activeParagraphCue: null,
    }),
  setError: (message, id) =>
    set({
      status: "idle",
      playingMessageId: null,
      threadRef: null,
      error: message,
      errorMessageId: id,
      activeParagraph: null,
      activeParagraphCue: null,
    }),
  setProgress: (currentTime, duration) => set({ currentTime, duration }),
  setVolume: (volume) => set({ volume }),
  setRate: (rate) => set({ rate }),
  setActiveParagraph: (index, cue) => set({ activeParagraph: index, activeParagraphCue: cue }),
  requestScrollToActiveParagraph: () =>
    set((state) => ({ scrollToActiveRequest: state.scrollToActiveRequest + 1 })),
}));
