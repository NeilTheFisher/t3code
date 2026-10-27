import { describe, expect, it } from "vite-plus/test";

import { graphWorktrees } from "./graphWorktrees";

const checkout = (overrides: Partial<Parameters<typeof graphWorktrees>[0]>[number]) => ({
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
    const [main, worktree] = graphWorktrees([
      checkout({ path: "/repos/example", isMain: true }),
      checkout({
        path: "/repos/worktrees/feature",
        branch: "feat/x",
        isCurrent: true,
        dirty: true,
      }),
    ]);

    expect(main?.main).toBe(true);
    expect(main?.current).toBe(false);
    expect(worktree?.main).toBe(false);
    expect(worktree?.current).toBe(true);
    expect(worktree?.dirty).toBe(true);
    expect(worktree?.threadId).toBeNull();
  });

  it("names a detached checkout instead of leaving it blank", () => {
    expect(graphWorktrees([checkout({ branch: null })])[0]?.branch).toBe("detached");
  });

  it("treats a missing list as no checkouts", () => {
    expect(graphWorktrees(undefined)).toEqual([]);
  });
});
