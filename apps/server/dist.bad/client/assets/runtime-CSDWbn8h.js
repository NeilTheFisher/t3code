import {
  $S as e,
  $b as t,
  $d as n,
  $y as r,
  AC as i,
  Ay as a,
  Bd as o,
  Bx as s,
  Ch as c,
  Cx as l,
  DS as u,
  Db as d,
  Df as f,
  Dh as p,
  Eb as m,
  Eh as ee,
  Ex as h,
  FS as te,
  Fd as g,
  Fy as _,
  GC as ne,
  GS as re,
  Gd as ie,
  Gx as ae,
  HC as oe,
  HS as se,
  Hd as ce,
  Hx as le,
  Hy as ue,
  Id as de,
  Iy as fe,
  JC as pe,
  JS as me,
  Jd as he,
  Jx as ge,
  KS as _e,
  K_ as ve,
  Kb as ye,
  Kd as v,
  Kx as be,
  LC as xe,
  Lb as Se,
  Ld as Ce,
  Lf as we,
  Lx as Te,
  Md as y,
  Mf as Ee,
  Nd as De,
  Nu as Oe,
  Nx as ke,
  Ny as Ae,
  Of as je,
  PS as Me,
  Pd as Ne,
  Pv as Pe,
  Px as Fe,
  Py as b,
  QC as Ie,
  Qb as Le,
  Qd as Re,
  Qf as ze,
  Ql as Be,
  Rd as Ve,
  Rf as He,
  Sf as Ue,
  Sv as We,
  Sx as x,
  TC as Ge,
  Td as Ke,
  US as qe,
  Ud as Je,
  Uf as Ye,
  Ux as Xe,
  Uy as S,
  VS as Ze,
  Vb as Qe,
  Vd as $e,
  Vx as et,
  Vy as C,
  Wd as tt,
  Wf as nt,
  Wx as rt,
  XS as it,
  Xd as at,
  Xg as ot,
  Xx as st,
  YS as ct,
  Y_ as lt,
  Yd as ut,
  Yx as dt,
  ZS as ft,
  Zb as pt,
  Zd as mt,
  _C as ht,
  aS as gt,
  a_ as _t,
  ab as vt,
  af as yt,
  bC as w,
  bx as bt,
  cp as xt,
  cx as T,
  dS as E,
  d_ as St,
  db as Ct,
  dv as wt,
  eC as Tt,
  e_ as Et,
  eb as Dt,
  eg as Ot,
  fC as kt,
  fS as At,
  fb as jt,
  gC as Mt,
  gS as Nt,
  hC as Pt,
  hS as Ft,
  hf as It,
  hx as D,
  iS as O,
  i_ as k,
  ib as Lt,
  ix as Rt,
  jv as zt,
  jx as Bt,
  jy as Vt,
  kS as Ht,
  l as Ut,
  l_ as Wt,
  lb as A,
  mC as Gt,
  mS as j,
  mx as Kt,
  nC as qt,
  n_ as M,
  ng as Jt,
  nv as Yt,
  nw as Xt,
  nx as N,
  oS as Zt,
  o_ as Qt,
  ox as P,
  qS as $t,
  qd as F,
  qf as en,
  qx as tn,
  rS as nn,
  r_ as rn,
  ru as an,
  sx as on,
  tS as I,
  t_ as L,
  tf as sn,
  tg as cn,
  tw as R,
  ux as ln,
  vC as un,
  vf as dn,
  xx as fn,
  yf as pn,
  zS as mn,
  zd as hn,
  zf as gn,
  zx as _n,
} from "./utils-CPoejuy5.js";
var vn = (e) => d(e).replace(/=/g, ``).replace(/\+/g, `-`).replace(/\//g, `_`),
  yn = (e) => {
    let t = e.replace(/[\n\r]/g, ``),
      n = t.length;
    if (n % 4 == 1)
      return Ge(
        new un({
          module: `Base64Url`,
          kind: `Decode`,
          input: t,
          message: `Length should be a multiple of 4, but is ${n}`,
        }),
      );
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(t))
      return Ge(
        new un({ module: `Base64Url`, kind: `Decode`, input: t, message: `Invalid input` }),
      );
    let r = n % 4 == 2 ? `${t}==` : n % 4 == 3 ? `${t}=` : t;
    return ((r = r.replace(/-/g, `+`).replace(/_/g, `/`)), m(r));
  },
  bn = (e) => i(yn(e), (e) => xn.decode(e)),
  xn = new TextDecoder(),
  Sn = `~effect/PlatformError`,
  Cn = class extends w(`BadArgument`) {
    get message() {
      return `${this.module}.${this.method}${this.description ? `: ${this.description}` : ``}`;
    }
  },
  wn = class extends w(`PlatformError`) {
    constructor(e) {
      `cause` in e ? super({ reason: e, cause: e.cause }) : super({ reason: e });
    }
    [Sn] = Sn;
    get message() {
      return this.reason.message;
    }
  },
  Tn = (e) => new wn(new Cn(e)),
  En = 2 ** 48 - 1,
  Dn = `0123456789ABCDEFGHJKMNPQRSTVWXYZ`,
  On = (e, t) => {
    if (t.length !== 10)
      throw Error(`ULID randomness must be exactly 10 bytes, received ${t.length}`);
    let n = Math.min(Math.max(0, Math.trunc(e)), En),
      r = ``;
    for (let e = 45; e >= 0; e -= 5) r += Dn[Math.floor(n / 2 ** e) & 31];
    let i = 0,
      a = 0;
    for (let e of t) {
      for (i = (i << 8) | e, a += 8; a >= 5;) ((a -= 5), (r += Dn[(i >>> a) & 31]));
      i &= (1 << a) - 1;
    }
    return r;
  },
  kn = (e) => e.toString(16).padStart(2, `0`),
  An = (e) =>
    [e.subarray(0, 4), e.subarray(4, 6), e.subarray(6, 8), e.subarray(8, 10), e.subarray(10, 16)]
      .map((e) => Array.from(e, kn).join(``))
      .join(`-`),
  jn = () => globalThis.crypto.getRandomValues(new Uint8Array(16));
function Mn(e = jn()) {
  return ((e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128), e);
}
var Nn = 2 ** 48 - 1;
function Pn(e, t = jn()) {
  let n = Math.min(Math.max(0, Math.trunc(e)), Nn);
  return (
    (t[0] = Math.floor(n / 2 ** 40)),
    (t[1] = Math.floor(n / 2 ** 32) & 255),
    (t[2] = Math.floor(n / 2 ** 24) & 255),
    (t[3] = Math.floor(n / 2 ** 16) & 255),
    (t[4] = Math.floor(n / 256) & 255),
    (t[5] = n & 255),
    (t[6] = (t[6] & 15) | 112),
    (t[8] = (t[8] & 63) | 128),
    t
  );
}
var Fn = `~effect/Crypto`,
  z = xe(`effect/Crypto`),
  In = (e) => {
    let t = e.randomBytes,
      n = (e) => x(Ln(`randomBytes`, e), t),
      r = (e) =>
        (e[0] & 31) * 2 ** 48 +
        e[1] * 2 ** 40 +
        e[2] * 2 ** 32 +
        e[3] * 2 ** 24 +
        e[4] * 2 ** 16 +
        e[5] * 256 +
        e[6],
      i = () => r(t(7)) / 2 ** 53,
      a = () => {
        for (;;) {
          let e = t(7),
            n = r(e);
          if (!(e[0] & 32)) return n + -(2 ** 53 - 1);
          if (n < 2 ** 53 - 1) return n + 1;
        }
      };
    return z.of({
      [Fn]: Fn,
      randomBytes: n,
      nextDoubleUnsafe: i,
      nextIntUnsafe: a,
      digest: e.digest,
      random: O(() => i()),
      randomBoolean: O(() => i() > 0.5),
      randomInt: O(() => a()),
      randomBetween: (e, t) => O(() => u(e, t, i())),
      randomIntBetween(e, t, n) {
        let r = n?.halfOpen === !0 ? 0 : 1;
        return O(() => {
          let n = Math.ceil(e),
            a = Math.floor(t);
          return Math.floor(i() * (a - n + r)) + n;
        });
      },
      randomShuffle: (e) =>
        O(() => {
          let t = Array.from(e);
          for (let e = t.length - 1; e >= 1; --e) {
            let n = Math.min(e, Math.floor(i() * (e + 1))),
              r = t[e];
            ((t[e] = t[n]), (t[n] = r));
          }
          return t;
        }),
      randomUUIDv4: (e) =>
        O(() => {
          let n = Mn(t(16));
          return e?.format === `bytes` ? n : An(n);
        }),
      randomUUIDv7: (e) =>
        Le((n) => {
          let r = Pn(n.currentTimeMillisUnsafe(), t(16));
          return I(e?.format === `bytes` ? r : An(r));
        }),
      randomULID: Le((e) => I(On(e.currentTimeMillisUnsafe(), t(10)))),
    });
  },
  Ln = (e, t) =>
    Number.isSafeInteger(t) && t >= 0
      ? I(t)
      : N(
          Tn({
            module: `Crypto`,
            method: e,
            description: `size must be a non-negative safe integer`,
          }),
        ),
  Rn = `~effect/ManagedRuntime`,
  zn = (n, r) => {
    let i = r?.memoMap ?? re(),
      a = qt(`sequential`),
      o = Tt(a, `sequential`),
      c = Tt(a, `parallel`),
      l = { onFiberStart: Pe(c) },
      u = (e) =>
        e
          ? {
              ...e,
              onFiberStart: e.onFiberStart
                ? (t) => {
                    (l.onFiberStart(t), e.onFiberStart(t));
                  }
                : l.onFiberStart,
            }
          : l,
      d,
      f = Ft(
        (e) => (
          (d ||= et(
            gt(Ze(n, i, o), (e) =>
              O(() => {
                p.cachedContext = e;
              }),
            ),
            { ...l, scheduler: e.cache.scheduler },
          )),
          on(zt(d))
        ),
      ),
      p = {
        [Rn]: Rn,
        memoMap: i,
        scope: a,
        contextEffect: f,
        cachedContext: void 0,
        context() {
          return p.cachedContext === void 0
            ? Xe(p.contextEffect)
            : Promise.resolve(p.cachedContext);
        },
        dispose() {
          return Xe(p.disposeEffect);
        },
        [Symbol.asyncDispose]() {
          return p.dispose();
        },
        disposeEffect: Ft((n) => {
          for (let e = n; e; e = e._parent) Gt(c, e);
          return (
            (p.contextEffect = t(`ManagedRuntime disposed`)),
            (p.cachedContext = void 0),
            e(p.scope, kt)
          );
        }),
        runFork(e, t) {
          return p.cachedContext === void 0 ? et(B(p, e), u(t)) : le(p.cachedContext)(e, u(t));
        },
        runCallback(e, t) {
          return p.cachedContext === void 0 ? _n(B(p, e), u(t)) : s(p.cachedContext)(e, u(t));
        },
        runSyncExit(e) {
          return p.cachedContext === void 0 ? ge(B(p, e)) : dt(p.cachedContext)(e);
        },
        runSync(e) {
          return p.cachedContext === void 0 ? tn(B(p, e)) : st(p.cachedContext)(e);
        },
        runPromiseExit(e, t) {
          return p.cachedContext === void 0 ? rt(B(p, e), u(t)) : ae(p.cachedContext)(e, u(t));
        },
        runPromise(e, t) {
          return p.cachedContext === void 0 ? Xe(B(p, e), u(t)) : be(p.cachedContext)(e, u(t));
        },
      };
    return p;
  };
function B(e, t) {
  return P(e.contextEffect, (e) => ke(t, e));
}
var V = (e, t = `algorithm.name`) =>
    TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`),
  H = (e, t) => e.name === t;
function Bn(e) {
  return parseInt(e.name.slice(4), 10);
}
function Vn(e, t) {
  if (Bn(e.hash) !== t) throw V(`SHA-${t}`, `algorithm.hash`);
}
function Hn(e) {
  switch (e) {
    case `ES256`:
      return `P-256`;
    case `ES384`:
      return `P-384`;
    case `ES512`:
      return `P-521`;
    default:
      throw Error(`unreachable`);
  }
}
function Un(e, t) {
  if (t && !e.usages.includes(t))
    throw TypeError(`CryptoKey does not support this operation, its usages must include ${t}.`);
}
function Wn(e, t, n) {
  switch (t) {
    case `HS256`:
    case `HS384`:
    case `HS512`:
      if (!H(e.algorithm, `HMAC`)) throw V(`HMAC`);
      Vn(e.algorithm, parseInt(t.slice(2), 10));
      break;
    case `RS256`:
    case `RS384`:
    case `RS512`:
      if (!H(e.algorithm, `RSASSA-PKCS1-v1_5`)) throw V(`RSASSA-PKCS1-v1_5`);
      Vn(e.algorithm, parseInt(t.slice(2), 10));
      break;
    case `PS256`:
    case `PS384`:
    case `PS512`:
      if (!H(e.algorithm, `RSA-PSS`)) throw V(`RSA-PSS`);
      Vn(e.algorithm, parseInt(t.slice(2), 10));
      break;
    case `Ed25519`:
    case `EdDSA`:
      if (!H(e.algorithm, `Ed25519`)) throw V(`Ed25519`);
      break;
    case `ML-DSA-44`:
    case `ML-DSA-65`:
    case `ML-DSA-87`:
      if (!H(e.algorithm, t)) throw V(t);
      break;
    case `ES256`:
    case `ES384`:
    case `ES512`: {
      if (!H(e.algorithm, `ECDSA`)) throw V(`ECDSA`);
      let n = Hn(t);
      if (e.algorithm.namedCurve !== n) throw V(n, `algorithm.namedCurve`);
      break;
    }
    default:
      throw TypeError(`CryptoKey does not support this operation`);
  }
  Un(e, n);
}
function Gn(e, t, ...n) {
  if (((n = n.filter(Boolean)), n.length > 2)) {
    let t = n.pop();
    e += `one of type ${n.join(`, `)}, or ${t}.`;
  } else n.length === 2 ? (e += `one of type ${n[0]} or ${n[1]}.`) : (e += `of type ${n[0]}.`);
  return (
    t == null
      ? (e += ` Received ${t}`)
      : typeof t == `function` && t.name
        ? (e += ` Received function ${t.name}`)
        : typeof t == `object` &&
          t &&
          t.constructor?.name &&
          (e += ` Received an instance of ${t.constructor.name}`),
    e
  );
}
var Kn = (e, ...t) => Gn(`Key must be `, e, ...t),
  qn = (e, t, ...n) => Gn(`Key for the ${e} algorithm must be `, t, ...n),
  Jn = (e) => {
    if (e?.[Symbol.toStringTag] === `CryptoKey`) return !0;
    try {
      return e instanceof CryptoKey;
    } catch {
      return !1;
    }
  },
  Yn = (e) => e?.[Symbol.toStringTag] === `KeyObject`,
  Xn = (e) => Jn(e) || Yn(e);
function Zn(e, t) {
  if (e) throw TypeError(`${t} can only be called once`);
}
function Qn(e, t) {
  if (e.startsWith(`RS`) || e.startsWith(`PS`)) {
    let { modulusLength: n } = t.algorithm;
    if (typeof n != `number` || n < 2048)
      throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
  }
}
function $n(e, t) {
  let n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case `HS256`:
    case `HS384`:
    case `HS512`:
      return { hash: n, name: `HMAC` };
    case `PS256`:
    case `PS384`:
    case `PS512`:
      return { hash: n, name: `RSA-PSS`, saltLength: parseInt(e.slice(-3), 10) >> 3 };
    case `RS256`:
    case `RS384`:
    case `RS512`:
      return { hash: n, name: `RSASSA-PKCS1-v1_5` };
    case `ES256`:
    case `ES384`:
    case `ES512`:
      return { hash: n, name: `ECDSA`, namedCurve: t.namedCurve };
    case `Ed25519`:
    case `EdDSA`:
      return { name: `Ed25519` };
    case `ML-DSA-44`:
    case `ML-DSA-65`:
    case `ML-DSA-87`:
      return { name: e };
    default:
      throw new v(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}
async function er(e, t, n) {
  if (t instanceof Uint8Array) {
    if (!e.startsWith(`HS`)) throw TypeError(Kn(t, `CryptoKey`, `KeyObject`, `JSON Web Key`));
    return crypto.subtle.importKey(`raw`, t, { hash: `SHA-${e.slice(-3)}`, name: `HMAC` }, !1, [n]);
  }
  return (Wn(t, e, n), t);
}
async function tr(e, t, n) {
  let r = await er(e, t, `sign`);
  Qn(e, r);
  let i = await crypto.subtle.sign($n(e, r.algorithm), r, n);
  return new Uint8Array(i);
}
var U = `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`;
function nr(e) {
  let t, n;
  switch (e.kty) {
    case `AKP`:
      switch (e.alg) {
        case `ML-DSA-44`:
        case `ML-DSA-65`:
        case `ML-DSA-87`:
          ((t = { name: e.alg }), (n = e.priv ? [`sign`] : [`verify`]));
          break;
        default:
          throw new v(U);
      }
      break;
    case `RSA`:
      switch (e.alg) {
        case `PS256`:
        case `PS384`:
        case `PS512`:
          ((t = { name: `RSA-PSS`, hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? [`sign`] : [`verify`]));
          break;
        case `RS256`:
        case `RS384`:
        case `RS512`:
          ((t = { name: `RSASSA-PKCS1-v1_5`, hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? [`sign`] : [`verify`]));
          break;
        case `RSA-OAEP`:
        case `RSA-OAEP-256`:
        case `RSA-OAEP-384`:
        case `RSA-OAEP-512`:
          ((t = { name: `RSA-OAEP`, hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}` }),
            (n = e.d ? [`decrypt`, `unwrapKey`] : [`encrypt`, `wrapKey`]));
          break;
        default:
          throw new v(U);
      }
      break;
    case `EC`:
      switch (e.alg) {
        case `ES256`:
        case `ES384`:
        case `ES512`:
          ((t = {
            name: `ECDSA`,
            namedCurve: { ES256: `P-256`, ES384: `P-384`, ES512: `P-521` }[e.alg],
          }),
            (n = e.d ? [`sign`] : [`verify`]));
          break;
        case `ECDH-ES`:
        case `ECDH-ES+A128KW`:
        case `ECDH-ES+A192KW`:
        case `ECDH-ES+A256KW`:
          ((t = { name: `ECDH`, namedCurve: e.crv }), (n = e.d ? [`deriveBits`] : []));
          break;
        default:
          throw new v(U);
      }
      break;
    case `OKP`:
      switch (e.alg) {
        case `Ed25519`:
        case `EdDSA`:
          ((t = { name: `Ed25519` }), (n = e.d ? [`sign`] : [`verify`]));
          break;
        case `ECDH-ES`:
        case `ECDH-ES+A128KW`:
        case `ECDH-ES+A192KW`:
        case `ECDH-ES+A256KW`:
          ((t = { name: e.crv }), (n = e.d ? [`deriveBits`] : []));
          break;
        default:
          throw new v(U);
      }
      break;
    default:
      throw new v(`Invalid or unsupported JWK "kty" (Key Type) Parameter value`);
  }
  return { algorithm: t, keyUsages: n };
}
async function rr(e) {
  if (!e.alg) throw TypeError(`"alg" argument is required when "jwk.alg" is not present`);
  let { algorithm: t, keyUsages: n } = nr(e),
    r = { ...e };
  return (
    r.kty !== `AKP` && delete r.alg,
    delete r.use,
    crypto.subtle.importKey(`jwk`, r, t, e.ext ?? !(e.d || e.priv), e.key_ops ?? n)
  );
}
var W = `given KeyObject instance cannot be used for this algorithm`,
  G,
  ir = async (e, t, n, r = !1) => {
    G ||= new WeakMap();
    let i = G.get(e);
    if (i?.[n]) return i[n];
    let a = await rr({ ...t, alg: n });
    return (r && Object.freeze(e), i ? (i[n] = a) : G.set(e, { [n]: a }), a);
  },
  ar = (e, t) => {
    G ||= new WeakMap();
    let n = G.get(e);
    if (n?.[t]) return n[t];
    let r = e.type === `public`,
      i = !!r,
      a;
    if (e.asymmetricKeyType === `x25519`) {
      switch (t) {
        case `ECDH-ES`:
        case `ECDH-ES+A128KW`:
        case `ECDH-ES+A192KW`:
        case `ECDH-ES+A256KW`:
          break;
        default:
          throw TypeError(W);
      }
      a = e.toCryptoKey(e.asymmetricKeyType, i, r ? [] : [`deriveBits`]);
    }
    if (e.asymmetricKeyType === `ed25519`) {
      if (t !== `EdDSA` && t !== `Ed25519`) throw TypeError(W);
      a = e.toCryptoKey(e.asymmetricKeyType, i, [r ? `verify` : `sign`]);
    }
    switch (e.asymmetricKeyType) {
      case `ml-dsa-44`:
      case `ml-dsa-65`:
      case `ml-dsa-87`:
        if (t !== e.asymmetricKeyType.toUpperCase()) throw TypeError(W);
        a = e.toCryptoKey(e.asymmetricKeyType, i, [r ? `verify` : `sign`]);
    }
    if (e.asymmetricKeyType === `rsa`) {
      let n;
      switch (t) {
        case `RSA-OAEP`:
          n = `SHA-1`;
          break;
        case `RS256`:
        case `PS256`:
        case `RSA-OAEP-256`:
          n = `SHA-256`;
          break;
        case `RS384`:
        case `PS384`:
        case `RSA-OAEP-384`:
          n = `SHA-384`;
          break;
        case `RS512`:
        case `PS512`:
        case `RSA-OAEP-512`:
          n = `SHA-512`;
          break;
        default:
          throw TypeError(W);
      }
      if (t.startsWith(`RSA-OAEP`))
        return e.toCryptoKey({ name: `RSA-OAEP`, hash: n }, i, r ? [`encrypt`] : [`decrypt`]);
      a = e.toCryptoKey(
        { name: t.startsWith(`PS`) ? `RSA-PSS` : `RSASSA-PKCS1-v1_5`, hash: n },
        i,
        [r ? `verify` : `sign`],
      );
    }
    if (e.asymmetricKeyType === `ec`) {
      let n = new Map([
        [`prime256v1`, `P-256`],
        [`secp384r1`, `P-384`],
        [`secp521r1`, `P-521`],
      ]).get(e.asymmetricKeyDetails?.namedCurve);
      if (!n) throw TypeError(W);
      let o = { ES256: `P-256`, ES384: `P-384`, ES512: `P-521` };
      (o[t] &&
        n === o[t] &&
        (a = e.toCryptoKey({ name: `ECDSA`, namedCurve: n }, i, [r ? `verify` : `sign`])),
        t.startsWith(`ECDH-ES`) &&
          (a = e.toCryptoKey({ name: `ECDH`, namedCurve: n }, i, r ? [] : [`deriveBits`])));
    }
    if (!a) throw TypeError(W);
    return (n ? (n[t] = a) : G.set(e, { [t]: a }), a);
  };
async function or(e, t) {
  if (e instanceof Uint8Array || Jn(e)) return e;
  if (Yn(e)) {
    if (e.type === `secret`) return e.export();
    if (`toCryptoKey` in e && typeof e.toCryptoKey == `function`)
      try {
        return ar(e, t);
      } catch (e) {
        if (e instanceof TypeError) throw e;
      }
    return ir(e, e.export({ format: `jwk` }), t);
  }
  if ($e(e)) return e.k ? ut(e.k) : ir(e, e, t, !0);
  throw Error(`unreachable`);
}
async function sr(e, t, n) {
  if (!ce(e)) throw TypeError(`JWK must be an object`);
  let r;
  switch (((t ??= e.alg), (r ??= n?.extractable ?? e.ext), e.kty)) {
    case `oct`:
      if (typeof e.k != `string` || !e.k)
        throw TypeError(`missing "k" (Key Value) Parameter value`);
      return ut(e.k);
    case `RSA`:
      if (`oth` in e && e.oth !== void 0)
        throw new v(`RSA JWK "oth" (Other Primes Info) Parameter value is not supported`);
      return rr({ ...e, alg: t, ext: r });
    case `AKP`:
      if (typeof e.alg != `string` || !e.alg)
        throw TypeError(`missing "alg" (Algorithm) Parameter value`);
      if (t !== void 0 && t !== e.alg) throw TypeError(`JWK alg and alg option value mismatch`);
      return rr({ ...e, ext: r });
    case `EC`:
    case `OKP`:
      return rr({ ...e, alg: t, ext: r });
    default:
      throw new v(`Unsupported "kty" (Key Type) Parameter value`);
  }
}
function cr(e, t, n, r, i) {
  if (i.crit !== void 0 && r?.crit === void 0)
    throw new e(`"crit" (Critical) Header Parameter MUST be integrity protected`);
  if (!r || r.crit === void 0) return new Set();
  if (
    !Array.isArray(r.crit) ||
    r.crit.length === 0 ||
    r.crit.some((e) => typeof e != `string` || e.length === 0)
  )
    throw new e(
      `"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present`,
    );
  let a;
  a = n === void 0 ? t : new Map([...Object.entries(n), ...t.entries()]);
  for (let t of r.crit) {
    if (!a.has(t)) throw new v(`Extension Header Parameter "${t}" is not recognized`);
    if (i[t] === void 0) throw new e(`Extension Header Parameter "${t}" is missing`);
    if (a.get(t) && r[t] === void 0)
      throw new e(`Extension Header Parameter "${t}" MUST be integrity protected`);
  }
  return new Set(r.crit);
}
var K = (e) => e?.[Symbol.toStringTag],
  lr = (e, t, n) => {
    if (t.use !== void 0) {
      let e;
      switch (n) {
        case `sign`:
        case `verify`:
          e = `sig`;
          break;
        case `encrypt`:
        case `decrypt`:
          e = `enc`;
      }
      if (t.use !== e)
        throw TypeError(`Invalid key for this operation, its "use" must be "${e}" when present`);
    }
    if (t.alg !== void 0 && t.alg !== e)
      throw TypeError(`Invalid key for this operation, its "alg" must be "${e}" when present`);
    if (Array.isArray(t.key_ops)) {
      let r;
      switch (!0) {
        case n === `sign` || n === `verify`:
        case e === `dir`:
        case e.includes(`CBC-HS`):
          r = n;
          break;
        case e.startsWith(`PBES2`):
          r = `deriveBits`;
          break;
        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
          r =
            !e.includes(`GCM`) && e.endsWith(`KW`)
              ? n === `encrypt`
                ? `wrapKey`
                : `unwrapKey`
              : n;
          break;
        case n === `encrypt` && e.startsWith(`RSA`):
          r = `wrapKey`;
          break;
        case n === `decrypt`:
          r = e.startsWith(`RSA`) ? `unwrapKey` : `deriveBits`;
      }
      if (r && t.key_ops?.includes?.(r) === !1)
        throw TypeError(
          `Invalid key for this operation, its "key_ops" must include "${r}" when present`,
        );
    }
    return !0;
  },
  ur = (e, t, n) => {
    if (!(t instanceof Uint8Array)) {
      if ($e(t)) {
        if (ie(t) && lr(e, t, n)) return;
        throw TypeError(
          `JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`,
        );
      }
      if (!Xn(t)) throw TypeError(qn(e, t, `CryptoKey`, `KeyObject`, `JSON Web Key`, `Uint8Array`));
      if (t.type !== `secret`)
        throw TypeError(`${K(t)} instances for symmetric algorithms must be of type "secret"`);
    }
  },
  dr = (e, t, n) => {
    if ($e(t))
      switch (n) {
        case `decrypt`:
        case `sign`:
          if (Je(t) && lr(e, t, n)) return;
          throw TypeError(`JSON Web Key for this operation must be a private JWK`);
        case `encrypt`:
        case `verify`:
          if (tt(t) && lr(e, t, n)) return;
          throw TypeError(`JSON Web Key for this operation must be a public JWK`);
      }
    if (!Xn(t)) throw TypeError(qn(e, t, `CryptoKey`, `KeyObject`, `JSON Web Key`));
    if (t.type === `secret`)
      throw TypeError(`${K(t)} instances for asymmetric algorithms must not be of type "secret"`);
    if (t.type === `public`)
      switch (n) {
        case `sign`:
          throw TypeError(
            `${K(t)} instances for asymmetric algorithm signing must be of type "private"`,
          );
        case `decrypt`:
          throw TypeError(
            `${K(t)} instances for asymmetric algorithm decryption must be of type "private"`,
          );
      }
    if (t.type === `private`)
      switch (n) {
        case `verify`:
          throw TypeError(
            `${K(t)} instances for asymmetric algorithm verifying must be of type "public"`,
          );
        case `encrypt`:
          throw TypeError(
            `${K(t)} instances for asymmetric algorithm encryption must be of type "public"`,
          );
      }
  };
function fr(e, t, n) {
  switch (e.substring(0, 2)) {
    case `A1`:
    case `A2`:
    case `di`:
    case `HS`:
    case `PB`:
      ur(e, t, n);
      break;
    default:
      dr(e, t, n);
  }
}
var q = (e) => Math.floor(e.getTime() / 1e3),
  pr = 60,
  mr = 3600,
  hr = mr * 24,
  gr = hr * 7,
  _r = hr * 365.25,
  vr =
    /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
function yr(e) {
  let t = vr.exec(e);
  if (!t || (t[4] && t[1])) throw TypeError(`Invalid time period format`);
  let n = parseFloat(t[2]),
    r = t[3].toLowerCase(),
    i;
  switch (r) {
    case `sec`:
    case `secs`:
    case `second`:
    case `seconds`:
    case `s`:
      i = Math.round(n);
      break;
    case `minute`:
    case `minutes`:
    case `min`:
    case `mins`:
    case `m`:
      i = Math.round(n * pr);
      break;
    case `hour`:
    case `hours`:
    case `hr`:
    case `hrs`:
    case `h`:
      i = Math.round(n * mr);
      break;
    case `day`:
    case `days`:
    case `d`:
      i = Math.round(n * hr);
      break;
    case `week`:
    case `weeks`:
    case `w`:
      i = Math.round(n * gr);
      break;
    default:
      i = Math.round(n * _r);
  }
  return t[1] === `-` || t[4] === `ago` ? -i : i;
}
function J(e, t) {
  if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
  return t;
}
var br = class {
    #e;
    constructor(e) {
      if (!ce(e)) throw TypeError(`JWT Claims Set MUST be an object`);
      this.#e = structuredClone(e);
    }
    data() {
      return n.encode(JSON.stringify(this.#e));
    }
    get iss() {
      return this.#e.iss;
    }
    set iss(e) {
      this.#e.iss = e;
    }
    get sub() {
      return this.#e.sub;
    }
    set sub(e) {
      this.#e.sub = e;
    }
    get aud() {
      return this.#e.aud;
    }
    set aud(e) {
      this.#e.aud = e;
    }
    set jti(e) {
      this.#e.jti = e;
    }
    set nbf(e) {
      typeof e == `number`
        ? (this.#e.nbf = J(`setNotBefore`, e))
        : e instanceof Date
          ? (this.#e.nbf = J(`setNotBefore`, q(e)))
          : (this.#e.nbf = q(new Date()) + yr(e));
    }
    set exp(e) {
      typeof e == `number`
        ? (this.#e.exp = J(`setExpirationTime`, e))
        : e instanceof Date
          ? (this.#e.exp = J(`setExpirationTime`, q(e)))
          : (this.#e.exp = q(new Date()) + yr(e));
    }
    set iat(e) {
      e === void 0
        ? (this.#e.iat = q(new Date()))
        : e instanceof Date
          ? (this.#e.iat = J(`setIssuedAt`, q(e)))
          : typeof e == `string`
            ? (this.#e.iat = J(`setIssuedAt`, q(new Date()) + yr(e)))
            : (this.#e.iat = J(`setIssuedAt`, e));
    }
  },
  xr = class {
    #e;
    #t;
    #n;
    constructor(e) {
      if (!(e instanceof Uint8Array)) throw TypeError(`payload must be an instance of Uint8Array`);
      this.#e = e;
    }
    setProtectedHeader(e) {
      return (Zn(this.#t, `setProtectedHeader`), (this.#t = e), this);
    }
    setUnprotectedHeader(e) {
      return (Zn(this.#n, `setUnprotectedHeader`), (this.#n = e), this);
    }
    async sign(e, t) {
      if (!this.#t && !this.#n)
        throw new F(
          `either setProtectedHeader or setUnprotectedHeader must be called before #sign()`,
        );
      if (!o(this.#t, this.#n))
        throw new F(`JWS Protected and JWS Unprotected Header Parameter names must be disjoint`);
      let n = { ...this.#t, ...this.#n },
        r = cr(F, new Map([[`b64`, !0]]), t?.crit, this.#t, n),
        i = !0;
      if (r.has(`b64`) && ((i = this.#t.b64), typeof i != `boolean`))
        throw new F(`The "b64" (base64url-encode payload) Header Parameter must be a boolean`);
      let { alg: a } = n;
      if (typeof a != `string` || !a)
        throw new F(`JWS "alg" (Algorithm) Header Parameter missing or invalid`);
      fr(a, e, `sign`);
      let s, c;
      i ? ((s = at(this.#e)), (c = Re(s))) : ((c = this.#e), (s = ``));
      let l, u;
      this.#t
        ? ((l = at(JSON.stringify(this.#t))), (u = Re(l)))
        : ((l = ``), (u = new Uint8Array()));
      let d = mt(u, Re(`.`), c),
        f = await tr(a, await or(e, a), d),
        p = { signature: at(f), payload: s };
      return (this.#n && (p.header = this.#n), this.#t && (p.protected = l), p);
    }
  },
  Sr = class {
    #e;
    constructor(e) {
      this.#e = new xr(e);
    }
    setProtectedHeader(e) {
      return (this.#e.setProtectedHeader(e), this);
    }
    async sign(e, t) {
      let n = await this.#e.sign(e, t);
      if (n.payload === void 0)
        throw TypeError(`use the flattened module for creating JWS with b64: false`);
      return `${n.protected}.${n.payload}.${n.signature}`;
    }
  },
  Cr = class {
    #e;
    #t;
    constructor(e = {}) {
      this.#t = new br(e);
    }
    setIssuer(e) {
      return ((this.#t.iss = e), this);
    }
    setSubject(e) {
      return ((this.#t.sub = e), this);
    }
    setAudience(e) {
      return ((this.#t.aud = e), this);
    }
    setJti(e) {
      return ((this.#t.jti = e), this);
    }
    setNotBefore(e) {
      return ((this.#t.nbf = e), this);
    }
    setExpirationTime(e) {
      return ((this.#t.exp = e), this);
    }
    setIssuedAt(e) {
      return ((this.#t.iat = e), this);
    }
    setProtectedHeader(e) {
      return ((this.#e = e), this);
    }
    async sign(e, t) {
      let n = new Sr(this.#t.data());
      if (
        (n.setProtectedHeader(this.#e),
        Array.isArray(this.#e?.crit) && this.#e.crit.includes(`b64`) && this.#e.b64 === !1)
      )
        throw new he(`JWTs MUST NOT use unencoded payload`);
      return n.sign(e, t);
    }
  },
  wr = 128;
function Tr(e) {
  let t = new Set(),
    n = [e],
    r = 0;
  for (; n.length > 0 && r < wr;) {
    let e = n.pop();
    if (((r += 1), typeof e != `object` || !e || t.has(e))) continue;
    t.add(e);
    let i = e;
    if (typeof i.traceId == `string` && i.traceId.trim().length > 0) return i.traceId;
    if (Array.isArray(i.errors)) for (let e = i.errors.length - 1; e >= 0; --e) n.push(i.errors[e]);
    if (te(e))
      for (let t = e.reasons.length - 1; t >= 0; --t) {
        let r = e.reasons[t];
        switch (r?._tag) {
          case `Fail`:
            n.push(r.error);
            break;
          case `Die`:
            n.push(r.defect);
        }
      }
    `cause` in i && n.push(i.cause);
  }
  return null;
}
var Er = class extends xe()(`@t3tools/client-runtime/relay/discovery/RelayEnvironmentDiscovery`) {},
  Dr = { environments: new Map(), refreshing: !1, offline: !1, error: R() };
function Or(e, t) {
  return t.environmentId === e.environmentId
    ? t.endpoint.httpBaseUrl !== e.endpoint.httpBaseUrl ||
      t.endpoint.wsBaseUrl !== e.endpoint.wsBaseUrl ||
      t.endpoint.providerKind !== e.endpoint.providerKind
      ? N(
          new yt({
            reason: `configuration`,
            detail: `Relay returned status for a different environment endpoint.`,
          }),
        )
      : t.descriptor !== void 0 && t.descriptor.environmentId !== e.environmentId
        ? N(
            new yt({
              reason: `configuration`,
              detail: `Relay returned a descriptor for a different environment.`,
            }),
          )
        : I(t)
    : N(
        new yt({
          reason: `configuration`,
          detail: `Relay returned status for a different environment.`,
        }),
      );
}
function kr(e) {
  try {
    return ne(hn(e).sub).pipe(oe((e) => e.length > 0));
  } catch {
    return R();
  }
}
var Ar = T(`RelayEnvironmentDiscovery.make`)(function* () {
    let e = yield* y,
      t = yield* Ue,
      n = yield* Ke,
      r = yield* Oe,
      i = yield* c(Dr),
      a = yield* We(1),
      o = yield* M(!1),
      s = yield* M(0),
      u = yield* M(R()),
      d = yield* M(0),
      f = yield* M(new Map()),
      m = T(`RelayEnvironmentDiscovery.clearOfflineReport`)(function* (e) {
        yield* _t(f, (t) => {
          if (!t.has(e)) return t;
          let n = new Map(t);
          return (n.delete(e), n);
        });
      }),
      h = T(`RelayEnvironmentDiscovery.updateEnvironment`)(function* (e, t, n) {
        (yield* L(s)) === e &&
          (yield* p(i, (e) => {
            let r = e.environments.get(t);
            if (r === void 0) return e;
            let i = new Map(e.environments);
            return (i.set(t, n(r)), { ...e, environments: i });
          }));
      }),
      te = T(`RelayEnvironmentDiscovery.refreshStatus`)(function* (t, n, r) {
        let i = yield* e
          .getEnvironmentStatus({ clerkToken: n, scopes: [cn, Ot], environmentId: r.environmentId })
          .pipe(
            l(sn),
            P((e) => Or(r, e)),
            Te,
          );
        if (i._tag === `Success`) {
          if (i.success.status === `offline`) {
            let e = `${i.success.endpoint.httpBaseUrl}\n${i.success.error ?? ``}`;
            (yield* rn(f, (t) =>
              t.get(r.environmentId) === e ? [!1, t] : [!0, new Map(t).set(r.environmentId, e)],
            )) &&
              (yield* fn(`Relay environment health check reported offline`, {
                environmentId: i.success.environmentId,
                endpoint: i.success.endpoint.httpBaseUrl,
                message: i.success.error,
                traceId: i.success.traceId,
              }));
          } else yield* m(r.environmentId);
          yield* h(t, r.environmentId, (e) => ({
            ...e,
            availability: i.success.status,
            status: Xt(i.success),
            error: R(),
          }));
        } else
          (yield* m(r.environmentId),
            yield* h(t, r.environmentId, (e) => ({
              ...e,
              availability: `error`,
              error: Xt(i.failure),
            })));
      }),
      g = a.withPermits(1)(
        D(function* () {
          if ((yield* k(o, !0), (yield* n.status) === `offline`)) {
            yield* p(i, (e) => ({ ...e, refreshing: !1, offline: !0 }));
            return;
          }
          let r = yield* L(s);
          (yield* k(d, r),
            yield* ee(i, { environments: new Map(), refreshing: !0, offline: !1, error: R() }));
          let a = yield* Te(t.clerkToken);
          if (a._tag === `Failure`) {
            let e = a.failure;
            if (e._tag === `ConnectionBlockedError` && e.reason === `authentication`) {
              if ((yield* L(s)) !== r) return;
              yield* p(i, (e) => ({ ...e, refreshing: !1 }));
              return;
            }
            return yield* e;
          }
          let c = a.success;
          if ((yield* L(s)) !== r) return;
          let f = kr(c),
            m = yield* L(u);
          (Ie(m) &&
            (!Ie(f) || m.value !== f.value) &&
            ((r = yield* Qt(s, (e) => e + 1)), yield* k(d, r)),
            yield* k(u, f));
          let h = yield* e.listEnvironments({ clerkToken: c }).pipe(l(sn));
          if ((yield* L(s)) !== r) return;
          let g = new Map();
          for (let e of h)
            g.set(e.environmentId, {
              environment: e,
              availability: `checking`,
              status: R(),
              error: R(),
            });
          (yield* p(i, (e) => ({ ...e, environments: g })),
            yield* ln(h, (e) => te(r, c, e), { concurrency: `unbounded`, discard: !0 }),
            (yield* L(s)) === r && (yield* p(i, (e) => ({ ...e, refreshing: !1 }))));
        }).pipe(
          pt((e) =>
            D(function* () {
              let t = yield* L(d);
              (yield* L(s)) === t && (yield* p(i, (t) => ({ ...t, refreshing: !1, error: Xt(e) })));
            }),
          ),
        ),
      );
    return (
      yield* n.changes.pipe(
        ve,
        wt((e) =>
          e === `offline`
            ? p(i, (e) => ({ ...e, refreshing: !1, offline: !0 }))
            : L(o).pipe(P((e) => (e ? g : j))),
        ),
        Kt,
      ),
      yield* r.changes.pipe(
        wt((e) =>
          e === `credentials-changed`
            ? D(function* () {
                (yield* _t(s, (e) => e + 1),
                  yield* k(u, R()),
                  yield* k(f, new Map()),
                  yield* ee(i, Dr),
                  yield* g.pipe(Kt));
              })
            : j,
        ),
        Kt,
      ),
      Er.of({ state: i, refresh: g })
    );
  }),
  jr = se(Er, Ar());
function Mr() {
  return window.desktopBridge?.getLocalEnvironmentEnabled?.() === !1;
}
var Nr = _([`configured`, `window-origin`, `desktop-managed`]),
  Pr = _([`http-base-url`, `websocket-base-url`, `development-server-url`, `window-location-url`]),
  Fr = class extends S()(`PrimaryEnvironmentUrlInvalidError`, {
    source: Nr,
    urlKind: Pr,
    cause: Vt(),
  }) {
    get message() {
      return `Could not parse ${this.urlKind} for the ${this.source} primary environment target.`;
    }
  },
  Ir = class extends S()(`PrimaryEnvironmentProtocolUnsupportedError`, {
    source: Nr,
    protocol: C,
  }) {
    get message() {
      return `The ${this.source} primary environment target uses unsupported protocol ${this.protocol}.`;
    }
  },
  Lr = class extends S()(`DesktopEnvironmentBootstrapIncompleteError`, {
    hasHttpBaseUrl: a,
    hasWsBaseUrl: a,
  }) {
    get message() {
      return `Desktop bootstrap is missing ${[...(this.hasHttpBaseUrl ? [] : [`httpBaseUrl`]), ...(this.hasWsBaseUrl ? [] : [`wsBaseUrl`])].join(` and `)} for the local environment.`;
    }
  },
  Rr = class extends S()(`PrimaryEnvironmentDisabledError`, {}) {
    get message() {
      return `The local environment is disabled.`;
    }
  },
  zr = new Set([`127.0.0.1`, `::1`, `localhost`]);
function Br() {
  return (
    (window.desktopBridge?.getLocalEnvironmentBootstraps() ?? []).find((e) => e.id === `primary`) ??
    null
  );
}
function Vr(e) {
  try {
    return e.baseUrl === void 0 ? new URL(e.rawValue) : new URL(e.rawValue, e.baseUrl);
  } catch (t) {
    throw new Fr({ source: e.source, urlKind: e.urlKind, cause: t });
  }
}
function Hr(e, t, n) {
  return Vr({ rawValue: e, baseUrl: window.location.origin, source: t, urlKind: n }).toString();
}
function Ur(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/^\[(.*)\]$/, `$1`);
}
function Wr(e) {
  return zr.has(Ur(e));
}
function Gr(e) {
  return e.target.httpBaseUrl;
}
function Kr() {
  return null;
}
function qr() {
  let e = Vr({
      rawValue: window.location.origin,
      source: `window-origin`,
      urlKind: `http-base-url`,
    }),
    t = e.toString();
  if (e.protocol === `http:`) e.protocol = `ws:`;
  else if (e.protocol === `https:`) e.protocol = `wss:`;
  else throw new Ir({ source: `window-origin`, protocol: e.protocol });
  return { source: `window-origin`, target: { httpBaseUrl: t, wsBaseUrl: e.toString() } };
}
function Jr() {
  let e = Br();
  if (!e || (!e.httpBaseUrl && !e.wsBaseUrl)) return null;
  if (!e.httpBaseUrl || !e.wsBaseUrl)
    throw new Lr({ hasHttpBaseUrl: !!e.httpBaseUrl, hasWsBaseUrl: !!e.wsBaseUrl });
  return {
    source: `desktop-managed`,
    target: {
      httpBaseUrl: Hr(e.httpBaseUrl, `desktop-managed`, `http-base-url`),
      wsBaseUrl: Hr(e.wsBaseUrl, `desktop-managed`, `websocket-base-url`),
    },
  };
}
function Yr(e, t) {
  let n = Xr();
  if (!n) throw new Rr();
  let r = Vr({ rawValue: Gr(n), source: n.source, urlKind: `http-base-url` });
  return ((r.pathname = e), t && (r.search = new URLSearchParams(t).toString()), r.toString());
}
function Xr() {
  return Mr() ? null : (Jr() ?? Kr() ?? qr());
}
var Zr = xe(`@t3tools/web/environments/primary/httpClient/PrimaryEnvironmentHttpClient`),
  Qr = nn(() => pn(Yr(`/`))),
  $r = se(Zr, Qr),
  ei = null;
function ti() {
  if (typeof window > `u`) return Promise.resolve(null);
  let e = window.desktopBridge;
  return e
    ? ((ei ??= e.getLocalEnvironmentBearerToken().catch((e) => {
        throw ((ei = null), e);
      })),
      ei)
    : Promise.resolve(null);
}
function ni() {
  return typeof window > `u` ||
    window.desktopBridge !== void 0 ||
    !window.location.origin.startsWith(`http`)
    ? !1
    : new URL(Yr(`/`)).origin === window.location.origin;
}
function ri(e) {
  return e.pipe(Et((e) => Bt(ti).pipe(x((t) => (t ? St(e, t) : e)))));
}
function ii() {
  return ft(
    O(() => {
      let e = dn(globalThis.fetch);
      if (ni()) return _e(e, it(Ee, { credentials: `include` }));
      let t = se(ot, x(ot, ri)).pipe(me(e));
      return _e(t, it(Ee, { credentials: `omit` }));
    }),
  );
}
var ai = ii(),
  oi = ue({ kty: b(`EC`), crv: b(`P-256`), x: C.check(A()), y: C.check(A()) });
function si(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function ci(e) {
  return Array.isArray(e)
    ? `[${e.map(ci).join(`,`)}]`
    : si(e)
      ? `{${Object.entries(e)
          .filter(([, e]) => e !== void 0)
          .sort(([e], [t]) => (e < t ? -1 : +(e > t)))
          .map(([e, t]) => `${JSON.stringify(e)}:${ci(t)}`)
          .join(`,`)}}`
      : (JSON.stringify(e) ?? `null`);
}
var li = `dpop+jwt`,
  ui = `ES256`,
  di = oi;
_([
  `missing_proof`,
  `malformed_proof`,
  `key_mismatch`,
  `method_mismatch`,
  `url_mismatch`,
  `access_token_hash_mismatch`,
  `time_window`,
  `invalid_signature`,
  `invalid_proof`,
]);
var fi = ue({ ...oi.fields, d: jt(fe) }),
  pi = Lt(ue({ typ: b(li), alg: b(ui), jwk: fi }));
Dt(pi);
var mi = Lt(ue({ htm: C.check(A()), htu: C.check(A()), jti: C.check(A()), iat: Ae, ath: jt(C) }));
Dt(mi);
function hi(e) {
  return ci({ crv: e.crv, kty: e.kty, x: e.x, y: e.y });
}
function gi(e) {
  return vn(f(new TextEncoder().encode(hi(e))));
}
function _i(e) {
  return vn(f(new TextEncoder().encode(e)));
}
var vi = class extends w(`BrowserDpopError`) {},
  yi = `t3code:cloud-auth`,
  bi = 1,
  Y = `keys`,
  xi = `relay-dpop-proof-key`,
  Si = r(di),
  Ci = it(
    z,
    In({
      randomBytes: (e) => globalThis.crypto.getRandomValues(new Uint8Array(e)),
      digest: (e, t) =>
        Bt(async () => {
          let n = new Uint8Array(t.length);
          return (n.set(t), new Uint8Array(await globalThis.crypto.subtle.digest(e, n.buffer)));
        }),
    }),
  );
function X(e, t) {
  return new vi({ message: e, ...(t === void 0 ? {} : { cause: t }) });
}
function wi() {
  return ye((e) => {
    let t = indexedDB.open(yi, bi);
    (t.addEventListener(`error`, () =>
      e(N(X(`Could not open DPoP key storage.`, t.error ?? void 0))),
    ),
      t.addEventListener(`upgradeneeded`, () => {
        t.result.objectStoreNames.contains(Y) || t.result.createObjectStore(Y);
      }),
      t.addEventListener(`success`, () => e(I(t.result))));
  });
}
function Ti() {
  return typeof indexedDB > `u`
    ? I(null)
    : Se(
        wi(),
        (e) =>
          ye((t) => {
            let n = e.transaction(Y, `readonly`).objectStore(Y).get(xi);
            (n.addEventListener(`error`, () =>
              t(N(X(`Could not read DPoP key.`, n.error ?? void 0))),
            ),
              n.addEventListener(`success`, () => t(I(n.result ?? null))));
          }),
        (e) => O(() => e.close()),
      );
}
function Ei(e) {
  return typeof indexedDB > `u`
    ? j
    : Se(
        wi(),
        (t) =>
          ye((n) => {
            let r = t.transaction(Y, `readwrite`);
            (r.addEventListener(`error`, () =>
              n(N(X(`Could not write DPoP key.`, r.error ?? void 0))),
            ),
              r.addEventListener(`complete`, () => n(j)),
              r.objectStore(Y).put(e, xi));
          }),
        (e) => O(() => e.close()),
      );
}
var Di = D(function* () {
    let e = yield* E({
        try: () =>
          crypto.subtle.generateKey({ name: `ECDSA`, namedCurve: `P-256` }, !0, [`sign`, `verify`]),
        catch: (e) => X(`Could not generate DPoP proof key.`, e),
      }),
      t = yield* E({
        try: () => crypto.subtle.exportKey(`jwk`, e.privateKey),
        catch: (e) => X(`Could not export DPoP private key.`, e),
      }),
      n = yield* E({
        try: () => crypto.subtle.exportKey(`jwk`, e.publicKey),
        catch: (e) => X(`Could not export DPoP public key.`, e),
      }).pipe(
        P((e) => Si(e)),
        l((e) => (e instanceof vi ? e : X(`Generated DPoP public key is invalid.`, e))),
      );
    return {
      privateKey: yield* E({
        try: () => sr(t, `ES256`, { extractable: !1 }),
        catch: (e) => X(`Could not import DPoP private key.`, e),
      }),
      publicJwk: n,
      thumbprint: gi(n),
    };
  }),
  Oi = T(`dpop.createBrowserDpopProof`)(function* (e) {
    let t = yield* At({
      try: () => new URL(e.url),
      catch: (e) => X(`Could not normalize DPoP proof URL.`, e),
    });
    ((t.search = ``), (t.hash = ``));
    let n = yield* z.pipe(
      P((e) => e.randomUUIDv4()),
      l((e) => X(`Could not generate DPoP proof identifier.`, e)),
    );
    return {
      proof: yield* E({
        try: () =>
          new Cr({
            htm: e.method.toUpperCase(),
            htu: t.toString(),
            jti: n,
            ...(e.accessToken ? { ath: _i(e.accessToken) } : {}),
          })
            .setProtectedHeader({ typ: `dpop+jwt`, alg: `ES256`, jwk: e.proofKey.publicJwk })
            .setIssuedAt()
            .sign(e.proofKey.privateKey),
        catch: (e) => X(`Could not sign DPoP proof.`, e),
      }),
      thumbprint: e.proofKey.thumbprint,
    };
  });
function ki(e, t) {
  if (e === t) return { _tag: `None` };
  let n = e !== void 0;
  return t === null
    ? { _tag: `SignOut`, previousAccountId: e ?? null, isAccountTransition: n }
    : { _tag: `SignIn`, accountId: t, switchFromAccountId: e ?? null, isAccountTransition: n };
}
function Ai(e) {
  let t = null,
    n = { _tag: `Unobserved` },
    r = 0,
    i = Promise.resolve(),
    a = (e, t) => {
      let n = i.then(t, t);
      ((i = n.then(
        () => void 0,
        () => void 0,
      )),
        an(() => n).then((t) => Be(t, { label: e })));
    },
    o = () => {
      switch (n._tag) {
        case `Unobserved`:
          return;
        case `SignedOut`:
          return null;
        default:
          return n.accountId;
      }
    },
    s = (t, i, o) => {
      let s = r,
        c = () => s === r;
      ((n = { _tag: `Activating`, accountId: i.accountId }),
        i.switchFromAccountId !== null && e.deactivate(),
        a(`cloud account activation`, async () => {
          try {
            if (
              (i.switchFromAccountId !== null &&
                (await e.cleanUp({ source: t, accountId: i.switchFromAccountId, wasActive: o })),
              !c())
            )
              return;
            await e.prepare?.({ source: t, accountId: i.accountId, isCurrent: c });
          } catch (e) {
            throw (
              c() && (n = { _tag: `Failed`, accountId: i.accountId, step: i, wasActive: o }), e
            );
          }
          c() &&
            ((n = { _tag: `Active`, accountId: i.accountId }),
            e.activate({
              source: t,
              accountId: i.accountId,
              isAccountTransition: i.isAccountTransition,
            }));
        }));
    },
    c = (t, i) => {
      let c = n;
      if (c._tag === `Failed` && c.accountId === i) {
        ((r += 1), s(t, c.step, c.wasActive));
        return;
      }
      let l = ki(o(), i);
      if (l._tag === `None`) return;
      r += 1;
      let u = c._tag === `Active`;
      l._tag === `SignOut`
        ? ((n = { _tag: `SignedOut` }),
          l.isAccountTransition && e.onSignOutTransition?.(),
          e.deactivate(),
          a(`cloud account cleanup`, () =>
            e.cleanUp({ source: t, accountId: l.previousAccountId, wasActive: u }),
          ))
        : s(t, l, u);
    },
    l = () => {
      t && (t.unsubscribe(), (t = null), (r += 1), (n = { _tag: `Unobserved` }), e.detach());
    };
  return {
    attach(e) {
      l();
      let n = {
        source: e,
        unsubscribe: e.addListener((t) => {
          t.user !== void 0 && c(e, t.user?.id ?? null);
        }),
      };
      return (
        (t = n),
        () => {
          t === n && l();
        }
      );
    },
    getState: () => n,
  };
}
var ji = 15e3,
  Mi = 3e5,
  Ni = 5e3,
  Pi = vt(de),
  Fi = class extends w(`ManagedRelaySessionError`) {},
  Ii = class extends w(`ManagedRelaySnapshotError`) {},
  Z = gn(null).pipe(He, en(`managed-relay:session`)),
  Li = new WeakMap();
function Ri(e) {
  let t = null,
    n = null,
    r = e.readClerkToken,
    i = 0,
    a = async (e) => {
      if (t && t.expiresAtMillis > e + Ni) return t.token;
      if (n) return await n;
      let a = i,
        o = r().then((e) => {
          if (a !== i) return e;
          if (!e) return ((t = null), null);
          try {
            let n = hn(e).exp;
            t = typeof n == `number` ? { token: e, expiresAtMillis: n * 1e3 } : null;
          } catch {
            t = null;
          }
          return e;
        });
      n = o;
      try {
        return await o;
      } finally {
        n === o && (n = null);
      }
    },
    o = {
      accountId: e.accountId,
      readClerkToken: T(`clientRuntime.managedRelaySession.readClerkToken`)(function* () {
        let e = yield* Ht;
        return yield* E({
          try: () => a(e),
          catch: (e) =>
            new Fi({ message: `Could not obtain the T3 Connect session token.`, cause: e }),
        });
      }),
    };
  return (
    Li.set(o, {
      updateReadClerkToken: (e) => {
        ((r = e), (i += 1), (n = null));
      },
    }),
    o
  );
}
function zi(e, t) {
  let n = e.get(Z);
  if (t === null) n !== null && e.set(Z, null);
  else {
    if (n?.accountId === t.accountId) {
      let e = Li.get(n);
      if (e) {
        e.updateReadClerkToken(t.readClerkToken);
        return;
      }
    }
    e.set(Z, Ri(t));
  }
}
function Bi(e) {
  return ze(e, Z).pipe(
    Yt((e) => e?.accountId ?? null),
    ve,
    lt(1),
  );
}
function Vi(e) {
  return e.readClerkToken().pipe(
    Rt(
      (e) => !!e,
      () => new Fi({ message: `The T3 Connect session token is unavailable.` }),
    ),
  );
}
var Hi = T(`clientRuntime.managedRelaySession.deregisterEnvironment`)(function* (e, t) {
  let n = e.get(Z);
  if (!n || n.accountId !== t.accountId)
    return yield* new Fi({ message: `Sign in to T3 Connect before deregistering an environment.` });
  let r = yield* Vi(n);
  yield* (yield* y).unlinkEnvironment({ clerkToken: r, environmentId: t.environmentId });
});
function Ui(e, t) {
  let n = e(Z);
  return !n || n.accountId !== t
    ? N(new Fi({ message: `Sign in to T3 Connect before loading relay data.` }))
    : Vi(n);
}
function Wi(e) {
  return JSON.stringify(e);
}
function Gi(e) {
  return JSON.parse(e);
}
function Ki(e, t) {
  return (
    e.httpBaseUrl === t.httpBaseUrl &&
    e.wsBaseUrl === t.wsBaseUrl &&
    e.providerKind === t.providerKind
  );
}
function qi(e, t) {
  return t.environmentId === e.environmentId
    ? Ki(t.endpoint, e.endpoint)
      ? t.descriptor && t.descriptor.environmentId !== e.environmentId
        ? N(new Ii({ message: `Relay returned status descriptor for a different environment.` }))
        : I(t)
      : N(new Ii({ message: `Relay returned status for a different endpoint.` }))
    : N(new Ii({ message: `Relay returned status for a different environment.` }));
}
function Ji(e) {
  let t = mn(e);
  return {
    message:
      Pi(t) && t.relayError
        ? It(t.relayError)
        : t instanceof Error
          ? t.message
          : `Could not load T3 Connect data.`,
    traceId: Tr(t),
  };
}
function Yi(e) {
  let t = e._tag === `Failure` ? Ji(e.cause) : null;
  return {
    data: pe(xt(e)),
    error: t?.message ?? null,
    errorTraceId: t?.traceId ?? null,
    isPending: e.waiting,
  };
}
var Xi = (e) => (t) =>
  t.pipe(
    Zt((t) => {
      if (Me(t)) return j;
      let { message: n, traceId: r } = Ji(t);
      return bt(`[t3-cloud] Relay ${e} listing failed`).pipe(Qe({ message: n, traceId: r }));
    }),
  );
function Zi(e, t) {
  let n = t?.staleTimeMs ?? ji,
    r = t?.idleTtlMs ?? Mi,
    i = T(`managedRelayState.observe`)(function* (e, n) {
      return (
        t?.onQueryEvent?.({ ...e, phase: `start` }),
        yield* n.pipe(
          h((n) =>
            O(() => {
              if (n._tag === `Success`) {
                t?.onQueryEvent?.({ ...e, phase: `success` });
                return;
              }
              let r = mn(n.cause);
              t?.onQueryEvent?.({
                ...e,
                phase: `failure`,
                message: r instanceof Error ? r.message : String(r),
                traceId: Tr(r),
              });
            }),
          ),
        )
      );
    }),
    a = we((t) =>
      e
        .atom((e) =>
          D(function* () {
            let n = { operation: `environments`, accountId: t },
              r = yield* i({ ...n, stage: `clerk-token` }, Ui(e, t)),
              a = yield* y;
            return yield* i(
              { ...n, stage: `relay-request` },
              a.listEnvironments({ clerkToken: r }),
            );
          }).pipe(Xi(`environment`)),
        )
        .pipe(
          nt({ staleTime: n, revalidateOnMount: !0 }),
          Ye(r),
          en(`managed-relay:environments:${t}`),
        ),
    ),
    o = we((t) =>
      e
        .atom((e) =>
          D(function* () {
            let n = { operation: `devices`, accountId: t },
              r = yield* i({ ...n, stage: `clerk-token` }, Ui(e, t)),
              a = yield* y;
            return yield* i({ ...n, stage: `relay-request` }, a.listDevices({ clerkToken: r }));
          }).pipe(Xi(`device`)),
        )
        .pipe(nt({ staleTime: n, revalidateOnMount: !0 }), Ye(r), en(`managed-relay:devices:${t}`)),
    ),
    s = we((t) => {
      let { accountId: a, environment: o } = Gi(t);
      return e
        .atom((e) =>
          D(function* () {
            let t = {
                operation: `environment-status`,
                accountId: a,
                environmentId: o.environmentId,
              },
              n = yield* i({ ...t, stage: `clerk-token` }, Ui(e, a)),
              r = yield* y,
              s = yield* i(
                { ...t, stage: `relay-request` },
                r.getEnvironmentStatus({
                  clerkToken: n,
                  scopes: [cn, Ot],
                  environmentId: o.environmentId,
                }),
              );
            return yield* i({ ...t, stage: `validation` }, qi(o, s));
          }),
        )
        .pipe(
          nt({ staleTime: n, revalidateOnMount: !0 }),
          Ye(r),
          en(`managed-relay:environment-status:${t}`),
        );
    });
  return {
    environmentsAtom: a,
    devicesAtom: o,
    environmentStatusAtom: (e) => s(Wi(e)),
    refreshEnvironments(e, t) {
      e.refresh(a(t));
    },
    refreshDevices(e, t) {
      e.refresh(o(t));
    },
    refreshEnvironmentStatus(e, t) {
      e.refresh(s(Wi(t)));
    },
  };
}
var Qi = se(
    g,
    D(function* () {
      let e = yield* z,
        t = yield* We(1),
        n = null,
        r = t.withPermit(
          D(function* () {
            if (n) return n;
            let e = yield* Ti();
            if (e) return ((n = e), e);
            let t = yield* Di;
            return (yield* Ei(t), (n = t), t);
          }),
        );
      return g.of({
        thumbprint: r.pipe(
          x((e) => e.thumbprint),
          l((e) => new De({ keyStore: `indexed-db`, cause: e })),
          Nt(`web.managedRelayDpopSigner.loadThumbprint`),
        ),
        createProof: T(`web.managedRelayDpopSigner.createProof`)(function* (t) {
          let n = yield* r.pipe(l((e) => new Ne({ method: t.method, url: t.url, cause: e })));
          return yield* Oi({ ...t, proofKey: n }).pipe(
            Fe(z, e),
            x((e) => e.proof),
            l((e) => new Ne({ method: t.method, url: t.url, cause: e })),
          );
        }),
      });
    }),
  ),
  $i = (e) => Ce({ relayUrl: e, clientId: Jt }).pipe(ct(Qi)),
  ea = _([`pk_test`, `pk_live`, `unknown`]),
  ta = class extends S()(`ClerkPublishableKeyDecodeError`, { keyPrefix: ea, cause: Vt() }) {
    get message() {
      return `Failed to decode Clerk publishable key (${this.keyPrefix}).`;
    }
  },
  na = class extends S()(`ClerkPublishableKeyFrontendApiError`, {
    keyPrefix: ea,
    frontendApi: C,
    reason: _([`empty`, `contains-path`, `invalid-url`]),
    cause: Ct(Vt()),
  }) {
    get message() {
      return `Invalid Clerk frontend API decoded from publishable key (${this.keyPrefix}; ${this.reason}).`;
    }
  };
function ra(e) {
  let t = e.startsWith(`pk_test_`) ? `pk_test` : e.startsWith(`pk_live_`) ? `pk_live` : `unknown`,
    n = e.split(`_`).slice(2).join(`_`),
    r;
  try {
    r = globalThis.atob(n).replace(/\$$/u, ``);
  } catch (e) {
    throw new ta({ keyPrefix: t, cause: e });
  }
  if (r.length === 0) throw new na({ keyPrefix: t, frontendApi: r, reason: `empty` });
  if (r.includes(`/`)) throw new na({ keyPrefix: t, frontendApi: r, reason: `contains-path` });
  let i = `https://${r}`;
  try {
    return { hostname: new URL(i).hostname, url: i };
  } catch (e) {
    throw new na({ keyPrefix: t, frontendApi: r, reason: `invalid-url`, cause: e });
  }
}
function ia(e) {
  return ra(e).url;
}
function aa(e) {
  return ra(e).hostname;
}
function oa(e) {
  return { template: e, skipCache: !0 };
}
var sa = class extends S()(`CloudPublicConfigMissingError`, {
  key: b(`T3CODE_CLERK_JWT_TEMPLATE`),
}) {
  get message() {
    return `${this.key} is not configured.`;
  }
};
function Q(e) {
  return e?.trim() || null;
}
function ca(e) {
  try {
    let t = new URL(e);
    return t.protocol === `https:` ? t.toString() : null;
  } catch {
    return null;
  }
}
function $() {
  return {
    clerkPublishableKey: Q(`pk_live_Y2xlcmsudDMuY29kZXMk`),
    clerkJwtTemplate: Q(``),
    relayUrl: Ve(`https://relay.t3.codes`),
    relayTracing: { tracesUrl: ca(``), tracesDataset: Q(``), tracesToken: Q(``) },
  };
}
function la() {
  if (typeof window < `u` && window.desktopBridge?.getRelayTelemetryEnabled?.() === !1) return null;
  let { relayTracing: e } = $();
  return e.tracesUrl && e.tracesDataset && e.tracesToken
    ? { tracesUrl: e.tracesUrl, tracesDataset: e.tracesDataset, tracesToken: e.tracesToken }
    : null;
}
function ua() {
  let e = $();
  if (!e.clerkPublishableKey || !e.clerkJwtTemplate || !e.relayUrl) return !1;
  if (
    typeof window > `u` ||
    window.desktopBridge !== void 0 ||
    !e.clerkPublishableKey.startsWith(`pk_live_`)
  )
    return !0;
  try {
    let t = aa(e.clerkPublishableKey).replace(/^clerk\./u, ``),
      { hostname: n, protocol: r, port: i } = window.location;
    return r === `https:` && i === `` && (n === t || n.endsWith(`.${t}`));
  } catch {
    return !1;
  }
}
function da() {
  let { clerkJwtTemplate: e } = $();
  if (!e) throw new sa({ key: `T3CODE_CLERK_JWT_TEMPLATE` });
  return oa(e);
}
var fa = Ut(),
  pa = null;
function ma(e) {
  pa = e;
}
function ha() {
  return pa !== null;
}
var ga = it(
  Mt,
  ht({
    span(e) {
      return pa?.span(e) ?? new Pt(e);
    },
  }),
);
function _a() {
  return $().relayUrl ?? `http://relay.invalid`;
}
var va = dn((e, t) => globalThis.fetch(e, t)),
  ya = je(la(), {
    serviceName: `t3code-web`,
    serviceVersion: `0.1.2`,
    runtime: `browser`,
    serviceInstanceId: fa,
    client: typeof window < `u` && window.desktopBridge ? `desktop` : `web`,
  }).pipe(me(va)),
  ba = zn($r.pipe(me(ai))),
  xa = (e) => ba.runPromise(e),
  Sa = (e) => xa(e),
  Ca = zn($t(va, Ci, Wt, ga, ya, $i(_a()).pipe(me($t(va, Ci))))),
  wa = qe(Ca.contextEffect);
export {
  zn as A,
  Xr as C,
  Er as D,
  Dr as E,
  bn as M,
  vn as N,
  jr as O,
  Wr as S,
  Mr as T,
  zi as _,
  fa as a,
  ti as b,
  $ as c,
  ia as d,
  Zi as f,
  Yi as g,
  Z as h,
  ha as i,
  z as j,
  Tr as k,
  da as l,
  Bi as m,
  Sa as n,
  ma as o,
  Hi as p,
  Ca as r,
  ua as s,
  wa as t,
  Q as u,
  Ai as v,
  Yr as w,
  Zr as x,
  ai as y,
};
//# sourceMappingURL=runtime-CSDWbn8h.js.map
