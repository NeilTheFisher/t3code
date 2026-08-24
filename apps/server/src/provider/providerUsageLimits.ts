import type {
  ProviderUsageLimitsUpdate,
  ServerProviderUsageLimits,
  ServerProviderUsageWindow,
} from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";

const WINDOW_KIND_ORDER: Record<ServerProviderUsageWindow["kind"], number> = {
  session: 0,
  weekly: 1,
  monthly: 2,
  other: 3,
};

export function clampPercent(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
}

function sortWindows(
  windows: Iterable<ServerProviderUsageWindow>,
): ReadonlyArray<ServerProviderUsageWindow> {
  return [...windows].toSorted(
    (left, right) =>
      WINDOW_KIND_ORDER[left.kind] - WINDOW_KIND_ORDER[right.kind] ||
      left.id.localeCompare(right.id),
  );
}

export function makeUsageLimits(input: {
  readonly checkedAt: string;
  readonly windows: Iterable<ServerProviderUsageWindow>;
}): ServerProviderUsageLimits {
  return { checkedAt: input.checkedAt, windows: sortWindows(input.windows) };
}

export function makeUnavailableUsageLimits(input: {
  readonly checkedAt: string;
  readonly reason: "unsupported" | "probeFailed";
  readonly message?: string;
}): ServerProviderUsageLimits {
  return {
    checkedAt: input.checkedAt,
    windows: [],
    unavailable: {
      reason: input.reason,
      ...(input.message ? { message: input.message } : {}),
    },
  };
}

/**
 * Fold a sparse runtime update into the limits a provider currently
 * publishes. Windows upsert by `id`; a window the update omits keeps its
 * previous values, and a window that arrives without `resetsAt` or
 * `windowDurationMins` keeps whatever the last probe resolved for it. An
 * update with no windows leaves `previous` untouched.
 *
 * An `unsupported` snapshot stays unsupported: an account that cannot have
 * subscription windows will not start reporting them mid-turn.
 */
export function applyUsageLimitsUpdate(input: {
  readonly previous: ServerProviderUsageLimits | undefined;
  readonly update: ProviderUsageLimitsUpdate;
  readonly checkedAt: string;
}): ServerProviderUsageLimits | undefined {
  const { previous, update } = input;
  if (update.windows.length === 0 || previous?.unavailable?.reason === "unsupported") {
    return previous;
  }
  const merged = new Map(previous?.windows.map((window) => [window.id, window] as const));
  // Codex sends this notification beside every token-usage tick, almost
  // always with unchanged numbers. Decide "nothing changed" per window on
  // the way through so the no-op case never allocates a new snapshot.
  let changed = false;
  for (const window of update.windows) {
    const existing = merged.get(window.id);
    const next: ServerProviderUsageWindow = {
      ...window,
      usedPercent: clampPercent(window.usedPercent),
      ...(window.resetsAt === undefined && existing?.resetsAt !== undefined
        ? { resetsAt: existing.resetsAt }
        : {}),
      ...(window.windowDurationMins === undefined && existing?.windowDurationMins !== undefined
        ? { windowDurationMins: existing.windowDurationMins }
        : {}),
    };
    if (existing === undefined || !usageWindowEquals(existing, next)) {
      merged.set(window.id, next);
      changed = true;
    }
  }
  if (!changed && previous !== undefined && previous.unavailable === undefined) {
    return previous;
  }
  return {
    ...makeUsageLimits({ checkedAt: input.checkedAt, windows: merged.values() }),
    ...(previous?.resetCredits !== undefined ? { resetCredits: previous.resetCredits } : {}),
  };
}

function usageWindowEquals(a: ServerProviderUsageWindow, b: ServerProviderUsageWindow): boolean {
  return (
    a.id === b.id &&
    a.kind === b.kind &&
    a.label === b.label &&
    a.usedPercent === b.usedPercent &&
    a.resetsAt === b.resetsAt &&
    a.windowDurationMins === b.windowDurationMins
  );
}

/**
 * Choose what to publish after a status probe finishes. A probe that failed
 * this time must not wipe bars a previous probe or a turn already
 * established, so the last good snapshot stays; `unsupported` is
 * authoritative and replaces them.
 *
 * A successful probe replaces the published windows outright, including any
 * runtime update that landed while it was running. That is a deliberate
 * trade-off: the Codex and Claude reads take a few seconds at most, the
 * probe is the fresher full read in every case except that window, and the
 * per-window epoch bookkeeping needed to reconcile the two was more code
 * than the sub-second regression it prevented. The next runtime event
 * corrects it.
 */
export function resolveUsageLimitsAfterProbe(input: {
  readonly published: ServerProviderUsageLimits | undefined;
  readonly probed: ServerProviderUsageLimits | undefined;
}): ServerProviderUsageLimits | undefined {
  const { published, probed } = input;
  if (probed?.unavailable?.reason === "probeFailed" && published && !published.unavailable) {
    return published;
  }
  return probed;
}

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
] as const;

const SESSION_MINS = 5 * 60;
const WEEK_MINS = 7 * 24 * 60;
const MONTH_MINS = 30 * 24 * 60;

function parseClaudeReset(input: {
  readonly month: string;
  readonly day: string;
  readonly hour: string;
  readonly minute: string | undefined;
  readonly meridiem: string;
  readonly timeZone: string;
  readonly checkedAt: string;
}): string | undefined {
  const month =
    MONTHS.indexOf(input.month.toLowerCase().slice(0, 3) as (typeof MONTHS)[number]) + 1;
  if (month === 0) return undefined;
  const checked = DateTime.make(input.checkedAt);
  if (Option.isNone(checked)) return undefined;
  const checkedInResetZone = DateTime.setZoneNamed(checked.value, input.timeZone);
  if (Option.isNone(checkedInResetZone)) return undefined;
  const checkedParts = DateTime.toParts(checkedInResetZone.value);
  const day = Number.parseInt(input.day, 10);
  let hour = Number.parseInt(input.hour, 10);
  if (
    !Number.isFinite(day) ||
    !Number.isFinite(hour) ||
    day < 1 ||
    day > 31 ||
    hour < 1 ||
    hour > 12
  ) {
    return undefined;
  }
  if (hour === 12) hour = 0;
  if (input.meridiem.toLowerCase() === "pm") hour += 12;
  const year = checkedParts.month === 12 && month === 1 ? checkedParts.year + 1 : checkedParts.year;
  const localDateTime = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${input.minute ?? "00"}:00`;
  const reset = DateTime.makeZoned(localDateTime, {
    timeZone: input.timeZone,
    adjustForTimeZone: true,
  });
  return Option.isSome(reset) ? DateTime.formatIso(reset.value) : undefined;
}

function claudeScopedWindowId(modelName: string): string {
  return `seven_day_${modelName.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
}

/**
 * Fallback Claude usage probe: parses the CLI's human `Current session:` /
 * `Current week:` output when the SDK's `get_usage` read is unavailable. Window
 * ids mirror `claudeUsageLimits.ts` so a turn-driven rate-limit event lands on
 * the row this probe drew.
 */
export function parseClaudeUsageLimitsJson(
  output: string,
  checkedAt: string,
): ServerProviderUsageLimits | undefined {
  let result: string;
  try {
    const decoded: unknown = JSON.parse(output);
    if (
      typeof decoded !== "object" ||
      decoded === null ||
      typeof (decoded as { result?: unknown }).result !== "string"
    ) {
      return undefined;
    }
    result = (decoded as { result: string }).result;
  } catch {
    return undefined;
  }

  const windows: ServerProviderUsageWindow[] = [];
  const pattern =
    /^Current (session|week(?: \([^)]+\))?):\s*(\d{1,3}(?:\.\d+)?)% used\s*[\u00b7-]\s*resets ([A-Za-z]{3,9}) (\d{1,2}), (\d{1,2})(?::(\d{2}))?(am|pm) \(([^)]+)\)$/gim;
  for (const match of result.matchAll(pattern)) {
    const [, rawLabel, percent, month, day, hour, minute, meridiem, timeZone] = match;
    if (!rawLabel || !percent || !month || !day || !hour || !meridiem || !timeZone) continue;
    const usedPercent = Number.parseFloat(percent);
    if (!Number.isFinite(usedPercent)) continue;
    const isSession = rawLabel.toLowerCase() === "session";
    const modelName = rawLabel.match(/\(([^)]+)\)/)?.[1];
    const resetsAt = parseClaudeReset({
      month,
      day,
      hour,
      minute,
      meridiem,
      timeZone,
      checkedAt,
    });
    windows.push(
      isSession
        ? {
            id: "five_hour",
            kind: "session",
            label: "Session",
            usedPercent: clampPercent(usedPercent),
            windowDurationMins: SESSION_MINS,
            ...(resetsAt ? { resetsAt } : {}),
          }
        : {
            id: modelName ? claudeScopedWindowId(modelName) : "seven_day",
            kind: "weekly",
            label: modelName ? `Weekly · ${modelName}` : "Weekly",
            usedPercent: clampPercent(usedPercent),
            windowDurationMins: WEEK_MINS,
            ...(resetsAt ? { resetsAt } : {}),
          },
    );
  }

  if (!windows.some((window) => window.id === "five_hour")) {
    const sessionWithoutReset = result.match(/^Current session:\s*(\d{1,3}(?:\.\d+)?)% used\s*$/im);
    const usedPercent = Number.parseFloat(sessionWithoutReset?.[1] ?? "");
    if (Number.isFinite(usedPercent)) {
      windows.unshift({
        id: "five_hour",
        kind: "session",
        label: "Session",
        usedPercent: clampPercent(usedPercent),
        windowDurationMins: SESSION_MINS,
      });
    }
  }

  return windows.length > 0 ? makeUsageLimits({ checkedAt, windows }) : undefined;
}

function decodeDashboardHtml(html: string): string {
  return html
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll('\\"', '"')
    .replaceAll("\\u0022", '"');
}

function parseOpenCodeWindow(
  html: string,
  fieldName: string,
  id: ServerProviderUsageWindow["id"],
  kind: ServerProviderUsageWindow["kind"],
  windowDurationMins: number,
  checkedAt: string,
): ServerProviderUsageWindow | undefined {
  const body = html.match(
    new RegExp(`["']?${fieldName}["']?\\s*:\\s*(?:\\$R\\[\\d+\\]\\s*=\\s*)?\\{([^{}]*)\\}`, "s"),
  )?.[1];
  if (!body) return undefined;
  const usedPercent = Number.parseFloat(
    body.match(/["']?usagePercent["']?\s*:\s*"?(-?\d+(?:\.\d+)?)"?/)?.[1] ?? "",
  );
  const resetInSec = Number.parseFloat(
    body.match(/["']?resetInSec["']?\s*:\s*"?(-?\d+(?:\.\d+)?)"?/)?.[1] ?? "",
  );
  if (!Number.isFinite(usedPercent) || !Number.isFinite(resetInSec)) return undefined;
  const checked = DateTime.make(checkedAt);
  const resetsAt = Option.isSome(checked)
    ? DateTime.formatIso(
        DateTime.add(checked.value, {
          seconds: Math.max(0, Math.round(resetInSec)),
        }),
      )
    : undefined;
  return {
    id,
    kind,
    label: kind === "session" ? "Session" : kind === "weekly" ? "Weekly" : "Monthly",
    usedPercent: clampPercent(usedPercent),
    windowDurationMins,
    ...(resetsAt ? { resetsAt } : {}),
  };
}

/** Fork: OpenCode's Go dashboard reports subscription limits as server-rendered HTML. */
export function parseOpenCodeGoUsageHtml(
  output: string,
  checkedAt: string,
): ServerProviderUsageLimits | undefined {
  const html = decodeDashboardHtml(output);
  const windows = [
    parseOpenCodeWindow(html, "rollingUsage", "session", "session", SESSION_MINS, checkedAt),
    parseOpenCodeWindow(html, "weeklyUsage", "weekly", "weekly", WEEK_MINS, checkedAt),
    parseOpenCodeWindow(html, "monthlyUsage", "monthly", "monthly", MONTH_MINS, checkedAt),
  ].filter((window): window is ServerProviderUsageWindow => window !== undefined);
  return windows.length > 0 ? makeUsageLimits({ checkedAt, windows }) : undefined;
}
