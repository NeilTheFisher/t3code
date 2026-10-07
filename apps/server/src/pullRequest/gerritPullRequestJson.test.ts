import * as Result from "effect/Result";
import { describe, expect, it } from "vite-plus/test";

import {
  decodeGerritQueryOutput,
  gerritActivityFromRecord,
  gerritChangeFromRecord,
  gerritChangeUrl,
  gerritDetailFromRecord,
  gerritEpochToIso,
  gerritStateToChangeRequestState,
} from "./gerritPullRequestJson.ts";

/** Shaped after a real `gerrit query --format=JSON --current-patch-set --files ...` record. */
function changeRecord(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    project: "summit/web/bin/spotlight/router",
    branch: "develop",
    id: "I55888afb4d937be39833ff447d0de56a5283ba8d",
    number: 86140,
    subject: "fix clients left unserved when joining an event",
    owner: { name: "Neil Fisher", email: "nfisher@summit-tech.ca", username: "nfisher" },
    url: "https://yul01dvlscm01.summit-tech.org/c/summit/web/bin/spotlight/router/+/86140",
    commitMessage: "fix clients left unserved\n\nA longer explanation.\n",
    hashtags: [],
    createdOn: 1791317326,
    lastUpdated: 1791320504,
    open: false,
    status: "MERGED",
    comments: [
      {
        timestamp: 1791317326,
        reviewer: { name: "Neil Fisher", username: "nfisher" },
        message: "Uploaded patch set 1.",
      },
      {
        timestamp: 1791320240,
        reviewer: { name: "Polina Aniskina", username: "paniskina" },
        message: "Patch Set 2: Code-Review+2",
      },
    ],
    currentPatchSet: {
      number: 2,
      revision: "d927546a63cb29714075c0799ccdf1c924b771e6",
      ref: "refs/changes/40/86140/2",
      createdOn: 1791317339,
      author: { name: "Neil Fisher", username: "nfisher" },
      files: [
        { file: "/COMMIT_MSG", type: "ADDED", insertions: 16, deletions: 0 },
        { file: "src/app/event.ts", type: "MODIFIED", insertions: 1, deletions: 0 },
        // Gerrit reports deletions as a negative count.
        { file: "src/app/router.ts", type: "MODIFIED", insertions: 95, deletions: -39 },
      ],
      approvals: [
        {
          type: "Code-Review",
          value: "2",
          grantedOn: 1791320240,
          by: { name: "Polina Aniskina", username: "paniskina" },
        },
        {
          type: "Verified",
          value: "1",
          grantedOn: 1791317557,
          by: { name: "Concourse CI", username: "concourse-ci" },
        },
      ],
    },
    ...overrides,
  };
}

const stats = (moreChanges: boolean) =>
  JSON.stringify({ type: "stats", rowCount: 1, runTimeMilliseconds: 5, moreChanges });

describe("decodeGerritQueryOutput", () => {
  it("splits change records from the trailing stats record", () => {
    const raw = [JSON.stringify(changeRecord()), stats(false)].join("\n");
    const decoded = decodeGerritQueryOutput(raw);
    expect(Result.isSuccess(decoded)).toBe(true);
    if (!Result.isSuccess(decoded)) return;
    expect(decoded.success.changes).toHaveLength(1);
    expect(decoded.success.moreChanges).toBe(false);
  });

  it("lifts the continuation flag out of the stats record", () => {
    const decoded = decodeGerritQueryOutput(
      [JSON.stringify(changeRecord()), stats(true)].join("\n"),
    );
    expect(Result.isSuccess(decoded)).toBe(true);
    if (!Result.isSuccess(decoded)) return;
    expect(decoded.success.moreChanges).toBe(true);
  });

  it("drops a malformed line rather than failing the whole answer", () => {
    const decoded = decodeGerritQueryOutput(
      ["not json", JSON.stringify(changeRecord({ number: 86141 })), stats(false)].join("\n"),
    );
    expect(Result.isSuccess(decoded)).toBe(true);
    if (!Result.isSuccess(decoded)) return;
    expect(decoded.success.changes.map((change) => change.number)).toEqual([86141]);
  });

  it("answers with no changes when Gerrit matched nothing", () => {
    const decoded = decodeGerritQueryOutput(stats(false));
    expect(Result.isSuccess(decoded)).toBe(true);
    if (!Result.isSuccess(decoded)) return;
    expect(decoded.success.changes).toEqual([]);
  });
});

describe("gerritStateToChangeRequestState", () => {
  it("maps Gerrit's statuses onto the contract's three states", () => {
    expect(gerritStateToChangeRequestState("NEW")).toBe("open");
    expect(gerritStateToChangeRequestState("MERGED")).toBe("merged");
    expect(gerritStateToChangeRequestState("ABANDONED")).toBe("closed");
    expect(gerritStateToChangeRequestState("SOMETHING_NEW")).toBe("open");
  });
});

describe("gerritEpochToIso", () => {
  it("converts Unix seconds to second-precision UTC ISO", () => {
    expect(gerritEpochToIso(1791320504)).toBe("2026-10-06T21:01:44Z");
    expect(gerritEpochToIso(null)).toBeNull();
    expect(gerritEpochToIso(undefined)).toBeNull();
  });
});

describe("gerritChangeFromRecord", () => {
  it("normalises a change record", () => {
    const change = gerritChangeFromRecord("yul01dvlscm01.summit-tech.org", changeRecord() as never);
    expect(change).toEqual({
      number: 86140,
      title: "fix clients left unserved when joining an event",
      state: "merged",
      isDraft: false,
      createdAt: "2026-10-06T20:08:46Z",
      updatedAt: "2026-10-06T21:01:44Z",
      mergedAt: "2026-10-06T21:01:44Z",
      closedAt: null,
      owner: { login: "nfisher", name: "Neil Fisher" },
      baseBranch: "develop",
      headRef: "refs/changes/40/86140/2",
      project: "summit/web/bin/spotlight/router",
      changeId: "I55888afb4d937be39833ff447d0de56a5283ba8d",
      url: "https://yul01dvlscm01.summit-tech.org/c/summit/web/bin/spotlight/router/+/86140",
    });
  });

  it("flags a work-in-progress change as a draft", () => {
    const change = gerritChangeFromRecord(
      "review.example.com",
      changeRecord({ status: "NEW", open: true, wip: true, number: 5 }) as never,
    );
    expect(change?.isDraft).toBe(true);
    expect(change?.state).toBe("open");
  });

  it("drops a record with only identity fields", () => {
    expect(
      gerritChangeFromRecord("review.example.com", { project: "p", branch: "main" } as never),
    ).toBeNull();
  });
});

describe("gerritDetailFromRecord", () => {
  it("sums real files and reads the commit message as the body", () => {
    const detail = gerritDetailFromRecord("yul01dvlscm01.summit-tech.org", changeRecord() as never);
    expect(detail?.body).toBe("fix clients left unserved\n\nA longer explanation.\n");
    // /COMMIT_MSG is not a change the reader made.
    expect(detail?.changedFiles).toBe(2);
    expect(detail?.additions).toBe(96);
    expect(detail?.deletions).toBe(39);
    expect(detail?.mergedAt).toBe("2026-10-06T21:01:44Z");
    expect(detail?.closedAt).toBeNull();
    expect(detail?.reviewers).toEqual([
      { login: "paniskina", name: "Polina Aniskina" },
      { login: "concourse-ci", name: "Concourse CI" },
    ]);
  });
});

describe("gerritActivityFromRecord", () => {
  it("reads the change messages, oldest first", () => {
    const activity = gerritActivityFromRecord(changeRecord() as never);
    expect(activity.comments.map((comment) => comment.body)).toEqual([
      "Uploaded patch set 1.",
      "Patch Set 2: Code-Review+2",
    ]);
    expect(activity.comments[0]).toMatchObject({
      kind: "issue-comment",
      author: { login: "nfisher", name: "Neil Fisher" },
      createdAt: "2026-10-06T20:08:46Z",
    });
  });

  it("reads inline comments from patch sets as review comments", () => {
    const activity = gerritActivityFromRecord(
      changeRecord({
        comments: [],
        patchSets: [
          {
            number: 1,
            comments: [
              {
                timestamp: 1791320000,
                reviewer: { username: "nfisher" },
                message: "inline note",
                path: "src/app/router.ts",
                line: 12,
              },
            ],
          },
        ],
      }) as never,
    );
    expect(activity.comments).toEqual([
      expect.objectContaining({
        kind: "review-comment",
        body: "inline note",
        path: "src/app/router.ts",
        line: 12,
      }),
    ]);
  });
});

describe("gerritChangeUrl", () => {
  it("builds the /c/{project}/+/{number} web URL", () => {
    expect(
      gerritChangeUrl("yul01dvlscm01.summit-tech.org", "summit/web/bin/spotlight/router", 86140),
    ).toBe("https://yul01dvlscm01.summit-tech.org/c/summit/web/bin/spotlight/router/+/86140");
  });
});
