import { sourceControlClients } from "@t3tools/client-runtime/source-control-clients";
import { SourceControlProviderKind } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";
import {
  allowedMergeMethods,
  canPerformPullRequestAction,
  changeRequestActionTitle,
  changeRequestHostLabel,
  changeRequestLabels,
  mergeSummary,
  mergeUnavailableReason,
  pullRequestActionLabel,
} from "./pullRequestActions";

const GITHUB = sourceControlClients.get("github").changeRequest;
const GITLAB = sourceControlClients.get("gitlab").changeRequest;

import type { PullRequestAction } from "@t3tools/contracts";

const ALL_PR_ACTIONS: readonly PullRequestAction[] = [
  "merge",
  "ready",
  "draft",
  "update-branch",
  "enable-auto-merge",
  "disable-auto-merge",
  "approve-workflows",
  "close",
  "reopen",
  "revert",
  "delete-branch",
];

type Detail = Parameters<typeof allowedMergeMethods>[0];

function detail(overrides: Partial<Detail> = {}): Detail {
  return {
    provider: SourceControlProviderKind.make("github"),
    state: "open",
    isDraft: false,
    mergeability: "mergeable",
    autoMergeEnabled: false,
    capabilities: {
      actions: ALL_PR_ACTIONS,
      mergeMethods: ["merge", "squash", "rebase"],
      updateMethods: ["merge", "rebase"],
      deleteBranch: true,
    },
    viewerPermissions: { actions: ALL_PR_ACTIONS, updateMethods: ["merge"] },
    mergeCapabilities: { merge: true, squash: true, rebase: false },
    ...overrides,
  };
}

describe("mobile pull request actions", () => {
  it("requires both provider support and account permission", () => {
    expect(
      canPerformPullRequestAction(detail({ viewerPermissions: { actions: [] } }), "merge"),
    ).toBe(false);
    expect(
      canPerformPullRequestAction(
        detail({ capabilities: { actions: [], mergeMethods: ["merge"] } }),
        "merge",
      ),
    ).toBe(false);
    expect(mergeUnavailableReason(detail(), false, GITHUB)).toContain("read-only");
  });

  it("blocks a conflicting PR's immediate merge and explains why", () => {
    const pr = detail({ mergeability: "conflicting" });
    expect(canPerformPullRequestAction(pr, "merge")).toBe(false);
    expect(mergeUnavailableReason(pr, true, GITHUB)).toContain("conflicts");
  });

  it("names the change request with its host's term", () => {
    expect(pullRequestActionLabel("close", GITHUB)).toBe("Close pull request");
    expect(pullRequestActionLabel("close", GITLAB)).toBe("Close merge request");
    expect(pullRequestActionLabel("revert", GITLAB)).toBe("Create revert merge request");
    expect(mergeUnavailableReason(detail({ state: "merged" }), true, GITLAB)).toBe(
      "This merge request has been merged.",
    );
  });
});

describe("mobile change request labels", () => {
  it("names Gerrit's actions the way Gerrit does", () => {
    expect(changeRequestActionTitle("gerrit", "merge")).toBe("Submit change");
    expect(changeRequestActionTitle("gerrit", "close")).toBe("Abandon change");
    expect(changeRequestActionTitle("gerrit", "reopen")).toBe("Restore change");
    expect(changeRequestActionTitle("gerrit", "update-branch")).toBe("Rebase");
  });

  it("leaves other hosts on the generic GitHub wording", () => {
    expect(changeRequestActionTitle("github", "merge")).toBe("Merge pull request");
    expect(changeRequestActionTitle(null, "close")).toBe("Close pull request");
    expect(changeRequestActionTitle(undefined, "reopen")).toBe("Reopen pull request");
  });

  it("labels Gerrit's confirmation copy", () => {
    expect(changeRequestLabels("gerrit").mergeConfirm).toBe("Submit change?");
    expect(changeRequestLabels("gerrit").closeBody).toBe(
      "Abandon this change without submitting it?",
    );
    expect(changeRequestLabels("github").close).toBe("Close pull request");
  });

  it("recovers Gerrit's host name where no client definition is registered", () => {
    expect(changeRequestHostLabel("gerrit")).toBe("Gerrit");
    expect(changeRequestHostLabel("github")).toBe("GitHub");
  });
});
