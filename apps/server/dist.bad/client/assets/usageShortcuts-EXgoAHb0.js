import { g as e } from "./keybindings-b_9MjE1R.js";
var t = [
    { value: `cost`, label: `Cost`, command: `usage.cost` },
    { value: `tokens`, label: `Tokens`, command: `usage.tokens` },
    { value: `limits`, label: `Limits`, command: `usage.limits` },
  ],
  n = [
    { days: 1, label: `Past 24h`, command: `usage.period.day` },
    { days: 7, label: `7 days`, command: `usage.period.week` },
    { days: 30, label: `30 days`, command: `usage.period.month` },
    { days: 90, label: `90 days`, command: `usage.period.quarter` },
  ];
function r(t, n) {
  let r = t.target;
  return r instanceof HTMLElement &&
    (r.tagName === `INPUT` ||
      r.tagName === `TEXTAREA` ||
      r.tagName === `SELECT` ||
      r.isContentEditable ||
      r.closest(
        `[role="dialog"]:not([data-app-modal]), [aria-modal="true"]:not([data-app-modal]), [data-slot$="popup"]:not([data-app-modal])`,
      ))
    ? null
    : e(t, n, { context: { usagePageOpen: !0 } });
}
export { n, r, t };
//# sourceMappingURL=usageShortcuts-EXgoAHb0.js.map
