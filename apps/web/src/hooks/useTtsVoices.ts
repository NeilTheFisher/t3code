/**
 * Voice names for the settings dropdown. The browser engine's catalog comes
 * first because it speaks by default; a client that cannot run it (or an
 * environment that predates the proxy) still lists what the server offers.
 */
import { useEffect, useState } from "react";

import { parseVoiceCatalog, voiceCatalogUrl } from "~/lib/phononModel";
import { resolveTtsServerUrl } from "~/lib/ttsServerUrl";

const stripTrailingSlash = (url: string): string => url.replace(/\/+$/, "");

async function fetchLocalVoices(base: string): Promise<string[]> {
  try {
    const response = await fetch(voiceCatalogUrl(base));
    if (!response.ok) return [];
    return parseVoiceCatalog(await response.text());
  } catch {
    return [];
  }
}

async function fetchServerVoices(base: string): Promise<string[]> {
  try {
    const response = await fetch(`${stripTrailingSlash(base)}/v1/audio/voices`);
    if (!response.ok) return [];
    const data: unknown = await response.json();
    const list = (data as { voices?: unknown }).voices;
    return Array.isArray(list)
      ? list.filter((voice): voice is string => typeof voice === "string")
      : [];
  } catch {
    return [];
  }
}

export function useTtsVoices(serverUrl: string): string[] {
  const [voices, setVoices] = useState<string[]>([]);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- The voice list is fetched over HTTP, from the engine's catalog or the server.
  useEffect(() => {
    const base = resolveTtsServerUrl(serverUrl, null);
    let cancelled = false;
    void (async () => {
      const local = await fetchLocalVoices(base);
      const names = local.length > 0 ? local : await fetchServerVoices(base);
      if (!cancelled && names.length > 0) setVoices(names);
    })();
    return () => {
      cancelled = true;
    };
  }, [serverUrl]);

  return voices;
}
