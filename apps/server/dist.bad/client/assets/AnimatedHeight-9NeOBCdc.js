import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./observeResize-SVLLrLKP.js";
var a = n(),
  o = e(t(), 1),
  s = e(r(), 1),
  c = 250;
function l(e) {
  let t = (0, a.c)(22),
    { children: n, holdHeight: r } = e,
    l = r !== void 0 && r,
    f = (0, o.useRef)(null),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { height: null, isClipping: !1 }), (t[0] = p))
    : (p = t[0]);
  let [m, h] = (0, o.useState)(p),
    g;
  t[1] === m.isClipping
    ? (g = t[2])
    : ((g = () => {
        if (!m.isClipping) return;
        let e = window.setTimeout(() => {
          h(d);
        }, c);
        return () => window.clearTimeout(e);
      }),
      (t[1] = m.isClipping),
      (t[2] = g));
  let _;
  (t[3] !== m.height || t[4] !== m.isClipping
    ? ((_ = [m.height, m.isClipping]), (t[3] = m.height), (t[4] = m.isClipping), (t[5] = _))
    : (_ = t[5]),
    (0, o.useEffect)(g, _));
  let v, y;
  (t[6] === l
    ? ((v = t[7]), (y = t[8]))
    : ((v = () => {
        if (l) return;
        let e = f.current;
        if (!e) return;
        let t = null,
          n = null,
          r = () => {
            let t = Math.ceil(e.scrollHeight || e.getBoundingClientRect().height);
            h((e) => (e.height === t ? e : { height: t, isClipping: e.height !== null }));
          },
          a = () => {
            (t !== null && (window.cancelAnimationFrame(t), (t = null)),
              n !== null && (window.cancelAnimationFrame(n), (n = null)));
          },
          o = () => {
            (a(),
              r(),
              (t = window.requestAnimationFrame(() => {
                ((t = null),
                  r(),
                  (n = window.requestAnimationFrame(() => {
                    ((n = null), r());
                  })));
              })));
          };
        o();
        let s = i(e, o);
        return () => {
          (s(), a());
        };
      }),
      (y = [l]),
      (t[6] = l),
      (t[7] = v),
      (t[8] = y)),
    (0, o.useLayoutEffect)(v, y));
  let b;
  t[9] !== m.height || t[10] !== m.isClipping || t[11] !== l
    ? ((b =
        m.height === null
          ? void 0
          : { height: m.height, overflow: l || m.isClipping ? `clip` : `visible` }),
      (t[9] = m.height),
      (t[10] = m.isClipping),
      (t[11] = l),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        e.target === e.currentTarget && e.propertyName === `height` && h(u);
      }),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === l ? (S = t[15]) : ((S = l ? { height: `100%` } : void 0), (t[14] = l), (t[15] = S));
  let C;
  t[16] !== n || t[17] !== S
    ? ((C = (0, s.jsx)(`div`, { ref: f, style: S, children: n })),
      (t[16] = n),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w;
  return (
    t[19] !== C || t[20] !== b
      ? ((w = (0, s.jsx)(`div`, {
          "data-slot": `animated-height`,
          className: `transition-[height] duration-200 ease-out motion-reduce:transition-none [overflow-clip-margin:2px]`,
          style: b,
          onTransitionEnd: x,
          children: C,
        })),
        (t[19] = C),
        (t[20] = b),
        (t[21] = w))
      : (w = t[21]),
    w
  );
}
function u(e) {
  return e.isClipping ? { ...e, isClipping: !1 } : e;
}
function d(e) {
  return e.isClipping ? { ...e, isClipping: !1 } : e;
}
export { l as t };
//# sourceMappingURL=AnimatedHeight-9NeOBCdc.js.map
