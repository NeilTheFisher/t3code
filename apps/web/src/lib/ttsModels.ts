/**
 * Fetch layer for the TTS service's model registry, resolved against the same
 * base as `useTtsVoices`. Every call is defensive: an absent or malformed
 * registry resolves to `null`/`[]` rather than throwing into Settings.
 */

export type TtsModelState = "idle" | "downloading" | "installed" | "error";

export interface TtsModel {
  id: string;
  name: string;
  /** Human-readable download size, e.g. "326 MB". */
  sizeLabel: string;
  license: string;
  installed: boolean;
  active: boolean;
  state: TtsModelState;
  /** Download completion percentage (0-100). */
  progress: number;
  detail: string | null;
}

const stripTrailingSlash = (url: string): string => url.replace(/\/+$/, "");

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const asString = (value: unknown, fallback: string): string =>
  typeof value === "string" ? value : fallback;

const asState = (value: unknown): TtsModelState =>
  value === "downloading" || value === "installed" || value === "error" ? value : "idle";

function parseModel(raw: unknown): TtsModel | null {
  if (!isRecord(raw)) return null;
  const id = raw.id;
  if (typeof id !== "string" || id.length === 0) return null;
  const progress = raw.progress;
  return {
    id,
    name: asString(raw.name, id),
    sizeLabel: asString(raw.sizeLabel, ""),
    license: asString(raw.license, ""),
    installed: raw.installed === true,
    active: raw.active === true,
    state: asState(raw.state),
    progress: typeof progress === "number" && Number.isFinite(progress) ? progress : 0,
    detail: typeof raw.detail === "string" ? raw.detail : null,
  };
}

async function request(
  serverUrl: string,
  path: string,
  init?: RequestInit,
): Promise<Response | null> {
  try {
    return await fetch(`${stripTrailingSlash(serverUrl)}${path}`, init);
  } catch {
    return null;
  }
}

/** The registry list, or `null` when the server is unreachable or misreports. */
export async function fetchTtsModels(serverUrl: string): Promise<TtsModel[] | null> {
  const response = await request(serverUrl, "/v1/models", {
    headers: { accept: "application/json" },
  });
  if (response === null || !response.ok) return null;
  try {
    const data: unknown = await response.json();
    if (!isRecord(data) || !Array.isArray(data.models)) return null;
    return data.models.map(parseModel).filter((model): model is TtsModel => model !== null);
  } catch {
    return null;
  }
}

/** Start a download. Resolves to the model in its "downloading" state, or null. */
export async function installTtsModel(serverUrl: string, id: string): Promise<TtsModel | null> {
  const response = await request(serverUrl, `/v1/models/${encodeURIComponent(id)}/install`, {
    method: "POST",
  });
  if (response === null || !response.ok) return null;
  return parseModel(await response.json().catch(() => null));
}

/** Make an installed model the active one. Resolves to the updated model, or null. */
export async function activateTtsModel(serverUrl: string, id: string): Promise<TtsModel | null> {
  const response = await request(serverUrl, `/v1/models/${encodeURIComponent(id)}/activate`, {
    method: "POST",
  });
  if (response === null || !response.ok) return null;
  return parseModel(await response.json().catch(() => null));
}

/** Delete a model's files. Resolves to whether the server accepted the deletion. */
export async function deleteTtsModel(serverUrl: string, id: string): Promise<boolean> {
  const response = await request(serverUrl, `/v1/models/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  return response !== null && response.ok;
}
