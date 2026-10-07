import * as NodeOS from "node:os";

import type { ServerProviderUsageWindow } from "@t3tools/contracts";
import * as Crypto from "effect/Crypto";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as Hex from "effect/encoding/Hex";
import { HttpClient, HttpClientRequest, HttpClientResponse } from "effect/http";

import {
  clampPercent,
  makeUnavailableUsageLimits,
  makeUsageLimits,
} from "./providerUsageLimits.ts";

const AuthFile = Schema.Struct({ "opencode-go": Schema.optionalKey(Schema.Unknown) });
const ApiAuth = Schema.Struct({ type: Schema.Literal("api"), key: Schema.String });
const decodeAuthFile = Schema.decodeEffect(Schema.fromJsonString(AuthFile));
const decodeApiAuth = Schema.decodeUnknownOption(ApiAuth);
const UsageWindow = Schema.Struct({
  percent: Schema.Finite,
  resetsAt: Schema.DateTimeUtcFromString,
});
const UsageResponse = Schema.Struct({
  usage: Schema.Struct({ rolling: UsageWindow, weekly: UsageWindow, monthly: UsageWindow }),
});

/**
 * The console dashboard's own Go meters. Each meter reports micro-cents spent
 * against a per-window limit, so the percent is derived rather than sent.
 */
const GoMeter = Schema.Struct({
  resetsAt: Schema.optionalKey(Schema.DateTimeUtcFromString),
  limitMicroCents: Schema.optionalKey(Schema.String),
  usedMicroCents: Schema.optionalKey(Schema.String),
});
const GoStatusResponse = Schema.Struct({
  access: Schema.optionalKey(
    Schema.NullOr(
      Schema.Struct({
        meters: Schema.optionalKey(
          Schema.Struct({
            fiveHour: Schema.optionalKey(GoMeter),
            week: Schema.optionalKey(GoMeter),
            month: Schema.optionalKey(GoMeter),
          }),
        ),
      }),
    ),
  ),
});

function meterUsedPercent(meter: {
  readonly limitMicroCents?: string | undefined;
  readonly usedMicroCents?: string | undefined;
}): number | undefined {
  const limit = Number(meter.limitMicroCents);
  const used = Number(meter.usedMicroCents);
  if (!Number.isFinite(limit) || limit <= 0 || !Number.isFinite(used) || used < 0) {
    return undefined;
  }
  return clampPercent((used / limit) * 100);
}

function consoleGoWindows(response: typeof GoStatusResponse.Type): ServerProviderUsageWindow[] {
  const meters = response.access?.meters;
  if (!meters) return [];
  const entries = [
    {
      meter: meters.fiveHour,
      id: "go_rolling",
      kind: "session",
      label: "Go · Session",
      mins: 5 * 60,
    },
    {
      meter: meters.week,
      id: "go_weekly",
      kind: "weekly",
      label: "Go · Weekly",
      mins: 7 * 24 * 60,
    },
    {
      meter: meters.month,
      id: "go_monthly",
      kind: "monthly",
      label: "Go · Monthly",
      mins: 30 * 24 * 60,
    },
  ] as const;
  const windows: ServerProviderUsageWindow[] = [];
  for (const entry of entries) {
    if (!entry.meter) continue;
    const usedPercent = meterUsedPercent(entry.meter);
    if (usedPercent === undefined) continue;
    windows.push({
      id: entry.id,
      kind: entry.kind,
      label: entry.label,
      usedPercent,
      windowDurationMins: entry.mins,
      ...(entry.meter.resetsAt ? { resetsAt: DateTime.formatIso(entry.meter.resetsAt) } : {}),
    });
  }
  return windows;
}

/**
 * The workspace dashboard's JSON meters, the source the console itself reads.
 * An `x-org-id` header selects the workspace; the `auth` cookie authenticates
 * it. The cookie is bound to the workspace, so a 403 means no Go subscription
 * and a 401 means the cookie has expired.
 */
const readConsoleGoUsageLimits = Effect.fn("readConsoleGoUsageLimits")(function* (input: {
  readonly checkedAt: string;
  readonly workspaceId: string;
  readonly authCookie: string;
}) {
  const client = yield* HttpClient.HttpClient;
  const response = yield* client.execute(
    HttpClientRequest.get("https://opencode.ai/console/api/go/status").pipe(
      HttpClientRequest.setHeader("accept", "application/json"),
      HttpClientRequest.setHeader("x-org-id", input.workspaceId),
      HttpClientRequest.setHeader(
        "cookie",
        input.authCookie.includes("auth=") ? input.authCookie : `auth=${input.authCookie}`,
      ),
      HttpClientRequest.setHeader("user-agent", "T3-Code"),
    ),
  );
  if (response.status === 403) {
    return makeUnavailableUsageLimits({ checkedAt: input.checkedAt, reason: "unsupported" });
  }
  const body = yield* HttpClientResponse.filterStatusOk(response).pipe(
    Effect.flatMap(HttpClientResponse.schemaBodyJson(GoStatusResponse)),
  );
  // A Go subscription always carries meters; their absence means this
  // workspace cannot report Go usage at all.
  if (!body.access) {
    return makeUnavailableUsageLimits({ checkedAt: input.checkedAt, reason: "unsupported" });
  }
  const windows = consoleGoWindows(body);
  if (windows.length === 0) {
    return makeUnavailableUsageLimits({
      checkedAt: input.checkedAt,
      reason: "probeFailed",
      message: "OpenCode Go returned no usage windows.",
    });
  }
  const crypto = yield* Crypto.Crypto;
  // The console response has no account ID; identify the account by its
  // workspace so two instances on the same workspace pool as one account.
  const credentialFingerprint = yield* crypto
    .digest("SHA-256", new TextEncoder().encode(`opencode-go\0${input.workspaceId}`))
    .pipe(Effect.map(Hex.encode), Effect.orDie);
  return { ...makeUsageLimits({ checkedAt: input.checkedAt, windows }), credentialFingerprint };
});

/**
 * Legacy host-account read: the CLI's Zen API key against the Zen usage API.
 * Used only when no workspace dashboard credentials are configured.
 */
const readZenGoUsageLimits = Effect.fn("readZenGoUsageLimits")(function* (input: {
  readonly checkedAt: string;
  readonly environment: NodeJS.ProcessEnv;
}) {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const env = input.environment;
  const dataHome =
    env.XDG_DATA_HOME ||
    path.join(env.HOME || env.USERPROFILE || NodeOS.homedir(), ".local", "share");
  const authPath = path.join(dataHome, "opencode", "auth.json");
  const contents =
    env.OPENCODE_AUTH_CONTENT ||
    (yield* fs.readFileString(authPath).pipe(
      Effect.catchTags({
        PlatformError: (error) =>
          error.reason._tag === "NotFound" ? Effect.succeed("{}") : Effect.fail(error),
      }),
    ));
  const auth = yield* decodeAuthFile(contents);
  const apiAuth = decodeApiAuth(auth["opencode-go"]);
  // OpenCode overlays stored API credentials after environment credentials.
  const apiKey = (Option.isSome(apiAuth) ? apiAuth.value.key : env.OPENCODE_API_KEY)?.trim();
  if (!apiKey) {
    return makeUnavailableUsageLimits({ checkedAt: input.checkedAt, reason: "unsupported" });
  }

  const client = yield* HttpClient.HttpClient;
  const response = yield* client.execute(
    HttpClientRequest.get("https://opencode.ai/zen/go/v1/usage").pipe(
      HttpClientRequest.bearerToken(apiKey),
    ),
  );
  // A valid Zen key can exist without a Go subscription.
  if (response.status === 403) {
    return makeUnavailableUsageLimits({ checkedAt: input.checkedAt, reason: "unsupported" });
  }
  const body = yield* HttpClientResponse.filterStatusOk(response).pipe(
    Effect.flatMap(HttpClientResponse.schemaBodyJson(UsageResponse)),
  );
  const windows: ServerProviderUsageWindow[] = [
    {
      id: "go_rolling",
      kind: "session",
      label: "Go · Session",
      windowDurationMins: 5 * 60,
      usedPercent: clampPercent(body.usage.rolling.percent),
      resetsAt: DateTime.formatIso(body.usage.rolling.resetsAt),
    },
    {
      id: "go_weekly",
      kind: "weekly",
      label: "Go · Weekly",
      windowDurationMins: 7 * 24 * 60,
      usedPercent: clampPercent(body.usage.weekly.percent),
      resetsAt: DateTime.formatIso(body.usage.weekly.resetsAt),
    },
    {
      id: "go_monthly",
      kind: "monthly",
      label: "Go · Monthly",
      usedPercent: clampPercent(body.usage.monthly.percent),
      resetsAt: DateTime.formatIso(body.usage.monthly.resetsAt),
    },
  ];
  const crypto = yield* Crypto.Crypto;
  // Go's usage response has no account ID. An unkeyed hash matches across
  // environments without a shared secret. It permits offline guesses, but
  // Go keys are randomly generated.
  const credentialFingerprint = yield* crypto
    .digest("SHA-256", new TextEncoder().encode(`opencode-go\0${apiKey}`))
    .pipe(Effect.map(Hex.encode), Effect.orDie);
  return {
    ...makeUsageLimits({ checkedAt: input.checkedAt, windows }),
    credentialFingerprint,
  };
});

/**
 * OpenCode Go subscription usage. The workspace dashboard credentials are T3
 * settings, so they apply to external servers too; the Zen API-key path below
 * reads the host account and is skipped for external servers.
 */
export const readOpenCodeGoUsageLimits = Effect.fn("readOpenCodeGoUsageLimits")(function* (input: {
  readonly enabled: boolean;
  readonly serverUrl: string;
  readonly workspaceId: string;
  readonly authCookie: string;
  readonly environment: NodeJS.ProcessEnv;
}) {
  const checkedAt = DateTime.formatIso(yield* DateTime.now);
  const unsupported = makeUnavailableUsageLimits({ checkedAt, reason: "unsupported" });
  if (!input.enabled) return unsupported;

  const workspaceId = input.workspaceId.trim();
  const authCookie = input.authCookie.trim();
  if (workspaceId && authCookie) {
    return yield* readConsoleGoUsageLimits({ checkedAt, workspaceId, authCookie }).pipe(
      Effect.timeout("5 seconds"),
      Effect.orElseSucceed(() =>
        makeUnavailableUsageLimits({
          checkedAt,
          reason: "probeFailed",
          message: "OpenCode Go could not read usage.",
        }),
      ),
    );
  }

  if (input.serverUrl.trim()) return unsupported;

  return yield* readZenGoUsageLimits({ checkedAt, environment: input.environment }).pipe(
    Effect.timeout("5 seconds"),
    Effect.orElseSucceed(() =>
      makeUnavailableUsageLimits({
        checkedAt,
        reason: "probeFailed",
        message: "OpenCode Go could not read usage.",
      }),
    ),
  );
});
