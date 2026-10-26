import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./utils-CPoejuy5.js";
var i = t(),
  a = `[[data-sidebar-state=collapsed]_&]:pl-[var(--workspace-titlebar-content-left)] max-md:[[data-sidebar-state=expanded]_&]:pl-[var(--workspace-titlebar-content-left)]`,
  o = e(n(), 1);
function s(e) {
  let t = (0, i.c)(12),
    n,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (s = t[2]), (c = t[3]), (l = t[4]))
    : (({ electron: c, reserveNativeControls: l, className: n, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l));
  let u = c !== void 0 && c,
    d = l === void 0 ? u : l,
    f = u && `drag-region`,
    p = d && `wco:pr-(--workspace-native-controls-inset)`,
    m;
  t[5] !== n || t[6] !== f || t[7] !== p
    ? ((m = r(
        `flex h-[var(--workspace-topbar-height)]! min-h-[var(--workspace-topbar-height)]! max-h-[var(--workspace-topbar-height)]! shrink-0 items-center gap-3 pl-(--workspace-gutter-start) pr-(--workspace-gutter-end) [[data-panel-animations=true]_&]:motion-safe:transition-[padding-left,padding-right] [[data-panel-animations=true]_&]:motion-safe:duration-(--panel-animation-duration) [[data-panel-animations=true]_&]:motion-safe:ease-out`,
        f,
        p,
        a,
        n,
      )),
      (t[5] = n),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let h;
  return (
    t[9] !== s || t[10] !== m
      ? ((h = (0, o.jsx)(`header`, { className: m, ...s })), (t[9] = s), (t[10] = m), (t[11] = h))
      : (h = t[11]),
    h
  );
}
export { a as n, s as t };
//# sourceMappingURL=WorkspacePageHeader-Dwf68L7C.js.map
