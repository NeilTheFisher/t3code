import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./localApi-CWy6n-K6.js";
import { c as a, r as o } from "./ThreadTerminalDrawer-GjGtrcWP.js";
var s = n(),
  c = e(t(), 1),
  l = e(r(), 1);
function u(e) {
  let t = (0, s.c)(16),
    { output: n, outputOffset: r, onResponse: u } = e,
    p = (0, c.useRef)(null),
    m = (0, c.useRef)(null),
    h = r ?? n.length,
    g;
  t[0] !== u || t[1] !== n || t[2] !== h
    ? ((g = { output: n, offset: h, onResponse: u }),
      (t[0] = u),
      (t[1] = n),
      (t[2] = h),
      (t[3] = g))
    : (g = t[3]);
  let _ = (0, c.useRef)(g),
    v = (0, c.useRef)(0),
    [y, b] = (0, c.useState)(null),
    x,
    S;
  (t[4] !== u || t[5] !== n || t[6] !== r
    ? ((x = () => {
        _.current = { output: n, offset: r ?? n.length, onResponse: u };
        let e = m.current;
        if (!e) return;
        let t = _.current.offset - v.current;
        (t > 0 && t <= n.length ? e.write(n.slice(-t)) : t !== 0 && e.resetAndWrite(n),
          (v.current = _.current.offset));
      }),
      (S = [n, r, u]),
      (t[4] = u),
      (t[5] = n),
      (t[6] = r),
      (t[7] = x),
      (t[8] = S))
    : ((x = t[7]), (S = t[8])),
    (0, c.useEffect)(x, S));
  let C, w;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        let e = p.current;
        if (!e) return;
        let t = !1;
        return (
          a
            .create(e, {
              theme: o(e),
              font: { size: 13 },
              onData: (e) => _.current.onResponse({ type: `terminal`, data: e }),
              onResize: (e, t) =>
                _.current.onResponse({ type: `terminal`, data: ``, size: { cols: e, rows: t } }),
              onSelectionChange: f,
              beforeKey: d,
              onLinkActivate: (e) => {
                /^https?:\/\//i.test(e) &&
                  i()
                    .shell.openExternal(e)
                    .catch(() => b(`Could not open the provider link.`));
              },
            })
            .then((e) => {
              t
                ? e.dispose()
                : ((m.current = e), e.write(_.current.output), (v.current = _.current.offset));
            })
            .catch(() => b(`Could not load the sign-in terminal. Cancel and retry sign-in.`)),
          () => {
            ((t = !0), m.current?.dispose(), (m.current = null));
          }
        );
      }),
      (w = []),
      (t[9] = C),
      (t[10] = w))
    : ((C = t[9]), (w = t[10])),
    (0, c.useEffect)(C, w));
  let T;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, l.jsx)(`div`, {
        ref: p,
        "aria-label": `Provider sign-in terminal`,
        className: `relative h-64 overflow-hidden rounded-md border border-border`,
      })),
      (t[11] = T))
    : (T = t[11]);
  let E;
  t[12] === y
    ? (E = t[13])
    : ((E = y
        ? (0, l.jsx)(`p`, { role: `alert`, className: `text-destructive`, children: y })
        : null),
      (t[12] = y),
      (t[13] = E));
  let D;
  return (
    t[14] === E
      ? (D = t[15])
      : ((D = (0, l.jsxs)(l.Fragment, { children: [T, E] })), (t[14] = E), (t[15] = D)),
    D
  );
}
function d(e) {
  return e.key !== `Tab`;
}
function f() {}
export { u as default };
//# sourceMappingURL=ProviderAuthTerminal-Dpu0aNI0.js.map
