import { formatThreadLink } from "@t3tools/shared/threadLinks";

export interface CommitDragThread {
  readonly id: string;
  readonly title: string;
}

/**
 * What a commit drag inserts into the composer: the full SHA, and a thread link
 * for every thread the commit is attributed to. The SHA stays first so a drag
 * that lands outside the composer still reads as a commit.
 */
export function commitDragText(input: {
  readonly sha: string;
  readonly threads: ReadonlyArray<CommitDragThread>;
}): string {
  if (input.threads.length === 0) return input.sha;
  const links = input.threads.map((thread) => formatThreadLink(thread.id, thread.title)).join(", ");
  return `${input.sha} (${links})`;
}
