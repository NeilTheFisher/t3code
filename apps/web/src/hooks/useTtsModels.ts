/**
 * The TTS server's model registry for the settings picker. Loads once, then
 * polls every ~1.5s while any model is downloading so progress advances without
 * a manual refresh. Install/delete/activate refresh immediately.
 *
 * Every fetch is best-effort: when the server is unreachable the list stays
 * empty and Settings shows nothing, rather than breaking the panel.
 */
import { useCallback, useEffect, useState } from "react";
import {
  activateTtsModel,
  deleteTtsModel,
  fetchTtsModels,
  installTtsModel,
  type TtsModel,
} from "../lib/ttsModels";

const DOWNLOAD_POLL_INTERVAL_MS = 1_500;
const stripTrailingSlash = (url: string): string => url.replace(/\/+$/, "");

export interface TtsModelsController {
  models: TtsModel[];
  install: (id: string) => Promise<void>;
  remove: (id: string) => Promise<void>;
  activate: (id: string) => Promise<void>;
}

export function useTtsModels(serverUrl: string): TtsModelsController {
  const [models, setModels] = useState<TtsModel[]>([]);
  const base = stripTrailingSlash(serverUrl);

  useEffect(() => {
    let cancelled = false;
    void fetchTtsModels(base).then((next) => {
      if (!cancelled && next !== null) setModels(next);
    });
    return () => {
      cancelled = true;
    };
  }, [base]);

  const downloading = models.some((model) => model.state === "downloading");
  useEffect(() => {
    if (!downloading) return;
    const timer = setInterval(() => {
      void fetchTtsModels(base).then((next) => {
        if (next !== null) setModels(next);
      });
    }, DOWNLOAD_POLL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [downloading, base]);

  const refresh = useCallback(async () => {
    const next = await fetchTtsModels(base);
    if (next !== null) setModels(next);
  }, [base]);

  const install = useCallback(
    async (id: string) => {
      await installTtsModel(base, id);
      await refresh();
    },
    [base, refresh],
  );

  const remove = useCallback(
    async (id: string) => {
      await deleteTtsModel(base, id);
      await refresh();
    },
    [base, refresh],
  );

  const activate = useCallback(
    async (id: string) => {
      await activateTtsModel(base, id);
      await refresh();
    },
    [base, refresh],
  );

  return { models, install, remove, activate };
}
