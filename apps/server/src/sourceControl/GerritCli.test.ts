import { assert, afterEach, describe, expect, it, vi } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { ChildProcessSpawner } from "effect/process";

import { VcsProcessExitError, VcsProcessSpawnError } from "@t3tools/contracts";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as GerritCli from "./GerritCli.ts";

const REMOTE = "origin\tssh://nfisher@review.example.com:29418/tools/admin (fetch)";
const STATS = JSON.stringify({ type: "stats", rowCount: 0, moreChanges: false });

const mockedRun = vi.fn<VcsProcess.VcsProcess["Service"]["run"]>();
const layer = it.layer(
  GerritCli.layer.pipe(Layer.provide(Layer.mock(VcsProcess.VcsProcess)({ run: mockedRun }))),
);

function output(stdout: string): VcsProcess.VcsProcessOutput {
  return {
    exitCode: ChildProcessSpawner.ExitCode(0),
    stdout,
    stderr: "",
    stdoutTruncated: false,
    stderrTruncated: false,
  };
}

afterEach(() => {
  mockedRun.mockReset();
});

describe("quoteRemoteArgument", () => {
  it("wraps a value in single quotes and escapes embedded ones", () => {
    expect(GerritCli.quoteRemoteArgument("project:a/b status:open")).toBe(
      "'project:a/b status:open'",
    );
    expect(GerritCli.quoteRemoteArgument("it's")).toBe(`'it'\\''s'`);
  });
});

describe("parseGerritRemote", () => {
  it("reads the user, host and port an ssh remote names", () => {
    expect(
      GerritCli.parseGerritRemote("ssh://nfisher@review.example.com:29418/tools/admin"),
    ).toEqual({ user: "nfisher", host: "review.example.com", port: "29418" });
    expect(GerritCli.parseGerritRemote("nfisher@review.example.com:29418/tools/admin")).toEqual({
      user: "nfisher",
      host: "review.example.com",
      port: "29418",
    });
    // An ssh alias carries no port; ssh's own config resolves it.
    expect(GerritCli.parseGerritRemote("review-alias:tools/admin")).toEqual({
      user: null,
      host: "review-alias",
      port: null,
    });
    expect(GerritCli.parseGerritRemote("https://review.example.com/tools/admin")).toEqual({
      user: null,
      host: "review.example.com",
      port: null,
    });
  });
});

layer("GerritCli.layer", (it) => {
  it.effect("runs a read-only query over ssh, taking the connection from the remote", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        Effect.succeed(output(request.command === "git" ? REMOTE : STATS)),
      );
      const cli = yield* GerritCli.GerritCli;
      const page = yield* cli.queryChanges({
        cwd: "/one",
        host: "review.example.com",
        search: "project:tools/admin status:open owner:self",
        limit: 20,
        start: 40,
        files: true,
      });

      assert.deepStrictEqual(page.changes, []);
      const ssh = mockedRun.mock.calls.map(([request]) => request).find((r) => r.command === "ssh");
      expect(ssh?.args).toEqual([
        "-o",
        "BatchMode=yes",
        "-o",
        "ConnectTimeout=15",
        "-p",
        "29418",
        "-l",
        "nfisher",
        "review.example.com",
        "gerrit",
        "query",
        "--format=JSON",
        "--current-patch-set",
        "--files",
        "--start",
        "40",
        "'project:tools/admin status:open owner:self limit:20'",
      ]);
    }),
  );

  it.effect("omits the port when the remote does not name one", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        Effect.succeed(
          output(request.command === "git" ? "origin\treview-alias:tools/admin (fetch)" : STATS),
        ),
      );
      const cli = yield* GerritCli.GerritCli;
      yield* cli.queryChanges({ cwd: "/two", host: "review-alias", search: "change:1" });
      const ssh = mockedRun.mock.calls.map(([request]) => request).find((r) => r.command === "ssh");
      expect(ssh?.args).not.toContain("-p");
      expect(ssh?.args).not.toContain("-l");
    }),
  );

  it.effect("answers the viewer from the remote's user", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation(() => Effect.succeed(output(REMOTE)));
      const cli = yield* GerritCli.GerritCli;
      assert.strictEqual(yield* cli.viewer("/three"), "nfisher");
    }),
  );

  it.effect("maps a refused key to an authentication error", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        request.command === "git"
          ? Effect.succeed(output(REMOTE))
          : Effect.fail(
              new VcsProcessExitError({
                operation: "GerritCli.query",
                command: "ssh",
                cwd: "/four",
                exitCode: 255,
                detail: "nfisher@review.example.com: Permission denied (publickey).",
                failureKind: "authentication",
              }),
            ),
      );
      const cli = yield* GerritCli.GerritCli;
      const error = yield* cli
        .queryChanges({ cwd: "/four", host: "review.example.com", search: "change:1" })
        .pipe(Effect.flip);
      assert.instanceOf(error, GerritCli.GerritCliAuthenticationError);
    }),
  );

  it.effect("maps a missing ssh binary to an unavailable error", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        request.command === "git"
          ? Effect.succeed(output(REMOTE))
          : Effect.fail(
              new VcsProcessSpawnError({
                operation: "GerritCli.query",
                command: "ssh",
                cwd: "/five",
                cause: new Error("spawn ssh ENOENT"),
              }),
            ),
      );
      const cli = yield* GerritCli.GerritCli;
      const error = yield* cli
        .queryChanges({ cwd: "/five", host: "review.example.com", search: "change:1" })
        .pipe(Effect.flip);
      assert.instanceOf(error, GerritCli.GerritCliUnavailableError);
    }),
  );

  it.effect("sends a review with a quoted message, a label and a verb", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        Effect.succeed(output(request.command === "git" ? REMOTE : "")),
      );
      const cli = yield* GerritCli.GerritCli;
      yield* cli.review({
        cwd: "/six",
        host: "review.example.com",
        change: 1234,
        patchSet: 1,
        message: "looks good to me",
        labels: { "Code-Review": 2 },
        action: "submit",
      });

      const ssh = mockedRun.mock.calls.map(([request]) => request).find((r) => r.command === "ssh");
      expect(ssh?.args.slice(ssh.args.indexOf("gerrit"))).toEqual([
        "gerrit",
        "review",
        "--message",
        "'looks good to me'",
        "--label",
        "Code-Review=2",
        "--submit",
        "1234,1",
      ]);
    }),
  );

  it.effect("pipes a ReviewInput to gerrit review --json", () =>
    Effect.gen(function* () {
      mockedRun.mockImplementation((request) =>
        Effect.succeed(output(request.command === "git" ? REMOTE : "")),
      );
      const cli = yield* GerritCli.GerritCli;
      const review = { message: "hi", comments: { "a.js": [{ line: 1, message: "x" }] } };
      yield* cli.reviewJson({
        cwd: "/seven",
        host: "review.example.com",
        change: 1234,
        patchSet: 1,
        review,
      });

      const ssh = mockedRun.mock.calls.map(([request]) => request).find((r) => r.command === "ssh");
      expect(ssh?.args.slice(ssh.args.indexOf("gerrit"))).toEqual([
        "gerrit",
        "review",
        "--json",
        "1234,1",
      ]);
      expect(ssh?.stdin).toBe('{"message":"hi","comments":{"a.js":[{"line":1,"message":"x"}]}}');
    }),
  );
});
