import { formatThreadLink } from "@t3tools/shared/threadLinks";

export interface CommitDragThread {
  readonly id: string;
  readonly title: string;
}

/**
 * The plain-text form of a commit drag, for drops that land outside the composer.
 * The abbreviated SHA reads better as text; the composer gets the full one
 * through the typed payload instead.
 */
export function commitDragText(input: {
  readonly sha: string;
  readonly threads: ReadonlyArray<CommitDragThread>;
}): string {
  const sha = input.sha.slice(0, 8);
  if (input.threads.length === 0) return sha;
  const links = input.threads.map((thread) => formatThreadLink(thread.id, thread.title)).join(", ");
  return `${sha} (${links})`;
}
