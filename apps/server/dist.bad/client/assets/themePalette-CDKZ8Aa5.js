import { Fy as e, Uy as t, Vy as n, cw as r, db as i, jy as a } from "./utils-CPoejuy5.js";
var o = (e, t) => {
    if (typeof e == `number`) {
      if (t === 3)
        return {
          mode: `rgb`,
          r: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
          g: (((e >> 4) & 15) | (e & 240)) / 255,
          b: ((e & 15) | ((e << 4) & 240)) / 255,
        };
      if (t === 4)
        return {
          mode: `rgb`,
          r: (((e >> 12) & 15) | ((e >> 8) & 240)) / 255,
          g: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
          b: (((e >> 4) & 15) | (e & 240)) / 255,
          alpha: ((e & 15) | ((e << 4) & 240)) / 255,
        };
      if (t === 6)
        return {
          mode: `rgb`,
          r: ((e >> 16) & 255) / 255,
          g: ((e >> 8) & 255) / 255,
          b: (e & 255) / 255,
        };
      if (t === 8)
        return {
          mode: `rgb`,
          r: ((e >> 24) & 255) / 255,
          g: ((e >> 16) & 255) / 255,
          b: ((e >> 8) & 255) / 255,
          alpha: (e & 255) / 255,
        };
    }
  },
  s = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  c = (e) => o(s[e.toLowerCase()], 6),
  l = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
  u = (e) => {
    let t;
    return (t = e.match(l)) ? o(parseInt(t[1], 16), t[1].length) : void 0;
  },
  d = `([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`,
  f = `${d}%`,
  p = `(?:${d}%|${d})`,
  m = `(?:${d}%|${d}|none)`,
  h = `(?:${d}(deg|grad|rad|turn)|${d})`,
  g = `\\s*,\\s*`;
RegExp(`^` + m + `$`);
var ee = RegExp(`^rgba?\\(\\s*${d}${g}${d}${g}${d}\\s*(?:,\\s*${p}\\s*)?\\)$`),
  te = RegExp(`^rgba?\\(\\s*${f}${g}${f}${g}${f}\\s*(?:,\\s*${p}\\s*)?\\)$`),
  ne = (e) => {
    let t = { mode: `rgb` },
      n;
    if ((n = e.match(ee)))
      (n[1] !== void 0 && (t.r = n[1] / 255),
        n[2] !== void 0 && (t.g = n[2] / 255),
        n[3] !== void 0 && (t.b = n[3] / 255));
    else if ((n = e.match(te)))
      (n[1] !== void 0 && (t.r = n[1] / 100),
        n[2] !== void 0 && (t.g = n[2] / 100),
        n[3] !== void 0 && (t.b = n[3] / 100));
    else return;
    return (
      n[4] === void 0
        ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5])))
        : (t.alpha = Math.max(0, Math.min(1, n[4] / 100))),
      t
    );
  },
  re = (e, t) =>
    e === void 0
      ? void 0
      : typeof e == `object`
        ? e.mode === void 0
          ? t
            ? { ...e, mode: t }
            : void 0
          : e
        : ve(e),
  ie =
    (e = `rgb`) =>
    (t) =>
      (t = re(t, e)) === void 0
        ? void 0
        : t.mode === e
          ? t
          : _[t.mode][e]
            ? _[t.mode][e](t)
            : e === `rgb`
              ? _[t.mode].rgb(t)
              : _.rgb[e](_[t.mode].rgb(t)),
  _ = {},
  ae = {},
  v = [],
  oe = {},
  se = (e) => e,
  y = (e) => (
    (_[e.mode] = { ..._[e.mode], ...e.toMode }),
    Object.keys(e.fromMode || {}).forEach((t) => {
      (_[t] || (_[t] = {}), (_[t][e.mode] = e.fromMode[t]));
    }),
    (e.ranges ||= {}),
    (e.difference ||= {}),
    e.channels.forEach((t) => {
      if ((e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]))
        throw Error(`Missing interpolator for: ${t}`);
      (typeof e.interpolate[t] == `function` && (e.interpolate[t] = { use: e.interpolate[t] }),
        e.interpolate[t].fixup || (e.interpolate[t].fixup = se));
    }),
    (ae[e.mode] = e),
    (e.parse || []).forEach((t) => {
      le(t, e.mode);
    }),
    ie(e.mode)
  ),
  ce = (e) => ae[e],
  le = (e, t) => {
    if (typeof e == `string`) {
      if (!t) throw Error(`'mode' required when 'parser' is a string`);
      oe[e] = t;
    } else typeof e == `function` && v.indexOf(e) < 0 && v.push(e);
  },
  ue = /[^\x00-\x7F]|[a-zA-Z_]/,
  de = /[^\x00-\x7F]|[-\w]/,
  b = {
    Function: `function`,
    Ident: `ident`,
    Number: `number`,
    Percentage: `percentage`,
    ParenClose: `)`,
    None: `none`,
    Hue: `hue`,
    Alpha: `alpha`,
  },
  x = 0;
function S(e) {
  let t = e[x],
    n = e[x + 1];
  return t === `-` || t === `+`
    ? /\d/.test(n) || (n === `.` && /\d/.test(e[x + 2]))
    : t === `.`
      ? /\d/.test(n)
      : /\d/.test(t);
}
function C(e) {
  if (x >= e.length) return !1;
  let t = e[x];
  if (ue.test(t)) return !0;
  if (t === `-`) {
    if (e.length - x < 2) return !1;
    let t = e[x + 1];
    return !!(t === `-` || ue.test(t));
  }
  return !1;
}
var fe = { deg: 1, rad: 180 / Math.PI, grad: 9 / 10, turn: 360 };
function w(e) {
  let t = ``;
  if (
    ((e[x] === `-` || e[x] === `+`) && (t += e[x++]),
    (t += T(e)),
    e[x] === `.` && /\d/.test(e[x + 1]) && (t += e[x++] + T(e)),
    (e[x] === `e` || e[x] === `E`) &&
      ((e[x + 1] === `-` || e[x + 1] === `+`) && /\d/.test(e[x + 2])
        ? (t += e[x++] + e[x++] + T(e))
        : /\d/.test(e[x + 1]) && (t += e[x++] + T(e))),
    C(e))
  ) {
    let n = E(e);
    return n === `deg` || n === `rad` || n === `turn` || n === `grad`
      ? { type: b.Hue, value: t * fe[n] }
      : void 0;
  }
  return e[x] === `%` ? (x++, { type: b.Percentage, value: +t }) : { type: b.Number, value: +t };
}
function T(e) {
  let t = ``;
  for (; /\d/.test(e[x]);) t += e[x++];
  return t;
}
function E(e) {
  let t = ``;
  for (; x < e.length && de.test(e[x]);) t += e[x++];
  return t;
}
function pe(e) {
  let t = E(e);
  return e[x] === `(`
    ? (x++, { type: b.Function, value: t })
    : t === `none`
      ? { type: b.None, value: void 0 }
      : { type: b.Ident, value: t };
}
function me(e = ``) {
  let t = e.trim(),
    n = [],
    r;
  for (x = 0; x < t.length;)
    if (
      ((r = t[x++]),
      r ===
        `
` ||
        r === `	` ||
        r === ` `)
    )
      for (
        ;
        x < t.length &&
        (t[x] ===
          `
` ||
          t[x] === `	` ||
          t[x] === ` `);
      )
        x++;
    else {
      if (r === `,`) return;
      if (r === `)`) n.push({ type: b.ParenClose });
      else {
        if (r === `+`) {
          if ((x--, S(t))) {
            n.push(w(t));
            continue;
          }
          return;
        }
        if (r === `-`) {
          if ((x--, S(t))) {
            n.push(w(t));
            continue;
          }
          if (C(t)) {
            n.push({ type: b.Ident, value: E(t) });
            continue;
          }
          return;
        }
        if (r === `.`) {
          if ((x--, S(t))) {
            n.push(w(t));
            continue;
          }
          return;
        }
        if (r === `/`) {
          for (
            ;
            x < t.length &&
            (t[x] ===
              `
` ||
              t[x] === `	` ||
              t[x] === ` `);
          )
            x++;
          let e;
          if (S(t) && ((e = w(t)), e.type !== b.Hue)) {
            n.push({ type: b.Alpha, value: e });
            continue;
          }
          if (C(t) && E(t) === `none`) {
            n.push({ type: b.Alpha, value: { type: b.None, value: void 0 } });
            continue;
          }
          return;
        }
        if (/\d/.test(r)) (x--, n.push(w(t)));
        else if (ue.test(r)) (x--, n.push(pe(t)));
        else return;
      }
    }
  return n;
}
function he(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== b.Function || t.value !== `color` || ((t = e[e._i++]), t.type !== b.Ident))
    return;
  let n = oe[t.value];
  if (!n) return;
  let r = { mode: n },
    i = ge(e, !1);
  if (!i) return;
  let a = ce(n).channels;
  for (let e = 0, t, n; e < a.length; e++)
    ((t = i[e]),
      (n = a[e]),
      t.type !== b.None &&
        ((r[n] = t.type === b.Number ? t.value : t.value / 100),
        n === `alpha` && (r[n] = Math.max(0, Math.min(1, r[n])))));
  return r;
}
function ge(e, t) {
  let n = [],
    r;
  for (; e._i < e.length;)
    if (
      ((r = e[e._i++]),
      r.type === b.None ||
        r.type === b.Number ||
        r.type === b.Alpha ||
        r.type === b.Percentage ||
        (t && r.type === b.Hue))
    )
      n.push(r);
    else if (r.type === b.ParenClose) {
      if (e._i < e.length) return;
    } else return;
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== b.Alpha) return;
      n[3] = n[3].value;
    }
    return (
      n.length === 3 && n.push({ type: b.None, value: void 0 }),
      n.every((e) => e.type !== b.Alpha) ? n : void 0
    );
  }
}
function _e(e, t) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== b.Function) return;
  let r = ge(e, t);
  if (r) return (r.unshift(n.value), r);
}
var ve = (e) => {
  if (typeof e != `string`) return;
  let t = me(e),
    n = t ? _e(t, !0) : void 0,
    r,
    i = 0,
    a = v.length;
  for (; i < a;) if ((r = v[i++](e, n)) !== void 0) return r;
  return t ? he(t) : void 0;
};
function ye(e, t) {
  if (!t || (t[0] !== `rgb` && t[0] !== `rgba`)) return;
  let n = { mode: `rgb` },
    [, r, i, a, o] = t;
  if (r.type !== b.Hue && i.type !== b.Hue && a.type !== b.Hue)
    return (
      r.type !== b.None && (n.r = r.type === b.Number ? r.value / 255 : r.value / 100),
      i.type !== b.None && (n.g = i.type === b.Number ? i.value / 255 : i.value / 100),
      a.type !== b.None && (n.b = a.type === b.Number ? a.value / 255 : a.value / 100),
      o.type !== b.None &&
        (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
      n
    );
}
var be = (e) => (e === `transparent` ? { mode: `rgb`, r: 0, g: 0, b: 0, alpha: 0 } : void 0),
  xe = (e, t, n) => e + n * (t - e),
  Se = (e) => {
    let t = [];
    for (let n = 0; n < e.length - 1; n++) {
      let r = e[n],
        i = e[n + 1];
      r === void 0 && i === void 0
        ? t.push(void 0)
        : r !== void 0 && i !== void 0
          ? t.push([r, i])
          : t.push(r === void 0 ? [i, i] : [r, r]);
    }
    return t;
  },
  D = ((e) => (t) => {
    let n = Se(t);
    return (t) => {
      let r = t * n.length,
        i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0),
        a = n[i];
      return a === void 0 ? void 0 : e(a[0], a[1], r - i);
    };
  })(xe),
  O = (e) => {
    let t = !1,
      n = e.map((e) => (e === void 0 ? 1 : ((t = !0), e)));
    return t ? n : e;
  },
  k = {
    mode: `rgb`,
    channels: [`r`, `g`, `b`, `alpha`],
    parse: [ye, u, ne, c, be, `srgb`],
    serialize: `srgb`,
    interpolate: { r: D, g: D, b: D, alpha: { use: D, fixup: O } },
    gamut: !0,
    white: { r: 1, g: 1, b: 1 },
    black: { r: 0, g: 0, b: 0 },
  },
  Ce = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e),
  we = (e) => {
    let t = Ce(e.r),
      n = Ce(e.g),
      r = Ce(e.b),
      i = {
        mode: `xyz65`,
        x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * r,
        y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * r,
        z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * r,
      };
    return (e.alpha !== void 0 && (i.alpha = e.alpha), i);
  },
  Te = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e),
  Ee = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = {
      mode: `a98`,
      r: Te(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n),
      g: Te(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n),
      b: Te(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n),
    };
    return (r !== void 0 && (i.alpha = r), i);
  },
  De = (e = 0) => {
    let t = Math.abs(e);
    return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
  },
  A = ({ r: e, g: t, b: n, alpha: r }) => {
    let i = { mode: `lrgb`, r: De(e), g: De(t), b: De(n) };
    return (r !== void 0 && (i.alpha = r), i);
  },
  Oe = (e) => {
    let { r: t, g: n, b: r, alpha: i } = A(e),
      a = {
        mode: `xyz65`,
        x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
        y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
        z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
      };
    return (i !== void 0 && (a.alpha = i), a);
  },
  ke = (e = 0) => {
    let t = Math.abs(e);
    return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
  },
  Ae = ({ r: e, g: t, b: n, alpha: r }, i = `rgb`) => {
    let a = { mode: i, r: ke(e), g: ke(t), b: ke(n) };
    return (r !== void 0 && (a.alpha = r), a);
  },
  je = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = Ae({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
    });
    return (r !== void 0 && (i.alpha = r), i);
  },
  Me = {
    ...k,
    mode: `a98`,
    parse: [`a98-rgb`],
    serialize: `a98-rgb`,
    fromMode: { rgb: (e) => Ee(Oe(e)), xyz65: Ee },
    toMode: { rgb: (e) => je(we(e)), xyz65: we },
  },
  j = (e) => ((e %= 360) < 0 ? e + 360 : e);
function Ne({ h: e, s: t, l: n, alpha: r }) {
  ((e = j(e === void 0 ? 0 : e)), t === void 0 && (t = 0), n === void 0 && (n = 0));
  let i = n + t * (n < 0.5 ? n : 1 - n),
    a = i - (i - n) * 2 * Math.abs(((e / 60) % 2) - 1),
    o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = { r: i, g: a, b: 2 * n - i };
      break;
    case 1:
      o = { r: a, g: i, b: 2 * n - i };
      break;
    case 2:
      o = { r: 2 * n - i, g: i, b: a };
      break;
    case 3:
      o = { r: 2 * n - i, g: a, b: i };
      break;
    case 4:
      o = { r: a, g: 2 * n - i, b: i };
      break;
    case 5:
      o = { r: i, g: 2 * n - i, b: a };
      break;
    default:
      o = { r: 2 * n - i, g: 2 * n - i, b: 2 * n - i };
  }
  return ((o.mode = `rgb`), r !== void 0 && (o.alpha = r), o);
}
function Pe({ r: e, g: t, b: n, alpha: r }) {
  (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { mode: `hsl`, s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)), l: 0.5 * (i + a) };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n) * 6
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    r !== void 0 && (o.alpha = r),
    o
  );
}
var Fe = (e, t) => {
    switch (t) {
      case `deg`:
        return +e;
      case `rad`:
        return (e / Math.PI) * 180;
      case `grad`:
        return (e / 10) * 9;
      case `turn`:
        return e * 360;
    }
  },
  Ie = RegExp(`^hsla?\\(\\s*${h}${g}${f}${g}${f}\\s*(?:,\\s*${p}\\s*)?\\)$`),
  Le = (e) => {
    let t = e.match(Ie);
    if (!t) return;
    let n = { mode: `hsl` };
    return (
      t[3] === void 0
        ? t[1] !== void 0 && t[2] !== void 0 && (n.h = Fe(t[1], t[2]))
        : (n.h = +t[3]),
      t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)),
      t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)),
      t[6] === void 0
        ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7])))
        : (n.alpha = Math.max(0, Math.min(1, t[6] / 100))),
      n
    );
  };
function Re(e, t) {
  if (!t || (t[0] !== `hsl` && t[0] !== `hsla`)) return;
  let n = { mode: `hsl` },
    [, r, i, a, o] = t;
  if (r.type !== b.None) {
    if (r.type === b.Percentage) return;
    n.h = r.value;
  }
  if (i.type !== b.None) {
    if (i.type === b.Hue) return;
    n.s = i.value / 100;
  }
  if (a.type !== b.None) {
    if (a.type === b.Hue) return;
    n.l = a.value / 100;
  }
  return (
    o.type !== b.None &&
      (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
    n
  );
}
var ze = (e, t) =>
    e
      .map((n, r, i) => {
        if (n === void 0) return n;
        let a = j(n);
        return r === 0 || e[r - 1] === void 0 ? a : t(a - j(i[r - 1]));
      })
      .reduce(
        (e, t) =>
          !e.length || t === void 0 || e[e.length - 1] === void 0
            ? (e.push(t), e)
            : (e.push(t + e[e.length - 1]), e),
        [],
      ),
  Be = (e) => ze(e, (e) => (Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e))),
  Ve = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
    let n = j(e.h),
      r = j(t.h),
      i = Math.sin((((r - n + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e.s * t.s) * i;
  },
  He = (e, t) => {
    if (e.h === void 0 || t.h === void 0) return 0;
    let n = j(e.h),
      r = j(t.h);
    return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
  },
  Ue = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
    let n = j(e.h),
      r = j(t.h),
      i = Math.sin((((r - n + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e.c * t.c) * i;
  },
  We = (e) => {
    let t = e.reduce(
        (e, t) => {
          if (t !== void 0) {
            let n = (t * Math.PI) / 180;
            ((e.sin += Math.sin(n)), (e.cos += Math.cos(n)));
          }
          return e;
        },
        { sin: 0, cos: 0 },
      ),
      n = (Math.atan2(t.sin, t.cos) * 180) / Math.PI;
    return n < 0 ? 360 + n : n;
  },
  Ge = {
    mode: `hsl`,
    toMode: { rgb: Ne },
    fromMode: { rgb: Pe },
    channels: [`h`, `s`, `l`, `alpha`],
    ranges: { h: [0, 360] },
    gamut: `rgb`,
    parse: [Re, Le],
    serialize: (e) =>
      `hsl(${e.h === void 0 ? `none` : e.h} ${e.s === void 0 ? `none` : e.s * 100 + `%`} ${e.l === void 0 ? `none` : e.l * 100 + `%`}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
    interpolate: { h: { use: D, fixup: Be }, s: D, l: D, alpha: { use: D, fixup: O } },
    difference: { h: Ve },
    average: { h: We },
  };
function Ke({ h: e, s: t, v: n, alpha: r }) {
  ((e = j(e === void 0 ? 0 : e)), t === void 0 && (t = 0), n === void 0 && (n = 0));
  let i = Math.abs(((e / 60) % 2) - 1),
    a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = { r: n, g: n * (1 - t * i), b: n * (1 - t) };
      break;
    case 1:
      a = { r: n * (1 - t * i), g: n, b: n * (1 - t) };
      break;
    case 2:
      a = { r: n * (1 - t), g: n, b: n * (1 - t * i) };
      break;
    case 3:
      a = { r: n * (1 - t), g: n * (1 - t * i), b: n };
      break;
    case 4:
      a = { r: n * (1 - t * i), g: n * (1 - t), b: n };
      break;
    case 5:
      a = { r: n, g: n * (1 - t), b: n * (1 - t * i) };
      break;
    default:
      a = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return ((a.mode = `rgb`), r !== void 0 && (a.alpha = r), a);
}
function qe({ r: e, g: t, b: n, alpha: r }) {
  (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { mode: `hsv`, s: i === 0 ? 0 : 1 - a / i, v: i };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n) * 6
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    r !== void 0 && (o.alpha = r),
    o
  );
}
var Je = {
  mode: `hsv`,
  toMode: { rgb: Ke },
  parse: [`--hsv`],
  serialize: `--hsv`,
  fromMode: { rgb: qe },
  channels: [`h`, `s`, `v`, `alpha`],
  ranges: { h: [0, 360] },
  gamut: `rgb`,
  interpolate: { h: { use: D, fixup: Be }, s: D, v: D, alpha: { use: D, fixup: O } },
  difference: { h: Ve },
  average: { h: We },
};
function Ye({ h: e, w: t, b: n, alpha: r }) {
  if ((t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1)) {
    let e = t + n;
    ((t /= e), (n /= e));
  }
  return Ke({ h: e, s: n === 1 ? 1 : 1 - t / (1 - n), v: 1 - n, alpha: r });
}
function Xe(e) {
  let t = qe(e);
  if (t === void 0) return;
  let n = t.s === void 0 ? 0 : t.s,
    r = t.v === void 0 ? 0 : t.v,
    i = { mode: `hwb`, w: (1 - n) * r, b: 1 - r };
  return (t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i);
}
function Ze(e, t) {
  if (!t || t[0] !== `hwb`) return;
  let n = { mode: `hwb` },
    [, r, i, a, o] = t;
  if (r.type !== b.None) {
    if (r.type === b.Percentage) return;
    n.h = r.value;
  }
  if (i.type !== b.None) {
    if (i.type === b.Hue) return;
    n.w = i.value / 100;
  }
  if (a.type !== b.None) {
    if (a.type === b.Hue) return;
    n.b = a.value / 100;
  }
  return (
    o.type !== b.None &&
      (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
    n
  );
}
var Qe = {
    mode: `hwb`,
    toMode: { rgb: Ye },
    fromMode: { rgb: Xe },
    channels: [`h`, `w`, `b`, `alpha`],
    ranges: { h: [0, 360] },
    gamut: `rgb`,
    parse: [Ze],
    serialize: (e) =>
      `hwb(${e.h === void 0 ? `none` : e.h} ${e.w === void 0 ? `none` : e.w * 100 + `%`} ${e.b === void 0 ? `none` : e.b * 100 + `%`}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
    interpolate: { h: { use: D, fixup: Be }, w: D, b: D, alpha: { use: D, fixup: O } },
    difference: { h: He },
    average: { h: We },
  },
  $e = 29 ** 3 / 27,
  et = 216 / 29 ** 3,
  M = { X: 0.3457 / 0.3585, Y: 1, Z: 0.2958 / 0.3585 },
  N = { X: 0.3127 / 0.329, Y: 1, Z: 0.3583 / 0.329 },
  tt = (e) => (e ** 3 > et ? e ** 3 : (116 * e - 16) / $e),
  nt = ({ l: e, a: t, b: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = (e + 16) / 116,
      a = t / 500 + i,
      o = i - n / 200,
      s = { mode: `xyz50`, x: tt(a) * M.X, y: tt(i) * M.Y, z: tt(o) * M.Z };
    return (r !== void 0 && (s.alpha = r), s);
  },
  rt = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = Ae({
      r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
      g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
      b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n,
    });
    return (r !== void 0 && (i.alpha = r), i);
  },
  it = (e) => rt(nt(e)),
  at = (e) => {
    let { r: t, g: n, b: r, alpha: i } = A(e),
      a = {
        mode: `xyz50`,
        x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * r,
        y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * r,
        z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * r,
      };
    return (i !== void 0 && (a.alpha = i), a);
  },
  ot = (e) => (e > et ? Math.cbrt(e) : ($e * e + 16) / 116),
  st = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = ot(e / M.X),
      a = ot(t / M.Y),
      o = ot(n / M.Z),
      s = { mode: `lab`, l: 116 * a - 16, a: 500 * (i - a), b: 200 * (a - o) };
    return (r !== void 0 && (s.alpha = r), s);
  },
  ct = (e) => {
    let t = st(at(e));
    return (e.r === e.b && e.b === e.g && (t.a = t.b = 0), t);
  };
function lt(e, t) {
  if (!t || t[0] !== `lab`) return;
  let n = { mode: `lab` },
    [, r, i, a, o] = t;
  if (r.type !== b.Hue && i.type !== b.Hue && a.type !== b.Hue)
    return (
      r.type !== b.None && (n.l = Math.min(Math.max(0, r.value), 100)),
      i.type !== b.None && (n.a = i.type === b.Number ? i.value : (i.value * 125) / 100),
      a.type !== b.None && (n.b = a.type === b.Number ? a.value : (a.value * 125) / 100),
      o.type !== b.None &&
        (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
      n
    );
}
var ut = {
    mode: `lab`,
    toMode: { xyz50: nt, rgb: it },
    fromMode: { xyz50: st, rgb: ct },
    channels: [`l`, `a`, `b`, `alpha`],
    ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] },
    parse: [lt],
    serialize: (e) =>
      `lab(${e.l === void 0 ? `none` : e.l} ${e.a === void 0 ? `none` : e.a} ${e.b === void 0 ? `none` : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
    interpolate: { l: D, a: D, b: D, alpha: { use: D, fixup: O } },
  },
  dt = 29 ** 3 / 27,
  ft = 216 / 29 ** 3,
  pt = (e) => (e ** 3 > ft ? e ** 3 : (116 * e - 16) / dt),
  mt = ({ l: e, a: t, b: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = (e + 16) / 116,
      a = t / 500 + i,
      o = i - n / 200,
      s = { mode: `xyz65`, x: pt(a) * N.X, y: pt(i) * N.Y, z: pt(o) * N.Z };
    return (r !== void 0 && (s.alpha = r), s);
  },
  ht = (e) => je(mt(e)),
  gt = (e) => (e > ft ? Math.cbrt(e) : (dt * e + 16) / 116),
  _t = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = gt(e / N.X),
      a = gt(t / N.Y),
      o = gt(n / N.Z),
      s = { mode: `lab65`, l: 116 * a - 16, a: 500 * (i - a), b: 200 * (a - o) };
    return (r !== void 0 && (s.alpha = r), s);
  },
  vt = (e) => {
    let t = _t(Oe(e));
    return (e.r === e.b && e.b === e.g && (t.a = t.b = 0), t);
  },
  yt = {
    ...ut,
    mode: `lab65`,
    parse: [`--lab-d65`],
    serialize: `--lab-d65`,
    toMode: { xyz65: mt, rgb: ht },
    fromMode: { xyz65: _t, rgb: vt },
    ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] },
  },
  P = ({ l: e, a: t, b: n, alpha: r }, i = `lch`) => {
    (t === void 0 && (t = 0), n === void 0 && (n = 0));
    let a = Math.sqrt(t * t + n * n),
      o = { mode: i, l: e, c: a };
    return (a && (o.h = j((Math.atan2(n, t) * 180) / Math.PI)), r !== void 0 && (o.alpha = r), o);
  },
  F = ({ l: e, c: t, h: n, alpha: r }, i = `lab`) => {
    n === void 0 && (n = 0);
    let a = {
      mode: i,
      l: e,
      a: t ? t * Math.cos((n / 180) * Math.PI) : 0,
      b: t ? t * Math.sin((n / 180) * Math.PI) : 0,
    };
    return (r !== void 0 && (a.alpha = r), a);
  };
function bt(e, t) {
  if (!t || t[0] !== `lch`) return;
  let n = { mode: `lch` },
    [, r, i, a, o] = t;
  if (r.type !== b.None) {
    if (r.type === b.Hue) return;
    n.l = Math.min(Math.max(0, r.value), 100);
  }
  if (
    (i.type !== b.None &&
      (n.c = Math.max(0, i.type === b.Number ? i.value : (i.value * 150) / 100)),
    a.type !== b.None)
  ) {
    if (a.type === b.Percentage) return;
    n.h = a.value;
  }
  return (
    o.type !== b.None &&
      (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
    n
  );
}
var xt = {
    mode: `lch`,
    toMode: { lab: F, rgb: (e) => it(F(e)) },
    fromMode: { rgb: (e) => P(ct(e)), lab: P },
    channels: [`l`, `c`, `h`, `alpha`],
    ranges: { l: [0, 100], c: [0, 150], h: [0, 360] },
    parse: [bt],
    serialize: (e) =>
      `lch(${e.l === void 0 ? `none` : e.l} ${e.c === void 0 ? `none` : e.c} ${e.h === void 0 ? `none` : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
    interpolate: { h: { use: D, fixup: Be }, c: D, l: D, alpha: { use: D, fixup: O } },
    difference: { h: Ue },
    average: { h: We },
  },
  St = {
    ...xt,
    mode: `lch65`,
    parse: [`--lch-d65`],
    serialize: `--lch-d65`,
    toMode: { lab65: (e) => F(e, `lab65`), rgb: (e) => ht(F(e, `lab65`)) },
    fromMode: { rgb: (e) => P(vt(e), `lch65`), lab65: (e) => P(e, `lch65`) },
    ranges: { l: [0, 100], c: [0, 150], h: [0, 360] },
  },
  Ct = {
    ...k,
    mode: `lrgb`,
    toMode: { rgb: Ae },
    fromMode: { rgb: A },
    parse: [`srgb-linear`],
    serialize: `srgb-linear`,
  },
  wt = ({ l: e, a: t, b: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = (e + 0.3963377773761749 * t + 0.2158037573099136 * n) ** 3,
      a = (e - 0.1055613458156586 * t - 0.0638541728258133 * n) ** 3,
      o = (e - 0.0894841775298119 * t - 1.2914855480194092 * n) ** 3,
      s = {
        mode: `lrgb`,
        r: 4.076741636075957 * i - 3.3077115392580616 * a + 0.2309699031821044 * o,
        g: -1.2684379732850317 * i + 2.6097573492876887 * a - 0.3413193760026573 * o,
        b: -0.0041960761386756 * i - 0.7034186179359362 * a + 1.7076146940746117 * o,
      };
    return (r !== void 0 && (s.alpha = r), s);
  },
  Tt = ({ r: e, g: t, b: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n),
      a = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n),
      o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n),
      s = {
        mode: `oklab`,
        l: 0.210454268309314 * i + 0.7936177747023054 * a - 0.0040720430116193 * o,
        a: 1.9779985324311684 * i - 2.42859224204858 * a + 0.450593709617411 * o,
        b: 0.0259040424655478 * i + 0.7827717124575296 * a - 0.8086757549230774 * o,
      };
    return (r !== void 0 && (s.alpha = r), s);
  },
  Et = (e) => {
    let t = Tt(A(e));
    return (e.r === e.b && e.b === e.g && (t.a = t.b = 0), t);
  },
  Dt = (e) => Ae(wt(e));
function Ot(e, t) {
  if (!t || t[0] !== `oklab`) return;
  let n = { mode: `oklab` },
    [, r, i, a, o] = t;
  if (r.type !== b.Hue && i.type !== b.Hue && a.type !== b.Hue)
    return (
      r.type !== b.None &&
        (n.l = Math.min(Math.max(0, r.type === b.Number ? r.value : r.value / 100), 1)),
      i.type !== b.None && (n.a = i.type === b.Number ? i.value : (i.value * 0.4) / 100),
      a.type !== b.None && (n.b = a.type === b.Number ? a.value : (a.value * 0.4) / 100),
      o.type !== b.None &&
        (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
      n
    );
}
var kt = {
  ...ut,
  mode: `oklab`,
  toMode: { lrgb: wt, rgb: Dt },
  fromMode: { lrgb: Tt, rgb: Et },
  ranges: { l: [0, 1], a: [-0.4, 0.4], b: [-0.4, 0.4] },
  parse: [Ot],
  serialize: (e) =>
    `oklab(${e.l === void 0 ? `none` : e.l} ${e.a === void 0 ? `none` : e.a} ${e.b === void 0 ? `none` : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
};
function At(e, t) {
  if (!t || t[0] !== `oklch`) return;
  let n = { mode: `oklch` },
    [, r, i, a, o] = t;
  if (r.type !== b.None) {
    if (r.type === b.Hue) return;
    n.l = Math.min(Math.max(0, r.type === b.Number ? r.value : r.value / 100), 1);
  }
  if (
    (i.type !== b.None &&
      (n.c = Math.max(0, i.type === b.Number ? i.value : (i.value * 0.4) / 100)),
    a.type !== b.None)
  ) {
    if (a.type === b.Percentage) return;
    n.h = a.value;
  }
  return (
    o.type !== b.None &&
      (n.alpha = Math.min(1, Math.max(0, o.type === b.Number ? o.value : o.value / 100))),
    n
  );
}
var jt = {
    ...xt,
    mode: `oklch`,
    toMode: { oklab: (e) => F(e, `oklab`), rgb: (e) => Dt(F(e, `oklab`)) },
    fromMode: { rgb: (e) => P(Et(e), `oklch`), oklab: (e) => P(e, `oklch`) },
    parse: [At],
    serialize: (e) =>
      `oklch(${e.l === void 0 ? `none` : e.l} ${e.c === void 0 ? `none` : e.c} ${e.h === void 0 ? `none` : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ``})`,
    ranges: { l: [0, 1], c: [0, 0.4], h: [0, 360] },
  },
  Mt = (e) => {
    let { r: t, g: n, b: r, alpha: i } = A(e),
      a = {
        mode: `xyz65`,
        x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
        y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
        z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
      };
    return (i !== void 0 && (a.alpha = i), a);
  },
  Nt = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = Ae(
      {
        r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
        g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
        b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
      },
      `p3`,
    );
    return (r !== void 0 && (i.alpha = r), i);
  },
  Pt = {
    ...k,
    mode: `p3`,
    parse: [`display-p3`],
    serialize: `display-p3`,
    fromMode: { rgb: (e) => Nt(Oe(e)), xyz65: Nt },
    toMode: { rgb: (e) => je(Mt(e)), xyz65: Mt },
  },
  Ft = (e) => {
    let t = Math.abs(e);
    return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
  },
  It = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = {
      mode: `prophoto`,
      r: Ft(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n),
      g: Ft(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n),
      b: Ft(e * 0 + t * 0 + 1.2119675456389452 * n),
    };
    return (r !== void 0 && (i.alpha = r), i);
  },
  Lt = (e = 0) => {
    let t = Math.abs(e);
    return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
  },
  Rt = (e) => {
    let t = Lt(e.r),
      n = Lt(e.g),
      r = Lt(e.b),
      i = {
        mode: `xyz50`,
        x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * r,
        y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * r,
        z: 0 * t + 0 * n + 0.8251046025104602 * r,
      };
    return (e.alpha !== void 0 && (i.alpha = e.alpha), i);
  },
  zt = {
    ...k,
    mode: `prophoto`,
    parse: [`prophoto-rgb`],
    serialize: `prophoto-rgb`,
    fromMode: { xyz50: It, rgb: (e) => It(at(e)) },
    toMode: { xyz50: Rt, rgb: (e) => rt(Rt(e)) },
  },
  Bt = 1.09929682680944,
  Vt = 0.018053968510807,
  Ht = (e) => {
    let t = Math.abs(e);
    return t > Vt ? (Math.sign(e) || 1) * (Bt * t ** 0.45 - 0.09929682680944008) : 4.5 * e;
  },
  Ut = ({ x: e, y: t, z: n, alpha: r }) => {
    (e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0));
    let i = {
      mode: `rec2020`,
      r: Ht(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * n),
      g: Ht(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * n),
      b: Ht(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * n),
    };
    return (r !== void 0 && (i.alpha = r), i);
  },
  Wt = 1.09929682680944,
  Gt = 0.018053968510807,
  Kt = (e = 0) => {
    let t = Math.abs(e);
    return t < Gt * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * ((t + Wt - 1) / Wt) ** (1 / 0.45);
  },
  qt = (e) => {
    let t = Kt(e.r),
      n = Kt(e.g),
      r = Kt(e.b),
      i = {
        mode: `xyz65`,
        x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * r,
        y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * r,
        z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * r,
      };
    return (e.alpha !== void 0 && (i.alpha = e.alpha), i);
  },
  Jt = {
    ...k,
    mode: `rec2020`,
    fromMode: { xyz65: Ut, rgb: (e) => Ut(Oe(e)) },
    toMode: { xyz65: qt, rgb: (e) => je(qt(e)) },
    parse: [`rec2020`],
    serialize: `rec2020`,
  },
  Yt = {
    mode: `xyz50`,
    parse: [`xyz-d50`],
    serialize: `xyz-d50`,
    toMode: { rgb: rt, lab: st },
    fromMode: { rgb: at, lab: nt },
    channels: [`x`, `y`, `z`, `alpha`],
    ranges: { x: [0, 0.964], y: [0, 0.999], z: [0, 0.825] },
    interpolate: { x: D, y: D, z: D, alpha: { use: D, fixup: O } },
  },
  Xt = {
    mode: `xyz65`,
    toMode: {
      rgb: je,
      xyz50: (e) => {
        let { x: t, y: n, z: r, alpha: i } = e;
        (t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0));
        let a = {
          mode: `xyz50`,
          x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * r,
          y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * r,
          z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * r,
        };
        return (i !== void 0 && (a.alpha = i), a);
      },
    },
    fromMode: {
      rgb: Oe,
      xyz50: (e) => {
        let { x: t, y: n, z: r, alpha: i } = e;
        (t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0));
        let a = {
          mode: `xyz65`,
          x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * r,
          y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * r,
          z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * r,
        };
        return (i !== void 0 && (a.alpha = i), a);
      },
    },
    ranges: { x: [0, 0.95], y: [0, 1], z: [0, 1.088] },
    channels: [`x`, `y`, `z`, `alpha`],
    parse: [`xyz`, `xyz-d65`],
    serialize: `xyz-d65`,
    interpolate: { x: D, y: D, z: D, alpha: { use: D, fixup: O } },
  };
(y(Me),
  y(Ge),
  y(Je),
  y(Qe),
  y(ut),
  y(yt),
  y(xt),
  y(St),
  y(Ct),
  y(kt),
  y(jt),
  y(Pt),
  y(zt),
  y(Jt),
  y(k),
  y(Yt),
  y(Xt));
var Zt = [`t3-chat`, `grove`, `ocean`, `ember`, `iris`];
[...Zt];
var I = new Set([
  `system`,
  `light`,
  `dark`,
  ...Zt,
  `t3-chat-dark`,
  `t3-grove`,
  `t3-ocean`,
  `t3-ember`,
  `t3-iris`,
]);
[...I];
var Qt =
    `canvas.chrome.toolbar.toolbarForeground.toolbarBorder.toolbarControl.toolbarControlForeground.toolbarControlHover.surface.surfaceRaised.surfaceOverlay.text.textMuted.border.input.focus.accent.accentForeground.secondary.secondaryForeground.muted.mutedForeground.placeholder.secondaryLabel.iconMuted.error.errorForeground.errorSurface.warning.warningForeground.warningSurface.update.updateForeground.updateSurface.accentSurface.accentSurfaceForeground.messageSurface.messageForeground.messageAction.messageActionForeground.messageActionHover.codeBackground.codeForeground.searchMatchBackground.searchMatchForeground.searchMatchActiveBackground.searchMatchActiveForeground.sidebar.sidebarForeground.sidebarMutedForeground.sidebarControlSurface.sidebarRowHover.sidebarRowActive.sidebarRowSelected.sidebarBorder.terminalBackground.terminalForeground.terminalCursor.terminalSelection.terminalScrollbar.terminalScrollbarHover`.split(
      `.`,
    ),
  $t = {
    searchMatchBackground: `#ffde8b`,
    searchMatchForeground: `#21180a`,
    searchMatchActiveBackground: `#eea52b`,
    searchMatchActiveForeground: `#21180a`,
    canvas: `#fcfcfc`,
    chrome: `#fcfcfc`,
    toolbar: `#fcfcfc`,
    toolbarForeground: `#27272a`,
    toolbarBorder: `#e4e4e7`,
    toolbarControl: `#ffffff`,
    toolbarControlForeground: `#27272a`,
    toolbarControlHover: `#f4f4f5`,
    surface: `#ffffff`,
    surfaceRaised: `#fcfcfc`,
    surfaceOverlay: `#ffffff`,
    text: `#27272a`,
    textMuted: `#71717b`,
    border: `#e4e4e7`,
    input: `#d4d4d8`,
    focus: `#1b4ed8`,
    accent: `#1b4ed8`,
    accentForeground: `#ffffff`,
    secondary: `#fafafa`,
    secondaryForeground: `#27272a`,
    muted: `#fafafa`,
    mutedForeground: `#71717b`,
    placeholder: `#71717b`,
    secondaryLabel: `#71717b`,
    iconMuted: `#71717b`,
    error: `#fb2c36`,
    errorForeground: `#c10007`,
    errorSurface: `#fcebec`,
    warning: `#fe9a00`,
    warningForeground: `#bb4d00`,
    warningSurface: `#fcf4e8`,
    update: `#1b4ed8`,
    updateForeground: `#1b4ed8`,
    updateSurface: `#e0e6f7`,
    accentSurface: `#f4f4f5`,
    accentSurfaceForeground: `#18181b`,
    messageSurface: `#f4f4f5`,
    messageForeground: `#27272a`,
    messageAction: `#1b4ed8`,
    messageActionForeground: `#ffffff`,
    messageActionHover: `#3160db`,
    codeBackground: `#ffffff`,
    codeForeground: `#27272a`,
    sidebar: `#fafafa`,
    sidebarForeground: `#27272a`,
    sidebarMutedForeground: `#71717b`,
    sidebarControlSurface: `#f4f4f5`,
    sidebarRowHover: `#fcfcfc`,
    sidebarRowActive: `#ffffff`,
    sidebarRowSelected: `#ffffff`,
    sidebarBorder: `#e4e4e7`,
    terminalBackground: `#fcfcfc`,
    terminalForeground: `#27272a`,
    terminalCursor: `#26384e`,
    terminalSelection: `#d0d6dd`,
    terminalScrollbar: `#d6d6d6`,
    terminalScrollbarHover: `#bdbdbd`,
  },
  en = {
    searchMatchBackground: `#8c6c1f`,
    searchMatchForeground: `#f5f5f5`,
    searchMatchActiveBackground: `#eea52b`,
    searchMatchActiveForeground: `#21180a`,
    canvas: `#0a0a0a`,
    chrome: `#0a0a0a`,
    toolbar: `#0a0a0a`,
    toolbarForeground: `#f5f5f5`,
    toolbarBorder: `#191919`,
    toolbarControl: `#111111`,
    toolbarControlForeground: `#f5f5f5`,
    toolbarControlHover: `#141414`,
    surface: `#111111`,
    surfaceRaised: `#111111`,
    surfaceOverlay: `#111111`,
    text: `#f5f5f5`,
    textMuted: `#818181`,
    border: `#191919`,
    input: `#1e1e1e`,
    focus: `#346bf1`,
    accent: `#346bf1`,
    accentForeground: `#ffffff`,
    secondary: `#111111`,
    secondaryForeground: `#f5f5f5`,
    muted: `#111111`,
    mutedForeground: `#818181`,
    placeholder: `#818181`,
    secondaryLabel: `#818181`,
    iconMuted: `#818181`,
    error: `#fb414a`,
    errorForeground: `#ff6467`,
    errorSurface: `#301214`,
    warning: `#fe9a00`,
    warningForeground: `#ffb900`,
    warningSurface: `#312108`,
    update: `#346bf1`,
    updateForeground: `#51a2ff`,
    updateSurface: `#121b34`,
    accentSurface: `#141414`,
    accentSurfaceForeground: `#f5f5f5`,
    messageSurface: `#141414`,
    messageForeground: `#f5f5f5`,
    messageAction: `#346bf1`,
    messageActionForeground: `#ffffff`,
    messageActionHover: `#3061d9`,
    codeBackground: `#111111`,
    codeForeground: `#f5f5f5`,
    sidebar: `#000000`,
    sidebarForeground: `#f1f3f7`,
    sidebarMutedForeground: `#a3a3a3`,
    sidebarControlSurface: `#0a0a0a`,
    sidebarRowHover: `#131313`,
    sidebarRowActive: `#1a1b1b`,
    sidebarRowSelected: `#111111`,
    sidebarBorder: `#141414`,
    terminalBackground: `#0a0a0a`,
    terminalForeground: `#f5f5f5`,
    terminalCursor: `#b4cbff`,
    terminalSelection: `#343a47`,
    terminalScrollbar: `#222222`,
    terminalScrollbarHover: `#363636`,
  },
  tn = {
    id: `t3-chat`,
    label: `T3 Chat`,
    appearance: `light`,
    colors: {
      canvas: `oklch(0.982446 0.010114 325.653)`,
      chrome: `oklch(0.982446 0.010114 325.653)`,
      toolbar: `oklch(0.982446 0.010114 325.653)`,
      toolbarForeground: `oklch(0.325698 0.116116 325.037)`,
      toolbarBorder: `oklch(0.856784 0.082879 328.911)`,
      toolbarControl: `oklch(0.939552 0.024286 321.664)`,
      toolbarControlForeground: `oklch(0.325698 0.116116 325.037)`,
      toolbarControlHover: `oklch(0.884525 0.041658 337.177)`,
      surface: `oklch(0.971835 0.012884 321.894)`,
      surfaceRaised: `oklch(0.988235 0.005049 325.615)`,
      surfaceOverlay: `oklch(1 0 0)`,
      text: `oklch(0.325698 0.116116 325.037)`,
      textMuted: `oklch(0.494754 0.190937 354.544)`,
      border: `oklch(0.923531 0.021247 328.096)`,
      input: `oklch(0.851713 0.055822 336.6)`,
      focus: `oklch(0.591646 0.217985 0.584)`,
      accent: `oklch(0.591646 0.217985 0.584)`,
      accentForeground: `oklch(1 0 0)`,
      secondary: `oklch(0.869588 0.06751 334.899)`,
      secondaryForeground: `oklch(0.444777 0.134061 324.799)`,
      muted: `oklch(0.802407 0.090963 345.892)`,
      mutedForeground: `oklch(0.428932 0.163929 354.332)`,
      placeholder: `oklch(0.549927 0.090215 323.149)`,
      secondaryLabel: `oklch(0.494754 0.190937 354.544)`,
      iconMuted: `oklch(0.494754 0.190937 354.544)`,
      error: `oklch(0.627117 0.248974 7.734)`,
      errorForeground: `oklch(0.458704 0.169677 3.815)`,
      errorSurface: `oklch(0.942787 0.032076 344.963)`,
      warning: `oklch(0.76859 0.164659 70.08)`,
      warningForeground: `oklch(0.54612 0.143036 48.949)`,
      warningSurface: `oklch(0.962901 0.015297 48.56)`,
      update: `oklch(0.591646 0.217985 0.584)`,
      updateForeground: `oklch(0.494754 0.190937 354.544)`,
      updateSurface: `oklch(0.930264 0.036194 341.45)`,
      accentSurface: `oklch(0.939552 0.024286 321.664)`,
      accentSurfaceForeground: `oklch(0.396296 0.025134 285.196)`,
      messageSurface: `oklch(0.926746 0.037898 332.6)`,
      messageForeground: `oklch(0.354591 0.093575 307.568)`,
      messageAction: `oklch(0.591646 0.217985 0.584)`,
      messageActionForeground: `oklch(1 0 0)`,
      messageActionHover: `oklch(0.539042 0.197866 0.305)`,
      codeBackground: `oklch(0.953855 0.019695 315.668)`,
      codeForeground: `oklch(0.445128 0.13005 307.026)`,
      searchMatchBackground: `oklch(0.915 0.11 85)`,
      searchMatchForeground: `oklch(0.216164 0.028283 77.423)`,
      searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
      searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
      sidebar: `oklch(0.928886 0.031178 322.592)`,
      sidebarForeground: `oklch(0.396296 0.025134 285.196)`,
      sidebarMutedForeground: `oklch(0.494754 0.190937 354.544)`,
      sidebarControlSurface: `oklch(0.978851 0.001321 106.424)`,
      sidebarRowHover: `oklch(0.978851 0.001321 106.424)`,
      sidebarRowActive: `oklch(0.978851 0.001321 106.424)`,
      sidebarRowSelected: `oklch(0.978851 0.001321 106.424)`,
      sidebarBorder: `oklch(0.938313 0.002552 48.717)`,
      terminalBackground: `oklch(0.982446 0.010114 325.653)`,
      terminalForeground: `oklch(0.325698 0.116116 325.037)`,
      terminalCursor: `oklch(0.591646 0.217985 0.584)`,
      terminalSelection: `oklch(0.869588 0.06751 334.899)`,
      terminalScrollbar: `oklch(0.851713 0.055822 336.6)`,
      terminalScrollbarHover: `oklch(0.802407 0.090963 345.892)`,
    },
    variants: {
      dark: {
        canvas: `oklch(0.22813 0.020366 307.469)`,
        chrome: `oklch(0.22813 0.020366 307.469)`,
        toolbar: `oklch(0.22813 0.020366 307.469)`,
        toolbarForeground: `oklch(0.980735 0.004092 301.426)`,
        toolbarBorder: `oklch(0.266943 0.015262 302.425)`,
        toolbarControl: `oklch(0.313674 0.030572 310.061)`,
        toolbarControlForeground: `oklch(0.848252 0.038248 307.961)`,
        toolbarControlHover: `oklch(0.364912 0.050794 308.491)`,
        surface: `oklch(0.267101 0.02016 311.799)`,
        surfaceRaised: `oklch(0.279864 0.021572 309.532)`,
        surfaceOverlay: `oklch(0.154761 0.01316 338.901)`,
        text: `oklch(0.980735 0.004092 301.426)`,
        textMuted: `oklch(0.880303 0.03077 342.696)`,
        border: `oklch(0.266943 0.015262 302.425)`,
        input: `oklch(0.266817 0.02897 344.461)`,
        focus: `oklch(0.591646 0.217985 0.584)`,
        accent: `oklch(0.460685 0.185347 4.099)`,
        accentForeground: `oklch(0.901233 0.057189 343.694)`,
        secondary: `oklch(0.313674 0.030572 310.061)`,
        secondaryForeground: `oklch(0.848252 0.038248 307.961)`,
        muted: `oklch(0.360924 0.021469 316.83)`,
        mutedForeground: `oklch(0.880303 0.03077 342.696)`,
        placeholder: `oklch(0.657087 0.028226 307.985)`,
        secondaryLabel: `oklch(0.880303 0.03077 342.696)`,
        iconMuted: `oklch(0.848252 0.038248 307.961)`,
        error: `oklch(0.458704 0.169677 3.815)`,
        errorForeground: `oklch(0.901233 0.057189 343.694)`,
        errorSurface: `oklch(0.259022 0.04799 340.062)`,
        warning: `oklch(0.76859 0.164659 70.08)`,
        warningForeground: `oklch(0.836861 0.164422 84.429)`,
        warningSurface: `oklch(0.321706 0.036256 60.806)`,
        update: `oklch(0.460685 0.185347 4.099)`,
        updateForeground: `oklch(0.901233 0.057189 343.694)`,
        updateSurface: `oklch(0.256077 0.063004 342.914)`,
        accentSurface: `oklch(0.364912 0.050794 308.491)`,
        accentSurfaceForeground: `oklch(0.964695 0.009139 341.803)`,
        messageSurface: `oklch(0.273791 0.025541 309.079)`,
        messageForeground: `oklch(0.949872 0.021269 306.838)`,
        messageAction: `oklch(0.460685 0.185347 4.099)`,
        messageActionForeground: `oklch(0.901233 0.057189 343.694)`,
        messageActionHover: `oklch(0.458754 0.184639 3.857)`,
        codeBackground: `oklch(0.22813 0.020366 307.469)`,
        codeForeground: `oklch(0.848703 0.064239 306.645)`,
        searchMatchBackground: `oklch(0.55 0.1 85)`,
        searchMatchForeground: `oklch(0.970151 0 0)`,
        searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
        searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
        sidebar: `oklch(0.185778 0.019368 322.159)`,
        sidebarForeground: `oklch(0.967434 0.001326 286.375)`,
        sidebarMutedForeground: `oklch(0.880303 0.03077 342.696)`,
        sidebarControlSurface: `oklch(0.23366 0.026081 338.196)`,
        sidebarRowHover: `oklch(0.23366 0.026081 338.196)`,
        sidebarRowActive: `oklch(0.23366 0.026081 338.196)`,
        sidebarRowSelected: `oklch(0.23366 0.026081 338.196)`,
        sidebarBorder: `oklch(0.269132 0.030766 351.067)`,
        terminalBackground: `oklch(0.22813 0.020366 307.469)`,
        terminalForeground: `oklch(0.980735 0.004092 301.426)`,
        terminalCursor: `oklch(0.591646 0.217985 0.584)`,
        terminalSelection: `oklch(0.313674 0.030572 310.061)`,
        terminalScrollbar: `oklch(0.266817 0.02897 344.461)`,
        terminalScrollbarHover: `oklch(0.360924 0.021469 316.83)`,
      },
    },
    sidebarArtwork: !0,
  },
  nn = {
    id: `grove`,
    label: `Grove`,
    appearance: `light`,
    colors: {
      canvas: `oklch(0.972369 0.005497 157.15)`,
      chrome: `oklch(0.972369 0.005497 157.15)`,
      toolbar: `oklch(0.972369 0.005497 157.15)`,
      toolbarForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarBorder: `oklch(0.909438 0.021521 164.612)`,
      toolbarControl: `oklch(0.936464 0.014601 163.554)`,
      toolbarControlForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarControlHover: `oklch(0.909438 0.021521 164.612)`,
      surface: `oklch(0.972369 0.005497 157.15)`,
      surfaceRaised: `oklch(0.949276 0.004496 159.002)`,
      surfaceOverlay: `oklch(0.932695 0.003778 160.944)`,
      text: `oklch(0.222003 0.03479 328.979)`,
      textMuted: `oklch(0.540472 0.014944 326.176)`,
      border: `oklch(0.864831 0.01312 167.255)`,
      input: `oklch(0.829746 0.016084 168.234)`,
      focus: `oklch(0.523295 0.112292 158.089)`,
      accent: `oklch(0.523295 0.112292 158.089)`,
      accentForeground: `oklch(0.990339 0.008411 325.64)`,
      secondary: `oklch(0.936464 0.014601 163.554)`,
      secondaryForeground: `oklch(0.222003 0.03479 328.979)`,
      muted: `oklch(0.945455 0.012308 162.879)`,
      mutedForeground: `oklch(0.527266 0.012309 320.683)`,
      placeholder: `oklch(0.529681 0.01551 326.299)`,
      secondaryLabel: `oklch(0.540472 0.014944 326.176)`,
      iconMuted: `oklch(0.540472 0.014944 326.176)`,
      error: `oklch(0.637823 0.237287 25.436)`,
      errorForeground: `oklch(0.509494 0.208583 28.513)`,
      errorSurface: `oklch(0.936968 0.014243 26.295)`,
      warning: `oklch(0.772406 0.172798 65.367)`,
      warningForeground: `oklch(0.545036 0.155019 45.359)`,
      warningSurface: `oklch(0.953175 0.02009 93.379)`,
      update: `oklch(0.523295 0.112292 158.089)`,
      updateForeground: `oklch(0.388012 0.080082 158.768)`,
      updateSurface: `oklch(0.900411 0.02384 164.795)`,
      accentSurface: `oklch(0.909438 0.021521 164.612)`,
      accentSurfaceForeground: `oklch(0.222003 0.03479 328.979)`,
      messageSurface: `oklch(0.891377 0.026164 164.929)`,
      messageForeground: `oklch(0.222003 0.03479 328.979)`,
      messageAction: `oklch(0.535028 0.106403 77.549)`,
      messageActionForeground: `oklch(0.990339 0.008411 325.64)`,
      messageActionHover: `oklch(0.488753 0.096536 77.829)`,
      codeBackground: `oklch(0.955888 0.004783 158.391)`,
      codeForeground: `oklch(0.222003 0.03479 328.979)`,
      searchMatchBackground: `oklch(0.915 0.11 85)`,
      searchMatchForeground: `oklch(0.216164 0.028283 77.423)`,
      searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
      searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
      sidebar: `oklch(0.936464 0.014601 163.554)`,
      sidebarForeground: `oklch(0.222003 0.03479 328.979)`,
      sidebarMutedForeground: `oklch(0.515606 0.011938 318.897)`,
      sidebarControlSurface: `oklch(0.88585 0.011734 166.331)`,
      sidebarRowHover: `oklch(0.886676 0.027374 164.983)`,
      sidebarRowActive: `oklch(0.85335 0.03597 165.158)`,
      sidebarRowSelected: `oklch(0.836654 0.040284 165.149)`,
      sidebarBorder: `oklch(0.860274 0.010287 168.339)`,
      terminalBackground: `oklch(0.972369 0.005497 157.15)`,
      terminalForeground: `oklch(0.222003 0.03479 328.979)`,
      terminalCursor: `oklch(0.523295 0.112292 158.089)`,
      terminalSelection: `oklch(0.891377 0.026164 164.929)`,
      terminalScrollbar: `oklch(0.824752 0.001392 294.641)`,
      terminalScrollbarHover: `oklch(0.755495 0.004415 318.776)`,
    },
    variants: {
      dark: {
        canvas: `oklch(0.260865 0.02152 162.75)`,
        chrome: `oklch(0.260865 0.02152 162.75)`,
        toolbar: `oklch(0.260865 0.02152 162.75)`,
        toolbarForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarBorder: `oklch(0.464636 0.066083 158.72)`,
        toolbarControl: `oklch(0.380487 0.048313 159.608)`,
        toolbarControlForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarControlHover: `oklch(0.437021 0.060312 158.962)`,
        surface: `oklch(0.260865 0.02152 162.75)`,
        surfaceRaised: `oklch(0.363192 0.016572 165.32)`,
        surfaceOverlay: `oklch(0.411828 0.014378 166.627)`,
        text: `oklch(0.990339 0.008411 325.64)`,
        textMuted: `oklch(0.666747 0.004239 187.292)`,
        border: `oklch(0.457475 0.044046 160.971)`,
        input: `oklch(0.519849 0.049896 160.863)`,
        focus: `oklch(0.796228 0.133058 157.319)`,
        accent: `oklch(0.796228 0.133058 157.319)`,
        accentForeground: `oklch(0.222003 0.03479 328.979)`,
        secondary: `oklch(0.380487 0.048313 159.608)`,
        secondaryForeground: `oklch(0.990339 0.008411 325.64)`,
        muted: `oklch(0.339728 0.039456 160.274)`,
        mutedForeground: `oklch(0.715427 0.010896 171.428)`,
        placeholder: `oklch(0.739243 0.002222 223.225)`,
        secondaryLabel: `oklch(0.666747 0.004239 187.292)`,
        iconMuted: `oklch(0.666747 0.004239 187.292)`,
        error: `oklch(0.655108 0.221148 23.473)`,
        errorForeground: `oklch(0.704237 0.187511 22.228)`,
        errorSurface: `oklch(0.312773 0.02923 32.121)`,
        warning: `oklch(0.772406 0.172798 65.367)`,
        warningForeground: `oklch(0.829017 0.171221 81.038)`,
        warningSurface: `oklch(0.345524 0.046882 99.736)`,
        update: `oklch(0.796228 0.133058 157.319)`,
        updateForeground: `oklch(0.86276 0.089288 159.704)`,
        updateSurface: `oklch(0.448116 0.062637 158.86)`,
        accentSurface: `oklch(0.437021 0.060312 158.962)`,
        accentSurfaceForeground: `oklch(0.990339 0.008411 325.64)`,
        messageSurface: `oklch(0.470111 0.067221 158.676)`,
        messageForeground: `oklch(0.990339 0.008411 325.64)`,
        messageAction: `oklch(0.791603 0.129713 83.299)`,
        messageActionForeground: `oklch(0.222003 0.03479 328.979)`,
        messageActionHover: `oklch(0.815227 0.117902 84.21)`,
        codeBackground: `oklch(0.312979 0.018942 164.082)`,
        codeForeground: `oklch(0.990339 0.008411 325.64)`,
        searchMatchBackground: `oklch(0.55 0.1 85)`,
        searchMatchForeground: `oklch(0.970151 0 0)`,
        searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
        searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
        sidebar: `oklch(0.309925 0.032827 160.944)`,
        sidebarForeground: `oklch(0.990339 0.008411 325.64)`,
        sidebarMutedForeground: `oklch(0.711387 0.007643 175.89)`,
        sidebarControlSurface: `oklch(0.432727 0.024549 163.654)`,
        sidebarRowHover: `oklch(0.374959 0.047124 159.686)`,
        sidebarRowActive: `oklch(0.41688 0.056069 159.165)`,
        sidebarRowSelected: `oklch(0.437466 0.060406 158.958)`,
        sidebarBorder: `oklch(0.569253 0.015933 167.062)`,
        terminalBackground: `oklch(0.260865 0.02152 162.75)`,
        terminalForeground: `oklch(0.990339 0.008411 325.64)`,
        terminalCursor: `oklch(0.796228 0.133058 157.319)`,
        terminalSelection: `oklch(0.464636 0.066083 158.72)`,
        terminalScrollbar: `oklch(0.594692 0.006862 176.022)`,
        terminalScrollbarHover: `oklch(0.687968 0.00354 193.55)`,
      },
    },
    sidebarArtwork: !0,
  },
  rn = {
    id: `ocean`,
    label: `Ocean`,
    appearance: `light`,
    colors: {
      canvas: `oklch(0.974199 0.002856 241.597)`,
      chrome: `oklch(0.974199 0.002856 241.597)`,
      toolbar: `oklch(0.974199 0.002856 241.597)`,
      toolbarForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarBorder: `oklch(0.91295 0.018827 241.836)`,
      toolbarControl: `oklch(0.939254 0.01193 241.729)`,
      toolbarControlForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarControlHover: `oklch(0.91295 0.018827 241.836)`,
      surface: `oklch(0.974199 0.002856 241.597)`,
      surfaceRaised: `oklch(0.951058 0.002962 258.339)`,
      surfaceOverlay: `oklch(0.934442 0.003181 269.1)`,
      text: `oklch(0.222003 0.03479 328.979)`,
      textMuted: `oklch(0.541555 0.017468 323.531)`,
      border: `oklch(0.867646 0.013482 252.362)`,
      input: `oklch(0.832939 0.017389 252.598)`,
      focus: `oklch(0.536684 0.120219 247.01)`,
      accent: `oklch(0.536684 0.120219 247.01)`,
      accentForeground: `oklch(0.990339 0.008411 325.64)`,
      secondary: `oklch(0.939254 0.01193 241.729)`,
      secondaryForeground: `oklch(0.222003 0.03479 328.979)`,
      muted: `oklch(0.948004 0.009649 241.695)`,
      mutedForeground: `oklch(0.528741 0.01828 313.823)`,
      placeholder: `oklch(0.530733 0.01795 323.79)`,
      secondaryLabel: `oklch(0.541555 0.017468 323.531)`,
      iconMuted: `oklch(0.541555 0.017468 323.531)`,
      error: `oklch(0.637823 0.237287 25.436)`,
      errorForeground: `oklch(0.509494 0.208583 28.513)`,
      errorSurface: `oklch(0.938747 0.016377 7.186)`,
      warning: `oklch(0.772406 0.172798 65.367)`,
      warningForeground: `oklch(0.546927 0.155556 45.359)`,
      warningSurface: `oklch(0.954846 0.016009 81.731)`,
      update: `oklch(0.536684 0.120219 247.01)`,
      updateForeground: `oklch(0.397497 0.084999 246.523)`,
      updateSurface: `oklch(0.904165 0.021144 241.874)`,
      accentSurface: `oklch(0.91295 0.018827 241.836)`,
      accentSurfaceForeground: `oklch(0.222003 0.03479 328.979)`,
      messageSurface: `oklch(0.895373 0.023469 241.913)`,
      messageForeground: `oklch(0.222003 0.03479 328.979)`,
      messageAction: `oklch(0.493961 0.08175 201.584)`,
      messageActionForeground: `oklch(0.990339 0.008411 325.64)`,
      messageActionHover: `oklch(0.45151 0.074407 201.516)`,
      codeBackground: `oklch(0.957684 0.002906 253.68)`,
      codeForeground: `oklch(0.222003 0.03479 328.979)`,
      searchMatchBackground: `oklch(0.915 0.11 85)`,
      searchMatchForeground: `oklch(0.216164 0.028283 77.423)`,
      searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
      searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
      sidebar: `oklch(0.939254 0.01193 241.729)`,
      sidebarForeground: `oklch(0.222003 0.03479 328.979)`,
      sidebarMutedForeground: `oklch(0.517366 0.018944 311.433)`,
      sidebarControlSurface: `oklch(0.888479 0.011475 251.638)`,
      sidebarRowHover: `oklch(0.890798 0.024681 241.933)`,
      sidebarRowActive: `oklch(0.858363 0.033325 242.089)`,
      sidebarRowSelected: `oklch(0.842113 0.037689 242.174)`,
      sidebarBorder: `oklch(0.862823 0.011384 256.926)`,
      terminalBackground: `oklch(0.974199 0.002856 241.597)`,
      terminalForeground: `oklch(0.222003 0.03479 328.979)`,
      terminalCursor: `oklch(0.536684 0.120219 247.01)`,
      terminalSelection: `oklch(0.895373 0.023469 241.913)`,
      terminalScrollbar: `oklch(0.826271 0.006191 305.456)`,
      terminalScrollbarHover: `oklch(0.756866 0.008685 313.721)`,
    },
    variants: {
      dark: {
        canvas: `oklch(0.242641 0.024125 250.573)`,
        chrome: `oklch(0.242641 0.024125 250.573)`,
        toolbar: `oklch(0.242641 0.024125 250.573)`,
        toolbarForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarBorder: `oklch(0.439946 0.0561 243.479)`,
        toolbarControl: `oklch(0.358725 0.043145 244.911)`,
        toolbarControlForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarControlHover: `oklch(0.413315 0.051874 243.855)`,
        surface: `oklch(0.242641 0.024125 250.573)`,
        surfaceRaised: `oklch(0.348439 0.019942 253.696)`,
        surfaceOverlay: `oklch(0.398517 0.018232 255.72)`,
        text: `oklch(0.990339 0.008411 325.64)`,
        textMuted: `oklch(0.652227 0.01149 273.31)`,
        border: `oklch(0.438653 0.039496 245.44)`,
        input: `oklch(0.500905 0.043574 244.781)`,
        focus: `oklch(0.758933 0.105833 241.548)`,
        accent: `oklch(0.758933 0.105833 241.548)`,
        accentForeground: `oklch(0.222003 0.03479 328.979)`,
        secondary: `oklch(0.358725 0.043145 244.911)`,
        secondaryForeground: `oklch(0.990339 0.008411 325.64)`,
        muted: `oklch(0.319287 0.036766 246.065)`,
        mutedForeground: `oklch(0.691936 0.016294 261.588)`,
        placeholder: `oklch(0.721641 0.010192 281.271)`,
        secondaryLabel: `oklch(0.652227 0.01149 273.31)`,
        iconMuted: `oklch(0.652227 0.01149 273.31)`,
        error: `oklch(0.655108 0.221148 23.473)`,
        errorForeground: `oklch(0.702184 0.189226 22.228)`,
        errorSurface: `oklch(0.298933 0.036443 350.094)`,
        warning: `oklch(0.772406 0.172798 65.367)`,
        warningForeground: `oklch(0.829017 0.171221 81.038)`,
        warningSurface: `oklch(0.329449 0.028712 84.495)`,
        update: `oklch(0.758933 0.105833 241.548)`,
        updateForeground: `oklch(0.840844 0.069217 240.151)`,
        updateSurface: `oklch(0.424017 0.053575 243.695)`,
        accentSurface: `oklch(0.413315 0.051874 243.855)`,
        accentSurfaceForeground: `oklch(0.990339 0.008411 325.64)`,
        messageSurface: `oklch(0.445224 0.056936 243.413)`,
        messageForeground: `oklch(0.990339 0.008411 325.64)`,
        messageAction: `oklch(0.793363 0.105022 199.893)`,
        messageActionForeground: `oklch(0.222003 0.03479 328.979)`,
        messageActionHover: `oklch(0.815308 0.096174 199.862)`,
        codeBackground: `oklch(0.29661 0.021883 251.968)`,
        codeForeground: `oklch(0.990339 0.008411 325.64)`,
        searchMatchBackground: `oklch(0.55 0.1 85)`,
        searchMatchForeground: `oklch(0.970151 0 0)`,
        searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
        searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
        sidebar: `oklch(0.290387 0.032043 247.274)`,
        sidebarForeground: `oklch(0.990339 0.008411 325.64)`,
        sidebarMutedForeground: `oklch(0.69099 0.01395 266.424)`,
        sidebarControlSurface: `oklch(0.417822 0.02535 250.162)`,
        sidebarRowHover: `oklch(0.353381 0.042285 245.043)`,
        sidebarRowActive: `oklch(0.393878 0.048778 244.179)`,
        sidebarRowSelected: `oklch(0.413744 0.051943 243.848)`,
        sidebarBorder: `oklch(0.55859 0.019001 256.223)`,
        terminalBackground: `oklch(0.242641 0.024125 250.573)`,
        terminalForeground: `oklch(0.990339 0.008411 325.64)`,
        terminalCursor: `oklch(0.758933 0.105833 241.548)`,
        terminalSelection: `oklch(0.439946 0.0561 243.479)`,
        terminalScrollbar: `oklch(0.58613 0.012959 267.22)`,
        terminalScrollbarHover: `oklch(0.681569 0.010909 276.465)`,
      },
    },
    sidebarArtwork: !0,
  },
  an = {
    id: `ember`,
    label: `Ember`,
    appearance: `light`,
    colors: {
      canvas: `oklch(0.976527 0.002685 60.725)`,
      chrome: `oklch(0.976527 0.002685 60.725)`,
      toolbar: `oklch(0.976527 0.002685 60.725)`,
      toolbarForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarBorder: `oklch(0.916502 0.01832 49.597)`,
      toolbarControl: `oklch(0.942267 0.01151 50.785)`,
      toolbarControlForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarControlHover: `oklch(0.916502 0.01832 49.597)`,
      surface: `oklch(0.976527 0.002685 60.725)`,
      surfaceRaised: `oklch(0.953321 0.002701 42.266)`,
      surfaceOverlay: `oklch(0.936659 0.002879 29.96)`,
      text: `oklch(0.222003 0.03479 328.979)`,
      textMuted: `oklch(0.543023 0.017316 331.964)`,
      border: `oklch(0.870631 0.013204 39.431)`,
      input: `oklch(0.836213 0.017153 38.661)`,
      focus: `oklch(0.552831 0.129438 44.656)`,
      accent: `oklch(0.552831 0.129438 44.656)`,
      accentForeground: `oklch(0.990339 0.008411 325.64)`,
      secondary: `oklch(0.942267 0.01151 50.785)`,
      secondaryForeground: `oklch(0.222003 0.03479 328.979)`,
      muted: `oklch(0.950842 0.009273 51.528)`,
      mutedForeground: `oklch(0.530413 0.018453 341.181)`,
      placeholder: `oklch(0.532339 0.017796 331.748)`,
      secondaryLabel: `oklch(0.543023 0.017316 331.964)`,
      iconMuted: `oklch(0.543023 0.017316 331.964)`,
      error: `oklch(0.637823 0.237287 25.436)`,
      errorForeground: `oklch(0.509494 0.208583 28.513)`,
      errorSurface: `oklch(0.941094 0.019938 19.375)`,
      warning: `oklch(0.772406 0.172798 65.367)`,
      warningForeground: `oklch(0.549154 0.156188 45.359)`,
      warningSurface: `oklch(0.957148 0.020843 76.702)`,
      update: `oklch(0.552831 0.129438 44.656)`,
      updateForeground: `oklch(0.408647 0.091207 45.037)`,
      updateSurface: `oklch(0.907902 0.020621 49.36)`,
      accentSurface: `oklch(0.916502 0.01832 49.597)`,
      accentSurfaceForeground: `oklch(0.222003 0.03479 328.979)`,
      messageSurface: `oklch(0.899296 0.022939 49.163)`,
      messageForeground: `oklch(0.222003 0.03479 328.979)`,
      messageAction: `oklch(0.516323 0.161628 24.82)`,
      messageActionForeground: `oklch(0.990339 0.008411 325.64)`,
      messageActionHover: `oklch(0.471223 0.145843 24.688)`,
      codeBackground: `oklch(0.959965 0.002668 47.512)`,
      codeForeground: `oklch(0.222003 0.03479 328.979)`,
      searchMatchBackground: `oklch(0.915 0.11 85)`,
      searchMatchForeground: `oklch(0.216164 0.028283 77.423)`,
      searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
      searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
      sidebar: `oklch(0.942267 0.01151 50.785)`,
      sidebarForeground: `oklch(0.222003 0.03479 328.979)`,
      sidebarMutedForeground: `oklch(0.519146 0.019214 343.427)`,
      sidebarControlSurface: `oklch(0.891332 0.011179 40.596)`,
      sidebarRowHover: `oklch(0.894819 0.024151 49.073)`,
      sidebarRowActive: `oklch(0.863104 0.032855 48.586)`,
      sidebarRowSelected: `oklch(0.84723 0.037292 48.403)`,
      sidebarBorder: `oklch(0.865593 0.011154 35.246)`,
      terminalBackground: `oklch(0.976527 0.002685 60.725)`,
      terminalForeground: `oklch(0.222003 0.03479 328.979)`,
      terminalCursor: `oklch(0.552831 0.129438 44.656)`,
      terminalSelection: `oklch(0.899296 0.022939 49.163)`,
      terminalScrollbar: `oklch(0.828185 0.005884 349.533)`,
      terminalScrollbarHover: `oklch(0.758584 0.008423 341.16)`,
    },
    variants: {
      dark: {
        canvas: `oklch(0.245899 0.019144 42.044)`,
        chrome: `oklch(0.245899 0.019144 42.044)`,
        toolbar: `oklch(0.245899 0.019144 42.044)`,
        toolbarForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarBorder: `oklch(0.442681 0.0608 50.795)`,
        toolbarControl: `oklch(0.361499 0.044052 49.515)`,
        toolbarControlForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarControlHover: `oklch(0.416048 0.055354 50.484)`,
        surface: `oklch(0.245899 0.019144 42.044)`,
        surfaceRaised: `oklch(0.351262 0.01565 37.592)`,
        surfaceOverlay: `oklch(0.401111 0.014308 34.896)`,
        text: `oklch(0.990339 0.008411 325.64)`,
        textMuted: `oklch(0.654017 0.009505 13.287)`,
        border: `oklch(0.44099 0.040202 48.807)`,
        input: `oklch(0.503003 0.045721 49.44)`,
        focus: `oklch(0.762174 0.124117 52.082)`,
        accent: `oklch(0.762174 0.124117 52.082)`,
        accentForeground: `oklch(0.222003 0.03479 328.979)`,
        secondary: `oklch(0.361499 0.044052 49.515)`,
        secondaryForeground: `oklch(0.990339 0.008411 325.64)`,
        muted: `oklch(0.322144 0.03574 48.309)`,
        mutedForeground: `oklch(0.692479 0.015227 30.963)`,
        placeholder: `oklch(0.723533 0.008741 4.515)`,
        secondaryLabel: `oklch(0.654017 0.009505 13.287)`,
        iconMuted: `oklch(0.654017 0.009505 13.287)`,
        error: `oklch(0.655108 0.221148 23.473)`,
        errorForeground: `oklch(0.702184 0.189226 22.228)`,
        errorSurface: `oklch(0.310955 0.059624 24.334)`,
        warning: `oklch(0.772406 0.172798 65.367)`,
        warningForeground: `oklch(0.829017 0.171221 81.038)`,
        warningSurface: `oklch(0.339137 0.055638 66.911)`,
        update: `oklch(0.762174 0.124117 52.082)`,
        updateForeground: `oklch(0.841456 0.079585 53.521)`,
        updateSurface: `oklch(0.426749 0.057547 50.618)`,
        accentSurface: `oklch(0.416048 0.055354 50.484)`,
        accentSurfaceForeground: `oklch(0.990339 0.008411 325.64)`,
        messageSurface: `oklch(0.447961 0.061874 50.849)`,
        messageForeground: `oklch(0.990339 0.008411 325.64)`,
        messageAction: `oklch(0.747955 0.135578 29.432)`,
        messageActionForeground: `oklch(0.222003 0.03479 328.979)`,
        messageActionHover: `oklch(0.775116 0.117953 29.014)`,
        codeBackground: `oklch(0.299662 0.017229 39.973)`,
        codeForeground: `oklch(0.990339 0.008411 325.64)`,
        searchMatchBackground: `oklch(0.55 0.1 85)`,
        searchMatchForeground: `oklch(0.970151 0 0)`,
        searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
        searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
        sidebar: `oklch(0.293349 0.029554 46.882)`,
        sidebarForeground: `oklch(0.990339 0.008411 325.64)`,
        sidebarMutedForeground: `oklch(0.691874 0.012538 24.638)`,
        sidebarControlSurface: `oklch(0.420227 0.022893 43.226)`,
        sidebarRowHover: `oklch(0.356163 0.042933 49.385)`,
        sidebarRowActive: `oklch(0.396617 0.051353 50.201)`,
        sidebarRowSelected: `oklch(0.416477 0.055442 50.489)`,
        sidebarBorder: `oklch(0.560372 0.016998 36.179)`,
        terminalBackground: `oklch(0.245899 0.019144 42.044)`,
        terminalForeground: `oklch(0.990339 0.008411 325.64)`,
        terminalCursor: `oklch(0.762174 0.124117 52.082)`,
        terminalSelection: `oklch(0.442681 0.0608 50.795)`,
        terminalScrollbar: `oklch(0.587861 0.010463 20.444)`,
        terminalScrollbarHover: `oklch(0.682876 0.009156 9.796)`,
      },
    },
    sidebarArtwork: !0,
  },
  on = {
    id: `iris`,
    label: `Iris`,
    appearance: `light`,
    colors: {
      canvas: `oklch(0.976531 0.003855 303.226)`,
      chrome: `oklch(0.976531 0.003855 303.226)`,
      toolbar: `oklch(0.976531 0.003855 303.226)`,
      toolbarForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarBorder: `oklch(0.914882 0.022965 299.986)`,
      toolbarControl: `oklch(0.941387 0.014687 300.474)`,
      toolbarControlForeground: `oklch(0.222003 0.03479 328.979)`,
      toolbarControlHover: `oklch(0.914882 0.022965 299.986)`,
      surface: `oklch(0.976531 0.003855 303.226)`,
      surfaceRaised: `oklch(0.953326 0.004536 307.676)`,
      surfaceOverlay: `oklch(0.936665 0.005041 310.132)`,
      text: `oklch(0.222003 0.03479 328.979)`,
      textMuted: `oklch(0.543042 0.018894 325.652)`,
      border: `oklch(0.869608 0.018226 303.859)`,
      input: `oklch(0.834773 0.023405 303.676)`,
      focus: `oklch(0.525348 0.15373 294.176)`,
      accent: `oklch(0.525348 0.15373 294.176)`,
      accentForeground: `oklch(0.990339 0.008411 325.64)`,
      secondary: `oklch(0.941387 0.014687 300.474)`,
      secondaryForeground: `oklch(0.222003 0.03479 328.979)`,
      muted: `oklch(0.950194 0.011956 300.733)`,
      mutedForeground: `oklch(0.529955 0.022319 321.556)`,
      placeholder: `oklch(0.532177 0.019333 325.784)`,
      secondaryLabel: `oklch(0.543042 0.018894 325.652)`,
      iconMuted: `oklch(0.543042 0.018894 325.652)`,
      error: `oklch(0.637823 0.237287 25.436)`,
      errorForeground: `oklch(0.509494 0.208583 28.513)`,
      errorSurface: `oklch(0.941043 0.019582 4.235)`,
      warning: `oklch(0.772406 0.172798 65.367)`,
      warningForeground: `oklch(0.549154 0.156188 45.359)`,
      warningSurface: `oklch(0.957054 0.016197 69.932)`,
      update: `oklch(0.525348 0.15373 294.176)`,
      updateForeground: `oklch(0.389926 0.10825 294.547)`,
      updateSurface: `oklch(0.90602 0.025754 299.867)`,
      accentSurface: `oklch(0.914882 0.022965 299.986)`,
      accentSurfaceForeground: `oklch(0.222003 0.03479 328.979)`,
      messageSurface: `oklch(0.897143 0.028558 299.758)`,
      messageForeground: `oklch(0.222003 0.03479 328.979)`,
      messageAction: `oklch(0.516084 0.185229 340.776)`,
      messageActionForeground: `oklch(0.990339 0.008411 325.64)`,
      messageActionHover: `oklch(0.471003 0.16748 340.687)`,
      codeBackground: `oklch(0.95997 0.004338 306.542)`,
      codeForeground: `oklch(0.222003 0.03479 328.979)`,
      searchMatchBackground: `oklch(0.915 0.11 85)`,
      searchMatchForeground: `oklch(0.216164 0.028283 77.423)`,
      searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
      searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
      sidebar: `oklch(0.941387 0.014687 300.474)`,
      sidebarForeground: `oklch(0.222003 0.03479 328.979)`,
      sidebarMutedForeground: `oklch(0.518417 0.023683 320.681)`,
      sidebarControlSurface: `oklch(0.890512 0.0155 303.803)`,
      sidebarRowHover: `oklch(0.892522 0.030022 299.704)`,
      sidebarRowActive: `oklch(0.85971 0.040501 299.36)`,
      sidebarRowSelected: `oklch(0.843236 0.045818 299.198)`,
      sidebarBorder: `oklch(0.864805 0.015938 305.371)`,
      terminalBackground: `oklch(0.976531 0.003855 303.226)`,
      terminalForeground: `oklch(0.222003 0.03479 328.979)`,
      terminalCursor: `oklch(0.525348 0.15373 294.176)`,
      terminalSelection: `oklch(0.897143 0.028558 299.758)`,
      terminalScrollbar: `oklch(0.828195 0.008526 318.858)`,
      terminalScrollbarHover: `oklch(0.758596 0.010892 321.538)`,
    },
    variants: {
      dark: {
        canvas: `oklch(0.225975 0.031062 293.741)`,
        chrome: `oklch(0.225975 0.031062 293.741)`,
        toolbar: `oklch(0.225975 0.031062 293.741)`,
        toolbarForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarBorder: `oklch(0.395417 0.085554 294.182)`,
        toolbarControl: `oklch(0.325405 0.063614 294.23)`,
        toolbarControlForeground: `oklch(0.990339 0.008411 325.64)`,
        toolbarControlHover: `oklch(0.372436 0.07841 294.204)`,
        surface: `oklch(0.225975 0.031062 293.741)`,
        surfaceRaised: `oklch(0.335291 0.026008 296.394)`,
        surfaceOverlay: `oklch(0.386739 0.024023 297.509)`,
        text: `oklch(0.990339 0.008411 325.64)`,
        textMuted: `oklch(0.640465 0.016197 304.171)`,
        border: `oklch(0.40874 0.058536 295.893)`,
        input: `oklch(0.46756 0.065775 296.265)`,
        focus: `oklch(0.671712 0.169136 293.929)`,
        accent: `oklch(0.671712 0.169136 293.929)`,
        accentForeground: `oklch(0.222003 0.03479 328.979)`,
        secondary: `oklch(0.325405 0.063614 294.23)`,
        secondaryForeground: `oklch(0.990339 0.008411 325.64)`,
        muted: `oklch(0.291515 0.05276 294.209)`,
        mutedForeground: `oklch(0.663321 0.025932 301.862)`,
        placeholder: `oklch(0.706249 0.014508 306.607)`,
        secondaryLabel: `oklch(0.640465 0.016197 304.171)`,
        iconMuted: `oklch(0.640465 0.016197 304.171)`,
        error: `oklch(0.655108 0.221148 23.473)`,
        errorForeground: `oklch(0.702184 0.189226 22.228)`,
        errorSurface: `oklch(0.291658 0.054707 352.238)`,
        warning: `oklch(0.772406 0.172798 65.367)`,
        warningForeground: `oklch(0.829017 0.171221 81.038)`,
        warningSurface: `oklch(0.318952 0.033845 51.646)`,
        update: `oklch(0.671712 0.169136 293.929)`,
        updateForeground: `oklch(0.785032 0.108439 296.344)`,
        updateSurface: `oklch(0.381668 0.081286 294.195)`,
        accentSurface: `oklch(0.372436 0.07841 294.204)`,
        accentSurfaceForeground: `oklch(0.990339 0.008411 325.64)`,
        messageSurface: `oklch(0.399975 0.086965 294.177)`,
        messageForeground: `oklch(0.990339 0.008411 325.64)`,
        messageAction: `oklch(0.789904 0.130063 337.621)`,
        messageActionForeground: `oklch(0.222003 0.03479 328.979)`,
        messageActionHover: `oklch(0.813537 0.114101 337.23)`,
        codeBackground: `oklch(0.281873 0.028308 295.193)`,
        codeForeground: `oklch(0.990339 0.008411 325.64)`,
        searchMatchBackground: `oklch(0.55 0.1 85)`,
        searchMatchForeground: `oklch(0.970151 0 0)`,
        searchMatchActiveBackground: `oklch(0.774202 0.151946 74.331)`,
        searchMatchActiveForeground: `oklch(0.216164 0.028283 77.423)`,
        sidebar: `oklch(0.266743 0.044689 294.138)`,
        sidebarForeground: `oklch(0.990339 0.008411 325.64)`,
        sidebarMutedForeground: `oklch(0.668773 0.021522 302.949)`,
        sidebarControlSurface: `oklch(0.399977 0.035678 297.031)`,
        sidebarRowHover: `oklch(0.320808 0.062152 294.23)`,
        sidebarRowActive: `oklch(0.355677 0.073167 294.217)`,
        sidebarRowSelected: `oklch(0.372806 0.078525 294.203)`,
        sidebarBorder: `oklch(0.545895 0.027522 299.871)`,
        terminalBackground: `oklch(0.225975 0.031062 293.741)`,
        terminalForeground: `oklch(0.990339 0.008411 325.64)`,
        terminalCursor: `oklch(0.671712 0.169136 293.929)`,
        terminalSelection: `oklch(0.395417 0.085554 294.182)`,
        terminalScrollbar: `oklch(0.578663 0.017888 302.229)`,
        terminalScrollbarHover: `oklch(0.676012 0.015271 305.433)`,
      },
    },
    sidebarArtwork: !0,
  },
  sn = [tn, nn, rn, an, on],
  cn = `t3-chat`,
  ln = `grove`,
  un = `ocean`,
  dn = `ember`,
  fn = `iris`,
  L = `t3code:themes:v1`,
  pn = `t3code:theme-follow-system`,
  mn = `t3code:theme-appearance-mode`,
  hn = `t3code:theme-halves:v1`,
  gn = `t3-chat-dark`,
  _n = n,
  vn = new Set(Qt),
  yn = [],
  bn = new Set(),
  R = null,
  xn = new Set(),
  Sn = null;
function Cn() {
  return Sn;
}
function wn() {
  return Sn === null && null;
}
function Tn(e) {
  return (xn.add(e), () => xn.delete(e));
}
function En(e) {
  if (Sn !== e) {
    Sn = e;
    for (let e of xn) e();
  }
}
function z(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function Dn(e) {
  return e === `light` || e === `dark`;
}
function On(e) {
  return typeof e == `string` && H(e) !== null;
}
function kn(e) {
  return typeof e == `string` && /^[a-z0-9](?:[a-z0-9-]{0,47})$/.test(e);
}
function An(e) {
  return typeof e == `string` && e.trim().length > 0 && e.trim().length <= 48;
}
function jn(e) {
  return z(e) &&
    typeof e.id == `string` &&
    /^[a-z0-9][a-z0-9.:-]{0,127}$/i.test(e.id) &&
    An(e.label)
    ? { id: e.id, label: e.label.trim() }
    : void 0;
}
function Mn(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    let e = H(r);
    vn.has(n) && e && (t[n] = e);
  }
  return t;
}
function Nn(e, t) {
  return z(e) ? { ...Tr(t), ...Mn(e) } : null;
}
function Pn(e, t) {
  if (e === void 0) return;
  if (!z(e)) return null;
  let n = {};
  for (let [r, i] of Object.entries(e)) {
    if (!Dn(r)) return null;
    if (r === t) continue;
    let e = Nn(i, r);
    if (!e) return null;
    n[r] = e;
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function Fn(e) {
  if (!z(e) || !kn(e.id) || I.has(e.id) || !An(e.label) || !Dn(e.appearance)) return null;
  let t = Nn(e.colors, e.appearance);
  if (!t) return null;
  let n = Pn(e.variants, e.appearance);
  if (e.variants !== void 0 && n === null) return null;
  let r = jn(e.collection);
  return {
    id: e.id,
    label: e.label.trim(),
    appearance: e.appearance,
    colors: t,
    ...(n ? { variants: n } : {}),
    ...(r ? { collection: r } : {}),
    ...(e.managed === !0 ? { managed: !0 } : {}),
  };
}
function In(e) {
  let t = [];
  for (let n of e) {
    let e = Fn(n);
    e && !t.some((t) => t.id === e.id) && t.push(e);
  }
  return t;
}
function Ln() {
  if (typeof window > `u`) return { status: `ready`, storedThemes: [], themes: [] };
  let e;
  try {
    e = window.localStorage.getItem(L);
  } catch (e) {
    return { status: `unavailable`, reason: `storage-unavailable`, cause: e };
  }
  if (!e) return { status: `ready`, storedThemes: [], themes: [] };
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return { status: `unavailable`, reason: `malformed` };
  }
  return Array.isArray(t)
    ? { status: `ready`, storedThemes: t, themes: In(t) }
    : { status: `unavailable`, reason: `malformed` };
}
function Rn() {
  return (R === null && (R = Ln()), R);
}
function zn() {
  for (let e of bn) e();
}
function Bn() {
  ((R = null), zn());
}
var Vn = [];
function Hn() {
  let e = Rn();
  return e.status === `ready` ? e.themes : Vn;
}
function Un() {
  return yn;
}
function Wn(e) {
  return !r(yn, e) && ((yn = e), zn(), !0);
}
function Gn(e) {
  return I.has(e);
}
function Kn(e) {
  return Lr().themes.filter((t) => t.collection?.id === e);
}
function qn(e) {
  if ((bn.add(e), typeof window > `u`)) return () => bn.delete(e);
  let t = (e) => {
    (e.key === `t3code:themes:v1` || e.key === null) && Bn();
  };
  return (
    window.addEventListener(`storage`, t),
    () => {
      (bn.delete(e), window.removeEventListener(`storage`, t));
    }
  );
}
var Jn = { [gn]: cn, "t3-grove": ln, "t3-ocean": un, "t3-ember": dn, "t3-iris": fn };
function Yn(e) {
  return Jn[e] ?? e;
}
function Xn(e) {
  return e === gn ? e : Yn(e);
}
function Zn(e) {
  return Yn(e);
}
function Qn(e) {
  return e === gn ? `dark` : null;
}
function $n(e) {
  return e === `dark` ? (tr ??= ur(en)) : (er ??= ur($t));
}
var er,
  tr,
  nr = { r: 255, g: 250, b: 255 },
  rr = { r: 36, g: 21, b: 35 },
  ir = { r: 255, g: 255, b: 255 },
  ar = { r: 0, g: 0, b: 0 },
  or = ie(`oklch`);
function B(e) {
  if (typeof e != `string`) return null;
  let t = e.trim(),
    n = ve(t);
  if (!n) return null;
  let r = or(n),
    i = r.l ?? 0,
    a = r.c ?? 0,
    o = r.h ?? 0,
    s = /\/\s*none\s*\)$/i.test(t) ? 0 : (r.alpha ?? 1);
  return [i, a, o, s].every(Number.isFinite)
    ? {
        color: { L: Math.min(1, Math.max(0, i)), C: Math.max(0, a), h: o },
        alpha: Math.min(1, Math.max(0, s)),
      }
    : null;
}
function sr(e, t) {
  return (Math.abs(e) < 10 ** -t / 2 ? 0 : e)
    .toFixed(t)
    .replace(/(?:\.0+|(?:(\.[0-9]*?)0+))$/, `$1`);
}
function V(e, t = 1) {
  let n = e.C < 5e-7 ? 0 : ((e.h % 360) + 360) % 360,
    r = `${sr(e.L, 6)} ${sr(e.C, 6)} ${sr(n, 3)}`;
  return t < 1 ? `oklch(${r} / ${sr(t, 4)})` : `oklch(${r})`;
}
function H(e) {
  let t = B(e);
  return t ? V(t.color, t.alpha) : null;
}
function cr(e) {
  let t = B(e),
    n = t ? { rgb: J(t.color), alpha: t.alpha } : null;
  if (!n) return null;
  let r = lr(n.rgb);
  return n.alpha >= 1
    ? r
    : `${r}${Math.round(n.alpha * 255)
        .toString(16)
        .padStart(2, `0`)}`;
}
function U(e, t) {
  let n = B(e);
  return n ? J(n.color) : t;
}
function lr(e) {
  return `#${[e.r, e.g, e.b]
    .map((e) =>
      Math.round(Math.min(255, Math.max(0, e)))
        .toString(16)
        .padStart(2, `0`),
    )
    .join(``)}`;
}
function W(e) {
  return V(q(e));
}
function ur(e) {
  return Object.fromEntries(
    Qt.map((t) => {
      let n = H(e[t]);
      if (!n)
        throw Error(
          `The color for "${t}" must be a literal CSS color such as oklch(0.62 0.2 280).`,
        );
      return [t, n];
    }),
  );
}
function dr(e) {
  return {
    ...e,
    colors: ur(e.colors),
    ...(e.variants
      ? { variants: Object.fromEntries(Object.entries(e.variants).map(([e, t]) => [e, ur(t)])) }
      : {}),
  };
}
function G(e, t, n) {
  return { r: e.r + (t.r - e.r) * n, g: e.g + (t.g - e.g) * n, b: e.b + (t.b - e.b) * n };
}
function K(e) {
  let t = (e) => {
    let t = e / 255;
    return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * t(e.r) + 0.7152 * t(e.g) + 0.0722 * t(e.b);
}
function fr(e) {
  let t = e / 255;
  return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function pr(e) {
  let t = e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055;
  return Math.round(Math.min(1, Math.max(0, t)) * 255);
}
function q(e) {
  let t = fr(e.r),
    n = fr(e.g),
    r = fr(e.b),
    i = Math.cbrt(0.4122214708 * t + 0.5363325363 * n + 0.0514459929 * r),
    a = Math.cbrt(0.2119034982 * t + 0.6806995451 * n + 0.1073969566 * r),
    o = Math.cbrt(0.0883024619 * t + 0.2817188376 * n + 0.6299787005 * r),
    s = 0.2104542553 * i + 0.793617785 * a - 0.0040720468 * o,
    c = 1.9779984951 * i - 2.428592205 * a + 0.4505937099 * o,
    l = 0.0259040371 * i + 0.7827717662 * a - 0.808675766 * o;
  return { L: s, C: Math.hypot(c, l), h: (Math.atan2(l, c) * 180) / Math.PI };
}
function mr({ L: e, C: t, h: n }) {
  let r = (n * Math.PI) / 180,
    i = t * Math.cos(r),
    a = t * Math.sin(r),
    o = (e + 0.3963377774 * i + 0.2158037573 * a) ** 3,
    s = (e - 0.1055613458 * i - 0.0638541728 * a) ** 3,
    c = (e - 0.0894841775 * i - 1.291485548 * a) ** 3;
  return {
    r: 4.0767416621 * o - 3.3077115913 * s + 0.2309699292 * c,
    g: -1.2684380046 * o + 2.6097574011 * s - 0.3413193965 * c,
    b: -0.0041960863 * o - 0.7034186147 * s + 1.707614701 * c,
  };
}
function hr(e) {
  let t = (t) => {
    let n = mr({ ...e, C: t });
    return [n.r, n.g, n.b].every((e) => e >= -1e-4 && e <= 1.0001);
  };
  if (t(e.C)) return e;
  let n = 0,
    r = e.C,
    i = 1e-6,
    a = Math.max(1, Math.ceil(Math.log2(Math.max(e.C, i)) - Math.log2(i)));
  for (let e = 0; e < a; e += 1) {
    let e = (n + r) / 2;
    t(e) ? (n = e) : (r = e);
  }
  return { ...e, C: n };
}
function J(e) {
  let t = mr(hr(e));
  return { r: pr(t.r), g: pr(t.g), b: pr(t.b) };
}
function gr(e) {
  return V(hr(e));
}
function Y(e, t, n, r) {
  let i = r === `lighter` ? e.L : 0,
    a = r === `lighter` ? 1 : e.L,
    o = { ...e };
  if (X(J(o), t) >= n) return o;
  for (let s = 0; s < 18; s += 1) {
    let s = (i + a) / 2;
    ((o = { ...e, L: s }),
      X(J(o), t) >= n
        ? r === `lighter`
          ? (a = s)
          : (i = s)
        : r === `lighter`
          ? (i = s)
          : (a = s));
  }
  return { ...e, L: r === `lighter` ? a : i };
}
function _r(e, t, n) {
  let r = B(e),
    i = B(t);
  if (!r || !i) return e;
  let a = J(i.color);
  if (X(J(r.color), a) >= n) return e;
  let o = K(a) < 0.179 ? `lighter` : `darker`;
  return lr(J(Y(r.color, a, n, o)));
}
var vr = {
  light: {
    error: `#fb2c36`,
    errorForeground: `#c10007`,
    warning: `#fe9a00`,
    warningForeground: `#bb4d00`,
  },
  dark: {
    error: `#fb414a`,
    errorForeground: `#ff6467`,
    warning: `#fe9a00`,
    warningForeground: `#ffb900`,
  },
};
function yr(e) {
  let t = K(e) < 0.179 ? `dark` : `light`,
    n = vr[t],
    r = t === `dark` ? 0.16 : 0.08,
    i = (t) => G(e, U(t, e), r),
    a = (n, r) => gr(Y(q(U(n, e)), r, 4.6, t === `dark` ? `lighter` : `darker`)),
    o = i(n.error),
    s = i(n.warning);
  return {
    error: H(n.error),
    errorForeground: a(n.errorForeground, o),
    errorSurface: W(o),
    warning: H(n.warning),
    warningForeground: a(n.warningForeground, s),
    warningSurface: W(s),
  };
}
function br(e, t, n) {
  let r = Tr(e),
    i = U(t, e === `dark` ? { r: 24, g: 15, b: 27 } : { r: 250, g: 245, b: 250 }),
    a = U(n, { r: 168, g: 67, b: 112 }),
    o = q(i),
    s = q(a),
    c = K(i) < 0.179,
    l = s.C < 0.02 ? o.h : s.h,
    u = Math.min(0.045, Math.max(0.008, s.C * 0.22)),
    d = c ? 1 : -1,
    f = (e, t = u) => ({ L: Math.min(0.98, Math.max(0.05, o.L + d * e)), C: t, h: l }),
    p = (e) => gr(e),
    m = { L: c ? 0.95 : 0.2, C: Math.min(0.035, s.C * 0.25), h: l },
    h = J(Y(m, i, 7, c ? `lighter` : `darker`)),
    g = wr(i, h),
    ee = {
      L: Math.min(0.85, Math.max(0.35, s.L + (c ? 0.06 : -0.02))),
      C: Math.max(s.C * 0.9, 0.06),
      h: (l + 50) % 360,
    },
    te = J(ee),
    ne = Z(te),
    re = Z(a),
    ie = f(0.045, u * 1.4),
    _ = J(ie),
    ae = f(0.015),
    v = f(0.05),
    oe = J(v),
    se = f(0.075),
    y = f(c ? 0.16 : 0.12, Math.min(0.07, s.C * 0.35)),
    ce = f(c ? 0.21 : 0.16, Math.min(0.08, s.C * 0.4)),
    le = f(c ? 0.1 : 0.06, Math.min(0.09, s.C * 0.5)),
    ue = J(le),
    de = f(c ? 0.06 : 0.04, Math.min(0.06, s.C * 0.35)),
    b = J(de),
    x = f(c ? 0.13 : 0.08, Math.min(0.11, s.C * 0.55)),
    S = J(x),
    C = f(c ? 0.16 : 0.1, Math.min(0.13, s.C * 0.6)),
    fe = J(C),
    w = f(0.035, u * 0.8),
    T = f(c ? 0.14 : 0.09, Math.min(0.12, s.C * 0.55)),
    E = (e) => gr(Y(m, e, 4.6, c ? `lighter` : `darker`)),
    pe = W(xr(b, h, 1, 4.6)),
    me = W(xr(oe, h, 1, 4.6)),
    he = J(f(0.22, Math.min(0.12, s.C))),
    ge = J(f(0.4, Math.min(0.18, s.C))),
    _e = { ...ee, L: ee.L + (c ? 0.06 : -0.06) };
  return {
    ...r,
    ...yr(i),
    canvas: W(i),
    chrome: W(i),
    toolbar: W(i),
    toolbarForeground: W(h),
    toolbarBorder: p(f(c ? 0.14 : 0.1, Math.min(0.08, s.C * 0.4))),
    toolbarControl: p(f(c ? 0.09 : 0.05, u * 1.3)),
    toolbarControlForeground: W(h),
    toolbarControlHover: p(f(c ? 0.14 : 0.09, u * 1.6)),
    surface: p(ae),
    surfaceRaised: p(v),
    surfaceOverlay: p(se),
    text: W(h),
    textMuted: W(g),
    border: p(y),
    input: p(ce),
    focus: W(a),
    accent: W(a),
    accentForeground: W(re),
    secondary: p(le),
    secondaryForeground: E(ue),
    muted: p(de),
    mutedForeground: pe,
    placeholder: me,
    secondaryLabel: W(g),
    iconMuted: W(g),
    update: W(a),
    updateForeground: E(J(T)),
    updateSurface: p(T),
    accentSurface: p(x),
    accentSurfaceForeground: E(S),
    messageSurface: p(C),
    messageForeground: E(fe),
    messageAction: W(te),
    messageActionForeground: W(ne),
    messageActionHover: p(_e),
    codeBackground: p(w),
    codeForeground: W(h),
    searchMatchBackground: W(he),
    searchMatchForeground: W(Z(he)),
    searchMatchActiveBackground: W(ge),
    searchMatchActiveForeground: W(Z(ge)),
    sidebar: p(ie),
    sidebarForeground: E(_),
    sidebarMutedForeground: W(wr(_, h)),
    sidebarControlSurface: p(f(c ? 0.1 : 0.07, u * 1.5)),
    sidebarRowHover: p(f(c ? 0.08 : 0.06, Math.min(0.08, s.C * 0.45))),
    sidebarRowActive: p(f(c ? 0.12 : 0.09, Math.min(0.1, s.C * 0.55))),
    sidebarRowSelected: p(f(c ? 0.14 : 0.1, Math.min(0.11, s.C * 0.6))),
    sidebarBorder: p(f(c ? 0.17 : 0.12, Math.min(0.08, s.C * 0.4))),
    terminalBackground: W(i),
    terminalForeground: W(h),
    terminalCursor: W(a),
    terminalSelection: p(f(c ? 0.18 : 0.12, Math.min(0.12, s.C * 0.55))),
    terminalScrollbar: p(f(c ? 0.22 : 0.16, u)),
    terminalScrollbarHover: p(f(c ? 0.3 : 0.22, u)),
  };
}
function X(e, t) {
  let n = K(e),
    r = K(t),
    i = Math.max(n, r),
    a = Math.min(n, r);
  return (i + 0.05) / (a + 0.05);
}
function Z(e) {
  let t = X(e, nr),
    n = X(e, rr);
  return Math.max(t, n) >= 4.5 ? (t >= n ? nr : rr) : X(e, ir) >= X(e, ar) ? ir : ar;
}
function xr(e, t, n, r) {
  let i = G(t, e, n);
  if (X(i, e) >= r) return i;
  let a = t,
    o = 0,
    s = n;
  for (let n = 0; n < 12; n += 1) {
    let n = (o + s) / 2,
      i = G(t, e, n);
    X(i, e) >= r ? ((a = i), (o = n)) : (s = n);
  }
  return a;
}
var Sr = 4.705,
  Cr = 5.082;
function wr(e, t) {
  return xr(e, t, 1, K(e) < 0.179 ? Cr : Sr);
}
function Tr(e) {
  return e === `dark` ? tn.variants.dark : tn.colors;
}
function Er(e, t, n, r) {
  let i = B(r);
  if (!i) return { ...t, [n]: r };
  let a = V(i.color, i.alpha),
    o = U(t.canvas, e === `dark` ? { r: 24, g: 15, b: 27 } : { r: 250, g: 245, b: 250 }),
    s = J(i.color),
    c = (e) => G(e, s, i.alpha),
    l = c(o),
    u = U(t.accent, { r: 168, g: 67, b: 112 }),
    d = K(o) < 0.179,
    f = K(l) < 0.179,
    p = (e) => W(e),
    m = (e) => p(Z(e)),
    h = (e) => gr(Y(i.color, e, 4.6, K(e) < 0.179 ? `lighter` : `darker`)),
    g = () => {
      let e = G(o, l, d ? 0.16 : 0.08);
      return { foreground: h(e), surface: p(e) };
    };
  switch (n) {
    case `canvas`:
      return { ...t, canvas: a, chrome: a, toolbar: a };
    case `surface`:
    case `surfaceRaised`:
    case `surfaceOverlay`:
    case `input`:
    case `sidebarControlSurface`:
      return { ...t, [n]: a };
    case `text`:
      return { ...t, text: a, toolbarForeground: a, toolbarControlForeground: a };
    case `mutedForeground`:
      return {
        ...t,
        textMuted: a,
        mutedForeground: a,
        placeholder: a,
        secondaryLabel: a,
        iconMuted: a,
        sidebarMutedForeground: a,
      };
    case `border`:
      return { ...t, border: a, toolbarBorder: a, sidebarBorder: a };
    case `secondary`:
      return { ...t, secondary: a, secondaryForeground: m(l), muted: a, toolbarControl: a };
    case `accentSurface`:
      return { ...t, accentSurface: a, accentSurfaceForeground: m(l), toolbarControlHover: a };
    case `accent`: {
      let e = G(o, l, d ? 0.32 : 0.16);
      return {
        ...t,
        accent: a,
        accentForeground: m(l),
        focus: a,
        update: a,
        updateForeground: h(e),
        updateSurface: p(e),
        terminalCursor: a,
      };
    }
    case `messageAction`: {
      let e = Z(l),
        n = G(s, e === nr || e === ir ? ar : ir, 0.12);
      return {
        ...t,
        messageAction: a,
        messageActionForeground: p(e),
        messageActionHover: V(q(n), i.alpha),
      };
    }
    case `messageSurface`:
      return { ...t, messageSurface: a, messageForeground: m(l) };
    case `searchMatchBackground`:
      return { ...t, searchMatchBackground: p(l), searchMatchForeground: m(l) };
    case `searchMatchActiveBackground`:
      return { ...t, searchMatchActiveBackground: p(l), searchMatchActiveForeground: m(l) };
    case `codeBackground`:
      return { ...t, codeBackground: a, codeForeground: m(l) };
    case `sidebar`:
      return { ...t, sidebar: a, sidebarForeground: m(l) };
    case `sidebarRowSelected`: {
      let e = U(t.sidebar, o),
        n = c(e);
      return {
        ...t,
        sidebarRowHover: p(G(e, n, 0.5)),
        sidebarRowActive: p(G(e, n, 0.8)),
        sidebarRowSelected: a,
      };
    }
    case `terminalBackground`: {
      let e = Z(l);
      return {
        ...t,
        terminalBackground: a,
        terminalForeground: p(e),
        terminalSelection: p(G(l, u, f ? 0.35 : 0.18)),
        terminalScrollbar: p(G(l, e, f ? 0.42 : 0.22)),
        terminalScrollbarHover: p(G(l, e, f ? 0.55 : 0.32)),
      };
    }
    case `error`: {
      let e = g();
      return { ...t, error: a, errorForeground: e.foreground, errorSurface: e.surface };
    }
    case `warning`: {
      let e = g();
      return { ...t, warning: a, warningForeground: e.foreground, warningSurface: e.surface };
    }
    default:
      return { ...t, [n]: a };
  }
}
var Dr = sn;
function Q(e) {
  let t = Zn(e);
  return (
    Dr.find((e) => e.id === t) ?? Hn().find((e) => e.id === t) ?? yn.find((e) => e.id === t) ?? null
  );
}
function Or(e) {
  let t = Zn(e);
  return Dr.find((e) => e.id === t)?.sidebarArtwork === !0;
}
function kr(e) {
  let t = Ar(e);
  return t.length === 1 ? t[0] : null;
}
function $(e, t) {
  return t === e.appearance ? e.colors : (e.variants?.[t] ?? null);
}
function Ar(e) {
  return [`light`, `dark`].filter((t) => $(e, t) !== null);
}
function jr(e) {
  return e === `system`
    ? null
    : e === `light` || e === `dark`
      ? e
      : Qn(e) || (Q(e)?.appearance ?? null);
}
function Mr(e) {
  return (
    e
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-+|-+$/g, ``)
      .slice(0, 48) || `custom-theme`
  );
}
var Nr = class extends t()(`ThemeLibraryStorageError`, {
  storageKey: n,
  operation: e([`read`, `write`]),
  reason: e([`malformed`, `storage-unavailable`]),
  cause: i(a()),
}) {
  get message() {
    let e = this.operation === `read` ? `from` : `to`;
    return `Failed to ${this.operation} the theme library ${e} ${this.storageKey}.`;
  }
};
function Pr(e, t) {
  if (typeof window < `u`) {
    try {
      (window.localStorage.setItem(L, JSON.stringify(e)),
        (R = { status: `ready`, storedThemes: e, themes: t }));
    } catch (e) {
      throw new Nr({ storageKey: L, operation: `write`, reason: `storage-unavailable`, cause: e });
    }
    zn();
  }
}
function Fr(e) {
  if (e.status === `unavailable`)
    throw new Nr({
      storageKey: L,
      operation: `read`,
      reason: e.reason,
      ...(`cause` in e ? { cause: e.cause } : {}),
    });
  return e;
}
function Ir() {
  return Fr(Rn());
}
function Lr() {
  return Fr(Ln());
}
function Rr(e, t) {
  return z(e) && e.id === t;
}
function zr(e, t) {
  return z(e) && z(e.collection) && e.collection.id === t;
}
function Br(e) {
  if (I.has(e.id)) throw Error(`The theme id "${e.id}" is reserved.`);
  let t = Ir();
  if (Dr.some((t) => t.id === e.id) || t.storedThemes.some((t) => Rr(t, e.id)))
    throw Error(`A theme named "${e.label}" is already installed.`);
  let n = dr(e),
    r = [...t.themes, n];
  return (Pr([...t.storedThemes, n], r), n);
}
function Vr(e) {
  if (I.has(e.id)) throw Error(`The theme id "${e.id}" is reserved.`);
  let t = Ir(),
    n = t.themes,
    r = n.findIndex((t) => t.id === e.id);
  if (r === -1) throw Error(`The theme "${e.label}" is not installed.`);
  let i = dr(e),
    a = [...n];
  a[r] = i;
  let o = [],
    s = !1;
  for (let n of t.storedThemes) Rr(n, e.id) ? (s ||= (o.push(i), !0)) : o.push(n);
  return (Pr(o, a), i);
}
function Hr(e, t, n) {
  if (t.length === 0) throw Error(`A theme collection cannot be empty.`);
  let r = t.map((e) => Fn(e));
  if (
    r.some((t) => t === null || t.collection?.id !== e) ||
    new Set(r.map((e) => e?.id)).size !== r.length
  )
    throw Error(`That theme collection is invalid.`);
  let i = r,
    a = Lr(),
    o = a.themes.filter((t) => t.collection?.id === e);
  if (n?.expectedCollection && JSON.stringify(o) !== JSON.stringify(n.expectedCollection))
    throw Error(`Your installed themes changed while this package was downloading. Try again.`);
  let s = new Set(Dr.map((e) => e.id));
  for (let t of a.storedThemes) !zr(t, e) && z(t) && typeof t.id == `string` && s.add(t.id);
  let c = i.find((e) => I.has(e.id) || s.has(e.id));
  if (c) throw Error(`A theme named "${c.label}" is already installed.`);
  let l = [],
    u = !1;
  for (let t of a.storedThemes) zr(t, e) ? (u ||= (l.push(...i), !0)) : l.push(t);
  return (u || l.push(...i), Pr(l, In(l)), i);
}
function Ur(e) {
  Wr([e]);
}
function Wr(e) {
  let t = new Set(e);
  if (t.size === 0) return;
  let n = Ir(),
    r = n.themes.filter((e) => !t.has(e.id));
  r.length !== n.themes.length &&
    Pr(
      n.storedThemes.filter((e) => !z(e) || typeof e.id != `string` || !t.has(e.id)),
      r,
    );
}
function Gr(e) {
  if (!z(e)) throw Error(`Theme colors must be objects.`);
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (!vn.has(n)) throw Error(`"${n}" is not a supported theme color role.`);
    let e = H(r);
    if (!e)
      throw Error(`The color for "${n}" must be a literal CSS color such as oklch(0.62 0.2 280).`);
    t[n] = e;
  }
  if (Object.keys(t).length === 0) throw Error(`Add at least one color role to the theme file.`);
  return t;
}
function Kr(e) {
  if (!z(e)) throw Error(`Theme files must contain a JSON object.`);
  if (e.version !== 1) throw Error(`This theme file uses an unsupported version. Expected 1.`);
  let t = e.name,
    n = e.appearance,
    r = e.colors;
  if (!An(t)) throw Error(`Theme files need a name (48 characters or fewer).`);
  if (!Dn(n)) throw Error(`Theme files need an appearance of "light" or "dark".`);
  if (!z(r)) throw Error(`Theme files need a colors object.`);
  let i = e.id === void 0 ? Mr(t) : e.id;
  if (!kn(i)) throw Error(`Theme ids may only contain lowercase letters, numbers, and hyphens.`);
  if (I.has(i)) throw Error(`The theme id "${i}" is reserved.`);
  let a = Gr(r),
    o = jn(e.collection);
  if (e.collection !== void 0 && !o) throw Error(`Theme collections need a valid id and label.`);
  let s = Tr(n),
    c = {};
  if (e.variants !== void 0) {
    if (!z(e.variants)) throw Error(`Theme variants must be an object.`);
    for (let [t, r] of Object.entries(e.variants)) {
      if (!Dn(t)) throw Error(`Theme variants may only be named "light" or "dark".`);
      if (t === n) throw Error(`Theme variants must not repeat the base appearance "${n}".`);
      c[t] = { ...Tr(t), ...Gr(r) };
    }
  }
  return {
    id: i,
    label: t.trim(),
    appearance: n,
    colors: { ...s, ...a },
    ...(Object.keys(c).length > 0 ? { variants: c } : {}),
    ...(o ? { collection: o } : {}),
    ...(e.managed === !0 ? { managed: !0 } : {}),
  };
}
function qr(e) {
  let t = dr(e),
    n = {
      version: 1,
      id: t.id,
      name: t.label,
      appearance: t.appearance,
      colors: t.colors,
      ...(t.variants ? { variants: t.variants } : {}),
      ...(t.collection ? { collection: t.collection } : {}),
      ...(t.managed ? { managed: !0 } : {}),
    };
  return `${JSON.stringify(n, null, 2)}\n`;
}
var Jr = {
  canvas: `--app-theme-canvas`,
  chrome: `--app-theme-chrome`,
  toolbar: `--app-theme-toolbar`,
  toolbarForeground: `--app-theme-toolbar-foreground`,
  toolbarBorder: `--app-theme-toolbar-border`,
  toolbarControl: `--app-theme-toolbar-control`,
  toolbarControlForeground: `--app-theme-toolbar-control-foreground`,
  toolbarControlHover: `--app-theme-toolbar-control-hover`,
  surface: `--app-theme-surface`,
  surfaceRaised: `--app-theme-surface-raised`,
  surfaceOverlay: `--app-theme-surface-overlay`,
  text: `--app-theme-text`,
  textMuted: `--app-theme-text-muted`,
  border: `--app-theme-border`,
  input: `--app-theme-input`,
  focus: `--app-theme-focus`,
  accent: `--app-theme-accent`,
  accentForeground: `--app-theme-accent-foreground`,
  secondary: `--app-theme-secondary`,
  secondaryForeground: `--app-theme-secondary-foreground`,
  muted: `--app-theme-muted`,
  mutedForeground: `--app-theme-muted-foreground`,
  placeholder: `--app-theme-placeholder`,
  secondaryLabel: `--app-theme-secondary-label`,
  iconMuted: `--app-theme-icon-muted`,
  error: `--app-theme-error`,
  errorForeground: `--app-theme-error-foreground`,
  errorSurface: `--app-theme-error-surface`,
  warning: `--app-theme-warning`,
  warningForeground: `--app-theme-warning-foreground`,
  warningSurface: `--app-theme-warning-surface`,
  update: `--app-theme-update`,
  updateForeground: `--app-theme-update-foreground`,
  updateSurface: `--app-theme-update-surface`,
  accentSurface: `--app-theme-accent-surface`,
  accentSurfaceForeground: `--app-theme-accent-surface-foreground`,
  messageSurface: `--app-theme-message-surface`,
  messageForeground: `--app-theme-message-foreground`,
  messageAction: `--app-theme-message-action`,
  messageActionForeground: `--app-theme-message-action-foreground`,
  messageActionHover: `--app-theme-message-action-hover`,
  codeBackground: `--app-theme-code-background`,
  codeForeground: `--app-theme-code-foreground`,
  searchMatchBackground: `--app-theme-search-match-background`,
  searchMatchForeground: `--app-theme-search-match-foreground`,
  searchMatchActiveBackground: `--app-theme-search-match-active-background`,
  searchMatchActiveForeground: `--app-theme-search-match-active-foreground`,
  sidebar: `--app-theme-sidebar`,
  sidebarForeground: `--app-theme-sidebar-foreground`,
  sidebarMutedForeground: `--app-theme-sidebar-muted-foreground`,
  sidebarControlSurface: `--app-theme-sidebar-control-surface`,
  sidebarRowHover: `--app-theme-sidebar-row-hover`,
  sidebarRowActive: `--app-theme-sidebar-row-active`,
  sidebarRowSelected: `--app-theme-sidebar-row-selected`,
  sidebarBorder: `--app-theme-sidebar-border`,
  terminalBackground: `--app-theme-terminal-background`,
  terminalForeground: `--app-theme-terminal-foreground`,
  terminalCursor: `--app-theme-terminal-cursor`,
  terminalSelection: `--app-theme-terminal-selection-background`,
  terminalScrollbar: `--app-theme-terminal-scrollbar`,
  terminalScrollbarHover: `--app-theme-terminal-scrollbar-hover`,
};
function Yr(e) {
  return Jr[e];
}
var Xr = `__preview`;
function Zr(e, t) {
  if (typeof document > `u`) return;
  let n = document.documentElement;
  if (n?.style) {
    ((n.dataset.themeId = Xr), n.classList.toggle(`dark`, t === `dark`));
    for (let [t, r] of Object.entries(e)) On(r) && n.style.setProperty(Jr[t], r);
    En(t);
  }
}
function Qr(e, t) {
  if (typeof document > `u`) return;
  let n = document.documentElement;
  if (!n?.style) return;
  En(null);
  let r = Q(e);
  if (r) {
    n.dataset.themeId = r.id;
    let i = $(r, t ?? Qn(e) ?? r.appearance) ?? r.colors;
    for (let [e, t] of Object.entries(i)) n.style.setProperty(Jr[e], t);
  } else {
    delete n.dataset.themeId;
    for (let e of Object.values(Jr)) n.style.removeProperty(e);
  }
}
function $r(e, t, n, r, i) {
  let a = t ? `dark` : `light`,
    o = r ?? ((n ?? e === `system`) ? `system` : null);
  if (o === `system`) {
    if (i?.[a]) return a;
    let t = Q(e);
    return t && $(t, a) === null ? t.appearance : a;
  }
  if (o === `light` || o === `dark`) {
    if (i?.[o]) return o;
    let t = Q(e);
    return t && $(t, o) === null ? t.appearance : o;
  }
  return jr(e) ?? `light`;
}
function ei(e, t, n, r) {
  let i = n ?? ((t ?? e === `system`) ? `system` : null);
  if (i === `system`) {
    let t = Q(e),
      n = r?.light !== void 0 || (t !== null && $(t, `light`) !== null),
      i = r?.dark !== void 0 || (t !== null && $(t, `dark`) !== null);
    return t && (!n || !i) ? t.appearance : `system`;
  }
  if (i === `light` || i === `dark`) {
    if (r?.[i]) return i;
    let t = Q(e);
    return t && $(t, i) === null ? t.appearance : i;
  }
  return jr(e) ?? `system`;
}
function ti(e) {
  return e === `light` || e === `dark` || e === `system` || Q(e) !== null;
}
function ni(e) {
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    if (!z(t)) return null;
    let n = {};
    for (let e of [`light`, `dark`]) {
      let r = t[e];
      if (typeof r != `string`) continue;
      let i = Q(r);
      i && $(i, e) !== null && (n[e] = i.id);
    }
    return n.light !== void 0 || n.dark !== void 0 ? n : null;
  } catch {
    return null;
  }
}
function ri(e, t, n) {
  return t?.[n] ?? e;
}
export {
  tn as $,
  ni as A,
  kr as B,
  Br as C,
  On as D,
  Gn as E,
  ei as F,
  Mr as G,
  Tn as H,
  $r as I,
  sn as J,
  Vr as K,
  ri as L,
  Ur as M,
  Wr as N,
  Mn as O,
  Hr as P,
  rn as Q,
  qr as R,
  wn as S,
  ti as T,
  Or as U,
  qn as V,
  cr as W,
  nn as X,
  an as Y,
  on as Z,
  $ as _,
  Xr as a,
  jr as b,
  Qr as c,
  Hn as d,
  Qt as et,
  Tr as f,
  Yr as g,
  Kn as h,
  hn as i,
  _r as j,
  Kr as k,
  Xn as l,
  $n as m,
  mn as n,
  _n as o,
  Un as p,
  Er as q,
  pn as r,
  Zr as s,
  L as t,
  br as u,
  Q as v,
  Bn as w,
  Cn as x,
  Ar as y,
  Wn as z,
};
//# sourceMappingURL=themePalette-CDKZ8Aa5.js.map
