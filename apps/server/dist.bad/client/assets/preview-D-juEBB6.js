import { Gl as e, Kl as t, Lp as n, Vl as r, Wl as i, lv as a } from "./utils-CPoejuy5.js";
import { t as o } from "./runtime-CY2dlMEg.js";
function s(o) {
  let s = r(),
    c = r(),
    l = {
      mode: `serial`,
      key: ({ environmentId: e, input: t }) => JSON.stringify([e, t.threadId]),
    };
  return {
    list: e(o, { label: `environment-data:preview:list`, tag: n.previewList, staleTimeMs: 5e3 }),
    events: t(o, {
      label: `environment-data:preview:events`,
      tag: n.subscribePreviewEvents,
      transform: (e) => e.pipe(a(1)),
    }),
    discoveredServers: t(o, {
      label: `environment-data:preview:discovered-servers`,
      tag: n.subscribeDiscoveredLocalServers,
      idleTtlMs: 0,
    }),
    open: i(o, {
      label: `environment-data:preview:open`,
      tag: n.previewOpen,
      scheduler: s,
      concurrency: l,
    }),
    navigate: i(o, {
      label: `environment-data:preview:navigate`,
      tag: n.previewNavigate,
      scheduler: s,
      concurrency: l,
    }),
    resize: i(o, {
      label: `environment-data:preview:resize`,
      tag: n.previewResize,
      scheduler: s,
      concurrency: l,
    }),
    adjust: i(o, {
      label: `environment-data:preview:adjust`,
      tag: n.previewAdjust,
      scheduler: s,
      concurrency: l,
    }),
    refresh: i(o, {
      label: `environment-data:preview:refresh`,
      tag: n.previewRefresh,
      scheduler: s,
      concurrency: l,
    }),
    close: i(o, {
      label: `environment-data:preview:close`,
      tag: n.previewClose,
      scheduler: s,
      concurrency: l,
    }),
    clearProfile: i(o, {
      label: `environment-data:preview:clear-profile`,
      tag: n.previewClearProfile,
    }),
    reportProfiles: i(o, {
      label: `environment-data:preview:report-profiles`,
      tag: n.previewReportProfiles,
      concurrency: { mode: `latest`, key: ({ environmentId: e }) => e },
    }),
    reportStatus: i(o, {
      label: `environment-data:preview:report-status`,
      tag: n.previewReportStatus,
      scheduler: c,
      concurrency: {
        mode: `latest`,
        key: ({ environmentId: e, input: t }) => JSON.stringify([e, t.threadId, t.tabId]),
      },
    }),
  };
}
var c = s(o);
export { c as t };
//# sourceMappingURL=preview-D-juEBB6.js.map
