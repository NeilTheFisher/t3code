/**
 * Voice names for the settings dropdown, from the pinned Phonon catalog the
 * environment proxies. The engine is the only thing that speaks, so there is
 * no server list to fall back to.
 */
import { useEffect, useState } from "react";

import {
  parseVoiceCatalog,
  PHONON_FALLBACK_VOICES,
  voiceCatalogUrl,
} from "@t3tools/client-runtime/phonon-voices";
import { useEnvironmentHttpBaseUrl, usePrimaryEnvironmentId } from "~/state/environments";

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
  // Seed with the catalog's own names so the picker exists from the first paint and
  // never disappears when the environment, or its catalog, is not reachable yet.
  const [voices, setVoices] = useState<string[]>([...PHONON_FALLBACK_VOICES]);
  const base = useEnvironmentHttpBaseUrl(usePrimaryEnvironmentId());

  // Refetch when the connection appears: on desktop the sidecar URL arrives after mount.
  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- The voice list is fetched over HTTP from the engine's catalog.
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const names = await fetchLocalVoices(base ?? "");
      if (!cancelled && names.length > 0) setVoices(names);
    })();
    return () => {
      cancelled = true;
    };
  }, [base]);

  return voices;
}
