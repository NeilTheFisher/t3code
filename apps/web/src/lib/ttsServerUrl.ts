import type { EnvironmentId } from "@t3tools/contracts";
import { readPrimaryEnvironmentId } from "~/state/environments";
import { readPreparedConnection } from "~/state/session";

/**
 * Origin the speech request must reach. An empty setting means the environment's
 * own server: remote clients are served from app.t3.codes, where a relative URL
 * would target the cloud host instead of the environment that synthesizes.
 */
export function resolveTtsServerUrl(
  serverUrl: string,
  environmentId: EnvironmentId | null,
): string {
  const trimmed = serverUrl.trim();
  if (trimmed.length > 0) return trimmed;
  const target = environmentId ?? readPrimaryEnvironmentId();
  if (target === null) return "";
  return readPreparedConnection(target)?.httpBaseUrl ?? "";
}
