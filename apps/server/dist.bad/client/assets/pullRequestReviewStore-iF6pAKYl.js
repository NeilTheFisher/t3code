import { n as e } from "./jsx-runtime-BQExFN_X.js";
import { X as t } from "./utils-CPoejuy5.js";
var n = e(),
  r = 0;
function i() {
  return ((r += 1), `pending-review-comment-${r}`);
}
function a(e) {
  return JSON.stringify([
    e.projectId,
    e.host?.toLowerCase() ?? null,
    e.repository.toLowerCase(),
    e.number,
  ]);
}
var o = [],
  s = t()((e) => ({
    drafts: {},
    summaries: {},
    addComment: (t, n) => e((e) => ({ drafts: { ...e.drafts, [t]: [...(e.drafts[t] ?? o), n] } })),
    removeComment: (t, n) =>
      e((e) => {
        let r = (e.drafts[t] ?? o).filter((e) => e.id !== n);
        if (r.length > 0) return { drafts: { ...e.drafts, [t]: r } };
        let { [t]: i, ...a } = e.drafts;
        return { drafts: a };
      }),
    removeComments: (t, n) =>
      e((e) => {
        let r = new Set(n),
          i = (e.drafts[t] ?? o).filter((e) => !r.has(e.id));
        if (i.length > 0) return { drafts: { ...e.drafts, [t]: i } };
        let { [t]: a, ...s } = e.drafts;
        return { drafts: s };
      }),
    clear: (t) =>
      e((e) => {
        let { [t]: n, ...r } = e.drafts;
        return { drafts: r };
      }),
    setSummary: (t, n) => e((e) => ({ summaries: { ...e.summaries, [t]: n } })),
    clearSummary: (t, n) =>
      e((e) => {
        if (e.summaries[t] !== n) return e;
        let { [t]: r, ...i } = e.summaries;
        return { summaries: i };
      }),
  }));
function c(e) {
  let t = (0, n.c)(2),
    r;
  return (
    t[0] === e ? (r = t[1]) : ((r = (t) => t.drafts[a(e)] ?? o), (t[0] = e), (t[1] = r)), s(r)
  );
}
export { s as i, a as n, c as r, i as t };
//# sourceMappingURL=pullRequestReviewStore-iF6pAKYl.js.map
