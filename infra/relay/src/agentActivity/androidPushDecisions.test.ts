import { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { androidAgentAlertGroup } from "@t3tools/shared/androidAgentAlert";
import { describe, expect, it } from "@effect/vitest";

import { completionReadPast, visitAdvanceDismissal } from "./androidPushDecisions.ts";

const finishedAt = "2026-01-01T12:00:00.000Z";

describe("completionReadPast", () => {
  it("suppresses a completion the thread was read past", () => {
    expect(
      completionReadPast({
        phase: "completed",
        stateUpdatedAt: finishedAt,
        latestRunCompletedAt: finishedAt,
        lastVisitedAt: "2026-01-01T12:00:01.000Z",
      }),
    ).toBe(true);
  });

  it("suppresses a failure read at the same instant", () => {
    expect(
      completionReadPast({
        phase: "failed",
        stateUpdatedAt: finishedAt,
        latestRunCompletedAt: finishedAt,
        lastVisitedAt: finishedAt,
      }),
    ).toBe(true);
  });

  it("alerts when the run finished after the last read", () => {
    expect(
      completionReadPast({
        phase: "completed",
        stateUpdatedAt: finishedAt,
        latestRunCompletedAt: finishedAt,
        lastVisitedAt: "2026-01-01T11:59:59.000Z",
      }),
    ).toBe(false);
  });

  it("alerts when the thread was never visited", () => {
    expect(
      completionReadPast({
        phase: "completed",
        stateUpdatedAt: finishedAt,
        latestRunCompletedAt: null,
        lastVisitedAt: null,
      }),
    ).toBe(false);
  });

  it("falls back to the state timestamp when the shell has no run time", () => {
    expect(
      completionReadPast({
        phase: "completed",
        stateUpdatedAt: finishedAt,
        lastVisitedAt: "2026-01-01T12:30:00.000Z",
      }),
    ).toBe(true);
  });

  it("never suppresses pending or running phases", () => {
    const visit = "2026-01-01T13:00:00.000Z";
    for (const phase of ["waiting_for_approval", "waiting_for_input", "running", "starting"]) {
      expect(
        completionReadPast({
          phase,
          stateUpdatedAt: finishedAt,
          latestRunCompletedAt: finishedAt,
          lastVisitedAt: visit,
        }),
      ).toBe(false);
    }
  });
});

describe("visitAdvanceDismissal", () => {
  it("dismisses once the visit watermark advances", () => {
    expect(
      visitAdvanceDismissal({
        phase: "completed",
        previousVisitedAt: "2026-01-01T11:00:00.000Z",
        nextVisitedAt: "2026-01-01T12:00:00.000Z",
      }),
    ).toEqual({ readAt: "2026-01-01T12:00:00.000Z" });
  });

  it("treats the first visit after an unvisited baseline as an advance", () => {
    expect(
      visitAdvanceDismissal({
        phase: "running",
        previousVisitedAt: null,
        nextVisitedAt: "2026-01-01T12:00:00.000Z",
      }),
    ).toEqual({ readAt: "2026-01-01T12:00:00.000Z" });
  });

  it("dismisses for a thread whose awareness state has gone", () => {
    expect(
      visitAdvanceDismissal({
        phase: null,
        previousVisitedAt: null,
        nextVisitedAt: "2026-01-01T12:00:00.000Z",
      }),
    ).toEqual({ readAt: "2026-01-01T12:00:00.000Z" });
  });

  it("ignores an unchanged or older watermark", () => {
    for (const nextVisitedAt of ["2026-01-01T12:00:00.000Z", "2026-01-01T11:00:00.000Z", null]) {
      expect(
        visitAdvanceDismissal({
          phase: "completed",
          previousVisitedAt: "2026-01-01T12:00:00.000Z",
          nextVisitedAt,
        }),
      ).toBeNull();
    }
  });

  it("seeds a thread the watcher has not seen before", () => {
    expect(
      visitAdvanceDismissal({
        phase: "completed",
        previousVisitedAt: undefined,
        nextVisitedAt: "2026-01-01T12:00:00.000Z",
      }),
    ).toBeNull();
  });

  it("leaves pending cards until they are answered", () => {
    for (const phase of ["waiting_for_approval", "waiting_for_input"]) {
      expect(
        visitAdvanceDismissal({
          phase,
          previousVisitedAt: null,
          nextVisitedAt: "2026-01-01T12:00:00.000Z",
        }),
      ).toBeNull();
    }
  });
});

describe("androidAgentAlertGroup", () => {
  it("keys a card on the environment and thread pair", () => {
    expect(androidAgentAlertGroup(EnvironmentId.make("env"), ThreadId.make("thread"))).toBe(
      '["env","thread"]',
    );
  });

  it("keeps identifiers containing slashes distinct", () => {
    expect(androidAgentAlertGroup(EnvironmentId.make("a/b"), ThreadId.make("c"))).not.toBe(
      androidAgentAlertGroup(EnvironmentId.make("a"), ThreadId.make("b/c")),
    );
  });
});
