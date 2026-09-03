import { create } from "zustand";
import { type MessageId } from "@t3tools/contracts";

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
}

interface AudioPlayerActions {
  setLoading: (id: MessageId, title: string) => void;
  setWaking: (id: MessageId) => void;
  setPlaying: (id: MessageId) => void;
  setPaused: () => void;
  setIdle: () => void;
  setError: (message: string, id: MessageId | null) => void;
  setProgress: (currentTime: number, duration: number) => void;
  setVolume: (volume: number) => void;
  setRate: (rate: number) => void;
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
  setLoading: (id, title) =>
    set({ status: "loading", playingMessageId: id, error: null, errorMessageId: null, title }),
  setWaking: (id) =>
    set({ status: "waking", playingMessageId: id, error: null, errorMessageId: null }),
  setPlaying: (id) =>
    set({ status: "playing", playingMessageId: id, error: null, errorMessageId: null }),
  setPaused: () => set({ status: "paused" }),
  setIdle: () => set({ status: "idle", playingMessageId: null }),
  setError: (message, id) =>
    set({ status: "idle", playingMessageId: null, error: message, errorMessageId: id }),
  setProgress: (currentTime, duration) => set({ currentTime, duration }),
  setVolume: (volume) => set({ volume }),
  setRate: (rate) => set({ rate }),
}));
