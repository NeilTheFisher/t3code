import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Match from "effect/Match";
import * as Ref from "effect/Ref";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import * as NodeOS from "node:os";

import { type VcsError } from "@t3tools/contracts";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import {
  decodeGerritQueryOutput,
  type GerritChangePage,
} from "../pullRequest/gerritPullRequestJson.ts";

const DEFAULT_TIMEOUT_MS = 60_000;

const gerritCliErrorContext = {
  operation: Schema.String,
  command: Schema.String,
  cwd: Schema.String,
  host: Schema.String,
  cause: Schema.Defect(),
};

export class GerritCliUnavailableError extends Schema.TaggedError<GerritCliUnavailableError>()(
  "GerritCliUnavailableError",
  gerritCliErrorContext,
) {
  get detail(): string {
    return "Secure Shell (`ssh`) is required to read Gerrit but is not available on PATH.";
  }

  override get message(): string {
    return `Gerrit CLI failed in ${this.operation}: ${this.detail}`;
  }
}

export class GerritCliAuthenticationError extends Schema.TaggedError<GerritCliAuthenticationError>()(
  "GerritCliAuthenticationError",
  gerritCliErrorContext,
) {
  get detail(): string {
    return `Gerrit rejected the SSH key for ${this.host}. Add it under a user with read access to the project.`;
  }

  override get message(): string {
    return `Gerrit CLI failed in ${this.operation}: ${this.detail}`;
  }
}

export class GerritCliCommandError extends Schema.TaggedError<GerritCliCommandError>()(
  "GerritCliCommandError",
  gerritCliErrorContext,
) {
  get detail(): string {
    return `Gerrit did not answer the query on ${this.host}.`;
  }

  override get message(): string {
    return `Gerrit CLI failed in ${this.operation}: ${this.detail}`;
  }
}

export class GerritCliDecodeError extends Schema.TaggedError<GerritCliDecodeError>()(
  "GerritCliDecodeError",
  gerritCliErrorContext,
) {
  get detail(): string {
    return "Gerrit returned an unreadable response.";
  }

  override get message(): string {
    return `Gerrit CLI failed in ${this.operation}: ${this.detail}`;
  }
}

export const GerritCliError = Schema.Union([
  GerritCliUnavailableError,
  GerritCliAuthenticationError,
  GerritCliCommandError,
  GerritCliDecodeError,
]);
export type GerritCliError = typeof GerritCliError.Type;

export interface GerritQueryInput {
  readonly cwd: string;
  readonly host: string;
  /** Gerrit's own query grammar, e.g. `project:tools/admin status:open owner:self`. */
  readonly search: string;
  readonly limit?: number;
  readonly start?: number;
  /** All visible patch sets rather than only the current one; inline comments need this. */
  readonly patchSets?: boolean;
  readonly files?: boolean;
  readonly comments?: boolean;
  readonly allApprovals?: boolean;
  readonly commitMessage?: boolean;
}

/** How to reach a review host, read from the project's own remote rather than assumed. */
export interface GerritConnection {
  readonly host: string;
  readonly port: string | null;
  readonly user: string | null;
}

/** One `gerrit review`: a cover message, label votes, and/or a change-moving verb. */
export interface GerritReviewInput {
  readonly cwd: string;
  readonly host: string;
  readonly change: number;
  readonly patchSet: number;
  readonly message?: string;
  readonly labels?: Readonly<Record<string, number>>;
  readonly action?: "submit" | "abandon" | "restore" | "rebase";
}

/** A `gerrit review --json`, whose whole `ReviewInput` travels on stdin. */
export interface GerritReviewJsonInput {
  readonly cwd: string;
  readonly host: string;
  readonly change: number;
  readonly patchSet: number;
  readonly review: unknown;
}

/**
 * Wraps the `gerrit` SSH command line. Everything is read-only: `gerrit query` is the only verb
 * this service exposes, so no code here can change a change request. The connection — host, port
 * and user — is taken from the project's git remote, so a Gerrit on any port works with no
 * configuration; `ssh` falls back to its own config when the remote names neither.
 */
export class GerritCli extends Context.Service<
  GerritCli,
  {
    /** The account the SSH key authenticates as, which is what involvement filters compare to. */
    readonly viewer: (cwd: string) => Effect.Effect<string, GerritCliError>;
    readonly queryChanges: (
      input: GerritQueryInput,
    ) => Effect.Effect<GerritChangePage, GerritCliError>;
    /** The only write this service exposes: `gerrit review` on one patch set. */
    readonly review: (input: GerritReviewInput) => Effect.Effect<void, GerritCliError>;
    /** A `gerrit review --json`, for a review that carries inline comments. */
    readonly reviewJson: (input: GerritReviewJsonInput) => Effect.Effect<void, GerritCliError>;
  }
>()("t3/sourceControl/GerritCli") {}

/** POSIX single-quote quoting, so a query with spaces reaches Gerrit as one argument. */
export function quoteRemoteArgument(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

/** The user, host and port of an SSH remote; null for anything that is not one. */
export function parseGerritRemote(remoteUrl: string): GerritConnection | null {
  const trimmed = remoteUrl.trim();
  if (trimmed.length === 0) return null;
  if (/^[a-z][a-z0-9+.-]*:\/\//iu.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      if (url.hostname.length === 0) return null;
      return { host: url.hostname, port: url.port || null, user: url.username || null };
    } catch {
      return null;
    }
  }
  const scp = /^(?:([^@/\s]+)@)?([^:/\s]+)(?::(\d+))?[:/]/u.exec(trimmed);
  if (scp?.[2] === undefined) return null;
  return { host: scp[2], port: scp[3] ?? null, user: scp[1] ?? null };
}

function remoteArgs(input: GerritQueryInput): ReadonlyArray<string> {
  const args: Array<string> = ["gerrit", "query", "--format=JSON"];
  args.push(input.patchSets === true ? "--patch-sets" : "--current-patch-set");
  if (input.files === true) args.push("--files");
  if (input.comments === true) args.push("--comments");
  if (input.allApprovals === true) args.push("--all-approvals");
  if (input.commitMessage === true) args.push("--commit-message");
  if (input.start !== undefined && input.start > 0) args.push("--start", String(input.start));
  const search =
    input.limit === undefined ? input.search : `${input.search} limit:${String(input.limit)}`;
  args.push(quoteRemoteArgument(search));
  return args;
}

function reviewArgs(input: GerritReviewInput): ReadonlyArray<string> {
  const args: Array<string> = ["gerrit", "review"];
  if (input.message !== undefined && input.message.length > 0) {
    args.push("--message", quoteRemoteArgument(input.message));
  }
  for (const [label, value] of Object.entries(input.labels ?? {})) {
    args.push("--label", `${label}=${value}`);
  }
  if (input.action !== undefined) args.push(`--${input.action}`);
  args.push(`${input.change},${input.patchSet}`);
  return args;
}

interface GerritErrorContext {
  readonly operation: string;
  readonly command: string;
  readonly cwd: string;
  readonly host: string;
}

function classifyVcsError(error: VcsError, input: GerritErrorContext): GerritCliError {
  return Match.valueTags(error, {
    VcsProcessSpawnError: (cause) => new GerritCliUnavailableError({ ...input, cause }),
    VcsProcessExitError: (cause) =>
      cause.failureKind === "authentication"
        ? new GerritCliAuthenticationError({ ...input, cause })
        : new GerritCliCommandError({ ...input, cause }),
    VcsProcessTimeoutError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsProcessStdinWriteError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsProcessOutputReadError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsProcessOutputLimitError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsProcessMissingExitCodeError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsRepositoryDetectionError: (cause) => new GerritCliCommandError({ ...input, cause }),
    VcsUnsupportedOperationError: (cause) => new GerritCliCommandError({ ...input, cause }),
  });
}

/** @public Service construction is part of the canonical Effect module API. */
export const make = Effect.gen(function* () {
  const process = yield* VcsProcess.VcsProcess;
  const connections = yield* Ref.make(new Map<string, GerritConnection | null>());
  const localUser = NodeOS.userInfo().username;

  /** The connection for a checkout, from its remotes; cached because a listing asks per thread. */
  const connectionFor = (cwd: string, host: string): Effect.Effect<GerritConnection | null> =>
    Effect.gen(function* () {
      const key = `${cwd}\u0000${host}`;
      const cached = (yield* Ref.get(connections)).get(key);
      if (cached !== undefined) return cached;
      const output = yield* process
        .run({
          operation: "GerritCli.connection",
          command: "git",
          args: ["remote", "-v"],
          cwd,
          allowNonZeroExit: true,
          timeoutMs: 5_000,
          maxOutputBytes: 32_000,
        })
        .pipe(Effect.orElseSucceed(() => null));
      const remotes =
        output === null || Number(output.exitCode) !== 0
          ? []
          : output.stdout
              .split("\n")
              .map((line) => line.split(/\s+/))
              .filter((parts) => parts[2] === "(fetch)")
              .flatMap((parts) => (parts[1] === undefined ? [] : [parts[1]]))
              .flatMap((url) => {
                const parsed = parseGerritRemote(url);
                return parsed === null ? [] : [parsed];
              });
      const resolved = remotes.find((remote) => remote.host === host) ?? remotes[0] ?? null;
      yield* Ref.update(connections, (current) => new Map(current).set(key, resolved));
      return resolved;
    });

  /**
   * The account `ssh` authenticates as for a host, which is the remote's own user when it names
   * one and otherwise whatever `~/.ssh/config` resolves `User` to (often the local user, but not
   * always). `ssh -G` prints the effective configuration without connecting.
   */
  const effectiveSshUser = (cwd: string, host: string): Effect.Effect<string | null> =>
    Effect.gen(function* () {
      const output = yield* process
        .run({
          operation: "GerritCli.sshUser",
          command: "ssh",
          args: ["-G", host],
          cwd,
          allowNonZeroExit: true,
          timeoutMs: 5_000,
          maxOutputBytes: 32_000,
        })
        .pipe(Effect.orElseSucceed(() => null));
      if (output === null || Number(output.exitCode) !== 0) return null;
      for (const line of output.stdout.split("\n")) {
        const match = /^user\s+(.+)$/u.exec(line.trim());
        if (match?.[1] !== undefined) return match[1].trim();
      }
      return null;
    });

  const sshArgs = (
    connection: GerritConnection | null,
    host: string,
    remote: ReadonlyArray<string>,
  ): ReadonlyArray<string> => [
    "-o",
    "BatchMode=yes",
    "-o",
    "ConnectTimeout=15",
    ...(connection?.port == null ? [] : ["-p", connection.port]),
    ...(connection?.user == null ? [] : ["-l", connection.user]),
    host,
    ...remote,
  ];

  const runSsh = (input: {
    readonly cwd: string;
    readonly host: string;
    readonly operation: "query" | "review";
    readonly remote: ReadonlyArray<string>;
    readonly stdin?: string;
  }) => {
    const base: GerritErrorContext = {
      operation: input.operation,
      command: "ssh",
      cwd: input.cwd,
      host: input.host,
    };
    return Effect.gen(function* () {
      const connection = yield* connectionFor(input.cwd, input.host);
      return yield* process
        .run({
          operation: `GerritCli.${input.operation}`,
          command: "ssh",
          args: sshArgs(connection, input.host, input.remote),
          cwd: input.cwd,
          ...(input.stdin === undefined ? {} : { stdin: input.stdin }),
          timeoutMs: DEFAULT_TIMEOUT_MS,
          maxOutputBytes: 8 * 1024 * 1024,
        })
        .pipe(Effect.mapError((error) => classifyVcsError(error, base)));
    });
  };

  const queryChanges: GerritCli["Service"]["queryChanges"] = (input) =>
    Effect.gen(function* () {
      const base: GerritErrorContext = {
        operation: "query",
        command: "ssh",
        cwd: input.cwd,
        host: input.host,
      };
      const output = yield* runSsh({
        cwd: input.cwd,
        host: input.host,
        operation: "query",
        remote: remoteArgs(input),
      });
      if (output.stdoutTruncated) {
        return yield* new GerritCliCommandError({ ...base, cause: "answer exceeded the limit" });
      }
      const decoded = decodeGerritQueryOutput(output.stdout);
      if (!Result.isSuccess(decoded)) {
        return yield* new GerritCliDecodeError({ ...base, cause: decoded.failure });
      }
      return decoded.success;
    });

  const review: GerritCli["Service"]["review"] = (input) =>
    runSsh({
      cwd: input.cwd,
      host: input.host,
      operation: "review",
      remote: reviewArgs(input),
    }).pipe(Effect.asVoid);

  const reviewJson: GerritCli["Service"]["reviewJson"] = (input) =>
    runSsh({
      cwd: input.cwd,
      host: input.host,
      operation: "review",
      remote: ["gerrit", "review", "--json", `${input.change},${input.patchSet}`],
      stdin: JSON.stringify(input.review),
    }).pipe(Effect.asVoid);

  const viewer: GerritCli["Service"]["viewer"] = (cwd) =>
    Effect.gen(function* () {
      const connection = yield* connectionFor(cwd, "");
      if (connection === null) return localUser;
      if (connection.user !== null) return connection.user;
      return (yield* effectiveSshUser(cwd, connection.host)) ?? localUser;
    });

  return GerritCli.of({ viewer, queryChanges, review, reviewJson });
});

export const layer = Layer.effect(GerritCli, make);
