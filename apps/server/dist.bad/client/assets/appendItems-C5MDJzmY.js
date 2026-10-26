import { t as e } from "./lib-DodxV8LD.js";
function t(e) {
  return { type: `text`, value: e };
}
function n({ tagName: e, children: t = [], properties: n = {} }) {
  return { type: `element`, tagName: e, properties: n, children: t };
}
function r({ name: e, width: t = 16, height: r = 16, properties: i }) {
  return n({
    tagName: `svg`,
    properties: { width: t, height: r, viewBox: `0 0 16 16`, ...i },
    children: [n({ tagName: `use`, properties: { href: `#${e.replace(/^#/, ``)}` } })],
  });
}
function i(e) {
  return n({ tagName: `div`, properties: { "data-gutter": `` }, children: e });
}
function a(e, r, i, a = {}) {
  return n({
    tagName: `div`,
    properties: { "data-line-type": e, "data-column-number": r, "data-line-index": i, ...a },
    children:
      r == null
        ? void 0
        : [
            n({
              tagName: `span`,
              properties: { "data-line-number-content": `` },
              children: [t(`${r}`)],
            }),
          ],
  });
}
function o(e, t, r) {
  return n({
    tagName: `div`,
    properties: {
      "data-gutter-buffer": t,
      "data-buffer-size": r,
      "data-line-type": t === `annotation` ? void 0 : e,
      style:
        t === `annotation`
          ? `grid-row: span ${r};`
          : `grid-row: span ${r};min-height:calc(${r} * 1lh);`,
    },
  });
}
var s = new Set([
    `area`,
    `base`,
    `basefont`,
    `bgsound`,
    `br`,
    `col`,
    `command`,
    `embed`,
    `frame`,
    `hr`,
    `image`,
    `img`,
    `input`,
    `keygen`,
    `link`,
    `meta`,
    `param`,
    `source`,
    `track`,
    `wbr`,
  ]),
  c = new Set([`svg`, `template`, `script`, `style`]),
  l = {
    class: `class`,
    className: `class`,
    id: `id`,
    role: `role`,
    style: `style`,
    tabIndex: `tabindex`,
    tabindex: `tabindex`,
    title: `title`,
  },
  u = /^data-[\w.:-]+$/,
  d = /[<&]/g,
  f = /[\0"&'`]/g,
  p = { "<": `&#x3C;`, "&": `&#x26;`, '"': `&#x22;`, "'": `&#x27;`, "`": `&#x60;`, "\0": `&#x0;` },
  m = 256;
function h(e) {
  let t = new Map();
  return Array.isArray(e) ? g(e, t) : _(e, t);
}
function g(e, t) {
  let n = ``;
  for (let r of e) n += _(r, t);
  return n;
}
function _(t, n) {
  switch (t.type) {
    case `text`:
      return x(t.value);
    case `element`:
      return v(t, n);
    case `root`:
      return g(t.children, n);
    default:
      return e(t);
  }
}
function v(t, n) {
  let { tagName: r } = t;
  if (
    r === `span` &&
    t.children.length === 1 &&
    t.children[0].type === `text` &&
    typeof t.properties?.style == `string`
  ) {
    let e = !0;
    for (let n in t.properties)
      if (n !== `style` && t.properties[n] != null) {
        e = !1;
        break;
      }
    if (e) return `<span ${y(t.properties.style, n)}>${x(t.children[0].value)}</span>`;
  }
  if (c.has(r)) return e(t);
  let i = b(t.properties, n);
  if (i == null) return e(t);
  let a = i === `` ? `<${r}>` : `<${r} ${i}>`,
    o = g(t.children, n);
  return o === `` && s.has(r.toLowerCase()) ? a : `${a}${o}</${r}>`;
}
function y(e, t) {
  let n = t.get(e);
  return (n ?? ((n = `style="${S(e)}"`), t.size < m && t.set(e, n)), n);
}
function b(e, t) {
  let n = ``;
  for (let r in e) {
    let i = e[r];
    if (i == null) continue;
    let a = l[r] ?? (u.test(r) ? r : void 0);
    if (a == null) return;
    if (i === !1 || (typeof i == `number` && Number.isNaN(i))) continue;
    let o =
      r === `style` && typeof i == `string`
        ? y(i, t)
        : i === !0
          ? a
          : `${a}="${S(Array.isArray(i) ? i.join(` `).trim() : String(i))}"`;
    n += n === `` ? o : ` ${o}`;
  }
  return n;
}
function x(e) {
  return e.indexOf(`<`) < 0 && e.indexOf(`&`) < 0 ? e : e.replace(d, C);
}
function S(e) {
  return e.replace(f, C);
}
function C(e) {
  return p[e];
}
function w(e, n, r) {
  let i = typeof r.lineInfo == `function` ? r.lineInfo(n) : r.lineInfo[n - 1];
  if (i == null) {
    let t = `processLine: line ${n}, contains no state.lineInfo`;
    throw (console.error(t, { node: e, line: n, state: r }), Error(t));
  }
  return (
    (e.tagName = `div`),
    (e.properties[`data-line`] = i.lineNumber),
    (e.properties[`data-alt-line`] = i.altLineNumber),
    (e.properties[`data-line-type`] = i.type),
    (e.properties[`data-line-index`] = i.lineIndex),
    e.children.length === 0 &&
      e.children.push(
        t(`
`),
      ),
    e
  );
}
var T = new WeakMap();
function E(e, t = !1) {
  let { htmlStyle: n } = e;
  if (n != null) {
    let e = t ? T.get(n) : void 0;
    if (e == null) {
      e = ``;
      for (let t in n) e += `${e === `` ? `` : `;`}${t}:${n[t]}`;
      t && T.set(n, e);
    }
    return e;
  }
  let r = e.color == null ? `` : `color:${e.color}`;
  if ((e.bgColor != null && (r += `;background-color:${e.bgColor}`), e.fontStyle != null)) {
    (e.fontStyle & 1 && (r += `;font-style:italic`), e.fontStyle & 2 && (r += `;font-weight:bold`));
    let t = !!(e.fontStyle & 4),
      n = !!(e.fontStyle & 8);
    (t || n) &&
      (r += `;text-decoration:${t ? `underline` : ``}${t && n ? ` ` : ``}${n ? `line-through` : ``}`);
  }
  return r.replace(/^;/, ``);
}
function D(e, t, n) {
  let r = !1,
    i;
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    get() {
      return (
        (r ||= ((i = n()), !0)),
        Object.getOwnPropertyDescriptor(e, t)?.configurable === !0 &&
          Object.defineProperty(e, t, { configurable: !0, enumerable: !0, writable: !0, value: i }),
        i
      );
    },
    set(n) {
      if (Object.getOwnPropertyDescriptor(e, t)?.configurable === !0)
        Object.defineProperty(e, t, { configurable: !0, enumerable: !0, writable: !0, value: n });
      else if (Object.isFrozen(e)) throw TypeError(`Cannot assign to read only array index '${t}'`);
      else ((i = n), (r = !0));
    },
  });
}
var O = Symbol(`no-token`),
  k = Symbol(`multiple-tokens`);
function A(e) {
  let t = j(e);
  if (t != null) return t;
  let r = O,
    i = [],
    a = [],
    o,
    s = () => {
      if (a.length === 0 || o == null) ((a = []), (o = void 0));
      else if (a.length === 1) {
        let e = a[0];
        if (e?.type === `element`) {
          N(e, o);
          for (let t of e.children) M(t);
        } else M(e);
        (i.push(e), (a = []), (o = void 0));
      } else {
        for (let e of a) M(e);
        (i.push(n({ tagName: `span`, properties: { "data-char": o }, children: a })),
          (a = []),
          (o = void 0));
      }
    },
    c = (e) => {
      e !== O && (e === k ? (r = k) : r === O ? (r = e) : r !== e && (r = k));
    };
  for (let t of e.children) {
    let e = t.type === `element` ? A(t) : O;
    (c(e),
      typeof e == `number`
        ? (o != null && o !== e && s(), (o ??= e), a.push(t))
        : (s(), i.push(t)));
  }
  return (s(), (e.children = i), r);
}
function j(e) {
  let t = e.properties[`data-char`];
  if (typeof t == `number`) return t;
}
function M(e) {
  if (e.type === `element`) {
    e.properties[`data-char`] = void 0;
    for (let t of e.children) M(t);
  }
}
function N(e, t) {
  e.properties[`data-char`] = t;
}
function P(
  e,
  {
    state: t,
    lazyLineAST: n = !1,
    cacheHtmlStyles: r = !1,
    useTokenTransformer: i = !1,
    mergeWhitespaces: a = `always`,
    decorations: o = [],
    lineOffsets: s = [],
  },
) {
  let c;
  for (let t of o) {
    let n = (c ??= new Map()),
      r = { ...t, start: R(t.start, s), end: R(t.end, s) },
      i = Math.min(r.end.line, e.length - 1);
    for (let e = r.start.line; e <= i; e++) {
      let t = n.get(e);
      (t ?? n.set(e, (t = [])), t.push(r));
    }
  }
  let l = (e, n) => {
    let o;
    if (i || a !== `never`) {
      let t = ``,
        n = 0;
      for (let r = 0; r < e.length; r++) {
        let a = e[r];
        if (i) {
          let t = a.content.trim();
          if (t !== `` && t !== a.content) {
            o ??= e.slice(0, r);
            let n = a.content.indexOf(t);
            (n > 0 && o.push({ content: a.content.slice(0, n), offset: a.offset }),
              o.push({ ...a, content: t, offset: a.offset + n }));
            let i = n + t.length;
            i < a.content.length && o.push({ content: a.content.slice(i), offset: a.offset + i });
            continue;
          }
        } else {
          let i = !!((a.fontStyle ?? 0) & 12);
          if (!i && /^\s+$/.test(a.content) && r < e.length - 1) {
            ((o ??= e.slice(0, r)), t === `` && (n = a.offset), (t += a.content));
            continue;
          }
          t !== `` &&
            o != null &&
            (i
              ? o.push({ content: t, offset: n })
              : (a = { ...a, content: t + a.content, offset: n }),
            (t = ``));
        }
        o?.push(a);
      }
    }
    o ??= e;
    let s = {
        type: `element`,
        tagName: t == null ? `span` : `div`,
        properties: t == null ? { class: `line` } : {},
        children: [],
      },
      l = c?.get(n),
      u = l == null ? F(s, o, i, r) : I(s, o, l, n, i, r);
    return (
      i &&
        u === 0 &&
        s.children.push({ type: `element`, tagName: `br`, properties: {}, children: [] }),
      i && l != null && A(s),
      t == null ? s : w(s, n + 1, t)
    );
  };
  if (!n) return e.map(l);
  let u = Array(e.length);
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    D(u, t, () => l(n, t));
  }
  return u;
}
function F(e, t, n, r) {
  let i = 0;
  for (let a of t)
    a.content !== `` && (e.children.push(L(a, E(a, r), a.content, i, n)), (i += a.content.length));
  return i;
}
function I(e, t, n, r, i, a) {
  n.length > 1 &&
    n.sort((e, t) =>
      e.start.line === t.start.line
        ? e.start.character === t.start.character
          ? e.end.line === t.end.line
            ? t.end.character - e.end.character
            : t.end.line - e.end.line
          : e.start.character - t.start.character
        : e.start.line - t.start.line,
    );
  let o = t.reduce((e, t) => e + t.content.length, 0),
    s = [];
  for (let e = 0; e < n.length; e++) {
    let t = n[e],
      i = {
        decoration: t,
        order: e,
        from: t.start.line === r ? t.start.character : 0,
        to: t.end.line === r ? t.end.character : o,
      };
    s.push(
      { position: Math.max(0, Math.min(i.from, o)), range: i, start: !0 },
      { position: Math.max(0, Math.min(i.to, o)), range: i, start: !1 },
    );
  }
  s.sort((e, t) => e.position - t.position);
  let c = [],
    l = [],
    u = 0,
    d = (e, t) => {
      let n = 0,
        r = c.length;
      for (; n < r;) {
        let t = (n + r) >>> 1;
        c[t].order < e.order ? (n = t + 1) : (r = t);
      }
      t ? c.splice(n, 0, e) : c[n] === e && c.splice(n, 1);
    },
    f = () => {
      let t = e,
        n = 0;
      for (let e of c) {
        if (l[n]?.range !== e) {
          l.length = n;
          let r = {
            type: `element`,
            tagName: `span`,
            properties: { ...e.decoration.properties },
            children: [],
          };
          (t.children.push(r), l.push({ range: e, node: r }));
        }
        t = l[n++].node;
      }
      return ((l.length = n), t);
    },
    p = e,
    m = (e) => {
      let t = u;
      for (; s[u]?.position === e;) u++;
      let n = !1;
      for (let n = t; n < u; n++) {
        let { range: t, start: r } = s[n];
        !r && t.from !== t.to && e < o && d(t, !1);
      }
      for (let r = t; r < u; r++) {
        let { range: t, start: i } = s[r];
        i &&
          t.from <= e &&
          t.to >= e &&
          (t.to > e || t.from === e || e === o) &&
          (d(t, !0), t.from === t.to && (n = !0));
      }
      if (n) {
        f();
        for (let e = t; e < u; e++) {
          let { range: t, start: n } = s[e];
          n && t.from === t.to && d(t, !1);
        }
      }
      e < o && (p = f());
    },
    h = 0;
  for (let e of t) {
    if (e.content === ``) continue;
    let t = h,
      n = t + e.content.length,
      r = E(e, a);
    for (; h < n;) {
      s[u]?.position === h && m(h);
      let a = Math.min(n, s[u]?.position ?? n);
      (p.children.push(
        L(e, r, h === t && a === n ? e.content : e.content.slice(h - t, a - t), t, i),
      ),
        (h = a));
    }
  }
  return (s[u]?.position === h && m(h), h);
}
function L(e, t, n, r, i) {
  let a = e.htmlAttrs == null ? {} : { ...e.htmlAttrs };
  return (
    t !== `` && (a.style = t),
    i && (a[`data-char`] = r),
    { type: `element`, tagName: `span`, properties: a, children: [{ type: `text`, value: n }] }
  );
}
function R(e, t) {
  if (typeof e != `number`) return e;
  let n = 0,
    r = t.length;
  for (; n + 1 < r;) {
    let i = (n + r) >>> 1;
    t[i] <= e ? (n = i) : (r = i);
  }
  return { line: n, character: e - (t[n] ?? 0) };
}
function z(e, t) {
  for (let n of t) e.push(n);
}
export { o as a, n as c, h as i, r as l, P as n, a as o, D as r, i as s, z as t, t as u };
//# sourceMappingURL=appendItems-C5MDJzmY.js.map
