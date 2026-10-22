import { describe, expect, it } from "vite-plus/test";

import { commitDragText } from "./commitDrag";

describe("commit drag text", () => {
  it("abbreviates the SHA in the text form", () => {
    expect(commitDragText({ sha: "a".repeat(40), threads: [] })).toBe("a".repeat(8));
  });

  it("appends a thread link when the commit is attributed to one", () => {
    expect(
      commitDragText({
        sha: "b".repeat(40),
        threads: [{ id: "thread:project:1", title: "Git graph UI" }],
      }),
    ).toBe(`${"b".repeat(8)} ([Git graph UI](t3-thread://v1/thread:project:1))`);
  });

  it("lists every attributed thread", () => {
    expect(
      commitDragText({
        sha: "c".repeat(40),
        threads: [
          { id: "one", title: "One" },
          { id: "two", title: "Two" },
        ],
      }),
    ).toBe(`${"c".repeat(8)} ([One](t3-thread://v1/one), [Two](t3-thread://v1/two))`);
  });
});
