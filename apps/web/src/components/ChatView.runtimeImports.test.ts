import { describe, expect, it } from "vite-plus/test";

import chatViewSource from "./ChatView.tsx?raw";

describe("ChatView runtime imports", () => {
  it("imports the model display-name helper it calls", () => {
    const source: string = chatViewSource;
    const modelSelectionImport = [
      ...source.matchAll(/import\s*\{([\s\S]*?)\}\s*from\s*"([^"]+)";/g),
    ].find((match) => match[2] === "../modelSelection")?.[1];

    expect(modelSelectionImport).toContain("resolveModelDisplayName");
  });
});
