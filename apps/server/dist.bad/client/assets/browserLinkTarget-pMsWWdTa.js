import { n as e, r as t } from "./useSettings-N-JG2LFZ.js";
import { S as n } from "./browserHistoryStore-heVS6T5j.js";
function r(e) {
  return e.event.metaKey ||
    e.event.ctrlKey ||
    e.event.button === 1 ||
    e.preference !== `app` ||
    !e.canOpenInApp ||
    !i(e.url)
    ? `system`
    : `app`;
}
function i(e) {
  try {
    let { protocol: t } = new URL(e);
    return t === `http:` || t === `https:`;
  } catch {
    return !1;
  }
}
async function a() {
  return (await e(), t().browserLinkTarget);
}
function o(e) {
  return e != null && n(e.environmentId);
}
export { r as i, i as n, a as r, o as t };
//# sourceMappingURL=browserLinkTarget-pMsWWdTa.js.map
