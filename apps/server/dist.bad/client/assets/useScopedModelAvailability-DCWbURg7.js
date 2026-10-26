import { n as e } from "./jsx-runtime-BQExFN_X.js";
import { Ht as t, Nt as n, Wt as r } from "./utils-CPoejuy5.js";
import { M as i, i as a, j as o } from "./useSettings-N-JG2LFZ.js";
import { x as s } from "./settingsLayout-2i87rQY9.js";
var c = e();
function l(e, l) {
  let u = (0, c.c)(6),
    { targets: d } = s(),
    { environments: f } = i(),
    p = o(),
    m;
  return (
    u[0] !== l || u[1] !== f || u[2] !== p || u[3] !== e || u[4] !== d
      ? ((m = (i, o) => {
          let s = l.find((e) => e.instanceId === i);
          for (let c of d) {
            let l = f.find((e) => e.environmentId === c.environmentId),
              u = p.get(c.environmentId);
            if (!l?.serverConfig || !u) continue;
            let d = t(r(u), c.settings, c.projectId).find((e) => e.instanceId === i),
              m = n(a(c.settings, e), u).get(i);
            if (
              !d?.enabled ||
              !d.isAvailable ||
              d.driverKind !== s?.driverKind ||
              !m?.some((e) => e.slug === o && !e.isUnavailable)
            )
              return `This model is unavailable on ${l?.label ?? `a selected environment`}. Select that environment to choose its model separately.`;
          }
          return null;
        }),
        (u[0] = l),
        (u[1] = f),
        (u[2] = p),
        (u[3] = e),
        (u[4] = d),
        (u[5] = m))
      : (m = u[5]),
    m
  );
}
export { l as t };
//# sourceMappingURL=useScopedModelAvailability-DCWbURg7.js.map
