import { EnvironmentId } from "@t3tools/contracts";
import { describe, expect, it, vi } from "vite-plus/test";

const state = vi.hoisted(() => ({
  primary: null as string | null,
  connections: new Map<string, { httpBaseUrl: string }>(),
}));

vi.mock(import("~/state/environments"), () => ({
  readPrimaryEnvironmentId: (() => state.primary) as never,
}));
vi.mock(import("~/state/session"), () => ({
  readPreparedConnection: ((environmentId: string) =>
    state.connections.get(environmentId) ?? null) as never,
}));

const { resolveTtsEnvironmentBase } = await import("./ttsEnvironmentBase");

const THREAD_ENV = EnvironmentId.make("environment-thread");
const PRIMARY_ENV = EnvironmentId.make("environment-primary");

describe("resolveTtsEnvironmentBase", () => {
  it("uses the message's own environment", () => {
    state.connections.set(THREAD_ENV, { httpBaseUrl: "https://thread-env.test" });
    state.connections.set(PRIMARY_ENV, { httpBaseUrl: "https://primary-env.test" });
    state.primary = PRIMARY_ENV;
    expect(resolveTtsEnvironmentBase(THREAD_ENV)).toBe("https://thread-env.test");
  });

  it("falls back to the primary environment for rows without a thread", () => {
    state.connections.set(PRIMARY_ENV, { httpBaseUrl: "https://primary-env.test" });
    state.primary = PRIMARY_ENV;
    expect(resolveTtsEnvironmentBase(null)).toBe("https://primary-env.test");
  });

  it("stays same-origin when no environment is connected yet", () => {
    state.primary = EnvironmentId.make("environment-missing");
    expect(resolveTtsEnvironmentBase(null)).toBe("");
  });
});
