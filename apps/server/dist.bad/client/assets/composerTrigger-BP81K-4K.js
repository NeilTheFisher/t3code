function e(e) {
  let t = Math.max(e.lastIndexOf(`/`), e.lastIndexOf(`\\`));
  return t >= 0 ? e.slice(t + 1) : e;
}
function t(e) {
  return e.replaceAll(`\\`, `\\\\`).replaceAll(`[`, `\\[`).replaceAll(`]`, `\\]`);
}
function n(e) {
  return encodeURI(e)
    .replaceAll(`(`, `%28`)
    .replaceAll(`)`, `%29`)
    .replaceAll(`#`, `%23`)
    .replaceAll(`?`, `%3F`)
    .replaceAll(`\\`, `%5C`);
}
function r(r) {
  return `[${t(e(r))}](${n(r)})`;
}
function i(e, t, n, r) {
  let i = n;
  for (; i < e.length && !r(e[i] ?? ``);) i += 1;
  return e.slice(t + 1, i).includes(`/`);
}
function a(e) {
  return /^\.?[0-9][0-9,._]*(?:[kKmMbBtT]|[eE][0-9]+)?[.,;:!?)]*$/.test(e);
}
export { i as n, r, a as t };
//# sourceMappingURL=composerTrigger-BP81K-4K.js.map
