import { create } from "zustand";
import { type MessageId } from "@t3tools/contracts";

/**
 * Mirrors the TTS player's status so any number of play buttons can render
 * consistently without owning the shared audio element (see `useTtsPlayer`).
 */

export type AudioPlayerStatus = "idle" | "loading" | "waking" | "playing";

interface AudioPlayerState {
  status: AudioPlayerStatus;
  playingMessageId: MessageId | null;
  error: string | null;
  /** Which message the current `error` belongs to (toasts must anchor only there). */
  errorMessageId: MessageId | null;
}

interface AudioPlayerActions {
  setLoading: (id: MessageId) => void;
  setWaking: (id: MessageId) => void;
  setPlaying: (id: MessageId) => void;
  setIdle: () => void;
  setError: (message: string, id: MessageId | null) => void;
}

export const useAudioPlayerStore = create<AudioPlayerState & AudioPlayerActions>((set) => ({
  status: "idle",
  playingMessageId: null,
  error: null,
  errorMessageId: null,
  setLoading: (id) =>
    set({ status: "loading", playingMessageId: id, error: null, errorMessageId: null }),
  setWaking: (id) =>
    set({ status: "waking", playingMessageId: id, error: null, errorMessageId: null }),
  setPlaying: (id) =>
    set({ status: "playing", playingMessageId: id, error: null, errorMessageId: null }),
  setIdle: () => set({ status: "idle", playingMessageId: null }),
  setError: (message, id) =>
    set({ status: "idle", playingMessageId: null, error: message, errorMessageId: id }),
}));
