import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import { FetchHttpClient, HttpClient, HttpClientRequest } from "effect/http";
import { DEFAULT_SERVER_SETTINGS, type GerritSettings } from "@t3tools/contracts";
import { decodeJsonResult } from "@t3tools/shared/schemaJson";

import { collectUint8StreamText } from "../stream/collectUint8StreamText.ts";
import * as ServerSettings from "../serverSettings.ts";

const MAX_RESPONSE_BYTES = 8 * 1024 * 1024;

/**
 * `T3CODE_GERRIT_BASE_URL` overrides the web origin for a Gerrit not served at `https://<host>`
 * (or a test); `T3CODE_GERRIT_HTTP_TOKEN` is the environment fallback for the saved token.
 */
const GerritRestEnvConfig = Config.all({
  baseUrl: Config.String("T3CODE_GERRIT_BASE_URL").pipe(Config.option),
  token: Config.String("T3CODE_GERRIT_HTTP_TOKEN").pipe(Config.option),
});

export class GerritRestApiError extends Schema.TaggedError<GerritRestApiError>()(
  "GerritRestApiError",
  {
    operation: Schema.String,
    detail: Schema.String,
    cause: Schema.optional(Schema.Defect()),
  },
) {
  override get message(): string {
    return `Gerrit REST failed in ${this.operation}: ${this.detail}`;
  }
}

const RawCommentSchema = Schema.Struct({
  id: Schema.String,
  path: Schema.optional(Schema.NullOr(Schema.String)),
  line: Schema.optional(Schema.NullOr(Schema.Int)),
  side: Schema.optional(Schema.NullOr(Schema.String)),
  message: Schema.optional(Schema.NullOr(Schema.String)),
  in_reply_to: Schema.optional(Schema.NullOr(Schema.String)),
  unresolved: Schema.optional(Schema.Boolean),
  author: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        _account_id: Schema.optional(Schema.Int),
        username: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  updated: Schema.optional(Schema.String),
});

const RawAccountSchema = Schema.Struct({
  _account_id: Schema.optional(Schema.Int),
  username: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.optional(Schema.NullOr(Schema.String)),
});

const RawFileInfoSchema = Schema.Struct({
  reviewed: Schema.optional(Schema.Boolean),
});

const decodeComments = decodeJsonResult(
  Schema.Record(Schema.String, Schema.Array(RawCommentSchema)),
);
const decodeAccounts = decodeJsonResult(Schema.Array(RawAccountSchema));
const decodeFiles = decodeJsonResult(Schema.Record(Schema.String, RawFileInfoSchema));

export interface GerritRestComment {
  readonly id: string;
  readonly path: string;
  readonly line: number | null;
  readonly side: "PARENT" | "REVISION" | null;
  readonly message: string;
  readonly inReplyTo: string | null;
  readonly unresolved: boolean;
  readonly authorLogin: string | null;
  readonly authorName: string | null;
  readonly createdAt: string | null;
}

export interface GerritRestAccount {
  readonly accountId: number;
  readonly username: string | null;
  readonly name: string | null;
}

export interface GerritRestFile {
  readonly path: string;
  readonly reviewed: boolean;
}

/** The account shapes `searchAccounts` and `listReviewers` both answer with. */
function toAccounts(
  decoded: ReadonlyArray<Schema.Schema.Type<typeof RawAccountSchema>>,
): ReadonlyArray<GerritRestAccount> {
  const accounts: Array<GerritRestAccount> = [];
  for (const account of decoded) {
    if (account._account_id === undefined) continue;
    accounts.push({
      accountId: account._account_id,
      username: account.username ?? null,
      name: account.name ?? null,
    });
  }
  return accounts;
}

/** Gerrit prefixes every JSON body with `)]}'`. */
function stripGerritJsonPrefix(body: string): string {
  const trimmed = body.trimStart();
  return trimmed.startsWith(")]}'") ? trimmed.slice(4).trimStart() : body;
}

/** Settings win over the environment; an empty token means the HTTP surface is off. */
function resolveToken(
  settings: GerritSettings,
  env: Config.Success<typeof GerritRestEnvConfig>,
): string | null {
  const token = settings.token.trim() || Option.getOrElse(env.token, () => "").trim();
  return token.length === 0 ? null : token;
}

/** The host and SSH user a call is made for, both read from the project's git remote. */
export interface GerritRestTarget {
  readonly host: string;
  readonly username: string;
}

/**
 * Gerrit's REST API, used only for what the SSH command line cannot carry: a comment's own id
 * (so a reply can name its parent), thread resolution, the account search behind the reviewer
 * picker and its current reviewer list, and the per-file viewed marks. The web origin is
 * `https://<host>` and the basic-auth username is the git remote's SSH user, so only the token is
 * stored (Settings → Source Control, with `T3CODE_GERRIT_HTTP_TOKEN` as an environment fallback).
 */
export class GerritRestApi extends Context.Service<
  GerritRestApi,
  {
    readonly listComments: (
      input: GerritRestTarget & { readonly change: number },
    ) => Effect.Effect<ReadonlyArray<GerritRestComment>, GerritRestApiError>;
    readonly listFiles: (
      input: GerritRestTarget & { readonly change: number },
    ) => Effect.Effect<ReadonlyArray<GerritRestFile>, GerritRestApiError>;
    readonly listReviewers: (
      input: GerritRestTarget & { readonly change: number },
    ) => Effect.Effect<ReadonlyArray<GerritRestAccount>, GerritRestApiError>;
    readonly postReview: (
      input: GerritRestTarget & { readonly change: number; readonly review: unknown },
    ) => Effect.Effect<void, GerritRestApiError>;
    readonly searchAccounts: (
      input: GerritRestTarget & { readonly query: string; readonly limit: number },
    ) => Effect.Effect<ReadonlyArray<GerritRestAccount>, GerritRestApiError>;
    readonly setFileReviewed: (
      input: GerritRestTarget & {
        readonly change: number;
        readonly path: string;
        readonly reviewed: boolean;
      },
    ) => Effect.Effect<void, GerritRestApiError>;
    readonly setReviewer: (
      input: GerritRestTarget & {
        readonly change: number;
        readonly reviewer: string;
        readonly requested: boolean;
      },
    ) => Effect.Effect<void, GerritRestApiError>;
    readonly updateMessage: (
      input: GerritRestTarget & { readonly change: number; readonly message: string },
    ) => Effect.Effect<void, GerritRestApiError>;
  }
>()("t3/sourceControl/GerritRestApi") {}

/** @public Service construction is part of the canonical Effect module API. */
export const make = Effect.gen(function* () {
  const config = yield* GerritRestEnvConfig.pipe(Effect.orDie);
  const httpClient = yield* HttpClient.HttpClient;
  const serverSettings = yield* ServerSettings.ServerSettingsService;

  // Read on every request so a token saved in Settings applies without a restart.
  const currentToken: Effect.Effect<string | null> = serverSettings.getSettings.pipe(
    Effect.map((settings) => resolveToken(settings.gerrit, config)),
    Effect.catch((error) =>
      Effect.logWarning("failed to read the Gerrit token from settings", {
        operation: error.operation,
      }).pipe(Effect.as(resolveToken(DEFAULT_SERVER_SETTINGS.gerrit, config))),
    ),
  );

  const requestText = (
    target: GerritRestTarget,
    input: {
      readonly operation: string;
      readonly method: "GET" | "POST" | "PUT" | "DELETE";
      readonly path: string;
      readonly body?: unknown;
    },
  ): Effect.Effect<string, GerritRestApiError> =>
    Effect.gen(function* () {
      const token = yield* currentToken;
      if (token === null) {
        return yield* new GerritRestApiError({
          operation: input.operation,
          detail:
            "No Gerrit HTTP token is set. Add one in Settings → Source Control to reply, resolve or pick reviewers.",
        });
      }
      const baseUrl = Option.getOrElse(config.baseUrl, () => `https://${target.host}`).replace(
        /\/+$/u,
        "",
      );
      const url = `${baseUrl}${input.path}`;
      const base =
        input.method === "GET"
          ? HttpClientRequest.get(url)
          : input.method === "POST"
            ? HttpClientRequest.post(url)
            : input.method === "DELETE"
              ? HttpClientRequest.make("DELETE")(url)
              : HttpClientRequest.put(url);
      const withBody =
        input.body === undefined ? base : base.pipe(HttpClientRequest.bodyJsonUnsafe(input.body));
      const response = yield* httpClient
        .execute(withBody.pipe(HttpClientRequest.basicAuth(target.username, token)))
        .pipe(
          Effect.mapError(
            (cause) =>
              new GerritRestApiError({
                operation: input.operation,
                detail: "Could not reach Gerrit.",
                cause,
              }),
          ),
        );
      if (response.status < 200 || response.status >= 300) {
        return yield* new GerritRestApiError({
          operation: input.operation,
          detail: `Gerrit returned HTTP ${response.status}.`,
        });
      }
      const collected = yield* collectUint8StreamText({
        stream: response.stream,
        maxBytes: MAX_RESPONSE_BYTES,
      }).pipe(
        Effect.mapError(
          (cause) =>
            new GerritRestApiError({
              operation: input.operation,
              detail: "Could not read Gerrit's response.",
              cause,
            }),
        ),
      );
      return stripGerritJsonPrefix(collected.text);
    });

  const listComments: GerritRestApi["Service"]["listComments"] = (input) =>
    requestText(input, {
      operation: "listComments",
      method: "GET",
      path: `/a/changes/${input.change}/comments`,
    }).pipe(
      Effect.flatMap((text) => {
        const decoded = decodeComments(text);
        if (!Result.isSuccess(decoded)) {
          return Effect.fail(
            new GerritRestApiError({
              operation: "listComments",
              detail: "Gerrit returned unreadable comments.",
              cause: decoded.failure,
            }),
          );
        }
        const comments: Array<GerritRestComment> = [];
        for (const [path, entries] of Object.entries(decoded.success)) {
          for (const entry of entries) {
            comments.push({
              id: entry.id,
              path: entry.path ?? path,
              line: entry.line ?? null,
              side: entry.side === "PARENT" || entry.side === "REVISION" ? entry.side : null,
              message: entry.message ?? "",
              inReplyTo: entry.in_reply_to ?? null,
              unresolved: entry.unresolved === true,
              authorLogin: entry.author?.username ?? entry.author?.name ?? null,
              authorName: entry.author?.name ?? null,
              createdAt: entry.updated ?? null,
            });
          }
        }
        return Effect.succeed(comments);
      }),
    );

  const postReview: GerritRestApi["Service"]["postReview"] = (input) =>
    requestText(input, {
      operation: "postReview",
      method: "POST",
      path: `/a/changes/${input.change}/revisions/current/review`,
      body: input.review,
    }).pipe(Effect.asVoid);

  const listFiles: GerritRestApi["Service"]["listFiles"] = (input) =>
    requestText(input, {
      operation: "listFiles",
      method: "GET",
      path: `/a/changes/${input.change}/revisions/current/files/`,
    }).pipe(
      Effect.flatMap((text) => {
        const decoded = decodeFiles(text);
        if (!Result.isSuccess(decoded)) {
          return Effect.fail(
            new GerritRestApiError({
              operation: "listFiles",
              detail: "Gerrit returned unreadable files.",
              cause: decoded.failure,
            }),
          );
        }
        const files: Array<GerritRestFile> = [];
        for (const [path, file] of Object.entries(decoded.success)) {
          files.push({ path, reviewed: file.reviewed === true });
        }
        return Effect.succeed(files);
      }),
    );

  const listReviewers: GerritRestApi["Service"]["listReviewers"] = (input) =>
    requestText(input, {
      operation: "listReviewers",
      method: "GET",
      path: `/a/changes/${input.change}/reviewers`,
    }).pipe(
      Effect.flatMap((text) => {
        const decoded = decodeAccounts(text);
        if (!Result.isSuccess(decoded)) {
          return Effect.fail(
            new GerritRestApiError({
              operation: "listReviewers",
              detail: "Gerrit returned unreadable reviewers.",
              cause: decoded.failure,
            }),
          );
        }
        return Effect.succeed(toAccounts(decoded.success));
      }),
    );

  const searchAccounts: GerritRestApi["Service"]["searchAccounts"] = (input) =>
    requestText(input, {
      operation: "searchAccounts",
      method: "GET",
      path: `/a/accounts/?q=${encodeURIComponent(input.query)}&n=${input.limit}&o=DETAILS`,
    }).pipe(
      Effect.flatMap((text) => {
        const decoded = decodeAccounts(text);
        if (!Result.isSuccess(decoded)) {
          return Effect.fail(
            new GerritRestApiError({
              operation: "searchAccounts",
              detail: "Gerrit returned unreadable accounts.",
              cause: decoded.failure,
            }),
          );
        }
        return Effect.succeed(toAccounts(decoded.success));
      }),
    );

  const setFileReviewed: GerritRestApi["Service"]["setFileReviewed"] = (input) =>
    requestText(input, {
      operation: "setFileReviewed",
      method: input.reviewed ? "PUT" : "DELETE",
      path: `/a/changes/${input.change}/revisions/current/files/${encodeURIComponent(
        input.path,
      )}/reviewed`,
    }).pipe(Effect.asVoid);

  const setReviewer: GerritRestApi["Service"]["setReviewer"] = (input) =>
    requestText(input, {
      operation: "setReviewer",
      method: input.requested ? "POST" : "DELETE",
      path: `/a/changes/${input.change}/reviewers${
        input.requested ? "" : `/${encodeURIComponent(input.reviewer)}`
      }`,
      ...(input.requested ? { body: { reviewer: input.reviewer } } : {}),
    }).pipe(Effect.asVoid);

  // Gerrit has no plain "set description"; it rewrites the commit message through its edit flow,
  // which opens an edit, sets the message, and publishes it as a new patch set.
  const updateMessage: GerritRestApi["Service"]["updateMessage"] = (input) =>
    Effect.gen(function* () {
      const change = `/a/changes/${input.change}`;
      yield* requestText(input, {
        operation: "updateMessage",
        method: "PUT",
        path: `${change}/edit`,
      });
      yield* requestText(input, {
        operation: "updateMessage",
        method: "PUT",
        path: `${change}/edit:message`,
        body: { message: input.message },
      });
      yield* requestText(input, {
        operation: "updateMessage",
        method: "POST",
        path: `${change}/edit:publish`,
      });
    });

  return GerritRestApi.of({
    listComments,
    listFiles,
    listReviewers,
    postReview,
    searchAccounts,
    setFileReviewed,
    setReviewer,
    updateMessage,
  });
});

export const layer = Layer.effect(GerritRestApi, make).pipe(Layer.provide(FetchHttpClient.layer));
