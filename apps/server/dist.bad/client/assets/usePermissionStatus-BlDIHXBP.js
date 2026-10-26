import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { r as i } from "./triangle-alert-Ca4wixX0.js";
import { Dr as a } from "./utils-CPoejuy5.js";
import { t as o } from "./useStableCallback-XvXMCrxI.js";
var s = n(),
  c = e(r(), 1);
function l(e) {
  let t = (0, s.c)(7),
    { permissions: n, busy: r } = e,
    o = r !== void 0 && r,
    l;
  if (t[0] !== o || t[1] !== n) {
    let e;
    (t[3] === o
      ? (e = t[4])
      : ((e = (e) =>
          (0, c.jsxs)(
            `div`,
            {
              className: `flex items-center gap-3 rounded-lg border px-3 py-2`,
              children: [
                e.icon,
                (0, c.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, c.jsx)(`p`, { className: `font-medium`, children: e.title }),
                    (0, c.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: e.description,
                    }),
                  ],
                }),
                e.granted
                  ? (0, c.jsxs)(`span`, {
                      role: `status`,
                      className: `flex items-center gap-1 text-xs text-success`,
                      children: [
                        (0, c.jsx)(i, { className: `size-4`, "aria-hidden": `true` }),
                        `Allowed`,
                      ],
                    })
                  : (0, c.jsx)(a, {
                      size: `xs`,
                      variant: `outline`,
                      disabled: o,
                      onClick: e.onAllow,
                      children: `Allow`,
                    }),
              ],
            },
            e.id,
          )),
        (t[3] = o),
        (t[4] = e)),
      (l = n.map(e)),
      (t[0] = o),
      (t[1] = n),
      (t[2] = l));
  } else l = t[2];
  let u;
  return (
    t[5] === l
      ? (u = t[6])
      : ((u = (0, c.jsx)(`div`, { className: `space-y-2`, children: l })), (t[5] = l), (t[6] = u)),
    u
  );
}
function u(e) {
  let t = (0, s.c)(9),
    n,
    r,
    i,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (o = t[4]))
    : (({ ready: r, busy: i, children: o, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o));
  let l = i !== void 0 && i,
    u = o === void 0 ? `Continue` : o,
    d = !r || l,
    f;
  return (
    t[5] !== u || t[6] !== n || t[7] !== d
      ? ((f = (0, c.jsx)(a, { ...n, disabled: d, children: u })),
        (t[5] = u),
        (t[6] = n),
        (t[7] = d),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
var d = e(t(), 1),
  f = { visible: !0, focused: !0 },
  p = new Set(),
  m = f;
function h() {
  if (typeof document > `u`) return f;
  let e = document.visibilityState === `visible`,
    t = document.hasFocus();
  return m.visible === e && m.focused === t ? m : { visible: e, focused: t };
}
function g() {
  let e = h();
  if (e !== m) {
    m = e;
    for (let e of p) e();
  }
}
function _() {
  return (p.size === 0 && (m = h()), m);
}
function v(e) {
  return typeof document > `u`
    ? () => {}
    : (p.size === 0 &&
        ((m = h()),
        document.addEventListener(`visibilitychange`, g),
        window.addEventListener(`focus`, g),
        window.addEventListener(`blur`, g)),
      p.add(e),
      () => {
        !p.delete(e) ||
          p.size > 0 ||
          (document.removeEventListener(`visibilitychange`, g),
          window.removeEventListener(`focus`, g),
          window.removeEventListener(`blur`, g));
      });
}
var y = 1500,
  b = `Could not check permissions. We'll try again automatically.`;
function x(e, t) {
  let n = { status: t, error: null };
  return {
    getSnapshot: () => n,
    subscribe(t) {
      let r = !1,
        i = !1,
        a = (e) => {
          r || ((n = e), t());
        },
        o = async () => {
          if (!(r || i || !_().visible)) {
            i = !0;
            try {
              a({ status: await e(), error: null });
            } catch {
              a({ status: n.status, error: b });
            }
            i = !1;
          }
        };
      o();
      let s = setInterval(() => void o(), y),
        c = _(),
        l = v(() => {
          let e = _(),
            t = (e.focused && !c.focused) || e.visible !== c.visible;
          ((c = e), t && o());
        });
      return () => {
        ((r = !0), clearInterval(s), l());
      };
    },
  };
}
var S = () => () => {};
function C(e, t, n) {
  let r = (0, s.c)(10),
    i = n === void 0 || n,
    a = o(e),
    c;
  r[0] !== a || r[1] !== t ? ((c = () => x(a, t)), (r[0] = a), (r[1] = t), (r[2] = c)) : (c = r[2]);
  let [l] = (0, d.useState)(c),
    { status: u, error: f } = (0, d.useSyncExternalStore)(i ? l.subscribe : S, l.getSnapshot),
    p;
  r[3] !== f || r[4] !== u
    ? ((p = (e) => f === null && e.every((e) => u[e])), (r[3] = f), (r[4] = u), (r[5] = p))
    : (p = r[5]);
  let m;
  return (
    r[6] !== f || r[7] !== u || r[8] !== p
      ? ((m = { status: u, error: f, isReady: p }), (r[6] = f), (r[7] = u), (r[8] = p), (r[9] = m))
      : (m = r[9]),
    m
  );
}
export { l as n, u as r, C as t };
//# sourceMappingURL=usePermissionStatus-BlDIHXBP.js.map
