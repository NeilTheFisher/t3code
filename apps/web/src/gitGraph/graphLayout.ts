export interface GraphCommitInput {
  readonly sha: string;
  readonly parents: readonly string[];
}

export interface GraphParentEdge {
  readonly sha: string;
  readonly lane: number;
}

export interface GraphRow {
  readonly sha: string;
  readonly lane: number;
  /** Lanes occupied at the top edge of this row. */
  readonly lanesBefore: ReadonlyArray<string | null>;
  /** False when the commit's lane starts here, so nothing continues above it. */
  readonly hasIncoming: boolean;
  /** Lanes that pass straight through the row. */
  readonly through: ReadonlyArray<number>;
  readonly parentLanes: ReadonlyArray<GraphParentEdge>;
}

export interface GraphLayout {
  readonly rows: ReadonlyArray<GraphRow>;
  readonly laneCount: number;
}

/**
 * Assign lanes to a newest-first commit list. Parents that fall outside the list
 * (a page boundary) get no lane and no edge, so a row always draws only what it
 * can prove; callers extend the window rather than guessing.
 */
export function layoutGraph(commits: ReadonlyArray<GraphCommitInput>): GraphLayout {
  const columns: Array<string | null> = [];
  const present = new Set(commits.map((commit) => commit.sha));
  const rows: GraphRow[] = [];
  let laneCount = 0;

  for (const commit of commits) {
    let lane = columns.indexOf(commit.sha);
    const hasIncoming = lane !== -1;
    if (lane === -1) {
      lane = columns.indexOf(null);
      if (lane === -1) {
        lane = columns.length;
        columns.push(null);
      }
    }

    const lanesBefore = columns.slice();
    while (lanesBefore.length <= lane) lanesBefore.push(null);
    lanesBefore[lane] = commit.sha;

    const through: number[] = [];
    for (let index = 0; index < lanesBefore.length; index += 1) {
      if (index === lane) continue;
      if (lanesBefore[index] !== null) through.push(index);
    }

    while (columns.length <= lane) columns.push(null);
    columns[lane] = null;

    const parentLanes: GraphParentEdge[] = [];
    for (const [parentIndex, parent] of commit.parents.entries()) {
      if (!present.has(parent)) continue;
      let target = columns.indexOf(parent);
      if (target === -1) {
        target = parentIndex === 0 && columns[lane] === null ? lane : columns.indexOf(null);
        if (target === -1) {
          target = columns.length;
          columns.push(parent);
        } else {
          columns[target] = parent;
        }
      }
      parentLanes.push({ sha: parent, lane: target });
    }

    laneCount = Math.max(laneCount, lanesBefore.length, columns.length);
    rows.push({ sha: commit.sha, lane, lanesBefore, hasIncoming, through, parentLanes });
  }

  return { rows, laneCount };
}
