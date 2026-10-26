#!/usr/bin/env node

// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Pipeable.js
/**
 * The `Pipeable` module defines the shared interface and implementation helpers
 * for values that support Effect-style method chaining with `.pipe(...)`.
 *
 * A `Pipeable` value can pass itself through a sequence of unary functions from
 * left to right, so code can be written as `value.pipe(f, g, h)` instead of
 * deeply nesting calls. This is the method form used by many Effect data types
 * to compose transformations, validations, and effectful operations while
 * keeping the original value as the starting point of the pipeline.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Applies a `pipe` method's variadic arguments to an initial value from left
 * to right.
 *
 * **When to use**
 *
 * Use to implement a custom `.pipe(...)` method from JavaScript's `arguments`
 * object.
 *
 * **Details**
 *
 * This helper is intended for implementing `Pipeable.pipe` methods that
 * receive JavaScript's `arguments` object. With no functions it returns the
 * original value; otherwise it feeds each result into the next function.
 *
 * **Example** (Implementing a pipe method)
 *
 * ```ts import.meta.vitest
 * import { Pipeable } from "effect"
 *
 * class NumberBox {
 *   constructor(readonly value: number) {}
 *
 *   pipe(..._fns: ReadonlyArray<(value: number) => number>): number {
 *     return Pipeable.pipeArguments(this.value, arguments) as number
 *   }
 * }
 *
 * const result = new NumberBox(5).pipe(
 *   (n) => n + 2,
 *   (n) => n * 3
 * )
 * result // => 21
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const pipeArguments = (self, args) => {
  switch (args.length) {
    case 0:
      return self;
    case 1:
      return args[0](self);
    case 2:
      return args[1](args[0](self));
    case 3:
      return args[2](args[1](args[0](self)));
    case 4:
      return args[3](args[2](args[1](args[0](self))));
    case 5:
      return args[4](args[3](args[2](args[1](args[0](self)))));
    case 6:
      return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
    case 7:
      return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
    case 8:
      return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
    case 9:
      return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
    default: {
      let ret = self;
      for (let i = 0, len = args.length; i < len; i++) ret = args[i](ret);
      return ret;
    }
  }
};
/**
 * Reusable prototype that implements `Pipeable.pipe`.
 *
 * **When to use**
 *
 * Use when classes or object prototypes can reuse this value when they need the
 * standard pipe implementation backed by `pipeArguments`.
 *
 * @stability stable
 * @category prototypes
 * @since 3.15.0
 */
const Prototype$1 = {
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Provides a base constructor whose instances implement the standard `Pipeable.pipe`
 * method.
 *
 * **When to use**
 *
 * Use when you need to define a class that supports Effect-style method
 * chaining through `.pipe(...)`.
 *
 * @stability stable
 * @category constructors
 * @since 3.15.0
 */
const Class$1 = /*#__PURE__*/ (function () {
  function PipeableBase() {}
  PipeableBase.prototype = Prototype$1;
  return PipeableBase;
})();
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Function.js
/**
 * Creates a function that can be called in data-first style or data-last
 * (`pipe`-friendly) style.
 *
 * **When to use**
 *
 * Use to expose one implementation through both direct and `pipe`-friendly
 * call styles.
 *
 * **Details**
 *
 * Pass either the arity of the uncurried function or a predicate that decides
 * whether the current call is data-first. Arity is the common case. Use a
 * predicate when optional arguments make arity ambiguous.
 *
 * **Example** (Selecting data-first or data-last style by arity)
 *
 * ```ts import.meta.vitest
 * import { Function, pipe } from "effect"
 *
 * const sum = Function.dual<
 *   (that: number) => (self: number) => number,
 *   (self: number, that: number) => number
 * >(2, (self, that) => self + that)
 *
 * sum(2, 3) // => 5
 * pipe(2, sum(3)) // => 5
 * ```
 *
 * **Example** (Defining overloads with call signatures)
 *
 * ```ts import.meta.vitest
 * import { Function, pipe } from "effect"
 *
 * const sum: {
 *   (that: number): (self: number) => number
 *   (self: number, that: number): number
 * } = Function.dual(2, (self: number, that: number): number => self + that)
 *
 * sum(2, 3) // => 5
 * pipe(2, sum(3)) // => 5
 * ```
 *
 * **Example** (Selecting data-first or data-last style with a predicate)
 *
 * ```ts import.meta.vitest
 * import { Function, pipe } from "effect"
 *
 * const sum = Function.dual<
 *   (that: number) => (self: number) => number,
 *   (self: number, that: number) => number
 * >(
 *   (args) => args.length === 2,
 *   (self, that) => self + that
 * )
 *
 * sum(2, 3) // => 5
 * pipe(2, sum(3)) // => 5
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const dual = function (arity, body) {
  if (typeof arity === "function")
    return function () {
      return arity(arguments) ? body.apply(this, arguments) : (self) => body(self, ...arguments);
    };
  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);
    case 2:
      return function (a, b) {
        if (arguments.length >= 2) return body(a, b);
        return function (self) {
          return body(self, a);
        };
      };
    case 3:
      return function (a, b, c) {
        if (arguments.length >= 3) return body(a, b, c);
        return function (self) {
          return body(self, a, b);
        };
      };
    default:
      return function () {
        if (arguments.length >= arity) return body.apply(this, arguments);
        const args = arguments;
        return function (self) {
          return body(self, ...args);
        };
      };
  }
};
/**
 * Returns its input argument unchanged.
 *
 * **When to use**
 *
 * Use to return a value unchanged where a function is required.
 *
 * **Example** (Returning the same value)
 *
 * ```ts import.meta.vitest
 * import { identity } from "effect"
 *
 * identity(5) // => 5
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const identity = (a) => a;
/**
 * Returns the input value with a different static type.
 *
 * **When to use**
 *
 * Use when you need an explicit type-level cast and accept that the value is
 * returned unchanged at runtime.
 *
 * **Gotchas**
 *
 * This is a type-level cast only; it performs no runtime validation or
 * conversion.
 *
 * @see {@link satisfies} for checking assignability without changing the resulting type
 *
 * @stability stable
 * @category utility types
 * @since 4.0.0
 */
const cast = identity;
/**
 * Creates a zero-argument function that always returns the provided value.
 *
 * **When to use**
 *
 * Use when you need a thunk or callback that returns the same value on every
 * invocation.
 *
 * **Example** (Creating a constant thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * const constNull = Function.constant(null)
 *
 * constNull() // => null
 * constNull() // => null
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const constant = (value) => () => value;
/**
 * Returns `true` when called.
 *
 * **When to use**
 *
 * Use when you need a thunk that returns `true` on every invocation.
 *
 * **Example** (Returning true from a thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * Function.constTrue() // => true
 * ```
 *
 * @stability stable
 * @category constants
 * @since 2.0.0
 */
const constTrue = /*#__PURE__*/ constant(true);
/**
 * Returns `false` when called.
 *
 * **When to use**
 *
 * Use when you need a thunk that returns `false` on every invocation.
 *
 * **Example** (Returning false from a thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * Function.constFalse() // => false
 * ```
 *
 * @stability stable
 * @category constants
 * @since 2.0.0
 */
const constFalse = /*#__PURE__*/ constant(false);
/**
 * Returns `null` when called.
 *
 * **When to use**
 *
 * Use when you need a thunk that returns `null` on every invocation.
 *
 * **Example** (Returning null from a thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * Function.constNull() // => null
 * ```
 *
 * @stability stable
 * @category constants
 * @since 2.0.0
 */
const constNull = /*#__PURE__*/ constant(null);
/**
 * Returns `undefined` when called.
 *
 * **When to use**
 *
 * Use when you need a thunk that returns `undefined` on every invocation.
 *
 * **Example** (Returning undefined from a thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * Function.constUndefined() // => undefined
 * ```
 *
 * @stability stable
 * @category constants
 * @since 2.0.0
 */
const constUndefined = /*#__PURE__*/ constant(void 0);
/**
 * Returns no meaningful value when called.
 *
 * **When to use**
 *
 * Use when you need a thunk that is called only for its effect and has no
 * meaningful return value.
 *
 * **Example** (Returning void from a thunk)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * Function.constVoid() // => undefined
 * ```
 *
 * @stability stable
 * @category constants
 * @since 2.0.0
 */
const constVoid = constUndefined;
/**
 * Composes two functions, `ab` and `bc` into a single function that takes in an argument `a` of type `A` and returns a result of type `C`.
 * The result is obtained by first applying the `ab` function to `a` and then applying the `bc` function to the result of `ab`.
 *
 * **When to use**
 *
 * Use to compose exactly two unary functions into a reusable unary function.
 *
 * **Example** (Composing two functions)
 *
 * ```ts import.meta.vitest
 * import { Function } from "effect"
 *
 * const increment = (n: number) => n + 1
 * const square = (n: number) => n * n
 *
 * Function.compose(increment, square)(2) // => 9
 * ```
 *
 * @see {@link flow} for composing a left-to-right sequence of functions
 * @see {@link pipe} for applying a value through a left-to-right sequence immediately
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const compose$2 = /*#__PURE__*/ dual(2, (ab, bc) => (a) => bc(ab(a)));
function pipe(a, ...args) {
  return pipeArguments(a, args);
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function () {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function () {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function () {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function () {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function () {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function () {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function () {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function () {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
}
/**
 * Creates a memoized function whose input is an object, caching results by
 * object identity.
 *
 * **When to use**
 *
 * Use to reuse the result of a synchronous computation whose output is stable
 * for a given object reference.
 *
 * **Details**
 *
 * Each memoized wrapper owns a private `WeakMap` keyed by object identity.
 *
 * **Gotchas**
 *
 * `undefined` is reserved to represent a cache miss and is therefore not
 * supported as a return value.
 *
 * Structurally equal objects do not share cache entries. If the same object is
 * mutated after its first call, later calls still return the cached result for
 * that reference.
 *
 * @stability stable
 * @category caching
 * @since 4.0.0
 */
function memoize(f) {
  const cache = /* @__PURE__ */ new WeakMap();
  return (a) => {
    const cached = cache.get(a);
    if (cached !== void 0) return cached;
    const result = f(a);
    cache.set(a, result);
    return result;
  };
}
/**
 * Creates a memoized idempotent object transformation that caches both inputs
 * and their outputs by object identity.
 *
 * **When to use**
 *
 * Use when an object transformation is idempotent and its output can be safely
 * reused as a fixed point.
 *
 * **Details**
 *
 * After computing an input, the returned function caches both the input and
 * the output. Calling it with either reference returns the output without
 * invoking the supplied function again.
 *
 * **Gotchas**
 *
 * The returned function treats each computed output as a fixed point. If
 * applying the supplied function to an output would produce an observably
 * different value, this memoization changes that behavior.
 *
 * @see {@link memoize} for memoizing functions without an idempotence requirement
 * @stability stable
 * @category caching
 * @since 4.0.0
 */
function memoizeIdempotent(f) {
  const cache = /* @__PURE__ */ new WeakMap();
  return (a) => {
    const cached = cache.get(a);
    if (cached !== void 0) return cached;
    const result = f(a);
    cache.set(a, result);
    if (result !== a) cache.set(result, result);
    return result;
  };
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/equal.js
/** @internal */
const getAllObjectKeys = (obj) => {
  const keys = new Set(Reflect.ownKeys(obj));
  if (obj.constructor === Object) return keys;
  if (obj instanceof Error) keys.delete("stack");
  const proto = Object.getPrototypeOf(obj);
  let current = proto;
  while (current !== null && current !== Object.prototype) {
    const ownKeys = Reflect.ownKeys(current);
    for (let i = 0; i < ownKeys.length; i++) keys.add(ownKeys[i]);
    current = Object.getPrototypeOf(current);
  }
  if (
    keys.has("constructor") &&
    typeof obj.constructor === "function" &&
    proto === obj.constructor.prototype
  )
    keys.delete("constructor");
  return keys;
};
/** @internal */
const byReferenceInstances = /*#__PURE__*/ new WeakSet();
/** @internal */
const viewBytes = (view) => new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/hash.js
/**
 * Back-edge count used to avoid caching entry-point-dependent hashes.
 *
 * @internal
 */
let backEdges = 0;
/** @internal */
const addBackEdge = () => {
  backEdges++;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Predicate.js
/**
 * Defines runtime checks for values.
 *
 * A `Predicate<A>` returns `true` or `false` for an `A`. A
 * `Refinement<A, B>` is a predicate that also narrows the TypeScript type when
 * it succeeds. This module includes guards for common JavaScript values,
 * property and tag checks, tuple and struct checks, boolean combinators, and
 * helpers for composing predicates and refinements.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Checks whether a value is a `string`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * string.
 *
 * **Details**
 *
 * Uses `typeof input === "string"`.
 *
 * **Example** (Guarding strings)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = "hi"
 *
 * if (Predicate.isString(data)) {
 *   data.toUpperCase() // => "HI"
 * }
 * ```
 *
 * @see {@link isNumber}
 * @see {@link isBoolean}
 * @see {@link Refinement}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isString(input) {
  return typeof input === "string";
}
/**
 * Checks whether a value is a `number`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * number.
 *
 * **Details**
 *
 * Uses `typeof input === "number"` and does not exclude `NaN` or `Infinity`.
 *
 * **Example** (Guarding numbers)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = 42
 *
 * if (Predicate.isNumber(data)) {
 *   data + 1 // => 43
 * }
 * ```
 *
 * @see {@link isBigInt}
 * @see {@link isString}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isNumber(input) {
  return typeof input === "number";
}
/**
 * Checks whether a value is a `boolean`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * boolean.
 *
 * **Details**
 *
 * Uses `typeof input === "boolean"`.
 *
 * **Example** (Guarding booleans)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = true
 *
 * if (Predicate.isBoolean(data)) {
 *   data ? "yes" : "no" // => "yes"
 * }
 * ```
 *
 * @see {@link isString}
 * @see {@link isNumber}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isBoolean(input) {
  return typeof input === "boolean";
}
/**
 * Checks whether a value is a `bigint`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * bigint.
 *
 * **Details**
 *
 * Uses `typeof input === "bigint"`.
 *
 * **Example** (Guarding bigints)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = 1n
 *
 * if (Predicate.isBigInt(data)) {
 *   data + 2n // => 3n
 * }
 * ```
 *
 * @see {@link isNumber}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isBigInt(input) {
  return typeof input === "bigint";
}
/**
 * Checks whether a value is a `symbol`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * symbol.
 *
 * **Details**
 *
 * Uses `typeof input === "symbol"`.
 *
 * **Example** (Guarding symbols)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = Symbol.for("id")
 *
 * if (Predicate.isSymbol(data)) {
 *   data.description // => "id"
 * }
 * ```
 *
 * @see {@link isPropertyKey}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isSymbol(input) {
  return typeof input === "symbol";
}
/**
 * Checks whether a value is a valid `PropertyKey` (string, number, or symbol).
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard for unknown property keys before
 * indexing.
 *
 * **Details**
 *
 * Uses `isString`, `isNumber`, and `isSymbol`.
 *
 * **Example** (Guarding property keys)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const key: unknown = "name"
 * const obj: Record<PropertyKey, unknown> = { name: "Ada" }
 *
 * if (Predicate.isPropertyKey(key) && key in obj) {
 *   obj[key] // => "Ada"
 * }
 * ```
 *
 * @see {@link isString}
 * @see {@link isNumber}
 * @see {@link isSymbol}
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isPropertyKey(u) {
  return isString(u) || isNumber(u) || isSymbol(u);
}
/**
 * Checks whether a value is a `function`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard to narrow an `unknown` value to a
 * callable function.
 *
 * **Details**
 *
 * Uses `typeof input === "function"`.
 *
 * **Example** (Guarding functions)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = () => 1
 *
 * if (Predicate.isFunction(data)) {
 *   data() // => 1
 * }
 * ```
 *
 * @see {@link isObjectKeyword}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isFunction(input) {
  return typeof input === "function";
}
/**
 * Checks whether a value is `undefined`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard for values that are exactly
 * `undefined`.
 *
 * **Details**
 *
 * Uses `input === undefined`.
 *
 * **Example** (Guarding undefined values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = undefined
 *
 * Predicate.isUndefined(data) // => true
 * ```
 *
 * @see {@link isNotUndefined}
 * @see {@link isNullish}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isUndefined(input) {
  return input === void 0;
}
/**
 * Checks whether a value is not `undefined`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` refinement that filters out `undefined`
 * while preserving other falsy values.
 *
 * **Details**
 *
 * Returns a refinement that excludes `undefined`.
 *
 * **Example** (Filtering undefined values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const values = [1, undefined, 2]
 * const defined = values.filter(Predicate.isNotUndefined) // => [1, 2]
 * ```
 *
 * @see {@link isUndefined}
 * @see {@link isNotNullish}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isNotUndefined(input) {
  return input !== void 0;
}
/**
 * Checks whether a value is not `null`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` refinement that filters out `null` while
 * preserving other falsy values.
 *
 * **Details**
 *
 * Returns a refinement that excludes `null`.
 *
 * **Example** (Filtering null values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const values = [1, null, 2]
 * const nonNull = values.filter(Predicate.isNotNull) // => [1, 2]
 * ```
 *
 * @see {@link isNull}
 * @see {@link isNotNullish}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isNotNull(input) {
  return input !== null;
}
/**
 * Checks whether a value is `null` or `undefined`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard for nullish values.
 *
 * **Details**
 *
 * Uses `input === null || input === undefined`.
 *
 * **Example** (Guarding nullish values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const values = [0, null, "", undefined]
 * const nullish = values.filter(Predicate.isNullish) // => [null, undefined]
 * ```
 *
 * @see {@link isNotNullish}
 * @see {@link isUndefined}
 * @see {@link isNull}
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isNullish(input) {
  return input === null || input === void 0;
}
/**
 * Checks whether a value is not `null` and not `undefined`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` refinement that filters out nullish values
 * but keeps other falsy ones.
 *
 * **Details**
 *
 * Uses `input != null`.
 *
 * **Example** (Filtering non-nullish values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const values = [0, null, "", undefined]
 * const present = values.filter(Predicate.isNotNullish) // => [0, ""]
 * ```
 *
 * @see {@link isNullish}
 * @see {@link isNotNull}
 * @see {@link isNotUndefined}
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isNotNullish(input) {
  return input != null;
}
/**
 * Type guard that always returns `false`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` that never accepts, e.g. in default branches.
 *
 * **Example** (Matching no values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * Predicate.isNever("anything") // => false
 * ```
 *
 * @see {@link isUnknown}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isNever(_) {
  return false;
}
/**
 * Type guard that always returns `true`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` that always accepts, e.g. as a placeholder.
 *
 * **Example** (Matching every value)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * Predicate.isUnknown(123) // => true
 * ```
 *
 * @see {@link isNever}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isUnknown(_) {
  return true;
}
/**
 * Checks whether a value is a non-null object value that is not an array.
 *
 * **When to use**
 *
 * Use to narrow unknown input to a non-null, non-array object with a
 * `Predicate` guard.
 *
 * **Details**
 *
 * This is a structural runtime check using `typeof input === "object"`, so it
 * also accepts object instances such as `Date`, `Map`, class instances, and
 * typed arrays. It excludes `null` and arrays.
 *
 * **Example** (Guarding objects)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * Predicate.isObject({ a: 1 }) // => true
 * Predicate.isObject([1, 2]) // => false
 * ```
 *
 * @see {@link isObjectOrArray}
 * @see {@link isReadonlyObject}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isObject(input) {
  return typeof input === "object" && input !== null && !Array.isArray(input);
}
/**
 * Checks whether a value is a non-null, non-array object and narrows it to a
 * readonly indexable object type.
 *
 * **When to use**
 *
 * Use to narrow unknown input to a readonly view of a non-null, non-array
 * object with a `Predicate` guard.
 *
 * **Details**
 *
 * Readonly-ness is a TypeScript type-level view; it is not observable at
 * runtime. This delegates to `isObject`, so class instances and built-in object
 * instances are accepted.
 *
 * **Example** (Checking readonly objects)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = { a: 1 }
 *
 * Predicate.isReadonlyObject(data) // => true
 * ```
 *
 * @see {@link isObject}
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isReadonlyObject(input) {
  return isObject(input);
}
/**
 * Checks whether a value is an `object` in the JavaScript sense (objects, arrays, functions).
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard that accepts arrays and functions as
 * well as objects.
 *
 * **Details**
 *
 * Returns `true` for arrays and functions, and `false` for `null`.
 *
 * **Example** (Checking object keywords)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * Predicate.isObjectKeyword(() => 1) // => true
 * Predicate.isObjectKeyword(null) // => false
 * ```
 *
 * @see {@link isObject}
 * @see {@link isObjectOrArray}
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
function isObjectKeyword(input) {
  return (typeof input === "object" && input !== null) || isFunction(input);
}
/**
 * Checks whether a value has a given property key.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard for property access on `unknown`
 * values with a simple structural object check.
 *
 * **Details**
 *
 * Uses the `in` operator and `isObjectKeyword`. This does not check property
 * value types.
 *
 * **Example** (Guarding object properties)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const hasName = Predicate.hasProperty("name")
 * const data: unknown = { name: "Ada" }
 *
 * if (hasName(data)) {
 *   data.name // => "Ada"
 * }
 * ```
 *
 * @see {@link isTagged}
 * @see {@link isObjectKeyword}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const hasProperty = /*#__PURE__*/ dual(
  2,
  (self, property) => isObjectKeyword(self) && property in self,
);
/**
 * Checks whether a value has a `_tag` property equal to the given tag.
 *
 * **When to use**
 *
 * Use when you model tagged unions with a `_tag` field and want a quick
 * `Predicate` guard for tagged values.
 *
 * **Details**
 *
 * Uses `hasProperty` and strict equality on `_tag`.
 *
 * **Example** (Guarding tagged values)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const isOk = Predicate.isTagged("Ok")
 *
 * isOk({ _tag: "Ok", value: 1 }) // => true
 * ```
 *
 * @see {@link hasProperty}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isTagged = /*#__PURE__*/ dual(
  2,
  (self, tag) => hasProperty(self, "_tag") && self["_tag"] === tag,
);
/**
 * Checks whether a value is an `Error`.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard for errors caught from unknown sources.
 *
 * **Details**
 *
 * Uses `instanceof Error`.
 *
 * **Example** (Guarding errors)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = new Error("boom")
 *
 * Predicate.isError(data) // => true
 * ```
 *
 * @see {@link isUnknown}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isError(input) {
  return input instanceof Error;
}
/**
 * Checks whether a value is iterable.
 *
 * **When to use**
 *
 * Use when you need a `Predicate` guard before iterating an unknown value.
 *
 * **Details**
 *
 * Accepts strings as iterable and uses `hasProperty` for `Symbol.iterator`.
 *
 * **Example** (Guarding iterables)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const data: unknown = [1, 2, 3]
 *
 * Predicate.isIterable(data) // => true
 * ```
 *
 * @see {@link isSet}
 * @see {@link isMap}
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
function isIterable(input) {
  return hasProperty(input, Symbol.iterator) || isString(input);
}
/**
 * Composes two predicates or refinements into one.
 *
 * **When to use**
 *
 * Use when you want to compose two `Predicate` checks in sequence, especially
 * when chaining refinements for progressive narrowing.
 *
 * **Details**
 *
 * For refinements, the output type is narrowed by both checks. Evaluation
 * short-circuits on the first `false`.
 *
 * **Example** (Composing refinements)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const isNumber: Predicate.Refinement<unknown, number> = (u): u is number => typeof u === "number"
 * const isInteger: Predicate.Refinement<number, number> = (n): n is number => Number.isInteger(n)
 *
 * const isIntegerNumber = Predicate.compose(isNumber, isInteger)
 *
 * isIntegerNumber(1) // => true
 * ```
 *
 * @see {@link and}
 * @see {@link Refinement}
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const compose$1 = /*#__PURE__*/ dual(2, (ab, bc) => (a) => ab(a) && bc(a));
/**
 * Creates a predicate that returns `true` if either predicate is `true`.
 *
 * **When to use**
 *
 * Use when you want to combine `Predicate`s with OR, accepting values that
 * satisfy at least one condition, including refinements that narrow to a union.
 *
 * **Details**
 *
 * Evaluation short-circuits on the first `true`. For refinements, the output
 * type is a union.
 *
 * **Example** (Checking either condition)
 *
 * ```ts import.meta.vitest
 * import { Predicate } from "effect"
 *
 * const isStringOrNumber = Predicate.or(Predicate.isString, Predicate.isNumber)
 *
 * isStringOrNumber("a") // => true
 * ```
 *
 * @see {@link and}
 * @see {@link xor}
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const or = /*#__PURE__*/ dual(2, (self, that) => (a) => self(a) || that(a));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Hash.js
/**
 * Computes Effect hash values and defines the interface for objects that want
 * to provide their own hash implementation. Hashes are small numeric
 * fingerprints used by Effect data structures to bucket values quickly; they
 * are not cryptographic digests and they are not proof that two values are
 * equal. The module also includes helpers for primitive, structure, array, and
 * reference-based hashes, plus functions for combining and optimizing numeric
 * hash values.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Defines the unique identifier used to identify objects that implement the Hash interface.
 *
 * **When to use**
 *
 * Use as the computed property key for the method that supplies a custom hash
 * value on a `Hash` implementor.
 *
 * @see {@link Hash} for the interface implemented with this symbol
 * @see {@link isHash} for checking whether a value implements `Hash`
 * @see {@link hash} for computing hash values
 *
 * @stability stable
 * @category symbols
 * @since 2.0.0
 */
const symbol$1 = "~effect/Hash";
/**
 * Computes a hash value for any given value.
 *
 * **When to use**
 *
 * Use to compute an Effect hash for primitives, collections, and hashable
 * objects.
 *
 * **Details**
 *
 * This function can hash primitives (numbers, strings, booleans, etc.) as well as
 * objects, arrays, and other complex data structures. It automatically handles
 * different types and provides a consistent hash value for equivalent inputs.
 *
 * **Gotchas**
 *
 * Objects being hashed must be treated as immutable after their first hash
 * computation. Hash results are cached, so mutating an object after hashing will
 * lead to stale cached values and broken hash-based operations. For mutable
 * objects, implement a custom `Hash` interface that hashes the object reference
 * rather than its content.
 *
 * **Example** (Hashing different values)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * Hash.hash(42) === Hash.hash(42) // => true
 * Hash.hash("hello") === Hash.hash("hello") // => true
 * Hash.hash([1, 2, 3]) === Hash.hash([1, 2, 3]) // => true
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const hash = (self) => {
  switch (typeof self) {
    case "number":
      return number(self);
    case "bigint":
      return string(self.toString(10));
    case "string":
      return string(self);
    case "function":
    case "object":
      if (self === null) break;
      else if (self instanceof Date) {
        if (Number.isNaN(self.getTime())) return string("Invalid Date");
        return string(self.toISOString());
      } else if (self instanceof RegExp) return string(self.toString());
      else {
        if (byReferenceInstances.has(self)) return random$1(self);
        const cached = hashCache.get(self);
        if (cached !== void 0) return cached;
        if (visitedObjects.has(self)) {
          addBackEdge();
          return string("[Circular]");
        }
        visitedObjects.add(self);
        const seen = backEdges;
        let h;
        try {
          if ("~effect/Hash" in self) h = self[symbol$1]();
          else if (typeof self === "function") h = random$1(self);
          else if (self instanceof DataView) h = array(viewBytes(self));
          else if (Array.isArray(self) || ArrayBuffer.isView(self)) h = array(self);
          else if (self instanceof Map) h = hashMap(self);
          else if (self instanceof Set) h = hashSet(self);
          else h = structure(self);
        } finally {
          visitedObjects.delete(self);
        }
        if (seen === backEdges) hashCache.set(self, h);
        return h;
      }
  }
  return optimize(mix(string(String(self))));
};
/**
 * Generates a random hash value for an object and caches it.
 *
 * **When to use**
 *
 * Use to hash an object by reference identity instead of structural content.
 *
 * **Details**
 *
 * This function creates a random hash value for objects that don't have their own
 * hash implementation. The hash value is cached using a WeakMap, so the same object
 * will always return the same hash value during its lifetime.
 *
 * **Example** (Hashing objects by reference)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * const obj1 = { a: 1 }
 * const obj2 = { a: 1 }
 *
 * Hash.random(obj1) === Hash.random(obj1) // => true
 *
 * typeof Hash.random(obj2) // => "number"
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const random$1 = (self) => {
  if (!randomHashCache.has(self))
    randomHashCache.set(self, optimize((Math.random() * 4294967296) | 0));
  return randomHashCache.get(self);
};
const mix = (h) => {
  h ^= h >>> 16;
  h = Math.imul(h, 2246822507);
  h ^= h >>> 13;
  h = Math.imul(h, 3266489909);
  return h ^ (h >>> 16);
};
/**
 * Combines two hash values into a single hash value.
 *
 * **When to use**
 *
 * Use to build a hash for a composite value by folding together hash values for
 * its parts.
 *
 * **Details**
 *
 * Supports direct and pipeable usage. Argument order affects the result.
 *
 * **Example** (Combining hash values)
 *
 * ```ts import.meta.vitest
 * import { Hash, pipe } from "effect"
 *
 * const hash1 = Hash.hash("hello")
 * const hash2 = Hash.hash("world")
 *
 * const combined = Hash.combine(hash2)(hash1)
 * combined === pipe(hash1, Hash.combine(hash2)) // => true
 * ```
 *
 * @see {@link hash} for computing hash values from arbitrary inputs
 * @see {@link structureKeys} for hashing selected object fields without manual combination
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const combine$1 = /*#__PURE__*/ dual(2, (self, b) =>
  mix(Math.imul(self, 2654435761) + Math.imul(b, 2246822507)),
);
/**
 * Applies bit manipulation techniques to optimize a hash value.
 *
 * **When to use**
 *
 * Use to improve the bit distribution of a raw numeric hash value.
 *
 * **Details**
 *
 * This function takes a hash value and applies bitwise operations to improve
 * the distribution of hash values, reducing the likelihood of collisions.
 *
 * **Example** (Optimizing a hash value)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * Hash.optimize(1234567890) // => 160826066
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const optimize = (n) => (n & 3221225471) | ((n >>> 1) & 1073741824);
const float64 = /*#__PURE__*/ new DataView(/*#__PURE__*/ new ArrayBuffer(8));
/**
 * Computes a hash value for a number.
 *
 * **When to use**
 *
 * Use to hash a JavaScript number with Effect's numeric hash semantics.
 *
 * **Details**
 *
 * Int32 values hash to themselves. Other numbers hash from their IEEE-754 bits,
 * with a canonical representation for `NaN`.
 *
 * **Example** (Hashing numbers)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * Number.isInteger(Hash.number(42)) // => true
 * Number.isInteger(Hash.number(3.14)) // => true
 * Hash.number(NaN) === Hash.number(NaN) // => true
 * Hash.number(Infinity) === Hash.number(Infinity) // => true
 * Hash.number(100) === Hash.number(100) // => true
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const number = (n) => {
  const h = n | 0;
  if (h === n) return optimize(h);
  float64.setFloat64(0, n !== n ? NaN : n);
  return optimize(combine$1(float64.getInt32(0), float64.getInt32(4)));
};
/**
 * Computes a hash value for a string using the djb2 algorithm.
 *
 * **When to use**
 *
 * Use when you need a string field to contribute to a custom structural hash
 * implementation.
 *
 * **Details**
 *
 * This function implements a variation of the djb2 hash algorithm, which is
 * known for its good distribution properties and speed. It processes each
 * character of the string to produce a consistent hash value.
 *
 * **Example** (Hashing strings)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * Hash.string("hello") // => 181380007
 * Hash.string("world") // => 164394279
 * Hash.string("") // => 5381
 * Hash.string("test") === Hash.string("test") // => true
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const string = (str) => {
  let h = 5381,
    i = str.length;
  while (i) h = (h * 33) ^ str.charCodeAt(--i);
  return optimize(h);
};
/**
 * Computes a hash value for an object using only the specified keys.
 *
 * **When to use**
 *
 * Use to hash an object by a selected set of property keys.
 *
 * **Details**
 *
 * This function allows you to hash an object by considering only specific keys,
 * which is useful when you want to create a hash based on a subset of an object's
 * properties.
 *
 * **Example** (Hashing selected object keys)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * const person = { name: "John", age: 30, city: "New York" }
 *
 * const hash1 = Hash.structureKeys(person, ["name", "age"])
 * const hash2 = Hash.structureKeys(person, ["name", "city"])
 *
 * hash1 // => -731887653
 * hash2 // => 148523102
 *
 * const person2 = { name: "John", age: 30, city: "Boston" }
 * const hash3 = Hash.structureKeys(person2, ["name", "age"])
 * hash1 === hash3 // => true
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const structureKeys = (o, keys) => {
  let h = 12289;
  for (const key of keys) h ^= combine$1(hash(key), hash(o[key]));
  return optimize(h);
};
/**
 * Computes a structural hash for an object using Effect's object key collection.
 *
 * **When to use**
 *
 * Use to hash an object from all structural keys collected by Effect.
 *
 * **Details**
 *
 * The hash is based on the object's structural keys and their values, including
 * symbol keys and relevant prototype keys for non-plain objects.
 *
 * **Example** (Hashing object structures)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * const obj1 = { name: "John", age: 30 }
 * const obj2 = { name: "Jane", age: 25 }
 * const obj3 = { name: "John", age: 30 }
 *
 * Hash.structure(obj1) // => -731887653
 * Hash.structure(obj2) // => -222100417
 * Hash.structure(obj3) // => -731887653
 * Hash.structure(obj1) === Hash.structure(obj3) // => true
 * ```
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const structure = (o) => structureKeys(o, getAllObjectKeys(o));
const unordered = (seed, f) => (iter) => {
  let h = seed;
  for (const element of iter) h ^= f(element);
  return optimize(h);
};
/**
 * Computes a hash value for an iterable by hashing all of its elements.
 *
 * **When to use**
 *
 * Use to hash the values yielded by an iterable with Effect hash semantics.
 *
 * **Details**
 *
 * Folds element hashes with {@link combine}, so order and length affect the
 * result.
 *
 * **Gotchas**
 *
 * A hash is not an equality proof. Distinct inputs can still share a hash.
 *
 * **Example** (Hashing arrays)
 *
 * ```ts import.meta.vitest
 * import { Hash } from "effect"
 *
 * const arr1 = [1, 2, 3]
 * const arr2 = [1, 2, 3]
 * const arr3 = [3, 2, 1]
 *
 * Hash.array(arr1) === Hash.array(arr2) // => true
 * Hash.array(arr1) === Hash.array(arr3) // => false
 * ```
 *
 * @see {@link hash} for the general-purpose hash dispatcher
 *
 * @stability stable
 * @category hashing
 * @since 2.0.0
 */
const array = (arr) => {
  let h = 6151;
  for (const element of arr) h = combine$1(h, hash(element));
  return optimize(h);
};
const hashMap = /*#__PURE__*/ unordered(/*#__PURE__*/ string("Map"), ([k, v]) =>
  combine$1(hash(k), hash(v)),
);
const setSeed = /*#__PURE__*/ string("Set");
const hashSet = /*#__PURE__*/ unordered(setSeed, (element) => combine$1(setSeed, hash(element)));
const randomHashCache = /*#__PURE__*/ new WeakMap();
const hashCache = /*#__PURE__*/ new WeakMap();
const visitedObjects = /*#__PURE__*/ new WeakSet();
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Equal.js
/**
 * Defines the unique string identifier for the `Equal` interface.
 *
 * **When to use**
 *
 * Use when you implement custom equality and need the computed property key for
 * the equality method.
 *
 * **Details**
 *
 * This is a pure constant with no allocation or side effects.
 *
 * **Example** (Implementing Equal on a class)
 *
 * ```ts import.meta.vitest
 * import { Equal, Hash } from "effect"
 *
 * class UserId implements Equal.Equal {
 *   constructor(readonly id: string) {}
 *
 *   [Equal.symbol](that: Equal.Equal): boolean {
 *     return that instanceof UserId && this.id === that.id
 *   }
 *
 *   [Hash.symbol](): number {
 *     return Hash.string(this.id)
 *   }
 * }
 *
 * Equal.equals(new UserId("1"), new UserId("1")) // => true
 * Equal.equals(new UserId("1"), new UserId("2")) // => false
 * ```
 *
 * @see {@link Equal} — the interface that uses this symbol
 * @see {@link isEqual} — type guard for `Equal` implementors
 * @stability stable
 * @category symbols
 * @since 2.0.0
 */
const symbol = "~effect/Equal";
function equals$1() {
  if (arguments.length === 1) return (self) => compareBoth(self, arguments[0]);
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
  if (self === that) return true;
  if (self == null || that == null) return false;
  const selfType = typeof self;
  if (selfType !== typeof that) return false;
  if (selfType === "number" && self !== self && that !== that) return true;
  if (selfType !== "object" && selfType !== "function") return false;
  if (byReferenceInstances.has(self) || byReferenceInstances.has(that)) return false;
  return compareObjects(self, that);
}
function compareObjects(self, that) {
  const depth = pathLeft.length;
  for (let i = depth; i-- > 0;) if (pathLeft[i] === self && pathRight[i] === that) return true;
  if (depth) return compareOnPath(self, that);
  let known = results.get(self);
  if (!known) results.set(self, (known = /* @__PURE__ */ new WeakMap()));
  let result = known.get(that);
  if (result === void 0) known.set(that, (result = compareOnPath(self, that)));
  return result;
}
function compareOnPath(self, that) {
  pathLeft.push(self);
  pathRight.push(that);
  try {
    return compareStructure(self, that);
  } finally {
    pathLeft.pop();
    pathRight.pop();
  }
}
const pathLeft = [];
const pathRight = [];
const results = /*#__PURE__*/ new WeakMap();
function compareStructure(self, that) {
  if (hash(self) !== hash(that)) return false;
  else if (self instanceof Date) {
    if (!(that instanceof Date)) return false;
    const selfTime = self.getTime();
    const thatTime = that.getTime();
    return selfTime === thatTime || (Number.isNaN(selfTime) && Number.isNaN(thatTime));
  } else if (self instanceof RegExp)
    return that instanceof RegExp && self.toString() === that.toString();
  const bothEquals = isEqual(self);
  if (bothEquals !== isEqual(that) || (typeof self === "function" && !bothEquals)) return false;
  else if (bothEquals) return self[symbol](that);
  else if (Array.isArray(self)) {
    if (!Array.isArray(that) || self.length !== that.length) return false;
    return compareArrays(self, that);
  } else if (ArrayBuffer.isView(self)) {
    const selfIsDataView = self instanceof DataView;
    if (
      !ArrayBuffer.isView(that) ||
      self.byteLength !== that.byteLength ||
      selfIsDataView !== that instanceof DataView
    )
      return false;
    if (selfIsDataView) return compareTypedArrays(viewBytes(self), viewBytes(that));
    return compareTypedArrays(self, that);
  } else if (self instanceof Map) {
    if (!(that instanceof Map) || self.size !== that.size) return false;
    return compareHashed(self, that, entryHash, equalEntries);
  } else if (self instanceof Set) {
    if (!(that instanceof Set) || self.size !== that.size) return false;
    return compareHashed(self, that, hash, compareBoth);
  }
  return compareRecords(self, that);
}
function compareArrays(self, that) {
  for (let i = 0; i < self.length; i++) if (!compareBoth(self[i], that[i])) return false;
  return true;
}
function compareTypedArrays(self, that) {
  if (self.length !== that.length) return false;
  for (let i = 0; i < self.length; i++) if (self[i] !== that[i]) return false;
  return true;
}
function compareRecords(self, that) {
  const selfKeys = getAllObjectKeys(self);
  const thatKeys = getAllObjectKeys(that);
  if (selfKeys.size !== thatKeys.size) return false;
  for (const key of selfKeys)
    if (!thatKeys.has(key) || !compareBoth(self[key], that[key])) return false;
  return true;
}
function compareHashed(self, that, hashOf, equivalent) {
  const groups = /* @__PURE__ */ new Map();
  let remaining = 0;
  for (const item of that) {
    const h = hashOf(item);
    const group = groups.get(h);
    if (group) group.push(item);
    else groups.set(h, [item]);
    remaining++;
  }
  outer: for (const item of self) {
    const group = groups.get(hashOf(item));
    if (group) {
      for (let i = 0; i < group.length; i++)
        if (equivalent(item, group[i])) {
          group[i] = group[group.length - 1];
          group.pop();
          remaining--;
          continue outer;
        }
    }
    return false;
  }
  return remaining === 0;
}
const entryHash = (entry) => hash(entry[0]);
const equalEntries = (self, that) => compareBoth(self[0], that[0]) && compareBoth(self[1], that[1]);
const sameGroup = () => 0;
/** @internal */
function makeCompareMap(keyEquivalence, valueEquivalence) {
  return makeCompareSet(
    (self, that) => keyEquivalence(self[0], that[0]) && valueEquivalence(self[1], that[1]),
  );
}
/** @internal */
function makeCompareSet(equivalence) {
  return function compareSets(self, that) {
    return compareHashed(self, that, sameGroup, equivalence);
  };
}
/**
 * Checks whether a value implements the {@link Equal} interface.
 *
 * **When to use**
 *
 * Use when you need generic utility code to distinguish `Equal` implementors
 * from plain values before calling `[Equal.symbol]` directly.
 *
 * **Details**
 *
 * - Pure function, no side effects.
 * - Returns `true` if and only if `u` has a property keyed by
 *   {@link symbol}.
 * - Acts as a TypeScript type guard, narrowing the input to {@link Equal}.
 *
 * **Example** (Checking Equal values)
 *
 * ```ts import.meta.vitest
 * import { Equal, Hash } from "effect"
 *
 * class Token implements Equal.Equal {
 *   constructor(readonly value: string) {}
 *   [Equal.symbol](that: Equal.Equal): boolean {
 *     return that instanceof Token && this.value === that.value
 *   }
 *   [Hash.symbol](): number {
 *     return Hash.string(this.value)
 *   }
 * }
 *
 * Equal.isEqual(new Token("abc")) // => true
 * Equal.isEqual({ x: 1 }) // => false
 * Equal.isEqual(42) // => false
 * ```
 *
 * @see {@link Equal} — the interface being checked
 * @see {@link symbol} — the property key that signals `Equal` support
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isEqual = (u) => hasProperty(u, symbol);
/**
 * Wraps {@link equals} as an `Equivalence<A>`.
 *
 * **When to use**
 *
 * Use when you want to pass `Equal.equals` to APIs that require an
 * `Equivalence`.
 *
 * **Details**
 *
 * - Returns a function `(a: A, b: A) => boolean` that delegates to
 *   {@link equals}.
 * - Pure; allocates a thin wrapper on each call.
 *
 * **Example** (Deduplicating with Equal semantics)
 *
 * ```ts import.meta.vitest
 * import { Array, Equal } from "effect"
 *
 * Array.dedupeWith([1, 2, 2, 3, 1], Equal.asEquivalence<number>()) // => [1, 2, 3]
 * ```
 *
 * @see {@link equals} — the underlying comparison function
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const asEquivalence = () => equals$1;
/**
 * Marks an object permanently to use reference equality, without creating a proxy.
 *
 * **When to use**
 *
 * Use when you need reference equality without proxy allocation and accept
 * permanently marking the original object for reference-only equality.
 *
 * **Details**
 *
 * - Adds `obj` to an internal WeakSet. From that point on, {@link equals}
 *   treats it as reference-only.
 * - Returns the **same** object (not a copy or proxy), so
 *   `byReferenceUnsafe(x) === x`.
 * - Does **not** affect the object's prototype, properties, or behavior
 *   beyond equality checks.
 *
 * **Gotchas**
 *
 * The marking is irreversible for the lifetime of the object.
 *
 * **Example** (Marking an object for reference equality)
 *
 * ```ts import.meta.vitest
 * import { Equal } from "effect"
 *
 * const obj1 = { a: 1, b: 2 }
 * const obj2 = { a: 1, b: 2 }
 *
 * const marked = Equal.byReferenceUnsafe(obj1)
 *
 * Equal.equals(obj1, obj2) // => false
 * Equal.equals(obj1, obj1) // => true
 * marked === obj1 // => true
 * ```
 *
 * @see {@link byReference} — safer alternative that creates a proxy
 * @see {@link equals} — the comparison function affected by this opt-out
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const byReferenceUnsafe = (obj) => {
  byReferenceInstances.add(obj);
  return obj;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Equivalence.js
/**
 * Creates a custom equivalence relation with an optimized reference equality check.
 *
 * **When to use**
 *
 * Use when you need an equality rule that the built-in instances and input
 * mapping helpers cannot express, and you can provide a law-abiding comparison.
 *
 * **Details**
 *
 * The returned equivalence first checks reference equality (`===`) for
 * performance. If the values are not the same reference, it falls back to the
 * provided equivalence function, which must satisfy reflexive, symmetric, and
 * transitive properties.
 *
 * **Example** (Case-insensitive string equivalence)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const caseInsensitive = Equivalence.make<string>((a, b) =>
 *   a.toLowerCase() === b.toLowerCase()
 * )
 *
 * caseInsensitive("Hello", "HELLO") // => true
 * caseInsensitive("foo", "bar") // => false
 *
 * // Same reference optimization
 * const str = "test"
 * caseInsensitive(str, str) // => true
 * ```
 *
 * **Example** (Comparing numbers with tolerance)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const tolerance = Equivalence.make<number>((a, b) => Math.abs(a - b) < 0.0001)
 *
 * tolerance(1.0, 1.001) // => false
 * tolerance(1.0, 1.00001) // => true
 * ```
 *
 * @see {@link strictEqual}
 * @see {@link mapInput}
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$7 = (isEquivalent) => (self, that) => self === that || isEquivalent(self, that);
const isStrictEquivalent = (x, y) => x === y;
/**
 * Creates an equivalence relation that uses strict equality (`===`) to compare values.
 *
 * **When to use**
 *
 * Use when you need strict equality (`===`) as the comparison.
 *
 * **Details**
 *
 * Uses JavaScript's strict equality operator (`===`). Primitives compare by
 * value. Objects compare by reference, so only the same object instance is
 * equivalent. Use this as a building block for more complex equivalences via
 * `mapInput` or `combine`.
 *
 * **Gotchas**
 *
 * `NaN !== NaN`, so `NaN` values are never considered equivalent.
 *
 * **Example** (Comparing primitive types)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const strictEq = Equivalence.strictEqual<number>()
 *
 * strictEq(1, 1) // => true
 * strictEq(1, 2) // => false
 * strictEq(NaN, NaN) // => false
 * ```
 *
 * **Example** (Comparing objects by reference)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const obj = { value: 42 }
 * const strictObjEq = Equivalence.strictEqual<typeof obj>()
 *
 * strictObjEq(obj, obj) // => true
 * strictObjEq(obj, { value: 42 }) // => false
 * ```
 *
 * @see {@link make}
 * @see `Equal` for structural equality
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const strictEqual = () => isStrictEquivalent;
/**
 * Creates an equivalence for tuples with heterogeneous element types.
 *
 * **When to use**
 *
 * Use when you need an `Equivalence` for fixed-length tuples with per-position
 * equivalences.
 *
 * **Details**
 *
 * Tuples must have the same length; different lengths are never equivalent.
 * Each equivalence is applied to the corresponding element position. The result
 * returns `true` only if all elements are equivalent according to their
 * respective equivalences, and it also satisfies reflexive, symmetric, and
 * transitive properties.
 *
 * **Example** (Comparing homogeneous tuples)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const stringTupleEq = Equivalence.Tuple([
 *   Equivalence.strictEqual<string>(),
 *   Equivalence.strictEqual<string>(),
 *   Equivalence.strictEqual<string>()
 * ])
 *
 * const tuple1 = ["hello", "world", "test"] as const
 * const tuple2 = ["hello", "world", "test"] as const
 * const tuple3 = ["hello", "world", "different"] as const
 *
 * stringTupleEq(tuple1, tuple2) // => true
 * stringTupleEq(tuple1, tuple3) // => false
 * ```
 *
 * **Example** (Comparing tuples with custom equivalences)
 *
 * ```ts import.meta.vitest
 * import { Equivalence } from "effect"
 *
 * const caseInsensitive = Equivalence.mapInput(
 *   Equivalence.strictEqual<string>(),
 *   (s: string) => s.toLowerCase()
 * )
 *
 * const customTupleEq = Equivalence.Tuple([
 *   caseInsensitive,
 *   caseInsensitive,
 *   caseInsensitive
 * ])
 *
 * customTupleEq(["Hello", "World", "Test"], ["HELLO", "WORLD", "TEST"]) // => true
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
function Tuple(elements) {
  return make$7((self, that) => {
    if (self.length !== that.length) return false;
    for (let i = 0; i < self.length; i++) if (!elements[i](self[i], that[i])) return false;
    return true;
  });
}
/**
 * @since 4.0.0
 */
function Array_(item) {
  return make$7((self, that) => {
    if (self.length !== that.length) return false;
    for (let i = 0; i < self.length; i++) if (!item(self[i], that[i])) return false;
    return true;
  });
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/array.js
/**
 * @since 2.0.0
 */
/** @internal */
const isArrayNonEmpty$1 = (self) => self.length > 0;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/count.js
/**
 * Normalizes a collection count to a non-negative integer. `NaN` and
 * non-positive values become `0`; positive infinity is preserved.
 *
 * @internal
 */
const normalize = (n) => (n > 0 ? Math.floor(n) : 0);
/**
 * Normalizes a collection count to an integer greater than or equal to `1`.
 *
 * @internal
 */
const normalizeNonEmpty = (n) => Math.max(1, normalize(n));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/record.js
/** @internal */
function assignProperty(self, key, value) {
  if (key === "__proto__")
    Object.defineProperty(self, key, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  else self[key] = value;
}
/** @internal */
function assignProperties(self, source) {
  for (const key of Reflect.ownKeys(source))
    if (Object.prototype.propertyIsEnumerable.call(source, key))
      assignProperty(self, key, source[key]);
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Redactable.js
/**
 * Defines the symbol used to identify objects that implement the {@link Redactable}
 * protocol.
 *
 * **When to use**
 *
 * Use as the property key when implementing the `Redactable` protocol.
 *
 * **Details**
 *
 * Add a method under this key to make an object redactable. The method receives
 * the current `Context` and must return the replacement value. The symbol is
 * registered globally via `Symbol.for("~effect/Redactable")`, so it is
 * identical across multiple copies of the library at runtime.
 *
 * **Example** (Masking an API key)
 *
 * ```ts import.meta.vitest
 * import { Context, Redactable } from "effect"
 *
 * class ApiKey {
 *   constructor(readonly raw: string) {}
 *
 *   [Redactable.symbolRedactable](_ctx: Context.Context<never>) {
 *     return this.raw.slice(0, 4) + "..."
 *   }
 * }
 *
 * Redactable.redact(new ApiKey("secret-key")) // => "secr..."
 * ```
 *
 * @see {@link Redactable} for the interface this symbol belongs to
 * @see {@link isRedactable} to check whether a value has this symbol
 * @stability stable
 * @category symbols
 * @since 3.10.0
 */
const symbolRedactable = /*#__PURE__*/ Symbol.for("~effect/Redactable");
/**
 * Type guard that checks whether a value implements the {@link Redactable}
 * interface.
 *
 * **When to use**
 *
 * Use to narrow an unknown value before calling redaction-specific helpers.
 *
 * @see {@link Redactable} for the interface being checked
 * @see {@link redact} to apply redaction if the value is redactable
 * @stability stable
 * @category guards
 * @since 3.10.0
 */
const isRedactable = (u) => hasProperty(u, symbolRedactable);
/**
 * Returns a redacted value if it implements {@link Redactable}, otherwise returns it
 * unchanged.
 *
 * **When to use**
 *
 * Use as the general-purpose entry point for redaction when the input may
 * or may not implement the redaction protocol.
 *
 * **Details**
 *
 * This function calls {@link isRedactable} and, when it returns `true`,
 * delegates to {@link getRedacted}.
 *
 * **Gotchas**
 *
 * Redaction is not recursive. Nested redactable values inside the returned
 * object are not automatically redacted.
 *
 * @see {@link isRedactable} to check before redacting
 * @see {@link getRedacted} for the lower-level variant for known redactables
 * @stability stable
 * @category destructors
 * @since 3.10.0
 */
function redact(u) {
  if (isRedactable(u)) return getRedacted(u);
  return u;
}
/**
 * Returns the result of calling `[symbolRedactable]` on a value that is
 * already known to be {@link Redactable}.
 *
 * **When to use**
 *
 * Use when you need to read the redacted representation from a value already
 * verified as `Redactable`.
 *
 * **Details**
 *
 * This function reads the current fiber's `Context` from the global fiber
 * reference and passes it to the redaction method.
 *
 * **Gotchas**
 *
 * If no fiber is active, an empty `Context` is passed to the redaction method.
 *
 * @see {@link redact} for the higher-level variant that handles non-redactable values
 * @see {@link isRedactable} for the type guard to verify before calling this
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
function getRedacted(redactable) {
  return redactable[symbolRedactable](
    globalThis["~effect/Fiber/currentFiber"]?.context ?? emptyContext$1,
  );
}
/** @internal */
const currentFiberTypeId = "~effect/Fiber/currentFiber";
const emptyMap = /*#__PURE__*/ new Map();
const emptyContext$1 = {
  "~effect/Context": {},
  base: emptyMap,
  depth: 0,
  mapUnsafe: emptyMap,
  pipe() {
    return pipeArguments(this, arguments);
  },
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Formatter.js
/**
 * Formats JavaScript values into readable strings.
 *
 * `format` is intended for logs, diagnostics, and error messages. It handles
 * primitives, objects, arrays, dates, regular expressions, maps, sets, class
 * instances, errors, circular references, and redactable values. `formatJson`
 * wraps JSON formatting with redaction and circular-reference handling, and the
 * module also includes helpers for property keys, paths, and dates.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Converts any JavaScript value into a human-readable string.
 *
 * **When to use**
 *
 * Use when you need to format arbitrary JavaScript values for debugging,
 * logging, or error messages.
 *
 * **Details**
 *
 * - Output is **not** valid JSON; use {@link formatJson} when you need
 *   parseable JSON.
 * - Handles `BigInt`, `Symbol`, `Set`, `Map`, `Date`, `RegExp`, and class
 *   instances that `JSON.stringify` cannot represent.
 * - Circular references are shown as `"[Circular]"` instead of throwing.
 * - Failures while inspecting a value are rendered as diagnostic placeholders instead of throwing.
 * - Primitives: stringified naturally (`null`, `undefined`, `123`, `true`).
 *   Strings are JSON-quoted.
 * - Objects with a custom `toString` (not `Object.prototype.toString`):
 *   `toString()` is called unless `ignoreToString` is `true`.
 * - Errors with a `cause`: formatted as `"<message> (cause: <cause>)"`.
 * - Iterables (`Set`, `Map`, etc.): formatted as
 *   `ClassName([...elements])`.
 * - Class instances: wrapped as `ClassName({...})`.
 * - `Redactable` values are automatically redacted.
 * - Arrays/objects with 0–1 entries are inline; larger ones are
 *   pretty-printed when `space` is set.
 * - `space` — indentation unit (number of spaces, or a string like
 *   `"\t"`). Defaults to `0` (compact).
 * - `ignoreToString` — skip calling `toString()`. Defaults to `false`.
 *
 * **Example** (Formatting compact output)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * Formatter.format({ a: 1, b: [2, 3] }) // => "{\"a\":1,\"b\":[2,3]}"
 * ```
 *
 * **Example** (Pretty-printed output)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * const output = Formatter.format({ a: 1, b: [2, 3] }, { space: 2 })
 * output // => "{\n  \"a\": 1,\n  \"b\": [\n    2,\n    3\n  ]\n}"
 * ```
 *
 * **Example** (Handling circular references)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * const obj: any = { name: "loop" }
 * obj.self = obj
 * Formatter.format(obj) // => "{\"name\":\"loop\",\"self\":[Circular]}"
 * ```
 *
 * @see {@link formatJson}
 * @see {@link Formatter}
 * @stability stable
 * @category formatting
 * @since 2.0.0
 */
function format$1(input, options) {
  const space = options?.space ?? 0;
  const ancestors = /* @__PURE__ */ new WeakSet();
  const gap = !space ? "" : typeof space === "number" ? " ".repeat(space) : space;
  const ind = (d) => gap.repeat(d);
  const wrap = (v, body) => {
    const ctor = v?.constructor;
    return ctor && ctor !== Object.prototype.constructor && ctor.name
      ? `${ctor.name}(${body})`
      : body;
  };
  const ownKeys = (o) => {
    try {
      return Reflect.ownKeys(o);
    } catch {
      return ["[ownKeys threw]"];
    }
  };
  function recur(v, d = 0) {
    try {
      return recurUnsafe(v, d);
    } catch {
      if ((typeof v === "object" && v !== null) || typeof v === "function") ancestors.delete(v);
      return "[inspection threw]";
    }
  }
  function recurUnsafe(v, d = 0) {
    if (typeof v === "string") return JSON.stringify(v);
    if (typeof v === "number" || v == null || typeof v === "boolean" || typeof v === "symbol")
      return String(v);
    if (typeof v === "bigint") return String(v) + "n";
    if (typeof v === "object" || typeof v === "function") {
      if (ancestors.has(v)) return CIRCULAR;
      ancestors.add(v);
      let output;
      if (symbolRedactable in v) output = recur(getRedacted(v), d);
      else if (Array.isArray(v))
        output =
          !gap || v.length <= 1
            ? `[${v.map((x) => recur(x, d)).join(",")}]`
            : `[\n${ind(d + 1)}${v.map((x) => recur(x, d + 1)).join(",\n" + ind(d + 1))}\n${ind(d)}]`;
      else if (v instanceof Date) output = formatDate(v);
      else if (
        !options?.ignoreToString &&
        hasProperty(v, "toString") &&
        typeof v["toString"] === "function" &&
        v["toString"] !== Object.prototype.toString &&
        v["toString"] !== Array.prototype.toString
      ) {
        const s = safeToString(v);
        output =
          v instanceof Error && v.cause !== void 0 ? `${s} (cause: ${recur(v.cause, d)})` : s;
      } else if (Symbol.iterator in v) output = `${v.constructor.name}(${recur(Array.from(v), d)})`;
      else {
        const keys = ownKeys(v);
        if (!gap || keys.length <= 1) {
          const body = `{${keys.map((k) => `${formatPropertyKey(k)}:${recur(safeGet(v, k), d)}`).join(",")}}`;
          output = wrap(v, body);
        } else {
          const body = `{\n${keys.map((k) => `${ind(d + 1)}${formatPropertyKey(k)}: ${recur(safeGet(v, k), d + 1)}`).join(",\n")}\n${ind(d)}}`;
          output = wrap(v, body);
        }
      }
      ancestors.delete(v);
      return output;
    }
    return String(v);
  }
  return recur(input, 0);
}
const CIRCULAR = "[Circular]";
/**
 * @internal
 */
function formatPropertyKey(name) {
  return typeof name === "string" ? JSON.stringify(name) : String(name);
}
/**
 * Formats an array of property keys as a bracket-notation path string.
 *
 * @internal
 */
function formatPath(path) {
  return path.map((key) => `[${formatPropertyKey(key)}]`).join("");
}
/**
 * Formats a `Date` as an ISO 8601 string, returning `"Invalid Date"` for
 * invalid dates instead of throwing.
 *
 * @internal
 */
function formatDate(date) {
  try {
    return date.toISOString();
  } catch {
    return "Invalid Date";
  }
}
function safeToString(input) {
  try {
    const s = input.toString();
    return typeof s === "string" ? s : String(s);
  } catch {
    return "[toString threw]";
  }
}
function safeGet(input, key) {
  try {
    return input[key];
  } catch {
    return "[property access threw]";
  }
}
/**
 * Stringifies a value to JSON safely, silently dropping circular references.
 *
 * **When to use**
 *
 * Use when you need valid JSON output, unlike `format`, and the input may
 * contain circular references that should be silently omitted rather than
 * throwing a `TypeError`.
 *
 * **Details**
 *
 * Uses `JSON.stringify` internally with a replacer that tracks the current
 * object ancestry. Circular references are replaced with `undefined`, which
 * omits them from object output. `Redactable` values are automatically redacted
 * before serialization. `BigInt` values are stringified with an `n` suffix.
 * `Error` instances without a `toJSON` property include their enumerable
 * properties plus `name` and `message`. Errors with `toJSON` keep their custom
 * representation. Other values follow standard `JSON.stringify` behavior. The
 * `space` parameter controls indentation and defaults to `0`.
 *
 * **Gotchas**
 *
 * When the root input is `undefined`, a symbol, or a function, `formatJson`
 * returns `"null"` instead of the `undefined` returned by `JSON.stringify`.
 * Nested values retain standard `JSON.stringify` behavior.
 *
 * **Example** (Formatting compact JSON)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * Formatter.formatJson({ name: "Alice", age: 30 }) // => "{\"name\":\"Alice\",\"age\":30}"
 * ```
 *
 * **Example** (Handling circular references)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * const obj: any = { name: "test" }
 * obj.self = obj
 * Formatter.formatJson(obj) // => "{\"name\":\"test\"}"
 * ```
 *
 * **Example** (Pretty-printed JSON)
 *
 * ```ts import.meta.vitest
 * import { Formatter } from "effect"
 *
 * const output = Formatter.formatJson({ name: "Alice", age: 30 }, { space: 2 })
 * output // => "{\n  \"name\": \"Alice\",\n  \"age\": 30\n}"
 * ```
 *
 * @see {@link format}
 * @see {@link Formatter}
 * @stability stable
 * @category serialization
 * @since 4.0.0
 */
function formatJson(input, options) {
  const ancestors = [];
  return (
    JSON.stringify(
      input,
      function (key, value) {
        const original = Object.getOwnPropertyDescriptor(this, key)?.value;
        const redacted = hasProperty(original, symbolRedactable) ? redact(original) : redact(value);
        if (typeof redacted === "bigint") return format$1(redacted);
        if (typeof redacted !== "object" || redacted === null) return redacted;
        const current =
          redacted instanceof Error && !hasProperty(redacted, "toJSON")
            ? {
                ...redacted,
                name: redacted.name,
                message: redacted.message,
              }
            : redacted;
        while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this) ancestors.pop();
        if (ancestors.includes(redacted)) return;
        ancestors.push(redacted);
        if (current !== redacted) ancestors.push(current);
        if (!hasGetter(current) || isJsonPrimitiveWrapper(current)) return current;
        const serialized = new Proxy(current, {
          get(target, key) {
            const value = Reflect.get(target, key, target);
            return Object.getOwnPropertyDescriptor(target, key)?.get !== void 0
              ? redact(value)
              : value;
          },
        });
        ancestors.push(serialized);
        return serialized;
      },
      options?.space,
    ) ?? "null"
  );
}
function hasGetter(object) {
  for (const key of Object.getOwnPropertyNames(object))
    if (Object.getOwnPropertyDescriptor(object, key)?.get !== void 0) return true;
  return false;
}
function isJsonPrimitiveWrapper(object) {
  for (const valueOf of [
    Number.prototype.valueOf,
    Boolean.prototype.valueOf,
    String.prototype.valueOf,
  ])
    try {
      Reflect.apply(valueOf, object, []);
      return true;
    } catch {}
  return false;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Inspectable.js
/**
 * Controls how values appear in logs and debugging output.
 *
 * Effect data types use `Inspectable` to provide stable string, JSON, and
 * Node.js inspection output. This keeps custom values readable in logs, REPLs,
 * test failures, and diagnostics. This module defines the Node inspect symbol,
 * the `Inspectable` interface, safe conversion helpers, and shared prototype or
 * class implementations for custom values.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Defines the symbol used by Node.js for custom object inspection.
 *
 * **When to use**
 *
 * Use to implement Node.js custom inspection for a value.
 *
 * **Details**
 *
 * This symbol is recognized by Node.js's `util.inspect()` function and the REPL
 * for custom object representation. When an object has a method with this symbol,
 * it will be called to determine how the object should be displayed.
 *
 * **Example** (Defining custom Node inspection)
 *
 * ```ts import.meta.vitest
 * import { Inspectable } from "effect"
 *
 * class CustomObject {
 *   constructor(private value: string) {}
 *
 *   [Inspectable.NodeInspectSymbol]() {
 *     return `CustomObject(${this.value})`
 *   }
 * }
 *
 * const obj = new CustomObject("hello")
 * obj[Inspectable.NodeInspectSymbol]() // => "CustomObject(hello)"
 * ```
 *
 * @stability stable
 * @category symbols
 * @since 2.0.0
 */
const NodeInspectSymbol = /*#__PURE__*/ Symbol.for("nodejs.util.inspect.custom");
/**
 * Converts a value to its structured inspection representation.
 *
 * **When to use**
 *
 * Use when you need the structured representation of an inspectable value
 * without risking unhandled errors.
 *
 * **Details**
 *
 * This function applies redaction before extracting data from objects that
 * implement `toJSON`, recursively processes arrays, and handles errors
 * gracefully. Plain objects are returned unchanged, so the result is not
 * guaranteed to be accepted by `JSON.stringify`; it may still contain values
 * such as `BigInt`, functions, or circular references.
 *
 * @see {@link toStringUnknown} for converting unknown values to strings
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toJson = (input) => {
  try {
    input = redact(input);
    if (hasProperty(input, "toJSON") && isFunction(input["toJSON"]) && input["toJSON"].length === 0)
      return input.toJSON();
    else if (Array.isArray(input)) return input.map(toJson);
    return input;
  } catch {
    return "[toJSON threw]";
  }
};
/**
 * Converts an unknown value to a string for diagnostics.
 *
 * **When to use**
 *
 * Use to produce a diagnostic string from a value whose runtime type is unknown.
 *
 * **Details**
 *
 * Strings are returned unchanged. Objects are formatted as JSON using the
 * provided whitespace setting when possible, and values that cannot be
 * formatted are converted with `String`.
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const toStringUnknown = (u, whitespace = 2) => {
  if (typeof u === "string") return u;
  try {
    return typeof u === "object"
      ? formatJson(u, { space: whitespace })
      : format$1(u, { space: whitespace });
  } catch {
    return String(u);
  }
};
/**
 * A base prototype object that implements the {@link Inspectable} interface.
 *
 * **When to use**
 *
 * Use as a prototype for plain objects that should share standard inspectable behavior.
 *
 * **Details**
 *
 * This object provides default implementations for the {@link Inspectable} methods.
 * It can be used as a prototype for objects that want to be inspectable,
 * or as a mixin to add inspection capabilities to existing objects.
 *
 * **Example** (Using the base inspectable prototype)
 *
 * ```ts import.meta.vitest
 * import { Inspectable } from "effect"
 *
 * // Use as prototype
 * const myObject = Object.create(Inspectable.BaseProto)
 * myObject.name = "example"
 * myObject.value = 42
 *
 * myObject.toString() // => "\"[toJSON threw]\""
 *
 * // Or extend in a constructor
 * function MyClass(this: any, name: string) {
 *   this.name = name
 * }
 * MyClass.prototype = Object.create(Inspectable.BaseProto)
 * MyClass.prototype.constructor = MyClass
 * ```
 *
 * @stability stable
 * @category prototypes
 * @since 2.0.0
 */
const BaseProto = {
  toJSON() {
    return toJson(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format$1(this.toJSON());
  },
};
/**
 * Provides an abstract base class that implements the Inspectable interface.
 *
 * **When to use**
 *
 * Use as a base class for inspectable objects that define their own JSON representation.
 *
 * **Details**
 *
 * This class provides a convenient way to create inspectable objects by extending it.
 * Subclasses only need to implement the `toJSON()` method, and they automatically
 * get proper `toString()` and Node.js inspection support.
 *
 * **Example** (Extending the inspectable base class)
 *
 * ```ts import.meta.vitest
 * import { Inspectable } from "effect"
 *
 * class User extends Inspectable.Class {
 *   constructor(
 *     public readonly id: number,
 *     public readonly name: string,
 *     public readonly email: string
 *   ) {
 *     super()
 *   }
 *
 *   toJSON() {
 *     return {
 *       _tag: "User",
 *       id: this.id,
 *       name: this.name,
 *       email: this.email
 *     }
 *   }
 * }
 *
 * const user = new User(1, "Alice", "alice@example.com")
 * user.toString() // => "{\"_tag\":\"User\",\"id\":1,\"name\":\"Alice\",\"email\":\"alice@example.com\"}"
 * user[Inspectable.NodeInspectSymbol]() // => { _tag: "User", id: 1, name: "Alice", email: "alice@example.com" }
 * ```
 *
 * @stability stable
 * @category models
 * @since 2.0.0
 */
var Class = class {
  /**
   * Node.js custom inspection method.
   *
   * **When to use**
   *
   * Use to expose the class JSON representation to Node.js inspection.
   *
   * @since 2.0.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  /**
   * Returns a formatted string representation of this object.
   *
   * **When to use**
   *
   * Use to format the class JSON representation as a string.
   *
   * @since 2.0.0
   */
  toString() {
    return format$1(this.toJSON());
  }
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/stackTraceLimit.js
/**
 * Check if `Error.stackTraceLimit` is writable.
 * Returns `false` if the property is frozen, non-writable, or `Error` is non-extensible.
 *
 * @internal
 */
const isStackTraceLimitWritable = () => {
  const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
  if (desc === void 0) return Object.isExtensible(Error);
  return Object.hasOwn(desc, "writable") ? desc.writable === true : desc.set !== void 0;
};
const canWriteStackTraceLimit = /*#__PURE__*/ isStackTraceLimitWritable();
/**
 * Get the current `Error.stackTraceLimit` value.
 * Returns `undefined` if the property doesn't exist.
 *
 * @internal
 */
const getStackTraceLimit = () => Error.stackTraceLimit;
/**
 * Safely set `Error.stackTraceLimit` if possible, otherwise no-op.
 *
 * Accepts `undefined` so a value read via {@link getStackTraceLimit} can be
 * restored faithfully.
 *
 * @internal
 */
const setStackTraceLimit = (value) => {
  if (canWriteStackTraceLimit) Error.stackTraceLimit = value;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Utils.js
/**
 * Yields its wrapped value exactly once, then completes with the value sent
 * back in.
 *
 * **When to use**
 *
 * Use to implement `[Symbol.iterator]()` on Effect-like types so they can be
 * `yield*`-ed inside generator functions, such as `Effect.gen` and
 * `Option.gen`.
 *
 * **Details**
 *
 * The first call to `next()` returns a fresh `{ value: self, done: false }`.
 * Every subsequent call returns `{ value: a, done: true }` where `a` is the
 * argument passed to `next()`. To keep `yield*` cheap, the completion result
 * is the iterator itself rather than a new object, so only the iterator and
 * the single yielded result are allocated per `yield*`.
 *
 * **Example** (Yielding a wrapped value in a generator)
 *
 * ```ts import.meta.vitest
 * import { Utils } from "effect"
 *
 * const gen = new Utils.SingleShotGen<string, number>("hello")
 *
 * gen.next(0).value // => "hello"
 *
 * gen.next(42).value // => 42
 * ```
 *
 * @see {@link Gen} for the type-level signature that relies on `SingleShotGen`
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
var SingleShotGen = class {
  constructor(self) {
    this.value = self;
    this.done = false;
  }
  /**
   * Yields the stored value once, then completes with the value sent back in.
   *
   * **When to use**
   *
   * Use to advance a `SingleShotGen` through its single yield and completion
   * step.
   *
   * @since 2.0.0
   */
  next(a) {
    if (this.done) {
      this.value = a;
      return this;
    }
    this.done = true;
    return {
      value: this.value,
      done: false,
    };
  }
};
const pickInternalCall = () => {
  const InternalTypeId = "~effect/Utils/internal";
  const standard = {
    [InternalTypeId]: (body) => {
      return body();
    },
  };
  const forced = {
    [InternalTypeId]: (body) => {
      try {
        return body();
      } finally {
      }
    },
  };
  const limit = getStackTraceLimit();
  if (limit === 0) return forced[InternalTypeId];
  setStackTraceLimit(2);
  const error = standard[InternalTypeId](() => /* @__PURE__ */ new Error());
  setStackTraceLimit(limit);
  return error.stack?.includes(InternalTypeId) === true
    ? standard[InternalTypeId]
    : forced[InternalTypeId];
};
/** @internal */
const internalCall = /*#__PURE__*/ pickInternalCall();
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/core.js
/** @internal */
const EffectTypeId = `~effect/Effect`;
/** @internal */
const ExitTypeId = `~effect/Exit`;
const effectVariance = {
  _A: identity,
  _E: identity,
  _R: identity,
};
/** @internal */
const identifier = `${EffectTypeId}/identifier`;
/** @internal */
const args = `${EffectTypeId}/args`;
/** @internal */
const evaluate = `${EffectTypeId}/evaluate`;
/** @internal */
const contA = `${EffectTypeId}/successCont`;
/** @internal */
const contE = `${EffectTypeId}/failureCont`;
/** @internal */
const contAll = `${EffectTypeId}/ensureCont`;
/** @internal */
const Yield = /*#__PURE__*/ Symbol.for("effect/Effect/Yield");
/** @internal */
const PipeInspectableProto = {
  pipe() {
    return pipeArguments(this, arguments);
  },
  toJSON() {
    return { ...this };
  },
  toString() {
    return format$1(this.toJSON(), {
      ignoreToString: true,
      space: 2,
    });
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
};
/** @internal */
const StructuralProto = {
  [symbol$1]() {
    return structureKeys(this, Object.keys(this));
  },
  [symbol](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) return false;
    for (let i = 0; i < selfKeys.length; i++)
      if (selfKeys[i] !== thatKeys[i] || !equals$1(this[selfKeys[i]], that[selfKeys[i]]))
        return false;
    return true;
  },
};
/** @internal */
const EffectProto = {
  [EffectTypeId]: effectVariance,
  ...PipeInspectableProto,
  [Symbol.iterator]() {
    return new SingleShotGen(this);
  },
  toJSON() {
    return {
      _id: "Effect",
      op: this[identifier],
      ...("~effect/Effect/args" in this ? { args: this[args] } : void 0),
    };
  },
};
/** @internal */
const isEffect$1 = (u) => hasProperty(u, EffectTypeId);
/** @internal */
const isExit$1 = (u) => hasProperty(u, ExitTypeId);
/** @internal */
const CauseTypeId = "~effect/Cause";
/** @internal */
const CauseReasonTypeId = "~effect/Cause/Reason";
/** @internal */
const isCause$1 = (self) => hasProperty(self, CauseTypeId);
/** @internal */
const isCauseReason = (self) => hasProperty(self, CauseReasonTypeId);
/** @internal */
var CauseImpl = class {
  constructor(failures) {
    this[CauseTypeId] = CauseTypeId;
    this.reasons = failures;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Cause",
      failures: this.reasons.map((f) => f.toJSON()),
    };
  }
  toString() {
    return `Cause(${format$1(this.reasons)})`;
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [symbol](that) {
    return (
      isCause$1(that) &&
      this.reasons.length === that.reasons.length &&
      this.reasons.every((e, i) => equals$1(e, that.reasons[i]))
    );
  }
  [symbol$1]() {
    return array(this.reasons);
  }
};
const annotationsMap = /*#__PURE__*/ new WeakMap();
/** @internal */
var ReasonBase = class {
  [CauseReasonTypeId];
  annotations;
  _tag;
  constructor(_tag, annotations, originalError) {
    this[CauseReasonTypeId] = CauseReasonTypeId;
    this._tag = _tag;
    if (
      annotations !== constEmptyAnnotations &&
      typeof originalError === "object" &&
      originalError !== null &&
      annotations.size > 0
    ) {
      const prevAnnotations = annotationsMap.get(originalError);
      if (prevAnnotations) annotations = new Map([...prevAnnotations, ...annotations]);
      annotationsMap.set(originalError, annotations);
    }
    this.annotations = annotations;
  }
  annotate(annotations, options) {
    if (annotations.mapUnsafe.size === 0) return this;
    const newAnnotations = new Map(this.annotations);
    annotations.mapUnsafe.forEach((value, key) => {
      if (options?.overwrite !== true && newAnnotations.has(key)) return;
      newAnnotations.set(key, value);
    });
    const self = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    self.annotations = newAnnotations;
    return self;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toString() {
    return format$1(this);
  }
  [NodeInspectSymbol]() {
    return this.toString();
  }
};
/** @internal */
const constEmptyAnnotations = /*#__PURE__*/ new Map();
/** @internal */
var Fail = class extends ReasonBase {
  constructor(error, annotations = constEmptyAnnotations) {
    super("Fail", annotations, error);
    this.error = error;
  }
  toString() {
    return `Fail(${format$1(this.error)})`;
  }
  toJSON() {
    return {
      _tag: "Fail",
      error: this.error,
    };
  }
  [symbol](that) {
    return (
      isFailReason$1(that) &&
      equals$1(this.error, that.error) &&
      equals$1(this.annotations, that.annotations)
    );
  }
  [symbol$1]() {
    return combine$1(string(this._tag))(combine$1(hash(this.error))(hash(this.annotations)));
  }
};
/** @internal */
const causeFromReasons = (reasons) => new CauseImpl(reasons);
const dedupeReasons = (self, that) => {
  const buckets = /* @__PURE__ */ new Map();
  const out = [];
  for (const reason of self.concat(that)) {
    const hash$6 = hash(reason);
    const bucket = buckets.get(hash$6);
    if (bucket === void 0) buckets.set(hash$6, [reason]);
    else if (bucket.some((previous) => equals$1(previous, reason))) continue;
    else bucket.push(reason);
    out.push(reason);
  }
  return out;
};
/** @internal */
const causeCombine = /*#__PURE__*/ dual(2, (self, that) => {
  if (self.reasons.length === 0) return that;
  else if (that.reasons.length === 0) return self;
  const newCause = new CauseImpl(dedupeReasons(self.reasons, that.reasons));
  return equals$1(self, newCause) ? self : newCause;
});
/**
 * Appends the interrupts from `interrupts` that `self` does not contain yet.
 * Unlike `causeCombine`, it never calls hash or equality methods, which can be
 * user-defined, random, or throwing.
 *
 * @internal
 */
const causeAddInterrupts = (self, interrupts) => {
  const reasons = self.reasons.slice();
  for (const reason of interrupts.reasons)
    if (
      isInterruptReason$1(reason) &&
      !reasons.some(
        (r) =>
          isInterruptReason$1(r) &&
          r.fiberId === reason.fiberId &&
          r.annotations === reason.annotations,
      )
    )
      reasons.push(reason);
  return reasons.length === self.reasons.length ? self : new CauseImpl(reasons);
};
/** @internal */
const causeEmpty = /*#__PURE__*/ new CauseImpl([]);
/** @internal */
const causeFail = (error) => new CauseImpl([new Fail(error)]);
/** @internal */
var Die = class extends ReasonBase {
  constructor(defect, annotations = constEmptyAnnotations) {
    super("Die", annotations, defect);
    this.defect = defect;
  }
  toString() {
    return `Die(${format$1(this.defect)})`;
  }
  toJSON() {
    return {
      _tag: "Die",
      defect: this.defect,
    };
  }
  [symbol](that) {
    return (
      isDieReason$1(that) &&
      equals$1(this.defect, that.defect) &&
      equals$1(this.annotations, that.annotations)
    );
  }
  [symbol$1]() {
    return combine$1(string(this._tag))(combine$1(hash(this.defect))(hash(this.annotations)));
  }
};
/** @internal */
const causeDie = (defect) => new CauseImpl([new Die(defect)]);
/** @internal */
const causeAnnotate = /*#__PURE__*/ dual(
  (args) => isCause$1(args[0]),
  (self, annotations, options) => {
    if (annotations.mapUnsafe.size === 0) return self;
    return new CauseImpl(self.reasons.map((f) => f.annotate(annotations, options)));
  },
);
/** @internal */
const isFailReason$1 = (self) => self._tag === "Fail";
/** @internal */
const isDieReason$1 = (self) => self._tag === "Die";
/** @internal */
const isInterruptReason$1 = (self) => self._tag === "Interrupt";
function defaultEvaluate(_fiber) {
  return exitDie(`Effect.evaluate: Not implemented`);
}
/** @internal */
const makePrimitiveProto = (options) => ({
  ...EffectProto,
  [identifier]: options.op,
  [evaluate]: options["~effect/Effect/evaluate"] ?? defaultEvaluate,
  [contA]: options[contA],
  [contE]: options[contE],
  [contAll]: options[contAll],
});
/** @internal */
const makePrimitive = (options) => {
  const Proto = makePrimitiveProto(options);
  const PrimitiveImpl = function (value) {
    this[args] = value;
  };
  PrimitiveImpl.prototype = Proto;
  return function (value) {
    return new PrimitiveImpl(value);
  };
};
/** @internal */
const makeExit = (options) => {
  const Proto = {
    [ExitTypeId]: ExitTypeId,
    _tag: options.op,
    get [options.prop]() {
      return this[args];
    },
    ...makePrimitiveProto(options),
    toString() {
      return `${options.op}(${format$1(this[args])})`;
    },
    toJSON() {
      return {
        _id: "Exit",
        _tag: options.op,
        [options.prop]: this[args],
      };
    },
    [symbol](that) {
      return (
        isExit$1(that) &&
        that._tag === this._tag &&
        equals$1(this["~effect/Effect/args"], that["~effect/Effect/args"])
      );
    },
    [symbol$1]() {
      return combine$1(string(options.op), hash(this[args]));
    },
  };
  const ExitPrimitive = function (value) {
    this[args] = value;
  };
  ExitPrimitive.prototype = Proto;
  return function (value) {
    return new ExitPrimitive(value);
  };
};
/** @internal */
const exitSucceed = /*#__PURE__*/ makeExit({
  op: "Success",
  prop: "value",
  [evaluate](fiber) {
    const cont = fiber.getCont(contA);
    return cont ? cont[contA](this[args], fiber, this) : fiber.yieldWith(this);
  },
});
/** @internal */
const StackTraceKey = { key: "effect/Cause/StackTrace" };
/** @internal */
const InterruptorStackTrace = { key: "effect/Cause/InterruptorStackTrace" };
/** @internal */
const exitFailCause = /*#__PURE__*/ makeExit({
  op: "Failure",
  prop: "cause",
  [evaluate](fiber) {
    let cause = this[args];
    let annotated = false;
    if (fiber.cache.stackFrame) {
      cause = causeAnnotate(cause, {
        mapUnsafe: /* @__PURE__ */ new Map([[StackTraceKey.key, fiber.cache.stackFrame]]),
      });
      annotated = true;
    }
    let cont = fiber.getCont(contE);
    const interruptedCause = fiber._interruptedCause;
    if (interruptedCause && fiber.interruptible) {
      let skippedHandler = false;
      while (cont && fiber.interruptible) {
        skippedHandler ||= identifier in cont;
        cont = fiber.getCont(contE);
      }
      if (skippedHandler)
        cause = causeFromReasons(cause.reasons.filter((reason) => reason._tag !== "Fail"));
      cause = causeAddInterrupts(cause, interruptedCause);
      annotated = true;
    }
    return cont
      ? cont[contE](cause, fiber, annotated ? void 0 : this)
      : fiber.yieldWith(annotated ? exitFailCause(cause) : this);
  },
});
/** @internal */
const exitFail = (e) => exitFailCause(causeFail(e));
/** @internal */
const exitDie = (defect) => exitFailCause(causeDie(defect));
/** @internal */
const withFiber$1 = /*#__PURE__*/ makePrimitive({
  op: "WithFiber",
  [evaluate](fiber) {
    return this[args](fiber);
  },
});
/** @internal */
const YieldableError = /*#__PURE__*/ (function () {
  class YieldableError extends globalThis.Error {}
  const proto = /*#__PURE__*/ makePrimitiveProto({
    op: "YieldableError",
    [evaluate]() {
      return exitFail(this);
    },
  });
  delete proto.toString;
  Object.assign(YieldableError.prototype, proto);
  return YieldableError;
})();
/** @internal */
const Error$1 = /*#__PURE__*/ (function () {
  const plainArgsSymbol = /*#__PURE__*/ Symbol.for("effect/Data/Error/plainArgs");
  return class Base extends YieldableError {
    constructor(args) {
      super(args?.message, args?.cause ? { cause: args.cause } : void 0);
      if (args) {
        assignProperties(this, args);
        Object.defineProperty(this, plainArgsSymbol, {
          value: args,
          enumerable: false,
        });
      }
    }
    toJSON() {
      return {
        ...this[plainArgsSymbol],
        ...this,
      };
    }
  };
})();
/** @internal */
const TaggedError = (tag) => {
  class Base extends Error$1 {
    _tag = tag;
  }
  Base.prototype.name = tag;
  return Base;
};
/** @internal */
const NoSuchElementErrorTypeId = "~effect/Cause/NoSuchElementError";
/** @internal */
const isNoSuchElementError$1 = (u) => hasProperty(u, NoSuchElementErrorTypeId);
/** @internal */
var NoSuchElementError$1 = class extends /*#__PURE__*/ TaggedError("NoSuchElementError") {
  [NoSuchElementErrorTypeId] = NoSuchElementErrorTypeId;
  constructor(message) {
    super({ message });
  }
};
/** @internal */
const DoneTypeId = "~effect/Cause/Done";
/** @internal */
const isDone$2 = (u) => hasProperty(u, DoneTypeId);
const DoneVoid = {
  [DoneTypeId]: DoneTypeId,
  _tag: "Done",
  value: void 0,
};
/** @internal */
const Done$1 = (value) => {
  if (value === void 0) return DoneVoid;
  return {
    [DoneTypeId]: DoneTypeId,
    _tag: "Done",
    value,
  };
};
const doneVoid = /*#__PURE__*/ exitFail(DoneVoid);
/** @internal */
const done$2 = (value) => {
  if (value === void 0) return doneVoid;
  return exitFail(Done$1(value));
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/option.js
/**
 * @since 2.0.0
 */
const TypeId$8 = "~effect/Option";
const CommonProto$1 = {
  [TypeId$8]: { _A: (_) => _ },
  ...PipeInspectableProto,
  [Symbol.iterator]() {
    return new SingleShotGen(this);
  },
};
const SomeProto = /*#__PURE__*/ Object.defineProperty(
  /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto$1), {
    _tag: "Some",
    _op: "Some",
    [symbol](that) {
      return isOption$1(that) && isSome$1(that) && equals$1(this.value, that.value);
    },
    [symbol$1]() {
      return combine$1(hash(this._tag))(hash(this.value));
    },
    toString() {
      return `some(${format$1(this.value)})`;
    },
    toJSON() {
      return {
        _id: "Option",
        _tag: this._tag,
        value: toJson(this.value),
      };
    },
  }),
  "valueOrUndefined",
  {
    get() {
      return this.value;
    },
  },
);
const NoneHash = /*#__PURE__*/ hash("None");
const NoneProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto$1), {
  _tag: "None",
  _op: "None",
  valueOrUndefined: void 0,
  [symbol](that) {
    return isOption$1(that) && isNone$1(that);
  },
  [symbol$1]() {
    return NoneHash;
  },
  toString() {
    return `none()`;
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
    };
  },
});
/** @internal */
const isOption$1 = (input) => hasProperty(input, TypeId$8);
/** @internal */
const isNone$1 = (fa) => fa._tag === "None";
/** @internal */
const isSome$1 = (fa) => fa._tag === "Some";
/** @internal */
const none$1 = /*#__PURE__*/ Object.create(NoneProto);
/** @internal */
const SomeImpl = function (value) {
  this.value = value;
};
SomeImpl.prototype = SomeProto;
/** @internal */
const some$1 = (value) => new SomeImpl(value);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/result.js
const TypeId$7 = "~effect/Result";
const CommonProto = {
  [TypeId$7]: {
    /* v8 ignore next 2 */
    _A: (_) => _,
    _E: (_) => _,
  },
  ...PipeInspectableProto,
  [Symbol.iterator]() {
    return new SingleShotGen(this);
  },
};
const SuccessProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
  _tag: "Success",
  _op: "Success",
  [symbol](that) {
    return isResult$1(that) && isSuccess$4(that) && equals$1(this.success, that.success);
  },
  [symbol$1]() {
    return combine$1(hash(this._tag))(hash(this.success));
  },
  toString() {
    return `success(${format$1(this.success)})`;
  },
  toJSON() {
    return {
      _id: "Result",
      _tag: this._tag,
      value: toJson(this.success),
    };
  },
});
const FailureProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
  _tag: "Failure",
  _op: "Failure",
  [symbol](that) {
    return isResult$1(that) && isFailure$2(that) && equals$1(this.failure, that.failure);
  },
  [symbol$1]() {
    return combine$1(hash(this._tag))(hash(this.failure));
  },
  toString() {
    return `failure(${format$1(this.failure)})`;
  },
  toJSON() {
    return {
      _id: "Result",
      _tag: this._tag,
      failure: toJson(this.failure),
    };
  },
});
/** @internal */
const isResult$1 = (input) => hasProperty(input, TypeId$7);
/** @internal */
const isFailure$2 = (result) => result._tag === "Failure";
/** @internal */
const isSuccess$4 = (result) => result._tag === "Success";
/** @internal */
const FailureImpl = function (failure) {
  this.failure = failure;
};
FailureImpl.prototype = FailureProto;
/** @internal */
const fail$6 = (failure) => new FailureImpl(failure);
/** @internal */
const SuccessImpl = function (success) {
  this.success = success;
};
SuccessImpl.prototype = SuccessProto;
/** @internal */
const succeed$6 = (success) => new SuccessImpl(success);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Order.js
/**
 * Defines comparison functions for ordered values.
 *
 * An `Order<A>` compares two `A` values and returns whether the first is less
 * than, equal to, or greater than the second. Orders are used for sorting,
 * choosing minimum or maximum values, checking ranges, and building ordered data
 * structures. This module includes built-in orders, constructors for custom
 * orders, tools for reversing and combining comparisons, tuple and struct
 * helpers, comparison predicates, clamping, and reducer support.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Creates a new `Order` instance from a comparison function.
 *
 * **When to use**
 *
 * Use when you need a sorting rule not covered by the built-in orders or input
 * mapping helpers, and you can provide a total comparison.
 *
 * **Details**
 *
 * Uses reference equality (`===`) as a shortcut: if `self === that`, it returns
 * `0` without calling the comparison function. The comparison function should
 * return `-1`, `0`, or `1`, and the returned order satisfies total ordering
 * laws when the comparison function does.
 *
 * **Example** (Creating an Order)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const byAge = Order.make<{ name: string; age: number }>((self, that) => {
 *   if (self.age < that.age) return -1
 *   if (self.age > that.age) return 1
 *   return 0
 * })
 *
 * byAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 }) // => 1
 * byAge({ name: "Alice", age: 25 }, { name: "Bob", age: 30 }) // => -1
 * ```
 *
 * @see {@link mapInput} to transform an order by mapping the input type
 * @see {@link combine} to combine multiple orders
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
function make$6(compare) {
  return (self, that) => (self === that ? 0 : compare(self, that));
}
/**
 * Order instance for strings that compares them lexicographically using JavaScript's `<` operator.
 *
 * **When to use**
 *
 * Use when you need lexicographic string ordering.
 *
 * **Details**
 *
 * Uses lexicographic dictionary ordering. The empty string is less than any
 * non-empty string, and comparisons are case-sensitive.
 *
 * **Example** (Ordering strings)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * Order.String("apple", "banana") // => -1
 * Order.String("banana", "apple") // => 1
 * Order.String("apple", "apple") // => 0
 * ```
 *
 * @see {@link mapInput} to compare objects by a string property
 * @see {@link Struct} to combine with other orders for struct comparison
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const String$1 = /*#__PURE__*/ make$6((self, that) => (self < that ? -1 : 1));
/**
 * Order instance for numbers that compares them numerically.
 *
 * **When to use**
 *
 * Use when you need numeric ordering for numbers.
 *
 * **Details**
 *
 * `0` is considered equal to `-0`. All `NaN` values are considered equal to
 * each other, and any `NaN` is considered less than any non-`NaN` number. All
 * other values use standard numeric comparison.
 *
 * **Example** (Ordering numbers)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * Order.Number(1, 1) // => 0
 * Order.Number(1, 2) // => -1
 * Order.Number(2, 1) // => 1
 *
 * Order.Number(0, -0) // => 0
 * Order.Number(NaN, 1) // => -1
 * ```
 *
 * @see {@link mapInput} to compare objects by a number property
 * @see {@link BigInt} for bigint comparisons
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const Number$1 = /*#__PURE__*/ make$6((self, that) => {
  if (globalThis.Number.isNaN(self) && globalThis.Number.isNaN(that)) return 0;
  if (globalThis.Number.isNaN(self)) return -1;
  if (globalThis.Number.isNaN(that)) return 1;
  return self < that ? -1 : 1;
});
/**
 * Order instance for bigints that compares them numerically.
 *
 * **When to use**
 *
 * Use when you need numeric ordering for `bigint` values.
 *
 * **Details**
 *
 * Uses standard numeric comparison for bigint values and handles arbitrarily
 * large integers.
 *
 * **Example** (Ordering BigInts)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * Order.BigInt(1n, 2n) // => -1
 * Order.BigInt(2n, 1n) // => 1
 * Order.BigInt(1n, 1n) // => 0
 * ```
 *
 * @see {@link Number} for regular number comparisons
 * @see {@link mapInput} to compare objects by a bigint property
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const BigInt$1 = /*#__PURE__*/ make$6((self, that) => (self < that ? -1 : 1));
/**
 * Creates a new `Order` that reverses the comparison order of the input `Order`.
 *
 * **When to use**
 *
 * Use when you need the reverse of an existing order.
 *
 * **Details**
 *
 * Returns a new order that swaps the arguments before comparison. If the
 * original order returns `-1`, the flipped order returns `1`, and vice versa.
 * Equal comparisons remain `0`.
 *
 * **Example** (Reversing an Order)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const flip = Order.flip(Order.Number)
 *
 * flip(1, 2) // => 1
 * flip(2, 1) // => -1
 * flip(1, 1) // => 0
 * ```
 *
 * @see {@link combine} to combine orders for multi-criteria comparison
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
function flip(O) {
  return make$6((self, that) => O(that, self));
}
/**
 * Transforms an `Order` on type `A` into an `Order` on type `B` by providing a function that
 * maps values of type `B` to values of type `A`.
 *
 * **When to use**
 *
 * Use when you need to adapt an `Order` to compare a larger value by one
 * derived property.
 *
 * **Details**
 *
 * Applies the mapping function to both values before comparison. The mapping
 * function should be pure and not have side effects so the ordering properties
 * of the original order are preserved.
 *
 * **Example** (Mapping Input)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const byLength = Order.mapInput(Order.Number, (s: string) => s.length)
 *
 * byLength("a", "bb") // => -1
 * byLength("bb", "a") // => 1
 * byLength("aa", "bb") // => 0
 * ```
 *
 * @see {@link combine} to combine mapped orders for multi-criteria comparison
 * @see {@link Struct} to create orders for structs with multiple fields
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const mapInput = /*#__PURE__*/ dual(2, (self, f) => make$6((b1, b2) => self(f(b1), f(b2))));
/**
 * Order instance for `Date` objects that compares them chronologically by their timestamp.
 *
 * **When to use**
 *
 * Use when you need chronological ordering for JavaScript date values.
 *
 * **Details**
 *
 * Compares dates by their underlying timestamp in milliseconds since the epoch.
 * Earlier dates are less than later dates. Invalid dates are compared through
 * their `getTime()` result.
 *
 * **Example** (Ordering Dates)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const date1 = new Date("2023-01-01")
 * const date2 = new Date("2023-01-02")
 *
 * Order.Date(date1, date2) // => -1
 * Order.Date(date2, date1) // => 1
 * Order.Date(date1, date1) // => 0
 * ```
 *
 * @see {@link mapInput} to compare objects by a date property
 * @stability stable
 * @category instances
 * @since 2.0.0
 */
const Date$1 = /*#__PURE__*/ mapInput(Number$1, (date) => date.getTime());
/**
 * Checks whether one value is strictly less than another according to the given order.
 *
 * **When to use**
 *
 * Use when you need a boolean less-than predicate using an `Order`.
 *
 * **Details**
 *
 * Returns `true` if the order returns `-1`, meaning the first value is less
 * than the second. Equal or greater values return `false`.
 *
 * **Example** (Checking less-than comparisons)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const isLessThanNumber = Order.isLessThan(Order.Number)
 *
 * isLessThanNumber(1, 2) // => true
 * isLessThanNumber(2, 1) // => false
 * isLessThanNumber(1, 1) // => false
 * ```
 *
 * @see {@link isLessThanOrEqualTo} for non-strict less than or equal
 * @see {@link isGreaterThan} for strict greater than
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isLessThan = (O) => dual(2, (self, that) => O(self, that) === -1);
/**
 * Checks whether one value is strictly greater than another according to the given order.
 *
 * **When to use**
 *
 * Use when you need a boolean greater-than predicate using an `Order`.
 *
 * **Details**
 *
 * Returns `true` if the order returns `1`, meaning the first value is greater
 * than the second. Equal or lesser values return `false`.
 *
 * **Example** (Checking greater-than comparisons)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const isGreaterThanNumber = Order.isGreaterThan(Order.Number)
 *
 * isGreaterThanNumber(2, 1) // => true
 * isGreaterThanNumber(1, 2) // => false
 * isGreaterThanNumber(1, 1) // => false
 * ```
 *
 * @see {@link isGreaterThanOrEqualTo} for non-strict greater than or equal
 * @see {@link isLessThan} for strict less than
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isGreaterThan = (O) => dual(2, (self, that) => O(self, that) === 1);
/**
 * Checks whether one value is less than or equal to another according to the given order.
 *
 * **When to use**
 *
 * Use when you need a boolean less-than-or-equal predicate using an `Order`.
 *
 * **Details**
 *
 * Returns `true` if the order returns `-1` or `0`, and returns `false` only if
 * the order returns `1`.
 *
 * **Example** (Checking less-than-or-equal comparisons)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const isLessThanOrEqualToNumber = Order.isLessThanOrEqualTo(Order.Number)
 *
 * isLessThanOrEqualToNumber(1, 2) // => true
 * isLessThanOrEqualToNumber(1, 1) // => true
 * isLessThanOrEqualToNumber(2, 1) // => false
 * ```
 *
 * @see {@link isLessThan} for strict less than
 * @see {@link isGreaterThan} for strict greater than
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isLessThanOrEqualTo$1 = (O) => dual(2, (self, that) => O(self, that) !== 1);
/**
 * Checks whether one value is greater than or equal to another according to the given order.
 *
 * **When to use**
 *
 * Use when you need a boolean greater-than-or-equal predicate using an
 * `Order`.
 *
 * **Details**
 *
 * Returns `true` if the order returns `1` or `0`, and returns `false` only if
 * the order returns `-1`.
 *
 * **Example** (Checking greater-than-or-equal comparisons)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const isGreaterThanOrEqualToNumber = Order.isGreaterThanOrEqualTo(Order.Number)
 *
 * isGreaterThanOrEqualToNumber(2, 1) // => true
 * isGreaterThanOrEqualToNumber(1, 1) // => true
 * isGreaterThanOrEqualToNumber(1, 2) // => false
 * ```
 *
 * @see {@link isGreaterThan} for strict greater than
 * @see {@link isLessThanOrEqualTo} for less than or equal
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isGreaterThanOrEqualTo$1 = (O) => dual(2, (self, that) => O(self, that) !== -1);
/**
 * Returns the minimum of two values according to the given order. If they are equal, returns the first argument.
 *
 * **When to use**
 *
 * Use when you need to select the smaller of two values according to an
 * `Order`.
 *
 * **Details**
 *
 * Returns the value that compares as less than or equal to the other value. If
 * values are equal, the first argument is returned.
 *
 * **Example** (Selecting the minimum value)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const minNumber = Order.min(Order.Number)
 *
 * minNumber(1, 2) // => 1
 * minNumber(2, 1) // => 1
 * minNumber(1, 1) // => 1
 * ```
 *
 * @see {@link max} for the maximum of two values
 * @see {@link clamp} to clamp a value between min and max
 * @stability stable
 * @category comparisons
 * @since 2.0.0
 */
const min$1 = (O) => dual(2, (self, that) => (self === that || O(self, that) < 1 ? self : that));
/**
 * Returns the maximum of two values according to the given order. If they are equal, returns the first argument.
 *
 * **When to use**
 *
 * Use when you need to select the larger of two values according to an
 * `Order`.
 *
 * **Details**
 *
 * Returns the value that compares as greater than or equal to the other value.
 * If values are equal, the first argument is returned.
 *
 * **Example** (Selecting the maximum value)
 *
 * ```ts import.meta.vitest
 * import { Order } from "effect"
 *
 * const maxNumber = Order.max(Order.Number)
 *
 * maxNumber(1, 2) // => 2
 * maxNumber(2, 1) // => 2
 * maxNumber(1, 1) // => 1
 * ```
 *
 * @see {@link min} for the minimum of two values
 * @see {@link clamp} to clamp a value between min and max
 * @stability stable
 * @category comparisons
 * @since 2.0.0
 */
const max$1 = (O) => dual(2, (self, that) => (self === that || O(self, that) > -1 ? self : that));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Option.js
/**
 * Creates an `Option` representing the absence of a value.
 *
 * **When to use**
 *
 * Use to represent a missing or uninitialized value, such as returning "no
 * result" from a function.
 *
 * **Details**
 *
 * - Returns `Option<never>`, which is a subtype of `Option<A>` for any `A`
 * - Always returns the same singleton instance
 *
 * **Example** (Creating an empty Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * //      ┌─── Option<never>
 * //      ▼
 * const noValue = Option.none() // => Option.none()
 * ```
 *
 * @see {@link some} for the opposite operation.
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const none = () => none$1;
/**
 * Wraps the given value into an `Option` to represent its presence.
 *
 * **When to use**
 *
 * Use to wrap a known present value as `Option`
 * - Returning a successful result from a partial function
 *
 * **Details**
 *
 * - Always returns `Some<A>`
 * - Does not filter `null` or `undefined`; use {@link fromNullishOr} for that
 *
 * **Example** (Wrapping a value)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * //      ┌─── Option<number>
 * //      ▼
 * const value = Option.some(1) // => Option.some(1)
 * ```
 *
 * @see {@link none} for the opposite operation.
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const some = some$1;
/**
 * Determines whether the given value is an `Option`.
 *
 * **When to use**
 *
 * Use to validate unknown values at runtime boundaries, such as type-narrowing
 * in union types.
 *
 * **Details**
 *
 * - Returns `true` for both `Some` and `None` instances
 * - Acts as a type guard, narrowing the input to `Option<unknown>`
 *
 * **Example** (Checking if a value is an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.isOption(Option.some(1)) // => true
 * Option.isOption(Option.none()) // => true
 * Option.isOption({}) // => false
 * ```
 *
 * @see {@link isNone} to check for `None` specifically
 * @see {@link isSome} to check for `Some` specifically
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isOption = isOption$1;
/**
 * Checks whether an `Option` is `None` (absent).
 *
 * **When to use**
 *
 * Use when you need to branch on an absent `Option` before accessing `.value`.
 *
 * **Details**
 *
 * - Acts as a type guard, narrowing to `None<A>`
 *
 * **Example** (Checking for None)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.isNone(Option.some(1)) // => false
 * Option.isNone(Option.none()) // => true
 * ```
 *
 * @see {@link isSome} for the opposite check.
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isNone = isNone$1;
/**
 * Checks whether an `Option` contains a value (`Some`).
 *
 * **When to use**
 *
 * Use when you need to branch on a present `Option` before accessing `.value`.
 *
 * **Details**
 *
 * - Acts as a type guard, narrowing to `Some<A>`
 *
 * **Example** (Checking for Some)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.isSome(Option.some(1)) // => true
 * Option.isSome(Option.none()) // => false
 * ```
 *
 * @see {@link isNone} for the opposite check.
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isSome = isSome$1;
/**
 * Pattern-matches on an `Option`, handling both `None` and `Some` cases.
 *
 * **When to use**
 *
 * Use when you need to handle both `Some` and `None` in one expression and
 * transform an `Option` into a plain value.
 *
 * **Details**
 *
 * - If `None`, calls `onNone` and returns its result
 * - If `Some`, calls `onSome` with the value and returns its result
 * - Supports the `dual` API (data-last and data-first)
 *
 * **Example** (Matching on an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.match(Option.some(1), {
 *   onNone: () => "Option is empty",
 *   onSome: (value) => `Option has a value: ${value}`
 * }) // => "Option has a value: 1"
 * ```
 *
 * @see {@link getOrElse} for unwrapping with a default
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match$6 = /*#__PURE__*/ dual(2, (self, { onNone, onSome }) =>
  isNone(self) ? onNone() : onSome(self.value),
);
/**
 * Extracts the value from a `Some`, or evaluates a fallback thunk on `None`.
 *
 * **When to use**
 *
 * Use when providing a default value for an absent `Option`
 * - Unwrapping with lazy evaluation of the fallback
 *
 * **Details**
 *
 * - `Some` → returns the inner value
 * - `None` → calls `onNone()` and returns its result
 * - `onNone` is only called when needed (lazy)
 *
 * **Example** (Unwrapping with a fallback)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.some(1).pipe(Option.getOrElse(() => 0)) // => 1
 * Option.none().pipe(Option.getOrElse(() => 0)) // => 0
 * ```
 *
 * @see {@link getOrNull} to fall back to `null`
 * @see {@link getOrUndefined} to fall back to `undefined`
 * @see {@link getOrThrow} to throw on `None`
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOrElse$2 = /*#__PURE__*/ dual(2, (self, onNone) => (isNone(self) ? onNone() : self.value));
/**
 * Returns the fallback `Option` if `self` is `None`; otherwise returns `self`.
 *
 * **When to use**
 *
 * Use when you need a lazy fallback `Option`, such as when building priority
 * chains of optional values.
 *
 * **Details**
 *
 * - `Some` → returns `self` unchanged
 * - `None` → evaluates and returns `that()`
 * - `that` is lazily evaluated
 *
 * **Example** (Providing a fallback Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.none().pipe(Option.orElse(() => Option.some("b"))) // => Option.some("b")
 * Option.some("a").pipe(Option.orElse(() => Option.some("b"))) // => Option.some("a")
 * ```
 *
 * @see {@link orElseSome} to wrap the fallback value in `Some` automatically
 * @see {@link firstSomeOf} to pick the first `Some` from a collection
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orElse = /*#__PURE__*/ dual(2, (self, that) => (isNone(self) ? that() : self));
/**
 * Returns the first `Some` found in an iterable of `Option`s, or `None` if
 * all are `None`.
 *
 * **When to use**
 *
 * Use when you need the first available `Some` value from a priority list.
 *
 * **Details**
 *
 * - Short-circuits on the first `Some`
 * - Returns `None` only when every element is `None`
 *
 * **Example** (Finding the first Some)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.firstSomeOf([
 *   Option.none(),
 *   Option.some(1),
 *   Option.some(2)
 * ]) // => Option.some(1)
 * ```
 *
 * @see {@link orElse} for a two-option fallback
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const firstSomeOf = (collection) => {
  let out = none();
  for (out of collection) if (isSome(out)) return out;
  return out;
};
/**
 * Converts a nullable value (`null` or `undefined`) into an `Option`.
 *
 * **When to use**
 *
 * Use when you need JavaScript nullish values to become absence at an API
 * boundary while all other values, including falsy ones, remain present.
 *
 * **Details**
 *
 * - `null` or `undefined` → `None`
 * - Any other value → `Some` (typed as `NonNullable<A>`)
 *
 * **Example** (Converting nullable values to an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.fromNullishOr(undefined) // => Option.none()
 * Option.fromNullishOr(null) // => Option.none()
 * Option.fromNullishOr(1) // => Option.some(1)
 * ```
 *
 * @see {@link fromNullOr} to only treat `null` as absent
 * @see {@link fromUndefinedOr} to only treat `undefined` as absent
 * @see {@link liftNullishOr} to lift a nullable-returning function
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromNullishOr$1 = (a) => (a == null ? none() : some(a));
/**
 * Converts a possibly `undefined` value into an `Option`, leaving `null`
 * as a valid `Some`.
 *
 * **When to use**
 *
 * Use when you want to treat only `undefined` as absent while preserving `null`
 * as a meaningful value.
 *
 * **Details**
 *
 * - `undefined` → `None`
 * - Any other value (including `null`) → `Some`
 *
 * **Example** (Converting possibly undefined values to an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.fromUndefinedOr(undefined) // => Option.none()
 * Option.fromUndefinedOr(null) // => Option.some(null)
 * Option.fromUndefinedOr(42) // => Option.some(42)
 * ```
 *
 * @see {@link fromNullishOr} to treat both `null` and `undefined` as absent
 * @see {@link fromNullOr} to only treat `null` as absent
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromUndefinedOr = (a) => (a === void 0 ? none() : some(a));
/**
 * Converts a possibly `null` value into an `Option`, leaving `undefined`
 * as a valid `Some`.
 *
 * **When to use**
 *
 * Use when you want to treat only `null` as absent while preserving
 * `undefined` as a meaningful value.
 *
 * **Details**
 *
 * - `null` → `None`
 * - Any other value (including `undefined`) → `Some`
 *
 * **Example** (Converting possibly null values to an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.fromNullOr(null) // => Option.none()
 * Option.fromNullOr(undefined) // => Option.some(undefined)
 * Option.fromNullOr(42) // => Option.some(42)
 * ```
 *
 * @see {@link fromNullishOr} to treat both `null` and `undefined` as absent
 * @see {@link fromUndefinedOr} to only treat `undefined` as absent
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromNullOr = (a) => (a === null ? none() : some(a));
/**
 * Extracts the value from a `Some`, or returns `null` for `None`.
 *
 * **When to use**
 *
 * Use when you need to pass absent `Option` values to APIs that expect `null`.
 *
 * **Details**
 *
 * - `Some` → the inner value
 * - `None` → `null`
 *
 * **Example** (Unwrapping to null)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.getOrNull(Option.some(1)) // => 1
 * Option.getOrNull(Option.none()) // => null
 * ```
 *
 * @see {@link getOrUndefined} to return `undefined` instead
 * @see {@link getOrElse} for a custom fallback
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOrNull = /*#__PURE__*/ getOrElse$2(constNull);
/**
 * Extracts the value from a `Some`, or returns `undefined` for `None`.
 *
 * **When to use**
 *
 * Use when you need to pass absent `Option` values to APIs that expect
 * `undefined`.
 *
 * **Details**
 *
 * - `Some` → the inner value
 * - `None` → `undefined`
 *
 * **Example** (Unwrapping to undefined)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.getOrUndefined(Option.some(1)) // => 1
 * Option.getOrUndefined(Option.none()) // => undefined
 * ```
 *
 * @see {@link getOrNull} to return `null` instead
 * @see {@link getOrElse} for a custom fallback
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOrUndefined$2 = /*#__PURE__*/ getOrElse$2(constUndefined);
/**
 * Lifts a function that may throw into one that returns an `Option`.
 *
 * **When to use**
 *
 * Use to wrap exception-throwing APIs (e.g. `JSON.parse`) for safe usage
 *
 * **Details**
 *
 * - If the function returns normally → `Some` with the result
 * - If the function throws → `None` (exception is swallowed)
 *
 * **Example** (Lifting JSON.parse)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * const parse = Option.liftThrowable(JSON.parse)
 *
 * parse("1") // => Option.some(1)
 * parse("") // => Option.none()
 * ```
 *
 * @see {@link liftNullishOr} for nullable-returning functions
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const liftThrowable =
  (f) =>
  (...a) => {
    try {
      return some(f(...a));
    } catch {
      return none();
    }
  };
/**
 * Extracts the value from a `Some`, or throws a default `Error` for `None`.
 *
 * **When to use**
 *
 * Use when you need quick fail-fast unwrapping of an `Option` and a generic
 * error is acceptable.
 *
 * **Details**
 *
 * - `Some` → returns the inner value
 * - `None` → throws `new Error("getOrThrow called on a None")`
 *
 * **Example** (Throwing a default error)
 *
 * ```ts import.meta.vitest
 * import { Option, Result } from "effect"
 *
 * Option.getOrThrow(Option.some(1)) // => 1
 *
 * const failure = Result.try({
 *   try: () => Option.getOrThrow(Option.none()),
 *   catch: (error) => (error as Error).message
 * })
 * Result.getFailure(failure).pipe(Option.getOrElse(() => "no error")) // => "getOrThrow called on a None"
 * ```
 *
 * @see {@link getOrThrowWith} for a custom error
 * @see {@link getOrElse} for a non-throwing alternative
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const getOrThrow$1 = /*#__PURE__*/ /* @__PURE__ */ dual(2, (self, onNone) => {
  if (isSome(self)) return self.value;
  throw onNone();
})(() => /* @__PURE__ */ new Error("getOrThrow called on a None"));
/**
 * Transforms the value inside a `Some` using the provided function, leaving
 * `None` unchanged.
 *
 * **When to use**
 *
 * Use to apply a pure transformation to an `Option`'s present value, especially
 * when chaining transformations in a pipeline.
 *
 * **Details**
 *
 * - `Some` → applies `f` and wraps the result in a new `Some`
 * - `None` → returns `None` unchanged
 *
 * **Example** (Mapping over an Option)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.map(Option.some(2), (n) => n * 2) // => Option.some(4)
 * Option.map(Option.none(), (n: number) => n * 2) // => Option.none()
 * ```
 *
 * @see {@link flatMap} when `f` returns an `Option`
 * @see {@link as} to replace the value with a constant
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map$5 = /*#__PURE__*/ dual(2, (self, f) => (isNone(self) ? none() : some(f(self.value))));
/**
 * Applies a function that returns an `Option` to the value of a `Some`,
 * flattening the result. Returns `None` if the input is `None`.
 *
 * **When to use**
 *
 * Use when you need to chain dependent `Option` computations where each step
 * may return `None`.
 *
 * **Details**
 *
 * - `Some` → applies `f` to the value and returns its `Option` result
 * - `None` → returns `None` without calling `f`
 * - Equivalent to `map` followed by {@link flatten}
 *
 * **Example** (Chaining optional lookups)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * interface User {
 *   readonly name: string
 *   readonly address: Option.Option<{ readonly street: Option.Option<string> }>
 * }
 *
 * const user: User = {
 *   name: "John",
 *   address: Option.some({ street: Option.some("123 Main St") })
 * }
 *
 * user.address.pipe(
 *   Option.flatMap((addr) => addr.street)
 * ) // => Option.some("123 Main St")
 * ```
 *
 * @see {@link map} when `f` returns a plain value
 * @see {@link andThen} for a more flexible variant
 * @see {@link flatten} to unwrap a nested `Option<Option<A>>`
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap$5 = /*#__PURE__*/ dual(2, (self, f) => (isNone(self) ? none() : f(self.value)));
/**
 * Combines {@link flatMap} with {@link fromNullishOr}: applies a function that
 * may return `null`/`undefined` to the value of a `Some`.
 *
 * **When to use**
 *
 * Use when you need to chain optional computations that use `null` or
 * `undefined` instead of `Option`, such as nested property access.
 *
 * **Details**
 *
 * - `None` → `None`
 * - `Some` → applies `f`, then wraps via {@link fromNullishOr}
 *
 * **Example** (Navigating optional properties)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * interface Employee {
 *   company?: { address?: { street?: { name?: string } } }
 * }
 *
 * const emp: Employee = {
 *   company: { address: { street: { name: "high street" } } }
 * }
 *
 * Option.some(emp).pipe(
 *   Option.flatMapNullishOr((e) => e.company?.address?.street?.name)
 * ) // => Option.some("high street")
 * ```
 *
 * @see {@link flatMap} when the function already returns `Option`
 * @see {@link fromNullishOr} for single-value conversion
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const flatMapNullishOr$1 = /*#__PURE__*/ dual(2, (self, f) =>
  isNone(self) ? none() : fromNullishOr$1(f(self.value)),
);
/**
 * Flattens a nested `Option<Option<A>>` into `Option<A>`.
 *
 * **When to use**
 *
 * Use when you need to remove one layer of nested `Option`.
 *
 * **Details**
 *
 * - `Some(Some(value))` → `Some(value)`
 * - `Some(None)` → `None`
 * - `None` → `None`
 *
 * **Example** (Flattening nested Options)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.flatten(Option.some(Option.some("value"))) // => Option.some("value")
 * Option.flatten(Option.some(Option.none())) // => Option.none()
 * ```
 *
 * @see {@link flatMap} which is `map` + `flatten`
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatten$3 = /*#__PURE__*/ flatMap$5(identity);
/**
 * Converts an `Option` into an `Array`.
 *
 * **When to use**
 *
 * Use when you need to pass an `Option` to array-based APIs or spread optional
 * values into collections.
 *
 * **Details**
 *
 * - `Some` → single-element array `[value]`
 * - `None` → empty array `[]`
 *
 * **Example** (Converting to an array)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.toArray(Option.some(1)) // => [1]
 * Option.toArray(Option.none()) // => []
 * ```
 *
 * @see {@link fromIterable} for the inverse direction
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const toArray = (self) => (isNone(self) ? [] : [self.value]);
/**
 * Filters an `Option` using a predicate. Returns `None` if the predicate is
 * not satisfied or the input is `None`.
 *
 * **When to use**
 *
 * Use when you need to discard an `Option`'s present value when it does not
 * meet a condition, while narrowing the type via a refinement predicate.
 *
 * **Details**
 *
 * - `None` → `None`
 * - `Some` where `predicate(value)` is `true` → `Some(value)`
 * - `Some` where `predicate(value)` is `false` → `None`
 * - Supports refinements for type narrowing
 *
 * **Example** (Filtering with a predicate)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * const removeEmpty = (input: Option.Option<string>) =>
 *   Option.filter(input, (value) => value !== "")
 *
 * removeEmpty(Option.some("hello")) // => Option.some("hello")
 * removeEmpty(Option.some("")) // => Option.none()
 * removeEmpty(Option.none()) // => Option.none()
 * ```
 *
 * @see {@link filterMap} to transform and filter simultaneously
 * @see {@link exists} to test without filtering
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filter$3 = /*#__PURE__*/ dual(2, (self, predicate) =>
  isNone(self) ? none() : predicate(self.value) ? some(self.value) : none(),
);
/**
 * Creates an `Order` for `Option<A>` from an `Order` for `A`.
 *
 * **When to use**
 *
 * Use when you need to sort `Some` and `None` values, with `None` ordered
 * before present values and present values compared by a supplied ordering
 * rule.
 *
 * **Details**
 *
 * - `None` is considered less than any `Some`
 * - Two `Some` values are compared using the provided `Order`
 * - Two `None` values are equal (returns `0`)
 *
 * **Example** (Ordering Options)
 *
 * ```ts import.meta.vitest
 * import { Number as N, Option } from "effect"
 *
 * const ord = Option.makeOrder(N.Order)
 *
 * ord(Option.none(), Option.some(1)) // => -1
 * ord(Option.some(1), Option.none()) // => 1
 * ord(Option.some(1), Option.some(2)) // => -1
 * ```
 *
 * @stability stable
 * @category sorting
 * @since 4.0.0
 */
const makeOrder = (O) =>
  make$6((self, that) => (isSome(self) ? (isSome(that) ? O(self.value, that.value) : 1) : -1));
/**
 * Checks whether an `Option` contains a value equivalent to the given one, using a
 * custom `Equivalence`.
 *
 * **When to use**
 *
 * Use when you need to test whether an `Option` contains a value using a
 * custom equality check.
 *
 * **Details**
 *
 * - `Some` where `isEquivalent(value, a)` is `true` → `true`
 * - `Some` where not equivalent, or `None` → `false`
 *
 * **Example** (Checking with custom equivalence)
 *
 * ```ts import.meta.vitest
 * import { Equivalence, Option } from "effect"
 *
 * const check = Option.containsWith(Equivalence.strictEqual<number>())
 *
 * Option.some(2).pipe(check(2)) // => true
 * Option.some(1).pipe(check(2)) // => false
 * Option.none().pipe(check(2)) // => false
 * ```
 *
 * @see {@link contains} for a version using default equality
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const containsWith = (isEquivalent) =>
  dual(2, (self, a) => (isNone(self) ? false : isEquivalent(self.value, a)));
/**
 * Checks whether an `Option` contains a value equal to the given one, using default
 * structural equality.
 *
 * **When to use**
 *
 * Use when you need a quick membership test for an `Option` value using
 * standard equality.
 *
 * **Details**
 *
 * - `Some` where `Equal.equals(value, a)` is `true` → `true`
 * - `Some` where not equal, or `None` → `false`
 *
 * **Example** (Checking containment)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * Option.some(2).pipe(Option.contains(2)) // => true
 * Option.some(1).pipe(Option.contains(2)) // => false
 * Option.none().pipe(Option.contains(2)) // => false
 * ```
 *
 * @see {@link containsWith} for custom equality
 * @see {@link exists} to test with a predicate
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const contains = /*#__PURE__*/ containsWith(/*#__PURE__*/ asEquivalence());
/**
 * Checks whether the value in a `Some` satisfies a predicate or refinement.
 *
 * **When to use**
 *
 * Use to check a condition on an optional value without unwrapping
 *
 * **Details**
 *
 * - `None` → `false`
 * - `Some` where `predicate(value)` is `true` → `true`
 * - `Some` where `predicate(value)` is `false` → `false`
 * - With a refinement, narrows the `Option` type on `true`
 *
 * **Example** (Testing a condition)
 *
 * ```ts import.meta.vitest
 * import { Option } from "effect"
 *
 * const isEven = (n: number) => n % 2 === 0
 *
 * Option.some(2).pipe(Option.exists(isEven)) // => true
 * Option.some(1).pipe(Option.exists(isEven)) // => false
 * Option.none().pipe(Option.exists(isEven)) // => false
 * ```
 *
 * @see {@link filter} to keep or discard based on a predicate
 * @see {@link contains} to test for a specific value
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const exists = /*#__PURE__*/ dual(2, (self, refinement) =>
  isNone(self) ? false : refinement(self.value),
);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Result.js
/**
 * Creates a `Result` holding a `Success` value.
 *
 * **Details**
 *
 * - Use when you have a value and want to lift it into the `Result` type
 * - The error type `E` defaults to `never`
 *
 * **Example** (Wrapping a value)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.succeed(42) // => Result.succeed(42)
 * ```
 *
 * @see {@link fail} to create a Failure
 * @see {@link void_ void} for a pre-built `Success<void>`
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const succeed$5 = succeed$6;
/**
 * Creates a `Result` holding a `Failure` value.
 *
 * **When to use**
 *
 * Use to represent a failed `Result` with a typed failure value.
 *
 * **Details**
 *
 * - The success type `A` defaults to `never`
 *
 * **Example** (Creating a failure)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.fail("Something went wrong") // => Result.fail("Something went wrong")
 * ```
 *
 * @see {@link succeed} to create a Success
 * @see {@link mapError} to transform the error
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fail$5 = fail$6;
/**
 * Provides a pre-built failed `Result` whose failure value is `undefined`.
 *
 * **When to use**
 *
 * Use when you need a failed `Result` value that acts only as a control signal
 * without failure data.
 *
 * **Details**
 *
 * This is equivalent to `Result.fail(undefined)` with type
 * `Result<never, void>`, but reuses a shared `Failure` wrapper instead of
 * allocating one each time.
 *
 * **Example** (Failing without a payload)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.failVoid // => Result.fail(undefined)
 * ```
 *
 * @see {@link fail} to create a Failure with a specific value
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const failVoid = /*#__PURE__*/ fail$5(void 0);
const try_$2 = (evaluate) => {
  if (isFunction(evaluate))
    try {
      return succeed$5(evaluate());
    } catch (e) {
      return fail$5(e);
    }
  else
    try {
      return succeed$5(evaluate.try());
    } catch (e) {
      return fail$5(evaluate.catch(e));
    }
};
/**
 * Checks whether a value is a `Result` (either `Success` or `Failure`).
 *
 * **When to use**
 *
 * Use to validate unknown input before operating on it as a `Result`.
 *
 * **Details**
 *
 * - Returns `true` for both `Success` and `Failure` variants
 * - Acts as a TypeScript type guard, narrowing to `Result<unknown, unknown>`
 *
 * **Example** (Checking if a value is a Result)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.isResult(Result.succeed(1)) // => true
 *
 * Result.isResult({ value: 1 }) // => false
 * ```
 *
 * @see {@link isSuccess} / {@link isFailure} to narrow to a specific variant
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isResult = isResult$1;
/**
 * Checks whether a `Result` is a `Failure`.
 *
 * **When to use**
 *
 * Use to narrow a known `Result` to the `Failure` variant.
 *
 * **Details**
 *
 * - Acts as a TypeScript type guard, narrowing to `Failure<A, E>`
 * - After narrowing, you can access `.failure` to read the error value
 *
 * **Example** (Narrowing to failure)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * const result = Result.fail("oops")
 *
 * if (Result.isFailure(result)) {
 *   result.failure // => "oops"
 * }
 * ```
 *
 * @see {@link isSuccess} for the opposite check
 * @see {@link isResult} to check if a value is any Result
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isFailure$1 = isFailure$2;
/**
 * Checks whether a `Result` is a `Success`.
 *
 * **When to use**
 *
 * Use to narrow a known `Result` to the `Success` variant.
 *
 * **Details**
 *
 * - Acts as a TypeScript type guard, narrowing to `Success<A, E>`
 * - After narrowing, you can access `.success` to read the value
 *
 * **Example** (Narrowing to success)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * const result = Result.succeed(42)
 *
 * if (Result.isSuccess(result)) {
 *   result.success // => 42
 * }
 * ```
 *
 * @see {@link isFailure} for the opposite check
 * @see {@link isResult} to check if a value is any Result
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isSuccess$3 = isSuccess$4;
/**
 * Transforms the failure channel of a `Result`, leaving the success channel unchanged.
 *
 * **When to use**
 *
 * Use to transform only the failure channel while preserving success values.
 *
 * **Details**
 *
 * - If the result is a `Failure`, applies `f` to the error and returns a new `Failure`
 * - If the result is a `Success`, returns it as-is
 *
 * **Example** (Adding context to an error)
 *
 * ```ts import.meta.vitest
 * import { pipe, Result } from "effect"
 *
 * pipe(
 *   Result.fail("not found"),
 *   Result.mapError((e) => `Error: ${e}`)
 * ) // => Result.fail("Error: not found")
 * ```
 *
 * @see {@link map} to transform only the success value
 * @see {@link mapBoth} to transform both channels
 *
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const mapError$2 = /*#__PURE__*/ dual(2, (self, f) =>
  isFailure$1(self) ? fail$5(f(self.failure)) : self,
);
/**
 * Transforms the success channel of a `Result`, leaving the failure channel unchanged.
 *
 * **When to use**
 *
 * Use to apply a transformation to the success value of a `Result` while
 * preserving any existing failure.
 *
 * **Details**
 *
 * - If the result is a `Success`, applies `f` to the value and returns a new `Success`
 * - If the result is a `Failure`, returns it as-is
 * - Use {@link flatMap} if `f` returns a `Result` (to avoid nested Results)
 *
 * **Example** (Doubling the success value)
 *
 * ```ts import.meta.vitest
 * import { pipe, Result } from "effect"
 *
 * pipe(
 *   Result.succeed(3),
 *   Result.map((n) => n * 2)
 * ) // => Result.succeed(6)
 * ```
 *
 * @see {@link mapError} to transform only the error value
 * @see {@link mapBoth} to transform both channels
 * @see {@link flatMap} when `f` returns a `Result`
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map$4 = /*#__PURE__*/ dual(2, (self, f) =>
  isSuccess$3(self) ? succeed$5(f(self.success)) : self,
);
/**
 * Folds a `Result` into a single value by applying one of two functions.
 *
 * **When to use**
 *
 * Use when a `Result`'s success and failure branches should be collapsed into
 * one plain output type.
 *
 * **Details**
 *
 * - Applies `onSuccess` if the result is a `Success`
 * - Applies `onFailure` if the result is a `Failure`
 * - Both branches must return the same type (or a common supertype)
 *
 * **Example** (Folding to a string)
 *
 * ```ts import.meta.vitest
 * import { pipe, Result } from "effect"
 *
 * const format = Result.match({
 *   onSuccess: (n: number) => `Got ${n}`,
 *   onFailure: (e: string) => `Err: ${e}`
 * })
 *
 * format(Result.succeed(42)) // => "Got 42"
 *
 * format(Result.fail("timeout")) // => "Err: timeout"
 * ```
 *
 * @see {@link merge} to extract `A | E` without mapping
 * @see {@link getOrElse} to unwrap only the success with a fallback
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match$5 = /*#__PURE__*/ dual(2, (self, { onFailure, onSuccess }) =>
  isFailure$1(self) ? onFailure(self.failure) : onSuccess(self.success),
);
/**
 * Extracts the success value, or returns `undefined` on failure.
 *
 * **When to use**
 *
 * Use when you need to pass failed `Result` values to APIs that represent
 * absence as `undefined`.
 *
 * **Details**
 *
 * - `Success<A>` returns `A`
 * - `Failure<E>` returns `undefined`
 *
 * **Example** (Unwrapping to optional)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.getOrUndefined(Result.succeed(1)) // => 1
 *
 * Result.getOrUndefined(Result.fail("err")) // => undefined
 * ```
 *
 * @see {@link getOrNull} to return `null` instead
 * @see {@link getOrElse} for a custom fallback
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOrUndefined$1 = /*#__PURE__*/ /* @__PURE__ */ dual(2, (self, onFailure) =>
  isFailure$1(self) ? onFailure(self.failure) : self.success,
)(constUndefined);
/**
 * Extracts the success value or throws the raw failure value `E`.
 *
 * **When to use**
 *
 * Use when unchecked boundaries should turn failures into thrown exceptions.
 *
 * **Details**
 *
 * - `Success<A>` returns `A`
 * - `Failure<E>` throws `E` directly
 * - Use {@link getOrThrowWith} for a custom error object
 *
 * **Example** (Unwrapping or throwing)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * Result.getOrThrow(Result.succeed(1)) // => 1
 *
 * const failure = Result.try(() => Result.getOrThrow(Result.fail("error")))
 * Result.merge(failure) // => "error"
 * ```
 *
 * @see {@link getOrThrowWith} for custom error mapping
 * @see {@link getOrElse} for a non-throwing alternative
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOrThrow = /*#__PURE__*/ /* @__PURE__ */ dual(2, (self, onFailure) => {
  if (isSuccess$3(self)) return self.success;
  throw onFailure(self.failure);
})(identity);
/**
 * Chains a function that returns a `Result` onto a successful value.
 *
 * **When to use**
 *
 * Use to sequence `Result`-returning computations that should short-circuit on
 * failure.
 *
 * **Details**
 *
 * - If `self` is a `Success`, applies `f` to the value and returns the resulting `Result`
 * - If `self` is a `Failure`, short-circuits and returns it unchanged
 * - The error types are merged into a union (`E | E2`)
 * - This is the monadic `bind` / `>>=` for `Result`
 *
 * **Example** (Validating sequentially)
 *
 * ```ts import.meta.vitest
 * import { pipe, Result } from "effect"
 *
 * pipe(
 *   Result.succeed(5),
 *   Result.flatMap((n) =>
 *     n > 0 ? Result.succeed(n * 2) : Result.fail("not positive")
 *   )
 * ) // => Result.succeed(10)
 * ```
 *
 * @see {@link andThen} for a more flexible variant that also accepts plain values
 * @see {@link map} when `f` does not return a `Result`
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap$4 = /*#__PURE__*/ dual(2, (self, f) =>
  isFailure$1(self) ? fail$5(self.failure) : f(self.success),
);
/**
 * Collects a structure of `Result`s into a single `Result` of collected values.
 *
 * **When to use**
 *
 * Use to collect independent `Result` values into one `Result` while preserving
 * the original structure.
 *
 * **Details**
 *
 * Accepts:
 * - A tuple/array: returns `Result` with a tuple/array of success values
 * - A struct (record): returns `Result` with a struct of success values
 * - An iterable: returns `Result` with an array of success values
 *
 * Short-circuits on the first `Failure` encountered; later elements are not inspected.
 *
 * **Example** (Collecting a tuple and a struct)
 *
 * ```ts import.meta.vitest
 * import { Result } from "effect"
 *
 * // Tuple
 * Result.all([Result.succeed(1), Result.succeed("two")]) // => Result.succeed([1, "two"])
 *
 * // Struct
 * Result.all({ x: Result.succeed(1), y: Result.fail("err") }) // => Result.fail("err")
 * ```
 *
 * @see {@link flatMap} for chaining two Results sequentially
 * @see {@link gen} for generator-based composition of multiple Results
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const all$2 = (input) => {
  if (Symbol.iterator in input) {
    const out = [];
    for (const e of input) {
      if (isFailure$1(e)) return e;
      out.push(e.success);
    }
    return succeed$5(out);
  }
  const out = {};
  for (const key of Object.keys(input)) {
    const e = input[key];
    if (isFailure$1(e)) return e;
    assignProperty(out, key, e.success);
  }
  return succeed$5(out);
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Iterable.js
/**
 * Gets the first element of an `Iterable` without returning an `Option`.
 *
 * **When to use**
 *
 * Use when the `Iterable` is known to be non-empty and direct access to the
 * first element is preferred over handling `Option.none`.
 *
 * **Gotchas**
 *
 * Throws if the `Iterable` is empty.
 *
 * **Example** (Getting the first element unsafely)
 *
 * ```ts import.meta.vitest
 * import { Iterable } from "effect"
 *
 * const numbers = [1, 2, 3]
 * Iterable.headUnsafe(numbers) // => 1
 *
 * const letters = "hello"
 * Iterable.headUnsafe(letters) // => "h"
 *
 * // Iterable.headUnsafe(Iterable.empty<number>())
 * // throws Error: "headUnsafe: empty iterable"
 *
 * // Use only when you're certain the iterable is non-empty
 * const nonEmpty = Iterable.range(1, 10)
 * Iterable.headUnsafe(nonEmpty) // => 1
 * ```
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
const headUnsafe = (self) => {
  const result = self[Symbol.iterator]().next();
  if (result.done) throw new Error("headUnsafe: empty iterable");
  return result.value;
};
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * **Example** (Finding the first match)
 *
 * ```ts import.meta.vitest
 * import { Iterable, Option } from "effect"
 *
 * const numbers = [1, 3, 4, 6, 8]
 * const firstEven = Iterable.findFirst(numbers, (x) => x % 2 === 0)
 * firstEven // => Option.some(4)
 *
 * const firstGreaterThan10 = Iterable.findFirst(numbers, (x) => x > 10)
 * firstGreaterThan10 // => Option.none()
 *
 * // With index
 * const letters = ["a", "b", "c", "d"]
 * const atEvenIndex = Iterable.findFirst(letters, (_, i) => i % 2 === 0)
 * atEvenIndex // => Option.some("a")
 *
 * // Type refinement
 * const mixed: Array<string | number> = [1, "hello", 2, "world"]
 * const firstString = Iterable.findFirst(
 *   mixed,
 *   (x): x is string => typeof x === "string"
 * )
 * firstString // => Option.some("hello")
 *
 * // Transform during search
 * const findSquareRoot = Iterable.findFirst([1, 4, 9, 16], (x) => {
 *   const sqrt = Math.sqrt(x)
 *   return Number.isInteger(sqrt) ? Option.some(sqrt) : Option.none()
 * })
 * findSquareRoot // => Option.some(1)
 * ```
 *
 * @stability stable
 * @category searching
 * @since 2.0.0
 */
const findFirst$3 = /*#__PURE__*/ dual(2, (self, f) => {
  let i = 0;
  for (const a of self) {
    const o = f(a, i);
    if (isBoolean(o)) {
      if (o) return some(a);
    } else if (isSome(o)) return o;
    i++;
  }
  return none();
});
const constEmpty = {
  [Symbol.iterator]() {
    return constEmptyIterator;
  },
};
const constEmptyIterator = {
  next() {
    return {
      done: true,
      value: void 0,
    };
  },
};
/**
 * Creates an empty iterable that yields no elements.
 *
 * **When to use**
 *
 * Use when you need an empty iterable as a typed "no data" value or a base
 * case for iterable operations.
 *
 * **Example** (Creating an empty iterable)
 *
 * ```ts import.meta.vitest
 * import { Iterable } from "effect"
 *
 * Array.from(Iterable.empty<string>()) // => []
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty$4 = () => constEmpty;
/**
 * Transforms elements of an iterable using a function that returns a `Result`, keeping only successful values.
 *
 * **Details**
 *
 * This combines mapping and filtering in a single operation. The function is
 * applied to each element, and only elements that result in `Result.succeed`
 * are included in the result.
 *
 * **Example** (Filtering and transforming Result values)
 *
 * ```ts import.meta.vitest
 * import { Iterable, Result } from "effect"
 *
 * // Parse strings to numbers, keeping only valid ones
 * const strings = ["1", "2", "invalid", "4", "not-a-number"]
 * const numbers = Iterable.filterMap(strings, (s) => {
 *   const num = parseInt(s)
 *   return isNaN(num) ? Result.failVoid : Result.succeed(num)
 * })
 * Array.from(numbers) // => [1, 2, 4]
 *
 * // Extract specific properties from objects
 * const users = [
 *   { name: "Alice", age: 25, email: "alice@example.com" },
 *   { name: "Bob", age: 17, email: undefined },
 *   { name: "Charlie", age: 30, email: "charlie@example.com" },
 *   { name: "David", age: 16, email: undefined }
 * ]
 * const adultEmails = Iterable.filterMap(
 *   users,
 *   (user) =>
 *     user.age >= 18 && user.email ? Result.succeed(user.email) : Result.failVoid
 * )
 * Array.from(adultEmails) // => ["alice@example.com", "charlie@example.com"]
 *
 * // Use index in transformation
 * const items = ["a", "b", "c", "d", "e"]
 * const evenIndexItems = Iterable.filterMap(
 *   items,
 *   (item, i) => i % 2 === 0 ? Result.succeed(`${i}: ${item}`) : Result.failVoid
 * )
 * Array.from(evenIndexItems) // => ["0: a", "2: c", "4: e"]
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterMap$1 = /*#__PURE__*/ dual(2, (self, f) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        let result = iterator.next();
        while (!result.done) {
          const next = f(result.value, i++);
          if (isSuccess$3(next))
            return {
              done: false,
              value: next.success,
            };
          result = iterator.next();
        }
        return {
          done: true,
          value: void 0,
        };
      },
    };
  },
}));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Array.js
/**
 * Exposes the global array constructor.
 *
 * **When to use**
 *
 * Use to access native JavaScript array constructor methods such as `isArray`
 * or `from` from the Effect module namespace.
 *
 * **Example** (Accessing the Array constructor)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.Array === globalThis.Array // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Array$1 = globalThis.Array;
/**
 * Creates a new `Array` of the specified length with all slots uninitialized.
 *
 * **When to use**
 *
 * Use when you need a pre-sized array that will be filled imperatively.
 *
 * **Details**
 *
 * `n` is rounded down. `NaN` and non-positive values are treated as `0`.
 * Elements are typed as `A | undefined` because the slots are empty.
 *
 * **Example** (Allocating a fixed-size array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.allocate<number>(3).length // => 3
 * ```
 *
 * @see {@link makeBy} — create an array by computing each element
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const allocate = (n) => new Array$1(normalize(n));
/**
 * Creates a `NonEmptyArray` of length `n` where element `i` is computed by `f(i)`.
 *
 * **When to use**
 *
 * Use when you need to compute each array element from its index.
 *
 * **Details**
 *
 * `n` is rounded down and normalized to an integer greater than or equal to 1.
 * `NaN` is treated as `1`, so this function always returns at least one
 * element. Supports both data-first and data-last usage.
 *
 * **Example** (Generating values from indices)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.makeBy(5, (n) => n * 2) // => [0, 2, 4, 6, 8]
 * ```
 *
 * @see {@link range} — create a range of integers
 * @see {@link replicate} — repeat a single value
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const makeBy = /*#__PURE__*/ dual(2, (n, f) => {
  const max = normalizeNonEmpty(n);
  const out = new Array$1(max);
  for (let i = 0; i < max; i++) out[i] = f(i);
  return out;
});
/**
 * Converts an `Iterable` to an `Array`.
 *
 * **When to use**
 *
 * Use to convert any `Iterable` (Set, Generator, etc.) into an array.
 *
 * **Details**
 *
 * If the input is already an array, this returns it by reference without
 * copying. Otherwise, it creates a new array from the iterable. Use `copy` if
 * you need a fresh array even when the input is already an array.
 *
 * **Example** (Converting a Set to an array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.fromIterable(new Set([1, 2, 3])) // => [1, 2, 3]
 * ```
 *
 * @see {@link ensure} — wrap a single value or return an existing array
 * @see {@link copy} — create a shallow copy of an array
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromIterable$1 = (collection) =>
  Array$1.isArray(collection) ? collection : Array$1.from(collection);
/**
 * Normalizes a value that is either a single element or an array into an array.
 *
 * **When to use**
 *
 * Use to normalize input that may be a single value or an array into a consistent
 * array.
 *
 * **Details**
 *
 * If the input is already an array, this returns it by reference. If the input
 * is a single value, this wraps it in a one-element array. This is useful for
 * APIs that accept `A | Array<A>`.
 *
 * **Example** (Normalizing input)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.ensure("a") // => ["a"]
 * Array.ensure(["a", "b", "c"]) // => ["a", "b", "c"]
 * ```
 *
 * @see {@link of} — always wrap in a single-element array
 * @see {@link fromIterable} — convert any iterable
 *
 * @stability stable
 * @category constructors
 * @since 3.3.0
 */
const ensure = (self) => (Array$1.isArray(self) ? self : [self]);
/**
 * Pattern-matches on an array, handling empty and non-empty cases separately.
 *
 * **When to use**
 *
 * Use when you need to branch on whether an array is empty.
 *
 * **Details**
 *
 * `onNonEmpty` receives a `NonEmptyArray` for mutable arrays and a
 * `NonEmptyReadonlyArray` otherwise. Data-last calls default to the readonly
 * callback, so the returned function still accepts `ReadonlyArray`. Supports
 * both data-first and data-last usage.
 *
 * **Example** (Branching on emptiness)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * const describe = Array.match({
 *   onEmpty: () => "empty",
 *   onNonEmpty: ([head, ...tail]) => `head: ${head}, tail: ${tail.length}`
 * })
 *
 * describe([]) // => "empty"
 * describe([1, 2, 3]) // => "head: 1, tail: 2"
 * ```
 *
 * @see {@link matchLeft} — destructures into head + tail
 * @see {@link matchRight} — destructures into init + last
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match$4 = /*#__PURE__*/ dual(2, (self, { onEmpty, onNonEmpty }) =>
  isReadonlyArrayNonEmpty(self) ? onNonEmpty(self) : onEmpty(),
);
/**
 * Adds a single element to the end of an iterable, returning a `NonEmptyArray`.
 *
 * **When to use**
 *
 * Use when you need to guarantee a non-empty result after adding a required
 * trailing value.
 *
 * **Example** (Appending an element)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.append([1, 2, 3], 4) // => [1, 2, 3, 4]
 * ```
 *
 * @see {@link prepend} — add to the front
 * @see {@link appendAll} — append multiple elements
 *
 * @stability stable
 * @category combining
 * @since 2.0.0
 */
const append = /*#__PURE__*/ dual(2, (self, last) => [...self, last]);
/**
 * Concatenates two iterables into a single array.
 *
 * **When to use**
 *
 * Use to combine two iterable inputs into a new array with the second input's
 * elements after the first.
 *
 * **Details**
 *
 * If either input is non-empty, the result is a `NonEmptyArray`.
 *
 * **Example** (Concatenating arrays)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.appendAll([1, 2], [3, 4]) // => [1, 2, 3, 4]
 * ```
 *
 * @see {@link append} — add a single element to the end
 * @see {@link prependAll} — add elements to the front
 *
 * @stability stable
 * @category combining
 * @since 2.0.0
 */
const appendAll = /*#__PURE__*/ dual(2, (self, that) =>
  fromIterable$1(self).concat(fromIterable$1(that)),
);
/**
 * Checks whether a value is an `Array`.
 *
 * **When to use**
 *
 * Use to verify a value is a mutable array, narrowing its type to `Array<unknown>`.
 *
 * **Details**
 *
 * Acts as a type guard narrowing the input to `Array<unknown>` and delegates to
 * `globalThis.Array.isArray`.
 *
 * **Example** (Type-guarding an unknown value)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.isArray(null) // => false
 * Array.isArray([1, 2, 3]) // => true
 * ```
 *
 * @see {@link isArrayEmpty} — check for an empty array
 * @see {@link isArrayNonEmpty} — check for a non-empty array
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isArray = Array$1.isArray;
/**
 * Checks whether a mutable `Array` is empty, narrowing the type to `[]`.
 *
 * **Example** (Checking for an empty array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.isArrayEmpty([]) // => true
 * Array.isArrayEmpty([1, 2, 3]) // => false
 * ```
 *
 * @see {@link isReadonlyArrayEmpty} — readonly variant
 * @see {@link isArrayNonEmpty} — opposite check
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isArrayEmpty = (self) => self.length === 0;
/**
 * Checks whether a `ReadonlyArray` is empty, narrowing the type to `readonly []`.
 *
 * **Example** (Checking for an empty readonly array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.isReadonlyArrayEmpty([]) // => true
 * Array.isReadonlyArrayEmpty([1, 2, 3]) // => false
 * ```
 *
 * @see {@link isArrayEmpty} — mutable variant
 * @see {@link isReadonlyArrayNonEmpty} — opposite check
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isReadonlyArrayEmpty = isArrayEmpty;
/**
 * Checks whether a mutable `Array` is non-empty, narrowing the type to
 * `NonEmptyArray`.
 *
 * **When to use**
 *
 * Use when you need the narrowed value to remain a mutable `Array` after proving
 * it has at least one element.
 *
 * **Example** (Checking for a non-empty array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.isArrayNonEmpty([]) // => false
 * Array.isArrayNonEmpty([1, 2, 3]) // => true
 * ```
 *
 * @see {@link isReadonlyArrayNonEmpty} — readonly variant
 * @see {@link isArrayEmpty} — opposite check
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isArrayNonEmpty = isArrayNonEmpty$1;
/**
 * Checks whether a `ReadonlyArray` is non-empty, narrowing the type to
 * `NonEmptyReadonlyArray`.
 *
 * **When to use**
 *
 * Use when you need to prove a readonly array has at least one element without
 * requiring mutable array methods afterward.
 *
 * **Example** (Checking for a non-empty readonly array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.isReadonlyArrayNonEmpty([]) // => false
 * Array.isReadonlyArrayNonEmpty([1, 2, 3]) // => true
 * ```
 *
 * @see {@link isArrayNonEmpty} — mutable variant
 * @see {@link isReadonlyArrayEmpty} — opposite check
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isReadonlyArrayNonEmpty = isArrayNonEmpty$1;
/**
 * Checks whether a string represents a JavaScript array index: a non-negative
 * integer below `2 ** 32 - 1`, written without leading zeroes, a sign, or
 * exponent notation.
 *
 * @internal
 */
function isCanonicalArrayIndex(key) {
  const index = Number(key);
  return String(index) === key && Number.isInteger(index) && index >= 0 && index < 2 ** 32 - 1;
}
/** @internal */
function isOutOfBounds(i, as) {
  return !Number.isFinite(i) || i < 0 || i >= as.length;
}
/**
 * Reads an element at the given index, throwing if the index is out of bounds.
 *
 * **When to use**
 *
 * Use to read an array element at a known valid index when out-of-bounds would
 * be a programming error.
 *
 * **Details**
 *
 * Throws an `Error` with the message `"Index out of bounds: <i>"`. Prefer
 * `get` for safe access.
 *
 * **Example** (Accessing indexes unsafely)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.getUnsafe([1, 2, 3], 1) // => 2
 * // Array.getUnsafe([1, 2, 3], 10) // throws Error
 * ```
 *
 * @see {@link get} — safe version returning `Option`
 *
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const getUnsafe$1 = /*#__PURE__*/ dual(2, (self, index) => {
  const i = Math.floor(index);
  if (isOutOfBounds(i, self)) throw new Error(`Index out of bounds: ${i}`);
  return self[i];
});
/**
 * Returns the last element of an array safely wrapped in `Option.some`, or
 * `Option.none` if the array is empty.
 *
 * **When to use**
 *
 * Use to safely get the last element of an array that may be empty.
 *
 * **Example** (Getting the last element)
 *
 * ```ts import.meta.vitest
 * import { Array, Option } from "effect"
 *
 * Array.last([1, 2, 3]) // => Option.some(3)
 * Array.last([]) // => Option.none()
 * ```
 *
 * @see {@link lastNonEmpty} — direct access when array is known non-empty
 * @see {@link head} — get the first element
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const last = (self) => (isReadonlyArrayNonEmpty(self) ? some(lastNonEmpty(self)) : none());
/**
 * Returns the last element of a `NonEmptyReadonlyArray` directly (no `Option`
 * wrapper).
 *
 * **When to use**
 *
 * Use to get the last element without `Option` wrapping when the array is known
 * to be non-empty.
 *
 * **Example** (Getting the last of a non-empty array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.lastNonEmpty([1, 2, 3, 4]) // => 4
 * ```
 *
 * @see {@link last} — safe version for possibly-empty arrays
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const lastNonEmpty = (self) => self[self.length - 1];
const clampCount = (n, length) => Math.min(normalize(n), length);
/**
 * Keeps the first `n` elements, creating a new array.
 *
 * **When to use**
 *
 * Use to keep up to the first `n` elements from an iterable as a new array.
 *
 * **Details**
 *
 * `n` is rounded down and clamped to `[0, length]`. `NaN` is treated as `0`.
 * Returns an empty array when `n <= 0`.
 *
 * **Example** (Taking from the start)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.take([1, 2, 3, 4, 5], 3) // => [1, 2, 3]
 * ```
 *
 * @see {@link takeRight} for keeping elements from the end
 * @see {@link takeWhile} for keeping an initial prefix while a predicate holds
 * @see {@link drop} for removing elements from the start
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const take = /*#__PURE__*/ dual(2, (self, n) => {
  const input = fromIterable$1(self);
  return input.slice(0, clampCount(n, input.length));
});
/**
 * Returns the index of the first element matching the predicate, wrapped in an
 * `Option`.
 *
 * **When to use**
 *
 * Use to find the index of the first matching element from the start of an
 * iterable.
 *
 * **Example** (Finding an index)
 *
 * ```ts import.meta.vitest
 * import { Array, Option } from "effect"
 *
 * Array.findFirstIndex([5, 3, 8, 9], (x) => x > 5) // => Option.some(2)
 * ```
 *
 * @see {@link findLastIndex} — search from the end
 * @see {@link findFirst} — get the element itself
 *
 * @stability stable
 * @category searching
 * @since 2.0.0
 */
const findFirstIndex = /*#__PURE__*/ dual(2, (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (predicate(a, i)) return some(i);
    i++;
  }
  return none();
});
/**
 * Returns the first element matching a predicate, refinement, or mapping
 * function, wrapped in `Option`.
 *
 * **When to use**
 *
 * Use to scan an iterable in iteration order and return the first selected
 * element or mapped value as an `Option`.
 *
 * **Details**
 *
 * Accepts a predicate `(a, i) => boolean`, a refinement, or a function
 * `(a, i) => Option<B>` for simultaneous find-and-transform. If no element
 * matches, this returns `Option.none()`.
 *
 * **Example** (Finding the first match)
 *
 * ```ts import.meta.vitest
 * import { Array, Option } from "effect"
 *
 * Array.findFirst([1, 2, 3, 4, 5], (x) => x > 3) // => Option.some(4)
 * ```
 *
 * @see {@link findLast} — search from the end
 * @see {@link findFirstIndex} — get the index instead
 * @see {@link findFirstWithIndex} — get both element and index
 *
 * @stability stable
 * @category searching
 * @since 2.0.0
 */
const findFirst$2 = findFirst$3;
/**
 * Returns the last element matching a predicate, refinement, or mapping
 * function, wrapped in `Option`.
 *
 * **When to use**
 *
 * Use to find the last matching element from the end of an array.
 *
 * **Details**
 *
 * Searches from the end of the array. If no element matches, this returns
 * `Option.none()`.
 *
 * **Example** (Finding the last match)
 *
 * ```ts import.meta.vitest
 * import { Array, Option } from "effect"
 *
 * Array.findLast([1, 2, 3, 4, 5], (n) => n % 2 === 0) // => Option.some(4)
 * ```
 *
 * @see {@link findFirst} — search from the start
 * @see {@link findLastIndex} — get the index instead
 *
 * @stability stable
 * @category searching
 * @since 2.0.0
 */
const findLast = /*#__PURE__*/ dual(2, (self, f) => {
  const input = fromIterable$1(self);
  for (let i = input.length - 1; i >= 0; i--) {
    const a = input[i];
    const o = f(a, i);
    if (typeof o === "boolean") {
      if (o) return some(a);
    } else if (isSome(o)) return o;
  }
  return none();
});
/**
 * Reverses an iterable into a new array.
 *
 * **When to use**
 *
 * Use to reverse an iterable into a new array without mutating the original
 * input.
 *
 * **Details**
 *
 * Preserves `NonEmptyArray` in the return type.
 *
 * **Example** (Reversing an array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.reverse([1, 2, 3, 4]) // => [4, 3, 2, 1]
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 2.0.0
 */
const reverse = (self) => Array$1.from(self).reverse();
/**
 * Sorts an array by the given `Order`, returning a new array.
 *
 * **When to use**
 *
 * Use to sort an array using a single `Order` comparator.
 *
 * **Details**
 *
 * Preserves `NonEmptyArray` in the return type. Use `sortWith` to sort by a
 * derived key, or `sortBy` for multi-key sorting.
 *
 * **Example** (Sorting numbers)
 *
 * ```ts import.meta.vitest
 * import { Array, Order } from "effect"
 *
 * Array.sort([3, 1, 4, 1, 5], Order.Number) // => [1, 1, 3, 4, 5]
 * ```
 *
 * @see {@link sortWith} — sort by a mapping function
 * @see {@link sortBy} — sort by multiple orders
 *
 * @stability stable
 * @category sorting
 * @since 2.0.0
 */
const sort = /*#__PURE__*/ dual(2, (self, O) => {
  const out = Array$1.from(self);
  out.sort(O);
  return out;
});
/**
 * Creates an empty array.
 *
 * **When to use**
 *
 * Use to create a typed empty array without allocating placeholder elements.
 *
 * **Example** (Creating an empty array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.empty<number>() // => []
 * ```
 *
 * @see {@link of} — create a single-element array
 * @see {@link make} — create from multiple values
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty$3 = () => [];
/**
 * Wraps a single value in a `NonEmptyArray`.
 *
 * **Example** (Creating a single-element array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.of(1) // => [1]
 * ```
 *
 * @see {@link make} — create from multiple values
 * @see {@link empty} — create an empty array
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const of$1 = (a) => [a];
/**
 * Transforms each element using a function, returning a new array.
 *
 * **When to use**
 *
 * Use to transform each element independently while preserving the array shape.
 *
 * **Details**
 *
 * The function receives `(element, index)`. The return type preserves
 * `NonEmptyArray`.
 *
 * **Example** (Doubling values)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.map([1, 2, 3], (x) => x * 2) // => [2, 4, 6]
 * ```
 *
 * @see {@link flatMap} — map and flatten
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map$3 = /*#__PURE__*/ dual(2, (self, f) => self.map(f));
/**
 * Maps each element to an array and flattens the results into a single array.
 *
 * **When to use**
 *
 * Use to map each array element to zero or more values and concatenate the
 * results in one pass.
 *
 * **Details**
 *
 * The function receives `(element, index)`. This returns `NonEmptyArray` when
 * both the input and mapped arrays are non-empty.
 *
 * **Example** (Flat mapping an array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.flatMap([1, 2, 3], (x) => [x, x * 2]) // => [1, 2, 2, 4, 3, 6]
 * ```
 *
 * @see {@link map} — transform without flattening
 * @see {@link flatten} — flatten without mapping
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap$3 = /*#__PURE__*/ dual(2, (self, f) => {
  if (isReadonlyArrayEmpty(self)) return [];
  const out = [];
  for (let i = 0; i < self.length; i++) {
    const inner = f(self[i], i);
    for (let j = 0; j < inner.length; j++) out.push(inner[j]);
  }
  return out;
});
/**
 * Keeps transformed values for elements where a `Filter` succeeds.
 *
 * **When to use**
 *
 * Use to filter an iterable with a `Result`-returning transformation while
 * discarding failures.
 *
 * **Details**
 *
 * The filter receives `(element, index)`. Failures are discarded.
 *
 * **Example** (Filtering and transforming)
 *
 * ```ts import.meta.vitest
 * import { Array, Result } from "effect"
 *
 * Array.filterMap([1, 2, 3, 4], (n) => n % 2 === 0 ? Result.succeed(n * 10) : Result.failVoid) // => [20, 40]
 * ```
 *
 * @see {@link filter} — keep original elements matching a predicate
 * @see {@link partition} for keeping both successes and failures
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterMap = /*#__PURE__*/ dual(2, (self, f) => {
  const as = fromIterable$1(self);
  const out = [];
  for (let i = 0; i < as.length; i++) {
    const result = f(as[i], i);
    if (isSuccess$3(result)) out.push(result.success);
  }
  return out;
});
/**
 * Keeps only elements satisfying a predicate (or refinement).
 *
 * **When to use**
 *
 * Use to filter an iterable into a new array of original elements that satisfy
 * a boolean predicate or refinement.
 *
 * **Details**
 *
 * The predicate receives `(element, index)`. Refinements are supported for type
 * narrowing.
 *
 * **Example** (Filtering even numbers)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.filter([1, 2, 3, 4], (x) => x % 2 === 0) // => [2, 4]
 * ```
 *
 * @see {@link partition} — split into matching and non-matching
 * @see {@link filterMap} for transforming while filtering
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filter$2 = /*#__PURE__*/ dual(2, (self, predicate) => {
  const as = fromIterable$1(self);
  const out = [];
  for (let i = 0; i < as.length; i++) if (predicate(as[i], i)) out.push(as[i]);
  return out;
});
/**
 * Splits an iterable using a `Filter` into successes and failures.
 *
 * **When to use**
 *
 * Use to partition an iterable by evaluating each element with a
 * `Result`-returning filter and keeping both success and failure values.
 *
 * **Details**
 *
 * Returns `[passes, fails]`. The filter receives `(element, index)`.
 *
 * **Example** (Partitioning with a filter)
 *
 * ```ts import.meta.vitest
 * import { Array, Result } from "effect"
 *
 * Array.partition([1, -2, 3], (n, i) =>
 *   n > 0 ? Result.succeed(n + i) : Result.fail(`negative:${n}`)
 * ) // => [[1, 5], ["negative:-2"]]
 * ```
 *
 * @see {@link filter} — keep only matching elements
 * @see {@link filterMap} for discarding failures
 * @see {@link separate} — split an iterable of `Result` values
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const partition$2 = /*#__PURE__*/ dual(2, (self, f) => {
  const passes = [];
  const fails = [];
  let i = 0;
  for (const a of self) {
    const result = f(a, i++);
    if (isSuccess$3(result)) passes.push(result.success);
    else fails.push(result.failure);
  }
  return [passes, fails];
});
/**
 * Folds an iterable from left to right into a single value.
 *
 * **When to use**
 *
 * Use to combine all elements into one accumulated value from left to right.
 *
 * **Details**
 *
 * The function receives `(accumulator, element, index)`.
 *
 * **Example** (Summing an array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.reduce([1, 2, 3], 0, (acc, n) => acc + n) // => 6
 * ```
 *
 * @see {@link reduceRight} — fold from right to left
 * @see {@link scan} — fold keeping intermediate values
 *
 * @stability stable
 * @category folding
 * @since 2.0.0
 */
const reduce = /*#__PURE__*/ dual(3, (self, b, f) =>
  fromIterable$1(self).reduce((b, a, i) => f(b, a, i), b),
);
/**
 * Converts a nullable value to an array: `null`/`undefined` becomes `[]`,
 * anything else becomes `[value]`.
 *
 * **When to use**
 *
 * Use to treat a nullable single value as zero or one array element.
 *
 * **Example** (Converting nullable values to an array)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.fromNullishOr(1) // => [1]
 * Array.fromNullishOr(null) // => []
 * Array.fromNullishOr(undefined) // => []
 * ```
 *
 * @see {@link liftNullishOr} — lift a nullable-returning function
 * @see {@link fromOption} — convert from Option
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromNullishOr = (a) => (a == null ? empty$3() : [a]);
/**
 * Maps each element with a nullable-returning function, keeping only non-null /
 * non-undefined results.
 *
 * **When to use**
 *
 * Use when you need to map and filter in one step, where the mapper can return
 * `null` or `undefined` to skip elements.
 *
 * **Example** (Flat mapping with nullable values)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * Array.flatMapNullishOr([1, 2, 3], (n) => (n % 2 === 0 ? null : n)) // => [1, 3]
 * ```
 *
 * @see {@link flatMap} for mapping each element to an array and flattening
 * @see {@link fromNullishOr} for converting a single nullable value to an array
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const flatMapNullishOr = /*#__PURE__*/ dual(2, (self, f) =>
  flatMap$3(self, (a) => fromNullishOr(f(a))),
);
/**
 * Creates an `Equivalence` for arrays based on an element `Equivalence`. Two
 * arrays are equivalent when they have the same length and all elements are
 * pairwise equivalent.
 *
 * **Example** (Comparing arrays for equality)
 *
 * ```ts import.meta.vitest
 * import { Array } from "effect"
 *
 * const eq = Array.makeEquivalence<number>((a, b) => a === b)
 *
 * eq([1, 2, 3], [1, 2, 3]) // => true
 * ```
 *
 * @see {@link makeOrder} — create an ordering for arrays
 *
 * @stability stable
 * @category instances
 * @since 4.0.0
 */
const makeEquivalence = Array_;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Effectable.js
/**
 * Create a low-level `Effect` prototype.
 *
 * **When to use**
 *
 * Use when you need to create a custom Effect-like value without extending a
 * class, by providing a label and an evaluate function that receives the
 * current fiber.
 *
 * **Details**
 *
 * When the effect is evaluated, it calls `evaluate` with the current fiber.
 *
 * @see {@link Class} for a class-based approach to defining custom Effect values
 * @see {@link Mixin} for wrapping an existing class constructor
 *
 * @stability stable
 * @category prototypes
 * @since 4.0.0
 */
const Prototype = (options) =>
  makePrimitiveProto({
    op: options.label,
    [evaluate]: options.evaluate,
  });
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Context.js
/**
 * Runtime type identifier attached to `Context` service keys and used by
 * `isKey` to recognize them.
 *
 * @stability stable
 * @category type IDs
 * @since 4.0.0
 */
const ServiceTypeId = "~effect/Context/Service";
/**
 * Creates a `Context` service key.
 *
 * **When to use**
 *
 * Use when you need to define a context service key for a dependency that must
 * be provided by the surrounding context.
 *
 * **Details**
 *
 * Call `Context.Service("Key")` for a function-style key, or use the two-stage
 * form `Context.Service<Self, Shape>()("Key")` for class-style service
 * declarations. The returned key can be yielded as an Effect and passed to
 * `Context.make`, `Context.add`, and the Context getter functions.
 *
 * **Gotchas**
 *
 * The string key is the runtime identity of the service. Reusing the same key
 * string for unrelated services makes them occupy the same slot in a
 * `Context`.
 *
 * **Example** (Creating service keys)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * // Create a simple service
 * const Database = Context.Service<{
 *   query: (sql: string) => string
 * }>("Database")
 *
 * // Create a service class
 * class Config extends Context.Service<Config, {
 *   port: number
 * }>()("Config") {}
 *
 * // Use the services to create contexts
 * const db = Context.make(Database, {
 *   query: (sql) => `Result: ${sql}`
 * })
 * const config = Context.make(Config, { port: 8080 })
 * Context.get(db, Database).query("SELECT 1") // => "Result: SELECT 1"
 * Context.get(config, Config).port // => 8080
 * ```
 *
 * @see {@link Reference} for service keys with default values
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const Service = function () {
  function KeyClass() {}
  const self = KeyClass;
  Object.setPrototypeOf(self, ServiceProto);
  const init = (key, options) => {
    self.key = key;
    if (options?.defaultValue) {
      self[ReferenceTypeId] = ReferenceTypeId;
      self.defaultValue = options.defaultValue;
    }
    if (options?.make) self.make = options.make;
    if (options?.fiberCached) cacheKeys.add(key);
    return self;
  };
  return arguments.length > 0 ? init(arguments[0], arguments[1]) : init;
};
const ServiceProto = {
  [ServiceTypeId]: ServiceTypeId,
  .../*#__PURE__*/ Prototype({
    label: "Service",
    evaluate(fiber) {
      return exitSucceed(get$1(fiber.context, this));
    },
  }),
  toJSON() {
    return {
      _id: "Service",
      key: this.key,
    };
  },
  of(self) {
    return self;
  },
  context(self) {
    return make$5(this, self);
  },
  use(f) {
    return withFiber$1((fiber) => f(get$1(fiber.context, this)));
  },
  useSync(f) {
    return withFiber$1((fiber) => exitSucceed(f(get$1(fiber.context, this))));
  },
};
const cacheKeys = /*#__PURE__*/ new Set();
const ReferenceTypeId = "~effect/Context/Reference";
const TypeId$6 = "~effect/Context";
const MaxDepth = 8;
const FlattenAfterBaseHits = 8;
const makeImpl = (cacheRoot, base, overlay, depth) => {
  const self = Object.create(Proto);
  self.cacheRoot = cacheRoot ?? self;
  self.base = base;
  self.overlay = overlay;
  self.depth = depth;
  self._flat = void 0;
  self.baseHits = 0;
  return self;
};
const applyOverlays = (map, overlay) => {
  if (!overlay) return;
  applyOverlays(map, overlay.parent);
  map.set(overlay.key, overlay.value);
};
const flatten$2 = (self) => {
  if (self._flat) return self._flat;
  if (!self.overlay) return (self._flat = self.base);
  const map = new Map(self.base);
  applyOverlays(map, self.overlay);
  return (self._flat = map);
};
const withFlat = (self, f) => {
  const map = new Map(self.mapUnsafe);
  f(map);
  return makeUnsafe$2(map);
};
const notFound = /*#__PURE__*/ Symbol();
const lookup = (self, key) => {
  const impl = self;
  for (let overlay = impl.overlay; overlay; overlay = overlay.parent)
    if (overlay.key === key) return overlay.value;
  const value = impl.base.get(key);
  if (value === void 0 && !impl.base.has(key)) return notFound;
  if (impl.overlay && ++impl.baseHits >= impl.base.size && impl.baseHits >= FlattenAfterBaseHits) {
    impl.base = flatten$2(impl);
    impl.overlay = void 0;
    impl.depth = 0;
  }
  return value;
};
/**
 * Creates a `Context` from an existing service map.
 *
 * **When to use**
 *
 * Use when constructing a low-level `Context` from a trusted map whose lifecycle
 * you control.
 *
 * **Gotchas**
 *
 * The provided map is retained without copying and must not be mutated after
 * construction. Prefer `empty`, `make`, `add`, or `merge` for normal Context
 * construction.
 *
 * **Example** (Creating a context from a map)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * // Create a context from a Map (unsafe)
 * const map = new Map([
 *   ["Logger", { log: (_msg: string) => {} }]
 * ])
 *
 * const context = Context.makeUnsafe(map)
 * context.mapUnsafe.size // => 1
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeUnsafe$2 = (mapUnsafe) => makeImpl(void 0, mapUnsafe, void 0, 0);
const Proto = {
  get mapUnsafe() {
    return flatten$2(this);
  },
  ...PipeInspectableProto,
  [TypeId$6]: { _Services: (_) => _ },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.mapUnsafe).map(([key, value]) => ({
        key,
        value,
      })),
    };
  },
  [symbol](that) {
    if (!isContext(that)) return false;
    const self = this.mapUnsafe;
    const other = that.mapUnsafe;
    if (self.size !== other.size) return false;
    for (const [key, value] of self)
      if (!other.has(key) || !equals$1(value, other.get(key))) return false;
    return true;
  },
  [symbol$1]() {
    return number(this.mapUnsafe.size);
  },
};
/** @internal */
const hasSameCache = (self, that) => self.cacheRoot === that.cacheRoot;
/**
 * Checks whether the provided argument is a `Context`.
 *
 * **When to use**
 *
 * Use to narrow an unknown value before passing it to APIs that require a
 * `Context`.
 *
 * **Details**
 *
 * This checks the runtime `Context` marker and does not inspect which services
 * the context contains.
 *
 * **Gotchas**
 *
 * This guard only proves that the value is a `Context`; it does not prove that
 * any specific service is present.
 *
 * **Example** (Checking for contexts)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 * Context.isContext(Context.empty()) // => true
 * ```
 *
 * @see {@link isKey} for checking service keys
 * @see {@link isReference} for checking references with defaults
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isContext = (u) => hasProperty(u, TypeId$6);
/**
 * Checks whether the provided argument is a `Reference`.
 *
 * **Example** (Checking for references)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * const LoggerRef = Context.Reference("Logger", {
 *   defaultValue: () => ({ log: (_msg: string) => {} })
 * })
 *
 * Context.isReference(LoggerRef) // => true
 * Context.isReference(Context.Service("Key")) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 3.11.0
 */
const isReference = (u) => !!u[ReferenceTypeId];
/**
 * Returns an empty `Context`.
 *
 * **Example** (Creating an empty context)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 * Context.empty().mapUnsafe.size // => 0
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty$2 = () => emptyContext;
const emptyContext = /*#__PURE__*/ makeUnsafe$2(/*#__PURE__*/ new Map());
/**
 * Creates a new `Context` with a single service associated to the key.
 *
 * **Example** (Creating a context with one service)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 *
 * const context = Context.make(Port, { PORT: 8080 })
 *
 * Context.get(context, Port).PORT // => 8080
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$5 = (key, service) => makeUnsafe$2(/* @__PURE__ */ new Map([[key.key, service]]));
/**
 * Adds a service to a given `Context`.
 *
 * **When to use**
 *
 * Use when you need to store a known service value in a `Context`.
 *
 * **Details**
 *
 * If the context already contains the same service key, the new service
 * replaces the previous one.
 *
 * **Example** (Adding a service to a context)
 *
 * ```ts import.meta.vitest
 * import { Context, pipe } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const someContext = Context.make(Port, { PORT: 8080 })
 *
 * const context = pipe(
 *   someContext,
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * const values = [Context.get(context, Port).PORT, Context.get(context, Timeout).TIMEOUT]
 * values // => [8080, 5000]
 * ```
 *
 * @see {@link addOrOmit} for adding or removing a service from an `Option`
 *
 * @stability stable
 * @category combining
 * @since 2.0.0
 */
const add = /*#__PURE__*/ dual(3, (self, key, service) => addUnsafe(self, key.key, service));
/**
 * Adds a service by key to a given `Context` using a string key.
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const addUnsafe = (self, key, service) => {
  const impl = self;
  const cacheRoot = cacheKeys.has(key) ? void 0 : impl.cacheRoot;
  if (impl.depth >= MaxDepth) {
    const map = new Map(impl._flat ?? impl.base);
    if (!impl._flat) applyOverlays(map, impl.overlay);
    map.set(key, service);
    return makeImpl(cacheRoot, map, void 0, 0);
  }
  return makeImpl(
    cacheRoot,
    impl.base,
    {
      key,
      value: service,
      parent: impl.overlay,
    },
    impl.depth + 1,
  );
};
/**
 * Gets the service for a key, or evaluates the fallback when a non-reference
 * key is absent.
 *
 * **When to use**
 *
 * Use when you need a fallback for a missing `Context.Service` key while still
 * resolving `Context.Reference` defaults.
 *
 * **Details**
 *
 * If the key is a `Context.Reference` and no override is stored in the
 * context, its cached default value is returned instead of the fallback.
 *
 * **Gotchas**
 *
 * The fallback is not evaluated for missing `Context.Reference` keys because
 * references resolve to their default value.
 *
 * **Example** (Falling back for missing services)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * const Logger = Context.Service<{ log: (msg: string) => void }>("Logger")
 * const Database = Context.Service<{ query: (sql: string) => string }>(
 *   "Database"
 * )
 *
 * const context = Context.make(Logger, { log: (_msg: string) => {} })
 *
 * const logger = Context.getOrElse(context, Logger, () => ({ log: () => {} }))
 * const database = Context.getOrElse(
 *   context,
 *   Database,
 *   () => ({ query: () => "fallback" })
 * )
 *
 * logger === Context.get(context, Logger) // => true
 * database.query("SELECT 1") // => "fallback"
 * ```
 *
 * @see {@link getOption} for returning `Option.none` when a non-reference key is missing
 *
 * @stability stable
 * @category getters
 * @since 3.7.0
 */
const getOrElse = /*#__PURE__*/ dual(3, (self, key, orElse) => {
  const value = lookup(self, key.key);
  if (value !== notFound) return value;
  return isReference(key) ? getDefaultValue(key) : orElse();
});
/**
 * Returns the service currently stored for a key, or `undefined` when the key
 * is absent.
 *
 * **When to use**
 *
 * Use when you need to read the service stored for a key without resolving
 * `Context.Reference` defaults.
 *
 * **Gotchas**
 *
 * This is a raw lookup and does not resolve default values for
 * `Context.Reference` keys.
 *
 * @see {@link getOption} for a reference-aware optional lookup
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
const getOrUndefined = /*#__PURE__*/ dual(2, (self, key) => getOrUndefinedUnsafe(self, key.key));
/** @internal */
const getOrUndefinedUnsafe = (self, key) => {
  const value = lookup(self, key);
  return value === notFound ? void 0 : value;
};
/**
 * Gets the service for a key, throwing if an absent non-reference key cannot be
 * resolved.
 *
 * **When to use**
 *
 * Use when you need to read a service from a context whose type does not prove
 * the service is present.
 *
 * **Details**
 *
 * If the key is a `Context.Reference` and no override is stored in the
 * context, its cached default value is returned. For absent non-reference keys,
 * this function throws a runtime error.
 *
 * **Example** (Getting services unsafely)
 *
 * ```ts import.meta.vitest
 * import { Context, Option } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const context = Context.make(Port, { PORT: 8080 })
 *
 * Context.getUnsafe(context, Port).PORT // => 8080
 * Context.getOption(context, Timeout) // => Option.none()
 * ```
 *
 * @see {@link get} for type-checked service access
 * @see {@link getOption} for optional service access
 *
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const getUnsafe = /*#__PURE__*/ dual(2, (self, service) => {
  const value = lookup(self, service.key);
  if (value === notFound) {
    if (isReference(service)) return getDefaultValue(service);
    throw serviceNotFoundError(service);
  }
  return value;
});
/**
 * Gets a service from the context that corresponds to the given key.
 *
 * **When to use**
 *
 * Use when you need type-checked access to a service already included in the
 * context type.
 *
 * **Example** (Getting a service from a context)
 *
 * ```ts import.meta.vitest
 * import { Context, pipe } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const context = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * Context.get(context, Timeout).TIMEOUT // => 5000
 * ```
 *
 * @see {@link getOption} for optional service access
 * @see {@link getOrElse} for fallback values
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const get$1 = getUnsafe;
const defaultValueCacheKey = "~effect/Context/defaultValue";
const getDefaultValue = (ref) => {
  if (defaultValueCacheKey in ref) return ref[defaultValueCacheKey];
  return (ref[defaultValueCacheKey] = ref.defaultValue());
};
const serviceNotFoundError = (service) => {
  const error = /* @__PURE__ */ new Error(
    `Service not found${service.key ? `: ${String(service.key)}` : ""}`,
  );
  if (error.stack) {
    const lines = error.stack.split("\n");
    lines.splice(1, 3);
    error.stack = lines.join("\n");
  }
  return error;
};
/**
 * Gets the service for a key safely wrapped in an `Option`.
 *
 * **When to use**
 *
 * Use when you need to read a `Context` service as an `Option` so absence is
 * represented as data.
 *
 * **Details**
 *
 * Returns `Option.some` when the service is stored in the context. If the key
 * is a `Context.Reference` and no override is stored, returns `Option.some` of
 * the cached default value. Missing non-reference keys return `Option.none`.
 *
 * **Example** (Getting optional services)
 *
 * ```ts import.meta.vitest
 * import { Context, Option } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const context = Context.make(Port, { PORT: 8080 })
 *
 * Context.getOption(context, Port) // => Option.some({ PORT: 8080 })
 * Context.getOption(context, Timeout) // => Option.none()
 * ```
 *
 * @see {@link getOrElse} for returning a fallback value directly
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const getOption = /*#__PURE__*/ dual(2, (self, service) => {
  const value = lookup(self, service.key);
  if (value !== notFound) return some(value);
  return isReference(service) ? some(getDefaultValue(service)) : none();
});
/**
 * Merges two `Context`s into one.
 *
 * **When to use**
 *
 * Use when you need to combine two contexts.
 *
 * **Details**
 *
 * When both contexts contain the same service key, the service from `that`
 * overrides the service from `self`.
 *
 * **Example** (Merging two contexts)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const firstContext = Context.make(Port, { PORT: 8080 })
 * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
 *
 * const context = Context.merge(firstContext, secondContext)
 *
 * const values = [Context.get(context, Port).PORT, Context.get(context, Timeout).TIMEOUT]
 * values // => [8080, 5000]
 * ```
 *
 * @see {@link mergeAll} for merging more than two contexts at once
 *
 * @stability stable
 * @category combining
 * @since 2.0.0
 */
const merge$1 = /*#__PURE__*/ dual(2, (self, that) => {
  if (self.mapUnsafe.size === 0) return that;
  if (that.mapUnsafe.size === 0) return self;
  return withFlat(self, (map) => that.mapUnsafe.forEach((value, key) => map.set(key, value)));
});
/**
 * Merges any number of `Context`s into one.
 *
 * **When to use**
 *
 * Use when you need to combine a variadic list of contexts.
 *
 * **Details**
 *
 * When multiple contexts contain the same service key, the service from the
 * last context with that key is kept.
 *
 * **Example** (Merging multiple contexts)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 * const Host = Context.Service<{ HOST: string }>("Host")
 *
 * const firstContext = Context.make(Port, { PORT: 8080 })
 * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
 * const thirdContext = Context.make(Host, { HOST: "localhost" })
 *
 * const context = Context.mergeAll(
 *   firstContext,
 *   secondContext,
 *   thirdContext
 * )
 *
 * context.mapUnsafe.size // => 3
 * ```
 *
 * @see {@link merge} for merging two contexts
 *
 * @stability stable
 * @category combining
 * @since 3.12.0
 */
const mergeAll$1 = (...ctxs) => {
  const map = /* @__PURE__ */ new Map();
  for (let i = 0; i < ctxs.length; i++)
    ctxs[i].mapUnsafe.forEach((value, key) => {
      map.set(key, value);
    });
  return makeUnsafe$2(map);
};
/**
 * Returns a new `Context` with the specified service keys removed.
 *
 * **When to use**
 *
 * Use when you want to remove a denylist of services from a `Context`.
 *
 * **Example** (Omitting services from a context)
 *
 * ```ts import.meta.vitest
 * import { Context, Option, pipe } from "effect"
 *
 * const Port = Context.Service<{ PORT: number }>("Port")
 * const Timeout = Context.Service<{ TIMEOUT: number }>("Timeout")
 *
 * const someContext = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * const context = pipe(someContext, Context.omit(Timeout))
 *
 * Context.getOption(context, Port) // => Option.some({ PORT: 8080 })
 * Context.getOption(context, Timeout) // => Option.none()
 * ```
 *
 * @see {@link pick} for keeping selected services
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const omit =
  (...keys) =>
  (self) =>
    withFlat(self, (map) => {
      for (let i = 0; i < keys.length; i++) map.delete(keys[i].key);
    });
/**
 * Creates a context key with a default value.
 *
 * **When to use**
 *
 * Use when you need to define a context key with a lazily computed default
 * value.
 *
 * **Details**
 *
 * `Context.Reference` allows you to create a key that can hold a value. You
 * can provide a default value for the service, which will automatically be used
 * when the context is accessed, or override it with a custom implementation
 * when needed. The default value is computed lazily and cached on the
 * reference.
 *
 * **Example** (Creating references with default values)
 *
 * ```ts import.meta.vitest
 * import { Context } from "effect"
 *
 * // Create a reference with a default value
 * const messages: Array<string> = []
 * const LoggerRef = Context.Reference("Logger", {
 *   defaultValue: () => ({ log: (msg: string) => messages.push(`Default: ${msg}`) })
 * })
 *
 * // The reference provides the default value when accessed from an empty context
 * const context = Context.empty()
 * const logger = Context.get(context, LoggerRef)
 *
 * // You can also override the default value
 * const customContext = Context.make(LoggerRef, {
 *   log: (msg: string) => messages.push(`Custom: ${msg}`)
 * })
 * const customLogger = Context.get(customContext, LoggerRef)
 * logger.log("default")
 * customLogger.log("message")
 * messages // => ["Default: default", "Custom: message"]
 * ```
 *
 * @see {@link Service} for required services without default values
 *
 * @stability stable
 * @category services
 * @since 3.11.0
 */
const Reference = Service;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Duration.js
const TypeId$5 = "~effect/Duration";
const bigint0$1 = /*#__PURE__*/ BigInt(0);
const bigint1 = /*#__PURE__*/ BigInt(1);
const bigint2 = /*#__PURE__*/ BigInt(2);
const bigint10 = /*#__PURE__*/ BigInt(10);
const bigint24 = /*#__PURE__*/ BigInt(24);
const bigint60 = /*#__PURE__*/ BigInt(60);
const bigint1e3 = /*#__PURE__*/ BigInt(1e3);
const bigint1e6 = /*#__PURE__*/ BigInt(1e6);
const roundTiesAwayFromZero = (input) => BigInt(Math.sign(input) * Math.round(Math.abs(input)));
const roundMillisToNanos = (millis) =>
  Number.isInteger(millis) ? BigInt(millis) * bigint1e6 : roundTiesAwayFromZero(millis * 1e6);
const fromNanosNumber = (nanos) =>
  make$4(Number.isFinite(nanos) ? roundTiesAwayFromZero(nanos) : nanos);
const parseNanos = (input, scale) => {
  const decimalIndex = input.indexOf(".");
  if (decimalIndex === -1) return BigInt(input) * scale;
  const isNegative = input[0] === "-";
  const fractional = input.slice(decimalIndex + 1);
  const fractionalScale = bigint10 ** BigInt(fractional.length);
  const scaled =
    (BigInt(input.slice(isNegative ? 1 : 0, decimalIndex)) * fractionalScale + BigInt(fractional)) *
    scale;
  return divideTiesAwayFromZero(isNegative ? -scaled : scaled, fractionalScale);
};
const divideTiesAwayFromZero = (numerator, denominator) => {
  const absolute = numerator < bigint0$1 ? -numerator : numerator;
  const rounded =
    absolute / denominator +
    ((absolute % denominator) * bigint2 >= denominator ? bigint1 : bigint0$1);
  return numerator < bigint0$1 ? -rounded : rounded;
};
const DURATION_REGEXP =
  /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/;
/**
 * Decodes a `Duration.Input` into a `Duration`.
 *
 * **When to use**
 *
 * Use when the input has already been validated or comes from a trusted source
 * and throwing is acceptable for invalid duration syntax.
 *
 * **Gotchas**
 *
 * If the input is not a valid `Duration.Input`, it throws an error.
 *
 * **Example** (Decoding duration inputs)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.fromInputUnsafe(1000) // => Duration.millis(1000)
 * Duration.fromInputUnsafe("5 seconds") // => Duration.seconds(5)
 * Duration.fromInputUnsafe("Infinity") // => Duration.infinity
 * Duration.fromInputUnsafe([2, 500_000_000]) // => Duration.nanos(2_500_000_000n)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromInputUnsafe = (input) => {
  switch (typeof input) {
    case "number":
      return millis(input);
    case "bigint":
      return nanos(input);
    case "string": {
      if (input === "Infinity") return infinity;
      if (input === "-Infinity") return negativeInfinity;
      const match = DURATION_REGEXP.exec(input);
      if (!match) break;
      const [_, valueStr, unit] = match;
      if (unit === "nano" || unit === "nanos") return nanos(parseNanos(valueStr, bigint1));
      if (unit === "micro" || unit === "micros") return nanos(parseNanos(valueStr, bigint1e3));
      const value = Number(valueStr);
      switch (unit) {
        case "milli":
        case "millis":
          return millis(value);
        case "second":
        case "seconds":
          return seconds(value);
        case "minute":
        case "minutes":
          return minutes(value);
        case "hour":
        case "hours":
          return hours(value);
        case "day":
        case "days":
          return days(value);
        case "week":
        case "weeks":
          return weeks(value);
      }
      break;
    }
    case "object": {
      if (input === null) break;
      if (TypeId$5 in input) return input;
      if (Array.isArray(input)) {
        if (input.length !== 2 || !input.every(isNumber)) return invalid(input);
        if (Number.isNaN(input[0]) || Number.isNaN(input[1])) return zero;
        if (input[0] === -Infinity || input[1] === -Infinity) return negativeInfinity;
        if (input[0] === Infinity || input[1] === Infinity) return infinity;
        return fromNanosNumber(input[0] * 1e9 + input[1]);
      }
      const obj = input;
      let millis = 0;
      if (obj.weeks) millis += obj.weeks * 6048e5;
      if (obj.days) millis += obj.days * 864e5;
      if (obj.hours) millis += obj.hours * 36e5;
      if (obj.minutes) millis += obj.minutes * 6e4;
      if (obj.seconds) millis += obj.seconds * 1e3;
      if (obj.milliseconds) millis += obj.milliseconds;
      if (!obj.microseconds && !obj.nanoseconds) return make$4(millis);
      return fromNanosNumber(millis * 1e6 + (obj.microseconds ?? 0) * 1e3 + (obj.nanoseconds ?? 0));
    }
  }
  return invalid(input);
};
const invalid = (input) => {
  throw new Error(`Invalid Input: ${input}`);
};
/**
 * Decodes a `Input` value into a `Duration` safely, returning
 * `Option.none()` if decoding fails.
 *
 * **Example** (Safely decoding duration inputs)
 *
 * ```ts import.meta.vitest
 * import { Duration, Option } from "effect"
 *
 * Duration.fromInput(1000) // => Option.some(Duration.seconds(1))
 * Duration.fromInput("invalid" as any) // => Option.none()
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromInput = /*#__PURE__*/ liftThrowable(fromInputUnsafe);
const zeroDurationValue = {
  _tag: "Millis",
  millis: 0,
};
const infinityDurationValue = { _tag: "Infinity" };
const negativeInfinityDurationValue = { _tag: "NegativeInfinity" };
const DurationProto = {
  [TypeId$5]: TypeId$5,
  [symbol$1]() {
    switch (this.value._tag) {
      case "Millis":
        return hash(roundMillisToNanos(this.value.millis));
      case "Nanos":
        return hash(this.value.nanos);
      default:
        return structure(this.value);
    }
  },
  [symbol](that) {
    return isDuration(that) && equals(this, that);
  },
  toString() {
    switch (this.value._tag) {
      case "Infinity":
        return "Infinity";
      case "NegativeInfinity":
        return "-Infinity";
      case "Nanos":
        return `${this.value.nanos} nanos`;
      case "Millis":
        return `${this.value.millis} millis`;
    }
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis,
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          nanos: String(this.value.nanos),
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity",
        };
      case "NegativeInfinity":
        return {
          _id: "Duration",
          _tag: "NegativeInfinity",
        };
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
const make$4 = (input) => {
  const duration = Object.create(DurationProto);
  if (typeof input === "number") {
    if (isNaN(input) || input === 0 || Object.is(input, -0)) duration.value = zeroDurationValue;
    else if (!Number.isFinite(input))
      duration.value = input > 0 ? infinityDurationValue : negativeInfinityDurationValue;
    else if (!Number.isInteger(input))
      duration.value = {
        _tag: "Nanos",
        nanos: roundMillisToNanos(input),
      };
    else
      duration.value = {
        _tag: "Millis",
        millis: input,
      };
  } else if (input === bigint0$1) duration.value = zeroDurationValue;
  else
    duration.value = {
      _tag: "Nanos",
      nanos: input,
    };
  return duration;
};
/**
 * Checks whether a value is a Duration.
 *
 * **Example** (Checking for durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isDuration(Duration.seconds(1)) // => true
 * Duration.isDuration(1000) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isDuration = (u) => hasProperty(u, TypeId$5);
/**
 * Checks whether a Duration is finite (not infinite).
 *
 * **Example** (Checking finite durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isFinite(Duration.seconds(5)) // => true
 * Duration.isFinite(Duration.infinity) // => false
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const isFinite = (self) => self.value._tag !== "Infinity" && self.value._tag !== "NegativeInfinity";
/**
 * Checks whether a Duration is zero.
 *
 * **Example** (Checking for zero durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isZero(Duration.zero) // => true
 * Duration.isZero(Duration.seconds(1)) // => false
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 3.5.0
 */
const isZero = (self) => {
  switch (self.value._tag) {
    case "Millis":
      return self.value.millis === 0;
    case "Nanos":
      return self.value.nanos === bigint0$1;
    case "Infinity":
    case "NegativeInfinity":
      return false;
  }
};
/**
 * Returns `true` if the duration is negative (strictly less than zero).
 *
 * **Example** (Checking for negative durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isNegative(Duration.seconds(-5)) // => true
 * Duration.isNegative(Duration.zero) // => false
 * Duration.isNegative(Duration.negativeInfinity) // => true
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isNegative = (self) => {
  switch (self.value._tag) {
    case "Millis":
      return self.value.millis < 0;
    case "Nanos":
      return self.value.nanos < bigint0$1;
    case "NegativeInfinity":
      return true;
    case "Infinity":
      return false;
  }
};
/**
 * Returns `true` if the duration is positive (strictly greater than zero).
 *
 * **Example** (Checking for positive durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isPositive(Duration.seconds(5)) // => true
 * Duration.isPositive(Duration.zero) // => false
 * Duration.isPositive(Duration.infinity) // => true
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isPositive = (self) => {
  switch (self.value._tag) {
    case "Millis":
      return self.value.millis > 0;
    case "Nanos":
      return self.value.nanos > bigint0$1;
    case "Infinity":
      return true;
    case "NegativeInfinity":
      return false;
  }
};
/**
 * Returns the absolute value of the duration.
 *
 * **Example** (Taking absolute duration values)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.abs(Duration.seconds(-5)) // => Duration.seconds(5)
 * Duration.abs(Duration.negativeInfinity) // => Duration.infinity
 * ```
 *
 * @stability stable
 * @category math
 * @since 4.0.0
 */
const abs = (self) => {
  switch (self.value._tag) {
    case "Infinity":
    case "NegativeInfinity":
      return infinity;
    case "Millis":
      return self.value.millis < 0 ? make$4(-self.value.millis) : self;
    case "Nanos":
      return self.value.nanos < bigint0$1 ? make$4(-self.value.nanos) : self;
  }
};
/**
 * A Duration representing zero time.
 *
 * **Example** (Referencing the zero duration)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.zero) // => 0
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const zero = /*#__PURE__*/ make$4(0);
/**
 * A Duration representing infinite time.
 *
 * **Example** (Referencing infinite duration)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.infinity) // => Infinity
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const infinity = /*#__PURE__*/ make$4(Infinity);
/**
 * A Duration representing negative infinite time.
 *
 * **Example** (Referencing negative infinite duration)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.negativeInfinity) // => -Infinity
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const negativeInfinity = /*#__PURE__*/ make$4(-Infinity);
/**
 * Creates a Duration from nanoseconds.
 *
 * **Example** (Creating durations from nanoseconds)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.nanos(500_000_000n) // => Duration.nanos(500_000_000n)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const nanos = (nanos) => make$4(nanos);
/**
 * Creates a Duration from milliseconds.
 *
 * **Example** (Creating durations from milliseconds)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.millis(1000)) // => 1000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const millis = (millis) => make$4(millis);
/**
 * Creates a Duration from seconds.
 *
 * **Example** (Creating durations from seconds)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.seconds(30)) // => 30_000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const seconds = (seconds) => make$4(seconds * 1e3);
/**
 * Creates a Duration from minutes.
 *
 * **Example** (Creating durations from minutes)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.minutes(5)) // => 300_000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const minutes = (minutes) => make$4(minutes * 6e4);
/**
 * Creates a Duration from hours.
 *
 * **Example** (Creating durations from hours)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.hours(2)) // => 7_200_000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const hours = (hours) => make$4(hours * 36e5);
/**
 * Creates a Duration from days.
 *
 * **Example** (Creating durations from days)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.days(1)) // => 86_400_000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const days = (days) => make$4(days * 864e5);
/**
 * Creates a Duration from weeks.
 *
 * **Example** (Creating durations from weeks)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.weeks(1)) // => 604_800_000
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const weeks = (weeks) => make$4(weeks * 6048e5);
/**
 * Converts a Duration to milliseconds.
 *
 * **Example** (Converting durations to milliseconds)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMillis(Duration.seconds(5)) // => 5000
 * Duration.toMillis(Duration.minutes(2)) // => 120_000
 * ```
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const toMillis = (self) =>
  match$3(fromInputUnsafe(self), {
    onMillis: identity,
    onNanos: (nanos) => Number(nanos) / 1e6,
    onInfinity: () => Infinity,
    onNegativeInfinity: () => -Infinity,
  });
/**
 * Converts a Duration to seconds.
 *
 * **Example** (Converting durations to seconds)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toSeconds(Duration.millis(5000)) // => 5
 * Duration.toSeconds(Duration.minutes(2)) // => 120
 * ```
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const toSeconds = (self) =>
  match$3(fromInputUnsafe(self), {
    onMillis: (millis) => millis / 1e3,
    onNanos: (nanos) => Number(nanos) / 1e9,
    onInfinity: () => Infinity,
    onNegativeInfinity: () => -Infinity,
  });
/**
 * Converts a Duration to minutes.
 *
 * **Example** (Converting durations to minutes)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toMinutes(Duration.seconds(120)) // => 2
 * Duration.toMinutes(Duration.hours(1)) // => 60
 * ```
 *
 * @stability stable
 * @category getters
 * @since 3.8.0
 */
const toMinutes = (self) =>
  match$3(fromInputUnsafe(self), {
    onMillis: (millis) => millis / 6e4,
    onNanos: (nanos) => Number(nanos) / 6e10,
    onInfinity: () => Infinity,
    onNegativeInfinity: () => -Infinity,
  });
/**
 * Gets the duration in nanoseconds as a bigint.
 *
 * **When to use**
 *
 * Use when the duration is known to be finite and you need the nanosecond value
 * as a `bigint`.
 *
 * **Details**
 *
 * Millisecond-backed fractional durations are rounded to the nearest
 * nanosecond, with ties away from zero.
 *
 * **Gotchas**
 *
 * If the duration is infinite, it throws an error.
 *
 * **Example** (Reading nanoseconds unsafely)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.toNanosUnsafe(Duration.seconds(2)) // => 2_000_000_000n
 *
 * // Duration.toNanosUnsafe(Duration.infinity)
 * // throws Error: "Cannot convert infinite duration to nanos"
 * ```
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
const toNanosUnsafe = (input) => {
  const self = fromInputUnsafe(input);
  switch (self.value._tag) {
    case "Infinity":
    case "NegativeInfinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return self.value.nanos;
    case "Millis":
      return roundMillisToNanos(self.value.millis);
  }
};
/**
 * Pattern matches on the representation of a `Duration`.
 *
 * **Details**
 *
 * Provide handlers for millisecond-backed values, nanosecond-backed values,
 * and positive infinity. Use `onNegativeInfinity` to handle negative infinity
 * separately; otherwise negative infinity is handled by `onInfinity`.
 *
 * **Example** (Pattern matching on duration representations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.match(Duration.seconds(5), {
 *   onMillis: (millis) => `${millis} milliseconds`,
 *   onNanos: (nanos) => `${nanos} nanoseconds`,
 *   onInfinity: () => "infinite"
 * }) // => "5000 milliseconds"
 * ```
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match$3 = /*#__PURE__*/ dual(2, (self, options) => {
  switch (self.value._tag) {
    case "Millis":
      return options.onMillis(self.value.millis);
    case "Nanos":
      return options.onNanos(self.value.nanos);
    case "Infinity":
      return options.onInfinity();
    case "NegativeInfinity":
      return (options.onNegativeInfinity ?? options.onInfinity)();
  }
});
/**
 * Pattern matches on two `Duration`s, providing handlers that receive both values.
 *
 * **Example** (Pattern matching on duration pairs)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.matchPair(Duration.seconds(3), Duration.seconds(2), {
 *   onMillis: (a, b) => a + b,
 *   onNanos: (a, b) => Number(a + b),
 *   onInfinity: () => Infinity
 * }) // => 5000
 * ```
 *
 * @stability stable
 * @category pattern matching
 * @since 4.0.0
 */
const matchPair = /*#__PURE__*/ dual(3, (self, that, options) => {
  if (
    self.value._tag === "Infinity" ||
    self.value._tag === "NegativeInfinity" ||
    that.value._tag === "Infinity" ||
    that.value._tag === "NegativeInfinity"
  )
    return options.onInfinity(self, that);
  if (self.value._tag === "Millis")
    return that.value._tag === "Millis"
      ? options.onMillis(self.value.millis, that.value.millis)
      : options.onNanos(toNanosUnsafe(self), that.value.nanos);
  else return options.onNanos(self.value.nanos, toNanosUnsafe(that));
});
/**
 * Provides an `Order` instance for comparing `Duration` values.
 *
 * **Details**
 *
 * `NegativeInfinity` < any finite value < `Infinity`.
 *
 * **Example** (Sorting durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * const durations = [
 *   Duration.seconds(3),
 *   Duration.seconds(1),
 *   Duration.seconds(2)
 * ]
 * durations.sort((a, b) => Duration.Order(a, b)).map(Duration.toSeconds) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category instances
 * @since 2.0.0
 */
const Order = /*#__PURE__*/ make$6((self, that) =>
  matchPair(self, that, {
    onMillis: (self, that) => (self < that ? -1 : self > that ? 1 : 0),
    onNanos: (self, that) => (self < that ? -1 : self > that ? 1 : 0),
    onInfinity: (self, that) => {
      if (self.value._tag === that.value._tag) return 0;
      if (self.value._tag === "Infinity") return 1;
      if (self.value._tag === "NegativeInfinity") return -1;
      if (that.value._tag === "Infinity") return -1;
      return 1;
    },
  }),
);
/**
 * Provides an `Equivalence` instance for comparing `Duration` values.
 *
 * **Example** (Comparing durations for equivalence)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.Equivalence(Duration.seconds(5), Duration.millis(5000)) // => true
 * ```
 *
 * @stability stable
 * @category instances
 * @since 2.0.0
 */
const Equivalence = (self, that) =>
  matchPair(self, that, {
    onMillis: (self, that) => self === that,
    onNanos: (self, that) => self === that,
    onInfinity: (self, that) => self.value._tag === that.value._tag,
  });
/**
 * Returns the smaller of two Durations.
 *
 * **Example** (Selecting the shorter duration)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.min(Duration.seconds(5), Duration.seconds(3)) // => Duration.seconds(3)
 * ```
 *
 * @stability stable
 * @category ordering
 * @since 2.0.0
 */
const min = /*#__PURE__*/ min$1(Order);
/**
 * Returns the larger of two Durations.
 *
 * **Example** (Selecting the longer duration)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.max(Duration.seconds(5), Duration.seconds(3)) // => Duration.seconds(5)
 * ```
 *
 * @stability stable
 * @category ordering
 * @since 2.0.0
 */
const max = /*#__PURE__*/ max$1(Order);
/**
 * Returns a `Duration` multiplied by a number.
 *
 * **Details**
 *
 * Fractional multipliers on nanosecond-backed durations round the result to
 * the nearest nanosecond, with ties rounding away from zero. Infinite
 * durations return positive infinity, negative infinity, or zero depending on
 * the multiplier sign.
 *
 * **Example** (Multiplying durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.times(Duration.seconds(5), 2) // => Duration.seconds(10)
 * ```
 *
 * @stability stable
 * @category math
 * @since 2.0.0
 */
const times = /*#__PURE__*/ dual(2, (self, times) =>
  match$3(self, {
    onMillis: (millis) => make$4(millis * times),
    onNanos: (nanos) => {
      if (Number.isInteger(times)) return make$4(nanos * BigInt(times));
      const nanosNumber = Number(nanos);
      const scaled = nanosNumber * times;
      if (
        !Number.isFinite(times) ||
        (Number.isSafeInteger(nanosNumber) && Math.abs(scaled) <= Number.MAX_SAFE_INTEGER)
      )
        return fromNanosNumber(scaled);
      let numerator = times;
      let denominator = bigint1;
      while (!Number.isInteger(numerator)) {
        numerator *= 2;
        denominator *= bigint2;
      }
      return make$4(divideTiesAwayFromZero(nanos * BigInt(numerator), denominator));
    },
    onInfinity: () => (times > 0 ? infinity : times < 0 ? negativeInfinity : zero),
    onNegativeInfinity: () => (times > 0 ? negativeInfinity : times < 0 ? infinity : zero),
  }),
);
/**
 * Adds two Durations together.
 *
 * **Details**
 *
 * Infinity addition follows these rules:
 *
 * - infinity + infinity = infinity
 * - infinity + negativeInfinity = zero
 * - infinity + finite = infinity
 * - negativeInfinity + negativeInfinity = negativeInfinity
 * - negativeInfinity + finite = negativeInfinity
 *
 * **Example** (Adding durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.sum(Duration.seconds(5), Duration.seconds(3)) // => Duration.seconds(8)
 * ```
 *
 * @stability stable
 * @category math
 * @since 2.0.0
 */
const sum = /*#__PURE__*/ dual(2, (self, that) =>
  matchPair(self, that, {
    onMillis: (self, that) => make$4(self + that),
    onNanos: (self, that) => make$4(self + that),
    onInfinity: (self, that) => {
      const s = self.value._tag;
      const t = that.value._tag;
      if (s === "Infinity" && t === "NegativeInfinity") return zero;
      if (s === "NegativeInfinity" && t === "Infinity") return zero;
      if (s === "Infinity" || t === "Infinity") return infinity;
      if (s === "NegativeInfinity" || t === "NegativeInfinity") return negativeInfinity;
      return zero;
    },
  }),
);
/**
 * Checks whether the first Duration is less than or equal to the second.
 *
 * **Example** (Comparing durations with less than or equal)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isLessThanOrEqualTo(
 *   Duration.seconds(5),
 *   Duration.seconds(5)
 * ) // => true
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isLessThanOrEqualTo = /*#__PURE__*/ isLessThanOrEqualTo$1(Order);
/**
 * Checks whether the first Duration is greater than or equal to the second.
 *
 * **Example** (Comparing durations with greater than or equal)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.isGreaterThanOrEqualTo(
 *   Duration.seconds(5),
 *   Duration.seconds(5)
 * ) // => true
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isGreaterThanOrEqualTo = /*#__PURE__*/ isGreaterThanOrEqualTo$1(Order);
/**
 * Checks whether two Durations are equal.
 *
 * **Example** (Checking duration equality)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.equals(Duration.seconds(5), Duration.millis(5000)) // => true
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const equals = /*#__PURE__*/ dual(2, (self, that) => Equivalence(self, that));
/**
 * Decomposes a `Duration` into normalized signed components.
 *
 * **Details**
 *
 * Finite durations are returned as `{ days, hours, minutes, seconds, millis,
 * nanos }`. Infinite durations return every component as `Infinity` or
 * `-Infinity`.
 *
 * **Example** (Decomposing durations into parts)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * // Create a complex duration by adding multiple parts
 * const duration = Duration.sum(
 *   Duration.sum(
 *     Duration.sum(Duration.days(1), Duration.hours(2)),
 *     Duration.sum(Duration.minutes(30), Duration.seconds(45))
 *   ),
 *   Duration.millis(123)
 * )
 * Duration.parts(duration) // => ({ days: 1, hours: 2, minutes: 30, seconds: 45, millis: 123, nanos: 0 })
 *
 * const complex = Duration.sum(Duration.hours(25), Duration.minutes(90))
 * Duration.parts(complex) // => ({ days: 1, hours: 2, minutes: 30, seconds: 0, millis: 0, nanos: 0 })
 * ```
 *
 * @stability stable
 * @category converting
 * @since 3.8.0
 */
const parts = (self) => {
  if (self.value._tag === "Infinity")
    return {
      days: Infinity,
      hours: Infinity,
      minutes: Infinity,
      seconds: Infinity,
      millis: Infinity,
      nanos: Infinity,
    };
  if (self.value._tag === "NegativeInfinity")
    return {
      days: -Infinity,
      hours: -Infinity,
      minutes: -Infinity,
      seconds: -Infinity,
      millis: -Infinity,
      nanos: -Infinity,
    };
  const n = toNanosUnsafe(self);
  const neg = n < bigint0$1;
  const a = neg ? -n : n;
  const ms = a / bigint1e6;
  const sec = ms / bigint1e3;
  const min = sec / bigint60;
  const hr = min / bigint60;
  const d = hr / bigint24;
  const sign = neg ? -1 : 1;
  return {
    days: sign * Number(d),
    hours: sign * Number(hr % bigint24),
    minutes: sign * Number(min % bigint60),
    seconds: sign * Number(sec % bigint60),
    millis: sign * Number(ms % bigint1e3),
    nanos: sign * Number(a % bigint1e6),
  };
};
/**
 * Converts a `Duration` to a human readable string.
 *
 * **Example** (Formatting durations)
 *
 * ```ts import.meta.vitest
 * import { Duration } from "effect"
 *
 * Duration.format(Duration.millis(1000)) // => "1s"
 * Duration.format(Duration.millis(1001)) // => "1s 1ms"
 * ```
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const format = (self) => {
  if (self.value._tag === "Infinity") return "Infinity";
  if (self.value._tag === "NegativeInfinity") return "-Infinity";
  if (isZero(self)) return "0";
  if (isNegative(self)) return "-" + format(abs(self));
  const fragments = parts(self);
  const pieces = [];
  if (fragments.days !== 0) pieces.push(`${fragments.days}d`);
  if (fragments.hours !== 0) pieces.push(`${fragments.hours}h`);
  if (fragments.minutes !== 0) pieces.push(`${fragments.minutes}m`);
  if (fragments.seconds !== 0) pieces.push(`${fragments.seconds}s`);
  if (fragments.millis !== 0) pieces.push(`${fragments.millis}ms`);
  if (fragments.nanos !== 0) pieces.push(`${fragments.nanos}ns`);
  return pieces.join(" ");
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Filter.js
/**
 * Converts a Filter into a predicate function.
 *
 * **When to use**
 *
 * Use to reuse a `Filter` with APIs that accept only boolean predicates when
 * the pass and fail payloads are not needed.
 *
 * @see {@link toOption} for keeping passed values and discarding failure values
 * @see {@link toResult} for preserving both pass and failure values
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toPredicate = (self) => (input) => !isFailure$1(self(input));
/**
 * Creates a `Filter` that passes inputs whose `has(key)` method returns
 * `true` for the specified key.
 *
 * **When to use**
 *
 * Use to keep inputs that expose a `has` method, such as `Set` or `Map`, when
 * they contain a required key.
 *
 * @see {@link fromPredicate} for custom predicate filters or inputs without a
 * `has` method
 * @see {@link Predicate.hasProperty} for guarding property presence instead of
 * calling an input's `has` method
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const has$1 = (key) => (input) => (input.has(key) ? succeed$5(input) : fail$5(input));
/**
 * Composes two filters sequentially, feeding the output of the first into the second.
 *
 * **Example** (Composing filters)
 *
 * ```ts import.meta.vitest
 * import { Filter, Result } from "effect"
 *
 * const stringFilter = Filter.string
 * const nonEmptyUpper = Filter.make((s: string) =>
 *   s.length > 0 ? Result.succeed(s.toUpperCase()) : Result.fail(s)
 * )
 *
 * const stringToUpper = Filter.compose(stringFilter, nonEmptyUpper)
 * stringToUpper("hello") // => Result.succeed("HELLO")
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const compose = /*#__PURE__*/ dual(2, (left, right) => (input) => {
  const leftOut = left(input);
  if (isFailure$1(leftOut)) return leftOut;
  return right(leftOut.success);
});
/**
 * Composes two filters sequentially, passing the successful output of the first
 * filter to the second.
 *
 * **Details**
 *
 * If either filter fails, the returned filter fails with the original input
 * instead of the intermediate failure value.
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const composePassthrough = /*#__PURE__*/ dual(2, (left, right) => (input) => {
  const leftOut = left(input);
  if (isFailure$1(leftOut)) return fail$5(input);
  const rightOut = right(leftOut.success);
  if (isFailure$1(rightOut)) return fail$5(input);
  return rightOut;
});
/**
 * Converts a `Filter` into a function that returns `Some` for passed values
 * and `None` for filtered-out values.
 *
 * **When to use**
 *
 * Use when adapting a `Filter` to `Option`-based code where passed values
 * become `Some` and filtered-out inputs become `None`.
 *
 * @see {@link toResult} for keeping the filter failure value
 * @see {@link toPredicate} for plain boolean pass/fail checks
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const toOption = (self) => (input) => {
  const result = self(input);
  return isFailure$1(result) ? none() : some(result.success);
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Scheduler.js
/**
 * Controls how runnable Effect fiber tasks are dispatched.
 *
 * A scheduler decides how tasks are queued, when queued tasks run, and when a
 * fiber should pause so other work can continue. This module includes the
 * scheduler service reference, the default `MixedScheduler`, dispatcher types
 * for queued tasks, and references for tuning or disabling automatic scheduler
 * yields.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Context reference for the scheduler used by the Effect runtime.
 *
 * **When to use**
 *
 * Use when you need to replace scheduling behavior globally in tests or runtime
 * setup, such as forcing deterministic task dispatch.
 *
 * **Details**
 *
 * The default value creates a `MixedScheduler`. Provide this service to
 * customize execution mode, task dispatching, or yield behavior.
 *
 * @stability stable
 * @category services
 * @since 2.0.0
 */
const Scheduler = /*#__PURE__*/ Reference("effect/Scheduler", {
  fiberCached: true,
  defaultValue: () => new MixedScheduler(),
});
const setMicrotask = (f) => {
  let cancelled = false;
  Promise.resolve().then(() => {
    if (!cancelled) f();
  });
  return () => {
    cancelled = true;
  };
};
const setTimer =
  "setImmediate" in globalThis
    ? (f) => {
        const timer = globalThis.setImmediate(f);
        return () => globalThis.clearImmediate(timer);
      }
    : (f) => {
        const timer = setTimeout(f, 0);
        return () => clearTimeout(timer);
      };
const setImmediate = (f) => {
  try {
    return setTimer(f);
  } catch {
    return setMicrotask(f);
  }
};
var PriorityBuckets = class {
  buckets = [];
  scheduleTask(task, priority) {
    const buckets = this.buckets;
    const len = buckets.length;
    let bucket;
    let index = 0;
    for (; index < len; index++) {
      if (buckets[index][0] > priority) break;
      bucket = buckets[index];
    }
    if (bucket && bucket[0] === priority) bucket[1].push(task);
    else if (index === len) buckets.push([priority, [task]]);
    else buckets.splice(index, 0, [priority, [task]]);
  }
  drain() {
    const buckets = this.buckets;
    this.buckets = [];
    return buckets;
  }
};
/**
 * Provides a scheduler implementation that batches queued tasks and dispatches them by
 * priority.
 *
 * **When to use**
 *
 * Use when you need the default runtime scheduler directly, including a
 * scheduler that batches queued work by priority and preserves FIFO order within
 * each priority.
 *
 * **Details**
 *
 * `MixedScheduler` supports synchronous and asynchronous execution modes, uses
 * operation counts to decide when fibers should yield, and is the default
 * scheduler implementation.
 *
 * **Gotchas**
 *
 * On Cloudflare Workers, request-owned scheduler timers can be discarded,
 * leaving shared fibers suspended. Use `new MixedScheduler("sync")` for the
 * whole application; see `HttpRouter.toWebHandler` for a recipe.
 * Sync mode does not yield to the event loop: CPU-heavy work delays other
 * requests, and I/O-polling loops can exhaust the CPU limit. It does not fix
 * request-owned timers (such as `Effect.sleep`) or request-bound async contexts.
 *
 * @stability stable
 * @category models
 * @since 2.0.0
 */
var MixedScheduler = class {
  executionMode;
  setImmediate;
  constructor(executionMode = "async", setImmediateFn) {
    this.executionMode = executionMode;
    this.setImmediate = setImmediateFn ?? (executionMode === "sync" ? setMicrotask : setImmediate);
  }
  /**
   * Returns whether the fiber has reached its operation budget and should yield.
   *
   * **When to use**
   *
   * Use to decide whether a fiber should yield after consuming its current
   * operation budget.
   *
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount >= fiber.cache.maxOpsBeforeYield;
  }
  /**
   * Creates a dispatcher that schedules work through this scheduler.
   *
   * **When to use**
   *
   * Use when you need a standalone dispatcher from a scheduler instance, for
   * example in tests that enqueue tasks and then flush them deterministically.
   *
   * @since 4.0.0
   */
  makeDispatcher() {
    return new MixedSchedulerDispatcher(this.setImmediate);
  }
};
var MixedSchedulerDispatcher = class {
  tasks = /*#__PURE__*/ new PriorityBuckets();
  running = void 0;
  setImmediate;
  constructor(setImmediateFn = setImmediate) {
    this.setImmediate = setImmediateFn;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    this.tasks.scheduleTask(task, priority);
    if (this.running === void 0) this.running = this.setImmediate(this.afterScheduled);
  }
  /**
   * @since 2.0.0
   */
  afterScheduled = () => {
    this.running = void 0;
    this.runTasks();
  };
  /**
   * @since 2.0.0
   */
  runTasks() {
    const buckets = this.tasks.drain();
    for (let i = 0; i < buckets.length; i++) {
      const toRun = buckets[i][1];
      for (let j = 0; j < toRun.length; j++) toRun[j]();
    }
  }
  /**
   * @since 2.0.0
   */
  flush() {
    while (this.tasks.buckets.length > 0) {
      if (this.running !== void 0) {
        this.running();
        this.running = void 0;
      }
      this.runTasks();
    }
  }
};
/**
 * Context reference that controls the maximum number of operations a fiber
 * can perform before yielding control back to the scheduler.
 *
 * **When to use**
 *
 * Use to tune scheduler fairness for CPU-bound fibers by changing the scheduler
 * operation budget that triggers a yield.
 *
 * **Details**
 *
 * The default value is `2048` operations, which balances performance and
 * fairness by helping prevent long-running fibers from monopolizing the
 * execution thread.
 *
 * @see {@link PreventSchedulerYield} for bypassing scheduler yield checks entirely rather than tuning the operation budget
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const MaxOpsBeforeYield = /*#__PURE__*/ Reference("effect/Scheduler/MaxOpsBeforeYield", {
  fiberCached: true,
  defaultValue: () => 2048,
});
/**
 * Context reference that controls whether the runtime should bypass scheduler
 * yield checks. When set to `true`, the fiber run loop won't call
 * `Scheduler.shouldYield`.
 *
 * **When to use**
 *
 * Use to bypass scheduler yield checks for controlled runtime workloads where
 * cooperative yielding should be disabled.
 *
 * **Gotchas**
 *
 * Setting this reference to `true` can let long-running fibers monopolize the
 * JavaScript thread.
 *
 * @see {@link MaxOpsBeforeYield} for tuning yield frequency without disabling yield checks
 * @see {@link Scheduler} for providing custom scheduler yield behavior
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const PreventSchedulerYield = /*#__PURE__*/ Reference("effect/Scheduler/PreventSchedulerYield", {
  fiberCached: true,
  defaultValue: () => false,
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/encoding/Hex.js
/**
 * Encodes the given value into a hex `string`.
 *
 * **When to use**
 *
 * Use to encode text or bytes as lowercase hexadecimal text.
 *
 * **Example** (Encoding hex strings and bytes)
 *
 * ```ts import.meta.vitest
 * import { Hex } from "effect/encoding"
 *
 * // Encode a string to hex
 * Hex.encode("hello") // => "68656c6c6f"
 *
 * // Encode binary data to hex
 * const bytes = new Uint8Array([72, 101, 108, 108, 111])
 * Hex.encode(bytes) // => "48656c6c6f"
 * ```
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const encode = (input) =>
  typeof input === "string"
    ? hexEncodeUint8Array(encoder.encode(input))
    : hexEncodeUint8Array(input);
/**
 * Generates a random lowercase hexadecimal string, optimized for lengths that
 * are multiples of 8.
 *
 * **Details**
 *
 * `length` is not validated. The function generates `length >>> 3` random
 * 8-character words, so non-negative lengths below `2 ** 32` are rounded down
 * to a multiple of 8 and other values follow JavaScript's unsigned 32-bit
 * coercion rules.
 *
 * This function uses `Math.random()` and is not cryptographically secure. For
 * security-sensitive values, use the `Crypto.Crypto` service's `randomBytes`
 * method and encode the result with {@link encode}.
 *
 * @stability stable
 * @category encoding
 * @since 4.0.0
 */
const random = (length) => {
  switch (length) {
    case 16:
      return random16();
    case 32:
      return random32();
    default: {
      let result = "";
      for (let i = length >>> 3; i > 0; i--) result += random8();
      return result;
    }
  }
};
const hexCharCodes = /*#__PURE__*/ Uint8Array.from("0123456789abcdef", (c) => c.charCodeAt(0));
const randomWord = () => (Math.random() * 4294967296) >>> 0;
const random8 = () => {
  const a = randomWord();
  return String.fromCharCode(
    hexCharCodes[a >>> 28],
    hexCharCodes[(a >>> 24) & 15],
    hexCharCodes[(a >>> 20) & 15],
    hexCharCodes[(a >>> 16) & 15],
    hexCharCodes[(a >>> 12) & 15],
    hexCharCodes[(a >>> 8) & 15],
    hexCharCodes[(a >>> 4) & 15],
    hexCharCodes[a & 15],
  );
};
const random16 = () => {
  const a = randomWord();
  const b = randomWord();
  return String.fromCharCode(
    hexCharCodes[a >>> 28],
    hexCharCodes[(a >>> 24) & 15],
    hexCharCodes[(a >>> 20) & 15],
    hexCharCodes[(a >>> 16) & 15],
    hexCharCodes[(a >>> 12) & 15],
    hexCharCodes[(a >>> 8) & 15],
    hexCharCodes[(a >>> 4) & 15],
    hexCharCodes[a & 15],
    hexCharCodes[b >>> 28],
    hexCharCodes[(b >>> 24) & 15],
    hexCharCodes[(b >>> 20) & 15],
    hexCharCodes[(b >>> 16) & 15],
    hexCharCodes[(b >>> 12) & 15],
    hexCharCodes[(b >>> 8) & 15],
    hexCharCodes[(b >>> 4) & 15],
    hexCharCodes[b & 15],
  );
};
const random32 = () => {
  const a = randomWord();
  const b = randomWord();
  const c = randomWord();
  const d = randomWord();
  return String.fromCharCode(
    hexCharCodes[a >>> 28],
    hexCharCodes[(a >>> 24) & 15],
    hexCharCodes[(a >>> 20) & 15],
    hexCharCodes[(a >>> 16) & 15],
    hexCharCodes[(a >>> 12) & 15],
    hexCharCodes[(a >>> 8) & 15],
    hexCharCodes[(a >>> 4) & 15],
    hexCharCodes[a & 15],
    hexCharCodes[b >>> 28],
    hexCharCodes[(b >>> 24) & 15],
    hexCharCodes[(b >>> 20) & 15],
    hexCharCodes[(b >>> 16) & 15],
    hexCharCodes[(b >>> 12) & 15],
    hexCharCodes[(b >>> 8) & 15],
    hexCharCodes[(b >>> 4) & 15],
    hexCharCodes[b & 15],
    hexCharCodes[c >>> 28],
    hexCharCodes[(c >>> 24) & 15],
    hexCharCodes[(c >>> 20) & 15],
    hexCharCodes[(c >>> 16) & 15],
    hexCharCodes[(c >>> 12) & 15],
    hexCharCodes[(c >>> 8) & 15],
    hexCharCodes[(c >>> 4) & 15],
    hexCharCodes[c & 15],
    hexCharCodes[d >>> 28],
    hexCharCodes[(d >>> 24) & 15],
    hexCharCodes[(d >>> 20) & 15],
    hexCharCodes[(d >>> 16) & 15],
    hexCharCodes[(d >>> 12) & 15],
    hexCharCodes[(d >>> 8) & 15],
    hexCharCodes[(d >>> 4) & 15],
    hexCharCodes[d & 15],
  );
};
const encoder = /*#__PURE__*/ new TextEncoder();
const byteToHex = /*#__PURE__*/ Array.from({ length: 256 }, (_, i) =>
  i.toString(16).padStart(2, "0"),
);
const hexEncodeUint8Array = (bytes) => {
  let result = "";
  for (let i = 0; i < bytes.length; i++) result += byteToHex[bytes[i]];
  return result;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Tracer.js
/**
 * Defines the low-level tracing model used by Effect.
 *
 * A span records the lifetime of an operation, including its name, parent,
 * attributes, links, annotations, sampling decision, kind, and completion
 * status. The module also defines the tracer service, parent-span context,
 * external span support, trace propagation settings, and the default in-memory
 * span implementation.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Defines the string key for the parent-span context service.
 *
 * **When to use**
 *
 * Use when you need the raw context key for parent span lookup in lower-level
 * tracing code.
 *
 * **Example** (Reading the parent span key)
 *
 * ```ts import.meta.vitest
 * import { Tracer } from "effect"
 *
 * // The key used to identify parent spans in the context
 * Tracer.ParentSpanKey // => "effect/Tracer/ParentSpan"
 * ```
 *
 * @stability stable
 * @category constants
 * @since 4.0.0
 */
const ParentSpanKey = "effect/Tracer/ParentSpan";
/**
 * Context service containing the `Span` or `ExternalSpan` to use as the parent
 * of newly-created child spans.
 *
 * **Example** (Accessing the parent span)
 *
 * ```ts import.meta.vitest
 * import { Effect, Tracer } from "effect"
 *
 * // Access the parent span from the context
 * const program = Effect.gen(function*() {
 *   const parentSpan = yield* Effect.service(Tracer.ParentSpan)
 *   return parentSpan.spanId
 * })
 *
 * const parent = Tracer.externalSpan({ spanId: "span-123", traceId: "trace-456" })
 * await Effect.runPromise(Effect.provideService(program, Tracer.ParentSpan, parent)) // => "span-123"
 * ```
 *
 * @stability stable
 * @category services
 * @since 2.0.0
 */
var ParentSpan = class extends /*#__PURE__*/ Service()(ParentSpanKey, { fiberCached: true }) {};
/**
 * Creates a `Tracer` value from a tracer implementation object.
 *
 * **When to use**
 *
 * Use to create a custom tracing backend value that Effect can use when
 * creating spans.
 *
 * **Details**
 *
 * `make` returns the supplied implementation object unchanged. The object must
 * satisfy the `Tracer` contract, including a `span` method that returns a
 * `Span`.
 *
 * @see {@link Span} for the span values returned by tracer implementations
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$3 = (options) => options;
/**
 * Creates an `ExternalSpan` from trace and span identifiers, defaulting
 * `sampled` to `true` and annotations to an empty context when they are not
 * provided.
 *
 * **Example** (Creating an external span)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Tracer } from "effect"
 *
 * // Create an external span from another tracing system
 * const span = Tracer.externalSpan({
 *   spanId: "span-abc-123",
 *   traceId: "trace-xyz-789",
 *   sampled: true
 * })
 *
 * // Use the external span as a parent
 * const program = Effect.succeed("Hello").pipe(
 *   Effect.withSpan("child-operation", { parent: span })
 * )
 *
 * const spans: Array<Tracer.NativeSpan> = []
 * const tracer = Tracer.make({
 *   span(options) {
 *     const span = new Tracer.NativeSpan(options)
 *     spans.push(span)
 *     return span
 *   }
 * })
 * const value = await Effect.runPromise(Effect.provideService(program, Tracer.Tracer, tracer))
 *
 * value // => "Hello"
 * spans.map((span) => Option.getOrUndefined(span.parent)?.spanId) // => ["span-abc-123"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const externalSpan = (options) => ({
  _tag: "ExternalSpan",
  spanId: options.spanId,
  traceId: options.traceId,
  sampled: options.sampled ?? true,
  annotations: options.annotations ?? empty$2(),
});
/**
 * Context reference for disabling trace propagation.
 *
 * **When to use**
 *
 * Use to prevent spans in a scope from propagating tracing context.
 *
 * **Details**
 *
 * When enabled on fiber or span annotations, new spans are created as
 * non-propagating no-op spans and disabled spans are skipped when deriving a
 * parent span.
 *
 * **Example** (Disabling span propagation)
 *
 * ```ts import.meta.vitest
 * import { Effect, Tracer } from "effect"
 *
 * // Disable span propagation for a specific effect
 * const program = Tracer.DisablePropagation.pipe(
 *   Effect.provideService(Tracer.DisablePropagation, true)
 * )
 *
 * await Effect.runPromise(program) // => true
 * ```
 *
 * @stability stable
 * @category services
 * @since 3.12.0
 */
const DisablePropagation = /*#__PURE__*/ Reference("effect/Tracer/DisablePropagation", {
  defaultValue: constFalse,
});
/**
 * Context reference for controlling the current trace level for dynamic filtering.
 *
 * **When to use**
 *
 * Use to set the default trace level for spans in a scope when span options do
 * not provide `level`.
 *
 * **Details**
 *
 * The default value is `"Info"`. Span creation uses `options.level ??
 * CurrentTraceLevel` before applying `MinimumTraceLevel`.
 *
 * @see {@link MinimumTraceLevel} for the threshold that decides whether spans at that level are sampled
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const CurrentTraceLevel = /*#__PURE__*/ Reference("effect/Tracer/CurrentTraceLevel", {
  defaultValue: () => "Info",
});
/**
 * Context reference for setting the minimum trace level threshold. Spans and their
 * descendants below this level will have their sampling decision forced to
 * false, preventing them from being exported.
 *
 * **When to use**
 *
 * Use to set the trace-level threshold that controls whether spans are sampled
 * by default.
 *
 * **Details**
 *
 * The default value is `"All"`. Span creation compares the span level from
 * `options.level ?? CurrentTraceLevel` against this threshold.
 *
 * **Gotchas**
 *
 * Explicit `options.sampled` bypasses threshold computation.
 *
 * @see {@link CurrentTraceLevel} for the default span level used when options do not specify one
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const MinimumTraceLevel = /*#__PURE__*/ Reference("effect/Tracer/MinimumTraceLevel", {
  defaultValue: () => "All",
});
/**
 * Defines the string key for the active tracer context reference.
 *
 * **When to use**
 *
 * Use when you need the raw context key for active tracer lookup in lower-level
 * tracing code.
 *
 * @stability stable
 * @category constants
 * @since 4.0.0
 */
const TracerKey = "effect/Tracer";
/**
 * Context reference for the active tracer service. By default it uses the
 * native tracer, which creates `NativeSpan` instances.
 *
 * **Example** (Accessing the current tracer)
 *
 * ```ts import.meta.vitest
 * import { Effect, Tracer } from "effect"
 *
 * // Access the current tracer from the context
 * const program = Effect.gen(function*() {
 *   const tracer = yield* Effect.service(Tracer.Tracer)
 *   // Or use the built-in tracer effect
 *   const tracerFromAccessor = yield* Effect.tracer
 *   return tracer === tracerFromAccessor
 * })
 *
 * await Effect.runPromise(program) // => true
 * ```
 *
 * @stability stable
 * @category services
 * @since 2.0.0
 */
const Tracer = /*#__PURE__*/ Reference(TracerKey, {
  fiberCached: true,
  defaultValue: () => nativeTracer,
});
/**
 * The default `Tracer` implementation backing the `Tracer` reference. It
 * creates in-memory `NativeSpan` instances and does not export them anywhere.
 *
 * **Details**
 *
 * Runtime code can compare the active tracer against `nativeTracer` to detect
 * that no tracing backend is installed and skip work that only a backend could
 * observe, such as recording span attributes.
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const nativeTracer = /*#__PURE__*/ make$3({ span: (options) => new NativeSpan(options) });
/**
 * Default in-memory `Span` implementation used by the native tracer. It
 * generates span and trace identifiers, stores attributes, events, and links,
 * and records `Started` or `Ended` status.
 *
 * **Details**
 *
 * The constructor initializes the span with `Started` status. Trace and span
 * identifiers, the attribute map, and the event list are created lazily on
 * first access, so spans that are never inspected allocate as little as
 * possible. Attributes, events, links, and status are mutated through `Span`
 * methods.
 *
 * @see {@link Span} for the interface implemented by native spans
 *
 * @stability stable
 * @category models
 * @since 4.0.0
 */
var NativeSpan = class {
  _tag = "Span";
  sampled;
  name;
  parent;
  annotations;
  links;
  startTime;
  kind;
  status;
  _traceId = void 0;
  _spanId = void 0;
  _attributes = void 0;
  _events = void 0;
  constructor(options) {
    this.name = options.name;
    this.parent = options.parent;
    this.annotations = options.annotations;
    this.links = options.links;
    this.startTime = options.startTime;
    this.kind = options.kind;
    this.sampled = options.sampled;
    this.status = {
      _tag: "Started",
      startTime: options.startTime,
    };
  }
  get traceId() {
    return (this._traceId ??= getOrUndefined$2(this.parent)?.traceId ?? random(32));
  }
  get spanId() {
    return (this._spanId ??= random(16));
  }
  get attributes() {
    return (this._attributes ??= /* @__PURE__ */ new Map());
  }
  get events() {
    return (this._events ??= []);
  }
  end(endTime, exit) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit,
      startTime: this.status.startTime,
    };
  }
  attribute(key, value) {
    this.attributes.set(key, value);
  }
  event(name, startTime, attributes) {
    this.events.push([name, startTime, attributes ?? {}]);
  }
  addLinks(links) {
    this.links.push(...links);
  }
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/metric.js
/** @internal */
const FiberRuntimeMetricsKey = "effect/Metric/FiberRuntimeMetrics";
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/references.js
/** @internal */
const CurrentErrorReporters = /*#__PURE__*/ Reference(
  "effect/ErrorReporter/CurrentErrorReporters",
  { defaultValue: () => /* @__PURE__ */ new Set() },
);
/** @internal */
const CurrentStackFrame$1 = /*#__PURE__*/ Reference("effect/References/CurrentStackFrame", {
  fiberCached: true,
  defaultValue: constUndefined,
});
/** @internal */
const TracerEnabled$1 = /*#__PURE__*/ Reference("effect/References/TracerEnabled", {
  fiberCached: true,
  defaultValue: constTrue,
});
/** @internal */
const TracerTimingEnabled$1 = /*#__PURE__*/ Reference("effect/References/TracerTimingEnabled", {
  defaultValue: constTrue,
});
/** @internal */
const TracerSpanAnnotations = /*#__PURE__*/ Reference("effect/References/TracerSpanAnnotations", {
  defaultValue: () => ({}),
});
/** @internal */
const TracerSpanLinks = /*#__PURE__*/ Reference("effect/References/TracerSpanLinks", {
  defaultValue: () => [],
});
/** @internal */
const CurrentLogAnnotations$1 = /*#__PURE__*/ Reference("effect/References/CurrentLogAnnotations", {
  defaultValue: () => ({}),
});
/** @internal */
const CurrentLogLevel$1 = /*#__PURE__*/ Reference("effect/References/CurrentLogLevel", {
  fiberCached: true,
  defaultValue: () => "Info",
});
/** @internal */
const MinimumLogLevel$1 = /*#__PURE__*/ Reference("effect/References/MinimumLogLevel", {
  fiberCached: true,
  defaultValue: () => "Info",
});
/** @internal */
const UnhandledLogLevel$1 = /*#__PURE__*/ Reference("effect/References/UnhandledLogLevel", {
  defaultValue: () => "Error",
});
/** @internal */
const CurrentLogSpans$1 = /*#__PURE__*/ Reference("effect/References/CurrentLogSpans", {
  defaultValue: () => [],
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/tracer.js
/** @internal */
const addSpanStackTrace = (options) => {
  if (options?.captureStackTrace === false) return options;
  else if (options?.captureStackTrace !== void 0 && typeof options.captureStackTrace !== "boolean")
    return options;
  const limit = getStackTraceLimit();
  if (limit === 0 && options?.captureStackTrace !== true)
    return {
      ...options,
      captureStackTrace: false,
    };
  setStackTraceLimit(3);
  const traceError = /* @__PURE__ */ new Error();
  setStackTraceLimit(limit);
  return {
    ...options,
    captureStackTrace: spanCleaner(() => traceError.stack),
  };
};
/** @internal */
const makeStackCleaner = (line) => (stack) => {
  let cache;
  return () => {
    if (cache !== void 0) return cache;
    const trace = stack();
    if (!trace) return void 0;
    const lines = trace.split("\n");
    if (lines[line] !== void 0) {
      cache = lines[line].trim();
      return cache;
    }
  };
};
const spanCleaner = /*#__PURE__*/ makeStackCleaner(3);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/effect.js
/** @internal */
var Interrupt = class extends ReasonBase {
  constructor(fiberId, annotations = constEmptyAnnotations) {
    super("Interrupt", annotations, "Interrupted");
    this.fiberId = fiberId;
  }
  toString() {
    return `Interrupt(${this.fiberId})`;
  }
  toJSON() {
    return {
      _tag: "Interrupt",
      fiberId: this.fiberId,
    };
  }
  [symbol](that) {
    return (
      isInterruptReason$1(that) &&
      this.fiberId === that.fiberId &&
      this.annotations === that.annotations
    );
  }
  [symbol$1]() {
    return string(`${this._tag}:${this.fiberId}`);
  }
};
/** @internal */
const makeInterruptReason$1 = (fiberId) => new Interrupt(fiberId);
/** @internal */
const causeInterrupt = (fiberId) => new CauseImpl([new Interrupt(fiberId)]);
/** @internal */
const hasFails$1 = (self) => self.reasons.some(isFailReason$1);
/** @internal */
const findFail$1 = (self) => {
  const reason = self.reasons.find(isFailReason$1);
  return reason ? succeed$5(reason) : fail$5(self);
};
/** @internal */
const findError$1 = (self) => {
  for (let i = 0; i < self.reasons.length; i++) {
    const reason = self.reasons[i];
    if (reason._tag === "Fail") return succeed$5(reason.error);
  }
  return fail$5(self);
};
/** @internal */
const findErrorOption$2 = /*#__PURE__*/ toOption(findError$1);
/** @internal */
const hasDies$1 = (self) => self.reasons.some(isDieReason$1);
/** @internal */
const findDefect = (self) => {
  const reason = self.reasons.find(isDieReason$1);
  return reason ? succeed$5(reason.defect) : fail$5(self);
};
/** @internal */
const hasInterrupts$2 = (self) => self.reasons.some(isInterruptReason$1);
/** @internal */
const causeFilterInterruptors = (self) => {
  let interruptors;
  for (let i = 0; i < self.reasons.length; i++) {
    const f = self.reasons[i];
    if (f._tag !== "Interrupt") continue;
    interruptors ??= /* @__PURE__ */ new Set();
    if (f.fiberId !== void 0) interruptors.add(f.fiberId);
  }
  return interruptors ? succeed$5(interruptors) : fail$5(self);
};
/** @internal */
const causeInterruptors = (self) => {
  const result = causeFilterInterruptors(self);
  return isFailure$1(result) ? emptySet : result.success;
};
const emptySet = /*#__PURE__*/ new Set();
/** @internal */
const hasInterruptsOnly$1 = (self) =>
  self.reasons.length > 0 && self.reasons.every(isInterruptReason$1);
/** @internal */
const reasonAnnotations$1 = (self) => makeUnsafe$2(self.annotations);
/** @internal */
const causeMap = /*#__PURE__*/ dual(2, (self, f) => {
  let hasFail = false;
  const failures = self.reasons.map((failure) => {
    if (isFailReason$1(failure)) {
      hasFail = true;
      return new Fail(f(failure.error), failure.annotations);
    }
    return failure;
  });
  return hasFail ? causeFromReasons(failures) : self;
});
/** @internal */
const causeSquash = (self) => {
  let die;
  for (const reason of self.reasons) {
    if (reason._tag === "Fail") return reason.error;
    if (reason._tag === "Die") die ??= reason;
  }
  if (die !== void 0) return die.defect;
  if (self.reasons.length > 0) return new globalThis.Error("All fibers interrupted without error");
  return new globalThis.Error("Empty cause");
};
/** @internal */
const causePrettyErrors = (self, options) => {
  const errors = [];
  const interrupts = [];
  if (self.reasons.length === 0) return errors;
  const prevStackLimit = getStackTraceLimit();
  if (prevStackLimit !== 0) setStackTraceLimit(1);
  try {
    for (const failure of self.reasons) {
      if (failure._tag === "Interrupt") {
        interrupts.push(failure);
        continue;
      }
      errors.push(
        causePrettyError(
          failure._tag === "Die" ? failure.defect : failure.error,
          failure.annotations,
          options,
        ),
      );
    }
    if (errors.length === 0) {
      const cause = /* @__PURE__ */ new Error("The fiber was interrupted by:");
      cause.name = "InterruptCause";
      cause.stack = interruptCauseStack(cause, interrupts);
      const error = new globalThis.Error("All fibers interrupted without error", { cause });
      error.name = "InterruptError";
      error.stack = `${error.name}: ${error.message}`;
      errors.push(causePrettyError(error, interrupts[0].annotations, options));
    }
  } finally {
    if (prevStackLimit !== 0) setStackTraceLimit(prevStackLimit);
  }
  return errors;
};
/** @internal */
const causePrettyError = (original, annotations, options) => {
  const kind = typeof original;
  let error;
  if (original && kind === "object") {
    error = new globalThis.Error(causePrettyMessage(original), {
      cause: original.cause ? causePrettyError(original.cause) : void 0,
    });
    if (typeof original.name === "string") error.name = original.name;
    if (typeof original.stack === "string")
      error.stack = cleanErrorStack(original.stack, error, annotations);
    else {
      const stack = `${error.name}: ${error.message}`;
      error.stack = annotations ? addStackAnnotations(stack, annotations) : stack;
    }
    if (options?.includeCauseInStack) error.stack = renderPrettyError(error);
    for (const key of Object.keys(original)) if (!(key in error)) error[key] = original[key];
  } else {
    error = new globalThis.Error(
      !original
        ? `Unknown error: ${original}`
        : kind === "string"
          ? original
          : formatJson(original),
    );
    const stack = `${error.name}: ${error.message}`;
    error.stack = annotations ? addStackAnnotations(stack, annotations) : stack;
  }
  return error;
};
const causePrettyMessage = (u) => {
  if (typeof u.message === "string") return u.message;
  else if (
    typeof u.toString === "function" &&
    u.toString !== Object.prototype.toString &&
    u.toString !== Array.prototype.toString
  )
    try {
      return u.toString();
    } catch {}
  return formatJson(u);
};
const locationRegExp = /\((.*)\)/g;
const cleanErrorStack = (stack, error, annotations) => {
  const message = `${error.name}: ${error.message}`;
  const lines = (stack.startsWith(message) ? stack.slice(message.length) : stack).split("\n");
  const out = [message];
  for (let i = 1; i < lines.length; i++) {
    if (/Generator\.next|~effect\/(?:Effect|Utils)/.test(lines[i])) break;
    out.push(lines[i]);
  }
  return annotations ? addStackAnnotations(out.join("\n"), annotations) : out.join("\n");
};
const addStackAnnotations = (stack, annotations) => {
  const frame = annotations?.get(StackTraceKey.key);
  if (frame) stack = `${stack}\n${currentStackTrace(frame)}`;
  return stack;
};
const interruptCauseStack = (error, interrupts) => {
  const out = [`${error.name}: ${error.message}`];
  for (const current of interrupts) {
    const fiberId = current.fiberId !== void 0 ? `#${current.fiberId}` : "unknown";
    const frame = current.annotations.get(InterruptorStackTrace.key);
    out.push(`    at fiber (${fiberId})`);
    if (frame) out.push(currentStackTrace(frame));
  }
  return out.join("\n");
};
const currentStackTrace = (frame) => {
  const out = [];
  let current = frame;
  let i = 0;
  while (current && i < 10) {
    const stack = current.stack();
    if (stack) {
      const locationMatchAll = stack.matchAll(locationRegExp);
      let match = false;
      for (const [, location] of locationMatchAll) {
        match = true;
        out.push(`    at ${current.name} (${location})`);
      }
      if (!match) out.push(`    at ${current.name} (${stack.replace(/^at /, "")})`);
    } else out.push(`    at ${current.name}`);
    current = current.parent;
    i++;
  }
  return out.join("\n");
};
/** @internal */
const causePretty = (cause) => causePrettyErrors(cause).map(renderPrettyError).join("\n");
const renderPrettyError = (e) =>
  e.cause ? `${e.stack} {\n${renderErrorCause(e.cause, "  ")}\n}` : e.stack;
const renderErrorCause = (cause, prefix) => {
  const lines = cause.stack.split("\n");
  let stack = `${prefix}[cause]: ${lines[0]}`;
  for (let i = 1, len = lines.length; i < len; i++) stack += `\n${prefix}${lines[i]}`;
  if (cause.cause) stack += ` {\n${renderErrorCause(cause.cause, `${prefix}  `)}\n${prefix}}`;
  return stack;
};
/** @internal */
const FiberTypeId = "~effect/Fiber";
const fiberVariance = {
  _A: identity,
  _E: identity,
};
const fiberIdStore = { id: 0 };
const AsyncResource = /*#__PURE__*/ (() => {
  try {
    return globalThis.process?.getBuiltinModule?.("node:async_hooks")?.AsyncResource;
  } catch {
    return;
  }
})();
const captureAsyncContext = () =>
  AsyncResource === void 0 ? void 0 : new AsyncResource("effect/Fiber");
/** @internal */
const getCurrentFiber = () => globalThis[currentFiberTypeId];
/** @internal */
var FiberImpl = class {
  constructor(context, interruptible = true) {
    this.setContext(context);
    this.id = ++fiberIdStore.id;
    this.currentOpCount = 0;
    this.interruptible = interruptible;
    this._stack = [];
    this._observers = void 0;
    this._exit = void 0;
    this._children = void 0;
    this._interruptedCause = void 0;
    this._yielded = void 0;
    this._running = false;
    this._deferredInterrupt = false;
    this._parent = void 0;
    this._asyncContext = void 0;
    this.cache.runtimeMetrics?.recordFiberStart(this.context);
  }
  get [FiberTypeId]() {
    return fiberVariance;
  }
  get currentDispatcher() {
    return (this._dispatcher ??= this.cache.scheduler.makeDispatcher());
  }
  getRef(ref) {
    return get$1(this.context, ref);
  }
  addObserver(cb) {
    if (this._exit) {
      cb(this._exit);
      return constVoid;
    }
    if (this._observers === void 0) this._observers = [cb];
    else this._observers.push(cb);
    return () => this.removeObserver(cb);
  }
  removeObserver(cb) {
    if (this._exit || this._observers === void 0) return;
    const index = this._observers.indexOf(cb);
    if (index >= 0) this._observers.splice(index, 1);
  }
  interruptUnsafe(fiberId, annotations) {
    if (this._exit) return;
    let cause = causeInterrupt(fiberId);
    if (this.cache.stackFrame)
      cause = causeAnnotate(cause, make$5(StackTraceKey, this.cache.stackFrame));
    if (annotations) cause = causeAnnotate(cause, annotations);
    this._interruptedCause = this._interruptedCause
      ? causeAddInterrupts(this._interruptedCause, cause)
      : cause;
    if (this.interruptible) {
      if (this._running) this._deferredInterrupt = true;
      else this.evaluate(failCause$3(this._interruptedCause));
    }
  }
  pollUnsafe() {
    return this._exit;
  }
  evaluate(effect) {
    if (this._exit) return;
    else if (this._asyncContext !== void 0) {
      const asyncContext = this._asyncContext;
      this._asyncContext = void 0;
      return asyncContext.runInAsyncScope(this.evaluate, this, effect);
    } else if (this._yielded !== void 0) {
      const yielded = this._yielded;
      this._yielded = void 0;
      yielded();
    }
    const exit = this.runLoop(effect);
    if (exit === Yield) {
      this._asyncContext = captureAsyncContext();
      return;
    }
    const interruptChildren =
      fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this);
    if (interruptChildren !== void 0)
      return this.evaluate(flatMap$2(interruptChildren, () => exit));
    this._exit = exit;
    this.cache.runtimeMetrics?.recordFiberEnd(this.context, this._exit);
    if (this._parent) {
      this._parent._children?.delete(this);
      this._parent = void 0;
    }
    if (this._observers !== void 0) {
      const observers = this._observers;
      this._observers = void 0;
      for (let i = 0; i < observers.length; i++) observers[i](exit);
    }
    this._stack.length = 0;
    this._children = void 0;
    this.context = empty$2();
  }
  runLoop(effect) {
    const prevFiber = globalThis[currentFiberTypeId];
    globalThis[currentFiberTypeId] = this;
    const prevRunning = this._running;
    this._running = true;
    let yielding = false;
    let current = effect;
    this.currentOpCount = 0;
    try {
      while (true)
        try {
          if (this._deferredInterrupt) {
            this._deferredInterrupt = false;
            current = failCause$3(this._interruptedCause);
          }
          this.currentOpCount++;
          const cache = this.cache;
          if (!yielding && !cache.preventYield && cache.scheduler.shouldYield(this)) {
            yielding = true;
            const prev = current;
            current = flatMap$2(yieldNow$1, () => prev);
          }
          current = cache.tracerContext
            ? cache.tracerContext(current, this)
            : current[evaluate](this);
          if (current === Yield) {
            const yielded = this._yielded;
            if ("~effect/Exit" in yielded) {
              this._deferredInterrupt = false;
              this._yielded = void 0;
              return yielded;
            } else if (this._deferredInterrupt) {
              this._yielded = void 0;
              yielded();
              continue;
            }
            return Yield;
          }
        } catch (error) {
          if (!hasProperty(current, "~effect/Effect/evaluate"))
            return exitDie(`Fiber.runLoop: Not a valid effect: ${String(current)}`);
          current = exitDie(error);
        }
    } finally {
      this._running = prevRunning;
      globalThis[currentFiberTypeId] = prevFiber;
    }
  }
  getCont(symbol) {
    if (this._deferredInterrupt) {
      this._deferredInterrupt = false;
      return deferredInterruptCont;
    }
    while (true) {
      const op = this._stack.pop();
      if (!op) return void 0;
      const all = op[contAll];
      if (all !== void 0) {
        const cont = all.call(op, this);
        if (cont) {
          cont[symbol] = cont;
          return cont;
        }
      }
      if (op[symbol]) return op;
    }
  }
  succeedWith(value) {
    if ((++this.currentOpCount & (maxInlineSteps - 1)) === 0) return exitSucceed(value);
    const cont = this.getCont(contA);
    return cont ? cont[contA](value, this) : this.yieldWith(exitSucceed(value));
  }
  yieldWith(value) {
    this._yielded = value;
    return Yield;
  }
  children() {
    return (this._children ??= /* @__PURE__ */ new Set());
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  setContext(context) {
    const previous = this.context;
    this.context = context;
    if (previous !== void 0 && hasSameCache(previous, context)) return;
    const root = context.cacheRoot;
    const cache = (root._fiberCache ??= makeFiberContextCache(context));
    if (this.cache?.scheduler !== cache.scheduler) this._dispatcher = void 0;
    this.cache = cache;
  }
  get currentSpanLocal() {
    const span = this.cache.span;
    return span?._tag === "Span" ? span : void 0;
  }
};
const makeFiberContextCache = (context) => {
  const currentTracer = getOrUndefinedUnsafe(context, TracerKey);
  return {
    scheduler: get$1(context, Scheduler),
    tracer: currentTracer,
    tracerContext: currentTracer ? currentTracer["context"] : void 0,
    tracerEnabled: get$1(context, TracerEnabled$1),
    span: getOrUndefinedUnsafe(context, ParentSpanKey),
    logLevel: get$1(context, CurrentLogLevel$1),
    minimumLogLevel: get$1(context, MinimumLogLevel$1),
    stackFrame: get$1(context, CurrentStackFrame$1),
    runtimeMetrics: getOrUndefinedUnsafe(context, FiberRuntimeMetricsKey),
    maxOpsBeforeYield: get$1(context, MaxOpsBeforeYield),
    preventYield: get$1(context, PreventSchedulerYield),
  };
};
const deferredInterruptCont = {
  [contA](_value, fiber) {
    return failCause$3(fiber._interruptedCause);
  },
  [contE](_cause, fiber) {
    return failCause$3(fiber._interruptedCause);
  },
};
const maxInlineSteps = 32;
const fiberMiddleware = { interruptChildren: void 0 };
const fiberStackAnnotations = (fiber) => {
  if (!fiber.cache.stackFrame) return void 0;
  const annotations = /* @__PURE__ */ new Map();
  annotations.set(InterruptorStackTrace.key, fiber.cache.stackFrame);
  return makeUnsafe$2(annotations);
};
const fiberInterruptChildren = (fiber) => {
  if (fiber._children === void 0 || fiber._children.size === 0) return;
  return fiberInterruptAll(fiber._children);
};
/** @internal */
const fiberAwait = (self) => {
  const impl = self;
  if (impl._exit) return succeed$4(impl._exit);
  return callback$1((resume) => {
    if (impl._exit) return resume(succeed$4(impl._exit));
    return sync$2(self.addObserver((exit) => resume(succeed$4(exit))));
  });
};
/** @internal */
const fiberAwaitAll = (self) =>
  callback$1((resume) => {
    const iter = self[Symbol.iterator]();
    const exits = [];
    let cancel = void 0;
    function loop() {
      let result = iter.next();
      while (!result.done) {
        if (result.value._exit) {
          exits.push(result.value._exit);
          result = iter.next();
          continue;
        }
        cancel = result.value.addObserver((exit) => {
          exits.push(exit);
          loop();
        });
        return;
      }
      resume(succeed$4(exits));
    }
    loop();
    return sync$2(() => cancel?.());
  });
/** @internal */
const fiberJoin = (self) => {
  const impl = self;
  if (impl._exit) return impl._exit;
  return callback$1((resume) => {
    if (impl._exit) return resume(impl._exit);
    return sync$2(self.addObserver(resume));
  });
};
/** @internal */
const fiberJoinAll = (self) =>
  callback$1((resume) => {
    const fibers = Array.from(self);
    if (fibers.length === 0) return resume(succeed$4(empty$3()));
    const out = new Array(fibers.length);
    const observers = empty$3();
    const removeObservers = () => {
      for (let i = 0; i < observers.length; i++) fibers[i].removeObserver(observers[i]);
    };
    let done = 0;
    let failed = false;
    for (let i = 0; i < fibers.length; i++) {
      if (failed) break;
      const observer = (exit) => {
        done++;
        if (exit._tag === "Failure") {
          failed = true;
          removeObservers();
          return resume(exit);
        }
        out[i] = exit.value;
        if (done === fibers.length) resume(succeed$4(out));
      };
      observers.push(observer);
      fibers[i].addObserver(observer);
    }
    return sync$2(() => {
      failed = true;
      removeObservers();
    });
  });
/** @internal */
const fiberInterrupt = (self) => withFiber$1((fiber) => fiberInterruptAs(self, fiber.id));
/** @internal */
const fiberInterruptAs = /*#__PURE__*/ dual(
  (args) => hasProperty(args[0], FiberTypeId),
  (self, fiberId, annotations) =>
    withFiber$1((parent) => {
      let ann = fiberStackAnnotations(parent);
      ann = ann && annotations ? merge$1(ann, annotations) : (ann ?? annotations);
      self.interruptUnsafe(fiberId, ann);
      return asVoid$1(fiberAwait(self));
    }),
);
/** @internal */
const fiberInterruptAll = (fibers) =>
  withFiber$1((parent) => {
    const annotations = fiberStackAnnotations(parent);
    let fiberArr = empty$3();
    for (const fiber of fibers) {
      fiber.interruptUnsafe(parent.id, annotations);
      fiberArr.push(fiber);
    }
    return asVoid$1(fiberAwaitAll(fiberArr));
  });
/** @internal */
const fiberInterruptAllAs = /*#__PURE__*/ dual(2, (fibers, fiberId) =>
  withFiber$1((parent) => {
    const annotations = fiberStackAnnotations(parent);
    const fiberArr = empty$3();
    for (const fiber of fibers) {
      fiber.interruptUnsafe(fiberId, annotations);
      fiberArr.push(fiber);
    }
    return asVoid$1(fiberAwaitAll(fiberArr));
  }),
);
/** @internal */
const succeed$4 = exitSucceed;
/** @internal */
const failCause$3 = exitFailCause;
/** @internal */
const fail$4 = exitFail;
/** @internal */
const sync$2 = /*#__PURE__*/ makePrimitive({
  op: "Sync",
  [evaluate](fiber) {
    const value = this[args]();
    const cont = fiber.getCont(contA);
    return cont ? cont[contA](value, fiber) : fiber.yieldWith(exitSucceed(value));
  },
});
/** @internal */
const suspend$2 = /*#__PURE__*/ makePrimitive({
  op: "Suspend",
  [evaluate](_fiber) {
    return this[args]();
  },
});
/** @internal */
const fromOption$1 = /*#__PURE__*/ dual(
  (args) => args.length >= 2 || isOption(args[0]),
  (option, onNone) =>
    isNone(option)
      ? fail$4(onNone ? onNone() : new NoSuchElementError$1("Effect.fromOption: Option.none"))
      : succeed$4(option.value),
);
/** @internal */
const fromResult$1 = /*#__PURE__*/ match$5({
  onFailure: fail$4,
  onSuccess: succeed$4,
});
/** @internal */
const yieldNow$1 = /*#__PURE__*/ /* @__PURE__ */ makePrimitive({
  op: "Yield",
  [evaluate](fiber) {
    let resumed = false;
    fiber.currentDispatcher.scheduleTask(() => {
      if (resumed) return;
      fiber.evaluate(exitVoid);
    }, this["~effect/Effect/args"] ?? 0);
    return fiber.yieldWith(() => {
      resumed = true;
    });
  },
})(0);
/** @internal */
const succeedSome$1 = (a) => succeed$4(some(a));
/** @internal */
const succeedNone$1 = /*#__PURE__*/ succeed$4(/*#__PURE__*/ none());
/** @internal */
const failCauseSync$1 = (evaluate) => suspend$2(() => failCause$3(evaluate()));
/** @internal */
const die$4 = (defect) => exitDie(defect);
/** @internal */
const failSync = (error) => suspend$2(() => fail$4(error()));
/** @internal */
const void_$2 = /*#__PURE__*/ succeed$4(void 0);
/** @internal */
const try_$1 = (options) => {
  const evaluate = typeof options === "function" ? options : options.try;
  const catcher =
    typeof options === "function"
      ? (cause) => new UnknownError$1(cause, "An error occurred in Effect.try")
      : options.catch;
  return suspend$2(() => {
    try {
      return succeed$4(evaluate());
    } catch (err) {
      return fail$4(catcher(err));
    }
  });
};
/** @internal */
const promise$1 = (evaluate) =>
  callbackOptions(function (resume, signal) {
    evaluate(signal).then(
      (a) => resume(succeed$4(a)),
      (e) => resume(die$4(e)),
    );
  }, evaluate.length !== 0);
/** @internal */
const tryPromise$1 = (options) => {
  const f = typeof options === "function" ? options : options.try;
  const catcher =
    typeof options === "function"
      ? (cause) => new UnknownError$1(cause, "An error occurred in Effect.tryPromise")
      : options.catch;
  return callbackOptions(function (resume, signal) {
    const failWithCatch = (cause) =>
      suspend$2(() => {
        try {
          return fail$4(internalCall(() => catcher(cause)));
        } catch (err) {
          return die$4(err);
        }
      });
    try {
      f(signal).then(
        (a) => resume(succeed$4(a)),
        (e) => resume(failWithCatch(e)),
      );
    } catch (err) {
      resume(failWithCatch(err));
    }
  }, f.length !== 0);
};
/** @internal */
const withFiberId = (f) => withFiber$1((fiber) => f(fiber.id));
/** @internal */
const fiber$1 = /*#__PURE__*/ withFiber$1(succeed$4);
const callbackOptions = /*#__PURE__*/ (function () {
  const Proto = /*#__PURE__*/ makePrimitiveProto({
    op: "Async",
    [evaluate](fiber) {
      let resumed = false;
      let yielded = false;
      const controller = this.withSignal ? new AbortController() : void 0;
      const onCancel = this.register.call(
        fiber.cache.scheduler,
        (effect) => {
          if (resumed) return;
          resumed = true;
          if (yielded) fiber.evaluate(effect);
          else yielded = effect;
        },
        controller?.signal,
      );
      if (yielded !== false) return yielded;
      yielded = true;
      fiber._yielded = () => {
        resumed = true;
      };
      if (controller === void 0 && onCancel === void 0) return Yield;
      fiber._stack.push(
        asyncFinalizer(() => {
          resumed = true;
          controller?.abort();
          return onCancel ?? exitVoid;
        }),
      );
      return Yield;
    },
  });
  const AsyncImpl = function (register, withSignal) {
    this.register = register;
    this.withSignal = withSignal;
  };
  AsyncImpl.prototype = Proto;
  return function (register, withSignal) {
    return new AsyncImpl(register, withSignal);
  };
})();
const asyncFinalizer = /*#__PURE__*/ makePrimitive({
  op: "AsyncFinalizer",
  [contAll](fiber) {
    if (fiber.interruptible) {
      fiber.interruptible = false;
      fiber._stack.push(setInterruptibleTrue);
    }
  },
  [contE](cause, _fiber) {
    return hasInterrupts$2(cause)
      ? flatMap$2(combineFinalizerCause(exitFailCause(cause), this[args]()), () =>
          failCause$3(cause),
        )
      : failCause$3(cause);
  },
});
/** @internal */
const callback$1 = (register) => callbackOptions(register, register.length >= 2);
/** @internal */
const never$1 = /*#__PURE__*/ callback$1(constVoid);
/** @internal */
const gen$1 = (...args) => {
  if (args.length === 1) {
    const body = args[0];
    return suspend$2(() => fromIteratorUnsafe(body()));
  }
  const [options, body] = args;
  return suspend$2(() => fromIteratorUnsafe(body.call(options.self)));
};
/** @internal */
const fnUntraced$1 = (body, ...pipeables) => {
  const fn =
    pipeables.length === 0
      ? function () {
          return suspend$2(() => fromIteratorUnsafe(body.apply(this, arguments)));
        }
      : function () {
          let effect = suspend$2(() => fromIteratorUnsafe(body.apply(this, arguments)));
          for (let i = 0; i < pipeables.length; i++) effect = pipeables[i](effect, ...arguments);
          return effect;
        };
  return defineFunctionLength(body.length, fn);
};
const defineFunctionLength = (length, fn) =>
  Object.defineProperty(fn, "length", {
    value: length,
    configurable: true,
  });
const fnStackCleaner = /*#__PURE__*/ makeStackCleaner(2);
/** @internal */
const fn$1 = function () {
  const nameFirst = typeof arguments[0] === "string";
  const name = nameFirst ? arguments[0] : "Effect.fn";
  const spanOptions = nameFirst ? arguments[1] : void 0;
  const prevLimit = getStackTraceLimit();
  let defError;
  if (prevLimit !== 0) {
    setStackTraceLimit(2);
    defError = new globalThis.Error();
    setStackTraceLimit(prevLimit);
  }
  if (nameFirst)
    return (body, ...pipeables) => makeFn(name, body, defError, pipeables, nameFirst, spanOptions);
  return makeFn(
    name,
    arguments[0],
    defError,
    Array.prototype.slice.call(arguments, 1),
    nameFirst,
    spanOptions,
  );
};
const makeFn = (name, bodyOrOptions, defError, pipeables, addSpan, spanOptions) => {
  const body =
    typeof bodyOrOptions === "function"
      ? bodyOrOptions
      : pipeables.shift().bind(bodyOrOptions.self);
  const definitionName = `${name} (definition)`;
  const definitionStack = defError ? fnStackCleaner(() => defError.stack) : constUndefined;
  return defineFunctionLength(body.length, function (...args) {
    let result = suspend$2(() => {
      const iter = body.apply(this, arguments);
      return isEffect$1(iter) ? iter : fromIteratorUnsafe(iter);
    });
    for (let i = 0; i < pipeables.length; i++) result = pipeables[i](result, ...args);
    if (!isEffect$1(result)) return result;
    const prevLimit = getStackTraceLimit();
    let callError;
    if (prevLimit !== 0) {
      setStackTraceLimit(2);
      callError = new globalThis.Error();
      setStackTraceLimit(prevLimit);
    }
    return updateService(
      addSpan ? useSpan$1(name, spanOptions, (span) => provideParentSpan(result, span)) : result,
      CurrentStackFrame$1,
      (prev) => ({
        name,
        stack: callError ? fnStackCleaner(() => callError.stack) : constUndefined,
        parent: {
          name: definitionName,
          stack: definitionStack,
          parent: prev,
        },
      }),
    );
  });
};
/** @internal */
const fnUntracedEager$1 = (body, ...pipeables) =>
  defineFunctionLength(
    body.length,
    pipeables.length === 0
      ? function () {
          return fromIteratorEagerUnsafe(() => body.apply(this, arguments));
        }
      : function () {
          let effect = fromIteratorEagerUnsafe(() => body.apply(this, arguments));
          for (const pipeable of pipeables) effect = pipeable(effect, ...arguments);
          return effect;
        },
  );
const fromIteratorEagerUnsafe = (evaluate) => {
  try {
    const iterator = evaluate();
    let value = void 0;
    while (true) {
      const state = iterator.next(value);
      if (state.done) return succeed$4(state.value);
      const primitive = state.value;
      if (primitive && primitive._tag === "Success") {
        value = primitive.value;
        continue;
      } else if (primitive && primitive._tag === "Failure") return state.value;
      else {
        let isFirstExecution = true;
        return suspend$2(() => {
          if (isFirstExecution) {
            isFirstExecution = false;
            return flatMap$2(state.value, (value) => fromIteratorUnsafe(iterator, value));
          } else return suspend$2(() => fromIteratorUnsafe(evaluate()));
        });
      }
    }
  } catch (error) {
    return die$4(error);
  }
};
const fromIteratorUnsafe = /*#__PURE__*/ (function () {
  const Proto = /*#__PURE__*/ makePrimitiveProto({
    op: "Iterator",
    [contA](value, fiber) {
      const iter = this.iterator;
      while (true) {
        const state = iter.next(value);
        if (state.done) return succeed$4(state.value);
        if (!effectIsExit(state.value)) {
          fiber._stack.push(this);
          return state.value;
        } else if (state.value._tag === "Failure") return state.value;
        value = state.value.value;
      }
    },
    [evaluate](fiber) {
      return this[contA](this.initial, fiber);
    },
  });
  const IteratorImpl = function (iterator, initial) {
    this.iterator = iterator;
    this.initial = initial;
  };
  IteratorImpl.prototype = Proto;
  return function (iterator, initial) {
    return new IteratorImpl(iterator, initial);
  };
})();
/** @internal */
const as$1 = /*#__PURE__*/ dual(
  2,
  (self, value) => new ContImpl(self, returnPayload, succeed$4(value)),
);
const evaluateCont = function (fiber) {
  fiber._stack.push(this);
  return this[args];
};
const OnSuccessProto = /*#__PURE__*/ makePrimitiveProto({
  op: "OnSuccess",
  [evaluate]: evaluateCont,
});
const ContImpl = function (self, cont, payload) {
  this[args] = self;
  this[contA] = cont;
  this.payload = payload;
};
ContImpl.prototype = OnSuccessProto;
const returnPayload = function () {
  return this.payload;
};
const succeedPayload = function (_value, fiber) {
  return fiber.succeedWith(this.payload);
};
const continuationMarksStack = /*#__PURE__*/ (() => {
  const limit = /*#__PURE__*/ getStackTraceLimit();
  if (limit === 0) return false;
  const marker = "~effect/Effect/stackProbe";
  const probe = {
    [marker]: function stackProbe() {
      return /* @__PURE__ */ new Error();
    },
  };
  setStackTraceLimit(1);
  const error = /*#__PURE__*/ probe[marker]();
  setStackTraceLimit(limit);
  return error.stack?.includes("[as " + marker + "]") === true;
})();
const mapCont = function (value, fiber) {
  const f = this.payload;
  return fiber.succeedWith(continuationMarksStack ? f(value) : internalCall(() => f(value)));
};
const andThenCont = function (value) {
  const f = this.payload;
  return f(value);
};
const tapCont = function (value) {
  const f = this.payload;
  return new ContImpl(f(value), succeedPayload, value);
};
const tapEffectCont = function (value) {
  return new ContImpl(this.payload, succeedPayload, value);
};
/** @internal */
const asSome$1 = (self) => map$2(self, some);
/** @internal */
const andThen$1 = /*#__PURE__*/ dual(
  2,
  (self, f) => new ContImpl(self, isEffect$1(f) ? returnPayload : andThenCont, f),
);
/** @internal */
const tap$2 = /*#__PURE__*/ dual(
  2,
  (self, f) => new ContImpl(self, isEffect$1(f) ? tapEffectCont : tapCont, f),
);
/** @internal */
const asVoid$1 = (self) => new ContImpl(self, returnPayload, exitVoid);
/** @internal */
const raceAll = (all, options) =>
  withFiber$1((parent) => {
    const fibers = /* @__PURE__ */ new Set();
    onExitUnsafe(parent, () => (fibers.size === 0 ? void 0 : fiberInterruptAll(fibers)));
    return callback$1((resume) => {
      const effects = fromIterable$1(all);
      const len = effects.length;
      let doneCount = 0;
      let done = false;
      const failures = [];
      const onExit = (exit, fiber, i) => {
        doneCount++;
        if (exit._tag === "Failure") {
          failures.push(...exit.cause.reasons);
          if (doneCount >= len) resume(failCause$3(causeFromReasons(failures)));
          return;
        }
        const isWinner = !done;
        done = true;
        resume(exit);
        if (isWinner && options?.onWinner)
          options.onWinner({
            fiber,
            index: i,
            parentFiber: parent,
          });
      };
      for (let i = 0; i < len; i++) {
        const fiber = forkUnsafe$1(parent, effects[i], true, true, false);
        fibers.add(fiber);
        fiber.addObserver((exit) => {
          fibers.delete(fiber);
          onExit(exit, fiber, i);
        });
        if (done) break;
      }
    });
  });
/** @internal */
const raceAllFirst = (all, options) =>
  withFiber$1((parent) => {
    const fibers = /* @__PURE__ */ new Set();
    onExitUnsafe(parent, () => (fibers.size === 0 ? void 0 : fiberInterruptAll(fibers)));
    return callback$1((resume) => {
      let done = false;
      let i = 0;
      for (const effect of all) {
        if (done) break;
        const index = i++;
        const fiber = forkUnsafe$1(parent, effect, true, true, false);
        fibers.add(fiber);
        fiber.addObserver((exit) => {
          fibers.delete(fiber);
          const isWinner = !done;
          done = true;
          resume(exit);
          if (isWinner && options?.onWinner)
            options.onWinner({
              fiber,
              index,
              parentFiber: parent,
            });
        });
      }
    });
  });
/** @internal */
const race$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[1]),
  (self, that, options) => raceAll([self, that], options),
);
/** @internal */
const raceFirst$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[1]),
  (self, that, options) => raceAllFirst([self, that], options),
);
/** @internal */
const flatMap$2 = /*#__PURE__*/ dual(2, (self, f) => new ContImpl(self, andThenCont, f));
/** @internal */
const matchCauseEffectEager$1 = /*#__PURE__*/ dual(2, (self, options) => {
  if (effectIsExit(self))
    return self._tag === "Success" ? options.onSuccess(self.value) : options.onFailure(self.cause);
  return matchCauseEffect$1(self, options);
});
/** @internal */
const effectIsExit = (effect) => effect[ExitTypeId] !== void 0;
/** @internal */
const flatMapEager$1 = /*#__PURE__*/ dual(2, (self, f) => {
  if (effectIsExit(self)) return self._tag === "Success" ? f(self.value) : self;
  return flatMap$2(self, f);
});
/** @internal */
const flatten$1 = (self) => flatMap$2(self, identity);
/** @internal */
const map$2 = /*#__PURE__*/ dual(2, (self, f) => new ContImpl(self, mapCont, f));
/** @internal */
const mapEager$1 = /*#__PURE__*/ dual(2, (self, f) =>
  effectIsExit(self) ? exitMap(self, f) : map$2(self, f),
);
/** @internal */
const mapErrorEager$1 = /*#__PURE__*/ dual(2, (self, f) =>
  effectIsExit(self) ? exitMapError(self, f) : mapError$1(self, f),
);
/** @internal */
const mapBothEager$1 = /*#__PURE__*/ dual(2, (self, options) =>
  effectIsExit(self) ? exitMapBoth(self, options) : mapBoth(self, options),
);
/** @internal */
const catchEager$1 = /*#__PURE__*/ dual(2, (self, f) => {
  if (effectIsExit(self)) {
    if (self._tag === "Success") return self;
    const error = findError$1(self.cause);
    if (isFailure$1(error)) return self;
    return f(error.success);
  }
  return catch_$2(self, f);
});
/** @internal */
const exitInterrupt = (fiberId) => exitFailCause(causeInterrupt(fiberId));
/** @internal */
const exitIsSuccess = (self) => self._tag === "Success";
/** @internal */
const exitIsFailure = (self) => self._tag === "Failure";
/** @internal */
const exitFilterCause = (self) => (self._tag === "Failure" ? succeed$5(self.cause) : fail$5(self));
/** @internal */
const exitFindError = /*#__PURE__*/ composePassthrough(exitFilterCause, findError$1);
/** @internal */
const exitHasInterrupts = (self) => self._tag === "Failure" && hasInterrupts$2(self.cause);
/** @internal */
const exitVoid = /*#__PURE__*/ exitSucceed(void 0);
/** @internal */
const exitMap = /*#__PURE__*/ dual(2, (self, f) =>
  self._tag === "Success" ? exitSucceed(f(self.value)) : self,
);
/** @internal */
const exitMapError = /*#__PURE__*/ dual(2, (self, f) => {
  if (self._tag === "Success") return self;
  const error = findError$1(self.cause);
  if (isFailure$1(error)) return self;
  return exitFail(f(error.success));
});
/** @internal */
const exitMapBoth = /*#__PURE__*/ dual(2, (self, options) => {
  if (self._tag === "Success") return exitSucceed(options.onSuccess(self.value));
  const error = findError$1(self.cause);
  if (isFailure$1(error)) return self;
  return exitFail(options.onFailure(error.success));
});
/** @internal */
const exitZipRight = /*#__PURE__*/ dual(2, (self, that) => (exitIsSuccess(self) ? that : self));
/** @internal */
const exitMatch = /*#__PURE__*/ dual(2, (self, options) =>
  exitIsSuccess(self) ? options.onSuccess(self.value) : options.onFailure(self.cause),
);
/** @internal */
const exitAsVoidAll = (exits) => {
  const failures = [];
  for (const exit of exits) if (exit._tag === "Failure") failures.push(...exit.cause.reasons);
  return failures.length === 0 ? exitVoid : exitFailCause(causeFromReasons(failures));
};
/** @internal */
const exitFindErrorOption = (self) => {
  const error = exitFindError(self);
  return isFailure$1(error) ? none() : some(error.success);
};
/** @internal */
const service$1 = (service) => service;
/** @internal */
const serviceOption$1 = (service) =>
  withFiber$1((fiber) => succeed$4(getOption(fiber.context, service)));
/** @internal */
const serviceOptional = (service) =>
  withFiber$1((fiber) => fromOption$1(getOption(fiber.context, service)));
/** @internal */
const updateContext$1 = /*#__PURE__*/ dual(2, (self, f) =>
  withFiber$1((fiber) => {
    const prevContext = fiber.context;
    const nextContext = f(prevContext);
    if (prevContext === nextContext) return self;
    fiber.setContext(nextContext);
    onExitUnsafe(fiber, () => {
      fiber.setContext(prevContext);
    });
    return self;
  }),
);
/** @internal */
const updateService = /*#__PURE__*/ dual(3, (self, service, f) =>
  updateContext$1(self, (s) => {
    const prev = getUnsafe(s, service);
    const next = f(prev);
    if (prev === next) return s;
    return add(s, service, next);
  }),
);
/** @internal */
const context$1 = () => getContext;
const getContext = /*#__PURE__*/ withFiber$1((fiber) => succeed$4(fiber.context));
/** @internal */
const contextWith$1 = (f) => withFiber$1((fiber) => f(fiber.context));
/** @internal */
const provideContext$1 = /*#__PURE__*/ dual(2, (self, context) => {
  if (effectIsExit(self)) return self;
  return updateContext$1(self, merge$1(context));
});
/** @internal */
const provideService$1 = function () {
  if (arguments.length === 1)
    return dual(2, (self, impl) => provideServiceImpl(self, arguments[0], impl));
  return dual(3, (self, service, impl) => provideServiceImpl(self, service, impl)).apply(
    this,
    arguments,
  );
};
const provideServiceImpl = (self, service, implementation) =>
  updateContext$1(self, add(service, implementation));
/** @internal */
const provideServiceEffect$1 = /*#__PURE__*/ dual(3, (self, service, acquire) =>
  flatMap$2(acquire, (implementation) => provideService$1(self, service, implementation)),
);
/** @internal */
const zip$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[1]),
  (self, that, options) => zipWith$1(self, that, (a, a2) => [a, a2], options),
);
/** @internal */
const zipWith$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[1]),
  (self, that, f, options) =>
    options?.concurrent
      ? map$2(all$1([self, that], { concurrency: 2 }), ([a, a2]) => f(a, a2))
      : flatMap$2(self, (a) => map$2(that, (a2) => f(a, a2))),
);
/** @internal */
const filterOrFail$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, predicate, orFailWith) =>
    filterOrElse$1(
      self,
      predicate,
      orFailWith ? (a) => fail$4(orFailWith(a)) : () => fail$4(new NoSuchElementError$1()),
    ),
);
/** @internal */
const when$1 = /*#__PURE__*/ dual(2, (self, condition) =>
  flatMap$2(condition, (pass) => (pass ? asSome$1(self) : succeedNone$1)),
);
/** @internal */
const forever$2 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) =>
    whileLoop$1({
      while: constTrue,
      body: constant(options?.disableYield ? self : flatMap$2(self, (_) => yieldNow$1)),
      step: constVoid,
    }),
);
/** @internal */
const catchCause$1 = /*#__PURE__*/ dual(
  2,
  (self, f) => new OnFailureImpl(self, f.length !== 1 ? (cause) => f(cause) : f),
);
const OnFailureProto = /*#__PURE__*/ makePrimitiveProto({
  op: "OnFailure",
  [evaluate]: evaluateCont,
});
const OnFailureImpl = function (self, f) {
  this[args] = self;
  this[contE] = f;
};
OnFailureImpl.prototype = OnFailureProto;
/** @internal */
const catchCauseIf$1 = /*#__PURE__*/ dual(3, (self, predicate, f) =>
  catchCause$1(self, (cause) => {
    if (!predicate(cause)) return failCause$3(cause);
    return f(cause);
  }),
);
/** @internal */
const catchCauseFilter = /*#__PURE__*/ dual(3, (self, filter, f) =>
  catchCause$1(self, (cause) => {
    const eb = filter(cause);
    return isFailure$1(eb) ? failCause$3(eb.failure) : f(eb.success, cause);
  }),
);
/** @internal */
const catch_$2 = /*#__PURE__*/ dual(2, (self, f) =>
  catchCauseFilter(self, findError$1, (e) => f(e)),
);
/** @internal */
const catchDefect$1 = /*#__PURE__*/ dual(2, (self, f) => catchCauseFilter(self, findDefect, f));
/** @internal */
const tapCause$1 = /*#__PURE__*/ dual(2, (self, f) =>
  catchCause$1(self, (cause) => andThen$1(f(cause), failCause$3(cause))),
);
/** @internal */
const tapCauseFilter = /*#__PURE__*/ dual(3, (self, filter, f) =>
  catchCause$1(self, (cause) => {
    const result = filter(cause);
    if (isFailure$1(result)) return failCause$3(cause);
    return andThen$1(f(result.success, cause), failCause$3(cause));
  }),
);
/** @internal */
const tapError$1 = /*#__PURE__*/ dual(2, (self, f) =>
  tapCauseFilter(self, findError$1, (e) => f(e)),
);
/** @internal */
const tapErrorTag$1 = /*#__PURE__*/ dual(3, (self, k, f) => {
  const predicate = Array.isArray(k)
    ? (e) => hasProperty(e, "_tag") && k.includes(e._tag)
    : isTagged(k);
  return tapError$1(self, (error) => (predicate(error) ? f(error) : void_$2));
});
/** @internal */
const tapDefect$1 = /*#__PURE__*/ dual(2, (self, f) =>
  tapCauseFilter(self, findDefect, (_) => f(_)),
);
/** @internal */
const catchIf$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, predicate, f, orElse) =>
    catchCause$1(self, (cause) => {
      const error = findError$1(cause);
      if (isFailure$1(error)) return failCause$3(error.failure);
      if (!predicate(error.success)) return orElse ? orElse(error.success) : failCause$3(cause);
      return f(error.success);
    }),
);
/** @internal */
const catchFilter$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, filter, f, orElse) =>
    catchCause$1(self, (cause) => {
      const error = findError$1(cause);
      if (isFailure$1(error)) return failCause$3(error.failure);
      const result = filter(error.success);
      if (isFailure$1(result)) return orElse ? orElse(result.failure) : failCause$3(cause);
      return f(result.success);
    }),
);
/** @internal */
const catchTag$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, k, f, orElse) => {
    const pred = Array.isArray(k)
      ? (e) => hasProperty(e, "_tag") && k.includes(e._tag)
      : isTagged(k);
    return catchIf$1(self, pred, f, orElse);
  },
);
/** @internal */
const catchTags$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, cases, orElse) => {
    let keys;
    return catchFilter$1(
      self,
      (e) => {
        keys ??= Object.keys(cases);
        return hasProperty(e, "_tag") && isString(e["_tag"]) && keys.includes(e["_tag"])
          ? succeed$5(e)
          : fail$5(e);
      },
      (e) => cases[e["_tag"]](e),
      orElse,
    );
  },
);
/** @internal */
const catchReason$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, errorTag, reasonTag, f, orElse) =>
    catchIf$1(
      self,
      (e) =>
        isTagged(e, errorTag) &&
        hasProperty(e, "reason") &&
        (orElse !== void 0 || isTagged(e.reason, reasonTag)),
      (e) => {
        const reason = e.reason;
        if (isTagged(reason, reasonTag)) return f(reason, e);
        return orElse ? orElse(reason, e) : fail$4(e);
      },
    ),
);
/** @internal */
const mapError$1 = /*#__PURE__*/ dual(2, (self, f) =>
  catch_$2(self, (error) => failSync(() => f(error))),
);
/** @internal */
const mapBoth = /*#__PURE__*/ dual(2, (self, options) =>
  matchEffect$2(self, {
    onFailure: (e) => failSync(() => options.onFailure(e)),
    onSuccess: (a) => sync$2(() => options.onSuccess(a)),
  }),
);
/** @internal */
const orDie$2 = (self) => catch_$2(self, die$4);
/** @internal */
const orElseSucceed$1 = /*#__PURE__*/ dual(2, (self, f) =>
  catch_$2(self, (error) => sync$2(() => f(error))),
);
/** @internal */
const firstSuccessOf$1 = (effects) =>
  suspend$2(() => {
    const iterator = effects[Symbol.iterator]();
    let state = iterator.next();
    if (state.done)
      return die$4(/* @__PURE__ */ new Error("Received an empty collection of effects"));
    function loop(current) {
      const next = iterator.next();
      if (next.done) return current.value;
      return catch_$2(current.value, (_) => loop(next));
    }
    return loop(state);
  });
/** @internal */
const ignore$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) => {
    if (!options?.log)
      return matchEffect$2(self, {
        onFailure: (_) => void_$2,
        onSuccess: (_) => void_$2,
      });
    const logEffect = logWithLevel$1(options.log === true ? void 0 : options.log);
    return matchCauseEffect$1(self, {
      onFailure(cause) {
        const failure = findFail$1(cause);
        return isFailure$1(failure)
          ? failCause$3(failure.failure)
          : options.message === void 0
            ? logEffect(cause)
            : logEffect(options.message, cause);
      },
      onSuccess: (_) => void_$2,
    });
  },
);
/** @internal */
const ignoreCause$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) => {
    if (!options?.log)
      return matchCauseEffect$1(self, {
        onFailure: (_) => void_$2,
        onSuccess: (_) => void_$2,
      });
    const logEffect = logWithLevel$1(options.log === true ? void 0 : options.log);
    return matchCauseEffect$1(self, {
      onFailure: (cause) =>
        options.message === void 0 ? logEffect(cause) : logEffect(options.message, cause),
      onSuccess: (_) => void_$2,
    });
  },
);
/** @internal */
const option$1 = (self) =>
  match$2(self, {
    onFailure: none,
    onSuccess: some,
  });
/** @internal */
const result$1 = (self) =>
  matchEager(self, {
    onFailure: fail$5,
    onSuccess: succeed$5,
  });
/** @internal */
const matchCauseEffect$1 = /*#__PURE__*/ dual(
  2,
  (self, options) =>
    new OnSuccessAndFailureImpl(
      self,
      options.onSuccess.length !== 1 ? (a) => options.onSuccess(a) : options.onSuccess,
      options.onFailure.length !== 1 ? (cause) => options.onFailure(cause) : options.onFailure,
    ),
);
const OnSuccessAndFailureProto = /*#__PURE__*/ makePrimitiveProto({
  op: "OnSuccessAndFailure",
  [evaluate]: evaluateCont,
});
const OnSuccessAndFailureImpl = function (self, onSuccess, onFailure) {
  this[args] = self;
  this[contA] = onSuccess;
  this[contE] = onFailure;
};
OnSuccessAndFailureImpl.prototype = OnSuccessAndFailureProto;
const matchSuccess = function (value, fiber) {
  const handlers = this.payload;
  return fiber.succeedWith(
    continuationMarksStack
      ? handlers.onSuccess(value)
      : internalCall(() => handlers.onSuccess(value)),
  );
};
const makeMatch = (op, onFailure) => {
  const Proto = makePrimitiveProto({
    op,
    [evaluate]: evaluateCont,
    [contA]: matchSuccess,
    [contE]: onFailure,
  });
  const MatchImpl = function (self, handlers) {
    this[args] = self;
    this.payload = handlers;
  };
  MatchImpl.prototype = Proto;
  return MatchImpl;
};
const MatchImpl = /*#__PURE__*/ makeMatch("Match", function (cause, fiber) {
  const fail = cause.reasons.find(isFailReason$1);
  if (fail === void 0) return failCause$3(cause);
  const handlers = this.payload;
  return fiber.succeedWith(
    continuationMarksStack
      ? handlers.onFailure(fail.error)
      : internalCall(() => handlers.onFailure(fail.error)),
  );
});
/** @internal */
const matchEffect$2 = /*#__PURE__*/ dual(2, (self, options) =>
  matchCauseEffect$1(self, {
    onFailure: (cause) => {
      const fail = cause.reasons.find(isFailReason$1);
      return fail ? options.onFailure(fail.error) : failCause$3(cause);
    },
    onSuccess: options.onSuccess,
  }),
);
/** @internal */
const match$2 = /*#__PURE__*/ dual(2, (self, options) => new MatchImpl(self, options));
/** @internal */
const matchEager = /*#__PURE__*/ dual(2, (self, options) => {
  if (effectIsExit(self)) {
    if (self._tag === "Success") return exitSucceed(options.onSuccess(self.value));
    const error = findError$1(self.cause);
    if (isFailure$1(error)) return self;
    return exitSucceed(options.onFailure(error.success));
  }
  return match$2(self, options);
});
/** @internal */
const exit$1 = (self) => (effectIsExit(self) ? exitSucceed(self) : exitPrimitive(self));
const exitPrimitive = /*#__PURE__*/ makePrimitive({
  op: "Exit",
  [evaluate](fiber) {
    fiber._stack.push(this);
    return this[args];
  },
  [contA](value, fiber, exit) {
    return fiber.succeedWith(exit ?? exitSucceed(value));
  },
  [contE](cause, fiber, exit) {
    return fiber.succeedWith(exit ?? exitFailCause(cause));
  },
});
/** @internal */
const isSuccess$2 = /*#__PURE__*/ matchEager({
  onFailure: () => false,
  onSuccess: () => true,
});
/** @internal */
const delay$1 = /*#__PURE__*/ dual(2, (self, duration) => andThen$1(sleep$1(duration), self));
/** @internal */
const timeoutOrElse$1 = /*#__PURE__*/ dual(2, (self, options) =>
  flatMap$2(timeoutOption$1(self, options.duration), (option) =>
    isNone(option) ? options.orElse() : succeed$4(option.value),
  ),
);
/** @internal */
const timeoutErrorFromDuration = (duration) =>
  new TimeoutError$1(`Operation timed out after '${format(duration)}'`);
/** @internal */
const timeout$1 = /*#__PURE__*/ dual(2, (self, duration) => {
  const decoded = fromInputUnsafe(duration);
  return timeoutOrElse$1(self, {
    duration: decoded,
    orElse: () => fail$4(timeoutErrorFromDuration(decoded)),
  });
});
/** @internal */
const timeoutOption$1 = /*#__PURE__*/ dual(2, (self, duration) =>
  raceFirst$1(asSome$1(self), as$1(sleep$1(duration), none())),
);
/** @internal */
const ScopeTypeId = "~effect/Scope";
/** @internal */
const ScopeCloseableTypeId = "~effect/Scope/Closeable";
/** @internal */
const scopeTag = /*#__PURE__*/ Service("effect/Scope");
/** @internal */
const scopeClose = (self, exit_) =>
  withFiber$1((fiber) => {
    fiberEnterUninterruptibleUnsafe(fiber);
    return scopeCloseUnsafe(self, exit_) ?? void_$2;
  });
/** @internal */
const scopeCloseUnsafe = (self, exit_) => {
  const state = self.state;
  if (state._tag === "Closed") return;
  self.state = {
    _tag: "Closed",
    exit: exit_,
  };
  if (self.parent !== void 0) scopeRemoveFinalizerUnsafe(self.parent, self);
  if (state._tag === "Empty") return;
  if (state.finalizer !== void 0) return runFinalizer(state.finalizer, exit_);
  const finalizers = state.finalizers;
  if (finalizers.size === 1) return runFinalizer(finalizers.values().next().value, exit_);
  return scopeCloseFinalizers(self, finalizers, exit_);
};
const runFinalizer = (finalizer, exit_) => {
  try {
    return finalizer(exit_);
  } catch (defect) {
    return exitDie(defect);
  }
};
const combineFinalizerCause = (exit_, finalizer) =>
  exitIsSuccess(exit_)
    ? finalizer
    : catchCause$1(finalizer, (cause) => failCause$3(causeCombine(exit_.cause, cause)));
const scopeCloseFinalizers = /*#__PURE__*/ fnUntraced$1(function* (self, finalizers, exit_) {
  let exits = [];
  const fibers = [];
  const arr = Array.from(finalizers.values());
  const parent = getCurrentFiber();
  for (let i = arr.length - 1; i >= 0; i--) {
    const finalizer = arr[i];
    if (self.strategy === "sequential") exits.push(yield* exit$1(runFinalizer(finalizer, exit_)));
    else fibers.push(forkUnsafe$1(parent, runFinalizer(finalizer, exit_), true, true, "inherit"));
  }
  if (fibers.length > 0) exits = yield* fiberAwaitAll(fibers);
  return yield* exitAsVoidAll(exits);
});
/** @internal */
const scopeFork = (scope, finalizerStrategy) =>
  sync$2(() => scopeForkUnsafe(scope, finalizerStrategy));
/** @internal */
const scopeForkUnsafe = (scope, finalizerStrategy) => {
  const child = makeScope(finalizerStrategy, scope);
  if (scope.state._tag === "Closed") {
    child.state = scope.state;
    return child;
  }
  scopeAddFinalizerUnsafe(scope, child, (exit) => scopeClose(child, exit));
  return child;
};
/** @internal */
const scopeAddFinalizerExit = (scope, finalizer) => {
  return suspend$2(() => {
    if (scope.state._tag === "Closed") return finalizer(scope.state.exit);
    scopeAddFinalizerUnsafe(scope, {}, finalizer);
    return void_$2;
  });
};
/** @internal */
const scopeAddFinalizer = (scope, finalizer) => scopeAddFinalizerExit(scope, constant(finalizer));
/** @internal */
const scopeAddFinalizerUnsafe = (scope, key, finalizer) => {
  if (scope.state._tag === "Empty")
    scope.state = {
      _tag: "Open",
      finalizerKey: key,
      finalizer,
      finalizers: void 0,
    };
  else if (scope.state._tag === "Open") {
    const state = scope.state;
    if (state.finalizer !== void 0) {
      state.finalizers = /* @__PURE__ */ new Map([[state.finalizerKey, state.finalizer]]);
      state.finalizerKey = void 0;
      state.finalizer = void 0;
      state.finalizers.set(key, finalizer);
    } else state.finalizers.set(key, finalizer);
  }
};
/** @internal */
const scopeRemoveFinalizerUnsafe = (scope, key) => {
  if (scope.state._tag !== "Open") return;
  const state = scope.state;
  if (state.finalizerKey === key) scope.state = constScopeEmpty;
  else if (state.finalizers !== void 0) {
    state.finalizers.delete(key);
    if (state.finalizers.size === 0) scope.state = constScopeEmpty;
  }
};
/** @internal */
const scopeMakeUnsafe = (finalizerStrategy) => makeScope(finalizerStrategy, void 0);
const makeScope = (finalizerStrategy = "sequential", parent) => ({
  [ScopeCloseableTypeId]: ScopeCloseableTypeId,
  [ScopeTypeId]: ScopeTypeId,
  strategy: finalizerStrategy,
  parent,
  state: constScopeEmpty,
});
const constScopeEmpty = { _tag: "Empty" };
/** @internal */
const scopeMake = (finalizerStrategy) => sync$2(() => scopeMakeUnsafe(finalizerStrategy));
/** @internal */
const scope$1 = scopeTag;
/** @internal */
const provideScope = /*#__PURE__*/ provideService$1(scopeTag);
/** @internal */
const scoped$1 = (self) =>
  withFiber$1((fiber) => {
    const prev = fiber.context;
    const scope = scopeMakeUnsafe();
    fiber.setContext(add(fiber.context, scopeTag, scope));
    onExitUnsafe(fiber, (exit) => {
      fiber.setContext(prev);
      return scopeCloseUnsafe(scope, exit);
    });
    return self;
  });
/** @internal */
const scopedWith$1 = (f) =>
  suspend$2(() => {
    const scope = scopeMakeUnsafe();
    return onExit$1(f(scope), (exit) => suspend$2(() => scopeCloseUnsafe(scope, exit) ?? void_$2));
  });
/** @internal */
const acquireRelease$1 = (acquire, release, options) =>
  contextWith$1((context) =>
    uninterruptibleMask$1((restore) =>
      flatMap$2(scope$1, (scope) =>
        tap$2(options?.interruptible ? restore(acquire) : acquire, (a) =>
          scopeAddFinalizerExit(scope, (exit) => provideContext$1(release(a, exit), context)),
        ),
      ),
    ),
  );
/** @internal */
const addFinalizer$2 = (finalizer) =>
  flatMap$2(scope$1, (scope) =>
    contextWith$1((context) =>
      scopeAddFinalizerExit(scope, (exit) => provideContext$1(finalizer(exit), context)),
    ),
  );
const OnExitImpl = /*#__PURE__*/ (function () {
  const Proto = /*#__PURE__*/ makePrimitiveProto({
    op: "OnExit",
    [evaluate](fiber) {
      fiber._stack.push(this);
      return this.effect;
    },
    [contAll](fiber) {
      if (fiber.interruptible && this.interruptible !== true) {
        fiber._stack.push(setInterruptibleTrue);
        fiber.interruptible = false;
      }
    },
    [contA](value, _, exit) {
      exit ??= exitSucceed(value);
      let eff;
      try {
        eff = this.onExit(exit);
      } catch (defect) {
        eff = exitDie(defect);
      }
      return eff ? flatMap$2(eff, (_) => exit) : exit;
    },
    [contE](cause, _, exit) {
      exit ??= exitFailCause(cause);
      let eff;
      try {
        eff = this.onExit(exit);
      } catch (defect) {
        eff = exitDie(defect);
      }
      return eff ? flatMap$2(combineFinalizerCause(exit, eff), (_) => exit) : exit;
    },
  });
  const OnExitImpl = function (effect, onExit, interruptible) {
    this.effect = effect;
    this.onExit = onExit;
    this.interruptible = interruptible;
  };
  OnExitImpl.prototype = Proto;
  return OnExitImpl;
})();
/** @internal */
const onExitPrimitive$1 = (effect, onExit, interruptible) =>
  new OnExitImpl(effect, onExit, interruptible);
/**
 * Pushes an exit finalizer for the current `withFiber` evaluation. Only call inside `withFiber`.
 * @internal
 */
const onExitUnsafe = (fiber, f) => {
  fiber._stack.push(new OnExitImpl(void 0, f, void 0));
};
/** @internal */
const onExit$1 = /*#__PURE__*/ dual(2, onExitPrimitive$1);
/** @internal */
const ensuring$1 = /*#__PURE__*/ dual(2, (self, finalizer) => onExit$1(self, (_) => finalizer));
/** @internal */
const onExitFilter = /*#__PURE__*/ dual(3, (self, filter, f) =>
  onExit$1(self, (exit) => {
    const b = filter(exit);
    return isFailure$1(b) ? void_$2 : f(b.success, exit);
  }),
);
/** @internal */
const onError$1 = /*#__PURE__*/ dual(2, (self, f) => onExitFilter(self, exitFilterCause, f));
/** @internal */
const onErrorFilter = /*#__PURE__*/ dual(3, (self, filter, f) =>
  onExit$1(self, (exit) => {
    if (exit._tag !== "Failure") return void_$2;
    const result = filter(exit.cause);
    return isFailure$1(result) ? void_$2 : f(result.success, exit.cause);
  }),
);
/** @internal */
const onInterrupt$1 = /*#__PURE__*/ dual(2, (self, finalizer) =>
  onErrorFilter(causeFilterInterruptors, finalizer)(self),
);
/** @internal */
const acquireUseRelease$1 = (acquire, use, release) =>
  uninterruptibleMask$1((restore) =>
    flatMap$2(acquire, (a) =>
      onExitPrimitive$1(
        suspend$2(() => restore(use(a))),
        (exit) => release(a, exit),
        true,
      ),
    ),
  );
/** @internal */
const cachedInvalidateWithTTL$1 = /*#__PURE__*/ dual(2, (self, ttl) =>
  sync$2(() =>
    makeCachedUnsafe(
      self,
      typeof ttl === "function"
        ? (exit) => toMillis(fromInputUnsafe(ttl(exit)))
        : constant(toMillis(fromInputUnsafe(ttl))),
    ),
  ),
);
const infiniteTTL = /*#__PURE__*/ constant(Infinity);
const makeCachedUnsafe = (self, ttlMillis) => {
  let expiresAt = 0;
  let exit;
  let current;
  const join = (fiber, run) => {
    run.awaiters++;
    onExitUnsafe(fiber, () => {
      if (--run.awaiters > 0 || current !== run) return;
      current = void 0;
      return fiberInterrupt(run.fiber);
    });
    return fiberJoin(run.fiber);
  };
  return [
    withFiber$1((fiber) => {
      if (current !== void 0)
        return fiber === current.fiber ? fiberJoin(current.fiber) : join(fiber, current);
      if (
        exit !== void 0 &&
        (expiresAt === Infinity || fiber.getRef(ClockRef).currentTimeMillisUnsafe() < expiresAt)
      )
        return exit;
      exit = void 0;
      const clock = fiber.getRef(ClockRef);
      const run = {
        fiber: new FiberImpl(fiber.context),
        awaiters: 0,
      };
      current = run;
      const joined = join(fiber, run);
      run.fiber.evaluate(
        onExitPrimitive$1(self, (exit_) => {
          if (current !== run) return;
          current = void 0;
          if (exitHasInterrupts(exit_)) return;
          const duration = ttlMillis(exit_);
          expiresAt = duration === Infinity ? Infinity : clock.currentTimeMillisUnsafe() + duration;
          exit = exit_;
        }),
      );
      return run.fiber._exit ?? joined;
    }),
    sync$2(() => {
      exit = void 0;
    }),
  ];
};
/** @internal */
const cached$1 = (self) => sync$2(() => makeCachedUnsafe(self, infiniteTTL)[0]);
/** @internal */
const interrupt$3 = /*#__PURE__*/ withFiber$1((fiber) => failCause$3(causeInterrupt(fiber.id)));
/** @internal */
const uninterruptible$1 = (self) =>
  withFiber$1((fiber) => {
    if (!fiber.interruptible) return self;
    fiber.interruptible = false;
    fiber._stack.push(setInterruptibleTrue);
    return self;
  });
const setInterruptible = /*#__PURE__*/ makePrimitive({
  op: "SetInterruptible",
  [contAll](fiber) {
    fiber.interruptible = this[args];
    if (fiber._interruptedCause && fiber.interruptible)
      return () => failCause$3(fiber._interruptedCause);
  },
});
const setInterruptibleTrue = /*#__PURE__*/ setInterruptible(true);
const setInterruptibleFalse = /*#__PURE__*/ setInterruptible(false);
const setFiberInterruptible = (fiber) => {
  fiber.interruptible = true;
  fiber._stack.push(setInterruptibleFalse);
  if (fiber._interruptedCause) return failCause$3(fiber._interruptedCause);
};
/**
 * Makes the current fiber uninterruptible for the returned effect without an
 * extra primitive. Call only within `withFiber`.
 *
 * @internal
 */
const fiberEnterUninterruptibleUnsafe = (fiber) => {
  const impl = fiber;
  if (!impl.interruptible) return;
  impl.interruptible = false;
  impl._stack.push(setInterruptibleTrue);
};
/**
 * Makes the current fiber interruptible for the returned effect without an
 * extra primitive. Call only within `withFiber` and return any pending
 * interruption it produces.
 *
 * @internal
 */
const fiberEnterInterruptibleUnsafe = (fiber) => {
  const impl = fiber;
  if (impl.interruptible) return void 0;
  return setFiberInterruptible(impl);
};
/** @internal */
const interruptible$1 = (self) =>
  withFiber$1((fiber) => {
    if (fiber.interruptible) return self;
    return setFiberInterruptible(fiber) ?? self;
  });
/** @internal */
const uninterruptibleMask$1 = (f) =>
  withFiber$1((fiber) => {
    if (!fiber.interruptible) return f(identity);
    fiber.interruptible = false;
    fiber._stack.push(setInterruptibleTrue);
    return f(interruptible$1);
  });
/** @internal */
const all$1 = (arg, options) => {
  if (isIterable(arg))
    return options?.mode === "result"
      ? forEach$1(arg, result$1, options)
      : forEach$1(arg, identity, options);
  else if (options?.discard)
    return options.mode === "result"
      ? forEach$1(Object.values(arg), result$1, options)
      : forEach$1(Object.values(arg), identity, options);
  return suspend$2(() => {
    const out = {};
    return as$1(
      forEach$1(
        Object.entries(arg),
        ([key, effect]) =>
          map$2(options?.mode === "result" ? result$1(effect) : effect, (value) => {
            assignProperty(out, key, value);
          }),
        {
          discard: true,
          concurrency: options?.concurrency,
        },
      ),
      out,
    );
  });
};
/** @internal */
const partition$1 = /*#__PURE__*/ dual(
  (args) => isIterable(args[0]) && !isEffect$1(args[0]),
  (elements, f, options) =>
    map$2(
      forEach$1(elements, (a, i) => result$1(f(a, i)), options),
      (results) => partition$2(results, identity),
    ),
);
/** @internal */
const findFirst$1 = /*#__PURE__*/ dual(
  (args) => isIterable(args[0]) && !isEffect$1(args[0]),
  (elements, predicate) =>
    suspend$2(() => {
      const iterator = elements[Symbol.iterator]();
      const next = iterator.next();
      if (!next.done) return findFirstLoop(iterator, 0, predicate, next.value);
      return succeed$4(none());
    }),
);
const findFirstLoop = (iterator, index, predicate, value) =>
  flatMap$2(predicate(value, index), (keep) => {
    if (keep) return succeed$4(some(value));
    const next = iterator.next();
    if (!next.done) return findFirstLoop(iterator, index + 1, predicate, next.value);
    return succeed$4(none());
  });
/** @internal */
const whileLoop$1 = /*#__PURE__*/ makePrimitive({
  op: "While",
  [contA](value, fiber) {
    this[args].step(value);
    if (this["~effect/Effect/args"].while()) {
      fiber._stack.push(this);
      return this[args].body();
    }
    return exitVoid;
  },
  [evaluate](fiber) {
    if (this["~effect/Effect/args"].while()) {
      fiber._stack.push(this);
      return this[args].body();
    }
    return exitVoid;
  },
});
/** @internal */
const forEach$1 = /*#__PURE__*/ dual(
  (args) => typeof args[1] === "function",
  (iterable, f, options) =>
    suspend$2(() => {
      const concurrency = resolveConcurrency(options?.concurrency);
      if (concurrency === 1) return forEachSequential(iterable, f, options);
      const items = fromIterable$1(iterable);
      let length = items.length;
      if (length === 0) return options?.discard ? void_$2 : succeed$4([]);
      const out = options?.discard ? void 0 : new Array(length);
      const eff = forEachConcurrent(
        {
          f,
          out,
        },
        items,
        { concurrency },
      );
      return eff ? as$1(eff, out) : succeed$4(out);
    }),
);
const forEachSequential = (iterable, f, options) =>
  suspend$2(() => {
    const out = options?.discard ? void 0 : [];
    const iterator = iterable[Symbol.iterator]();
    let state = iterator.next();
    let index = 0;
    return as$1(
      whileLoop$1({
        while: () => !state.done,
        body: () => f(state.value, index++),
        step: (b) => {
          if (out) out.push(b);
          state = iterator.next();
        },
      }),
      out,
    );
  });
/** @internal */
const resolveConcurrency = (concurrency) =>
  concurrency === "unbounded" ? Number.POSITIVE_INFINITY : Math.max(1, concurrency ?? 1);
/** @internal */
const iterateEager = () => (options) => {
  const onItem = options.onItem;
  const step = options.step;
  const resumeSequential = (state, items, index, end, effect) =>
    flatMap$2(
      exit$1(effect),
      (itemExit) =>
        step(state, items[index], itemExit, index) ??
        runSequential(state, items, index + 1, end) ??
        void_$2,
    );
  const runSequential = (state, items, index = 0, end = items.length) => {
    for (; index < end; index++) {
      const item = items[index];
      const effect = onItem(state, item, index);
      if (!effectIsExit(effect)) return resumeSequential(state, items, index, end, effect);
      const terminal = step(state, item, effect, index);
      if (terminal) return terminal._tag === "Failure" ? terminal : void 0;
    }
  };
  return runSequential;
};
const iterateConcurrentImpl = (options) => {
  const onItem = options.onItem;
  const step = options.step;
  return (state, items, opts) => {
    let index = 0;
    const end = opts.end ?? items.length;
    const concurrency = opts.concurrency;
    let done = false;
    let parentFiber;
    let fibers;
    let resume;
    let terminal;
    let effect;
    const failDefect = (error) => {
      const defect = exitDie(error);
      terminal = defect;
      done = true;
      return fibers && fibers.size > 0
        ? flatMap$2(
            uninterruptible$1(fiberInterruptAll(Array.from(fibers))),
            () => terminal ?? defect,
          )
        : defect;
    };
    const go = () => {
      let paused = false;
      for (; !terminal && index < end; index++) {
        const item = items[index];
        const eff = effect ?? onItem(state, item, index);
        if (effectIsExit(eff)) {
          terminal = step(state, item, eff, index);
          if (terminal) break;
        } else if (!parentFiber)
          return callback$1((cb) => {
            parentFiber = getCurrentFiber();
            fibers = /* @__PURE__ */ new Set();
            effect = eff;
            resume = cb;
            let result;
            try {
              result = go();
            } catch (error) {
              return cb(failDefect(error));
            }
            if (result) return cb(result);
            return suspend$2(() => {
              terminal ??= exitVoid;
              return flatMap$2(fibers ? fiberInterruptAll(fibers) : void_$2, () =>
                terminal?._tag === "Failure" ? terminal : void_$2,
              );
            });
          });
        else {
          effect = void 0;
          const fiber = forkUnsafe$1(parentFiber, eff, true, true, "inherit");
          if (fiber._exit) {
            terminal = step(state, item, fiber._exit, index);
            if (terminal) break;
            continue;
          }
          fibers.add(fiber);
          const currentIndex = index;
          fiber.addObserver((exit) => {
            fibers.delete(fiber);
            try {
              if (terminal) {
                if (exit._tag === "Failure") {
                  const reasons = exit.cause.reasons.filter(
                    (reason) => reason._tag !== "Interrupt",
                  );
                  if (reasons.length > 0) {
                    const cause = causeFromReasons(reasons);
                    terminal = exitFailCause(
                      terminal._tag === "Failure" ? causeCombine(terminal.cause, cause) : cause,
                    );
                  }
                }
              } else {
                const result = step(state, item, exit, currentIndex);
                if (result) {
                  terminal = result;
                  go();
                }
              }
              if (paused) {
                const eff = go();
                if (eff) resume(eff);
              } else if (done && fibers.size === 0) resume(terminal ?? void_$2);
            } catch (error) {
              resume(failDefect(error));
            }
          });
          if (fibers.size < concurrency) continue;
          paused = true;
          index++;
          return;
        }
      }
      done = true;
      if (terminal) {
        if (fibers && fibers.size > 0) {
          const annotations = fiberStackAnnotations(parentFiber);
          fibers.forEach((f) => f.interruptUnsafe(parentFiber.id, annotations));
          return;
        }
        if (resume || terminal._tag === "Failure") return terminal;
      } else if (resume) {
        if (!fibers) return exitVoid;
        else if (fibers.size === 0) resume(void_$2);
      }
    };
    return go();
  };
};
/** @internal */
const iterateConcurrent = () => (options) => iterateConcurrentImpl(options);
const forEachConcurrent = /*#__PURE__*/ iterateConcurrentImpl({
  onItem(state, item, index) {
    return state.f(item, index);
  },
  step(state, _, exit, index) {
    if (exit._tag === "Failure") return exit;
    else if (state.out) state.out[index] = exit.value;
  },
});
/** @internal */
const filterOrElse$1 = /*#__PURE__*/ dual(3, (self, predicate, orElse) =>
  flatMap$2(self, (a) => (predicate(a) ? succeed$4(a) : orElse(a))),
);
/** @internal */
const filterMapOrElse = /*#__PURE__*/ dual(3, (self, filter, orElse) =>
  flatMap$2(self, (a) => {
    const result = filter(a);
    return isFailure$1(result) ? orElse(result.failure) : succeed$4(result.success);
  }),
);
/** @internal */
const filterMapOrFail$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, filter, orFailWith) =>
    filterMapOrElse(
      self,
      filter,
      orFailWith ? (x) => fail$4(orFailWith(x)) : () => fail$4(new NoSuchElementError$1()),
    ),
);
/** @internal */
const filter$1 = /*#__PURE__*/ dual(
  (args) => isIterable(args[0]) && !isEffect$1(args[0]),
  (elements, predicate, options) =>
    suspend$2(() => {
      const out = [];
      return as$1(
        forEach$1(
          elements,
          (a, i) => {
            const result = predicate(a, i);
            if (typeof result === "boolean") {
              if (result) out.push(a);
              return void_$2;
            }
            return map$2(result, (keep) => {
              if (keep) out.push(a);
            });
          },
          {
            discard: true,
            concurrency: options?.concurrency,
          },
        ),
        out,
      );
    }),
);
/** @internal */
const filterMapEffect$1 = /*#__PURE__*/ dual(
  (args) => isIterable(args[0]) && !isEffect$1(args[0]),
  (elements, filter, options) =>
    suspend$2(() => {
      const out = [];
      return as$1(
        forEach$1(
          elements,
          (a) =>
            map$2(filter(a), (result) => {
              if (isSuccess$3(result)) out.push(result.success);
            }),
          {
            discard: true,
            concurrency: options?.concurrency,
          },
        ),
        out,
      );
    }),
);
/** @internal */
const forkChild$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) =>
    withFiber$1((fiber) => {
      interruptChildrenPatch();
      return succeed$4(
        forkUnsafe$1(
          fiber,
          self,
          options?.startImmediately,
          false,
          options?.uninterruptible ?? false,
        ),
      );
    }),
);
/** @internal */
const forkUnsafe$1 = (
  parent,
  effect,
  immediate = false,
  daemon = false,
  uninterruptible = false,
) => {
  const parentRuntime = parent;
  const interruptible =
    uninterruptible === "inherit" ? parentRuntime.interruptible : !uninterruptible;
  const child = new FiberImpl(parentRuntime.context, interruptible);
  if (!daemon) {
    parentRuntime.children().add(child);
    child._parent = parentRuntime;
  }
  if (immediate) child.evaluate(effect);
  else {
    child._asyncContext = captureAsyncContext();
    parentRuntime.currentDispatcher.scheduleTask(() => child.evaluate(effect), 0);
  }
  return child;
};
/** @internal */
const forkDetach$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) =>
    withFiber$1((fiber) =>
      succeed$4(
        forkUnsafe$1(fiber, self, options?.startImmediately, true, options?.uninterruptible),
      ),
    ),
);
/** @internal */
const forkIn$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, scope, options) =>
    withFiber$1((parent) => {
      const fiber = forkUnsafe$1(
        parent,
        self,
        options?.startImmediately,
        true,
        options?.uninterruptible,
      );
      if (!fiber._exit) {
        if (scope.state._tag !== "Closed") {
          const key = {};
          const finalizer = () =>
            withFiberId((interruptor) =>
              interruptor === fiber.id ? void_$2 : fiberInterrupt(fiber),
            );
          scopeAddFinalizerUnsafe(scope, key, finalizer);
          fiber.addObserver(() => scopeRemoveFinalizerUnsafe(scope, key));
        } else fiber.interruptUnsafe(parent.id, fiberStackAnnotations(parent));
      }
      return succeed$4(fiber);
    }),
);
/** @internal */
const forkScoped$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) => flatMap$2(scope$1, (scope) => forkIn$1(self, scope, options)),
);
/** @internal */
const runForkWith$1 = (context) => (effect, options) => {
  const fiber = new FiberImpl(
    options?.scheduler ? add(context, Scheduler, options.scheduler) : context,
    options?.uninterruptible !== true,
  );
  fiber.evaluate(effect);
  if (fiber._exit) return fiber;
  if (options?.signal) {
    if (options.signal.aborted) fiber.interruptUnsafe();
    else {
      const abort = () => fiber.interruptUnsafe();
      options.signal.addEventListener("abort", abort, { once: true });
      fiber.addObserver(() => options.signal.removeEventListener("abort", abort));
    }
  }
  if (options?.onFiberStart) options.onFiberStart(fiber);
  return fiber;
};
/** @internal */
const fiberRunIn = /*#__PURE__*/ dual(2, (self, scope) => {
  if (self._exit) return self;
  else if (scope.state._tag === "Closed") {
    self.interruptUnsafe(self.id);
    return self;
  }
  scopeRemoveFinalizerUnsafe(scope, self);
  scopeAddFinalizerUnsafe(scope, self, () => fiberInterrupt(self));
  self.addObserver(() => scopeRemoveFinalizerUnsafe(scope, self));
  return self;
});
/** @internal */
const runFork$1 = /*#__PURE__*/ runForkWith$1(/*#__PURE__*/ empty$2());
/** @internal */
const runPromiseExitWith = (context) => {
  const runFork = runForkWith$1(context);
  return (effect, options) => {
    const fiber = runFork(effect, options);
    return new Promise((resolve) => {
      fiber.addObserver((exit) => resolve(exit));
    });
  };
};
/** @internal */
const runPromiseExit$1 = /*#__PURE__*/ runPromiseExitWith(/*#__PURE__*/ empty$2());
/** @internal */
const runPromiseWith$1 = (context) => {
  const runPromiseExit = runPromiseExitWith(context);
  return (effect, options) =>
    runPromiseExit(effect, options).then((exit) => {
      if (exit._tag === "Failure") throw causeSquash(exit.cause);
      return exit.value;
    });
};
/** @internal */
const runPromise$1 = /*#__PURE__*/ runPromiseWith$1(/*#__PURE__*/ empty$2());
/** @internal */
const runSyncExitWith = (context) => {
  const runFork = runForkWith$1(context);
  return (effect) => {
    if (effectIsExit(effect)) return effect;
    const scheduler = new MixedScheduler("sync");
    const fiber = runFork(effect, { scheduler });
    fiber._dispatcher?.flush();
    return fiber._exit ?? exitDie(new AsyncFiberError(fiber));
  };
};
/** @internal */
const runSyncExit$1 = /*#__PURE__*/ runSyncExitWith(/*#__PURE__*/ empty$2());
/** @internal */
const runSyncWith$1 = (context) => {
  const runSyncExit = runSyncExitWith(context);
  return (effect) => {
    const exit = runSyncExit(effect);
    if (exit._tag === "Failure") throw causeSquash(exit.cause);
    return exit.value;
  };
};
/** @internal */
const runSync$1 = /*#__PURE__*/ runSyncWith$1(/*#__PURE__*/ empty$2());
const succeedTrue = /*#__PURE__*/ succeed$4(true);
const succeedFalse = /*#__PURE__*/ succeed$4(false);
var Latch = class {
  waiters = [];
  scheduled = void 0;
  _isOpen;
  constructor(isOpen) {
    this._isOpen = isOpen;
  }
  scheduleUnsafe(fiber) {
    if (this.waiters.length === 0) return succeedTrue;
    if (this.scheduled === void 0) {
      this.scheduled = this.waiters;
      fiber.currentDispatcher.scheduleTask(this.flushScheduled, 0);
    } else for (let i = 0; i < this.waiters.length; i++) this.scheduled.push(this.waiters[i]);
    this.waiters = [];
    return succeedTrue;
  }
  flushScheduled = () => {
    if (this.scheduled === void 0) return;
    const waiters = this.scheduled;
    this.scheduled = void 0;
    for (let i = 0; i < waiters.length; i++) waiters[i](exitVoid);
  };
  flushWaiters() {
    const waiters = this.waiters;
    this.waiters = [];
    this.flushScheduled();
    for (let i = 0; i < waiters.length; i++) waiters[i](exitVoid);
  }
  open = /*#__PURE__*/ withFiber$1((fiber) => {
    if (this._isOpen) return succeedFalse;
    this._isOpen = true;
    return this.scheduleUnsafe(fiber);
  });
  release = /*#__PURE__*/ withFiber$1((fiber) =>
    this._isOpen ? succeedFalse : this.scheduleUnsafe(fiber),
  );
  openUnsafe() {
    if (this._isOpen) return false;
    this._isOpen = true;
    this.flushWaiters();
    return true;
  }
  await = /*#__PURE__*/ callback$1((resume) => {
    if (this._isOpen) return resume(void_$2);
    this.waiters.push(resume);
    return sync$2(() => {
      let index = this.waiters.indexOf(resume);
      if (index !== -1) this.waiters.splice(index, 1);
      else if (this.scheduled !== void 0) {
        index = this.scheduled.indexOf(resume);
        if (index !== -1) this.scheduled.splice(index, 1);
      }
    });
  });
  closeUnsafe() {
    if (!this._isOpen) return false;
    this._isOpen = false;
    return true;
  }
  close = /*#__PURE__*/ sync$2(() => this.closeUnsafe());
  whenOpen = (self) => flatMap$2(this.await, () => self);
  isOpen() {
    return this._isOpen;
  }
};
/** @internal */
const makeLatchUnsafe = (open) => new Latch(open ?? false);
/** @internal */
const makeLatch = (open) => sync$2(() => makeLatchUnsafe(open));
/** @internal */
const withTracerEnabled$1 = /*#__PURE__*/ provideService$1(TracerEnabled$1);
const bigint0 = /*#__PURE__*/ BigInt(0);
const NoopSpanProto = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  sampled: false,
  status: {
    _tag: "Ended",
    startTime: bigint0,
    endTime: bigint0,
    exit: exitVoid,
  },
  attributes: /*#__PURE__*/ new Map(),
  links: [],
  kind: "internal",
  attribute() {},
  event() {},
  end() {},
  addLinks() {},
};
/** @internal */
const noopSpan = (options) => Object.assign(Object.create(NoopSpanProto), options);
const filterDisablePropagation = (span) => {
  if (!span) return none();
  return get$1(span.annotations, DisablePropagation)
    ? span._tag === "Span"
      ? filterDisablePropagation(getOrUndefined$2(span.parent))
      : none()
    : some(span);
};
/** @internal */
const makeSpanUnsafe = (fiber, name, options) => {
  const disablePropagation =
    !fiber.cache.tracerEnabled ||
    (options?.annotations && get$1(options.annotations, DisablePropagation));
  const parent =
    options?.parent !== void 0
      ? some(options.parent)
      : options?.root
        ? none()
        : filterDisablePropagation(fiber.cache.span);
  let span;
  if (disablePropagation)
    span = noopSpan({
      name,
      parent,
      annotations: add(options?.annotations ?? empty$2(), DisablePropagation, true),
    });
  else {
    const tracer = fiber.cache.tracer ?? nativeTracer;
    const clock = fiber.getRef(ClockRef);
    const timingEnabled = fiber.getRef(TracerTimingEnabled$1);
    const annotationsFromEnv = fiber.getRef(TracerSpanAnnotations);
    const linksFromEnv = fiber.getRef(TracerSpanLinks);
    const level = options?.level ?? fiber.getRef(CurrentTraceLevel);
    const links =
      options?.links !== void 0
        ? [...linksFromEnv, ...options.links]
        : linksFromEnv.length === 0
          ? []
          : linksFromEnv.slice();
    span = tracer.span({
      name,
      parent,
      annotations: options?.annotations ?? empty$2(),
      links,
      startTime: timingEnabled ? clock.currentTimeNanosUnsafe() : bigint0,
      kind: options?.kind ?? "internal",
      root: options?.root ?? false,
      sampled:
        options?.sampled ??
        (isSome(parent) && parent.value.sampled === false
          ? false
          : !isLogLevelGreaterThan(fiber.getRef(MinimumTraceLevel), level)),
    });
    for (const key in annotationsFromEnv) span.attribute(key, annotationsFromEnv[key]);
    if (options?.attributes !== void 0)
      for (const key in options.attributes) span.attribute(key, options.attributes[key]);
  }
  return span;
};
/** @internal */
const makeSpanScoped$1 = (name, options) =>
  uninterruptible$1(
    withFiber$1((fiber) => {
      const scope = getUnsafe(fiber.context, scopeTag);
      const span = makeSpanUnsafe(fiber, name, options ?? {});
      const clock = fiber.getRef(ClockRef);
      const timingEnabled = fiber.getRef(TracerTimingEnabled$1);
      return as$1(
        scopeAddFinalizerExit(scope, (exit) => endSpan(span, exit, clock, timingEnabled)),
        span,
      );
    }),
  );
const provideSpanStackFrame = (name, stack) => {
  stack = typeof stack === "function" ? stack : constUndefined;
  return updateService(CurrentStackFrame$1, (parent) => ({
    name,
    stack,
    parent,
  }));
};
/** @internal */
const endSpan = (span, exit, clock, timingEnabled) =>
  sync$2(() => {
    if (span.status._tag === "Ended") return;
    span.end(timingEnabled ? clock.currentTimeNanosUnsafe() : bigint0, exit);
  });
/** @internal */
const useSpan$1 = (name, ...args) => {
  const options = args.length === 1 ? void 0 : args[0];
  const evaluate = args[args.length - 1];
  return withFiber$1((fiber) => {
    const span = makeSpanUnsafe(fiber, name, options);
    const clock = fiber.getRef(ClockRef);
    const timingEnabled = fiber.getRef(TracerTimingEnabled$1);
    onExitUnsafe(fiber, (exit) => endSpan(span, exit, clock, timingEnabled));
    return evaluate(span);
  });
};
const provideParentSpan = /*#__PURE__*/ provideService$1(ParentSpan);
/** @internal */
const withParentSpan$1 = function () {
  const dataFirst = isEffect$1(arguments[0]);
  const span = dataFirst ? arguments[1] : arguments[0];
  let options = dataFirst ? arguments[2] : arguments[1];
  let provideStackFrame = identity;
  if (span._tag === "Span") {
    options = addSpanStackTrace(options);
    provideStackFrame = provideSpanStackFrame(span.name, options?.captureStackTrace);
  }
  if (dataFirst) return provideParentSpan(provideStackFrame(arguments[0]), span);
  return (self) => provideParentSpan(provideStackFrame(self), span);
};
/** @internal */
const withSpan$1 = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const traceOptions = addSpanStackTrace(arguments[2]);
  if (dataFirst) {
    const self = arguments[0];
    return useSpan$1(name, arguments[2], (span) => withParentSpan$1(self, span, traceOptions));
  }
  const fnArg = typeof arguments[1] === "function" ? arguments[1] : void 0;
  const options = fnArg ? void 0 : arguments[1];
  return (self, ...args) =>
    useSpan$1(name, fnArg ? fnArg(...args) : options, (span) =>
      withParentSpan$1(self, span, traceOptions),
    );
};
/** @internal */
const annotateSpans$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (effect, ...args) =>
    updateService(effect, TracerSpanAnnotations, (annotations) => {
      const newAnnotations =
        args.length === 1
          ? {
              ...annotations,
              ...args[0],
            }
          : { ...annotations };
      if (args.length === 1) return newAnnotations;
      else assignProperty(newAnnotations, args[0], args[1]);
      return newAnnotations;
    }),
);
/** @internal */
const annotateCurrentSpan$1 = (...args) =>
  withFiber$1((fiber) => {
    const span = fiber.currentSpanLocal;
    if (span) {
      if (args.length === 1)
        for (const [key, value] of Object.entries(args[0])) span.attribute(key, value);
      else span.attribute(args[0], args[1]);
    }
    return void_$2;
  });
/** @internal */
const currentSpan$1 = /*#__PURE__*/ withFiber$1((fiber) => {
  const span = fiber.currentSpanLocal;
  return span ? succeed$4(span) : fail$4(new NoSuchElementError$1());
});
/** @internal */
const currentParentSpan$1 = /*#__PURE__*/ serviceOptional(ParentSpan);
/** @internal */
const ClockRef = /*#__PURE__*/ Reference("effect/Clock", { defaultValue: () => new ClockImpl() });
const MAX_TIMER_MILLIS = 2 ** 31 - 1;
var ClockImpl = class {
  currentTimeMillisUnsafe() {
    return Date.now();
  }
  currentTimeMillis = /*#__PURE__*/ sync$2(() => this.currentTimeMillisUnsafe());
  currentTimeNanosUnsafe() {
    return wallTimeNanos();
  }
  currentTimeNanos = /*#__PURE__*/ sync$2(() => this.currentTimeNanosUnsafe());
  monotonicTimeNanosUnsafe() {
    return monotonicNowNanos();
  }
  monotonicTimeNanos = /*#__PURE__*/ sync$2(() => this.monotonicTimeNanosUnsafe());
  sleep(duration) {
    return this.sleepMillis(toMillis(duration));
  }
  sleepMillis(millis) {
    if (millis <= 0) return yieldNow$1;
    else if (!Number.isFinite(millis)) return never$1;
    return callback$1((resume) => {
      const continuation =
        millis > MAX_TIMER_MILLIS ? this.sleepMillis(millis - MAX_TIMER_MILLIS) : void_$2;
      const handle = setTimeout(() => resume(continuation), Math.min(millis, MAX_TIMER_MILLIS));
      return sync$2(() => clearTimeout(handle));
    });
  }
};
const nanosPerMilli = /*#__PURE__*/ BigInt(1e6);
const monotonicNowNanos = /*#__PURE__*/ (function () {
  const processHrtime = globalThis.process?.hrtime;
  if (typeof processHrtime?.bigint === "function") return () => processHrtime.bigint();
  if (typeof performance !== "undefined" && typeof performance.now === "function")
    return () => BigInt(Math.round(performance.now() * 1e6));
  let previous = /*#__PURE__*/ BigInt(0);
  return () => {
    const current = BigInt(Date.now()) * nanosPerMilli;
    if (current > previous) previous = current;
    return previous;
  };
})();
const wallTimeNanos = /*#__PURE__*/ (function () {
  const reanchorThresholdNanos = /*#__PURE__*/ BigInt(1e9);
  let origin;
  return () => {
    const monotonic = monotonicNowNanos();
    const wall = BigInt(Date.now()) * nanosPerMilli;
    if (origin === void 0) origin = wall - monotonic;
    else {
      const projected = origin + monotonic;
      if ((wall > projected ? wall - projected : projected - wall) > reanchorThresholdNanos)
        origin = wall - monotonic;
    }
    return origin + monotonic;
  };
})();
/** @internal */
const clockWith$1 = (f) => withFiber$1((fiber) => f(fiber.getRef(ClockRef)));
/** @internal */
const sleep$1 = (duration) => clockWith$1((clock) => clock.sleep(fromInputUnsafe(duration)));
/** @internal */
const currentTimeMillis = /*#__PURE__*/ clockWith$1((clock) => clock.currentTimeMillis);
/** @internal */
const currentTimeNanos = /*#__PURE__*/ clockWith$1((clock) => clock.currentTimeNanos);
/** @internal */
const monotonicTimeNanos = /*#__PURE__*/ clockWith$1((clock) => clock.monotonicTimeNanos);
/** @internal */
const TimeoutErrorTypeId = "~effect/Cause/TimeoutError";
/** @internal */
const isTimeoutError$1 = (u) => hasProperty(u, TimeoutErrorTypeId);
/** @internal */
var TimeoutError$1 = class extends /*#__PURE__*/ TaggedError("TimeoutError") {
  [TimeoutErrorTypeId] = TimeoutErrorTypeId;
  constructor(message) {
    super({ message });
  }
};
/** @internal */
const IllegalArgumentErrorTypeId = "~effect/Cause/IllegalArgumentError";
/** @internal */
var IllegalArgumentError$1 = class extends /*#__PURE__*/ TaggedError("IllegalArgumentError") {
  [IllegalArgumentErrorTypeId] = IllegalArgumentErrorTypeId;
  constructor(message) {
    super({ message });
  }
};
/** @internal */
const ExceededCapacityErrorTypeId = "~effect/Cause/ExceededCapacityError";
/** @internal */
var ExceededCapacityError$1 = class extends /*#__PURE__*/ TaggedError("ExceededCapacityError") {
  [ExceededCapacityErrorTypeId] = ExceededCapacityErrorTypeId;
  constructor(message) {
    super({ message });
  }
};
/** @internal */
const AsyncFiberErrorTypeId = "~effect/Cause/AsyncFiberError";
/** @internal */
var AsyncFiberError = class extends /*#__PURE__*/ TaggedError("AsyncFiberError") {
  [AsyncFiberErrorTypeId] = AsyncFiberErrorTypeId;
  constructor(fiber) {
    super({
      message: "An asynchronous Effect was executed with Effect.runSync",
      fiber,
    });
  }
};
/** @internal */
const UnknownErrorTypeId = "~effect/Cause/UnknownError";
/** @internal */
var UnknownError$1 = class extends /*#__PURE__*/ TaggedError("UnknownError") {
  [UnknownErrorTypeId] = UnknownErrorTypeId;
  constructor(cause, message) {
    super({
      message,
      cause,
    });
  }
};
/** @internal */
const ConsoleRef = /*#__PURE__*/ Reference("effect/Console", {
  defaultValue: () => globalThis.console,
});
/** @internal */
const logLevelToOrder = (level) => {
  switch (level) {
    case "All":
      return Number.MIN_SAFE_INTEGER;
    case "Fatal":
      return 5e4;
    case "Error":
      return 4e4;
    case "Warn":
      return 3e4;
    case "Info":
      return 2e4;
    case "Debug":
      return 1e4;
    case "Trace":
      return 0;
    case "None":
      return Number.MAX_SAFE_INTEGER;
  }
};
/** @internal */
const LogLevelOrder = /*#__PURE__*/ mapInput(Number$1, logLevelToOrder);
/** @internal */
const isLogLevelGreaterThan = /*#__PURE__*/ isGreaterThan(LogLevelOrder);
/** @internal */
const CurrentLoggers = /*#__PURE__*/ Reference("effect/Logger/CurrentLoggers", {
  defaultValue: () => /* @__PURE__ */ new Set([defaultLogger, tracerLogger]),
});
/** @internal */
const LogToStderr = /*#__PURE__*/ Reference("effect/Logger/LogToStderr", {
  defaultValue: constFalse,
});
/** @internal */
const annotateLogsScoped$1 = function () {
  const entries =
    typeof arguments[0] === "string"
      ? [[arguments[0], arguments[1]]]
      : Object.entries(arguments[0]);
  return uninterruptible$1(
    withFiber$1((fiber) => {
      const prev = fiber.getRef(CurrentLogAnnotations$1);
      const next = { ...prev };
      for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i];
        assignProperty(next, key, value);
      }
      fiber.setContext(add(fiber.context, CurrentLogAnnotations$1, next));
      return scopeAddFinalizerExit(getUnsafe(fiber.context, scopeTag), (_) => {
        const current = fiber.getRef(CurrentLogAnnotations$1);
        const next = { ...current };
        for (let i = 0; i < entries.length; i++) {
          const [key, value] = entries[i];
          if (current[key] !== value && !Object.is(current[key], value)) continue;
          if (Object.hasOwn(prev, key)) assignProperty(next, key, prev[key]);
          else delete next[key];
        }
        fiber.setContext(add(fiber.context, CurrentLogAnnotations$1, next));
        return void_$2;
      });
    }),
  );
};
const LoggerProto = {
  ["~effect/Logger"]: {
    _Message: identity,
    _Output: identity,
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/** @internal */
const loggerMake = (log) => {
  const self = Object.create(LoggerProto);
  self.log = log;
  return self;
};
/**
 * Sanitize a given string by replacing spaces, equal signs, and double quotes
 * with underscores.
 *
 * @internal
 */
const formatLabel = (key) => key.replace(/[\s="]/g, "_");
/**
 * Formats a log span into a `<label>=<value>ms` string.
 *
 * @internal
 */
const formatLogSpan = (self, now) => {
  return `${formatLabel(self[0])}=${now - self[1]}ms`;
};
/** @internal */
const structuredMessage = (u) => {
  switch (typeof u) {
    case "function":
    case "symbol":
      return String(u);
    default:
      return toJson(u);
  }
};
/** @internal */
const logWithLevel$1 =
  (level) =>
  (...message) => {
    let cause = void 0;
    for (let i = 0, len = message.length; i < len; i++) {
      const msg = message[i];
      if (isCause$1(msg)) {
        if (cause) message.splice(i, 1);
        else message = message.slice(0, i).concat(message.slice(i + 1));
        cause = cause ? causeFromReasons(cause.reasons.concat(msg.reasons)) : msg;
        i--;
      }
    }
    if (cause === void 0) cause = causeEmpty;
    return withFiber$1((fiber) => {
      const logLevel = level ?? fiber.cache.logLevel;
      if (isLogLevelGreaterThan(fiber.cache.minimumLogLevel, logLevel)) return void_$2;
      const clock = fiber.getRef(ClockRef);
      const loggers = fiber.getRef(CurrentLoggers);
      if (loggers.size > 0) {
        const date = new Date(clock.currentTimeMillisUnsafe());
        for (const logger of loggers)
          logger.log({
            cause,
            fiber,
            date,
            logLevel,
            message,
          });
      }
      return void_$2;
    });
  };
const withColor = (text, ...colors) => {
  let out = "";
  for (let i = 0; i < colors.length; i++) out += `\x1b[${colors[i]}m`;
  return out + text + "\x1B[0m";
};
const withColorNoop = (text, ..._colors) => text;
const colors = {
  bold: "1",
  red: "31",
  green: "32",
  yellow: "33",
  blue: "34",
  cyan: "36",
  white: "37",
  gray: "90",
  black: "30",
  bgBrightRed: "101",
};
const logLevelColors = {
  None: [],
  All: [],
  Trace: [colors.gray],
  Debug: [colors.blue],
  Info: [colors.green],
  Warn: [colors.yellow],
  Error: [colors.red],
  Fatal: [colors.bgBrightRed, colors.black],
};
const logLevelStyle = {
  None: "",
  All: "",
  Trace: "color:gray",
  Debug: "color:blue",
  Info: "color:green",
  Warn: "color:orange",
  Error: "color:red",
  Fatal: "background-color:red;color:white",
};
const defaultDateFormat = (date) =>
  `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
/** @internal */
const consolePretty = (options) => {
  const process = globalThis.process;
  const hasProcessStdout = typeof process?.stdout === "object" && process.stdout !== null;
  const isDeno = "Deno" in globalThis;
  const mode = options?.mode ?? "auto";
  return (mode === "auto" ? hasProcessStdout || isDeno : mode === "tty")
    ? prettyLoggerTty(options)
    : prettyLoggerBrowser(options);
};
/** @internal */
const prettyLoggerTty = (options) => {
  const formatDate = options?.formatDate ?? defaultDateFormat;
  const process = globalThis.process;
  const processStdoutIsTTY =
    typeof process?.stdout === "object" && process.stdout !== null && process.stdout.isTTY === true;
  const color = (typeof options?.colors === "boolean" ? options.colors : processStdoutIsTTY)
    ? withColor
    : withColorNoop;
  const processIsBun = process?.isBun === true;
  return loggerMake(({ cause, date, fiber, logLevel, message: message_ }) => {
    const console = fiber.getRef(ConsoleRef);
    const log = fiber.getRef(LogToStderr) ? console.error : console.log;
    const message = Array.isArray(message_) ? message_.slice() : [message_];
    let firstLine =
      color(`[${formatDate(date)}]`, colors.white) +
      ` ${color(logLevel.toUpperCase(), ...logLevelColors[logLevel])} (#${fiber.id})`;
    const now = date.getTime();
    const spans = fiber.getRef(CurrentLogSpans$1);
    for (const span of spans) firstLine += " " + formatLogSpan(span, now);
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += " " + color(firstMaybeString, colors.bold, colors.cyan);
        messageIndex++;
      }
    }
    log(firstLine);
    if (!processIsBun) console.group();
    if (cause.reasons.length > 0) log(causePretty(cause));
    if (messageIndex < message.length)
      for (; messageIndex < message.length; messageIndex++) log(redact(message[messageIndex]));
    const annotations = fiber.getRef(CurrentLogAnnotations$1);
    for (const [key, value] of Object.entries(annotations))
      log(color(`${key}:`, colors.bold, colors.white), redact(value));
    if (!processIsBun) console.groupEnd();
  });
};
/** @internal */
const prettyLoggerBrowser = (options) => {
  const showColors = options?.colors !== false;
  const color = showColors ? "%c" : "";
  const formatDate = options?.formatDate ?? defaultDateFormat;
  return loggerMake(({ cause, date, fiber, logLevel, message: message_ }) => {
    const console = fiber.getRef(ConsoleRef);
    const message = Array.isArray(message_) ? message_.slice() : [message_];
    let firstLine = `${color}[${formatDate(date)}]`;
    const firstParams = [];
    if (showColors) firstParams.push("color:gray");
    firstLine += ` ${color}${logLevel.toUpperCase()}${color} (#${fiber.id})`;
    if (showColors) firstParams.push(logLevelStyle[logLevel], "");
    const now = date.getTime();
    const spans = fiber.getRef(CurrentLogSpans$1);
    for (const span of spans) firstLine += " " + formatLogSpan(span, now);
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += ` ${color}${firstMaybeString}`;
        if (showColors) firstParams.push("color:deepskyblue");
        messageIndex++;
      }
    }
    console.groupCollapsed(firstLine, ...firstParams);
    if (cause.reasons.length > 0) console.error(causePretty(cause));
    if (messageIndex < message.length)
      for (; messageIndex < message.length; messageIndex++)
        console.log(redact(message[messageIndex]));
    const annotations = fiber.getRef(CurrentLogAnnotations$1);
    for (const [key, value] of Object.entries(annotations)) {
      const redacted = redact(value);
      if (showColors) console.log(`%c${key}:`, "color:gray", redacted);
      else console.log(`${key}:`, redacted);
    }
    console.groupEnd();
  });
};
/** @internal */
const defaultLogger = /*#__PURE__*/ loggerMake(({ cause, date, fiber, logLevel, message }) => {
  const message_ = Array.isArray(message) ? message.slice() : [message];
  if (cause.reasons.length > 0) message_.push(causePretty(cause));
  const now = date.getTime();
  const spans = fiber.getRef(CurrentLogSpans$1);
  let spanString = "";
  for (const span of spans) spanString += ` ${formatLogSpan(span, now)}`;
  const annotations = fiber.getRef(CurrentLogAnnotations$1);
  if (Object.keys(annotations).length > 0) message_.push(annotations);
  const console = fiber.getRef(ConsoleRef);
  (fiber.getRef(LogToStderr) ? console.error : console.log)(
    `[${defaultDateFormat(date)}] ${logLevel.toUpperCase()} (#${fiber.id})${spanString}:`,
    ...message_,
  );
});
/** @internal */
const tracerLogger = /*#__PURE__*/ loggerMake(({ cause, fiber, logLevel, message }) => {
  const clock = fiber.getRef(ClockRef);
  const annotations = fiber.getRef(CurrentLogAnnotations$1);
  const span = fiber.cache.span;
  if (span === void 0 || span._tag === "ExternalSpan") return;
  const attributes = {};
  for (const [key, value] of Object.entries(annotations)) assignProperty(attributes, key, value);
  attributes["effect.fiberId"] = fiber.id;
  attributes["effect.logLevel"] = logLevel.toUpperCase();
  if (cause.reasons.length > 0) attributes["effect.cause"] = causePretty(cause);
  span.event(
    toStringUnknown(Array.isArray(message) && message.length === 1 ? message[0] : message),
    clock.currentTimeNanosUnsafe(),
    attributes,
  );
});
/** @internal */
function interruptChildrenPatch() {
  fiberMiddleware.interruptChildren ??= fiberInterruptChildren;
}
/** @internal */
const undefined_$1 = /*#__PURE__*/ succeed$4(void 0);
/** @internal */
const withErrorReporting$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, options) =>
    onError$1(self, (cause) =>
      withFiber$1((fiber) => {
        reportCauseUnsafe(fiber, cause, options?.defectsOnly);
        return void_$2;
      }),
    ),
);
/** @internal */
const reportCauseUnsafe = (fiber, cause, defectsOnly) => {
  const reporters = fiber.getRef(CurrentErrorReporters);
  if (reporters.size === 0) return;
  if (defectsOnly && !hasDies$1(cause)) return;
  const opts = {
    cause,
    fiber,
    timestamp: fiber.getRef(ClockRef).currentTimeNanosUnsafe(),
  };
  reporters.forEach((reporter) => reporter.report(opts));
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Cause.js
/**
 * Records the full reason an `Effect` failed.
 *
 * A `Cause<E>` can contain typed failures, unexpected defects, interruptions,
 * and annotations. Keeping those details together lets code inspect or format
 * failures without first collapsing them to a single error value. This module
 * includes the `Cause` and `Reason` data types, helpers for building and
 * checking causes, and small error types used by several Effect APIs.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Checks whether an arbitrary value is a `Cause`.
 *
 * **Example** (Checking the runtime type)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.isCause(Cause.fail("error")) // => true
 * Cause.isCause("not a cause") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isCause = isCause$1;
/**
 * Checks whether an arbitrary value is a `Reason` (`Fail`, `Die`, or `Interrupt`).
 *
 * **Example** (Checking the runtime type)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const reason = Cause.fail("error").reasons[0]
 * Cause.isReason(reason) // => true
 * Cause.isReason("not a reason") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isReason = isCauseReason;
/**
 * Narrows a `Reason` to `Fail`.
 *
 * **When to use**
 *
 * Use as a predicate for `Array.filter` to pick out typed `Fail` reasons when
 * iterating over `cause.reasons`.
 *
 * **Example** (Filtering fail reasons)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const cause = Cause.fail("error")
 * const fails = cause.reasons.filter(Cause.isFailReason)
 * fails[0].error // => "error"
 * ```
 *
 * @see {@link isDieReason} — narrow to `Die`
 * @see {@link isInterruptReason} — narrow to `Interrupt`
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isFailReason = isFailReason$1;
/**
 * Narrows a `Reason` to `Die`.
 *
 * **When to use**
 *
 * Use as a predicate for `Array.filter` to pick out `Die` (defect) reasons when
 * iterating over `cause.reasons`.
 *
 * **Example** (Filtering die reasons)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const cause = Cause.die("defect")
 * const dies = cause.reasons.filter(Cause.isDieReason)
 * dies[0].defect // => "defect"
 * ```
 *
 * @see {@link isFailReason} — narrow to `Fail`
 * @see {@link isInterruptReason} — narrow to `Interrupt`
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isDieReason = isDieReason$1;
/**
 * Narrows a `Reason` to `Interrupt`.
 *
 * **When to use**
 *
 * Use as a predicate for `Array.filter` to pick out `Interrupt` reasons when
 * iterating over `cause.reasons`.
 *
 * **Example** (Filtering interrupt reasons)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const cause = Cause.interrupt(123)
 * const interrupts = cause.reasons.filter(Cause.isInterruptReason)
 * interrupts[0].fiberId // => 123
 * ```
 *
 * @see {@link isFailReason} — narrow to `Fail`
 * @see {@link isDieReason} — narrow to `Die`
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isInterruptReason = isInterruptReason$1;
/**
 * Creates a `Cause` from an array of `Reason` values.
 *
 * **When to use**
 *
 * Use when you already have individual reasons (e.g. from filtering or
 * transforming another cause's `reasons` array) and need to wrap them back
 * into a `Cause`.
 *
 * **Details**
 *
 * - Returns a new `Cause`.
 * - An empty array produces a cause equivalent to `empty`.
 *
 * **Gotchas**
 *
 * The `reasons` array is stored as provided. Treat the array as immutable
 * after passing it to this function.
 *
 * **Example** (Building a cause from reasons)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const reasons = [
 *   Cause.makeFailReason("err1"),
 *   Cause.makeFailReason("err2")
 * ]
 * Cause.fromReasons(reasons) // => Cause.combine(Cause.fail("err1"), Cause.fail("err2"))
 * ```
 *
 * @see {@link combine} — merge two existing causes
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromReasons = causeFromReasons;
/**
 * Creates a `Cause` containing a single `Fail` reason with the
 * given typed error.
 *
 * **When to use**
 *
 * Use to construct a cause from an expected typed error.
 *
 * **Example** (Creating a fail cause)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.fail("Something went wrong") // => Cause.fromReasons([Cause.makeFailReason("Something went wrong")])
 * ```
 *
 * @see {@link die} — for untyped defects
 * @see {@link interrupt} — for fiber interruptions
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fail$3 = causeFail;
/**
 * Creates a `Cause` containing a single `Die` reason with the
 * given defect.
 *
 * **When to use**
 *
 * Use to construct a cause from an untyped defect or unexpected thrown value.
 *
 * **Example** (Creating a die cause)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.die("Unexpected") // => Cause.fromReasons([Cause.makeDieReason("Unexpected")])
 * ```
 *
 * @see {@link fail} — for typed errors
 * @see {@link interrupt} — for fiber interruptions
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const die$3 = causeDie;
/**
 * Creates a `Cause` containing a single `Interrupt` reason,
 * optionally carrying the interrupting fiber's ID.
 *
 * **Example** (Creating an interrupt cause)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.interrupt(123) // => Cause.fromReasons([Cause.makeInterruptReason(123)])
 * ```
 *
 * @see {@link fail} — for typed errors
 * @see {@link die} — for untyped defects
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const interrupt$2 = causeInterrupt;
/**
 * Creates a standalone `Fail` reason (not wrapped in a `Cause`).
 *
 * **When to use**
 *
 * Use when constructing a standalone typed failure reason for
 * {@link fromReasons} or direct comparison.
 *
 * **Example** (Creating a Fail reason)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.makeFailReason("error") // => Cause.fail("error").reasons[0]
 * ```
 *
 * @see {@link makeDieReason} — create a `Die` reason
 * @see {@link makeInterruptReason} — create an `Interrupt` reason
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeFailReason = (error) => new Fail(error);
/**
 * Creates a standalone `Die` reason (not wrapped in a `Cause`).
 *
 * **When to use**
 *
 * Use when constructing a standalone defect reason for {@link fromReasons} or
 * direct comparison.
 *
 * **Example** (Creating a Die reason)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.makeDieReason("bug") // => Cause.die("bug").reasons[0]
 * ```
 *
 * @see {@link makeFailReason} — create a `Fail` reason
 * @see {@link makeInterruptReason} — create an `Interrupt` reason
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeDieReason = (defect) => new Die(defect);
/**
 * Creates a standalone `Interrupt` reason (not wrapped in a `Cause`),
 * optionally carrying the interrupting fiber's ID.
 *
 * **When to use**
 *
 * Use when constructing a standalone interrupt reason for {@link fromReasons}
 * or direct comparison.
 *
 * **Example** (Creating an Interrupt reason)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.makeInterruptReason(42) // => Cause.interrupt(42).reasons[0]
 * ```
 *
 * @see {@link makeFailReason} — create a `Fail` reason
 * @see {@link makeDieReason} — create a `Die` reason
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeInterruptReason = makeInterruptReason$1;
/**
 * Returns `true` if every reason in the cause is an `Interrupt` (and
 * there is at least one reason).
 *
 * **When to use**
 *
 * Use when you need to detect failures caused only by interruption.
 *
 * **Example** (Checking interrupt-only causes)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.hasInterruptsOnly(Cause.interrupt(123)) // => true
 * Cause.hasInterruptsOnly(Cause.fail("error")) // => false
 * Cause.hasInterruptsOnly(Cause.empty) // => false
 * ```
 *
 * @see {@link hasInterrupts} — `true` if the cause contains *any* interrupts
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const hasInterruptsOnly = hasInterruptsOnly$1;
/**
 * Transforms the typed error values inside a `Cause` using the
 * provided function. Only `Fail` reasons are affected; `Die` and `Interrupt`
 * reasons pass through unchanged.
 *
 * **When to use**
 *
 * Use to transform expected typed failures while preserving defects and
 * interruptions unchanged.
 *
 * **Details**
 *
 * If at least one `Fail` reason exists, this returns a new `Cause`
 * containing the mapped failures. If the cause has no `Fail` reasons, the
 * original cause is returned unchanged.
 *
 * **Example** (Mapping errors to uppercase)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const cause = Cause.fail("error")
 * const mapped = Cause.map(cause, (e) => e.toUpperCase())
 * const reason = mapped.reasons[0]
 * if (Cause.isFailReason(reason)) {
 *   reason.error // => "ERROR"
 * }
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map$1 = causeMap;
/**
 * Merges two causes into a single cause whose `reasons` array is the union
 * of both inputs (de-duplicated by value equality).
 *
 * **When to use**
 *
 * Use to merge independent causes into one structured failure value.
 *
 * **Details**
 *
 * - Combining with `empty` returns the other cause unchanged.
 * - If the result is structurally equal to `self`, `self` is returned
 *   (referential shortcut).
 *
 * **Example** (Combining two causes)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const combined = Cause.combine(Cause.fail("error1"), Cause.fail("error2"))
 * combined // => Cause.fromReasons([Cause.makeFailReason("error1"), Cause.makeFailReason("error2")])
 * ```
 *
 * @see {@link fromReasons} — build a cause from an array of reasons
 * @see {@link empty} for the identity cause used when combining
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const combine = causeCombine;
/**
 * Collapses a `Cause` into a single `unknown` value, picking the "most
 * important" failure in this order:
 *
 * **When to use**
 *
 * Use to collapse a structured cause to the single value that synchronous and
 * promise runners would throw.
 *
 * **Details**
 *
 * 1. First `Fail` error (the `E` value)
 * 2. First `Die` defect
 * 3. A generic `Error("All fibers interrupted without error")` for interrupt-only causes
 * 4. A generic `Error("Empty cause")` for `empty`
 *
 * This is the function used by `Effect.runPromise` and `Effect.runSync` to
 * decide what to throw.
 *
 * **Gotchas**
 *
 * This function is lossy. Use {@link prettyErrors} or iterate `cause.reasons`
 * when you need all failures.
 *
 * **Example** (Squashing a cause)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.squash(Cause.fail("error")) // => "error"
 * Cause.squash(Cause.die("defect")) // => "defect"
 * ```
 *
 * @see {@link prettyErrors} — non-lossy conversion to `Array<Error>`
 * @see {@link pretty} — human-readable string rendering
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const squash = causeSquash;
/**
 * Returns `true` if the cause contains at least one `Fail` reason.
 *
 * **When to use**
 *
 * Use to check whether a cause includes typed failures before extracting,
 * mapping, or rendering them.
 *
 * **Example** (Checking for typed errors)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.hasFails(Cause.fail("error")) // => true
 * Cause.hasFails(Cause.die("defect")) // => false
 * ```
 *
 * @see {@link hasDies} — check for defects
 * @see {@link hasInterrupts} — check for interruptions
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const hasFails = hasFails$1;
/**
 * Returns a `Result` whose success value is the first `Fail` reason in
 * the cause, including its annotations. If the cause has no `Fail` reason, the
 * failure value is the original cause narrowed to `Cause<never>`, because it
 * contains no typed error reasons.
 *
 * **When to use**
 *
 * Use when you need the full `Fail` reason from a `Cause`, including
 * annotations.
 *
 * **Example** (Extracting the first Fail reason)
 *
 * ```ts import.meta.vitest
 * import { Cause, Result } from "effect"
 *
 * Cause.findFail(Cause.fail("error")) // => Result.succeed(Cause.makeFailReason("error"))
 * ```
 *
 * @see {@link findError} — extract the unwrapped `E` value
 * @see {@link findDie} — extract the first `Die` reason
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const findFail = findFail$1;
/**
 * Returns a `Result` whose success value is the first typed error value `E`
 * from a `Fail` reason in the cause. If the cause has no `Fail` reason,
 * the failure value is the original cause narrowed to `Cause<never>`, because
 * it contains no typed error reasons.
 *
 * **When to use**
 *
 * Use when you need the first typed error value from a `Cause` as a `Result`
 * that preserves the original cause when no match is found.
 *
 * **Example** (Extracting the first error value)
 *
 * ```ts import.meta.vitest
 * import { Cause, Result } from "effect"
 *
 * Cause.findError(Cause.fail("error")) // => Result.succeed("error")
 * ```
 *
 * @see {@link findFail} — extract the full `Fail` reason
 * @see {@link findErrorOption} — `Option`-based variant
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const findError = findError$1;
/**
 * Returns the first typed error value `E` from a cause wrapped in
 * `Option.some`, or `Option.none` if no `Fail` reason exists.
 *
 * **When to use**
 *
 * Use when you need the first typed error value from a `Cause` as an `Option`,
 * discarding the original cause.
 *
 * **Example** (Extracting an error as Option)
 *
 * ```ts import.meta.vitest
 * import { Cause, Option } from "effect"
 *
 * Cause.findErrorOption(Cause.fail("error")) // => Option.some("error")
 * Cause.findErrorOption(Cause.die("defect")) // => Option.none()
 * ```
 *
 * @see {@link findError} — `Result`-based variant
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const findErrorOption$1 = findErrorOption$2;
/**
 * Returns `true` if the cause contains at least one `Die` reason.
 *
 * **When to use**
 *
 * Use to check whether a cause includes defects before extracting or rendering
 * them.
 *
 * **Example** (Checking for defects)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.hasDies(Cause.die("defect")) // => true
 * Cause.hasDies(Cause.fail("error")) // => false
 * ```
 *
 * @see {@link hasFails} — check for typed errors
 * @see {@link hasInterrupts} — check for interruptions
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const hasDies = hasDies$1;
/**
 * Returns `true` if the cause contains at least one `Interrupt` reason.
 *
 * **Example** (Checking for interruptions)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.hasInterrupts(Cause.interrupt(123)) // => true
 * Cause.hasInterrupts(Cause.fail("error")) // => false
 * ```
 *
 * @see {@link hasInterruptsOnly} — `true` only when *all* reasons are interrupts
 * @see {@link hasFails} — check for typed errors
 * @see {@link hasDies} — check for defects
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const hasInterrupts$1 = hasInterrupts$2;
/**
 * Collects the defined fiber IDs from all `Interrupt` reasons in the
 * cause into a `ReadonlySet`. Interrupt reasons without a `fiberId` are
 * ignored. Returns an empty set when the cause has no interrupting fiber IDs.
 *
 * **When to use**
 *
 * Use when you need interrupting fiber IDs as a set, with absence represented
 * as an empty set.
 *
 * **Example** (Collecting interruptors)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * const cause = Cause.combine(
 *   Cause.interrupt(1),
 *   Cause.interrupt(2)
 * )
 *
 * Cause.interruptors(cause) // => new Set([1, 2])
 * ```
 *
 * @see {@link filterInterruptors} — `Result`-based variant
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const interruptors = causeInterruptors;
/**
 * Returns a `Result` whose success value is the set of defined fiber IDs from
 * the cause's `Interrupt` reasons. If the cause has no `Interrupt`
 * reason, the failure value is the original cause.
 *
 * **When to use**
 *
 * Use when you need absence of interrupt reasons to fail with the original
 * cause.
 *
 * **Gotchas**
 *
 * Interrupt reasons without a `fiberId` still count as interrupts, so the
 * function succeeds with an empty `Set` when every interrupt reason has an
 * undefined fiber ID.
 *
 * **Example** (Extracting interruptors with Result)
 *
 * ```ts import.meta.vitest
 * import { Cause, Result } from "effect"
 *
 * Cause.filterInterruptors(Cause.interrupt(1)) // => Result.succeed(new Set([1]))
 * ```
 *
 * @see {@link interruptors} — always-succeeding variant
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterInterruptors = causeFilterInterruptors;
/**
 * Converts a `Cause` into an `Array<Error>` suitable for logging or
 * rethrowing.
 *
 * **When to use**
 *
 * Use to convert every renderable failure in a cause into individual `Error`
 * values before logging or rethrowing.
 *
 * **Details**
 *
 * Each `Fail` and `Die` reason is converted into a standard
 * `Error`:
 *
 * - **Objects / Error instances** — `message`, `name`, `stack`, and `cause`
 *   are preserved. Extra enumerable properties are copied. Stack traces are
 *   cleaned up and enriched with span annotations when available.
 * - **Strings** — used directly as the `Error` message.
 * - **Other primitives** (`null`, `undefined`, numbers, …) — wrapped in an
 *   `Error` with message `"Unknown error: <value>"`.
 *
 * `Interrupt` reasons are collected separately. If the cause contains
 * **only** interrupts (no `Fail` or `Die`), a single `InterruptError` is
 * returned whose `cause` lists the interrupting fiber IDs.
 *
 * An empty cause returns an empty array.
 *
 * **Example** (Converting a cause to errors)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.prettyErrors(Cause.fail(new Error("boom")))[0].message // => "boom"
 * ```
 *
 * @see {@link pretty} — renders the cause as a single string
 * @see {@link squash} — lossy collapse to a single thrown value
 *
 * @stability stable
 * @category formatting
 * @since 3.2.0
 */
const prettyErrors = causePrettyErrors;
/**
 * Formats a `Cause` as a human-readable string for logging or debugging.
 *
 * **When to use**
 *
 * Use to render a whole cause as one human-readable string for logs or
 * diagnostics.
 *
 * **Details**
 *
 * Delegates to {@link prettyErrors} to convert each reason to an `Error`,
 * then joins their stack traces with newlines. Nested `Error.cause` chains
 * are rendered inline with indentation:
 *
 * ```text
 * ErrorName: message
 *     at ...
 *     at ... {
 *   [cause]: NestedError: message
 *       at ...
 * }
 * ```
 *
 * Span annotations are appended to the relevant stack frames when available.
 *
 * **Gotchas**
 *
 * Rendering an empty cause produces an empty string because there are no
 * errors to render.
 *
 * **Example** (Rendering a cause)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.pretty(Cause.fail("something went wrong")).includes("something went wrong") // => true
 * ```
 *
 * @see {@link prettyErrors} — get the individual `Error` instances
 *
 * @stability stable
 * @category formatting
 * @since 2.0.0
 */
const pretty = causePretty;
/**
 * Checks whether an arbitrary value is a `NoSuchElementError`.
 *
 * **Example** (Checking the runtime type)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.isNoSuchElementError(new Cause.NoSuchElementError()) // => true
 * Cause.isNoSuchElementError("nope") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isNoSuchElementError = isNoSuchElementError$1;
/**
 * Constructs a `NoSuchElementError` with an optional message.
 *
 * **When to use**
 *
 * Use to create the error value for APIs that intentionally fail when an
 * expected element is absent.
 *
 * **Example** (Creating a NoSuchElementError)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * new Cause.NoSuchElementError("Element not found").message // => "Element not found"
 * ```
 *
 * @see {@link isNoSuchElementError} for checking unknown values
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const NoSuchElementError = NoSuchElementError$1;
/**
 * Checks whether an arbitrary value is a `Done` signal.
 *
 * **Example** (Checking the runtime type)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.isDone(Cause.Done()) // => true
 * Cause.isDone("not done") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isDone$1 = isDone$2;
/**
 * Creates a `Done` signal with an optional value.
 *
 * **When to use**
 *
 * Use when you need to construct a low-level pull completion signal directly.
 *
 * @see {@link done} — create a failing `Effect` with `Done`
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Done = Done$1;
/**
 * Creates an Effect that fails with a `Done` error. Shorthand for
 * `Effect.fail(Cause.Done(value))`.
 *
 * **When to use**
 *
 * Use when you model stream or queue completion through the error channel.
 *
 * **Example** (Failing with Done)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit } from "effect"
 *
 * const program = Cause.done("finished")
 *
 * await Effect.runPromiseExit(program) // => Exit.fail(Cause.Done("finished"))
 * ```
 *
 * @see {@link Done} — create the signal value without an Effect
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const done$1 = done$2;
/**
 * Checks whether an arbitrary value is a `TimeoutError`.
 *
 * **Example** (Checking the runtime type)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * Cause.isTimeoutError(new Cause.TimeoutError()) // => true
 * Cause.isTimeoutError("nope") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isTimeoutError = isTimeoutError$1;
/**
 * Constructs a `TimeoutError` with an optional message.
 *
 * **Example** (Creating a TimeoutError)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * new Cause.TimeoutError("Operation timed out").message // => "Operation timed out"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const TimeoutError = TimeoutError$1;
/**
 * Constructs an `IllegalArgumentError` with an optional message.
 *
 * **Example** (Creating an IllegalArgumentError)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * new Cause.IllegalArgumentError("Invalid argument").message // => "Invalid argument"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const IllegalArgumentError = IllegalArgumentError$1;
/**
 * Constructs an `ExceededCapacityError` with an optional message.
 *
 * **When to use**
 *
 * Use to create the error value for bounded-resource capacity failures.
 *
 * **Example** (Creating an ExceededCapacityError)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * new Cause.ExceededCapacityError("Queue full").message // => "Queue full"
 * ```
 *
 * @see {@link isExceededCapacityError} for checking unknown values
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const ExceededCapacityError = ExceededCapacityError$1;
/**
 * Constructs an `UnknownError`. The first argument is the original
 * cause (stored in `Error.cause`); the second is an optional human-readable
 * message.
 *
 * **Example** (Creating an UnknownError)
 *
 * ```ts import.meta.vitest
 * import { Cause } from "effect"
 *
 * new Cause.UnknownError({ raw: true }, "Unexpected value").message // => "Unexpected value"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const UnknownError = UnknownError$1;
/**
 * Attaches metadata to every reason in a `Cause`.
 *
 * **When to use**
 *
 * Use to attach diagnostic metadata to every reason in a cause.
 *
 * **Details**
 *
 * Annotations are stored as a `Context` on each reason and can be
 * retrieved later via {@link reasonAnnotations} or {@link annotations}.
 * The runtime uses this to attach stack traces and spans.
 *
 * - Returns a new `Cause`.
 * - By default, existing keys are preserved. Pass `{ overwrite: true }` to
 *   replace them.
 *
 * **Example** (Annotating a cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Context } from "effect"
 *
 * class RequestId extends Context.Service<RequestId, string>()("RequestId") {}
 *
 * const annotated = Cause.annotate(Cause.fail("error"), Context.make(RequestId, "req-1"))
 * Context.getOrUndefined(Cause.annotations(annotated), RequestId) // => "req-1"
 * ```
 *
 * @see {@link annotations} for reading merged annotations from a cause
 * @see {@link reasonAnnotations} for reading annotations from a single reason
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const annotate = causeAnnotate;
/**
 * Reads the annotations from a single `Reason` as a `Context`.
 *
 * **When to use**
 *
 * Use when you need tracing metadata (e.g. `StackTrace`) from
 * a specific reason rather than the whole cause.
 *
 * **Example** (Reading reason annotations)
 *
 * ```ts import.meta.vitest
 * import { Cause, Context } from "effect"
 *
 * class RequestId extends Context.Service<RequestId, string>()("RequestId") {}
 *
 * const reason = Cause.makeFailReason("error")
 * const annotated = reason.annotate(Context.make(RequestId, "req-1"))
 *
 * Context.getOrUndefined(Cause.reasonAnnotations(annotated), RequestId) // => "req-1"
 * ```
 *
 * @see {@link annotations} — merged annotations from all reasons in a cause
 *
 * @stability stable
 * @category annotations
 * @since 4.0.0
 */
const reasonAnnotations = reasonAnnotations$1;
/**
 * Context annotation used to store the stack frame captured at the point of failure.
 *
 * **When to use**
 *
 * Use to read the failure stack-frame annotation from a `Reason` when building
 * diagnostics, logging, or custom cause renderers.
 *
 * **Details**
 *
 * The runtime annotates every reason with this when a stack frame is
 * available. Retrieve it via
 * `Context.get(Cause.reasonAnnotations(reason), Cause.StackTrace)`.
 *
 * @see {@link reasonAnnotations} for reading annotations from a single reason
 * @see {@link annotations} for reading merged annotations from a cause
 * @see {@link InterruptorStackTrace} for the interrupt-specific stack-frame annotation
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
var StackTrace = class extends /*#__PURE__*/ Service()("effect/Cause/StackTrace") {};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Exit.js
/**
 * Checks whether an unknown value is an Exit.
 *
 * **When to use**
 *
 * Use to validate unknown values at system boundaries and narrow them to
 * `Exit<unknown, unknown>`.
 *
 * **Details**
 *
 * Does not inspect the contents of the Exit. Returns `true` for both Success
 * and Failure exits.
 *
 * **Example** (Checking if a value is an Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.isExit(Exit.succeed(42)) // => true
 * Exit.isExit(Exit.fail("err")) // => true
 * Exit.isExit("not an exit") // => false
 * ```
 *
 * @see {@link isSuccess} to check for a successful Exit
 * @see {@link isFailure} to check for a failed Exit
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isExit = isExit$1;
/**
 * Creates a successful Exit containing the given value.
 *
 * **When to use**
 *
 * Use when you need an Exit that contains a known success value.
 *
 * **Details**
 *
 * Returns a `Success<A>` with the provided value. Does not perform any
 * computation.
 *
 * **Example** (Creating a successful Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.succeed(42) // => Exit.succeed(42)
 * ```
 *
 * @see {@link fail} to create a failed Exit
 * @see {@link void_ void} for a pre-allocated success with no value
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeed$3 = exitSucceed;
/**
 * Creates a failed Exit from a Cause.
 *
 * **When to use**
 *
 * Use when you already have a `Cause<E>` and want to wrap it in an Exit
 * for advanced error handling where you need full control over the Cause
 * structure.
 *
 * **Details**
 *
 * Returns a `Failure<never, E>`. If you only have an error value, use
 * {@link fail} instead.
 *
 * **Example** (Creating a failed Exit from a Cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Exit } from "effect"
 *
 * Exit.failCause(Cause.fail("Something went wrong")) // => Exit.fail("Something went wrong")
 * ```
 *
 * @see {@link fail} to create a Failure from a plain error value
 * @see {@link die} to create a Failure from a defect
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const failCause$2 = exitFailCause;
/**
 * Creates a failed Exit from a typed error value.
 *
 * **When to use**
 *
 * Use when you need to represent an expected typed failure as an `Exit`.
 *
 * **Details**
 *
 * The error is wrapped in a `Cause.Fail` internally.
 *
 * Returns a `Failure<never, E>`.
 *
 * **Example** (Creating a failed Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.fail("Something went wrong") // => Exit.fail("Something went wrong")
 * ```
 *
 * @see {@link succeed} to create a successful Exit
 * @see {@link die} to create a Failure from an unexpected defect
 * @see {@link failCause} to create a Failure from a full Cause
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fail$2 = exitFail;
/**
 * Creates a failed Exit from a defect (unexpected error).
 *
 * **When to use**
 *
 * Use when you need unexpected, unrecoverable errors that should not appear in
 * the typed error channel.
 *
 * **Details**
 *
 * The defect is wrapped in a `Cause.Die` internally.
 *
 * Returns a `Failure<never>` with `E = never`, since defects do not appear in
 * the typed error channel.
 *
 * **Example** (Creating a defect Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.die("Unexpected error") // => Exit.die("Unexpected error")
 * ```
 *
 * @see {@link fail} to create a Failure from a typed error
 * @see {@link hasDies} to check whether an Exit contains defects
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const die$2 = exitDie;
/**
 * Creates a failed Exit representing fiber interruption.
 *
 * **When to use**
 *
 * Use to signal that a fiber was interrupted.
 *
 * **Details**
 *
 * Optionally pass a fiber ID to identify which fiber was interrupted. Returns
 * a `Failure<never>` with an `Interrupt` cause.
 *
 * **Example** (Creating an interruption Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.interrupt(123) // => Exit.interrupt(123)
 * ```
 *
 * @see {@link hasInterrupts} to check whether an Exit contains interruptions
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const interrupt$1 = exitInterrupt;
const void_$1 = exitVoid;
/**
 * Checks whether an Exit is a Success.
 *
 * **When to use**
 *
 * Use as a type guard to narrow `Exit<A, E>` to `Success<A, E>` and access the
 * `value` property.
 *
 * **Example** (Narrowing to success)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * const exit = Exit.succeed(42)
 *
 * if (Exit.isSuccess(exit)) {
 *   exit.value // => 42
 * }
 * ```
 *
 * @see {@link isFailure} for the opposite check
 * @see {@link match} for exhaustive pattern matching
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isSuccess$1 = exitIsSuccess;
/**
 * Checks whether an Exit is a Failure.
 *
 * **When to use**
 *
 * Use as a type guard to narrow `Exit<A, E>` to `Failure<A, E>` and access the
 * `cause` property.
 *
 * **Example** (Narrowing to failure)
 *
 * ```ts import.meta.vitest
 * import { Cause, Exit } from "effect"
 *
 * const exit = Exit.fail("error")
 *
 * if (Exit.isFailure(exit)) {
 *   exit.cause // => Cause.fail("error")
 * }
 * ```
 *
 * @see {@link isSuccess} for the opposite check
 * @see {@link match} for exhaustive pattern matching
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isFailure = exitIsFailure;
/**
 * Checks whether a failed Exit contains interruptions (Interrupt reasons).
 *
 * **When to use**
 *
 * Use to check whether an `Exit` contains fiber interruption.
 *
 * **Details**
 *
 * Returns `false` for successful exits. Only checks for `Interrupt` reasons in
 * the Cause. A Cause with only `Fail` or `Die` reasons returns `false`.
 *
 * **Example** (Checking for interruptions)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.hasInterrupts(Exit.interrupt(1)) // => true
 * Exit.hasInterrupts(Exit.fail("err")) // => false
 * Exit.hasInterrupts(Exit.succeed(42)) // => false
 * ```
 *
 * @see {@link hasFails} to check for typed errors
 * @see {@link hasDies} to check for defects
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const hasInterrupts = exitHasInterrupts;
/**
 * Pattern matches on an Exit, handling both success and failure cases.
 *
 * **When to use**
 *
 * Use when you need exhaustive handling of both `Exit` success and failure
 * outcomes.
 *
 * **Details**
 *
 * Calls `onSuccess` with the value if the Exit is a Success, and calls
 * `onFailure` with the Cause if the Exit is a Failure.
 *
 * **Example** (Matching on an Exit)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.match(Exit.succeed(42), {
 *   onSuccess: (value) => `Got: ${value}`,
 *   onFailure: () => "Failed"
 * }) // => "Got: 42"
 * ```
 *
 * @see {@link isSuccess} and {@link isFailure} for simple boolean checks
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match$1 = exitMatch;
/**
 * Combines multiple Exit values into a single `Exit<void, E>`.
 *
 * **When to use**
 *
 * Use to validate that all exits in a collection succeeded
 *
 * **Details**
 *
 * If all exits are successful, this returns a void success. If any exit is a
 * failure, this returns a single failure with all error causes combined.
 *
 * Iterates over the entire collection. Collects all failure causes, not just
 * the first.
 *
 * **Example** (Combining exits)
 *
 * ```ts import.meta.vitest
 * import { Exit } from "effect"
 *
 * Exit.asVoidAll([Exit.succeed(1), Exit.succeed(2), Exit.succeed(3)]) // => Exit.succeed(undefined)
 * Exit.asVoidAll([Exit.succeed(1), Exit.fail("err"), Exit.succeed(3)]) // => Exit.fail("err")
 * ```
 *
 * @see {@link asVoid} to discard the value of a single Exit
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const asVoidAll = exitAsVoidAll;
/**
 * Returns the first typed error from a failed Exit as an Option.
 *
 * **When to use**
 *
 * Use when you need the first typed error from an `Exit` as an `Option`,
 * ignoring successes and non-typed failures.
 *
 * **Details**
 *
 * Returns `Option.some(error)` if the Cause contains a Fail reason. Successes,
 * defect-only failures, and interrupt-only failures return `Option.none()`.
 *
 * **Gotchas**
 *
 * Only finds the first Fail reason. If the Cause has multiple typed errors,
 * the rest are ignored.
 *
 * **Example** (Getting the first error)
 *
 * ```ts import.meta.vitest
 * import { Exit, Option } from "effect"
 *
 * Exit.findErrorOption(Exit.fail("err")) // => Option.some("err")
 * Exit.findErrorOption(Exit.die("bug")) // => Option.none()
 * Exit.findErrorOption(Exit.succeed(42)) // => Option.none()
 * ```
 *
 * @see {@link findError} for filter-pipeline usage
 * @see {@link getCause} to get the full Cause as an Option
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
const findErrorOption = exitFindErrorOption;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Deferred.js
const TypeId$4 = "~effect/Deferred";
/**
 * Checks whether a value is a `Deferred`.
 *
 * **When to use**
 *
 * Use to validate unknown values at runtime boundaries before treating them as
 * `Deferred` values.
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isDeferred = (u) => hasProperty(u, TypeId$4);
const DeferredProto = {
  [TypeId$4]: {
    _A: identity,
    _E: identity,
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
const DeferredImpl = function () {
  this.resumes = void 0;
  this.effect = void 0;
};
DeferredImpl.prototype = DeferredProto;
/**
 * Creates an empty `Deferred` synchronously outside the `Effect` runtime.
 *
 * **When to use**
 *
 * Use to allocate a `Deferred` synchronously when direct allocation outside
 * `Effect` is required.
 *
 * **Example** (Creating a Deferred unsafely)
 *
 * ```ts import.meta.vitest
 * import { Deferred } from "effect"
 *
 * const deferred = Deferred.makeUnsafe<number>()
 * Deferred.isDoneUnsafe(deferred) // => false
 * ```
 *
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const makeUnsafe$1 = () => new DeferredImpl();
/**
 * Creates a new `Deferred`.
 *
 * **When to use**
 *
 * Use to allocate an empty `Deferred` inside an `Effect` workflow.
 *
 * **Example** (Creating a Deferred)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   yield* Deferred.succeed(deferred, 42)
 *   return yield* Deferred.await(deferred)
 * })
 *
 * await Effect.runPromise(program) // => 42
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$2 = () => sync$2(() => makeUnsafe$1());
const _await = (self) =>
  callback$1((resume) => {
    if (self.effect) return resume(self.effect);
    self.resumes ??= [];
    self.resumes.push(resume);
    return sync$2(() => {
      const resumes = self.resumes;
      if (resumes === void 0) return;
      const index = resumes.indexOf(resume);
      if (index >= 0) resumes.splice(index, 1);
    });
  });
/**
 * Completes the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` from an already computed `Exit`.
 *
 * **Details**
 *
 * The returned effect succeeds with `true` when this call completed the
 * `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Completing a Deferred with an Exit)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Exit } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   yield* Deferred.done(deferred, Exit.succeed(42))
 *   return yield* Effect.exit(Deferred.await(deferred))
 * })
 *
 * await Effect.runPromise(program) // => Exit.succeed(42)
 * ```
 *
 * @see {@link complete} for completing from an effect and memoizing its result
 * @see {@link completeWith} for storing an effect directly
 * @see {@link succeed} for completing with a success value
 * @see {@link failCause} for completing with a failure cause
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const done = /* @__PURE__ */ dual(2, (self, effect) => sync$2(() => doneUnsafe(self, effect)));
/**
 * Attempts to complete the `Deferred` with the specified error.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` with a typed failure value.
 *
 * **Details**
 *
 * Fibers waiting on the `Deferred` fail with that error only if this call
 * completes it. The returned effect succeeds with `true` when this call
 * completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Failing a Deferred with an error)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Exit } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number, string>()
 *   const success = yield* Deferred.fail(deferred, "Operation failed")
 *   const exit = yield* Effect.exit(Deferred.await(deferred))
 *   return [success, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.fail("Operation failed")]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const fail$1 = /*#__PURE__*/ dual(2, (self, error) => done(self, exitFail(error)));
/**
 * Attempts to complete the `Deferred` with the specified `Cause`.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` with a full failure cause.
 *
 * **Details**
 *
 * Fibers waiting on the `Deferred` observe that cause only if this call
 * completes it. The returned effect succeeds with `true` when this call
 * completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Failing a Deferred with a Cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Deferred, Effect, Exit } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number, string>()
 *   const success = yield* Deferred.failCause(deferred, Cause.fail("Operation failed"))
 *   const exit = yield* Effect.exit(Deferred.await(deferred))
 *   return [success, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.failCause(Cause.fail("Operation failed"))]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const failCause$1 = /*#__PURE__*/ dual(2, (self, cause) => done(self, exitFailCause(cause)));
/**
 * Attempts to complete the `Deferred` with a defect.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` with an unexpected defect.
 *
 * **Details**
 *
 * Fibers waiting on the `Deferred` die with that defect only if this call
 * completes it. The returned effect succeeds with `true` when this call
 * completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Killing a Deferred with a defect)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Exit } from "effect"
 *
 * const defect = new Error("Something went wrong")
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   const success = yield* Deferred.die(deferred, defect)
 *   const exit = yield* Effect.exit(Deferred.await(deferred))
 *   return [success, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.die(defect)]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const die$1 = /*#__PURE__*/ dual(2, (self, defect) => done(self, exitDie(defect)));
/**
 * Attempts to complete the `Deferred` with interruption by the specified
 * `FiberId`.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` as interrupted by a specific fiber id.
 *
 * **Details**
 *
 * Fibers waiting on the `Deferred` are interrupted with that fiber id only if
 * this call completes it. The returned effect succeeds with `true` when this
 * call completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Interrupting a Deferred with a fiber id)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Exit } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   const success = yield* Deferred.interruptWith(deferred, 42)
 *   const exit = yield* Effect.exit(Deferred.await(deferred))
 *   return [success, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.interrupt(42)]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const interruptWith = /*#__PURE__*/ dual(2, (self, fiberId) =>
  failCause$1(self, causeInterrupt(fiberId)),
);
/**
 * Returns `true` if this `Deferred` has already been completed with a value or
 * an error, `false` otherwise.
 *
 * **When to use**
 *
 * Use to check completion status inside an `Effect` workflow.
 *
 * **Example** (Checking Deferred completion)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   const beforeCompletion = yield* Deferred.isDone(deferred)
 *   yield* Deferred.succeed(deferred, 42)
 *   const afterCompletion = yield* Deferred.isDone(deferred)
 *   return [beforeCompletion, afterCompletion]
 * })
 *
 * await Effect.runPromise(program) // => [false, true]
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const isDone = (self) => sync$2(() => isDoneUnsafe(self));
/**
 * Returns whether this `Deferred` has already been completed synchronously.
 *
 * **When to use**
 *
 * Use to check `Deferred` completion synchronously in code that cannot return
 * an `Effect`, such as low-level integration code.
 *
 * @see {@link isDone} for checking completion inside `Effect`
 * @see {@link poll} for reading the completed effect when available
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isDoneUnsafe = (self) => self.effect !== void 0;
/**
 * Returns the current completion effect as an `Option`. This returns
 * `Option.some(effect)` when the `Deferred` is completed, `Option.none()`
 * otherwise.
 *
 * **When to use**
 *
 * Use to inspect whether a `Deferred` is already completed and retrieve its
 * stored completion effect when available.
 *
 * **Example** (Polling Deferred completion)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Option } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   const beforeCompletion = yield* Deferred.poll(deferred)
 *   yield* Deferred.succeed(deferred, 42)
 *   const afterCompletion = yield* Deferred.poll(deferred)
 *   const afterValue = yield* Effect.transposeOption(afterCompletion)
 *   return [beforeCompletion, afterValue]
 * })
 *
 * await Effect.runPromise(program) // => [Option.none(), Option.some(42)]
 * ```
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
function poll(self) {
  return sync$2(() => fromUndefinedOr(self.effect));
}
/**
 * Attempts to complete the `Deferred` with the specified value.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` with a successful value.
 *
 * **Details**
 *
 * Fibers waiting on the `Deferred` receive the value only if this call
 * completes it. The returned effect succeeds with `true` when this call
 * completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Completing a Deferred with a value)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number>()
 *   yield* Deferred.succeed(deferred, 42)
 *
 *   return yield* Deferred.await(deferred)
 * })
 *
 * await Effect.runPromise(program) // => 42
 * ```
 *
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const succeed$2 = /*#__PURE__*/ dual(2, (self, value) => done(self, exitSucceed(value)));
/**
 * Attempts to complete the `Deferred` synchronously with the specified
 * completion effect.
 *
 * **When to use**
 *
 * Use to complete a `Deferred` synchronously in low-level code that already has
 * the completion effect.
 *
 * **Details**
 *
 * This mutates the `Deferred` directly and should be reserved for low-level
 * code; prefer the effectful completion APIs when possible. Returns `true` if
 * this call completed the `Deferred`, or `false` if it was already completed.
 *
 * **Example** (Completing a Deferred unsafely)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect } from "effect"
 *
 * const deferred = Deferred.makeUnsafe<number>()
 * Deferred.doneUnsafe(deferred, Effect.succeed(42)) // => true
 * ```
 *
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const doneUnsafe = (self, effect) => {
  if (self.effect) return false;
  self.effect = effect;
  if (self.resumes) {
    const resumes = self.resumes;
    self.resumes = void 0;
    for (let i = 0; i < resumes.length; i++) resumes[i](effect);
  }
  return true;
};
/**
 * Runs an `Effect` and attempts to complete a `Deferred` with the effect's
 * result.
 *
 * **When to use**
 *
 * Use to pipe an effect result into a `Deferred` while preserving success,
 * failure, defects, and interruption.
 *
 * **Details**
 *
 * If the effect succeeds, fails, dies, or is interrupted, that result is used
 * as the attempted completion. The returned effect cannot fail; it succeeds
 * with `true` if it completed the `Deferred`, or `false` if the `Deferred` was
 * already completed.
 *
 * **Example** (Completing a Deferred from an effect result)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect } from "effect"
 *
 * const successEffect = Effect.succeed(42)
 *
 * const program = Effect.gen(function*() {
 *   const deferred = yield* Deferred.make<number, string>()
 *   const isCompleted = yield* Deferred.into(successEffect, deferred)
 *   const value = yield* Deferred.await(deferred)
 *   return [isCompleted, value]
 * })
 *
 * await Effect.runPromise(program) // => [true, 42]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const into = /*#__PURE__*/ dual(2, (self, deferred) =>
  uninterruptibleMask$1((restore) =>
    flatMap$2(exit$1(restore(self)), (exit) => done(deferred, exit)),
  ),
);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/References.js
/**
 * Context reference for managing log annotations that are automatically added to all log entries.
 * These annotations provide contextual metadata that appears in every log message.
 *
 * **When to use**
 *
 * Use to attach shared contextual metadata to every log entry emitted in the
 * current context.
 *
 * **Example** (Managing log annotations)
 *
 * ```ts import.meta.vitest
 * import { Effect, References } from "effect"
 *
 * const logAnnotationExample = Effect.gen(function*() {
 *   // Get current annotations (empty by default)
 *   const current = yield* References.CurrentLogAnnotations
 *   const defaultCount = Object.keys(current).length
 *
 *   // Run with custom log annotations
 *   const custom = yield* Effect.provideService(
 *     Effect.gen(function*() {
 *       const annotations = yield* References.CurrentLogAnnotations
 *       return [annotations.requestId, annotations.userId, annotations.version]
 *     }),
 *     References.CurrentLogAnnotations,
 *     {
 *       requestId: "req-123",
 *       userId: "user-456",
 *       version: "1.0.0"
 *     }
 *   )
 *
 *   // Run with extended annotations
 *   const extended = yield* Effect.provideService(
 *     Effect.gen(function*() {
 *       const annotations = yield* References.CurrentLogAnnotations
 *       return [annotations.operation, annotations.timestamp]
 *     }),
 *     References.CurrentLogAnnotations,
 *     {
 *       requestId: "req-123",
 *       userId: "user-456",
 *       version: "1.0.0",
 *       operation: "data-sync",
 *       timestamp: 1234567890
 *     }
 *   )
 *
 *   return [defaultCount, custom, extended]
 * })
 *
 * await Effect.runPromise(logAnnotationExample) // => [0, ["req-123", "user-456", "1.0.0"], ["data-sync", 1234567890]]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const CurrentLogAnnotations = CurrentLogAnnotations$1;
/**
 * Context reference for the current log severity used by `Effect.log` when no explicit
 * level is provided.
 *
 * **When to use**
 *
 * Use to set the default severity for `Effect.log` entries that do not provide
 * an explicit level.
 *
 * **Details**
 *
 * Use `MinimumLogLevel` to control which log entries are filtered out.
 *
 * **Example** (Changing the level of an unqualified log)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger, References } from "effect"
 *
 * const levels: Array<string> = []
 * const logger = Logger.make<unknown, void>(({ logLevel }) => {
 *   levels.push(logLevel)
 * })
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("uses the default level")
 *   yield* Effect.log("uses the provided level").pipe(
 *     Effect.provideService(References.CurrentLogLevel, "Error")
 *   )
 * })
 *
 * await Effect.runPromise(program.pipe(Effect.provide(Logger.layer([logger]))))
 * levels // => ["Info", "Error"]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const CurrentLogLevel = CurrentLogLevel$1;
/**
 * Context reference for managing log spans that track the duration and hierarchy of operations.
 * Each span represents a labeled time period for performance analysis and debugging.
 *
 * **When to use**
 *
 * Use to carry the active log span stack that should be included with log
 * entries in the current context.
 *
 * **Example** (Tracking log spans)
 *
 * ```ts import.meta.vitest
 * import { Effect, References } from "effect"
 *
 * const logSpanExample = Effect.gen(function*() {
 *   // Get current spans (empty by default)
 *   const current = yield* References.CurrentLogSpans
 *   const defaultCount = current.length
 *
 *   // Add a log span manually
 *   const databaseConnectionStartedAt = 0
 *   const database = yield* Effect.provideService(
 *     Effect.gen(function*() {
 *       const spans = yield* References.CurrentLogSpans
 *       return spans.map(([label]) => label)
 *     }),
 *     References.CurrentLogSpans,
 *     [["database-connection", databaseConnectionStartedAt]]
 *   )
 *
 *   // Add another span
 *   const dataProcessingStartedAt = 100
 *   const processing = yield* Effect.provideService(
 *     Effect.gen(function*() {
 *       const spans = yield* References.CurrentLogSpans
 *       return spans.map(([label]) => label)
 *     }),
 *     References.CurrentLogSpans,
 *     [
 *       ["database-connection", databaseConnectionStartedAt],
 *       ["data-processing", dataProcessingStartedAt]
 *     ]
 *   )
 *
 *   // Clear spans when operations complete
 *   const cleared = yield* Effect.provideService(
 *     Effect.gen(function*() {
 *       const spans = yield* References.CurrentLogSpans
 *       return spans.length
 *     }),
 *     References.CurrentLogSpans,
 *     []
 *   )
 *
 *   return [defaultCount, database, processing, cleared]
 * })
 *
 * await Effect.runPromise(logSpanExample) // => [0, ["database-connection"], ["database-connection", "data-processing"], 0]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const CurrentLogSpans = CurrentLogSpans$1;
/**
 * Context reference for the current captured stack-frame chain for the running
 * fiber.
 *
 * **When to use**
 *
 * Use when writing low-level tracing or diagnostic integrations that need direct
 * access to the stack-frame chain carried by the current fiber.
 *
 * **Details**
 *
 * Effect and Layer tracing use this reference to attach stack-frame information
 * to failures and interruption causes. It is normally managed by tracing APIs
 * rather than provided directly by application code.
 *
 * @see {@link StackFrame} for the frame node stored in this reference
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const CurrentStackFrame = CurrentStackFrame$1;
/**
 * Context reference for setting the minimum log level threshold. Log entries below this
 * level will be filtered out completely.
 *
 * **When to use**
 *
 * Use to filter out log entries below a severity threshold.
 *
 * **Example** (Filtering logs below the minimum level)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger, References } from "effect"
 *
 * const levels: Array<string> = []
 * const logger = Logger.make<unknown, void>(({ logLevel }) => {
 *   levels.push(logLevel)
 * })
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logInfo("filtered out")
 *   yield* Effect.logWarning("included at the threshold")
 *   yield* Effect.logError("included above the threshold")
 * })
 *
 * await Effect.runPromise(program.pipe(
 *   Effect.provideService(References.MinimumLogLevel, "Warn"),
 *   Effect.provide(Logger.layer([logger]))
 * ))
 * levels // => ["Warn", "Error"]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const MinimumLogLevel = MinimumLogLevel$1;
/**
 * Context reference for controlling whether tracing is enabled globally. When set to false,
 * spans will not be registered with the tracer and tracing overhead is minimized.
 *
 * **When to use**
 *
 * Use to disable or re-enable span registration in the current context.
 *
 * **Example** (Toggling tracing)
 *
 * ```ts import.meta.vitest
 * import { Effect, References } from "effect"
 *
 * const tracingControl = Effect.gen(function*() {
 *   // Check if tracing is enabled (default is true)
 *   const current = yield* References.TracerEnabled
 *
 *   // Disable tracing globally
 *   const disabled = yield* Effect.provideService(
 *     References.TracerEnabled,
 *     References.TracerEnabled,
 *     false
 *   )
 *
 *   // Re-enable tracing
 *   const enabled = yield* Effect.provideService(
 *     References.TracerEnabled,
 *     References.TracerEnabled,
 *     true
 *   )
 *
 *   return [current, disabled, enabled]
 * })
 *
 * await Effect.runPromise(tracingControl) // => [true, false, true]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const TracerEnabled = TracerEnabled$1;
/**
 * Context reference for controlling whether trace timing is enabled globally. When set
 * to false, spans will not contain timing information (trace time will always
 * be set to zero).
 *
 * **When to use**
 *
 * Use to disable or re-enable timing capture for spans in the current context.
 *
 * **Example** (Toggling trace timing)
 *
 * ```ts import.meta.vitest
 * import { Effect, References } from "effect"
 *
 * const tracingControl = Effect.gen(function*() {
 *   // Check if trace timing is enabled (default is true)
 *   const current = yield* References.TracerTimingEnabled
 *
 *   // Disable trace timing globally
 *   const disabled = yield* Effect.provideService(
 *     References.TracerTimingEnabled,
 *     References.TracerTimingEnabled,
 *     false
 *   )
 *
 *   // Re-enable trace timing
 *   const enabled = yield* Effect.provideService(
 *     References.TracerTimingEnabled,
 *     References.TracerTimingEnabled,
 *     true
 *   )
 *
 *   return [current, disabled, enabled]
 * })
 *
 * await Effect.runPromise(tracingControl) // => [true, false, true]
 * ```
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const TracerTimingEnabled = TracerTimingEnabled$1;
/**
 * Context reference for the log severity used when a pool finalizer reports an
 * unhandled error.
 *
 * **When to use**
 *
 * Use to choose whether and at which severity pool finalizer failures are
 * reported.
 *
 * **Details**
 *
 * The default level is `"Error"`.
 *
 * **Gotchas**
 *
 * Providing `undefined` suppresses this report; it does not fall back to
 * `CurrentLogLevel`.
 *
 * @see {@link CurrentLogLevel} for the default severity used by ordinary `Effect.log` calls
 * @see {@link MinimumLogLevel} for filtering emitted log entries by threshold
 *
 * @stability stable
 * @category references
 * @since 4.0.0
 */
const UnhandledLogLevel = UnhandledLogLevel$1;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Scope.js
/**
 * Controls how long resources stay open.
 *
 * A scope is a lifetime boundary. Code can register cleanup effects on it, and
 * closing the scope runs those cleanups with the `Exit` value that ended the
 * work. Most application code uses higher-level APIs such as `Effect.scoped`
 * and `Layer`, while this module is useful when code needs to create, provide,
 * fork, close, or inspect scopes directly.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Service tag for the active resource lifetime.
 *
 * **When to use**
 *
 * Use to access the active lifetime when registering finalizers or sharing
 * resources with the surrounding scope.
 *
 * **Example** (Accessing the scope service)
 *
 * ```ts import.meta.vitest
 * import { Effect, Scope } from "effect"
 *
 * const cleanups: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const scope = yield* Scope.Scope
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => cleanups.push("Cleanup")))
 * })
 *
 * Effect.runSync(Effect.scoped(program))
 * cleanups // => ["Cleanup"]
 * ```
 *
 * @stability stable
 * @category services
 * @since 2.0.0
 */
const Scope = scopeTag;
/**
 * Creates a new `Scope` with the specified finalizer strategy.
 *
 * **Example** (Creating a scope)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const cleanups: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const scope = yield* Scope.make("sequential")
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => cleanups.push("Cleanup 1")))
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => cleanups.push("Cleanup 2")))
 *   yield* Scope.close(scope, Exit.void)
 * })
 *
 * Effect.runSync(program)
 * cleanups // => ["Cleanup 2", "Cleanup 1"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$1 = scopeMake;
/**
 * Creates a new `Scope` synchronously without wrapping it in an `Effect`.
 * This is useful when you need a scope immediately but should be used with caution
 * as it doesn't provide the same safety guarantees as the `Effect`-wrapped version.
 *
 * **When to use**
 *
 * Use when a scope must be allocated synchronously and the caller will close it
 * manually.
 *
 * **Example** (Creating a scope synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const scope = Scope.makeUnsafe("sequential")
 * const cleanups: Array<string> = []
 * const program = Effect.gen(function*() {
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => cleanups.push("Cleanup")))
 *   yield* Scope.close(scope, Exit.void)
 * })
 *
 * Effect.runSync(program)
 * cleanups // => ["Cleanup"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeUnsafe = scopeMakeUnsafe;
/**
 * Provides a concrete `Scope` to an effect.
 *
 * **When to use**
 *
 * Use to run an effect that requires `Scope` with a scope managed by the
 * caller.
 *
 * **Details**
 *
 * Providing the scope removes the `Scope` requirement from the effect context.
 *
 * **Example** (Providing a scope)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const events: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const scope = yield* Scope.Scope
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("cleanup")))
 *   events.push("working")
 * })
 *
 * const withScope = Effect.gen(function*() {
 *   const scope = yield* Scope.make()
 *   yield* Scope.provide(scope)(program)
 *   yield* Scope.close(scope, Exit.void)
 * })
 *
 * Effect.runSync(withScope)
 * events // => ["working", "cleanup"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const provide$3 = provideScope;
/**
 * Registers an exit-aware finalizer on a scope.
 *
 * **When to use**
 *
 * Use when cleanup needs to know whether the scope closed with success,
 * failure, or interruption.
 *
 * **Details**
 *
 * If the scope is open, the finalizer runs when the scope closes and receives
 * the scope's exit value. If the scope is already closed, the finalizer runs
 * immediately with the stored exit value.
 *
 * **Example** (Adding an exit-aware finalizer)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const exits: Array<Exit.Exit<unknown, unknown>> = []
 * const withResource = Effect.gen(function*() {
 *   const scope = yield* Scope.make()
 *   yield* Scope.addFinalizerExit(scope, (exit) => Effect.sync(() => exits.push(exit)))
 *   yield* Scope.close(scope, Exit.void)
 * })
 *
 * Effect.runSync(withResource)
 * exits // => [Exit.void]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const addFinalizerExit = scopeAddFinalizerExit;
/**
 * Registers a finalizer effect on a scope.
 *
 * **Details**
 *
 * If the scope is open, the finalizer runs when the scope closes, regardless of
 * whether the scope closes successfully or with an error. If the scope is
 * already closed, the finalizer runs immediately.
 *
 * **Example** (Adding finalizers)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const events: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const scope = yield* Scope.make()
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("cleanup 1")))
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("cleanup 2")))
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("cleanup 3")))
 *   events.push("work")
 *   yield* Scope.close(scope, Exit.void)
 * })
 *
 * Effect.runSync(program)
 * events // => ["work", "cleanup 3", "cleanup 2", "cleanup 1"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const addFinalizer$1 = scopeAddFinalizer;
/**
 * Creates a closeable child scope registered with a parent scope.
 *
 * **Details**
 *
 * Closing the parent closes the child with the same exit value, and closing the
 * child detaches it from the parent. The optional finalizer strategy configures
 * the child scope and defaults to `"sequential"` when omitted.
 *
 * **Example** (Creating a child scope)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const cleanups: Array<string> = []
 * const nestedScopes = Effect.gen(function*() {
 *   const parentScope = yield* Scope.make("sequential")
 *   yield* Scope.addFinalizer(parentScope, Effect.sync(() => cleanups.push("parent")))
 *   const childScope = yield* Scope.fork(parentScope, "parallel")
 *   yield* Scope.addFinalizer(childScope, Effect.sync(() => cleanups.push("child")))
 *   yield* Scope.close(childScope, Exit.void)
 *   yield* Scope.close(parentScope, Exit.void)
 * })
 *
 * Effect.runSync(nestedScopes)
 * cleanups // => ["child", "parent"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const fork = scopeFork;
/**
 * Creates a closeable child scope synchronously and registers it with a parent scope.
 *
 * **When to use**
 *
 * Use when a child scope must be created synchronously and the caller controls
 * both parent and child scope lifetimes.
 *
 * **Details**
 *
 * Closing the parent closes the child with the same exit value, and closing the
 * child detaches it from the parent. The optional finalizer strategy configures
 * the child scope and defaults to `"sequential"` when omitted.
 *
 * **Example** (Creating a child scope synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const cleanups: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const parentScope = Scope.makeUnsafe("sequential")
 *   const childScope = Scope.forkUnsafe(parentScope, "parallel")
 *   yield* Scope.addFinalizer(parentScope, Effect.sync(() => cleanups.push("parent")))
 *   yield* Scope.addFinalizer(childScope, Effect.sync(() => cleanups.push("child")))
 *   yield* Scope.close(childScope, Exit.void)
 *   yield* Scope.close(parentScope, Exit.void)
 * })
 *
 * Effect.runSync(program)
 * cleanups // => ["child", "parent"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 4.0.0
 */
const forkUnsafe = scopeForkUnsafe;
/**
 * Closes a scope and runs its registered finalizers.
 *
 * **When to use**
 *
 * Use to close a scope manually with a specific exit value.
 *
 * **Details**
 *
 * Finalizers run in the scope's configured order and receive the supplied
 * `Exit`.
 * By default, finalizers run uninterruptibly, so interrupting the closing fiber
 * waits for them to finish; a finalizer can explicitly restore interruptibility.
 *
 * **Example** (Running scope finalizers)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Scope } from "effect"
 *
 * const events: Array<string> = []
 * const resourceManagement = Effect.gen(function*() {
 *   const scope = yield* Scope.make("sequential")
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("database")))
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("file")))
 *   yield* Scope.addFinalizer(scope, Effect.sync(() => events.push("memory")))
 *   events.push("work")
 *   yield* Scope.close(scope, Exit.succeed("Success!"))
 * })
 *
 * Effect.runSync(resourceManagement)
 * events // => ["work", "memory", "file", "database"]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const close = scopeClose;
/**
 * Closes a scope unsafely with the provided exit value.
 *
 * **When to use**
 *
 * Use when implementing lower-level scope machinery that must transition a
 * scope to `Closed` immediately and can run the returned finalizer effect when
 * one is produced.
 *
 * **Details**
 *
 * Returns an effect that runs registered finalizers, or `undefined` when the
 * scope was already closed or no finalizers need to run.
 *
 * **Gotchas**
 *
 * Ignoring the returned effect skips registered finalizers. The caller must
 * run the returned effect uninterruptibly: the scope is already closed, so
 * interruption during finalization can permanently skip remaining finalizers.
 *
 * @see {@link close} for the usual effectful close operation that always returns an `Effect`
 *
 * @stability stable
 * @category unsafe
 * @since 4.0.0
 */
const closeUnsafe = scopeCloseUnsafe;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Layer.js
const TypeId$3 = "~effect/Layer";
const MemoMapTypeId = "~effect/Layer/MemoMap";
const makeMemoMapEntry = (memoMap, layer) => {
  const entry = {
    observers: 0,
    deferred: makeUnsafe$1(),
    scope: makeUnsafe(),
    finalizer: (exit) =>
      suspend$2(() => {
        if (--entry.observers > 0) return void_$2;
        memoMap.map.delete(layer);
        return close(entry.scope, exit);
      }),
  };
  return entry;
};
const memoMapObserve = (entry, scope) => {
  if (scope.state._tag === "Closed") return false;
  entry.observers++;
  scopeAddFinalizerUnsafe(scope, {}, entry.finalizer);
  return true;
};
const LayerProto = {
  [TypeId$3]: {
    _ROut: identity,
    _E: identity,
    _RIn: identity,
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
const fromBuildUnsafe = (build) => {
  const self = Object.create(LayerProto);
  self.build = build;
  return self;
};
/**
 * Constructs a `Layer` from a function that uses a `MemoMap` and `Scope` to
 * build the layer.
 *
 * **Details**
 *
 * The function receives a `MemoMap` for memoization and a `Scope` for resource management.
 * A child scope is created, and if the build fails, the child scope is closed.
 *
 * **Example** (Constructing a layer from a build function)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const databaseLayer = Layer.fromBuild(() =>
 *   Effect.sync(() =>
 *     Context.make(Database, {
 *       query: (sql: string) => Effect.succeed("result")
 *     })
 *   )
 * )
 *
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, databaseLayer)) // => "result"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromBuild = (build) =>
  fromBuildUnsafe((memoMap, scope) => {
    const layerScope = forkUnsafe(scope);
    return onExit$1(build(memoMap, layerScope), (exit) =>
      exit._tag === "Failure" ? close(layerScope, exit) : void_$2,
    );
  });
/**
 * Constructs a `Layer` from a function that uses a `MemoMap` and `Scope` to
 * build the layer, with automatic memoization.
 *
 * **Details**
 *
 * This is similar to `fromBuild` but provides automatic memoization of the layer construction.
 * The layer will be memoized based on the provided `MemoMap`.
 *
 * **Example** (Memoizing layer construction)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const databaseLayer = Layer.fromBuildMemo(() =>
 *   Effect.sync(() =>
 *     Context.make(Database, {
 *       query: (sql: string) => Effect.succeed("result")
 *     })
 *   )
 * )
 *
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, databaseLayer)) // => "result"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromBuildMemo = (build) => {
  const self = fromBuild((memoMap, scope) => memoMap.getOrElseMemoize(self, scope, build));
  return self;
};
var MemoMapImpl = class {
  get [MemoMapTypeId]() {
    return MemoMapTypeId;
  }
  parent;
  constructor(parent) {
    this.parent = parent;
  }
  map = /*#__PURE__*/ new Map();
  get(layer, scope) {
    const local = this.map.get(layer);
    if (local) {
      memoMapObserve(local, scope);
      return local.deferred.effect ?? _await(local.deferred);
    }
    return this.parent?.get(layer, scope);
  }
  getOrElseMemoize(layer, scope, build) {
    return suspend$2(() => {
      let deferred;
      return onExitPrimitive$1(
        suspend$2(() => {
          const existing = this.get(layer, scope);
          if (existing) return existing;
          const entry = makeMemoMapEntry(this, layer);
          if (!memoMapObserve(entry, scope)) return build(this, scope);
          deferred = entry.deferred;
          this.map.set(layer, entry);
          return build(this, entry.scope);
        }),
        (exit) => {
          if (deferred) doneUnsafe(deferred, exit);
        },
      );
    });
  }
};
/**
 * Constructs a `MemoMap` synchronously so it can be used to build additional layers.
 *
 * **Example** (Creating a memo map unsafely)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * // Create a memo map for manual layer building
 * const program = Effect.gen(function*() {
 *   const memoMap = Layer.makeMemoMapUnsafe()
 *   const scope = yield* Effect.scope
 *
 *   const dbLayer = Layer.succeed(Database, {
 *     query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 *   })
 *   const context = yield* Layer.buildWithMemoMap(dbLayer, memoMap, scope)
 *
 *   return Context.get(context, Database)
 * })
 *
 * const database = Effect.runSync(Effect.scoped(program))
 * Effect.runSync(database.query("SELECT 1")) // => "result"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeMemoMapUnsafe = () => new MemoMapImpl();
/**
 * Constructs a child `MemoMap` synchronously, allowing it to reuse layers
 * already memoized in the parent while isolating any new layer allocations to
 * the child map.
 *
 * **When to use**
 *
 * Use to synchronously fork a memo map for manual layer building when child
 * builds should see parent memoized layers without writing newly built layers
 * back to the parent.
 *
 * @see {@link forkMemoMap} for allocating the child memo map inside `Effect`
 * @see {@link makeMemoMapUnsafe} for creating a root memo map without a parent
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const forkMemoMapUnsafe = (parent) => new MemoMapImpl(parent);
/**
 * Context service for the current `MemoMap` used in layer construction.
 *
 * **When to use**
 *
 * Use when building custom layer operations that need to access the current
 * memoization map from the fiber context.
 *
 * **Details**
 *
 * This service wraps a `MemoMap` as a `Context.Service`, making it available
 * for dependency injection during layer construction.
 *
 * @see {@link MemoMap} the memoization map type wrapped by this service
 *
 * @stability stable
 * @category services
 * @since 3.13.0
 */
var CurrentMemoMap = class CurrentMemoMap
  extends /*#__PURE__*/ Service()("effect/Layer/CurrentMemoMap")
{
  static forkOrCreate(self) {
    const current = getOrUndefined(self, CurrentMemoMap);
    return current ? forkMemoMapUnsafe(current) : makeMemoMapUnsafe();
  }
};
/**
 * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
 * the layer construction.
 *
 * **Example** (Building layers with an explicit memo map)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * const logs: Array<string> = []
 *
 * // Build layers with explicit memoization control
 * const program = Effect.gen(function*() {
 *   const memoMap = yield* Layer.makeMemoMap
 *   const scope = yield* Effect.scope
 *
 *   // Build database layer with memoization
 *   const dbLayer = Layer.succeed(Database, {
 *     query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 *   })
 *   const dbContext = yield* Layer.buildWithMemoMap(dbLayer, memoMap, scope)
 *
 *   // Build logger layer with same memoization (reuses memo if same layer)
 *   const loggerLayer = Layer.succeed(Logger, {
 *     log: Effect.fn("Logger.log")((msg: string) => Effect.sync(() => logs.push(msg)))
 *   })
 *   const loggerContext = yield* Layer.buildWithMemoMap(
 *     loggerLayer,
 *     memoMap,
 *     scope
 *   )
 *
 *   return {
 *     database: Context.get(dbContext, Database),
 *     logger: Context.get(loggerContext, Logger)
 *   }
 * })
 *
 * const services = Effect.runSync(Effect.scoped(program))
 * Effect.runSync(services.logger.log("ready"))
 * logs // => ["ready"]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const buildWithMemoMap = /*#__PURE__*/ dual(3, (self, memoMap, scope) =>
  provideService$1(
    map$2(
      suspend$2(() => self.build(memoMap, scope)),
      add(CurrentMemoMap, memoMap),
    ),
    CurrentMemoMap,
    memoMap,
  ),
);
/**
 * Builds a layer into a scoped value.
 *
 * **Example** (Building a layer into a context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * // Build a layer to get its services
 * const program = Effect.gen(function*() {
 *   const dbLayer = Layer.succeed(Database, {
 *     query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 *   })
 *
 *   // Build the layer into Context - automatically manages scope and memoization
 *   const context = yield* Layer.build(dbLayer)
 *
 *   // Extract the specific service from the built layer
 *   const database = Context.get(context, Database)
 *
 *   return yield* database.query("SELECT * FROM users")
 * })
 *
 * Effect.runSync(Effect.scoped(program)) // => "result"
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const build = (self) =>
  withFiber$1((fiber) =>
    buildWithMemoMap(
      self,
      CurrentMemoMap.forkOrCreate(fiber.context),
      getUnsafe(fiber.context, Scope),
    ),
  );
/**
 * Builds a layer using an explicit scope.
 *
 * **When to use**
 *
 * Use to control the lifetime of layer resources with a scope supplied by the
 * caller.
 *
 * **Details**
 *
 * Resources created by the layer are released when the supplied scope is
 * closed, unless a resource extends its own scope.
 *
 * **Example** (Building a layer with an explicit scope)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer, Scope } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const logs: Array<string> = []
 *
 * // Build a layer with explicit scope control
 * const program = Effect.gen(function*() {
 *   const scope = yield* Effect.scope
 *
 *   const dbLayer = Layer.effect(Database, Effect.gen(function*() {
 *     logs.push("Initializing database...")
 *     yield* Scope.addFinalizer(
 *       scope,
 *       Effect.sync(() => logs.push("Database closed"))
 *     )
 *     return { query: Effect.fn("Database.query")((sql: string) => Effect.succeed(`Result: ${sql}`)) }
 *   }))
 *
 *   // Build with specific scope - resources tied to this scope
 *   const context = yield* Layer.buildWithScope(dbLayer, scope)
 *   const database = Context.get(context, Database)
 *
 *   return yield* database.query("SELECT * FROM users")
 *   // Database will be closed when scope is closed
 * })
 *
 * Effect.runSync(Effect.scoped(program)) // => "Result: SELECT * FROM users"
 * logs // => ["Initializing database...", "Database closed"]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const buildWithScope = /*#__PURE__*/ dual(2, (self, scope) =>
  withFiber$1((fiber) => buildWithMemoMap(self, CurrentMemoMap.forkOrCreate(fiber.context), scope)),
);
/**
 * Constructs a layer that provides a single service from an already available
 * value.
 *
 * **When to use**
 *
 * Use when you need a `Layer` that provides a service from an already
 * constructed implementation without effectful acquisition.
 *
 * **Example** (Creating a layer from a service implementation)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const DatabaseLayer = Layer.succeed(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed(`Query result: ${sql}`))
 * })
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, DatabaseLayer)) // => "Query result: SELECT 1"
 * ```
 *
 * @see {@link sync} for constructing layers from lazy values
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeed$1 = function () {
  if (arguments.length === 1) return (resource) => succeedContext(make$5(arguments[0], resource));
  return succeedContext(make$5(arguments[0], arguments[1]));
};
/**
 * Constructs a layer that provides all services in an already available
 * `Context`.
 *
 * **When to use**
 *
 * Use when you need a `Layer` built from an existing `Context`, including when
 * you need to provide multiple services at once.
 *
 * **Details**
 *
 * This is a more general version of `succeed` that allows you to provide
 * multiple services at once through a `Context`.
 *
 * **Example** (Providing multiple services from a context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * const logs: Array<string> = []
 * const context = Context.make(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 * }).pipe(
 *   Context.add(Logger, {
 *     log: (msg: string) => Effect.sync(() => logs.push(msg))
 *   })
 * )
 *
 * const layer = Layer.succeedContext(context)
 * const program = Logger.use((logger) => logger.log("ready"))
 * Effect.runSync(Effect.provide(program, layer))
 * logs // => ["ready"]
 * ```
 *
 * @see {@link succeed} for providing a single service from a value
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeedContext = (context) => fromBuildUnsafe(constant(succeed$4(context)));
/**
 * An empty layer that provides no services, cannot fail, has no requirements,
 * and performs no construction or finalization work.
 *
 * **When to use**
 *
 * Use as the no-op branch when conditionally composing layers.
 *
 * **Example** (Disabling optional lifecycle work)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer, Option } from "effect"
 *
 * const Service = Context.Service<string>("Service")
 * const context = Effect.runSync(Effect.scoped(Layer.build(Layer.empty)))
 * Context.getOption(context, Service) // => Option.none()
 * ```
 *
 * @see {@link effectDiscard} for running an effect while providing no services
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty$1 = /*#__PURE__*/ succeedContext(/*#__PURE__*/ empty$2());
/**
 * Constructs a layer lazily that provides a single service.
 *
 * **When to use**
 *
 * Use when you need a `Layer` that provides one service whose value is created
 * synchronously, but creation should be deferred until the layer is built.
 *
 * **Details**
 *
 * This is a lazy version of `succeed` where the service value is computed
 * synchronously only when the layer is built.
 *
 * **Example** (Lazily providing a service)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const layer = Layer.sync(Database, () => ({
 *   query: (sql: string) => Effect.succeed(`Query: ${sql}`)
 * }))
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, layer)) // => "Query: SELECT 1"
 * ```
 *
 * @see {@link succeed} for constructing layers from static values
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sync$1 = function () {
  if (arguments.length === 1)
    return (evaluate) => syncContext(() => make$5(arguments[0], evaluate()));
  return syncContext(() => make$5(arguments[0], arguments[1]()));
};
/**
 * Constructs a layer lazily that provides all services in a `Context`.
 *
 * **When to use**
 *
 * Use when you need a `Layer` that creates multiple services synchronously but
 * defers that work until the layer is built.
 *
 * **Details**
 *
 * This is a lazy version of `succeedContext` where the `Context` is computed
 * synchronously only when the layer is built.
 *
 * **Example** (Lazily providing a context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const layer = Layer.syncContext(() =>
 *   Context.make(Database, {
 *     query: (sql: string) => Effect.succeed(`Query: ${sql}`)
 *   })
 * )
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, layer)) // => "Query: SELECT 1"
 * ```
 *
 * @see {@link sync} for lazily providing a single service
 * @see {@link succeedContext} for providing an already available context
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const syncContext = (evaluate) => fromBuildMemo(constant(sync$2(evaluate)));
/**
 * Constructs a layer from an effect that produces a single service.
 *
 * **When to use**
 *
 * Use when you need to construct a `Layer`-provided service with an `Effect`,
 * dependencies, or scoped resource acquisition.
 *
 * **Details**
 *
 * This allows you to create a `Layer` from an `Effect` that produces a service.
 * The `Effect` is executed in the scope of the layer, allowing for proper
 * resource management.
 *
 * **Example** (Creating a layer from an effect)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const layer = Layer.effect(Database,
 *   Effect.sync(() => ({
 *     query: (sql: string) => Effect.succeed(`Query: ${sql}`)
 *   }))
 * )
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, layer)) // => "Query: SELECT 1"
 * ```
 *
 * @see {@link effectContext} for effectfully providing multiple services
 * @see {@link effectDiscard} for running construction work without providing services
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const effect = function () {
  if (arguments.length === 1) return (effect) => effectImpl(arguments[0], effect);
  return effectImpl(arguments[0], arguments[1]);
};
const effectImpl = (service, effect) =>
  effectContext(map$2(effect, (value) => make$5(service, value)));
/**
 * Constructs a layer from an effect that produces all services in a `Context`.
 *
 * **When to use**
 *
 * Use when you need a `Layer` that effectfully constructs a `Context` with
 * multiple services.
 *
 * **Details**
 *
 * This allows you to create a `Layer` from an effectful computation that
 * returns multiple services. The `Effect` is executed in the scope of the
 * layer.
 *
 * **Example** (Creating a layer from an effectful context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<
 *   Database,
 *   { readonly query: (sql: string) => Effect.Effect<string> }
 * >()("Database") {}
 *
 * const layer = Layer.effectContext(
 *   Effect.succeed(Context.make(Database, {
 *     query: (sql: string) => Effect.succeed(`Query: ${sql}`)
 *   }))
 * )
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, layer)) // => "Query: SELECT 1"
 * ```
 *
 * @see {@link effect} for effectfully providing a single service
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const effectContext = (effect) => fromBuildMemo((_, scope) => provide$3(effect, scope));
/**
 * Constructs a layer from an effect, discarding its value and providing no
 * services.
 *
 * **When to use**
 *
 * Use when layer construction should run an Effect for its side effects while providing no
 * services.
 *
 * **Example** (Running an effect during layer construction)
 *
 * ```ts import.meta.vitest
 * import { Effect, Layer } from "effect"
 *
 * const logs: Array<string> = []
 * const initLayer = Layer.effectDiscard(
 *   Effect.sync(() => {
 *     logs.push("Initializing application...")
 *   })
 * )
 * Effect.runSync(Effect.scoped(Layer.build(initLayer)))
 * logs // => ["Initializing application..."]
 * ```
 *
 * @see {@link empty} for a no-op layer that performs no construction work
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const effectDiscard = (effect) => effectContext(as$1(effect, empty$2()));
/**
 * Constructs a layer lazily using the specified factory.
 *
 * **Details**
 *
 * The factory is evaluated only when the suspended layer is first built, and
 * the result is memoized with normal layer sharing semantics.
 *
 * **Example** (Choosing a layer lazily)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Config extends Context.Service<Config, string>()("Config") {}
 *
 * const useProd = true
 *
 * const layer = Layer.suspend(() =>
 *   useProd
 *     ? Layer.succeed(Config, "https://api.example.com")
 *     : Layer.succeed(Config, "http://localhost:3000")
 * )
 * Effect.runSync(Effect.provide(Config, layer)) // => "https://api.example.com"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const suspend$1 = (evaluate) =>
  fromBuildMemo((memoMap, scope) => suspend$2(() => evaluate().build(memoMap, scope)));
const unwrapKey = /*#__PURE__*/ Service("effect/Layer/unwrap");
/**
 * Unwraps a `Layer` from an `Effect`, flattening the nested structure.
 *
 * **When to use**
 *
 * Use when you have an `Effect` that produces a `Layer` and you want to
 * use that layer directly.
 *
 * **Details**
 *
 * The resulting Layer will have the combined error and dependency types from
 * both the outer Effect and the inner Layer.
 *
 * **Example** (Unwrapping an effectful layer)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * const layerEffect = Effect.succeed(
 *   Layer.succeed(Database, { query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result")) })
 * )
 *
 * const unwrappedLayer = Layer.unwrap(layerEffect)
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, unwrappedLayer)) // => "result"
 * ```
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const unwrap = (self) => flatMap$1(effect(unwrapKey)(self), get$1(unwrapKey));
const mergeAllEffect = (layers, memoMap, scope) => {
  const parentScope = forkUnsafe(scope, "parallel");
  return forEach$1(layers, (layer) => layer.build(memoMap, forkUnsafe(parentScope, "sequential")), {
    concurrency: layers.length,
  }).pipe(map$2((context) => mergeAll$1(...context)));
};
/**
 * Combines all the provided layers concurrently, creating a new layer with
 * merged input, error, and output types.
 *
 * **When to use**
 *
 * Use when you need to combine multiple independent layers.
 *
 * **Details**
 *
 * All layers are built concurrently, and their outputs are merged into a single layer.
 *
 * If multiple merged layers depend on the same layer value, that dependency is
 * shared by default. Reuse a named layer value when you want services to share
 * the same resource, such as one database pool.
 *
 * **Example** (Merging independent layers)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * const dbLayer = Layer.succeed(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 * })
 * const logs: Array<string> = []
 * const loggerLayer = Layer.succeed(Logger, {
 *   log: Effect.fn("Logger.log")((msg: string) => Effect.sync(() => logs.push(msg)))
 * })
 *
 * const mergedLayer = Layer.mergeAll(dbLayer, loggerLayer)
 * const program = Logger.use((logger) => logger.log("ready"))
 * Effect.runSync(Effect.provide(program, mergedLayer))
 * logs // => ["ready"]
 * ```
 *
 * @see {@link merge} for merging one layer with another layer or array
 *
 * @stability stable
 * @category zipping
 * @since 2.0.0
 */
const mergeAll = (...layers) =>
  fromBuild((memoMap, scope) => mergeAllEffect(layers, memoMap, scope));
/**
 * Merges this layer with another layer concurrently, producing a new layer with
 * combined input, error, and output types.
 *
 * **When to use**
 *
 * Use to combine an existing `Layer` with another `Layer` or an array of
 * layers while preserving pipeline style.
 *
 * **Details**
 *
 * This is a binary version of `mergeAll` that merges exactly two layers or one
 * layer with an array of layers. The layers are built concurrently and their
 * outputs are combined.
 *
 * **Example** (Merging two layers)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * const dbLayer = Layer.succeed(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed("result"))
 * })
 * const loggerLayer = Layer.succeed(Logger, {
 *   log: Effect.fn("Logger.log")((_msg: string) => Effect.void)
 * })
 *
 * const mergedLayer = Layer.merge(dbLayer, loggerLayer)
 * const program = Database.use((database) => database.query("SELECT 1"))
 * Effect.runSync(Effect.provide(program, mergedLayer)) // => "result"
 * ```
 *
 * @see {@link mergeAll} for merging several layers at once
 *
 * @stability stable
 * @category zipping
 * @since 2.0.0
 */
const merge = /*#__PURE__*/ dual(2, (self, that) =>
  mergeAll(self, ...(Array.isArray(that) ? that : [that])),
);
const provideWith = (self, that, f) =>
  fromBuild((memoMap, scope) =>
    flatMap$2(
      Array.isArray(that) ? mergeAllEffect(that, memoMap, scope) : that.build(memoMap, scope),
      (context) =>
        self.build(memoMap, scope).pipe(
          provideContext$1(context),
          map$2((merged) => f(merged, context)),
        ),
    ),
  );
/**
 * Feeds the output services of the dependency layer into the requirements of
 * this layer, returning a layer that only provides the services from this layer.
 *
 * **When to use**
 *
 * Use when you need to hide an implementation dependency layer from callers.
 *
 * **Details**
 *
 * In `serviceLayer.pipe(Layer.provide(dependencyLayer))`, the dependency layer is
 * built first and is used to satisfy the requirements of `serviceLayer`.
 *
 * **Example** (Providing layer dependencies)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class UserService extends Context.Service<UserService, {
 *   readonly getUser: (id: string) => Effect.Effect<{
 *     id: string
 *     name: string
 *   }>
 * }>()("UserService") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * // Create dependency layers
 * const databaseLayer = Layer.succeed(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed(`DB: ${sql}`))
 * })
 *
 * const logs: Array<string> = []
 * const loggerLayer = Layer.succeed(Logger, {
 *   log: Effect.fn("Logger.log")((msg: string) => Effect.sync(() => logs.push(`[LOG] ${msg}`)))
 * })
 *
 * // UserService depends on Database and Logger
 * const userServiceLayer = Layer.effect(UserService, Effect.gen(function*() {
 *   const database = yield* Database
 *   const logger = yield* Logger
 *
 *   return {
 *     getUser: Effect.fn("UserService.getUser")(function*(id: string) {
 *         yield* logger.log(`Looking up user ${id}`)
 *         const result = yield* database.query(
 *           `SELECT * FROM users WHERE id = ${id}`
 *         )
 *         return { id, name: result }
 *       })
 *   }
 * }))
 *
 * // Provide dependencies to UserService layer
 * const userServiceWithDependencies = userServiceLayer.pipe(
 *   Layer.provide(Layer.mergeAll(databaseLayer, loggerLayer))
 * )
 *
 * // Now UserService layer has no dependencies
 * const program = Effect.gen(function*() {
 *   const userService = yield* UserService
 *   return yield* userService.getUser("123")
 * }).pipe(
 *   Effect.provide(userServiceWithDependencies)
 * )
 * Effect.runSync(program) // => { id: "123", name: "DB: SELECT * FROM users WHERE id = 123" }
 * logs // => ["[LOG] Looking up user 123"]
 * ```
 *
 * @see {@link provideMerge} for retaining the dependency services
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provide$2 = /*#__PURE__*/ dual(2, (self, that) => provideWith(self, that, identity));
/**
 * Feeds the output services of the dependency layer into the requirements of
 * this layer, returning a layer that provides both sets of services.
 *
 * **When to use**
 *
 * Use when you need to compose `Layer`s while keeping both the constructed
 * service and the dependency used to build it available.
 *
 * **Details**
 *
 * Prefer {@link provide} when the dependency should stay private.
 *
 * **Example** (Providing dependencies while retaining services)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * class UserService extends Context.Service<UserService, {
 *   readonly getUser: (id: string) => Effect.Effect<{
 *     id: string
 *     name: string
 *   }>
 * }>()("UserService") {}
 *
 * // Create dependency layers
 * const databaseLayer = Layer.succeed(Database, {
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed(`DB: ${sql}`))
 * })
 *
 * const logs: Array<string> = []
 * const loggerLayer = Layer.succeed(Logger, {
 *   log: Effect.fn("Logger.log")((msg: string) => Effect.sync(() => logs.push(`[LOG] ${msg}`)))
 * })
 *
 * // UserService depends on Database and Logger
 * const userServiceLayer = Layer.effect(UserService, Effect.gen(function*() {
 *   const database = yield* Database
 *   const logger = yield* Logger
 *
 *   return {
 *     getUser: Effect.fn("UserService.getUser")(function*(id: string) {
 *         yield* logger.log(`Looking up user ${id}`)
 *         const result = yield* database.query(
 *           `SELECT * FROM users WHERE id = ${id}`
 *         )
 *         return { id, name: result }
 *       })
 *   }
 * }))
 *
 * // Provide dependencies and merge all services together
 * const allServicesLayer = userServiceLayer.pipe(
 *   Layer.provideMerge(Layer.mergeAll(databaseLayer, loggerLayer))
 * )
 *
 * // Now the resulting layer provides UserService, Database, AND Logger
 * const program = Effect.gen(function*() {
 *   const userService = yield* UserService
 *   const logger = yield* Logger // Still available!
 *   const database = yield* Database // Still available!
 *
 *   const user = yield* userService.getUser("123")
 *   yield* logger.log(`Found user: ${user.name}`)
 *
 *   return user
 * }).pipe(
 *   Effect.provide(allServicesLayer)
 * )
 * Effect.runSync(program) // => { id: "123", name: "DB: SELECT * FROM users WHERE id = 123" }
 * logs // => ["[LOG] Looking up user 123", "[LOG] Found user: DB: SELECT * FROM users WHERE id = 123"]
 * ```
 *
 * @see {@link provide} for keeping dependency services private
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideMerge = /*#__PURE__*/ dual(2, (self, that) =>
  provideWith(self, that, (self, that) => merge$1(that, self)),
);
/**
 * Constructs a layer dynamically based on the output of this layer.
 *
 * **Example** (Creating services from layer output)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * class Config extends Context.Service<Config, {
 *   readonly dbUrl: string
 *   readonly logLevel: string
 * }>()("Config") {}
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * class Logger extends Context.Service<Logger, {
 *   readonly log: (msg: string) => Effect.Effect<void>
 * }>()("Logger") {}
 *
 * const logs: Array<string> = []
 *
 * // Base config layer
 * const configLayer = Layer.succeed(Config, {
 *   dbUrl: "postgres://localhost:5432/mydb",
 *   logLevel: "debug"
 * })
 *
 * // Dynamically create services based on config
 * const dynamicServiceLayer = configLayer.pipe(
 *   Layer.flatMap((context) => {
 *     const config = Context.get(context, Config)
 *
 *     // Create database layer based on config
 *     const dbLayer = Layer.succeed(Database, {
 *       query: Effect.fn("Database.query")((sql: string) =>
 *         Effect.succeed(
 *           `Querying ${config.dbUrl}: ${sql}`
 *         ))
 *     })
 *
 *     // Create logger layer based on config
 *     const loggerLayer = Layer.succeed(Logger, {
 *       log: Effect.fn("Logger.log")((msg: string) =>
 *         config.logLevel === "debug"
 *           ? Effect.sync(() => logs.push(`[DEBUG] ${msg}`))
 *           : Effect.sync(() => logs.push(msg))
 *       )
 *     })
 *
 *     // Return combined layer
 *     return Layer.mergeAll(dbLayer, loggerLayer)
 *   })
 * )
 *
 * // Use the dynamic services
 * const program = Effect.gen(function*() {
 *   const database = yield* Database
 *   const logger = yield* Logger
 *
 *   yield* logger.log("Starting database query")
 *   const result = yield* database.query("SELECT * FROM users")
 *
 *   return result
 * }).pipe(
 *   Effect.provide(dynamicServiceLayer)
 * )
 * Effect.runSync(program) // => "Querying postgres://localhost:5432/mydb: SELECT * FROM users"
 * logs // => ["[DEBUG] Starting database query"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap$1 = /*#__PURE__*/ dual(2, (self, f) =>
  fromBuild((memoMap, scope) =>
    flatMap$2(self.build(memoMap, scope), (context) => f(context).build(memoMap, scope)),
  ),
);
/**
 * Performs the specified effect if this layer succeeds.
 *
 * **When to use**
 *
 * Use to run an effectful observation after a layer has been built
 * successfully, such as logging or metrics, without changing the services the
 * layer provides.
 *
 * **Details**
 *
 * The callback receives the services produced by this layer. Its result is
 * discarded, and the original layer output is preserved.
 *
 * @see {@link tapError} for running an effect when layer construction fails with a typed error
 * @see {@link tapCause} for running an effect when layer construction fails with any cause
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const tap$1 = /*#__PURE__*/ dual(2, (self, f) =>
  fromBuild((memoMap, scope) =>
    flatMap$2(self.build(memoMap, scope), (context) => provide$3(as$1(f(context), context), scope)),
  ),
);
/**
 * Converts layer construction failures into defects, removing them from the
 * layer's error type.
 *
 * **Details**
 *
 * Use this only when failures should be treated as unrecoverable defects rather
 * than typed errors that callers can handle.
 *
 * **Example** (Converting layer failures to defects)
 *
 * ```ts import.meta.vitest
 * import { Context, Data, Effect, Exit, Layer } from "effect"
 *
 * class DatabaseError extends Data.TaggedError("DatabaseError")<{
 *   message: string
 * }> {}
 *
 * class Database extends Context.Service<Database, {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }>()("Database") {}
 *
 * // Layer that can fail during construction
 * const error = new DatabaseError({ message: "Connection failed" })
 * const flakyDatabaseLayer = Layer.effect(
 *   Database,
 *   Effect.fail(error)
 * )
 *
 * // Convert failures to fiber death - removes error from type
 * const reliableDatabaseLayer = flakyDatabaseLayer.pipe(Layer.orDie)
 *
 * // Now the layer type is Layer<Database, never, never> - no error in type
 * const program = Effect.gen(function*() {
 *   const database = yield* Database
 *   return yield* database.query("SELECT * FROM users")
 * }).pipe(
 *   Effect.provide(reliableDatabaseLayer)
 * )
 *
 * Effect.runSync(Effect.exit(program)) // => Exit.die(error)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orDie$1 = (self) => fromBuildUnsafe((memoMap, scope) => orDie$2(self.build(memoMap, scope)));
const catch_$1 = /*#__PURE__*/ dual(2, (self, onError) =>
  fromBuildUnsafe((memoMap, scope) =>
    catch_$2(self.build(memoMap, scope), (e) => onError(e).build(memoMap, scope)),
  ),
);
/**
 * Builds this layer and keeps it alive until the returned effect is interrupted.
 *
 * **When to use**
 *
 * Use when you model your entire application as a layer, such as an HTTP
 * server.
 *
 * **Details**
 *
 * When the returned effect is interrupted, the layer scope is closed and all
 * finalizers registered during layer acquisition are run.
 *
 * **Example** (Launching an application layer)
 *
 * ```ts import.meta.vitest
 * import { Context, Deferred, Effect, Fiber, Layer, Ref } from "effect"
 *
 * class HttpServer extends Context.Service<HttpServer, {
 *   readonly port: number
 * }>()("HttpServer") {}
 *
 * const program = Effect.gen(function*() {
 *   const events = yield* Ref.make<Array<string>>([])
 *   const started = yield* Deferred.make<void>()
 *
 *   const serverLayer = Layer.effect(HttpServer, Effect.gen(function*() {
 *     yield* Ref.update(events, (events) => [...events, "Starting HTTP server..."])
 *     yield* Deferred.succeed(started, undefined)
 *     return { port: 3000 }
 *   }))
 *
 *   const fiber = yield* Effect.forkChild(Layer.launch(serverLayer))
 *   yield* Deferred.await(started)
 *   yield* Fiber.interrupt(fiber)
 *   return yield* Ref.get(events)
 * })
 *
 * await Effect.runPromise(program) // => ["Starting HTTP server..."]
 * ```
 *
 * @stability stable
 * @category converting
 * @since 2.0.0
 */
const launch = (self) => scoped$1(andThen$1(build(self), never$1));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/random.js
/** @internal */
const Random = /*#__PURE__*/ Reference("effect/Random", {
  defaultValue: () => ({
    nextIntUnsafe() {
      return (
        Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)) +
        Number.MIN_SAFE_INTEGER
      );
    },
    nextDoubleUnsafe() {
      return Math.random();
    },
  }),
});
/** @internal */
const nextBetween = (min, max, draw) => {
  const value = draw * (max - min) + min;
  if (value !== max || min >= max || !Number.isFinite(max)) return value;
  if (max === 0) return -Number.MIN_VALUE;
  const view = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
  view.setFloat64(0, max);
  const bits = view.getBigUint64(0);
  view.setBigUint64(0, max > 0 ? bits - BigInt(1) : bits + BigInt(1));
  return view.getFloat64(0);
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Pull.js
/**
 * Models one low-level pull step for stream-like consumers.
 *
 * A `Pull<A, E, Done, R>` is an `Effect` that can produce one `A`, fail with an
 * ordinary error `E`, or signal end-of-input with `Cause.Done<Done>`. The
 * separate done signal lets low-level consumers distinguish normal completion
 * from failure. This module includes type extractors and helpers for detecting,
 * filtering, catching, converting, and matching done signals separately from
 * ordinary failures.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Handles `Cause.Done` failures in an effect while leaving ordinary failures
 * in the error channel.
 *
 * **When to use**
 *
 * Use to recover from a `Cause.Done` completion signal in an effect, such as
 * turning a pull leftover value into a successful recovery effect while
 * preserving ordinary failures.
 *
 * **Details**
 *
 * The handler receives the done leftover value and may recover with a new
 * effect. Non-done errors are preserved.
 *
 * @see {@link matchEffect} for handling success, ordinary failure, and done outcomes explicitly
 * @see {@link filterDoneLeftover} for extracting a done leftover from an existing `Cause`
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchDone = /*#__PURE__*/ dual(2, (effect, f) =>
  catchCauseFilter(effect, filterDoneLeftover, (l) => f(l)),
);
/**
 * Checks whether a Cause contains any done errors.
 *
 * **When to use**
 *
 * Use when you need to test whether a pull failure cause represents normal
 * completion and only need a boolean result.
 *
 * @see {@link isDoneFailure} for checking a single `Cause.Reason`
 * @see {@link filterDone} for extracting the `Cause.Done` value from a `Cause`
 * @see {@link filterNoDone} for selecting causes with no done failures
 *
 * @stability stable
 * @category predicates
 * @since 4.0.0
 */
const isDoneCause = (cause) => cause.reasons.some(isDoneFailure);
/**
 * Checks whether a `Cause.Reason` is a `Fail` reason whose error is a
 * `Cause.Done` signal.
 *
 * **When to use**
 *
 * Use when you need to identify done completion reasons while traversing
 * `cause.reasons`, before handling ordinary failures.
 *
 * @see {@link isDoneCause} for checking an entire `Cause` for any done reason
 * @see {@link filterDone} for extracting the `Cause.Done` value from a `Cause`
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isDoneFailure = (failure) => failure._tag === "Fail" && isDone$1(failure.error);
/**
 * Finds a `Cause.Done` failure in a `Cause`.
 *
 * **When to use**
 *
 * Use to separate `Cause.Done` completion from ordinary causes while preserving
 * the typed done value.
 *
 * **Details**
 *
 * Returns a successful `Result` with the `Cause.Done` value when the cause
 * contains a done signal and no other failures besides interruptions. When the
 * done signal was merged with a real failure (for example a failing
 * finalizer), the `Result` fails with the remaining cause, stripped of the
 * done signal. Without a done signal the `Result` fails with the original
 * cause.
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterDone = (cause) => {
  let done;
  let hasFailure = false;
  for (const reason of cause.reasons)
    if (isDoneFailure(reason)) done ??= reason.error;
    else if (reason._tag !== "Interrupt") hasFailure = true;
  if (done === void 0) return fail$5(cause);
  return hasFailure
    ? fail$5(fromReasons(cause.reasons.filter((reason) => !isDoneFailure(reason))))
    : succeed$5(done);
};
/**
 * Filters a Cause to extract the leftover value from done errors.
 *
 * **When to use**
 *
 * Use to extract only the leftover value carried by a `Cause.Done` completion
 * signal.
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterDoneLeftover = (cause) => {
  const done = filterDone(cause);
  return isFailure$1(done) ? done : succeed$5(done.success.value);
};
/**
 * Converts a `Cause` into an `Exit`, treating `Cause.Done` as successful
 * completion.
 *
 * **When to use**
 *
 * Use to produce an `Exit` for finalizing a low-level pull workflow when a
 * `Cause.Done` signal should be treated as success and any remaining cause
 * should fail.
 *
 * **Details**
 *
 * If the done signal is the only failure in the cause, its leftover becomes
 * the successful value. Otherwise the non-done cause becomes the failure
 * cause.
 *
 * @see {@link filterDone} for extracting the done signal without converting the cause to an `Exit`
 * @see {@link matchEffect} for handling `Pull` success, failure, and done outcomes directly
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const doneExitFromCause = (cause) => {
  const halt = filterDone(cause);
  return !isFailure$1(halt) ? succeed$3(halt.success.value) : failCause$2(halt.failure);
};
/**
 * Pattern matches on a Pull, handling success, failure, and done cases.
 *
 * **When to use**
 *
 * Use to handle all three `Pull` outcomes with effectful handlers.
 *
 * **Example** (Matching Pull outcomes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Pull } from "effect"
 *
 * const pull = Cause.done("stream ended")
 *
 * const result = Pull.matchEffect(pull, {
 *   onSuccess: (value) => Effect.succeed(`Got value: ${value}`),
 *   onFailure: (cause) => Effect.succeed(`Got error: ${cause}`),
 *   onDone: (leftover) => Effect.succeed(`Stream halted with: ${leftover}`)
 * })
 *
 * await Effect.runPromise(result) // => "Stream halted with: stream ended"
 * ```
 *
 * @stability stable
 * @category pattern matching
 * @since 4.0.0
 */
const matchEffect$1 = /*#__PURE__*/ dual(2, (self, options) =>
  matchCauseEffect$1(self, {
    onSuccess: options.onSuccess,
    onFailure: (cause) => {
      const halt = filterDone(cause);
      return !isFailure$1(halt)
        ? options.onDone(halt.success.value)
        : options.onFailure(halt.failure);
    },
  }),
);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Schedule.js
const TypeId$2 = "~effect/Schedule";
const randomNext = /*#__PURE__*/ Random.useSync((random) => random.nextDoubleUnsafe());
/**
 * Context reference containing metadata for the currently running schedule step.
 *
 * **Details**
 *
 * Repeat, retry, stream, and channel scheduling operations provide this service
 * to effects run between schedule steps. The default value contains undefined
 * input and output values, zero duration, and zeroed timing fields before any
 * schedule step has produced metadata.
 *
 * @stability stable
 * @category services
 * @since 4.0.0
 */
const CurrentMetadata = /*#__PURE__*/ Reference("effect/Schedule/CurrentMetadata", {
  defaultValue: /*#__PURE__*/ constant({
    input: void 0,
    output: void 0,
    duration: zero,
    attempt: 0,
    start: 0,
    now: 0,
    elapsed: 0,
    elapsedSincePrevious: 0,
  }),
});
const ScheduleProto = {
  [TypeId$2]: {
    _Out: identity,
    _In: identity,
    _Env: identity,
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Type guard that checks if a value is a Schedule.
 *
 * **Example** (Checking for schedules)
 *
 * ```ts import.meta.vitest
 * import { Schedule } from "effect"
 *
 * const schedule = Schedule.exponential("100 millis")
 * const notSchedule = { foo: "bar" }
 *
 * Schedule.isSchedule(schedule) // => true
 * Schedule.isSchedule(notSchedule) // => false
 * Schedule.isSchedule(null) // => false
 * Schedule.isSchedule(undefined) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isSchedule = (u) => hasProperty(u, TypeId$2);
/**
 * Creates a Schedule from a step function that returns a Pull.
 *
 * **Example** (Creating a custom schedule from a step function)
 *
 * ```ts import.meta.vitest
 * import { Cause, Duration, Effect, Schedule } from "effect"
 *
 * const schedule = Schedule.fromStep(Effect.sync(() => {
 *   let count = 0
 *
 *   return (_now: number, _input: string) => {
 *     if (count >= 3) {
 *       return Cause.done(count)
 *     }
 *     return Effect.succeed([count++, Duration.millis(100)] as [number, Duration.Duration])
 *   }
 * }))
 *
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(schedule)
 *   const [output] = yield* step(0, "input")
 *   return output
 * })
 *
 * await Effect.runPromise(program) // => 0
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromStep = (step) => {
  const self = Object.create(ScheduleProto);
  self.step = step;
  return self;
};
const metadataFn = () => {
  let n = 0;
  let previous;
  let start;
  return (now, input) => {
    if (start === void 0) start = now;
    const elapsed = now - start;
    const elapsedSincePrevious = previous === void 0 ? 0 : now - previous;
    previous = now;
    return {
      input,
      attempt: ++n,
      start,
      now,
      elapsed,
      elapsedSincePrevious,
    };
  };
};
/**
 * Creates a Schedule from a step function that receives metadata about the schedule's execution.
 *
 * **Example** (Creating a metadata-aware schedule)
 *
 * ```ts import.meta.vitest
 * import { Cause, Duration, Effect, Schedule } from "effect"
 *
 * const firstThreeInputs = Schedule.fromStepWithMetadata(Effect.succeed((metadata: Schedule.InputMetadata<string>) => {
 *   if (metadata.attempt > 3) {
 *     return Cause.done("finished")
 *   }
 *
 *   return Effect.succeed([
 *     `attempt ${metadata.attempt}: ${metadata.input}`,
 *     Duration.millis(250)
 *   ] as [string, Duration.Duration])
 * }))
 *
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(firstThreeInputs)
 *   const [output] = yield* step(0, "input")
 *   return output
 * })
 *
 * await Effect.runPromise(program) // => "attempt 1: input"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromStepWithMetadata = (step) =>
  fromStep(
    map$2(step, (f) => {
      const meta = metadataFn();
      return (now, input) => f(meta(now, input));
    }),
  );
/**
 * Extracts the step function from a Schedule.
 *
 * **Example** (Extracting a schedule step function)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Schedule } from "effect"
 *
 * // Extract step function from an existing schedule
 * const schedule = Schedule.exponential("100 millis").pipe(Schedule.upTo({ times: 3 }))
 *
 * const program = Effect.gen(function*() {
 *   const stepFn = yield* Schedule.toStep(schedule)
 *
 *   // Use the step function directly for custom logic. The timestamp is
 *   // supplied by the caller, so tests can pass a deterministic value.
 *   const now = 0
 *   return yield* stepFn(now, "input")
 * })
 *
 * await Effect.runPromise(program) // => [Duration.millis(100), Duration.millis(100)]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toStep = (schedule) =>
  catchCause$1(schedule.step, (cause) => succeed$4(() => failCause$3(cause)));
/**
 * Extracts a step function from a `Schedule` that sleeps for each computed
 * delay and returns metadata for the completed step.
 *
 * **When to use**
 *
 * Use to drive a schedule manually while preserving the computed output,
 * delay, input, attempt, and elapsed timing metadata for each step.
 *
 * **Details**
 *
 * The returned step reads the current time from `Clock` when invoked, calls the
 * schedule step with that timestamp and input, sleeps for the returned
 * duration, and then yields `Metadata`.
 *
 * @see {@link toStep} for manually supplying the timestamp and handling the returned delay yourself
 * @see {@link toStepWithSleep} for the same automatic sleeping behavior when only the schedule output is needed
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toStepWithMetadata = (schedule) =>
  clockWith$1((clock) =>
    map$2(toStep(schedule), (step) => {
      const metaFn = metadataFn();
      return (input) =>
        suspend$2(() => {
          const now = clock.currentTimeMillisUnsafe();
          return flatMap$2(step(now, input), ([output, duration]) => {
            const meta = metaFn(now, input);
            meta.output = output;
            meta.duration = duration;
            return as$1(sleep$1(duration), meta);
          });
        });
    }),
  );
/**
 * Returns a new `Schedule` that adds the delay computed by the specified
 * effectful function to the next recurrence of the schedule.
 *
 * **Example** (Adding extra delay to a schedule)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Schedule } from "effect"
 *
 * const schedule = Schedule.recurs(1).pipe(
 *   Schedule.addDelay(() => Effect.succeed("25 millis"))
 * )
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(schedule)
 *   const [, delay] = yield* step(0, undefined)
 *   return delay
 * })
 *
 * await Effect.runPromise(program) // => Duration.millis(25)
 * ```
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const addDelay = /*#__PURE__*/ dual(2, (self, f) =>
  modifyDelay(self, (metadata) =>
    map$2(f(metadata), (d) => sum(fromInputUnsafe(d), metadata.duration)),
  ),
);
/**
 * Schedule that always recurs, but will wait a certain amount between
 * repetitions, given by `base * factor.pow(n)`, where `n` is the number of
 * repetitions so far. Returns the current duration between recurrences.
 *
 * **Example** (Retrying with exponential backoff)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Schedule } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(Schedule.exponential("100 millis"))
 *   return yield* step(0, undefined)
 * })
 *
 * await Effect.runPromise(program) // => [Duration.millis(100), Duration.millis(100)]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const exponential = (base, factor = 2) => {
  const baseMillis = toMillis(fromInputUnsafe(base));
  return fromStepWithMetadata(
    succeed$4((meta) => {
      const duration = millis(baseMillis * Math.pow(factor, meta.attempt - 1));
      return succeed$4([duration, duration]);
    }),
  );
};
/**
 * Returns a new `Schedule` that modifies the delay of the next recurrence
 * of the schedule using the specified effectful function.
 *
 * **Example** (Modifying delays from schedule metadata)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Schedule } from "effect"
 *
 * const schedule = Schedule.spaced("10 millis").pipe(
 *   Schedule.modifyDelay(({ duration }) => Effect.succeed(Duration.times(duration, 2)))
 * )
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(schedule)
 *   const [, delay] = yield* step(0, undefined)
 *   return delay
 * })
 *
 * await Effect.runPromise(program) // => Duration.millis(20)
 * ```
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const modifyDelay = /*#__PURE__*/ dual(2, (self, f) =>
  fromStep(
    map$2(toStep(self), (step) => {
      const meta = metadataFn();
      return (now, input) =>
        flatMap$2(step(now, input), ([output, duration]) =>
          map$2(
            f({
              ...meta(now, input),
              output,
              duration,
            }),
            (replacement) => [output, fromInputUnsafe(replacement)],
          ),
        );
    }),
  ),
);
/**
 * Returns a new `Schedule` that randomly adjusts each recurrence delay.
 *
 * **When to use**
 *
 * Use to add random variation to an existing schedule's recurrence delays while
 * preserving its output and completion behavior.
 *
 * **Details**
 *
 * Each recurrence delay is scaled by a random factor between `0.8` and `1.2`.
 *
 * @see {@link modifyDelay} for replacing recurrence delays with a custom effectful transformation
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const jittered = (self) =>
  modifyDelay(self, ({ duration }) =>
    map$2(randomNext, (random) => {
      const millis$1 = toMillis(duration);
      return millis(millis$1 * 0.8 * (1 - random) + millis$1 * 1.2 * random);
    }),
  );
/**
 * Returns a new `Schedule` that outputs the inputs of the specified schedule.
 *
 * **Example** (Passing inputs through as outputs)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schedule } from "effect"
 *
 * const inputSchedule = Schedule.passthrough(
 *   Schedule.exponential("100 millis").pipe(Schedule.upTo({ times: 3 }))
 * )
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(inputSchedule)
 *   const [output] = yield* step(0, "input")
 *   return output
 * })
 *
 * await Effect.runPromise(program) // => "input"
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const passthrough = (self) =>
  fromStep(
    map$2(
      toStep(self),
      (step) => (now, input) =>
        matchEffect$1(step(now, input), {
          onSuccess: (result) => succeed$4([input, result[1]]),
          onFailure: failCause$3,
          onDone: () => done$1(input),
        }),
    ),
  );
/**
 * Returns a schedule that recurs continuously, each repetition spaced the
 * specified duration from the last run.
 *
 * **When to use**
 *
 * Use when each delay should start after the previous action completes.
 *
 * **Example** (Repeating with fixed spacing)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Schedule } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const step = yield* Schedule.toStep(Schedule.spaced("2 seconds"))
 *   return yield* step(0, undefined)
 * })
 *
 * await Effect.runPromise(program) // => [0, Duration.seconds(2)]
 * ```
 *
 * @see {@link fixed} for recurrence aligned to a regular cadence
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const spaced = (duration) => {
  const decoded = fromInputUnsafe(duration);
  return fromStepWithMetadata(succeed$4((meta) => succeed$4([meta.attempt - 1, decoded])));
};
/**
 * Returns a new `Schedule` that limits an existing schedule by elapsed
 * duration, number of outputs, or both.
 *
 * **When to use**
 *
 * Use to bound an existing schedule while preserving its output and delay
 * behavior. When both `duration` and `times` are specified, the schedule
 * stops as soon as either limit is reached.
 *
 * **Gotchas**
 *
 * The `times` option limits schedule outputs. When used with repeat or retry,
 * the effect is evaluated once before the schedule is stepped, so the total
 * number of evaluations can be one greater than the configured number of
 * outputs.
 *
 * The `duration` option is based on the elapsed time observed by the schedule
 * step. Long-running effects can cause the duration limit to be detected on the
 * following schedule step.
 *
 * **Example** (Limiting by duration and recurrence count)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schedule } from "effect"
 * import { TestClock } from "effect/testing"
 *
 * const executions: Array<number> = []
 * const schedule = Schedule.forever.pipe(Schedule.upTo({ times: 2 }))
 * const program = Effect.sync(() => executions.push(executions.length + 1)).pipe(
 *   Effect.repeat(schedule),
 *   Effect.as(executions)
 * )
 *
 * await Effect.runPromise(Effect.provide(program, TestClock.layer())) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const upTo = /*#__PURE__*/ dual(2, (self, options) => {
  const duration = options.duration === void 0 ? void 0 : fromInputUnsafe(options.duration);
  return while_(self, ({ attempt, elapsed }) =>
    succeed$4(
      (options.times === void 0 || attempt <= options.times) &&
        (duration === void 0 || isLessThanOrEqualTo(millis(elapsed), duration)),
    ),
  );
});
const while_ = /*#__PURE__*/ dual(2, (self, predicate) =>
  fromStep(
    map$2(toStep(self), (step) => {
      const meta = metadataFn();
      return (now, input) =>
        flatMap$2(step(now, input), (result) => {
          const [output, duration] = result;
          const eff = predicate({
            ...meta(now, input),
            output,
            duration,
          });
          return flatMap$2(isEffect$1(eff) ? eff : succeed$4(eff), (check) =>
            check ? succeed$4(result) : done$1(output),
          );
        });
    }),
  ),
);
/**
 * Returns a new `Schedule` that will recur forever.
 *
 * **Details**
 *
 * The output of the schedule is the current count of its repetitions thus far
 * (i.e. `0, 1, 2, ...`).
 *
 * **Example** (Repeating forever)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schedule } from "effect"
 * import { TestClock } from "effect/testing"
 *
 * const executions: Array<number> = []
 * const schedule = Schedule.forever.pipe(Schedule.upTo({ times: 2 }))
 * const program = Effect.sync(() => executions.push(executions.length + 1)).pipe(
 *   Effect.repeat(schedule),
 *   Effect.as(executions)
 * )
 *
 * await Effect.runPromise(Effect.provide(program, TestClock.layer())) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const forever$1 = /*#__PURE__*/ spaced(zero);
const constIdentity = /*#__PURE__*/ fromStep(
  /*#__PURE__*/ succeed$4((_now, input) => succeed$4([input, zero])),
);
const identity_ = () => constIdentity;
/**
 * Sets the input type of the provided schedule without altering its behavior.
 *
 * **When to use**
 *
 * Use to adapt a schedule that does not depend on its input values.
 *
 * **Details**
 *
 * This helper is checked at compile time and does not change the schedule's
 * runtime behavior.
 *
 * **Example** (Setting a schedule input type)
 *
 * ```ts import.meta.vitest
 * import { Schedule } from "effect"
 *
 * const schedule = Schedule.recurs(3).pipe(
 *   Schedule.setInputType<string>()
 * )
 * Schedule.isSchedule(schedule) // => true
 * ```
 *
 * @stability stable
 * @category utility types
 * @since 4.0.0
 */
const setInputType = () => (self) => self;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/layer.js
const provideLayer = (self, layer, options) =>
  scopedWith$1((scope) =>
    flatMap$2(
      options?.local
        ? buildWithMemoMap(layer, makeMemoMapUnsafe(), scope)
        : buildWithScope(layer, scope),
      (context) => provideContext$1(self, context),
    ),
  );
/** @internal */
const provide$1 = /*#__PURE__*/ dual(
  (args) => isEffect$1(args[0]),
  (self, source, options) =>
    isContext(source)
      ? provideContext$1(self, source)
      : provideLayer(self, Array.isArray(source) ? mergeAll(...source) : source, options),
);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/schedule.js
const findErrorOnly = (cause) =>
  cause.reasons.every(isFailReason$1) ? findError$1(cause) : fail$5(cause);
/** @internal */
const repeatOrElse = /*#__PURE__*/ dual(3, (self, schedule, orElse) =>
  flatMap$2(toStepWithMetadata(schedule), (step) => {
    let meta = CurrentMetadata.defaultValue();
    return catchCauseFilter(
      catchDone(
        forever$2(
          tap$2(
            flatMap$2(
              suspend$2(() => provideService$1(self, CurrentMetadata, meta)),
              step,
            ),
            (meta_) =>
              sync$2(() => {
                meta = meta_;
              }),
          ),
          { disableYield: true },
        ),
        (out) => succeed$4(out),
      ),
      findErrorOnly,
      (error) => orElse(error, meta.attempt === 0 ? none() : some(meta)),
    );
  }),
);
/** @internal */
const retryOrElse = /*#__PURE__*/ dual(3, (self, policy, orElse) =>
  flatMap$2(toStepWithMetadata(policy), (step) => {
    let meta = CurrentMetadata.defaultValue();
    let lastError;
    const loop = catchCauseFilter(
      suspend$2(() => provideService$1(self, CurrentMetadata, meta)),
      findErrorOnly,
      (error) => {
        lastError = error;
        return flatMap$2(step(error), (meta_) => {
          meta = meta_;
          return loop;
        });
      },
    );
    return catchDone(loop, (out) => internalCall(() => orElse(lastError, out)));
  }),
);
/** @internal */
const repeat$1 = /*#__PURE__*/ dual(2, (self, options) => {
  const schedule =
    typeof options === "function"
      ? options(identity)
      : isSchedule(options)
        ? options
        : buildFromOptions(options);
  return repeatOrElse(self, schedule, fail$4);
});
/** @internal */
const retry$1 = /*#__PURE__*/ dual(2, (self, options) => {
  const schedule =
    typeof options === "function"
      ? options(identity)
      : isSchedule(options)
        ? options
        : buildFromOptions(options);
  return retryOrElse(self, schedule, fail$4);
});
const passthroughForever = /*#__PURE__*/ passthrough(forever$1);
/** @internal */
const buildFromOptions = (options) => {
  let schedule = options.schedule ? passthrough(options.schedule) : passthroughForever;
  if (options.while)
    schedule = while_(schedule, ({ input }) => {
      const applied = options.while(input);
      return isEffect$1(applied) ? applied : succeed$4(applied);
    });
  if (options.until)
    schedule = while_(schedule, ({ input }) => {
      const applied = options.until(input);
      return isEffect$1(applied) ? map$2(applied, (b) => !b) : succeed$4(!applied);
    });
  if (options.times !== void 0)
    schedule = while_(schedule, ({ attempt }) => succeed$4(attempt <= options.times));
  return schedule;
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/MutableHashMap.js
const TypeId$1 = "~effect/MutableHashMap";
const MutableHashMapProto = {
  [TypeId$1]: TypeId$1,
  [Symbol.iterator]() {
    return this.backing[Symbol.iterator]();
  },
  toString() {
    return `MutableHashMap(${format$1(Array.from(this))})`;
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: toJson(Array.from(this)),
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
 * Creates an empty MutableHashMap.
 *
 * **When to use**
 *
 * Use to create a fresh mutable map before adding entries over time.
 *
 * **Details**
 *
 * Each call returns a new empty map instance.
 *
 * **Example** (Creating an empty map)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.empty<string, number>()
 *
 * // Add some entries
 * MutableHashMap.set(map, "key1", 42)
 * MutableHashMap.set(map, "key2", 100)
 *
 * MutableHashMap.size(map) // => 2
 * ```
 *
 * @see {@link make} for creating a map from explicit entries
 * @see {@link fromIterable} for creating a map from an iterable of entries
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty = () => {
  const self = Object.create(MutableHashMapProto);
  self.backing = /* @__PURE__ */ new Map();
  self.buckets = /* @__PURE__ */ new Map();
  return self;
};
/**
 * Creates a MutableHashMap from a variable number of key-value pairs.
 *
 * **When to use**
 *
 * Use to create a mutable hash map from explicit entries known at the call site.
 *
 * **Example** (Creating a map from entries)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap, Option } from "effect"
 *
 * const map = MutableHashMap.make(
 *   ["key1", 42],
 *   ["key2", 100],
 *   ["key3", 200]
 * )
 *
 * MutableHashMap.get(map, "key1") // => Option.some(42)
 * MutableHashMap.size(map) // => 3
 * ```
 *
 * @see {@link empty} for creating an empty map
 * @see {@link fromIterable} for creating a map from an iterable of entries
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make = (...entries) => fromIterable(entries);
/**
 * Creates a MutableHashMap from an iterable collection of key-value pairs.
 *
 * **When to use**
 *
 * Use to create a mutable hash map from an existing iterable of entries.
 *
 * **Example** (Creating a map from an iterable)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap, Option } from "effect"
 *
 * const entries = [
 *   ["apple", 1],
 *   ["banana", 2],
 *   ["cherry", 3]
 * ] as const
 *
 * const map = MutableHashMap.fromIterable(entries)
 *
 * MutableHashMap.get(map, "banana") // => Option.some(2)
 * MutableHashMap.size(map) // => 3
 *
 * // Works with any iterable
 * const fromMap = MutableHashMap.fromIterable(new Map([["x", 10], ["y", 20]]))
 * MutableHashMap.get(fromMap, "x") // => Option.some(10)
 * ```
 *
 * @see {@link make} for creating a map from explicit entries
 * @see {@link empty} for creating an empty map
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromIterable = (entries) => {
  const self = empty();
  for (const [key, value] of entries) set(self, key, value);
  return self;
};
/**
 * Looks up a key in the `MutableHashMap` safely.
 *
 * **When to use**
 *
 * Use to safely read a `MutableHashMap` value for a key as an `Option`.
 *
 * **Details**
 *
 * Returns `Some(value)` when an equal key is present and `None` when the key is
 * absent.
 *
 * **Example** (Getting a value)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap, Option } from "effect"
 *
 * const map = MutableHashMap.make(["key1", 42], ["key2", 100])
 *
 * MutableHashMap.get(map, "key1") // => Option.some(42)
 * MutableHashMap.get(map, "key3") // => Option.none()
 *
 * // Pipe-able version
 * MutableHashMap.get("key1")(map) // => Option.some(42)
 * ```
 *
 * @see {@link has} for checking only whether a key is present
 * @see {@link set} for inserting or replacing a value by key
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const get = /*#__PURE__*/ dual(2, (self, key) => {
  if (self.backing.has(key)) return some(self.backing.get(key));
  else if (isSimpleKey(key)) return none();
  const hash$2 = hash(key);
  const bucket = self.buckets.get(hash$2);
  if (bucket === void 0) return none();
  return getFromBucket(self, bucket, key);
});
const isSimpleKey = (u) => typeof u !== "object" && typeof u !== "function";
/**
 * Returns an iterable over the values in the `MutableHashMap`.
 *
 * **When to use**
 *
 * Use to iterate over the values currently stored in a mutable hash map.
 *
 * **Example** (Reading values)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.make(
 *   ["apple", 1],
 *   ["banana", 2],
 *   ["cherry", 3]
 * )
 *
 * const allValues = Array.from(MutableHashMap.values(map)) // => [1, 2, 3]
 *
 * // Useful for calculations
 * allValues.reduce((sum, value) => sum + value, 0) // => 6
 *
 * // Filter values
 * allValues.filter((value) => value > 1) // => [2, 3]
 * ```
 *
 * @see {@link keys} for iterating over stored keys
 *
 * @stability stable
 * @category getters
 * @since 3.8.0
 */
const values = (self) => self.backing.values();
const getFromBucket = (self, bucket, key) => {
  for (let i = 0, len = bucket.length; i < len; i++)
    if (equals$1(key, bucket[i])) {
      const refKey = bucket[i];
      return some(self.backing.get(refKey));
    }
  return none();
};
/**
 * Checks whether the MutableHashMap contains the specified key.
 *
 * **When to use**
 *
 * Use to test whether a key is present in a `MutableHashMap` without reading
 * its value.
 *
 * **Example** (Checking for a key)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.make(["key1", 42], ["key2", 100])
 *
 * MutableHashMap.has(map, "key1") // => true
 * MutableHashMap.has(map, "key3") // => false
 *
 * // Pipe-able version
 * MutableHashMap.has("key1")(map) // => true
 * ```
 *
 * @see {@link get} for reading the value as an `Option`
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const has = /*#__PURE__*/ dual(2, (self, key) => isSome(get(self, key)));
/**
 * Sets a key-value pair in the MutableHashMap, mutating the map in place.
 * If the key already exists, its value is updated.
 *
 * **When to use**
 *
 * Use to insert a new `MutableHashMap` entry or replace an existing entry in
 * place.
 *
 * **Example** (Setting key-value pairs)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap, Option } from "effect"
 *
 * const map = MutableHashMap.empty<string, number>()
 *
 * // Add new entries
 * MutableHashMap.set(map, "key1", 42)
 * MutableHashMap.set(map, "key2", 100)
 *
 * MutableHashMap.get(map, "key1") // => Option.some(42)
 * MutableHashMap.size(map) // => 2
 *
 * // Update existing entry
 * MutableHashMap.set(map, "key1", 999)
 * MutableHashMap.get(map, "key1") // => Option.some(999)
 *
 * // Pipe-able version
 * MutableHashMap.set("key3", 300)(map)
 * MutableHashMap.size(map) // => 3
 * ```
 *
 * @see {@link modify} for updating an existing value with a function
 * @see {@link modifyAt} for setting or removing based on the current optional value
 * @see {@link remove} for deleting an entry by key
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const set = /*#__PURE__*/ dual(3, (self, key, value) => {
  if (self.backing.has(key) || isSimpleKey(key)) {
    self.backing.set(key, value);
    return self;
  }
  const hash$4 = hash(key);
  const bucket = self.buckets.get(hash$4);
  if (bucket === void 0) {
    self.buckets.set(hash$4, [key]);
    self.backing.set(key, value);
    return self;
  }
  let refKey = getRefKey(bucket, key);
  if (refKey === void 0) {
    bucket.push(key);
    refKey = key;
  }
  self.backing.set(refKey, value);
  return self;
});
const getRefKey = (bucket, key) => {
  for (let i = 0, len = bucket.length; i < len; i++) if (equals$1(key, bucket[i])) return bucket[i];
};
/**
 * Removes the specified key from the MutableHashMap, mutating the map in place.
 * If the key doesn't exist, the map remains unchanged.
 *
 * **When to use**
 *
 * Use to delete one key from a mutable hash map in place.
 *
 * **Example** (Removing a key)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.make(
 *   ["key1", 42],
 *   ["key2", 100],
 *   ["key3", 200]
 * )
 *
 * MutableHashMap.size(map) // => 3
 *
 * // Remove existing key
 * MutableHashMap.remove(map, "key2")
 * MutableHashMap.size(map) // => 2
 * MutableHashMap.has(map, "key2") // => false
 *
 * // Remove non-existent key (no effect)
 * MutableHashMap.remove(map, "nonexistent")
 * MutableHashMap.size(map) // => 2
 *
 * // Pipe-able version
 * MutableHashMap.remove("key1")(map)
 * MutableHashMap.size(map) // => 1
 * ```
 *
 * @see {@link clear} for removing all entries
 * @see {@link modifyAt} for conditionally removing based on the current value
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const remove = /*#__PURE__*/ dual(2, (self, key_) => {
  if (isSimpleKey(key_)) {
    self.backing.delete(key_);
    return self;
  }
  const hash$1 = hash(key_);
  const bucket = self.buckets.get(hash$1);
  if (bucket === void 0) return self;
  for (let i = 0, len = bucket.length; i < len; i++) {
    const bkey = bucket[i];
    if (bkey === key_ || equals$1(key_, bkey)) {
      self.backing.delete(bkey);
      bucket.splice(i, 1);
      break;
    }
  }
  if (bucket.length === 0) self.buckets.delete(hash$1);
  return self;
});
/**
 * Removes all key-value pairs from the MutableHashMap, mutating the map in place.
 * The map becomes empty after this operation.
 *
 * **When to use**
 *
 * Use to empty a mutable hash map while keeping the same map instance.
 *
 * **Example** (Clearing all entries)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.make(
 *   ["key1", 42],
 *   ["key2", 100],
 *   ["key3", 200]
 * )
 *
 * MutableHashMap.size(map) // => 3
 *
 * // Clear all entries
 * MutableHashMap.clear(map)
 *
 * MutableHashMap.size(map) // => 0
 * MutableHashMap.has(map, "key1") // => false
 *
 * // Can still add new entries after clearing
 * MutableHashMap.set(map, "new", 999)
 * Array.from(map) // => [["new", 999]]
 * ```
 *
 * @see {@link remove} for deleting one key
 * @see {@link empty} for creating a fresh empty map
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const clear = (self) => {
  self.backing.clear();
  self.buckets.clear();
  return self;
};
/**
 * Returns the number of key-value pairs in the MutableHashMap.
 *
 * **When to use**
 *
 * Use to read how many entries are currently stored in the mutable hash map.
 *
 * **Example** (Checking map size)
 *
 * ```ts import.meta.vitest
 * import { MutableHashMap } from "effect"
 *
 * const map = MutableHashMap.empty<string, number>()
 * MutableHashMap.size(map) // => 0
 *
 * MutableHashMap.set(map, "key1", 42)
 * MutableHashMap.set(map, "key2", 100)
 * MutableHashMap.size(map) // => 2
 *
 * MutableHashMap.remove(map, "key1")
 * MutableHashMap.size(map) // => 1
 *
 * MutableHashMap.clear(map)
 * MutableHashMap.size(map) // => 0
 * ```
 *
 * @see {@link isEmpty} for checking whether the map has no entries
 *
 * @stability stable
 * @category getters
 * @since 2.0.0
 */
const size = (self) => self.backing.size;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Request.js
const TypeId = "~effect/Request";
const requestVariance = /*#__PURE__*/ byReferenceUnsafe({
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _R: (_) => _,
});
/**
 * Prototype used by Effect's request constructors.
 *
 * **Details**
 *
 * This low-level value provides the structural request marker for values
 * created by `Request.of`, `Request.tagged`, `Request.Class`, and
 * `Request.TaggedClass`. Most users should use those constructors instead of
 * interacting with the prototype directly.
 *
 * @stability stable
 * @category prototypes
 * @since 4.0.0
 */
const RequestPrototype = {
  ...StructuralProto,
  [TypeId]: requestVariance,
};
/**
 * Creates a constructor function for a specific Request type.
 *
 * **Example** (Creating untagged request constructors)
 *
 * ```ts import.meta.vitest
 * import { Request } from "effect"
 *
 * declare const UserProfile: unique symbol
 * declare const ProfileError: unique symbol
 * type UserProfile = typeof UserProfile
 * type ProfileError = typeof ProfileError
 *
 * interface GetUserProfile extends Request.Request<UserProfile, ProfileError> {
 *   readonly id: string
 *   readonly includeSettings: boolean
 * }
 *
 * const GetUserProfile = Request.of<GetUserProfile>()
 *
 * const request = GetUserProfile({
 *   id: "user-123",
 *   includeSettings: true
 * })
 *
 * request.id // => "user-123"
 * request.includeSettings // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const of = () => (args) => Object.setPrototypeOf({ ...args }, RequestPrototype);
/**
 * Creates a `Request.Entry` from its component fields.
 *
 * **Details**
 *
 * This is a low-level helper for request runtime and resolver infrastructure;
 * most application code receives entries from a `RequestResolver` instead of
 * constructing them directly.
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const makeEntry = (options) => options;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/request.js
/** @internal */
const request$1 = /*#__PURE__*/ dual(2, (self, resolver) => {
  const withResolver = (resolver) =>
    callback$1((resume) => {
      const entry = addEntry(resolver, self, resume, getCurrentFiber());
      return maybeRemoveEntry(resolver, entry);
    });
  return isEffect$1(resolver) ? flatMap$2(resolver, withResolver) : withResolver(resolver);
});
/**
 * Pending batches of resolvers whose `batchKey` is in this set match keys with
 * `Equal` instead of by reference.
 *
 * @internal
 */
const equalBatchKeys = /*#__PURE__*/ new WeakSet();
const makeBatchMap = (resolver) => {
  if (!equalBatchKeys.has(resolver.batchKey)) return /* @__PURE__ */ new Map();
  const map = empty();
  return {
    get: (key) => getOrUndefined$2(get(map, key)),
    has: (key) => has(map, key),
    set: (key, batch) => set(map, key, batch),
    delete: (key) => remove(map, key),
  };
};
const batchPool = [];
const pendingBatches = /*#__PURE__*/ new WeakMap();
const addEntry = (resolver, request, resume, fiber) => {
  let batchMap = pendingBatches.get(resolver);
  if (!batchMap) {
    batchMap = makeBatchMap(resolver);
    pendingBatches.set(resolver, batchMap);
  }
  let batch;
  let completed = false;
  const entry = makeEntry({
    request,
    context: fiber.context,
    uninterruptible: false,
    completeUnsafe(effect) {
      if (completed) return;
      completed = true;
      if (batch && !batch.entrySet.delete(entry)) return;
      resume(effect);
    },
  });
  if (resolver.preCheck !== void 0 && !resolver.preCheck(entry)) return entry;
  const key = resolver.batchKey(entry);
  batch = batchMap.get(key);
  if (!batch) {
    if (batchPool.length > 0) {
      batch = batchPool.pop();
      batch.key = key;
      batch.resolver = resolver;
      batch.map = batchMap;
    } else {
      const newBatch = {
        key,
        resolver,
        map: batchMap,
        entrySet: /* @__PURE__ */ new Set(),
        entries: /* @__PURE__ */ new Set(),
        delayEffect: flatMap$2(
          suspend$2(() => newBatch.resolver.delay),
          (_) => runBatch(newBatch),
        ),
        run: onExit$1(
          suspend$2(() => newBatch.resolver.runAll(Array.from(newBatch.entries), newBatch.key)),
          (exit) => {
            for (const entry of newBatch.entrySet)
              entry.completeUnsafe(
                exit._tag === "Success"
                  ? exitDie(
                      new Error("Effect.request: RequestResolver did not complete request", {
                        cause: entry.request,
                      }),
                    )
                  : exit,
              );
            newBatch.entries.clear();
            if (batchPool.length < 128) {
              newBatch.entrySet.clear();
              newBatch.key = void 0;
              newBatch.fiber = void 0;
              newBatch.resolver = void 0;
              newBatch.map = void 0;
              batchPool.push(newBatch);
            }
            return void_$2;
          },
        ),
      };
      batch = newBatch;
    }
    batchMap.set(key, batch);
    batch.fiber = runForkWith$1(fiber.context)(batch.delayEffect, {
      scheduler: fiber.cache.scheduler,
    });
  }
  batch.entrySet.add(entry);
  batch.entries.add(entry);
  if (batch.resolver.collectWhile(batch.entries)) return entry;
  batch.fiber.interruptUnsafe(fiber.id);
  batch.fiber = runForkWith$1(fiber.context)(runBatch(batch), { scheduler: fiber.cache.scheduler });
  return entry;
};
const removeEntryUnsafe = (resolver, entry) => {
  if (entry.uninterruptible) return;
  const batchMap = pendingBatches.get(resolver);
  if (!batchMap) return;
  const key = resolver.batchKey(entry);
  const batch = batchMap.get(key);
  if (!batch) return;
  if (!batch.entries.delete(entry)) return;
  batch.entrySet.delete(entry);
  let fiber;
  if (batch.entries.size === 0) {
    batchMap.delete(key);
    fiber = batch.fiber;
  }
  entry.completeUnsafe(exitInterrupt());
  fiber?.interruptUnsafe();
};
const maybeRemoveEntry = (resolver, entry) => sync$2(() => removeEntryUnsafe(resolver, entry));
function runBatch(batch) {
  if (!batch.map.has(batch.key)) return void_$2;
  batch.map.delete(batch.key);
  return batch.run;
}
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Effect.js
/**
 * Checks whether a value is an `Effect`.
 *
 * **Example** (Checking whether a value is an Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * Effect.isEffect(Effect.succeed(1)) // => true
 * Effect.isEffect("hello") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 2.0.0
 */
const isEffect = isEffect$1;
/**
 * Combines an iterable or record of effects into one effect whose success shape
 * follows the input.
 *
 * **When to use**
 *
 * Use to run a known collection of effects and collect results in the same
 * tuple, iterable, or record shape.
 *
 * **Details**
 *
 * Tuple and iterable inputs collect results in order. Record inputs collect
 * results under the same keys. By default, the combined effect fails on the
 * first failure; with concurrent execution, effects that have already started
 * may be interrupted, while effects not yet started are skipped.
 *
 * Options:
 *
 * Use `concurrency` to control sequential or concurrent execution. Use
 * `mode: "result"` to run every effect and collect each success or failure as a
 * `Result` in the same output shape. Use `discard: true` to ignore successful
 * values and return `void`.
 *
 * **Example** (Collecting tuple results in order)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const tupleOfEffects = [
 *   Effect.succeed(42),
 *   Effect.succeed("Hello")
 * ] as const
 *
 * //      ┌─── Effect<[number, string], never, never>
 * //      ▼
 * const resultsAsTuple = Effect.all(tupleOfEffects)
 *
 * await Effect.runPromise(resultsAsTuple) // => [42, "Hello"]
 * ```
 *
 * **Example** (Collecting iterable results in order)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const iterableOfEffects: Iterable<Effect.Effect<number>> = [1, 2, 3].map(
 *   Effect.succeed
 * )
 *
 * //      ┌─── Effect<number[], never, never>
 * //      ▼
 * const resultsAsArray = Effect.all(iterableOfEffects)
 *
 * await Effect.runPromise(resultsAsArray) // => [1, 2, 3]
 * ```
 *
 * **Example** (Collecting struct results by key)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const structOfEffects = {
 *   a: Effect.succeed(42),
 *   b: Effect.succeed("Hello")
 * }
 *
 * //      ┌─── Effect<{ a: number; b: string; }, never, never>
 * //      ▼
 * const resultsAsStruct = Effect.all(structOfEffects)
 *
 * await Effect.runPromise(resultsAsStruct) // => { a: 42, b: "Hello" }
 * ```
 *
 * **Example** (Collecting record results by key)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const recordOfEffects: Record<string, Effect.Effect<number>> = {
 *   key1: Effect.succeed(1),
 *   key2: Effect.succeed(2)
 * }
 *
 * //      ┌─── Effect<{ [x: string]: number; }, never, never>
 * //      ▼
 * const resultsAsRecord = Effect.all(recordOfEffects)
 *
 * await Effect.runPromise(resultsAsRecord) // => { key1: 1, key2: 2 }
 * ```
 *
 * **Example** (Stopping on the first failure)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 * const record = (value: unknown) => Effect.sync(() => { output.push(value) })
 *
 * const program = Effect.all([
 *   Effect.succeed("Task1").pipe(Effect.tap(record)),
 *   Effect.fail("Task2: Oh no!").pipe(Effect.tap(record)),
 *   // Won't execute due to earlier failure
 *   Effect.succeed("Task3").pipe(Effect.tap(record))
 * ])
 *
 * const outcome = await Effect.runPromiseExit(program)
 * const observation = [output, outcome] // => [["Task1"], Exit.fail("Task2: Oh no!")]
 * ```
 *
 * @see {@link forEach} for iterating over elements and applying an effect.
 * @stability stable
 * @category collecting
 * @since 2.0.0
 */
const all = all$1;
/**
 * Applies an effectful function to each element and partitions successes and
 * failures.
 *
 * **Details**
 *
 * The returned tuple is `[passes, fails]`, where `passes` contains all
 * successes and `fails` contains all failures.
 *
 * This function runs every effect and never fails. Use `concurrency` to control
 * parallelism.
 *
 * **Example** (Separating successes and failures)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.partition([0, 1, 2, 3], (n) =>
 *   n % 2 === 0 ? Effect.fail(`${n} is even`) : Effect.succeed(n)
 * )
 *
 * await Effect.runPromise(program) // => [[1, 3], ['0 is even', '2 is even']]
 * ```
 *
 * @stability stable
 * @category collecting
 * @since 2.0.0
 */
const partition = partition$1;
/**
 * Returns the first element that satisfies an effectful predicate.
 *
 * **Details**
 *
 * The predicate receives the element and its index. Evaluation short-circuits
 * as soon as an element matches.
 *
 * **Example** (Finding the first successful match)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.findFirst([1, 2, 3, 4], (n) => Effect.succeed(n > 2))
 *
 * await Effect.runPromise(program) // => Option.some(3)
 * ```
 *
 * @stability stable
 * @category collecting
 * @since 2.0.0
 */
const findFirst = findFirst$1;
/**
 * Executes an effectful operation for each element in an `Iterable`.
 *
 * **When to use**
 *
 * Use to traverse an iterable with an effectful function while preserving
 * element order in the collected results.
 *
 * **Details**
 *
 * The `forEach` function applies a provided operation to each element in the
 * iterable, producing a new effect that returns an array of results.
 *
 * If any effect fails, the iteration stops immediately (short-circuiting), and
 * the error is propagated.
 *
 * Concurrency:
 *
 * The `concurrency` option controls how many operations are performed
 * concurrently. By default, the operations are performed sequentially.
 *
 * Discarding Results:
 *
 * If the `discard` option is set to `true`, the intermediate results are not
 * collected, and the final result of the operation is `void`.
 *
 * **Example** (Mapping over an iterable with effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const result = Effect.forEach(
 *   [1, 2, 3, 4, 5],
 *   (n, index) =>
 *     Effect.sync(() => { output.push(`Currently at index ${index}`) }).pipe(Effect.as(n * 2))
 * )
 *
 * void output.push(await Effect.runPromise(result))
 * output // => ["Currently at index 0", "Currently at index 1", "Currently at index 2", "Currently at index 3", "Currently at index 4", [2, 4, 6, 8, 10]]
 * ```
 *
 * **Example** (Running effects without collecting results)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // Apply effects but discard the results
 * const result = Effect.forEach(
 *   [1, 2, 3, 4, 5],
 *   (n, index) =>
 *     Effect.sync(() => { output.push(`Currently at index ${index}`) }).pipe(Effect.as(n * 2)),
 *   { discard: true }
 * )
 *
 * void output.push(await Effect.runPromise(result))
 * output // => ["Currently at index 0", "Currently at index 1", "Currently at index 2", "Currently at index 3", "Currently at index 4", undefined]
 * ```
 *
 * @see {@link all} for combining multiple effects into one.
 * @stability stable
 * @category collecting
 * @since 2.0.0
 */
const forEach = forEach$1;
/**
 * Executes a body effect repeatedly while a condition holds true.
 *
 * **Example** (Repeating an effectful loop)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * let counter = 0
 *
 * const program = Effect.whileLoop({
 *   while: () => counter < 5,
 *   body: () => Effect.sync(() => ++counter),
 *   step: (n) => void output.push(`Current count: ${n}`)
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["Current count: 1", "Current count: 2", "Current count: 3", "Current count: 4", "Current count: 5"]
 * ```
 *
 * @stability stable
 * @category repetition
 * @since 2.0.0
 */
const whileLoop = whileLoop$1;
/**
 * Creates an `Effect` that represents an asynchronous computation guaranteed to
 * succeed.
 *
 * **When to use**
 *
 * Use to convert a `Promise` into an `Effect` when the async operation is
 * guaranteed to succeed and will not reject.
 *
 * **Details**
 *
 * An optional `AbortSignal` can be provided to allow for interruption of the
 * wrapped `Promise` API.
 *
 * **Gotchas**
 *
 * The `Promise` must not reject. If it rejects, the rejection is treated as a
 * defect, not as a typed failure. Use `tryPromise` when rejection is expected.
 *
 * Interruption aborts the provided `AbortSignal`, but the underlying
 * asynchronous operation only stops if it observes that signal.
 *
 * **Example** (Wrapping a non-rejecting Promise)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const succeedAsync = (message: string) =>
 *   Effect.promise<string>(() => Promise.resolve(message))
 *
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const program = succeedAsync("Async operation completed successfully!")
 * await Effect.runPromise(program) // => "Async operation completed successfully!"
 * ```
 *
 * @see {@link tryPromise} for a version that can handle failures.
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const promise = promise$1;
/**
 * Creates an `Effect` from an asynchronous computation that may throw or
 * reject, mapping failures into the error channel.
 *
 * **When to use**
 *
 * Use when you need to perform asynchronous operations that might fail, such
 * as fetching data from an API, and want thrown exceptions or rejected promises
 * captured as Effect errors.
 *
 * **Details**
 *
 * The promise thunk is evaluated when the effect runs. If it returns a promise
 * that resolves, the resolved value becomes the success value. If the thunk
 * throws before returning a promise, or if the returned promise rejects, the
 * thrown or rejected value is mapped into the error channel.
 *
 * Passing the thunk directly maps failures to {@link Cause.UnknownError}.
 * Passing `{ try, catch }` uses `catch` to map failures to an error of type
 * `E`.
 *
 * The thunk receives an `AbortSignal` that is aborted if the effect is
 * interrupted. The underlying asynchronous operation only stops if it observes
 * that signal.
 *
 * **Gotchas**
 *
 * If `catch` throws while mapping the error, that thrown value is treated as a
 * defect. Return the error value you want in the error channel instead of
 * throwing it.
 *
 * **Example** (Wrapping a fetch request that may fail)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const getTodo = (id: number) =>
 *   Effect.tryPromise(() => Promise.resolve({ id, completed: false }))
 *
 * //      ┌─── Effect<{ id: number; completed: boolean }, UnknownError, never>
 * //      ▼
 * const program = getTodo(1)
 * await Effect.runPromise(program) // => { id: 1, completed: false }
 * ```
 *
 * **Example** (Mapping Promise rejections to a tagged error)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class TodoFetchError extends Data.TaggedError("TodoFetchError")<{ readonly cause: unknown }> {}
 *
 * const getTodo = (id: number) =>
 *   Effect.tryPromise({
 *     try: () => Promise.reject(`Todo ${id} is unavailable`),
 *     // remap the error
 *     catch: (cause) => new TodoFetchError({ cause })
 *   })
 *
 * //      ┌─── Effect<never, TodoFetchError, never>
 * //      ▼
 * const program = Effect.flip(getTodo(1))
 * const error = await Effect.runPromise(program)
 * error._tag // => "TodoFetchError"
 * ```
 *
 * @see {@link promise} if the effectful computation is asynchronous and does not throw errors.
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const tryPromise = tryPromise$1;
/**
 * Creates an `Effect` that always succeeds with a given value.
 *
 * **When to use**
 *
 * Use when an effect should complete successfully with a specific value without any errors
 * or external dependencies.
 *
 * **Example** (Creating a successful effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * // Creating an effect that represents a successful scenario
 * //
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const success = Effect.succeed(42)
 * Effect.runSync(success) // => 42
 * ```
 *
 * @see {@link fail} to create an effect that represents a failure.
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeed = succeed$4;
/**
 * Returns an effect which succeeds with `None`.
 *
 * **Example** (Succeeding with Option.none)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.succeedNone
 *
 * Effect.runSync(program) // => Option.none()
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeedNone = succeedNone$1;
/**
 * Returns an effect which succeeds with the value wrapped in a `Some`.
 *
 * **Example** (Succeeding with Option.some)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.succeedSome(42)
 *
 * Effect.runSync(program) // => Option.some(42)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeedSome = succeedSome$1;
/**
 * Creates an `Effect` lazily, delaying construction until it is needed.
 *
 * **When to use**
 *
 * Use when you need to defer the evaluation of an effect until it is required.
 *
 * **Details**
 *
 * `suspend` takes a thunk that represents an effect and delays creating it
 * until the suspended effect is evaluated. This is useful for optimizing
 * expensive computations, managing circular dependencies such as recursive
 * functions, and helping TypeScript unify return types when branches construct
 * different effects. Any side effects or scoped captures inside the thunk are
 * re-executed on each invocation.
 *
 * **Example** (Lazily evaluating side effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * let i = 0
 *
 * const bad = Effect.succeed(i++)
 *
 * const good = Effect.suspend(() => Effect.succeed(i++))
 *
 * Effect.runSync(bad) // => 0
 * Effect.runSync(bad) // => 0
 *
 * Effect.runSync(good) // => 1
 * Effect.runSync(good) // => 2
 * ```
 *
 * **Example** (Suspending recursive Fibonacci evaluation)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const blowsUp = (n: number): Effect.Effect<number> =>
 *   n < 2
 *     ? Effect.succeed(1)
 *     : Effect.zipWith(blowsUp(n - 1), blowsUp(n - 2), (a, b) => a + b)
 *
 * // console.log(Effect.runSync(blowsUp(32)))
 * // crash: JavaScript heap out of memory
 *
 * const allGood = (n: number): Effect.Effect<number> =>
 *   n < 2
 *     ? Effect.succeed(1)
 *     : Effect.zipWith(
 *         Effect.suspend(() => allGood(n - 1)),
 *         Effect.suspend(() => allGood(n - 2)),
 *         (a, b) => a + b
 *       )
 *
 * Effect.runSync(allGood(16)) // => 1597
 * ```
 *
 * **Example** (Helping TypeScript infer recursive effect types)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * //   Without suspend, TypeScript may struggle with type inference.
 * //   Inferred type:
 * //     (a: number, b: number) =>
 * //       Effect<never, Error, never> | Effect<number, never, never>
 * const withoutSuspend = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.fail(new Error("Cannot divide by zero"))
 *     : Effect.succeed(a / b)
 *
 * //   Using suspend to unify return types.
 * //   Inferred type:
 * //     (a: number, b: number) => Effect<number, Error, never>
 * const withSuspend = (a: number, b: number) =>
 *   Effect.suspend(() =>
 *     b === 0
 *       ? Effect.fail(new Error("Cannot divide by zero"))
 *       : Effect.succeed(a / b)
 *   )
 *
 * Effect.runSync(withSuspend(6, 2)) // => 3
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const suspend = suspend$2;
/**
 * Creates an `Effect` that represents a synchronous side-effectful computation.
 *
 * **When to use**
 *
 * Use when you need to wrap a synchronous side-effectful operation that is not
 * expected to throw.
 *
 * **Details**
 *
 * The provided function is evaluated lazily when the effect runs.
 *
 * **Gotchas**
 *
 * The function must not throw. If it throws, the thrown value is treated as a
 * defect, not as a typed failure. Use `try` when throwing is expected.
 *
 * **Example** (Capturing synchronous logging in an Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     void output.push(message) // side effect
 *   })
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const program = log("Hello, World!")
 * Effect.runSync(program)
 * output // => ["Hello, World!"]
 * ```
 *
 * @see {@link try_ | try} for a version that can handle failures.
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sync = sync$2;
const void_ = void_$2;
const undefined_ = undefined_$1;
/**
 * Creates an `Effect` from a callback-based asynchronous API.
 *
 * **When to use**
 *
 * Use when you need to integrate APIs that complete through callbacks instead
 * of returning a `Promise`.
 *
 * **Details**
 *
 * The registration function receives a `resume` callback and, when requested,
 * an `AbortSignal`. Call `resume` at most once with the effect that should
 * complete the fiber; later calls are ignored. Return an optional cleanup
 * effect from the registration function to run if the fiber is interrupted.
 *
 * **Example** (Integrating callback APIs)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const fromCallback = (message: string) =>
 *   Effect.callback<void>((resume) => {
 *     queueMicrotask(() => {
 *       void output.push(message)
 *       resume(Effect.void)
 *     })
 *   })
 *
 * await Effect.runPromise(fromCallback("callback completed"))
 * output // => ["callback completed"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const callback = callback$1;
/**
 * Returns an effect that will never produce anything. The moral equivalent of
 * `while(true) {}`, only without the wasted CPU cycles.
 *
 * **Example** (Creating a never-ending effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.timeoutOption(Effect.never, 0)
 * await Effect.runPromise(program) // => Option.none()
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const never = never$1;
/**
 * Provides a way to write effectful code using generator functions, simplifying
 * control flow and error handling.
 *
 * **When to use**
 *
 * Use when you want to write effectful code that looks and behaves like
 * synchronous code, while still handling asynchronous tasks, errors, and complex
 * control flow such as loops and conditions.
 *
 * Generator functions work similarly to `async/await` but keep errors,
 * requirements, and interruption in the Effect type. You can `yield*` values
 * from effects and return the final result at the end.
 *
 * **Example** (Sequencing effects with generators)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class DiscountRateError extends Data.TaggedError("DiscountRateError")<{}> {}
 *
 * const addServiceCharge = (amount: number) => amount + 1
 *
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, DiscountRateError> =>
 *   discountRate === 0
 *     ? Effect.fail(new DiscountRateError())
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const fetchDiscountRate = Effect.promise(() => Promise.resolve(5))
 *
 * export const program = Effect.gen(function*() {
 *   const transactionAmount = yield* fetchTransactionAmount
 *   const discountRate = yield* fetchDiscountRate
 *   const discountedAmount = yield* applyDiscount(
 *     transactionAmount,
 *     discountRate
 *   )
 *   const finalAmount = addServiceCharge(discountedAmount)
 *   return `Final amount to charge: ${finalAmount}`
 * })
 *
 * await Effect.runPromise(program) // => "Final amount to charge: 96"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const gen = gen$1;
/**
 * Creates an `Effect` that represents a recoverable error.
 *
 * **When to use**
 *
 * Use to explicitly signal a recoverable error in an `Effect`.
 *
 * **Details**
 *
 * The error keeps propagating unless it is handled. You can handle tagged
 * errors with functions like {@link catchTag} or {@link catchTags}.
 *
 * **Example** (Creating a failed effect)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class OperationFailedError extends Data.TaggedError("OperationFailedError")<{}> {}
 *
 * //      ┌─── Effect<never, OperationFailedError, never>
 * //      ▼
 * const failure = Effect.fail(
 *   new OperationFailedError()
 * )
 * Effect.runSync(Effect.flip(failure))._tag // => "OperationFailedError"
 * ```
 *
 * @see {@link succeed} to create an effect that represents a successful value.
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fail = fail$4;
/**
 * Creates an `Effect` that represents a failure with a specific `Cause`.
 *
 * **When to use**
 *
 * Use when you already have a full `Cause` and need to preserve defects,
 * interruptions, annotations, or combined failures in the effect's failure
 * channel.
 *
 * **Details**
 *
 * This function allows you to create effects that fail with complex error
 * structures, including multiple errors, defects, interruptions, and more.
 *
 * **Example** (Failing with a full Cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect } from "effect"
 *
 * const program = Effect.failCause(
 *   Cause.fail("Network error")
 * )
 *
 * Effect.runSync(Effect.flip(program)) // => "Network error"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const failCause = failCause$3;
/**
 * Creates an `Effect` that represents a failure with a `Cause` computed lazily.
 *
 * **When to use**
 *
 * Use to defer computing a full `Cause` until the effect is run.
 *
 * **Details**
 *
 * The cause-producing function is evaluated each time the effect is executed.
 *
 * **Example** (Lazily creating a Cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect } from "effect"
 *
 * const program = Effect.failCauseSync(() =>
 *   Cause.fail("Error computed at runtime")
 * )
 *
 * Effect.runSync(Effect.flip(program)) // => "Error computed at runtime"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const failCauseSync = failCauseSync$1;
/**
 * Creates an effect that terminates a fiber with a specified error.
 *
 * **When to use**
 *
 * Use when you need an `Effect` to report an unrecoverable defect instead of a
 * typed error.
 *
 * **Details**
 *
 * The `die` function is used to signal a defect, which represents a critical
 * and unexpected error in the code. When invoked, it produces an effect that
 * does not handle the error and instead terminates the fiber.
 *
 * The error channel of the resulting effect is of type `never`, indicating that
 * it cannot recover from this failure.
 *
 * **Example** (Failing on division by zero)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 *
 * const defect = new Error("Cannot divide by zero")
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.die(defect)
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = divide(1, 0)
 *
 * Effect.runSyncExit(program) // => Exit.die(defect)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const die = die$4;
const try_ = try_$1;
/**
 * Yields control back to the Effect runtime, allowing other fibers to execute.
 *
 * **Example** (Yielding to other fibers)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   void output.push("Before yield")
 *   yield* Effect.yieldNow
 *   void output.push("After yield")
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["Before yield", "After yield"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const yieldNow = yieldNow$1;
/**
 * Provides access to the current fiber within an effect computation.
 *
 * **Example** (Reading the current fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.withFiber((fiber) => Effect.succeed(typeof fiber.id))
 *
 * Effect.runSync(program) // => "number"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const withFiber = withFiber$1;
/**
 * Converts a `Result` to an `Effect`.
 *
 * **Example** (Converting a Result into an Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Result } from "effect"
 * const output: Array<unknown> = []
 *
 * const success = Result.succeed(42)
 * const failure = Result.fail("Something went wrong")
 *
 * const effect1 = Effect.fromResult(success)
 * const effect2 = Effect.fromResult(failure)
 *
 * void output.push(Effect.runSync(effect1))
 * void output.push(Effect.runSync(Effect.flip(effect2)))
 * output // => [42, "Something went wrong"]
 * ```
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromResult = fromResult$1;
/**
 * Converts an `Option` into an `Effect`.
 *
 * **When to use**
 *
 * Use when absence should become a typed `NoSuchElementError` in the effect error
 * channel.
 *
 * **Details**
 *
 * `Option.some` becomes a successful effect with the contained value, while
 * `Option.none` becomes a failed effect. By default the failure is a
 * `NoSuchElementError`, but you can provide an `onNone` callback to customize
 * the error value.
 *
 * **Example** (Converting an Option into an Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 * const output: Array<unknown> = []
 *
 * const some = Option.some(42)
 * const none = Option.none()
 *
 * const effect1 = Effect.fromOption(some)
 * const effect2 = Effect.fromOption(none)
 * const effect3 = Effect.fromOption(none, () => new Error("missing"))
 *
 * void output.push(Effect.runSync(effect1))
 * void output.push(Effect.runSync(Effect.flip(effect2))._tag)
 * void output.push(Effect.runSync(Effect.flip(effect3)).message)
 * output // => [42, "NoSuchElementError", "missing"]
 * ```
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const fromOption = fromOption$1;
/**
 * Chains effects to produce new `Effect` instances, useful for combining
 * operations that depend on previous results.
 *
 * **When to use**
 *
 * Use when you need to chain multiple effects, ensuring that each
 * step produces a new `Effect` while flattening any nested effects that may
 * occur.
 *
 * **Details**
 *
 * `flatMap` lets you sequence effects so that the result of one effect can be
 * used in the next step. It is similar to `flatMap` used with arrays but works
 * specifically with `Effect` instances, allowing you to avoid deeply nested
 * effect structures.
 *
 * Since effects are immutable, `flatMap` always returns a new effect instead of
 * changing the original one.
 *
 * **Example** (Choosing flatMap syntax variants)
 *
 * ```ts import.meta.vitest
 * import { Effect, pipe } from "effect"
 * const output: Array<unknown> = []
 *
 * const myEffect = Effect.succeed(1)
 * const transformation = (n: number) => Effect.succeed(n + 1)
 *
 * const flatMappedWithPipe = pipe(myEffect, Effect.flatMap(transformation))
 * const flatMappedWithDataFirst = Effect.flatMap(myEffect, transformation)
 * const flatMappedWithMethod = myEffect.pipe(Effect.flatMap(transformation))
 *
 * void output.push(Effect.runSync(Effect.all([
 *   flatMappedWithPipe,
 *   flatMappedWithDataFirst,
 *   flatMappedWithMethod
 * ])))
 * output // => [[2, 2, 2]]
 * ```
 *
 * **Example** (Sequencing dependent effects)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, pipe } from "effect"
 *
 * class DiscountRateError extends Data.TaggedError("DiscountRateError")<{}> {}
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, DiscountRateError> =>
 *   discountRate === 0
 *     ? Effect.fail(new DiscountRateError())
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * // Chaining the fetch and discount application using `flatMap`
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * await Effect.runPromise(finalAmount) // => 95
 * ```
 *
 * @see {@link tap} for a version that ignores the result of the effect.
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap = flatMap$2;
/**
 * Flattens an `Effect` that produces another `Effect` into a single effect.
 *
 * **Example** (Flattening nested effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const nested = Effect.succeed(Effect.succeed("hello"))
 *
 * const program = Effect.gen(function*() {
 *   const value = yield* Effect.flatten(nested)
 *   yield* Effect.sync(() => { output.push(value) })
 * })
 *
 * Effect.runSync(program)
 * output // => ["hello"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatten = flatten$1;
/**
 * Runs this effect and then runs another effect, optionally using the first
 * effect's success value to choose the next effect.
 *
 * **When to use**
 *
 * Use when you need one effect to run after another and the second effect may
 * depend on the first effect's success value.
 *
 * **Details**
 *
 * When the second argument is an `Effect`, the first success value is discarded
 * and the returned effect produces the second effect's value. When the second
 * argument is a function, it receives the first success value and must return
 * the next `Effect`.
 *
 * Failures or requirements from either effect are preserved in the returned
 * effect.
 *
 * **Example** (Choosing andThen syntax variants)
 *
 * ```ts import.meta.vitest
 * import { Effect, pipe } from "effect"
 * const output: Array<unknown> = []
 *
 * const myEffect = Effect.succeed(1)
 * const anotherEffect = Effect.succeed("done")
 *
 * const transformedWithPipe = pipe(myEffect, Effect.andThen(anotherEffect))
 * const transformedWithDataFirst = Effect.andThen(myEffect, anotherEffect)
 * const transformedWithMethod = myEffect.pipe(Effect.andThen(anotherEffect))
 *
 * void output.push(Effect.runSync(Effect.all([
 *   transformedWithPipe,
 *   transformedWithDataFirst,
 *   transformedWithMethod
 * ])))
 * output // => [['done', 'done', 'done']]
 * ```
 *
 * **Example** (Sequencing a discount calculation after fetching a total)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, pipe } from "effect"
 *
 * class DiscountRateError extends Data.TaggedError("DiscountRateError")<{}> {}
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, DiscountRateError> =>
 *   discountRate === 0
 *     ? Effect.fail(new DiscountRateError())
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * // Using Effect.map and Effect.flatMap
 * const result1 = pipe(
 *   fetchTransactionAmount,
 *   Effect.map((amount) => amount * 2),
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * await Effect.runPromise(result1) // => 190
 *
 * // Using Effect.andThen
 * const result2 = pipe(
 *   fetchTransactionAmount,
 *   Effect.andThen((amount) => Effect.succeed(amount * 2)),
 *   Effect.andThen((amount) => applyDiscount(amount, 5))
 * )
 *
 * await Effect.runPromise(result2) // => 190
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const andThen = andThen$1;
/**
 * Runs a side effect with the result of an effect without changing the original
 * value.
 *
 * **When to use**
 *
 * Use when you need to run an effectful observation, such as logging or
 * tracking, while passing the original success value to the next step.
 *
 * **Details**
 *
 * `tap` works similarly to `flatMap`, but it ignores the result of the function
 * passed to it. The value from the previous effect remains available for the
 * next part of the chain. Note that if the side effect fails, the entire chain
 * will fail too.
 *
 * **Example** (Logging a step in a pipeline)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, pipe } from "effect"
 * const output: Array<unknown> = []
 *
 * class DiscountRateError extends Data.TaggedError("DiscountRateError")<{}> {}
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, DiscountRateError> =>
 *   discountRate === 0
 *     ? Effect.fail(new DiscountRateError())
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   // Log the fetched transaction amount
 *   Effect.tap((amount) => Effect.sync(() => { output.push(`Apply a discount to: ${amount}`) })),
 *   // `amount` is still available!
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * void output.push(await Effect.runPromise(finalAmount))
 * output // => ["Apply a discount to: 100", 95]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const tap = tap$2;
/**
 * Converts both success and failure of an `Effect` into a `Result` type.
 *
 * **When to use**
 *
 * Use when you want an `Effect`'s typed failures to be handled as `Result`
 * data while preserving the original error value.
 *
 * **Details**
 *
 * This function converts an effect that may fail into an effect that always
 * succeeds, wrapping the outcome in a `Result` type. The result will be
 * `Result.Failure` if the effect fails, containing the recoverable error, or
 * `Result.Success` if it succeeds, containing the result.
 *
 * Using this function, you can handle recoverable errors explicitly without
 * causing the effect to fail. This is particularly useful in scenarios where
 * you want to chain effects and manage both success and failure in the same
 * logical flow.
 *
 * The resulting effect cannot fail directly because all recoverable failures
 * are represented inside the `Result` type.
 *
 * **Gotchas**
 *
 * `result` only captures typed, recoverable failures. Defects and
 * interruptions are not captured inside the `Result` and still fail the
 * effect.
 *
 * **Example** (Capturing success or failure as Result)
 *
 * ```ts import.meta.vitest
 * import { Effect, Result } from "effect"
 *
 * const success = Effect.succeed(42)
 * const failure = Effect.fail("Something went wrong")
 *
 * const program1 = Effect.result(success)
 * const program2 = Effect.result(failure)
 *
 * Effect.runSync(program1) // => Result.succeed(42)
 *
 * Effect.runSync(program2) // => Result.fail("Something went wrong")
 * ```
 *
 * @see {@link option} for a version that uses `Option` instead.
 * @see {@link exit} for a version that encapsulates both recoverable errors and defects in an `Exit`.
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const result = result$1;
/**
 * Converts success to `Option.some` and failure to `Option.none`.
 *
 * **When to use**
 *
 * Use when you only care whether an effect succeeds and want recoverable
 * failures represented as `Option.none`.
 *
 * **Details**
 *
 * Success values become `Option.some`, recoverable failures become
 * `Option.none`, and defects still fail the effect.
 *
 * **Gotchas**
 *
 * `option` only captures typed, recoverable failures as `Option.none`.
 * Defects and interruptions are not captured inside the `Option` and still
 * fail the effect.
 *
 * `option` also discards typed failure values. Use `result` if the failure
 * value matters.
 *
 * **Example** (Capturing success or failure as Option)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.all([
 *   Effect.option(Effect.succeed(1)),
 *   Effect.option(Effect.fail("missing"))
 * ])
 *
 * Effect.runSync(program) // => [Option.some(1), Option.none()]
 * ```
 *
 * @see {@link result} for a version that uses `Result` instead.
 * @see {@link exit} for a version that encapsulates both recoverable errors and defects in an `Exit`.
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const option = option$1;
/**
 * Transforms an effect to encapsulate both failure and success using the `Exit`
 * data type.
 *
 * **When to use**
 *
 * Use when you need to inspect the full outcome, including typed failures, defects,
 * and interruptions.
 *
 * **Details**
 *
 * `exit` wraps an effect's success or failure inside an `Exit` type, allowing
 * you to handle both cases explicitly.
 *
 * The resulting effect cannot fail because the failure is encapsulated within
 * the `Exit.Failure` type. The error type is set to `never`, indicating that
 * the effect is structured to never fail directly.
 *
 * **Example** (Capturing completion as Exit)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 *
 * const success = Effect.succeed(42)
 * const failure = Effect.fail("Something went wrong")
 *
 * const program1 = Effect.exit(success)
 * const program2 = Effect.exit(failure)
 *
 * Effect.runSync(program1) // => Exit.succeed(42)
 *
 * Effect.runSync(program2) // => Exit.fail("Something went wrong")
 * ```
 *
 * @see {@link option} for a version that uses `Option` instead.
 * @see {@link result} for a version that uses `Result` instead.
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const exit = exit$1;
/**
 * Transforms the value inside an effect by applying a function to it.
 *
 * **When to use**
 *
 * Use to transform an effect's success value with a function that returns a
 * plain value, producing a new effect without changing the original effect's
 * typed error or context requirements.
 *
 * **Details**
 *
 * `map` takes a function and applies it to the value contained within an
 * effect, creating a new effect with the transformed value.
 *
 * It's important to note that effects are immutable, meaning that the original
 * effect is not modified. Instead, a new effect is returned with the updated
 * value.
 *
 * **Example** (Choosing map syntax variants)
 *
 * ```ts import.meta.vitest
 * import { Effect, pipe } from "effect"
 * const output: Array<unknown> = []
 *
 * const myEffect = Effect.succeed(1)
 * const transformation = (n: number) => n + 1
 *
 * const mappedWithPipe = pipe(myEffect, Effect.map(transformation))
 * const mappedWithDataFirst = Effect.map(myEffect, transformation)
 * const mappedWithMethod = myEffect.pipe(Effect.map(transformation))
 *
 * void output.push(Effect.runSync(Effect.all([
 *   mappedWithPipe,
 *   mappedWithDataFirst,
 *   mappedWithMethod
 * ])))
 * output // => [[2, 2, 2]]
 * ```
 *
 * **Example** (Adding a service charge)
 *
 * ```ts import.meta.vitest
 * import { Effect, pipe } from "effect"
 *
 * const addServiceCharge = (amount: number) => amount + 1
 *
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   Effect.map(addServiceCharge)
 * )
 *
 * await Effect.runPromise(finalAmount) // => 101
 * ```
 *
 * @see {@link mapError} for a version that operates on the error channel.
 * @see {@link mapBoth} for a version that operates on both channels.
 * @see {@link flatMap} or {@link andThen} for a version that can return a new effect.
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map = map$2;
/**
 * Replaces the value inside an effect with a constant value.
 *
 * **When to use**
 *
 * Use to replace a successful value with a constant while preserving failures
 * and requirements.
 *
 * **Details**
 *
 * `as` allows you to ignore the original value inside an effect and
 * replace it with a new constant value.
 *
 * **Example** (Replacing a success value)
 *
 * ```ts import.meta.vitest
 * import { Effect, pipe } from "effect"
 *
 * // Replaces the value 5 with the constant "new value"
 * const program = pipe(Effect.succeed(5), Effect.as("new value"))
 *
 * Effect.runSync(program) // => "new value"
 * ```
 *
 * @see {@link map} for deriving the replacement value from the success value
 * @see {@link asVoid} for replacing the success value with `void`
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const as = as$1;
/**
 * Maps the success value of an `Effect` to `Some`, preserving failures.
 *
 * **Example** (Wrapping success in Option.some)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.asSome(Effect.succeed(42))
 *
 * Effect.runSync(program) // => Option.some(42)
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const asSome = asSome$1;
/**
 * Maps the success value of an `Effect` to `void`, preserving failures.
 *
 * **Example** (Discarding success values)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.asVoid(Effect.succeed(42))
 *
 * Effect.runSync(program) // => undefined
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const asVoid = asVoid$1;
/**
 * Combines two effects into a single effect, producing a tuple with the results of both effects.
 *
 * **When to use**
 *
 * Use to combine exactly two effects into a tuple.
 *
 * **Details**
 *
 * The `zip` function executes the first effect (left) and then the second effect (right).
 * Once both effects succeed, their results are combined into a tuple.
 *
 * Concurrency:
 *
 * By default, `zip` processes the effects sequentially. To execute the effects concurrently,
 * use the `{ concurrent: true }` option.
 *
 * **Example** (Combining two effects sequentially)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1)
 * const task2 = Effect.succeed("hello")
 *
 * // Combine the two effects together
 * //
 * //      ┌─── Effect<[number, string], never, never>
 * //      ▼
 * const program = Effect.zip(task1, task2)
 *
 * Effect.runSync(program) // => [1, 'hello']
 * ```
 *
 * **Example** (Combining two effects concurrently)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1)
 * const task2 = Effect.succeed("hello")
 *
 * // Run both effects concurrently using the concurrent option
 * const program = Effect.zip(task1, task2, { concurrent: true })
 *
 * await Effect.runPromise(program) // => [1, 'hello']
 * ```
 *
 * @see {@link zipWith} for a version that combines the results with a custom function.
 * @see {@link all} for collecting a larger structure of effects.
 *
 * @stability stable
 * @category zipping
 * @since 2.0.0
 */
const zip = zip$1;
/**
 * Combines two effects sequentially and applies a function to their results to
 * produce a single value.
 *
 * **When to use**
 *
 * Use when you need to run two effects sequentially and combine their results
 * with a function instead of keeping the results as a tuple.
 *
 * **Details**
 *
 * Concurrency:
 *
 * By default, the effects are run sequentially. To execute them concurrently,
 * use the `{ concurrent: true }` option.
 *
 * **Example** (Combining two success values with a function)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1)
 * const task2 = Effect.succeed("hello")
 *
 * const task3 = Effect.zipWith(
 *   task1,
 *   task2,
 *   // Combines results into a single value
 *   (number, string) => number + string.length
 * )
 *
 * Effect.runSync(task3) // => 6
 * ```
 *
 * @stability stable
 * @category zipping
 * @since 2.0.0
 */
const zipWith = zipWith$1;
const catch_ = catch_$2;
/**
 * Catches and handles specific errors by their `_tag` field, which is used as a
 * discriminator.
 *
 * **When to use**
 *
 * Use when you need to recover from one specific tagged error in an effect
 * error channel.
 *
 * **Details**
 *
 * The error type must have a readonly `_tag` field. `catchTag` matches that
 * field and only handles errors with the requested tag.
 *
 * **Example** (Handling a tagged error)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * class NetworkError {
 *   readonly _tag = "NetworkError"
 *   constructor(readonly message: string) {}
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 *   constructor(readonly message: string) {}
 * }
 *
 * const task: Effect.Effect<string, NetworkError | ValidationError> =
 *   Effect.fail(new NetworkError("offline"))
 *
 * const program = Effect.catchTag(
 *   task,
 *   "NetworkError",
 *   (error) => Effect.succeed(`Recovered from network error: ${error.message}`)
 * )
 *
 * Effect.runSync(program) // => "Recovered from network error: offline"
 * ```
 *
 * @see {@link catchTags} for handling multiple tagged errors in one call
 * @see {@link catchIf} for recovering from errors that match a predicate
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchTag = catchTag$1;
/**
 * Handles multiple errors in a single block of code using their `_tag` field.
 *
 * **When to use**
 *
 * Use when one recovery step should handle several tagged error types by
 * matching their readonly `_tag` fields.
 *
 * **Details**
 *
 * Pass a handler table whose keys are tags, plus an optional fallback for
 * unmatched errors.
 *
 * The error type must have a readonly `_tag` field to use `catchTags`. This
 * field is used to identify and match errors.
 *
 * **Example** (Handling multiple tagged errors)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * // Define tagged error types
 * class ValidationError extends Data.TaggedError("ValidationError")<{
 *   message: string
 * }> {}
 *
 * class NetworkError extends Data.TaggedError("NetworkError")<{
 *   statusCode: number
 * }> {}
 *
 * // An effect that might fail with multiple error types
 * const program: Effect.Effect<string, ValidationError | NetworkError> =
 *   Effect.fail(new NetworkError({ statusCode: 503 }))
 *
 * // Handle multiple error types at once
 * const handled = Effect.catchTags(program, {
 *   ValidationError: (error) =>
 *     Effect.succeed(`Validation failed: ${error.message}`),
 *   NetworkError: (error) => Effect.succeed(`Network error: ${error.statusCode}`)
 * })
 *
 * Effect.runSync(handled) // => "Network error: 503"
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchTags = catchTags$1;
/**
 * Catches a specific reason within a tagged error.
 *
 * **When to use**
 *
 * Use to handle one nested reason inside an `Effect`'s tagged error while
 * preserving the parent error shape for unmatched reasons.
 *
 * **Details**
 *
 * Use this to handle nested error causes without removing the parent error
 * from the error channel. The handler receives the unwrapped reason.
 *
 * **Example** (Handling an error reason)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class RateLimitError extends Data.TaggedError("RateLimitError")<{
 *   retryAfter: number
 * }> {}
 *
 * class QuotaExceededError extends Data.TaggedError("QuotaExceededError")<{
 *   limit: number
 * }> {}
 *
 * class AiError extends Data.TaggedError("AiError")<{
 *   reason: RateLimitError | QuotaExceededError
 * }> {}
 *
 * const program: Effect.Effect<string, AiError> = Effect.fail(
 *   new AiError({ reason: new RateLimitError({ retryAfter: 30 }) })
 * )
 *
 * // Handle rate limits specifically
 * const handled = program.pipe(
 *   Effect.catchReason("AiError", "RateLimitError", (reason) =>
 *     Effect.succeed(`Retry after ${reason.retryAfter}s`)
 *   )
 * )
 *
 * Effect.runSync(handled) // => "Retry after 30s"
 * ```
 *
 * @see {@link catchReasons} for handling several nested reason tags
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchReason = catchReason$1;
/**
 * Handles both recoverable and unrecoverable errors by providing a recovery
 * effect.
 *
 * **When to use**
 *
 * Use when you need to recover from an `Effect` by inspecting the full `Cause`,
 * including recoverable failures, defects, and interruptions, instead of only
 * the typed error value.
 *
 * **Details**
 *
 * When to Recover from Defects:
 *
 * Defects are unexpected errors that typically shouldn't be recovered from, as
 * they often indicate serious issues. However, in some cases, such as
 * dynamically loaded plugins, controlled recovery might be needed.
 *
 * **Example** (Recovering from full failure causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // An effect that might fail in different ways
 * const program = Effect.die("Something went wrong")
 *
 * // Recover from any cause (including defects)
 * const recovered = Effect.catchCause(program, (cause) => {
 *   if (Cause.hasDies(cause)) {
 *     return Effect.sync(() => { output.push("Caught defect") }).pipe(
 *       Effect.as("Recovered from defect")
 *     )
 *   }
 *   return Effect.succeed("Unknown error")
 * })
 *
 * void output.push(Effect.runSync(recovered))
 * output // => ["Caught defect", "Recovered from defect"]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchCause = catchCause$1;
/**
 * Recovers from defects using a provided recovery function.
 *
 * **When to use**
 *
 * Use when you need to report or translate defects at integration boundaries.
 *
 * **Details**
 *
 * `catchDefect` handles unexpected defects, such as thrown exceptions or
 * values passed to `die`, without catching typed failures or interruptions.
 *
 * When to Recover from Defects:
 *
 * Defects are unexpected errors that typically should not be recovered from, as
 * they often indicate serious issues. In some cases, such as dynamically loaded
 * plugins, controlled recovery may be needed.
 *
 * **Example** (Recovering from defects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // An effect that might throw an unexpected error (defect)
 * const program = Effect.sync(() => {
 *   throw new Error("Unexpected error")
 * })
 *
 * // Recover from defects only
 * const recovered = Effect.catchDefect(program, (defect) => {
 *   return Effect.sync(() => { output.push(`Caught defect: ${(defect as Error).message}`) }).pipe(
 *     Effect.as("Recovered from defect")
 *   )
 * })
 *
 * void output.push(Effect.runSync(recovered))
 * output // => ["Caught defect: Unexpected error", "Recovered from defect"]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchDefect = catchDefect$1;
/**
 * Recovers from specific errors using a `Predicate` or `Refinement`.
 *
 * **When to use**
 *
 * Use when you need to recover from errors that match a condition.
 *
 * **Details**
 *
 * Use a `Refinement` for type narrowing or a `Predicate` for simple boolean
 * matching. Non-matching errors re-fail with the original cause. Defects and
 * interrupts are not caught.
 *
 * **Example** (Recovering when a predicate matches)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Filter } from "effect"
 *
 * class NotFound extends Data.TaggedError("NotFound")<{ id: string }> {}
 *
 * const program = Effect.fail(new NotFound({ id: "user-1" }))
 *
 * // With a refinement
 * const recovered = program.pipe(
 *   Effect.catchIf(
 *     (error): error is NotFound => error._tag === "NotFound",
 *     (error) => Effect.succeed(`missing:${error.id}`)
 *   )
 * )
 *
 * // With a Filter
 * const recovered2 = program.pipe(
 *   Effect.catchFilter(
 *     Filter.tagged("NotFound"),
 *     (error) => Effect.succeed(`missing:${error.id}`)
 *   )
 * )
 *
 * Effect.runSync(Effect.all([recovered, recovered2])) // => ['missing:user-1', 'missing:user-1']
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchIf = catchIf$1;
/**
 * Recovers from specific errors using a `Filter`.
 *
 * **When to use**
 *
 * Use to recover from typed `Effect` errors with a reusable `Filter` when
 * matching can also narrow or transform the error before choosing the recovery
 * effect.
 *
 * **Details**
 *
 * The filter runs on typed failures extracted from the `Cause`. Successful
 * filter results are passed to `f`; failed filter results are passed to
 * `orElse` when provided. Without `orElse`, the original failure cause is
 * preserved.
 *
 * @see {@link catchIf} for predicate-based recovery from typed errors
 * @see {@link catchTag} for recovering from a single tagged error
 * @see {@link catchTags} for recovering from several tagged errors
 * @see {@link catchCauseFilter} for filtering full causes instead of typed errors
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchFilter = catchFilter$1;
/**
 * Recovers from specific failures based on a predicate.
 *
 * **When to use**
 *
 * Use to recover an `Effect` from full causes selected by a predicate.
 *
 * **Details**
 *
 * This function allows you to conditionally catch and recover from failures
 * that match a specific predicate. This is useful when you want to handle
 * only certain types of errors while letting others propagate.
 *
 * **Example** (Recovering from selected causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const httpRequest = Effect.fail("Network Error")
 *
 * // Only catch network-related failures
 * const program = Effect.catchCauseIf(
 *   httpRequest,
 *   Cause.hasFails,
 *   (cause) =>
 *     Effect.gen(function*() {
 *       yield* Effect.sync(() => { output.push(`Caught network error: ${Cause.squash(cause)}`) })
 *       return "Fallback response"
 *     })
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Caught network error: Network Error", "Fallback response"]
 * ```
 *
 * @see {@link catchCause} for recovering from every cause
 * @see {@link catchCauseFilter} for selecting full causes with a `Filter`
 * @see {@link catchIf} for predicate-based recovery from typed errors
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchCauseIf = catchCauseIf$1;
/**
 * Transforms the failure value of an effect without changing its success value.
 *
 * **When to use**
 *
 * Use to translate an `Effect`'s typed failures while leaving successful values
 * unchanged.
 *
 * **Details**
 *
 * Only the failure channel is transformed. The success channel and requirements
 * are preserved.
 *
 * **Example** (Transforming the error channel)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class TaskError extends Data.TaggedError("TaskError")<{ readonly message: string }> {}
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1))
 *
 * //      ┌─── Effect<number, TaskError, never>
 * //      ▼
 * const mapped = Effect.mapError(
 *   simulatedTask,
 *   (message) => new TaskError({ message })
 * )
 * Effect.runSync(Effect.flip(mapped)).message // => "Oh no!"
 * ```
 *
 * @see {@link map} for a version that operates on the success channel.
 * @see {@link mapBoth} for a version that operates on both channels.
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const mapError = mapError$1;
/**
 * Converts typed failures from the error channel into defects, removing the
 * error type from the returned effect.
 *
 * **When to use**
 *
 * Use when you need to turn an `Effect` typed failure that represents an
 * unrecoverable bug or invalid state into a defect.
 *
 * **Example** (Converting typed failures into defects)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Exit } from "effect"
 *
 * class DivideByZeroError extends Data.TaggedError("DivideByZeroError")<{}> {}
 *
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.fail(new DivideByZeroError())
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = Effect.orDie(divide(1, 0))
 *
 * Effect.runSyncExit(program) // => Exit.die(new DivideByZeroError())
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orDie = orDie$2;
/**
 * Runs an effectful operation when the source effect fails, while preserving
 * the original failure when the operation succeeds.
 *
 * **Details**
 *
 * Use this for logging, metrics, or other failure-side observations. If the
 * operation passed to `tapError` fails, that error is also represented in the
 * returned effect's error channel.
 *
 * **Example** (Running effects on failure)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * // Simulate a task that fails with an error
 * const task: Effect.Effect<number, string> = Effect.fail("NetworkError")
 *
 * // Use tapError to log the error message when the task fails
 * const tapping = Effect.tapError(
 *   task,
 *   (error) => Effect.sync(() => { output.push(`expected error: ${error}`) })
 * )
 *
 * void output.push(Effect.runSyncExit(tapping))
 * output // => ["expected error: NetworkError", Exit.fail("NetworkError")]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const tapError = tapError$1;
/**
 * Runs an effectful handler when a failure's `_tag` matches.
 *
 * **Details**
 *
 * Use this with tagged-union errors to perform side effects for one tag or a
 * list of tags. When the handler succeeds, the original failure is preserved;
 * if the handler fails, its error is also included in the returned effect.
 *
 * **Example** (Running effects for tagged failures)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * class NetworkError extends Data.TaggedError("NetworkError")<{
 *   statusCode: number
 * }> {}
 *
 * class ValidationError extends Data.TaggedError("ValidationError")<{
 *   field: string
 * }> {}
 *
 * const task: Effect.Effect<number, NetworkError | ValidationError> =
 *   Effect.fail(new NetworkError({ statusCode: 504 }))
 *
 * const program = Effect.tapErrorTag(task, "NetworkError", (error) =>
 *   Effect.sync(() => { output.push(`expected error: ${error.statusCode}`) })
 * )
 *
 * void output.push(Effect.runSyncExit(program))
 * output // => ["expected error: 504", Exit.fail(new NetworkError({ statusCode: 504 }))]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const tapErrorTag = tapErrorTag$1;
/**
 * Runs an effectful operation with the full `Cause` when the source effect
 * fails.
 *
 * **When to use**
 *
 * Use when failure observation needs typed failures, defects, and interruptions
 * rather than only the typed error value.
 *
 * **Details**
 *
 * Use this to log or inspect typed failures, defects, and interruptions. When
 * the operation succeeds, the original cause is preserved. If the operation
 * fails, its error is also represented in the returned effect.
 *
 * **Example** (Observing full failure causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * const task = Effect.fail("Something went wrong")
 *
 * const program = Effect.tapCause(
 *   task,
 *   (cause) => Effect.sync(() => { output.push(`Logging cause: ${Cause.squash(cause)}`) })
 * )
 *
 * void output.push(Effect.runSyncExit(program))
 * output // => ["Logging cause: Something went wrong", Exit.fail("Something went wrong")]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const tapCause = tapCause$1;
/**
 * Runs an effectful operation when the source effect dies with a defect.
 *
 * **Details**
 *
 * Use this for diagnostics such as logging unexpected thrown exceptions or
 * values passed to `die`. Recoverable failures are not handled. When the
 * operation succeeds, the original defect is preserved; if the operation fails,
 * its error is also represented in the returned effect.
 *
 * **Example** (Observing defects)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * // Simulate a severe failure in the system
 * const task2: Effect.Effect<number> = Effect.die(
 *   "Something went wrong"
 * )
 *
 * // Log the defect using tapDefect
 * const tapping2 = Effect.tapDefect(
 *   task2,
 *   (defect) => Effect.sync(() => { output.push(`defect: ${defect}`) })
 * )
 *
 * void output.push(Effect.runSyncExit(tapping2))
 * output // => ["defect: Something went wrong", Exit.die("Something went wrong")]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const tapDefect = tapDefect$1;
/**
 * Retries typed failures from an effect according to a retry policy.
 *
 * **When to use**
 *
 * Use when you need to rerun an effect after transient typed failures, such as
 * network issues or temporary resource unavailability.
 *
 * **Details**
 *
 * The policy can be a `Schedule`, a schedule builder, or a `Retry.Options`
 * object using `schedule`, `times`, `while`, or `until`. If a retry eventually
 * succeeds, the returned effect succeeds with that value. If the policy stops
 * while the effect is still failing, the last failure is propagated.
 *
 * **Gotchas**
 *
 * The source effect is always evaluated once before any retry policy is
 * applied. For example, `Schedule.recurs(3)` allows up to three retries after
 * the initial attempt.
 *
 * Defects and interruptions are not retried.
 *
 * **Example** (Retrying with a schedule)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Schedule } from "effect"
 *
 * class AttemptError extends Data.TaggedError("AttemptError")<{ readonly attempt: number }> {}
 *
 * let attempt = 0
 * const task = Effect.callback<string, AttemptError>((resume) => {
 *   attempt++
 *   if (attempt <= 2) {
 *     resume(Effect.fail(new AttemptError({ attempt })))
 *   } else {
 *     resume(Effect.succeed("Success!"))
 *   }
 * })
 *
 * const policy = Schedule.recurs(5)
 * const program = Effect.retry(task, policy)
 *
 * await Effect.runPromise(program) // => "Success!"
 * ```
 *
 * @see {@link retryOrElse} for a version that allows you to run a fallback.
 * @see {@link repeat} if your retry condition is based on successful outcomes rather than errors.
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const retry = retry$1;
/**
 * Discards both the success and failure values of an effect.
 *
 * **When to use**
 *
 * Use when an effect should run for its side effects while both success and
 * failure values are discarded.
 *
 * **Details**
 *
 * Use the `log` option to emit the full {@link Cause} when the effect fails,
 * and `message` to prepend a custom log message.
 *
 * **Example** (Discarding success and failure values)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const task = Effect.fail("Uh oh!").pipe(Effect.as(5))
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const program = task.pipe(Effect.ignore)
 * Effect.runSync(program) // => undefined
 * ```
 *
 * **Example** (Logging failures while ignoring results)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task = Effect.fail("Uh oh!")
 *
 * const program = task.pipe(Effect.ignore)
 * Effect.runSync(program) // => undefined
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const ignore = ignore$1;
/**
 * Ignores the effect's failure cause, including defects and interruptions.
 *
 * **When to use**
 *
 * Use when a best-effort effect should never fail, even from defects or
 * interruption, and optional cause logging is enough.
 *
 * **Details**
 *
 * Use the `log` option to emit the full {@link Cause} when the effect fails,
 * and `message` to prepend a custom log message.
 *
 * **Example** (Ignoring failures and logging causes)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task = Effect.fail("boom")
 *
 * const program = task.pipe(Effect.ignoreCause)
 * Effect.runSync(program) // => undefined
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const ignoreCause = ignoreCause$1;
/**
 * Runs an effect and reports any errors to the configured `ErrorReporter`s.
 *
 * **Details**
 *
 * If the `defectsOnly` option is set to `true`, only defects (unrecoverable
 * errors) will be reported, while regular failures will be ignored.
 *
 * @stability unstable
 * @category error handling
 * @since 4.0.0
 */
const withErrorReporting = withErrorReporting$1;
/**
 * Recovers from a typed failure by producing a fallback success value.
 *
 * **Details**
 *
 * If the source effect succeeds, its value is preserved. If it fails in the
 * error channel, `orElseSucceed` evaluates the fallback with that error and
 * succeeds with the returned value, removing the typed error from the returned
 * effect.
 *
 * Defects and interruptions are not recovered by this operator.
 *
 * **Example** (Replacing failures with a value)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 *
 * const validate = (age: number): Effect.Effect<number, string> => {
 *   if (age < 0) {
 *     return Effect.fail("NegativeAgeError")
 *   } else if (age < 18) {
 *     return Effect.fail("IllegalAgeError")
 *   } else {
 *     return Effect.succeed(age)
 *   }
 * }
 *
 * const program = Effect.orElseSucceed(validate(-1), (error) => error === "IllegalAgeError" ? 18 : 0)
 *
 * Effect.runSyncExit(program) // => Exit.succeed(0)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orElseSucceed = orElseSucceed$1;
/**
 * Runs a sequence of effects and returns the result of the first successful
 * one.
 *
 * **When to use**
 *
 * Use when you have prioritized fallback `Effect`s, such as attempting
 * multiple APIs, reading configuration from several sources, or trying
 * alternative resource locations in order.
 *
 * **Details**
 *
 * This function executes the provided effects in sequence, stopping at the
 * first success. If an effect succeeds, its result is returned immediately and
 * no further effects in the sequence are executed.
 *
 * If all effects fail, the returned effect fails with the error from the last
 * effect. If the collection is empty, the returned effect defects with an
 * `Error` whose message is `"Received an empty collection of effects"`.
 *
 * **Example** (Trying alternatives until one succeeds)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const primary = Effect.fail("primary unavailable")
 * const secondary = Effect.succeed("secondary result")
 * const tertiary = Effect.sync(() => {
 *   throw new Error("not evaluated")
 * })
 *
 * const program = Effect.firstSuccessOf([
 *   primary,
 *   secondary,
 *   tertiary
 * ])
 *
 * Effect.runSync(program) // => "secondary result"
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const firstSuccessOf = firstSuccessOf$1;
/**
 * Adds a time limit to an effect, triggering a timeout if the effect exceeds
 * the duration.
 *
 * **When to use**
 *
 * Use when you need a timeout of an `Effect` to be represented as a typed
 * failure.
 *
 * **Details**
 *
 * The `timeout` function allows you to specify a time limit for an
 * effect's execution. If the effect does not complete within the given time, a
 * `TimeoutError` is raised. This can be useful for controlling how long your
 * program waits for a task to finish, ensuring that it doesn't hang
 * indefinitely if the task takes too long.
 *
 * **Gotchas**
 *
 * If the timeout wins, the source effect is interrupted.
 *
 * **Example** (Failing when work takes too long)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const timedEffect = Effect.never.pipe(Effect.timeout(0))
 * const error = await Effect.runPromise(Effect.flip(timedEffect))
 * error._tag // => "TimeoutError"
 * ```
 *
 * @see {@link timeoutOption} for returning `Option.none` on timeout.
 * @see {@link timeoutOrElse} for a version that allows specifying both success and timeout handlers.
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const timeout = timeout$1;
/**
 * Runs an effect with a time limit and represents only the timeout case as
 * `Option.none`.
 *
 * **When to use**
 *
 * Use when a timeout of an `Effect` should be handled as `Option.none`.
 *
 * **Details**
 *
 * If the source effect succeeds before the timeout, the returned effect
 * succeeds with `Option.some(value)`. If the timeout wins, the source effect is
 * interrupted and the returned effect succeeds with `Option.none`. If the
 * source effect fails before the timeout, that failure is preserved.
 *
 * **Example** (Returning None on timeout)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const timedOutEffect = Effect.never.pipe(Effect.timeoutOption(0))
 * await Effect.runPromise(timedOutEffect) // => Option.none()
 * ```
 *
 * @see {@link timeout} for a version that raises a `TimeoutError`.
 * @see {@link timeoutOrElse} for a version that allows specifying both success and timeout handlers.
 *
 * @stability stable
 * @category delays & timeouts
 * @since 3.1.0
 */
const timeoutOption = timeoutOption$1;
/**
 * Applies a timeout to an effect, lazily evaluating `orElse` after interrupting
 * the source if the timeout is reached.
 *
 * **Example** (Falling back on timeout)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.timeoutOrElse(Effect.never, {
 *   duration: 0,
 *   orElse: () => Effect.sync(() => { output.push("Query timed out, using cached data") }).pipe(
 *     Effect.as("Cached result")
 *   )
 * })
 *
 * void output.push(await Effect.runPromise(program))
 * output // => ["Query timed out, using cached data", "Cached result"]
 * ```
 *
 * @see {@link timeout} for failing with a `TimeoutError`.
 * @see {@link timeoutOption} for returning `Option.none` on timeout.
 *
 * @stability stable
 * @category delays & timeouts
 * @since 4.0.0
 */
const timeoutOrElse = timeoutOrElse$1;
/**
 * Returns an effect that is delayed from this effect by the specified
 * `Duration`.
 *
 * **Example** (Delaying an effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.delay(Effect.sync(() => { output.push("Delayed message") }), 0)
 *
 * await Effect.runPromise(program)
 * output // => ["Delayed message"]
 * ```
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const delay = delay$1;
/**
 * Returns an effect that suspends the current fiber for the specified duration
 * without blocking a JavaScript thread.
 *
 * **Example** (Pausing without blocking)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.sync(() => { output.push("Start") })
 *   yield* Effect.sleep(0)
 *   yield* Effect.sync(() => { output.push("End") })
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["Start", "End"]
 * ```
 *
 * @stability stable
 * @category delays & timeouts
 * @since 2.0.0
 */
const sleep = sleep$1;
/**
 * Races two effects and returns the first successful result.
 *
 * **Details**
 *
 * If one effect succeeds, the other is interrupted and `onWinner` can observe the
 * winning fiber. If both fail, the race fails.
 *
 * **Example** (Racing two effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const fastFail = Effect.fail("fast-fail")
 * const slowSuccess = Effect.succeed("slow-success")
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.race(fastFail, slowSuccess)
 *   yield* Effect.sync(() => { output.push(`winner: ${result}`) })
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["winner: slow-success"]
 * ```
 *
 * @stability stable
 * @category racing
 * @since 2.0.0
 */
const race = race$1;
/**
 * Races two effects and returns the result of the first one to complete, whether
 * it succeeds or fails.
 *
 * **When to use**
 *
 * Use when any completion, including failure, should decide the race and
 * interrupt the losing effect.
 *
 * **Details**
 *
 * The losing effect is interrupted, and `onWinner` can observe the winning fiber.
 *
 * **Example** (Observing the winning fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const fastFail = Effect.fail("fast-fail")
 * const slowSuccess = Effect.never
 *
 * const program = Effect.gen(function*() {
 *   const message = yield* Effect.match(Effect.raceFirst(fastFail, slowSuccess), {
 *     onFailure: (error) => `failed: ${error}`,
 *     onSuccess: (value) => `succeeded: ${value}`
 *   })
 *   yield* Effect.sync(() => { output.push(message) })
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["failed: fast-fail"]
 * ```
 *
 * @stability stable
 * @category racing
 * @since 2.0.0
 */
const raceFirst = raceFirst$1;
/**
 * Filters elements of an iterable using a predicate, refinement, or effectful
 * predicate.
 *
 * **Example** (Filtering success values)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // Sync predicate
 * const evens = Effect.filter([1, 2, 3, 4], (n) => n % 2 === 0)
 *
 * // Effectful predicate
 * const checked = Effect.filter([1, 2, 3], (n) => Effect.succeed(n > 1))
 *
 * void output.push(Effect.runSync(evens))
 * void output.push(Effect.runSync(checked))
 * output // => [[2, 4], [2, 3]]
 * ```
 *
 * @stability stable
 * @category collecting
 * @since 2.0.0
 */
const filter = filter$1;
/**
 * Filters and maps elements of an iterable effectfully with a `FilterEffect`.
 *
 * **When to use**
 *
 * Use when you need to filter each iterable element effectfully and transform
 * accepted elements into successful output values.
 *
 * **Details**
 *
 * `Result.succeed` values are collected in the returned array, and
 * `Result.fail` values are skipped.
 *
 * **Gotchas**
 *
 * With concurrent execution, successful values are collected in completion
 * order, not input order.
 *
 * @see {@link filterMap} for using a synchronous `Filter`
 * @see {@link filter} for keeping original elements with a predicate
 *
 * @stability stable
 * @category collecting
 * @since 4.0.0
 */
const filterMapEffect = filterMapEffect$1;
/**
 * Filters an effect, providing an alternative effect if the predicate fails.
 *
 * **When to use**
 *
 * Use when a successful value that fails a predicate should continue with an
 * effectful fallback instead of failing the effect.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, it executes the `orElse` effect instead. The
 * `orElse` effect can produce an alternative value or perform additional
 * computations.
 *
 * **Example** (Filtering with a fallback effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * // An effect that produces a number
 * const program = Effect.succeed(5)
 *
 * // Filter for even numbers, provide alternative for odd numbers
 * const filtered = Effect.filterOrElse(
 *   program,
 *   (n) => n % 2 === 0,
 *   (n) => Effect.succeed(`Number ${n} is odd`)
 * )
 *
 * Effect.runSync(filtered) // => "Number 5 is odd"
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterOrElse = filterOrElse$1;
/**
 * Filters an effect, failing with a custom error if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, the effect fails with either a custom
 * error (if `orFailWith` is provided) or a `NoSuchElementError`.
 *
 * **Example** (Filtering with a custom failure)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * // An effect that produces a number
 * const program = Effect.succeed(5)
 *
 * // Filter for even numbers, fail for odd numbers
 * const filtered = Effect.filterOrFail(
 *   program,
 *   (n) => n % 2 === 0,
 *   (n) => `Expected even number, got ${n}`
 * )
 *
 * Effect.runSync(Effect.flip(filtered)) // => "Expected even number, got 5"
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterOrFail = filterOrFail$1;
/**
 * Filters and maps an effect with a `Filter`, failing when the filter fails.
 *
 * **When to use**
 *
 * Use when validating and transforming one effect success with a synchronous
 * `Filter`, while rejected values should fail the effect.
 *
 * **Details**
 *
 * `Result.succeed` becomes the returned success value. `Result.fail` is mapped
 * with `orFailWith` when provided, or fails with `NoSuchElementError`.
 *
 * @see {@link filterMapOrElse} for continuing with a fallback effect when the filter fails
 * @see {@link filterOrFail} for validating with a predicate instead of a `Filter`
 * @see {@link filterMap} for filtering and mapping iterable elements
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterMapOrFail = filterMapOrFail$1;
/**
 * Runs an effect conditionally based on the result of an effectful boolean
 * condition.
 *
 * **When to use**
 *
 * Use when you need an effectful check to decide whether another effect should
 * run while representing the skipped case explicitly.
 *
 * **Details**
 *
 * The condition effect is evaluated first. If it succeeds with `true`, the
 * source effect is run and its success value is wrapped in `Option.some`. If it
 * succeeds with `false`, the source effect is skipped and the result is
 * `Option.none`. If the condition effect fails, that failure is preserved.
 *
 * **Example** (Conditionally running an effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 * const output: Array<unknown> = []
 *
 * const shouldLog = true
 *
 * const program = Effect.when(
 *   Effect.sync(() => { output.push("Condition is true!") }),
 *   Effect.succeed(shouldLog)
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Condition is true!", Option.some(undefined)]
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const when = when$1;
/**
 * Handles both success and failure cases of an effect without performing side
 * effects.
 *
 * **When to use**
 *
 * Use when you need to fold an `Effect` into a value by handling success and
 * failure differently without triggering side effects.
 *
 * **Details**
 *
 * `match` lets you define custom handlers for both success and failure
 * scenarios. You provide separate functions to handle each case, allowing you
 * to process the result if the effect succeeds, or handle the error if the
 * effect fails.
 *
 * **Example** (Matching success and failure values)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class ExampleError extends Data.TaggedError("ExampleError")<{ readonly message: string }> {}
 *
 * const success: Effect.Effect<number, ExampleError> = Effect.succeed(42)
 *
 * const program1 = Effect.match(success, {
 *   onFailure: (error) => `failure: ${error.message}`,
 *   onSuccess: (value) => `success: ${value}`
 * })
 *
 * // Run and log the result of the successful effect
 * Effect.runSync(program1) // => "success: 42"
 *
 * const failure: Effect.Effect<number, ExampleError> = Effect.fail(
 *   new ExampleError({ message: "Uh oh!" })
 * )
 *
 * const program2 = Effect.match(failure, {
 *   onFailure: (error) => `failure: ${error.message}`,
 *   onSuccess: (value) => `success: ${value}`
 * })
 *
 * // Run and log the result of the failed effect
 * Effect.runSync(program2) // => "failure: Uh oh!"
 * ```
 *
 * @see {@link matchEffect} if you need to perform side effects in the handlers.
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const match = match$2;
/**
 * Handles success or failure eagerly with effectful handlers when the effect is already resolved.
 *
 * **When to use**
 *
 * Use when you need effectful success and cause-aware failure handlers for
 * `Effect` inputs that may already be resolved.
 *
 * **Details**
 *
 * If the effect is an `Exit`, the matching handler runs immediately; otherwise it behaves like
 * {@link matchCauseEffect}.
 *
 * @see {@link matchCauseEffect} for the non-eager effectful variant
 * @see {@link matchCauseEager} for eager cause matching with pure handlers
 * @see {@link matchEffect} for effectful matching on typed failures instead of full causes
 *
 * @stability stable
 * @category pattern matching
 * @since 4.0.0
 */
const matchCauseEffectEager = matchCauseEffectEager$1;
/**
 * Handles failures with access to the cause and allows performing side effects.
 *
 * **When to use**
 *
 * Use when you need to fold an `Effect` with effectful success handlers and
 * `Cause`-aware failure handlers.
 *
 * **Details**
 *
 * The `matchCauseEffect` function works similarly to {@link matchCause}, but it
 * also allows you to perform additional side effects based on the failure
 * cause. This function provides access to the complete cause of the failure,
 * making it possible to differentiate between various failure types, and allows
 * you to respond accordingly while performing side effects (like logging or
 * other operations).
 *
 * **Example** (Effectfully matching on causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Data, Effect, Result } from "effect"
 * const output: Array<unknown> = []
 *
 * class TaskError extends Data.TaggedError("TaskError")<{ readonly message: string }> {}
 *
 * const task = Effect.fail(new TaskError({ message: "Task failed" }))
 *
 * const program = Effect.matchCauseEffect(task, {
 *   onFailure: (cause) =>
 *     Effect.gen(function*() {
 *       if (Cause.hasFails(cause)) {
 *         const error = Cause.findError(cause)
 *         if (Result.isSuccess(error)) {
 *           yield* Effect.sync(() => { output.push(`Handling error: ${error.success.message}`) })
 *         }
 *         return "recovered from error"
 *       } else {
 *         yield* Effect.sync(() => { output.push("Handling interruption or defect") })
 *         return "recovered from interruption/defect"
 *       }
 *     }),
 *   onSuccess: (value) =>
 *     Effect.gen(function*() {
 *       yield* Effect.sync(() => { output.push(`Success: ${value}`) })
 *       return `processed ${value}`
 *     })
 * })
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Handling error: Task failed", "recovered from error"]
 * ```
 *
 * @see {@link matchCause} if you don't need side effects and only want to handle the result or failure.
 * @see {@link matchEffect} if you don't need to handle the cause of the failure.
 *
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const matchCauseEffect = matchCauseEffect$1;
/**
 * Handles both success and failure by running effectful handlers.
 *
 * **When to use**
 *
 * Use when you need to handle an `Effect`'s failure or success with handlers
 * that return effects.
 *
 * **Details**
 *
 * Use `matchEffect` when either branch needs to return an `Effect`, such as
 * performing logging, recovery, notification, or other effectful work. The
 * returned effect succeeds or fails according to the handler that is run.
 *
 * **Example** (Matching success and failure with effectful handlers)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect } from "effect"
 *
 * class ExampleError extends Data.TaggedError("ExampleError")<{ readonly message: string }> {}
 *
 * const success: Effect.Effect<number, ExampleError> = Effect.succeed(42)
 * const failure: Effect.Effect<number, ExampleError> = Effect.fail(
 *   new ExampleError({ message: "Uh oh!" })
 * )
 *
 * const program1 = Effect.matchEffect(success, {
 *   onFailure: (error) =>
 *     Effect.succeed(`failure: ${error.message}`),
 *   onSuccess: (value) =>
 *     Effect.succeed(`success: ${value}`)
 * })
 *
 * Effect.runSync(program1) // => "success: 42"
 *
 * const program2 = Effect.matchEffect(failure, {
 *   onFailure: (error) =>
 *     Effect.succeed(`failure: ${error.message}`),
 *   onSuccess: (value) =>
 *     Effect.succeed(`success: ${value}`)
 * })
 *
 * Effect.runSync(program2) // => "failure: Uh oh!"
 * ```
 *
 * @see {@link match} if you don't need side effects and only want to handle the
 * result or failure.
 * @stability stable
 * @category pattern matching
 * @since 2.0.0
 */
const matchEffect = matchEffect$2;
/**
 * Returns whether an effect completes successfully.
 *
 * **Details**
 *
 * Returns `false` for failures in the error channel, but defects still fail the
 * effect.
 *
 * **Example** (Checking whether an effect succeeds)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   const ok = yield* Effect.isSuccess(Effect.succeed("done"))
 *   const failed = yield* Effect.isSuccess(Effect.fail("Uh oh"))
 *   yield* Effect.sync(() => { output.push(`ok: ${ok}`) })
 *   yield* Effect.sync(() => { output.push(`failed: ${failed}`) })
 * })
 *
 * Effect.runSync(program)
 * output // => ["ok: true", "failed: false"]
 * ```
 *
 * @stability stable
 * @category predicates
 * @since 2.0.0
 */
const isSuccess = isSuccess$2;
/**
 * Returns the complete context.
 *
 * **When to use**
 *
 * Use to read the complete `Context` available to the current effect.
 *
 * **Details**
 *
 * This function allows you to access all services that are currently available
 * in the effect's environment. This can be useful for debugging, introspection,
 * or when you need to pass the entire context to another function.
 *
 * **Example** (Reading the full context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Option } from "effect"
 * const output: Array<unknown> = []
 *
 * const Logger = Context.Service<{
 *   log: (msg: string) => void
 * }>("Logger")
 * const Database = Context.Service<{
 *   query: (sql: string) => string
 * }>("Database")
 *
 * const program = Effect.gen(function*() {
 *   const allServices = yield* Effect.context()
 *
 *   // Check if specific services are available
 *   const loggerOption = Context.getOption(allServices, Logger)
 *   const databaseOption = Context.getOption(allServices, Database)
 *
 *   yield* Effect.sync(() => { output.push(`Logger available: ${Option.isSome(loggerOption)}`) })
 *   yield* Effect.sync(() => { output.push(`Database available: ${Option.isSome(databaseOption)}`) })
 * })
 *
 * const context = Context.make(Logger, { log: () => {} })
 *   .pipe(Context.add(Database, { query: () => "result" }))
 *
 * const provided = Effect.provideContext(program, context)
 * Effect.runSync(provided)
 * output // => ["Logger available: true", "Database available: true"]
 * ```
 *
 * @see {@link contextWith} for deriving an effect from the complete context
 * @see {@link service} for reading one service from the context
 *
 * @stability stable
 * @category accessors
 * @since 2.0.0
 */
const context = context$1;
/**
 * Transforms the current context using the provided function.
 *
 * **When to use**
 *
 * Use to derive an effect from the complete `Context`.
 *
 * **Details**
 *
 * This function allows you to access the complete context and perform
 * computations based on all available services. This is useful when you need
 * to conditionally execute logic based on what services are available.
 *
 * **Example** (Deriving values from the context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Option } from "effect"
 * const output: Array<unknown> = []
 *
 * const Logger = Context.Service<{
 *   log: (msg: string) => void
 * }>("Logger")
 * const Cache = Context.Service<{
 *   get: (key: string) => string | null
 * }>("Cache")
 *
 * const program = Effect.contextWith((services: Context.Context<Context.Service.Identifier<typeof Cache>>) => {
 *   const cacheOption = Context.getOption(services, Cache)
 *   const hasCache = Option.isSome(cacheOption)
 *
 *   if (hasCache) {
 *     return Effect.gen(function*() {
 *       const cache = yield* Effect.service(Cache)
 *       yield* Effect.sync(() => { output.push("Using cached data") })
 *       return cache.get("user:123") || "default"
 *     })
 *   } else {
 *     return Effect.gen(function*() {
 *       yield* Effect.sync(() => { output.push("No cache available, using fallback") })
 *       return "fallback data"
 *     })
 *   }
 * })
 *
 * const withCache = Effect.provideService(program, Cache, {
 *   get: () => "cached_value"
 * })
 * void output.push(Effect.runSync(withCache))
 * output // => ["Using cached data", "cached_value"]
 * ```
 *
 * @see {@link context} for reading the complete context as a value
 * @see {@link service} for reading one service from the context
 *
 * @stability stable
 * @category accessors
 * @since 2.0.0
 */
const contextWith = contextWith$1;
/**
 * Provides dependencies to an effect using layers or a context. Use `options.local`
 * to build the layer every time; by default, layers are shared between provide
 * calls.
 *
 * **Example** (Providing dependencies with a layer)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Layer } from "effect"
 *
 * interface Database {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }
 *
 * const Database = Context.Service<Database>("Database")
 *
 * const DatabaseLayer = Layer.succeed(Database)({
 *   query: Effect.fn("Database.query")((sql: string) => Effect.succeed(`Result for: ${sql}`))
 * })
 *
 * const program = Effect.gen(function*() {
 *   const db = yield* Database
 *   return yield* db.query("SELECT * FROM users")
 * })
 *
 * const provided = Effect.provide(program, DatabaseLayer)
 *
 * await Effect.runPromise(provided) // => "Result for: SELECT * FROM users"
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provide = provide$1;
/**
 * Provides a context to an effect, fulfilling its service requirements.
 *
 * **Details**
 *
 * This function provides multiple services at once by supplying a context
 * that contains all the required services. It removes the provided services
 * from the effect's requirements, making them available to the effect.
 *
 * **Example** (Providing a complete context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // Define service keys
 * const Logger = Context.Service<{
 *   log: (msg: string) => void
 * }>("Logger")
 * const Database = Context.Service<{
 *   query: (sql: string) => string
 * }>("Database")
 *
 * // Create a context with multiple services
 * const context = Context.make(Logger, { log: (message) => { output.push(message) } })
 *   .pipe(Context.add(Database, { query: () => "result" }))
 *
 * // An effect that requires both services
 * const program = Effect.gen(function*() {
 *   const logger = yield* Effect.service(Logger)
 *   const db = yield* Effect.service(Database)
 *   logger.log("Querying database")
 *   return db.query("SELECT * FROM users")
 * })
 *
 * const provided = Effect.provideContext(program, context)
 * void output.push(Effect.runSync(provided))
 * output // => ["Querying database", "result"]
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 4.0.0
 */
const provideContext = provideContext$1;
/**
 * Accesses a service from the context.
 *
 * **Example** (Accessing a required service)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 *
 * interface Database {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }
 *
 * const Database = Context.Service<Database>("Database")
 *
 * const program = Effect.gen(function*() {
 *   const db = yield* Effect.service(Database)
 *   return yield* db.query("SELECT * FROM users")
 * })
 *
 * const runnable = Effect.provideService(program, Database, {
 *   query: (sql) => Effect.succeed(`Result for: ${sql}`)
 * })
 * Effect.runSync(runnable) // => "Result for: SELECT * FROM users"
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 4.0.0
 */
const service = service$1;
/**
 * Optionally accesses a service from the environment.
 *
 * **When to use**
 *
 * Use to read an optional dependency from the current context without making
 * that dependency part of the effect's required environment.
 *
 * **Details**
 *
 * This function attempts to access a service from the environment. If the
 * service is available, it returns `Some(service)`. If the service is not
 * available, it returns `None`. Unlike `service`, this function does not
 * require the service to be present in the environment.
 *
 * **Example** (Accessing an optional service)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Option } from "effect"
 * const output: Array<unknown> = []
 *
 * // Define a service key
 * const Logger = Context.Service<{
 *   log: (msg: string) => void
 * }>("Logger")
 *
 * // Use serviceOption to optionally access the logger
 * const program = Effect.gen(function*() {
 *   const maybeLogger = yield* Effect.serviceOption(Logger)
 *
 *   if (Option.isSome(maybeLogger)) {
 *     maybeLogger.value.log("Service is available")
 *   } else {
 *     void output.push("Service not available")
 *   }
 * })
 *
 * Effect.runSync(program)
 * output // => ["Service not available"]
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 2.0.0
 */
const serviceOption = serviceOption$1;
/**
 * Provides part of the required context while leaving the rest unchanged.
 *
 * **Details**
 *
 * This function allows you to transform the context required by an effect,
 * providing part of the context and leaving the rest to be fulfilled later.
 *
 * **Example** (Updating the context before running)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 *
 * // Define services
 * const Logger = Context.Service<{
 *   log: (msg: string) => void
 * }>("Logger")
 * const Config = Context.Service<{
 *   name: string
 * }>("Config")
 *
 * const program = Effect.service(Config).pipe(
 *   Effect.map((config) => `Hello ${config.name}!`)
 * )
 *
 * // Transform services by providing Config while keeping Logger requirement
 * const configured = program.pipe(
 *   Effect.updateContext((context: Context.Context<Context.Service.Identifier<typeof Logger>>) =>
 *     Context.add(context, Config, { name: "World" })
 *   )
 * )
 *
 * // The effect now requires only Logger service
 * const result = Effect.provideService(configured, Logger, {
 *   log: () => {}
 * })
 * Effect.runSync(result) // => "Hello World!"
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 4.0.0
 */
const updateContext = updateContext$1;
/**
 * Provides one concrete service implementation to an effect.
 *
 * **When to use**
 *
 * Use to satisfy one service requirement with an already-built implementation.
 *
 * **Details**
 *
 * The service requirement identified by the `Context.Key` is removed from the
 * effect requirements after the implementation is provided.
 *
 * **Example** (Providing a service value)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // Define a service for configuration
 * const Config = Context.Service<{
 *   apiUrl: string
 *   timeout: number
 * }>("Config")
 *
 * const fetchData = Effect.gen(function*() {
 *   const config = yield* Effect.service(Config)
 *   yield* Effect.sync(() => { output.push(`Fetching from: ${config.apiUrl}`) })
 *   yield* Effect.sync(() => { output.push(`Timeout: ${config.timeout}ms`) })
 *   return "data"
 * })
 *
 * // Provide the service implementation
 * const program = Effect.provideService(fetchData, Config, {
 *   apiUrl: "https://api.example.com",
 *   timeout: 5000
 * })
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Fetching from: https://api.example.com", "Timeout: 5000ms", "data"]
 * ```
 *
 * @see {@link provide} for providing multiple layers to an effect.
 * @see {@link provideServiceEffect} for acquiring the service implementation effectfully.
 * @see {@link provideContext} for providing a complete context.
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideService = provideService$1;
/**
 * Provides one service to an effect using an effectful acquisition.
 *
 * **When to use**
 *
 * Use when the service implementation must be created by an effect and its
 * acquisition failure should remain in the returned effect.
 *
 * **Details**
 *
 * `provideServiceEffect` runs the acquisition effect to produce the service
 * implementation, removes that service from the wrapped effect's requirements,
 * and leaves any other requirements to be provided later. Acquisition failures
 * are included in the returned effect's error channel.
 *
 * **Example** (Providing a service with an effect)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // Define a database connection service
 * interface DatabaseConnection {
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }
 * const Database = Context.Service<DatabaseConnection>("Database")
 *
 * // Effect that creates a database connection
 * const createConnection = Effect.gen(function*() {
 *   yield* Effect.sync(() => { output.push("Establishing database connection...") })
 *   yield* Effect.sync(() => { output.push("Database connected!") })
 *   return {
 *     query: (sql: string) => Effect.succeed(`Result for: ${sql}`)
 *   }
 * })
 *
 * const program = Effect.gen(function*() {
 *   const db = yield* Effect.service(Database)
 *   return yield* db.query("SELECT * FROM users")
 * })
 *
 * // Provide the service through an effect
 * const withDatabase = Effect.provideServiceEffect(
 *   program,
 *   Database,
 *   createConnection
 * )
 *
 * void output.push(await Effect.runPromise(withDatabase))
 * output // => ["Establishing database connection...", "Database connected!", "Result for: SELECT * FROM users"]
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideServiceEffect = provideServiceEffect$1;
/**
 * Returns the current scope for resource management.
 *
 * **Example** (Accessing the current scope)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   const currentScope = yield* Effect.scope
 *   yield* Effect.sync(() => { output.push("Got scope for resource management") })
 *
 *   // Use the scope to manually manage resources if needed
 *   const resource = yield* Effect.acquireRelease(
 *     Effect.sync(() => { output.push("Acquiring resource") }).pipe(Effect.as("resource")),
 *     () => Effect.sync(() => { output.push("Releasing resource") })
 *   )
 *
 *   return resource
 * })
 *
 * void output.push(Effect.runSync(Effect.scoped(program)))
 * output // => ["Got scope for resource management", "Acquiring resource", "Releasing resource", "resource"]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const scope = scope$1;
/**
 * Runs an effect with a scope that closes when the effect completes.
 *
 * **When to use**
 *
 * Use to acquire scoped resources for the duration of a single workflow.
 *
 * **Details**
 *
 * Finalizers for resources acquired inside the workflow run as soon as the
 * workflow completes, whether by success, failure, or interruption.
 *
 * **Example** (Running a scoped acquisition)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const resource = Effect.acquireRelease(
 *   Effect.sync(() => { output.push("Acquiring resource") }).pipe(Effect.as("resource")),
 *   () => Effect.sync(() => { output.push("Releasing resource") })
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const res = yield* resource
 *     yield* Effect.sync(() => { output.push(`Using ${res}`) })
 *     return res
 *   })
 * )
 *
 * Effect.runSync(program)
 * output // => ["Acquiring resource", "Using resource", "Releasing resource"]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const scoped = scoped$1;
/**
 * Creates a scoped effect by providing access to the scope.
 *
 * **When to use**
 *
 * Use when resource acquisition needs direct access to the scope being created,
 * for example to register finalizers manually.
 *
 * **Example** (Working with an explicit scope)
 *
 * ```ts import.meta.vitest
 * import { Effect, Scope } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.scopedWith((scope) =>
 *   Effect.gen(function*() {
 *     yield* Effect.sync(() => { output.push("Inside scoped context") })
 *
 *     // Manually add a finalizer to the scope
 *     yield* Scope.addFinalizer(scope, Effect.sync(() => { output.push("Manual finalizer") }))
 *
 *     // Create a scoped resource
 *     const resource = yield* Effect.scoped(
 *       Effect.acquireRelease(
 *         Effect.sync(() => { output.push("Acquiring resource") }).pipe(Effect.as("resource")),
 *         () => Effect.sync(() => { output.push("Releasing resource") })
 *       )
 *     )
 *
 *     return resource
 *   })
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Inside scoped context", "Acquiring resource", "Releasing resource", "Manual finalizer", "resource"]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 3.11.0
 */
const scopedWith = scopedWith$1;
/**
 * Constructs a scoped resource from an acquisition effect and a release
 * finalizer.
 *
 * **When to use**
 *
 * Use to acquire a scoped resource with an explicit release finalizer.
 *
 * **Details**
 *
 * If acquisition succeeds, the release finalizer is added to the current scope
 * and is guaranteed to run when that scope closes. The finalizer receives the
 * `Exit` value used to close the scope.
 *
 * By default, acquisition is protected by an uninterruptible region. Pass
 * `{ interruptible: true }` to allow the acquisition effect to be interrupted.
 *
 * **Example** (Acquiring and releasing a resource)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * // Simulate a resource that needs cleanup
 * interface FileHandle {
 *   readonly path: string
 *   readonly content: string
 * }
 *
 * // Acquire a file handle
 * const acquire = Effect.gen(function*() {
 *   yield* Effect.sync(() => { output.push("Opening file") })
 *   return { path: "/tmp/file.txt", content: "file content" }
 * })
 *
 * // Release the file handle
 * const release = (handle: FileHandle, exit: Exit.Exit<unknown, unknown>) =>
 *   Effect.sync(() => { output.push(
 *     `Closing file ${handle.path} with exit: ${
 *       Exit.isSuccess(exit) ? "success" : "failure"
 *     }`
 *   ) })
 *
 * // Create a scoped resource
 * const resource = Effect.acquireRelease(acquire, release)
 *
 * // Use the resource within a scope
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const handle = yield* resource
 *     yield* Effect.sync(() => { output.push(`Using file: ${handle.path}`) })
 *     return handle.content
 *   })
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Opening file", "Using file: /tmp/file.txt", "Closing file /tmp/file.txt with exit: success", "file content"]
 * ```
 *
 * @see {@link acquireDisposable} for resources that implement JavaScript disposal protocols
 * @see {@link acquireUseRelease} for bracketing acquire, use, and release in one effect
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const acquireRelease = acquireRelease$1;
/**
 * Runs resource acquisition, usage, and release as one bracketed effect.
 *
 * **When to use**
 *
 * Use to bracket acquire, use, and release logic in one effect.
 *
 * **Details**
 *
 * `acquireUseRelease` does the following:
 *
 *   1. Ensures that the `Effect` value that acquires the resource will not be
 *      interrupted. Note that acquisition may still fail due to internal
 *      reasons (such as an uncaught exception).
 *   2. Ensures that the `release` `Effect` value will not be interrupted,
 *      and will be executed as long as the acquisition `Effect` value
 *      successfully acquires the resource.
 *
 * During the time period between the acquisition and release of the resource,
 * the `use` `Effect` value will be executed.
 *
 * If the `release` `Effect` value fails, then the entire `Effect` value will
 * fail, even if the `use` `Effect` value succeeds. If this fail-fast behavior
 * is not desired, errors produced by the `release` `Effect` value can be caught
 * and ignored.
 *
 * **Example** (Acquiring resources with cleanup)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * interface Database {
 *   readonly connection: string
 *   readonly query: (sql: string) => Effect.Effect<string>
 * }
 *
 * const program = Effect.acquireUseRelease(
 *   // Acquire - connect to database
 *   Effect.gen(function*() {
 *     yield* Effect.sync(() => { output.push("Connecting to database...") })
 *     return {
 *       connection: "db://localhost:5432",
 *       query: (sql: string) => Effect.succeed(`Result for: ${sql}`)
 *     }
 *   }),
 *   // Use - perform database operations
 *   (db) =>
 *     Effect.gen(function*() {
 *       yield* Effect.sync(() => { output.push(`Connected to ${db.connection}`) })
 *       const result = yield* db.query("SELECT * FROM users")
 *       yield* Effect.sync(() => { output.push(`Query result: ${result}`) })
 *       return result
 *     }),
 *   // Release - close database connection
 *   (db, exit) =>
 *     Effect.gen(function*() {
 *       if (Exit.isSuccess(exit)) {
 *         yield* Effect.sync(() => { output.push(`Closing connection to ${db.connection} (success)`) })
 *       } else {
 *         yield* Effect.sync(() => { output.push(`Closing connection to ${db.connection} (failure)`) })
 *       }
 *     })
 * )
 *
 * await Effect.runPromise(program)
 * output // => ["Connecting to database...", "Connected to db://localhost:5432", "Query result: Result for: SELECT * FROM users", "Closing connection to db://localhost:5432 (success)"]
 * ```
 *
 * @see {@link acquireRelease} for scoped resources whose use happens later
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const acquireUseRelease = acquireUseRelease$1;
/**
 * Adds a finalizer to the current scope.
 *
 * **When to use**
 *
 * Use to register low-level cleanup in the current scope.
 *
 * **Details**
 *
 * The finalizer runs when the surrounding scope is closed and receives the
 * `Exit` value used to close the scope.
 *
 * **Example** (Registering scope finalizers)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     // Add a finalizer that runs when the scope closes
 *     yield* Effect.addFinalizer((exit) =>
 *       Effect.sync(() => { output.push(
 *         Exit.isSuccess(exit)
 *           ? "Cleanup: Operation completed successfully"
 *           : "Cleanup: Operation failed, cleaning up resources"
 *       ) })
 *     )
 *
 *     yield* Effect.sync(() => { output.push("Performing main operation...") })
 *
 *     // This could succeed or fail
 *     return "operation result"
 *   })
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Performing main operation...", "Cleanup: Operation completed successfully", "operation result"]
 * ```
 *
 * @see {@link acquireRelease} for resource acquisition with a release finalizer
 * @see {@link ensuring} for attaching a finalizer to one effect
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const addFinalizer = addFinalizer$2;
/**
 * Returns an effect that, if this effect _starts_ execution, then the
 * specified `finalizer` is guaranteed to be executed, whether this effect
 * succeeds, fails, or is interrupted.
 *
 * **Details**
 *
 * For use cases that need access to the effect's result, see `onExit`.
 *
 * Finalizers offer very powerful guarantees, but they are low-level, and
 * should generally not be used for releasing resources. For higher-level
 * logic built on `ensuring`, see the `acquireRelease` family of methods.
 *
 * **Example** (Always running cleanup)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const task = Effect.gen(function*() {
 *   yield* Effect.sync(() => { output.push("Task started") })
 *   yield* Effect.sync(() => { output.push("Task completed") })
 *   return 42
 * })
 *
 * // Ensure cleanup always runs, regardless of success or failure
 * const program = Effect.ensuring(
 *   task,
 *   Effect.sync(() => { output.push("Cleanup: This always runs!") })
 * )
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Task started", "Task completed", "Cleanup: This always runs!", 42]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const ensuring = ensuring$1;
/**
 * Runs the specified effect if this effect fails, providing the error to the
 * effect if it exists. The provided effect will not be interrupted.
 *
 * **Example** (Running cleanup on failure)
 *
 * ```ts import.meta.vitest
 * import { Cause, Data, Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * class TaskError extends Data.TaggedError("TaskError")<{ readonly message: string }> {}
 *
 * const error = new TaskError({ message: "Something went wrong" })
 * const task = Effect.fail(error)
 *
 * const program = Effect.onError(
 *   task,
 *   (cause) => Effect.sync(() => { output.push(`Cleanup on error: ${Cause.squash(cause)}`) })
 * )
 *
 * void output.push(Effect.runSyncExit(program))
 * output // => ["Cleanup on error: TaskError: Something went wrong", Exit.fail(error)]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const onError = onError$1;
/**
 * Runs an optional finalizer with the effect's `Exit` value when the effect
 * completes.
 *
 * **When to use**
 *
 * Use when you are building a low-level `Effect` operator that must inspect the
 * source effect's `Exit`, may skip finalization by returning `undefined`, or
 * must choose whether finalization is forced into an uninterruptible region.
 *
 * **Details**
 *
 * This low-level operator preserves the source effect's result unless the
 * finalizer fails. If both the source effect and the finalizer fail, the two
 * causes are merged. Prefer `onExit` for normal cleanup logic.
 *
 * @see {@link onExit} for ordinary exit-aware cleanup whose finalizer always returns an effect
 *
 * @stability stable
 * @category resource management
 * @since 4.0.0
 */
const onExitPrimitive = onExitPrimitive$1;
/**
 * Ensures that a cleanup function runs whether this effect succeeds, fails, or
 * is interrupted.
 *
 * **Details**
 *
 * If both the effect and the cleanup function fail, the two causes are merged.
 *
 * **Example** (Observing every exit)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 * const output: Array<unknown> = []
 *
 * const task = Effect.succeed(42)
 *
 * const program = Effect.onExit(task, (exit) =>
 *   Effect.sync(() => { output.push(
 *     Exit.isSuccess(exit)
 *       ? `Task succeeded with: ${exit.value}`
 *       : `Task failed: ${Exit.isFailure(exit) ? exit.cause : "interrupted"}`
 *   ) }))
 *
 * void output.push(Effect.runSync(program))
 * output // => ["Task succeeded with: 42", 42]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const onExit = onExit$1;
/**
 * Returns an effect that lazily computes a result and caches it for subsequent
 * evaluations.
 *
 * **When to use**
 *
 * Use when you need an expensive or time-consuming operation to be evaluated
 * once and reused by later callers.
 *
 * **Details**
 *
 * This function wraps an effect and ensures that its result is computed only
 * once. Once the result is computed, it is cached, meaning that subsequent
 * evaluations of the same effect will return the cached result without
 * re-executing the logic.
 *
 * Concurrent callers share the pending computation, which is interrupted only
 * once every caller waiting on it has been interrupted. Interrupted
 * computations are never cached, so the next evaluation starts a fresh
 * computation.
 *
 * **Example** (Memoizing an effect until invalidated)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 * const record = (value: unknown) => Effect.sync(() => { output.push(value) })
 *
 * let i = 1
 * const expensiveTask = Effect.sync(() => {
 *   void output.push("expensive task...")
 *   return `result ${i++}`
 * })
 *
 * const program = Effect.gen(function*() {
 *   void output.push("non-cached version:")
 *   yield* expensiveTask.pipe(Effect.andThen(record))
 *   yield* expensiveTask.pipe(Effect.andThen(record))
 *   void output.push("cached version:")
 *   const cached = yield* Effect.cached(expensiveTask)
 *   yield* cached.pipe(Effect.andThen(record))
 *   yield* cached.pipe(Effect.andThen(record))
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["non-cached version:", "expensive task...", "result 1", "expensive task...", "result 2", "cached version:", "expensive task...", "result 3", "result 3"]
 * ```
 *
 * @see {@link cachedWithTTL} for a similar function that includes a
 * time-to-live duration for the cached value.
 * @see {@link cachedInvalidateWithTTL} for a similar function that includes an
 * additional effect for manually invalidating the cached value.
 * @stability stable
 * @category caching
 * @since 2.0.0
 */
const cached = cached$1;
/**
 * Creates a cached effect result for a fixed duration or a duration computed
 * from its `Exit` and allows manual invalidation before expiration.
 *
 * **When to use**
 *
 * Use when an effect result should be cached for a bounded time and callers
 * also need a manual invalidation effect to force recomputation before
 * expiration.
 *
 * **Details**
 *
 * This function behaves similarly to {@link cachedWithTTL} by caching the
 * result of an effect for a specified period of time. However, it introduces an
 * additional feature: it provides an effect that allows you to manually
 * invalidate the cached result before it naturally expires.
 *
 * This gives you more control over the cache, allowing you to refresh the
 * result when needed, even if the original cache has not yet expired.
 *
 * Once the cache is invalidated, the next time the effect is evaluated, the
 * result will be recomputed, and the cache will be refreshed.
 *
 * **Example** (Memoizing with TTL and invalidation)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 * const record = (value: unknown) => Effect.sync(() => { output.push(value) })
 *
 * let i = 1
 * const expensiveTask = Effect.sync(() => {
 *   void output.push("expensive task...")
 *   return `result ${i++}`
 * })
 *
 * const program = Effect.gen(function*() {
 *   const [cached, invalidate] = yield* Effect.cachedInvalidateWithTTL(
 *     expensiveTask,
 *     "1 hour"
 *   )
 *   yield* cached.pipe(Effect.andThen(record))
 *   yield* cached.pipe(Effect.andThen(record))
 *   yield* invalidate
 *   yield* cached.pipe(Effect.andThen(record))
 * })
 *
 * Effect.runSync(program)
 * output // => ["expensive task...", "result 1", "result 1", "expensive task...", "result 2"]
 * ```
 *
 * @see {@link cached} for a similar function that caches the result
 * indefinitely.
 * @see {@link cachedWithTTL} for a similar function that caches the result for
 * a specified duration but does not include an effect for manual invalidation.
 * @stability stable
 * @category caching
 * @since 2.0.0
 */
const cachedInvalidateWithTTL = cachedInvalidateWithTTL$1;
/**
 * Returns an effect that is immediately interrupted.
 *
 * **Example** (Creating an interrupted effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   return yield* Effect.interrupt
 *   yield* Effect.succeed("This won't execute and is unreachable")
 * })
 *
 * Effect.runSyncExit(program)._tag // => "Failure"
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interrupt = interrupt$3;
/**
 * Returns a new effect that allows the effect to be interruptible.
 *
 * **Example** (Allowing interruption)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.interruptible(Effect.never).pipe(
 *   Effect.timeoutOption(0)
 * )
 * await Effect.runPromise(program) // => Option.none()
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interruptible = interruptible$1;
/**
 * Runs the specified finalizer effect if this effect is interrupted.
 *
 * **Example** (Running cleanup on interruption)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 * const output: Array<unknown> = []
 *
 * const task = Effect.forever(Effect.succeed("working..."))
 *
 * const program = Effect.onInterrupt(
 *   task,
 *   () => Effect.sync(() => { output.push("Task was interrupted, cleaning up...") })
 * )
 *
 * const fiber = Effect.runFork(program)
 * await Effect.runPromise(Fiber.interrupt(fiber))
 * output // => ["Task was interrupted, cleaning up..."]
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const onInterrupt = onInterrupt$1;
/**
 * Returns a new effect that disables interruption for the given effect.
 *
 * **Example** (Preventing interruption)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const criticalTask = Effect.gen(function*() {
 *   yield* Effect.sync(() => { output.push("Starting critical section...") })
 *   yield* Effect.sync(() => { output.push("Critical section completed") })
 * })
 *
 * const program = Effect.uninterruptible(criticalTask)
 *
 * Effect.runSync(program)
 * output // => ["Starting critical section...", "Critical section completed"]
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const uninterruptible = uninterruptible$1;
/**
 * Disables interruption and provides a restore function to restore the
 * interruptible state within the effect.
 *
 * **Example** (Restoring interruption in protected regions)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.uninterruptibleMask((restore) =>
 *   Effect.gen(function*() {
 *     yield* Effect.sync(() => { output.push("Uninterruptible phase...") })
 *     // Restore interruptibility for this part
 *     yield* restore(
 *       Effect.gen(function*() {
 *         yield* Effect.sync(() => { output.push("Interruptible phase...") })
 *       })
 *     )
 *
 *     yield* Effect.sync(() => { output.push("Back to uninterruptible") })
 *   })
 * )
 *
 * Effect.runSync(program)
 * output // => ["Uninterruptible phase...", "Interruptible phase...", "Back to uninterruptible"]
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const uninterruptibleMask = uninterruptibleMask$1;
/**
 * Repeats this effect forever (until the first error).
 *
 * **Example** (Repeating forever)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option } from "effect"
 *
 * const program = Effect.forever(Effect.never).pipe(Effect.timeoutOption(0))
 * await Effect.runPromise(program) // => Option.none()
 * ```
 *
 * @stability stable
 * @category repetition
 * @since 2.0.0
 */
const forever = forever$2;
/**
 * Repeats an effect based on a specified schedule or until the first failure.
 *
 * **When to use**
 *
 * Use to rerun an effect after successful executions.
 *
 * **Details**
 *
 * This function executes an effect repeatedly according to the given schedule.
 * Each repetition occurs after the initial execution of the effect, meaning
 * that the schedule determines the number of additional repetitions. For
 * example, using `Schedule.once` will result in the effect being executed twice
 * (once initially and once as part of the repetition).
 *
 * If the effect succeeds, it is repeated according to the schedule. If it
 * fails, the repetition stops immediately, and the failure is returned.
 *
 * The schedule can also specify delays between repetitions, making it useful
 * for tasks like retrying operations with backoff, periodic execution, or
 * performing a series of dependent actions.
 *
 * You can combine schedules for more advanced repetition logic, such as adding
 * delays, limiting recursions, or dynamically adjusting based on the outcome of
 * each execution.
 *
 * **Gotchas**
 *
 * The source effect is always evaluated once before the schedule is stepped.
 * The schedule controls additional repetitions, not the initial execution.
 *
 * **Example** (Repeating successful effects with a schedule)
 *
 * ```ts import.meta.vitest
 * // Success Example
 * import { Effect, Schedule } from "effect"
 * const output: Array<unknown> = []
 *
 * const action = Effect.sync(() => { output.push("success") })
 * const policy = Schedule.recurs(2)
 * const program = Effect.repeat(action, policy)
 *
 * void output.push(Effect.runSync(program))
 * output // => ["success", "success", "success", 2]
 * ```
 *
 * **Example** (Stopping repetition on failure)
 *
 * ```ts import.meta.vitest
 * // Failure Example
 * import { Effect, Schedule } from "effect"
 * const output: Array<unknown> = []
 *
 * let count = 0
 *
 * // Define a callback effect that simulates an action with possible failures
 * const action = Effect.callback<string, string>((resume) => {
 *   if (count > 1) {
 *     void output.push("failure")
 *     resume(Effect.fail("Uh oh!"))
 *   } else {
 *     count++
 *     void output.push("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * const policy = Schedule.recurs(2)
 * const program = Effect.repeat(action, policy)
 *
 * void output.push((await Effect.runPromiseExit(program))._tag)
 * output // => ["success", "success", "failure", "Failure"]
 * ```
 *
 * @see {@link retry} for failure-based repetition
 * @see {@link repeatOrElse} for fallback handling when repetition fails
 *
 * @stability stable
 * @category repetition
 * @since 2.0.0
 */
const repeat = repeat$1;
/**
 * Enables or disables tracing for spans created by the given effect.
 *
 * **Details**
 *
 * When `enabled` is `false`, spans created inside the effect are not registered
 * with the current tracer and do not propagate as normal trace parents.
 *
 * **Example** (Enabling or disabling tracing)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.succeed(42).pipe(
 *   Effect.withSpan("my-span"),
 *   // the span will not be registered with the tracer
 *   Effect.withTracerEnabled(false)
 * )
 * Effect.runSync(program) // => 42
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const withTracerEnabled = withTracerEnabled$1;
/**
 * Adds an annotation to each span in this effect.
 *
 * **Example** (Annotating all spans)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.succeed("result")
 *
 * // Add single annotation
 * const annotated1 = Effect.annotateSpans(program, "user", "john")
 *
 * // Add multiple annotations
 * const annotated2 = Effect.annotateSpans(program, {
 *   operation: "data-processing",
 *   version: "1.0.0",
 *   environment: "production"
 * })
 *
 * Effect.runSync(Effect.all([annotated1, annotated2])) // => ['result', 'result']
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const annotateSpans = annotateSpans$1;
/**
 * Adds an annotation to the current span if available.
 *
 * **Example** (Annotating the current span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.annotateCurrentSpan("userId", "123")
 *   yield* Effect.annotateCurrentSpan({
 *     operation: "user-lookup"
 *   })
 *   return "success"
 * })
 *
 * const traced = Effect.withSpan(program, "user-operation")
 * Effect.runSync(traced) // => "success"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const annotateCurrentSpan = annotateCurrentSpan$1;
/**
 * Returns the currently active local tracing span.
 *
 * **Details**
 *
 * The effect fails with `NoSuchElementError` when there is no active local
 * `Span`.
 *
 * **Example** (Reading the current span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const span = yield* Effect.currentSpan
 *   return span.name
 * })
 *
 * const traced = Effect.withSpan(program, "my-span")
 * Effect.runSync(traced) // => "my-span"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const currentSpan = currentSpan$1;
/**
 * Returns the current parent span from the effect context.
 *
 * **Details**
 *
 * The effect succeeds with either a local span or external span when one is
 * present, and fails with `NoSuchElementError` when no parent span is
 * available.
 *
 * **Example** (Reading the parent span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const childOperation = Effect.gen(function*() {
 *   const parentSpan = yield* Effect.currentParentSpan
 *   return parentSpan._tag
 * })
 *
 * const program = Effect.withSpan(childOperation, "child-span")
 *
 * const traced = Effect.withSpan(program, "parent-span")
 * Effect.runSync(traced) // => "Span"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const currentParentSpan = currentParentSpan$1;
/**
 * Create a new span for tracing, and automatically close it when the Scope
 * finalizes.
 *
 * **Details**
 *
 * The span is not added to the current span stack, so no child spans will be
 * created for it.
 *
 * **Example** (Creating a scoped standalone span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const span = yield* Effect.makeSpanScoped("scoped-operation")
 *     return span.name
 *     // Span automatically closes when scope ends
 *   })
 * )
 *
 * Effect.runSync(program) // => "scoped-operation"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const makeSpanScoped = makeSpanScoped$1;
/**
 * Create a new span for tracing, and automatically close it when the effect
 * completes.
 *
 * **Details**
 *
 * The span is not added to the current span stack, so no child spans will be
 * created for it.
 *
 * **Example** (Running an effect with a standalone span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.useSpan(
 *   "user-operation",
 *   (span) => Effect.succeed(`${span.name}: success`)
 * )
 * Effect.runSync(program) // => "user-operation: success"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const useSpan = useSpan$1;
/**
 * Wraps the effect with a child span for tracing.
 *
 * **Example** (Wrapping an effect in a child span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task = Effect.succeed("result")
 *
 * const traced = Effect.withSpan(task, "my-task", {
 *   attributes: { version: "1.0" }
 * })
 * Effect.runSync(traced) // => "result"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const withSpan = withSpan$1;
/**
 * Adds the provided span to the current span stack.
 *
 * **Example** (Setting a parent span)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const span = yield* Effect.makeSpan("parent-span")
 *   const childTask = Effect.succeed("child operation")
 *   yield* Effect.withParentSpan(childTask, span)
 *   return "completed"
 * })
 * Effect.runSync(program) // => "completed"
 * ```
 *
 * @stability stable
 * @category tracing
 * @since 2.0.0
 */
const withParentSpan = withParentSpan$1;
/**
 * Executes a request using the provided resolver.
 *
 * **When to use**
 *
 * Use when you need resolver-driven batching for a typed `Request`.
 *
 * **Example** (Executing a request through a resolver)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Request, RequestResolver } from "effect"
 * const output: Array<unknown> = []
 *
 * interface GetUser extends Request.Request<string> {
 *   readonly _tag: "GetUser"
 *   readonly id: number
 * }
 * const GetUser = Request.tagged<GetUser>("GetUser")
 *
 * const resolver = RequestResolver.make<GetUser>(
 *   Effect.fnUntraced(function*(entries) {
 *     for (const entry of entries) {
 *       yield* Request.complete(entry, Exit.succeed(`user-${entry.request.id}`))
 *     }
 *   })
 * )
 *
 * const program = Effect.gen(function*() {
 *   const name = yield* Effect.request(GetUser({ id: 1 }), resolver)
 *   yield* Effect.sync(() => { output.push(name) })
 * })
 *
 * await Effect.runPromise(program)
 * output // => ["user-1"]
 * ```
 *
 * @see {@link requestUnsafe} for the low-level entry point when you already have a `Context` and need to enqueue outside an `Effect`
 *
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const request = request$1;
/**
 * Returns an effect that forks this effect into its own separate fiber,
 * returning the fiber immediately, without waiting for it to begin executing
 * the effect.
 *
 * **Details**
 *
 * You can use the `forkChild` method whenever you want to execute an effect in a
 * new fiber, concurrently and without "blocking" the fiber executing other
 * effects. Using fibers can be tricky, so instead of using this method
 * directly, consider other higher-level methods, such as `raceWith`,
 * `zipPar`, and so forth.
 *
 * The fiber returned by this method has methods to interrupt the fiber and to
 * wait for it to finish executing the effect. See `Fiber` for more
 * information.
 *
 * Whenever you use this method to launch a new fiber, the new fiber is
 * attached to the parent fiber's scope. This means when the parent fiber
 * terminates, the child fiber will be terminated as well, ensuring that no
 * fibers leak. This behavior is called "auto supervision", and if this
 * behavior is not desired, you may use the `forkDetach` or `forkIn` methods.
 *
 * **Example** (Forking a child fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const task = Effect.succeed("result")
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* task.pipe(Effect.forkChild)
 *   const result = yield* Fiber.join(fiber)
 *   return result
 * })
 *
 * await Effect.runPromise(program) // => "result"
 * ```
 *
 * @stability stable
 * @category forking
 * @since 4.0.0
 */
const forkChild = forkChild$1;
/**
 * Forks the effect in the specified scope. The fiber will be interrupted
 * when the scope is closed.
 *
 * **Example** (Forking into a supplied scope)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const task = Effect.never
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const scope = yield* Effect.scope
 *     const fiber = yield* Effect.forkIn(task, scope)
 *     // Fiber will be interrupted when scope closes
 *     return "done"
 *   })
 * )
 *
 * await Effect.runPromise(program) // => "done"
 * ```
 *
 * @stability stable
 * @category forking
 * @since 2.0.0
 */
const forkIn = forkIn$1;
/**
 * Forks the fiber in a `Scope`, interrupting it when the scope is closed.
 *
 * **Example** (Forking into the current scope)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const backgroundTask = Effect.never
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     yield* backgroundTask.pipe(Effect.forkScoped)
 *
 *     // Fiber will be interrupted when scope closes
 *     return "scope completed"
 *   })
 * )
 *
 * await Effect.runPromise(program) // => "scope completed"
 * ```
 *
 * @stability stable
 * @category forking
 * @since 2.0.0
 */
const forkScoped = forkScoped$1;
/**
 * Forks the effect into a new fiber attached to the global scope. Because the
 * new fiber is attached to the global scope, when the fiber executing the
 * returned effect terminates, the forked fiber will continue running.
 *
 * **Example** (Forking a detached fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const daemonTask = Effect.succeed("daemon result")
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* daemonTask.pipe(Effect.forkDetach)
 *   return yield* Fiber.join(fiber)
 * })
 *
 * await Effect.runPromise(program) // => "daemon result"
 * ```
 *
 * @stability stable
 * @category forking
 * @since 4.0.0
 */
const forkDetach = forkDetach$1;
/**
 * Accesses the fiber currently executing the effect.
 *
 * **Example** (Accessing the current fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* Effect.fiber
 *   yield* Effect.sync(() => { output.push(typeof fiber.id) })
 * })
 *
 * Effect.runSync(program)
 * output // => ["number"]
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 4.0.0
 */
const fiber = fiber$1;
/**
 * Runs an effect in the background, returning a fiber that can
 * be observed or interrupted.
 *
 * **When to use**
 *
 * Use when you need to start an effect in the background and receive a fiber.
 *
 * **Example** (Running an effect in the background)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 * const output: Array<unknown> = []
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = Effect.sync(() => { output.push("running...") }).pipe(Effect.as("done"))
 *
 * //      ┌─── RuntimeFiber<number, never>
 * //      ▼
 * const fiber = Effect.runFork(program)
 *
 * void output.push(await Effect.runPromise(Fiber.join(fiber)))
 * output // => ["running...", "done"]
 * ```
 *
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runFork = runFork$1;
/**
 * Runs an effect in the background with the provided services.
 *
 * **When to use**
 *
 * Use when an effect still requires services, you already have a `Context`, and
 * you want a background fiber.
 *
 * **Example** (Running with services in the background)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Fiber } from "effect"
 * const output: Array<unknown> = []
 *
 * interface Logger {
 *   log: (message: string) => void
 * }
 *
 * const Logger = Context.Service<Logger>("Logger")
 *
 * const services = Context.make(Logger, {
 *   log: (message) => void output.push(message)
 * })
 *
 * const program = Effect.gen(function*() {
 *   const logger = yield* Logger
 *   logger.log("Hello from service!")
 *   return "done"
 * })
 *
 * const fiber = Effect.runForkWith(services)(program)
 * void output.push(await Effect.runPromise(Fiber.join(fiber)))
 * output // => ["Hello from service!", "done"]
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runForkWith = runForkWith$1;
/**
 * Executes an effect and returns the result as a `Promise`.
 *
 * **When to use**
 *
 * Use when you need to execute an effect and work with the
 * result using `Promise` syntax, typically for compatibility with other
 * promise-based code.
 *
 * If the effect succeeds, the promise will resolve with the result. If the
 * effect fails, the promise will reject with an error.
 *
 * **Example** (Running a successful effect as a Promise)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * await Effect.runPromise(Effect.succeed(1)) // => 1
 * ```
 *
 * **Example** (Running effects as promises)
 *
 * ```ts import.meta.vitest
 * //Example: Handling a Failing Effect as a Rejected Promise
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * await Effect.runPromise(Effect.fail("my error")).catch(() => {
 *   void output.push("rejected")
 * })
 * output // => ["rejected"]
 * ```
 *
 * @see {@link runPromiseExit} for a version that returns an `Exit` type instead of rejecting.
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runPromise = runPromise$1;
/**
 * Executes an effect as a Promise with the provided services.
 *
 * **When to use**
 *
 * Use when you already have a `Context` and need Promise interop that rejects on
 * effect failure.
 *
 * **Example** (Running with services as a promise)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 *
 * interface Config {
 *   apiUrl: string
 * }
 *
 * const Config = Context.Service<Config>("Config")
 *
 * const context = Context.make(Config, {
 *   apiUrl: "https://api.example.com"
 * })
 *
 * const program = Effect.gen(function*() {
 *   const config = yield* Config
 *   return `Connecting to ${config.apiUrl}`
 * })
 *
 * await Effect.runPromiseWith(context)(program) // => "Connecting to https://api.example.com"
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runPromiseWith = runPromiseWith$1;
/**
 * Runs an effect and returns a `Promise` that resolves to an `Exit`, which
 * represents the outcome (success or failure) of the effect.
 *
 * **When to use**
 *
 * Use when you need to determine if an effect succeeded
 * or failed, including any defects, and you want to work with a `Promise`.
 *
 * **Details**
 *
 * The `Exit` type represents the result of the effect. Successful effects are
 * wrapped in `Success`, and failed effects are wrapped in `Failure` with a
 * `Cause`.
 *
 * **Example** (Observing promise results as Exit)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 *
 * // Execute a successful effect and get the Exit result as a Promise
 * await Effect.runPromiseExit(Effect.succeed(1)) // => Exit.succeed(1)
 *
 * // Execute a failing effect and get the Exit result as a Promise
 * await Effect.runPromiseExit(Effect.fail("my error")) // => Exit.fail("my error")
 * ```
 *
 * @see {@link runPromise} for a version that rejects on failure.
 *
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runPromiseExit = runPromiseExit$1;
/**
 * Executes an effect synchronously and returns its success value.
 *
 * **When to use**
 *
 * Use when you need to execute an effect that is guaranteed to complete
 * synchronously.
 *
 * **Details**
 *
 * If the effect fails, dies, is interrupted, or performs asynchronous work,
 * `runSync` throws a `FiberFailure` instead of returning a value. Use
 * `runSyncExit` when you want the failure captured as an `Exit`.
 *
 * **Example** (Running a synchronous effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.sync(() => {
 *   void output.push("Hello, World!")
 *   return 1
 * })
 *
 * const result = Effect.runSync(program)
 * void output.push(result)
 * output // => ["Hello, World!", 1]
 * ```
 *
 * **Example** (Throwing for failed or async effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * try {
 *   // Attempt to run an effect that fails
 *   Effect.runSync(Effect.fail("my error"))
 * } catch (e) {
 *   void output.push("failed effect")
 * }
 * try {
 *   // Attempt to run an effect that involves async work
 *   Effect.runSync(Effect.promise(() => Promise.resolve(1)))
 * } catch (e) {
 *   void output.push("async effect")
 * }
 * output // => ["failed effect", "async effect"]
 * ```
 *
 * @see {@link runSyncExit} for a version that returns an `Exit` type instead of
 * throwing an error.
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runSync = runSync$1;
/**
 * Executes an effect synchronously with provided services.
 *
 * **When to use**
 *
 * Use when you already have a `Context`, the effect is known to complete
 * synchronously, and failures should throw.
 *
 * **Example** (Running synchronously with services)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect } from "effect"
 *
 * interface MathService {
 *   add: (a: number, b: number) => number
 * }
 *
 * const MathService = Context.Service<MathService>("MathService")
 *
 * const context = Context.make(MathService, {
 *   add: (a, b) => a + b
 * })
 *
 * const program = Effect.gen(function*() {
 *   const math = yield* MathService
 *   return math.add(2, 3)
 * })
 *
 * const result = Effect.runSyncWith(context)(program)
 * result // => 5
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runSyncWith = runSyncWith$1;
/**
 * Runs an effect synchronously and captures the outcome safely as an `Exit` type, which
 * represents the outcome (success or failure) of the effect.
 *
 * **When to use**
 *
 * Use to find out whether an effect succeeded or failed,
 * including any defects, without dealing with asynchronous operations.
 *
 * **Details**
 *
 * The `Exit` type represents the result of the effect. Successful effects are
 * wrapped in `Success`, and failed effects are wrapped in `Failure` with a
 * `Cause`.
 *
 * If the effect contains asynchronous operations, `runSyncExit` will
 * return an `Failure` with a `Die` cause, indicating that the effect cannot be
 * resolved synchronously.
 *
 * **Example** (Observing synchronous results as Exit)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit } from "effect"
 *
 * Effect.runSyncExit(Effect.succeed(1)) // => Exit.succeed(1)
 *
 * Effect.runSyncExit(Effect.fail("my error")) // => Exit.fail("my error")
 * ```
 *
 * **Example** (Capturing async work as a Die cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit } from "effect"
 *
 * const exit = Effect.runSyncExit(Effect.promise(() => Promise.resolve(1)))
 * const isAsyncDie = Exit.hasDies(exit) && exit.cause.reasons.some(
 *   (reason) => Cause.isDieReason(reason) && Cause.isAsyncFiberError(reason.defect)
 * )
 *
 * isAsyncDie // => true
 * ```
 *
 * @see {@link runSync} for a version that throws on failure.
 *
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runSyncExit = runSyncExit$1;
/**
 * Creates an Effect-returning function without tracing.
 *
 * **When to use**
 *
 * Use when you are defining a reusable Effect function whose implementation
 * would otherwise be a normal function returning {@link gen}, especially when
 * tracing spans or stack-frame capture are not needed.
 *
 * **Details**
 *
 * Compared to a plain function that returns {@link gen}, `Effect.fnUntraced`
 * reuses the generator body instead of allocating a fresh generator closure
 * around the arguments on every call. It does not record an Effect stack-frame
 * boundary and does not create tracing spans. Use {@link fn} when you need
 * those stack frames or spans. Additional arguments after the generator body
 * act like `pipe` transforms: each transform receives the previous result and
 * the original function arguments. Annotate the generator return type with
 * `Effect.fn.Return<A, E, R>` when the produced `Effect` type needs to be
 * stated explicitly.
 *
 * **Example** (Defining untraced effect functions)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fnUntraced(function*(
 *   value: string
 * ) {
 *   return yield* Effect.succeed(value.length)
 * })
 *
 * //      ┌─── Effect.Effect<number>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => 5
 * ```
 *
 * **Example** (Transforming the returned Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fnUntraced(
 *   function*(value: string) {
 *     return yield* Effect.succeed(value.length)
 *   },
 *   (effect, value) =>
 *     effect.pipe(Effect.map((length) => `${value}: ${length}`))
 * )
 *
 * //      ┌─── Effect.Effect<string>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => "hello: 5"
 * ```
 *
 * **Example** (Annotating an untraced non-parametric function)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fnUntraced(function*(
 *   value: string
 * ): Effect.fn.Return<number> {
 *   return yield* Effect.succeed(value.length)
 * })
 *
 * //      ┌─── Effect.Effect<number>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => 5
 * ```
 *
 * **Example** (Annotating an untraced parametric function)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fnUntraced(function*<A>(
 *   value: A
 * ): Effect.fn.Return<A> {
 *   return yield* Effect.succeed(value)
 * })
 *
 * //      ┌─── Effect.Effect<string>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => "hello"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.12.0
 */
const fnUntraced = fnUntraced$1;
/**
 * Creates a reusable traced function from an Effect body.
 *
 * **When to use**
 *
 * Use when you are defining a reusable Effect function whose implementation
 * would otherwise be a normal function returning {@link gen}, and you want
 * tracing spans or stack-frame capture.
 *
 * **Details**
 *
 * Compared to a plain function that returns {@link gen}, `Effect.fn` reuses the
 * generator body instead of allocating a fresh generator closure around the
 * arguments on every call. Call `Effect.fn(body, ...)` for a generic
 * stack-frame boundary without creating a span. Call
 * `Effect.fn("operationName", options?)(body, ...)` when that boundary should
 * have a readable operation name and the returned `Effect` should create a
 * tracing span when run. {@link SpanOptionsNoTrace} configures span metadata
 * such as attributes, links, parent or root selection, kind, sampling, and log
 * level. Additional arguments after the generator body act like `pipe`
 * transforms: each transform receives the previous result and the original
 * function arguments. When those transforms return an `Effect`, the returned
 * effect includes stack-frame metadata and, for the named form, a tracing span.
 * Generator bodies may declare a `this` parameter; pass `{ self }` before the
 * body to bind `this` when the function is created.
 *
 * **Example** (Defining traced effect functions)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fn("calculateLength")(function*(value: string) {
 *   return yield* Effect.succeed(value.length)
 * })
 *
 * //      ┌─── Effect.Effect<number>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => 5
 * ```
 *
 * **Example** (Transforming the returned Effect)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fn("formatLength")(
 *   function*(value: string) {
 *     return yield* Effect.succeed(value.length)
 *   },
 *   (effect, value) =>
 *     effect.pipe(Effect.map((length) => `${value}: ${length}`))
 * )
 *
 * //      ┌─── Effect.Effect<string>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => "hello: 5"
 * ```
 *
 * **Example** (Binding this)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * class Counter {
 *   count = 0
 *
 *   increment = Effect.fn("Counter.increment")(
 *     { self: this },
 *     function*(this: Counter, by: number) {
 *       this.count += by
 *       return yield* Effect.succeed(this.count)
 *     }
 *   )
 * }
 *
 * const counter = new Counter()
 *
 * //      ┌─── Effect.Effect<number>
 * //      ▼
 * const program = counter.increment(1)
 * Effect.runSync(program) // => 1
 * ```
 *
 * **Example** (Annotating a traced non-parametric function)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fn("calculateLength")(function*(
 *   value: string
 * ): Effect.fn.Return<number> {
 *   return yield* Effect.succeed(value.length)
 * })
 *
 * //      ┌─── Effect.Effect<number>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => 5
 * ```
 *
 * **Example** (Annotating a traced parametric function)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const f = Effect.fn("succeed")(function*<A>(
 *   value: A
 * ): Effect.fn.Return<A> {
 *   return yield* Effect.succeed(value)
 * })
 *
 * //      ┌─── Effect.Effect<string>
 * //      ▼
 * const program = f("hello")
 * Effect.runSync(program) // => "hello"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 3.11.0
 */
const fn = fn$1;
/**
 * Retrieves the `Clock` service from the context and provides it to the
 * specified effectful function.
 *
 * **Example** (Accessing the Clock service)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.clockWith((clock) =>
 *   clock.currentTimeMillis.pipe(
 *     Effect.map(() => "Clock is available")
 *   )
 * )
 *
 * Effect.runSync(program) // => "Clock is available"
 * ```
 *
 * @stability stable
 * @category accessors
 * @since 2.0.0
 */
const clockWith = clockWith$1;
/**
 * Creates a logger function that logs at the specified level.
 *
 * **Details**
 *
 * If no level is provided, the logger uses the fiber's current log level and
 * extracts any `Cause` values from the message list.
 *
 * **Example** (Logging at a dynamic level)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger, References } from "effect"
 * const output: Array<unknown> = []
 *
 * const logWarn = Effect.logWithLevel("Warn")
 *
 * const program = Effect.gen(function*() {
 *   yield* logWarn("Cache miss")
 * })
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * const runnable = program.pipe(
 *   Effect.provideService(References.MinimumLogLevel, "Debug"),
 *   Effect.provide(Logger.layer([logger]))
 * )
 * Effect.runSync(runnable)
 * output // => ["Warn: Cache miss"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logWithLevel = logWithLevel$1;
/**
 * Logs one or more messages using the default log level.
 *
 * **Example** (Logging at the default level)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   const result = 2 + 2
 *   yield* Effect.log("Result:", result)
 *   return result
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * const runnable = Effect.provide(program, Logger.layer([logger]))
 * void output.push(Effect.runSync(runnable))
 * output // => ["Info: Result: 4", 4]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const log = /*#__PURE__*/ logWithLevel$1();
/**
 * Logs one or more messages at the FATAL level.
 *
 * **Example** (Logging fatal messages)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logFatal("Critical system failure")
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * const runnable = Effect.provide(program, Logger.layer([logger]))
 * Effect.runSync(runnable)
 * output // => ["Fatal: Critical system failure"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logFatal = /*#__PURE__*/ logWithLevel$1("Fatal");
/**
 * Logs one or more messages at the WARNING level.
 *
 * **Example** (Logging warnings)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logWarning("API rate limit approaching")
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * Effect.runSync(Effect.provide(program, Logger.layer([logger])))
 * output // => ["Warn: API rate limit approaching"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logWarning = /*#__PURE__*/ logWithLevel$1("Warn");
/**
 * Logs one or more messages at the ERROR level.
 *
 * **Example** (Logging errors)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logError("Database connection failed")
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * Effect.runSync(Effect.provide(program, Logger.layer([logger])))
 * output // => ["Error: Database connection failed"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logError = /*#__PURE__*/ logWithLevel$1("Error");
/**
 * Logs one or more messages at the INFO level.
 *
 * **Example** (Logging information)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logInfo("Application starting up")
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * Effect.runSync(Effect.provide(program, Logger.layer([logger])))
 * output // => ["Info: Application starting up"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logInfo = /*#__PURE__*/ logWithLevel$1("Info");
/**
 * Logs one or more messages at the DEBUG level.
 *
 * **Example** (Logging debug messages)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger, References } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.logDebug("Debug mode enabled")
 * })
 *
 * const logger = Logger.make<unknown, void>(({ logLevel, message }) => {
 *   void output.push(`${logLevel}: ${Array.isArray(message) ? message.map(String).join(" ") : String(message)}`)
 * })
 * const runnable = program.pipe(
 *   Effect.provideService(References.MinimumLogLevel, "Debug"),
 *   Effect.provide(Logger.layer([logger]))
 * )
 * Effect.runSync(runnable)
 * output // => ["Debug: Debug mode enabled"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const logDebug = /*#__PURE__*/ logWithLevel$1("Debug");
/**
 * Adds an annotation to each log line in this effect.
 *
 * **Example** (Adding log annotations)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("Starting operation")
 * })
 *
 * // Add annotations to all log messages
 * const annotatedProgram = Effect.annotateLogs(program, {
 *   userId: "user123",
 *   operation: "data-processing"
 * })
 *
 * // Also supports single key-value annotations
 * const singleAnnotated = Effect.annotateLogs(program, "requestId", "req-456")
 *
 * const logger = Logger.make<unknown, void>(({ message }) =>
 *   void output.push(Array.isArray(message) ? message.join(" ") : String(message))
 * )
 * const run = (effect: Effect.Effect<void>) =>
 *   Effect.runSync(Effect.provide(effect, Logger.layer([logger])))
 * run(annotatedProgram)
 * run(singleAnnotated)
 * output // => ["Starting operation", "Starting operation"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const annotateLogs = /*#__PURE__*/ dual(
  (args) => isEffect(args[0]),
  (effect, ...args) =>
    updateService(effect, CurrentLogAnnotations, (annotations) => {
      const newAnnotations =
        args.length === 1
          ? {
              ...annotations,
              ...args[0],
            }
          : { ...annotations };
      if (args.length === 1) return newAnnotations;
      else assignProperty(newAnnotations, args[0], args[1]);
      return newAnnotations;
    }),
);
/**
 * Adds log annotations to the current scope.
 *
 * **When to use**
 *
 * Use to attach log annotations that last until the current scope closes.
 *
 * **Details**
 *
 * This differs from `annotateLogs`, which only annotates a specific effect.
 * `annotateLogsScoped` updates annotations for the entire current `Scope` and
 * restores the previous annotations when the scope closes.
 *
 * **Example** (Adding scoped log annotations)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     yield* Effect.log("before")
 *     yield* Effect.annotateLogsScoped({ requestId: "req-123" })
 *     yield* Effect.log("inside scope")
 *   })
 * )
 *
 * const logger = Logger.make<unknown, void>(({ message }) =>
 *   void output.push(Array.isArray(message) ? message.join(" ") : String(message))
 * )
 * Effect.runSync(Effect.provide(program, Logger.layer([logger])))
 * output // => ["before", "inside scope"]
 * ```
 *
 * @see {@link annotateLogs} for annotating one effect
 *
 * @stability stable
 * @category logging
 * @since 3.1.0
 */
const annotateLogsScoped = annotateLogsScoped$1;
/**
 * Adds a span to each log line in this effect.
 *
 * **Example** (Adding a log span)
 *
 * ```ts import.meta.vitest
 * import { Effect, Logger } from "effect"
 * const output: Array<unknown> = []
 *
 * const databaseOperation = Effect.gen(function*() {
 *   yield* Effect.log("Connecting to database")
 *   yield* Effect.log("Executing query")
 *   yield* Effect.log("Processing results")
 *   return "data"
 * })
 *
 * const httpRequest = Effect.gen(function*() {
 *   yield* Effect.log("Making HTTP request")
 *   const data = yield* Effect.withLogSpan(databaseOperation, "db-operation")
 *   yield* Effect.log("Sending response")
 *   return data
 * })
 *
 * const program = Effect.withLogSpan(httpRequest, "http-handler")
 *
 * const logger = Logger.make<unknown, void>(({ message }) =>
 *   void output.push(Array.isArray(message) ? message.join(" ") : String(message))
 * )
 * void output.push(Effect.runSync(Effect.provide(program, Logger.layer([logger]))))
 * output // => ["Making HTTP request", "Connecting to database", "Executing query", "Processing results", "Sending response", "data"]
 * ```
 *
 * @stability stable
 * @category logging
 * @since 2.0.0
 */
const withLogSpan = /*#__PURE__*/ dual(2, (effect, label) =>
  flatMap$2(currentTimeMillis, (now) =>
    updateService(effect, CurrentLogSpans, (spans) => {
      return [[label, now], ...spans];
    }),
  ),
);
/**
 * Service that holds the current transaction state.
 *
 * **Details**
 *
 * Nested {@link tx} calls reuse this same service instance. Yield it inside a
 * transaction body to read {@link TransactionMeta} fields such as `attempt`
 * and `retryReason`.
 *
 * **Example** (Reading transaction metadata)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const program = Effect.tx(Effect.gen(function*() {
 *   const tx = yield* Effect.Transaction
 *   return [tx.attempt, tx.retryReason, tx.elapsed, tx.elapsedSincePrevious]
 * }))
 *
 * Effect.runSync(program) // => [1, undefined, 0, 0]
 * ```
 *
 * @see {@link tx} for the outermost transaction boundary that creates this service
 * @see {@link TransactionMeta} for the journal and attempt metadata
 *
 * @stability stable
 * @category transactions
 * @since 4.0.0
 */
var Transaction = class extends /*#__PURE__*/ Service()("effect/Effect/Transaction") {};
/**
 * Defines a transaction boundary. Transactions are "all or nothing" with respect to changes
 * made to transactional values (i.e. TxRef) that occur within the transaction body.
 *
 * **Details**
 *
 * If called inside an active transaction, `tx` composes with the current transaction and reuses
 * its journal and retry state instead of creating a nested boundary.
 *
 * Effect transactions are optimistic with retry. A transaction is retried when
 * its body explicitly calls `Effect.txRetry` and any accessed transactional
 * value changes, or when any accessed transactional value changes because a
 * different transaction commits before the current one.
 *
 * The outermost `tx` call creates the transaction boundary and commits or rolls back the full
 * composed transaction.
 *
 * **Example** (Running a transaction)
 *
 * ```ts import.meta.vitest
 * import { Effect, TxRef } from "effect"
 * const output: Array<unknown> = []
 *
 * const program = Effect.gen(function*() {
 *   const ref1 = yield* TxRef.make(0)
 *   const ref2 = yield* TxRef.make(0)
 *
 *   // Nested tx calls compose into the same transaction
 *   yield* Effect.tx(Effect.gen(function*() {
 *     yield* TxRef.set(ref1, 10)
 *     yield* Effect.tx(TxRef.set(ref2, 20))
 *     const sum = (yield* TxRef.get(ref1)) + (yield* TxRef.get(ref2))
 *     void output.push(`Transaction sum: ${sum}`)
 *   }))
 *
 *   void output.push(`Final ref1: ${yield* TxRef.get(ref1)}`)
 *   void output.push(`Final ref2: ${yield* TxRef.get(ref2)}`)
 * })
 *
 * Effect.runSync(program)
 * output // => ["Transaction sum: 30", "Final ref1: 10", "Final ref2: 20"]
 * ```
 *
 * @stability stable
 * @category transactions
 * @since 4.0.0
 */
const tx = (effect) =>
  withFiber((fiber) => {
    const state = getOrUndefined(fiber.context, Transaction);
    if (state && !completedTransactions.has(state)) return effect;
    const clock = fiber.getRef(ClockRef);
    const now = clock.currentTimeMillisUnsafe();
    const mutable = {
      journal: /* @__PURE__ */ new Map(),
      retry: false,
      attempt: 1,
      retryReason: void 0,
      start: now,
      now,
      elapsed: 0,
      elapsedSincePrevious: 0,
    };
    let result;
    return uninterruptibleMask((restore) => {
      const run = restore(effect).pipe(
        provideService(Transaction, mutable),
        tapCause((cause) => {
          if (!mutable.retry) return void_;
          if (!hasInterruptsOnly$1(cause)) return sync(() => clearTransaction(mutable));
          return restore(awaitPendingTransaction(mutable));
        }),
        exit,
      );
      return flatMap(
        whileLoop({
          while: () => !result,
          body: () => {
            if (mutable.attempt > 1) stampTransaction(mutable, clock.currentTimeMillisUnsafe());
            return run;
          },
          step(exit) {
            if (mutable.retry || !isTransactionConsistent(mutable)) {
              mutable.attempt++;
              mutable.retryReason = mutable.retry ? "retry" : "conflict";
              return clearTransaction(mutable);
            }
            if (isSuccess$1(exit)) commitTransaction(fiber, mutable);
            clearTransaction(mutable);
            completedTransactions.add(mutable);
            result = exit;
          },
        }),
        () => result,
      );
    });
  });
const completedTransactions = /*#__PURE__*/ new WeakSet();
const stampTransaction = (state, now) => {
  state.elapsedSincePrevious = now - state.now;
  state.now = now;
  state.elapsed = now - state.start;
};
const isTransactionConsistent = (state) => {
  for (const [ref, { version }] of state.journal) if (ref.version !== version) return false;
  return true;
};
const awaitPendingTransaction = (state) =>
  callback((resume) => {
    if (!isTransactionConsistent(state)) return resume(void_);
    const key = {};
    const refs = Array.from(state.journal.keys());
    const clearPending = () => {
      for (const clear of refs) clear.pending.delete(key);
    };
    const onCall = () => {
      clearPending();
      resume(void_);
    };
    for (const ref of refs) ref.pending.set(key, onCall);
    return sync(clearPending);
  });
function commitTransaction(fiber, state) {
  for (const [ref, { value, written }] of state.journal) {
    if (!written) continue;
    if (!Object.is(value, ref.value)) {
      ref.version = ref.version + 1;
      ref.value = value;
    }
    for (const pending of ref.pending.values()) fiber.currentDispatcher.scheduleTask(pending, 0);
    ref.pending.clear();
  }
}
function clearTransaction(state) {
  state.retry = false;
  state.journal.clear();
}
/**
 * Retries the current transaction by signaling that it must be retried.
 *
 * **Details**
 *
 * NOTE: the transaction retries on any change to transactional values (i.e. TxRef) accessed in its body.
 *
 * **Example** (Retrying transactions)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, TxRef } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const ref = yield* TxRef.make(0)
 *   const update = yield* Deferred.make<void>()
 *
 *   yield* Effect.forkChild(
 *     Deferred.await(update).pipe(Effect.andThen(Effect.tx(TxRef.set(ref, 1))))
 *   )
 *
 *   return yield* Effect.tx(Effect.gen(function*() {
 *     const value = yield* TxRef.get(ref)
 *     if (value === 0) {
 *       yield* Deferred.succeed(update, undefined)
 *       return yield* Effect.txRetry
 *     }
 *     return value
 *   }))
 * })
 *
 * await Effect.runPromise(program) // => 1
 * ```
 *
 * @stability stable
 * @category transactions
 * @since 4.0.0
 */
const txRetry = /*#__PURE__*/ flatMap(Transaction, (state) => {
  const mutable = state;
  mutable.retry = true;
  return interrupt;
});
/**
 * Converts an error-first callback API into a function that returns an
 * `Effect`.
 *
 * **Details**
 *
 * The original function is called with the supplied arguments plus a final
 * callback. A non-null callback error fails the returned effect, while a
 * successful callback value becomes the effect success. Use `onError` to map
 * callback errors and `onSyncError` to turn synchronous throws into typed
 * failures; otherwise synchronous throws become defects.
 *
 * **Example** (Converting callbacks to effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const uppercase = (
 *   input: string,
 *   callback: (error: Error | null, value?: string) => void
 * ) => queueMicrotask(() => callback(null, input.toUpperCase()))
 *
 * const effectfulUppercase = Effect.effectify(uppercase)
 * const program = effectfulUppercase("hello")
 *
 * await Effect.runPromise(program) // => "HELLO"
 * ```
 *
 * **Example** (Mapping callback errors to typed failures)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const fail = (
 *   input: string,
 *   callback: (error: Error | null, value?: string) => void
 * ) => queueMicrotask(() => callback(new Error("unavailable")))
 *
 * const effectfulFail = Effect.effectify(
 *   fail,
 *   (error, args) => new Error(`Failed to process ${args[0]}: ${error.message}`)
 * )
 *
 * const program = Effect.flip(effectfulFail("hello"))
 *
 * const error = await Effect.runPromise(program)
 * error.message // => "Failed to process hello: unavailable"
 * ```
 *
 * @stability stable
 * @category converting
 * @since 4.0.0
 */
const effectify =
  (fn, onError, onSyncError) =>
  (...args) =>
    callback((resume) => {
      try {
        fn(...args, (err, result) => {
          if (err) resume(onError ? suspend(() => fail(onError(err, args))) : fail(err));
          else resume(succeed(result));
        });
      } catch (err) {
        resume(onSyncError ? fail(onSyncError(err, args)) : die(err));
      }
    });
/**
 * Applies `map` eagerly when an effect is already resolved.
 *
 * **When to use**
 *
 * Use when an already-resolved effect should apply a success transformation
 * immediately while pending effects still use regular mapping.
 *
 * **Details**
 *
 * Success effects apply the mapping function immediately. Failure effects pass
 * through unchanged, and pending effects fall back to regular `map` behavior.
 *
 * **Example** (Mapping already completed effects)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * // For resolved effects, the mapping is applied immediately
 * const resolved = Effect.succeed(5)
 * const mapped = Effect.mapEager(resolved, (n) => n * 2) // Applied eagerly
 *
 * // For pending effects, behaves like regular map
 * const pending = Effect.delay(Effect.succeed(5), 0)
 * const mappedPending = Effect.mapEager(pending, (n) => n * 2) // Uses regular map
 *
 * await Effect.runPromise(Effect.all([mapped, mappedPending])) // => [10, 10]
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const mapEager = mapEager$1;
/**
 * Applies `mapError` eagerly when an effect is already resolved.
 *
 * **When to use**
 *
 * Use when an already-resolved failed effect should apply an error
 * transformation immediately while pending effects still use regular error
 * mapping.
 *
 * **Details**
 *
 * Success effects pass through unchanged because there is no error to
 * transform. Failure effects apply the mapping function immediately, and
 * pending effects fall back to regular `mapError` behavior.
 *
 * **Example** (Mapping errors eagerly when possible)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // For resolved failure effects, the error mapping is applied immediately
 * const failed = Effect.fail("original error")
 * const mapped = Effect.mapErrorEager(failed, (err: string) => `mapped: ${err}`) // Applied eagerly
 *
 * // For pending effects, behaves like regular mapError
 * const pending = Effect.delay(Effect.fail("error"), 0)
 * const mappedPending = Effect.mapErrorEager(
 *   pending,
 *   (err: string) => `mapped: ${err}`
 * ) // Uses regular mapError
 *
 * void output.push(await Effect.runPromise(Effect.all([
 *   Effect.flip(mapped),
 *   Effect.flip(mappedPending)
 * ])))
 * output // => [['mapped: original error', 'mapped: error']]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const mapErrorEager = mapErrorEager$1;
/**
 * Applies `mapBoth` eagerly when an effect is already resolved.
 *
 * **When to use**
 *
 * Use when an already-resolved effect should transform either success or
 * failure immediately while pending effects still use regular channel mapping.
 *
 * **Details**
 *
 * Success effects apply `onSuccess` immediately, and failure effects apply
 * `onFailure` immediately. Pending effects fall back to regular `mapBoth`
 * behavior.
 *
 * **Example** (Mapping both channels eagerly when possible)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // For resolved effects, the appropriate mapping is applied immediately
 * const success = Effect.succeed(5)
 * const mapped = Effect.mapBothEager(success, {
 *   onFailure: (err: string) => `Failed: ${err}`,
 *   onSuccess: (n: number) => n * 2
 * }) // onSuccess applied eagerly
 *
 * const failure = Effect.fail("error")
 * const mappedError = Effect.mapBothEager(failure, {
 *   onFailure: (err: string) => `Failed: ${err}`,
 *   onSuccess: (n: number) => n * 2
 * }) // onFailure applied eagerly
 *
 * void output.push(Effect.runSync(mapped))
 * void output.push(Effect.runSync(Effect.flip(mappedError)))
 * output // => [10, "Failed: error"]
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const mapBothEager = mapBothEager$1;
/**
 * Applies `flatMap` eagerly when an effect is already resolved.
 *
 * **When to use**
 *
 * Use when an already-resolved successful effect should bind immediately to the
 * next effect while pending effects still use regular flat mapping.
 *
 * **Details**
 *
 * Success effects apply the flatMap function immediately. Failure effects pass
 * through unchanged, and pending effects fall back to regular `flatMap`
 * behavior.
 *
 * **Example** (Flat mapping eagerly when possible)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * // For resolved effects, the flatMap is applied immediately
 * const resolved = Effect.succeed(5)
 * const flatMapped = Effect.flatMapEager(resolved, (n) => Effect.succeed(n * 2)) // Applied eagerly
 *
 * // For pending effects, behaves like regular flatMap
 * const pending = Effect.delay(Effect.succeed(5), 0)
 * const flatMappedPending = Effect.flatMapEager(
 *   pending,
 *   (n) => Effect.succeed(n * 2)
 * ) // Uses regular flatMap
 *
 * await Effect.runPromise(Effect.all([flatMapped, flatMappedPending])) // => [10, 10]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const flatMapEager = flatMapEager$1;
/**
 * Applies `catch` eagerly when an effect is already resolved.
 *
 * **When to use**
 *
 * Use when an already-resolved failed effect should recover immediately while
 * pending effects still use regular error recovery.
 *
 * **Details**
 *
 * Success effects pass through unchanged because there is no error to catch.
 * Failure effects apply the catch function immediately, and pending effects
 * fall back to regular `catch` behavior.
 *
 * **Example** (Catching failures eagerly when possible)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 * const output: Array<unknown> = []
 *
 * // For resolved failure effects, the catch function is applied immediately
 * const failed = Effect.fail("original error")
 * const recovered = Effect.catchEager(
 *   failed,
 *   (err: string) => Effect.succeed(`recovered from: ${err}`)
 * ) // Applied eagerly
 *
 * // For success effects, returns success as-is
 * const success = Effect.succeed(42)
 * const unchanged = Effect.catchEager(
 *   success,
 *   (err: string) => Effect.succeed(`recovered from: ${err}`)
 * ) // Returns success as-is
 *
 * // For pending effects, behaves like regular catch
 * const pending = Effect.delay(Effect.fail("error"), 0)
 * const recoveredPending = Effect.catchEager(
 *   pending,
 *   (err: string) => Effect.succeed(`recovered from: ${err}`)
 * ) // Uses regular catch
 *
 * void output.push(await Effect.runPromise(Effect.all([
 *   recovered,
 *   unchanged,
 *   recoveredPending
 * ])))
 * output // => [['recovered from: original error', 42, 'recovered from: error']]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchEager = catchEager$1;
/**
 * Creates untraced function effects with eager evaluation optimization.
 *
 * **Details**
 *
 * Executes generator functions eagerly when all yielded effects are synchronous,
 * stopping at the first async effect and deferring to normal execution.
 *
 * **Example** (Defining eager untraced effect functions)
 *
 * ```ts import.meta.vitest
 * import { Effect } from "effect"
 *
 * const computation = Effect.fnUntracedEager(function*() {
 *   yield* Effect.succeed(1)
 *   yield* Effect.succeed(2)
 *   return "computed eagerly"
 * })
 *
 * const effect = computation() // Executed immediately if all effects are sync
 * Effect.runSync(effect) // => "computed eagerly"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fnUntracedEager = fnUntracedEager$1;
export {
  fnUntracedEager as $,
  flatMap$2 as $a,
  mapInput as $c,
  fromReasons as $i,
  symbol$1 as $l,
  remove as $n,
  max as $o,
  makeUnsafe as $r,
  sort as $s,
  runForkWith as $t,
  currentParentSpan as A,
  causeInterrupt as Aa,
  getOrThrow$1 as Ac,
  interrupt$1 as Ai,
  redact as Al,
  uninterruptible as An,
  Tracer as Ao,
  effectContext as Ar,
  empty$3 as As,
  matchCauseEffectEager as At,
  flow as Au,
  fiber as B,
  exitIsSuccess as Ba,
  orElse as Bc,
  NoSuchElementError as Bi,
  asEquivalence as Bl,
  withParentSpan as Bn,
  toPredicate as Bo,
  succeedContext as Br,
  isArray as Bs,
  partition as Bt,
  catchReason as C,
  ConsoleRef as Ca,
  flatMapNullishOr$1 as Cc,
  succeed$2 as Ci,
  format$1 as Cl,
  timeoutOption as Cn,
  void_$2 as Co,
  Random as Cr,
  makeUnsafe$2 as Cs,
  map as Ct,
  compose$2 as Cu,
  clockWith as D,
  as$1 as Da,
  fromUndefinedOr as Dc,
  failCause$2 as Di,
  formatPropertyKey as Dl,
  tx as Dn,
  MinimumTraceLevel as Do,
  buildWithMemoMap as Dr,
  allocate as Ds,
  mapErrorEager as Dt,
  constVoid as Du,
  catch_ as E,
  andThen$1 as Ea,
  fromNullishOr$1 as Ec,
  fail$2 as Ei,
  formatPath as El,
  try_ as En,
  DisablePropagation as Eo,
  build as Er,
  Prototype as Es,
  mapError as Et,
  constUndefined as Eu,
  ensuring as F,
  currentTimeNanos as Fa,
  liftThrowable as Fc,
  succeed$3 as Fi,
  normalizeNonEmpty as Fl,
  when as Fn,
  random as Fo,
  mergeAll as Fr,
  findFirstIndex as Fs,
  onExitPrimitive as Ft,
  Class$1 as Fu,
  filterOrFail as G,
  fiberEnterInterruptibleUnsafe as Ga,
  Number$1 as Gc,
  combine as Gi,
  array as Gl,
  zipWith as Gn,
  hours as Go,
  Scope as Gr,
  lastNonEmpty as Gs,
  provideServiceEffect as Gt,
  filterMapEffect as H,
  exitZipRight as Ha,
  toArray as Hc,
  TimeoutError as Hi,
  makeCompareMap as Hl,
  withTracerEnabled as Hn,
  format as Ho,
  sync$1 as Hr,
  isCanonicalArrayIndex as Hs,
  provide as Ht,
  exit as I,
  effectIsExit as Ia,
  makeOrder as Ic,
  void_$1 as Ii,
  Array_ as Il,
  whileLoop as In,
  PreventSchedulerYield as Io,
  orDie$1 as Ir,
  findLast as Is,
  onInterrupt as It,
  Prototype$1 as Iu,
  flatMap as J,
  fiberInterruptAll as Ja,
  isGreaterThan as Jc,
  fail$3 as Ji,
  number as Jl,
  clear as Jn,
  isFinite as Jo,
  close as Jr,
  map$3 as Js,
  repeat as Jt,
  findFirst as K,
  fiberEnterUninterruptibleUnsafe as Ka,
  String$1 as Kc,
  die$3 as Ki,
  combine$1 as Kl,
  RequestPrototype as Kn,
  infinity as Ko,
  addFinalizer$1 as Kr,
  makeBy as Ks,
  race as Kt,
  fail as L,
  endSpan as La,
  map$5 as Lc,
  Done as Li,
  Tuple as Ll,
  withErrorReporting as Ln,
  Scheduler as Lo,
  provide$2 as Lr,
  flatMapNullishOr as Ls,
  option as Lt,
  pipeArguments as Lu,
  delay as M,
  consolePretty as Ma,
  isNone as Mc,
  isFailure as Mi,
  assignProperties as Ml,
  updateContext as Mn,
  make$3 as Mo,
  empty$1 as Mr,
  filter$2 as Ms,
  never as Mt,
  memoize as Mu,
  die as N,
  contextWith$1 as Na,
  isOption as Nc,
  isSuccess$1 as Ni,
  assignProperty as Nl,
  useSpan as Nn,
  nativeTracer as No,
  launch as Nr,
  filterMap as Ns,
  onError as Nt,
  memoizeIdempotent as Nu,
  context as O,
  asSome$1 as Oa,
  getOrElse$2 as Oc,
  findErrorOption as Oi,
  currentFiberTypeId as Ol,
  txRetry as On,
  NativeSpan as Oo,
  catch_$1 as Or,
  append as Os,
  match as Ot,
  constant as Ou,
  effectify as P,
  currentTimeMillis as Pa,
  isSome as Pc,
  match$1 as Pi,
  normalize as Pl,
  void_ as Pn,
  encode as Po,
  merge as Pr,
  findFirst$2 as Ps,
  onExit as Pt,
  pipe as Pu,
  fnUntraced as Q,
  fiberRunIn as Qa,
  make$6 as Qc,
  findFail as Qi,
  structureKeys as Ql,
  make as Qn,
  isZero as Qo,
  make$1 as Qr,
  reverse as Qs,
  runFork as Qt,
  failCause as R,
  exitHasInterrupts as Ra,
  match$6 as Rc,
  ExceededCapacityError as Ri,
  make$7 as Rl,
  withFiber as Rn,
  compose as Ro,
  provideMerge as Rr,
  fromIterable$1 as Rs,
  orDie as Rt,
  catchIf as S,
  ClockRef as Sa,
  flatMap$5 as Sc,
  poll as Si,
  toJson as Sl,
  timeout as Sn,
  updateContext$1 as So,
  matchEffect$1 as Sr,
  make$5 as Ss,
  makeSpanScoped as St,
  cast as Su,
  catchTags as T,
  LogLevelOrder as Ta,
  fromNullOr as Tc,
  die$2 as Ti,
  formatJson as Tl,
  tryPromise as Tn,
  CurrentErrorReporters as To,
  CurrentMemoMap as Tr,
  omit as Ts,
  mapEager as Tt,
  constTrue as Tu,
  filterMapOrFail as U,
  fiberAwait as Ua,
  BigInt$1 as Uc,
  UnknownError as Ui,
  makeCompareSet as Ul,
  yieldNow as Un,
  fromInput as Uo,
  tap$1 as Ur,
  isReadonlyArrayNonEmpty as Us,
  provideContext as Ut,
  filter as V,
  exitVoid as Va,
  some as Vc,
  StackTrace as Vi,
  equals$1 as Vl,
  withSpan as Vn,
  days as Vo,
  suspend$1 as Vr,
  isArrayNonEmpty as Vs,
  promise as Vt,
  filterOrElse as W,
  fiberAwaitAll as Wa,
  Date$1 as Wc,
  annotate as Wi,
  symbol as Wl,
  zip as Wn,
  fromInputUnsafe as Wo,
  unwrap as Wr,
  last as Ws,
  provideService as Wt,
  flatten as X,
  fiberJoin as Xa,
  isLessThan as Xc,
  findError as Xi,
  string as Xl,
  get as Xn,
  isNegative as Xo,
  fork as Xr,
  of$1 as Xs,
  result as Xt,
  flatMapEager as Y,
  fiberInterruptAllAs as Ya,
  isGreaterThanOrEqualTo$1 as Yc,
  filterInterruptors as Yi,
  optimize as Yl,
  empty as Yn,
  isGreaterThanOrEqualTo as Yo,
  closeUnsafe as Yr,
  match$4 as Ys,
  request as Yt,
  fn as Z,
  fiberJoinAll as Za,
  isLessThanOrEqualTo$1 as Zc,
  findErrorOption$1 as Zi,
  structure as Zl,
  has as Zn,
  isPositive as Zo,
  forkUnsafe as Zr,
  reduce as Zs,
  retry as Zt,
  catchCause as _,
  map$1 as _a,
  try_$2 as _c,
  isDeferred as _i,
  getStackTraceLimit as _l,
  tap as _n,
  succeedSome$1 as _o,
  upTo as _r,
  getOption as _s,
  logError as _t,
  isTagged as _u,
  all as a,
  interruptors as aa,
  fail$5 as ac,
  MinimumLogLevel as ai,
  args as al,
  runSyncWith as an,
  loggerMake as ao,
  exponential as ar,
  seconds as as,
  forkScoped as at,
  isFunction as au,
  catchEager as b,
  reasonAnnotations as ba,
  filter$3 as bc,
  make$2 as bi,
  Class as bl,
  tapError as bn,
  tracerLogger as bo,
  filterDone as br,
  getOrUndefinedUnsafe as bs,
  logWarning as bt,
  or as bu,
  annotateLogs as c,
  isDone$1 as ca,
  getOrThrow as cc,
  UnhandledLogLevel as ci,
  contE as cl,
  scopedWith as cn,
  makeSpanUnsafe as co,
  identity_ as cr,
  toMillis as cs,
  gen as ct,
  isNotNullish as cu,
  as as d,
  isNoSuchElementError as da,
  isResult as dc,
  done as di,
  exitFailCause as dl,
  sleep as dn,
  onExitPrimitive$1 as do,
  modifyDelay as dr,
  zero as ds,
  interrupt as dt,
  isNumber as du,
  hasDies as ea,
  take as ec,
  provide$3 as ei,
  min$1 as el,
  runPromise as en,
  fnUntraced$1 as eo,
  set as er,
  millis as es,
  forEach as et,
  compose$1 as eu,
  asSome as f,
  isReason as fa,
  isSuccess$3 as fc,
  doneUnsafe as fi,
  exitSucceed as fl,
  succeed as fn,
  onExitUnsafe as fo,
  passthrough as fr,
  Reference as fs,
  interruptible as ft,
  isObject as fu,
  callback as g,
  makeInterruptReason as ga,
  succeed$5 as gc,
  into as gi,
  withFiber$1 as gl,
  sync as gn,
  succeedNone$1 as go,
  toStepWithMetadata as gr,
  get$1 as gs,
  logDebug as gt,
  isString as gu,
  cachedInvalidateWithTTL as h,
  makeFailReason as ha,
  match$5 as hc,
  interruptWith as hi,
  makePrimitive as hl,
  suspend as hn,
  succeed$4 as ho,
  toStep as hr,
  empty$2 as hs,
  log as ht,
  isReadonlyObject as hu,
  addFinalizer as i,
  interrupt$2 as ia,
  all$2 as ic,
  CurrentStackFrame as ii,
  TaggedError as il,
  runSyncExit as in,
  iterateEager as io,
  addDelay as ir,
  negativeInfinity as is,
  forkIn as it,
  isError as iu,
  currentSpan as j,
  clockWith$1 as ja,
  getOrUndefined$2 as jc,
  isExit as ji,
  symbolRedactable as jl,
  uninterruptibleMask as jn,
  externalSpan as jo,
  effectDiscard as jr,
  ensure as js,
  matchEffect as jt,
  identity as ju,
  contextWith as k,
  callback$1 as ka,
  getOrNull as kc,
  hasInterrupts as ki,
  isRedactable as kl,
  undefined_ as kn,
  ParentSpan as ko,
  effect as kr,
  appendAll as ks,
  matchCauseEffect as kt,
  dual as ku,
  annotateLogsScoped as l,
  isFailReason as la,
  getOrUndefined$1 as lc,
  _await as li,
  evaluate as ll,
  service as ln,
  map$2 as lo,
  isSchedule as lr,
  toMinutes as ls,
  ignore as lt,
  isNotUndefined as lu,
  cached as m,
  makeDieReason as ma,
  mapError$2 as mc,
  failCause$1 as mi,
  isExit$1 as ml,
  succeedSome as mn,
  resolveConcurrency as mo,
  spaced as mr,
  add as ms,
  isSuccess as mt,
  isPropertyKey as mu,
  acquireRelease as n,
  hasInterrupts$1 as na,
  filterMap$1 as nc,
  CurrentLogLevel as ni,
  Error$1 as nl,
  runPromiseWith as nn,
  getCurrentFiber as no,
  values as nr,
  minutes as ns,
  forkChild as nt,
  isBigInt as nu,
  andThen as o,
  isCause as oa,
  failVoid as oc,
  TracerEnabled as oi,
  causeFail as ol,
  scope as on,
  makeLatch as oo,
  forever$1 as or,
  sum as os,
  fromOption as ot,
  isNever as ou,
  asVoid as p,
  isTimeoutError as pa,
  map$4 as pc,
  fail$1 as pi,
  isEffect$1 as pl,
  succeedNone as pn,
  reportCauseUnsafe as po,
  setInputType as pr,
  Service as ps,
  isEffect as pt,
  isObjectKeyword as pu,
  firstSuccessOf as q,
  fiberInterrupt as qa,
  flip as qc,
  done$1 as qi,
  hash as ql,
  of as qn,
  isDuration as qo,
  addFinalizerExit as qr,
  makeEquivalence as qs,
  raceFirst as qt,
  acquireUseRelease as r,
  hasInterruptsOnly as ra,
  headUnsafe as rc,
  CurrentLogSpans as ri,
  PipeInspectableProto as rl,
  runSync as rn,
  iterateConcurrent as ro,
  CurrentMetadata as rr,
  nanos as rs,
  forkDetach as rt,
  isBoolean as ru,
  annotateCurrentSpan as s,
  isDieReason as sa,
  flatMap$4 as sc,
  TracerTimingEnabled as si,
  contA as sl,
  scoped as sn,
  makeLatchUnsafe as so,
  fromStep as sr,
  times as ss,
  fromResult as st,
  isNotNull as su,
  Transaction as t,
  hasFails as ta,
  empty$4 as tc,
  CurrentLogAnnotations as ti,
  Done$1 as tl,
  runPromiseExit as tn,
  forkUnsafe$1 as to,
  size as tr,
  min as ts,
  forever as tt,
  hasProperty as tu,
  annotateSpans as u,
  isInterruptReason as ua,
  isFailure$1 as uc,
  die$1 as ui,
  exitFail as ul,
  serviceOption as un,
  monotonicTimeNanos as uo,
  jittered as ur,
  toSeconds as us,
  ignoreCause as ut,
  isNullish as uu,
  catchCauseIf as v,
  pretty as va,
  contains as vc,
  isDone as vi,
  setStackTraceLimit as vl,
  tapCause as vn,
  suspend$2 as vo,
  catchDone as vr,
  getOrElse as vs,
  logFatal as vt,
  isUndefined as vu,
  catchTag as w,
  CurrentLoggers as wa,
  flatten$3 as wc,
  asVoidAll as wi,
  formatDate as wl,
  timeoutOrElse as wn,
  whileLoop$1 as wo,
  nextBetween as wr,
  merge$1 as ws,
  mapBothEager as wt,
  constFalse as wu,
  catchFilter as x,
  squash as xa,
  firstSomeOf as xc,
  makeUnsafe$1 as xi,
  NodeInspectSymbol as xl,
  tapErrorTag as xn,
  uninterruptibleMask$1 as xo,
  isDoneCause as xr,
  getUnsafe as xs,
  logWithLevel as xt,
  backEdges as xu,
  catchDefect as y,
  prettyErrors as ya,
  exists as yc,
  isDoneUnsafe as yi,
  BaseProto as yl,
  tapDefect as yn,
  sync$2 as yo,
  doneExitFromCause as yr,
  getOrUndefined as ys,
  logInfo as yt,
  isUnknown as yu,
  failCauseSync as z,
  exitInterrupt as za,
  none as zc,
  IllegalArgumentError as zi,
  strictEqual as zl,
  withLogSpan as zn,
  has$1 as zo,
  succeed$1 as zr,
  getUnsafe$1 as zs,
  orElseSucceed as zt,
};

//# sourceMappingURL=Effect-JLyBLa-C.mjs.map
