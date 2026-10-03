import * as Cause from "effect/Cause";

/**
 * True when an error (or any error in its `cause` chain) is a source-control
 * provider CLI that is not installed on this machine (`gh`, `glab`, `az`).
 *
 * A missing CLI is a stable property of the host, not a transient lookup
 * failure: change requests can never be listed here. Callers keep treating the
 * failure as a failure (so backoff and retry still work), but should not log a
 * warning on every sweep for it.
 */
export function isProviderCliUnavailableCause(cause: unknown): boolean {
  let current: unknown = cause;
  for (let depth = 0; depth < 6 && current !== null && current !== undefined; depth += 1) {
    if (typeof current !== "object") {
      return false;
    }
    const tag = (current as { readonly _tag?: unknown })._tag;
    if (typeof tag === "string" && tag.endsWith("CliUnavailableError")) {
      return true;
    }
    current = (current as { readonly cause?: unknown }).cause;
  }
  return false;
}

/** True when any failure in a `Cause` is a missing provider CLI. */
export function hasProviderCliUnavailableCause(cause: Cause.Cause<unknown>): boolean {
  return cause.reasons.some(
    (reason) => Cause.isFailReason(reason) && isProviderCliUnavailableCause(reason.error),
  );
}
