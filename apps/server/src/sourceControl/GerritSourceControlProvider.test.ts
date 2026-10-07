import { afterEach, describe, expect, it, vi } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { ChildProcessSpawner } from "effect/process";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as GerritCli from "./GerritCli.ts";
import * as GerritSourceControlProvider from "./GerritSourceControlProvider.ts";
import type { SourceControlProviderContext } from "./SourceControlProvider.ts";

const CHANGE_ID = "I55888afb4d937be39833ff447d0de56a5283ba8d";

function changeRecord(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    project: "summit/web/bin/spotlight/router",
    branch: "develop",
    id: CHANGE_ID,
    number: 86140,
    subject: "fix clients left unserved",
    owner: { name: "Neil Fisher", username: "nfisher" },
    url: "https://yul01dvlscm01.summit-tech.org/c/summit/web/bin/spotlight/router/+/86140",
    createdOn: 1791317326,
    lastUpdated: 1791320504,
    status: "NEW",
    ...overrides,
  };
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

const context = {
  provider: {
    kind: "gerrit",
    name: "Gerrit",
    baseUrl: "https://yul01dvlscm01.summit-tech.org",
  },
  remoteName: "origin",
  remoteUrl: "ssh://nfisher@yul01dvlscm01.summit-tech.org:29418/summit/web/bin/spotlight/router",
} satisfies SourceControlProviderContext;

afterEach(() => {
  vi.clearAllMocks();
});

/** `logs` answers per branch (`git log -1 … <branch>`); a missing ref fails like git would. */
function makeProvider(input: {
  readonly logs: (branch: string) => string | null;
  readonly queryChanges: GerritCli.GerritCli["Service"]["queryChanges"];
}) {
  const run = vi.fn((request: VcsProcess.VcsProcessInput) => {
    const branch = String(request.args[3] ?? "");
    const log = input.logs(branch);
    return Effect.succeed(log === null ? output("", 128) : output(log));
  });
  return GerritSourceControlProvider.make.pipe(
    Effect.provide(
      Layer.mergeAll(
        Layer.mock(VcsProcess.VcsProcess)({ run }),
        Layer.mock(GerritCli.GerritCli)({
          viewer: () => Effect.succeed("nfisher"),
          queryChanges: input.queryChanges,
        }),
      ),
    ),
  );
}

describe("GerritSourceControlProvider.listChangeRequests", () => {
  it.effect("finds the change behind a branch's Change-Id and maps it for discovery", () => {
    const queryChanges = vi.fn<GerritCli.GerritCli["Service"]["queryChanges"]>(() =>
      Effect.succeed({ changes: [changeRecord() as never], moreChanges: false }),
    );
    return Effect.gen(function* () {
      const provider = yield* makeProvider({
        logs: () => `abc123\nfix clients\n\nChange-Id: ${CHANGE_ID}\n`,
        queryChanges,
      });
      const changes = yield* provider.listChangeRequests({
        cwd: "/repo",
        context,
        headSelector: "fix/early-kick-before-connected",
        state: "open",
        limit: 1,
      });

      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({
          host: "yul01dvlscm01.summit-tech.org",
          search: `change:${CHANGE_ID} status:open`,
        }),
      );
      expect(changes).toEqual([
        expect.objectContaining({
          provider: "gerrit",
          number: 86140,
          // Gerrit has no source branch, so the branch the caller asked about is what the
          // head-context match reads.
          headRefName: "fix/early-kick-before-connected",
          baseRefName: "develop",
          headRepositoryNameWithOwner: "summit/web/bin/spotlight/router",
          isCrossRepository: false,
          state: "open",
        }),
      ]);
    });
  });

  it.effect("leaves the status unnarrowed when every state is asked for", () =>
    Effect.gen(function* () {
      const queryChanges = vi.fn<GerritCli.GerritCli["Service"]["queryChanges"]>(() =>
        Effect.succeed({ changes: [], moreChanges: false }),
      );
      const provider = yield* makeProvider({
        logs: () => `abc123\nfix clients\n\nChange-Id: ${CHANGE_ID}\n`,
        queryChanges,
      });
      yield* provider.listChangeRequests({
        cwd: "/repo",
        context,
        headSelector: "fix/early-kick-before-connected",
        state: "all",
        limit: 1,
      });
      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({ search: `change:${CHANGE_ID}` }),
      );
    }),
  );

  it.effect("falls back to the commit hash when the message has no Change-Id", () =>
    Effect.gen(function* () {
      const queryChanges = vi.fn<GerritCli.GerritCli["Service"]["queryChanges"]>(() =>
        Effect.succeed({ changes: [], moreChanges: false }),
      );
      const provider = yield* makeProvider({ logs: () => "abc123\nfix clients\n", queryChanges });
      yield* provider.listChangeRequests({
        cwd: "/repo",
        context,
        headSelector: "fix/early-kick-before-connected",
        state: "open",
        limit: 1,
      });
      expect(queryChanges).toHaveBeenCalledWith(
        expect.objectContaining({ search: "commit:abc123 status:open" }),
      );
    }),
  );

  it.effect("falls back to the worktree HEAD when the asked-for branch holds no change", () =>
    Effect.gen(function* () {
      // The branch tracks `develop`, whose tip is not the change; the checked-out branch is.
      const queryChanges = vi.fn<GerritCli.GerritCli["Service"]["queryChanges"]>((input) =>
        Effect.succeed(
          input.search.startsWith(`change:${CHANGE_ID}`)
            ? { changes: [changeRecord() as never], moreChanges: false }
            : { changes: [], moreChanges: false },
        ),
      );
      const provider = yield* makeProvider({
        logs: (branch) =>
          branch === "HEAD"
            ? `d927546\nfix clients\n\nChange-Id: ${CHANGE_ID}\n`
            : "abc123\nfix clients\n\nChange-Id: I0000000000000000000000000000000000000000\n",
        queryChanges,
      });
      const changes = yield* provider.listChangeRequests({
        cwd: "/repo",
        context,
        headSelector: "develop",
        state: "open",
        limit: 1,
      });
      expect(changes).toEqual([expect.objectContaining({ number: 86140, headRefName: "develop" })]);
    }),
  );
});
