/**
 * A gitlink change in a patch reads as two `Subproject commit` lines, with the
 * real paths and revisions only inside the submodule. The diff panel uses this
 * to offer the submodule's own diff for that pointer.
 */
export interface SubmodulePointerChange {
  readonly path: string;
  readonly from: string;
  readonly to: string;
}

const DIFF_HEADER = /^diff --git (?:"a\/(.+)"|a\/(.+)) (?:"b\/(.+)"|b\/(.+))$/;
const SUBPROJECT_LINE = /^([-+])Subproject commit ([0-9a-f]{7,64})$/;

export function submodulePointerChanges(patch: string): ReadonlyArray<SubmodulePointerChange> {
  const changes: SubmodulePointerChange[] = [];
  let path: string | null = null;
  let from: string | null = null;
  let to: string | null = null;

  const flush = () => {
    if (path !== null && from !== null && to !== null) {
      changes.push({ path, from, to });
    }
    from = null;
    to = null;
  };

  for (const line of patch.split("\n")) {
    const header = DIFF_HEADER.exec(line);
    if (header !== null) {
      flush();
      path = header[3] ?? header[4] ?? header[1] ?? header[2] ?? null;
      continue;
    }
    const pointer = SUBPROJECT_LINE.exec(line);
    if (pointer === null) continue;
    if (pointer[1] === "-") from = pointer[2] ?? null;
    else to = pointer[2] ?? null;
  }
  flush();

  return changes;
}
