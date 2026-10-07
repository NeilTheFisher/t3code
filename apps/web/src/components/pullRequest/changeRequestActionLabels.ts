/**
 * The verb a host uses for an action, where it differs from the generic GitHub-shaped default.
 * Gerrit submits a change rather than merging it, abandons rather than closes, and restores
 * rather than reopens; "merge" is the honest stand-in the provider maps onto submit.
 */
const HOST_ACTION_LABELS: Partial<Record<string, Record<string, string>>> = {
  gerrit: {
    merge: "Submit",
    close: "Abandon",
    reopen: "Restore",
    "update-branch": "Rebase",
  },
};

export function changeRequestActionLabel(
  provider: string | null | undefined,
  action: string,
): string | null {
  if (provider === null || provider === undefined) return null;
  return HOST_ACTION_LABELS[provider]?.[action] ?? null;
}
