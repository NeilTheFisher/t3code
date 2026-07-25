import { describe, expect, it } from "vite-plus/test";

import {
  parseClaudeUsageLimitsJson,
  parseOpenCodeGoUsageHtml,
  usageLimitsFromCodexRateLimits,
} from "./providerUsageLimits.ts";

describe("usageLimitsFromCodexRateLimits", () => {
  it("maps primary and secondary windows", () => {
    expect(
      usageLimitsFromCodexRateLimits(
        {
          rateLimits: {
            primary: {
              usedPercent: 25,
              windowDurationMins: 300,
              resetsAt: 1_774_000_000,
            },
            secondary: {
              usedPercent: 40,
              windowDurationMins: 10_080,
              resetsAt: 1_775_000_000,
            },
          },
        },
        "2026-03-20T00:00:00.000Z",
      ),
    ).toEqual({
      source: "codexAppServer",
      checkedAt: "2026-03-20T00:00:00.000Z",
      windows: [
        {
          label: "Session",
          usedPercent: 25,
          windowDurationMins: 300,
          resetsAt: "2026-03-20T09:46:40.000Z",
        },
        {
          label: "Weekly",
          usedPercent: 40,
          windowDurationMins: 10_080,
          resetsAt: "2026-03-31T23:33:20.000Z",
        },
      ],
    });
  });
});

describe("parseOpenCodeGoUsageHtml", () => {
  it("parses rolling, weekly, and monthly dashboard windows", () => {
    const result = parseOpenCodeGoUsageHtml(
      String.raw`<script>self.__next_f.push([1,"{\"rollingUsage\":{\"usagePercent\":12.5,\"resetInSec\":3600},\"weeklyUsage\":{\"usagePercent\":99,\"resetInSec\":172800},\"monthlyUsage\":{\"usagePercent\":100,\"resetInSec\":900000}}"])</script>`,
      "2026-07-24T12:00:00.000Z",
    );

    expect(result).toEqual({
      source: "openCodeDashboard",
      checkedAt: "2026-07-24T12:00:00.000Z",
      windows: [
        {
          label: "Session",
          usedPercent: 12.5,
          windowDurationMins: 300,
          resetsAt: "2026-07-24T13:00:00.000Z",
        },
        {
          label: "Weekly",
          usedPercent: 99,
          windowDurationMins: 10080,
          resetsAt: "2026-07-26T12:00:00.000Z",
        },
        {
          label: "Monthly",
          usedPercent: 100,
          windowDurationMins: 43200,
          resetsAt: "2026-08-03T22:00:00.000Z",
        },
      ],
    });
  });

  it("returns undefined when dashboard usage data is absent", () => {
    expect(
      parseOpenCodeGoUsageHtml("<html><body>Sign in</body></html>", "2026-07-24T12:00:00.000Z"),
    ).toBeUndefined();
  });
});

describe("parseClaudeUsageLimitsJson", () => {
  it("parses dynamic usage windows from the JSON result", () => {
    const output = JSON.stringify({
      result: [
        "Current session: 30% used \u00b7 resets Jul 23, 1:30am (America/Chicago)",
        "Current week (all models): 16% used \u00b7 resets Jul 28, 1am (America/Chicago)",
        "Current week (Fable): 26% used \u00b7 resets Jul 28, 1am (America/Chicago)",
      ].join("\n"),
    });

    expect(parseClaudeUsageLimitsJson(output, "2026-07-22T12:00:00.000Z")).toEqual({
      source: "claudePrint",
      checkedAt: "2026-07-22T12:00:00.000Z",
      windows: [
        {
          label: "Session",
          usedPercent: 30,
          windowDurationMins: 300,
          resetsAt: "2026-07-23T06:30:00.000Z",
        },
        {
          label: "Weekly (all models)",
          usedPercent: 16,
          windowDurationMins: 10_080,
          resetsAt: "2026-07-28T06:00:00.000Z",
        },
        {
          label: "Weekly (Fable)",
          usedPercent: 26,
          windowDurationMins: 10_080,
          resetsAt: "2026-07-28T06:00:00.000Z",
        },
      ],
    });
  });

  it("fails closed for malformed or changed output", () => {
    expect(parseClaudeUsageLimitsJson("not json", "2026-07-22T12:00:00.000Z")).toBeUndefined();
    expect(
      parseClaudeUsageLimitsJson(
        JSON.stringify({ result: "Your limits look healthy." }),
        "2026-07-22T12:00:00.000Z",
      ),
    ).toBeUndefined();
  });

  it("uses the reset zone's local year around the UTC new-year boundary", () => {
    const output = JSON.stringify({
      result: "Current session: 30% used \u00b7 resets Dec 31, 11pm (America/Los_Angeles)",
    });

    expect(
      parseClaudeUsageLimitsJson(output, "2027-01-01T00:30:00.000Z")?.windows[0]?.resetsAt,
    ).toBe("2027-01-01T07:00:00.000Z");
  });
});
