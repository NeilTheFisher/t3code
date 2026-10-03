import { describe, expect, it } from "vite-plus/test";
import { TurnId } from "@t3tools/contracts";

import type { WorkLogEntry } from "../session-logic";
import { buildExternalTurnFileChanges, combineTurnPatches } from "./turnFileChanges";

const turnId = TurnId.make("turn-1");
const otherTurnId = TurnId.make("turn-2");

const entry = (overrides: Partial<WorkLogEntry>): WorkLogEntry => ({
  id: "entry-1",
  createdAt: "2026-07-21T00:00:00.000Z",
  label: "Edit",
  tone: "tool",
  itemType: "file_change",
  turnId,
  ...overrides,
});

describe("buildExternalTurnFileChanges", () => {
  it("reconstructs Edit tool calls outside the workspace as unified diffs", () => {
    const result = buildExternalTurnFileChanges(
      [
        entry({
          fileChange: {
            filePath: "/home/user/other-repo/foo.ts",
            patch:
              "diff --git a//home/user/other-repo/foo.ts b//home/user/other-repo/foo.ts\n--- a//home/user/other-repo/foo.ts\n+++ b//home/user/other-repo/foo.ts\n@@ -1 +1 @@\n-const a = 1;\n+const a = 2;",
          },
        }),
      ],
      turnId,
      "/home/user/workspace",
    );
    expect(result.filePaths).toEqual(["/home/user/other-repo/foo.ts"]);
    expect(result.patch).toContain("diff --git a//home/user/other-repo/foo.ts");
    expect(result.patch).toContain("-const a = 1;");
    expect(result.patch).toContain("+const a = 2;");
  });

  it("reconstructs Write tool calls as new-file diffs", () => {
    const result = buildExternalTurnFileChanges(
      [
        entry({
          fileChange: {
            filePath: "/home/user/other-repo/new.ts",
            patch:
              "diff --git a//home/user/other-repo/new.ts b//home/user/other-repo/new.ts\nnew file mode 100644\n--- /dev/null\n+++ b//home/user/other-repo/new.ts\n@@ -0,0 +1,2 @@\n+hello\n+world",
          },
        }),
      ],
      turnId,
      "/home/user/workspace",
    );
    expect(result.patch).toContain("--- /dev/null");
    expect(result.patch).toContain("+hello");
    expect(result.patch).toContain("+world");
  });

  it("skips files inside the workspace and entries from other turns", () => {
    const result = buildExternalTurnFileChanges(
      [
        entry({
          fileChange: {
            filePath: "/home/user/workspace/inside.ts",
            patch:
              "diff --git a//home/user/workspace/inside.ts b//home/user/workspace/inside.ts\n--- a//home/user/workspace/inside.ts\n+++ b//home/user/workspace/inside.ts\n@@ -1 +1 @@\n-a\n+b",
          },
        }),
        entry({
          turnId: otherTurnId,
          fileChange: {
            filePath: "/home/user/other-repo/foo.ts",
            patch:
              "diff --git a//home/user/other-repo/foo.ts b//home/user/other-repo/foo.ts\n--- a//home/user/other-repo/foo.ts\n+++ b//home/user/other-repo/foo.ts\n@@ -1 +1 @@\n-a\n+b",
          },
        }),
        entry({ itemType: "command_execution" }),
      ],
      turnId,
      "/home/user/workspace",
    );
    expect(result.filePaths).toEqual([]);
    expect(result.patch).toBe("");
  });

  it("uses a provider-supplied patch verbatim when present", () => {
    const patch = [
      "diff --git a/foo.ts b/foo.ts",
      "--- a/foo.ts",
      "+++ b/foo.ts",
      "@@ -1,1 +1,1 @@",
      "-a",
      "+b",
    ].join("\n");
    const result = buildExternalTurnFileChanges(
      [entry({ fileChange: { filePath: "/home/user/other-repo/foo.ts", patch } })],
      turnId,
      "/home/user/workspace",
    );
    expect(result.patch).toBe(patch);
  });
});

describe("combineTurnPatches", () => {
  it("returns the checkpoint diff unchanged when there is no external patch", () => {
    expect(combineTurnPatches("some diff", "")).toBe("some diff");
    expect(combineTurnPatches(undefined, "")).toBeUndefined();
  });

  it("returns the external patch when the checkpoint diff is empty", () => {
    expect(combineTurnPatches("", "external")).toBe("external");
    expect(combineTurnPatches(undefined, "external")).toBe("external");
  });

  it("concatenates both patches", () => {
    expect(combineTurnPatches("checkpoint\n", "external")).toBe("checkpoint\nexternal");
  });
});
