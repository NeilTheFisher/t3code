import type { EnvironmentId, ThreadId } from "@t3tools/contracts";

/**
 * One Android alert card per thread. The relay watcher and the app must build
 * this byte for byte, because the native side keys and dismisses by it.
 */
export function androidAgentAlertGroup(environmentId: EnvironmentId, threadId: ThreadId): string {
  return JSON.stringify([environmentId, threadId]);
}
