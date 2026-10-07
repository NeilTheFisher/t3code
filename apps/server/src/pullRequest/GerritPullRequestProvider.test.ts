import { assert, describe, expect, it, vi } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { ChildProcessSpawner } from "effect/process";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as GerritCli from "../sourceControl/GerritCli.ts";
import * as GerritRestApi from "../sourceControl/GerritRestApi.ts";
import { make } from "./GerritPullRequestProvider.ts";

function changeRecord(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    project: "tools/admin",
    branch: "main",
    id: "Iabc",
    number: 1234,
    subject: "Add gerrit support",
    owner: { name: "Neil Fisher", email: "nfisher@example.com", username: "nfisher" },
    url: "https://review.example.com/c/tools/admin/+/1234",
    commitMessage: "Add gerrit support\n\nDetails.\n",
    createdOn: 1791317326,
    lastUpdated: 1791320504,
    open: true,
    status: "NEW",
    currentPatchSet: {
      number: 1,
      revision: "rev1",
      ref: "refs/changes/34/1234/1",
      parents: ["parent1"],
      files: [
        { file: "/COMMIT_MSG", type: "ADDED", insertions: 3, deletions: 0 },
        { file: "a.js", type: "MODIFIED", insertions: 12, deletions: -2 },
      ],
      approvals: [
        { type: "Code-Review", value: "1", by: { username: "areviewer", name: "A Reviewer" } },
      ],
    },
    ...overrides,
  };
}

type QueryChanges = GerritCli.GerritCli["Service"]["queryChanges"];
type Review = GerritCli.GerritCli["Service"]["review"];
type ReviewJson = GerritCli.GerritCli["Service"]["reviewJson"];
type UpdateMessage = GerritRestApi.GerritRestApi["Service"]["updateMessage"];
type ListFiles = GerritRestApi.GerritRestApi["Service"]["listFiles"];
type SetFileReviewed = GerritRestApi.GerritRestApi["Service"]["setFileReviewed"];
type ListReviewers = GerritRestApi.GerritRestApi["Service"]["listReviewers"];
type SearchAccounts = GerritRestApi.GerritRestApi["Service"]["searchAccounts"];

function page(...changes: ReadonlyArray<Record<string, unknown>>) {
  return { changes: changes as never, moreChanges: false };
}

function output(stdout: string, code = 0): VcsProcess.VcsProcessOutput {
  return {
    exitCode: ChildProcessSpawner.ExitCode(code),
    stdout,
    stderr: "",
    stdoutTruncated: false,
    stderrTruncated: false,
  };
}

function makeProvider(input: {
  readonly queryChanges: QueryChanges;
  readonly review?: Review;
  readonly reviewJson?: ReviewJson;
  readonly updateMessage?: UpdateMessage;
  readonly listFiles?: ListFiles;
  readonly setFileReviewed?: SetFileReviewed;
  readonly listReviewers?: ListReviewers;
  readonly searchAccounts?: SearchAccounts;
  readonly run?: VcsProcess.VcsProcess["Service"]["run"];
}) {
  return make.pipe(
    Effect.provide(
      Layer.mergeAll(
        Layer.mock(VcsProcess.VcsProcess)({
          run: input.run ?? (() => Effect.succeed(output(""))),
        }),
        Layer.mock(GerritCli.GerritCli)({
          viewer: () => Effect.succeed("nfisher"),
          queryChanges: input.queryChanges,
          review: input.review ?? (() => Effect.void),
          reviewJson: input.reviewJson ?? (() => Effect.void),
        }),
        Layer.mock(GerritRestApi.GerritRestApi)({
          listComments: () => Effect.succeed([]),
          listFiles: input.listFiles ?? (() => Effect.succeed([])),
          listReviewers: input.listReviewers ?? (() => Effect.succeed([])),
          postReview: () => Effect.void,
          searchAccounts: input.searchAccounts ?? (() => Effect.succeed([])),
          setFileReviewed: input.setFileReviewed ?? (() => Effect.void),
          setReviewer: () => Effect.void,
          updateMessage: input.updateMessage ?? (() => Effect.void),
        }),
      ),
    ),
  );
}

const changeRef = {
  cwd: "/w",
  repository: "tools/admin",
  host: "review.example.com",
  number: 1234,
};

const listInput = {
  cwd: "/w",
  repository: "tools/admin",
  host: "review.example.com",
  state: "open" as const,
  involvement: "authored" as const,
  viewer: "nfisher",
  limit: 99,
};

describe("listing changes", () => {
  it.effect("builds Gerrit's own query and maps the rows onto provider change requests", () => {
    const queryChanges = vi.fn<QueryChanges>(() => Effect.succeed(page(changeRecord())));
    return Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges });
      const result = yield* provider.listChangeRequests(listInput);

      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({
          search: "project:tools/admin status:open owner:self",
          start: 0,
          limit: 99,
        }),
      );
      expect(result.items).toEqual([
        expect.objectContaining({
          number: 1234,
          title: "Add gerrit support",
          url: "https://review.example.com/c/tools/admin/+/1234",
          author: { login: "nfisher", name: "Neil Fisher", avatarUrl: null },
          baseBranch: "main",
          headBranch: "refs/changes/34/1234/1",
          state: "open",
          isDraft: false,
          mergeability: "unknown",
          labels: [],
        }),
      ]);
      expect(result.continues).toBe(true);
    });
  });

  it.effect("uses the delivered cursor as Gerrit's start offset", () => {
    const queryChanges = vi.fn<QueryChanges>(() => Effect.succeed(page()));
    return Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges });
      yield* provider.listChangeRequests({
        ...listInput,
        state: "merged",
        involvement: "all",
        cursor: { updatedBefore: "2026-01-01T00:00:00Z", delivered: 40 },
      });
      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({ search: "project:tools/admin status:merged", start: 40 }),
      );
    });
  });

  it.effect("appends free text to the Gerrit query", () => {
    const queryChanges = vi.fn<QueryChanges>(() => Effect.succeed(page()));
    return Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges });
      yield* provider.listChangeRequests({ ...listInput, query: "fix login" });
      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({
          search: "project:tools/admin status:open owner:self fix login",
        }),
      );
    });
  });
});

describe("reading a detail", () => {
  it.effect("folds files and approvals into the detail the panel renders", () =>
    Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page(changeRecord())),
      });
      const detail = yield* provider.getChangeRequest(changeRef);

      expect(detail).toEqual(
        expect.objectContaining({
          body: "Add gerrit support\n\nDetails.\n",
          additions: 12,
          deletions: 2,
          changedFiles: 1,
          reviewers: [{ login: "areviewer", name: "A Reviewer", avatarUrl: null }],
          mergeCapabilities: { merge: true, squash: false, rebase: false },
        }),
      );
    }),
  );

  it.effect("reports a change Gerrit does not have as not-found", () =>
    Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges: () => Effect.succeed(page()) });
      const error = yield* provider.getChangeRequest(changeRef).pipe(Effect.flip);
      assert.equal(error.reason, "not-found");
    }),
  );
});

describe("checks", () => {
  it.effect("maps Code-Review and Verified votes onto one check per reviewer per label", () => {
    const queryChanges = () =>
      Effect.succeed(
        page(
          changeRecord({
            currentPatchSet: {
              number: 1,
              revision: "rev1",
              ref: "refs/changes/34/1234/1",
              approvals: [
                { type: "Code-Review", value: "2", by: { username: "areviewer" } },
                { type: "Verified", value: "1", by: { username: "ci-bot" } },
                { type: "Verified", value: "-1", by: { username: "skeptic" } },
                { type: "Verified", value: "0", by: { username: "neutral" } },
                { type: "Verified", value: "1", by: { username: "ci-bot" } },
              ],
            },
          }),
        ),
      );
    return Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges });
      const read = provider.getChangeRequestChecks;
      if (read === undefined) return yield* Effect.die("checks read missing");
      const result = yield* read(changeRef);
      expect(result).toEqual({
        state: "open",
        checks: [
          { name: "areviewer · Code-Review", status: "success", description: null, url: null },
          { name: "ci-bot · Verified", status: "success", description: null, url: null },
          { name: "skeptic · Verified", status: "failure", description: null, url: null },
          { name: "neutral · Verified", status: "pending", description: null, url: null },
        ],
      });
    });
  });
});

describe("viewed files", () => {
  it.effect("reports only the files Gerrit marked reviewed", () => {
    const listFiles = () =>
      Effect.succeed([
        { path: "a.js", reviewed: true },
        { path: "b.js", reviewed: false },
      ]);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page()),
        listFiles,
      });
      const result = yield* provider.getFilesViewed!(changeRef);
      expect(result).toEqual({ files: [{ path: "a.js", state: "viewed" }], truncated: false });
    });
  });

  it.effect("puts each file's mark through one REST call", () => {
    const setFileReviewed = vi.fn<SetFileReviewed>(() => Effect.void);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page()),
        setFileReviewed,
      });
      yield* provider.setFilesViewed!({
        ...changeRef,
        files: [
          { path: "a.js", viewed: true },
          { path: "b.js", viewed: false },
        ],
      });
      expect(setFileReviewed).toHaveBeenNthCalledWith(1, {
        host: "review.example.com",
        username: "nfisher",
        change: 1234,
        path: "a.js",
        reviewed: true,
      });
      expect(setFileReviewed).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({ path: "b.js", reviewed: false }),
      );
    });
  });
});

describe("reviewer candidates", () => {
  it.effect("marks whoever Gerrit already has as a reviewer", () => {
    const searchAccounts = () =>
      Effect.succeed([
        { accountId: 7, username: "reviewer1", name: "R One" },
        { accountId: 8, username: "reviewer2", name: "R Two" },
      ]);
    const listReviewers = () =>
      Effect.succeed([{ accountId: 7, username: "reviewer1", name: "R One" }]);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page()),
        searchAccounts,
        listReviewers,
      });
      const result = yield* provider.listReviewerCandidates(changeRef);
      expect(result.candidates).toEqual([
        expect.objectContaining({ id: "7", isRequested: true }),
        expect.objectContaining({ id: "8", isRequested: false }),
      ]);
    });
  });
});

describe("reading activity", () => {
  it.effect("reads change messages and inline comments", () =>
    Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () =>
          Effect.succeed(
            page(
              changeRecord({
                comments: [
                  {
                    timestamp: 1791317326,
                    reviewer: { username: "nfisher", name: "Neil Fisher" },
                    message: "Uploaded patch set 1.",
                  },
                ],
                patchSets: [
                  {
                    number: 1,
                    comments: [
                      {
                        timestamp: 1791320000,
                        reviewer: { username: "areviewer" },
                        message: "inline note",
                        path: "a.js",
                        line: 4,
                      },
                    ],
                  },
                ],
              }),
            ),
          ),
      });
      const activity = yield* provider.getChangeRequestActivity(changeRef);

      expect(activity.commentCount).toBe(2);
      expect(activity.comments.map((comment) => comment.kind)).toEqual([
        "issue-comment",
        "review-comment",
      ]);
      expect(activity.comments[1]).toMatchObject({ path: "a.js", body: "inline note" });
    }),
  );
});

describe("diff", () => {
  it.effect("fetches the change ref and returns the patch", () => {
    const run = vi.fn<VcsProcess.VcsProcess["Service"]["run"]>((request) =>
      Effect.succeed(output(request.args[0] === "diff" ? "diff --git a/a.js b/a.js\n" : "")),
    );
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page(changeRecord())),
        run,
      });
      const diff = yield* provider.getDiff(changeRef);

      expect(run).toHaveBeenCalledWith(
        expect.objectContaining({
          args: ["fetch", "origin", "refs/changes/34/1234/1:refs/t3-gerrit/1234/1"],
        }),
      );
      expect(diff.patch).toContain("diff --git a/a.js b/a.js");
      expect(diff.nextCursor).toBeNull();
    });
  });
});

describe("writing", () => {
  it.effect("posts a cover comment through gerrit review", () => {
    const review = vi.fn<Review>(() => Effect.void);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page(changeRecord())),
        review,
      });
      yield* provider.comment({ ...changeRef, body: "LGTM" });
      expect(review).toHaveBeenCalledWith({
        cwd: "/w",
        host: "review.example.com",
        change: 1234,
        patchSet: 1,
        message: "LGTM",
      });
    });
  });

  it.effect("sends a verdict and its inline comments as a ReviewInput", () => {
    const reviewJson = vi.fn<ReviewJson>(() => Effect.void);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page(changeRecord())),
        reviewJson,
      });
      yield* provider.submitReview({
        ...changeRef,
        verdict: "approve",
        body: "nice",
        comments: [
          {
            path: "a.js",
            position: { kind: "added", newLine: 4 },
            body: "inline note",
          },
        ],
      });
      expect(reviewJson).toHaveBeenCalledWith({
        cwd: "/w",
        host: "review.example.com",
        change: 1234,
        patchSet: 1,
        review: {
          message: "nice",
          labels: { "Code-Review": 2 },
          comments: { "a.js": [{ line: 4, side: "REVISION", message: "inline note" }] },
        },
      });
    });
  });

  it.effect("maps a merge onto Gerrit's submit", () => {
    const review = vi.fn<Review>(() => Effect.void);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () => Effect.succeed(page(changeRecord())),
        review,
      });
      yield* provider.runAction({ ...changeRef, action: "merge" });
      expect(review).toHaveBeenCalledWith(expect.objectContaining({ action: "submit" }));
    });
  });

  it.effect("rewrites the description, keeping the Change-Id trailer", () => {
    const updateMessage = vi.fn<UpdateMessage>(() => Effect.void);
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        queryChanges: () =>
          Effect.succeed(
            page(
              changeRecord({
                commitMessage: "Old subject\n\nOld body.\n\nChange-Id: Iabc123\n",
              }),
            ),
          ),
        updateMessage,
      });
      yield* provider.updateChangeRequest!({
        ...changeRef,
        title: "New subject",
        body: "New body.",
      });
      expect(updateMessage).toHaveBeenCalledWith({
        host: "review.example.com",
        username: "nfisher",
        change: 1234,
        message: "New subject\n\nNew body.\n\nChange-Id: Iabc123\n",
      });
    });
  });
});

describe("capabilities", () => {
  it.effect("declares the read and write surface Gerrit exposes", () =>
    Effect.gen(function* () {
      const provider = yield* makeProvider({ queryChanges: () => Effect.succeed(page()) });
      expect(provider.capabilities).toMatchObject({
        diff: true,
        comment: true,
        actions: ["merge", "close", "reopen", "update-branch"],
        search: true,
        viewedFiles: "host",
        review: {
          inlineComment: true,
          reply: true,
          resolve: true,
          verdicts: ["comment", "approve", "request-changes"],
        },
        edit: { changeRequest: true, comment: false },
        reactions: false,
        reviewers: { request: true, listCandidates: true },
      });
    }),
  );
});
