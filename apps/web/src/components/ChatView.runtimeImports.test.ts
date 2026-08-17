import * as NodeFS from "node:fs";

import { describe, expect, it } from "vite-plus/test";

describe("ChatView runtime imports", () => {
  it("imports the model display-name helper it calls", () => {
    const source = NodeFS.readFileSync(new URL("./ChatView.tsx", import.meta.url), "utf8");
    const modelSelectionImport = [
      ...source.matchAll(/import\s*\{([\s\S]*?)\}\s*from\s*"([^"]+)";/g),
    ].find((match) => match[2] === "../modelSelection")?.[1];

    expect(modelSelectionImport).toContain("resolveModelDisplayName");
  });
});
