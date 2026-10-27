/**
 * The TTS server's model registry for the settings picker: loads once, polls
 * while a model downloads, and refreshes after install/delete/activate. When the
 * server is unreachable the list stays empty rather than breaking Settings.
 */
import { useEffect, useState } from "react";
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

  // oxlint-disable-next-line t3code/react-effect-budget -- The model registry is fetched over HTTP from the TTS server.
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
  // oxlint-disable-next-line t3code/react-effect-budget -- Polling an in-flight download is external to React.
  useEffect(() => {
    if (!downloading) return;
    const timer = setInterval(() => {
      void fetchTtsModels(base).then((next) => {
        if (next !== null) setModels(next);
      });
    }, DOWNLOAD_POLL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [downloading, base]);

  const refresh = async () => {
    const next = await fetchTtsModels(base);
    if (next !== null) setModels(next);
  };

  const install = async (id: string) => {
    await installTtsModel(base, id);
    await refresh();
  };

  const remove = async (id: string) => {
    await deleteTtsModel(base, id);
    await refresh();
  };

  const activate = async (id: string) => {
    await activateTtsModel(base, id);
    await refresh();
  };

  return { models, install, remove, activate };
}
