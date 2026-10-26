const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/langs-DClb2nDk.js", "assets/index-CEhuMrFr.js"]),
) => i.map((i) => d[i]);
import { t as e } from "./index-CEhuMrFr.js";
import { i as t, n, r } from "./constants-CmGPilXJ.js";
import { yc as i } from "./main-BZa0O6xN.js";
async function a(a) {
  if (typeof __DIFFS_WORKER__ < `u` ? __DIFFS_WORKER__ : i())
    throw Error(
      `resolveLanguage("${a}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`,
    );
  let o = t.get(a);
  if (o != null) return o;
  let s = (async () => {
    let t = n.get(a);
    if (t == null) {
      let { bundledLanguages: n } = await e(
        async () => {
          let { bundledLanguages: e } = await import(`./langs-DClb2nDk.js`);
          return { bundledLanguages: e };
        },
        __vite__mapDeps([0, 1]),
      );
      Object.prototype.hasOwnProperty.call(n, a) && (t = n[a]);
    }
    if (t == null) throw Error(`resolveLanguage: "${a}" not found in bundled or custom languages`);
    let { default: i } = await t(),
      o = { name: a, data: i };
    return (r.has(a) || r.set(a, o), o);
  })();
  t.set(a, s);
  try {
    return await s;
  } finally {
    t.get(a) === s && t.delete(a);
  }
}
function o(e) {
  return r.get(e) ?? a(e);
}
async function s(e) {
  let t = [],
    n = [];
  for (let r of e) {
    if (r === `text` || r === `ansi`) continue;
    let e = o(r) ?? a(r);
    `then` in e ? n.push(e) : t.push(e);
  }
  return (
    n.length > 0 &&
      (await Promise.all(n).then((e) => {
        for (let n of e) {
          if (n == null) throw Error(`resolvedLanguages: unable to resolve language`);
          t.push(n);
        }
      })),
    t
  );
}
export { s as t };
//# sourceMappingURL=resolveLanguages-RcuJsBl_.js.map
