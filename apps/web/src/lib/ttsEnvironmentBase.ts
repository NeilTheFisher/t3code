import type { EnvironmentId } from "@t3tools/contracts";
import { readPrimaryEnvironmentId } from "~/state/environments";
import { readPreparedConnection } from "~/state/session";

/**
 * Origin that serves the speech engine's model files. The engine runs on this
 * device, but the weights come from the environment the message belongs to;
 * remote clients connect through app.t3.codes, where a relative URL would point
 * at the cloud host instead.
 */
export function resolveTtsEnvironmentBase(environmentId: EnvironmentId | null): string {
  const target = environmentId ?? readPrimaryEnvironmentId();
  if (target === null) return "";
  return readPreparedConnection(target)?.httpBaseUrl ?? "";
}
