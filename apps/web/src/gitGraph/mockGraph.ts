export type MockRefKind = "branch" | "remote" | "tag" | "head";

export interface MockRef {
  readonly kind: MockRefKind;
  readonly name: string;
}

export interface MockPullRequest {
  readonly number: number;
  readonly state: "open" | "merged" | "draft";
}

export interface MockCommit {
  readonly sha: string;
  readonly subject: string;
  readonly parents: ReadonlyArray<string>;
  readonly author: string;
  readonly authoredAt: Date;
  readonly refs: ReadonlyArray<MockRef>;
  readonly threadIds: ReadonlyArray<string>;
  readonly turn: number | null;
  readonly pullRequest: MockPullRequest | null;
}

export interface MockThread {
  readonly id: string;
  readonly title: string;
  readonly branch: string;
  readonly turns: number;
  readonly state: "running" | "idle";
  readonly isSubagent: boolean;
}

export interface MockWorktree {
  readonly path: string;
  readonly branch: string;
  readonly threadId: string | null;
  readonly managed: boolean;
  readonly dirty: boolean;
  readonly stale: boolean;
}

export interface MockGraphData {
  readonly repository: string;
  readonly currentBranch: string;
  readonly ahead: number;
  readonly behind: number;
  readonly commits: ReadonlyArray<MockCommit>;
  readonly threads: ReadonlyArray<MockThread>;
  readonly worktrees: ReadonlyArray<MockWorktree>;
  readonly observedAt: Date;
}

interface CommitSeed {
  readonly sha: string;
  readonly subject: string;
  readonly parents: ReadonlyArray<string>;
  readonly author: string;
  readonly refs?: ReadonlyArray<MockRef>;
  readonly threadIds?: ReadonlyArray<string>;
  readonly turn?: number;
  readonly pullRequest?: MockPullRequest;
}

/**
 * Newest-first, and every parent appears later in the list: layout and relative
 * ages both depend on that order. Timestamps are derived so the fixture cannot
 * contradict itself.
 */
const SEEDS: ReadonlyArray<CommitSeed> = [
  {
    sha: "3a6e74db",
    subject: "fix(git-graph): keep lane colors stable when refs change",
    parents: ["c1120f2dd"],
    author: "Neil Fisher",
    refs: [{ kind: "branch", name: "main" }],
    threadIds: ["thread-gerrit"],
    turn: 2,
  },
  {
    sha: "c1120f2dd",
    subject: "feat(git-graph): attribute commits to thread turns",
    parents: ["41ac9e0b7"],
    author: "Neil Fisher",
    threadIds: ["thread-gerrit"],
    turn: 1,
  },
  {
    sha: "41ac9e0b7",
    subject: "Merge branch 'feat/git-graph'",
    parents: ["af6fd01f9", "0d7a24ae5"],
    author: "Neil Fisher",
  },
  {
    sha: "0d7a24ae5",
    subject: "feat(git-graph): thread provenance overlay",
    parents: ["6e7cdf4f6"],
    author: "Neil Fisher",
    refs: [{ kind: "branch", name: "feat/git-graph" }],
    threadIds: ["thread-graph"],
    turn: 6,
    pullRequest: { number: 22190, state: "open" },
  },
  {
    sha: "6e7cdf4f6",
    subject: "feat(git-graph): live ref fingerprint",
    parents: ["028f6d602"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
    turn: 5,
  },
  {
    sha: "af6fd01f9",
    subject: "feat(web): worktree list inside the graph surface",
    parents: ["31f28d67f"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
    turn: 4,
  },
  {
    sha: "028f6d602",
    subject: "feat(git-graph): lane layout without a dependency",
    parents: ["4e971a83a"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
    turn: 3,
  },
  {
    sha: "31f28d67f",
    subject: "feat(web): commit detail panel with pull-request chips",
    parents: ["e6f14a3b5"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
    turn: 2,
  },
  {
    sha: "4e971a83a",
    subject: "feat(web): open the graph from the branch toolbar",
    parents: ["b4323dc13"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
    turn: 1,
  },
  {
    sha: "9b1d77e04",
    subject: "feat(worktrees): confirm removal of dirty checkouts",
    parents: ["5c2a10f8e"],
    author: "Wout Stiens",
    refs: [{ kind: "branch", name: "fix/worktree-cleanup" }],
    threadIds: ["thread-worktree"],
    turn: 3,
    pullRequest: { number: 22178, state: "open" },
  },
  {
    sha: "b4323dc13",
    subject: "test(git-graph): pin lane merges and forks",
    parents: ["31b372274"],
    author: "Neil Fisher",
  },
  {
    sha: "e6f14a3b5",
    subject: "feat(contracts): vcs.logGraph paging",
    parents: ["2386bb537"],
    author: "Neil Fisher",
  },
  {
    sha: "5c2a10f8e",
    subject: "feat(worktrees): show the owning thread",
    parents: ["c0f8be219"],
    author: "Wout Stiens",
    threadIds: ["thread-worktree"],
    turn: 2,
  },
  {
    sha: "31b372274",
    subject: "feat(web): render commit lanes with SVG",
    parents: ["1f4c9a882"],
    author: "Neil Fisher",
    threadIds: ["thread-graph"],
  },
  {
    sha: "2386bb537",
    subject: "feat(tts): per-block seek and speed",
    parents: ["bd1fc3853"],
    author: "Neil Fisher",
  },
  {
    sha: "c0f8be219",
    subject: "feat(worktrees): list managed checkouts on the server",
    parents: ["1f4c9a882"],
    author: "Wout Stiens",
    threadIds: ["thread-worktree"],
    turn: 1,
  },
  {
    sha: "1f4c9a882",
    subject: "Merge branch 'feat/tts-narration'",
    parents: ["a6aa39565", "4c8d2b17f"],
    author: "Neil Fisher",
  },
  {
    sha: "bd1fc3853",
    subject: "fix(tts): keep the seek highlight until the head catches up",
    parents: ["31f2f5c60"],
    author: "Neil Fisher",
    threadIds: ["thread-tts"],
    turn: 3,
  },
  {
    sha: "4c8d2b17f",
    subject: "feat(tts): eager synthesis so any paragraph seeks",
    parents: ["8c3b0aa71"],
    author: "Neil Fisher",
    threadIds: ["thread-tts"],
    turn: 2,
    pullRequest: { number: 22004, state: "merged" },
  },
  {
    sha: "31f2f5c60",
    subject: "feat(tts): read assistant messages aloud",
    parents: ["a6aa39565"],
    author: "Neil Fisher",
  },
  {
    sha: "8c3b0aa71",
    subject: "feat(tts): per-block highlight while narrating",
    parents: ["c65e0f312"],
    author: "Neil Fisher",
    threadIds: ["thread-tts"],
    turn: 1,
  },
  {
    sha: "a6aa39565",
    subject: "fix(fork): repair upstream-rebase fallout in ws RPC wiring",
    parents: ["4f5f2f8e8"],
    author: "Neil Fisher",
  },
  {
    sha: "c65e0f312",
    subject: "refactor(server): flatten managed TTS supervision",
    parents: ["3f0e9d4a2"],
    author: "Neil Fisher",
  },
  {
    sha: "2e7b4c9d1",
    subject: "feat(opencode): read usage from the console meters API",
    parents: ["86a1d5f07"],
    author: "Theo Browne",
    refs: [{ kind: "branch", name: "feat/opencode-usage" }],
  },
  {
    sha: "4f5f2f8e8",
    subject: "fix(vcs): check out the remote branch instead of any branch tracking it",
    parents: ["6b2c8f401"],
    author: "Wout Stiens",
    refs: [{ kind: "remote", name: "origin/main" }],
    pullRequest: { number: 22080, state: "merged" },
  },
  {
    sha: "86a1d5f07",
    subject: "feat(opencode): context meter after compaction",
    parents: ["6b2c8f401"],
    author: "Theo Browne",
  },
  {
    sha: "6b2c8f401",
    subject: "fix(web): scroll the timeline to the narrated message",
    parents: ["9e0f3a7c2"],
    author: "Neil Fisher",
  },
  {
    sha: "3f0e9d4a2",
    subject: "fix(gerrit): viewed marks and REST auth",
    parents: ["5b7d1c9e0"],
    author: "Neil Fisher",
  },
  {
    sha: "9e0f3a7c2",
    subject: "feat(mobile): name Gerrit actions the way Gerrit does",
    parents: ["d4a8b2f13"],
    author: "Neil Fisher",
  },
  {
    sha: "5b7d1c9e0",
    subject: "fix(desktop): restore fresh background screenshots",
    parents: ["a1e6c0b58"],
    author: "Theo Browne",
  },
  {
    sha: "d4a8b2f13",
    subject: "fix(server): stop killing worktree fetches after 30 seconds",
    parents: ["c8f2a1d64"],
    author: "Wout Stiens",
  },
  {
    sha: "a1e6c0b58",
    subject: "feat(threads): fork into a new worktree or reuse this one",
    parents: ["e2b5d9c07"],
    author: "Bilal O.",
  },
  {
    sha: "7f3a1b9d2",
    subject: "chore(deps): vite 7.4 and vitest 5",
    parents: ["b9c4e6a18"],
    author: "Neil Fisher",
    refs: [{ kind: "branch", name: "chore/deps" }],
    pullRequest: { number: 21988, state: "draft" },
  },
  {
    sha: "c8f2a1d64",
    subject: "fix(web): maximized right panel no longer doubles the border",
    parents: ["f5d0a2b93"],
    author: "saphid",
  },
  {
    sha: "b9c4e6a18",
    subject: "chore(deps): bump effect to 3.19",
    parents: ["8a6c2f7b1"],
    author: "Neil Fisher",
  },
  {
    sha: "e2b5d9c07",
    subject: "refactor(web): open the Files panel through the panel host",
    parents: ["2c4f7a1d8"],
    author: "Theo Browne",
  },
  {
    sha: "8a6c2f7b1",
    subject: "docs: explain VS Code extension commands",
    parents: [],
    author: "Bilal O.",
    refs: [{ kind: "tag", name: "v1.1.0" }],
  },
  {
    sha: "f5d0a2b93",
    subject: "feat(web): render terminals with libghostty-vt",
    parents: ["7e1b3d6c0"],
    author: "Theo Browne",
  },
  {
    sha: "2c4f7a1d8",
    subject: "fix(orchestration): resume continuations after worktree handoffs",
    parents: ["3d9a6c2b5"],
    author: "Wout Stiens",
  },
  {
    sha: "7e1b3d6c0",
    subject: "feat(web): add per-commit diff views",
    parents: ["4a8c0e1f6"],
    author: "Pranav R.",
  },
  {
    sha: "3d9a6c2b5",
    subject: "fix(server): keep characters intact in generated commit subjects",
    parents: ["6f0b2d7a9"],
    author: "Neil Fisher",
  },
  {
    sha: "4a8c0e1f6",
    subject: "feat(BrandImport): import themes from local .vsix packages",
    parents: ["9c3e5a0b2"],
    author: "saphid",
  },
  {
    sha: "6f0b2d7a9",
    subject: "docs: add Gerrit change-request provider notes",
    parents: ["1b7d4e8c3"],
    author: "Neil Fisher",
    refs: [{ kind: "tag", name: "v1.0.4" }],
  },
  {
    sha: "9c3e5a0b2",
    subject: "chore: sync fork with upstream main",
    parents: ["1b7d4e8c3"],
    author: "Neil Fisher",
  },
  {
    sha: "1b7d4e8c3",
    subject: "Initial commit",
    parents: [],
    author: "Theo Browne",
  },
];

const THREADS: ReadonlyArray<MockThread> = [
  {
    id: "thread-graph",
    title: "Git graph UI",
    branch: "feat/git-graph",
    turns: 7,
    state: "running",
    isSubagent: false,
  },
  {
    id: "thread-worktree",
    title: "Worktree cleanup",
    branch: "fix/worktree-cleanup",
    turns: 3,
    state: "running",
    isSubagent: false,
  },
  {
    id: "thread-tts",
    title: "TTS narration",
    branch: "feat/tts-narration",
    turns: 4,
    state: "idle",
    isSubagent: false,
  },
  {
    id: "thread-gerrit",
    title: "Gerrit review fixes",
    branch: "main",
    turns: 2,
    state: "idle",
    isSubagent: false,
  },
];

const WORKTREES: ReadonlyArray<MockWorktree> = [
  {
    path: "/home/nfisher/repos/t3code-web-setup/t3code",
    branch: "main",
    threadId: "thread-gerrit",
    managed: false,
    dirty: false,
    stale: false,
  },
  {
    path: "~/.t3/worktrees/git-graph-ui",
    branch: "feat/git-graph",
    threadId: "thread-graph",
    managed: true,
    dirty: true,
    stale: false,
  },
  {
    path: "~/.t3/worktrees/worktree-cleanup",
    branch: "fix/worktree-cleanup",
    threadId: "thread-worktree",
    managed: true,
    dirty: false,
    stale: false,
  },
  {
    path: "~/.t3/worktrees/tts-narration",
    branch: "feat/tts-narration",
    threadId: null,
    managed: true,
    dirty: false,
    stale: true,
  },
];

const MINUTE = 60_000;

export function mockGraphData(now = new Date()): MockGraphData {
  const commits = SEEDS.map((seed, index) => ({
    sha: seed.sha,
    subject: seed.subject,
    parents: seed.parents,
    author: seed.author,
    authoredAt: new Date(now.getTime() - (index * 37 + 4) * MINUTE),
    refs: seed.refs ?? [],
    threadIds: seed.threadIds ?? [],
    turn: seed.turn ?? null,
    pullRequest: seed.pullRequest ?? null,
  }));

  return {
    repository: "NeilTheFisher/t3code",
    currentBranch: "main",
    ahead: 2,
    behind: 0,
    commits,
    threads: THREADS,
    worktrees: WORKTREES,
    observedAt: now,
  };
}
