import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { Ju as r, QC as i, Yu as a, qu as o, t as s } from "./utils-CPoejuy5.js";
import { _ as c } from "./runtime-CY2dlMEg.js";
import { n as l } from "./EnvironmentMachineIcon-M7J6_xOZ.js";
var u = t(),
  d = e(n(), 1);
function f(e) {
  let t = e.username ? `${e.username}@${e.hostname}` : e.hostname;
  return e.port ? `${t}:${e.port}` : t;
}
function p(e, t = null) {
  let { entry: n } = e;
  if (n.target._tag === `PrimaryConnectionTarget`) return `This machine`;
  let s = a(n);
  if (s.length > 1) {
    let e = t === null ? void 0 : s.find((e) => o(e.target) === o(t));
    return e === void 0 ? r(s[0]) : `via ${r(e)}`;
  }
  return e.relayManaged
    ? `T3 Connect`
    : c(n.target)
      ? `WSL`
      : n.target._tag === `SshConnectionTarget` &&
          i(n.profile) &&
          n.profile.value._tag === `SshConnectionProfile`
        ? `SSH ${f(n.profile.value.target)}`
        : (e.displayUrl ?? `Remote link`);
}
function m(e) {
  let t = (0, u.c)(28),
    {
      kind: n,
      label: r,
      subtitle: i,
      below: a,
      detail: o,
      dimmed: c,
      className: f,
      children: p,
    } = e,
    m = c !== void 0 && c,
    h;
  t[0] === f
    ? (h = t[1])
    : ((h = s(
        `grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-3 py-2.5 sm:px-4`,
        f,
      )),
      (t[0] = f),
      (t[1] = h));
  let g = m && `opacity-60`,
    _;
  t[2] === g ? (_ = t[3]) : ((_ = s(`size-4 text-muted-foreground`, g)), (t[2] = g), (t[3] = _));
  let v;
  t[4] !== n || t[5] !== _
    ? ((v = (0, d.jsx)(l, { "aria-hidden": !0, kind: n, className: _ })),
      (t[4] = n),
      (t[5] = _),
      (t[6] = v))
    : (v = t[6]);
  let y = m && `opacity-60`,
    b;
  t[7] === y ? (b = t[8]) : ((b = s(`min-w-0`, y)), (t[7] = y), (t[8] = b));
  let x;
  t[9] === r
    ? (x = t[10])
    : ((x = (0, d.jsx)(`p`, {
        className: `truncate text-sm font-medium text-foreground`,
        children: r,
      })),
      (t[9] = r),
      (t[10] = x));
  let S;
  t[11] === i
    ? (S = t[12])
    : ((S = (0, d.jsx)(`div`, {
        className: `truncate text-xs text-muted-foreground`,
        children: i,
      })),
      (t[11] = i),
      (t[12] = S));
  let C;
  t[13] !== a || t[14] !== b || t[15] !== x || t[16] !== S
    ? ((C = (0, d.jsxs)(`div`, { className: b, children: [x, S, a] })),
      (t[13] = a),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === p
    ? (w = t[19])
    : ((w = (0, d.jsx)(`div`, { className: `flex shrink-0 items-center gap-1`, children: p })),
      (t[18] = p),
      (t[19] = w));
  let T;
  t[20] === o
    ? (T = t[21])
    : ((T = o
        ? (0, d.jsx)(`div`, { className: `col-span-2 col-start-2 min-w-0`, children: o })
        : null),
      (t[20] = o),
      (t[21] = T));
  let E;
  return (
    t[22] !== C || t[23] !== w || t[24] !== T || t[25] !== h || t[26] !== v
      ? ((E = (0, d.jsxs)(`div`, { className: h, children: [v, C, w, T] })),
        (t[22] = C),
        (t[23] = w),
        (t[24] = T),
        (t[25] = h),
        (t[26] = v),
        (t[27] = E))
      : (E = t[27]),
    E
  );
}
export { p as n, f as r, m as t };
//# sourceMappingURL=EnvironmentRow-BYtbjHf6.js.map
