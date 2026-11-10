/**
 * Voice names for the narration picker, from the pinned Phonon catalog the
 * environment proxies. Only the model's own names are valid, so the bundled
 * fallback covers the same vocabulary when the catalog cannot be fetched.
 */
import { useAtomValue } from "@effect/atom-react";
import {
  PHONON_DEFAULT_VOICE,
  PHONON_FALLBACK_VOICES,
  parseVoiceCatalog,
  phononVoiceFor,
  voiceCatalogUrl,
} from "@t3tools/client-runtime/phonon-voices";
import type { EnvironmentId } from "@t3tools/contracts";
import * as Option from "effect/Option";
import { AsyncResult } from "effect/reactivity";
import { useEffect, useState } from "react";

import { mobilePreferencesAtom } from "../../state/preferences";
import { usePreparedConnection } from "../../state/session";

/** Catalogs are pinned, so one fetch per environment origin serves the session. */
const catalogs = new Map<string, readonly string[]>();

async function fetchTtsVoices(base: string, signal?: AbortSignal): Promise<readonly string[]> {
  const cached = catalogs.get(base);
  if (cached !== undefined) return cached;
  try {
    const response = await fetch(voiceCatalogUrl(base), signal ? { signal } : {});
    if (!response.ok) return PHONON_FALLBACK_VOICES;
    const names = parseVoiceCatalog(await response.text());
    if (names.length === 0) return PHONON_FALLBACK_VOICES;
    catalogs.set(base, names);
    return names;
  } catch {
    return PHONON_FALLBACK_VOICES;
  }
}

export function useTtsVoices(environmentId: EnvironmentId | null): readonly string[] {
  const prepared = usePreparedConnection(environmentId);
  const base = Option.match(prepared, { onNone: () => null, onSome: (value) => value.httpBaseUrl });
  const [fetched, setFetched] = useState<{ base: string; voices: readonly string[] } | null>(null);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- the voice list is fetched over HTTP from the environment's catalog
  useEffect(() => {
    if (base === null) return;
    const controller = new AbortController();
    void fetchTtsVoices(base, controller.signal).then((names) => {
      if (!controller.signal.aborted) setFetched({ base, voices: names });
    });
    return () => controller.abort();
  }, [base]);

  return base !== null && fetched?.base === base ? fetched.voices : PHONON_FALLBACK_VOICES;
}

/** The voice this device narrates with; the model default until one is chosen. */
export function useSpeakVoice(): string {
  const preferences = useAtomValue(mobilePreferencesAtom);
  const stored = AsyncResult.isSuccess(preferences) ? preferences.value.speakVoice : undefined;
  return stored === undefined ? PHONON_DEFAULT_VOICE : phononVoiceFor(stored);
}
