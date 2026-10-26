var e = /^\d+$/;
function t(e) {
  let [t, n] = e.trim().split(`-`, 2),
    r = [];
  for (let e of (t ?? ``).split(`.`)) {
    let t = e.trim();
    t.length > 0 && r.push(t);
  }
  for (; r.length > 0 && r.length < 3;) r.push(`0`);
  return n ? `${r.join(`.`)}-${n}` : r.join(`.`);
}
function n(n) {
  let [i = ``, a] = t(n).replace(/^v/, ``).split(`-`, 2),
    o = i.split(`.`);
  if (o.length !== 3) return null;
  let [s, c, l] = o;
  if (s === void 0 || c === void 0 || l === void 0 || !e.test(s) || !e.test(c) || !e.test(l))
    return null;
  let u = Number.parseInt(s, 10),
    d = Number.parseInt(c, 10),
    f = Number.parseInt(l, 10);
  return [u, d, f].every(Number.isInteger)
    ? { major: u, minor: d, patch: f, prerelease: r(a) }
    : null;
}
function r(e) {
  if (e === void 0) return [];
  let t = [];
  for (let n of e.split(`.`)) {
    let e = n.trim();
    e.length > 0 && t.push(e);
  }
  return t;
}
function i(t, n) {
  let r = e.test(t),
    i = e.test(n);
  return r && i
    ? Number.parseInt(t, 10) - Number.parseInt(n, 10)
    : r
      ? -1
      : i
        ? 1
        : t.localeCompare(n);
}
function a(e, t) {
  let r = n(e),
    a = n(t);
  if (!r || !a) return e.localeCompare(t);
  if (r.major !== a.major) return r.major - a.major;
  if (r.minor !== a.minor) return r.minor - a.minor;
  if (r.patch !== a.patch) return r.patch - a.patch;
  if (r.prerelease.length === 0 && a.prerelease.length === 0) return 0;
  if (r.prerelease.length === 0) return 1;
  if (a.prerelease.length === 0) return -1;
  let o = Math.max(r.prerelease.length, a.prerelease.length);
  for (let e = 0; e < o; e += 1) {
    let t = r.prerelease[e],
      n = a.prerelease[e];
    if (t === void 0) return -1;
    if (n === void 0) return 1;
    let o = i(t, n);
    if (o !== 0) return o;
  }
  return 0;
}
export { n, a as t };
//# sourceMappingURL=semver-CFbvOQKc.js.map
