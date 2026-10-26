function e(e) {
  return e.map((e) => ({ ...e, hunkContent: e.hunkContent.map((e) => ({ ...e })) }));
}
function t(t) {
  return {
    ...t,
    hunks: e(t.hunks),
    deletionLines: [...t.deletionLines],
    additionLines: [...t.additionLines],
  };
}
export { e as n, t };
//# sourceMappingURL=cloneFileDiffMetadata-zVRGqYgv.js.map
