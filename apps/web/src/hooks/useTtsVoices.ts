/**
 * The TTS server's voice list, for the settings dropdown. Falls back to an empty
 * list (the caller shows the current value) when the server has no voices
 * endpoint or is unreachable.
 */
import { useEffect, useState } from "react";

export function useTtsVoices(serverUrl: string): string[] {
  const [voices, setVoices] = useState<string[]>([]);

  // oxlint-disable-next-line t3code/react-effect-budget -- The voice list is fetched over HTTP from the TTS server.
  useEffect(() => {
    const base = serverUrl.replace(/\/+$/, "");
    let cancelled = false;
    fetch(`${base}/v1/audio/voices`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: unknown) => {
        if (cancelled || data === null) return;
        const list = (data as { voices?: unknown }).voices;
        if (Array.isArray(list)) {
          setVoices(list.filter((voice): voice is string => typeof voice === "string"));
        }
      })
      .catch(() => {
        // Server unreachable: leave the list empty; the caller keeps the current value.
      });
    return () => {
      cancelled = true;
    };
  }, [serverUrl]);

  return voices;
}
