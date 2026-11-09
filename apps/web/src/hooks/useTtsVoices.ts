/**
 * Voice names for the settings dropdown, from the pinned Phonon catalog the
 * environment proxies. The engine is the only thing that speaks, so there is
 * no server list to fall back to.
 */
import { useEffect, useState } from "react";

import { parseVoiceCatalog, voiceCatalogUrl } from "~/lib/phononModel";
import { resolveTtsEnvironmentBase } from "~/lib/ttsEnvironmentBase";

async function fetchLocalVoices(base: string): Promise<string[]> {
  try {
    const response = await fetch(voiceCatalogUrl(base));
    if (!response.ok) return [];
    return parseVoiceCatalog(await response.text());
  } catch {
    return [];
  }
}

export function useTtsVoices(): string[] {
  const [voices, setVoices] = useState<string[]>([]);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- The voice list is fetched over HTTP from the engine's catalog.
  useEffect(() => {
    const base = resolveTtsEnvironmentBase(null);
    let cancelled = false;
    void (async () => {
      const names = await fetchLocalVoices(base);
      if (!cancelled) setVoices(names);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return voices;
}
