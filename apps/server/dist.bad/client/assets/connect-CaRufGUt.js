import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { Dr as i, Yn as a } from "./utils-CPoejuy5.js";
import { j as o } from "./runtime-CY2dlMEg.js";
import { c as s, o as c } from "./dist-BdqWmeee.js";
import { t as l } from "./authRedirect-DWE5a_T9.js";
import { D as u, E as d } from "./main-BZa0O6xN.js";
import { t as f } from "./AuthSurfaceShell-o7M6DX0Z.js";
var p = n(),
  m = e(t(), 1),
  h = e(r(), 1);
function g(e) {
  let t = (0, p.c)(10),
    { eyebrow: n, title: r, description: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = n
        ? (0, h.jsx)(`p`, {
            className: `text-3xs font-semibold tracking-widest text-primary uppercase`,
            children: n,
          })
        : null),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, h.jsx)(`h1`, {
        className: `mt-2 text-2xl font-semibold tracking-tight sm:text-3xl`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = (0, h.jsx)(`p`, {
        className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, h.jsxs)(h.Fragment, { children: [a, o, s] })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var _ = {
  eyebrow: `Authorization request`,
  title: `This connect link is incomplete`,
  description:
    "The link is missing its authorization request. Re-run `t3 connect` in your terminal and open the freshly printed URL.",
};
function v() {
  let e = (0, p.c)(22),
    [t] = (0, m.useState)(y),
    n = s(),
    { isLoaded: r, isSignedIn: o } = c(),
    v = (0, m.useRef)(!1),
    b = (0, m.useRef)(!1),
    x;
  e[0] !== n || e[1] !== t
    ? ((x = () => {
        t && n.openSignIn(l(u(t, window.location.href), a));
      }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = x))
    : (x = e[2]);
  let S = x,
    C = (0, m.useEffectEvent)(S),
    w;
  e[3] !== r || e[4] !== o || e[5] !== C || e[6] !== t
    ? ((w = () => {
        if (!t || !r || b.current) return;
        if (!o) {
          v.current || ((v.current = !0), C());
          return;
        }
        let e = d(t);
        e && ((b.current = !0), window.location.assign(e));
      }),
      (e[3] = r),
      (e[4] = o),
      (e[5] = C),
      (e[6] = t),
      (e[7] = w))
    : (w = e[7]);
  let T;
  if (
    (e[8] !== r || e[9] !== o || e[10] !== t
      ? ((T = [r, o, t]), (e[8] = r), (e[9] = o), (e[10] = t), (e[11] = T))
      : (T = e[11]),
    (0, m.useEffect)(w, T),
    !t)
  ) {
    let t;
    return (
      e[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, h.jsx)(f, { children: (0, h.jsx)(g, { ..._ }) })), (e[12] = t))
        : (t = e[12]),
      t
    );
  }
  let E = o
      ? `Redirecting to authorize T3 Connect for your CLI…`
      : `Sign in to continue authorizing T3 Connect for your CLI.`,
    D;
  e[13] === E
    ? (D = e[14])
    : ((D = (0, h.jsx)(g, {
        eyebrow: `Browser authorization`,
        title: `Connecting your terminal`,
        description: E,
      })),
      (e[13] = E),
      (e[14] = D));
  let O;
  e[15] !== r || e[16] !== o || e[17] !== S
    ? ((O =
        r && !o
          ? (0, h.jsx)(`div`, {
              className: `mt-6`,
              children: (0, h.jsx)(i, { type: `button`, onClick: S, children: `Sign in` }),
            })
          : null),
      (e[15] = r),
      (e[16] = o),
      (e[17] = S),
      (e[18] = O))
    : (O = e[18]);
  let k;
  return (
    e[19] !== D || e[20] !== O
      ? ((k = (0, h.jsxs)(f, { children: [D, O] })), (e[19] = D), (e[20] = O), (e[21] = k))
      : (k = e[21]),
    k
  );
}
function y() {
  return o(new URL(window.location.href));
}
var b = v;
export { b as component };
//# sourceMappingURL=connect-CaRufGUt.js.map
