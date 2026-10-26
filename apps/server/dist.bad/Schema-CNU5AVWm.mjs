#!/usr/bin/env node

import {
  $ as fnUntracedEager,
  $i as fromReasons,
  $l as symbol,
  Al as redact$2,
  As as empty$4,
  Bl as asEquivalence,
  Cl as format$1,
  Ct as map$4,
  Di as failCause,
  Dl as formatPropertyKey,
  Dt as mapErrorEager,
  Ei as fail$3,
  El as formatPath,
  En as try_,
  Fc as liftThrowable,
  Fi as succeed$2,
  Fu as Class$2,
  Gc as Number$4,
  Gl as array,
  Gt as provideServiceEffect,
  Hl as makeCompareMap,
  I as exit,
  Ia as effectIsExit,
  Ii as void_$1,
  Il as Array_,
  Iu as Prototype,
  J as flatMap,
  Jc as isGreaterThan$3,
  Jl as number$1,
  Jo as isFinite$2,
  Js as map$6,
  Kc as String$5,
  Ki as die$1,
  Kl as combine,
  Ko as infinity,
  L as fail$2,
  Lc as map$3,
  Ll as Tuple$1,
  Lu as pipeArguments,
  Mc as isNone,
  Ml as assignProperties,
  Mu as memoize,
  N as die,
  Nc as isOption,
  Ni as isSuccess,
  Nl as assignProperty,
  Nu as memoizeIdempotent,
  Os as append,
  Pc as isSome,
  Pn as void_$2,
  Qc as make$9,
  Rc as match$1,
  Rl as make$10,
  Rs as fromIterable$1,
  Tc as fromNullOr,
  Tl as formatJson,
  Tt as mapEager,
  Ul as makeCompareSet,
  Uo as fromInput$2,
  Us as isReadonlyArrayNonEmpty,
  Vc as some,
  Vl as equals,
  Vs as isArrayNonEmpty,
  Wl as symbol$1,
  Wo as fromInputUnsafe,
  Xc as isLessThan$3,
  Xl as string$1,
  Y as flatMapEager,
  Yc as isGreaterThanOrEqualTo$3,
  Yl as optimize,
  Zc as isLessThanOrEqualTo$3,
  Zl as structure,
  _ as catchCause,
  _a as map$7,
  _c as try_$1,
  _l as getStackTraceLimit,
  _u as isTagged,
  ac as fail$1,
  al as args,
  as as seconds,
  au as isFunction,
  b as catchEager,
  bc as filter,
  cc as getOrThrow,
  cs as toMillis,
  cu as isNotNullish,
  du as isNumber,
  el as min$2,
  es as millis,
  fa as isReason,
  fn as succeed$3,
  fs as Reference,
  fu as isObject,
  ga as makeInterruptReason,
  gc as succeed$1,
  gn as sync,
  gs as get,
  gu as isString$1,
  ha as makeFailReason,
  hn as suspend$1,
  hs as empty$3,
  il as TaggedError$2,
  in as runSyncExit,
  io as iterateEager,
  is as negativeInfinity,
  iu as isError,
  ji as isExit,
  jl as symbolRedactable,
  ju as identity,
  kc as getOrNull,
  ks as appendAll$1,
  ku as dual,
  la as isFailReason,
  lo as map$2,
  lu as isNotUndefined,
  ma as makeDieReason,
  mc as mapError,
  mo as resolveConcurrency,
  mu as isPropertyKey,
  nl as Error$3,
  nu as isBigInt,
  oa as isCause,
  ou as isNever$1,
  pc as map$5,
  pn as succeedNone,
  ps as Service,
  pu as isObjectKeyword,
  ql as hash,
  qo as isDuration,
  qs as makeEquivalence$3,
  rl as PipeInspectableProto,
  ro as iterateConcurrent,
  rs as nanos,
  ru as isBoolean,
  sc as flatMap$1,
  st as fromResult,
  tu as hasProperty,
  uc as isFailure,
  us as toSeconds,
  vl as setStackTraceLimit,
  wt as mapBothEager,
  xl as NodeInspectSymbol,
  yl as BaseProto,
  yu as isUnknown,
  z as failCauseSync,
  zc as none,
  zi as IllegalArgumentError,
  zl as strictEqual,
} from "./Effect-JLyBLa-C.mjs";
import { r as currentTimeMillis } from "./Clock-jfEipopP.mjs";
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Tuple.js
/**
 * Creates an `Equivalence` for tuples by comparing corresponding elements
 * using the provided per-position `Equivalence`s. Two tuples are equivalent
 * when all their corresponding elements are equivalent.
 *
 * **When to use**
 *
 * Use when you need an `Equivalence` to compare tuples element-by-element.
 *
 * **Details**
 *
 * This is an alias of `Equivalence.Tuple`.
 *
 * **Example** (Comparing tuples for equivalence)
 *
 * ```ts import.meta.vitest
 * import { Equivalence, Tuple } from "effect"
 *
 * const eq = Tuple.makeEquivalence([
 *   Equivalence.strictEqual<string>(),
 *   Equivalence.strictEqual<number>()
 * ])
 *
 * eq(["Alice", 30], ["Alice", 30]) // => true
 * eq(["Alice", 30], ["Bob", 30]) // => false
 * ```
 *
 * @see {@link makeOrder} – create an `Order` for tuples
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const makeEquivalence$2 = Tuple$1;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Record.js
/**
 * Determines if a mutable record is empty.
 *
 * **Example** (Checking for an empty record)
 *
 * ```ts import.meta.vitest
 * import { Record } from "effect"
 *
 * Record.isEmptyRecord({}) // => true
 * Record.isEmptyRecord({ a: 3 }) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isEmptyRecord = (self) => Object.keys(self).length === 0;
/**
 * Checks whether a given `key` exists in a record.
 *
 * **Example** (Checking key membership)
 *
 * ```ts import.meta.vitest
 * import { Record } from "effect"
 *
 * Record.has({ a: 1, b: 2 }, "a") // => true
 * Record.has(Record.empty<string>(), "c") // => false
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const has = /*#__PURE__*/ dual(2, (self, key) => Object.hasOwn(self, key));
/**
 * Maps a record into another record by applying a transformation function to each of its values.
 *
 * **Example** (Mapping record values)
 *
 * ```ts import.meta.vitest
 * import { Record } from "effect"
 *
 * const f = (n: number) => `-${n}`
 *
 * Record.map({ a: 3, b: 5 }, f) // => { a: "-3", b: "-5" }
 *
 * const g = (n: number, key: string) => `${key.toUpperCase()}-${n}`
 *
 * Record.map({ a: 3, b: 5 }, g) // => { a: "A-3", b: "B-5" }
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map$1 = /*#__PURE__*/ dual(2, (self, f) => {
  const out = { ...self };
  for (const key of keys(self)) assignProperty(out, key, f(self[key], key));
  return out;
});
/**
 * Retrieves the keys of a given record as an array.
 *
 * **Example** (Getting record keys)
 *
 * ```ts import.meta.vitest
 * import { Record } from "effect"
 *
 * Record.keys({ a: 1, b: 2, c: 3 }) // => ["a", "b", "c"]
 * ```
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const keys = (self) => Object.keys(self);
/**
 * Adds a new key-value pair or update an existing key's value in a record.
 *
 * **Example** (Setting a record value)
 *
 * ```ts import.meta.vitest
 * import { Record } from "effect"
 *
 * Record.set("a", 5)({ a: 1, b: 2 }) // => { a: 5, b: 2 }
 * Record.set("c", 5)({ a: 1, b: 2 }) // => { a: 1, b: 2, c: 5 }
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const set$2 = /*#__PURE__*/ dual(3, (self, key, value) => {
  return {
    ...self,
    [key]: value,
  };
});
/**
 * Checks whether all the keys and values in one record are also found in another record.
 * Uses the provided equivalence function to compare values.
 *
 * **Example** (Checking subrecords with a custom equivalence)
 *
 * ```ts import.meta.vitest
 * import { Equivalence, Record } from "effect"
 *
 * const isSubrecord = Record.isSubrecordBy(
 *   Equivalence.make<string>((self, that) => self.toLowerCase() === that.toLowerCase())
 * )
 *
 * const required: Record.ReadonlyRecord<string, string> = { role: "Admin" }
 * const available: Record.ReadonlyRecord<string, string> = {
 *   role: "admin",
 *   status: "active"
 * }
 *
 * isSubrecord(required, available) // => true
 * isSubrecord({ role: "Admin", status: "inactive" }, available) // => false
 * isSubrecord(required, { role: "editor", status: "active" }) // => false
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const isSubrecordBy = (equivalence) =>
  dual(2, (self, that) => {
    for (const key of keys(self))
      if (!has(that, key) || !equivalence(self[key], that[key])) return false;
    return true;
  });
/**
 * Create an `Equivalence` for records using the provided `Equivalence` for values.
 * Two records are considered equivalent if they have the same keys and their corresponding values are equivalent.
 *
 * **Example** (Comparing records with a value equivalence)
 *
 * ```ts import.meta.vitest
 * import { Equal, Record } from "effect"
 *
 * const recordEquivalence = Record.makeEquivalence(Equal.asEquivalence<number>())
 *
 * recordEquivalence({ a: 1, b: 2 }, { a: 1, b: 2 }) // => true
 * recordEquivalence({ a: 1, b: 2 }, { a: 1, b: 3 }) // => false
 * ```
 *
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const makeEquivalence$1 = (equivalence) => {
  const is = isSubrecordBy(equivalence);
  return (self, that) => is(self, that) && is(that, self);
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/BigDecimal.js
/**
 * Decimal numbers and arithmetic for cases where JavaScript `number` rounding
 * is not precise enough. A `BigDecimal` stores digits as a `bigint` plus a
 * decimal scale, which lets the module parse, compare, add, subtract, multiply,
 * divide, round, and format decimal values such as money, quantities, and
 * measurements.
 *
 * @stability stable
 * @since 2.0.0
 */
const TypeId$12 = "~effect/BigDecimal";
const BigDecimalProto = {
  [TypeId$12]: TypeId$12,
  [symbol]() {
    const normalized = normalize(this);
    return combine(string$1(String(normalized.value)), number$1(normalized.scale));
  },
  [symbol$1](that) {
    return isBigDecimal(that) && compare(this, that) === 0;
  },
  toString() {
    return `BigDecimal(${format(this)})`;
  },
  toJSON() {
    return {
      _id: "BigDecimal",
      value: String(this.value),
      scale: this.scale,
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Checks whether a given value is a `BigDecimal`.
 *
 * **When to use**
 *
 * Use to validate unknown input and narrow it to `BigDecimal`.
 *
 * **Example** (Checking BigDecimal values)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * const decimal = BigDecimal.fromNumber(123.45)
 * BigDecimal.isBigDecimal(decimal) // => false
 * BigDecimal.isBigDecimal(BigDecimal.fromStringUnsafe("123.45")) // => true
 * BigDecimal.isBigDecimal(123.45) // => false
 * BigDecimal.isBigDecimal("123.45") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isBigDecimal = (u) => hasProperty(u, TypeId$12);
/**
 * Creates a `BigDecimal` from a `bigint` value and a safe integer scale.
 *
 * **When to use**
 *
 * Use to construct a decimal directly from its unscaled integer value and
 * decimal scale.
 *
 * **Gotchas**
 *
 * Throws a `RangeError` if `scale` is not a safe integer.
 *
 * **Example** (Creating decimals from bigint and scale)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * // Create 123.45 (12345 with scale 2)
 * const decimal = BigDecimal.make(12345n, 2)
 * decimal // => BigDecimal.fromStringUnsafe("123.45")
 *
 * // Create 42 (42 with scale 0)
 * const integer = BigDecimal.make(42n, 0)
 * integer // => BigDecimal.fromBigInt(42n)
 * ```
 *
 * @see {@link fromBigInt} for constructing an integer decimal from a `bigint`
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$8 = (value, scale) => {
  if (!Number.isSafeInteger(scale))
    throw new RangeError(`Scale must be a safe integer, got ${scale}`);
  const o = Object.create(BigDecimalProto);
  o.value = value;
  o.scale = scale;
  return o;
};
const makeNormalized = (value, scale) => {
  const o = make$8(value, scale);
  o.normalized = o;
  return o;
};
const bigint0 = /*#__PURE__*/ BigInt(0);
const bigint1 = /*#__PURE__*/ BigInt(1);
const bigint10 = /*#__PURE__*/ BigInt(10);
const zero = /*#__PURE__*/ makeNormalized(bigint0, 0);
/**
 * Normalizes a given `BigDecimal` by removing trailing zeros.
 *
 * **When to use**
 *
 * Use to canonicalize decimals that have equivalent values but different
 * internal scales.
 *
 * **Example** (Normalizing trailing zeros)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * const decimal = BigDecimal.normalize(BigDecimal.fromStringUnsafe("123.00000"))
 * const decimalStorage = [decimal.value, decimal.scale] // => [123n, 0]
 *
 * const largeDecimal = BigDecimal.normalize(BigDecimal.fromStringUnsafe("12300000"))
 * const largeDecimalStorage = [largeDecimal.value, largeDecimal.scale] // => [123n, -5]
 * ```
 *
 * @see {@link format} for rendering normalized decimals as strings
 *
 * @stability stable
 * @category scaling
 * @since 2.0.0
 */
const normalize = (self) => {
  if (self.normalized === void 0) {
    if (self.value === bigint0) self.normalized = zero;
    else {
      const digits = `${self.value}`;
      let end = digits.length;
      while (digits[end - 1] === "0") end--;
      self.normalized = makeNormalized(
        BigInt(digits.slice(0, end)),
        self.scale - (digits.length - end),
      );
    }
  }
  return self.normalized;
};
const MAX_COMPARISON_SCALE_ALIGNMENT = 100;
const comparisonPowersOfTen = [bigint1];
const compareBigInt = (self, that) => (self === that ? 0 : self < that ? -1 : 1);
const compareMagnitude = (self, that) => {
  const selfDigits = `${self.value < bigint0 ? -self.value : self.value}`;
  const thatDigits = `${that.value < bigint0 ? -that.value : that.value}`;
  const exponentDifference =
    BigInt(selfDigits.length - thatDigits.length) - BigInt(self.scale) + BigInt(that.scale);
  if (exponentDifference !== bigint0) return exponentDifference < bigint0 ? -1 : 1;
  const length = Math.max(selfDigits.length, thatDigits.length);
  return String$5(selfDigits.padEnd(length, "0"), thatDigits.padEnd(length, "0"));
};
const compare = (self, that) => {
  if (self.scale === that.scale) return compareBigInt(self.value, that.value);
  const selfSign = sign(self);
  const thatSign = sign(that);
  if (selfSign !== thatSign) return selfSign < thatSign ? -1 : 1;
  if (selfSign === 0) return 0;
  const scaleDifference = self.scale - that.scale;
  const absoluteScaleDifference = Math.abs(scaleDifference);
  if (absoluteScaleDifference > MAX_COMPARISON_SCALE_ALIGNMENT)
    return selfSign === -1 ? compareMagnitude(that, self) : compareMagnitude(self, that);
  const powerOfTen = (comparisonPowersOfTen[absoluteScaleDifference] ??=
    bigint10 ** BigInt(absoluteScaleDifference));
  return scaleDifference > 0
    ? compareBigInt(self.value, that.value * powerOfTen)
    : compareBigInt(self.value * powerOfTen, that.value);
};
/**
 * Determines the sign of a given `BigDecimal`.
 *
 * **When to use**
 *
 * Use to classify a `BigDecimal` as negative, zero, or positive.
 *
 * **Example** (Reading decimal signs)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * BigDecimal.sign(BigDecimal.fromStringUnsafe("-5")) // => -1
 * BigDecimal.sign(BigDecimal.fromStringUnsafe("0")) // => 0
 * BigDecimal.sign(BigDecimal.fromStringUnsafe("5")) // => 1
 * ```
 *
 * @stability stable
 * @category math
 * @since 2.0.0
 */
const sign = (n) => (n.value === bigint0 ? 0 : n.value < bigint0 ? -1 : 1);
/**
 * Formats a `BigDecimal` as a string.
 *
 * **When to use**
 *
 * Use to render a `BigDecimal` as plain decimal text when possible.
 *
 * **Details**
 *
 * The value is normalized before formatting. Scientific notation is used when
 * the absolute value of the normalized scale is at least `16`; otherwise plain
 * decimal notation is used.
 *
 * **Example** (Formatting decimals)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * BigDecimal.format(BigDecimal.fromStringUnsafe("-5")) // => "-5"
 * BigDecimal.format(BigDecimal.fromStringUnsafe("123.456")) // => "123.456"
 * BigDecimal.format(BigDecimal.fromStringUnsafe("-0.00000123")) // => "-0.00000123"
 * ```
 *
 * @see {@link toExponential} for always rendering scientific notation
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const format = (n) => {
  const normalized = normalize(n);
  if (Math.abs(normalized.scale) >= 16) return toExponential(normalized);
  const negative = normalized.value < bigint0;
  const absolute = `${negative ? -normalized.value : normalized.value}`;
  const digits =
    normalized.scale > 0
      ? absolute.padStart(normalized.scale + 1, "0")
      : absolute.padEnd(absolute.length - normalized.scale, "0");
  const point = digits.length - normalized.scale;
  const complete =
    normalized.scale > 0 ? `${digits.slice(0, point)}.${digits.slice(point)}` : digits;
  return negative ? `-${complete}` : complete;
};
/**
 * Formats a given `BigDecimal` as a `string` in scientific notation.
 *
 * **When to use**
 *
 * Use to render a `BigDecimal` in scientific notation.
 *
 * **Example** (Formatting decimals exponentially)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * BigDecimal.toExponential(BigDecimal.make(123456n, -5)) // => "1.23456e+10"
 * ```
 *
 * @see {@link format} for plain decimal formatting when possible
 *
 * @stability stable
 * @category converting
 * @since 3.11.0
 */
const toExponential = (n) => {
  if (isZero(n)) return "0e+0";
  const normalized = normalize(n);
  const digits = `${normalized.value}`;
  const point = normalized.value < bigint0 ? 2 : 1;
  const head = digits.slice(0, point);
  const tail = digits.slice(point);
  const exp = tail.length - normalized.scale;
  return `${head}${tail === "" ? "" : `.${tail}`}e${exp >= 0 ? "+" : ""}${exp}`;
};
/**
 * Checks whether a given `BigDecimal` is `0`.
 *
 * **When to use**
 *
 * Use to test whether a `BigDecimal` is exactly zero.
 *
 * **Example** (Checking zero decimals)
 *
 * ```ts import.meta.vitest
 * import { BigDecimal } from "effect"
 *
 * BigDecimal.isZero(BigDecimal.fromStringUnsafe("0")) // => true
 * BigDecimal.isZero(BigDecimal.fromStringUnsafe("1")) // => false
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const isZero = (n) => n.value === bigint0;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Data.js
/**
 * Provides a base class for immutable data types.
 *
 * **When to use**
 *
 * Use when you need a lightweight immutable value type with `.pipe()` support.
 *
 * **Details**
 *
 * Extend `Class` with a type parameter to declare fields. The constructor
 * accepts those fields as a single object argument. When there are no fields
 * the argument is optional. Instances are `Readonly` and `Pipeable`.
 *
 * **Example** (Defining a value class)
 *
 * ```ts import.meta.vitest
 * import { Data, Equal } from "effect"
 *
 * class Person extends Data.Class<{ readonly name: string }> {}
 *
 * Equal.equals(new Person({ name: "Mike" }), new Person({ name: "Mike" })) // => true
 * ```
 *
 * @see {@link TaggedClass} — adds a `_tag` field
 * @see {@link Error} — yieldable error variant
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const Class$1 = class extends Class$2 {
  constructor(props) {
    super();
    if (props) assignProperties(this, props);
  }
};
/**
 * Provides a base class for immutable data types with a `_tag` discriminator.
 *
 * **When to use**
 *
 * Use when you need a single-variant tagged type or an ad-hoc discriminator.
 *
 * **Details**
 *
 * Like {@link Class}, but the resulting instances also carry a
 * `readonly _tag: Tag` property. The `_tag` is excluded from the constructor
 * argument.
 *
 * **Example** (Defining a tagged class)
 *
 * ```ts import.meta.vitest
 * import { Data } from "effect"
 *
 * class Person extends Data.TaggedClass("Person")<{
 *   readonly name: string
 * }> {}
 *
 * new Person({ name: "Mike" })._tag // => "Person"
 * ```
 *
 * @see {@link Class} — without a `_tag`
 * @see {@link TaggedError} — tagged error variant
 * @see {@link TaggedEnum} — multi-variant unions
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const TaggedClass = (tag) =>
  class extends Class$1 {
    _tag = tag;
  };
/**
 * Creates constructors and matchers for a `TaggedEnum` type.
 *
 * **When to use**
 *
 * Use when you model a closed union with plain data objects and want
 * construction, tag checks, and exhaustive matching from the same definition.
 *
 * **Details**
 *
 * Returns an object with:
 * - One constructor per variant (keyed by tag name)
 * - `$is(tag)` — returns a type-guard function that checks only the `_tag` field
 * - `$match` — exhaustive pattern matching (data-first or data-last)
 *
 * **Gotchas**
 *
 * - Constructors produce **plain objects**, not class instances.
 * - `$is(tag)` only checks the `_tag` field, not the full structure. It relies
 *   on the tag being globally unique and the value being produced by your
 *   constructors. For untrusted input, validate with the `Schema` module first.
 *
 * **Example** (Creating and matching tagged enum values)
 *
 * ```ts import.meta.vitest
 * import { Data } from "effect"
 *
 * type HttpError = Data.TaggedEnum<{
 *   BadRequest: { readonly message: string }
 *   NotFound: { readonly url: string }
 * }>
 *
 * const { BadRequest, NotFound, $is, $match } = Data.taggedEnum<HttpError>()
 *
 * const err = NotFound({ url: "/missing" })
 *
 * $is("NotFound")(err) // => true
 *
 * $match(err, {
 *   BadRequest: (e) => e.message,
 *   NotFound: (e) => `${e.url} not found`
 * }) // => "/missing not found"
 * ```
 *
 * **Example** (Defining a generic tagged enum)
 *
 * ```ts import.meta.vitest
 * import { Data } from "effect"
 *
 * type MyResult<E, A> = Data.TaggedEnum<{
 *   Failure: { readonly error: E }
 *   Success: { readonly value: A }
 * }>
 * interface MyResultDef extends Data.TaggedEnum.WithGenerics<2> {
 *   readonly taggedEnum: MyResult<this["A"], this["B"]>
 * }
 * const { Failure, Success } = Data.taggedEnum<MyResultDef>()
 *
 * const ok = Success({ value: 42 })
 * // ok: { readonly _tag: "Success"; readonly value: number }
 * ok // => { value: 42, _tag: "Success" }
 * ```
 *
 * @see {@link TaggedEnum} — the type-level companion
 * @see {@link TaggedEnum.Constructor} — the returned object type
 * @see {@link TaggedEnum.WithGenerics} — generic enum support
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const taggedEnum = () =>
  new Proxy(
    {},
    {
      get(_target, tag, _receiver) {
        if (tag === "$is") return isTagged;
        else if (tag === "$match") return taggedMatch;
        return (props) => ({
          ...props,
          _tag: tag,
        });
      },
    },
  );
function taggedMatch() {
  if (arguments.length === 1) {
    const cases = arguments[0];
    return function (value) {
      return cases[value._tag](value);
    };
  }
  const value = arguments[0];
  return arguments[1][value._tag](value);
}
/**
 * Provides a base class for yieldable errors.
 *
 * **When to use**
 *
 * Use when you need yieldable errors that do **not** need tag-based
 * discrimination.
 *
 * **Details**
 *
 * Extends `Cause.YieldableError`, so instances can be yielded inside
 * `Effect.gen` to fail the enclosing effect. Fields are passed as a single
 * object; when there are no fields the argument is optional. If a `message`
 * field is provided, it becomes the error's `.message`.
 *
 * **Example** (Defining a yieldable error)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Exit } from "effect"
 *
 * class NetworkError extends Data.Error<{
 *   readonly code: number
 *   readonly message: string
 * }> {}
 *
 * const program = Effect.gen(function*() {
 *   return yield* new NetworkError({ code: 500, message: "timeout" })
 * })
 *
 * Effect.runSync(Effect.exit(program)) // => Exit.fail(new NetworkError({ code: 500, message: "timeout" }))
 * ```
 *
 * @see {@link TaggedError} — adds a `_tag` for `Effect.catchTag`
 * @see {@link Class} — non-error data class
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const Error$2 = Error$3;
/**
 * Creates a tagged error class with a `_tag` discriminator.
 *
 * **When to use**
 *
 * Use when you need domain errors with discriminated-union handling.
 *
 * **Details**
 *
 * Like {@link Error}, but instances also carry a `readonly _tag` property,
 * enabling `Effect.catchTag` and `Effect.catchTags` for tag-based recovery.
 * The `_tag` is excluded from the constructor argument. Yielding an instance
 * inside `Effect.gen` fails the effect with this error.
 *
 * **Example** (Recovering by tag)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class NotFound extends Data.TaggedError("NotFound")<{
 *   readonly resource: string
 * }> {}
 *
 * class Forbidden extends Data.TaggedError("Forbidden")<{
 *   readonly reason: string
 * }> {}
 *
 * const program = Effect.gen(function*() {
 *   return yield* new NotFound({ resource: "/users/42" })
 * })
 *
 * const recovered = program.pipe(
 *   Effect.catchTag("NotFound", (e) =>
 *     Effect.succeed(`missing: ${e.resource}`))
 * )
 *
 * await Effect.runPromise(recovered) // => "missing: /users/42"
 * ```
 *
 * @see {@link Error} — without a `_tag`
 * @see {@link TaggedClass} — tagged class that is not an error
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const TaggedError$1 = TaggedError$2;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/encoding/EncodingError.js
/**
 * Shared error type for encoding and decoding operations.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Type identifier stored on `EncodingError` values and used by
 * `isEncodingError`.
 *
 * **When to use**
 *
 * Use when implementing low-level `EncodingError`-compatible values that need
 * to carry the runtime marker.
 *
 * **Details**
 *
 * This marker is part of the runtime representation of `EncodingError`. Prefer
 * `isEncodingError` when narrowing unknown values.
 *
 * @see {@link isEncodingError} for the public guard that checks this marker
 *
 * @stability stable
 * @category type IDs
 * @since 4.0.0
 */
const EncodingErrorTypeId = "~effect/encoding/EncodingError";
/**
 * Error returned when an encoding or decoding operation cannot process its input.
 *
 * **When to use**
 *
 * Use when you need to handle or inspect failures from encoding or decoding
 * operations.
 *
 * **Details**
 *
 * The error records whether the failure happened during encoding or decoding,
 * which encoding module reported it, the original input, and a human-readable
 * message.
 *
 * @see {@link isEncodingError} for checking whether a value is an EncodingError
 *
 * @stability stable
 * @category errors
 * @since 4.0.0
 */
var EncodingError = class extends /*#__PURE__*/ TaggedError$1("EncodingError") {
  /**
   * Marks this value as an encoding or decoding error for runtime guards.
   *
   * **When to use**
   *
   * Use to identify `EncodingError` instances through `isEncodingError`.
   *
   * @since 4.0.0
   */
  [EncodingErrorTypeId] = EncodingErrorTypeId;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/dateTime.js
/** @internal */
const TypeId$11 = "~effect/DateTime";
/** @internal */
const TimeZoneTypeId = "~effect/DateTime/TimeZone";
const Proto$4 = {
  [TypeId$11]: TypeId$11,
  pipe() {
    return pipeArguments(this, arguments);
  },
  [NodeInspectSymbol]() {
    return this.toString();
  },
  toJSON() {
    return toDateUtc$1(this).toJSON();
  },
};
const ProtoUtc = {
  ...Proto$4,
  _tag: "Utc",
  [symbol]() {
    return number$1(this.epochMilliseconds);
  },
  [symbol$1](that) {
    return (
      isDateTime$1(that) && that._tag === "Utc" && this.epochMilliseconds === that.epochMilliseconds
    );
  },
  toString() {
    return `DateTime.Utc(${toDateUtc$1(this).toJSON()})`;
  },
};
const ProtoZoned = {
  ...Proto$4,
  _tag: "Zoned",
  [symbol]() {
    return combine(number$1(this.epochMilliseconds))(hash(this.zone));
  },
  [symbol$1](that) {
    return (
      isDateTime$1(that) &&
      that._tag === "Zoned" &&
      this.epochMilliseconds === that.epochMilliseconds &&
      equals(this.zone, that.zone)
    );
  },
  toString() {
    return `DateTime.Zoned(${formatIsoZoned(this)})`;
  },
};
const ProtoTimeZone = {
  [TimeZoneTypeId]: TimeZoneTypeId,
  [NodeInspectSymbol]() {
    return this.toString();
  },
};
const ProtoTimeZoneNamed = {
  ...ProtoTimeZone,
  _tag: "Named",
  [symbol]() {
    return string$1(`Named:${this.id}`);
  },
  [symbol$1](that) {
    return isTimeZone(that) && that._tag === "Named" && this.id === that.id;
  },
  toString() {
    return `TimeZone.Named(${this.id})`;
  },
  toJSON() {
    return {
      _id: "TimeZone",
      _tag: "Named",
      id: this.id,
    };
  },
};
const ProtoTimeZoneOffset = {
  ...ProtoTimeZone,
  _tag: "Offset",
  [symbol]() {
    return string$1(`Offset:${this.offset}`);
  },
  [symbol$1](that) {
    return isTimeZone(that) && that._tag === "Offset" && this.offset === that.offset;
  },
  toString() {
    return `TimeZone.Offset(${offsetToString(this.offset)})`;
  },
  toJSON() {
    return {
      _id: "TimeZone",
      _tag: "Offset",
      offset: this.offset,
    };
  },
};
/** @internal */
const makeZonedProto = (epochMillis, zone, partsUtc) => {
  const self = Object.create(ProtoZoned);
  self.epochMilliseconds = epochMillis;
  self.zone = zone;
  Object.defineProperty(self, "partsUtc", {
    value: partsUtc,
    enumerable: false,
    writable: true,
  });
  Object.defineProperty(self, "adjustedEpochMillis", {
    value: void 0,
    enumerable: false,
    writable: true,
  });
  Object.defineProperty(self, "partsAdjusted", {
    value: void 0,
    enumerable: false,
    writable: true,
  });
  return self;
};
/** @internal */
const isDateTime$1 = (u) => hasProperty(u, TypeId$11);
const isDateTimeArgs = (args) => isDateTime$1(args[0]);
/** @internal */
const isTimeZone = (u) => hasProperty(u, TimeZoneTypeId);
/** @internal */
const isUtc$1 = (self) => self._tag === "Utc";
/** @internal */
const isZoned = (self) => self._tag === "Zoned";
/** @internal */
const Equivalence$3 = /*#__PURE__*/ make$10((a, b) => a.epochMilliseconds === b.epochMilliseconds);
/** @internal */
const Order$1 = /*#__PURE__*/ make$9((self, that) =>
  self.epochMilliseconds < that.epochMilliseconds
    ? -1
    : self.epochMilliseconds > that.epochMilliseconds
      ? 1
      : 0,
);
const makeUtc = (epochMillis) => {
  const self = Object.create(ProtoUtc);
  self.epochMilliseconds = epochMillis;
  Object.defineProperty(self, "partsUtc", {
    value: void 0,
    enumerable: false,
    writable: true,
  });
  return self;
};
/** @internal */
const fromDateUnsafe = (date) => {
  const epochMillis = date.getTime();
  if (Number.isNaN(epochMillis)) throw new IllegalArgumentError("Invalid date");
  return makeUtc(epochMillis);
};
/** @internal */
const makeUnsafe$1 = (input) => {
  if (isDateTime$1(input)) return input;
  else if (input instanceof Date) return fromDateUnsafe(input);
  else if (typeof input === "object") {
    if ("epochMilliseconds" in input) return fromDateUnsafe(new Date(input.epochMilliseconds));
    const date = /* @__PURE__ */ new Date(0);
    setPartsDate(date, input);
    return fromDateUnsafe(date);
  } else if (typeof input === "string" && !hasZone(input))
    return fromDateUnsafe(/* @__PURE__ */ new Date(input + "Z"));
  return fromDateUnsafe(new Date(input));
};
/**
 * Detects whether a date string already contains timezone info.
 * Without a zone, `new Date("2024-01-01T12:00:00")` is parsed as local time,
 * so `makeUnsafe` appends "Z" to force UTC interpretation.
 * This check prevents appending "Z" to strings that already have a zone
 * (e.g. "2024-01-01T12:00:00Z", "...+05:30", "...GMT"), which would produce invalid dates.
 */
const hasZone = (input) => /Z|GMT|[+-]\d{2}$|[+-]\d{2}:?\d{2}$|\]$/.test(input);
const minEpochMillis = -864e13 + 432e5;
const maxEpochMillis = 864e13 - 504e5;
/** @internal */
const makeZonedUnsafe = (input, options) => {
  let timeZoneOption = options?.timeZone;
  if (timeZoneOption === void 0 && isDateTime$1(input) && isZoned(input)) return input;
  const self = makeUnsafe$1(input);
  if (self.epochMilliseconds < minEpochMillis || self.epochMilliseconds > maxEpochMillis)
    throw new RangeError(`Epoch millis out of range: ${self.epochMilliseconds}`);
  if (timeZoneOption === void 0 && typeof input === "object" && "timeZoneId" in input)
    timeZoneOption = input.timeZoneId;
  let zone;
  if (timeZoneOption === void 0) {
    const offset = new Date(self.epochMilliseconds).getTimezoneOffset() * -60 * 1e3;
    zone = zoneMakeOffset(offset);
  } else if (isTimeZone(timeZoneOption)) zone = timeZoneOption;
  else if (typeof timeZoneOption === "number") zone = zoneMakeOffset(timeZoneOption);
  else {
    const parsedZone = zoneFromString(timeZoneOption);
    if (isNone(parsedZone)) throw new IllegalArgumentError(`Invalid time zone: ${timeZoneOption}`);
    zone = parsedZone.value;
  }
  if (options?.adjustForTimeZone !== true)
    return makeZonedProto(self.epochMilliseconds, zone, self.partsUtc);
  return makeZonedFromAdjusted(
    self.epochMilliseconds,
    zone,
    options?.disambiguation ?? "compatible",
  );
};
/** @internal */
const makeZoned$1 = /*#__PURE__*/ liftThrowable(makeZonedUnsafe);
/** @internal */
const make$7 = /*#__PURE__*/ liftThrowable(makeUnsafe$1);
/** @internal */
const now$1 = /*#__PURE__*/ map$2(currentTimeMillis, makeUtc);
/** @internal */
const nowUnsafe$1 = () => makeUtc(Date.now());
/** @internal */
const toUtc$1 = (self) => makeUtc(self.epochMilliseconds);
/** @internal */
const setZone$1 = /*#__PURE__*/ dual(isDateTimeArgs, (self, zone, options) =>
  options?.adjustForTimeZone === true
    ? makeZonedFromAdjusted(self.epochMilliseconds, zone, options?.disambiguation ?? "compatible")
    : makeZonedProto(self.epochMilliseconds, zone, self.partsUtc),
);
const validZoneCache = /*#__PURE__*/ new Map();
const formatOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "longOffset",
  fractionalSecondDigits: 3,
  hourCycle: "h23",
};
const zoneMakeIntl = (format) => {
  const zoneId = format.resolvedOptions().timeZone;
  const cached = validZoneCache.get(zoneId);
  if (cached !== void 0) return cached;
  const zone = Object.create(ProtoTimeZoneNamed);
  zone.id = zoneId;
  zone.format = format;
  validZoneCache.set(zoneId, zone);
  return zone;
};
/** @internal */
const zoneMakeNamedUnsafe = (zoneId) => {
  const cached = validZoneCache.get(zoneId);
  if (cached !== void 0) return cached;
  try {
    const zone = zoneMakeIntl(
      new Intl.DateTimeFormat("en-US", {
        ...formatOptions,
        timeZone: zoneId,
      }),
    );
    validZoneCache.set(zoneId, zone);
    return zone;
  } catch {
    throw new IllegalArgumentError(`Invalid time zone: ${zoneId}`);
  }
};
/** @internal */
const zoneMakeOffset = (offset) => {
  const zone = Object.create(ProtoTimeZoneOffset);
  zone.offset = offset;
  return zone;
};
/** @internal */
const zoneMakeNamed = /*#__PURE__*/ liftThrowable(zoneMakeNamedUnsafe);
/** @internal */
const zoneMakeLocal$1 = () => zoneMakeIntl(new Intl.DateTimeFormat("en-US", formatOptions));
const offsetZoneRegExp = /^(?:GMT|[+-])/;
/** @internal */
const zoneFromString = (zone) => {
  if (offsetZoneRegExp.test(zone)) {
    const offset = parseOffset(zone);
    return offset === null ? none() : some(zoneMakeOffset(offset));
  }
  return zoneMakeNamed(zone);
};
/** @internal */
const setZoneNamed$1 = /*#__PURE__*/ dual(isDateTimeArgs, (self, zoneId, options) =>
  map$3(zoneMakeNamed(zoneId), (zone) => setZone$1(self, zone, options)),
);
/** @internal */
const distance$1 = /*#__PURE__*/ dual(2, (self, other) =>
  millis(toEpochMillis$1(other) - toEpochMillis$1(self)),
);
/** @internal */
const min$1 = /*#__PURE__*/ min$2(Order$1);
/** @internal */
const isGreaterThan$2 = /*#__PURE__*/ isGreaterThan$3(Order$1);
/** @internal */
const isGreaterThanOrEqualTo$2 = /*#__PURE__*/ isGreaterThanOrEqualTo$3(Order$1);
/** @internal */
const isLessThan$2 = /*#__PURE__*/ isLessThan$3(Order$1);
/** @internal */
const isLessThanOrEqualTo$2 = /*#__PURE__*/ isLessThanOrEqualTo$3(Order$1);
/** @internal */
const toDateUtc$1 = (self) => new Date(self.epochMilliseconds);
/** @internal */
const toDate$1 = (self) => {
  if (self._tag === "Utc") return new Date(self.epochMilliseconds);
  else if (self.zone._tag === "Offset") return new Date(self.epochMilliseconds + self.zone.offset);
  else if (self.adjustedEpochMilliseconds !== void 0)
    return new Date(self.adjustedEpochMilliseconds);
  const parts = self.zone.format
    .formatToParts(self.epochMilliseconds)
    .filter((_) => _.type !== "literal");
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(Number(parts[2].value), Number(parts[0].value) - 1, Number(parts[1].value));
  date.setUTCHours(
    Number(parts[3].value),
    Number(parts[4].value),
    Number(parts[5].value),
    parts[6]?.type === "fractionalSecond"
      ? Number(parts[6].value)
      : ((self.epochMilliseconds % 1e3) + 1e3) % 1e3,
  );
  self.adjustedEpochMilliseconds = date.getTime();
  return date;
};
/** @internal */
const zonedOffset = (self) => {
  return toDate$1(self).getTime() - toEpochMillis$1(self);
};
const offsetToString = (offset) => {
  const abs = Math.abs(offset);
  let hours = Math.floor(abs / 36e5);
  let minutes = Math.round((abs % 36e5) / 6e4);
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  return `${offset < 0 ? "-" : "+"}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
/** @internal */
const zonedOffsetIso = (self) => offsetToString(zonedOffset(self));
/** @internal */
const toEpochMillis$1 = (self) => self.epochMilliseconds;
const dateToParts = (date) => ({
  millisecond: date.getUTCMilliseconds(),
  second: date.getUTCSeconds(),
  minute: date.getUTCMinutes(),
  hour: date.getUTCHours(),
  day: date.getUTCDate(),
  weekDay: date.getUTCDay(),
  month: date.getUTCMonth() + 1,
  year: date.getUTCFullYear(),
});
/** @internal */
const toParts$1 = (self) => {
  if (self._tag === "Utc") return toPartsUtc$1(self);
  else if (self.partsAdjusted !== void 0) return self.partsAdjusted;
  self.partsAdjusted = withDate(self, dateToParts);
  return self.partsAdjusted;
};
/** @internal */
const toPartsUtc$1 = (self) => {
  if (self.partsUtc !== void 0) return self.partsUtc;
  self.partsUtc = withDateUtc(self, dateToParts);
  return self.partsUtc;
};
const setPartsDate = (date, parts) => {
  if (parts.year !== void 0 || parts.month !== void 0 || parts.day !== void 0)
    date.setUTCFullYear(
      parts.year ?? date.getUTCFullYear(),
      parts.month !== void 0 ? parts.month - 1 : date.getUTCMonth(),
      parts.day ?? date.getUTCDate(),
    );
  if (parts.weekDay !== void 0) {
    const diff = parts.weekDay - date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + diff);
  }
  if (parts.hour !== void 0) date.setUTCHours(parts.hour);
  if (parts.minute !== void 0) date.setUTCMinutes(parts.minute);
  if (parts.second !== void 0) date.setUTCSeconds(parts.second);
  if (parts.millisecond !== void 0) date.setUTCMilliseconds(parts.millisecond);
};
/** @internal */
const setParts$1 = /*#__PURE__*/ dual(2, (self, parts) =>
  mutate(self, (date) => setPartsDate(date, parts)),
);
const constDayMillis = 864e5;
const makeZonedFromAdjusted = (adjustedMillis, zone, disambiguation) => {
  if (zone._tag === "Offset") return makeZonedProto(adjustedMillis - zone.offset, zone);
  const beforeOffset = calculateNamedOffset(adjustedMillis - constDayMillis, adjustedMillis, zone);
  const afterOffset = calculateNamedOffset(adjustedMillis + constDayMillis, adjustedMillis, zone);
  if (beforeOffset === afterOffset) return makeZonedProto(adjustedMillis - beforeOffset, zone);
  const isForwards = beforeOffset < afterOffset;
  const transitionMillis = beforeOffset - afterOffset;
  if (isForwards) {
    if (calculateNamedOffset(adjustedMillis - afterOffset, adjustedMillis, zone) === afterOffset)
      return makeZonedProto(adjustedMillis - afterOffset, zone);
    const before = makeZonedProto(adjustedMillis - beforeOffset, zone);
    if (adjustedMillis !== toDate$1(before).getTime())
      switch (disambiguation) {
        case "reject": {
          const formatted = new Date(adjustedMillis).toISOString();
          throw new RangeError(`Gap time: ${formatted} does not exist in time zone ${zone.id}`);
        }
        case "earlier":
          return makeZonedProto(adjustedMillis - afterOffset, zone);
        case "compatible":
        case "later":
          return before;
      }
    return before;
  }
  if (calculateNamedOffset(adjustedMillis - beforeOffset, adjustedMillis, zone) === beforeOffset) {
    if (disambiguation === "earlier" || disambiguation === "compatible")
      return makeZonedProto(adjustedMillis - beforeOffset, zone);
    if (
      calculateNamedOffset(
        adjustedMillis - beforeOffset + transitionMillis,
        adjustedMillis + transitionMillis,
        zone,
      ) === beforeOffset
    )
      return makeZonedProto(adjustedMillis - beforeOffset, zone);
    if (disambiguation === "reject") {
      const formatted = new Date(adjustedMillis).toISOString();
      throw new RangeError(`Ambiguous time: ${formatted} occurs twice in time zone ${zone.id}`);
    }
  }
  return makeZonedProto(adjustedMillis - afterOffset, zone);
};
const offsetRegExp = /([+-])(\d{2}):(\d{2})$/;
const parseOffset = (offset) => {
  const match = offsetRegExp.exec(offset);
  if (match === null) return null;
  const [, sign, hours, minutes] = match;
  return (sign === "+" ? 1 : -1) * (Number(hours) * 60 + Number(minutes)) * 60 * 1e3;
};
const calculateNamedOffset = (utcMillis, adjustedMillis, zone) => {
  const offset =
    zone.format.formatToParts(utcMillis).find((_) => _.type === "timeZoneName")?.value ?? "";
  if (offset === "GMT") return 0;
  const result = parseOffset(offset);
  if (result === null) return zonedOffset(makeZonedProto(adjustedMillis, zone));
  return result;
};
/** @internal */
const mutate = /*#__PURE__*/ dual(isDateTimeArgs, (self, f, options) => {
  if (self._tag === "Utc") {
    const date = toDateUtc$1(self);
    f(date);
    return makeUtc(date.getTime());
  }
  const adjustedDate = toDate$1(self);
  const newAdjustedDate = new Date(adjustedDate.getTime());
  f(newAdjustedDate);
  return makeZonedFromAdjusted(
    newAdjustedDate.getTime(),
    self.zone,
    options?.disambiguation ?? "compatible",
  );
});
/** @internal */
const mutateUtc = /*#__PURE__*/ dual(2, (self, f) =>
  mapEpochMillis(self, (millis) => {
    const date = new Date(millis);
    f(date);
    return date.getTime();
  }),
);
/** @internal */
const mapEpochMillis = /*#__PURE__*/ dual(2, (self, f) => {
  const millis = f(toEpochMillis$1(self));
  return self._tag === "Utc" ? makeUtc(millis) : makeZonedProto(millis, self.zone);
});
/** @internal */
const withDate = /*#__PURE__*/ dual(2, (self, f) => f(toDate$1(self)));
/** @internal */
const withDateUtc = /*#__PURE__*/ dual(2, (self, f) => f(toDateUtc$1(self)));
/** @internal */
const addDuration$1 = /*#__PURE__*/ dual(2, (self, duration) =>
  mapEpochMillis(self, (millis) => millis + toMillis(fromInputUnsafe(duration))),
);
/** @internal */
const subtractDuration$1 = /*#__PURE__*/ dual(2, (self, duration) =>
  mapEpochMillis(self, (millis) => millis - toMillis(fromInputUnsafe(duration))),
);
/** @internal */
const add$1 = /*#__PURE__*/ dual(2, (self, parts) => {
  const shifted = mutateUtc(self, (date) => {
    if (parts.milliseconds) date.setTime(date.getTime() + parts.milliseconds);
    if (parts.seconds) date.setTime(date.getTime() + parts.seconds * 1e3);
    if (parts.minutes) date.setTime(date.getTime() + parts.minutes * 60 * 1e3);
    if (parts.hours) date.setTime(date.getTime() + parts.hours * 60 * 60 * 1e3);
  });
  if (!parts.days && !parts.weeks && !parts.months && !parts.years) return shifted;
  return mutate(shifted, (date) => {
    if (parts.days) date.setUTCDate(date.getUTCDate() + parts.days);
    if (parts.weeks) date.setUTCDate(date.getUTCDate() + parts.weeks * 7);
    if (parts.months) {
      const day = date.getUTCDate();
      date.setUTCMonth(date.getUTCMonth() + parts.months + 1, 0);
      if (day < date.getUTCDate()) date.setUTCDate(day);
    }
    if (parts.years) {
      const day = date.getUTCDate();
      const month = date.getUTCMonth();
      date.setUTCFullYear(date.getUTCFullYear() + parts.years, month + 1, 0);
      if (day < date.getUTCDate()) date.setUTCDate(day);
    }
  });
});
/** @internal */
const subtract$1 = /*#__PURE__*/ dual(2, (self, parts) => {
  const newParts = {};
  for (const key in parts) newParts[key] = -1 * parts[key];
  return add$1(self, newParts);
});
/** @internal */
const formatIso$1 = (self) => toDateUtc$1(self).toISOString();
/** @internal */
const formatIsoOffset = (self) => {
  const date = toDate$1(self);
  return self._tag === "Utc"
    ? date.toISOString()
    : `${date.toISOString().slice(0, -1)}${zonedOffsetIso(self)}`;
};
/** @internal */
const formatIsoZoned = (self) =>
  self.zone._tag === "Offset" ? formatIsoOffset(self) : `${formatIsoOffset(self)}[${self.zone.id}]`;
globalThis.String;
/**
 * Converts a string to lowercase.
 *
 * **Example** (Converting strings to lowercase)
 *
 * ```ts import.meta.vitest
 * import { pipe, String } from "effect"
 *
 * pipe("A", String.toLowerCase) // => "a"
 * String.toLowerCase("HELLO") // => "hello"
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 2.0.0
 */
const toLowerCase$2 = (self) => self.toLowerCase();
/**
 * Removes whitespace from both ends of a string.
 *
 * **Example** (Trimming whitespace)
 *
 * ```ts import.meta.vitest
 * import { String } from "effect"
 *
 * String.trim(" a ") // => "a"
 * String.trim("  hello world  ") // => "hello world"
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 2.0.0
 */
const trim$2 = (self) => self.trim();
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/DateTime.js
/**
 * Checks whether a value is a `DateTime`.
 *
 * **When to use**
 *
 * Use to narrow an unknown value before treating it as a `DateTime`.
 *
 * @see {@link isUtc} for narrowing a known `DateTime` to UTC
 * @see {@link isZoned} for narrowing a known `DateTime` to zoned
 *
 * @stability stable
 * @category guards
 * @since 3.6.0
 */
const isDateTime = isDateTime$1;
/**
 * Checks whether a `DateTime` is a UTC `DateTime` (no time zone information).
 *
 * **When to use**
 *
 * Use to narrow a `DateTime` before passing it to code that requires a UTC
 * value without an associated time zone.
 *
 * @see {@link isZoned} for narrowing to zoned date-times
 * @see {@link match} for handling both UTC and zoned cases
 *
 * @stability stable
 * @category guards
 * @since 3.6.0
 */
const isUtc = isUtc$1;
/**
 * Provides an `Equivalence` for comparing two `DateTime` values for equality.
 *
 * **Details**
 *
 * Two `DateTime` values are considered equivalent if they represent the same
 * point in time, regardless of their time zone.
 *
 * **Example** (Comparing DateTime values for equivalence)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const utc = DateTime.makeUnsafe("2024-01-01T12:00:00Z")
 * const zoned = DateTime.makeZonedUnsafe("2024-01-01T12:00:00Z", {
 *   timeZone: "Europe/London"
 * })
 *
 * DateTime.Equivalence(utc, zoned) // => true
 * ```
 *
 * @stability stable
 * @category instances
 * @since 3.6.0
 */
const Equivalence$2 = Equivalence$3;
/**
 * Provides an `Order` for comparing and sorting `DateTime` values.
 *
 * **Details**
 *
 * `DateTime` values are ordered by their epoch milliseconds, so earlier times
 * come before later times regardless of time zone.
 *
 * **Example** (Sorting DateTime values chronologically)
 *
 * ```ts import.meta.vitest
 * import { Array, DateTime } from "effect"
 *
 * const dates = [
 *   DateTime.makeUnsafe("2024-03-01"),
 *   DateTime.makeUnsafe("2024-01-01"),
 *   DateTime.makeUnsafe("2024-02-01")
 * ]
 *
 * Array.sort(dates, DateTime.Order).map(DateTime.formatIsoDateUtc) // => ["2024-01-01", "2024-02-01", "2024-03-01"]
 * ```
 *
 * @stability stable
 * @category instances
 * @since 3.6.0
 */
const Order = Order$1;
/**
 * Create a `DateTime` from supported input values.
 *
 * **When to use**
 *
 * Use when creating a `DateTime` from trusted input and construction failures
 * should throw an `IllegalArgumentError` instead of returning `Option.none`.
 *
 * **Details**
 *
 * - A `DateTime`
 * - A `Date` instance (invalid dates will throw an `IllegalArgumentError`)
 * - The `number` of milliseconds since the Unix epoch
 * - An object with the parts of a date
 * - A `string` that can be parsed by `Date.parse`
 *
 * **Example** (Creating DateTime values unsafely)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * // from Date
 * DateTime.makeUnsafe(new Date("2024-01-01T12:00:00Z")) // => DateTime.makeUnsafe("2024-01-01T12:00:00Z")
 *
 * // from parts
 * DateTime.makeUnsafe({ year: 2024 }) // => DateTime.makeUnsafe("2024-01-01T00:00:00Z")
 *
 * // from string
 * DateTime.makeUnsafe("2024-01-01") // => DateTime.makeUnsafe("2024-01-01T00:00:00Z")
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeUnsafe = makeUnsafe$1;
/**
 * Creates a `DateTime.Zoned` safely from an input and a time zone.
 *
 * **Details**
 *
 * By default, the input is interpreted as a UTC instant and the time zone is
 * attached without changing that instant. When `adjustForTimeZone` is `true`,
 * the input is interpreted as wall-clock time in the target zone.
 *
 * When `adjustForTimeZone` is `true`, `disambiguation` controls
 * daylight-saving gaps and repeated times:
 *
 * - `"compatible"` (default): chooses the earlier occurrence for repeated
 *   times and the later interpretation for gaps
 * - `"earlier"`: chooses the earlier possible instant
 * - `"later"`: chooses the later possible instant
 * - `"reject"`: rejects ambiguous or nonexistent wall-clock times
 *
 * Returns `Some` when construction succeeds, or `None` when the input, time
 * zone, or disambiguation cannot be resolved.
 *
 * **Example** (Creating optional zoned DateTime values)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Option } from "effect"
 *
 * const result = DateTime.makeZoned("2024-06-15T14:30:00Z", {
 *   timeZone: "Europe/London"
 * })
 *
 * result.pipe(Option.map(DateTime.formatIsoZoned)) // => Option.some("2024-06-15T15:30:00.000+01:00[Europe/London]")
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.6.0
 */
const makeZoned = makeZoned$1;
/**
 * Creates a `DateTime` safely from supported input values.
 *
 * **Details**
 *
 * - A `DateTime`
 * - A JavaScript `Date`
 * - The number of milliseconds since the Unix epoch
 * - An object with date and time parts
 * - A string that can be parsed as a date
 *
 * Returns `Some` with the constructed `DateTime` when the input is valid, or
 * `None` when construction would fail, including invalid `Date` instances or
 * unparseable strings.
 *
 * **Example** (Creating optional DateTime values)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Option } from "effect"
 *
 * // from Date
 * DateTime.make(new Date("2024-01-01T12:00:00Z")) // => Option.some(DateTime.makeUnsafe("2024-01-01T12:00:00Z"))
 *
 * // from parts
 * DateTime.make({ year: 2024 }) // => Option.some(DateTime.makeUnsafe("2024-01-01T00:00:00Z"))
 *
 * // from string
 * DateTime.make("2024-01-01") // => Option.some(DateTime.makeUnsafe("2024-01-01T00:00:00Z"))
 *
 * DateTime.make("not a date") // => Option.none()
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.6.0
 */
const make$6 = make$7;
/**
 * Gets the current time using the `Clock` service and converts it to a `DateTime`.
 *
 * **Example** (Getting the current DateTime)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Effect } from "effect"
 * import { TestClock } from "effect/testing"
 *
 * await Effect.runPromise(Effect.map(DateTime.now, DateTime.isDateTime)) // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.6.0
 */
const now = now$1;
/**
 * Gets the current time using `Date.now`.
 *
 * **When to use**
 *
 * Use when synchronous wall-clock access outside an Effect program is
 * acceptable and testability through the `Clock` service is not needed.
 *
 * **Details**
 *
 * This is a synchronous version of `now` that directly uses `Date.now()`
 * instead of the Effect `Clock` service.
 *
 * **Example** (Getting the current DateTime unsafely)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * Number.isFinite(DateTime.toEpochMillis(DateTime.nowUnsafe())) // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const nowUnsafe = nowUnsafe$1;
/**
 * Converts a `DateTime` to a UTC `DateTime`.
 *
 * **When to use**
 *
 * Use to represent the same instant in UTC instead of its current time zone.
 *
 * **Details**
 *
 * The returned value keeps the same epoch milliseconds and changes only the
 * `DateTime` representation to UTC.
 *
 * **Example** (Converting DateTime values to UTC)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const now = DateTime.makeZonedUnsafe({ year: 2024 }, {
 *   timeZone: "Europe/London"
 * })
 *
 * // set as UTC
 * const utc: DateTime.Utc = DateTime.toUtc(now)
 * utc // => DateTime.makeUnsafe("2024-01-01T00:00:00Z")
 * ```
 *
 * @stability stable
 * @category converting
 * @since 3.13.0
 */
const toUtc = toUtc$1;
/**
 * Sets the time zone of a `DateTime`, returning a new `DateTime.Zoned`.
 *
 * **Example** (Setting time zones)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const zone = DateTime.zoneMakeNamedUnsafe("Europe/London")
 * const zoned: DateTime.Zoned = DateTime.setZone(DateTime.makeUnsafe("2024-01-01"), zone)
 *
 * DateTime.isZoned(zoned) // => true
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 3.6.0
 */
const setZone = setZone$1;
/**
 * Create a named time zone from the system's local time zone.
 *
 * **Details**
 *
 * This uses the system's configured time zone, which may vary depending
 * on the runtime environment.
 *
 * **Example** (Creating local time zones)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * DateTime.isTimeZoneNamed(DateTime.zoneMakeLocal()) // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.6.0
 */
const zoneMakeLocal = zoneMakeLocal$1;
/**
 * Sets the time zone of a `DateTime` safely from an IANA time zone identifier. If the
 * time zone is invalid, `None` will be returned.
 *
 * **Example** (Setting named time zones safely)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Option } from "effect"
 *
 * const dateTime = DateTime.makeUnsafe("2024-01-01")
 * const result = DateTime.setZoneNamed(dateTime, "Europe/London").pipe(Option.map(DateTime.formatIsoZoned))
 *
 * result // => Option.some("2024-01-01T00:00:00.000+00:00[Europe/London]")
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 3.6.0
 */
const setZoneNamed = setZoneNamed$1;
/**
 * Computes the difference between two `DateTime` values, returning a
 * `Duration` representing the amount of time between them.
 *
 * **Details**
 *
 * If `other` is *after* `self`, the result will be a positive `Duration`. If
 * `other` is *before* `self`, the result will be a negative `Duration`. If they
 * are equal, the result will be a `Duration` of zero.
 *
 * **Example** (Measuring distance between DateTime values)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Duration } from "effect"
 *
 * const start = DateTime.makeUnsafe("2024-01-01T00:00:00Z")
 * const end = DateTime.add(start, { minutes: 1 })
 *
 * DateTime.distance(start, end) // => Duration.minutes(1)
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 3.6.0
 */
const distance = distance$1;
/**
 * Returns the earlier of two `DateTime` values.
 *
 * **Example** (Selecting the earlier DateTime)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const date1 = DateTime.makeUnsafe("2024-01-01")
 * const date2 = DateTime.makeUnsafe("2024-02-01")
 *
 * DateTime.min(date1, date2) // => DateTime.makeUnsafe("2024-01-01")
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 3.6.0
 */
const min = min$1;
/**
 * Checks whether the first `DateTime` is after the second `DateTime`.
 *
 * **Example** (Checking whether a DateTime is later)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const date1 = DateTime.makeUnsafe("2024-02-01")
 * const date2 = DateTime.makeUnsafe("2024-01-01")
 *
 * DateTime.isGreaterThan(date1, date2) // => true
 * DateTime.isGreaterThan(date2, date1) // => false
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 4.0.0
 */
const isGreaterThan$1 = isGreaterThan$2;
/**
 * Checks whether the first `DateTime` is after or equal to the second `DateTime`.
 *
 * **Example** (Checking whether a DateTime is later or equal)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const date1 = DateTime.makeUnsafe("2024-01-01")
 * const date2 = DateTime.makeUnsafe("2024-01-01")
 * const date3 = DateTime.makeUnsafe("2024-02-01")
 *
 * DateTime.isGreaterThanOrEqualTo(date1, date2) // => true
 * DateTime.isGreaterThanOrEqualTo(date3, date1) // => true
 * DateTime.isGreaterThanOrEqualTo(date1, date3) // => false
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 4.0.0
 */
const isGreaterThanOrEqualTo$1 = isGreaterThanOrEqualTo$2;
/**
 * Checks whether the first `DateTime` is before the second `DateTime`.
 *
 * **Example** (Checking whether a DateTime is earlier)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const date1 = DateTime.makeUnsafe("2024-01-01")
 * const date2 = DateTime.makeUnsafe("2024-02-01")
 *
 * DateTime.isLessThan(date1, date2) // => true
 * DateTime.isLessThan(date2, date1) // => false
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 4.0.0
 */
const isLessThan$1 = isLessThan$2;
/**
 * Checks whether the first `DateTime` is before or equal to the second `DateTime`.
 *
 * **Example** (Checking whether a DateTime is earlier or equal)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const date1 = DateTime.makeUnsafe("2024-01-01")
 * const date2 = DateTime.makeUnsafe("2024-01-01")
 * const date3 = DateTime.makeUnsafe("2024-02-01")
 *
 * DateTime.isLessThanOrEqualTo(date1, date2) // => true
 * DateTime.isLessThanOrEqualTo(date1, date3) // => true
 * DateTime.isLessThanOrEqualTo(date3, date1) // => false
 * ```
 *
 * @stability stable
 * @category comparisons
 * @since 4.0.0
 */
const isLessThanOrEqualTo$1 = isLessThanOrEqualTo$2;
/**
 * Converts a `DateTime` to a `Date`, applying the time zone first.
 *
 * **Details**
 *
 * For `DateTime.Zoned`, this stores the zoned wall-clock time in the returned
 * `Date`'s UTC fields, rather than preserving the original instant. Use
 * `toDateUtc` to preserve the instant.
 * For `DateTime.Utc`, this is equivalent to `toDateUtc`.
 *
 * **Example** (Converting DateTime values to Dates)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const utc = DateTime.makeUnsafe("2024-07-01T12:00:00Z")
 * const zoned = DateTime.makeZonedUnsafe("2024-07-01T12:00:00Z", {
 *   timeZone: "Europe/London"
 * })
 *
 * DateTime.toDate(utc).toISOString() // => "2024-07-01T12:00:00.000Z"
 * DateTime.toDate(zoned).toISOString() // => "2024-07-01T13:00:00.000Z"
 * DateTime.toDateUtc(zoned).toISOString() // => "2024-07-01T12:00:00.000Z"
 * ```
 *
 * @stability stable
 * @category converting
 * @since 3.6.0
 */
const toDate = toDate$1;
/**
 * Gets the milliseconds since the Unix epoch of a `DateTime`.
 *
 * **Details**
 *
 * This returns the UTC timestamp regardless of any time zone information.
 *
 * **Example** (Reading epoch milliseconds)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const dt = DateTime.makeUnsafe("2024-01-01T00:00:00Z")
 * DateTime.toEpochMillis(dt) // => 1704067200000
 * ```
 *
 * @stability stable
 * @category converting
 * @since 3.6.0
 */
const toEpochMillis = toEpochMillis$1;
/**
 * Gets the time-zone-adjusted parts of a `DateTime` as an object.
 *
 * **Details**
 *
 * The parts will be time zone adjusted if the `DateTime` is zoned.
 *
 * **Example** (Reading DateTime parts)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const dt = DateTime.makeUnsafe("2024-01-01T12:30:45.123Z")
 * const parts = DateTime.toParts(dt)
 *
 * const selectedParts = [parts.year, parts.month, parts.day, parts.hour] // => [2024, 1, 1, 12]
 * ```
 *
 * @stability stable
 * @category getters
 * @since 3.6.0
 */
const toParts = toParts$1;
/**
 * Gets the UTC parts of a `DateTime` as an object.
 *
 * **Details**
 *
 * The parts will always be in UTC, ignoring any time zone information.
 *
 * **Example** (Reading UTC DateTime parts)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const zoned = DateTime.makeZonedUnsafe("2024-01-01T12:30:45.123Z", {
 *   timeZone: "Europe/London"
 * })
 * const parts = DateTime.toPartsUtc(zoned)
 *
 * const selectedParts = [parts.year, parts.month, parts.day, parts.hour] // => [2024, 1, 1, 12]
 * ```
 *
 * @stability stable
 * @category getters
 * @since 3.6.0
 */
const toPartsUtc = toPartsUtc$1;
/**
 * Sets time-zone-adjusted parts on a `DateTime`.
 *
 * **Details**
 *
 * The date will be time zone adjusted for `DateTime.Zoned`.
 *
 * **Example** (Updating DateTime parts)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * const dt = DateTime.makeZonedUnsafe("2024-01-01T12:00:00Z", { timeZone: "UTC" })
 * const updated = DateTime.setParts(dt, {
 *   year: 2025,
 *   month: 6,
 *   day: 15
 * })
 *
 * updated // => DateTime.makeZonedUnsafe("2025-06-15T12:00:00Z", { timeZone: "UTC" })
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 3.6.0
 */
const setParts = setParts$1;
/**
 * Context service that supplies the ambient `TimeZone` for APIs that work in
 * the current zone, such as `DateTime.setZoneCurrent` and
 * `DateTime.nowInCurrentZone`.
 *
 * **Details**
 *
 * Provide it with `DateTime.withCurrentZone`, one of the `withCurrentZone*`
 * helpers, or one of the `layerCurrentZone*` layers.
 *
 * **Example** (Accessing the current time zone service)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   return DateTime.zoneToString(yield* DateTime.CurrentTimeZone)
 * })
 *
 * // Provide a time zone
 * const layer = DateTime.layerCurrentZoneNamed("Europe/London")
 * await Effect.runPromise(Effect.provide(program, layer)) // => "Europe/London"
 * ```
 *
 * @stability stable
 * @category services
 * @since 3.11.0
 */
var CurrentTimeZone = class extends /*#__PURE__*/ Service()("effect/DateTime/CurrentTimeZone") {};
/**
 * Sets the time zone of a `DateTime` to the current time zone, which is
 * determined by the `CurrentTimeZone` service.
 *
 * **Example** (Setting the current time zone)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Effect } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const zoned = yield* DateTime.setZoneCurrent(DateTime.makeUnsafe("2024-01-01"))
 *   return DateTime.zoneToString(zoned.zone)
 * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))) // => "Europe/London"
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 3.6.0
 */
const setZoneCurrent = (self) => map$4(CurrentTimeZone, (zone) => setZone(self, zone));
/**
 * Provides the `CurrentTimeZone` to an effect, using the system's local time
 * zone.
 *
 * **Example** (Providing the local time zone)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Effect } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   return DateTime.isZoned(yield* DateTime.nowInCurrentZone)
 * }).pipe(DateTime.withCurrentZoneLocal)) // => true
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 3.6.0
 */
const withCurrentZoneLocal = (effect) =>
  provideServiceEffect(effect, CurrentTimeZone, sync(zoneMakeLocal));
/**
 * Gets the current time as a `DateTime.Zoned`, using the `CurrentTimeZone`.
 *
 * **Example** (Getting the current time in the current zone)
 *
 * ```ts import.meta.vitest
 * import { DateTime, Effect } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   return DateTime.zoneToString((yield* DateTime.nowInCurrentZone).zone)
 * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))) // => "Europe/London"
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 3.6.0
 */
const nowInCurrentZone = /*#__PURE__*/ flatMap(now, setZoneCurrent);
/**
 * Adds the given `Duration` to a `DateTime`.
 *
 * **When to use**
 *
 * Use to move a `DateTime` by an elapsed duration such as minutes, seconds, or
 * milliseconds.
 *
 * **Details**
 *
 * The duration is converted to milliseconds and added to the epoch
 * milliseconds. Zoned values keep their original time zone.
 *
 * **Gotchas**
 *
 * This is elapsed-time arithmetic, not calendar-aware local date arithmetic.
 * Use `add` when adding days, weeks, months, or years should account for the
 * date/time zone rules.
 *
 * **Example** (Adding durations)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * // add 5 minutes
 * DateTime.makeUnsafe(0).pipe(
 *   DateTime.addDuration("5 minutes")
 * ) // => DateTime.makeUnsafe(300000)
 * ```
 *
 * @see {@link add} for calendar-aware date/time part arithmetic
 * @see {@link subtractDuration} for subtracting an elapsed duration
 *
 * @stability stable
 * @category math
 * @since 3.6.0
 */
const addDuration = addDuration$1;
/**
 * Subtracts the given `Duration` from a `DateTime`.
 *
 * **Example** (Subtracting durations)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * // subtract 5 minutes
 * DateTime.makeUnsafe(0).pipe(
 *   DateTime.subtractDuration("5 minutes")
 * ) // => DateTime.makeUnsafe(-300000)
 * ```
 *
 * @stability stable
 * @category math
 * @since 3.6.0
 */
const subtractDuration = subtractDuration$1;
/**
 * Adds the given `amount` of `unit` to a `DateTime`.
 *
 * **Details**
 *
 * The time zone is taken into account when adding days, weeks, months, and
 * years.
 *
 * **Example** (Adding date and time parts)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * // add 5 minutes
 * DateTime.makeUnsafe(0).pipe(
 *   DateTime.add({ minutes: 5 })
 * ) // => DateTime.makeUnsafe(300000)
 * ```
 *
 * @stability stable
 * @category math
 * @since 3.6.0
 */
const add = add$1;
/**
 * Subtracts the given `amount` of `unit` from a `DateTime`.
 *
 * **Example** (Subtracting date and time parts)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * // subtract 5 minutes
 * DateTime.makeUnsafe(0).pipe(
 *   DateTime.subtract({ minutes: 5 })
 * ) // => DateTime.makeUnsafe(-300000)
 * ```
 *
 * @stability stable
 * @category math
 * @since 3.6.0
 */
const subtract = subtract$1;
/**
 * Formats a `DateTime` as a UTC ISO string.
 *
 * **Details**
 *
 * Always returns the UTC representation in ISO 8601 format, ignoring any time zone.
 *
 * **Example** (Formatting DateTime values as ISO strings)
 *
 * ```ts import.meta.vitest
 * import { DateTime } from "effect"
 *
 * DateTime.formatIso(DateTime.makeUnsafe("2024-01-01T12:30:45.123Z")) // => "2024-01-01T12:30:45.123Z"
 *
 * const zoned = DateTime.makeZonedUnsafe("2024-01-01T12:30:45.123Z", {
 *   timeZone: "Europe/London"
 * })
 * DateTime.formatIso(zoned) // => "2024-01-01T12:30:45.123Z"
 * ```
 *
 * @stability stable
 * @category formatting
 * @since 3.6.0
 */
const formatIso = formatIso$1;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/encoding/Base64.js
/**
 * Base64 encoding and decoding helpers.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Encodes the given value into a Base64 (RFC 4648) string.
 *
 * **When to use**
 *
 * Use to encode text or bytes as a standard padded Base64 string for storage or
 * transport.
 *
 * **Details**
 *
 * String inputs are encoded as UTF-8 bytes before Base64 encoding.
 * `Uint8Array` inputs are encoded directly. The output uses the standard
 * RFC 4648 alphabet with `=` padding.
 *
 * **Example** (Encoding Base64 strings and bytes)
 *
 * ```ts import.meta.vitest
 * import { Base64 } from "effect/encoding"
 *
 * Base64.encode("hello") // => "aGVsbG8="
 *
 * const bytes = new Uint8Array([72, 101, 108, 108, 111])
 * Base64.encode(bytes) // => "SGVsbG8="
 * ```
 *
 * @see {@link decode} for decoding standard Base64 to bytes
 * @see {@link decodeString} for decoding standard Base64 to UTF-8 text
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const encode$1 = (input) =>
  encodeBytes(typeof input === "string" ? encoder$1.encode(input) : input);
/**
 * Decodes a Base64 (RFC 4648) string into bytes safely.
 *
 * **When to use**
 *
 * Use to decode a standard padded Base64 string into bytes without throwing on
 * invalid input.
 *
 * **Details**
 *
 * Returns `Result.succeed` with a `Uint8Array` when decoding succeeds, or
 * `Result.fail` with an `EncodingError` when the input is not valid Base64.
 *
 * **Example** (Decoding Base64 bytes)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 * import { Base64 } from "effect/encoding"
 *
 * Base64.decode("SGVsbG8=") // => Result.succeed(new Uint8Array([72, 101, 108, 108, 111]))
 * ```
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decode$1 = (str) => {
  const stripped = stripCrlf(str);
  const length = stripped.length;
  if (length % 4 !== 0)
    return fail$1(
      new EncodingError({
        kind: "Decode",
        module: "Base64",
        input: stripped,
        message: `Length must be a multiple of 4, but is ${length}`,
      }),
    );
  const index = stripped.indexOf("=");
  if (
    index !== -1 &&
    (index < length - 2 || (index === length - 2 && stripped[length - 1] !== "="))
  )
    return fail$1(
      new EncodingError({
        kind: "Decode",
        module: "Base64",
        input: stripped,
        message: "Found a '=' character, but it is not at the end",
      }),
    );
  try {
    const missingOctets = stripped.endsWith("==") ? 2 : stripped.endsWith("=") ? 1 : 0;
    const result = new Uint8Array(3 * (length / 4) - missingOctets);
    for (let i = 0, j = 0; i < length; i += 4, j += 3) {
      const buffer =
        (getCode(stripped.charCodeAt(i)) << 18) |
        (getCode(stripped.charCodeAt(i + 1)) << 12) |
        (getCode(stripped.charCodeAt(i + 2)) << 6) |
        getCode(stripped.charCodeAt(i + 3));
      result[j] = buffer >> 16;
      result[j + 1] = (buffer >> 8) & 255;
      result[j + 2] = buffer & 255;
    }
    return succeed$1(result);
  } catch (cause) {
    return fail$1(
      new EncodingError({
        kind: "Decode",
        module: "Base64",
        input: stripped,
        message: cause instanceof Error ? cause.message : "Invalid input",
      }),
    );
  }
};
/**
 * Decodes a Base64 (RFC 4648) string into UTF-8 text safely.
 *
 * **When to use**
 *
 * Use to decode a standard padded Base64 string into UTF-8 text without
 * throwing on invalid input.
 *
 * **Details**
 *
 * Returns `Result.succeed` with the decoded text when decoding succeeds, or
 * `Result.fail` with an `EncodingError` when the input is not valid Base64.
 *
 * **Example** (Decoding Base64 strings)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 * import { Base64 } from "effect/encoding"
 *
 * Base64.decodeString("aGVsbG8=") // => Result.succeed("hello")
 * ```
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decodeString = (str) => map$5(decode$1(str), (_) => decoder.decode(_));
const encodeBytes = (bytes) => {
  const length = bytes.length;
  let result = "";
  let i = 2;
  for (; i < length; i += 3) {
    result += alphabet[bytes[i - 2] >> 2];
    result += alphabet[((bytes[i - 2] & 3) << 4) | (bytes[i - 1] >> 4)];
    result += alphabet[((bytes[i - 1] & 15) << 2) | (bytes[i] >> 6)];
    result += alphabet[bytes[i] & 63];
  }
  if (i === length + 1) {
    result += alphabet[bytes[i - 2] >> 2];
    result += alphabet[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === length) {
    result += alphabet[bytes[i - 2] >> 2];
    result += alphabet[((bytes[i - 2] & 3) << 4) | (bytes[i - 1] >> 4)];
    result += alphabet[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
};
const encoder$1 = /*#__PURE__*/ new TextEncoder();
const decoder = /*#__PURE__*/ new TextDecoder();
const stripCrlf = (str) => str.replace(/[\n\r]/g, "");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const codes = /*#__PURE__*/ /* @__PURE__ */ new Uint8Array(123).fill(255);
for (let i = 0; i < 64; i++) codes[/*#__PURE__*/ alphabet.charCodeAt(i)] = i;
codes[/*#__PURE__*/ "=".charCodeAt(0)] = 0;
const getCode = (charCode) => {
  if (charCode >= codes.length || codes[charCode] === 255)
    throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
  return codes[charCode];
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/http/Cookies.js
/**
 * Models HTTP cookies and cookie collections for requests and responses.
 *
 * A `Cookie` stores a name, value, encoded value, and standard cookie
 * attributes. A `Cookies` value is an immutable collection keyed by cookie
 * name. This module parses request `Cookie` headers, builds response
 * `Set-Cookie` headers, and provides helpers for adding, removing, merging, and
 * expiring cookies.
 *
 * @stability unstable
 * @since 4.0.0
 */
const TypeId$10 = "~effect/http/Cookies";
/**
 * Returns `true` when a value is a `Cookies` collection.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isCookies = (u) => hasProperty(u, TypeId$10);
const CookieTypeId = "~effect/http/Cookies/Cookie";
const CookieErrorTypeId = "~effect/http/Cookies/CookieError";
/**
 * Error reason describing why cookie construction failed, such as invalid name,
 * value, domain, path, or infinite max-age.
 *
 * @stability unstable
 * @category errors
 * @since 4.0.0
 */
var CookiesErrorReason = class extends Error$2 {};
/**
 * Error returned when a cookie name, value, domain, path, or max-age option is invalid.
 *
 * **Details**
 *
 * Inspect `reason` to determine the specific validation failure.
 *
 * @stability unstable
 * @category errors
 * @since 4.0.0
 */
var CookiesError = class CookiesError extends /*#__PURE__*/ TaggedError$1("CookiesError") {
  /**
   * Creates a cookie error from a reason tag and optional cause.
   *
   * @stability unstable
   * @since 4.0.0
   */
  static fromReason(reason, cause) {
    return new CookiesError({
      reason: new CookiesErrorReason({
        _tag: reason,
        cause,
      }),
    });
  }
  /**
   * Marks this value as a cookie validation error for runtime guards.
   *
   * @stability unstable
   * @since 4.0.0
   */
  [CookieErrorTypeId] = CookieErrorTypeId;
  /**
   * Uses the concrete cookie error reason as the public message.
   *
   * @stability unstable
   * @since 4.0.0
   */
  get message() {
    return this.reason._tag;
  }
};
const Proto$3 = {
  [TypeId$10]: TypeId$10,
  ...BaseProto,
  toJSON() {
    return {
      _id: "effect/Cookies",
      cookies: map$1(this.cookies, (cookie) => cookie.toJSON()),
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Creates a `Cookies` collection from an existing readonly record of cookies keyed by cookie name.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromReadonlyRecord = (cookies) => {
  const self = Object.create(Proto$3);
  self.cookies = cookies;
  return self;
};
/**
 * Create a Cookies object from an Iterable
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromIterable = (cookies) => {
  const record = {};
  for (const cookie of cookies) assignProperty(record, cookie.name, cookie);
  return fromReadonlyRecord(record);
};
/**
 * Create a Cookies object from a set of Set-Cookie headers
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromSetCookie = (headers) => {
  const arrayHeaders = typeof headers === "string" ? [headers] : headers;
  const cookies = [];
  for (const header of arrayHeaders) {
    const cookie = parseSetCookie(header.trim());
    if (cookie) cookies.push(cookie);
  }
  return fromIterable(cookies);
};
function parseSetCookie(header) {
  const parts = header
    .split(";")
    .map((_) => _.trim())
    .filter((_) => _ !== "");
  if (parts.length === 0) return;
  const firstEqual = parts[0].indexOf("=");
  if (firstEqual === -1) return;
  const name = parts[0].slice(0, firstEqual);
  if (!cookieNameRegExp.test(name)) return;
  const valueEncoded = parts[0].slice(firstEqual + 1);
  const value = tryDecodeURIComponent(valueEncoded);
  if (parts.length === 1)
    return Object.assign(Object.create(CookieProto), {
      name,
      value,
      valueEncoded,
    });
  const options = {};
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const equalIndex = part.indexOf("=");
    const key = equalIndex === -1 ? part : part.slice(0, equalIndex).trim();
    const value = equalIndex === -1 ? void 0 : part.slice(equalIndex + 1).trim();
    switch (key.toLowerCase()) {
      case "domain": {
        if (value === void 0) break;
        const domain = value.trim().replace(/^\./, "");
        if (domain) options.domain = domain;
        break;
      }
      case "expires": {
        if (value === void 0) break;
        const date = new Date(value);
        if (!isNaN(date.getTime())) options.expires = date;
        break;
      }
      case "max-age": {
        if (value === void 0) break;
        const maxAge = parseInt(value, 10);
        if (!isNaN(maxAge)) options.maxAge = seconds(maxAge);
        break;
      }
      case "path":
        if (value === void 0) break;
        if (value[0] === "/") options.path = value;
        break;
      case "priority":
        if (value === void 0) break;
        switch (value.toLowerCase()) {
          case "low":
            options.priority = "low";
            break;
          case "medium":
            options.priority = "medium";
            break;
          case "high":
            options.priority = "high";
        }
        break;
      case "httponly":
        options.httpOnly = true;
        break;
      case "secure":
        options.secure = true;
        break;
      case "partitioned":
        options.partitioned = true;
        break;
      case "samesite":
        if (value === void 0) break;
        switch (value.toLowerCase()) {
          case "lax":
            options.sameSite = "lax";
            break;
          case "strict":
            options.sameSite = "strict";
            break;
          case "none":
            options.sameSite = "none";
        }
    }
  }
  return Object.assign(Object.create(CookieProto), {
    name,
    value,
    valueEncoded,
    options: Object.keys(options).length > 0 ? options : void 0,
  });
}
/**
 * An empty Cookies object
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const empty$2 = /*#__PURE__*/ fromIterable([]);
/**
 * Returns `true` when the `Cookies` collection contains no cookies.
 *
 * @stability unstable
 * @category predicates
 * @since 4.0.0
 */
const isEmpty = (self) => isEmptyRecord(self.cookies);
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const cookieDomainRegExp = /^[\u0009\u0020-\u003a\u003c-\u007e\u0080-\u00ff]+$/;
const cookiePathRegExp = /^[\u0020-\u003a\u003c-\u007e]+$/;
const CookieProto = {
  [CookieTypeId]: CookieTypeId,
  ...BaseProto,
  toJSON() {
    return {
      _id: "effect/Cookies/Cookie",
      name: this.name,
      value: this.value,
      options: this.options,
    };
  },
};
/**
 * Creates a cookie, validating the name, encoded value, domain, path, and finite `maxAge`.
 *
 * **Details**
 *
 * Returns a `CookiesError` in the `Result` failure channel when validation fails.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
function makeCookie(name, value, options) {
  const encodedValue = encodeURIComponent(value);
  const error = validateCookie(name, encodedValue, options);
  if (error !== void 0) return fail$1(error);
  return succeed$1(
    Object.assign(Object.create(CookieProto), {
      name,
      value,
      valueEncoded: encodedValue,
      options,
    }),
  );
}
function validateCookie(name, encodedValue, options) {
  if (!cookieNameRegExp.test(name)) return CookiesError.fromReason("InvalidCookieName");
  if (encodedValue && !fieldContentRegExp.test(encodedValue))
    return CookiesError.fromReason("InvalidCookieValue");
  if (options?.domain !== void 0 && !cookieDomainRegExp.test(options.domain))
    return CookiesError.fromReason("InvalidCookieDomain");
  if (options?.path !== void 0 && !cookiePathRegExp.test(options.path))
    return CookiesError.fromReason("InvalidCookiePath");
  if (options?.maxAge !== void 0 && !isFinite$2(fromInputUnsafe(options.maxAge)))
    return CookiesError.fromReason("CookieInfinityMaxAge");
}
/**
 * Combines two Cookies objects, removing duplicates from the first
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const merge$1 = /*#__PURE__*/ dual(2, (self, that) =>
  fromReadonlyRecord({
    ...self.cookies,
    ...that.cookies,
  }),
);
/**
 * Creates and adds a cookie safely by name and value.
 *
 * **Details**
 *
 * The cookie fields are validated first; invalid input returns a `CookiesError` in the `Result` failure channel.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const set$1 = /*#__PURE__*/ dual(
  (args) => isCookies(args[0]),
  (self, name, value, options) =>
    map$5(makeCookie(name, value, options), (cookie) =>
      fromReadonlyRecord(set$2(self.cookies, name, cookie)),
    ),
);
/**
 * Adds an expired cookie safely with an empty value, `Max-Age=0`, and an epoch `Expires` value.
 *
 * **Details**
 *
 * Returns a `CookiesError` in the `Result` failure channel when the name or options are invalid.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const expireCookie = /*#__PURE__*/ dual(
  (args) => isCookies(args[0]),
  (self, name, options) =>
    set$1(self, name, "", {
      ...options,
      maxAge: 0,
      expires: /* @__PURE__ */ new Date(0),
    }),
);
/**
 * Serializes a cookie into a string.
 *
 * **Details**
 *
 * Adapted from https://github.com/fastify/fastify-cookie under MIT License
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
function serializeCookie(self) {
  const error = validateCookie(self.name, self.valueEncoded, self.options);
  if (error !== void 0) throw error;
  let str = self.name + "=" + self.valueEncoded;
  if (self.options === void 0) return str;
  const options = self.options;
  if (options.maxAge !== void 0) {
    const maxAge = toSeconds(fromInputUnsafe(options.maxAge));
    str += "; Max-Age=" + Math.trunc(maxAge);
  }
  if (options.domain !== void 0) str += "; Domain=" + options.domain;
  if (options.path !== void 0) str += "; Path=" + options.path;
  if (options.priority !== void 0)
    switch (options.priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
    }
  if (options.expires !== void 0) str += "; Expires=" + options.expires.toUTCString();
  if (options.httpOnly) str += "; HttpOnly";
  if (options.secure) str += "; Secure";
  if (options.partitioned) str += "; Partitioned";
  if (options.sameSite !== void 0)
    switch (options.sameSite) {
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
    }
  return str;
}
/**
 * Serializes a `Cookies` collection into an array of `Set-Cookie` header values.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const toSetCookieHeaders = (self) => Object.values(self.cookies).map(serializeCookie);
/**
 * Parses a cookie header into a record of key-value pairs
 *
 * **Details**
 *
 * Adapted from https://github.com/fastify/fastify-cookie under MIT License
 *
 * @stability unstable
 * @category decoding
 * @since 4.0.0
 */
function parseHeader(header) {
  const result = {};
  const strLen = header.length;
  let pos = 0;
  let terminatorPos = 0;
  while (true) {
    if (terminatorPos === strLen) break;
    terminatorPos = header.indexOf(";", pos);
    if (terminatorPos === -1) terminatorPos = strLen;
    let eqIdx = header.indexOf("=", pos);
    if (eqIdx === -1) break;
    if (eqIdx > terminatorPos) {
      pos = terminatorPos + 1;
      continue;
    }
    const key = header.substring(pos, eqIdx++).trim();
    if (!Object.hasOwn(result, key)) {
      const val =
        header.charCodeAt(eqIdx) === 34
          ? header.substring(eqIdx + 1, terminatorPos - 1).trim()
          : header.substring(eqIdx, terminatorPos).trim();
      assignProperty(result, key, !(val.indexOf("%") === -1) ? tryDecodeURIComponent(val) : val);
    }
    pos = terminatorPos + 1;
  }
  return result;
}
const tryDecodeURIComponent = (str) => {
  try {
    return decodeURIComponent(str);
  } catch (_) {
    return str;
  }
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/redacted.js
/** @internal */
const redactedRegistry = /*#__PURE__*/ new WeakMap();
/** @internal */
const value$1 = (self) => {
  if (redactedRegistry.has(self)) return redactedRegistry.get(self);
  else
    throw new Error(
      "Unable to get redacted value" + (self.label ? ` with label: "${self.label}"` : ""),
    );
};
/** @internal */
const stringOrRedacted = (val) => (typeof val === "string" ? val : value$1(val));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Redacted.js
/**
 * Wraps sensitive values so normal output does not reveal them.
 *
 * A `Redacted<A>` shows a redacted placeholder in string, JSON, and inspection
 * output, while still storing the original value for trusted code that needs to
 * recover it. This helps reduce accidental leaks in logs and diagnostics. This
 * module includes constructors, runtime checks, value recovery, wiping of stored
 * values, and comparison helpers that avoid exposing the wrapped value at the
 * call site.
 *
 * @stability stable
 * @since 3.3.0
 */
const TypeId$9 = "~effect/Redacted";
/**
 * Returns `true` if a value is a `Redacted` wrapper.
 *
 * **When to use**
 *
 * Use to validate unknown input and narrow it to `Redacted`.
 *
 * **Details**
 *
 * When this function returns `true`, TypeScript narrows the value to
 * `Redacted<unknown>`.
 *
 * **Example** (Checking for redacted values)
 *
 * ```ts import.meta.vitest
 * import { Redacted } from "effect"
 *
 * const secret = Redacted.make("my-secret")
 * const plainString = "not-secret"
 *
 * Redacted.isRedacted(secret) // => true
 * Redacted.isRedacted(plainString) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 3.3.0
 */
const isRedacted = (u) => hasProperty(u, TypeId$9);
/**
 * Creates a `Redacted` wrapper for a sensitive value.
 *
 * **When to use**
 *
 * Use to wrap a sensitive value so normal string, JSON, and inspection output
 * is redacted.
 *
 * **Details**
 *
 * The wrapper redacts string, JSON, and inspection output to reduce accidental
 * disclosure. The original value remains retrievable with `Redacted.value`
 * until the wrapper is wiped or becomes unreachable.
 *
 * **Example** (Creating a redacted value)
 *
 * ```ts import.meta.vitest
 * import { Redacted } from "effect"
 *
 * const API_KEY = Redacted.make("1234567890")
 * String(API_KEY) // => "<redacted>"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.3.0
 */
const make$5 = (value, options) => {
  const self = Object.create(Proto$2);
  if (options?.label) self.label = options.label;
  redactedRegistry.set(self, value);
  return self;
};
const Proto$2 = {
  [TypeId$9]: { _A: (_) => _ },
  label: void 0,
  ...PipeInspectableProto,
  toJSON() {
    return this.toString();
  },
  toString() {
    return `<redacted${isString$1(this.label) ? ":" + this.label : ""}>`;
  },
  [symbol]() {
    return hash(redactedRegistry.get(this));
  },
  [symbol$1](that) {
    return isRedacted(that) && equals(redactedRegistry.get(this), redactedRegistry.get(that));
  },
};
/**
 * Retrieves the original value from a `Redacted` instance. Use this function
 * with caution, as it exposes the sensitive data.
 *
 * **When to use**
 *
 * Use when you need the underlying sensitive value at a trusted boundary.
 *
 * **Example** (Retrieving a redacted value)
 *
 * ```ts import.meta.vitest
 * import { Redacted } from "effect"
 *
 * const API_KEY = Redacted.make("1234567890")
 *
 * Redacted.value(API_KEY) // => "1234567890"
 * ```
 *
 * @stability stable
 * @category getters
 * @since 3.3.0
 */
const value = value$1;
/**
 * Generates an equivalence relation for `Redacted<A>` values based on an
 * equivalence relation for the underlying values `A`. This function is useful
 * for comparing `Redacted` instances without exposing their contents.
 *
 * **When to use**
 *
 * Use when you need to compare wrapped secrets through an approved equality
 * rule without exposing the underlying values at each comparison site.
 *
 * **Example** (Comparing redacted values)
 *
 * ```ts import.meta.vitest
 * import { Equivalence, Redacted } from "effect"
 *
 * const API_KEY1 = Redacted.make("1234567890")
 * const API_KEY2 = Redacted.make("1-34567890")
 * const API_KEY3 = Redacted.make("1234567890")
 *
 * const equivalence = Redacted.makeEquivalence(Equivalence.strictEqual<string>())
 *
 * equivalence(API_KEY1, API_KEY2) // => false
 * equivalence(API_KEY1, API_KEY3) // => true
 * ```
 *
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const makeEquivalence = (isEquivalent) => make$10((x, y) => isEquivalent(value(x), value(y)));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/http/Headers.js
/**
 * Models HTTP headers for the unstable HTTP client and server modules.
 *
 * `Headers` values are immutable maps keyed by lowercase header name. This
 * module converts common header inputs into that shape, provides helpers for
 * reading and updating header values, and redacts configured sensitive headers
 * when values are inspected.
 *
 * @stability unstable
 * @since 4.0.0
 */
/**
 * Runtime type identifier for `Headers` values.
 *
 * @stability unstable
 * @category type IDs
 * @since 4.0.0
 */
const TypeId$8 = /*#__PURE__*/ Symbol.for("~effect/http/Headers");
/**
 * Returns `true` if the provided value is a `Headers` value.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isHeaders = (u) => hasProperty(u, TypeId$8);
const Proto$1 = /*#__PURE__*/ Object.defineProperties(/*#__PURE__*/ Object.create(null), {
  [TypeId$8]: { value: TypeId$8 },
  [symbolRedactable]: {
    value(context) {
      return redact$1(this, get(context, CurrentRedactedNames$1));
    },
  },
  toJSON: {
    value() {
      return redact$2(this);
    },
  },
  [symbol$1]: {
    value(that) {
      return Equivalence$1(this, that);
    },
  },
  [symbol]: {
    value() {
      return structure(this);
    },
  },
  toString: { value: BaseProto.toString },
  [NodeInspectSymbol]: { value: BaseProto[NodeInspectSymbol] },
});
const make$4 = (input) => Object.assign(Object.create(Proto$1), input);
/**
 * Provides an `Equivalence` instance that compares `Headers` by header names
 * and string values.
 *
 * @stability unstable
 * @category instances
 * @since 4.0.0
 */
const Equivalence$1 = /*#__PURE__*/ makeEquivalence$1(/*#__PURE__*/ strictEqual());
/**
 * An empty `Headers` collection.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const empty$1 = /*#__PURE__*/ Object.create(Proto$1);
/**
 * Creates `Headers` from a record or iterable of header entries.
 *
 * **Details**
 *
 * Header names are normalized to lowercase. Array values in record input are joined with `", "`, and `undefined` values are omitted.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromInput$1 = (input) => {
  if (input === void 0) return empty$1;
  else if (Symbol.iterator in input) {
    const out = Object.create(Proto$1);
    for (const [k, v] of input) out[k.toLowerCase()] = v;
    return out;
  }
  const out = Object.create(Proto$1);
  for (const [k, v] of Object.entries(input))
    if (Array.isArray(v)) out[k.toLowerCase()] = v.join(", ");
    else if (v !== void 0) out[k.toLowerCase()] = v;
  return out;
};
/**
 * Treats an existing record as `Headers` unsafely.
 *
 * **Gotchas**
 *
 * This mutates the record's prototype and does not normalize header names; callers must provide the expected lowercase keys.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromRecordUnsafe = (input) => Object.setPrototypeOf(input, Proto$1);
/**
 * Returns a new `Headers` collection with the given header set.
 *
 * **Details**
 *
 * The header name is normalized to lowercase.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const set = /*#__PURE__*/ dual(3, (self, key, value) => {
  const out = make$4(self);
  out[key.toLowerCase()] = value;
  return out;
});
/**
 * Returns a new `Headers` collection with all provided headers set.
 *
 * **Details**
 *
 * Input headers are normalized with `fromInput` and override existing headers with the same lowercase name.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const setAll$1 = /*#__PURE__*/ dual(2, (self, headers) =>
  make$4({
    ...self,
    ...fromInput$1(headers),
  }),
);
/**
 * Returns a new `Headers` collection containing headers from both collections.
 *
 * **Details**
 *
 * Headers from the second collection override headers from the first collection with the same name.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const merge = /*#__PURE__*/ dual(2, (self, headers) => {
  const out = make$4(self);
  Object.assign(out, headers);
  return out;
});
/**
 * Returns a new `Headers` collection with the named header removed.
 *
 * **Details**
 *
 * The provided header name is normalized to lowercase before removal.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const remove = /*#__PURE__*/ dual(2, (self, key) => {
  const out = make$4(self);
  delete out[key.toLowerCase()];
  return out;
});
/**
 * Returns a plain record with selected header values wrapped in `Redacted`.
 *
 * **Details**
 *
 * String keys are normalized to lowercase before matching; regular expressions are tested against the stored header names.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const redact$1 = /*#__PURE__*/ dual(2, (self, key) => {
  const out = { ...self };
  const modify = (key) => {
    if (typeof key === "string") {
      const k = key.toLowerCase();
      if (k in self) out[k] = make$5(self[k]);
    } else for (const name in self) if (name.search(key) !== -1) out[name] = make$5(self[name]);
  };
  if (Array.isArray(key)) for (let i = 0; i < key.length; i++) modify(key[i]);
  else modify(key);
  return out;
});
/**
 * Checks whether a header name matches one of the redaction patterns.
 *
 * **Details**
 *
 * String patterns are compared case-insensitively against the header name;
 * regular expressions are tested against it. Use to avoid the record copy of
 * `redact` when only a membership check is needed.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const isRedactedName$1 = (name, patterns) => {
  const lowerName = name.toLowerCase();
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    if (typeof pattern === "string") {
      if (pattern.toLowerCase() === lowerName) return true;
    } else if (name.search(pattern) !== -1) return true;
  }
  return false;
};
/**
 * Context reference listing header names or patterns that should be redacted when `Headers` are inspected or rendered.
 *
 * **Details**
 *
 * Defaults include `authorization`, `cookie`, `set-cookie` and `x-api-key`.
 * A custom list replaces the defaults. Matching uses `isRedactedName`.
 * Use `UrlParams.CurrentRedactedNames` for query parameters.
 *
 * @stability unstable
 * @category services
 * @since 4.0.0
 */
const CurrentRedactedNames$1 = /*#__PURE__*/ Reference("effect/Headers/CurrentRedactedNames", {
  defaultValue: () => ["authorization", "cookie", "set-cookie", "x-api-key"],
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/http/internal/urlParams.js
/** @internal */
const unwrap = (value$6) => (typeof value$6 === "string" ? value$6 : value(value$6));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/http/UrlParams.js
/**
 * Models URL query parameters as ordered string pairs.
 *
 * `UrlParams` is used for HTTP client query strings, URL-encoded form bodies,
 * and server-side decoding. Values can be built from records, iterables, or
 * native `URLSearchParams`, then updated, serialized, converted to a `URL`, or
 * decoded with schemas.
 *
 * @stability unstable
 * @since 4.0.0
 */
const TypeId$7 = "~effect/http/UrlParams";
/**
 * Returns `true` when a value is a `UrlParams` instance.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isUrlParams = (u) => hasProperty(u, TypeId$7);
const Proto = {
  ...PipeInspectableProto,
  [TypeId$7]: TypeId$7,
  [Symbol.iterator]() {
    return this.params[Symbol.iterator]();
  },
  [symbolRedactable](context) {
    return {
      _id: "UrlParams",
      params: Object.fromEntries(redact(this, get(context, CurrentRedactedNames))),
    };
  },
  toJSON() {
    return redact$2(this);
  },
  [symbol$1](that) {
    return Equivalence(this, that);
  },
  [symbol]() {
    return array(this.params.flat());
  },
};
/**
 * Creates `UrlParams` from ordered key-value pairs.
 *
 * **Details**
 *
 * The input pairs are used as-is and are not coerced or normalized.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const make$3 = (params) => {
  const self = Object.create(Proto);
  self.params = params;
  return self;
};
/**
 * Creates `UrlParams` from a supported input shape.
 *
 * **Details**
 *
 * Primitive values are converted to strings, arrays produce repeated parameters,
 * nested records use bracket notation, and `undefined` values are omitted.
 * `Redacted` values are kept as-is.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const fromInput = (input) => {
  if (isUrlParams(input)) return input;
  const parsed = fromInputNested(input);
  const out = [];
  for (let i = 0; i < parsed.length; i++)
    if (Array.isArray(parsed[i][0])) {
      const [keys, value] = parsed[i];
      out.push([`${keys[0]}[${keys.slice(1).join("][")}]`, value]);
    } else out.push(parsed[i]);
  return make$3(out);
};
const fromInputNested = (input) => {
  const entries =
    typeof input[Symbol.iterator] === "function" ? fromIterable$1(input) : Object.entries(input);
  const out = [];
  for (const [key, value] of entries)
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++)
        if (value[i] !== void 0) out.push([key, coerce(value[i])]);
    } else if (value !== null && typeof value === "object" && !isRedacted(value)) {
      const nested = fromInputNested(value);
      for (const [k, v] of nested) out.push([[key, ...(typeof k === "string" ? [k] : k)], v]);
    } else if (value !== void 0) out.push([key, coerce(value)]);
  return out;
};
const coerce = (value) => (isRedacted(value) ? value : String(value));
/**
 * Provides an order-sensitive `Equivalence` instance for `UrlParams`.
 *
 * **Details**
 *
 * Two values are equivalent when they contain the same key-value pairs in the same
 * order.
 *
 * @stability unstable
 * @category instances
 * @since 4.0.0
 */
const Equivalence = /*#__PURE__*/ make$10((a, b) => arrayEquivalence(a.params, b.params));
const arrayEquivalence = /*#__PURE__*/ makeEquivalence$3(
  /*#__PURE__*/ makeEquivalence$2([/*#__PURE__*/ strictEqual(), /*#__PURE__*/ asEquivalence()]),
);
/**
 * An empty `UrlParams` value.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const empty = /*#__PURE__*/ make$3([]);
/**
 * Transforms the underlying ordered key-value pairs of `UrlParams`.
 *
 * **Details**
 *
 * The result is wrapped in a new `UrlParams` value.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const transform$2 = /*#__PURE__*/ dual(2, (self, f) => make$3(f(self.params)));
/**
 * Sets multiple query parameters from input.
 *
 * **Details**
 *
 * Keys present in the input replace existing values for those keys, while
 * unmentioned existing parameters are preserved.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const setAll = /*#__PURE__*/ dual(2, (self, input) => {
  const params = fromInput(input).params.slice();
  const keys = /* @__PURE__ */ new Set();
  for (let i = 0; i < params.length; i++) keys.add(params[i][0]);
  for (let i = 0; i < self.params.length; i++) {
    if (keys.has(self.params[i][0])) continue;
    params.push(self.params[i]);
  }
  return make$3(params);
});
/**
 * Appends all query parameters produced from the supplied input.
 *
 * **Details**
 *
 * Existing parameters are preserved.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const appendAll = /*#__PURE__*/ dual(2, (self, input) =>
  transform$2(self, appendAll$1(fromInput(input).params)),
);
/**
 * Serializes `UrlParams` to a URL query string without a leading question mark.
 *
 * **Gotchas**
 *
 * The output contains the unwrapped values of `Redacted` parameters.
 *
 * @stability unstable
 * @category converting
 * @since 4.0.0
 */
const toString = (input) =>
  new URLSearchParams(
    fromInput(input).params.map(([key, value]) => [key, unwrap(value)]),
  ).toString();
/**
 * Builds a `Record` containing all the key-value pairs in the given `UrlParams`
 * as `string` (if only one value for a key) or a `NonEmptyArray<string>`
 * (when more than one value for a key)
 *
 * **Example** (Converting parameters to a record)
 *
 * ```ts import.meta.vitest
 * import { UrlParams } from "effect/http"
 *
 * const urlParams = UrlParams.fromInput({
 *   a: 1,
 *   b: true,
 *   c: "string",
 *   e: [1, 2, 3]
 * })
 * UrlParams.toRecord(urlParams) // => { a: "1", b: "true", c: "string", e: ["1", "2", "3"] }
 * ```
 *
 * @stability unstable
 * @category converting
 * @since 4.0.0
 */
const toRecord = (self) => {
  const out = {};
  for (const [k, v] of self.params) {
    const value = unwrap(v);
    if (!Object.hasOwn(out, k)) assignProperty(out, k, value);
    else {
      const current = out[k];
      if (typeof current === "string") assignProperty(out, k, [current, value]);
      else current.push(value);
    }
  }
  return out;
};
/**
 * Builds a readonly record from `UrlParams`.
 *
 * **Details**
 *
 * Keys with one value map to a string, and keys with multiple values map to a
 * non-empty readonly array of strings.
 *
 * @stability unstable
 * @category converting
 * @since 4.0.0
 */
const toReadonlyRecord = toRecord;
/**
 * Returns the parameter pairs with selected values wrapped in `Redacted`.
 *
 * **Details**
 *
 * Keeps `Redacted` values and wraps values whose names match `isRedactedName`,
 * preserving order and repeated names.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const redact = /*#__PURE__*/ dual(2, (self, key) => {
  const patterns = Array.isArray(key) ? key : [key];
  return self.params.map(([name, value]) => [
    name,
    typeof value === "string" && isRedactedName(name, patterns) ? make$5(value) : value,
  ]);
});
/**
 * Checks whether a parameter name matches one of the redaction patterns.
 *
 * **Details**
 *
 * String patterns match case-insensitively; regular expressions test the name.
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const isRedactedName = isRedactedName$1;
/**
 * Redacts URL userinfo and the values of matching query parameters.
 *
 * **Details**
 *
 * Replaces userinfo with `REDACTED:REDACTED` and query values with `REDACTED`
 * when their decoded names match `isRedactedName`. Preserves all other text.
 * When names are omitted, uses the current fiber's `CurrentRedactedNames`,
 * falling back to the defaults outside a fiber.
 *
 * **Example** (Redacting a signed URL)
 *
 * ```ts import.meta.vitest
 * import { UrlParams } from "effect/http"
 *
 * const url = UrlParams.redactUrl("https://bucket.test/file?Signature=abc&size=1")
 * url // => "https://bucket.test/file?Signature=REDACTED&size=1"
 * ```
 *
 * @stability unstable
 * @category combinators
 * @since 4.0.0
 */
const redactUrl = (url, redactedNames = currentRedactedNames()) => {
  if (url.includes("@")) url = redactUserinfo(url);
  const queryStart = url.indexOf("?");
  if (queryStart === -1 || redactedNames.length === 0) return url;
  const hashStart = url.indexOf("#");
  if (hashStart !== -1 && hashStart < queryStart) return url;
  const queryEnd = hashStart === -1 ? url.length : hashStart;
  return (
    url.slice(0, queryStart + 1) +
    redactQuery(url.slice(queryStart + 1, queryEnd), redactedNames) +
    url.slice(queryEnd)
  );
};
const authorityStart = /^(?:(https?|ftp|wss?):[/\\]*|[a-z][a-z\d+.-]*:\/\/|[/\\]{2,})/i;
const specialAuthorityEnd = /[/\\?#]/;
const authorityEnd = /[/?#]/;
const redactUserinfo = (url) => {
  let normalized = "";
  const offsets = [];
  for (let i = 0; i < url.length; i++) {
    const code = url.charCodeAt(i);
    if (code === 9 || code === 10 || code === 13 || (normalized === "" && code <= 32)) continue;
    normalized += url[i];
    offsets.push(i);
  }
  const authority = authorityStart.exec(normalized);
  if (authority === null) return url;
  const start = authority[0].length;
  const special = authority[1] !== void 0 || !authority[0].includes(":");
  const rest = normalized.slice(start);
  const end = rest.search(special ? specialAuthorityEnd : authorityEnd);
  const userinfoEnd = (end === -1 ? rest : rest.slice(0, end)).lastIndexOf("@");
  return userinfoEnd === -1
    ? url
    : url.slice(0, offsets[start]) + "REDACTED:REDACTED" + url.slice(offsets[start + userinfoEnd]);
};
const redactQuery = (query, redactedNames) =>
  query
    .split("&")
    .map((part) => {
      const index = part.indexOf("=");
      return index !== -1 && isRedactedName(decodeQueryKey(part.slice(0, index)), redactedNames)
        ? part.slice(0, index + 1) + "REDACTED"
        : part;
    })
    .join("&");
const decodeQueryKey = (key) => {
  if (!key.includes("%") && !key.includes("+")) return key;
  try {
    return decodeURIComponent(key.replace(/\+/g, " "));
  } catch {
    return key;
  }
};
const currentRedactedNames = () =>
  get(globalThis["~effect/Fiber/currentFiber"]?.context ?? empty$3(), CurrentRedactedNames);
/**
 * Query parameter names or patterns to redact in inspection, spans and errors.
 *
 * **Details**
 *
 * Defaults include `AWSAccessKeyId`, `Signature`, `sig` and `X-Goog-Signature`.
 * A custom list replaces the defaults. Matching uses `isRedactedName`.
 * Redaction leaves request URLs and parameter values unchanged. `Redacted`
 * values are redacted regardless of this list.
 *
 * @stability unstable
 * @category services
 * @since 4.0.0
 */
const CurrentRedactedNames = /*#__PURE__*/ Reference("effect/http/UrlParams/CurrentRedactedNames", {
  defaultValue: () => ["AWSAccessKeyId", "Signature", "sig", "X-Goog-Signature"],
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/annotations.js
/** @internal */
function resolve$1(ast) {
  return ast.checks ? ast.checks[ast.checks.length - 1].annotations : ast.annotations;
}
/** @internal */
function resolveAt$1(key) {
  return (ast) => resolve$1(ast)?.[key];
}
/** @internal */
const STRUCTURAL_ANNOTATION_KEY = "~structural";
/** @internal */
const IDENTIFIER_FALLBACK_KEY = "~identifier";
/** @internal */
const SENTINELS_ANNOTATION_KEY = "~sentinels";
/** @internal */
const CONSTRUCTOR_ANNOTATION_KEY = "~constructor";
/** @internal */
const jsonSchemaAnnotationKeys = [
  "title",
  "description",
  "default",
  "examples",
  "readOnly",
  "writeOnly",
  "format",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
];
/** @internal */
const resolveIdentifier$1 = /*#__PURE__*/ resolveAt$1("identifier");
/** @internal */
const resolveIdentifierFallback = /*#__PURE__*/ resolveAt$1(IDENTIFIER_FALLBACK_KEY);
/** @internal */
const resolveTitle$1 = /*#__PURE__*/ resolveAt$1("title");
/** @internal */
const resolveDescription$1 = /*#__PURE__*/ resolveAt$1("description");
/** @internal */
const getExpected = /*#__PURE__*/ memoize((ast) => {
  const identifier = resolve$1(ast)?.identifier;
  if (typeof identifier === "string") return identifier;
  return ast.getExpected(getExpected);
});
/** @internal */
const annotationExcludedKeys = /*#__PURE__*/ new Set([
  SENTINELS_ANNOTATION_KEY,
  STRUCTURAL_ANNOTATION_KEY,
  "representation",
  "arbitraryConstraint",
  "toJsonSchema",
  "toCode",
  "toEquivalence",
  "toFormatter",
  "toCodec",
  "toCodecJson",
  "toCodecStringTree",
  "toCodecIso",
  "toCodecArbitrary",
]);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/parser.js
/** @internal */
const missing = /*#__PURE__*/ Symbol();
/** @internal */
const succeed = succeed$2;
/** @internal */
const missingExit = /*#__PURE__*/ succeed(missing);
/** @internal */
const sameExit = /*#__PURE__*/ succeed(missing);
/** @internal */
const toOption = (value) => (value === missing ? none() : some(value));
/** @internal */
const fromOptionExit = (option) => (option._tag === "None" ? missingExit : succeed(option.value));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/SchemaIssue.js
/**
 * Describes problems found while decoding, encoding, or checking data with
 * schemas.
 *
 * An `Issue` records what failed and, for nested data, where the failure
 * happened. The Schema system uses these values for missing keys, unexpected
 * keys, invalid types, invalid values, failed filters, failed transformations,
 * and alternatives that did not match. This module also formats issues.
 *
 * @stability stable
 * @since 4.0.0
 */
const TypeId$6 = "~effect/SchemaIssue/Issue";
/**
 * Returns `true` if the given value is an {@link Issue}.
 *
 * **When to use**
 *
 * Use when you need to narrow an `unknown` value to `Issue` in error-handling
 * code, such as distinguishing an `Issue` from other error types in a catch-all
 * handler.
 *
 * **Details**
 *
 * - Checks for the internal `TypeId` brand on the value.
 *
 * **Example** (Type-guarding an unknown error)
 *
 * ```ts import.meta.vitest
 * import { SchemaIssue } from "effect"
 *
 * const issue = new SchemaIssue.MissingKey(undefined)
 * SchemaIssue.isIssue(issue) // => true
 * SchemaIssue.isIssue("not an issue") // => false
 * ```
 *
 * @see {@link Issue}
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isIssue(u) {
  return hasProperty(u, TypeId$6) && u[TypeId$6] === TypeId$6;
}
/**
 * Returns `true` when an issue contains an input reported by the schema parser.
 *
 * **When to use**
 *
 * Use when reading `Issue.input`, especially when `undefined` is a valid input
 * value.
 *
 * **Details**
 *
 * Reported input is stored as an own property. This guard checks for that
 * property and narrows `input` from optional to required.
 *
 * **Example** (Reading a reported input)
 *
 * ```ts import.meta.vitest
 * import { Result, Schema, SchemaIssue } from "effect"
 *
 * const result = Schema.decodeUnknownResult(Schema.String)(1, { reportInput: true })
 * if (Result.isFailure(result) && SchemaIssue.hasInput(result.failure.issue)) {
 *   result.failure.issue.input // => 1
 * }
 * ```
 *
 * @see {@link Issue} for the complete issue model
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function hasInput(issue) {
  return Object.hasOwn(issue, "input");
}
var IssueNodeImpl = class {
  [TypeId$6] = TypeId$6;
  constructor(input, options) {
    if (options?.reportInput === true && input !== missing) this.input = input;
  }
};
/**
 * Constructs a schema issue for a failed refinement check.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Filter$1 = class extends IssueNodeImpl {
  _tag = "Filter";
  /**
   * The filter that failed.
   */
  filter;
  /**
   * The issue that occurred.
   */
  issue;
  constructor(filter, issue, input, options) {
    super(input, options);
    this.filter = filter;
    this.issue = issue;
  }
};
/**
 * Constructs a schema issue for a failed transformation.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Encoding = class extends IssueNodeImpl {
  _tag = "Encoding";
  /**
   * The schema that caused the issue.
   */
  ast;
  /**
   * The issue that occurred.
   */
  issue;
  constructor(ast, issue, input, options) {
    super(input, options);
    this.ast = ast;
    this.issue = issue;
  }
};
/**
 * Constructs a schema issue that points to a nested location.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Pointer = class extends IssueNodeImpl {
  _tag = "Pointer";
  /**
   * The path to the location in the input that caused the issue.
   */
  path;
  /**
   * The issue that occurred.
   */
  issue;
  constructor(path, issue) {
    super();
    this.path = path;
    this.issue = issue;
  }
};
/**
 * Constructs a schema issue for a missing key or tuple index.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const MissingKey = class extends IssueNodeImpl {
  _tag = "MissingKey";
  /**
   * The metadata for the issue.
   */
  annotations;
  constructor(annotations) {
    super();
    this.annotations = annotations;
  }
};
/**
 * Constructs a schema issue for an unexpected key or tuple index.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const UnexpectedKey = class extends IssueNodeImpl {
  _tag = "UnexpectedKey";
  /**
   * The schema that caused the issue.
   */
  ast;
  constructor(ast, input, options) {
    super(input, options);
    this.ast = ast;
  }
};
/**
 * Constructs a schema issue that groups multiple child issues.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Composite = class extends IssueNodeImpl {
  _tag = "Composite";
  /**
   * The schema that caused the issue.
   */
  ast;
  /**
   * The issues that occurred.
   */
  issues;
  constructor(ast, issues, input, options) {
    super(input, options);
    this.ast = ast;
    this.issues = issues;
  }
};
/**
 * Constructs a schema issue for an input with an invalid runtime type.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const InvalidType = class extends IssueNodeImpl {
  _tag = "InvalidType";
  /**
   * The schema that caused the issue.
   */
  ast;
  constructor(ast, input, options) {
    super(input, options);
    this.ast = ast;
  }
};
/**
 * Constructs a schema issue for a value that violates a constraint.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const InvalidValue = class extends IssueNodeImpl {
  _tag = "InvalidValue";
  /**
   * The metadata for the issue.
   */
  annotations;
  constructor(annotations, input, options) {
    super(input, options);
    this.annotations = annotations;
  }
};
/** @internal */
function makeCompositeAtKey(compositeAst, pointerKey, pointerIssue, compositeInput, parseOptions) {
  return new Composite(
    compositeAst,
    [new Pointer([pointerKey], pointerIssue)],
    compositeInput,
    parseOptions,
  );
}
/**
 * Constructs a schema issue for a forbidden parsing operation.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Forbidden = class extends IssueNodeImpl {
  _tag = "Forbidden";
  /**
   * The metadata for the issue.
   */
  annotations;
  constructor(annotations, input, options) {
    super(input, options);
    this.annotations = annotations;
  }
};
/**
 * Constructs a schema issue for a value that matches no union member.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const AnyOf = class extends IssueNodeImpl {
  _tag = "AnyOf";
  /**
   * The schema that caused the issue.
   */
  ast;
  /**
   * The issues that occurred.
   */
  issues;
  constructor(ast, issues, input, options) {
    super(input, options);
    this.ast = ast;
    this.issues = issues;
  }
};
/**
 * Constructs a schema issue for a value that matches multiple union members.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const OneOf = class extends IssueNodeImpl {
  _tag = "OneOf";
  /**
   * The schema that caused the issue.
   */
  ast;
  /**
   * The schemas that were successful.
   */
  successes;
  constructor(ast, successes, input, options) {
    super(input, options);
    this.ast = ast;
    this.successes = successes;
  }
};
function makeFilterIssue(entry, input, options) {
  if (isIssue(entry)) return entry;
  if (typeof entry === "string") return new InvalidValue({ message: entry }, input, options);
  const inner =
    typeof entry.issue === "string"
      ? new InvalidValue({ message: entry.issue }, input, options)
      : entry.issue;
  return new Pointer(entry.path, inner);
}
/** @internal */
function makeSingle(out, input, options) {
  if (out === void 0) return;
  if (typeof out === "boolean") return out ? void 0 : new InvalidValue(void 0, input, options);
  return makeFilterIssue(out, input, options);
}
/** @internal */
function normalizeFilterOutput(ast, out, input, options) {
  if (Array.isArray(out)) {
    if (!isReadonlyArrayNonEmpty(out)) return;
    return out.length === 1
      ? makeFilterIssue(out[0], input, options)
      : new Composite(
          ast,
          map$6(out, (entry) => makeFilterIssue(entry, input, options)),
          input,
          options,
        );
  }
  return makeSingle(out, input, options);
}
/**
 * Returns the built-in {@link LeafHook} used by default formatters.
 *
 * **When to use**
 *
 * Use as the default leaf renderer when customizing only the {@link CheckHook}.
 *
 * **Details**
 *
 * - Checks for a `message` annotation first; returns it if present.
 * - For `InvalidValue`, an `expected` annotation uses the standard expected
 *   value message and includes reported input when available.
 * - Otherwise generates a default message per `_tag`. When the issue reports
 *   input, the message includes its formatted value where applicable:
 *   - `InvalidType` → `"Expected <type>"` or `"Expected <type>, got <input>"`
 *   - `InvalidValue` → `"Expected a valid value"` or `"Invalid data <input>"`
 *   - `MissingKey` → `"Missing key"`
 *   - `UnexpectedKey` → `"Expected no excess property"` or
 *     `"Unexpected key with value <input>"`
 *   - `Forbidden` → `"Forbidden operation"`
 *   - `OneOf` → `"Expected exactly one member to match"` or
 *     `"Expected exactly one member to match the input <input>"`
 *
 * **Example** (Formatting Standard Schema issues with defaultLeafHook)
 *
 * ```ts import.meta.vitest
 * import { SchemaIssue } from "effect"
 *
 * const formatter = SchemaIssue.makeFormatterStandardSchemaV1({
 *   leafHook: SchemaIssue.defaultLeafHook
 * })
 * formatter(new SchemaIssue.MissingKey(undefined)) // => { issues: [{ path: [], message: "Missing key" }] }
 * ```
 *
 * @see {@link LeafHook}
 * @see {@link makeFormatterStandardSchemaV1}
 *
 * @stability stable
 * @category formatting
 * @since 4.0.0
 */
const defaultLeafHook = (issue) => {
  const message = findMessage(issue);
  if (message !== void 0) return message;
  switch (issue._tag) {
    case "InvalidType":
      return getExpectedMessage(getExpected(issue.ast), issue);
    case "InvalidValue": {
      const expected = findExpected(issue);
      if (expected !== void 0) return getExpectedMessage(expected, issue);
      const input = formatInput(issue);
      return input === void 0 ? "Expected a valid value" : `Invalid data ${input}`;
    }
    case "MissingKey":
      return "Missing key";
    case "UnexpectedKey": {
      const input = formatInput(issue);
      return input === void 0
        ? "Expected no excess property"
        : `Unexpected key with value ${input}`;
    }
    case "Forbidden":
      return "Forbidden operation";
    case "OneOf": {
      const input = formatInput(issue);
      return input === void 0
        ? "Expected exactly one member to match"
        : `Expected exactly one member to match the input ${input}`;
    }
  }
};
/**
 * Returns the built-in {@link CheckHook} used by default formatters.
 *
 * **When to use**
 *
 * Use as the default filter renderer when customizing only the {@link LeafHook}.
 *
 * **Details**
 *
 * - Looks for a `message` annotation on the inner issue first, then on the
 *   filter itself.
 * - Returns `undefined` when no annotation is found, causing the formatter to
 *   fall back to `"Expected <filter>"` or, when the filter reports input,
 *   `"Expected <filter>, got <input>"`.
 *
 * @see {@link CheckHook}
 * @see {@link makeFormatterStandardSchemaV1}
 *
 * @stability stable
 * @category formatting
 * @since 4.0.0
 */
const defaultCheckHook = (issue) => findMessage(issue.issue) ?? findMessage(issue);
function formatInput(issue) {
  return hasInput(issue) ? format$1(issue.input) : void 0;
}
function findExpected(issue) {
  const expected = issue.annotations?.expected;
  return typeof expected === "string" ? expected : void 0;
}
function getExpectedMessage(expected, issue) {
  const input = formatInput(issue);
  return input === void 0 ? `Expected ${expected}` : `Expected ${expected}, got ${input}`;
}
function formatCheck(check) {
  const expected = check.annotations?.expected;
  if (typeof expected === "string") return expected;
  switch (check._tag) {
    case "Filter":
      return "<filter>";
    case "FilterGroup":
      return check.checks.map((check) => formatCheck(check)).join(" & ");
  }
}
/**
 * Creates a {@link Formatter} that converts an {@link Issue} into a
 * human-readable multi-line string.
 *
 * **When to use**
 *
 * Use when you need to format a `SchemaIssue.Issue` as error messages for
 * logging, CLI output, or developer-facing diagnostics.
 *
 * **Details**
 *
 * - Flattens the issue tree into `{ message, path }` entries using
 *   {@link defaultLeafHook} and {@link defaultCheckHook}.
 * - Includes reported input in default messages when the node producing the
 *   message has an `input` field.
 * - Each entry is rendered as `"<message>"` or `"<message>\n  at <path>"`.
 * - Multiple entries are joined with newlines.
 *
 * **Gotchas**
 *
 * Formatting an issue can disclose input retained with `reportInput: true`.
 * Wrapper inputs are not inherited by child messages, and custom messages are
 * returned unchanged.
 *
 * **Example** (Formatting an issue as a string)
 *
 * ```ts import.meta.vitest
 * import { SchemaIssue } from "effect"
 *
 * const formatter = SchemaIssue.makeFormatterDefault()
 * formatter(new SchemaIssue.MissingKey(undefined)) // => "Missing key"
 * ```
 *
 * @see {@link makeFormatterStandardSchemaV1} — produces Standard Schema V1 format instead
 * @see {@link Formatter}
 *
 * @stability stable
 * @category formatting
 * @since 4.0.0
 */
function makeFormatterDefault() {
  return (issue) => formatIssue(issue, "");
}
/** @internal */
const defaultFormatter = /*#__PURE__*/ makeFormatterDefault();
function formatIssue(issue, path) {
  let message;
  switch (issue._tag) {
    case "Filter": {
      const annotated = defaultCheckHook(issue);
      if (annotated !== void 0) message = annotated;
      else {
        if (issue.issue._tag !== "InvalidValue") return formatIssue(issue.issue, path);
        const expected = findExpected(issue.issue);
        message =
          expected === void 0
            ? getExpectedMessage(formatCheck(issue.filter), issue)
            : getExpectedMessage(expected, issue.issue);
      }
      break;
    }
    case "Encoding":
      return formatIssue(issue.issue, path);
    case "Pointer":
      return formatIssue(issue.issue, path + formatPath(issue.path));
    case "Composite":
    case "AnyOf":
      if (issue._tag === "Composite" || issue.issues.length > 0)
        return issue.issues.map((issue) => formatIssue(issue, path)).join("\n");
      message = findMessage(issue) ?? getExpectedMessage(getExpected(issue.ast), issue);
      break;
    default:
      message = defaultLeafHook(issue);
  }
  return path ? `${message}\n  at ${path}` : message;
}
function findMessage(issue) {
  if (issue._tag === "Pointer") return;
  if (issue._tag === "Encoding") return findMessage(issue.issue);
  const message = (
    issue._tag === "Filter"
      ? issue.filter.annotations
      : "annotations" in issue
        ? issue.annotations
        : issue.ast.annotations
  )?.[
    issue._tag === "MissingKey"
      ? "messageMissingKey"
      : issue._tag === "UnexpectedKey"
        ? "messageUnexpectedKey"
        : "message"
  ];
  if (typeof message === "string") return message;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/cause.js
/** @internal */
function getSchemaIssue(cause) {
  let issue;
  for (const reason of cause.reasons) {
    if (!isFailReason(reason) || !isIssue(reason.error)) return;
    issue ??= reason.error;
  }
  return issue;
}
/** @internal */
function getSchemaIssueOrThrow(cause, message) {
  const issue = getSchemaIssue(cause);
  if (issue === void 0) throw new Error(message, { cause });
  return issue;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/SchemaGetter.js
const runGetter = (self, input, options) => {
  switch (self._tag) {
    case "Passthrough":
      return succeed$3(input);
    case "Transform":
      return succeed$3(map$3(input, self.transform));
    case "TransformOptional":
      return succeed$3(self.transform(input));
    case "TransformEffect":
      return isNone(input) ? succeedNone : mapEager(self.transform(input.value, options), some);
    case "TransformOptionalEffect":
      return self.transform(input, options);
  }
};
const makeGetter = (fields) => Object.assign(Object.create(Prototype), fields);
const composeOptionalEffect = (first, second) =>
  transformOptionalEffect((input, options) =>
    flatMapEager(runGetter(first, input, options), (output) => runGetter(second, output, options)),
  );
/**
 * Composes two getters by passing the output of the first to the second.
 *
 * **When to use**
 *
 * Use when a schema conversion requires multiple transformation steps.
 *
 * **Details**
 *
 * Composition forwards `Option.none()` to getters that handle optional values
 * and skips getters that operate only on present values. Composing with
 * {@link passthrough} returns the other getter unchanged. The function supports
 * both `compose(first, second)` and `first.pipe(compose(second))`.
 *
 * **Example** (Parsing and normalizing a number)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const getter = SchemaGetter.compose(
 *   SchemaGetter.transform<number, string>(Number),
 *   SchemaGetter.transform((n) => Math.max(0, n))
 * )
 *
 * Effect.runSync(SchemaGetter.run(getter, Option.some("-1"), {})) // => Option.some(0)
 * ```
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const compose = /*#__PURE__*/ dual(2, (self, other) => {
  if (self._tag === "Passthrough") return other;
  if (other._tag === "Passthrough") return self;
  switch (self._tag) {
    case "Transform":
      switch (other._tag) {
        case "Transform":
          return transform$1((input) => other.transform(self.transform(input)));
        case "TransformOptional":
          return transformOptional$1((input) => other.transform(map$3(input, self.transform)));
        case "TransformEffect":
          return transformEffect$1((input, options) =>
            other.transform(self.transform(input), options),
          );
        case "TransformOptionalEffect":
          return composeOptionalEffect(self, other);
      }
    case "TransformOptional":
      switch (other._tag) {
        case "Transform":
          return transformOptional$1((input) => map$3(self.transform(input), other.transform));
        case "TransformOptional":
          return transformOptional$1((input) => other.transform(self.transform(input)));
        case "TransformEffect":
        case "TransformOptionalEffect":
          return composeOptionalEffect(self, other);
      }
    case "TransformEffect":
      switch (other._tag) {
        case "Transform":
          return transformEffect$1((input, options) =>
            mapEager(self.transform(input, options), other.transform),
          );
        case "TransformOptional":
        case "TransformOptionalEffect":
          return composeOptionalEffect(self, other);
        case "TransformEffect":
          return transformEffect$1((input, options) =>
            flatMapEager(self.transform(input, options), (output) =>
              other.transform(output, options),
            ),
          );
      }
    case "TransformOptionalEffect":
      return composeOptionalEffect(self, other);
  }
});
/**
 * Creates a getter that always fails with the given issue.
 *
 * **When to use**
 *
 * Use when you need a schema getter that unconditionally rejects input.
 * - Building custom validation getters that produce specific error types.
 *
 * **Details**
 *
 * - Always fails with the `Issue` returned by `f`.
 * - The failure function receives the original `Option<E>` input and the
 *   effective `ParseOptions` for error context.
 *
 * **Example** (Defining an always-failing getter)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter, SchemaIssue } from "effect"
 *
 * const rejectAll = SchemaGetter.fail<string, string>(
 *   () => new SchemaIssue.InvalidValue({ message: "not allowed" })
 * )
 * const issue = await Effect.runPromise(
 *   Effect.flip(SchemaGetter.run(rejectAll, Option.some("x"), {}))
 * )
 * issue._tag // => "InvalidValue"
 * ```
 *
 * @see {@link forbidden} for a convenience helper for `Forbidden` issues
 * @see {@link checkEffect} to fail conditionally based on input value
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function fail(f) {
  return transformOptionalEffect((oe, options) => fail$2(f(oe, options)));
}
/**
 * Creates a getter that always fails with a `Forbidden` issue.
 *
 * **When to use**
 *
 * Use when you need a schema getter to disallow a field or direction
 * (encode/decode) entirely.
 * - You want a clear "forbidden" error message in schema validation output.
 *
 * **Details**
 *
 * - Always fails with `SchemaIssue.Forbidden`.
 * - The message function receives the `Option<E>` input for context.
 *
 * **Example** (Forbidding a decode direction)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const noEncode = SchemaGetter.forbidden<string, number>(
 *   () => "encoding is not supported"
 * )
 * const issue = await Effect.runPromise(
 *   Effect.flip(SchemaGetter.run(noEncode, Option.some(1), {}))
 * )
 * issue._tag // => "Forbidden"
 * ```
 *
 * @see {@link fail} to fail with a custom issue type
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function forbidden(message) {
  return fail((oe, options) => {
    const annotations = { message: message(oe) };
    return isSome(oe) ? new Forbidden(annotations, oe.value, options) : new Forbidden(annotations);
  });
}
/**
 * Getter that always fails with a `Forbidden` issue indicating that encoding is unsupported.
 *
 * **When to use**
 *
 * Use as the encode side of a decode-only Schema transformation.
 *
 * **Details**
 *
 * Its `Getter<never, unknown>` type is assignable to every encoding getter because it accepts any input and never
 * produces an output value.
 *
 * **Example** (Rejecting encoding)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const issue = await Effect.runPromise(
 *   Effect.flip(SchemaGetter.run(SchemaGetter.forbiddenEncoding, Option.some("value"), {}))
 * )
 * issue._tag // => "Forbidden"
 * ```
 *
 * @see {@link forbidden} for a forbidden getter with a custom message
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const forbiddenEncoding = /*#__PURE__*/ forbidden(() => "Encoding is not supported");
const passthrough_$1 = /*#__PURE__*/ makeGetter({ _tag: "Passthrough" });
function passthrough$1() {
  return passthrough_$1;
}
/**
 * Creates a getter that applies a pure function to present values.
 *
 * **When to use**
 *
 * Use when you need a schema getter for a pure, infallible transformation
 * between types.
 * - Building encode/decode pairs for `Schema.decodeTo`.
 *
 * **Details**
 *
 * - This is the most commonly used constructor.
 * - Transforms `Some(e)` to `Some(f(e))` and leaves `None` unchanged.
 * - Skips `None` inputs — only called when a value is present.
 * - Never fails.
 *
 * **Example** (Transforming strings to numbers)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaGetter } from "effect"
 *
 * const NumberFromString = Schema.String.pipe(
 *   Schema.decodeTo(Schema.Number, {
 *     decode: SchemaGetter.transform((s) => Number(s)),
 *     encode: SchemaGetter.transform((n) => String(n))
 *   })
 * )
 * Schema.decodeSync(NumberFromString)("42") // => 42
 * ```
 *
 * @see {@link transformEffect} when the transformation returns an `Effect`
 * @see {@link transformOptional} when you need to handle `None` inputs
 * @see {@link passthrough} when no transformation is needed
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function transform$1(f) {
  return makeGetter({
    _tag: "Transform",
    transform: f,
  });
}
/**
 * Creates a getter that applies an effectful transformation to present values.
 *
 * **When to use**
 *
 * Use when you need a schema getter for a transformation that may fail, require
 * Effect services, or run asynchronously.
 *
 * **Details**
 *
 * - Skips `None` inputs — only called when a value is present.
 * - On success, wraps the result in `Some`.
 * - On failure, propagates the `Issue`.
 *
 * **Example** (Parsing with failure)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter, SchemaIssue } from "effect"
 *
 * const safeParseInt = SchemaGetter.transformEffect<number, string>(
 *   (s, options) => {
 *     const n = parseInt(s, 10)
 *     return isNaN(n)
 *       ? Effect.fail(new SchemaIssue.InvalidValue({ message: "not an integer" }, s, options))
 *       : Effect.succeed(n)
 *   }
 * )
 * await Effect.runPromise(SchemaGetter.run(safeParseInt, Option.some("42"), {})) // => Option.some(42)
 * ```
 *
 * @see {@link transform} when transformation cannot fail
 * @see {@link transformOptionalEffect} when you need full `Option` control over the output
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function transformEffect$1(f) {
  return makeGetter({
    _tag: "TransformEffect",
    transform: f,
  });
}
/**
 * Creates a getter that transforms the full `Option` — both present and absent values.
 *
 * **When to use**
 *
 * Use when you need a schema getter to handle both `Some` and `None` cases.
 *
 * **Details**
 *
 * The getter is pure and never fails. It receives the full `Option<E>` and
 * must return `Option<T>`, so it can turn a present value into absent or an
 * absent value into present.
 *
 * **Example** (Filtering out empty strings)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const skipEmpty = SchemaGetter.transformOptional<string, string>((o) =>
 *   Option.filter(o, (s) => s.length > 0)
 * )
 * Effect.runSync(SchemaGetter.run(skipEmpty, Option.some(""), {})) // => Option.none()
 * ```
 *
 * @see {@link transform} when you only need to transform present values
 * @see {@link omit} when you always want `None`
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function transformOptional$1(f) {
  return makeGetter({
    _tag: "TransformOptional",
    transform: f,
  });
}
/**
 * Creates a getter that effectfully transforms the full `Option`.
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function transformOptionalEffect(f) {
  return makeGetter({
    _tag: "TransformOptionalEffect",
    transform: f,
  });
}
/**
 * Creates a getter that always returns `None`, effectively omitting the value from output.
 *
 * **When to use**
 *
 * Use when you need a schema getter to exclude a field during decoding or
 * encoding.
 *
 * **Details**
 *
 * - Always returns `Option.None` regardless of input.
 * - Never fails.
 *
 * **Example** (Omitting a field during encoding)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const omitField = SchemaGetter.omit<string>()
 * Effect.runSync(SchemaGetter.run(omitField, Option.some("hidden"), {})) // => Option.none()
 * ```
 *
 * @see {@link transformOptional} when you want conditional omission
 * @see {@link forbidden} when you want to fail instead of silently omit
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
function omit$1() {
  return transformOptional$1(() => none());
}
/**
 * Creates a getter that replaces `undefined` values with a default.
 *
 * **When to use**
 *
 * Use when you need a schema getter to provide a fallback for a field that may
 * be `undefined` in the encoded input.
 *
 * **Details**
 *
 * - If the input is `Some(undefined)` or `None`, produces `Some(T)`.
 * - If the input is `Some(value)` where value is not `undefined`, passes it through.
 * - `defaultValue` is an `Effect` that will be executed each time a default is needed.
 *
 * **Example** (Providing a default value for an optional field)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const withZero = SchemaGetter.withDefault(Effect.succeed(0))
 * await Effect.runPromise(SchemaGetter.run(withZero, Option.some(undefined), {})) // => Option.some(0)
 * ```
 *
 * @see {@link transformOptionalEffect} for custom effectful missing-key handling
 * @see {@link required} when absent input should fail instead of using a default
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function withDefault$1(defaultValue) {
  return transformOptionalEffect((o) => {
    const filtered = filter(o, isNotUndefined);
    return isSome(filtered) ? succeed$3(filtered) : mapEager(defaultValue, some);
  });
}
/**
 * Coerces any value to a `string` using the global `String()` constructor.
 *
 * **When to use**
 *
 * Use when you need a schema getter to coerce a present encoded value to a
 * string with `String()`.
 *
 * **Details**
 *
 * The getter is pure, never fails, and delegates to `globalThis.String`.
 *
 * **Example** (Coercing to a string)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const toString = SchemaGetter.String<number>()
 * Effect.runSync(SchemaGetter.run(toString, Option.some(42), {})) // => Option.some("42")
 * ```
 *
 * @see {@link transform} for custom string conversions
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
function String$3() {
  return transform$1(globalThis.String);
}
/**
 * Coerces any value to a `number` using the global `Number()` constructor.
 *
 * **When to use**
 *
 * Use when you need a schema getter to coerce a present encoded value to a
 * number with `Number()`.
 *
 * **Details**
 *
 * The getter is pure, never fails, and delegates to `globalThis.Number`. It may
 * produce `NaN` for non-numeric inputs.
 *
 * **Example** (Coercing to a number)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const toNumber = SchemaGetter.Number<string>()
 * Effect.runSync(SchemaGetter.run(toNumber, Option.some("42"), {})) // => Option.some(42)
 * ```
 *
 * @see {@link transformEffect} for effectful or validated number parsing
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
function Number$3() {
  return transform$1(globalThis.Number);
}
/**
 * Coerces a value to `bigint` using the global `BigInt()` constructor.
 *
 * **When to use**
 *
 * Use when you need a schema getter to convert a present string, number, or
 * boolean value to `bigint`.
 *
 * **Details**
 *
 * - Delegates to `globalThis.BigInt`.
 * - Throws at runtime if the input cannot be converted (e.g. non-numeric string).
 *
 * **Example** (Coercing to a bigint)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const toBigInt = SchemaGetter.BigInt<string>()
 * Effect.runSync(SchemaGetter.run(toBigInt, Option.some("42"), {})) // => Option.some(42n)
 * ```
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
function BigInt$3() {
  return transform$1(globalThis.BigInt);
}
/**
 * Strips whitespace from both ends of a string.
 *
 * **Details**
 *
 * - Pure, delegates to `String.trim`.
 *
 * **Example** (Trimming whitespace)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const trimmed = SchemaGetter.trim<string>()
 * Effect.runSync(SchemaGetter.run(trimmed, Option.some("  hello  "), {})) // => Option.some("hello")
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function trim$1() {
  return transform$1(trim$2);
}
/**
 * Converts a string to lowercase.
 *
 * **Details**
 *
 * - Pure, delegates to `String.toLowerCase`.
 *
 * **Example** (Converting to lowercase)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const lower = SchemaGetter.toLowerCase<string>()
 * Effect.runSync(SchemaGetter.run(lower, Option.some("HELLO"), {})) // => Option.some("hello")
 * ```
 *
 * @see {@link toUpperCase} for the inverse operation
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function toLowerCase$1() {
  return transform$1(toLowerCase$2);
}
function parseJson(options) {
  return transformEffect$1((input, parseOptions) =>
    try_({
      try: () => JSON.parse(input, options?.reviver),
      catch: () => new InvalidValue({ expected: "a valid JSON string" }, input, parseOptions),
    }),
  );
}
/**
 * Stringifies a present value using `JSON.stringify`.
 *
 * **When to use**
 *
 * Use when you need a schema getter to serialize a present decoded value to
 * JSON text during encoding.
 *
 * **Details**
 *
 * - Skips `None` inputs.
 * - If `JSON.stringify` throws or returns `undefined`, fails with
 *   `SchemaIssue.InvalidValue`.
 * - Supports optional `replacer` and `space` options, matching
 *   `JSON.stringify`.
 *
 * **Example** (Stringifying JSON)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const stringify = SchemaGetter.stringifyJson()
 * const result = await Effect.runPromise(SchemaGetter.run(stringify, Option.some({ a: 1 }), {}))
 * result // => Option.some("{\"a\":1}")
 * ```
 *
 * @see {@link parseJson} for the inverse operation
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function stringifyJson(options) {
  return transformEffect$1((input, parseOptions) =>
    try_({
      try: () => {
        const output = JSON.stringify(input, options?.replacer, options?.space);
        if (output === void 0) throw new TypeError("Value cannot be represented as JSON");
        return output;
      },
      catch: () => new InvalidValue({ expected: "a JSON-serializable value" }, input, parseOptions),
    }),
  );
}
/**
 * Parses a string into a record of key-value pairs.
 *
 * **When to use**
 *
 * Use when you need a schema getter to parse a present encoded string that
 * contains delimited key-value pairs (e.g. `"a=1,b=2"`).
 *
 * **Details**
 *
 * The getter is pure and never fails. It splits the string by `separator`
 * (default `,`) and then each pair at the first `keyValueSeparator` (default `=`),
 * preserving the rest of the value. An empty `keyValueSeparator` uses the first
 * two characters as the key and value. Pairs missing a key or value are skipped.
 *
 * **Example** (Parsing a key-value string)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const parse = SchemaGetter.splitKeyValue<string>()
 * const result = Effect.runSync(SchemaGetter.run(parse, Option.some("a=1,b=2"), {}))
 * result // => Option.some({ a: "1", b: "2" })
 * ```
 *
 * @see {@link joinKeyValue} for the inverse operation
 * @see {@link split} to split into an array of strings
 *
 * @stability stable
 * @category splitting
 * @since 4.0.0
 */
function splitKeyValue$1(options) {
  const separator = options?.separator ?? ",";
  const keyValueSeparator = options?.keyValueSeparator ?? "=";
  return transform$1((input) =>
    input.split(separator).reduce((acc, pair) => {
      if (keyValueSeparator === "") {
        const [key, value] = pair.split("");
        if (key && value) assignProperty(acc, key, value);
        return acc;
      }
      const index = pair.indexOf(keyValueSeparator);
      if (index <= 0) return acc;
      const key = pair.slice(0, index);
      const value = pair.slice(index + keyValueSeparator.length);
      if (value) assignProperty(acc, key, value);
      return acc;
    }, {}),
  );
}
/**
 * Joins a record of key-value pairs into a delimited string.
 *
 * **When to use**
 *
 * Use when you need a schema getter to serialize a present decoded record as a
 * delimited key-value string.
 *
 * **Details**
 *
 * The getter is pure and never fails. It joins entries with `separator`
 * (default `,`) and joins each key and value with `keyValueSeparator` (default
 * `=`).
 *
 * **Example** (Joining key-value records)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const join = SchemaGetter.joinKeyValue()
 * const result = Effect.runSync(SchemaGetter.run(join, Option.some({ a: "1", b: "2" }), {}))
 * result // => Option.some("a=1,b=2")
 * ```
 *
 * @see {@link splitKeyValue} for the inverse operation
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
function joinKeyValue(options) {
  const separator = options?.separator ?? ",";
  const keyValueSeparator = options?.keyValueSeparator ?? "=";
  return transform$1((input) =>
    Object.entries(input)
      .map(([key, value]) => `${key}${keyValueSeparator}${value}`)
      .join(separator),
  );
}
/**
 * Encodes a `Uint8Array` or string to a Base64 string.
 *
 * **Details**
 *
 * The getter is pure and never fails.
 *
 * **Example** (Encoding to Base64)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const encode = SchemaGetter.encodeBase64<Uint8Array>()
 * const result = Effect.runSync(SchemaGetter.run(encode, Option.some(new Uint8Array([1, 2, 3])), {}))
 * result // => Option.some("AQID")
 * ```
 *
 * @see {@link decodeBase64} for the inverse operation to `Uint8Array`
 * @see {@link decodeBase64String} for the inverse operation to `string`
 * @see {@link encodeBase64Url} for the URL-safe variant
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeBase64() {
  return transform$1(encode$1);
}
/**
 * Decodes a Base64 string to a `Uint8Array`.
 *
 * **Details**
 *
 * - Fails with `SchemaIssue.InvalidValue` if the input is not valid Base64.
 *
 * **Example** (Decoding Base64 to bytes)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const decode = SchemaGetter.decodeBase64<string>()
 * const result = await Effect.runPromise(SchemaGetter.run(decode, Option.some("AQID"), {}))
 * Option.map(result, Array.from) // => Option.some([1, 2, 3])
 * ```
 *
 * @see {@link decodeBase64String} to decode to `string` instead
 * @see {@link encodeBase64} for the inverse operation
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeBase64() {
  return transformEffect$1((input, options) =>
    mapErrorEager(
      fromResult(decode$1(input)),
      () => new InvalidValue({ expected: "a valid Base64 string" }, input, options),
    ),
  );
}
/**
 * Encodes a present string using `encodeURIComponent`.
 *
 * **Details**
 *
 * - Skips `None` inputs.
 * - May throw a `URIError` for malformed surrogate pairs; this exception is not
 *   converted into an `Issue`.
 *
 * **Example** (Encoding a URI component)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const encode = SchemaGetter.encodeUriComponent<string>()
 * const result = Effect.runSync(SchemaGetter.run(encode, Option.some("hello world"), {}))
 * result // => Option.some("hello%20world")
 * ```
 *
 * @see {@link decodeUriComponent} for the inverse operation
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUriComponent() {
  return transform$1(encodeURIComponent);
}
/**
 * Decodes a URI component encoded string using `decodeURIComponent`.
 *
 * **Details**
 *
 * - Fails with `SchemaIssue.InvalidValue` if the input contains malformed percent-encoding sequences.
 *
 * **Example** (Decoding a URI component)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, SchemaGetter } from "effect"
 *
 * const decode = SchemaGetter.decodeUriComponent<string>()
 * const result = await Effect.runPromise(SchemaGetter.run(decode, Option.some("hello%20world"), {}))
 * result // => Option.some("hello world")
 * ```
 *
 * @see {@link encodeUriComponent} for the inverse operation
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUriComponent() {
  return transformEffect$1((input, options) => {
    try {
      return succeed$3(globalThis.decodeURIComponent(input));
    } catch {
      return fail$2(new InvalidValue({ expected: "a valid URI component" }, input, options));
    }
  });
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/SchemaTransformation.js
/**
 * Constructs schema middleware from its decode and encode functions.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Middleware = class extends Class$2 {
  _tag = "Middleware";
  decode;
  encode;
  constructor(decode, encode) {
    super();
    this.decode = decode;
    this.encode = encode;
  }
  flip() {
    return new Middleware(this.encode, this.decode);
  }
};
const TypeId$5 = "~effect/SchemaTransformation/Transformation";
/**
 * Constructs a bidirectional schema transformation from its decode and encode getters.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Transformation = class extends Class$2 {
  [TypeId$5] = TypeId$5;
  _tag = "Transformation";
  decode;
  encode;
  constructor(decode, encode) {
    super();
    this.decode = decode;
    this.encode = encode;
  }
  flip() {
    return new Transformation(this.encode, this.decode);
  }
};
/**
 * Composes two schema transformations into a single bidirectional conversion.
 *
 * **When to use**
 *
 * Use when decoding and encoding require the same sequence of conversion
 * steps in opposite directions.
 *
 * **Details**
 *
 * Decoding applies `self.decode` followed by `other.decode`. Encoding applies
 * `other.encode` followed by `self.encode`. The function supports both
 * `composeTransformation(self, other)` and `composeTransformation(other)(self)`.
 *
 * **Example** (Trimming and lowercasing a string)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const transformation = SchemaTransformation.composeTransformation(
 *   SchemaTransformation.trim(),
 *   SchemaTransformation.toLowerCase()
 * )
 * const schema = Schema.String.pipe(Schema.decode(transformation))
 *
 * Schema.decodeUnknownSync(schema)("  HELLO  ") // => "hello"
 * ```
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const composeTransformation = /*#__PURE__*/ dual(
  2,
  (self, other) =>
    new Transformation(compose(self.decode, other.decode), compose(other.encode, self.encode)),
);
/**
 * Returns `true` if `u` is a `Transformation` instance.
 *
 * **When to use**
 *
 * Use to check whether a value is already a schema transformation before
 * wrapping it.
 *
 * **Details**
 *
 * - Pure predicate, no side effects.
 * - Acts as a TypeScript type guard.
 *
 * **Example** (Checking a value)
 *
 * ```ts import.meta.vitest
 * import { SchemaTransformation } from "effect"
 *
 * SchemaTransformation.isTransformation(SchemaTransformation.trim()) // => true
 * SchemaTransformation.isTransformation({ decode: null, encode: null }) // => false
 * ```
 *
 * @see {@link Transformation}
 * @see {@link makeTransformation}
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isTransformation(u) {
  return hasProperty(u, TypeId$5) && u[TypeId$5] === TypeId$5;
}
/**
 * Constructs a `Transformation` from an object with `decode` and `encode`
 * `Getter`s. If the input is already a `Transformation`, returns it as-is.
 *
 * **When to use**
 *
 * Use when you already have schema getter instances and want to pair them into
 * a schema transformation.
 * - You want idempotent wrapping (won't double-wrap).
 *
 * **Details**
 *
 * - Returns the input unchanged if it is already a `Transformation`.
 *
 * **Example** (Wrapping existing getters)
 *
 * ```ts import.meta.vitest
 * import { SchemaGetter, SchemaTransformation } from "effect"
 *
 * const t = SchemaTransformation.makeTransformation({
 *   decode: SchemaGetter.transform<number, string>((s) => Number(s)),
 *   encode: SchemaGetter.transform<string, number>((n) => String(n))
 * })
 * t._tag // => "Transformation"
 * ```
 *
 * @see {@link transform} — simpler constructor from pure functions
 * @see {@link transformEffect} — constructor from effectful functions
 * @see {@link Transformation}
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const makeTransformation = (options) => {
  if (isTransformation(options)) return options;
  return new Transformation(options.decode, options.encode);
};
/**
 * Creates a `Transformation` from effectful decode and encode functions.
 *
 * **When to use**
 *
 * Use when you need a schema transformation that may fail or require Effect
 * services.
 *
 * **Details**
 *
 * - Each function receives the input value and `ParseOptions`.
 * - Must return an `Effect` that succeeds with the output or fails with `Issue`.
 * - Skips `None` inputs (missing keys) — functions are only called on present values.
 *
 * **Example** (Parsing a date string that can fail)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Schema, SchemaIssue, SchemaTransformation } from "effect"
 *
 * const DateFromString = Schema.String.pipe(
 *   Schema.decodeTo(
 *     Schema.Date,
 *     SchemaTransformation.transformEffect({
 *       decode: (s, options) => {
 *         const d = new Date(s)
 *         return isNaN(d.getTime())
 *           ? Effect.fail(new SchemaIssue.InvalidValue({ message: "Invalid date" }, s, options))
 *           : Effect.succeed(d)
 *       },
 *       encode: (d) => Effect.succeed(d.toISOString())
 *     })
 *   )
 * )
 * Schema.decodeSync(DateFromString)("2024-01-01").toISOString() // => "2024-01-01T00:00:00.000Z"
 * ```
 *
 * @see {@link transform} — for infallible, pure transformations
 * @see {@link transformOptional} — for transformations that handle missing keys
 * @see {@link makeTransformation} — for transformations from existing Getters
 *
 * @stability stable
 * @category transforming
 * @since 3.10.0
 */
function transformEffect(options) {
  return new Transformation(transformEffect$1(options.decode), transformEffect$1(options.encode));
}
/**
 * Creates a `Transformation` from pure (sync, infallible) decode and encode
 * functions.
 *
 * **When to use**
 *
 * Use when you need an infallible schema transformation that does not require
 * Effect services.
 *
 * **Details**
 *
 * - Each function receives the input and returns the output directly.
 * - Skips `None` inputs (missing keys) — functions are only called on present values.
 * - Does not allocate Effects internally; uses optimized sync path.
 *
 * **Example** (Converting between cents and dollars)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const CentsFromDollars = Schema.Number.pipe(
 *   Schema.decodeTo(
 *     Schema.Number,
 *     SchemaTransformation.transform({
 *       decode: (dollars) => dollars * 100,
 *       encode: (cents) => cents / 100
 *     })
 *   )
 * )
 * Schema.decodeSync(CentsFromDollars)(2.5) // => 250
 * ```
 *
 * @see {@link transformEffect} — for fallible or effectful transformations
 * @see {@link transformOptional} — for transformations that handle missing keys
 * @see {@link passthrough} — when no conversion is needed
 *
 * @stability stable
 * @category transforming
 * @since 3.10.0
 */
function transform(options) {
  return new Transformation(transform$1(options.decode), transform$1(options.encode));
}
/**
 * Creates a `Transformation` where decode and encode operate on `Option`
 * values, giving full control over missing-key handling.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to produce or consume `Option.None`
 * for absent keys.
 * - You are working with optional struct fields.
 *
 * **Details**
 *
 * - Each function receives `Option<input>` and returns `Option<output>`.
 * - `Option.None` input means the key is absent; returning `Option.None`
 *   omits the key from the output.
 * - Pure and synchronous.
 *
 * **Example** (Converting an optional key to Option)
 *
 * ```ts import.meta.vitest
 * import { Option, Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.Struct({
 *   a: Schema.optionalKey(Schema.Number).pipe(
 *     Schema.decodeTo(
 *       Schema.Option(Schema.Number),
 *       SchemaTransformation.transformOptional({
 *         decode: Option.some,
 *         encode: Option.flatten
 *       })
 *     )
 *   )
 * })
 * Schema.decodeSync(schema)({}).a // => Option.none()
 * ```
 *
 * @see {@link transform} — when you don't need Option-level control
 * @see {@link optionFromOptionalKey} — built-in for the common optional-key-to-Option pattern
 * @see {@link optionFromOptional} — built-in for optional (undefined) to Option
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function transformOptional(options) {
  return new Transformation(
    transformOptional$1(options.decode),
    transformOptional$1(options.encode),
  );
}
/**
 * Transforms strings by trimming whitespace on decode.
 * Encode is passthrough (no change).
 *
 * **When to use**
 *
 * Use when you need a schema transformation to normalize user input by
 * stripping leading/trailing whitespace.
 *
 * **Details**
 *
 * Decoding applies `String.prototype.trim()`. Encoding is passthrough and
 * returns the string unchanged. This is not round-trippable if the original had
 * whitespace.
 *
 * **Example** (Trimming on decode)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const Trimmed = Schema.String.pipe(
 *   Schema.decode(SchemaTransformation.trim())
 * )
 * Schema.decodeSync(Trimmed)("  hello  ") // => "hello"
 * ```
 *
 * @see {@link toLowerCase}
 * @see {@link toUpperCase}
 * @see {@link snakeToCamel}
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function trim() {
  return new Transformation(trim$1(), passthrough$1());
}
/**
 * Transforms strings by lowercasing on decode.
 * Encode is passthrough.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to normalize strings to lowercase
 * (e.g. email addresses).
 *
 * **Details**
 *
 * Decoding applies `String.prototype.toLowerCase()`. Encoding is passthrough.
 * This is not round-trippable if the original had uppercase characters.
 *
 * **Example** (Lowercasing on decode)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const Lowered = Schema.String.pipe(
 *   Schema.decode(SchemaTransformation.toLowerCase())
 * )
 * Schema.decodeSync(Lowered)("HELLO") // => "hello"
 * ```
 *
 * @see {@link toUpperCase}
 * @see {@link trim}
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function toLowerCase() {
  return new Transformation(toLowerCase$1(), passthrough$1());
}
/**
 * Transforms a string into a record of key-value pairs and
 * encodes a record of key-value pairs into a string.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to parse query-string-like or
 * config-file-like strings into records.
 *
 * **Details**
 *
 * Decoding splits the string by `separator` (default `","`) into pairs, then
 * splits each pair by `keyValueSeparator` (default `"="`). Encoding joins the
 * record back into a string using the same separators. The transformation is
 * round-trippable when keys and values do not contain the separators.
 *
 * **Example** (Parsing key-value pairs)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const Config = Schema.String.pipe(
 *   Schema.decodeTo(
 *     Schema.Record(Schema.String, Schema.String),
 *     SchemaTransformation.splitKeyValue({ separator: ";", keyValueSeparator: ":" })
 *   )
 * )
 * Schema.decodeSync(Config)("host:localhost;port:3000") // => { host: "localhost", port: "3000" }
 * ```
 *
 * @see {@link trim}
 * @see {@link snakeToCamel}
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function splitKeyValue(options) {
  return new Transformation(splitKeyValue$1(options), joinKeyValue(options));
}
const passthrough_ = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ passthrough$1(),
  /*#__PURE__*/ passthrough$1(),
);
function passthrough() {
  return passthrough_;
}
/**
 * Decodes a `string` into a `number` and encodes a `number` back to a
 * `string`.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to parse numeric strings from APIs,
 * form data, or URL parameters.
 *
 * **Details**
 *
 * Decoding coerces the string to a number like `Number(s)`. Encoding coerces
 * the number to a string like `String(n)`. This does not validate that the
 * result is finite; combine with `Schema.Finite` or `Schema.Int` for stricter
 * checks.
 *
 * **Example** (Converting a string to a number)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.Number, SchemaTransformation.numberFromString)
 * )
 * Schema.decodeSync(schema)("42") // => 42
 * ```
 *
 * @see {@link bigintFromString}
 * @see {@link transform}
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const numberFromString = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ Number$3(),
  /*#__PURE__*/ String$3(),
);
/**
 * Decodes a `string` into a `bigint` and encodes a `bigint` back to a
 * `string`.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to parse large integer strings
 * (e.g. database IDs, blockchain values).
 *
 * **Details**
 *
 * Decoding coerces the string to a bigint like `BigInt(s)`. Encoding coerces
 * the bigint to a string like `String(n)`. Decoding fails if the string is not
 * a valid bigint representation.
 *
 * **Example** (Converting a string to a BigInt)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.BigInt, SchemaTransformation.bigintFromString)
 * )
 * Schema.decodeSync(schema)("42") // => 42n
 * ```
 *
 * @see {@link numberFromString}
 * @see {@link transform}
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const bigintFromString = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ BigInt$3(),
  /*#__PURE__*/ String$3(),
);
const isJsonError = (input) => isObject(input) && typeof input["message"] === "string";
const decodeJsonError = (input) => {
  const err = Object.hasOwn(input, "cause")
    ? new Error(input.message, { cause: decodeDefect(input.cause) })
    : new Error(input.message);
  if (typeof input.name === "string" && input.name !== "Error") err.name = input.name;
  if (typeof input.stack === "string") err.stack = input.stack;
  return err;
};
const encodeUnknownAsJson = (input) => {
  try {
    const json = formatJson(input);
    return json === void 0 ? format$1(input) : JSON.parse(json);
  } catch {
    return format$1(input);
  }
};
const encodeJsonError = (input, options, encodeDefect) => {
  const encoded = {
    name: input.name,
    message: typeof input.message === "string" ? input.message : "",
  };
  if (options?.includeStack && typeof input.stack === "string") encoded.stack = input.stack;
  if (!options?.excludeCause && input.cause !== void 0) encoded.cause = encodeDefect(input.cause);
  return encoded;
};
const makeEncodeDefect = (options) => {
  const seen = /* @__PURE__ */ new WeakSet();
  const encode = (input) => {
    if (isError(input)) {
      if (seen.has(input)) return "[Circular]";
      seen.add(input);
      const encoded = encodeJsonError(input, options, encode);
      seen.delete(input);
      return encoded;
    }
    return encodeUnknownAsJson(input);
  };
  return encode;
};
const decodeDefect = (input) => (isJsonError(input) ? decodeJsonError(input) : input);
/** @internal */
const defectFromJson = (options) =>
  transform({
    decode: decodeDefect,
    encode: makeEncodeDefect(options),
  });
/**
 * Decodes `T | null` into `Option<T>` and encodes `Option<T>` back to
 * `T | null`.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to convert nullable API fields to
 * `Option`.
 *
 * **Details**
 *
 * Decoding maps `null` to `Option.none()` and non-null values to
 * `Option.some(value)`. Encoding maps `Option.none()` to `null` and
 * `Option.some(value)` to `value`. The transformation is pure and synchronous.
 *
 * **Example** (Converting nullable values to an Option)
 *
 * ```ts import.meta.vitest
 * import { Option, Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.NullOr(Schema.String).pipe(
 *   Schema.decodeTo(
 *     Schema.Option(Schema.String),
 *     SchemaTransformation.optionFromNullOr()
 *   )
 * )
 * Schema.decodeSync(schema)(null) // => Option.none()
 * ```
 *
 * @see {@link optionFromNullishOr}
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function optionFromNullOr() {
  return transform({
    decode: fromNullOr,
    encode: getOrNull,
  });
}
/**
 * Decodes a `string` into a `URL` and encodes a `URL` back to its `href`
 * string.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to parse URL strings from user
 * input or API responses.
 *
 * **Details**
 *
 * Decoding checks `URL.canParse(s)` and fails with `InvalidValue` if the string
 * is not a valid URL. Encoding returns `url.href`.
 *
 * **Example** (Converting a string to a URL)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.URL, SchemaTransformation.urlFromString)
 * )
 * Schema.decodeSync(schema)("https://example.com/path").href // => "https://example.com/path"
 * ```
 *
 * @see {@link numberFromString}
 * @see {@link transformEffect}
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const urlFromString = /*#__PURE__*/ transformEffect({
  decode: (s, options) =>
    URL.canParse(s)
      ? succeed$3(new URL(s))
      : fail$2(new InvalidValue({ expected: "a valid URL string" }, s, options)),
  encode: (url) => succeed$3(url.href),
});
/**
 * Decodes a Base64-encoded `string` into a `Uint8Array` and encodes a
 * `Uint8Array` back to a Base64 string.
 *
 * **When to use**
 *
 * Use when you need a schema transformation for binary data transmitted as
 * Base64 strings (e.g. file uploads, API payloads).
 *
 * **Details**
 *
 * Decoding parses the Base64 string into bytes. Encoding writes the byte array
 * as a Base64 string.
 *
 * **Example** (Converting Base64 to a Uint8Array)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.Uint8Array, SchemaTransformation.uint8ArrayFromBase64String)
 * )
 * Array.from(Schema.decodeSync(schema)("AQID")) // => [1, 2, 3]
 * ```
 *
 * @see {@link fromJsonString}
 * @see `Schema.Uint8ArrayFromBase64` - a ready-made schema wrapping this transformation.
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const uint8ArrayFromBase64String = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ decodeBase64(),
  /*#__PURE__*/ encodeBase64(),
);
/**
 * Decodes a URI component encoded string into a UTF-8 string and encodes a
 * UTF-8 string into a URI component encoded string.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to store structured data in URL
 * query parameters or fragments, such as composing with `Schema.parseJson` to
 * round-trip JSON through a URL.
 *
 * **Details**
 *
 * Decoding calls `decodeURIComponent` and fails if the input contains malformed
 * percent-encoding sequences. Encoding calls `encodeURIComponent`.
 *
 * **Example** (Defining a URI component schema)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.String, SchemaTransformation.stringFromUriComponent)
 * )
 * Schema.decodeSync(schema)("hello%20world") // => "hello world"
 * ```
 *
 * @see {@link stringFromBase64String}
 * @see `Schema.StringFromUriComponent` - a ready-made schema wrapping this transformation.
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const stringFromUriComponent = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ decodeUriComponent(),
  /*#__PURE__*/ encodeUriComponent(),
);
/**
 * Decodes a JSON string with `JSON.parse` and encodes a value with
 * `JSON.stringify`.
 *
 * **When to use**
 *
 * Use when you need a schema transformation to decode JSON stored or
 * transmitted as a string, usually before composing with another schema that
 * validates the parsed structure.
 *
 * **Details**
 *
 * The `reviver` option is passed to `JSON.parse` during decoding. The
 * `replacer` and `space` options are passed to `JSON.stringify` during
 * encoding. Decode fails with `InvalidValue` for invalid JSON, and encode can
 * fail with `InvalidValue` when `JSON.stringify` cannot serialize the value.
 *
 * **Example** (Parsing JSON)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaTransformation } from "effect"
 *
 * const schema = Schema.String.pipe(
 *   Schema.decodeTo(Schema.Unknown, SchemaTransformation.fromJsonString())
 * )
 * Schema.decodeSync(schema)("{\"ok\":true}") // => { ok: true }
 * ```
 *
 * @see {@link uint8ArrayFromBase64String}
 * @see {@link fromFormData}
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function fromJsonString$1(options) {
  return new Transformation(parseJson(options ?? {}), stringifyJson(options));
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/SchemaAST.js
/**
 * Represents Effect schemas as runtime trees.
 *
 * Every `Schema` has an AST made from nodes for declarations, primitives,
 * literals, arrays, objects, unions, suspended schemas, checks, annotations,
 * encoding links, and parsing context. Most users work with the higher-level
 * `Schema` module. Use `SchemaAST` when you need to inspect schema nodes, build
 * ASTs programmatically, change encoded or decoded views, collect issues, or
 * run low-level schema checks.
 *
 * @stability stable
 * @since 4.0.0
 */
function makeGuard(tag) {
  return (ast) => ast._tag === tag;
}
/**
 * Narrows an {@link AST} to {@link Declaration}.
 *
 * **When to use**
 *
 * Use to recognize declaration AST nodes before running declaration-specific
 * handling.
 *
 * @see {@link Declaration} for the AST node type narrowed by this guard
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isDeclaration = /*#__PURE__*/ makeGuard("Declaration");
/**
 * Narrows an {@link AST} to {@link Null}.
 *
 * **When to use**
 *
 * Use to recognize an AST node that represents exactly the `null` literal when
 * inspecting, traversing, or transforming schema ASTs.
 *
 * @see {@link Null} for the AST node type narrowed by this guard
 * @see {@link null_ null} for the singleton `Null` AST instance
 * @see {@link isLiteral} for exact primitive literal AST nodes
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isNull = /*#__PURE__*/ makeGuard("Null");
/**
 * Narrows an {@link AST} to {@link Void}.
 *
 * **When to use**
 *
 * Use to identify AST nodes that represent the TypeScript `void` type before
 * handling `Void`-specific schema behavior.
 *
 * @see {@link isUndefined} for narrowing AST nodes that represent the literal `undefined` value instead of TypeScript `void`
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isVoid = /*#__PURE__*/ makeGuard("Void");
/**
 * Narrows an {@link AST} to {@link Never}.
 *
 * **When to use**
 *
 * Use to detect the AST node for a schema that can never match before handling
 * other schema variants.
 *
 * @see {@link Never} for the AST node type narrowed by this guard
 * @see {@link never} for the singleton `Never` AST instance
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isNever = /*#__PURE__*/ makeGuard("Never");
/**
 * Narrows an {@link AST} to {@link Literal}.
 *
 * **When to use**
 *
 * Use to recognize exact string, number, boolean, or bigint literal AST nodes.
 *
 * @see {@link Literal} for the AST node type narrowed by this guard
 * @see {@link LiteralValue} for the values stored by literal nodes
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isLiteral = /*#__PURE__*/ makeGuard("Literal");
/**
 * Narrows an {@link AST} to {@link UniqueSymbol}.
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isUniqueSymbol = /*#__PURE__*/ makeGuard("UniqueSymbol");
/**
 * Narrows an {@link AST} to {@link Arrays}.
 *
 * **When to use**
 *
 * Use to recognize array-like AST nodes before reading their element, rest, or
 * mutability metadata.
 *
 * @see {@link Arrays} for the AST node type narrowed by this guard
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isArrays = /*#__PURE__*/ makeGuard("Arrays");
/**
 * Narrows an {@link AST} to {@link Objects}.
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isObjects = /*#__PURE__*/ makeGuard("Objects");
/**
 * Narrows an {@link AST} to {@link Union}.
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isUnion = /*#__PURE__*/ makeGuard("Union");
/**
 * Narrows an {@link AST} to {@link Suspend}.
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isSuspend = /*#__PURE__*/ makeGuard("Suspend");
/**
 * Constructs a {@link Link}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Link = class {
  to;
  transformation;
  constructor(to, transformation) {
    this.to = to;
    this.transformation = transformation;
  }
};
/** @internal */
const defaultParseOptions = {};
/**
 * Constructs a {@link Context}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Context = class {
  isOptional;
  isMutable;
  /** Used for constructor default values (e.g. `withConstructorDefault` API) */
  constructorDefault;
  annotations;
  constructor(isOptional, isMutable, constructorDefault = void 0, annotations = void 0) {
    this.isOptional = isOptional;
    this.isMutable = isMutable;
    this.constructorDefault = constructorDefault;
    this.annotations = annotations;
  }
};
const TypeId$4 = "~effect/Schema";
var ASTNodeImpl = class {
  [TypeId$4] = TypeId$4;
  annotations;
  checks;
  encoding;
  context;
  constructor(annotations = void 0, checks = void 0, encoding = void 0, context = void 0) {
    this.annotations = annotations;
    this.checks = checks;
    this.encoding = encoding;
    this.context = context;
  }
  toString() {
    return `<${this._tag}>`;
  }
};
/**
 * Constructs a {@link Declaration}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Declaration = class extends ASTNodeImpl {
  _tag = "Declaration";
  typeParameters;
  run;
  encodingChecks;
  /**
   * Parser factory {@link flip} swaps in, so a declaration can behave
   * differently when encoding. `undefined` reuses `run`.
   */
  encodingRun;
  constructor(
    typeParameters,
    run,
    annotations,
    checks,
    encoding,
    context,
    encodingChecks,
    encodingRun,
  ) {
    super(annotations, checks, encoding, context);
    this.typeParameters = typeParameters;
    this.run = run;
    this.encodingChecks = encodingChecks;
    this.encodingRun = encodingRun;
  }
  /** @internal */
  getParser() {
    let run;
    return (input, options) => {
      if (input === missing) return missingExit;
      return (run ??= this.run(this.typeParameters))(input, this, options);
    };
  }
  _rebuild(recur, checks, encodingChecks, run, encodingRun) {
    const tps = mapOrSame(this.typeParameters, recur);
    return tps === this.typeParameters &&
      checks === this.checks &&
      encodingChecks === this.encodingChecks &&
      run === this.run &&
      encodingRun === this.encodingRun
      ? this
      : new Declaration(
          tps,
          run,
          this.annotations,
          checks,
          void 0,
          this.context,
          encodingChecks,
          encodingRun,
        );
  }
  /** @internal */
  recur(recur) {
    return this._rebuild(recur, this.checks, this.encodingChecks, this.run, this.encodingRun);
  }
  /** @internal */
  flip(recur) {
    return this._rebuild(
      recur,
      this.encodingChecks,
      this.checks,
      this.encodingRun ?? this.run,
      this.run,
    );
  }
  /** @internal */
  getExpected() {
    const expected = this.annotations?.expected;
    if (typeof expected === "string") return expected;
    return "<Declaration>";
  }
};
/**
 * Constructs a {@link Null}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Null$1 = class extends ASTNodeImpl {
  _tag = "Null";
  /** @internal */
  getParser() {
    return fromConst(this, null);
  }
  /** @internal */
  getExpected() {
    return "null";
  }
};
const null_ = /*#__PURE__*/ new Null$1();
/**
 * Constructs a {@link Undefined}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Undefined$1 = class extends ASTNodeImpl {
  _tag = "Undefined";
  /** @internal */
  getParser() {
    return fromConst(this, void 0);
  }
  /** @internal */
  toCodecJson() {
    return replaceEncoding(this, [undefinedToNull]);
  }
  /** @internal */
  getExpected() {
    return "undefined";
  }
};
const undefinedToNull = /*#__PURE__*/ new Link(
  null_,
  /*#__PURE__*/ new Transformation(
    /*#__PURE__*/ transform$1(() => void 0),
    /*#__PURE__*/ transform$1(() => null),
  ),
);
const undefined_ = /*#__PURE__*/ new Undefined$1();
/**
 * Constructs a {@link Void}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Void$1 = class extends ASTNodeImpl {
  _tag = "Void";
  /** @internal */
  getParser() {
    const succeed$5 = succeed(void 0);
    return (input) => (input === missing ? missingExit : succeed$5);
  }
  /** @internal */
  toCodecJson() {
    return replaceEncoding(this, [undefinedToNull]);
  }
  /** @internal */
  getExpected() {
    return "void";
  }
};
const void_ = /*#__PURE__*/ new Void$1();
/**
 * Constructs a {@link Never}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Never$1 = class extends ASTNodeImpl {
  _tag = "Never";
  /** @internal */
  getParser() {
    return fromRefinement(this, isNever$1);
  }
  /** @internal */
  getExpected() {
    return "never";
  }
};
/**
 * Provides the singleton {@link Never} AST instance.
 *
 * **When to use**
 *
 * Use to reuse the canonical bottom-type AST node when constructing,
 * comparing, or returning ASTs.
 *
 * @see {@link Never} for the AST node class
 * @see {@link isNever} for narrowing an AST to a `Never` node
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const never = /*#__PURE__*/ new Never$1();
/**
 * Constructs a {@link Any}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Any$1 = class extends ASTNodeImpl {
  _tag = "Any";
  /** @internal */
  getParser() {
    return fromRefinement(this, isUnknown);
  }
  /** @internal */
  getExpected() {
    return "any";
  }
};
/**
 * Provides the singleton {@link Any} AST instance.
 *
 * **When to use**
 *
 * Use when you need the singleton AST node for the TypeScript `any` type and
 * intentionally want parsing to accept every input value.
 *
 * @see {@link unknown} for the sibling AST singleton that also accepts every value while preserving the safer `unknown` type
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const any = /*#__PURE__*/ new Any$1();
/**
 * Constructs a {@link Unknown}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Unknown$1 = class extends ASTNodeImpl {
  _tag = "Unknown";
  /** @internal */
  getParser() {
    return fromRefinement(this, isUnknown);
  }
  /** @internal */
  getExpected() {
    return "unknown";
  }
};
/**
 * Provides the singleton {@link Unknown} AST instance.
 *
 * **When to use**
 *
 * Use when you need the reusable AST singleton for a schema node that accepts
 * every value while keeping parsed values opaque.
 *
 * @see {@link any} for the singleton that accepts every value as `any`
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const unknown = /*#__PURE__*/ new Unknown$1();
function formatTemplateLiteralPath(path) {
  return typeof path === "number" ? `parts[${path}]` : path;
}
function isTemplateLiteralPart(ast, path, validated) {
  if (validated.has(ast)) return true;
  if (ast.encoding)
    throw new Error(
      `TemplateLiteral parts cannot have an encoding at ${formatTemplateLiteralPath(path)}`,
    );
  let valid;
  switch (ast._tag) {
    case "String":
    case "Number":
    case "BigInt":
      valid = true;
      break;
    case "Literal":
      valid = !ast.checks;
      break;
    case "TemplateLiteral": {
      const currentPath = formatTemplateLiteralPath(path);
      valid =
        !ast.checks &&
        ast.parts.every((part, index) =>
          isTemplateLiteralPart(part, `${currentPath}.parts[${index}]`, validated),
        );
      break;
    }
    case "Union": {
      const currentPath = formatTemplateLiteralPath(path);
      valid =
        !ast.checks &&
        ast.types.every((part, index) =>
          isTemplateLiteralPart(part, `${currentPath}.types[${index}]`, validated),
        );
      break;
    }
    default:
      return false;
  }
  if (valid) validated.add(ast);
  return valid;
}
/**
 * Constructs a {@link TemplateLiteral}.
 *
 * **Gotchas**
 *
 * Throws if a part contains an encoding, including inside unions or nested
 * template literals. Parts must describe their values without transformations.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const TemplateLiteral$1 = class extends ASTNodeImpl {
  _tag = "TemplateLiteral";
  parts;
  /** @internal */
  encodedParts;
  /** @internal */
  literals;
  /** @internal */
  suffixLengths;
  constructor(parts, annotations, checks, encoding, context) {
    super(annotations, checks, encoding, context);
    const encodedParts = [];
    const literals = [];
    const validated = /* @__PURE__ */ new Set();
    for (let index = 0; index < parts.length; index++) {
      const part = parts[index];
      if (!isTemplateLiteralPart(part, index, validated))
        throw new Error(`Invalid TemplateLiteral part ${part._tag}`);
      encodedParts.push(part);
      literals.push(part._tag === "Literal" ? globalThis.String(part.literal) : void 0);
    }
    const suffixLengths = new Array(encodedParts.length + 1);
    suffixLengths[encodedParts.length] = 0;
    for (let i = encodedParts.length - 1; i >= 0; i--)
      suffixLengths[i] = suffixLengths[i + 1] + (literals[i]?.length ?? 0);
    this.parts = parts;
    this.encodedParts = encodedParts;
    this.literals = literals;
    this.suffixLengths = suffixLengths;
  }
  /** @internal */
  getParser(compile) {
    const tuple = new Arrays(false, this.parts.map(partFromString), []);
    const parser = compile(decodeTo$1(string, tuple, templateLiteralTransformation(this)));
    return (input, options) => {
      if (input === missing) return missingExit;
      const result = parser(input, options);
      if (result._tag === "Success") return sameExit;
      return mapBothEager(result, {
        onSuccess: () => input,
        onFailure: (issue) => new Composite(this, [issue], input, options),
      });
    };
  }
  /** @internal */
  getExpected() {
    return "string";
  }
  /** @internal */
  matchPart(s, options) {
    return segmentTemplateLiteralParts(this, s, options) === void 0 ? void 0 : s;
  }
};
function templateLiteralTransformation(template) {
  return new Transformation(
    transformEffect$1((s, options) => {
      const segments = segmentTemplateLiteralParts(template, s, options);
      if (segments) return succeed$3(segments);
      return fail$2(
        new InvalidValue({ expected: "a string matching template literal parts" }, s, options),
      );
    }),
    transform$1((parts) => parts.join("")),
  );
}
/**
 * Constructs a {@link Literal}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Literal$1 = class extends ASTNodeImpl {
  _tag = "Literal";
  literal;
  constructor(literal, annotations, checks, encoding, context) {
    super(annotations, checks, encoding, context);
    if (typeof literal === "number" && !globalThis.Number.isFinite(literal))
      throw new Error(`A numeric literal must be finite, got ${format$1(literal)}`);
    this.literal = literal;
  }
  /** @internal */
  getParser() {
    return fromConst(this, this.literal);
  }
  /** @internal */
  matchPart(s, _options) {
    return s === globalThis.String(this.literal) ? this.literal : void 0;
  }
  /** @internal */
  toCodecJson() {
    return typeof this.literal === "bigint" ? literalToString(this) : this;
  }
  /** @internal */
  toCodecStringTree() {
    return typeof this.literal === "string" ? this : literalToString(this);
  }
  /** @internal */
  getExpected() {
    return typeof this.literal === "string"
      ? JSON.stringify(this.literal)
      : globalThis.String(this.literal);
  }
};
function literalToString(ast) {
  const literalAsString = globalThis.String(ast.literal);
  return replaceEncoding(ast, [
    new Link(
      new Literal$1(literalAsString),
      new Transformation(
        transform$1(() => ast.literal),
        transform$1(() => literalAsString),
      ),
    ),
  ]);
}
/**
 * Constructs a {@link String}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const String$2 = class extends ASTNodeImpl {
  _tag = "String";
  /** @internal */
  getParser() {
    return fromRefinement(this, isString$1);
  }
  /** @internal */
  matchPart(s, options) {
    const checks = this.checks;
    return checks && !options.disableChecks && collectIssues(checks, s, void 0, this, options)
      ? void 0
      : s;
  }
  /** @internal */
  getExpected() {
    return "string";
  }
};
/**
 * Provides the singleton {@link String} AST instance.
 *
 * **When to use**
 *
 * Use as the shared `SchemaAST` node for unconstrained JavaScript strings.
 *
 * @see {@link String} for the AST node class
 * @see {@link isString} for narrowing an AST to a string node
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const string = /*#__PURE__*/ new String$2();
/**
 * Constructs a {@link Number}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Number$2 = class extends ASTNodeImpl {
  _tag = "Number";
  /** @internal */
  getParser() {
    return fromRefinement(this, isNumber);
  }
  /** @internal */
  matchKey(s, options) {
    return this._match(isStringNumberRegExp, s, options);
  }
  /** @internal */
  matchPart(s, options) {
    return this._match(isStringFiniteRegExp, s, options);
  }
  _match(regexp, s, options) {
    if (!regexp.test(s)) return void 0;
    const value = globalThis.Number(s);
    if (options.disableChecks || !this.checks) return value;
    return collectIssues(this.checks, value, void 0, this, options) ? void 0 : value;
  }
  /** @internal */
  toCodecJson() {
    if (
      this.checks &&
      (hasCheck(this.checks, "effect/schema/isFinite") ||
        hasCheck(this.checks, "effect/schema/isInt"))
    )
      return this;
    return replaceEncoding(this, [numberToJson]);
  }
  /** @internal */
  toCodecStringTree() {
    if (this.toCodecJson() === this) return replaceEncoding(this, [finiteToString]);
    return replaceEncoding(this, [numberToString]);
  }
  /** @internal */
  getExpected() {
    return "number";
  }
};
function hasCheck(checks, id) {
  return checks.some(
    (check) =>
      check.annotations?.representation?.id === id ||
      (check._tag === "FilterGroup" && hasCheck(check.checks, id)),
  );
}
/**
 * Provides the singleton {@link Number} AST instance.
 *
 * **When to use**
 *
 * Use when you need the canonical `SchemaAST` node for schemas that accept any
 * JavaScript number value.
 *
 * @see {@link Number} for the AST node class and serialization behavior
 * @see {@link Literal} for exact finite numeric literal AST nodes
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const number = /*#__PURE__*/ new Number$2();
/**
 * Constructs a {@link Boolean}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Boolean$1 = class extends ASTNodeImpl {
  _tag = "Boolean";
  /** @internal */
  getParser() {
    return fromRefinement(this, isBoolean);
  }
  /** @internal */
  getExpected() {
    return "boolean";
  }
};
/**
 * Provides the singleton {@link Boolean} AST instance.
 *
 * **When to use**
 *
 * Use to reuse the standard AST node that accepts either `true` or `false` when
 * constructing schema ASTs directly.
 *
 * @see {@link Boolean} for the AST node class
 * @see {@link Literal} for exact boolean literal AST nodes
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const boolean = /*#__PURE__*/ new Boolean$1();
/**
 * Constructs a {@link BigInt}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const BigInt$2 = class extends ASTNodeImpl {
  _tag = "BigInt";
  /** @internal */
  getParser() {
    return fromRefinement(this, isBigInt);
  }
  /** @internal */
  matchPart(s, options) {
    if (!isStringBigIntRegExp.test(s)) return void 0;
    const value = globalThis.BigInt(s);
    if (options.disableChecks || !this.checks) return value;
    return collectIssues(this.checks, value, void 0, this, options) ? void 0 : value;
  }
  /** @internal */
  toCodecStringTree() {
    return replaceEncoding(this, [bigIntToString]);
  }
  /** @internal */
  getExpected() {
    return "bigint";
  }
};
/**
 * Provides the singleton {@link BigInt} AST instance.
 *
 * **When to use**
 *
 * Use to reuse the canonical `BigInt` AST node when constructing, inspecting,
 * or transforming schemas at the AST level.
 *
 * @see {@link BigInt} for the AST node class and string-codec behavior
 * @see {@link isBigInt} for narrowing an AST to a `BigInt` node
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const bigInt = /*#__PURE__*/ new BigInt$2();
/**
 * Constructs a {@link Arrays}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Arrays = class extends ASTNodeImpl {
  _tag = "Arrays";
  isMutable;
  elements;
  rest;
  encodingChecks;
  constructor(isMutable, elements, rest, annotations, checks, encoding, context, encodingChecks) {
    super(annotations, checks, encoding, context);
    this.isMutable = isMutable;
    this.elements = elements;
    this.rest = rest;
    this.encodingChecks = encodingChecks;
    let hasOptional = false;
    for (let i = 0; i < elements.length; i++)
      if (isOptional(elements[i])) hasOptional = true;
      else if (hasOptional)
        throw new Error("A required element cannot follow an optional element. ts(1257)");
    if (hasOptional && rest.length > 1)
      throw new Error("A required element cannot follow an optional element. ts(1257)");
    for (let i = 1; i < rest.length; i++)
      if (isOptional(rest[i]))
        throw new Error("An optional element cannot follow a rest element. ts(1266)");
  }
  /** @internal */
  getParser(compile, compileField = compile) {
    const ast = this;
    let elements;
    let rest;
    const elementLen = ast.elements.length;
    const tailLen = Math.max(0, ast.rest.length - 1);
    function getParser(tailThreshold, index) {
      if (index < elementLen) return elements[index];
      else if (index >= tailThreshold) return rest[index - tailThreshold + 1];
      return rest[0];
    }
    const finish = (state) => {
      const { input, len, options } = state;
      if (ast.rest.length === 0 && len > elementLen)
        for (let i = elementLen; i < len; i++) {
          const unexpected = new UnexpectedKey(ast, input[i], options);
          const issue = new Pointer([i], unexpected);
          if (options.errors === "all") {
            if (state.issues) state.issues.push(issue);
            else state.issues = [issue];
          } else return fail$2(new Composite(ast, [issue], input, options));
        }
      if (state.issues) return fail$2(new Composite(ast, state.issues, input, options));
      return succeed(state.output);
    };
    const parse = (input, options) => {
      const len = input.length;
      const state = {
        ast,
        getParser,
        input,
        len,
        tailThreshold: Math.max(elementLen, len - tailLen),
        output: new globalThis.Array(len),
        issues: void 0,
        options,
      };
      const end = ast.rest.length === 0 ? elementLen : Math.max(len, elementLen + tailLen);
      const concurrency =
        options.concurrency === void 0 ? 1 : resolveConcurrency(options.concurrency);
      const eff =
        concurrency === 1
          ? parseArray(state, input, 0, end)
          : parseArrayConcurrent(state, input, {
              concurrency,
              end,
            });
      if (!eff) return finish(state);
      if (effectIsExit(eff)) return flatMapEager(eff, () => finish(state));
      let first = true;
      return suspend$1(() => {
        if (!first) return parse(input, options);
        first = false;
        return flatMap(eff, () => finish(state));
      });
    };
    return (input, options) => {
      if (input === missing) return missingExit;
      try {
        if (!Array.isArray(input)) return fail$2(new InvalidType(ast, input, options));
        if (!elements) {
          elements = ast.elements.map((ast) => ({
            ast,
            parser: compileField(ast),
          }));
          rest = ast.rest.map((ast) => ({
            ast,
            parser: compileField(ast),
          }));
        }
        return parse(input, options);
      } catch (error) {
        return die(error);
      }
    };
  }
  _rebuild(recur, checks, encodingChecks) {
    const elements = mapOrSame(this.elements, recur);
    const rest = mapOrSame(this.rest, recur);
    return elements === this.elements &&
      rest === this.rest &&
      checks === this.checks &&
      encodingChecks === this.encodingChecks
      ? this
      : new Arrays(
          this.isMutable,
          elements,
          rest,
          this.annotations,
          checks,
          void 0,
          this.context,
          encodingChecks,
        );
  }
  /** @internal */
  recur(recur) {
    return this._rebuild(recur, this.checks, this.encodingChecks);
  }
  /** @internal */
  flip(recur) {
    return this._rebuild(recur, this.encodingChecks, this.checks);
  }
  /** @internal */
  getExpected() {
    return "array";
  }
};
/** @internal */
function stepArray(s, item, exit, i) {
  if (exit._tag === "Failure") return wrapPropertyKeyIssue(s, s.ast, i, exit);
  const value = exit === sameExit ? item : exit[args];
  if (value !== missing) s.output[i] = value;
  else {
    const p = s.getParser(s.tailThreshold, i);
    if (isOptional(p.ast)) return;
    const issue = new Pointer([i], new MissingKey(p.ast.context?.annotations));
    if (s.options.errors === "all") {
      if (s.issues) s.issues.push(issue);
      else s.issues = [issue];
    } else return fail$3(new Composite(s.ast, [issue], s.input, s.options));
  }
}
const parseArrayOptions = {
  onItem(s, item, i) {
    const value = i < s.len ? item : missing;
    return s.getParser(s.tailThreshold, i).parser(value, s.options);
  },
  step: stepArray,
};
/** @internal */
const parseArray = /*#__PURE__*/ iterateEager()(parseArrayOptions);
const parseArrayConcurrent = /*#__PURE__*/ iterateConcurrent()(parseArrayOptions);
const wrapPropertyKeyIssue = (s, ast, key, exit) => {
  if (exit.cause.reasons.length === 0) return exit;
  const issue = getSchemaIssue(exit.cause);
  if (issue === void 0)
    return failCause(
      map$7(
        exit.cause,
        (issue) => new Composite(ast, [new Pointer([key], issue)], s.input, s.options),
      ),
    );
  const pointer = new Pointer([key], issue);
  if (s.options.errors === "all") {
    if (s.issues) s.issues.push(pointer);
    else s.issues = [pointer];
  } else return fail$3(new Composite(ast, [pointer], s.input, s.options));
};
/**
 * floating point or integer, with optional exponent
 * @internal
 */
const FINITE_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?";
/**
 * Returns the object keys that match the index signature parameter schema.
 * @internal
 */
function getIndexSignatureKeys(input, parameter, options = defaultParseOptions) {
  let stringKeys;
  let symbolKeys;
  function go(parameter) {
    switch (parameter._tag) {
      case "String":
      case "TemplateLiteral":
        return (stringKeys ??= Object.keys(input)).filter(
          (k) => parameter.matchPart(k, options) !== void 0,
        );
      case "Number":
        return (stringKeys ??= Object.keys(input)).filter(
          (k) => parameter.matchKey(k, options) !== void 0,
        );
      case "Symbol":
        return (symbolKeys ??= Object.getOwnPropertySymbols(input)).filter(
          (k) =>
            Object.prototype.propertyIsEnumerable.call(input, k) &&
            parameter.matchKey(k, options) !== void 0,
        );
      case "Union":
        return [...new Set(parameter.types.flatMap(go))];
      default:
        return [];
    }
  }
  return go(parameterFromPropertyKey(toEncoded$1(parameter)));
}
/**
 * Constructs a {@link PropertySignature}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const PropertySignature = class {
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
};
function isIndexSignatureParameterSide(ast) {
  switch (ast._tag) {
    case "String":
    case "Number":
    case "Symbol":
    case "TemplateLiteral":
      return true;
    case "Union":
      return ast.types.every(isIndexSignatureParameterSide);
    default:
      return false;
  }
}
function isIndexSignatureParameterEncodedSide(ast) {
  const encoded = getLastEncoding(ast);
  switch (encoded._tag) {
    case "String":
    case "Number":
    case "Symbol":
    case "TemplateLiteral":
      return true;
    case "Union":
      return encoded.types.every(isIndexSignatureParameterEncodedSide);
    default:
      return false;
  }
}
function isIndexSignatureParameter(ast) {
  return isIndexSignatureParameterSide(ast) && isIndexSignatureParameterEncodedSide(ast);
}
/**
 * Constructs a {@link IndexSignature}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const IndexSignature = class {
  parameter;
  type;
  constructor(parameter, type) {
    if (!isIndexSignatureParameter(parameter))
      throw new Error(`Invalid index signature parameter ${parameter._tag}`);
    this.parameter = parameter;
    this.type = type;
    if (isOptional(type) && !containsUndefined(type))
      throw new Error(
        "Cannot use `Schema.optionalKey` with index signatures, use `Schema.optional` instead.",
      );
  }
};
/**
 * Constructs a {@link Objects}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Objects = class extends ASTNodeImpl {
  _tag = "Objects";
  propertySignatures;
  indexSignatures;
  encodingChecks;
  constructor(
    propertySignatures,
    indexSignatures,
    annotations,
    checks,
    encoding,
    context,
    encodingChecks,
  ) {
    super(annotations, checks, encoding, context);
    this.propertySignatures = propertySignatures;
    this.indexSignatures = indexSignatures;
    this.encodingChecks = encodingChecks;
  }
  /** @internal */
  getParser(compile, compileField = compile) {
    const ast = this;
    const hasProperties = ast.propertySignatures.length;
    const indexCount = ast.indexSignatures.length;
    if (!hasProperties && !indexCount) return fromRefinement(ast, isNotNullish);
    let properties;
    let indexes;
    const compileMembers = () => {
      if (!properties) {
        properties = ast.propertySignatures.map((ps) => ({
          parser: compileField(ps.type),
          name: ps.name,
          type: ps.type,
        }));
        indexes = indexCount
          ? ast.indexSignatures.map((is) => ({
              is,
              parserKey: compile(parameterFromPropertyKey(is.parameter)),
              parserValue: compileField(is.type),
            }))
          : void 0;
      }
      return properties;
    };
    const makeFallback = () => {
      const expectedKeys = new Set(
        ast.propertySignatures.map((ps) =>
          typeof ps.name === "number" ? globalThis.String(ps.name) : ps.name,
        ),
      );
      const finishIndex = (s, key, k2, inputValue, exitValue) => {
        if (exitValue._tag === "Failure")
          return wrapPropertyKeyIssue(s, ast, key, exitValue) ?? void_$1;
        const value = exitValue === sameExit ? inputValue : exitValue[args];
        if (k2 !== missing && value !== missing) {
          if (
            hasProperties &&
            (expectedKeys.has(key) ||
              expectedKeys.has(typeof k2 === "number" ? globalThis.String(k2) : k2))
          )
            return void_$1;
          assignProperty(s.out, k2, value);
        }
        return void_$1;
      };
      const parseIndex = (s, key, index, exitKey) => {
        if (!exitKey) {
          const eff = index.parserKey(key, s.options);
          if (!effectIsExit(eff))
            return flatMap(exit(eff), (exit) => parseIndex(s, key, index, exit));
          exitKey = eff;
        }
        if (exitKey._tag === "Failure")
          return wrapPropertyKeyIssue(s, ast, key, exitKey) ?? void_$1;
        const k2 = exitKey === sameExit ? key : exitKey[args];
        const inputValue = s.input[key];
        const result = index.parserValue(inputValue, s.options);
        return effectIsExit(result)
          ? finishIndex(s, key, k2, inputValue, result)
          : flatMap(exit(result), (exit) => finishIndex(s, key, k2, inputValue, exit));
      };
      const parseStringIndex = (s, key, index) => {
        const inputValue = s.input[key];
        const result = index.parserValue(inputValue, s.options);
        return effectIsExit(result)
          ? finishIndex(s, key, key, inputValue, result)
          : flatMap(exit(result), (exit) => finishIndex(s, key, key, inputValue, exit));
      };
      const parseIndexes = indexCount
        ? iterateConcurrent()({
            onItem: (s, [key, index]) =>
              index.is.parameter === string
                ? parseStringIndex(s, key, index)
                : parseIndex(s, key, index),
            step: (_s, _item, exit) => (exit._tag === "Failure" ? exit : void 0),
          })
        : void 0;
      return fnUntracedEager(function* (input, options) {
        if (input === missing) return missing;
        if (!(typeof input === "object" && input !== null && !Array.isArray(input)))
          return yield* fail$2(new InvalidType(ast, input, options));
        compileMembers();
        const record = input;
        const out = {};
        const state = {
          ast,
          input: record,
          out,
          issues: void 0,
          options,
        };
        const errorsAllOption = options.errors === "all";
        const onExcessPropertyError = options.onExcessProperty === "error";
        const concurrency =
          options.concurrency === void 0 ? 1 : resolveConcurrency(options.concurrency);
        const indexKeys =
          indexCount && onExcessPropertyError
            ? ast.indexSignatures.map((index) =>
                getIndexSignatureKeys(record, index.parameter, options),
              )
            : void 0;
        if (onExcessPropertyError) {
          const coveredKeys = indexKeys ? new Set(expectedKeys) : expectedKeys;
          if (indexKeys) for (const keys of indexKeys) for (const key of keys) coveredKeys.add(key);
          const inputKeys = Reflect.ownKeys(record);
          for (let i = 0; i < inputKeys.length; i++) {
            const key = inputKeys[i];
            if (!coveredKeys.has(key) && Object.prototype.propertyIsEnumerable.call(record, key)) {
              const unexpected = new UnexpectedKey(ast, record[key], options);
              const issue = new Pointer([key], unexpected);
              if (errorsAllOption) {
                if (state.issues) state.issues.push(issue);
                else state.issues = [issue];
                continue;
              } else return yield* fail$2(new Composite(ast, [issue], input, options));
            }
          }
        }
        if (hasProperties) {
          const eff =
            concurrency === 1
              ? parseProperties(state, properties)
              : parsePropertiesConcurrent(state, properties, { concurrency });
          if (eff) yield* eff;
        }
        if (indexCount && concurrency === 1)
          for (let i = 0; i < indexCount; i++) {
            const index = indexes[i];
            const parse = index.is.parameter === string ? parseStringIndex : parseIndex;
            const keys =
              indexKeys?.[i] ??
              (index.is.parameter === string
                ? Object.keys(record)
                : getIndexSignatureKeys(record, index.is.parameter, options));
            for (let j = 0; j < keys.length; j++) {
              const eff = parse(state, keys[j], index);
              if (!effectIsExit(eff)) yield* eff;
              else if (eff._tag === "Failure") return yield* eff;
            }
          }
        else if (parseIndexes) {
          const keyPairs = empty$4();
          for (let i = 0; i < indexCount; i++) {
            const index = indexes[i];
            const keys =
              indexKeys?.[i] ??
              (index.is.parameter === string
                ? Object.keys(record)
                : getIndexSignatureKeys(record, index.is.parameter, options));
            for (let j = 0; j < keys.length; j++) keyPairs.push([keys[j], index]);
          }
          const eff = parseIndexes(state, keyPairs, { concurrency });
          if (eff) yield* eff;
        }
        if (state.issues) return yield* fail$2(new Composite(ast, state.issues, input, options));
        return out;
      });
    };
    if (indexCount) return makeFallback();
    let fallback;
    const resume = (state, index, pending) => {
      const property = properties[index];
      return flatMap(exit(pending), (exit) => {
        const terminal = stepProperty(state, property, exit);
        if (terminal) return terminal;
        const done = () => succeed(state.out);
        const eff = parseProperties(state, properties.slice(index + 1));
        return eff ? flatMapEager(eff, done) : done();
      });
    };
    return (input, options) => {
      if (input === missing) return missingExit;
      if (
        options.errors === "all" ||
        options.onExcessProperty !== void 0 ||
        (options.concurrency !== void 0 && resolveConcurrency(options.concurrency) !== 1)
      )
        return (fallback ??= makeFallback())(input, options);
      if (!(typeof input === "object" && input !== null && !Array.isArray(input)))
        return fail$2(new InvalidType(ast, input, options));
      const props = compileMembers();
      const record = input;
      const out = {};
      const state = {
        ast,
        input: record,
        out,
        issues: void 0,
        options,
      };
      try {
        for (let index = 0; index < props.length; index++) {
          const property = props[index];
          const name = property.name;
          const hasKey = hasPropertySignature(record, name);
          const value = hasKey ? record[name] : missing;
          const exit = property.parser(value, options);
          if (!effectIsExit(exit)) return resume(state, index, exit);
          if (exit === sameExit) {
            if (hasKey) assignProperty(out, name, value);
            continue;
          }
          const terminal = stepProperty(state, property, exit);
          if (terminal) return terminal;
        }
      } catch (error) {
        return die(error);
      }
      return succeed(out);
    };
  }
  _rebuild(recur, recurParameter, checks, encodingChecks) {
    const props = mapOrSame(this.propertySignatures, (ps) => {
      const t = recur(ps.type);
      return t === ps.type ? ps : new PropertySignature(ps.name, t);
    });
    const indexes = mapOrSame(this.indexSignatures, (is) => {
      const p = recurParameter(is.parameter);
      const t = recur(is.type);
      return p === is.parameter && t === is.type ? is : new IndexSignature(p, t);
    });
    return props === this.propertySignatures &&
      indexes === this.indexSignatures &&
      checks === this.checks &&
      encodingChecks === this.encodingChecks
      ? this
      : new Objects(props, indexes, this.annotations, checks, void 0, this.context, encodingChecks);
  }
  /** @internal */
  flip(recur) {
    return this._rebuild(recur, recur, this.encodingChecks, this.checks);
  }
  /** @internal */
  recur(recur, recurParameter = recur) {
    return this._rebuild(recur, recurParameter, this.checks, this.encodingChecks);
  }
  /** @internal */
  getExpected() {
    if (this.propertySignatures.length === 0 && this.indexSignatures.length === 0)
      return "object | array";
    return "object";
  }
};
/** @internal */
function stepProperty(s, p, exit) {
  if (exit._tag === "Failure") return wrapPropertyKeyIssue(s, s.ast, p.name, exit);
  if (exit === sameExit) return;
  const value = exit[args];
  if (value !== missing) {
    assignProperty(s.out, p.name, value);
    return;
  }
  delete s.out[p.name];
  if (!isOptional(p.type)) {
    const issue = new Pointer([p.name], new MissingKey(p.type.context?.annotations));
    if (s.options.errors === "all") {
      if (s.issues) s.issues.push(issue);
      else s.issues = [issue];
      return;
    } else return fail$3(new Composite(s.ast, [issue], s.input, s.options));
  }
}
const parsePropertiesOptions = {
  onItem(s, p) {
    if (!hasPropertySignature(s.input, p.name)) return p.parser(missing, s.options);
    const value = s.input[p.name];
    assignProperty(s.out, p.name, value);
    return p.parser(value, s.options);
  },
  step: stepProperty,
};
/** @internal */
const parseProperties = /*#__PURE__*/ iterateEager()(parsePropertiesOptions);
const parsePropertiesConcurrent = /*#__PURE__*/ iterateConcurrent()(parsePropertiesOptions);
function combineChecks(a, b) {
  if (!a) return b;
  if (!b) return a;
  return [...a, ...b];
}
/** @internal */
function struct(fields, checks, annotations) {
  return new Objects(
    Reflect.ownKeys(fields).map((key) => {
      return new PropertySignature(key, fields[key].ast);
    }),
    [],
    annotations,
    checks,
  );
}
/** @internal */
function getAST(self) {
  return self.ast;
}
/** @internal */
function tuple(elements, checks = void 0) {
  return new Arrays(
    false,
    elements.map((e) => e.ast),
    [],
    void 0,
    checks,
  );
}
/** @internal */
function union(members, options, checks) {
  return new Union$1(members.map(getAST), options, void 0, checks);
}
/** @internal */
function structWithRest(ast, records) {
  if (ast.encoding || records.some((r) => r.encoding))
    throw new Error("StructWithRest does not support encodings");
  let propertySignatures = ast.propertySignatures;
  let indexSignatures = ast.indexSignatures;
  let checks = ast.checks;
  for (const record of records) {
    for (const propertySignature of record.propertySignatures)
      if (propertySignatures.some((ps) => ps.name === propertySignature.name))
        throw new Error(
          `Duplicate identifier: ${JSON.stringify(propertySignature.name)}. ts(2300)`,
        );
    propertySignatures = propertySignatures.concat(record.propertySignatures);
    indexSignatures = indexSignatures.concat(record.indexSignatures);
    checks = combineChecks(checks, record.checks);
  }
  return new Objects(propertySignatures, indexSignatures, void 0, checks);
}
/** @internal */
function mutable$1(ast) {
  if (ast.encoding) throw new Error("mutable does not support encodings");
  return new Arrays(
    true,
    ast.elements,
    ast.rest,
    ast.annotations,
    ast.checks,
    void 0,
    ast.context,
    ast.encodingChecks,
  );
}
const toCandidate = /*#__PURE__*/ memoizeIdempotent((ast) => {
  while (true) {
    if (isSuspend(ast)) return unknown;
    const encoding = ast.encoding;
    if (!encoding) return ast.recur?.(toCandidate, identity) ?? ast;
    if (
      encoding.some(
        (link) =>
          link.transformation._tag === "Middleware" && link.transformation.decode !== identity,
      )
    )
      return unknown;
    ast = encoding[encoding.length - 1].to;
  }
});
function getCandidateTypes(ast) {
  switch (ast._tag) {
    case "Null":
      return ["null"];
    case "Undefined":
      return ["undefined"];
    case "String":
    case "TemplateLiteral":
      return ["string"];
    case "Number":
      return ["number"];
    case "Boolean":
      return ["boolean"];
    case "Symbol":
    case "UniqueSymbol":
      return ["symbol"];
    case "BigInt":
      return ["bigint"];
    case "Arrays":
      return ["array"];
    case "ObjectKeyword":
      return ["object", "array", "function"];
    case "Objects":
      return ast.propertySignatures.length || ast.indexSignatures.length
        ? ["object"]
        : ["string", "number", "boolean", "symbol", "bigint", "object", "array", "function"];
    case "Enum":
      return Array.from(new Set(ast.enums.map(([, v]) => typeof v)));
    case "Literal":
      return [typeof ast.literal];
    case "Union":
      return Array.from(new Set(ast.types.flatMap(getCandidateTypes)));
    default:
      return [
        "null",
        "undefined",
        "string",
        "number",
        "boolean",
        "symbol",
        "bigint",
        "object",
        "array",
        "function",
      ];
  }
}
/** @internal */
function collectSentinels(ast) {
  switch (ast._tag) {
    default:
      return [];
    case "Declaration": {
      const s = ast.annotations?.[SENTINELS_ANNOTATION_KEY];
      return Array.isArray(s) ? s : [];
    }
    case "Objects":
      return ast.propertySignatures.flatMap((ps) => {
        const type = ps.type;
        if (!isOptional(type)) {
          if (isLiteral(type))
            return [
              {
                key: ps.name,
                literal: type.literal,
              },
            ];
          if (isUniqueSymbol(type))
            return [
              {
                key: ps.name,
                literal: type.symbol,
              },
            ];
        }
        return [];
      });
    case "Arrays":
      return ast.elements.flatMap((e, i) => {
        if (!isOptional(e)) {
          if (isLiteral(e))
            return [
              {
                key: i,
                literal: e.literal,
              },
            ];
          if (isUniqueSymbol(e))
            return [
              {
                key: i,
                literal: e.symbol,
              },
            ];
        }
        return [];
      });
    case "Union": {
      if (ast.types.length === 0) return [];
      const members = ast.types.map((type) => collectSentinels(toCandidate(type)));
      return members[0].filter((s) =>
        members.every((sentinels) =>
          sentinels.some((o) => o.key === s.key && o.literal === s.literal),
        ),
      );
    }
    case "Suspend":
      return collectSentinels(ast.thunk());
  }
}
const candidateIndexCache = /*#__PURE__*/ new WeakMap();
const emptyCandidates = /*#__PURE__*/ Object.freeze([]);
const getRuntimeType = (input) =>
  input === null ? "null" : Array.isArray(input) ? "array" : typeof input;
const hasPropertySignature = (input, key) =>
  key === "__proto__" ? Object.hasOwn(input, key) : key in input;
/** @internal */
function getCandidateIndex(types) {
  let index = candidateIndexCache.get(types);
  if (index) return index;
  let bySentinel;
  let sentinelCandidateCount = 0;
  let otherwise;
  let literalCandidates;
  let onlyLiterals = true;
  const literalOf = [];
  for (let i = 0; i < types.length; i++) {
    const a = types[i];
    const encoded = toCandidate(a);
    if (isNever(encoded)) continue;
    if (isLiteral(encoded) || isUniqueSymbol(encoded)) {
      literalCandidates ??= /* @__PURE__ */ new Map();
      const literal = isLiteral(encoded) ? encoded.literal : encoded.symbol;
      literalOf[i] = literal;
      let arr = literalCandidates.get(literal);
      if (!arr) literalCandidates.set(literal, (arr = []));
      arr.push(i);
    } else onlyLiterals = false;
    const sentinels = collectSentinels(encoded);
    if (sentinels.length) {
      bySentinel ??= /* @__PURE__ */ new Map();
      sentinelCandidateCount++;
      for (const { key, literal } of sentinels) {
        let entry = bySentinel.get(key);
        if (!entry)
          bySentinel.set(key, (entry = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Set()]));
        entry[1].add(i);
        let indexes = entry[0].get(literal);
        if (!indexes) entry[0].set(literal, (indexes = /* @__PURE__ */ new Set()));
        indexes.add(i);
      }
    } else {
      otherwise ??= {};
      const candidateTypes = getCandidateTypes(encoded);
      for (const t of candidateTypes) (otherwise[t] ??= []).push(i);
    }
  }
  const fallbacks = {};
  const getFallback = (type) =>
    (fallbacks[type] ??= Object.freeze(otherwise?.[type] ?? emptyCandidates));
  if (onlyLiterals && literalCandidates) {
    literalCandidates.forEach(Object.freeze);
    index = (input) => literalCandidates.get(input) ?? emptyCandidates;
  } else if (bySentinel?.size === 1 && !otherwise) {
    const [key, [byValue]] = bySentinel.entries().next().value;
    const candidates = /* @__PURE__ */ new Map();
    for (const [literal, indexes] of byValue)
      candidates.set(literal, Object.freeze(Array.from(indexes)));
    const all = Object.freeze(types.map((_, i) => i));
    index = (input, isConstructor) => {
      if (isObjectKeyword(input)) {
        const value = hasPropertySignature(input, key) ? input[key] : void 0;
        if (value !== void 0) return candidates.get(value) ?? emptyCandidates;
        if (isConstructor) return all;
      }
      return emptyCandidates;
    };
  } else if (bySentinel) {
    let commonSentinel;
    for (const entry of bySentinel)
      if (
        (!commonSentinel || entry[1][0].size > commonSentinel[1][0].size) &&
        entry[1][1].size === sentinelCandidateCount
      )
        commonSentinel = entry;
    index = (input, isConstructor) => {
      const runtimeType = getRuntimeType(input);
      if (!isObjectKeyword(input)) return getFallback(runtimeType);
      const selected = new Set(otherwise?.[runtimeType]);
      let directKey;
      if (commonSentinel) {
        const [key, [byValue]] = commonSentinel;
        const hasKey = hasPropertySignature(input, key);
        const value = hasKey ? input[key] : void 0;
        if (hasKey && (!isConstructor || value !== void 0)) {
          const match = byValue.get(value);
          if (!match) return getFallback(runtimeType);
          for (const i of match) selected.add(i);
          directKey = key;
        }
      }
      if (directKey === void 0)
        for (const [key, [byValue, all]] of bySentinel) {
          const hasKey = hasPropertySignature(input, key);
          const value = hasKey ? input[key] : void 0;
          if (hasKey && (!isConstructor || value !== void 0)) {
            const match = byValue.get(value);
            if (match) for (const i of match) selected.add(i);
          } else if (isConstructor) for (const i of all) selected.add(i);
        }
      for (const [key, [byValue, all]] of bySentinel) {
        if (key === directKey) continue;
        const hasKey = hasPropertySignature(input, key);
        const value = hasKey ? input[key] : void 0;
        if (hasKey && (!isConstructor || value !== void 0)) {
          const match = byValue.get(value);
          for (const i of selected) if (all.has(i) && !match?.has(i)) selected.delete(i);
        }
      }
      return Array.from(selected).sort((a, b) => a - b);
    };
  } else
    index = (input) => {
      const fallback = getFallback(getRuntimeType(input));
      return literalCandidates
        ? fallback.filter((i) => literalOf[i] === void 0 || literalOf[i] === input)
        : fallback;
    };
  candidateIndexCache.set(types, index);
  return index;
}
/**
 * Constructs a {@link Union}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Union$1 = class extends ASTNodeImpl {
  _tag = "Union";
  types;
  options;
  encodingChecks;
  constructor(types, options, annotations, checks, encoding, context, encodingChecks) {
    super(annotations, checks, encoding, context);
    this.types = types;
    this.options = options;
    this.encodingChecks = encodingChecks;
  }
  /** @internal */
  getParser(compile, compileField) {
    const ast = this;
    const isConstructor = compileField !== void 0;
    const parsers = [];
    const parser = (i) => (parsers[i] ??= compile(ast.types[i]));
    let index;
    return (input, options) => {
      if (input === missing) return missingExit;
      const candidates = (index ??= getCandidateIndex(ast.types))(input, isConstructor);
      if (candidates.length === 0) return fail$2(new AnyOf(ast, [], input, options));
      if (candidates.length === 1) {
        const result = parser(candidates[0])(input, options);
        if (result._tag === "Success") return result;
        return effectIsExit(result)
          ? failSingleUnionCandidate(ast, result.cause, input, options)
          : catchSingleUnionCandidate(ast, result, input, options);
      }
      return parseUnionCandidates(ast, parser, candidates, input, options);
    };
  }
  _rebuild(recur, checks, encodingChecks) {
    const types = mapOrSame(this.types, recur);
    return types === this.types && checks === this.checks && encodingChecks === this.encodingChecks
      ? this
      : new Union$1(
          types,
          this.options,
          this.annotations,
          checks,
          void 0,
          this.context,
          encodingChecks,
        );
  }
  /** @internal */
  recur(recur) {
    return this._rebuild(recur, this.checks, this.encodingChecks);
  }
  /** @internal */
  flip(recur) {
    return this._rebuild(recur, this.encodingChecks, this.checks);
  }
  /** @internal */
  matchPart(s, options) {
    for (const type of this.types) {
      const out = type.matchPart(s, options);
      if (out !== void 0) return out;
    }
  }
  /** @internal */
  getExpected(getExpected) {
    const expected = this.annotations?.expected;
    if (typeof expected === "string") return expected;
    if (this.types.length === 0) return "never";
    const types = this.types.map((type) => {
      const encoded = toEncoded$1(type);
      switch (encoded._tag) {
        case "Arrays": {
          const literals = encoded.elements.filter(isLiteral);
          if (literals.length > 0)
            return `${formatIsMutable(encoded.isMutable)}[ ${literals.map((e) => getExpected(e) + formatIsOptional(e.context?.isOptional)).join(", ")}, ... ]`;
          break;
        }
        case "Objects": {
          const literals = encoded.propertySignatures.filter((ps) => isLiteral(ps.type));
          if (literals.length > 0)
            return `{ ${literals.map((ps) => `${formatIsMutable(ps.type.context?.isMutable)}${formatPropertyKey(ps.name)}${formatIsOptional(ps.type.context?.isOptional)}: ${getExpected(ps.type)}`).join(", ")}, ... }`;
          break;
        }
      }
      return getExpected(encoded);
    });
    return Array.from(new Set(types)).join(" | ");
  }
};
function failSingleUnionCandidate(ast, cause, input, options) {
  const issue = getSchemaIssue(cause);
  if (!issue) return failCause(cause);
  return fail$3(new AnyOf(ast, [issue], input, options));
}
function catchSingleUnionCandidate(ast, result, input, options) {
  return catchCause(result, (cause) => failSingleUnionCandidate(ast, cause, input, options));
}
function parseUnionCandidates(ast, parser, candidates, input, options) {
  const state = {
    ast,
    parser,
    input,
    out: void 0,
    successes: ast.options?.mode === "oneOf" ? [] : void 0,
    issues: void 0,
    options,
  };
  const eff = parseUnion(state, candidates);
  if (!eff) {
    if (state.out) return state.out;
    return fail$2(new AnyOf(ast, state.issues ?? [], input, options));
  }
  if (effectIsExit(eff)) return resumeUnion(eff, state);
  let first = true;
  return suspend$1(() => {
    if (!first) return parseUnionCandidates(ast, parser, candidates, input, options);
    first = false;
    return resumeUnion(eff, state);
  });
}
function resumeUnion(eff, state) {
  return flatMapEager(eff, (_) => {
    if (state.out === sameExit) return succeed$3(state.input);
    if (state.out) return state.out;
    return fail$2(new AnyOf(state.ast, state.issues ?? [], state.input, state.options));
  });
}
const parseUnion = /*#__PURE__*/ iterateEager()({
  onItem(s, i) {
    return s.parser(i)(s.input, s.options);
  },
  step(s, i, exit) {
    if (exit._tag === "Failure") {
      const issue = getSchemaIssue(exit.cause);
      if (issue === void 0) return exit;
      if (s.issues) s.issues.push(issue);
      else s.issues = [issue];
    } else {
      if (s.out && s.successes) {
        s.successes.push(s.ast.types[i]);
        return fail$3(new OneOf(s.ast, s.successes, s.input, s.options));
      }
      s.out = exit;
      if (s.successes) s.successes.push(s.ast.types[i]);
      else return void_$1;
    }
  },
});
const nonFiniteLiterals = /*#__PURE__*/ new Union$1([
  /*#__PURE__*/ new Literal$1("Infinity"),
  /*#__PURE__*/ new Literal$1("-Infinity"),
  /*#__PURE__*/ new Literal$1("NaN"),
]);
function formatIsMutable(isMutable) {
  return isMutable ? "" : "readonly ";
}
function formatIsOptional(isOptional) {
  return isOptional ? "?" : "";
}
/**
 * Constructs a {@link Suspend}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Suspend = class extends ASTNodeImpl {
  _tag = "Suspend";
  thunk;
  constructor(thunk, annotations, checks, encoding, context) {
    if (checks) throw new Error("Cannot add checks to Suspend");
    super(annotations, void 0, encoding, context);
    let ast;
    this.thunk = () => (ast ??= thunk());
  }
  /** @internal */
  getParser(compile) {
    let parser;
    return (input, options) => (parser ??= compile(this.thunk()))(input, options);
  }
  /** @internal */
  recur(recur) {
    return new Suspend(() => recur(this.thunk()), this.annotations, void 0, void 0, this.context);
  }
  /** @internal */
  getExpected(getExpected) {
    return getExpected(this.thunk());
  }
};
/**
 * Constructs a {@link Filter}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Filter = class extends Class$2 {
  _tag = "Filter";
  run;
  annotations;
  /**
   * Whether the parsing process should be aborted after this check has failed.
   */
  aborted;
  constructor(run, annotations = void 0, aborted = false) {
    super();
    this.run = run;
    this.annotations = annotations;
    this.aborted = aborted;
  }
  annotate(annotations) {
    return new Filter(
      this.run,
      {
        ...this.annotations,
        ...annotations,
      },
      this.aborted,
    );
  }
  abort() {
    return new Filter(this.run, this.annotations, true);
  }
  and(other, annotations) {
    return new FilterGroup([this, other], annotations);
  }
};
/**
 * Constructs a {@link FilterGroup}.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const FilterGroup = class extends Class$2 {
  _tag = "FilterGroup";
  checks;
  annotations;
  constructor(checks, annotations = void 0) {
    super();
    this.checks = checks;
    this.annotations = annotations;
  }
  annotate(annotations) {
    return new FilterGroup(this.checks, {
      ...this.annotations,
      ...annotations,
    });
  }
  and(other, annotations) {
    return new FilterGroup([this, other], annotations);
  }
};
/** @internal */
function makeFilter$1(filter, annotations, aborted = false) {
  return new Filter(
    (input, ast, options) =>
      normalizeFilterOutput(ast, filter(input, ast, options), input, options),
    annotations,
    aborted,
  );
}
/** @internal */
function makeFilterByGuard(is, annotations) {
  return new Filter(
    (input, _ast, options) => (is(input) ? void 0 : new InvalidValue(void 0, input, options)),
    annotations,
    true,
  );
}
/** @internal */
function isFinite$1(annotations) {
  return makeFilter$1((n) => globalThis.Number.isFinite(n), {
    expected: "a finite number",
    representation: {
      id: "effect/schema/isFinite",
      payload: null,
    },
    toJsonSchema: () => ({ type: "number" }),
    toCode: () => ({ runtime: "Schema.isFinite()" }),
    arbitraryConstraint: { number: "finite" },
    ...annotations,
  });
}
/** @internal */
const finite = /*#__PURE__*/ appendChecks(number, [/*#__PURE__*/ isFinite$1()]);
const numberToJson = /*#__PURE__*/ new Link(
  /*#__PURE__*/ new Union$1([finite, nonFiniteLiterals]),
  /*#__PURE__*/ new Transformation(
    /*#__PURE__*/ Number$3(),
    /*#__PURE__*/ transform$1((n) => (globalThis.Number.isFinite(n) ? n : globalThis.String(n))),
  ),
);
/**
 * Creates a {@link Filter} that validates strings by running `RegExp.test`.
 *
 * **When to use**
 *
 * Use when string validation should be represented as a schema `Filter` backed
 * by a regular expression.
 *
 * **Details**
 *
 * The filter can be used with `Schema.filter` or attached directly to a
 * `String` AST node through checks. The regular expression is cloned and its
 * `lastIndex` is reset before each test, so global and sticky expressions are
 * deterministic and the provided regular expression is not mutated. The
 * regular expression source is stored in annotations for serialization and
 * arbitrary generation.
 *
 * **Gotchas**
 *
 * Arbitrary metadata preserves both `regExp.source` and `regExp.flags`.
 * Implementations that cannot consume all flags may still use the source as a
 * generation hint because the Schema filter validates every generated value.
 * JSON Schema has no way to carry JavaScript regular-expression flags. Unless
 * annotations provide `toJsonSchema`, the RegExp constraint is omitted from
 * JSON Schema export.
 *
 * **Example** (Validating an email pattern)
 *
 * ```ts import.meta.vitest
 * import { SchemaAST } from "effect"
 *
 * const emailFilter = SchemaAST.isPattern(/^[^@]+@[^@]+$/)
 * emailFilter.run("alice@example.com", SchemaAST.string, {}) // => undefined
 * emailFilter.run("invalid", SchemaAST.string, {})?._tag // => "InvalidValue"
 * ```
 *
 * @see {@link Filter}
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function isPattern$1(regExp, annotations) {
  const copy = new globalThis.RegExp(regExp);
  const payload = {
    source: copy.source,
    flags: copy.flags,
  };
  return makeFilter$1(
    (s) => {
      copy.lastIndex = 0;
      return copy.test(s);
    },
    {
      expected: `a string matching the RegExp ${payload.source}`,
      representation: {
        id: "effect/schema/isPattern",
        payload,
      },
      toJsonSchema: () => [{}, true],
      arbitraryConstraint: { patterns: [payload] },
      ...annotations,
    },
  );
}
const bodyOwners = /*#__PURE__*/ new WeakMap();
function copy(ast, changes) {
  const out = Object.assign(Object.create(Object.getPrototypeOf(ast)), ast, changes);
  if (Reflect.ownKeys(changes).every((key) => key === "context" || key === "encoding"))
    bodyOwners.set(out, getContextOwner(ast));
  return out;
}
/** @internal */
function getContextOwner(ast) {
  const existing = bodyOwners.get(ast);
  if (existing !== void 0) return existing;
  if (ast.encoding === void 0) return ast;
  const owner = Object.assign(Object.create(Object.getPrototypeOf(ast)), ast, { encoding: void 0 });
  bodyOwners.set(ast, owner);
  return owner;
}
/** @internal */
function replaceEncoding(ast, encoding) {
  return ast.encoding === encoding ? ast : copy(ast, { encoding });
}
/** @internal */
function replaceContext(ast, context) {
  if (ast.context === context) return ast;
  const owner = getContextOwner(ast);
  if (owner.context === context && owner.encoding === ast.encoding) return owner;
  return copy(ast, { context });
}
/** @internal */
function getLastEncoding(ast) {
  return ast.encoding ? getLastEncoding(ast.encoding[ast.encoding.length - 1].to) : ast;
}
/** @internal */
function annotate$1(ast, annotations) {
  if (ast.checks) {
    const last = ast.checks[ast.checks.length - 1];
    return replaceChecks(ast, append(ast.checks.slice(0, -1), last.annotate(annotations)));
  }
  return copy(ast, {
    annotations: {
      ...ast.annotations,
      ...annotations,
    },
  });
}
/** @internal */
function replaceChecks(ast, checks) {
  if (ast._tag === "Suspend" && checks) throw new Error("Cannot add checks to Suspend");
  if (ast.checks === checks) return ast;
  return copy(ast, { checks });
}
/** @internal */
function appendChecks(ast, checks) {
  return replaceChecks(ast, combineChecks(ast.checks, checks));
}
/** @internal */
function mapLink(link, f) {
  const to = f(link.to);
  return to === link.to ? link : new Link(to, link.transformation);
}
function updateLastLink(encoding, f) {
  const links = encoding;
  const last = links[links.length - 1];
  const out = mapLink(last, f);
  return out === last ? encoding : append(encoding.slice(0, encoding.length - 1), out);
}
/** @internal */
function applyToLastLink(f) {
  return (ast) => (ast.encoding ? replaceEncoding(ast, updateLastLink(ast.encoding, f)) : ast);
}
/** @internal */
function replaceContextLastLink(ast, context) {
  return applyToLastLink((ast) => replaceContext(ast, context))(ast);
}
/** @internal */
function applyToSelfOrLastLinkEncoding(f) {
  function out(ast) {
    return ast.encoding ? replaceEncoding(ast, updateLastLink(ast.encoding, out)) : f(ast);
  }
  return memoize(out);
}
/** @internal */
function applyToSelfOrLastLinkEncodingIdempotent(f, options) {
  function out(ast) {
    if (ast.encoding) {
      const last = ast.encoding[ast.encoding.length - 1];
      return options?.stopAt?.(last)
        ? ast
        : replaceEncoding(ast, updateLastLink(ast.encoding, out));
    }
    return f(ast);
  }
  return memoizeIdempotent(out);
}
/** @internal */
function middlewareDecoding$1(ast, middleware) {
  return appendTransformation(ast, middleware, toType$1(ast));
}
/** @internal */
function middlewareEncoding$1(ast, middleware) {
  return appendTransformation(toEncoded$1(ast), middleware, ast);
}
function appendTransformation(from, transformation, to) {
  const link = new Link(from, transformation);
  return replaceEncoding(to, to.encoding ? [...to.encoding, link] : [link]);
}
function mapOrSame(as, f) {
  let out;
  for (let i = 0; i < as.length; i++) {
    const a = as[i];
    const fa = f(a);
    if (out) out[i] = fa;
    else if (fa !== a) {
      out = new Array(as.length);
      for (let j = 0; j < i; j++) out[j] = as[j];
      out[i] = fa;
    }
  }
  return out ?? as;
}
/** @internal */
function annotateKey$1(ast, annotations) {
  return replaceContext(
    ast,
    ast.context
      ? new Context(ast.context.isOptional, ast.context.isMutable, ast.context.constructorDefault, {
          ...ast.context.annotations,
          ...annotations,
        })
      : new Context(false, false, void 0, annotations),
  );
}
/** @internal */
const optionalKey$1 = /*#__PURE__*/ memoizeIdempotent((ast) => {
  const context = ast.context
    ? ast.context.isOptional === false
      ? new Context(
          true,
          ast.context.isMutable,
          ast.context.constructorDefault,
          ast.context.annotations,
        )
      : ast.context
    : new Context(true, false);
  return optionalKeyLastLink(replaceContext(ast, context));
});
const optionalKeyLastLink = /*#__PURE__*/ applyToLastLink(optionalKey$1);
/** @internal */
const optional$1 = /*#__PURE__*/ memoize((ast) => optionalKey$1(new Union$1([ast, undefined_])));
/** @internal */
const mutableKey$1 = /*#__PURE__*/ memoizeIdempotent((ast) => {
  const context = ast.context
    ? ast.context.isMutable === false
      ? new Context(
          ast.context.isOptional,
          true,
          ast.context.constructorDefault,
          ast.context.annotations,
        )
      : ast.context
    : new Context(false, true);
  return mutableKeyLastLink(replaceContext(ast, context));
});
const mutableKeyLastLink = /*#__PURE__*/ applyToLastLink(mutableKey$1);
/** @internal */
function withConstructorDefault$1(ast, defaultValue) {
  return replaceContext(
    ast,
    ast.context
      ? new Context(
          ast.context.isOptional,
          ast.context.isMutable,
          defaultValue,
          ast.context.annotations,
        )
      : new Context(false, false, defaultValue),
  );
}
/**
 * Attaches a `Transformation` to the `to` AST, making it decode from the
 * `from` AST and encode back to it.
 *
 * **Details**
 *
 * This is the low-level primitive behind `Schema.decodeTo`. It appends a
 * {@link Link} to the `to` node's encoding chain.
 *
 * - Returns a new AST with the same type as `to`.
 *
 * @see {@link Link}
 * @see {@link Encoding}
 * @see {@link flip}
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function decodeTo$1(from, to, transformation) {
  return appendTransformation(from, transformation, to);
}
function parseParameter(ast) {
  const literals = [];
  const parameters = [];
  function go(ast) {
    switch (ast._tag) {
      case "Literal":
        if (isPropertyKey(ast.literal) && !literals.includes(ast.literal))
          literals.push(ast.literal);
        return;
      case "UniqueSymbol":
        if (!literals.includes(ast.symbol)) literals.push(ast.symbol);
        return;
      case "Never":
        return;
      case "Union":
        for (let i = 0; i < ast.types.length; i++) go(ast.types[i]);
        return;
      default:
        parameters.push(ast);
    }
  }
  go(ast);
  return {
    literals,
    parameters,
  };
}
/** @internal */
function record(key, value) {
  const { literals, parameters: indexSignatures } = parseParameter(key);
  return new Objects(
    literals.map((literal) => new PropertySignature(literal, value)),
    indexSignatures.map((parameter) => new IndexSignature(parameter, value)),
  );
}
/**
 * Returns `true` if the AST node represents an optional property.
 *
 * **Details**
 *
 * Checks `ast.context?.isOptional`. Defaults to `false` when no
 * {@link Context} is set.
 *
 * @see `Schema.optionalKey`
 * @see {@link Context}
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
function isOptional(ast) {
  return ast.context?.isOptional ?? false;
}
/** @internal */
function isMutable(ast) {
  return ast.context?.isMutable ?? false;
}
function isStructuralCheck(check) {
  return (
    check.annotations?.["~structural"] === true ||
    (check._tag === "FilterGroup" && check.checks.every(isStructuralCheck))
  );
}
function extractStructuralChecks(checks) {
  function extract(check) {
    if (isStructuralCheck(check)) return [check];
    return check._tag === "FilterGroup" ? check.checks.flatMap(extract) : [];
  }
  const out = checks.flatMap(extract);
  return isArrayNonEmpty(out) ? out : void 0;
}
function canPreserveEncodingChecks(ast) {
  let preserve = true;
  function visit(child) {
    preserve = preserve && !child.encoding && !isSuspend(child);
    if (preserve && "recur" in child) child.recur(visit);
    return child;
  }
  if ("recur" in ast) ast.recur(visit);
  return preserve;
}
/**
 * Strips all encoding transformations from an AST, returning the decoded
 * (type-level) representation.
 *
 * **Details**
 *
 * - Memoized: same input reference → same output reference.
 * - Recursively walks into composite nodes ({@link Arrays}, {@link Objects},
 *   {@link Union}, {@link Suspend}).
 *
 * **Example** (Getting the type AST)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaAST } from "effect"
 *
 * const schema = Schema.NumberFromString
 * const typeAst = SchemaAST.toType(schema.ast)
 * typeAst._tag // => "Number"
 * ```
 *
 * @see {@link toEncoded}
 * @see {@link flip}
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const toType$1 = /*#__PURE__*/ memoizeIdempotent((ast) => {
  const owner = getContextOwner(ast);
  if (owner !== ast) {
    const type = toType$1(owner);
    return type === owner && ast.encoding === void 0 ? ast : replaceContext(type, ast.context);
  }
  const type = "recur" in ast ? ast.recur(toType$1) : ast;
  if ("encodingChecks" in type && type.encodingChecks) {
    const checks = canPreserveEncodingChecks(ast)
      ? type.encodingChecks
      : isArrays(type) || isObjects(type) || (isDeclaration(type) && type.typeParameters.length > 0)
        ? extractStructuralChecks(type.encodingChecks)
        : void 0;
    return copy(type, {
      encodingChecks: void 0,
      checks: combineChecks(type.checks, checks),
    });
  }
  return type;
});
/**
 * Returns the encoded (wire-format) AST by flipping and then stripping
 * encodings.
 *
 * **Details**
 *
 * Equivalent to `toType(flip(ast))`. This gives you the AST that describes
 * the shape of the serialized/encoded data.
 *
 * - Memoized: same input reference → same output reference.
 *
 * **Example** (Getting the encoded AST)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaAST } from "effect"
 *
 * const schema = Schema.NumberFromString
 * const encodedAst = SchemaAST.toEncoded(schema.ast)
 * encodedAst._tag // => "String"
 * ```
 *
 * @see {@link toType}
 * @see {@link flip}
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const toEncoded$1 = /*#__PURE__*/ memoizeIdempotent((ast) => {
  return toType$1(flip(ast));
});
function flipEncoding(ast, encoding) {
  const links = encoding;
  const len = links.length;
  const last = links[len - 1];
  const ls = [new Link(flip(replaceEncoding(ast, void 0)), links[0].transformation.flip())];
  for (let i = 1; i < len; i++)
    ls.unshift(new Link(flip(links[i - 1].to), links[i].transformation.flip()));
  const to = flip(last.to);
  if (to.encoding) return replaceEncoding(to, [...to.encoding, ...ls]);
  else return replaceEncoding(to, ls);
}
/**
 * Swaps the decode and encode directions of an AST's {@link Encoding} chain.
 *
 * **Details**
 *
 * After flipping, what was decoding becomes encoding and vice versa. This is
 * the core operation behind `Schema.encode` — encoding a value is decoding
 * with a flipped SchemaAST.
 *
 * - Memoized: same input reference → same output reference.
 * - Recursively walks composite nodes.
 *
 * @see {@link toType}
 * @see {@link toEncoded}
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const flip = /*#__PURE__*/ memoize((ast) => {
  if (ast.encoding) return flipEncoding(ast, ast.encoding);
  const owner = getContextOwner(ast);
  if (owner !== ast) {
    const flipped = flip(owner);
    return flipped === owner ? ast : replaceContext(flipped, ast.context);
  }
  return "flip" in ast ? ast.flip(flip) : "recur" in ast ? ast.recur(flip) : ast;
});
/** @internal */
function containsUndefined(ast) {
  switch (ast._tag) {
    case "Undefined":
      return true;
    case "Union":
      return ast.types.some(containsUndefined);
    default:
      return false;
  }
}
function fromConst(ast, value) {
  const succeed$4 = value === 0 ? sameExit : succeed(value);
  return (input, options) => {
    if (input === missing) return missingExit;
    if (input === value) return succeed$4;
    return fail$2(new InvalidType(ast, input, options));
  };
}
function fromRefinement(ast, refinement) {
  return (input, options) => {
    if (input === missing) return missingExit;
    if (refinement(input)) return sameExit;
    return fail$2(new InvalidType(ast, input, options));
  };
}
function segmentTemplateLiteralParts(ast, input, options) {
  const parts = ast.encodedParts;
  const literals = ast.literals;
  const inputLength = input.length;
  for (let i = 0; i < literals.length; i++) {
    const literal = literals[i];
    if (literal && !input.includes(literal)) return void 0;
  }
  if (ast.suffixLengths[0] > inputLength) return void 0;
  const out = new Array(parts.length);
  let failures;
  function go(i, pos) {
    if (i === parts.length) return pos === inputLength;
    if (failures?.has(i * (inputLength + 1) + pos)) return false;
    const part = parts[i];
    if (i === parts.length - 1) {
      const s = input.slice(pos);
      if (part.matchPart(s, options) !== void 0) {
        out[i] = s;
        return true;
      }
    } else if (part._tag === "Literal") {
      const s = literals[i];
      if (input.startsWith(s, pos) && go(i + 1, pos + s.length)) {
        out[i] = s;
        return true;
      }
    } else {
      const maximumEnd = inputLength - ast.suffixLengths[i + 1];
      const anchor = literals[i + 1];
      let end = anchor === void 0 ? maximumEnd : input.lastIndexOf(anchor, maximumEnd);
      while (end >= pos) {
        const s = input.slice(pos, end);
        if (part.matchPart(s, options) !== void 0 && go(i + 1, end)) {
          out[i] = s;
          return true;
        }
        if (end === 0) break;
        end = anchor === void 0 ? end - 1 : input.lastIndexOf(anchor, end - 1);
      }
    }
    failures ??= /* @__PURE__ */ new Set();
    failures.add(i * (inputLength + 1) + pos);
    return false;
  }
  return go(0, 0) ? out : void 0;
}
/** @internal */
const parameterFromPropertyKey = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent((ast) => {
  switch (ast._tag) {
    default:
      return ast;
    case "Number":
      return ast.toCodecStringTree();
    case "Union":
      return ast.recur(parameterFromPropertyKey);
  }
});
/** @internal */
const parameterFromString = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent((ast) => {
  switch (ast._tag) {
    default:
      return ast;
    case "Symbol":
    case "UniqueSymbol":
      return ast.toCodecStringTree();
    case "Union":
      return ast.recur(parameterFromString);
  }
});
const partFromString = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent((ast) => {
  switch (ast._tag) {
    default:
      return ast;
    case "Number":
    case "Literal":
    case "BigInt":
      return ast.toCodecStringTree();
    case "Union":
      return ast.recur(partFromString);
  }
});
/**
 * any string, including newlines
 * @internal
 */
const STRING_PATTERN = "[\\s\\S]*?";
const isStringFiniteRegExp = /*#__PURE__*/ new globalThis.RegExp(`^${FINITE_PATTERN}$`);
const isStringNumberRegExp = /*#__PURE__*/ new globalThis.RegExp(
  `^(?:${FINITE_PATTERN}|Infinity|-Infinity|NaN)$`,
);
/** @internal */
function isStringFinite(annotations) {
  return isPattern$1(isStringFiniteRegExp, {
    expected: "a string representing a finite number",
    representation: {
      id: "effect/schema/isStringFinite",
      payload: null,
    },
    toJsonSchema: () => ({ pattern: isStringFiniteRegExp.source }),
    ...annotations,
  });
}
const finiteString = /*#__PURE__*/ appendChecks(string, [/*#__PURE__*/ isStringFinite()]);
const finiteToString = /*#__PURE__*/ new Link(finiteString, numberFromString);
const numberToString = /*#__PURE__*/ new Link(
  /*#__PURE__*/ new Union$1([finiteString, nonFiniteLiterals]),
  numberFromString,
);
const isStringBigIntRegExp = /*#__PURE__*/ new globalThis.RegExp(`^-?\\d+$`);
/** @internal */
function isStringBigInt(annotations) {
  return isPattern$1(isStringBigIntRegExp, {
    expected: "a string representing a bigint",
    representation: {
      id: "effect/schema/isStringBigInt",
      payload: null,
    },
    toJsonSchema: () => ({ pattern: isStringBigIntRegExp.source }),
    ...annotations,
  });
}
const bigIntToString = /*#__PURE__*/ new Link(
  /* @__PURE__ */ appendChecks(string, [
    /*#__PURE__*/ isStringBigInt({ expected: "a string representing a bigint" }),
  ]),
  bigintFromString,
);
/** @internal */
function collectIssues(checks, value, issues, ast, options) {
  for (let i = 0; i < checks.length; i++) {
    const check = checks[i];
    if (check._tag === "FilterGroup") {
      issues = collectIssues(check.checks, value, issues, ast, options);
      if (issues && (options.errors !== "all" || issues[issues.length - 1].filter.aborted))
        return issues;
    } else {
      const issue = check.run(value, ast, options);
      if (issue) {
        const filter = new Filter$1(check, issue, value, options);
        if (issues) issues.push(filter);
        else issues = [filter];
        if (options.errors !== "all" || check.aborted) return issues;
      }
    }
  }
  return issues;
}
/** @internal */
function getConstructorDescriptor(ast) {
  if (!isDeclaration(ast)) return void 0;
  const getDescriptor = ast.annotations?.[CONSTRUCTOR_ANNOTATION_KEY];
  return isFunction(getDescriptor) ? getDescriptor(ast.typeParameters) : void 0;
}
/**
 * Returns a single annotation value by key from the AST node.
 *
 * **Details**
 *
 * Like {@link resolve}, reads from the last check's annotations when checks
 * are present. Returns `undefined` if the key is not found.
 *
 * @see {@link resolve}
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const resolveAt = resolveAt$1;
/**
 * Returns the `identifier` annotation from the AST node, if set.
 *
 * **Details**
 *
 * The identifier is typically set by `Schema.annotations({ identifier: "..." })`
 * and is used for error messages and schema identification.
 *
 * @see {@link resolve}
 * @see {@link resolveTitle}
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const resolveIdentifier = resolveIdentifier$1;
/**
 * Returns the `title` annotation from the AST node, if set.
 *
 * @see {@link resolve}
 * @see {@link resolveIdentifier}
 * @see {@link resolveDescription}
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const resolveTitle = resolveTitle$1;
/**
 * Returns the `description` annotation from the AST node, if set.
 *
 * @see {@link resolve}
 * @see {@link resolveTitle}
 * @see {@link resolveIdentifier}
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const resolveDescription = resolveDescription$1;
function isJsonLeaf(u) {
  return (
    u === null ||
    typeof u === "string" ||
    typeof u === "boolean" ||
    (typeof u === "number" && globalThis.Number.isFinite(u))
  );
}
function isStringTreeLeaf(u) {
  return u === void 0 || typeof u === "string";
}
function isTree(u, isLeaf) {
  const cache = /* @__PURE__ */ new WeakMap();
  const stack = [];
  outer: while (true) {
    if (typeof u !== "object" || u === null) {
      if (!isLeaf(u)) return false;
    } else {
      const value = u;
      const cached = cache.get(value);
      if (cached === false) return false;
      if (cached === void 0) {
        const isArray = Array.isArray(value);
        if (!isArray) {
          const prototype = Object.getPrototypeOf(value);
          if (
            prototype !== null &&
            prototype !== Object.prototype &&
            Object.getPrototypeOf(prototype) !== null
          )
            return false;
        }
        cache.set(value, false);
        stack.push({
          value,
          keys: isArray ? value.length : Object.keys(value),
          index: 0,
        });
      }
    }
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const keys = frame.keys;
      if (typeof keys === "number") {
        if (frame.index < keys) {
          u = frame.value[frame.index++];
          continue outer;
        }
      } else if (frame.index < keys.length) {
        u = frame.value[keys[frame.index++]];
        continue outer;
      }
      cache.set(frame.value, true);
      stack.pop();
    }
    return true;
  }
}
/**
 * Returns true if the value is a JSON value.
 *
 * When a cyclic reference is detected, returns false.
 *
 * @internal
 */
function isJson(u) {
  return isTree(u, isJsonLeaf);
}
/** @internal */
const Json$1 = /*#__PURE__*/ new Declaration(
  [],
  () => (input, ast, options) =>
    isJson(input) ? sameExit : fail$2(new InvalidType(ast, input, options)),
  {
    representation: {
      id: "effect/schema/Json",
      payload: null,
    },
    expected: "JSON value",
    toCodecJson: () => void 0,
    toCodecStringTree: () => unknownToStringTree,
  },
);
/** @internal */
const MutableJson$1 = /*#__PURE__*/ annotate$1(Json$1, {
  representation: {
    id: "effect/schema/MutableJson",
    payload: null,
  },
});
/** @internal */
const unknownToJson = /*#__PURE__*/ new Link(Json$1, /*#__PURE__*/ passthrough());
/** @internal */
const objectKeywordToJson = /*#__PURE__*/ new Link(
  /*#__PURE__*/ new Union$1([
    /*#__PURE__*/ new Arrays(false, [], [Json$1]),
    /*#__PURE__*/ new Objects([], [/*#__PURE__*/ new IndexSignature(string, Json$1)]),
  ]),
  /*#__PURE__*/ passthrough(),
);
/**
 * Returns true if the value is a StringTree value.
 *
 * When a cyclic reference is detected, returns false.
 *
 * @internal
 */
function isStringTree(u) {
  return isTree(u, isStringTreeLeaf);
}
/** @internal */
const unknownToStringTree = /*#__PURE__*/ new Link(
  /* @__PURE__ */ new Declaration(
    [],
    () => (input, ast, options) =>
      isStringTree(input) ? sameExit : fail$2(new InvalidType(ast, input, options)),
    {
      expected: "StringTree",
      toCodecStringTree: () => void 0,
    },
  ),
  /*#__PURE__*/ passthrough(),
);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/interpreter.js
const flatMapTransformation = (result, current, f) =>
  result === sameExit ? f(current) : flatMapEager(result, f);
function compileTransformation(transformation) {
  if (transformation._tag === "Middleware")
    return (result, current, options) => {
      const transformed =
        result === sameExit
          ? transformation.decode(succeed(toOption(current)), options)
          : transformation.decode(mapEager(result, toOption), options);
      return fromOptionalEffect(transformed);
    };
  const getter = transformation.decode;
  switch (getter._tag) {
    case "Passthrough":
      return (result, current) => (result === sameExit ? succeed(current) : result);
    case "Transform": {
      const transform = (value) =>
        value === missing ? missingExit : succeed(getter.transform(value));
      return (result, current) => flatMapTransformation(result, current, transform);
    }
    case "TransformOptional": {
      const transform = (value) => fromOptionExit(getter.transform(toOption(value)));
      return (result, current) => flatMapTransformation(result, current, transform);
    }
    case "TransformEffect":
      return (result, current, options) =>
        flatMapTransformation(result, current, (value) =>
          value === missing ? missingExit : getter.transform(value, options),
        );
    case "TransformOptionalEffect":
      return (result, current, options) =>
        flatMapTransformation(result, current, (value) =>
          fromOptionalEffect(getter.transform(toOption(value), options)),
        );
  }
}
const fromOptionalEffect = (effect) => flatMapEager(effect, fromOptionExit);
/** @internal */
const wrapEncoding = (ast, input, options, effect) =>
  catchCause(effect, (cause) =>
    failCauseSync(() => map$7(cause, (issue) => new Encoding(ast, issue, input, options))),
  );
function makeConstructorParser(descriptor, compile) {
  const transform = compileTransformation(descriptor.link.transformation);
  let sourceParser;
  return (input, options) => {
    if (input === missing) return missingExit;
    if (descriptor.isConstructed(input)) return sameExit;
    const result = (sourceParser ??= compile(descriptor.link.to))(input, options);
    return transform(result, input, options);
  };
}
function withDefault(ast, parser) {
  const defaultValue = ast.context.constructorDefault;
  return (input, options) => {
    if (input !== missing && input !== void 0) return parser(input, options);
    const result = defaultValue;
    if (effectIsExit(result) && result._tag === "Success") {
      const local = parser(result[args], options);
      return local === sameExit ? result : local;
    }
    return flatMapEager(wrapEncoding(ast, input, options, result), (value) => {
      const local = parser(value, options);
      return local === sameExit ? succeed(value) : local;
    });
  };
}
/** @internal */
function compileField(ast, compile) {
  const parser = compile(ast);
  return ast.context?.constructorDefault === void 0 ? parser : withDefault(ast, parser);
}
/** @internal */
function compile(ast, compile, compileField, base, specialize) {
  if (ast._tag === "Declaration") for (const parameter of ast.typeParameters) compile(parameter);
  const descriptor = compileField ? getConstructorDescriptor(ast) : void 0;
  const parser = descriptor
    ? makeConstructorParser(descriptor, compile)
    : (base ?? ast.getParser(compile, compileField));
  const checks = ast.checks;
  const links = ast.encoding;
  const transformations = links?.map((link) => compileTransformation(link.transformation));
  const encodingChecks = ast.encodingChecks;
  if (!links && !checks && !encodingChecks) return parser;
  let encodingParsers;
  const parseChecks = (input, options) => {
    let result = parser(input, options);
    if (encodingChecks && !options.disableChecks) {
      if (effectIsExit(result)) {
        if (result._tag === "Success") {
          const output = result === sameExit ? input : result[args];
          if (input !== missing && output !== missing) {
            const issues = collectIssues(encodingChecks, input, void 0, ast, options);
            if (issues) result = fail$2(new Composite(ast, issues, input, options));
          }
        }
      } else
        result = flatMap(result, (value) => {
          if (input !== missing && value !== missing) {
            const issues = collectIssues(encodingChecks, input, void 0, ast, options);
            if (issues) return fail$2(new Composite(ast, issues, input, options));
          }
          return succeed$3(value);
        });
    }
    if (checks && !options.disableChecks) {
      if (effectIsExit(result)) {
        if (result._tag === "Success") {
          const value = result === sameExit ? input : result[args];
          if (value === missing) return result;
          const issues = collectIssues(checks, value, void 0, ast, options);
          if (issues) result = fail$2(new Composite(ast, issues, value, options));
        }
      } else
        result = flatMap(result, (value) => {
          if (value !== missing) {
            const issues = collectIssues(checks, value, void 0, ast, options);
            if (issues) return fail$2(new Composite(ast, issues, value, options));
          }
          return succeed$3(value);
        });
    }
    return result;
  };
  const parseLocal = specialize === void 0 ? parseChecks : specialize(parseChecks);
  if (!links) return parseLocal;
  return (input, options) => {
    const parsers = (encodingParsers ??= links.map((link) => compile(link.to)));
    let current = input;
    let result = parsers[parsers.length - 1](input, options);
    for (let i = links.length - 1; i >= 0; i--) {
      result = transformations[i](result, current, options);
      if (i !== 0) {
        const next = parsers[i - 1];
        if (result._tag === "Success") {
          current = result[args];
          result = next(current, options);
        } else
          result = flatMapEager(result, (value) => {
            const nextResult = next(value, options);
            return nextResult === sameExit ? succeed(value) : nextResult;
          });
      }
    }
    if (result._tag === "Success") {
      const value = result[args];
      const local = parseLocal(value, options);
      return local === sameExit ? result : local;
    }
    result = wrapEncoding(ast, input, options, result);
    return flatMapEager(result, (value) => {
      const local = parseLocal(value, options);
      return local === sameExit ? succeed(value) : local;
    });
  };
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/compilerRegistry.js
/** @internal */
const invalid = /*#__PURE__*/ Symbol();
const cache = /*#__PURE__*/ new WeakMap();
const decodeChild = (ast) => resolve(ast).parser;
const makeChild = (ast) => resolve(ast).makeEffect;
const makeField = (ast) => compileField(ast, makeChild);
var InterpretedEntry = class {
  ast;
  constructor(ast) {
    this.ast = ast;
  }
  get decodeEffect() {
    return (this.cachedDecodeEffect ??= compile(this.ast, decodeChild));
  }
  get parser() {
    return this.decodeEffect;
  }
  get makeEffect() {
    return (this.cachedMakeEffect ??= compile(this.ast, makeChild, makeField));
  }
};
/** @internal */
function resolve(ast) {
  const cached = cache.get(ast);
  if (cached !== void 0) return cached;
  const entry = new InterpretedEntry(ast);
  cache.set(ast, entry);
  return entry;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/SchemaParser.js
/**
 * Runs schemas against real values.
 *
 * Schema parsers construct values from schema input, check whether a value
 * matches a schema, decode encoded input, and encode decoded values back to
 * their external form. This module exposes those operations through several
 * result styles, including `Effect`, `Promise`, `Exit`, `Option`, `Result`, and
 * synchronous functions that throw. It also contains the lower-level runner that
 * walks a schema AST and reports schema failures as `SchemaIssue.Issue` values.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Creates an effectful maker for the schema's decoded type side.
 *
 * **When to use**
 *
 * Use to construct decoded schema values in `Effect` while preserving
 * construction failures as `SchemaIssue.Issue` values in the error channel.
 *
 * **Details**
 *
 * The returned function accepts constructor input, applies constructor defaults,
 * runs type-side validation unless checks are disabled, and fails with a
 * `SchemaIssue.Issue` when construction fails.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function makeEffect(schema) {
  const ast = schema.ast;
  let parser;
  return (input, options) => {
    return (parser ??= runWithCompiler(constructorCompiler, toType$1(ast)))(
      input,
      options?.disableChecks
        ? options?.parseOptions
          ? {
              ...options.parseOptions,
              disableChecks: true,
            }
          : { disableChecks: true }
        : options?.parseOptions,
    );
  };
}
/**
 * Creates a synchronous maker that returns `Option.some` with the constructed
 * value on success, or `Option.none` when construction fails with schema issues.
 *
 * **When to use**
 *
 * Use when you need to validate schema constructor input and only care whether
 * construction succeeds, without exposing `SchemaIssue.Issue` details.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are converted to `Option.none`.
 * Causes that contain defects, interruptions, or asynchronous work at this
 * synchronous boundary throw an `Error` whose cause is the underlying `Cause`.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function makeOption(schema) {
  const parser = makeEffect(schema);
  return (input, options) => {
    const exit = runSyncExit(parser(input, options));
    if (isSuccess(exit)) return some(exit.value);
    getSchemaIssueOrThrow(exit.cause, "Option adapter can only return none for schema issues");
    return none();
  };
}
/**
 * Creates a synchronous maker for the schema's decoded type side.
 *
 * **When to use**
 *
 * Use to construct decoded schema values synchronously when invalid input
 * should throw an `Error` whose cause is `SchemaIssue.Issue`.
 *
 * **Details**
 *
 * The returned function constructs a value from constructor input and throws an
 * `Error` with the `SchemaIssue.Issue` in its `cause` when construction fails.
 * Schema validation failures use the generic message `"Schema validation failed"`.
 * Format the `cause` explicitly with `SchemaIssue.makeFormatterDefault()` when
 * human-readable details are needed.
 *
 * **Gotchas**
 *
 * Causes that contain defects, interruptions, or asynchronous work at this
 * synchronous boundary throw an `Error` whose cause is the underlying `Cause`,
 * instead of being converted to a schema validation error.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function make$2(schema) {
  return makeConstructorSync(toType$1(schema.ast));
}
/**
 * Creates a type guard that checks whether an input satisfies the schema's decoded
 * type side.
 *
 * **When to use**
 *
 * Use to build a type guard for checking the decoded side of a schema without
 * exposing issue details.
 *
 * **Details**
 *
 * The guard returns `true` on successful validation and `false` when validation
 * fails only with schema issues, without exposing issue details.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are converted to `false`. Causes
 * that contain defects, interruptions, or asynchronous work at this synchronous
 * boundary throw an `Error` whose cause is the underlying `Cause`.
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
function is$1(schema) {
  return _is(schema.ast);
}
function makeIs(ast) {
  {
    const parser = asExit(run(ast));
    return (input) => {
      const exit = parser(input, defaultParseOptions);
      if (isSuccess(exit)) return true;
      getSchemaIssueOrThrow(
        exit.cause,
        "Type guard adapter can only return false for schema issues",
      );
      return false;
    };
  }
}
/** @internal */
function _is(ast) {
  const typeAST = toType$1(ast);
  let guard = (input) => {
    guard = makeIs(typeAST);
    return guard(input);
  };
  return (input) => {
    return guard(input);
  };
}
/**
 * Creates an effectful decoder for `unknown` input.
 *
 * **When to use**
 *
 * Use when you need to decode untyped boundary input in an `Effect` whose
 * failure channel is `SchemaIssue.Issue`, while preserving transformations
 * and service requirements.
 *
 * **Details**
 *
 * The returned function succeeds with the schema's decoded `Type` or fails with a
 * `SchemaIssue.Issue`. Decoding service requirements are preserved in the returned
 * `Effect`. Parse options may be provided when creating the decoder and overridden
 * when applying it.
 *
 * @see {@link decodeEffect} for input already typed as the schema's `Encoded` type
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownEffect$1(schema, options) {
  const parser = run(schema.ast);
  return options === void 0
    ? parser
    : (input, overrideOptions) => parser(input, mergeParseOptions(options, overrideOptions));
}
/**
 * Creates a synchronous decoder for `unknown` input that reports failure safely
 * as an `Exit`.
 *
 * **When to use**
 *
 * Use when you need to decode unknown input synchronously into an `Exit` whose
 * failure contains `SchemaIssue.Issue`.
 *
 * **Details**
 *
 * The returned function produces `Exit.Success` with the decoded `Type`.
 * Schema issues are represented by an `Exit.Failure` cause containing a
 * `SchemaIssue.Issue`.
 *
 * **Gotchas**
 *
 * Because this adapter runs synchronously, async decoding work can produce an
 * `Exit.Failure` with a defect cause. When the cause contains both schema
 * issues and non-schema reasons, all reasons remain in the returned `Cause`.
 *
 * @see {@link decodeExit} for input already typed as the schema's `Encoded` type
 * @see {@link decodeUnknownEffect} for preserving decoding services and failures in `Effect`
 * @see {@link decodeUnknownResult} for returning schema issues as data
 * @see {@link decodeUnknownSync} for throwing on decoding failure
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownExit$1(schema, options) {
  return asExit(decodeUnknownEffect$1(schema, options));
}
/** @internal */
function decodeUnknownOption$1(schema, options) {
  return asOption(decodeUnknownEffect$1(schema, options));
}
/** @internal */
const decodeOption$1 = decodeUnknownOption$1;
/**
 * Creates a decoder for `unknown` input that reports failure safely as a
 * `Result`.
 *
 * **When to use**
 *
 * Use when decoding untyped boundary input and you want `SchemaIssue.Issue`
 * failures returned as data in a `Result`.
 *
 * **Details**
 *
 * The returned function produces `Result.succeed` with the decoded `Type` on
 * success or `Result.fail` with a `SchemaIssue.Issue` on decoding failure.
 *
 * **Gotchas**
 *
 * This adapter runs synchronously. Causes made entirely of schema issues become
 * `Result.fail`, but causes that contain defects, interruptions, or asynchronous
 * work at this synchronous boundary throw instead.
 *
 * @see {@link decodeResult} for input already typed as the schema's `Encoded` type
 * @see {@link decodeUnknownEffect} for effectful or service-requiring decoding
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownResult$1(schema, options) {
  return asResult(decodeUnknownEffect$1(schema, options));
}
/**
 * Creates an effectful encoder for `unknown` input.
 *
 * **When to use**
 *
 * Use when you need to encode untyped boundary input in an `Effect` whose
 * failure channel is `SchemaIssue.Issue`, while preserving service
 * requirements.
 *
 * **Details**
 *
 * The returned function succeeds with the schema's `Encoded` value or fails with a
 * `SchemaIssue.Issue`. Encoding service requirements are preserved in the returned
 * `Effect`. Parse options may be provided when creating the encoder and overridden
 * when applying it.
 *
 * @see {@link encodeEffect} for the typed-input variant when the value is already typed as the schema's decoded `Type`
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUnknownEffect$1(schema, options) {
  const parser = run(flip(schema.ast));
  return options === void 0
    ? parser
    : (input, overrideOptions) => parser(input, mergeParseOptions(options, overrideOptions));
}
/**
 * Creates a synchronous encoder for `unknown` input that reports failure safely
 * as an `Exit`.
 *
 * **When to use**
 *
 * Use when you need synchronous encoding of unknown input into an `Exit` whose
 * failure contains `SchemaIssue.Issue`.
 *
 * **Details**
 *
 * The returned function produces `Exit.Success` with the schema's `Encoded` value
 * or `Exit.Failure` with a `SchemaIssue.Issue`.
 *
 * **Gotchas**
 *
 * Because this adapter runs synchronously, async encoding work can produce an
 * `Exit.Failure` with a defect cause. When the cause contains both schema
 * issues and non-schema reasons, all reasons remain in the returned `Cause`.
 *
 * @see {@link encodeExit} for input already typed as the schema's decoded `Type`
 * @see {@link encodeUnknownEffect} for effectful encoding that preserves service requirements
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUnknownExit$1(schema, options) {
  return asExit(encodeUnknownEffect$1(schema, options));
}
const mergeParseOptions = (options, overrideOptions) =>
  overrideOptions
    ? {
        ...options,
        ...overrideOptions,
      }
    : options;
const getValue = (value) => {
  if (value === missing) return fail$2(new InvalidValue());
  return succeed$3(value);
};
/** @internal */
function run(ast) {
  return runWithCompiler(normalCompiler, ast);
}
function parserResult(result, input) {
  if (result === sameExit) return succeed$3(input);
  if (!effectIsExit(result)) return flatMapEager(result, getValue);
  return result["~effect/Effect/args"] === missing ? getValue(missing) : result;
}
function runWithCompiler(compiler, ast) {
  let parser;
  return (input, options) => {
    const result = (parser ??= compiler(ast))(input, options ?? defaultParseOptions);
    if (result === sameExit) return succeed$3(input);
    if (!effectIsExit(result)) return flatMapEager(result, getValue);
    return result["~effect/Effect/args"] === missing ? getValue(missing) : result;
  };
}
function asExit(parser) {
  return (input, options) => runSyncExit(parser(input, options));
}
/** @internal */
function asOption(parser) {
  const parserExit = asExit(parser);
  return (input, options) => {
    const exit = parserExit(input, options);
    if (isSuccess(exit)) return some(exit.value);
    getSchemaIssueOrThrow(exit.cause, "Option adapter can only return none for schema issues");
    return none();
  };
}
function asResult(parser) {
  const parserExit = asExit(parser);
  return (input, options) => {
    const exit = parserExit(input, options);
    if (isSuccess(exit)) return succeed$1(exit.value);
    return fail$1(
      getSchemaIssueOrThrow(exit.cause, "Result adapter can only return schema issues"),
    );
  };
}
function runSync(effect, message) {
  const exit = runSyncExit(effect);
  if (isSuccess(exit)) return exit.value;
  const issue = getSchemaIssueOrThrow(exit.cause, message);
  throw new Error("Schema validation failed", { cause: issue });
}
function makeConstructorSync(ast) {
  let entry;
  let parser;
  return (input, options) => {
    entry ??= resolve(ast);
    const parseOptions = options?.disableChecks
      ? options.parseOptions
        ? {
            ...options.parseOptions,
            disableChecks: true,
          }
        : { disableChecks: true }
      : (options?.parseOptions ?? defaultParseOptions);
    const make = entry.make;
    if (make !== void 0 && input !== missing) {
      let output;
      try {
        output = make(input, parseOptions);
      } catch (error) {
        getSchemaIssueOrThrow(die$1(error), "Constructor adapter can only throw schema issues");
        throw error;
      }
      if (output !== invalid && output !== missing) return output;
    }
    return runSync(
      parserResult((parser ??= entry.makeEffect)(input, parseOptions), input),
      "Constructor adapter can only throw schema issues",
    );
  };
}
const normalCompiler = (ast) => resolve(ast).parser;
const constructorCompiler = (ast) => resolve(ast).makeEffect;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/make.js
/** @internal */
const TypeId$3 = "~effect/Schema/Schema";
const RebuildOptions = /*#__PURE__*/ Symbol();
const SchemaProto = {
  [TypeId$3]: TypeId$3,
  get make() {
    const value = make$2(this);
    Object.defineProperty(this, "make", {
      value,
      enumerable: true,
    });
    return value;
  },
  get makeEffect() {
    const value = makeEffect(this);
    Object.defineProperty(this, "makeEffect", {
      value,
      enumerable: true,
    });
    return value;
  },
  get makeOption() {
    const value = makeOption(this);
    Object.defineProperty(this, "makeOption", {
      value,
      enumerable: true,
    });
    return value;
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  annotate(annotations) {
    return this.rebuild(annotate$1(this.ast, annotations));
  },
  annotateKey(annotations) {
    return this.rebuild(annotateKey$1(this.ast, annotations));
  },
  check(...checks) {
    return this.rebuild(appendChecks(this.ast, checks));
  },
  rebuild(ast) {
    return make$1(ast, this[RebuildOptions]);
  },
};
/** @internal */
function make$1(ast, options) {
  function Schema() {}
  const self = Object.setPrototypeOf(Schema, SchemaProto);
  if (
    options &&
    (Object.hasOwn(options, "name") ||
      Object.hasOwn(options, "length") ||
      Object.hasOwn(options, "__proto__"))
  )
    Object.defineProperties(self, Object.getOwnPropertyDescriptors({ ...options }));
  else Object.assign(self, options);
  self[RebuildOptions] = options;
  self.ast = ast;
  return self;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/JsonPointer.js
/**
 * Helpers for escaping JSON Pointer path segments and converting JSON Pointer
 * URI fragments. JSON Pointer uses `/` to separate path tokens inside a JSON
 * document, so token text must encode literal `~` and `/` characters. URI
 * fragments additionally apply percent-encoding after JSON Pointer escaping.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Escapes a JSON Pointer reference token according to RFC 6901 by encoding special characters so the token can be safely used as a segment in a JSON Pointer.
 *
 * **When to use**
 *
 * Use when you need to escape a single JSON Pointer path segment.
 *
 * **Details**
 *
 * - Returns a new escaped string
 * - Replaces `~` (tilde) with `~0` and `/` (forward slash) with `~1`
 * - Returns the input unchanged if it contains no special characters
 * - Empty strings are valid and returned unchanged
 *
 * **Gotchas**
 *
 * The replacement order matters: `~` is replaced before `/` to prevent double-escaping.
 *
 * **Example** (Escaping special characters)
 *
 * ```ts import.meta.vitest
 * import { JsonPointer } from "effect"
 *
 * JsonPointer.escapeToken("a/b") // => "a~1b"
 * JsonPointer.escapeToken("c~d") // => "c~0d"
 * JsonPointer.escapeToken("path/to~key") // => "path~1to~0key"
 * ```
 *
 * @see {@link unescapeToken} The inverse operation for decoding escaped tokens
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function escapeToken(token) {
  return token.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
 * Decodes a JSON Pointer reference token according to RFC 6901 escaping rules.
 *
 * **When to use**
 *
 * Use when you need to decode a single escaped JSON Pointer path segment.
 *
 * **Details**
 *
 * - Returns a new unescaped string
 * - Replaces `~1` with `/` (forward slash) and `~0` with `~` (tilde)
 * - Returns the input unchanged if it contains no escaped sequences
 * - Empty strings are valid and returned unchanged
 *
 * **Gotchas**
 *
 * The replacement order matters: `~1` is replaced before `~0` to prevent incorrect decoding.
 *
 * **Example** (Unescaping special characters)
 *
 * ```ts import.meta.vitest
 * import { JsonPointer } from "effect"
 *
 * JsonPointer.unescapeToken("a~1b") // => "a/b"
 * JsonPointer.unescapeToken("c~0d") // => "c~d"
 * JsonPointer.unescapeToken("path~1to~0key") // => "path/to~key"
 * ```
 *
 * @see {@link escapeToken} The inverse operation for encoding tokens
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function unescapeToken(token) {
  return token.replace(/~1/g, "/").replace(/~0/g, "~");
}
/** @internal */
function formatUriFragmentToken(token) {
  return encodeURI(escapeToken(token)).replace(/#/g, "%23");
}
/** @internal */
function decodeUriFragment(fragment) {
  if (fragment.length === 0 || fragment === "#") return "";
  if (!fragment.startsWith("#")) return void 0;
  const encoded = fragment.slice(1);
  try {
    if (encodeURI(encoded).replace(/%25/g, "%").replace(/#/g, "%23") !== encoded) return void 0;
    const pointer = decodeURIComponent(encoded);
    return pointer.startsWith("/") && !/~(?:[^01]|$)/.test(pointer) ? pointer : void 0;
  } catch {
    return;
  }
}
/**
 * Parses a JSON Pointer URI fragment into decoded path tokens.
 *
 * **When to use**
 *
 * Use when you need to resolve a URI fragment against a JSON document.
 *
 * **Details**
 *
 * Percent-encoding is decoded before the pointer is split into tokens, then
 * each token is decoded with {@link unescapeToken}. The empty string and `#`
 * both represent the document root.
 *
 * **Gotchas**
 *
 * Returns `undefined` when the input is not a URI fragment, contains characters
 * that require percent-encoding, or contains an invalid JSON Pointer escape
 * sequence.
 *
 * **Example** (Parsing URI fragments)
 *
 * ```ts import.meta.vitest
 * import { JsonPointer } from "effect"
 *
 * JsonPointer.parseUriFragment("#/users/a~1b") // => ["users", "a/b"]
 * JsonPointer.parseUriFragment("#/caf%C3%A9") // => ["café"]
 * JsonPointer.parseUriFragment("#/%") // => undefined
 * JsonPointer.parseUriFragment("#/a#b") // => undefined
 * ```
 *
 * @see {@link formatUriFragment} for the inverse operation
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function parseUriFragment(fragment) {
  const pointer = decodeUriFragment(fragment);
  return pointer === void 0
    ? void 0
    : pointer.length === 0
      ? []
      : pointer.slice(1).split("/").map(unescapeToken);
}
/**
 * Formats path tokens as a JSON Pointer URI fragment.
 *
 * **When to use**
 *
 * Use when you need a URI fragment that identifies a value in a JSON document.
 *
 * **Details**
 *
 * Each token is encoded with {@link escapeToken} before URI percent-encoding
 * is applied. An empty path is formatted as `#`.
 *
 * **Gotchas**
 *
 * Throws a `URIError` when a token contains an unpaired surrogate.
 *
 * **Example** (Formatting a URI fragment)
 *
 * ```ts import.meta.vitest
 * import { JsonPointer } from "effect"
 *
 * JsonPointer.formatUriFragment(["users", "a/b", "Rate%"]) // => "#/users/a~1b/Rate%25"
 * ```
 *
 * @see {@link parseUriFragment} for the inverse operation
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function formatUriFragment(path) {
  return path.reduce((fragment, token) => `${fragment}/${formatUriFragmentToken(token)}`, "#");
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/JsonSchema.js
/**
 * Helpers for normalizing and converting JSON Schema and OpenAPI schema
 * documents. Supported inputs include JSON Schema Draft-07, Draft 2020-12,
 * OpenAPI 3.0, and OpenAPI 3.1; conversions normalize through
 * `Document<"draft-2020-12">` before emitting another dialect, including
 * JSON Schema Draft-04. The module also defines document types, meta-schema
 * constants, and OpenAPI component-key helpers.
 *
 * @stability stable
 * @since 4.0.0
 */
const OPEN_API_31_TARGET_COLLISIONS = ["example", "discriminator", "xml", "externalDocs"];
/**
 * Converts a `MultiDocument<"draft-2020-12">` to a
 * `MultiDocument<"openapi-3.1">`.
 *
 * **When to use**
 *
 * Use when you need to emit an OpenAPI 3.1 multi-document from canonical JSON
 * Schema documents.
 *
 * **Details**
 *
 * This rewrites local `#/$defs/...` refs to `#/components/schemas/...` and
 * sanitizes definition keys to match the OpenAPI component key pattern
 * (`^[a-zA-Z0-9.\-_]+$`) by replacing invalid characters with `_`. Valid keys
 * are preserved. When sanitized keys collide, the converter appends the first
 * available `_1`, `_2`, and subsequent suffix, with allocation independent of
 * definition insertion order. All local refs are updated to use the allocated
 * keys, including refs to paths within a definition.
 *
 * **Gotchas**
 *
 * External refs and local refs outside `#/$defs` are left unchanged. Conversion
 * throws when a custom keyword would become an active OpenAPI keyword and
 * therefore change meaning. References inside schema resources identified by
 * `$id` are left unchanged. Conversion throws when an identified root schema
 * references the detached shared definitions pool because OpenAPI cannot
 * preserve that fragment reference.
 *
 * **Example** (Converting to OpenAPI 3.1)
 *
 * ```ts import.meta.vitest
 * import { JsonSchema } from "effect"
 *
 * const multi: JsonSchema.MultiDocument<"draft-2020-12"> = {
 *   dialect: "draft-2020-12",
 *   schemas: [{ $ref: "#/$defs/User" }],
 *   definitions: {
 *     User: { type: "object", properties: { name: { type: "string" } } }
 *   }
 * }
 *
 * const openapi = JsonSchema.toMultiDocumentOpenApi3_1(multi)
 * openapi.dialect // => "openapi-3.1"
 * openapi.schemas[0] // => { $ref: "#/components/schemas/User" }
 * ```
 *
 * @see {@link toDocumentDraft07}
 * @see {@link MultiDocument}
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function toMultiDocumentOpenApi3_1(multiDocument) {
  const definitionKeys = Object.keys(multiDocument.definitions);
  const keyMap = /* @__PURE__ */ new Map();
  const usedKeys = new Set(
    definitionKeys.filter((key) => VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP.test(key)),
  );
  const invalidKeys = definitionKeys
    .filter((key) => !VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP.test(key))
    .sort()
    .map((key) => [key, sanitizeOpenApiComponentsSchemasKey(key)]);
  for (const [key, base] of invalidKeys) {
    if (usedKeys.has(base)) continue;
    usedKeys.add(base);
    keyMap.set(key, base);
  }
  for (const [key, base] of invalidKeys) {
    if (keyMap.has(key)) continue;
    let candidate;
    let suffix = 0;
    do candidate = `${base}_${++suffix}`;
    while (usedKeys.has(candidate));
    usedKeys.add(candidate);
    keyMap.set(key, candidate);
  }
  function rewrite(schema, rejectSharedDefinitionRefs = false) {
    const isRootResource = createsResource(schema.$id);
    const localDefinitions = isObject(schema.$defs) ? schema.$defs : void 0;
    return transformSchema(schema, (schema, inEmbeddedResource) => {
      rejectKeywordCollisions(
        schema,
        OPEN_API_31_TARGET_COLLISIONS,
        "OpenAPI 3.1",
        "Draft 2020-12",
      );
      rewriteSchemaRef(schema, (reference, keyword) => {
        const path = reference.startsWith("#") ? parseUriFragment(reference) : void 0;
        if (path === void 0 || path[0] !== "$defs" || path.length < 2) return reference;
        const key = path[1];
        if (isRootResource) {
          if (
            rejectSharedDefinitionRefs &&
            !inEmbeddedResource &&
            Object.hasOwn(multiDocument.definitions, key) &&
            (localDefinitions === void 0 || !Object.hasOwn(localDefinitions, key))
          )
            unsupported(
              keyword,
              "OpenAPI 3.1",
              "a schema resource cannot reference the shared definitions pool",
            );
          return reference;
        }
        return inEmbeddedResource
          ? reference
          : formatUriFragment(["components", "schemas", keyMap.get(key) ?? key, ...path.slice(2)]);
      });
    });
  }
  const schemas = multiDocument.schemas.map((schema) => rewrite(schema, true));
  const definitions = {};
  for (const key of definitionKeys)
    assignProperty(definitions, keyMap.get(key) ?? key, rewrite(multiDocument.definitions[key]));
  return {
    dialect: "openapi-3.1",
    schemas,
    definitions,
  };
}
/** @internal */
const VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP = /^[a-zA-Z0-9.\-_]+$/;
/**
 * Returns a sanitized key for an OpenAPI component schema.
 * Should match the `^[a-zA-Z0-9.\-_]+$` regular expression.
 *
 * @internal
 */
function sanitizeOpenApiComponentsSchemasKey(s) {
  return s.length === 0 ? "_" : s.replace(/[^a-zA-Z0-9._-]/gu, "_");
}
/** @internal */
function getReferenceKey($ref) {
  const path = $ref.startsWith("#") ? parseUriFragment($ref) : void 0;
  return path !== void 0 && path.length === 2 && path[0] === "$defs" ? path[1] : void 0;
}
function transformSchema(node, transform) {
  return walk(node, false, true);
  function walk(node, inheritedResource, isRoot = false) {
    if (!isObject(node)) return node;
    const inEmbeddedResource = inheritedResource || (!isRoot && createsResource(node.$id));
    const out = {};
    for (const key of Object.keys(node)) {
      const value = node[key];
      let transformed = value;
      switch (key) {
        case "$defs":
        case "properties":
        case "patternProperties":
        case "dependentSchemas":
          transformed = mapObject(value, (value) => walk(value, inEmbeddedResource)) ?? value;
          break;
        case "allOf":
        case "anyOf":
        case "oneOf":
        case "prefixItems":
          transformed = Array.isArray(value)
            ? value.map((value) => walk(value, inEmbeddedResource))
            : value;
          break;
        case "not":
        case "additionalProperties":
        case "propertyNames":
        case "unevaluatedProperties":
        case "items":
        case "contains":
        case "unevaluatedItems":
        case "if":
        case "then":
        case "else":
        case "contentSchema":
          transformed = walk(value, inEmbeddedResource);
      }
      assignProperty(out, key, transformed);
    }
    transform(out, inEmbeddedResource);
    return out;
  }
}
/** @internal */
function rewriteRefs(schema, rewrite) {
  return transformSchema(schema, (schema) => {
    rewriteSchemaRef(schema, rewrite);
  });
}
function rewriteSchemaRef(schema, rewrite) {
  if (typeof schema.$ref === "string") assignProperty(schema, "$ref", rewrite(schema.$ref, "$ref"));
  if (typeof schema.$dynamicRef === "string")
    assignProperty(schema, "$dynamicRef", rewrite(schema.$dynamicRef, "$dynamicRef"));
}
function mapObject(value, f) {
  if (!isObject(value)) return void 0;
  const out = {};
  for (const key of Object.keys(value)) assignProperty(out, key, f(value[key], key));
  return out;
}
function createsResource(id) {
  return typeof id === "string" && id.length > 0 && id[0] !== "#";
}
const PRE_2020_TO_2020_COLLISIONS = [
  "$anchor",
  "$defs",
  "$dynamicAnchor",
  "$dynamicRef",
  "$vocabulary",
  "contentSchema",
  "dependentRequired",
  "dependentSchemas",
  "maxContains",
  "minContains",
  "prefixItems",
  "unevaluatedItems",
  "unevaluatedProperties",
];
[...PRE_2020_TO_2020_COLLISIONS];
[...PRE_2020_TO_2020_COLLISIONS];
function unsupported(keyword, dialect, details) {
  throw new Error(`Cannot convert JSON Schema keyword "${keyword}" to ${dialect}: ${details}`);
}
function rejectKeywordCollisions(source, keywords, targetDialect, sourceDialect) {
  for (const keyword of keywords)
    if (Object.hasOwn(source, keyword))
      unsupported(
        keyword,
        targetDialect,
        `it is not active in ${sourceDialect} but would become active in the target`,
      );
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/toCodec.js
/** @internal */
function toCodecJson$1(schema) {
  return make$1(toCodecJsonAST(schema.ast), { schema });
}
/** @internal */
const toCodecJsonAST = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent((ast) => {
  const out = toCodecJsonASTStep(ast, toCodecJsonAST);
  const context = ast.context;
  if (out === ast || context === void 0) return out;
  return replaceContextLastLink(out, withoutConstructorDefault(context));
});
function withoutConstructorDefault(context) {
  return context.constructorDefault === void 0
    ? context
    : new Context(context.isOptional, context.isMutable, void 0, context.annotations);
}
function validateCanonicalObjectPropertyNames(ast) {
  if (ast.propertySignatures.some((ps) => typeof ps.name !== "string"))
    throw new globalThis.Error("Objects property names must be strings", { cause: ast });
}
function makeReorder(getPriority) {
  return (types) => {
    const sortedTypes = [...types].sort(
      (a, b) => getPriority(toEncoded$1(a)) - getPriority(toEncoded$1(b)),
    );
    if (!sortedTypes.some((ast, index) => ast !== types[index])) return types;
    return sortedTypes;
  };
}
const toCodecJsonReorder = /*#__PURE__*/ makeReorder((ast) => {
  switch (ast._tag) {
    case "BigInt":
    case "Symbol":
    case "UniqueSymbol":
      return 0;
    default:
      return 1;
  }
});
function toCodecJsonASTStep(ast, recur) {
  switch (ast._tag) {
    case "Declaration": {
      const getLink = ast.annotations?.toCodecJson ?? ast.annotations?.toCodec;
      if (!isFunction(getLink)) return replaceEncoding(ast, [unknownToJson]);
      const link = getLink(ast.typeParameters.map((tp) => make$1(toEncoded$1(tp))));
      return link === void 0 ? ast : replaceEncoding(ast, [mapLink(link, recur)]);
    }
    case "Unknown":
      return replaceEncoding(ast, [unknownToJson]);
    case "ObjectKeyword":
      return replaceEncoding(ast, [objectKeywordToJson]);
    case "Undefined":
    case "Void":
    case "Literal":
    case "Number":
      return ast.toCodecJson();
    case "UniqueSymbol":
    case "Symbol":
    case "BigInt":
      return ast.toCodecStringTree();
    case "Objects":
      validateCanonicalObjectPropertyNames(ast);
      return ast.recur(recur, parameterFromString);
    case "Union": {
      const sortedTypes = toCodecJsonReorder(ast.types);
      if (sortedTypes !== ast.types)
        return new Union$1(
          sortedTypes,
          ast.options,
          ast.annotations,
          ast.checks,
          ast.encoding,
          ast.context,
          ast.encodingChecks,
        ).recur(recur);
      return ast.recur(recur);
    }
    case "Arrays":
    case "Suspend":
      return ast.recur(recur);
  }
  return ast;
}
/** @internal */
function toCodecStringTree$1(schema) {
  return make$1(toCodecStringTreeAST(schema.ast), { schema });
}
/** @internal */
function toCodecArrayFromSingle$1(schema) {
  return make$1(toCodecArrayFromSingleAST(schema.ast));
}
const toStringTreeReorder = /*#__PURE__*/ makeReorder((ast) => {
  switch (ast._tag) {
    case "Null":
    case "Boolean":
    case "Number":
    case "BigInt":
    case "Symbol":
    case "UniqueSymbol":
      return 0;
    default:
      return 1;
  }
});
function toCodecStringTreeASTStep(ast, recur, onMissingAnnotation) {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = ast.typeParameters.map((tp) => make$1(recur(toEncoded$1(tp))));
      const getStringTreeLink = ast.annotations?.toCodecStringTree;
      if (isFunction(getStringTreeLink)) {
        const link = getStringTreeLink(typeParameters);
        if (link === void 0) return ast;
        return replaceEncoding(ast, [mapLink(link, recur)]);
      }
      const getJsonLink = ast.annotations?.toCodecJson;
      const jsonLink = isFunction(getJsonLink) ? getJsonLink(typeParameters) : void 0;
      const getLink = jsonLink === void 0 ? ast.annotations?.toCodec : void 0;
      const link = jsonLink ?? (isFunction(getLink) ? getLink(typeParameters) : void 0);
      return link === void 0
        ? onMissingAnnotation(ast)
        : replaceEncoding(ast, [mapLink(link, recur)]);
    }
    case "Null":
      return replaceEncoding(ast, [nullToString]);
    case "Boolean":
      return replaceEncoding(ast, [booleanToString]);
    case "Unknown":
    case "ObjectKeyword":
      return replaceEncoding(ast, [unknownToStringTree]);
    case "Enum":
    case "Number":
    case "Literal":
    case "UniqueSymbol":
    case "Symbol":
    case "BigInt":
      return ast.toCodecStringTree();
    case "Objects":
      validateCanonicalObjectPropertyNames(ast);
      return ast.recur(recur, parameterFromString);
    case "Union": {
      const sortedTypes = toStringTreeReorder(ast.types);
      if (sortedTypes !== ast.types)
        return new Union$1(
          sortedTypes,
          ast.options,
          ast.annotations,
          ast.checks,
          ast.encoding,
          ast.context,
          ast.encodingChecks,
        ).recur(recur);
      return ast.recur(recur);
    }
    case "Arrays":
    case "Suspend":
      return ast.recur(recur);
  }
  return ast;
}
const nullToString = /*#__PURE__*/ new Link(
  /*#__PURE__*/ new Literal$1("null"),
  /*#__PURE__*/ new Transformation(
    /*#__PURE__*/ transform$1(() => null),
    /*#__PURE__*/ transform$1(() => "null"),
  ),
);
const booleanToString = /*#__PURE__*/ new Link(
  /*#__PURE__*/ new Union$1([
    /*#__PURE__*/ new Literal$1("true"),
    /*#__PURE__*/ new Literal$1("false"),
  ]),
  /*#__PURE__*/ new Transformation(
    /*#__PURE__*/ transform$1((s) => s === "true"),
    /*#__PURE__*/ String$3(),
  ),
);
const arrayFromSingleTransformation = /*#__PURE__*/ new Transformation(
  /*#__PURE__*/ transform$1((input) => (typeof input === "string" ? [input] : input)),
  /*#__PURE__*/ passthrough$1(),
);
const isCodecArrayFromSingleLink = (link) => link.transformation === arrayFromSingleTransformation;
const toCodecStringTreeAST = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent(
  (ast) => {
    const out = toCodecStringTreeASTStep(ast, toCodecStringTreeAST, (ast) => {
      throw new globalThis.Error("Missing structural codec for StringTree", { cause: ast });
    });
    if (out !== ast && ast.context !== void 0)
      return replaceContextLastLink(out, withoutConstructorDefault(ast.context));
    return out;
  },
  { stopAt: isCodecArrayFromSingleLink },
);
const toArrayFromSingleInputElement = (ast) => (isOptional(ast) ? optionalKey$1(unknown) : unknown);
const toCodecArrayFromSingleAST = /*#__PURE__*/ applyToSelfOrLastLinkEncodingIdempotent(
  (ast) => {
    const out = toCodecArrayFromSingleASTStep(ast);
    if (isArrays(out)) {
      const ensure = decodeTo$1(
        new Union$1(
          [
            new Arrays(
              out.isMutable,
              out.elements.map(toArrayFromSingleInputElement),
              out.rest.map(toArrayFromSingleInputElement),
            ),
            string,
          ],
          { mode: "anyOf" },
        ),
        out,
        arrayFromSingleTransformation,
      );
      return isOptional(ast) ? optionalKey$1(ensure) : ensure;
    }
    return out;
  },
  { stopAt: isCodecArrayFromSingleLink },
);
function toCodecArrayFromSingleASTStep(ast) {
  return ast._tag === "Declaration" ||
    ast._tag === "Arrays" ||
    ast._tag === "Objects" ||
    ast._tag === "Union" ||
    ast._tag === "Suspend"
    ? ast.recur(toCodecArrayFromSingleAST)
    : ast;
}
globalThis.RegExp;
/**
 * Escapes special characters in a regular expression pattern.
 *
 * **When to use**
 *
 * Use to turn literal text into a safe regular expression pattern fragment.
 *
 * **Example** (Escaping a pattern string)
 *
 * ```ts import.meta.vitest
 * import { RegExp } from "effect"
 *
 * RegExp.escape("a*b") // => "a\\*b"
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 2.0.0
 */
const escape = (string) => string.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/errors.js
/** @internal */
function errorWithPath(message, path) {
  if (path.length > 0) message += `\n  at ${formatPath(path)}`;
  return new Error(message);
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/toJsonSchemaDocument.js
function formatDefinitionReference(key) {
  return `#/$defs/${formatUriFragmentToken(key)}`;
}
const jsonSchemaAnnotationExcludedKeys = /*#__PURE__*/ new Set([
  ...annotationExcludedKeys,
  IDENTIFIER_FALLBACK_KEY,
  ...jsonSchemaAnnotationKeys,
]);
function collectJsonSchemaAnnotations(annotations, options) {
  if (annotations === void 0) return void 0;
  const out = {};
  const title = annotations.title;
  if (typeof title === "string") out.title = title;
  const description = annotations.description;
  const expected = annotations.expected;
  if (typeof description === "string") out.description = description;
  else if (options?.generateDescriptions === true && typeof expected === "string")
    out.description = expected;
  const defaultValue = annotations.default;
  if (isJson(defaultValue)) out.default = defaultValue;
  const examples = annotations.examples;
  if (Array.isArray(examples) && isJson(examples)) out.examples = examples;
  const readOnly = annotations.readOnly;
  if (typeof readOnly === "boolean") out.readOnly = readOnly;
  const writeOnly = annotations.writeOnly;
  if (typeof writeOnly === "boolean") out.writeOnly = writeOnly;
  const format = annotations.format;
  if (typeof format === "string") out.format = format;
  const contentEncoding = annotations.contentEncoding;
  if (typeof contentEncoding === "string") out.contentEncoding = contentEncoding;
  const contentMediaType = annotations.contentMediaType;
  if (typeof contentMediaType === "string") out.contentMediaType = contentMediaType;
  const contentSchema = annotations.contentSchema;
  if (isJson(contentSchema)) out.contentSchema = contentSchema;
  if (options?.includeAnnotationKey !== void 0)
    for (const [key, value] of Object.entries(annotations)) {
      if (jsonSchemaAnnotationExcludedKeys.has(key) || !options.includeAnnotationKey(key)) continue;
      if (isJson(value)) assignProperty(out, key, value);
    }
  return Object.keys(out).length === 0 ? void 0 : out;
}
function extractJsonSchemaNumberType(schema) {
  let type = schema.type === "number" || schema.type === "integer" ? schema.type : void 0;
  let out = schema;
  if (type !== void 0) {
    out = { ...schema };
    delete out.type;
  }
  if (Array.isArray(out.allOf)) {
    const members = [];
    let changed = false;
    for (const member of out.allOf) {
      const extracted = extractJsonSchemaNumberType(member);
      if (extracted.type !== void 0) {
        changed = true;
        if (type === void 0 || extracted.type === "integer") type = extracted.type;
      }
      if (Object.keys(extracted.schema).length > 0) members.push(extracted.schema);
    }
    if (changed) {
      const { allOf: _, ...rest } = out;
      out =
        members.length === 0
          ? rest
          : {
              ...rest,
              allOf: members,
            };
    }
  }
  return {
    type,
    schema: out,
  };
}
function isJsonSchemaNumberEncoding(schema) {
  if (
    !Array.isArray(schema.anyOf) ||
    schema.anyOf.length !== 2 ||
    schema.anyOf[0]?.type !== "number"
  )
    return false;
  const special = schema.anyOf[1];
  return (
    special?.type === "string" &&
    Array.isArray(special.enum) &&
    special.enum.length === 3 &&
    special.enum.includes("NaN") &&
    special.enum.includes("Infinity") &&
    special.enum.includes("-Infinity")
  );
}
const inlineableCheckKeywords =
  "|type|format|pattern|multipleOf|minimum|maximum|exclusiveMinimum|exclusiveMaximum|minLength|maxLength|minItems|maxItems|uniqueItems|minProperties|maxProperties|propertyNames|";
function hasOnlyKeywords(schema, allowed) {
  return Object.keys(schema).every((key) => allowed.includes(`|${key}|`));
}
function hasNoCollisions(left, rightKeys) {
  return typeof left.$ref !== "string" && rightKeys.every((key) => !Object.hasOwn(left, key));
}
const lowerBoundKeywords = "|minimum|exclusiveMinimum|minLength|minItems|minProperties|";
const upperBoundKeywords = "|maximum|exclusiveMaximum|maxLength|maxItems|maxProperties|";
function mergeInlineCheck(left, right, rightKeys) {
  if (typeof left.$ref === "string") return void 0;
  const out = {
    ...left,
    ...right,
  };
  for (const key of rightKeys) {
    if (!Object.hasOwn(left, key)) continue;
    const a = left[key];
    const b = right[key];
    if (typeof a !== "number" || typeof b !== "number") return void 0;
    if (lowerBoundKeywords.includes(`|${key}|`)) out[key] = Math.max(a, b);
    else if (upperBoundKeywords.includes(`|${key}|`)) out[key] = Math.min(a, b);
    else return void 0;
  }
  if (typeof out.minimum === "number" && typeof out.exclusiveMinimum === "number")
    delete out[out.exclusiveMinimum >= out.minimum ? "minimum" : "exclusiveMinimum"];
  if (typeof out.maximum === "number" && typeof out.exclusiveMaximum === "number")
    delete out[out.exclusiveMaximum <= out.maximum ? "maximum" : "exclusiveMaximum"];
  return out;
}
const promotableAnnotationKeywords = "|title|description|default|examples|readOnly|writeOnly|";
const inlineableAnnotatedCheckKeywords = inlineableCheckKeywords + promotableAnnotationKeywords;
function appendJsonSchema(left, right, inlineCheck) {
  if (Object.keys(left).length === 0) return right;
  const rightKeys = Object.keys(right);
  if (rightKeys.length === 0) return left;
  const leftType = left.type === "number" || left.type === "integer" ? left.type : void 0;
  const isNumberEncoding = isJsonSchemaNumberEncoding(left);
  if (leftType !== void 0 || isNumberEncoding) {
    const extracted = extractJsonSchemaNumberType(right);
    if (extracted.type !== void 0) {
      const type = leftType === "integer" || extracted.type === "integer" ? "integer" : "number";
      const base = {
        ...left,
        type,
      };
      if (isNumberEncoding) delete base.anyOf;
      const extractedKeys = Object.keys(extracted.schema);
      if (extractedKeys.length === 0) return base;
      return hasOnlyKeywords(extracted.schema, promotableAnnotationKeywords) &&
        hasNoCollisions(base, extractedKeys)
        ? {
            ...base,
            ...extracted.schema,
          }
        : appendJsonSchema(base, extracted.schema, inlineCheck);
    }
  }
  if (inlineCheck) {
    const merged = mergeInlineCheck(left, right, rightKeys);
    if (merged !== void 0) return merged;
  }
  const members = Array.isArray(right.allOf) && rightKeys.length === 1 ? right.allOf : [right];
  if (Array.isArray(left.allOf))
    return {
      ...left,
      allOf: [...left.allOf, ...members],
    };
  if (typeof left.$ref === "string") return { allOf: [left, ...members] };
  return {
    ...left,
    allOf: members,
  };
}
function isExact(exactness, seen = /* @__PURE__ */ new Set()) {
  if (typeof exactness === "boolean") return exactness;
  if (seen.has(exactness)) return true;
  seen.add(exactness);
  return exactness.every((dependency) => isExact(dependency, seen));
}
function isApproximateCheckOutput(output) {
  return Array.isArray(output);
}
function compileJsonSchema(representations, rootPaths, references, options) {
  const compiledDefinitions = /* @__PURE__ */ new Map();
  const definitionAliases = /* @__PURE__ */ new Map();
  const compiledRepresentations = /* @__PURE__ */ new WeakMap();
  const pendingOneOf = /* @__PURE__ */ new Map();
  const fallbackDefinitions = /* @__PURE__ */ new Map();
  const referenceKeys = Object.keys(references);
  for (const key of referenceKeys) compileDefinition(key, ["references", key]);
  const compiledSchemas = map$6(representations, (representation, index) =>
    recur(representation, rootPaths[index], []),
  );
  for (const [branches, schemas] of pendingOneOf.values())
    if (!isExact(branches)) {
      for (const schema of schemas)
        if (Array.isArray(schema.oneOf)) {
          schema.anyOf = schema.oneOf;
          delete schema.oneOf;
        }
    }
  for (const key of referenceKeys) {
    const representation = references[key];
    const fallback = getIdentifierFallback(representation);
    if (fallback === void 0) continue;
    const schema = compiledDefinitions.get(key)[0];
    const candidates = fallbackDefinitions.get(fallback);
    const match = candidates?.find((candidate) =>
      equals(compiledDefinitions.get(candidate)[0], schema),
    );
    if (match === void 0) {
      if (candidates === void 0) fallbackDefinitions.set(fallback, [key]);
      else candidates.push(key);
    } else definitionAliases.set(key, match);
  }
  const schemas = map$6(compiledSchemas, finalizeJsonSchema);
  const definitions = {};
  for (const key of referenceKeys)
    if (!definitionAliases.has(key))
      assignProperty(definitions, key, finalizeJsonSchema(compiledDefinitions.get(key)[0]));
  return {
    dialect: "draft-2020-12",
    schemas,
    definitions,
  };
  function registerPendingOneOf(schema) {
    if (Array.isArray(schema.oneOf)) pendingOneOf.get(schema.oneOf)?.[1].push(schema);
    return schema;
  }
  function compileDefinition(key, path) {
    if (!Object.hasOwn(references, key))
      throw errorWithPath(`Invalid reference ${key}`, [...path, "$ref"]);
    const cached = compiledDefinitions.get(key);
    if (cached !== void 0) return cached;
    const result = [{}, []];
    compiledDefinitions.set(key, result);
    result[0] = recur(references[key], ["references", key], result[1]);
    return result;
  }
  function finalizeJsonSchema(schema) {
    return rewriteRefs(schema, ($ref) => {
      const pointer = decodeUriFragment($ref);
      if (pointer === void 0) {
        if (/^#(?:\/|%2f)/i.test($ref))
          throw new Error(`Invalid JSON Pointer URI fragment ${JSON.stringify($ref)}`);
        return $ref;
      }
      if (!pointer.startsWith("/$defs/")) return $ref;
      const separator = pointer.indexOf("/", 7);
      const canonical = definitionAliases.get(
        unescapeToken(pointer.slice(7, separator < 0 ? void 0 : separator)),
      );
      if (canonical === void 0) return $ref;
      return $ref.replace(
        /^#(?:\/|%2f).*?(?:\/|%2f).*?(?=\/|%2f|$)/i,
        formatDefinitionReference(canonical),
      );
    });
  }
  function getIdentifierFallback(representation) {
    if (representation._tag === "Reference") return void 0;
    const annotations =
      representation.checks.length === 0
        ? representation.annotations
        : representation.checks[representation.checks.length - 1].annotations;
    return typeof annotations?.identifier !== "string" &&
      typeof annotations?.["~identifier"] === "string"
      ? annotations[IDENTIFIER_FALLBACK_KEY]
      : void 0;
  }
  function compileCheck(check, type, path, dependencies) {
    const annotations = check.annotations;
    const callback = annotations?.toJsonSchema;
    if (callback !== void 0) {
      const result = callback({
        type,
        schemas:
          check.representation?.schemas?.map((schema, index) =>
            recur(schema, [...path, "representation", "schemas", index], dependencies),
          ) ?? [],
      });
      const approximate = isApproximateCheckOutput(result);
      if (approximate) dependencies.push(false);
      const fragment = approximate ? result[0] : result;
      const ordinary = collectJsonSchemaAnnotations(annotations, options);
      const schema =
        ordinary === void 0
          ? fragment
          : {
              ...fragment,
              ...ordinary,
            };
      const allowed =
        ordinary === void 0 ? inlineableCheckKeywords : inlineableAnnotatedCheckKeywords;
      return [
        schema,
        check._tag === "Filter" &&
        hasOnlyKeywords(schema, allowed) &&
        (ordinary === void 0 || hasOnlyKeywords(ordinary, promotableAnnotationKeywords))
          ? true
          : void 0,
      ];
    }
    if (check._tag === "Filter") {
      dependencies.push(false);
      return;
    }
    const schemas = check.checks.flatMap((child, index) => {
      const result = compileCheck(child, type, [...path, "checks", index], dependencies);
      return result === void 0 ? [] : [result[0]];
    });
    if (schemas.length === 0) return void 0;
    const ordinary = collectJsonSchemaAnnotations(annotations, options);
    const schema = { allOf: schemas };
    return [
      ordinary === void 0
        ? schema
        : {
            ...schema,
            ...ordinary,
          },
    ];
  }
  function recur(representation, path, dependencies) {
    if (representation._tag === "Reference") {
      dependencies.push(compileDefinition(representation.$ref, path)[1]);
      return { $ref: formatDefinitionReference(representation.$ref) };
    }
    const cached = compiledRepresentations.get(representation);
    if (cached !== void 0) {
      dependencies.push(cached[1]);
      return cached[0];
    }
    const local = [];
    dependencies.push(local);
    let output = on(representation, path, local);
    const ordinary = collectJsonSchemaAnnotations(representation.annotations, options);
    if (ordinary !== void 0)
      output = {
        ...output,
        ...ordinary,
      };
    for (let index = 0; index < representation.checks.length; index++) {
      const type =
        typeof output.type === "string" && isJsonSchemaType(output.type) ? output.type : void 0;
      const check = compileCheck(
        representation.checks[index],
        type,
        [...path, "checks", index],
        local,
      );
      if (check !== void 0) output = appendJsonSchema(output, ...check);
    }
    compiledRepresentations.set(representation, [output, local]);
    return registerPendingOneOf(output);
  }
  function on(representation, path, dependencies) {
    switch (representation._tag) {
      case "Any":
      case "Unknown":
        return {};
      case "ObjectKeyword":
        return { anyOf: [{ type: "object" }, { type: "array" }] };
      case "Void":
      case "Undefined":
      case "Null":
        return { type: "null" };
      case "BigInt":
        return {
          type: "string",
          allOf: [{ pattern: "^-?\\d+$" }],
        };
      case "Symbol":
        return {
          type: "string",
          allOf: [{ pattern: "^Symbol\\(([\\s\\S]*)\\)$" }],
        };
      case "UniqueSymbol":
        return globalThis.Symbol.keyFor(representation.symbol) === void 0
          ? { not: {} }
          : {
              type: "string",
              enum: [globalThis.String(representation.symbol)],
            };
      case "Declaration":
        dependencies.push(false);
        return {};
      case "Suspend":
        return recur(representation.thunk, [...path, "thunk"], dependencies);
      case "Never":
        return { not: {} };
      case "String":
        return { type: "string" };
      case "Number":
        return {
          anyOf: [
            { type: "number" },
            {
              type: "string",
              enum: ["NaN", "Infinity", "-Infinity"],
            },
          ],
        };
      case "Boolean":
        return { type: "boolean" };
      case "Literal": {
        const literal = representation.literal;
        return typeof literal === "bigint"
          ? {
              type: "string",
              enum: [globalThis.String(literal)],
            }
          : {
              type: typeof literal,
              enum: [literal],
            };
      }
      case "Enum": {
        const types = representation.enums.map(([title, literal], index) => {
          if (typeof literal === "number" && !globalThis.Number.isFinite(literal))
            throw errorWithPath(`Invalid numeric enum value ${globalThis.String(literal)}`, [
              ...path,
              "enums",
              index,
              1,
            ]);
          return {
            type: typeof literal,
            enum: [literal],
            title,
          };
        });
        return types.length === 0 ? { not: {} } : { anyOf: types };
      }
      case "TemplateLiteral":
        return {
          type: "string",
          pattern: `^${representation.parts.map(getPartPattern).join("")}$`,
        };
      case "Arrays": {
        if (representation.rest.length > 1)
          throw errorWithPath("Invalid schema representation document", [...path, "rest"]);
        const out = { type: "array" };
        let minItems = representation.elements.length;
        const prefixItems = representation.elements.map((element, index) => {
          if (element.isOptional) minItems--;
          const schema = recur(element.type, [...path, "elements", index, "type"], dependencies);
          const annotations = collectJsonSchemaAnnotations(element.annotations, options);
          return annotations === void 0
            ? schema
            : registerPendingOneOf(appendJsonSchema(schema, annotations));
        });
        if (prefixItems.length > 0) {
          out.prefixItems = prefixItems;
          out.maxItems = representation.elements.length;
          if (minItems > 0) out.minItems = minItems;
        } else out.items = false;
        if (representation.rest.length === 1) {
          delete out.maxItems;
          const rest = recur(representation.rest[0], [...path, "rest", 0], dependencies);
          if (Object.keys(rest).length > 0) out.items = rest;
          else delete out.items;
        }
        return out;
      }
      case "Objects": {
        if (
          representation.propertySignatures.length === 0 &&
          representation.indexSignatures.length === 0
        )
          return { not: { type: "null" } };
        const out = { type: "object" };
        const properties = {};
        const required = [];
        for (let index = 0; index < representation.propertySignatures.length; index++) {
          const property = representation.propertySignatures[index];
          if (typeof property.name !== "string")
            throw errorWithPath("Invalid schema representation document", [
              ...path,
              "propertySignatures",
              index,
              "name",
            ]);
          const name = property.name;
          const schema = recur(
            property.type,
            [...path, "propertySignatures", index, "type"],
            dependencies,
          );
          const annotations = collectJsonSchemaAnnotations(property.annotations, options);
          assignProperty(
            properties,
            name,
            annotations === void 0
              ? schema
              : registerPendingOneOf(appendJsonSchema(schema, annotations)),
          );
          if (!property.isOptional) required.push(name);
        }
        if (representation.propertySignatures.length > 0) out.properties = properties;
        if (required.length > 0) out.required = required;
        const patternProperties = {};
        const additionalPropertySchemas = [];
        const indexValueSchemas = [];
        let hasUnrepresentableIndexPattern = false;
        for (let index = 0; index < representation.indexSignatures.length; index++) {
          const signature = representation.indexSignatures[index];
          let type = recur(
            signature.type,
            [...path, "indexSignatures", index, "type"],
            dependencies,
          );
          if (equals(type, { not: {} })) type = false;
          indexValueSchemas.push(type);
          const patterns = getParameterPatterns(
            signature.parameter,
            [...path, "indexSignatures", index, "parameter"],
            /* @__PURE__ */ new Set(),
          );
          if (patterns === void 0) {
            hasUnrepresentableIndexPattern = true;
            dependencies.push(false);
            continue;
          }
          if (patterns.length === 0) additionalPropertySchemas.push(type);
          else
            for (const pattern of patterns) {
              const previous = patternProperties[pattern];
              assignProperty(
                patternProperties,
                pattern,
                previous === void 0
                  ? type
                  : previous === false || type === false
                    ? false
                    : registerPendingOneOf(appendJsonSchema(previous, type)),
              );
            }
        }
        const hasPatternProperties = Object.keys(patternProperties).length > 0;
        if (hasPatternProperties) out.patternProperties = patternProperties;
        if (hasUnrepresentableIndexPattern && options?.onExcessProperty === "error") {
          const propertyNames = [];
          if (representation.propertySignatures.length > 0)
            propertyNames.push({ enum: Object.keys(properties) });
          for (let index = 0; index < representation.indexSignatures.length; index++)
            propertyNames.push(
              recur(
                representation.indexSignatures[index].parameter,
                [...path, "indexSignatures", index, "parameter"],
                dependencies,
              ),
            );
          out.propertyNames =
            propertyNames.length === 1 ? propertyNames[0] : { anyOf: propertyNames };
          out.additionalProperties =
            indexValueSchemas.length === 1 ? indexValueSchemas[0] : { anyOf: indexValueSchemas };
          if (additionalPropertySchemas.length > 0)
            out.allOf = additionalPropertySchemas.map((type) => ({
              type: "object",
              additionalProperties: type,
            }));
        } else if (additionalPropertySchemas.length === 0)
          out.additionalProperties =
            hasUnrepresentableIndexPattern || options?.onExcessProperty !== "error";
        else if (
          additionalPropertySchemas.length === 1 &&
          representation.propertySignatures.length === 0 &&
          !hasPatternProperties
        )
          out.additionalProperties = additionalPropertySchemas[0];
        else if (additionalPropertySchemas.length > 0)
          out.allOf = additionalPropertySchemas.map((type) => ({
            type: "object",
            additionalProperties: type,
          }));
        if (
          typeof out.additionalProperties === "object" &&
          out.additionalProperties !== null &&
          Object.keys(out.additionalProperties).length === 0
        )
          delete out.additionalProperties;
        return out;
      }
      case "Union": {
        const branches = [];
        const types = representation.types.map((type, index) =>
          recur(type, [...path, "types", index], branches),
        );
        dependencies.push(branches);
        if (types.length === 0) return { not: {} };
        const mode = representation.options?.mode ?? "anyOf";
        if (mode === "anyOf" && types.length > 1) {
          const compacted = compactEnums(types);
          if (compacted !== void 0) return compacted;
        }
        if (mode === "oneOf") pendingOneOf.set(types, [branches, []]);
        return { [mode]: types };
      }
    }
  }
  function getParameterPatterns(parameter, path, seenReferences) {
    switch (parameter._tag) {
      case "Reference": {
        if (!Object.hasOwn(references, parameter.$ref))
          throw errorWithPath(`Invalid reference ${parameter.$ref}`, [...path, "$ref"]);
        compileDefinition(parameter.$ref, path);
        if (seenReferences.has(parameter.$ref)) return void 0;
        const next = new Set(seenReferences).add(parameter.$ref);
        return getParameterPatterns(
          references[parameter.$ref],
          ["references", parameter.$ref],
          next,
        );
      }
      case "String": {
        if (parameter.checks.length === 0) return [];
        if (
          parameter.checks.length !== 1 ||
          parameter.checks[0]._tag !== "Filter" ||
          parameter.checks[0].annotations?.toJsonSchema === void 0
        )
          return;
        const dependencies = [];
        const schema = recur(parameter, path, dependencies);
        if (!isExact(dependencies)) return void 0;
        return schema.type === "string" &&
          typeof schema.pattern === "string" &&
          hasOnlyKeywords(
            schema,
            "|type|pattern|title|description|default|examples|readOnly|writeOnly|",
          )
          ? [schema.pattern]
          : void 0;
      }
      case "TemplateLiteral":
        return parameter.checks.length === 0
          ? [`^${parameter.parts.map(getPartPattern).join("")}$`]
          : void 0;
      case "Union": {
        if (
          parameter.types.length === 0 ||
          parameter.checks.length > 0 ||
          parameter.options?.mode === "oneOf"
        )
          return;
        const patterns = [];
        for (let index = 0; index < parameter.types.length; index++) {
          const memberPatterns = getParameterPatterns(
            parameter.types[index],
            [...path, "types", index],
            seenReferences,
          );
          if (memberPatterns === void 0) return void 0;
          if (memberPatterns.length === 0) return [];
          patterns.push(...memberPatterns);
        }
        return patterns;
      }
      default:
        throw errorWithPath("Invalid schema representation document", path);
    }
  }
}
function isJsonSchemaType(input) {
  return (
    input === "string" ||
    input === "number" ||
    input === "boolean" ||
    input === "array" ||
    input === "object" ||
    input === "null" ||
    input === "integer"
  );
}
function compactEnums(schemas) {
  let sharedType = void 0;
  const values = [];
  for (const schema of schemas) {
    if (
      Object.keys(schema).length !== 2 ||
      schema.type === void 0 ||
      !Array.isArray(schema.enum) ||
      schema.enum.length === 0
    )
      return;
    if (sharedType === void 0) sharedType = schema.type;
    else if (schema.type !== sharedType) return void 0;
    for (const value of schema.enum) {
      if (values.includes(value)) return void 0;
      values.push(value);
    }
  }
  return {
    type: sharedType,
    enum: values,
  };
}
function getPartPattern(part) {
  switch (part._tag) {
    case "Literal":
      return escape(globalThis.String(part.literal));
    case "String":
      return STRING_PATTERN;
    case "Number":
      return FINITE_PATTERN;
    case "TemplateLiteral":
      return part.parts.map(getPartPattern).join("");
    case "Union":
      return `(?:${part.types.map(getPartPattern).join("|")})`;
    default:
      throw errorWithPath("Invalid schema representation document", []);
  }
}
/** @internal */
function toJsonSchemaDocument$1(document, options) {
  const output = compileJsonSchema(
    [document.representation],
    [["representation"]],
    document.references,
    options,
  );
  return {
    dialect: output.dialect,
    schema: output.schemas[0],
    definitions: output.definitions,
  };
}
/** @internal */
function toJsonSchemaMultiDocument(document, options) {
  return compileJsonSchema(
    document.representations,
    document.representations.map((_, index) => ["representations", index]),
    document.references,
    options,
  );
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/toRepresentation.js
const defaultReferencePolicy = ({ identifier }) => identifier;
function annotationsField(annotations) {
  return annotations === void 0 ? void 0 : { annotations };
}
/** @internal */
function toRepresentation(ast, options) {
  const { references, representations } = toRepresentations([ast], options);
  return {
    representation: representations[0],
    references,
  };
}
/** @internal */
function toRepresentations(asts, options) {
  const references = {};
  const referenceOwners = /* @__PURE__ */ new Map();
  const buildingReferences = /* @__PURE__ */ new Set();
  const candidates = /* @__PURE__ */ new Map();
  const visitingCandidates = /* @__PURE__ */ new Set();
  for (const ast of asts) visit(ast);
  const referencePolicy = options?.referencePolicy ?? defaultReferencePolicy;
  for (const candidatesByIdentifier of candidates.values())
    for (const candidate of candidatesByIdentifier.values()) {
      const requestedReference = referencePolicy({
        ast: candidate.ast,
        occurrences: candidate.occurrences,
        identifier: candidate.identifier,
      });
      if (requestedReference !== void 0)
        candidate.reference = getReference(
          requestedReference,
          candidate,
          requestedReference === candidate.identifier || !requestedReference.endsWith("_")
            ? "_"
            : "",
        );
      else if (candidate.isRecursive)
        candidate.reference = getReference(`${candidate.ast._tag}_`, candidate, "");
    }
  return {
    representations: map$6(asts, (ast) => recur(ast)),
    references,
  };
  function getReference(prefix, owner, separator = "_") {
    let candidate = prefix;
    let suffix = 0;
    while (referenceOwners.has(candidate)) {
      if (referenceOwners.get(candidate) === owner) return candidate;
      candidate = `${prefix}${separator}${++suffix}`;
    }
    referenceOwners.set(candidate, owner);
    return candidate;
  }
  function annotateReference(ast, candidate, reference) {
    const fallback = candidate.fallback;
    if (fallback !== void 0)
      return resolveIdentifierFallback(ast) === fallback
        ? ast
        : annotate$1(ast, { [IDENTIFIER_FALLBACK_KEY]: fallback });
    return reference === candidate.identifier ? ast : annotate$1(ast, { identifier: reference });
  }
  function makeReference(reference, ast) {
    if (!Object.hasOwn(references, reference) && !buildingReferences.has(reference)) {
      buildingReferences.add(reference);
      const representation = on(ast);
      buildingReferences.delete(reference);
      assignProperty(references, reference, representation);
    }
    return {
      _tag: "Reference",
      $ref: reference,
    };
  }
  function getCandidate(input) {
    const ast = getLastEncoding(input);
    const owner = getContextOwner(ast);
    let identifier = resolveIdentifier$1(ast);
    const fallback =
      identifier === void 0
        ? ((ast !== input ? resolveIdentifier$1(input) : void 0) ?? resolveIdentifierFallback(ast))
        : void 0;
    if (fallback !== void 0) identifier = `${fallback}Encoded`;
    let candidatesByIdentifier = candidates.get(owner);
    if (candidatesByIdentifier === void 0) {
      candidatesByIdentifier = /* @__PURE__ */ new Map();
      candidates.set(owner, candidatesByIdentifier);
    }
    let candidate = candidatesByIdentifier.get(identifier);
    if (candidate === void 0) {
      candidate = {
        ast: owner,
        identifier,
        fallback,
        occurrences: 0,
        isRecursive: false,
        reference: void 0,
      };
      candidatesByIdentifier.set(identifier, candidate);
    }
    return candidate;
  }
  function visit(input) {
    const candidate = getCandidate(input);
    const ast = candidate.ast;
    candidate.occurrences++;
    if (visitingCandidates.has(candidate)) {
      candidate.isRecursive = true;
      return;
    }
    if (candidate.occurrences > 1) return;
    visitingCandidates.add(candidate);
    visitChecks(ast.checks);
    switch (ast._tag) {
      case "Declaration":
      case "Arrays":
      case "Objects":
      case "Union":
        ast.recur((child) => {
          visit(child);
          return child;
        });
        break;
      case "TemplateLiteral":
        ast.parts.forEach(visit);
        break;
      case "Suspend":
        visit(ast.thunk());
    }
    visitingCandidates.delete(candidate);
  }
  function visitChecks(checks) {
    checks?.forEach((check) => {
      check.annotations?.representation?.schemas?.forEach((schema) => visit(toType$1(schema)));
      if (check._tag === "FilterGroup") visitChecks(check.checks);
    });
  }
  function recur(input) {
    const candidate = getCandidate(input);
    const ast = candidate.ast;
    const reference = candidate.reference;
    if (reference !== void 0)
      return makeReference(
        reference,
        candidate.identifier === void 0 ? ast : annotateReference(ast, candidate, reference),
      );
    return on(ast);
  }
  function on(ast) {
    const checks = fromChecks(ast.checks);
    switch (ast._tag) {
      case "Declaration":
        return {
          _tag: "Declaration",
          typeParameters: ast.typeParameters.map((ast) => recur(ast)),
          checks,
          ...fromDeclarationAnnotations(ast.annotations),
        };
      case "Null":
      case "Undefined":
      case "Void":
      case "Never":
      case "Unknown":
      case "Any":
      case "String":
      case "Boolean":
      case "Number":
      case "BigInt":
      case "Symbol":
      case "ObjectKeyword":
        return {
          _tag: ast._tag,
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Literal":
        return {
          _tag: "Literal",
          literal: ast.literal,
          checks,
          ...annotationsField(ast.annotations),
        };
      case "UniqueSymbol":
        return {
          _tag: "UniqueSymbol",
          symbol: ast.symbol,
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Enum":
        return {
          _tag: "Enum",
          enums: ast.enums,
          checks,
          ...annotationsField(ast.annotations),
        };
      case "TemplateLiteral":
        return {
          _tag: "TemplateLiteral",
          parts: ast.parts.map((ast) => recur(ast)),
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Arrays":
        return {
          _tag: "Arrays",
          elements: ast.elements.map((element) => {
            const projected = getLastEncoding(element);
            const annotations = projected.context?.annotations;
            return {
              isOptional: isOptional(projected),
              type: recur(element),
              ...annotationsField(annotations),
            };
          }),
          rest: ast.rest.map((ast) => recur(ast)),
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Objects":
        return {
          _tag: "Objects",
          propertySignatures: ast.propertySignatures.map((property) => {
            const projected = getLastEncoding(property.type);
            const annotations = projected.context?.annotations;
            return {
              name: property.name,
              type: recur(property.type),
              isOptional: isOptional(projected),
              isMutable: isMutable(projected),
              ...annotationsField(annotations),
            };
          }),
          indexSignatures: ast.indexSignatures.map((index) => ({
            parameter: recur(index.parameter),
            type: recur(index.type),
          })),
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Union":
        return {
          _tag: "Union",
          types: ast.types.map((ast) => recur(ast)),
          ...(ast.options === void 0 ? {} : { options: ast.options }),
          checks,
          ...annotationsField(ast.annotations),
        };
      case "Suspend":
        return {
          _tag: "Suspend",
          checks: [],
          thunk: recur(ast.thunk()),
          ...annotationsField(ast.annotations),
        };
    }
  }
  function fromChecks(checks) {
    return checks?.map(fromCheck) ?? [];
  }
  function fromCheck(check) {
    switch (check._tag) {
      case "Filter":
        return {
          _tag: "Filter",
          aborted: check.aborted,
          ...fromCheckAnnotations(check.annotations),
        };
      case "FilterGroup":
        return {
          _tag: "FilterGroup",
          checks: map$6(check.checks, fromCheck),
          ...fromCheckAnnotations(check.annotations),
        };
    }
  }
  function fromDeclarationAnnotations(annotations) {
    if (annotations === void 0) return void 0;
    const { representation, ...ordinary } = annotations;
    return {
      ...(representation === void 0 ? void 0 : { representation }),
      ...(Object.keys(ordinary).length === 0 ? void 0 : { annotations: ordinary }),
    };
  }
  function fromCheckAnnotations(annotations) {
    if (annotations === void 0) return void 0;
    const { representation, ...ordinary } = annotations;
    const projected =
      representation === void 0
        ? void 0
        : representation.schemas === void 0
          ? representation
          : {
              ...representation,
              schemas: representation.schemas.map((schema) => recur(toType$1(schema))),
            };
    return {
      ...(projected === void 0 ? void 0 : { representation: projected }),
      ...(Object.keys(ordinary).length === 0 ? void 0 : { annotations: ordinary }),
    };
  }
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schema/toEquivalence.js
/** @internal */
const toEquivalence$1 = /*#__PURE__*/ memoize((ast) => {
  return recur(ast);
});
function recur(ast) {
  const annotation = resolve$1(ast)?.["toEquivalence"];
  if (annotation) return annotation(isDeclaration(ast) ? ast.typeParameters.map(recur) : []);
  switch (ast._tag) {
    case "Never":
      return strictEqual();
    case "Declaration":
      return declarationEquivalence(ast);
    case "Null":
    case "Undefined":
    case "Void":
    case "Unknown":
    case "Any":
    case "String":
    case "Number":
    case "Boolean":
    case "BigInt":
    case "Symbol":
    case "Literal":
    case "UniqueSymbol":
    case "ObjectKeyword":
    case "Enum":
    case "TemplateLiteral":
      return equals;
    case "Arrays": {
      const elements = ast.elements.map(recur);
      const rest = ast.rest.map(recur);
      const [head, ...tail] = rest;
      const tailLength = tail.length;
      return make$10((a, b) => {
        if (!Array.isArray(a) || !Array.isArray(b)) return false;
        const len = a.length;
        if (len !== b.length) return false;
        let i = 0;
        for (; i < Math.min(len, ast.elements.length); i++)
          if (!elements[i](a[i], b[i])) return false;
        if (rest.length > 0) {
          for (; i < len - tailLength; i++) if (!head(a[i], b[i])) return false;
          for (let j = 0; j < tailLength; j++) if (!tail[j](a[i + j], b[i + j])) return false;
        }
        return true;
      });
    }
    case "Objects": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) return equals;
      const propertySignatures = ast.propertySignatures.map((ps) => recur(ps.type));
      const indexSignatures = ast.indexSignatures.map((is) => recur(is.type));
      return make$10((a, b) => {
        if (!isObject(a) || !isObject(b)) return false;
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i];
          const name = ps.name;
          const aHas = Object.hasOwn(a, name);
          const bHas = Object.hasOwn(b, name);
          if (isOptional(ps.type)) {
            if (aHas !== bHas) return false;
          }
          if (aHas && bHas && !propertySignatures[i](a[name], b[name])) return false;
        }
        for (let i = 0; i < indexSignatures.length; i++) {
          const is = ast.indexSignatures[i];
          const aKeys = getIndexSignatureKeys(a, is.parameter);
          const bKeys = getIndexSignatureKeys(b, is.parameter);
          if (aKeys.length !== bKeys.length) return false;
          for (let j = 0; j < aKeys.length; j++) {
            const key = aKeys[j];
            if (!Object.hasOwn(b, key) || !indexSignatures[i](a[key], b[key])) return false;
          }
        }
        return true;
      });
    }
    case "Union": {
      const types = toType$1(ast).types;
      const index = getCandidateIndex(types);
      const compiled = types.map((candidate, i) => [_is(candidate), recur(ast.types[i])]);
      return make$10((a, b) => {
        const candidates = index(a, false);
        for (let i = 0; i < candidates.length; i++) {
          const [is, equivalence] = compiled[candidates[i]];
          if (is(a) && is(b)) return equivalence(a, b);
        }
        return false;
      });
    }
    case "Suspend": {
      let equivalence;
      return make$10((a, b) => (equivalence ??= toEquivalence$1(ast.thunk()))(a, b));
    }
  }
}
function declarationEquivalence(ast) {
  const representation = ast.annotations?.representation;
  if (representation === void 0) return equals;
  switch (representation.id) {
    case "effect/schema/Option": {
      const [value] = declarationTypeParameters(ast);
      return (a, b) => a._tag === b._tag && (a._tag === "None" || value(a.value, b.value));
    }
    case "effect/schema/Result": {
      const [success, failure] = declarationTypeParameters(ast);
      return (a, b) =>
        a._tag === b._tag &&
        (a._tag === "Success" ? success(a.success, b.success) : failure(a.failure, b.failure));
    }
    case "effect/schema/CauseReason": {
      const [error, defect] = declarationTypeParameters(ast);
      return causeReasonEquivalence(error, defect);
    }
    case "effect/schema/Cause": {
      const [error, defect] = declarationTypeParameters(ast);
      return causeEquivalence(error, defect);
    }
    case "effect/schema/Exit": {
      const [value, error, defect] = declarationTypeParameters(ast);
      const cause = causeEquivalence(error, defect);
      return (a, b) =>
        a._tag === b._tag &&
        (a._tag === "Success" ? value(a.value, b.value) : cause(a.cause, b.cause));
    }
    case "effect/schema/ReadonlyMap": {
      const [key, value] = declarationTypeParameters(ast);
      return makeCompareMap(key, value);
    }
    case "effect/schema/ReadonlySet":
      return makeCompareSet(declarationTypeParameters(ast)[0]);
    case "effect/schema/RegExp":
      return (a, b) => a.source === b.source && a.flags === b.flags;
    case "effect/schema/URL":
      return (a, b) => a.toString() === b.toString();
    default:
      return equals;
  }
}
function declarationTypeParameters(ast) {
  return ast.typeParameters.map(recur);
}
function causeReasonEquivalence(error, defect) {
  return (a, b) => {
    if (a._tag !== b._tag) return false;
    switch (a._tag) {
      case "Fail":
        return error(a.error, b.error);
      case "Die":
        return defect(a.defect, b.defect);
      case "Interrupt":
        return a.fiberId === b.fiberId;
    }
  };
}
function causeEquivalence(error, defect) {
  const reasons = Array_(causeReasonEquivalence(error, defect));
  return (a, b) => reasons(a.reasons, b.reasons);
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Struct.js
/**
 * Creates a new struct with the specified keys removed.
 *
 * **When to use**
 *
 * Use to exclude sensitive or irrelevant fields from a struct.
 *
 * **Gotchas**
 *
 * Keys not present in the struct are silently ignored.
 *
 * **Example** (Removing a property)
 *
 * ```ts import.meta.vitest
 * import { pipe, Struct } from "effect"
 *
 * const user = { name: "Alice", age: 30, password: "secret" }
 * pipe(user, Struct.omit(["password"])) // => { name: "Alice", age: 30 }
 * ```
 *
 * @see {@link pick} – the inverse (keep only specified keys)
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const omit = /*#__PURE__*/ dual(2, (self, keys) => {
  return buildStruct(self, (k, v) => (!hasPropertyKey(keys, k) ? [k, v] : void 0));
});
/**
 * Merges two structs into a new struct. When both structs share a key, the
 * value from `that` (the second struct) wins.
 *
 * **When to use**
 *
 * Use when you want `{ ...self, ...that }` with proper types.
 *
 * **Details**
 *
 * The result type is `Simplify<Assign<S, O>>`.
 *
 * **Example** (Merging structs with overlapping keys)
 *
 * ```ts import.meta.vitest
 * import { pipe, Struct } from "effect"
 *
 * const defaults = { theme: "light", lang: "en" }
 * const overrides = { theme: "dark", fontSize: 14 }
 * pipe(defaults, Struct.assign(overrides)) // => { theme: "dark", lang: "en", fontSize: 14 }
 * ```
 *
 * @see {@link Assign} – the type-level equivalent
 * @see {@link evolve} – transform individual values instead of replacing them
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const assign = /*#__PURE__*/ dual(2, (self, that) => {
  return {
    ...self,
    ...that,
  };
});
/**
 * Wraps a plain function as a {@link Lambda} value so it can be used with
 * {@link map}, {@link mapPick}, and {@link mapOmit}.
 *
 * **When to use**
 *
 * Use to create a typed lambda for struct mapping APIs that need type-level
 * input and output tracking.
 *
 * **Details**
 *
 * The type parameter `L` encodes both the input and output types at the type
 * level, allowing the compiler to track how struct value types change. At
 * runtime, the returned value is the same function; `lambda` only adjusts the
 * type.
 *
 * **Example** (Wrapping values in arrays)
 *
 * ```ts import.meta.vitest
 * import { pipe, Struct } from "effect"
 *
 * interface AsArray extends Struct.Lambda {
 *   <A>(self: A): Array<A>
 *   readonly "~lambda.out": Array<this["~lambda.in"]>
 * }
 *
 * const asArray = Struct.lambda<AsArray>((a) => [a])
 * const result = pipe({ x: 1, y: "hello" }, Struct.map(asArray))
 * result // => { x: [1], y: ["hello"] }
 * ```
 *
 * @see {@link Lambda} – the type-level interface
 * @see {@link map} – apply a lambda to all struct values
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const lambda = (f) => f;
/**
 * Applies a {@link Lambda} transformation to every value in a struct.
 *
 * **When to use**
 *
 * Use when you want to apply the same function to every value in a struct.
 *
 * **Details**
 *
 * The lambda must be created with {@link lambda} so the compiler can track the
 * output types.
 *
 * **Example** (Wrapping every value in an array)
 *
 * ```ts import.meta.vitest
 * import { pipe, Struct } from "effect"
 *
 * interface AsArray extends Struct.Lambda {
 *   <A>(self: A): Array<A>
 *   readonly "~lambda.out": Array<this["~lambda.in"]>
 * }
 *
 * const asArray = Struct.lambda<AsArray>((a) => [a])
 * const result = pipe({ width: 10, height: 20 }, Struct.map(asArray))
 * result // => { width: [10], height: [20] }
 * ```
 *
 * @see {@link mapPick} – apply a lambda only to selected keys
 * @see {@link mapOmit} – apply a lambda to all keys except selected ones
 * @see {@link evolve} – apply different functions to different keys
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const map = /*#__PURE__*/ dual(2, (self, lambda) => {
  return buildStruct(self, (k, v) => [k, lambda(v)]);
});
function hasPropertyKey(keys, key) {
  return keys.some(
    (candidate) =>
      candidate === key || (typeof candidate === "number" && String(candidate) === key),
  );
}
/**
 * Walk `source`; for each key decide what to emit via the small callback.
 *
 * The callback returns either
 *   • `undefined`  → nothing is copied, or
 *   • `[newKey, newVal]`
 *
 * so every public API just supplies a different callback.
 */
function buildStruct(source, f) {
  const out = {};
  for (const k of Reflect.ownKeys(source)) {
    if (!Object.prototype.propertyIsEnumerable.call(source, k)) continue;
    const res = f(k, source[k]);
    if (res) {
      const [nk, nv] = res;
      assignProperty(out, nk, nv);
    }
  }
  return out;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schemaError.js
const SchemaErrorTypeId = "~effect/Schema/SchemaError";
function isSchemaError$1(u) {
  return (
    hasProperty(u, "~effect/Schema/SchemaError") &&
    u["~effect/Schema/SchemaError"] === "~effect/Schema/SchemaError"
  );
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/net/NetAddress.js
const TypeId$2 = "~effect/net/NetAddress";
const ipv4Value = (self) => self.value;
const ipv6Words = (self) => self;
/**
 * A checked network-address operation failure retaining the address or supplied input.
 *
 * **Details**
 *
 * Address-based operations retain the address value. Parsing and numeric
 * construction retain the supplied string or array. Composed operations forward
 * errors from the failing operation unchanged. Failures from external operations
 * retain the original exception in `cause` when available.
 *
 * @stability unstable
 * @category errors
 * @since 4.0.0
 */
var NetAddressError = class extends /*#__PURE__*/ TaggedError$1("NetAddressError") {};
const isAddress = (u) => hasProperty(u, TypeId$2);
/**
 * Returns `true` when a value is an IPv4 address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isIpv4Address = (u) => isAddress(u) && u._tag === "Ipv4Address";
/**
 * Returns `true` when a value is an IPv6 address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isIpv6Address = (u) => isAddress(u) && u._tag === "Ipv6Address";
/**
 * Returns `true` when a value is a resolved IPv4 internet address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isInetAddressV4 = (u) => isAddress(u) && u._tag === "InetAddressV4";
/**
 * Returns `true` when a value is a resolved IPv6 internet address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isInetAddressV6 = (u) => isAddress(u) && u._tag === "InetAddressV6";
/**
 * Returns `true` when a value is a resolved internet address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isInetAddress = (u) => isInetAddressV4(u) || isInetAddressV6(u);
/**
 * Returns `true` when a value is a Unix-domain filesystem address.
 *
 * @stability unstable
 * @category guards
 * @since 4.0.0
 */
const isUnixPathAddress = (u) => isAddress(u) && u._tag === "UnixPathAddress";
const Ipv4Proto = {
  ...BaseProto,
  _tag: "Ipv4Address",
  [TypeId$2]: TypeId$2,
  [symbol$1](that) {
    return isIpv4Address(that) && ipv4Value(this) === ipv4Value(that);
  },
  [symbol]() {
    return optimize(combine(ipv4HashSeed, ipv4Value(this) | 0));
  },
  toString() {
    return formatIp(this);
  },
  toJSON() {
    return this.toString();
  },
};
const Ipv6Proto = {
  ...BaseProto,
  _tag: "Ipv6Address",
  [TypeId$2]: TypeId$2,
  [symbol$1](that) {
    if (!isIpv6Address(that)) return false;
    const self = ipv6Words(this);
    const other = ipv6Words(that);
    return (
      self.w0 === other.w0 && self.w1 === other.w1 && self.w2 === other.w2 && self.w3 === other.w3
    );
  },
  [symbol]() {
    const self = ipv6Words(this);
    let h = combine(ipv6HashSeed, self.w0 | 0);
    h = combine(h, self.w1 | 0);
    h = combine(h, self.w2 | 0);
    return optimize(combine(h, self.w3 | 0));
  },
  toString() {
    return formatIp(this);
  },
  toJSON() {
    return this.toString();
  },
};
({ ...BaseProto });
const ipv4HashSeed = /*#__PURE__*/ string$1("Ipv4Address");
const ipv6HashSeed = /*#__PURE__*/ string$1("Ipv6Address");
const makeIpv4 = (value) => {
  const self = Object.create(Ipv4Proto);
  self.value = value >>> 0;
  return Object.freeze(self);
};
const makeIpv6 = (w0, w1, w2, w3) => {
  const self = Object.create(Ipv6Proto);
  self.w0 = w0 >>> 0;
  self.w1 = w1 >>> 0;
  self.w2 = w2 >>> 0;
  self.w3 = w3 >>> 0;
  return Object.freeze(self);
};
const packOctets = (a, b, c, d) => ((a << 24) | (b << 16) | (c << 8) | d) >>> 0;
const wordToOctets = (word) => [word >>> 24, (word >>> 16) & 255, (word >>> 8) & 255, word & 255];
const addressError = (input, message) =>
  fail$1(
    new NetAddressError({
      input,
      message,
    }),
  );
const allIntegersInRange = (values, max) => {
  for (let i = 0; i < values.length; i++) {
    const n = values[i];
    if (!Number.isInteger(n) || n < 0 || n > max) return false;
  }
  return true;
};
/**
 * Creates an IPv4 address from four checked octets.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const ipv4FromOctets = (octets) => {
  if (!allIntegersInRange(octets, 255))
    return addressError(octets, "octets must be integers from 0 through 255");
  return succeed$1(makeIpv4(packOctets(octets[0], octets[1], octets[2], octets[3])));
};
/**
 * Creates an IPv6 address from eight checked 16-bit segments.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const ipv6FromSegments = (segments) => {
  if (!allIntegersInRange(segments, 65535))
    return addressError(segments, "segments must be integers from 0 through 65535");
  return succeed$1(
    makeIpv6(
      segments[0] * 65536 + segments[1],
      segments[2] * 65536 + segments[3],
      segments[4] * 65536 + segments[5],
      segments[6] * 65536 + segments[7],
    ),
  );
};
/**
 * Parses a strict dotted-decimal IPv4 address.
 *
 * **Details**
 *
 * Multi-digit octets with a leading zero are rejected to avoid octal ambiguity.
 *
 * @stability unstable
 * @category decoding
 * @since 4.0.0
 */
const ipv4FromString = (input) => {
  const parts = input.split(".");
  if (parts.length !== 4 || parts.some((part) => !/^\d{1,3}$/.test(part)))
    return addressError(input, "expected exactly four decimal octets");
  if (parts.some((part) => part.length > 1 && part[0] === "0"))
    return addressError(input, "leading zeroes are not allowed");
  const octets = parts.map(Number);
  if (octets.some((part) => part > 255)) return addressError(input, "octets must be at most 255");
  return ipv4FromOctets([octets[0], octets[1], octets[2], octets[3]]);
};
const parseIpv6Segments = (input) => {
  if (input.includes("[") || input.includes("]") || input.includes("%"))
    return addressError(
      input,
      "brackets and zone identifiers are not valid in a bare IPv6 address",
    );
  const halves = input.split("::");
  if (halves.length > 2) return addressError(input, "only one compression marker is allowed");
  const head = halves[0] === "" ? [] : halves[0].split(":");
  const tail = halves.length === 2 && halves[1] !== "" ? halves[1].split(":") : [];
  if (head.some((part) => part === "") || tail.some((part) => part === ""))
    return addressError(input, "empty segments are only valid in the compression marker");
  const trailing =
    tail.length > 0 ? tail[tail.length - 1] : head.length > 0 ? head[head.length - 1] : "";
  let embedded;
  if (trailing.includes(".")) {
    if (halves.length === 2 && tail.length === 0)
      return addressError(input, "embedded IPv4 syntax must be trailing");
    const parsed = map$5(ipv4FromString(trailing), (address) => {
      const value = ipv4Value(address);
      return [value >>> 16, value & 65535];
    });
    if (isFailure(parsed)) return parsed;
    embedded = parsed.success;
    if (tail.length > 0) tail.pop();
    else head.pop();
  }
  const explicit = head.length + tail.length + (embedded ? 2 : 0);
  if (halves.length === 1 ? explicit !== 8 : explicit >= 8)
    return addressError(
      input,
      halves.length === 1
        ? "expected eight segments"
        : "compression must replace at least one segment",
    );
  const parse = (part) => (/^[0-9a-fA-F]{1,4}$/.test(part) ? Number.parseInt(part, 16) : void 0);
  const parsedHead = head.map(parse);
  const parsedTail = tail.map(parse);
  if (parsedHead.some((part) => part === void 0) || parsedTail.some((part) => part === void 0))
    return addressError(input, "segments must contain one through four hexadecimal digits");
  return succeed$1([
    ...parsedHead,
    ...Array(8 - explicit).fill(0),
    ...parsedTail,
    ...(embedded ?? []),
  ]);
};
/**
 * Parses an IPv6 address with optional compression and trailing embedded IPv4.
 *
 * @stability unstable
 * @category decoding
 * @since 4.0.0
 */
const ipv6FromString = (input) => {
  return flatMap$1(parseIpv6Segments(input), (segments) => ipv6FromSegments(segments));
};
/**
 * Parses a bare numeric IPv4 or IPv6 address.
 *
 * @stability unstable
 * @category decoding
 * @since 4.0.0
 */
const ipFromString = (input) => {
  return input.includes(":") ? ipv6FromString(input) : ipv4FromString(input);
};
/**
 * Returns the four numeric octets of an IPv4 address in a fresh tuple.
 *
 * @stability unstable
 * @category getters
 * @since 4.0.0
 */
const ipv4ToOctets = (self) => wordToOctets(ipv4Value(self));
/**
 * Returns the eight numeric segments of an IPv6 address in a fresh tuple.
 *
 * @stability unstable
 * @category getters
 * @since 4.0.0
 */
const ipv6ToSegments = (self) => {
  const { w0, w1, w2, w3 } = ipv6Words(self);
  return [
    w0 >>> 16,
    w0 & 65535,
    w1 >>> 16,
    w1 & 65535,
    w2 >>> 16,
    w2 & 65535,
    w3 >>> 16,
    w3 & 65535,
  ];
};
/**
 * Formats an IP address in canonical numeric form.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatIp = (self) => {
  if (isIpv4Address(self)) return ipv4ToOctets(self).join(".");
  const segments = ipv6ToSegments(self);
  if (isIpv4Mapped(self))
    return `::ffff:${segments[6] >> 8}.${segments[6] & 255}.${segments[7] >> 8}.${segments[7] & 255}`;
  let bestStart = -1;
  let bestLength = 0;
  let start = -1;
  for (let index = 0; index <= 8; index++)
    if (index < 8 && segments[index] === 0) {
      if (start === -1) start = index;
    } else if (start !== -1) {
      if (index - start > bestLength) {
        bestStart = start;
        bestLength = index - start;
      }
      start = -1;
    }
  if (bestLength < 2) return segments.map((segment) => segment.toString(16)).join(":");
  return `${segments
    .slice(0, bestStart)
    .map((segment) => segment.toString(16))
    .join(":")}::${segments
    .slice(bestStart + bestLength)
    .map((segment) => segment.toString(16))
    .join(":")}`;
};
/**
 * Returns `true` for the all-zero address of either IP version.
 *
 * @stability unstable
 * @category predicates
 * @since 4.0.0
 */
const isUnspecified = (self) => {
  if (isIpv4Address(self)) return ipv4Value(self) === 0;
  const { w0, w1, w2, w3 } = ipv6Words(self);
  return w0 === 0 && w1 === 0 && w2 === 0 && w3 === 0;
};
/**
 * Returns `true` for IPv4 `127.0.0.0/8` or IPv6 `::1`.
 *
 * @stability unstable
 * @category predicates
 * @since 4.0.0
 */
const isLoopback = (self) => {
  if (isIpv4Address(self)) return ipv4Value(self) >>> 24 === 127;
  const { w0, w1, w2, w3 } = ipv6Words(self);
  return w0 === 0 && w1 === 0 && w2 === 0 && w3 === 1;
};
/**
 * Returns `true` when an IPv6 address is in the `::ffff:0:0/96` mapped range.
 *
 * @stability unstable
 * @category predicates
 * @since 4.0.0
 */
const isIpv4Mapped = (self) => {
  const { w0, w1, w2 } = ipv6Words(self);
  return w0 === 0 && w1 === 0 && w2 === 65535;
};
const InetV4Proto = {
  ...BaseProto,
  _tag: "InetAddressV4",
  [TypeId$2]: TypeId$2,
  [symbol$1](that) {
    return isInetAddressV4(that) && this.port === that.port && equals(this.address, that.address);
  },
  [symbol]() {
    return combine(hash(this.address), number$1(this.port));
  },
  toString() {
    return formatInet(this);
  },
  toJSON() {
    return this.toString();
  },
};
const InetV6Proto = {
  ...BaseProto,
  _tag: "InetAddressV6",
  [TypeId$2]: TypeId$2,
  [symbol$1](that) {
    return (
      isInetAddressV6(that) &&
      this.port === that.port &&
      this.scopeId === that.scopeId &&
      equals(this.address, that.address)
    );
  },
  [symbol]() {
    return combine(combine(hash(this.address), number$1(this.port)), number$1(this.scopeId));
  },
  toString() {
    return formatInet(this);
  },
  toJSON() {
    return this.toString();
  },
};
const checkPort = (port) => Number.isInteger(port) && port >= 0 && port <= 65535;
/**
 * Creates a checked IPv4 internet address.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const inetAddressV4 = (address, port) => {
  if (!checkPort(port))
    return addressError(address, "port must be an integer from 0 through 65535");
  const self = Object.create(InetV4Proto);
  self.address = address;
  self.port = port;
  return succeed$1(Object.freeze(self));
};
/**
 * Creates a checked IPv6 internet address with an optional scope identifier.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const inetAddressV6 = (address, port, options) => {
  if (!checkPort(port))
    return addressError(address, "port must be an integer from 0 through 65535");
  const scopeId = options?.scopeId ?? 0;
  if (!Number.isInteger(scopeId) || scopeId < 0 || scopeId > 4294967295)
    return addressError(address, "scopeId must be an unsigned 32-bit integer");
  const self = Object.create(InetV6Proto);
  self.address = address;
  self.port = port;
  self.scopeId = scopeId;
  return succeed$1(Object.freeze(self));
};
/**
 * Creates a checked internet address for an IP address and port.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const inetAddress = (address, port) =>
  isIpv4Address(address) ? inetAddressV4(address, port) : inetAddressV6(address, port);
/**
 * Creates a checked internet address from a numeric IP string and port.
 *
 * **Gotchas**
 *
 * The address must be a numeric IPv4 or IPv6 literal. This function does not
 * resolve hostnames or accept IPv6 brackets.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const inetAddressFromIpString = (address, port) => {
  return flatMap$1(ipFromString(address), (address) => inetAddress(address, port));
};
/**
 * Formats the numeric host of an internet address without brackets or a port,
 * preserving a nonzero IPv6 scope ID as a `%` suffix.
 *
 * **When to use**
 *
 * Use when the host and port are represented separately.
 *
 * @see {@link formatInet} for a complete socket address
 * @see {@link formatUrlHost} for a bracketed URL authority host
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatHost$1 = (self) =>
  formatIp(self.address) + (isInetAddressV6(self) && self.scopeId !== 0 ? `%${self.scopeId}` : "");
/**
 * Formats a resolved internet address, bracketing IPv6 around its port.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatInet = (self) => {
  const host = formatHost$1(self);
  return isInetAddressV4(self) ? `${host}:${self.port}` : `[${host}]:${self.port}`;
};
/**
 * Formats an IP address for use as a URL authority host.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatUrlHost = (self) => (isIpv4Address(self) ? formatIp(self) : `[${formatIp(self)}]`);
/**
 * Converts an IP address or internet socket address to a WHATWG `URL`.
 *
 * **Details**
 *
 * Defaults to the HTTP scheme and uses standard URL normalization, including
 * IPv6 brackets and omission of default ports. Bare IP addresses have no
 * explicit port; internet socket addresses retain their port, including zero.
 * Unspecified addresses are preserved.
 *
 * **Gotchas**
 *
 * Returns a `NetAddressError` for scoped IPv6 addresses or inputs that the URL
 * constructor rejects. Supply the scheme without a trailing colon, for example
 * `"https"`.
 *
 * @stability unstable
 * @category conversions
 * @since 4.0.0
 */
const toUrl = (self, scheme = "http") => {
  if (self._tag === "InetAddressV6" && self.scopeId !== 0)
    return addressError(self, "scoped IPv6 addresses are not supported by WHATWG URLs");
  return try_$1({
    try: () =>
      new URL(`${scheme}://${isInetAddress(self) ? formatInet(self) : formatUrlHost(self)}`),
    catch: (cause) =>
      new NetAddressError({
        input: self,
        message: "failed to construct URL",
        cause,
      }),
  });
};
/**
 * Formats an IP or socket address as a URL display string.
 *
 * **Details**
 *
 * Defaults to HTTP, brackets IPv6 addresses, and omits default ports and the
 * trailing slash. Custom schemes such as `"tcp"` retain their scheme and host.
 * Unix socket addresses use {@link formatUnixPath}, preserving the raw path
 * with a `unix://` prefix regardless of the supplied scheme.
 *
 * **Gotchas**
 *
 * Returns a `NetAddressError` when URL conversion fails, including for scoped
 * IPv6 addresses.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatUrl = (self, scheme = "http") =>
  isUnixPathAddress(self)
    ? succeed$1(formatUnixPath(self))
    : map$5(toUrl(self, scheme), (url) => `${url.protocol}//${url.host}`);
/**
 * Formats an IP or socket address as a URL display string,
 * throwing a `NetAddressError` when conversion fails.
 *
 * @see {@link formatUrl} for the checked version and formatting behavior.
 *
 * @stability unstable
 * @category unsafe
 * @since 4.0.0
 */
const formatUrlUnsafe = (self, scheme = "http") => getOrThrow(formatUrl(self, scheme));
/**
 * Formats a hostname or numeric IP address for use as a URL authority host.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatUrlHostString = (host) =>
  host.includes(":") && !host.startsWith("[") ? `[${host}]` : host;
const UnixPathProto = {
  ...BaseProto,
  _tag: "UnixPathAddress",
  [TypeId$2]: TypeId$2,
  [symbol$1](that) {
    return isUnixPathAddress(that) && this.path === that.path;
  },
  [symbol]() {
    return combine(string$1("UnixPathAddress"), string$1(this.path));
  },
  toString() {
    return this.path;
  },
  toJSON() {
    return this.toString();
  },
};
/**
 * Creates a Unix-domain filesystem address without normalizing its opaque path.
 *
 * @stability unstable
 * @category constructors
 * @since 4.0.0
 */
const unixPathAddress = (path) => {
  const self = Object.create(UnixPathProto);
  self.path = path;
  return Object.freeze(self);
};
/**
 * Formats a Unix-domain socket path as a readable `unix://path` display string.
 *
 * **Details**
 *
 * Preserves the raw path without URL encoding or normalization. The resulting
 * string is intended for display.
 *
 * @stability unstable
 * @category encoding
 * @since 4.0.0
 */
const formatUnixPath = (self) => `unix://${self.path}`;
({ ...BaseProto });
({ ...BaseProto });
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Schema.js
const TypeId = TypeId$3;
/**
 * Creates a schema for a **parametric** type (a generic container such as
 * `Array<A>`, `Option<A>`, etc.) by accepting a list of type-parameter schemas
 * and a decoder factory.
 *
 * **When to use**
 *
 * Use when you are defining a schema for a generic container whose validation
 * depends on one or more type-parameter schemas.
 *
 * **Details**
 *
 * The outer call `declareConstructor<T, E, Iso>()` fixes the decoded type `T`,
 * the encoded type `E`, and the optional iso type. The inner call receives:
 * - `typeParameters` — the concrete schemas for each type variable
 * - `run` — a factory that, given resolved codecs for each type parameter,
 *   returns a parsing function `(u, ast, options) => Effect<T, Issue>`
 * - `annotations` — optional metadata
 *
 * @see {@link declare} for creating schemas for non-parametric types.
 *
 * **Example** (Schema for a parametric `Box<A>` type)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema, SchemaIssue, SchemaParser } from "effect"
 *
 * interface Box<A> {
 *   readonly value: A
 * }
 *
 * const isBox = (u: unknown): u is Box<unknown> =>
 *   typeof u === "object" && u !== null && "value" in u
 *
 * const Box = <A extends Schema.Constraint>(item: A) =>
 *   Schema.declareConstructor<Box<A["Type"]>, Box<A["Encoded"]>>()(
 *     [item],
 *     ([itemCodec]) =>
 *       (u, ast, options) => {
 *         if (!isBox(u)) {
 *           return Effect.fail(new SchemaIssue.InvalidType(ast, u, options))
 *         }
 *         return Effect.map(
 *           SchemaParser.decodeUnknownEffect(itemCodec)(u.value, options),
 *           (value) => ({ value })
 *         )
 *       }
 *   )
 *
 * const schema = Box(Schema.Number)
 * Effect.runSync(Schema.decodeUnknownEffect(schema)({ value: 1 })) // => { value: 1 }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function declareConstructor() {
  return (typeParameters, run, annotations) => {
    return make(
      new Declaration(
        typeParameters.map(getAST),
        (typeParameters) => run(typeParameters.map((ast) => make(ast))),
        annotations,
      ),
    );
  };
}
/**
 * Creates a schema for a **non-parametric** opaque type using a type-guard
 * function. The schema accepts any unknown value and succeeds when `is` returns
 * `true`, failing with an `InvalidType` issue otherwise.
 *
 * **When to use**
 *
 * Use when you are defining a schema for an opaque type with no type parameters
 * and validation can be expressed as a type guard.
 *
 * **Example** (Defining a schema for a custom `UserId` branded type)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * type UserId = string & { readonly _tag: "UserId" }
 *
 * const isUserId = (u: unknown): u is UserId =>
 *   typeof u === "string" && u.startsWith("user_")
 *
 * const UserId = Schema.declare<UserId>(isUserId, {
 *   title: "UserId",
 *   description: "A user identifier starting with 'user_'"
 * })
 * Schema.decodeUnknownSync(UserId)("user_123") // => "user_123"
 * ```
 *
 * @see {@link declareConstructor} for creating schemas for parametric types.
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function declare(is, annotations) {
  return declareConstructor()(
    [],
    () => (input, ast, options) =>
      is(input) ? succeed$3(input) : fail$2(new InvalidType(ast, input, options)),
    annotations,
  );
}
/**
 * Adds metadata annotations to a schema without changing its runtime behavior.
 * This is the pipeable (curried) counterpart of the `.annotate` method.
 *
 * **Details**
 *
 * Annotations provide extra context used by documentation generators, JSON
 * Schema converters, error formatters, and other tooling. Common keys include
 * `title`, `description`, `examples`, `message`, and `identifier`.
 *
 * **Example** (Adding a title and description)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const Age = Schema.Natural.pipe(
 *   Schema.annotate({
 *     title: "Age",
 *     description: "A non-negative integer representing age in years"
 *   })
 * )
 * Schema.resolveAnnotations(Age)?.title // => "Age"
 * ```
 *
 * @see {@link annotateEncoded} to annotate the encoded side instead.
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
function annotate(annotations) {
  return (self) => self.annotate(annotations);
}
/**
 * Adds key-level annotations to a schema field. This is the pipeable
 * (curried) counterpart of the `.annotateKey` method.
 *
 * **Details**
 *
 * Key annotations apply to a field's position inside a `Struct` or `Tuple`
 * rather than to the field's value type. They can carry a
 * `messageMissingKey` to customise the error shown when the field is absent,
 * as well as standard documentation fields such as `title`, `description`,
 * and `examples`.
 *
 * **Example** (Customizing the missing-key message for a required field)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   username: Schema.String.pipe(
 *     Schema.annotateKey({
 *       description: "The username used to log in",
 *       messageMissingKey: "Username is required"
 *     })
 *   )
 * })
 * schema.fields.username.ast.context?.annotations?.messageMissingKey // => "Username is required"
 * ```
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
function annotateKey(annotations) {
  return (self) => {
    return self.rebuild(annotateKey$1(self.ast, annotations));
  };
}
/**
 * Error thrown or returned when schema decoding or encoding fails.
 *
 * **Details**
 *
 * The `issue` field contains a structured {@link SchemaIssue.Issue} tree describing
 * every validation failure, including the path to the problematic value and
 * the expected type or constraint. The `message` field renders the issue tree
 * with the default formatter.
 *
 * **Gotchas**
 *
 * Parsing with `reportInput: true` adds an enumerable `input` field to
 * value-bearing issues. Built-in messages may include reported input, and
 * custom annotations or messages are not sanitized.
 *
 * **Example** (Inspecting a SchemaError)
 *
 * ```ts import.meta.vitest
 * import { Result, Schema } from "effect"
 *
 * const result = Schema.decodeUnknownResult(Schema.Number)("not a number")
 * const message = Result.isFailure(result) ? result.failure.message : ""
 * message // => "Expected number"
 * ```
 *
 * @see {@link isSchemaError} for narrowing unknown values
 * @stability stable
 * @category errors
 * @since 4.0.0
 */
var SchemaError = class extends /*#__PURE__*/ TaggedError$1("SchemaError") {
  [SchemaErrorTypeId] = SchemaErrorTypeId;
  constructor(issue) {
    const stackTraceLimit = getStackTraceLimit();
    setStackTraceLimit(0);
    try {
      super({ issue });
    } finally {
      setStackTraceLimit(stackTraceLimit);
    }
  }
  get message() {
    return defaultFormatter(this.issue);
  }
  toJSON() {
    return {
      _tag: this._tag,
      message: this.message,
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  toString() {
    return `SchemaError(${this.message})`;
  }
};
/**
 * Returns `true` if `u` is a {@link SchemaError}.
 *
 * **When to use**
 *
 * Use when you need to narrow an unknown value to `SchemaError`.
 *
 * **Example** (Narrowing Schema errors)
 *
 * ```ts import.meta.vitest
 * import { Result, Schema } from "effect"
 *
 * const result = Result.try(() => Schema.decodeUnknownSync(Schema.Number)("oops"))
 * const error: unknown = Result.isFailure(result) ? result.failure : undefined
 * Schema.isSchemaError(error) // => true
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isSchemaError(u) {
  return isSchemaError$1(u);
}
function fromIssueEffect(self) {
  if (effectIsExit(self)) return fromIssueExit(self);
  return catchCause(self, (cause) =>
    failCauseSync(() => map$7(cause, (issue) => new SchemaError(issue))),
  );
}
function fromIssueExit(exit) {
  return isSuccess(exit) ? exit : failCause(map$7(exit.cause, (issue) => new SchemaError(issue)));
}
function getSchemaErrorOrThrow(cause, message) {
  let schemaError;
  for (const reason of cause.reasons) {
    if (!isFailReason(reason) || !isSchemaError(reason.error))
      throw new globalThis.Error(message, { cause });
    schemaError ??= reason.error;
  }
  if (schemaError === void 0) throw new globalThis.Error(message, { cause });
  return schemaError;
}
function runSchemaErrorSync(self) {
  const exit = runSyncExit(self);
  if (isSuccess(exit)) return exit.value;
  throw getSchemaErrorOrThrow(exit.cause, "Sync adapter can only throw schema errors");
}
/**
 * Creates a type guard function that checks if a value conforms to a given
 * schema.
 *
 * **Details**
 *
 * This function returns a predicate that performs a type-safe check, narrowing
 * the type of the input value if the check passes. The predicate returns `false`
 * for schema mismatches.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are converted to `false`. Causes
 * that contain defects, interruptions, or other non-schema reasons throw
 * instead.
 *
 * **Example** (Defining a basic type guard)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const isString = Schema.is(Schema.String)
 *
 * isString("hello") // => true
 * isString(42) // => false
 *
 * // Type narrowing in action
 * const value: unknown = "hello"
 * if (isString(value)) {
 *   // value is now typed as string
 *   value.toUpperCase() // => "HELLO"
 * }
 * ```
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const is = is$1;
/**
 * Decodes an `unknown` input against a schema, returning an `Effect` that
 * succeeds with the decoded value or fails with a {@link SchemaError}.
 *
 * **When to use**
 *
 * Use when you need to decode unknown input in an `Effect` whose failure
 * channel is `SchemaError`.
 *
 * **Details**
 *
 * Prefer {@link decodeEffect} when the input is already typed as the schema's
 * `Encoded` type.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 *
 * @see {@link SchemaParser.decodeUnknownEffect} for the adapter that fails with `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownEffect(schema, options) {
  const parser = decodeUnknownEffect$1(schema, options);
  return (input, options) => {
    return fromIssueEffect(parser(input, options));
  };
}
/**
 * Decodes a typed input (the schema's `Encoded` type) against a schema,
 * returning an `Effect` that succeeds with the decoded value or fails with a
 * {@link SchemaError}.
 *
 * **When to use**
 *
 * Use when you need to decode input already typed as the schema's `Encoded`
 * type in an `Effect` whose failure channel is `SchemaError`.
 *
 * **Details**
 *
 * For `unknown` input use {@link decodeUnknownEffect}.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 *
 * @see {@link SchemaParser.decodeEffect} for the adapter that fails with `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decodeEffect = decodeUnknownEffect;
/**
 * Decodes an `unknown` input against a schema synchronously, returning an
 * `Exit` that is either a `Success` with the decoded value or a `Failure`.
 *
 * **When to use**
 *
 * Use when you need to decode unknown input into an `Exit` and capture schema
 * mismatches as `SchemaError`.
 *
 * **Details**
 *
 * Only usable with schemas that have no `DecodingServices` requirement. Prefer
 * {@link decodeExit} when the input is already typed as the schema's `Encoded`
 * type.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 * Schema mismatches are represented by a `Failure` cause containing
 * `SchemaError`.
 *
 * **Gotchas**
 *
 * Schema issue fail reasons are wrapped as `SchemaError`. Defects,
 * interruptions, and other non-schema reasons remain in the returned `Cause`,
 * including when they are mixed with schema issues.
 *
 * @see {@link SchemaParser.decodeUnknownExit} for the adapter whose failure contains `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownExit(schema, options) {
  const parser = decodeUnknownExit$1(schema, options);
  return (input, options) => {
    return fromIssueExit(parser(input, options));
  };
}
/**
 * Decodes a typed input (the schema's `Encoded` type) against a schema
 * synchronously, returning an `Exit` that is either a `Success` with the decoded
 * value or a `Failure`.
 *
 * **When to use**
 *
 * Use when you need to decode already typed `Encoded` input into an `Exit` and
 * capture schema mismatches as `SchemaError`.
 *
 * **Details**
 *
 * Only usable with schemas that have no `DecodingServices` requirement. For
 * `unknown` input use {@link decodeUnknownExit}.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 * Schema mismatches are represented by a `Failure` cause containing
 * `SchemaError`.
 *
 * **Gotchas**
 *
 * Schema issue fail reasons are wrapped as `SchemaError`. Defects,
 * interruptions, and other non-schema reasons remain in the returned `Cause`,
 * including when they are mixed with schema issues.
 *
 * @see {@link SchemaParser.decodeExit} for the adapter whose failure contains `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decodeExit = decodeUnknownExit;
/**
 * Decodes an `unknown` input against a schema, returning an `Option` that is
 * `Some` with the decoded value on success or `None` for schema mismatches.
 *
 * **When to use**
 *
 * Use when you do not know the input type statically and only need to know
 * whether decoding succeeded.
 *
 * **Details**
 *
 * Prefer this over {@link decodeUnknownExit} or {@link decodeUnknownEffect}
 * when you don't need error details. For input already typed as the schema's
 * `Encoded` type use {@link decodeOption}.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are converted to `None`. Causes
 * that contain defects, interruptions, or other non-schema reasons throw
 * instead.
 *
 * @stability stable
 * @category decoding
 * @since 3.10.0
 */
const decodeUnknownOption = decodeUnknownOption$1;
/**
 * Decodes a typed input (the schema's `Encoded` type) against a schema,
 * returning an `Option` that is `Some` with the decoded value on success or
 * `None` for schema mismatches.
 *
 * **When to use**
 *
 * Use when you already have input typed as the schema's `Encoded` type and
 * only need to know whether decoding succeeded.
 *
 * **Details**
 *
 * For `unknown` input use {@link decodeUnknownOption}.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are converted to `None`. Causes
 * that contain defects, interruptions, or other non-schema reasons throw
 * instead.
 *
 * @stability stable
 * @category decoding
 * @since 3.10.0
 */
const decodeOption = decodeOption$1;
/**
 * Decodes an `unknown` input against a schema, returning a `Result` that
 * succeeds with the decoded value or fails with a {@link SchemaError} for schema
 * mismatches.
 *
 * **When to use**
 *
 * Use when you do not know the input type statically and want schema mismatches
 * returned as `Result.fail` with `SchemaError`.
 *
 * **Details**
 *
 * For input already typed as the schema's `Encoded` type use
 * {@link decodeResult}.
 * Options may be provided either when creating the decoder or when applying it;
 * application options override creation options.
 * Schema mismatches are returned as `Result.fail` with `SchemaError`.
 *
 * **Gotchas**
 *
 * Only causes made entirely of schema issues are returned as `Result.fail`.
 * Causes that contain defects, interruptions, or other non-schema reasons throw
 * instead.
 *
 * @see {@link SchemaParser.decodeUnknownResult} for the adapter that fails with `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownResult(schema, options) {
  const parser = decodeUnknownResult$1(schema, options);
  return (input, options) => {
    return mapError(parser(input, options), (issue) => new SchemaError(issue));
  };
}
/**
 * Decodes an `unknown` input against a schema synchronously, returning the
 * decoded value or throwing a {@link SchemaError} for schema mismatches.
 *
 * **When to use**
 *
 * Use when you need to validate unknown data at a synchronous boundary and want
 * schema mismatches to throw `SchemaError`.
 *
 * **Details**
 *
 * For input already typed as the schema's `Encoded` type use `decodeSync`.
 * Only service-free schemas can be decoded synchronously. For alternatives that
 * do not throw on schema mismatches, see `decodeUnknownOption`,
 * `decodeUnknownExit`, or `decodeUnknownEffect`. Options may be provided either
 * when creating the decoder or when applying it; application options override
 * creation options.
 *
 * **Gotchas**
 *
 * Non-schema failures may throw a runtime failure instead of `SchemaError`.
 *
 * **Example** (Decoding with a transformation schema)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const NumberFromString = Schema.NumberFromString
 *
 * Schema.decodeUnknownSync(NumberFromString)("42") // => 42
 * ```
 *
 * @see {@link SchemaParser.decodeUnknownSync} for the adapter that throws an `Error` whose cause is `SchemaIssue.Issue`
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function decodeUnknownSync(schema, options) {
  const parser = decodeUnknownEffect(schema, options);
  return (input, options) => {
    return runSchemaErrorSync(parser(input, options));
  };
}
/**
 * Decodes a typed input (the schema's `Encoded` type) against a schema
 * synchronously, returning the decoded value or throwing a {@link SchemaError}
 * for schema mismatches.
 *
 * **When to use**
 *
 * Use when you already have input typed as the schema's `Encoded` type and
 * want schema mismatches to throw `SchemaError` synchronously.
 *
 * **Details**
 *
 * For `unknown` input use `decodeUnknownSync`.
 * Only service-free schemas can be decoded synchronously. Options may be
 * provided either when creating the decoder or when applying it; application
 * options override creation options.
 *
 * **Gotchas**
 *
 * Non-schema failures may throw a runtime failure instead of `SchemaError`.
 *
 * @see {@link SchemaParser.decodeSync} for the adapter that throws an `Error` whose cause is `SchemaIssue.Issue`
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decodeSync = decodeUnknownSync;
/**
 * Encodes an `unknown` input against a schema, returning an `Effect` that
 * succeeds with the encoded value or fails with a {@link SchemaError}.
 *
 * **When to use**
 *
 * Use when you need to encode unknown input in an `Effect` whose failure
 * channel is `SchemaError`.
 *
 * **Details**
 *
 * Prefer {@link encodeEffect} when the value is already typed as the schema's
 * `Type`.
 * Options may be provided either when creating the encoder or when applying it;
 * application options override creation options.
 *
 * **Example** (Encoding a value to a string)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const NumberFromString = Schema.NumberFromString
 *
 * await Effect.runPromise(Schema.encodeUnknownEffect(NumberFromString)(42)) // => "42"
 * ```
 *
 * @see {@link SchemaParser.encodeUnknownEffect} for the adapter that fails with `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUnknownEffect(schema, options) {
  const parser = encodeUnknownEffect$1(schema, options);
  return (input, options) => {
    return fromIssueEffect(parser(input, options));
  };
}
/**
 * Encodes a typed input (the schema's `Type`) against a schema, returning an
 * `Effect` that succeeds with the encoded value or fails with a
 * {@link SchemaError}.
 *
 * **When to use**
 *
 * Use when you need to encode input already typed as the schema's `Type` in
 * an `Effect` whose failure channel is `SchemaError`.
 *
 * **Details**
 *
 * For `unknown` input use {@link encodeUnknownEffect}.
 * Options may be provided either when creating the encoder or when applying it;
 * application options override creation options.
 *
 * @see {@link SchemaParser.encodeEffect} for the adapter that fails with `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const encodeEffect = encodeUnknownEffect;
/**
 * Encodes an `unknown` input against a schema synchronously, returning an
 * `Exit` that is either a `Success` with the encoded value or a `Failure`.
 *
 * **When to use**
 *
 * Use when you need to encode unknown input into an `Exit` and capture schema
 * mismatches as `SchemaError`.
 *
 * **Details**
 *
 * Only usable with schemas that have no `EncodingServices` requirement. Prefer
 * {@link encodeExit} when the value is already typed as the schema's `Type`.
 * Options may be provided either when creating the encoder or when applying it;
 * application options override creation options.
 * Schema mismatches are represented by a `Failure` cause containing
 * `SchemaError`.
 *
 * **Gotchas**
 *
 * Schema issue fail reasons are wrapped as `SchemaError`. Defects,
 * interruptions, and other non-schema reasons remain in the returned `Cause`,
 * including when they are mixed with schema issues.
 *
 * @see {@link SchemaParser.encodeUnknownExit} for the adapter whose failure contains `SchemaIssue.Issue` directly
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUnknownExit(schema, options) {
  const parser = encodeUnknownExit$1(schema, options);
  return (input, options) => {
    return fromIssueExit(parser(input, options));
  };
}
/**
 * Encodes an `unknown` input against a schema synchronously, throwing a
 * {@link SchemaError} for schema mismatches.
 *
 * **When to use**
 *
 * Use when you need to serialize unknown data at a synchronous boundary and
 * want schema mismatches to throw `SchemaError`.
 *
 * **Details**
 *
 * For alternatives that do not throw on schema mismatches, see
 * {@link encodeUnknownOption}, {@link encodeUnknownExit}, or
 * {@link encodeUnknownEffect}. For values already typed as the schema's `Type`
 * use {@link encodeSync}. Options may be provided either when creating the
 * encoder or when applying it; application options override creation options.
 *
 * **Gotchas**
 *
 * Non-schema failures may throw a runtime failure instead of `SchemaError`.
 *
 * @see {@link SchemaParser.encodeUnknownSync} for the adapter that throws an `Error` whose cause is `SchemaIssue.Issue`
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function encodeUnknownSync(schema, options) {
  const parser = encodeUnknownEffect(schema, options);
  return (input, options) => {
    return runSchemaErrorSync(parser(input, options));
  };
}
/**
 * Encodes a typed input (the schema's `Type`) against a schema synchronously,
 * throwing a {@link SchemaError} for schema mismatches.
 *
 * **When to use**
 *
 * Use when you already have a value typed as the schema's `Type` and want
 * schema mismatches to throw `SchemaError` synchronously.
 *
 * **Details**
 *
 * For `unknown` input use {@link encodeUnknownSync}.
 * Options may be provided either when creating the encoder or when applying it;
 * application options override creation options.
 *
 * **Gotchas**
 *
 * Non-schema failures may throw a runtime failure instead of `SchemaError`.
 *
 * @see {@link SchemaParser.encodeSync} for the adapter that throws an `Error` whose cause is `SchemaIssue.Issue`
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const encodeSync = encodeUnknownSync;
/**
 * Creates a schema from an AST (Abstract Syntax Tree) node.
 *
 * **Details**
 *
 * This is the fundamental constructor for all schemas in the Effect Schema
 * library. It takes an AST node and wraps it in a fully-typed schema that
 * preserves all type information and provides the complete schema API.
 *
 * The `make` function is used internally to create all primitive schemas like
 * `String`, `Number`, `Boolean`, etc., as well as more complex schemas. It's
 * the bridge between the untyped AST representation and the strongly-typed
 * schema.
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const make = make$1;
/**
 * Checks whether a value is a `Schema`.
 *
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
function isSchema(u) {
  return hasProperty(u, TypeId) && u[TypeId] === TypeId;
}
/**
 * Creates an exact optional key schema for struct fields. Unlike `optional`,
 * this creates exact optional properties (not `| undefined`) that can be
 * completely omitted from the object.
 *
 * **Example** (Creating a struct with optional key)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.String,
 *   age: Schema.optionalKey(Schema.Number)
 * })
 *
 * // Type: { readonly name: string; readonly age?: number }
 * type Person = typeof schema["Type"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const optionalKey = /*#__PURE__*/ lambda((schema) => make(optionalKey$1(schema.ast), { schema }));
/**
 * Marks a struct field as optional, allowing the key to be absent or
 * `undefined`.
 *
 * **Details**
 *
 * The resulting property may be absent or explicitly set to `undefined`.
 * Equivalent to `optionalKey(UndefinedOr(S))`.
 *
 * Use {@link optionalKey} instead if you want exact optional semantics (absent
 * only, not `undefined`).
 *
 * **Example** (Defining an optional field accepting undefined)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.String,
 *   age: Schema.optional(Schema.Number)
 * })
 *
 * // { readonly name: string; readonly age?: number | undefined }
 * type Person = typeof schema.Type
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 3.10.0
 */
const optional = /*#__PURE__*/ lambda((self) => {
  const schema = UndefinedOr(self);
  return make(optional$1(self.ast), { schema });
});
/**
 * Makes a struct field mutable (removes the `readonly` modifier on the property).
 * Use {@link readonlyKey} to reverse.
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const mutableKey = /*#__PURE__*/ lambda((schema) => make(mutableKey$1(schema.ast), { schema }));
/**
 * Extracts the type-side schema: sets `Encoded` to equal the decoded `Type`,
 * discarding the encoding transformation path.
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const toType = /*#__PURE__*/ lambda((schema) => make(toType$1(schema.ast), { schema }));
/**
 * Extracts the encoded-side schema: sets `Type` to equal the `Encoded`,
 * discarding the decoding transformation path.
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const toEncoded = /*#__PURE__*/ lambda((schema) => make(toEncoded$1(schema.ast), { schema }));
/**
 * Creates a schema for a single literal value (string, number, bigint, boolean, or null).
 *
 * **Example** (Defining a string literal)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Literal("hello")
 * // Type: Schema.Literal<"hello">
 * Schema.decodeSync(schema)("hello") // => "hello"
 * ```
 *
 * @see {@link Literals} for a schema that represents a union of literals.
 * @see {@link tag} for a schema that represents a literal value that can be
 * used as a discriminator field in tagged unions and has a constructor default.
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function Literal(literal) {
  const out = make(new Literal$1(literal), {
    literal,
    transform(to) {
      return out.pipe(
        decodeTo(Literal(to), {
          decode: transform$1(() => to),
          encode: transform$1(() => literal),
        }),
      );
    },
  });
  return out;
}
function templateLiteralParts(parts) {
  return parts.map((part) => (isSchema(part) ? part.ast : new Literal$1(part)));
}
/**
 * Creates a schema that validates strings by matching ordered template literal
 * parts.
 *
 * **When to use**
 *
 * Use when the decoded value should remain the matched string and you do not
 * need the individual template parts parsed into a tuple.
 *
 * **Details**
 *
 * Each part can be a literal `string`, `number`, or `bigint`, or a schema whose
 * encoded type is `string`, `number`, or `bigint`. Checks on string, number,
 * and bigint schema parts are applied while matching each segment.
 *
 * **Gotchas**
 *
 * Parts must not contain encodings, including inside unions or nested templates.
 * Construction throws for transformed parts even when their decoded and encoded
 * types are the same. Use {@link TemplateLiteralParser} to decode transformed parts.
 * Brands and supported checks without encodings remain valid.
 *
 * **Example** (Defining a URL path pattern)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.TemplateLiteral(["/user/", Schema.Number])
 * Schema.is(schema)("/user/123") // => true
 * ```
 *
 * @see {@link TemplateLiteralParser} for a schema that also parses matched parts into a tuple.
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function TemplateLiteral(parts) {
  return make(new TemplateLiteral$1(templateLiteralParts(parts)), { parts });
}
/**
 * Schema for the `never` type. Always fails validation — no value satisfies it.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Never = /*#__PURE__*/ make(never);
/**
 * Schema for the `any` type. Accepts any value without validation.
 *
 * @see {@link Unknown} for a safer alternative that uses `unknown`.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Any = /*#__PURE__*/ make(any);
/**
 * Schema for the `unknown` type. Accepts any value without validation.
 *
 * **When to use**
 *
 * Use as a top schema when you need to accept any input while preserving
 * TypeScript's `unknown` safety at use sites.
 *
 * @see {@link Any} for the `any` variant.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Unknown = /*#__PURE__*/ make(unknown);
/**
 * Schema for the `null` literal. Validates that the input is strictly `null`.
 *
 * @see {@link NullOr} for a union with another schema.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Null = /*#__PURE__*/ make(null_);
/**
 * Schema for the `undefined` literal. Validates that the input is strictly `undefined`.
 *
 * @see {@link UndefinedOr} for a union with another schema.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Undefined = /*#__PURE__*/ make(undefined_);
/**
 * Schema for `string` values. Validates that the input is `typeof` `"string"`.
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const String$1 = /*#__PURE__*/ make(string);
/**
 * Schema for `number` values, including `NaN`, `Infinity`, and `-Infinity`.
 *
 * **Details**
 *
 * Default JSON serializer:
 *
 * - Finite numbers are serialized as numbers.
 * - Non-finite values are serialized as strings (`"NaN"`, `"Infinity"`, `"-Infinity"`).
 *
 * @see {@link Finite} for a schema that excludes non-finite values.
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const Number$1 = /*#__PURE__*/ make(number);
/**
 * Schema for `boolean` values. Validates that the input is `typeof` `"boolean"`.
 *
 * **When to use**
 *
 * Use to validate values that are already JavaScript booleans.
 *
 * @see {@link BooleanFromBit} for a schema that decodes bit literals `0` or `1` into a boolean
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const Boolean = /*#__PURE__*/ make(boolean);
/**
 * Schema for `bigint` values. Validates that the input is `typeof` `"bigint"`.
 *
 * **When to use**
 *
 * Use when the input is already a bigint and the schema should validate and
 * preserve bigint values without parsing from another representation.
 *
 * @see {@link BigIntFromString} for parsing string input into a bigint
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const BigInt$1 = /*#__PURE__*/ make(bigInt);
/**
 * Schema for a TypeScript `void` return value.
 *
 * **When to use**
 *
 * Use when you need to model the return value of a function, RPC, or endpoint
 * whose result is intentionally ignored.
 *
 * **Details**
 *
 * Runtime parsing accepts any present value and discards it, producing
 * `undefined`. The public decoded and encoded TypeScript representation remains
 * `void`, so typed construction, decoding, and encoding APIs are still modeled
 * as `void`.
 *
 * @see {@link Undefined} for a schema that matches only the exact `undefined` value.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Void = /*#__PURE__*/ make(void_);
function makeStruct(ast, fields) {
  return make(ast, {
    fields,
    mapFields(f, options) {
      const fields = f(this.fields);
      return makeStruct(
        struct(fields, options?.unsafePreserveChecks ? this.ast.checks : void 0),
        fields,
      );
    },
  });
}
/**
 * Defines a struct schema from a map of field schemas.
 *
 * **Details**
 *
 * Each field value is a schema. Use {@link optionalKey} or {@link optional} to
 * mark fields as optional, and {@link mutableKey} to mark them as mutable.
 *
 * The resulting schema's `Type` is a readonly object type with the fields'
 * decoded types. The `Encoded` form mirrors the field schemas' encoded types.
 * Declared fields may be inherited and are copied to own properties in the
 * output. The `__proto__` field is accepted only when it is an own property.
 * Parsing does not guarantee that output keys retain their input order.
 *
 * **Example** (Defining a basic struct)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const Person = Schema.Struct({
 *   name: Schema.String,
 *   age: Schema.Number,
 *   email: Schema.optionalKey(Schema.String)
 * })
 *
 * // { readonly name: string; readonly age: number; readonly email?: string }
 * type Person = typeof Person.Type
 *
 * Schema.decodeUnknownSync(Person)({ name: "Alice", age: 30 }) // => { name: "Alice", age: 30 }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function Struct(fields) {
  return makeStruct(struct(fields, void 0), fields);
}
/**
 * Adds fields to a struct schema through a struct-mapping lambda.
 *
 * **When to use**
 *
 * Use to add the same fields to an existing struct or every struct member of a
 * union.
 *
 * **Details**
 *
 * This is a shortcut for `MyStruct.mapFields(Struct.assign(fields))`.
 *
 * **Example** (Adding fields to a union of structs)
 *
 * ```ts import.meta.vitest
 * import { Schema, Tuple } from "effect"
 *
 * // Add a new field to all members of a union of structs
 * const schema = Schema.Union([
 *   Schema.Struct({ a: Schema.String }),
 *   Schema.Struct({ b: Schema.Number })
 * ]).mapMembers(Tuple.map(Schema.fieldsAssign({ c: Schema.Number })))
 * Schema.decodeSync(schema)({ a: "a", c: 1 }) // => { a: "a", c: 1 }
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
function fieldsAssign(fields) {
  return lambda((struct) => struct.mapFields(assign(fields)));
}
/**
 * Defines a record schema whose dynamic properties are selected by a key schema
 * and decoded with a value schema.
 *
 * **Details**
 *
 * For dynamic keys, the key schema selects matching own properties and the
 * value schema decodes or encodes only those selected properties. Checks on
 * string, number, symbol, and template literal key schemas narrow which
 * properties are selected.
 *
 * For transformed key schemas, property selection is based on encoded property
 * names before the selected key is decoded.
 *
 * **Gotchas**
 *
 * When decoded or encoded key transformations produce the same property key,
 * sequential parsing applies selected own properties in selection order, so
 * the later selected property overwrites the earlier value. Dynamic key
 * selection always examines own properties. Finite literal keys are declared
 * fields and may therefore be inherited. Output key order is not guaranteed.
 *
 * **Example** (Defining a string-keyed record of numbers)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Record(Schema.String, Schema.Number)
 *
 * // { readonly [x: string]: number }
 * type R = typeof schema.Type
 *
 * Schema.decodeUnknownSync(schema)({ a: 1, b: 2 }) // => { a: 1, b: 2 }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function Record(key, value) {
  return make(record(key.ast, value.ast), {
    key,
    value,
  });
}
/**
 * Extends a struct schema with one or more record (index-signature) schemas,
 * producing a schema whose decoded type intersects the struct and all records.
 *
 * **Gotchas**
 *
 * The base schema must have an object-shaped encoded type. Whole-object
 * transformations are not supported, even with an empty rest array. Apply
 * transformations such as `Schema.fromJsonString` to the completed
 * `StructWithRest` schema instead. Object-shaped encoded types alone do not
 * guarantee compatibility: unsupported encodings are still rejected at runtime.
 * Transformations on individual fields remain supported.
 *
 * TypeScript index signatures also apply to fixed keys. `StructWithRest` does
 * not reject incompatible fixed fields at the call site; use
 * `StructWithRest.ValidateRecords` when you want an explicit type-level
 * compatibility check.
 *
 * **Example** (Defining structs with string-indexed extra keys)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.StructWithRest(
 *   Schema.Struct({ id: Schema.Number }),
 *   [Schema.Record(Schema.String, Schema.Number)]
 * )
 *
 * // { readonly id: number, readonly [x: string]: number }
 * type T = typeof schema.Type
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function StructWithRest(schema, records) {
  return make(structWithRest(schema.ast, records.map(getAST)), {
    schema,
    records,
  });
}
function makeTuple(ast, elements) {
  return make(ast, {
    elements,
    mapElements(f, options) {
      const elements = f(this.elements);
      return makeTuple(
        tuple(elements, options?.unsafePreserveChecks ? this.ast.checks : void 0),
        elements,
      );
    },
  });
}
/**
 * Defines a fixed-length tuple schema from an array of element schemas.
 *
 * **Example** (Defining a pair of string and number)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Tuple([Schema.String, Schema.Number])
 *
 * Schema.decodeUnknownSync(schema)(["hello", 42]) // => ["hello", 42]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function Tuple(elements) {
  return makeTuple(tuple(elements), elements);
}
/**
 * @category constructors
 * @since 4.0.0
 */
const ArraySchema = /*#__PURE__*/ lambda((schema) =>
  make(new Arrays(false, [], [schema.ast]), { value: schema }),
);
/**
 * Defines a non-empty `ReadonlyArray` schema — at least one element required.
 * Type is `readonly [T, ...T[]]`.
 *
 * **Example** (Defining a non-empty array of numbers)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.NonEmptyArray(Schema.Number)
 *
 * Schema.decodeUnknownSync(schema)([1, 2, 3]) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const NonEmptyArray = /*#__PURE__*/ lambda((schema) =>
  make(new Arrays(false, [schema.ast], [schema.ast]), { value: schema }),
);
/**
 * Makes an array or tuple schema mutable, removing the `readonly` modifier.
 *
 * **Gotchas**
 *
 * This combinator does not support an encoding attached to the array or tuple
 * node and throws if one is present. Encodings on element schemas are
 * supported.
 *
 * **Example** (Defining mutable arrays)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.mutable(Schema.Array(Schema.Number))
 *
 * // number[]   (mutable)
 * type T = typeof schema.Type
 * const value: T = [1, 2]
 * value.push(3)
 * value // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 3.10.0
 */
const mutable = /*#__PURE__*/ lambda((schema) => make(mutable$1(schema.ast), { schema }));
function makeUnion(ast, members) {
  return make(ast, {
    members,
    mapMembers(f, options) {
      const members = f(this.members);
      return makeUnion(
        union(members, this.ast.options, options?.unsafePreserveChecks ? this.ast.checks : void 0),
        members,
      );
    },
  });
}
/**
 * Creates a union schema from an array of member schemas. Members are tested in
 * order; the first match is returned.
 *
 * **Details**
 *
 * Optionally, specify `mode`:
 * - `"anyOf"` (default) — matches if any member matches.
 * - `"oneOf"` — matches if exactly one member matches.
 *
 * **Example** (Defining a string or number union)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Union([Schema.String, Schema.Number])
 *
 * Schema.decodeUnknownSync(schema)("hello") // => "hello"
 * Schema.decodeUnknownSync(schema)(42) // => 42
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function Union(members, options) {
  return makeUnion(union(members, options, void 0), members);
}
/**
 * Creates a union schema from an array of literal values.
 *
 * **Example** (Defining status codes)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Literals(["active", "inactive", "pending"])
 * Schema.decodeSync(schema)("active") // => "active"
 * ```
 *
 * @see {@link Literal} for a schema that represents a single literal.
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function Literals(literals) {
  const members = literals.map(Literal);
  return make(union(members, void 0, void 0), {
    literals,
    members,
    mapMembers(f) {
      return Union(f(this.members));
    },
    pick(literals) {
      return Literals(literals);
    },
    transform(to) {
      return Union(members.map((member, index) => member.transform(to[index])));
    },
  });
}
/**
 * Creates a union schema of `S | null`.
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const NullOr = /*#__PURE__*/ lambda((self) => Union([self, Null]));
/**
 * Creates a union schema of `S | undefined`.
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const UndefinedOr = /*#__PURE__*/ lambda((self) => Union([self, Undefined]));
/**
 * Creates a suspended schema that defers evaluation until needed. This is
 * essential for creating recursive schemas where a schema references itself,
 * preventing infinite recursion during schema definition.
 *
 * **Example** (Defining recursive tree schemas)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * interface Tree {
 *   readonly value: number
 *   readonly children: ReadonlyArray<Tree>
 * }
 *
 * const Tree = Schema.Struct({
 *   value: Schema.Number,
 *   children: Schema.Array(Schema.suspend((): Schema.Codec<Tree> => Tree))
 * })
 * Schema.decodeSync(Tree)({ value: 1, children: [] }) // => { value: 1, children: [] }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function suspend(f) {
  return make(new Suspend(() => f().ast));
}
/**
 * Attaches one or more filter checks to a schema without changing the
 * TypeScript type.
 *
 * **Example** (Adding checks to a schema)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const AgeSchema = Schema.Finite.pipe(
 *   Schema.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(120))
 * )
 * Schema.is(AgeSchema)(42) // => true
 * Schema.is(AgeSchema)(121) // => false
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
function check(...checks) {
  return (self) => self.check(...checks);
}
/**
 * Narrows the TypeScript type of a schema's output via a type guard predicate,
 * attaching the guard as a runtime filter check.
 *
 * **Details**
 *
 * The `annotations` parameter annotates the filter created by the refinement.
 * With the default formatter, failed refinements use `message` first,
 * `expected` second, and `<filter>` when neither is provided. `identifier`
 * names type-level failures before the refinement runs; it does not name the
 * failed refinement itself.
 *
 * @stability stable
 * @category filtering
 * @since 3.10.0
 */
function refine(refinement, annotations) {
  return (schema) =>
    make(appendChecks(schema.ast, [makeFilterByGuard(refinement, annotations)]), { schema });
}
/**
 * Intersects a schema's output type with `Brand.Brand<B>` to prevent accidental
 * mixing of structurally identical types.
 *
 * **When to use**
 *
 * Use to make values decoded by an existing schema nominally distinct when the
 * schema already carries the runtime validation you need.
 *
 * **Gotchas**
 *
 * - `identifier` must be a single concrete string literal. Widened strings,
 *   unions, and open template literal types are rejected.
 * - `brand` only narrows the TypeScript output type. It does not change the
 *   schema's runtime AST or add runtime checks.
 * - Schema representations and generated schema code omit the brand. Reapply
 *   `brand` after rebuilding or generating a schema when the nominal type is
 *   still required.
 *
 * @see {@link fromBrand} for applying a Brand constructor's checks along with its branded type
 *
 * @stability stable
 * @category branding
 * @since 3.10.0
 */
function brand(identifier) {
  return (schema) =>
    make(schema.ast, {
      schema,
      identifier,
    });
}
/**
 * Intercepts the decoding pipeline of a schema.
 *
 * **Details**
 *
 * The provided function receives the current decoding `Effect` and `ParseOptions`,
 * and returns a new `Effect` — potentially adding service requirements (`RD`),
 * recovering from errors, or augmenting the result.
 *
 * **Example** (Logging decode failures)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const events: Array<string> = []
 * const Logged = Schema.String.pipe(
 *   Schema.middlewareDecoding((effect) =>
 *     Effect.tapError(effect, () => Effect.sync(() => events.push("decode failed")))
 *   )
 * )
 * Effect.runSync(Effect.result(Schema.decodeUnknownEffect(Logged)(42)))
 * events // => ["decode failed"]
 * ```
 *
 * @see {@link catchDecoding} for a simpler error-recovery variant
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function middlewareDecoding(decode) {
  return (schema) =>
    make(middlewareDecoding$1(schema.ast, new Middleware(decode, identity)), { schema });
}
/**
 * Intercepts the encoding pipeline of a schema.
 *
 * **Details**
 *
 * The provided function receives the current encoding `Effect` and `ParseOptions`,
 * and returns a new `Effect` — potentially adding service requirements (`RE`),
 * recovering from errors, or augmenting the result.
 *
 * **Example** (Logging encode failures)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const events: Array<string> = []
 * const Logged = Schema.String.pipe(
 *   Schema.middlewareEncoding((effect) =>
 *     Effect.tapError(effect, () => Effect.sync(() => events.push("encode failed")))
 *   )
 * )
 * Effect.runSync(Effect.result(Schema.encodeUnknownEffect(Logged)(42)))
 * events // => ["encode failed"]
 * ```
 *
 * @see {@link catchEncoding} for a simpler error-recovery variant
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
function middlewareEncoding(encode) {
  return (schema) =>
    make(middlewareEncoding$1(schema.ast, new Middleware(identity, encode)), { schema });
}
/**
 * Recovers from a decoding error by providing a fallback value.
 *
 * **Details**
 *
 * The handler receives the `Issue` and returns an `Effect` that either
 * succeeds with a fallback value or re-fails with a (possibly different) issue.
 *
 * **Example** (Returning a default on decode failure)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Schema } from "effect"
 *
 * const schema = Schema.Number.pipe(
 *   Schema.catchDecoding((_issue) => Effect.succeed(Option.some(0)))
 * )
 * Effect.runSync(Schema.decodeUnknownEffect(schema)("invalid")) // => 0
 * ```
 *
 * @see {@link catchDecodingWithContext} to add service requirements to the handler
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
function catchDecoding(f) {
  return catchDecodingWithContext(f);
}
/**
 * Recovers from a decoding error with a handler that may require Effect services.
 *
 * **When to use**
 *
 * Use when you need decoding fallback logic to require services from the Effect
 * context.
 *
 * **Details**
 *
 * The handler receives the `Issue` and returns an `Effect` that either succeeds
 * with a fallback value or re-fails with a (possibly different) issue. The
 * handler's services are added to the schema's decoding services.
 *
 * @see {@link catchDecoding} for recovery handlers that do not require services
 * @see {@link middlewareDecoding} for intercepting or replacing the full decoding pipeline
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
function catchDecodingWithContext(f) {
  return (self) => middlewareDecoding(catchEager(f))(self);
}
/**
 * Recovers from an encoding error by providing a fallback value.
 *
 * **Details**
 *
 * The handler receives the `Issue` and returns an `Effect` that either
 * succeeds with a fallback value or re-fails with a (possibly different) issue.
 *
 * @see {@link catchEncodingWithContext} to add service requirements to the handler
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
function catchEncoding(f) {
  return catchEncodingWithContext(f);
}
/**
 * Recovers from an encoding error with a handler that may require Effect services.
 *
 * **When to use**
 *
 * Use when you need encoding fallback logic to require services from the Effect
 * context.
 *
 * **Details**
 *
 * The handler receives the `Issue` and returns an `Effect` that either succeeds
 * with a fallback encoded value or re-fails with a (possibly different) issue.
 * The handler's services are added to the schema's encoding services.
 *
 * @see {@link catchEncoding} for recovery handlers that do not require services
 * @see {@link middlewareEncoding} for intercepting or replacing the full encoding pipeline
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
function catchEncodingWithContext(f) {
  return (self) => middlewareEncoding(catchEager(f))(self);
}
function decodeTo(to, transformation) {
  return (from) => {
    return make(
      decodeTo$1(
        from.ast,
        to.ast,
        transformation ? makeTransformation(transformation) : passthrough(),
      ),
      {
        from,
        to,
      },
    );
  };
}
/**
 * Constructs a decode-only `SchemaAST.Link`.
 *
 * @internal
 */
function linkDecoding() {
  return (to, decode) =>
    link()(to, {
      decode,
      encode: forbiddenEncoding,
    });
}
/** @internal */
const TrueLiterals = /*#__PURE__*/ Literals(["true", "yes", "on", "1", "y"]);
/** @internal */
const FalseLiterals = /*#__PURE__*/ Literals(["false", "no", "off", "0", "n"]);
/** @internal */
const BooleanLiterals = /*#__PURE__*/ Literals([
  ...TrueLiterals.literals,
  ...FalseLiterals.literals,
]).pipe(
  /*#__PURE__*/ decodeTo(
    Boolean,
    /*#__PURE__*/ transform({
      decode: (value) =>
        value === "true" || value === "yes" || value === "on" || value === "1" || value === "y",
      encode: (value) => (value ? "true" : "false"),
    }),
  ),
);
/**
 * Applies a transformation to a schema, creating a new schema with the same type but transformed encoding/decoding.
 *
 * **When to use**
 *
 * Use when the decoded type stays the same and the transformation only
 * normalizes values during encoding and decoding.
 *
 * **Details**
 *
 * Call it with a transformation object and then pipe a schema into the returned
 * function. The resulting schema keeps the same `Type` and `Encoded` types as
 * the source schema, while applying the transformation during both decoding and
 * encoding.
 *
 * Internally this uses `toType(self)` as the target schema and combines service
 * requirements from the source schema and the transformation.
 *
 * **Gotchas**
 *
 * Use {@link decodeTo} instead when the transformation should change the
 * decoded type. For this helper, both transformation getters operate on
 * `S["Type"]` values.
 *
 * **Example** (Trimming string values during encoding/decoding)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaGetter } from "effect"
 *
 * const Trimmed = Schema.String.pipe(
 *   Schema.decode({
 *     decode: SchemaGetter.transform((s) => s.trim()),
 *     encode: SchemaGetter.transform((s) => s.trim())
 *   })
 * )
 *
 * Schema.decodeUnknownSync(Trimmed)("  hello  ") // => "hello"
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function decode(transformation) {
  return (self) => {
    return decodeTo(toType(self), transformation)(self);
  };
}
function encodeTo(to, transformation) {
  return (from) => {
    return transformation ? decodeTo(from, transformation)(to) : decodeTo(from)(to);
  };
}
/**
 * Applies a transformation to a schema's encoded type, creating a new schema where encoding/decoding
 * operate on `S["Encoded"]` rather than `S["Type"]`.
 *
 * **Details**
 *
 * The `decode` getter maps `S["Encoded"]` → `S["Encoded"]` (applied during decoding),
 * and the `encode` getter maps `S["Encoded"]` → `S["Encoded"]` (applied during encoding).
 *
 * **Example** (Upper-casing encoded strings)
 *
 * ```ts import.meta.vitest
 * import { Schema, SchemaGetter } from "effect"
 *
 * const UpperFromLower = Schema.String.pipe(
 *   Schema.encode({
 *     decode: SchemaGetter.transform((s: string) => s.toLowerCase()),
 *     encode: SchemaGetter.transform((s: string) => s.toUpperCase())
 *   })
 * )
 * Schema.encodeSync(UpperFromLower)("hello") // => "HELLO"
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function encode(transformation) {
  return (self) => {
    return decodeTo(self, transformation)(toEncoded(self));
  };
}
/**
 * Attaches a constructor default value to a schema field.
 *
 * **Details**
 *
 * Constructor defaults are applied only during `make*`, not during decoding or
 * encoding. Failures are represented directly as `SchemaIssue.Issue` values.
 *
 * **Example** (Defining an optional field with a static default)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const MySchema = Schema.Struct({
 *   name: Schema.String.pipe(
 *     Schema.optionalKey,
 *     Schema.withConstructorDefault(Effect.succeed("anonymous"))
 *   )
 * })
 *
 * MySchema.make({}).name // => "anonymous"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function withConstructorDefault(defaultValue) {
  return (schema) => make(withConstructorDefault$1(schema.ast, defaultValue), { schema });
}
function toIssueEffect(self) {
  if (effectIsExit(self) && self._tag === "Success") return self;
  return catchCause(self, (cause) => failCauseSync(() => map$7(cause, (error) => error.issue)));
}
/**
 * Makes a struct key optional on the `Encoded` side and provides a default
 * `Encoded` value when the key is missing during decoding.
 *
 * **Details**
 *
 * The key uses `optionalKey` on the encoded side, so it may be absent from the
 * input object but **not** `undefined`. The default value is specified in terms
 * of the `Encoded` type (before any decoding transformations).
 *
 * Options:
 *
 * - `encodingStrategy`:
 *   - `"passthrough"` (default): include the value in the encoded output.
 *   - `"omit"`: omit the key from the encoded output.
 *
 * **Example** (Providing a default for a missing struct key)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const MySchema = Schema.Struct({
 *   name: Schema.String.pipe(Schema.withDecodingDefaultKey(Effect.succeed("anonymous")))
 * })
 *
 * Schema.decodeUnknownSync(MySchema)({}).name // => "anonymous"
 * ```
 *
 * @see {@link withDecodingDefault} for the value-level variant (key absent **or** `undefined`)
 * @see {@link withDecodingDefaultTypeKey} for the variant where the default is a `Type` value
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
function withDecodingDefaultKey(defaultValue, options) {
  const encode = options?.encodingStrategy === "omit" ? omit$1() : passthrough$1();
  return (self) => {
    return optionalKey(toEncoded(self)).pipe(
      decodeTo(self, {
        decode: withDefault$1(toIssueEffect(defaultValue)),
        encode,
      }),
    );
  };
}
/**
 * Wraps the `Encoded` side with `optional` (key absent **or** `undefined`)
 * and provides a default `Encoded` value when the field is missing or
 * `undefined` during decoding.
 *
 * **When to use**
 *
 * Use when the default is expressed in the encoded representation, before the
 * field's decoding transformation runs.
 *
 * **Details**
 *
 * The default value is specified in terms of the `Encoded` type (before any
 * decoding transformations).
 *
 * Options:
 *
 * - `encodingStrategy`:
 *   - `"passthrough"` (default): include the value in the encoded output.
 *   - `"omit"`: omit the key from the encoded output.
 *
 * **Example** (Providing a default for an optional field value)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * const MySchema = Schema.Struct({
 *   name: Schema.String.pipe(Schema.optional, Schema.withDecodingDefault(Effect.succeed("anonymous")))
 * })
 *
 * Schema.decodeUnknownSync(MySchema)({ name: undefined }).name // => "anonymous"
 * ```
 *
 * @see {@link withDecodingDefaultKey} for the key-level variant (key absent only, not `undefined`)
 * @see {@link withDecodingDefaultType} for the variant where the default is a `Type` value
 * @stability stable
 * @category decoding
 * @since 3.10.0
 */
function withDecodingDefault(defaultValue, options) {
  const encode = options?.encodingStrategy === "omit" ? omit$1() : passthrough$1();
  return (self) => {
    return optional(toEncoded(self)).pipe(
      decodeTo(self, {
        decode: withDefault$1(toIssueEffect(defaultValue)),
        encode,
      }),
    );
  };
}
/**
 * Combines a {@link Literal} schema with {@link withConstructorDefault}, making it ideal
 * for discriminator fields in tagged unions. When constructing via `make`, the
 * `_tag` field can be omitted and will be filled automatically.
 *
 * **Example** (Defining a discriminated union tag)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const A = Schema.Struct({ _tag: Schema.tag("A"), value: Schema.Number })
 *
 * // _tag is optional in make, auto-filled to "A"
 * const a = A.make({ value: 42 })
 * a // => { _tag: "A", value: 42 }
 * ```
 *
 * @see {@link tagDefaultOmit} to also omit the tag during encoding
 * @see {@link TaggedStruct} for a shorthand that adds `_tag` automatically
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function tag(literal) {
  return Literal(literal).pipe(withConstructorDefault(succeed$3(literal)));
}
/**
 * Creates a struct schema with an automatically populated `_tag` field.
 *
 * **When to use**
 *
 * Use to define a tagged union case from a literal tag and a set of fields.
 *
 * **Details**
 *
 * When using the `make` method, the `_tag` field is optional and will be
 * added automatically. However, when decoding or encoding, the `_tag` field
 * must be present in the input.
 *
 * **Example** (Defining a tagged struct shorthand)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * // Defines a struct with a fixed `_tag` field
 * const tagged = Schema.TaggedStruct("A", {
 *   a: Schema.String
 * })
 *
 * // This is the same as writing:
 * const equivalent = Schema.Struct({
 *   _tag: Schema.tag("A"),
 *   a: Schema.String
 * })
 * void tagged
 * void equivalent
 * ```
 *
 * **Example** (Accessing the literal value of the tag)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const tagged = Schema.TaggedStruct("A", {
 *   a: Schema.String
 * })
 *
 * tagged.fields._tag.schema.literal // => "A"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function TaggedStruct(value, fields) {
  return Struct({
    _tag: tag(value),
    ...fields,
  });
}
/**
 * Augments an existing {@link Union} of tagged structs with utility methods and an ordered tuple of discriminant
 * values.
 *
 * **Gotchas**
 *
 * Rejects overlapping discriminant types in known member tuples at compile
 * time, including nested unions. Numeric and string values such as `1` and
 * `"1"` count as duplicates. Also throws at runtime if multiple members use the
 * same discriminant property key.
 *
 * **Example** (Adding tagged-union utilities to an existing union)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const A = Schema.TaggedStruct("A", { value: Schema.Number })
 * const B = Schema.TaggedStruct("B", { name: Schema.String })
 *
 * const MyUnion = Schema.Union([A, B]).pipe(Schema.toTaggedUnion("_tag"))
 *
 * // Pattern-match on the union
 * const result = MyUnion.match({ _tag: "A", value: 1 }, {
 *   A: (a) => `number: ${a.value}`,
 *   B: (b) => `name: ${b.name}`
 * })
 * result // => "number: 1"
 * ```
 *
 * @see {@link TaggedUnion} for a shorthand that builds the union from scratch
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
function toTaggedUnion(tag) {
  return (self) => {
    const cases = {};
    const discriminants = [];
    const discriminantKeys = /* @__PURE__ */ new Set();
    const guards = {};
    const isAnyOf = (keys) => (value) => keys.includes(value[tag]);
    walk(self);
    return Object.assign(self, {
      tag,
      cases,
      discriminants,
      isAnyOf,
      guards,
      match,
      matchOrElse,
    });
    function walk(schema) {
      const ast = schema.ast;
      if (
        isUnion(ast) &&
        "members" in schema &&
        globalThis.Array.isArray(schema.members) &&
        schema.members.every(isSchema)
      )
        return schema.members.forEach(walk);
      const sentinels = collectSentinels(ast);
      if (sentinels.length > 0) {
        const literal = sentinels.find((s) => s.key === tag)?.literal;
        if (isPropertyKey(literal)) {
          const key = typeof literal === "number" ? globalThis.String(literal) : literal;
          if (discriminantKeys.has(key))
            throw new globalThis.Error(`Duplicate discriminant: ${globalThis.String(literal)}`);
          discriminantKeys.add(key);
          discriminants.push(literal);
          assignProperty(cases, literal, schema);
          assignProperty(guards, literal, is$1(toType(schema)));
          return;
        }
      }
      throw new globalThis.Error("No literal or unique symbol found");
    }
    function match() {
      if (arguments.length === 1) {
        const cases = arguments[0];
        return function (value) {
          const key = value[tag];
          return (Object.hasOwn(cases, key) ? cases[key] : void 0)(value);
        };
      }
      const value = arguments[0];
      const cases = arguments[1];
      const key = value[tag];
      return (Object.hasOwn(cases, key) ? cases[key] : void 0)(value);
    }
    function matchOrElse() {
      if (arguments.length === 2) {
        const cases = arguments[0];
        const orElse = arguments[1];
        return function (value) {
          const key = value[tag];
          return (Object.hasOwn(cases, key) ? (cases[key] ?? orElse) : orElse)(value);
        };
      }
      const value = arguments[0];
      const cases = arguments[1];
      const orElse = arguments[2];
      const key = value[tag];
      return (Object.hasOwn(cases, key) ? (cases[key] ?? orElse) : orElse)(value);
    }
  };
}
/**
 * Wraps a struct schema so that its decoded `Type` becomes a nominally distinct type `Self`.
 * Useful for creating opaque types that are structurally identical to a base struct
 * but type-incompatible with it.
 *
 * **Example** (Defining opaque structs)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * class Person extends Schema.Opaque<Person>()(
 *   Schema.Struct({
 *     name: Schema.String
 *   })
 * ) {}
 *
 * // Decoded value is Person, not { name: string }
 * const person = Schema.decodeUnknownSync(Person)({ name: "Alice" })
 * person.name // => "Alice"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
function Opaque() {
  return (schema) => schema;
}
/**
 * Creates a schema that validates values using `instanceof`.
 * Decoding and encoding pass the value through unchanged.
 *
 * **Example** (Defining a schema for a built-in class)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const DateSchema = Schema.instanceOf(Date)
 *
 * const decoded = Schema.decodeUnknownSync(DateSchema)(new Date("2024-01-01"))
 * decoded.toISOString() // => "2024-01-01T00:00:00.000Z"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
function instanceOf(constructor, annotations) {
  return declare((u) => u instanceof constructor, annotations);
}
/**
 * Constructs an `SchemaAST.Link` that describes how a value of type `T` encodes to and decodes from a `To` schema.
 * Used when building low-level AST transformations that bridge two schema types.
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
function link() {
  return (encodeTo, transformation) => {
    return new Link(encodeTo.ast, makeTransformation(transformation));
  };
}
/**
 * Creates a custom validation filter from a predicate function.
 *
 * **Details**
 *
 * The predicate receives the decoded input value, the schema AST, and parse
 * options, and returns a `FilterOutput`. Non-success outputs are normalized into
 * schema issues. The `annotations` parameter annotates the filter itself; with
 * the default formatter, failures use `message` first, `expected` second, and
 * `<filter>` when neither is provided.
 *
 * When `abort` is `true`, parsing stops after this filter fails instead of
 * collecting later check failures.
 *
 * **Example** (Reporting failure at a nested path)
 *
 * ```ts import.meta.vitest
 * import { Result, Schema } from "effect"
 *
 * const schema = Schema.Struct({ password: Schema.String, confirmPassword: Schema.String }).check(
 *   Schema.makeFilter((o) =>
 *     o.password === o.confirmPassword
 *       ? undefined
 *       : { path: ["password"], issue: "password and confirmPassword must match" }
 *   )
 * )
 *
 * const result = Schema.decodeUnknownResult(schema)({ password: "123456", confirmPassword: "1234567" })
 * if (Result.isFailure(result) && result.failure.issue._tag === "Filter" && result.failure.issue.issue._tag === "Pointer") {
 *   result.failure.issue.issue.path // => ["password"]
 * }
 * ```
 *
 * **Example** (Reporting multiple failures at once)
 *
 * ```ts import.meta.vitest
 * import { Result, Schema } from "effect"
 *
 * const schema = Schema.Struct({ a: Schema.Finite, b: Schema.Finite, c: Schema.Finite }).check(
 *   Schema.makeFilter((o) => {
 *     const issues: Array<Schema.FilterIssue> = []
 *     if (o.a > 0) {
 *       if (o.b <= 0) issues.push({ path: ["b"], issue: "b must be greater than 0" })
 *       if (o.c <= 0) issues.push({ path: ["c"], issue: "c must be greater than 0" })
 *     }
 *     return issues
 *   })
 * )
 *
 * const result = Schema.decodeUnknownResult(schema)({ a: 1, b: 0, c: 0 })
 * if (Result.isFailure(result) && result.failure.issue._tag === "Filter" && result.failure.issue.issue._tag === "Composite") {
 *   result.failure.issue.issue.issues.map((issue) => issue._tag === "Pointer" ? issue.path : []) // => [["b"], ["c"]]
 * }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeFilter = makeFilter$1;
const TRIMMED_PATTERN = "^\\S[\\s\\S]*\\S$|^\\S$|^$";
/**
 * Validates that a string has no leading or trailing whitespace.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to a `pattern` constraint in JSON Schema that
 * matches strings without leading or trailing whitespace.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `patterns`
 * constraint to ensure generated strings match the trimmed pattern.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isTrimmed(annotations) {
  const regExp = new globalThis.RegExp(TRIMMED_PATTERN);
  return makeFilter((s) => s.trim() === s, {
    expected: "a string with no leading or trailing whitespace",
    representation: {
      id: "effect/schema/isTrimmed",
      payload: null,
    },
    toJsonSchema: () => ({ pattern: regExp.source }),
    toCode: () => ({ runtime: "Schema.isTrimmed()" }),
    arbitraryConstraint: {
      patterns: [
        {
          source: TRIMMED_PATTERN,
          flags: "",
        },
      ],
    },
    ...annotations,
  });
}
/**
 * Validates that a string matches the specified regular expression pattern.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * Unless annotations override `toJsonSchema`, JSON Schema receives a `pattern`
 * only when the JavaScript RegExp uses the Unicode flag and its other flags are
 * `d`, `g`, or `y`. Sticky patterns are anchored at the start of the string.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `patterns`
 * constraint to ensure generated strings match the specified RegExp pattern.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isPattern(regExp, annotations) {
  const source = regExp.source;
  const flags = regExp.flags;
  const canExport = /^[dg]*uy?$/.test(flags);
  const runtimeRegExp =
    flags === ""
      ? `new RegExp(${format$1(source)})`
      : `new RegExp(${format$1(source)}, ${format$1(flags)})`;
  return isPattern$1(regExp, {
    toJsonSchema: () =>
      canExport ? { pattern: flags.endsWith("y") ? `^(?:${source})` : source } : [{}, true],
    toCode: () => ({ runtime: `Schema.isPattern(${runtimeRegExp})` }),
    ...annotations,
  });
}
const getUUIDRegExp = (version) => {
  if (version)
    return new globalThis.RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
    );
  return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|[fF]{8}-[fF]{4}-[fF]{4}-[fF]{4}-[fF]{12})$/;
};
/**
 * Validates that a string is a strict Universally Unique Identifier (UUID).
 *
 * **When to use**
 *
 * Use when you need UUID semantics, including version and RFC variant bits,
 * rather than only the dashed hexadecimal shape.
 *
 * **Details**
 *
 * Without a version argument, this accepts UUID versions 1 through 8, the nil
 * UUID (`00000000-0000-0000-0000-000000000000`), and the max UUID
 * (`ffffffff-ffff-ffff-ffff-ffffffffffff`). With a version argument, this
 * accepts only UUIDs with that version and RFC variant bits; nil and max UUIDs
 * are not versioned UUIDs and do not match version-specific checks.
 *
 * JSON Schema:
 *
 * This check corresponds to a `pattern` constraint in JSON Schema that matches
 * UUID format, and includes a `format: "uuid"` annotation.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `patterns`
 * constraint to ensure generated strings match the UUID pattern.
 *
 * @see {@link isGUID} for shape-only GUID validation.
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isUUID(version, annotations) {
  const regExp = getUUIDRegExp(version);
  return isPattern(regExp, {
    expected: version ? `a UUID v${version}` : "a UUID",
    representation: {
      id: "effect/schema/isUUID",
      payload: { version: version ?? null },
    },
    toJsonSchema: () => ({
      pattern: regExp.source,
      format: "uuid",
    }),
    toCode: () => ({
      runtime: version === void 0 ? "Schema.isUUID()" : `Schema.isUUID(${version})`,
    }),
    ...annotations,
  });
}
function literalToJsonSchema(literal, original, pattern) {
  if (literal.length === 0) return original.length === 0 ? {} : [{}, true];
  const constraint = { pattern: new globalThis.RegExp(pattern).source };
  return literal === original ? constraint : [constraint, true];
}
/**
 * Validates at runtime that a string starts with the specified literal prefix.
 *
 * **Details**
 *
 * RegExp metacharacters in the prefix are escaped in JSON Schema and arbitrary
 * metadata. If the prefix ends with a high surrogate, the JSON Schema pattern
 * omits that code unit so Unicode matching cannot reject a valid string.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isStartingWith(startsWith, annotations) {
  const formatted = JSON.stringify(startsWith);
  const regExp = new globalThis.RegExp(`^${escape(startsWith)}`);
  const jsonSchemaLiteral = startsWith.replace(/[\uD800-\uDBFF]$/, "");
  return makeFilter((s) => s.startsWith(startsWith), {
    expected: `a string starting with ${formatted}`,
    representation: {
      id: "effect/schema/isStartingWith",
      payload: { startsWith },
    },
    toJsonSchema: () =>
      literalToJsonSchema(jsonSchemaLiteral, startsWith, `^${escape(jsonSchemaLiteral)}`),
    toCode: () => ({ runtime: `Schema.isStartingWith(${format$1(startsWith)})` }),
    arbitraryConstraint: {
      patterns: [
        {
          source: regExp.source,
          flags: regExp.flags,
        },
      ],
    },
    ...annotations,
  });
}
/**
 * Schema for finite numbers, rejecting `NaN`, `Infinity`, and `-Infinity`.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Finite = /*#__PURE__*/ make(finite);
/**
 * Validates that a number is finite (not `Infinity`, `-Infinity`, or `NaN`).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check does not have a direct JSON Schema equivalent, but ensures the
 * number is valid and finite.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a finite-number constraint.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isFinite = isFinite$1;
/**
 * Creates a greater-than (`>`) check for any ordered type from an
 * `Order.Order` instance.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function makeIsGreaterThan(options) {
  const gt = isGreaterThan$3(options.order);
  const formatter = options.formatter ?? format$1;
  return (exclusiveMinimum, annotations) => {
    return makeFilter((input) => gt(input, exclusiveMinimum), {
      expected: `a value greater than ${formatter(exclusiveMinimum)}`,
      arbitraryConstraint: {
        order: options.order,
        minimum: exclusiveMinimum,
        exclusiveMinimum: true,
      },
      ...options.annotate?.(exclusiveMinimum),
      ...annotations,
    });
  };
}
/**
 * Creates a greater-than-or-equal-to (`>=`) check for any ordered type from an
 * `Order.Order` instance.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function makeIsGreaterThanOrEqualTo(options) {
  const gte = isGreaterThanOrEqualTo$3(options.order);
  const formatter = options.formatter ?? format$1;
  return (minimum, annotations) => {
    return makeFilter((input) => gte(input, minimum), {
      expected: `a value greater than or equal to ${formatter(minimum)}`,
      arbitraryConstraint: {
        order: options.order,
        minimum,
      },
      ...options.annotate?.(minimum),
      ...annotations,
    });
  };
}
/**
 * Creates a less-than (`<`) check for any ordered type from an `Order.Order`
 * instance.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function makeIsLessThan(options) {
  const lt = isLessThan$3(options.order);
  const formatter = options.formatter ?? format$1;
  return (exclusiveMaximum, annotations) => {
    return makeFilter((input) => lt(input, exclusiveMaximum), {
      expected: `a value less than ${formatter(exclusiveMaximum)}`,
      arbitraryConstraint: {
        order: options.order,
        maximum: exclusiveMaximum,
        exclusiveMaximum: true,
      },
      ...options.annotate?.(exclusiveMaximum),
      ...annotations,
    });
  };
}
/**
 * Creates a less-than-or-equal-to (`<=`) check for any ordered type from an
 * `Order.Order` instance.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function makeIsLessThanOrEqualTo(options) {
  const lte = isLessThanOrEqualTo$3(options.order);
  const formatter = options.formatter ?? format$1;
  return (maximum, annotations) => {
    return makeFilter((input) => lte(input, maximum), {
      expected: `a value less than or equal to ${formatter(maximum)}`,
      arbitraryConstraint: {
        order: options.order,
        maximum,
      },
      ...options.annotate?.(maximum),
      ...annotations,
    });
  };
}
/**
 * Creates an inclusive or exclusive range check for any ordered type from an
 * `Order.Order` instance.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function makeIsBetween(deriveOptions) {
  const greaterThanOrEqualTo = isGreaterThanOrEqualTo$3(deriveOptions.order);
  const greaterThan = isGreaterThan$3(deriveOptions.order);
  const lessThanOrEqualTo = isLessThanOrEqualTo$3(deriveOptions.order);
  const lessThan = isLessThan$3(deriveOptions.order);
  const formatter = deriveOptions.formatter ?? format$1;
  return (options, annotations) => {
    const gte = options.exclusiveMinimum ? greaterThan : greaterThanOrEqualTo;
    const lte = options.exclusiveMaximum ? lessThan : lessThanOrEqualTo;
    return makeFilter((input) => gte(input, options.minimum) && lte(input, options.maximum), {
      expected: `a value between ${formatter(options.minimum)}${options.exclusiveMinimum ? " (excluded)" : ""} and ${formatter(options.maximum)}${options.exclusiveMaximum ? " (excluded)" : ""}`,
      arbitraryConstraint: {
        order: deriveOptions.order,
        minimum: options.minimum,
        maximum: options.maximum,
        ...(options.exclusiveMinimum && { exclusiveMinimum: true }),
        ...(options.exclusiveMaximum && { exclusiveMaximum: true }),
      },
      ...deriveOptions.annotate?.(options),
      ...annotations,
    });
  };
}
function encodeNumberPayload(number) {
  if (!globalThis.Number.isFinite(number))
    throw new globalThis.RangeError(`Expected a finite number, got ${format$1(number)}`);
  return number;
}
/**
 * Validates that a number is greater than the specified value (exclusive).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `exclusiveMinimum` constraint in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies an
 * `exclusiveMinimum` constraint to ensure generated numbers are greater than
 * the specified value.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isGreaterThan = /*#__PURE__*/ makeIsGreaterThan({
  order: Number$4,
  annotate: (exclusiveMinimum) => ({
    representation: {
      id: "effect/schema/isGreaterThan",
      payload: { exclusiveMinimum: encodeNumberPayload(exclusiveMinimum) },
    },
    toJsonSchema: () => ({ exclusiveMinimum }),
    toCode: () => ({ runtime: `Schema.isGreaterThan(${format$1(exclusiveMinimum)})` }),
  }),
});
/**
 * Validates that a number is greater than or equal to the specified value
 * (inclusive).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `minimum` constraint in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `minimum` constraint
 * to ensure generated numbers are greater than or equal to the specified value.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isGreaterThanOrEqualTo = /*#__PURE__*/ makeIsGreaterThanOrEqualTo({
  order: Number$4,
  annotate: (minimum) => ({
    representation: {
      id: "effect/schema/isGreaterThanOrEqualTo",
      payload: { minimum: encodeNumberPayload(minimum) },
    },
    toJsonSchema: () => ({ minimum }),
    toCode: () => ({ runtime: `Schema.isGreaterThanOrEqualTo(${format$1(minimum)})` }),
  }),
});
/**
 * Validates that a number is less than the specified value (exclusive).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `exclusiveMaximum` constraint in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies an
 * `exclusiveMaximum` constraint to ensure generated numbers are less than the
 * specified value.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isLessThan = /*#__PURE__*/ makeIsLessThan({
  order: Number$4,
  annotate: (exclusiveMaximum) => ({
    representation: {
      id: "effect/schema/isLessThan",
      payload: { exclusiveMaximum: encodeNumberPayload(exclusiveMaximum) },
    },
    toJsonSchema: () => ({ exclusiveMaximum }),
    toCode: () => ({ runtime: `Schema.isLessThan(${format$1(exclusiveMaximum)})` }),
  }),
});
/**
 * Validates that a number is less than or equal to the specified value
 * (inclusive).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `maximum` constraint in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `maximum` constraint
 * to ensure generated numbers are less than or equal to the specified value.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isLessThanOrEqualTo = /*#__PURE__*/ makeIsLessThanOrEqualTo({
  order: Number$4,
  annotate: (maximum) => ({
    representation: {
      id: "effect/schema/isLessThanOrEqualTo",
      payload: { maximum: encodeNumberPayload(maximum) },
    },
    toJsonSchema: () => ({ maximum }),
    toCode: () => ({ runtime: `Schema.isLessThanOrEqualTo(${format$1(maximum)})` }),
  }),
});
/**
 * Validates that a number is within a specified range. The range boundaries can
 * be inclusive or exclusive based on the provided options.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to `minimum`/`maximum` or `exclusiveMinimum`/`exclusiveMaximum`
 * constraints in JSON Schema, depending on the options provided.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies `minimum` and
 * `maximum` constraints with optional `exclusiveMinimum` and
 * `exclusiveMaximum` flags to ensure generated numbers fall within the
 * specified range.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
const isBetween = /*#__PURE__*/ makeIsBetween({
  order: Number$4,
  annotate: (options) => {
    const exclusiveMinimum = options.exclusiveMinimum ? true : void 0;
    const exclusiveMaximum = options.exclusiveMaximum ? true : void 0;
    return {
      representation: {
        id: "effect/schema/isBetween",
        payload: {
          minimum: encodeNumberPayload(options.minimum),
          maximum: encodeNumberPayload(options.maximum),
          ...(exclusiveMinimum && { exclusiveMinimum }),
          ...(exclusiveMaximum && { exclusiveMaximum }),
        },
      },
      toJsonSchema: () => ({
        [exclusiveMinimum ? "exclusiveMinimum" : "minimum"]: options.minimum,
        [exclusiveMaximum ? "exclusiveMaximum" : "maximum"]: options.maximum,
      }),
      toCode: () => ({
        runtime: `Schema.isBetween({ minimum: ${format$1(options.minimum)}, maximum: ${format$1(options.maximum)}, exclusiveMinimum: ${format$1(exclusiveMinimum)}, exclusiveMaximum: ${format$1(exclusiveMaximum)} })`,
      }),
    };
  },
});
/**
 * Validates that a number is a safe integer (within the safe integer range
 * that can be exactly represented in JavaScript).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to `type: "integer"` with `minimum: Number.MIN_SAFE_INTEGER`
 * and `maximum: Number.MAX_SAFE_INTEGER` in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies an integer constraint.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isInt(annotations) {
  return makeFilter((n) => globalThis.Number.isSafeInteger(n), {
    expected: "an integer",
    representation: {
      id: "effect/schema/isInt",
      payload: null,
    },
    toJsonSchema: () => ({
      type: "integer",
      minimum: globalThis.Number.MIN_SAFE_INTEGER,
      maximum: globalThis.Number.MAX_SAFE_INTEGER,
    }),
    toCode: () => ({ runtime: "Schema.isInt()" }),
    arbitraryConstraint: { number: "integer" },
    ...annotations,
  });
}
/**
 * Schema for integers, rejecting `NaN`, `Infinity`, and `-Infinity`.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Int = /*#__PURE__*/ Number$1.check(/*#__PURE__*/ isInt());
/**
 * Schema for non-negative safe integers, including zero.
 *
 * **When to use**
 *
 * Use when you need a count, index, or size that cannot be negative.
 *
 * @see {@link Int} for safe integers that may be negative
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const Natural = /*#__PURE__*/ Int.check(/*#__PURE__*/ isGreaterThanOrEqualTo(0));
/**
 * Validates that a number is a 32-bit signed integer (range: -2,147,483,648 to
 * 2,147,483,647).
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `format: "int32"` constraint in OpenAPI 3.1,
 * or `minimum`/`maximum` constraints in other JSON Schema targets.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies integer and range
 * constraints to ensure generated numbers are 32-bit signed integers.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isInt32(annotations) {
  return new FilterGroup(
    [
      isInt(),
      isBetween({
        minimum: -2147483648,
        maximum: 2147483647,
      }),
    ],
    {
      expected: "a 32-bit integer",
      ...annotations,
    },
  );
}
/**
 * Validates that a value has at least the specified length. Works with strings
 * and arrays.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * The bound must be finite; it is rounded down and clamped to zero. For arrays,
 * this check corresponds to `minItems`. JavaScript counts UTF-16 code units
 * while JSON Schema counts Unicode code points, so strings use
 * `minLength: Math.ceil(minLength / 2)`, the tightest lower bound that cannot
 * reject a string accepted by this check.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `minLength`
 * constraint to ensure generated strings or arrays have at least the required
 * length.
 *
 * **Example** (Checking minimum length)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const NonEmptyStringSchema = Schema.String.check(Schema.isMinLength(1))
 * const NonEmptyArraySchema = Schema.Array(Schema.Number).check(Schema.isMinLength(1))
 * Schema.is(NonEmptyStringSchema)("a") // => true
 * Schema.is(NonEmptyArraySchema)([1]) // => true
 * ```
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isMinLength(minLength, annotations) {
  minLength = normalizeCardinality(minLength);
  return makeIsMinLength(minLength, Math.ceil(minLength / 2), annotations);
}
function makeIsMinLength(minLength, minCodePoints, annotations) {
  return makeFilter((input) => input.length >= minLength, {
    expected: `a value with a length of at least ${minLength}`,
    representation: {
      id: "effect/schema/isMinLength",
      payload: { minLength },
    },
    toJsonSchema: ({ type }) =>
      type === "string"
        ? minLength <= 1
          ? { minLength: minCodePoints }
          : [{ minLength: minCodePoints }, true]
        : type === "array"
          ? { minItems: minLength }
          : type === void 0
            ? [
                {
                  minLength: minCodePoints,
                  minItems: minLength,
                },
                true,
              ]
            : [{}, true],
    toCode: () => ({ runtime: `Schema.isMinLength(${minLength})` }),
    [STRUCTURAL_ANNOTATION_KEY]: true,
    arbitraryConstraint: { minLength },
    ...annotations,
  });
}
/**
 * Validates that a value has at least one element. Works with strings and arrays.
 * This is equivalent to `isMinLength(1)`.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * This check corresponds to the `minLength: 1` constraint for strings or the
 * `minItems: 1` constraint for arrays in JSON Schema.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `minLength: 1`
 * constraint to ensure generated strings or arrays are non-empty.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isNonEmpty(annotations) {
  return makeIsMinLength(1, 1, annotations);
}
/**
 * Validates that a value has at most the specified length. Works with strings
 * and arrays.
 *
 * **Details**
 *
 * JSON Schema:
 *
 * The bound must be finite; it is rounded down and clamped to zero. This check
 * corresponds to `maxItems` for arrays. Strings use the same bound for
 * `maxLength`, which cannot reject a string accepted by this check because a
 * string has no more code points than UTF-16 code units.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a `maxLength`
 * constraint to ensure generated strings or arrays have at most the required
 * length.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isMaxLength(maxLength, annotations) {
  maxLength = normalizeCardinality(maxLength);
  return makeFilter((input) => input.length <= maxLength, {
    expected: `a value with a length of at most ${maxLength}`,
    representation: {
      id: "effect/schema/isMaxLength",
      payload: { maxLength },
    },
    toJsonSchema: ({ type }) =>
      type === "string"
        ? maxLength === 0
          ? { maxLength }
          : [{ maxLength }, true]
        : type === "array"
          ? { maxItems: maxLength }
          : type === void 0
            ? [
                {
                  maxLength,
                  maxItems: maxLength,
                },
                true,
              ]
            : [{}, true],
    toCode: () => ({ runtime: `Schema.isMaxLength(${maxLength})` }),
    [STRUCTURAL_ANNOTATION_KEY]: true,
    arbitraryConstraint: { maxLength },
    ...annotations,
  });
}
function normalizeCardinality(value) {
  if (!globalThis.Number.isFinite(value))
    throw new globalThis.RangeError(`Expected a finite number, got ${value}`);
  return Math.max(0, Math.floor(value));
}
/**
 * Validates that an object contains at most the specified number of properties.
 * This includes both string and symbol keys when counting properties.
 *
 * **Details**
 *
 * The bound must be finite; it is rounded down and clamped to zero.
 *
 * JSON Schema:
 *
 * This check corresponds to `maxProperties` in JSON Schema. Effect applies the
 * check to the decoded object, while JSON Schema applies it to the original
 * input. Excess-property handling and property transformations can therefore
 * produce different results.
 *
 * Arbitrary:
 *
 * During arbitrary generation, this applies a node-local `maxProperties` constraint.
 *
 * @stability stable
 * @category validation
 * @since 4.0.0
 */
function isMaxProperties(maxProperties, annotations) {
  maxProperties = normalizeCardinality(maxProperties);
  return makeFilter((input) => Reflect.ownKeys(input).length <= maxProperties, {
    expected: `a value with at most ${maxProperties === 1 ? "1 entry" : `${maxProperties} entries`}`,
    representation: {
      id: "effect/schema/isMaxProperties",
      payload: { maxProperties },
    },
    toJsonSchema: ({ type }) => (type === "object" ? { maxProperties } : [{ maxProperties }, true]),
    toCode: () => ({ runtime: `Schema.isMaxProperties(${maxProperties})` }),
    [STRUCTURAL_ANNOTATION_KEY]: true,
    arbitraryConstraint: { maxProperties },
    ...annotations,
  });
}
/**
 * Schema for non-empty strings. Validates that a string has at least one
 * character.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const NonEmptyString = /*#__PURE__*/ String$1.check(/*#__PURE__*/ isNonEmpty());
const getErrorOptionsKey = (options) =>
  (options?.includeStack === true ? 1 : 0) | (options?.excludeCause === true ? 2 : 0);
const getErrorOptions = (key) => {
  switch (key) {
    case 0:
      return;
    case 1:
      return { includeStack: true };
    case 2:
      return { excludeCause: true };
    case 3:
      return {
        includeStack: true,
        excludeCause: true,
      };
  }
};
const defectSchemaCache = [];
/**
 * Schema for unexpected defect values represented as `unknown` with a JSON
 * encoded form.
 *
 * **When to use**
 *
 * Use when you need a schema for `Cause` defects or other unexpected failures
 * whose runtime value may be any value.
 *
 * **Details**
 *
 * The encoded side is {@link Json}. During decoding, JSON objects with a string
 * `message` property are decoded into JavaScript `Error` values, preserving a
 * non-default `name` and any string `stack`. Other JSON values decode
 * unchanged.
 *
 * During encoding, JavaScript `Error` values encode to JSON objects with
 * `name`, `message`, and optional `cause` properties. Pass
 * `{ includeStack: true }` to include string stack traces in encoded `Error`
 * defects, or `{ excludeCause: true }` to omit causes. Other values are
 * serialized through Effect's JSON formatter and then parsed back into JSON
 * when possible.
 *
 * **Gotchas**
 *
 * This schema is for carrying defects across JSON boundaries, not for
 * preserving every JavaScript value exactly. Some values cannot round-trip
 * unchanged:
 *
 * - A non-`Error` object such as `{ message: "boom" }` encodes as an
 *   error-shaped JSON object and decodes back as an `Error`.
 * - JSON serialization normalizes unsupported values. For example,
 *   `undefined` array elements encode as `null`, unsupported object properties
 *   are omitted, and circular references are dropped.
 * - Values that cannot be represented as JSON fall back to Effect's formatted
 *   string representation.
 *
 * @see {@link ErrorInstance} for a schema that only accepts JavaScript `Error` values.
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
function Defect(options) {
  const key = getErrorOptionsKey(options);
  const cached = defectSchemaCache[key];
  if (cached !== void 0) return cached;
  const schema = Json.pipe(decodeTo(Unknown, defectFromJson(getErrorOptions(key))));
  defectSchemaCache[key] = schema;
  return schema;
}
globalThis.RegExp;
const URLString = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as a URL",
});
/**
 * Schema for JavaScript `URL` objects.
 *
 * **Details**
 *
 * Default JSON serializer:
 *
 * - encodes `URL` as a `string`
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const URL$1 = /*#__PURE__*/ instanceOf(globalThis.URL, {
  representation: {
    id: "effect/schema/URL",
    payload: null,
  },
  toCode: () => ({
    runtime: `Schema.URL`,
    Type: `globalThis.URL`,
  }),
  expected: "URL",
  toCodecJson: () => link()(URLString, urlFromString),
});
/**
 * Schema that decodes a `string` into a `URL`.
 *
 * **Details**
 *
 * Decoding:
 * - A **valid** URL `string` is decoded as a `URL`
 *
 * Encoding:
 * - A `URL` is encoded as a `string`
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const URLFromString = /*#__PURE__*/ URLString.pipe(/*#__PURE__*/ decodeTo(URL$1, urlFromString));
const JsonString = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as JSON",
  contentMediaType: "application/json",
});
/**
 * Returns a schema that decodes a JSON string and then decodes the parsed value
 * using the given schema.
 *
 * **Details**
 *
 * This is useful when working with JSON-encoded strings where the actual
 * structure of the value is known and described by an existing schema.
 *
 * During decoding, the resulting schema first parses the input string as JSON,
 * using `reviver` when provided, and then runs the provided schema on the
 * parsed result. During encoding, it first encodes with the provided schema and
 * then passes the result to `JSON.stringify` with the optional `replacer` and
 * `space`.
 *
 * **Example** (Formatting encoded JSON)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({ a: Schema.Number })
 * const schemaFromJsonString = Schema.fromJsonString(schema, { space: 2 })
 *
 * Schema.encodeSync(schemaFromJsonString)({ a: 1 }) // => "{\n  \"a\": 1\n}"
 * ```
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
function fromJsonString(schema, options) {
  return JsonString.pipe(decodeTo(schema, fromJsonString$1(options)));
}
/** @internal */
const UnknownFromJsonString = /*#__PURE__*/ fromJsonString(Unknown);
globalThis.File;
globalThis.FormData;
globalThis.URLSearchParams;
/**
 * Schema that parses a string into a `number` using JavaScript
 * number coercion.
 *
 * **Details**
 *
 * Decoding:
 * A `string` is decoded as a number, including possible non-finite values such as
 * `NaN`, `Infinity`, and `-Infinity`. Use `FiniteFromString` to reject non-finite
 * numbers.
 *
 * Encoding:
 * A number is encoded as a `string`.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const NumberFromString = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as a number",
}).pipe(/*#__PURE__*/ decodeTo(Number$1, numberFromString));
/**
 * Schema that parses a string into a finite number.
 *
 * **Details**
 *
 * Decoding:
 * - A `string` is decoded as a finite number, rejecting `NaN`, `Infinity`, and
 *   `-Infinity` values.
 *
 * Encoding:
 * - A finite number is encoded as a `string`.
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const FiniteFromString = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as a finite number",
}).pipe(/*#__PURE__*/ decodeTo(Finite, numberFromString));
/**
 * Schema for strings that contains no leading or trailing whitespaces.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Trimmed = /*#__PURE__*/ String$1.check(/*#__PURE__*/ isTrimmed());
/**
 * Schema that trims whitespace from a string.
 *
 * **Details**
 *
 * Decoding:
 * - A `string` is decoded as a string with no leading or trailing whitespaces.
 *
 * Encoding:
 * - The trimmed string is encoded as is.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Trim = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as a trimmed string",
}).pipe(/*#__PURE__*/ decodeTo(Trimmed, /*#__PURE__*/ trim()));
/**
 * Decodes a URI component encoded string into a UTF-8 string.
 * Can be used to store data in a URL.
 *
 * **Details**
 *
 * Decoding:
 * - A **valid** URI component encoded string is decoded as a UTF-8 `string`.
 *
 * Encoding:
 * - A `string` is encoded as a URI component encoded string.
 *
 * **Example** (Decoding URI component strings)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const PaginationSchema = Schema.Struct({
 *   maxItemPerPage: Schema.Number,
 *   page: Schema.Number
 * })
 *
 * const UrlSchema = Schema.StringFromUriComponent.pipe(
 *   Schema.decodeTo(Schema.fromJsonString(PaginationSchema))
 * )
 *
 * Schema.encodeSync(UrlSchema)({ maxItemPerPage: 10, page: 1 }) // => "%7B%22maxItemPerPage%22%3A10%2C%22page%22%3A1%7D"
 * ```
 *
 * @stability stable
 * @category schemas
 * @since 3.12.0
 */
const StringFromUriComponent = /*#__PURE__*/ String$1.annotate({
  expected: "a URI component encoded string that will be decoded as a UTF-8 string",
}).pipe(/*#__PURE__*/ decodeTo(String$1, stringFromUriComponent));
/**
 * Schema for a boolean parsed from 0 or 1.
 *
 * **When to use**
 *
 * Use when decoding data sources that represent booleans as `0 | 1` while
 * keeping boolean values in the decoded model.
 *
 * **Details**
 *
 * Decoding accepts only `0 | 1`, maps `1` to `true`, and maps `0` to `false`.
 * Encoding maps `true` to `1` and `false` to `0`.
 *
 * @see {@link Boolean} for validating values that are already booleans
 * @see {@link Literals} for keeping bit literals instead of decoding them
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const BooleanFromBit = /*#__PURE__*/ Literals([0, 1]).pipe(
  /*#__PURE__*/ decodeTo(
    Boolean,
    /*#__PURE__*/ transform({
      decode: (bit) => bit === 1,
      encode: (bool) => (bool ? 1 : 0),
    }),
  ),
);
const Base64String = /*#__PURE__*/ String$1.annotate({
  expected: "a base64 encoded string that will be decoded as Uint8Array",
  format: "byte",
  contentEncoding: "base64",
});
/**
 * Schema for JavaScript `Uint8Array` objects.
 *
 * **Details**
 *
 * Default JSON serializer:
 *
 * The default JSON serializer encodes Uint8Array as a Base64 encoded string.
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const Uint8Array$1 = /*#__PURE__*/ instanceOf(globalThis.Uint8Array, {
  representation: {
    id: "effect/schema/Uint8Array",
    payload: null,
  },
  toCode: () => ({
    runtime: `Schema.Uint8Array`,
    Type: `globalThis.Uint8Array`,
  }),
  expected: "Uint8Array",
  toCodecJson: () => link()(Base64String, uint8ArrayFromBase64String),
});
/**
 * Schema that decodes a base64 encoded string into a
 * `Uint8Array`.
 *
 * **Details**
 *
 * Decoding:
 * - A **valid** base64 encoded string is decoded as a `Uint8Array`.
 *
 * Encoding:
 * - A `Uint8Array` is encoded as a base64-encoded string.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const Uint8ArrayFromBase64 = /*#__PURE__*/ Base64String.pipe(
  /*#__PURE__*/ decodeTo(Uint8Array$1, uint8ArrayFromBase64String),
);
/**
 * Creates a schema for `Cause.Reason` values using separate schemas for typed
 * failures and unexpected defects.
 *
 * **When to use**
 *
 * Use when serializing or decoding individual cause reasons separately from a
 * full failure cause, with distinct schemas for typed errors and defects.
 *
 * **Details**
 *
 * `Fail` reasons use the `error` schema, `Die` reasons use the `defect` schema,
 * and `Interrupt` reasons carry only an optional fiber id.
 *
 * @see {@link Cause} for constructing schemas for full Cause values
 * @see {@link CauseReasonIso} for the ISO shape of each cause reason
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
function CauseReason(error, defect) {
  const schema = declareConstructor()(
    [error, defect],
    ([error, defect]) =>
      (input, ast, options) => {
        if (!isReason(input)) return fail$2(new InvalidType(ast, input, options));
        switch (input._tag) {
          case "Fail":
            return mapBothEager(decodeUnknownEffect$1(error)(input.error, options), {
              onSuccess: makeFailReason,
              onFailure: (issue) => makeCompositeAtKey(ast, "error", issue, input, options),
            });
          case "Die":
            return mapBothEager(decodeUnknownEffect$1(defect)(input.defect, options), {
              onSuccess: makeDieReason,
              onFailure: (issue) => makeCompositeAtKey(ast, "defect", issue, input, options),
            });
          case "Interrupt":
            return succeed$3(input);
        }
      },
    {
      representation: {
        id: "effect/schema/CauseReason",
        payload: null,
      },
      toCode: ({ typeParameters }) => ({
        runtime: `Schema.CauseReason(${typeParameters[0].runtime}, ${typeParameters[1].runtime})`,
        Type: `Cause.Failure<${typeParameters[0].Type}, ${typeParameters[1].Type}>`,
        importDeclarations: [`import * as Cause from "effect/Cause"`],
      }),
      expected: "Cause.Failure",
      toCodec: ([error, defect]) =>
        link()(
          Union([
            Struct({
              _tag: Literal("Fail"),
              error,
            }),
            Struct({
              _tag: Literal("Die"),
              defect,
            }),
            Struct({
              _tag: Literal("Interrupt"),
              fiberId: UndefinedOr(Finite),
            }),
          ]),
          transform({
            decode: (e) => {
              switch (e._tag) {
                case "Fail":
                  return makeFailReason(e.error);
                case "Die":
                  return makeDieReason(e.defect);
                case "Interrupt":
                  return makeInterruptReason(e.fiberId);
              }
            },
            encode: (reason) => {
              switch (reason._tag) {
                case "Fail":
                  return {
                    _tag: "Fail",
                    error: reason.error,
                  };
                case "Die":
                  return {
                    _tag: "Die",
                    defect: reason.defect,
                  };
                case "Interrupt":
                  return {
                    _tag: "Interrupt",
                    fiberId: reason.fiberId,
                  };
              }
            },
          }),
        ),
    },
  );
  return make(schema.ast, {
    error,
    defect,
  });
}
/**
 * Creates a schema for `Cause` values using separate schemas for typed failures
 * and unexpected defects.
 *
 * **When to use**
 *
 * Use to validate, transform, or serialize Effect failure causes when typed
 * failures and unexpected defects need separate schemas.
 *
 * **Details**
 *
 * The `error` schema is applied to `Fail` reasons and the `defect` schema is
 * applied to `Die` reasons. Interrupt reasons do not use either schema and
 * carry only an optional fiber id.
 *
 * @see {@link CauseReason} for the schema used by each individual cause reason
 * @see {@link CauseIso} for the ordered array representation used by the schema ISO
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
function Cause(error, defect) {
  const schema = declareConstructor()(
    [error, defect],
    ([error, defect]) => {
      const failures = ArraySchema(CauseReason(error, defect));
      return (input, ast, options) => {
        if (!isCause(input)) return fail$2(new InvalidType(ast, input, options));
        return mapBothEager(decodeUnknownEffect$1(failures)(input.reasons, options), {
          onSuccess: fromReasons,
          onFailure: (issue) => makeCompositeAtKey(ast, "failures", issue, input, options),
        });
      };
    },
    {
      representation: {
        id: "effect/schema/Cause",
        payload: null,
      },
      toCode: ({ typeParameters }) => ({
        runtime: `Schema.Cause(${typeParameters[0].runtime}, ${typeParameters[1].runtime})`,
        Type: `Cause.Cause<${typeParameters[0].Type}, ${typeParameters[1].Type}>`,
        importDeclarations: [`import * as Cause from "effect/Cause"`],
      }),
      expected: "Cause",
      toCodec: ([error, defect]) =>
        link()(
          ArraySchema(CauseReason(error, defect)),
          transform({
            decode: fromReasons,
            encode: ({ reasons: failures }) => failures,
          }),
        ),
    },
  );
  return make(schema.ast, {
    error,
    defect,
  });
}
const dateTimeUtcFromString = /*#__PURE__*/ transformEffect({
  decode: (s, options) => {
    return match$1(make$6(s), {
      onNone: () =>
        fail$2(new InvalidValue({ expected: "a valid UTC DateTime string" }, s, options)),
      onSome: (result) => succeed$3(toUtc(result)),
    });
  },
  encode: (utc) => succeed$3(formatIso(utc)),
});
const arbitraryMinimumDateTimestamp = -864e13;
const arbitraryMaximumDateTimestamp = 864e13;
function dateTimeArbitraryBounds(constraint, domainMinimum, domainMaximum) {
  const minimum = Math.max(
    domainMinimum,
    constraint?.minimum === void 0
      ? domainMinimum
      : constraint.minimum.epochMilliseconds + (constraint.exclusiveMinimum === true ? 1 : 0),
  );
  const maximum = Math.min(
    domainMaximum,
    constraint?.maximum === void 0
      ? domainMaximum
      : constraint.maximum.epochMilliseconds - (constraint.exclusiveMaximum === true ? 1 : 0),
  );
  return minimum <= maximum ? [minimum, maximum] : [domainMinimum, domainMaximum];
}
function dateTimeArbitraryInteger(minimum, maximum) {
  return Int.check(
    isBetween({
      minimum,
      maximum,
    }),
  );
}
/**
 * Schema for `DateTime.Utc` values.
 *
 * **When to use**
 *
 * Use to validate existing `DateTime.Utc` schema values and use the default JSON
 * codec that represents them as UTC ISO strings.
 *
 * **Details**
 *
 * The default JSON codec decodes UTC ISO strings into `DateTime.Utc` values and
 * encodes `DateTime.Utc` values as UTC ISO strings.
 *
 * @see {@link DateTimeUtcFromString} for decoding date-time strings into UTC values
 * @see {@link DateTimeUtcFromDate} for decoding JavaScript Date values into UTC values
 * @see {@link DateTimeUtcFromMillis} for decoding epoch milliseconds into UTC values
 * @see {@link DateTimeZoned} for preserving zoned DateTime values
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const DateTimeUtc = /*#__PURE__*/ declare((u) => isDateTime(u) && isUtc(u), {
  representation: {
    id: "effect/schema/DateTimeUtc",
    payload: null,
  },
  toCode: () => ({
    runtime: `Schema.DateTimeUtc`,
    Type: `DateTime.Utc`,
    importDeclarations: [`import * as DateTime from "effect/DateTime"`],
  }),
  expected: "DateTime.Utc",
  toCodecArbitrary: ({ constraint }) => {
    const [minimum, maximum] = dateTimeArbitraryBounds(
      constraint,
      arbitraryMinimumDateTimestamp,
      arbitraryMaximumDateTimestamp,
    );
    return linkDecoding()(dateTimeArbitraryInteger(minimum, maximum), transform$1(makeUnsafe));
  },
  toCodecJson: () => link()(String$1, dateTimeUtcFromString),
  toFormatter: () => (utc) => utc.toString(),
});
/**
 * Schema that decodes a date-time string into a `DateTime.Utc`.
 *
 * **Details**
 *
 * Decoding:
 *
 * - A string accepted by `DateTime.make` is parsed and normalized to UTC. Strings
 *   without an explicit zone are interpreted as UTC.
 *
 * Encoding:
 *
 * - A `DateTime.Utc` is encoded as a UTC ISO 8601 string.
 *
 * @see {@link DateTimeUtcFromDate} for decoding JavaScript Date values into UTC values
 * @see {@link DateTimeUtcFromMillis} for decoding epoch milliseconds into UTC values
 * @see {@link DateFromString} for decoding strings into JavaScript Date instances
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const DateTimeUtcFromString = /*#__PURE__*/ String$1.annotate({
  expected: "a string that will be decoded as a DateTime.Utc",
}).pipe(/*#__PURE__*/ decodeTo(DateTimeUtc, dateTimeUtcFromString));
const durationFromString = /*#__PURE__*/ transformEffect({
  decode: (s, options) =>
    match$1(fromInput$2(s), {
      onNone: () => fail$2(new InvalidValue({ expected: "a valid Duration string" }, s, options)),
      onSome: succeed$3,
    }),
  encode: (duration) => succeed$3(globalThis.String(duration)),
});
const durationFromMillis = /*#__PURE__*/ transform({
  decode: (i) => millis(i),
  encode: (a) => toMillis(a),
});
/**
 * Schema for `Duration` values.
 *
 * **Details**
 *
 * The default JSON serializer encodes `Duration` as a tagged object with the
 * duration type and value.
 *
 * **Example** (Defining a Duration schema)
 *
 * ```ts import.meta.vitest
 * import { Duration, Schema } from "effect"
 *
 * Schema.decodeUnknownSync(Schema.Duration)(Duration.seconds(5)) // => Duration.seconds(5)
 * ```
 *
 * @stability stable
 * @category schemas
 *
 * @since 3.10.0
 */
const Duration = /*#__PURE__*/ declare(isDuration, {
  representation: {
    id: "effect/schema/Duration",
    payload: null,
  },
  toCode: () => ({
    runtime: `Schema.Duration`,
    Type: `Duration.Duration`,
    importDeclarations: [`import * as Duration from "effect/Duration"`],
  }),
  expected: "Duration",
  toCodecJson: () =>
    link()(
      Union([
        Struct({ _tag: Literal("Infinity") }),
        Struct({ _tag: Literal("NegativeInfinity") }),
        Struct({
          _tag: Literal("Nanos"),
          value: BigInt$1,
        }),
        Struct({
          _tag: Literal("Millis"),
          value: Int,
        }),
      ]),
      transform({
        decode: (e) => {
          switch (e._tag) {
            case "Infinity":
              return infinity;
            case "NegativeInfinity":
              return negativeInfinity;
            case "Nanos":
              return nanos(e.value);
            case "Millis":
              return millis(e.value);
          }
        },
        encode: (duration) => {
          switch (duration.value._tag) {
            case "Infinity":
              return { _tag: "Infinity" };
            case "NegativeInfinity":
              return { _tag: "NegativeInfinity" };
            case "Nanos":
              return {
                _tag: "Nanos",
                value: duration.value.nanos,
              };
            case "Millis":
              return {
                _tag: "Millis",
                value: duration.value.millis,
              };
          }
        },
      }),
    ),
});
/**
 * Schema that parses a string into a `Duration`.
 *
 * **Details**
 *
 * Decoding:
 * - A `string` is decoded as a `Duration`, accepting any format that
 *   `Duration.fromInput` can parse.
 *
 * Encoding:
 * - A `Duration` is encoded as a parseable `string`.
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const DurationFromString = /*#__PURE__*/ /* @__PURE__ */ String$1.annotate({
  expected: "a string that will be decoded as a Duration",
}).pipe(/*#__PURE__*/ decodeTo(Duration, durationFromString));
/**
 * Schema that decodes a number into a `Duration`, treating the number as
 * milliseconds.
 *
 * **Details**
 *
 * Decoding:
 * - A finite or infinite number is decoded as a `Duration`
 *
 * Encoding:
 * - A `Duration` is encoded to a finite or infinite number of milliseconds
 *
 * **Gotchas**
 *
 * `NaN` is decoded as `Duration.zero`, matching `Duration.millis`.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
const DurationFromMillis = /*#__PURE__*/ Number$1.pipe(
  /*#__PURE__*/ decodeTo(Duration, durationFromMillis),
);
/**
 * Creates a schema for `Exit` values using schemas for the success value, typed
 * failure, and unexpected defect channels.
 *
 * **When to use**
 *
 * Use when serializing or validating an effect outcome where success, typed
 * failure, and defects each need their own schema.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
function Exit(value, error, defect) {
  const schema = declareConstructor()(
    [value, error, defect],
    ([value, error, defect]) => {
      const cause = Cause(error, defect);
      return (input, ast, options) => {
        if (!isExit(input)) return fail$2(new InvalidType(ast, input, options));
        switch (input._tag) {
          case "Success":
            return mapBothEager(decodeUnknownEffect$1(value)(input.value, options), {
              onSuccess: succeed$2,
              onFailure: (issue) => makeCompositeAtKey(ast, "value", issue, input, options),
            });
          case "Failure":
            return mapBothEager(decodeUnknownEffect$1(cause)(input.cause, options), {
              onSuccess: failCause,
              onFailure: (issue) => makeCompositeAtKey(ast, "cause", issue, input, options),
            });
        }
      };
    },
    {
      representation: {
        id: "effect/schema/Exit",
        payload: null,
      },
      toCode: ({ typeParameters }) => ({
        runtime: `Schema.Exit(${typeParameters[0].runtime}, ${typeParameters[1].runtime}, ${typeParameters[2].runtime})`,
        Type: `Exit.Exit<${typeParameters[0].Type}, ${typeParameters[1].Type}, ${typeParameters[2].Type}>`,
        importDeclarations: [`import * as Exit from "effect/Exit"`],
      }),
      expected: "Exit",
      toCodec: ([value, error, defect]) =>
        link()(
          Union([
            Struct({
              _tag: Literal("Success"),
              value,
            }),
            Struct({
              _tag: Literal("Failure"),
              cause: Cause(error, defect),
            }),
          ]),
          transform({
            decode: (e) => (e._tag === "Success" ? succeed$2(e.value) : failCause(e.cause)),
            encode: (exit) =>
              isSuccess(exit)
                ? {
                    _tag: "Success",
                    value: exit.value,
                  }
                : {
                    _tag: "Failure",
                    cause: exit.cause,
                  },
          }),
        ),
    },
  );
  return make(schema.ast, {
    value,
    error,
    defect,
  });
}
/**
 * Schema for `Option<A>` values.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
function Option(value) {
  const schema = declareConstructor()(
    [value],
    ([value]) =>
      (input, ast, options) => {
        if (isOption(input)) {
          if (isNone(input)) return succeedNone;
          return mapBothEager(decodeUnknownEffect$1(value)(input.value, options), {
            onSuccess: some,
            onFailure: (issue) => makeCompositeAtKey(ast, "value", issue, input, options),
          });
        }
        return fail$2(new InvalidType(ast, input, options));
      },
    {
      representation: {
        id: "effect/schema/Option",
        payload: null,
      },
      toCode: ({ typeParameters }) => ({
        runtime: `Schema.Option(${typeParameters[0].runtime})`,
        Type: `Option.Option<${typeParameters[0].Type}>`,
        importDeclarations: [`import * as Option from "effect/Option"`],
      }),
      expected: "Option",
      toCodec: ([value]) =>
        link()(
          Union([
            Struct({
              _tag: Literal("Some"),
              value,
            }),
            Struct({ _tag: Literal("None") }),
          ]),
          transform({
            decode: (e) => (e._tag === "None" ? none() : some(e.value)),
            encode: (o) =>
              isSome(o)
                ? {
                    _tag: "Some",
                    value: o.value,
                  }
                : { _tag: "None" },
          }),
        ),
    },
  );
  return make(schema.ast, { value });
}
/**
 * Decodes a nullable, required value `T` to a required `Option<T>` value.
 *
 * **Details**
 *
 * Decoding maps `null` to `None` and all other values to `Some`. Encoding maps
 * `None` to `null` and maps `Some` to its value.
 *
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
function OptionFromNullOr(schema) {
  return NullOr(schema).pipe(decodeTo(Option(toType(schema)), optionFromNullOr()));
}
/**
 * Schema that decodes URL parameters into a record of string values.
 *
 * **Details**
 *
 * Keys with one value decode to a string, and keys with multiple values decode to
 * a non-empty readonly array of strings.
 *
 * **Example** (Decoding URL parameters to a record)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 * import { UrlParams } from "effect/http"
 *
 * const toStruct = Schema.RecordFromUrlParams.pipe(
 *   Schema.decodeTo(Schema.Struct({
 *     some: Schema.String,
 *     number: Schema.FiniteFromString
 *   }))
 * )
 *
 * const decoded = Schema.decodeSync(toStruct)(UrlParams.fromInput({
 *   some: "value",
 *   number: 42
 * }))
 * const result = [decoded.some, decoded.number] // => ["value", 42]
 * ```
 *
 * @stability unstable
 * @category schemas
 * @since 4.0.0
 */
const RecordFromUrlParams = /*#__PURE__*/ /* @__PURE__ */ declare(isUrlParams, {
  representation: {
    id: "effect/http/UrlParams",
    payload: null,
  },
  toCode: () => ({
    runtime: "Schema.UrlParams",
    Type: "UrlParams.UrlParams",
    importDeclarations: [`import * as UrlParams from "effect/http/UrlParams"`],
  }),
  expected: "UrlParams",
  toEquivalence: () => Equivalence,
  toCodec: () =>
    link()(
      ArraySchema(Tuple([String$1, String$1])),
      transform({
        decode: make$3,
        encode: (self) => self.params.map(([key, value]) => [key, unwrap(value)]),
      }),
    ),
}).pipe(
  /*#__PURE__*/ decodeTo(
    /*#__PURE__*/ Record(
      String$1,
      /*#__PURE__*/ Union([String$1, /*#__PURE__*/ NonEmptyArray(String$1)]),
    ),
    /*#__PURE__*/ transform({
      decode: toReadonlyRecord,
      encode: fromInput,
    }),
  ),
);
/**
 * Schema for `Redacted` values, which hide their contents from inspection.
 *
 * **Details**
 *
 * Options:
 *
 * - `label`: When provided, the schema will behave as follows:
 *   - Values will be validated against the label in addition to the wrapped schema
 *   - The default JSON serializer will deserialize into a `Redacted` instance with the label
 *   - The arbitrary generator will produce a `Redacted` instance with the label
 *   - The formatter will return the label
 * - `disallowJsonEncode`: When set to `true`, when attempting to encode a `Redacted` instance
 *   into JSON, it will fail with an error. This is useful when the wrapped schema is
 *   sensitive and should not be exposed in JSON.
 *
 * @see {@link RedactedFromValue} for decoding raw values and wrapping them in `Redacted`.
 * @stability stable
 * @category schemas
 * @since 3.10.0
 */
function Redacted(value$4, options) {
  const label = typeof options?.label === "string" ? options.label : void 0;
  const disallowJsonEncode = options?.disallowJsonEncode === true;
  const normalizedOptions =
    label !== void 0
      ? disallowJsonEncode
        ? {
            label,
            disallowJsonEncode: true,
          }
        : { label }
      : disallowJsonEncode
        ? { disallowJsonEncode: true }
        : void 0;
  const decodeLabel = label !== void 0 ? decodeUnknownEffect$1(Literal(label)) : void 0;
  const schema = declareConstructor()(
    [value$4],
    ([value$3]) =>
      (input, ast, poptions) => {
        if (isRedacted(input)) {
          const label =
            decodeLabel !== void 0
              ? mapErrorEager(
                  decodeLabel(input.label, poptions),
                  (issue) => new Pointer(["label"], issue),
                )
              : void_$2;
          return flatMapEager(label, () =>
            mapBothEager(decodeUnknownEffect$1(value$3)(value(input), poptions), {
              onSuccess: (value) => make$5(value, { label: input.label }),
              onFailure: () => {
                return new Composite(
                  ast,
                  [new Pointer(["value"], new InvalidValue(void 0, input, poptions))],
                  input,
                  poptions,
                );
              },
            }),
          );
        }
        return fail$2(new InvalidType(ast, input, poptions));
      },
    {
      representation: {
        id: "effect/schema/Redacted",
        payload: normalizedOptions ?? null,
      },
      toCode: ({ typeParameters }) => ({
        runtime:
          normalizedOptions !== void 0
            ? `Schema.Redacted(${typeParameters[0].runtime}, ${format$1(normalizedOptions)})`
            : `Schema.Redacted(${typeParameters[0].runtime})`,
        Type: `Redacted.Redacted<${typeParameters[0].Type}>`,
        importDeclarations: [`import * as Redacted from "effect/Redacted"`],
      }),
      expected: "Redacted",
      toCodecJson: ([value$5]) =>
        link()(value$5, {
          decode: transform$1((e) => make$5(e, { label })),
          encode: disallowJsonEncode
            ? forbidden(
                (oe) =>
                  "Cannot serialize Redacted" +
                  (isSome(oe) && typeof oe.value.label === "string"
                    ? ` with label: "${oe.value.label}"`
                    : ""),
              )
            : transform$1(value),
        }),
      toEquivalence: ([value]) => makeEquivalence(value),
    },
  );
  return make(schema.ast, { value: value$4 });
}
const immerable = /*#__PURE__*/ globalThis.Symbol.for("immer-draftable");
const payloadToken = {};
function makeClass(Inherited, identifier, struct$1, annotations, proto) {
  const getClassSchema = getClassSchemaFactory(struct$1, identifier, annotations);
  const ClassTypeId = getClassTypeId(identifier);
  const out = class extends Inherited {
    constructor(...[input, options]) {
      const payload = options?.["~payload"];
      const value =
        payload?.token === payloadToken ? payload.value : struct$1.make(input ?? {}, options);
      super(value, {
        ...options,
        disableChecks: true,
        "~payload": {
          token: payloadToken,
          value,
        },
      });
    }
    static [TypeId] = TypeId;
    get [ClassTypeId]() {
      return ClassTypeId;
    }
    static [immerable] = true;
    static identifier = identifier;
    static fields = struct$1.fields;
    static get ast() {
      return getClassSchema(this).ast;
    }
    static pipe() {
      return pipeArguments(this, arguments);
    }
    static rebuild(ast) {
      return getClassSchema(this).rebuild(ast);
    }
    static make(input, options) {
      return make$2(getClassSchema(this))(input ?? {}, options);
    }
    static makeOption(input, options) {
      return makeOption(getClassSchema(this))(input ?? {}, options);
    }
    static makeEffect(input, options) {
      return getClassSchema(this).makeEffect(input ?? {}, options);
    }
    static annotate(annotations) {
      return this.rebuild(annotate$1(this.ast, annotations));
    }
    static annotateKey(annotations) {
      return this.rebuild(annotateKey$1(this.ast, annotations));
    }
    static check(...checks) {
      return this.rebuild(appendChecks(this.ast, checks));
    }
    static extend(identifier) {
      return (schema, annotations) => {
        const extension = isStruct(schema) ? schema : Struct(schema);
        const fields = {
          ...struct$1.fields,
          ...extension.fields,
        };
        const ast = struct(fields, struct$1.ast.checks, { identifier });
        return makeClass(
          this,
          identifier,
          makeStruct(appendChecks(ast, extension.ast.checks), fields),
          annotations,
          proto,
        );
      };
    }
    static mapFields(f, options) {
      return struct$1.mapFields(f, options);
    }
  };
  if (proto !== void 0) Object.assign(out.prototype, proto(identifier));
  return out;
}
function getClassTransformation(self) {
  return new Transformation(
    transform$1(
      (input) =>
        new self(input, {
          "~payload": {
            token: payloadToken,
            value: input,
          },
        }),
    ),
    passthrough$1(),
  );
}
function getClassTypeId(identifier) {
  return `~effect/Schema/Class/${identifier}`;
}
function getClassSchemaFactory(from, identifier, annotations) {
  let memo;
  return (self) => {
    if (memo !== void 0) return memo;
    const ClassTypeId = getClassTypeId(identifier);
    const isClassValue = (input) => input instanceof self || hasProperty(input, ClassTypeId);
    const transformation = getClassTransformation(self);
    return (memo = decodeTo(
      make(
        new Declaration(
          [from.ast],
          () => (input, ast, options) => {
            return isClassValue(input)
              ? succeed$3(input)
              : fail$2(new InvalidType(ast, input, options));
          },
          {
            identifier,
            [CONSTRUCTOR_ANNOTATION_KEY]: ([from]) => ({
              isConstructed: isClassValue,
              link: new Link(from, transformation),
            }),
            toCodec: ([from]) => new Link(from.ast, transformation),
            toEquivalence: ([from]) => from,
            toFormatter:
              ([from]) =>
              (t) =>
                `${self.identifier}(${from(t)})`,
            [SENTINELS_ANNOTATION_KEY]: collectSentinels(from.ast),
            ...annotations,
          },
        ),
      ),
      transformation,
    )(from));
  };
}
function isStruct(schema) {
  return isSchema(schema);
}
/**
 * Creates a schema-backed class whose constructor validates input against a
 * {@link Struct} schema. Construction throws an `Error` with a
 * `SchemaIssue.Issue` in its `cause` on invalid input.
 *
 * **When to use**
 *
 * Use when you need a schema-backed data class with validated construction,
 * schema-derived decoding/encoding, and class-style methods or inheritance.
 *
 * **Details**
 *
 * Pass the desired class type as the first type parameter. The second optional
 * type parameter can be used to add nominal brands.
 *
 * The `identifier` is the schema's stable runtime name. It is exposed on the
 * class, stored in the schema AST, and used to label diagnostics and generated
 * references as well as to format class instances.
 *
 * It also derives a runtime marker that recognizes instances across hot module
 * reloads, where `instanceof` can fail because the constructor has been
 * replaced. The identifier is explicit because the outer JavaScript class name
 * is not available while the `extends` expression is evaluated and may change
 * through renaming or minification.
 *
 * **Gotchas**
 *
 * Passing `disableChecks` in the options skips constructor validation.
 *
 * **Example** (Defining a basic class)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * class Person extends Schema.Class<Person>("Person")({
 *   name: Schema.String,
 *   age: Schema.Number
 * }) {}
 *
 * const alice = new Person({ name: "Alice", age: 30 })
 * alice.name // => "Alice"
 * String(alice) // => "Person({\"name\":\"Alice\",\"age\":30})"
 * ```
 *
 * **Example** (Extending a class)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * class Animal extends Schema.Class<Animal>("Animal")({
 *   name: Schema.String
 * }) {}
 *
 * class Dog extends Animal.extend<Dog>("Dog")({
 *   breed: Schema.String
 * }) {}
 *
 * const dog = new Dog({ name: "Rex", breed: "Labrador" })
 * dog.name // => "Rex"
 * dog.breed // => "Labrador"
 * ```
 *
 * @see {@link TaggedClass} for adding a `_tag` literal field to the class schema
 * @see {@link Error} for defining schema-backed error classes
 * @see {@link TaggedError} for defining tagged schema-backed error classes
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const Class = (identifier) => (schema, annotations) => {
  const struct = isStruct(schema) ? schema : Struct(schema);
  return makeClass(Class$1, identifier, struct, annotations, (identifier) => ({
    toString() {
      return `${identifier}(${format$1({ ...this })})`;
    },
  }));
};
/**
 * Creates a schema-backed error class that can be used as a typed,
 * yieldable error in Effect programs. Combines {@link Class} validation with
 * the `YieldableError` interface so instances can be yielded directly inside
 * `Effect.gen`.
 *
 * **Example** (Schema-backed error)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * class NotFound extends Schema.Error<NotFound>("NotFound")({
 *   id: Schema.Number
 * }) {}
 *
 * const program = Effect.gen(function*() {
 *   yield* new NotFound({ id: 1 })
 * })
 * const error = await Effect.runPromise(Effect.flip(program))
 * error.id // => 1
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Error$1 = (identifier) => (schema, annotations) => {
  const struct = isStruct(schema) ? schema : Struct(schema);
  return makeClass(Error$3, identifier, struct, annotations, (identifier) => ({
    name: identifier,
  }));
};
/**
 * Defines a schema-backed yieldable error class with an automatically populated
 * `_tag` field.
 *
 * **When to use**
 *
 * Use to define typed errors that are schema validated, yielded in `Effect.gen`,
 * and matched as tagged union members.
 *
 * **Example** (Defining a tagged error class)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schema } from "effect"
 *
 * class NotFound extends Schema.TaggedError<NotFound>()("NotFound", {
 *   id: Schema.Number
 * }) {}
 *
 * const program = Effect.gen(function*() {
 *   yield* new NotFound({ id: 42 })
 * })
 * const error = await Effect.runPromise(Effect.flip(program))
 * error._tag // => "NotFound"
 * error.id // => 42
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.10.0
 */
const TaggedError = (identifier) => {
  return (tagValue, schema, annotations) => {
    const struct = isStruct(schema)
      ? schema.mapFields(
          (fields) => ({
            _tag: tag(tagValue),
            ...fields,
          }),
          { unsafePreserveChecks: true },
        )
      : TaggedStruct(tagValue, schema);
    return Error$1(identifier ?? tagValue)(struct, annotations);
  };
};
/**
 * Derives an `Equivalence` from a schema. Two values are considered equal when
 * every field (and nested field) compares equal according to the schema
 * structure.
 *
 * **Example** (Comparing structs)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const eq = Schema.toEquivalence(Schema.Struct({ id: Schema.Number, name: Schema.String }))
 *
 * eq({ id: 1, name: "Alice" }, { id: 1, name: "Alice" }) // => true
 * eq({ id: 1, name: "Alice" }, { id: 2, name: "Alice" }) // => false
 * ```
 *
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
function toEquivalence(schema) {
  return toEquivalence$1(schema.ast);
}
/**
 * Returns a JSON Schema document using draft 2020-12.
 *
 * **When to use**
 *
 * Use when you need a draft-2020-12 description of the canonical JSON form of a runtime schema.
 *
 * **Details**
 *
 * The document describes the encoded side of `Schema.toCodecJson(schema)`.
 * Use that codec to decode JSON inputs. For example, it decodes JSON `null`
 * to JavaScript `undefined` for a field defined with `Schema.optional(Schema.String)`.
 * Decoding the same input with the original schema rejects `null`.
 *
 * The `options` parameter controls reference extraction and generation details
 * such as excess properties and synthesized check descriptions; it does not
 * change the draft target. The reference policy receives canonical JSON
 * encoded ASTs. By default, anonymous non-recursive candidates remain inline,
 * while candidates with resolved identifiers become definitions. Declarations
 * are lowered through their `toCodecJson` or `toCodec` annotation when
 * available before the representation document is compiled.
 *
 * The generated document is intended for preliminary validation. JSON Schema
 * and Effect checks do not always have identical semantics, so the Effect
 * decoder remains the final authority. Passing JSON Schema validation does not
 * guarantee that Effect decoding will succeed.
 *
 * **Gotchas**
 *
 * JSON Schema generation is best-effort. String length uses Unicode code points
 * in JSON Schema and UTF-16 code units in Effect. A generated `pattern` cannot
 * retain JavaScript RegExp flags. Object property checks apply to the original
 * input in JSON Schema but to the decoded object in Effect. When a `oneOf`
 * branch contains a known approximation, the compiler emits `anyOf` so that
 * the approximation cannot create a false rejection. Unions with only exact
 * branches retain `oneOf`. Custom `toJsonSchema` callbacks return `[schema, true]` for safe,
 * looser approximations and are responsible for the semantics they declare. When
 * canonical JSON derivation adds an artificial transformation, checks and
 * annotations on its source node are not copied to the JSON target, so they do
 * not appear in the emitted document. Opaque declarations without a structural
 * codec are represented by an unconstrained JSON Schema. The default
 * `onExcessProperty: "ignore"` matches the decoder default and leaves
 * index-signature keys without exact selectors open. In `"error"` mode, the compiler
 * constrains those keys with `propertyNames` and applies a permissive choice of
 * candidate index value schemas. The Effect decoder enforces the exact
 * key-value association.
 *
 * **Example** (Decoding JSON with the matching codec)
 *
 * ```ts import.meta.vitest
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.optional(Schema.String)
 * })
 *
 * const document = Schema.toJsonSchemaDocument(schema)
 * const jsonCodec = Schema.toCodecJson(schema)
 *
 * Schema.decodeUnknownResult(schema)({ name: null })._tag // => "Failure"
 * Schema.decodeUnknownSync(jsonCodec)({ name: null }) // => { name: undefined }
 * Schema.decodeUnknownSync(jsonCodec)({}) // => {}
 * Schema.encodeSync(jsonCodec)({ name: undefined }) // => { name: null }
 * ```
 *
 * @see {@link toCodecJson} for decoding and encoding the canonical JSON representation
 * @see {@link SchemaRepresentation.toJsonSchemaDocument} for compiling an existing live representation document
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
function toJsonSchemaDocument(schema, options) {
  return toJsonSchemaDocument$1(toRepresentation(toCodecJsonAST(schema.ast), options), options);
}
/**
 * Derives a canonical JSON codec from a schema. The encoded form is `Json`, and
 * decoding produces the schema's `Type`.
 *
 * **Details**
 *
 * Derivation does not run transformations. Annotation links may be asynchronous,
 * may fail, and may use optional services; the consuming parser chooses the
 * execution and failure handling. Because hooks do not widen the returned
 * service types, links cannot require services not declared by the input schema.
 *
 * **Gotchas**
 *
 * Declarations without a `toCodecJson` or `toCodec` annotation use `Json` as
 * their encoded schema. This keeps codec construction total, but encoding or
 * decoding can still fail when declaration values are not JSON values. A
 * `toCodecJson` callback can return `undefined` when the declaration is already
 * in canonical JSON form. When derivation adds an artificial transformation,
 * checks and annotations remain on its source node rather than being copied to
 * the JSON target. Source checks still run after the transformation.
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toCodecJson = toCodecJson$1;
/**
 * Converts a schema to the StringTree canonical codec, where every leaf value
 * becomes a string while preserving the original structure.
 *
 * **Details**
 *
 * Derivation does not run transformations. Annotation links may be asynchronous,
 * may fail, and may use optional services; the consuming parser chooses the
 * execution and failure handling. Links cannot require services not declared by
 * the input schema because hooks do not widen the returned service types.
 *
 * **Gotchas**
 *
 * Declarations must provide a structural `toCodecStringTree`, `toCodecJson`, or
 * `toCodec` encoding. A callback can return `undefined` when the declaration is
 * already in canonical StringTree form.
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toCodecStringTree = toCodecStringTree$1;
/**
 * Allows array schemas to decode from either an array input or a single value
 * input.
 *
 * **When to use**
 *
 * Use when you need to accept transport formats that may represent a
 * single-item array as a bare value, such as query-string or form-data adapters.
 *
 * **Gotchas**
 *
 * This combinator is intentionally not part of `toCodecStringTree`; it adds a
 * decoding convenience rather than a canonical StringTree representation. It
 * does not parse comma-separated strings.
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toCodecArrayFromSingle = toCodecArrayFromSingle$1;
/**
 * Schema that accepts and validates any immutable JSON-compatible value.
 *
 * **Example** (Validating a JSON value)
 *
 * ```ts import.meta.vitest
 * import { Option, Schema } from "effect"
 *
 * Schema.decodeUnknownOption(Schema.Json)({ key: [1, true, null] }) // => Option.some({ key: [1, true, null] })
 * ```
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const Json = /*#__PURE__*/ make(
  /*#__PURE__*/ annotate$1(Json$1, {
    toCode: () => ({
      runtime: "Schema.Json",
      Type: "Schema.Json",
    }),
  }),
);
/**
 * Schema for readonly string-keyed records whose values are JSON-compatible.
 *
 * **When to use**
 *
 * Use when you need to validate a JSON object rather than any JSON value.
 *
 * **Example** (Validating a JSON object)
 *
 * ```ts import.meta.vitest
 * import { Option, Schema } from "effect"
 *
 * Schema.decodeUnknownOption(Schema.JsonObject)({ key: [1, true, null] }) // => Option.some({ key: [1, true, null] })
 * Schema.decodeUnknownOption(Schema.JsonObject)([1, 2, 3]) // => Option.none()
 * ```
 *
 * @see {@link Json} for a schema that also accepts JSON arrays and primitive values
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const JsonObject = /*#__PURE__*/ Record(String$1, Json);
/**
 * Schema that accepts any mutable JSON-compatible value. See {@link Json} for
 * the immutable variant.
 *
 * @stability stable
 * @category schemas
 * @since 4.0.0
 */
const MutableJson = /*#__PURE__*/ make(
  /*#__PURE__*/ annotate$1(MutableJson$1, {
    toCode: () => ({
      runtime: "Schema.MutableJson",
      Type: "Schema.MutableJson",
    }),
  }),
);
/**
 * Resolves the typed annotations from a schema. The term "resolve" (rather
 * than "get") reflects the lookup strategy: if the schema has checks, the
 * annotations are taken from the last check; otherwise they are taken from
 * the base schema instance.
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
function resolveAnnotations(schema) {
  return resolve$1(schema.ast);
}
/**
 * Resolves the context (key-level) annotations from a schema. Context
 * annotations are those attached via `annotateKey` and live on the AST's
 * `context` rather than on the schema node itself.
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
function resolveAnnotationsKey(schema) {
  return schema.ast.context?.annotations;
}
export {
  Uint8ArrayFromBase64 as $,
  isUnion as $n,
  fromSetCookie as $r,
  makeFilter as $t,
  NullOr as A,
  toEpochMillis as Ai,
  lambda as An,
  empty as Ar,
  fieldsAssign as At,
  String$1 as B,
  taggedEnum as Bi,
  decodeUnknownEffect$1 as Bn,
  fromRecordUnsafe as Br,
  isLessThan as Bt,
  Literals as C,
  nowInCurrentZone as Ci,
  inetAddressFromIpString as Cn,
  withDefault$1 as Cr,
  decodeUnknownSync as Ct,
  NonEmptyArray as D,
  subtract as Di,
  unixPathAddress as Dn,
  defaultFormatter as Dr,
  encodeTo as Dt,
  Never as E,
  setZoneNamed as Ei,
  isUnspecified as En,
  Pointer as Er,
  encodeSync as Et,
  OptionFromNullOr as F,
  EncodingError as Fi,
  toCodecJsonAST as Fn,
  toString as Fr,
  isFinite as Ft,
  TaggedStruct as G,
  decodeTo$1 as Gn,
  set as Gr,
  isNonEmpty as Gt,
  Struct as H,
  make$2 as Hn,
  isRedactedName$1 as Hr,
  isMaxLength as Ht,
  Record as I,
  Class$1 as Ii,
  VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP as In,
  unwrap as Ir,
  isGreaterThan as It,
  TrueLiterals as J,
  isDeclaration as Jn,
  make$5 as Jr,
  isSchemaError as Jt,
  TemplateLiteral as K,
  getAST as Kn,
  setAll$1 as Kr,
  isPattern as Kt,
  RecordFromUrlParams as L,
  Error$2 as Li,
  getReferenceKey as Ln,
  CurrentRedactedNames$1 as Lr,
  isGreaterThanOrEqualTo as Lt,
  NumberFromString as M,
  toPartsUtc as Mi,
  omit as Mn,
  redactUrl as Mr,
  instanceOf as Mt,
  Opaque as N,
  toUtc as Ni,
  toRepresentations as Nn,
  setAll as Nr,
  is as Nt,
  NonEmptyString as O,
  subtractDuration as Oi,
  isSchemaError$1 as On,
  CurrentRedactedNames as Or,
  encodeUnknownEffect as Ot,
  Option as P,
  withCurrentZoneLocal as Pi,
  toJsonSchemaMultiDocument as Pn,
  toRecord as Pr,
  isBetween as Pt,
  Uint8Array$1 as Q,
  isSuspend as Qn,
  expireCookie as Qr,
  make as Qt,
  Redacted as R,
  TaggedClass as Ri,
  toMultiDocumentOpenApi3_1 as Rn,
  empty$1 as Rr,
  isInt as Rt,
  Literal as S,
  now as Si,
  formatUrlUnsafe as Sn,
  transformOptional$1 as Sr,
  decodeUnknownResult as St,
  Natural as T,
  setParts as Ti,
  isLoopback as Tn,
  InvalidValue as Tr,
  encodeEffect as Tt,
  StructWithRest as U,
  Union$1 as Un,
  merge as Ur,
  isMaxProperties as Ut,
  StringFromUriComponent as V,
  map$1 as Vi,
  encodeUnknownEffect$1 as Vn,
  isHeaders as Vr,
  isLessThanOrEqualTo as Vt,
  TaggedError as W,
  applyToSelfOrLastLinkEncoding as Wn,
  remove as Wr,
  isMinLength as Wt,
  URL$1 as X,
  isNull as Xn,
  stringOrRedacted as Xr,
  isTrimmed as Xt,
  Tuple as Y,
  isLiteral as Yn,
  value as Yr,
  isStartingWith as Yt,
  URLFromString as Z,
  isObjects as Zn,
  empty$2 as Zr,
  isUUID as Zt,
  Finite as _,
  isLessThanOrEqualTo$1 as _i,
  withConstructorDefault as _n,
  parseJson as _r,
  decodeSync as _t,
  BooleanLiterals as a,
  decode$1 as ai,
  resolveAnnotations as an,
  toEncoded$1 as ar,
  Void as at,
  Json as b,
  makeZoned as bi,
  formatIp as bn,
  transform$1 as br,
  decodeUnknownExit as bt,
  DateTimeUtc as c,
  Equivalence$2 as ci,
  tag as cn,
  composeTransformation as cr,
  brand as ct,
  Duration as d,
  addDuration as di,
  toCodecStringTree as dn,
  transform as dr,
  check as dt,
  isEmpty as ei,
  mutable as en,
  isVoid as er,
  Undefined as et,
  DurationFromMillis as f,
  distance as fi,
  toEncoded as fn,
  transformEffect as fr,
  declare as ft,
  FalseLiterals as g,
  isLessThan$1 as gi,
  toType as gn,
  forbidden as gr,
  decodeOption as gt,
  Exit as h,
  isGreaterThanOrEqualTo$1 as hi,
  toTaggedUnion as hn,
  compose as hr,
  decodeExit as ht,
  BooleanFromBit as i,
  toSetCookieHeaders as ii,
  refine as in,
  resolveTitle as ir,
  UnknownFromJsonString as it,
  Number$1 as j,
  toParts as ji,
  map as jn,
  fromInput as jr,
  fromJsonString as jt,
  Null as k,
  toDate as ki,
  assign as kn,
  appendAll as kr,
  encodeUnknownExit as kt,
  DateTimeUtcFromString as l,
  Order as li,
  toCodecArrayFromSingle as ln,
  splitKeyValue as lr,
  catchDecoding as lt,
  Error$1 as m,
  isGreaterThan$1 as mi,
  toJsonSchemaDocument as mn,
  trim as mr,
  decodeEffect as mt,
  ArraySchema as n,
  parseHeader as ni,
  optional as nn,
  resolveDescription as nr,
  Union as nt,
  Cause as o,
  decodeString as oi,
  resolveAnnotationsKey as on,
  unknown as or,
  annotate as ot,
  DurationFromString as p,
  formatIso as pi,
  toEquivalence as pn,
  transformOptional as pr,
  decode as pt,
  Trim as q,
  getLastEncoding as qn,
  isRedacted as qr,
  isSchema as qt,
  Boolean as r,
  set$1 as ri,
  optionalKey as rn,
  resolveIdentifier as rr,
  Unknown as rt,
  Class as s,
  encode$1 as si,
  suspend as sn,
  Transformation as sr,
  annotateKey as st,
  Any as t,
  merge$1 as ti,
  mutableKey as tn,
  resolveAt as tr,
  UndefinedOr as tt,
  Defect as u,
  add as ui,
  toCodecJson as un,
  toLowerCase as ur,
  catchEncoding as ut,
  FiniteFromString as v,
  make$6 as vi,
  withDecodingDefault as vn,
  passthrough$1 as vr,
  decodeTo as vt,
  MutableJson as w,
  nowUnsafe as wi,
  isInetAddress as wn,
  Forbidden as wr,
  encode as wt,
  JsonObject as x,
  min as xi,
  formatUrlHostString as xn,
  transformEffect$1 as xr,
  decodeUnknownOption as xt,
  Int as y,
  makeUnsafe as yi,
  withDecodingDefaultKey as yn,
  stringifyJson as yr,
  decodeUnknownEffect as yt,
  SchemaError as z,
  TaggedError$1 as zi,
  _is as zn,
  fromInput$1 as zr,
  isInt32 as zt,
};

//# sourceMappingURL=Schema-CNU5AVWm.mjs.map
