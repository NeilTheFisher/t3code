import { create } from "zustand";

const STORAGE_KEY = "t3code:notification-preference";

interface NotificationStore {
  enabled: boolean;
  toggle: () => void;
}

function readPersisted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function persist(value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value ? "true" : "false");
  } catch {
    // ignore
  }
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  enabled: readPersisted(),
  toggle: () =>
    set((state) => {
      const next = !state.enabled;
      persist(next);
      return { enabled: next };
    }),
}));
