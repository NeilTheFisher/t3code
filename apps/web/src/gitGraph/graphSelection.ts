/** Git's well-known empty tree, used as the base when a commit has no parent. */
export const EMPTY_TREE_SHA = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

export function shortSha(sha: string): string {
  return sha.slice(0, 8);
}

export interface GraphCommitIdentity {
  readonly sha: string;
  readonly parents: ReadonlyArray<string>;
}

export interface GraphSelection<Commit extends GraphCommitIdentity> {
  readonly shas: ReadonlySet<string>;
  /** The run's display-first row, which is the more recent commit. */
  readonly top: Commit;
  /** The run's display-last row, which is the earlier commit. */
  readonly bottom: Commit;
}

/**
 * The graph's selection is always a contiguous run of the loaded window: the
 * anchor is the last plain click and the head is the last extended click, and
 * every commit between them is selected even when it was never clicked.
 */
export function resolveGraphSelection<Commit extends GraphCommitIdentity>(
  commits: ReadonlyArray<Commit>,
  anchorSha: string | null,
  headSha: string | null,
): GraphSelection<Commit> | null {
  if (anchorSha === null) return null;
  const anchorIndex = commits.findIndex((commit) => commit.sha === anchorSha);
  if (anchorIndex === -1) return null;
  const headIndex = headSha === null ? anchorIndex : commits.findIndex((c) => c.sha === headSha);
  const resolvedHead = headIndex === -1 ? anchorIndex : headIndex;
  const from = Math.min(anchorIndex, resolvedHead);
  const to = Math.max(anchorIndex, resolvedHead);
  const slice = commits.slice(from, to + 1);
  const top = slice[0];
  const bottom = slice[slice.length - 1];
  if (top === undefined || bottom === undefined) return null;
  return { shas: new Set(slice.map((commit) => commit.sha)), top, bottom };
}

/**
 * The revision range a diff should read for a selection. The graph lists newest
 * first, so the run's base is the bottom row's parent; `A..B` in the label
 * therefore reads earlier-to-later, the same way git writes a range.
 */
export function selectionDiffRange(selection: {
  readonly top: GraphCommitIdentity;
  readonly bottom: GraphCommitIdentity;
}): { readonly from: string; readonly to: string; readonly label: string } {
  const single = selection.top.sha === selection.bottom.sha;
  return {
    from: selection.bottom.parents[0] ?? EMPTY_TREE_SHA,
    to: selection.top.sha,
    label: single
      ? shortSha(selection.top.sha)
      : `${shortSha(selection.bottom.sha)}..${shortSha(selection.top.sha)}`,
  };
}

/** Where a commit sits in the selected run, so only the run's edges are drawn. */
export type GraphSelectionEdge = "none" | "single" | "top" | "middle" | "bottom";

export function graphSelectionEdge(
  selection: {
    readonly shas: ReadonlySet<string>;
    readonly top: GraphCommitIdentity;
    readonly bottom: GraphCommitIdentity;
  } | null,
  sha: string,
): GraphSelectionEdge {
  if (selection === null || !selection.shas.has(sha)) return "none";
  if (selection.top.sha === selection.bottom.sha) return "single";
  if (sha === selection.top.sha) return "top";
  if (sha === selection.bottom.sha) return "bottom";
  return "middle";
}
