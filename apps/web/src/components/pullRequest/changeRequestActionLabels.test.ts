import { describe, expect, it } from "vite-plus/test";

import { changeRequestActionLabel } from "./changeRequestActionLabels";

describe("changeRequestActionLabel", () => {
  it("names Gerrit's actions the way Gerrit does", () => {
    expect(changeRequestActionLabel("gerrit", "merge")).toBe("Submit");
    expect(changeRequestActionLabel("gerrit", "close")).toBe("Abandon");
    expect(changeRequestActionLabel("gerrit", "reopen")).toBe("Restore");
  });

  it("leaves other hosts to their own defaults", () => {
    expect(changeRequestActionLabel("github", "merge")).toBeNull();
    expect(changeRequestActionLabel(null, "merge")).toBeNull();
    expect(changeRequestActionLabel(undefined, "close")).toBeNull();
  });
});
