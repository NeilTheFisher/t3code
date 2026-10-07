// @effect-diagnostics nodeBuiltinImport:off - the test runs a Node HTTP server.
import * as NodeHttp from "node:http";

import { assert, describe, expect, it } from "@effect/vitest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { FetchHttpClient } from "effect/http";
import { DEFAULT_SERVER_SETTINGS } from "@t3tools/contracts";

import * as ServerSettings from "../serverSettings.ts";
import * as GerritRestApi from "./GerritRestApi.ts";

interface RecordedRequest {
  readonly method: string;
  readonly url: string;
  readonly authorization: string | undefined;
  readonly body: string;
}

const recorded: RecordedRequest[] = [];
let server: NodeHttp.Server | null = null;

type GerritRest = GerritRestApi.GerritRestApi["Service"];

const target = { host: "review.example.com", username: "admin" };

/** Serves canned Gerrit answers on an ephemeral port and runs the effect against the API. */
function withServer<A, E>(
  respond: (request: NodeHttp.IncomingMessage, response: NodeHttp.ServerResponse, url: URL) => void,
  effect: (api: GerritRest, baseUrl: string) => Effect.Effect<A, E>,
  token = "secret",
): Effect.Effect<A, E> {
  const acquire = Effect.callback<{ readonly baseUrl: string }>((resume) => {
    recorded.length = 0;
    const srv = NodeHttp.createServer((request, response) => {
      let body = "";
      request.on("data", (chunk) => (body += chunk));
      request.on("end", () => {
        recorded.push({
          method: request.method ?? "",
          url: request.url ?? "",
          authorization: request.headers.authorization,
          body,
        });
        respond(request, response, new URL(request.url ?? "/", "http://127.0.0.1"));
      });
    });
    server = srv;
    srv.listen(0, "127.0.0.1", () => {
      const address = srv.address();
      if (address === null || typeof address === "string") {
        resume(Effect.die(new Error("server bound to no port")));
        return;
      }
      resume(Effect.succeed({ baseUrl: `http://127.0.0.1:${address.port}` }));
    });
  });
  const release = () =>
    Effect.callback<void>((resume) => {
      if (server === null) {
        resume(Effect.void);
        return;
      }
      const srv = server;
      server = null;
      srv.close(() => resume(Effect.void));
    });
  return Effect.acquireUseRelease(
    acquire,
    ({ baseUrl }) =>
      Effect.gen(function* () {
        const api = yield* GerritRestApi.GerritRestApi;
        return yield* effect(api, baseUrl);
      }).pipe(
        Effect.provide(
          GerritRestApi.layer.pipe(
            Layer.provide(FetchHttpClient.layer),
            // The web origin is derived from the host; this override points the test at its server.
            Layer.provide(
              ConfigProvider.layer(
                ConfigProvider.fromEnv({ env: { T3CODE_GERRIT_BASE_URL: baseUrl } }),
              ),
            ),
            Layer.provide(
              Layer.mock(ServerSettings.ServerSettingsService)({
                getSettings: Effect.succeed({
                  ...DEFAULT_SERVER_SETTINGS,
                  gerrit: { token },
                }),
              }),
            ),
          ),
        ),
      ),
    release,
  );
}

function json(response: NodeHttp.ServerResponse, body: string): void {
  response.writeHead(200, { "content-type": "application/json; charset=UTF-8" });
  response.end(`)]}'\n${body}`);
}

describe("GerritRestApi", () => {
  it.effect("reads comments with their ids and thread parentage", () =>
    withServer(
      (_request, response) => {
        json(
          response,
          JSON.stringify({
            "README.md": [
              {
                id: "root_1",
                line: 2,
                side: "REVISION",
                message: "inline note",
                unresolved: true,
                author: { username: "admin", name: "Administrator" },
                updated: "2026-10-07 19:12:34.000000000",
              },
              { id: "reply_1", line: 2, message: "reply", in_reply_to: "root_1" },
            ],
          }),
        );
      },
      (api) =>
        Effect.gen(function* () {
          const comments = yield* api.listComments({ ...target, change: 1 });
          assert.equal(comments.length, 2);
          assert.equal(comments[0]?.id, "root_1");
          assert.equal(comments[0]?.unresolved, true);
          assert.equal(comments[0]?.authorLogin, "admin");
          assert.equal(comments[1]?.inReplyTo, "root_1");
          assert.ok(recorded[0]?.authorization?.startsWith("Basic "));
          assert.ok(recorded[0]?.url.includes("/a/changes/1/comments"));
        }),
    ),
  );

  it.effect("posts a review to the current revision and carries the body", () =>
    withServer(
      (_request, response) => {
        response.writeHead(200);
        response.end();
      },
      (api) =>
        Effect.gen(function* () {
          yield* api.postReview({ ...target, change: 1, review: { message: "hi" } });
          assert.equal(recorded[0]?.method, "POST");
          assert.ok(recorded[0]?.url.endsWith("/a/changes/1/revisions/current/review"));
          assert.equal(recorded[0]?.body, '{"message":"hi"}');
        }),
    ),
  );

  it.effect("searches accounts and adds/removes a reviewer by account id", () =>
    withServer(
      (request, response) => {
        if (request.method === "GET") {
          json(
            response,
            JSON.stringify([{ _account_id: 7, username: "reviewer1", name: "R One" }]),
          );
          return;
        }
        response.writeHead(200);
        response.end();
      },
      (api) =>
        Effect.gen(function* () {
          const accounts = yield* api.searchAccounts({ ...target, query: "is:active", limit: 5 });
          assert.deepStrictEqual(accounts, [
            { accountId: 7, username: "reviewer1", name: "R One" },
          ]);
          yield* api.setReviewer({ ...target, change: 1, reviewer: "7", requested: true });
          yield* api.setReviewer({ ...target, change: 1, reviewer: "7", requested: false });
          const post = recorded.find((entry) => entry.method === "POST");
          const remove = recorded.find((entry) => entry.method === "DELETE");
          assert.ok(post?.url.endsWith("/a/changes/1/reviewers"));
          assert.equal(post?.body, '{"reviewer":"7"}');
          assert.ok(remove?.url.endsWith("/a/changes/1/reviewers/7"));
        }),
    ),
  );

  it.effect("lists files with their reviewed flags", () =>
    withServer(
      (_request, response) => {
        json(response, JSON.stringify({ "a.js": { reviewed: true }, "b.js": {} }));
      },
      (api) =>
        Effect.gen(function* () {
          const files = yield* api.listFiles({ ...target, change: 1 });
          assert.deepStrictEqual(files, [
            { path: "a.js", reviewed: true },
            { path: "b.js", reviewed: false },
          ]);
          assert.ok(recorded[0]?.url.endsWith("/a/changes/1/revisions/current/files/"));
        }),
    ),
  );

  it.effect("marks and unmarks a file through its encoded per-file endpoint", () =>
    withServer(
      (_request, response) => {
        response.writeHead(200);
        response.end();
      },
      (api) =>
        Effect.gen(function* () {
          yield* api.setFileReviewed({
            ...target,
            change: 1,
            path: "dir/a b.js",
            reviewed: true,
          });
          yield* api.setFileReviewed({
            ...target,
            change: 1,
            path: "dir/a b.js",
            reviewed: false,
          });
          assert.deepStrictEqual(
            recorded.map((entry) => [entry.method, entry.url]),
            [
              ["PUT", "/a/changes/1/revisions/current/files/dir%2Fa%20b.js/reviewed"],
              ["DELETE", "/a/changes/1/revisions/current/files/dir%2Fa%20b.js/reviewed"],
            ],
          );
        }),
    ),
  );

  it.effect("lists the change's current reviewers", () =>
    withServer(
      (_request, response) => {
        json(response, JSON.stringify([{ _account_id: 7, username: "reviewer1", name: "R One" }]));
      },
      (api) =>
        Effect.gen(function* () {
          const reviewers = yield* api.listReviewers({ ...target, change: 1 });
          assert.deepStrictEqual(reviewers, [
            { accountId: 7, username: "reviewer1", name: "R One" },
          ]);
          assert.ok(recorded[0]?.url.endsWith("/a/changes/1/reviewers"));
        }),
    ),
  );

  it.effect("rewrites the commit message through Gerrit's edit flow as a new patch set", () => {
    const message = "New subject\n\nNew body.\n\nChange-Id: Iabc\n";
    return withServer(
      (_request, response) => {
        response.writeHead(200);
        response.end();
      },
      (api) =>
        Effect.gen(function* () {
          yield* api.updateMessage({ ...target, change: 1, message });
          assert.deepStrictEqual(
            recorded.map((entry) => [entry.method, entry.url]),
            [
              ["PUT", "/a/changes/1/edit"],
              ["PUT", "/a/changes/1/edit:message"],
              ["POST", "/a/changes/1/edit:publish"],
            ],
          );
          assert.equal(
            recorded[1]?.body,
            '{"message":"New subject\\n\\nNew body.\\n\\nChange-Id: Iabc\\n"}',
          );
        }),
    );
  });

  it.effect("fails with a sentence the user can act on when no token is set", () =>
    withServer(
      () => {},
      (api) =>
        Effect.gen(function* () {
          const error = yield* api.listComments({ ...target, change: 1 }).pipe(Effect.flip);
          assert.instanceOf(error, GerritRestApi.GerritRestApiError);
          assert.ok(error.detail.includes("Settings"));
        }),
      "",
    ),
  );
});
