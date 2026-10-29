import { describe, expect, it } from "vite-plus/test";

import { graphWorktrees } from "./graphWorktrees";

type Checkout = NonNullable<Parameters<typeof graphWorktrees>[0]>[number];

const checkout = (overrides: Partial<Checkout>): Checkout => ({
  path: "/repos/example",
  branch: "main",
  head: "abc1234",
  isMain: false,
  isCurrent: false,
  dirty: false,
  ...overrides,
});

describe("graphWorktrees", () => {
  it("keeps the main checkout and the graph's own checkout as separate facts", () => {
    const [main, worktree] = graphWorktrees(
      [
        checkout({ path: "/repos/example", isMain: true }),
        checkout({
          path: "/repos/worktrees/feature",
          branch: "feat/x",
          isCurrent: true,
          dirty: true,
        }),
      ],
      [],
      null,
    );

    expect(main?.main).toBe(true);
    expect(main?.current).toBe(false);
    expect(worktree?.main).toBe(false);
    expect(worktree?.current).toBe(true);
    expect(worktree?.dirty).toBe(true);
    expect(worktree?.threadIds).toEqual([]);
  });

  it("links each checkout to the threads that live in it", () => {
    const [main, worktree] = graphWorktrees(
      [
        checkout({ path: "/repos/example/", isMain: true }),
        checkout({ path: "/repos/worktrees/feature/" }),
      ],
      [
        { id: "thread-root", projectId: "p1", worktreePath: null },
        { id: "thread-other-project", projectId: "p2", worktreePath: null },
        { id: "thread-feature", projectId: "p1", worktreePath: "/repos/worktrees/feature" },
      ],
      "p1",
    );

    // Trailing slashes must not stop the match.
    expect(main?.threadIds).toEqual(["thread-root"]);
    expect(worktree?.threadIds).toEqual(["thread-feature"]);
  });

  it("names a detached checkout instead of leaving it blank", () => {
    expect(graphWorktrees([checkout({ branch: null })], [], null)[0]?.branch).toBe("detached");
  });

  it("treats a missing list as no checkouts", () => {
    expect(graphWorktrees(undefined, [], null)).toEqual([]);
  });
});
