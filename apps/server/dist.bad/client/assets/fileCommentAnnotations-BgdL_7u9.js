var e = 0;
function t() {
  return ((e += 1), `file-comment-${Date.now()}-${e}`);
}
function n(e) {
  return { startLine: Math.min(e.start, e.end), endLine: Math.max(e.start, e.end) };
}
function r(e, t) {
  return e === t ? `L${e}` : `L${e} to L${t}`;
}
function i(e) {
  return e.map((e) => ({
    ...e,
    metadata: {
      entries: e.metadata.entries.map((t) => {
        let n = t.endLine - t.startLine;
        return { ...t, endLine: e.lineNumber, startLine: Math.max(1, e.lineNumber - n) };
      }),
    },
  }));
}
export { i, t as n, n as r, r as t };
//# sourceMappingURL=fileCommentAnnotations-BgdL_7u9.js.map
