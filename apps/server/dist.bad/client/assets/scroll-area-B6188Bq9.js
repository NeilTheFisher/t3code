import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Ga as i,
  Mo as a,
  Pa as o,
  Va as s,
  Wa as c,
  ba as l,
  ga as u,
  qr as d,
  t as f,
  wa as p,
  wo as m,
  ya as h,
} from "./utils-CPoejuy5.js";
import { a as g, i as _, n as v, t as y } from "./CSPContext-BIshez4y.js";
var b = e(t()),
  x = b.createContext(void 0);
function S() {
  let e = b.useContext(x);
  if (e === void 0) throw Error(a(53));
  return e;
}
var C = (function (e) {
  return (
    (e.scrollAreaCornerHeight = `--scroll-area-corner-height`),
    (e.scrollAreaCornerWidth = `--scroll-area-corner-width`),
    e
  );
})({});
function w(e, t, n) {
  if (!e) return 0;
  let r = getComputedStyle(e),
    i = n === `x` ? `Inline` : `Block`;
  return n === `x` && t === `margin`
    ? parseFloat(r[`${t}InlineStart`]) * 2
    : parseFloat(r[`${t}${i}Start`]) + parseFloat(r[`${t}${i}End`]);
}
var T = (function (e) {
    return (
      (e.orientation = `data-orientation`),
      (e.hovering = `data-hovering`),
      (e.scrolling = `data-scrolling`),
      (e.hasOverflowX = `data-has-overflow-x`),
      (e.hasOverflowY = `data-has-overflow-y`),
      (e.overflowXStart = `data-overflow-x-start`),
      (e.overflowXEnd = `data-overflow-x-end`),
      (e.overflowYStart = `data-overflow-y-start`),
      (e.overflowYEnd = `data-overflow-y-end`),
      e
    );
  })({}),
  E = (function (e) {
    return (
      (e.scrolling = `data-scrolling`),
      (e.hasOverflowX = `data-has-overflow-x`),
      (e.hasOverflowY = `data-has-overflow-y`),
      (e.overflowXStart = `data-overflow-x-start`),
      (e.overflowXEnd = `data-overflow-x-end`),
      (e.overflowYStart = `data-overflow-y-start`),
      (e.overflowYEnd = `data-overflow-y-end`),
      e
    );
  })({}),
  D = {
    hasOverflowX: (e) => (e ? { [E.hasOverflowX]: `` } : null),
    hasOverflowY: (e) => (e ? { [E.hasOverflowY]: `` } : null),
    overflowXStart: (e) => (e ? { [E.overflowXStart]: `` } : null),
    overflowXEnd: (e) => (e ? { [E.overflowXEnd]: `` } : null),
    overflowYStart: (e) => (e ? { [E.overflowYStart]: `` } : null),
    overflowYEnd: (e) => (e ? { [E.overflowYEnd]: `` } : null),
    cornerHidden: () => null,
  },
  O = e(r()),
  k = { x: 0, y: 0 },
  A = { width: 0, height: 0 },
  j = { xStart: !1, xEnd: !1, yStart: !1, yEnd: !1 },
  ee = { x: !0, y: !0, corner: !0 },
  M = b.forwardRef(function (e, t) {
    let { render: n, className: r, overflowEdgeThreshold: a, style: s, ...c } = e,
      l = te(a),
      u = o(),
      d = p(),
      f = p(),
      { nonce: g, disableStyleElements: _ } = y(),
      [S, E] = b.useState(!1),
      [M, N] = b.useState(!1),
      [P, F] = b.useState(!1),
      [I, L] = b.useState(!1),
      [ne, re] = b.useState(!1),
      [R, z] = b.useState(A),
      [B, V] = b.useState(A),
      [H, ie] = b.useState(j),
      [U, W] = b.useState(ee),
      G = b.useRef(null),
      K = b.useRef(null),
      q = b.useRef(null),
      J = b.useRef(null),
      Y = b.useRef(null),
      X = b.useRef(null),
      ae = b.useRef(null),
      oe = b.useRef(!1),
      se = b.useRef(0),
      ce = b.useRef(0),
      le = b.useRef(0),
      ue = b.useRef(0),
      Z = b.useRef(`vertical`),
      Q = b.useRef(k),
      de = i((e) => {
        let t = e.x - Q.current.x,
          n = e.y - Q.current.y;
        ((Q.current = e),
          n !== 0 &&
            (F(!0),
            d.start(500, () => {
              F(!1);
            })),
          t !== 0 &&
            (N(!0),
            f.start(500, () => {
              N(!1);
            })));
      }),
      $ = i((e) => {
        e.button === 0 &&
          ((oe.current = !0),
          (se.current = e.clientY),
          (ce.current = e.clientX),
          (Z.current = e.currentTarget.getAttribute(T.orientation)),
          K.current && ((le.current = K.current.scrollTop), (ue.current = K.current.scrollLeft)),
          Y.current && Z.current === `vertical` && Y.current.setPointerCapture(e.pointerId),
          X.current && Z.current === `horizontal` && X.current.setPointerCapture(e.pointerId));
      }),
      fe = i((e) => {
        if (!oe.current) return;
        let t = e.clientY - se.current,
          n = e.clientX - ce.current;
        if (K.current) {
          let r = K.current.scrollHeight,
            i = K.current.clientHeight,
            a = K.current.scrollWidth,
            o = K.current.clientWidth;
          if (Y.current && q.current && Z.current === `vertical`) {
            let n = w(q.current, `padding`, `y`),
              a = w(Y.current, `margin`, `y`),
              o = Y.current.offsetHeight,
              s = t / (q.current.offsetHeight - o - n - a);
            ((K.current.scrollTop = le.current + s * (r - i)),
              e.preventDefault(),
              F(!0),
              d.start(500, () => {
                F(!1);
              }));
          }
          if (X.current && J.current && Z.current === `horizontal`) {
            let t = w(J.current, `padding`, `x`),
              r = w(X.current, `margin`, `x`),
              i = X.current.offsetWidth,
              s = n / (J.current.offsetWidth - i - t - r);
            ((K.current.scrollLeft = ue.current + s * (a - o)),
              e.preventDefault(),
              N(!0),
              f.start(500, () => {
                N(!1);
              }));
          }
        }
      }),
      pe = i((e) => {
        ((oe.current = !1),
          Y.current && Z.current === `vertical` && Y.current.releasePointerCapture(e.pointerId),
          X.current && Z.current === `horizontal` && X.current.releasePointerCapture(e.pointerId));
      });
    function me(e) {
      L(e.pointerType === `touch`);
    }
    function he(e) {
      if ((me(e), e.pointerType !== `touch`)) {
        let t = h(G.current, e.target);
        E(t);
      }
    }
    let ge = b.useMemo(
        () => ({
          scrolling: M || P,
          hasOverflowX: !U.x,
          hasOverflowY: !U.y,
          overflowXStart: H.xStart,
          overflowXEnd: H.xEnd,
          overflowYStart: H.yStart,
          overflowYEnd: H.yEnd,
          cornerHidden: U.corner,
        }),
        [M, P, U.x, U.y, U.corner, H],
      ),
      _e = {
        role: `presentation`,
        onPointerEnter: he,
        onPointerMove: he,
        onPointerDown: me,
        onPointerLeave() {
          E(!1);
        },
        style: {
          position: `relative`,
          [C.scrollAreaCornerHeight]: `${R.height}px`,
          [C.scrollAreaCornerWidth]: `${R.width}px`,
        },
      },
      ve = m(`div`, e, { state: ge, ref: [t, G], props: [_e, c], stateAttributesMapping: D }),
      ye = b.useMemo(
        () => ({
          handlePointerDown: $,
          handlePointerMove: fe,
          handlePointerUp: pe,
          handleScroll: de,
          cornerSize: R,
          setCornerSize: z,
          thumbSize: B,
          setThumbSize: V,
          hasMeasuredScrollbar: ne,
          setHasMeasuredScrollbar: re,
          touchModality: I,
          cornerRef: ae,
          scrollingX: M,
          setScrollingX: N,
          scrollingY: P,
          setScrollingY: F,
          hovering: S,
          setHovering: E,
          viewportRef: K,
          rootRef: G,
          scrollbarYRef: q,
          scrollbarXRef: J,
          thumbYRef: Y,
          thumbXRef: X,
          rootId: u,
          hiddenState: U,
          setHiddenState: W,
          overflowEdges: H,
          setOverflowEdges: ie,
          viewportState: ge,
          overflowEdgeThreshold: l,
        }),
        [$, fe, pe, de, R, B, ne, I, M, N, P, F, S, E, u, U, H, ge, l],
      );
    return (0, O.jsxs)(x.Provider, { value: ye, children: [!_ && v.getElement(g), ve] });
  });
function te(e) {
  if (typeof e == `number`) {
    let t = Math.max(0, e);
    return { xStart: t, xEnd: t, yStart: t, yEnd: t };
  }
  return {
    xStart: Math.max(0, e?.xStart || 0),
    xEnd: Math.max(0, e?.xEnd || 0),
    yStart: Math.max(0, e?.yStart || 0),
    yEnd: Math.max(0, e?.yEnd || 0),
  };
}
var N = b.createContext(void 0),
  P = (function (e) {
    return (
      (e.scrollAreaOverflowXStart = `--scroll-area-overflow-x-start`),
      (e.scrollAreaOverflowXEnd = `--scroll-area-overflow-x-end`),
      (e.scrollAreaOverflowYStart = `--scroll-area-overflow-y-start`),
      (e.scrollAreaOverflowYEnd = `--scroll-area-overflow-y-end`),
      e
    );
  })({}),
  F = !1;
function I() {
  F ||
    s ||
    (typeof CSS < `u` &&
      `registerProperty` in CSS &&
      [
        P.scrollAreaOverflowXStart,
        P.scrollAreaOverflowXEnd,
        P.scrollAreaOverflowYStart,
        P.scrollAreaOverflowYEnd,
      ].forEach((e) => {
        try {
          CSS.registerProperty({ name: e, syntax: `<length>`, inherits: !1, initialValue: `0px` });
        } catch {}
      }),
    (F = !0));
}
var L = b.forwardRef(function (e, t) {
  let { render: n, className: r, style: a, ...o } = e,
    {
      viewportRef: s,
      scrollbarYRef: l,
      scrollbarXRef: u,
      thumbYRef: f,
      thumbXRef: h,
      cornerRef: y,
      cornerSize: x,
      setCornerSize: C,
      setThumbSize: T,
      rootId: E,
      setHiddenState: k,
      hiddenState: A,
      setHasMeasuredScrollbar: j,
      handleScroll: ee,
      setHovering: M,
      setOverflowEdges: te,
      overflowEdges: F,
      overflowEdgeThreshold: L,
      scrollingX: R,
      scrollingY: z,
    } = S(),
    B = d(),
    V = b.useRef(!0),
    H = b.useRef([NaN, NaN, NaN, NaN]),
    ie = p(),
    U = p(),
    W = i(() => {
      let e = s.current,
        t = l.current,
        n = u.current,
        r = f.current,
        i = h.current,
        a = y.current;
      if (!e) return;
      let o = e.scrollHeight,
        c = e.scrollWidth,
        d = e.clientHeight,
        p = e.clientWidth,
        m = e.scrollTop,
        v = e.scrollLeft,
        b = H.current,
        S = Number.isNaN(b[0]);
      if (((b[0] = d), (b[1] = o), (b[2] = p), (b[3] = c), S && j(!0), o === 0 || c === 0)) return;
      let E = ne(e),
        D = E.y,
        O = E.x,
        A = p / c,
        ee = d / o,
        M = Math.max(0, c - p),
        N = Math.max(0, o - d),
        F = 0,
        I = 0;
      if (!O) {
        let e = 0;
        ((e = g(B === `rtl` ? -v : v, 0, M)), (F = _(e, M)), (I = M - F));
      }
      let R = D ? 0 : g(m, 0, N),
        z = D ? 0 : _(R, N),
        V = D ? 0 : N - z,
        ie = O ? 0 : p,
        U = D ? 0 : d,
        W = 0,
        G = 0;
      !O && !D && ((W = t?.offsetWidth || 0), (G = n?.offsetHeight || 0));
      let K = x.width === 0 && x.height === 0,
        q = K ? W : 0,
        J = K ? G : 0,
        Y = w(n, `padding`, `x`),
        X = w(t, `padding`, `y`),
        ae = w(i, `margin`, `x`),
        oe = w(r, `margin`, `y`),
        se = ie - Y - ae,
        ce = U - X - oe,
        le = n ? Math.min(n.offsetWidth - q, se) : se,
        ue = t ? Math.min(t.offsetHeight - J, ce) : ce,
        Z = Math.max(16, le * A),
        Q = Math.max(16, ue * ee);
      if ((T((e) => (e.height === Q && e.width === Z ? e : { width: Z, height: Q })), t && r)) {
        let e = t.offsetHeight - Q - X - oe,
          n = o - d,
          i = n === 0 ? 0 : m / n,
          a = Math.min(e, Math.max(0, i * e));
        r.style.transform = `translate3d(0,${a}px,0)`;
      }
      if (n && i) {
        let e = n.offsetWidth - Z - Y - ae,
          t = c - p,
          r = t === 0 ? 0 : v / t,
          a = B === `rtl` ? g(r * e, -e, 0) : g(r * e, 0, e);
        i.style.transform = `translate3d(${a}px,0,0)`;
      }
      let de = [
        [P.scrollAreaOverflowXStart, F],
        [P.scrollAreaOverflowXEnd, I],
        [P.scrollAreaOverflowYStart, z],
        [P.scrollAreaOverflowYEnd, V],
      ];
      for (let [t, n] of de) e.style.setProperty(t, `${n}px`);
      (a && (O || D ? C({ width: 0, height: 0 }) : !O && !D && C({ width: W, height: G })),
        k((e) => re(e, E)));
      let $ = {
        xStart: !O && F > L.xStart,
        xEnd: !O && I > L.xEnd,
        yStart: !D && z > L.yStart,
        yEnd: !D && V > L.yEnd,
      };
      te((e) =>
        e.xStart === $.xStart && e.xEnd === $.xEnd && e.yStart === $.yStart && e.yEnd === $.yEnd
          ? e
          : $,
      );
    });
  (c(() => {
    s.current && I();
  }, [s]),
    c(() => {
      queueMicrotask(W);
    }, [W, A, B]),
    c(() => {
      s.current?.matches(`:hover`) && M(!0);
    }, [s, M]),
    b.useEffect(() => {
      let e = s.current;
      if (typeof ResizeObserver > `u` || !e) return;
      let t = !1,
        n = new ResizeObserver(() => {
          if (!t) {
            t = !0;
            let n = H.current;
            if (
              n[0] === e.clientHeight &&
              n[1] === e.scrollHeight &&
              n[2] === e.clientWidth &&
              n[3] === e.scrollWidth
            )
              return;
          }
          W();
        });
      return (
        n.observe(e),
        U.start(0, () => {
          let t = e.getAnimations({ subtree: !0 });
          t.length !== 0 &&
            Promise.allSettled(t.map((e) => e.finished))
              .then(W)
              .catch(() => {});
        }),
        () => {
          (n.disconnect(), U.clear());
        }
      );
    }, [W, s, U]));
  function G() {
    V.current = !1;
  }
  let K = {
      role: `presentation`,
      ...(E && { "data-id": `${E}-viewport` }),
      tabIndex: A.x && A.y ? -1 : 0,
      className: v.className,
      style: { overflow: `scroll` },
      onScroll() {
        s.current &&
          (W(),
          V.current || ee({ x: s.current.scrollLeft, y: s.current.scrollTop }),
          ie.start(100, () => {
            V.current = !0;
          }));
      },
      onWheel: G,
      onTouchMove: G,
      onPointerMove: G,
      onPointerEnter: G,
      onKeyDown: G,
    },
    q = b.useMemo(
      () => ({
        scrolling: R || z,
        hasOverflowX: !A.x,
        hasOverflowY: !A.y,
        overflowXStart: F.xStart,
        overflowXEnd: F.xEnd,
        overflowYStart: F.yStart,
        overflowYEnd: F.yEnd,
        cornerHidden: A.corner,
      }),
      [R, z, A.x, A.y, A.corner, F],
    ),
    J = m(`div`, e, { ref: [t, s], state: q, props: [K, o], stateAttributesMapping: D }),
    Y = b.useMemo(() => ({ computeThumbPosition: W }), [W]);
  return (0, O.jsx)(N.Provider, { value: Y, children: J });
});
function ne(e) {
  let t = e.clientHeight >= e.scrollHeight,
    n = e.clientWidth >= e.scrollWidth;
  return { y: t, x: n, corner: t || n };
}
function re(e, t) {
  return e.y === t.y && e.x === t.x && e.corner === t.corner ? e : t;
}
var R = b.createContext(void 0);
function z() {
  let e = b.useContext(R);
  if (e === void 0) throw Error(a(54));
  return e;
}
var B = (function (e) {
    return (
      (e.scrollAreaThumbHeight = `--scroll-area-thumb-height`),
      (e.scrollAreaThumbWidth = `--scroll-area-thumb-width`),
      e
    );
  })({}),
  V = b.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        orientation: i = `vertical`,
        keepMounted: a = !1,
        style: o,
        ...s
      } = e,
      {
        hovering: c,
        scrollingX: f,
        scrollingY: p,
        hiddenState: g,
        overflowEdges: _,
        scrollbarYRef: v,
        scrollbarXRef: y,
        viewportRef: x,
        thumbYRef: T,
        thumbXRef: E,
        handlePointerDown: k,
        handlePointerUp: A,
        rootId: j,
        thumbSize: ee,
        hasMeasuredScrollbar: M,
      } = S(),
      te = {
        hovering: c,
        scrolling: { horizontal: f, vertical: p }[i],
        orientation: i,
        hasOverflowX: !g.x,
        hasOverflowY: !g.y,
        overflowXStart: _.xStart,
        overflowXEnd: _.xEnd,
        overflowYStart: _.yStart,
        overflowYEnd: _.yEnd,
        cornerHidden: g.corner,
      },
      N = d(),
      P = !M && !a,
      F = i === `vertical` ? g.y : g.x,
      I = a || !F;
    b.useEffect(() => {
      if (!I) return;
      let e = x.current,
        t = i === `vertical` ? v.current : y.current;
      if (!t) return;
      function n(n) {
        if (!e || !t || n.ctrlKey) return;
        n.preventDefault();
        let r = i === `horizontal`,
          a = r ? `scrollLeft` : `scrollTop`,
          o = r ? n.deltaX : n.deltaY,
          s = r ? e.scrollWidth - e.clientWidth : e.scrollHeight - e.clientHeight,
          c = r && N === `rtl` ? -s : 0,
          l = r && N === `rtl` ? 0 : s,
          u = e[a];
        (u <= c && o < 0) || (u >= l && o > 0) || (e[a] = Math.min(l, Math.max(c, u + o)));
      }
      return u(t, `wheel`, n, { passive: !1 });
    }, [N, i, y, v, I, x]);
    let L = {
        ...(j && { "data-id": `${j}-scrollbar` }),
        onPointerDown(e) {
          if (e.button !== 0) return;
          let t = l(e.nativeEvent),
            n = i === `vertical` ? T.current : E.current;
          if (!(n && h(n, t)) && x.current) {
            if (T.current && v.current && i === `vertical`) {
              let t = w(T.current, `margin`, `y`),
                n = w(v.current, `padding`, `y`),
                r = T.current.offsetHeight,
                i = v.current.getBoundingClientRect(),
                a = e.clientY - i.top - r / 2 - n + t / 2,
                o = x.current.scrollHeight,
                s = x.current.clientHeight,
                c = (a / (v.current.offsetHeight - r - n - t)) * (o - s);
              x.current.scrollTop = c;
            }
            if (E.current && y.current && i === `horizontal`) {
              let t = w(E.current, `margin`, `x`),
                n = w(y.current, `padding`, `x`),
                r = E.current.offsetWidth,
                i = y.current.getBoundingClientRect(),
                a = e.clientX - i.left - r / 2 - n + t / 2,
                o = x.current.scrollWidth,
                s = x.current.clientWidth,
                c = a / (y.current.offsetWidth - r - n - t),
                l;
              (N === `rtl`
                ? ((l = (1 - c) * (o - s)), x.current.scrollLeft <= 0 && (l = -l))
                : (l = c * (o - s)),
                (x.current.scrollLeft = l));
            }
            k(e);
          }
        },
        onPointerUp: A,
        style: {
          position: `absolute`,
          touchAction: `none`,
          WebkitUserSelect: `none`,
          userSelect: `none`,
          visibility: P ? `hidden` : void 0,
          ...(i === `vertical` && {
            top: 0,
            bottom: `var(${C.scrollAreaCornerHeight})`,
            insetInlineEnd: 0,
            [B.scrollAreaThumbHeight]: `${ee.height}px`,
          }),
          ...(i === `horizontal` && {
            insetInlineStart: 0,
            insetInlineEnd: `var(${C.scrollAreaCornerWidth})`,
            bottom: 0,
            [B.scrollAreaThumbWidth]: `${ee.width}px`,
          }),
        },
      },
      ne = m(`div`, e, {
        ref: [t, i === `vertical` ? v : y],
        state: te,
        props: [L, s],
        stateAttributesMapping: D,
      }),
      re = b.useMemo(() => ({ orientation: i }), [i]);
    return I ? (0, O.jsx)(R.Provider, { value: re, children: ne }) : null;
  }),
  H = b.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      {
        thumbYRef: o,
        thumbXRef: s,
        handlePointerDown: c,
        handlePointerMove: l,
        handlePointerUp: u,
        setScrollingX: d,
        setScrollingY: f,
        hasMeasuredScrollbar: p,
      } = S(),
      { orientation: h } = z();
    return m(`div`, e, {
      ref: [t, h === `vertical` ? o : s],
      state: { orientation: h },
      props: [
        {
          onPointerDown: c,
          onPointerMove: l,
          onPointerUp(e) {
            (h === `vertical` && f(!1), h === `horizontal` && d(!1), u(e));
          },
          style: {
            visibility: p ? void 0 : `hidden`,
            ...(h === `vertical` && { height: `var(${B.scrollAreaThumbHeight})` }),
            ...(h === `horizontal` && { width: `var(${B.scrollAreaThumbWidth})` }),
          },
        },
        a,
      ],
    });
  }),
  ie = b.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      { cornerRef: o, cornerSize: s, hiddenState: c } = S(),
      l = m(`div`, e, {
        ref: [t, o],
        props: [
          {
            style: {
              position: `absolute`,
              bottom: 0,
              insetInlineEnd: 0,
              width: s.width,
              height: s.height,
            },
          },
          a,
        ],
      });
    return c.corner ? null : l;
  }),
  U = n();
function W({ top: e, bottom: t }) {
  if (e || t)
    return f(
      `virtualized-scroll-fade [--fade-size:1.5rem]`,
      e &&
        t &&
        `[--virtualized-scroll-fade-mask:linear-gradient(to_bottom,transparent,black_var(--fade-size),black_calc(100%-var(--fade-size)),transparent)]`,
      e &&
        !t &&
        `[--virtualized-scroll-fade-mask:linear-gradient(to_bottom,transparent,black_var(--fade-size))]`,
      !e &&
        t &&
        `[--virtualized-scroll-fade-mask:linear-gradient(to_bottom,black_calc(100%-var(--fade-size)),transparent)]`,
    );
}
function G(e) {
  let t = (0, U.c)(34),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]))
    : (({
        className: r,
        children: n,
        scrollFade: a,
        scrollFadePadding: o,
        scrollbarGutter: s,
        hideScrollbars: c,
        chainVerticalScroll: l,
        radius: u,
        viewportTabIndex: d,
        ...i
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d));
  let p = a !== void 0 && a,
    m = o === void 0 || o,
    h = s !== void 0 && s,
    g = c !== void 0 && c,
    _ = l !== void 0 && l,
    v = (u === void 0 ? `inherit` : u) === `none` ? `rounded-none` : `rounded-[inherit]`,
    y;
  t[11] !== r || t[12] !== v
    ? ((y = f(`relative size-full min-h-0 overflow-hidden`, v, r)),
      (t[11] = r),
      (t[12] = v),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === d ? (b = t[15]) : ((b = d === void 0 ? {} : { tabIndex: d }), (t[14] = d), (t[15] = b));
  let x = _ && `overscroll-y-auto`,
    S =
      p &&
      `mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] focus-visible:mask-none [--fade-size:1.5rem]`,
    C = p && m && `scroll-p-[var(--fade-size)]`,
    w = p && !m && `has-focus-visible:mask-none`,
    T = h && `scrollbar-gutter-stable`,
    E = g && `[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
    D;
  t[16] !== x || t[17] !== S || t[18] !== C || t[19] !== w || t[20] !== T || t[21] !== E
    ? ((D = f(
        `h-full max-h-[inherit] overflow-auto overscroll-contain rounded-[inherit] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-has-overflow-x:overscroll-x-contain`,
        x,
        S,
        C,
        w,
        T,
        E,
      )),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = D))
    : (D = t[22]);
  let k;
  t[23] !== n || t[24] !== D || t[25] !== b
    ? ((k = (0, O.jsx)(L, {
        ...b,
        className: D,
        "data-slot": `scroll-area-viewport`,
        children: n,
      })),
      (t[23] = n),
      (t[24] = D),
      (t[25] = b),
      (t[26] = k))
    : (k = t[26]);
  let A;
  t[27] === g
    ? (A = t[28])
    : ((A =
        !g &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(K, { orientation: `vertical` }),
            (0, O.jsx)(K, { orientation: `horizontal` }),
            (0, O.jsx)(ie, { "data-slot": `scroll-area-corner` }),
          ],
        })),
      (t[27] = g),
      (t[28] = A));
  let j;
  return (
    t[29] !== i || t[30] !== k || t[31] !== A || t[32] !== y
      ? ((j = (0, O.jsxs)(M, { className: y, ...i, children: [k, A] })),
        (t[29] = i),
        (t[30] = k),
        (t[31] = A),
        (t[32] = y),
        (t[33] = j))
      : (j = t[33]),
    j
  );
}
function K(e) {
  let t = (0, U.c)(11),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, orientation: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i === void 0 ? `vertical` : i,
    o;
  t[4] === n
    ? (o = t[5])
    : ((o = f(
        `flex opacity-0 transition-opacity delay-300 data-[orientation=horizontal]:mx-1 data-[orientation=horizontal]:mb-px data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:my-1 data-[orientation=vertical]:mr-px data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100`,
        n,
      )),
      (t[4] = n),
      (t[5] = o));
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, O.jsx)(H, {
        className: `relative flex-1 rounded-full bg-[var(--app-scrollbar-thumb)] transition-colors hover:bg-[var(--app-scrollbar-thumb-hover)]`,
        "data-slot": `scroll-area-thumb`,
      })),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== a || t[8] !== r || t[9] !== o
      ? ((c = (0, O.jsx)(V, {
          className: o,
          "data-slot": `scroll-area-scrollbar`,
          orientation: a,
          ...r,
          children: s,
        })),
        (t[7] = a),
        (t[8] = r),
        (t[9] = o),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
export { W as n, G as t };
//# sourceMappingURL=scroll-area-B6188Bq9.js.map
