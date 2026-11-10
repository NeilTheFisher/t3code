import * as Cause from "effect/Cause";

/**
 * True when an error or its `cause` chain is a provider CLI missing from this host
 * (`gh`, `glab`, `az`). Callers still fail, so backoff works, but must not warn on
 * every sweep for a fact that cannot change.
 */
function isProviderCliUnavailableCause(cause: unknown): boolean {
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
