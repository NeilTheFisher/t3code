import { describe, expect, it } from "vite-plus/test";

import {
  readOpenCodeGoCredentials,
  updateOpenCodeGoCredentials,
} from "./OpenCodeGoCredentialsDialog";

describe("OpenCodeGoCredentialsDialog config", () => {
  it("reads only string credentials", () => {
    expect(
      readOpenCodeGoCredentials({
        goWorkspaceId: "wrk_example",
        goAuthCookie: "auth=secret",
      }),
    ).toEqual({
      goWorkspaceId: "wrk_example",
      goAuthCookie: "auth=secret",
    });
    expect(readOpenCodeGoCredentials({ goWorkspaceId: 42 })).toEqual({
      goWorkspaceId: "",
      goAuthCookie: "",
    });
  });

  it("preserves the saved cookie when the replacement is blank", () => {
    expect(
      updateOpenCodeGoCredentials(
        {
          binaryPath: "/usr/local/bin/opencode",
          goWorkspaceId: "wrk_old",
          goAuthCookie: "auth=existing-secret",
        },
        {
          goWorkspaceId: "  wrk_new  ",
          goAuthCookie: "   ",
        },
      ),
    ).toEqual({
      binaryPath: "/usr/local/bin/opencode",
      goWorkspaceId: "wrk_new",
      goAuthCookie: "auth=existing-secret",
    });
  });

  it("replaces the cookie without dropping unrelated provider config", () => {
    expect(
      updateOpenCodeGoCredentials(
        { serverUrl: "http://localhost:4096", goAuthCookie: "old" },
        { goWorkspaceId: "wrk_example", goAuthCookie: " auth=new-secret " },
      ),
    ).toEqual({
      serverUrl: "http://localhost:4096",
      goWorkspaceId: "wrk_example",
      goAuthCookie: "auth=new-secret",
    });
  });
});
