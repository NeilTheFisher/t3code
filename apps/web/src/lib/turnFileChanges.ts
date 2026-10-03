/**
 * Reconstructs diffs for files edited during a turn that live outside the
 * thread's workspace repository.
 *
 * Turn diffs are computed from git checkpoints captured in the workspace repo,
 * so edits the agent makes in other folders/repos never show up there. The
 * work log still records every Edit/Write tool call with its absolute file
 * path and payload, which is enough to synthesize an approximate unified diff
 * for those files so the diff panel can show them instead of "No net changes".
 */
import type { TurnId } from "@t3tools/contracts";

import type { WorkLogEntry } from "../session-logic";

export interface ExternalTurnFileChanges {
  /** Combined unified-diff patch for all reconstructed files. */
  readonly patch: string;
  /** Unique absolute file paths, in first-seen order. */
  readonly filePaths: ReadonlyArray<string>;
}

const isUnderRoot = (filePath: string, root: string): boolean => {
  const normalizedRoot = root.endsWith("/") ? root.slice(0, -1) : root;
  return filePath === normalizedRoot || filePath.startsWith(`${normalizedRoot}/`);
};

/** Header path for synthesized patches: keep it absolute so the rendered file title is the real path. */
const headerPath = (filePath: string): string => filePath;

const wrapProviderPatch = (filePath: string, patch: string): string => {
  if (patch.includes("diff --git") || (patch.includes("--- ") && patch.includes("+++ "))) {
    return patch.trimEnd();
  }
  const path = headerPath(filePath);
  return [`diff --git a/${path} b/${path}`, `--- a/${path}`, `+++ b/${path}`, patch.trimEnd()].join(
    "\n",
  );
};

/**
 * Build one reconstructed patch covering the file_change tool calls of a turn
 * whose target files are outside `workspaceRoot` (or outside any workspace
 * when the root is unknown but the path is absolute elsewhere).
 */
export function buildExternalTurnFileChanges(
  workLogEntries: ReadonlyArray<WorkLogEntry>,
  turnId: TurnId,
  workspaceRoot: string | null | undefined,
): ExternalTurnFileChanges {
  const sections: string[] = [];
  const filePaths: string[] = [];
  for (const entry of workLogEntries) {
    if (entry.turnId !== turnId || entry.itemType !== "file_change") continue;
    const change = entry.fileChange;
    const filePath = change?.filePath;
    if (!change || !filePath || !filePath.startsWith("/")) continue;
    if (workspaceRoot && isUnderRoot(filePath, workspaceRoot)) continue;

    const section = change.patch !== undefined ? wrapProviderPatch(filePath, change.patch) : null;
    if (!section) continue;
    sections.push(section);
    if (!filePaths.includes(filePath)) filePaths.push(filePath);
  }
  return { patch: sections.join("\n"), filePaths };
}

/** Join the checkpoint diff with the reconstructed external patch. */
export function combineTurnPatches(
  checkpointDiff: string | undefined,
  externalPatch: string,
): string | undefined {
  const trimmedExternal = externalPatch.trim();
  if (trimmedExternal.length === 0) return checkpointDiff;
  if (checkpointDiff === undefined || checkpointDiff.trim().length === 0) {
    return trimmedExternal;
  }
  return `${checkpointDiff.trimEnd()}\n${trimmedExternal}`;
}
