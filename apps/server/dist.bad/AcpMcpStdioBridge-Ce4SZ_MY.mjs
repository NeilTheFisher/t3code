#!/usr/bin/env node

import {
  $a as flatMap$3,
  $r as makeUnsafe$2,
  $t as runForkWith,
  Aa as causeInterrupt,
  Ai as interrupt$2,
  An as uninterruptible,
  As as empty$2,
  Bs as isArray,
  Co as void_$1,
  Ct as map$2,
  Da as as$1,
  Di as failCause$4,
  Du as constVoid,
  E as catch_$2,
  Ea as andThen$1,
  Ei as fail$4,
  En as try_,
  Fi as succeed$3,
  Fl as normalizeNonEmpty,
  Fn as when,
  Ft as onExitPrimitive$1,
  Gc as Number$2,
  Gr as Scope,
  Gs as lastNonEmpty,
  H as filterMapEffect$1,
  Ha as exitZipRight,
  I as exit,
  Ii as void_$2,
  In as whileLoop$1,
  It as onInterrupt,
  J as flatMap$2,
  Ja as fiberInterruptAll,
  Jo as isFinite,
  Jr as close,
  Js as map$3,
  Ki as die$2,
  Kr as addFinalizer,
  L as fail$3,
  Lc as map$4,
  Li as Done$1,
  Lu as pipeArguments,
  M as delay,
  Mc as isNone,
  Mi as isFailure$1,
  Mt as never,
  N as die$3,
  Ni as isSuccess$1,
  Nt as onError,
  O as context,
  Oa as asSome,
  Ou as constant,
  Pc as isSome,
  Pl as normalize,
  Pn as void_,
  Pt as onExit$1,
  Q as fnUntraced,
  Qa as fiberRunIn,
  Qo as isZero,
  Qt as runFork,
  R as failCause$3,
  Rn as withFiber,
  Rs as fromIterable$1,
  Sl as toJson,
  Sr as matchEffect,
  Ti as die$4,
  Tn as tryPromise,
  Tu as constTrue,
  Ua as fiberAwait,
  Un as yieldNow,
  Us as isReadonlyArrayNonEmpty,
  Ut as provideContext$2,
  V as filter$3,
  Va as exitVoid,
  Vc as some,
  Vl as equals,
  Vs as isArrayNonEmpty,
  Vt as promise,
  Wa as fiberAwaitAll,
  Wo as fromInputUnsafe,
  Ws as last$1,
  Wt as provideService$2,
  X as flatten$2,
  Xa as fiberJoin,
  Xi as findError,
  Xs as of,
  Xt as result,
  Y as flatMapEager,
  Ya as fiberInterruptAllAs,
  Z as fn,
  Za as fiberJoinAll,
  Zr as forkUnsafe,
  _ as catchCause$2,
  _n as tap$1,
  _t as logError,
  _u as isTagged,
  al as args,
  br as filterDone,
  ca as isDone,
  cn as scopedWith,
  cs as toMillis,
  ct as gen,
  d as as,
  dl as exitFailCause,
  dn as sleep,
  do as onExitPrimitive,
  dt as interrupt$3,
  ei as provide,
  en as runPromise,
  et as forEach$1,
  f as asSome$1,
  fc as isSuccess,
  fi as doneUnsafe,
  fl as exitSucceed,
  fn as succeed$2,
  g as callback$1,
  gl as withFiber$1,
  gn as sync$2,
  go as succeedNone,
  gr as toStepWithMetadata,
  gs as get,
  hi as interruptWith,
  hl as makePrimitive,
  hn as suspend$2,
  ho as succeed$4,
  hr as toStep,
  hs as empty$3,
  i as addFinalizer$1,
  it as forkIn,
  ju as identity,
  k as contextWith,
  ka as callback$2,
  kt as matchCauseEffect,
  ku as dual,
  ll as evaluate,
  lt as ignore$2,
  lu as isNotUndefined,
  ml as isExit,
  mn as succeedSome,
  mr as spaced,
  nn as runPromiseWith,
  no as getCurrentFiber,
  nt as forkChild,
  o as andThen,
  ol as causeFail,
  oo as makeLatch,
  p as asVoid,
  pn as succeedNone$1,
  qa as fiberInterrupt,
  qi as done,
  qr as addFinalizerExit,
  qt as raceFirst,
  ra as hasInterruptsOnly,
  rc as headUnsafe,
  rl as PipeInspectableProto,
  rr as CurrentMetadata,
  sn as scoped$2,
  so as makeLatchUnsafe,
  ta as hasFails,
  tl as Done,
  tt as forever,
  tu as hasProperty,
  uc as isFailure,
  ul as exitFail,
  ut as ignoreCause,
  vo as suspend$3,
  vr as catchDone,
  wi as asVoidAll,
  wo as whileLoop,
  xa as squash,
  xi as makeUnsafe$3,
  xo as uninterruptibleMask,
  xr as isDoneCause,
  xt as logWithLevel,
  y as catchDefect,
  yo as sync$3,
  yr as doneExitFromCause,
  za as exitInterrupt$1,
  zc as none,
  zs as getUnsafe,
} from "./Effect-JLyBLa-C.mjs";
import { t as Clock } from "./Clock-jfEipopP.mjs";
import * as NodeReadline from "node:readline";
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Number.js
/**
 * Exposes the global number constructor.
 *
 * **When to use**
 *
 * Use to access native JavaScript numeric coercion from the Effect module
 * namespace.
 *
 * **Gotchas**
 *
 * This follows native `Number` coercion rules, including empty strings
 * becoming `0` and invalid numeric strings becoming `NaN`.
 *
 * @see {@link parse} for parsing strings into an `Option`
 *
 * **Example** (Coercing values to numbers)
 *
 * ```ts import.meta.vitest
 * import { Number as N } from "effect"
 *
 * N.Number("42") // => 42
 * N.Number("3.14") // => 3.14
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const Number$1 = globalThis.Number;
/**
 * Order instance for `number` values.
 *
 * **When to use**
 *
 * Use when you need to sort or compare numbers through APIs that accept an
 * ordering instance.
 *
 * **Example** (Comparing numbers)
 *
 * ```ts import.meta.vitest
 * import { Number } from "effect"
 *
 * Number.Order(1, 2) // => -1
 * Number.Order(2, 1) // => 1
 * Number.Order(1, 1) // => 0
 * ```
 *
 * @stability stable
 * @category instances
 * @since 2.0.0
 */
const Order = Number$2;
/**
 * Returns the next power of 2 from the given number.
 *
 * **When to use**
 *
 * Use to round a number up to the next power of two.
 *
 * **Example** (Finding the next power of two)
 *
 * ```ts import.meta.vitest
 * import { Number } from "effect"
 *
 * Number.nextPow2(5) // => 8
 * Number.nextPow2(17) // => 32
 * ```
 *
 * @stability stable
 * @category math
 * @since 2.0.0
 */
const nextPow2 = (n) => {
  const nextPow = Math.ceil(Math.log(n) / Math.log(2));
  return Math.max(Math.pow(2, nextPow), 2);
};
/**
 * Parses a `number` from a `string` safely using the `Number()` function.
 * The following special string values are supported: "NaN", "Infinity", "-Infinity".
 *
 * **When to use**
 *
 * Use to parse numeric text without throwing on invalid input.
 *
 * **Example** (Parsing numbers from strings)
 *
 * ```ts import.meta.vitest
 * import { Number, Option } from "effect"
 *
 * Number.parse("42") // => Option.some(42)
 * Number.parse("3.14") // => Option.some(3.14)
 * Number.parse("NaN") // => Option.some(NaN)
 * Number.parse("Infinity") // => Option.some(Infinity)
 * Number.parse("-Infinity") // => Option.some(-Infinity)
 * Number.parse("not a number") // => Option.none()
 * ```
 *
 * @see {@link Number} for native constructor coercion
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const parse = (s) => {
  if (s === "NaN") return some(NaN);
  if (s === "Infinity") return some(Infinity);
  if (s === "-Infinity") return some(-Infinity);
  if (s.trim() === "") return none();
  const n = Number$1(s);
  return Number$1.isNaN(n) ? none() : some(n);
};
/**
 * Returns the number rounded with the given precision.
 *
 * **When to use**
 *
 * Use to round a number to a fixed number of decimal places.
 *
 * **Example** (Rounding with precision)
 *
 * ```ts import.meta.vitest
 * import { Number } from "effect"
 *
 * Number.round(1.1234, 2) // => 1.12
 * Number.round(1.567, 2) // => 1.57
 * ```
 *
 * @stability stable
 * @category math
 * @since 3.8.0
 */
const round = /*#__PURE__*/ dual(2, (self, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(self * factor) / factor;
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Fiber.js
const await_ = fiberAwait;
/**
 * Waits for all fibers in the provided iterable to complete and returns
 * an array of their exit values.
 *
 * **When to use**
 *
 * Use when you need every fiber outcome as data, including failures and
 * interruptions.
 *
 * **Details**
 *
 * The returned array is ordered like the input iterable.
 *
 * **Gotchas**
 *
 * Failures are captured as `Exit.Failure` values. Use {@link joinAll} when you
 * want the first failed fiber to fail the returned Effect.
 *
 * **Example** (Awaiting multiple fiber exits)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const fiber1 = yield* Effect.forkChild(Effect.succeed(1))
 *   const fiber2 = yield* Effect.forkChild(Effect.succeed(2))
 *   return yield* Fiber.awaitAll([fiber1, fiber2])
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => [Exit.succeed(1), Exit.succeed(2)]
 * ```
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const awaitAll = fiberAwaitAll;
/**
 * Joins a fiber, blocking until it completes. If the fiber succeeds,
 * returns its value. If it fails, the error is propagated.
 *
 * **When to use**
 *
 * Use when you need a forked fiber's failure to fail the current Effect because
 * that fiber is part of the current workflow.
 *
 * **Gotchas**
 *
 * Joining a failed fiber propagates the fiber's Cause. Use {@link await_ await} when
 * you need to inspect the `Exit` instead of failing.
 *
 * **Example** (Joining a fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* Effect.forkChild(Effect.succeed(42))
 *   return yield* Fiber.join(fiber)
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => 42
 * ```
 *
 * @see {@link await_ await} for inspecting the fiber outcome as an Exit
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const join = fiberJoin;
/**
 * Waits for all fibers to succeed and returns their values in input order.
 *
 * **When to use**
 *
 * Use when you need every fiber to succeed and want the successful values
 * rather than the `Exit` values.
 *
 * **Details**
 *
 * If any fiber fails, the returned `Effect` fails with that fiber's cause and
 * stops waiting for additional results. This does not interrupt the remaining
 * fibers.
 *
 * **Gotchas**
 *
 * A failure stops waiting, but it does not interrupt any other fibers. Use
 * {@link interruptAll} separately when remaining fibers should be stopped.
 *
 * @see {@link awaitAll} for collecting every fiber outcome as an Exit
 *
 * @stability stable
 * @category combinators
 * @since 2.0.0
 */
const joinAll = fiberJoinAll;
/**
 * Interrupts a fiber, causing it to stop executing and clean up any
 * acquired resources.
 *
 * **When to use**
 *
 * Use when you need to cancel a forked fiber and wait for its cleanup to
 * complete.
 *
 * **Details**
 *
 * The returned Effect completes only after the interrupted fiber has completed.
 *
 * **Gotchas**
 *
 * Interruption is cooperative. A fiber can continue running while it is inside
 * uninterruptible work or finalizers.
 *
 * **Example** (Interrupting a fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* Effect.forkChild(
 *     Effect.delay("1 second")(Effect.succeed(42))
 *   )
 *   yield* Fiber.interrupt(fiber)
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @see {@link interruptAs} for specifying the interrupting fiber ID
 * @see {@link await_ await} for observing the interrupted fiber's Exit
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interrupt$1 = fiberInterrupt;
/**
 * Interrupts all fibers in the provided iterable, causing them to stop executing
 * and clean up any acquired resources.
 *
 * **When to use**
 *
 * Use when you need to cancel several forked fibers and wait for their cleanup
 * to complete.
 *
 * **Details**
 *
 * The current fiber is recorded as the interruptor. The returned Effect
 * completes only after all interrupted fibers have completed.
 *
 * **Gotchas**
 *
 * Interruption is cooperative for each fiber. The returned Effect can wait for
 * uninterruptible work and finalizers in any interrupted fiber.
 *
 * **Example** (Interrupting multiple fibers)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const fiber1 = yield* Effect.forkChild(Effect.never)
 *   const fiber2 = yield* Effect.forkChild(Effect.never)
 *   const fiber3 = yield* Effect.forkChild(Effect.never)
 *   yield* Fiber.interruptAll([fiber1, fiber2, fiber3])
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @see {@link interruptAllAs} for specifying the interrupting fiber ID
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interruptAll = fiberInterruptAll;
/**
 * Interrupts all fibers in the provided iterable using the specified fiber ID as the
 * interrupting fiber. This allows you to control which fiber is considered the source
 * of the interruption, which can be useful for debugging and tracing.
 *
 * **When to use**
 *
 * Use to interrupt several fibers while recording a specific fiber ID as the
 * interruptor.
 *
 * **Details**
 *
 * The returned Effect completes only after all interrupted fibers have
 * completed.
 *
 * **Gotchas**
 *
 * The supplied ID affects the recorded interruptor. It does not make
 * interruption synchronous or force uninterruptible regions to stop early.
 *
 * **Example** (Interrupting multiple fibers as another fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   // Create a controlling fiber
 *   const controllerFiber = yield* Effect.forkChild(Effect.succeed("controller"))
 *
 *   const worker1 = yield* Effect.forkChild(Effect.never)
 *   const worker2 = yield* Effect.forkChild(Effect.never)
 *
 *   yield* Fiber.interruptAllAs([worker1, worker2], controllerFiber.id)
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @see {@link interruptAll} for using the current fiber as the interruptor
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interruptAllAs = fiberInterruptAllAs;
/**
 * Returns the current fiber if called from within a fiber context,
 * otherwise returns `undefined`.
 *
 * **When to use**
 *
 * Use when you need low-level runtime integrations that need access to the currently
 * executing fiber.
 *
 * **Gotchas**
 *
 * This is a synchronous accessor, not an Effect. It returns `undefined` outside
 * an active fiber runtime context.
 *
 * **Example** (Getting the current fiber)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const current = Fiber.getCurrent()
 *   return current !== undefined
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => true
 * ```
 *
 * @stability stable
 * @category getters
 * @since 4.0.0
 */
const getCurrent = getCurrentFiber;
/**
 * Adds a fiber to a `Scope` and returns the same fiber.
 *
 * **When to use**
 *
 * Use when a manually managed fiber should be interrupted when a Scope closes.
 *
 * **Details**
 *
 * When the scope is closed, the fiber is interrupted. If the scope is already
 * closed, the fiber is interrupted immediately.
 *
 * **Gotchas**
 *
 * This does not wait for the fiber to complete. It only registers the
 * interruption finalizer and returns the same fiber.
 *
 * @see {@link interrupt} for interrupting and waiting for completion
 *
 * @stability stable
 * @category resource management
 * @since 4.0.0
 */
const runIn = fiberRunIn;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Latch.js
/**
 * Creates a `Latch` synchronously, outside of `Effect`.
 *
 * **When to use**
 *
 * Use when you need to allocate a `Latch` synchronously outside an Effect
 * workflow.
 *
 * **Details**
 *
 * The latch starts closed by default; pass `true` to create it open.
 *
 * **Example** (Creating a latch unsafely)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber, Latch } from "effect"
 *
 * const latch = Latch.makeUnsafe(false)
 * const waiter = latch.await.pipe(Effect.as("opened"))
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* Effect.forkChild(waiter)
 *   yield* latch.open
 *   return yield* Fiber.join(fiber)
 * })
 *
 * await Effect.runPromise(program) // => "opened"
 * ```
 *
 * @see {@link make} for creating a latch inside Effect code
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeUnsafe$1 = makeLatchUnsafe;
/**
 * Creates a `Latch` inside `Effect`.
 *
 * **When to use**
 *
 * Use to create a latch for coordinating fibers inside Effect code.
 *
 * **Details**
 *
 * The latch starts closed by default; pass `true` to create it open.
 *
 * **Example** (Creating a latch)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber, Latch } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const latch = yield* Latch.make(false)
 *   const waiter = latch.await.pipe(Effect.as("opened"))
 *
 *   const fiber = yield* Effect.forkChild(waiter)
 *   yield* latch.open
 *   return yield* Fiber.join(fiber)
 * })
 *
 * await Effect.runPromise(program) // => "opened"
 * ```
 *
 * @see {@link makeUnsafe} for synchronous allocation outside Effect code
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const make$6 = makeLatch;
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/MutableRef.js
const TypeId$6 = "~effect/MutableRef";
const MutableRefProto = {
  [TypeId$6]: TypeId$6,
  ...PipeInspectableProto,
  toJSON() {
    return {
      _id: "MutableRef",
      current: toJson(this.current),
    };
  },
};
/**
 * Creates a new MutableRef with the specified initial value.
 *
 * **When to use**
 *
 * Use to create a synchronous `MutableRef` initialized with a value.
 *
 * **Example** (Creating mutable refs)
 *
 * ```ts import.meta.vitest
 * import { MutableRef } from "effect"
 *
 * // Create a counter reference
 * const counter = MutableRef.make(0)
 *
 * MutableRef.get(counter) // => 0
 *
 * // Create a configuration reference
 * const config = MutableRef.make({ debug: false, timeout: 5000 })
 *
 * MutableRef.get(config) // => { debug: false, timeout: 5000 }
 *
 * // Create a string reference
 * const status = MutableRef.make("idle")
 * MutableRef.set(status, "running")
 *
 * MutableRef.get(status) // => "running"
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$5 = (value) => {
  const ref = Object.create(MutableRefProto);
  ref.current = value;
  return ref;
};
/**
 * Sets the MutableRef to a new value and returns the reference.
 *
 * **When to use**
 *
 * Use when you need an in-place `MutableRef` replacement that returns the same
 * `MutableRef`.
 *
 * **Example** (Setting values)
 *
 * ```ts import.meta.vitest
 * import { MutableRef } from "effect"
 *
 * const ref = MutableRef.make("initial")
 *
 * // Set a new value
 * MutableRef.set(ref, "updated")
 *
 * MutableRef.get(ref) // => "updated"
 *
 * // Chain set operations (since it returns the ref)
 * const result = MutableRef.set(ref, "final")
 *
 * result === ref // => true
 * MutableRef.get(ref) // => "final"
 *
 * // Set complex objects
 * const config = MutableRef.make({ debug: false, verbose: false })
 * MutableRef.set(config, { debug: true, verbose: true })
 *
 * MutableRef.get(config) // => { debug: true, verbose: true }
 *
 * // Pipe-able version
 * const setValue = MutableRef.set("new value")
 * setValue(ref)
 *
 * MutableRef.get(ref) // => "new value"
 *
 * // Useful for state management
 * const state = MutableRef.make<"idle" | "loading" | "success" | "error">("idle")
 * MutableRef.set(state, "loading")
 * // ... perform async operation
 * MutableRef.set(state, "success")
 *
 * MutableRef.get(state) // => "success"
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const set = /*#__PURE__*/ dual(2, (self, value) => {
  self.current = value;
  return self;
});
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/MutableList.js
/**
 * Mutable lists for collecting ordered values and draining them from the front.
 * A `MutableList<A>` can append values to the end, prepend values to the
 * beginning, take one or more values from the front, inspect its contents as an
 * array, filter values, remove values, and clear itself. All operations update
 * the same list object in place and keep its `length` field current. Taking
 * from an empty list returns the `Empty` symbol.
 *
 * @stability stable
 * @since 4.0.0
 */
/**
 * Defines the unique symbol used to represent an empty result when taking elements from a MutableList.
 * This symbol is returned by `take` when the list is empty, allowing for safe type checking.
 *
 * **When to use**
 *
 * Use to detect that `take` returned no element before handling the result as a
 * list item.
 *
 * **Example** (Checking for empty results)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 *
 * MutableList.take(list) === MutableList.Empty // => true
 * ```
 *
 * @stability stable
 * @category symbols
 * @since 4.0.0
 */
const Empty = /*#__PURE__*/ Symbol.for("effect/MutableList/Empty");
/**
 * Creates an empty MutableList.
 *
 * **Example** (Creating an empty mutable list)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 *
 * list.length // => 0
 * MutableList.append(list, "first")
 * MutableList.take(list) // => "first"
 * list.length // => 0
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make$4 = () => ({
  head: void 0,
  tail: void 0,
  length: 0,
});
const compactHead = (self) => {
  const head = self.head;
  if (
    head.offset >= 1024 &&
    head === self.tail &&
    head.mutable &&
    (head.array.length - head.offset) * 8 <= head.offset
  )
    self.head = self.tail = {
      array: head.array.slice(head.offset),
      mutable: true,
      offset: 0,
      next: void 0,
    };
};
const emptyBucket = () => ({
  array: [],
  mutable: true,
  offset: 0,
  next: void 0,
});
/**
 * Appends an element to the end of the MutableList.
 * This operation is optimized for high-frequency usage.
 *
 * **Example** (Appending elements)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.append(list, 1)
 * MutableList.append(list, 2)
 * MutableList.append(list, 3)
 *
 * MutableList.toArray(list) // => [1, 2, 3]
 * list.length // => 3
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const append = (self, message) => {
  if (!self.tail) self.head = self.tail = emptyBucket();
  else if (!self.tail.mutable) {
    self.tail.next = emptyBucket();
    self.tail = self.tail.next;
  }
  self.tail.array.push(message);
  self.length++;
};
/**
 * Prepends an element to the beginning of the MutableList.
 * This operation is optimized for high-frequency usage.
 *
 * **Example** (Prepending elements)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 * MutableList.append(list, "last")
 * MutableList.prepend(list, "third")
 * MutableList.prepend(list, "second")
 * MutableList.prepend(list, "first")
 *
 * MutableList.toArray(list) // => ["first", "second", "third", "last"]
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 2.0.0
 */
const prepend = (self, message) => {
  self.head = {
    array: [message],
    mutable: true,
    offset: 0,
    next: self.head,
  };
  if (!self.tail) self.tail = self.head;
  self.length++;
};
/**
 * Appends all elements from an iterable to the end of the MutableList.
 * Returns the number of elements added.
 *
 * **Example** (Appending multiple elements)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.append(list, 1)
 * MutableList.append(list, 2)
 *
 * MutableList.appendAll(list, [3, 4, 5]) // => 3
 * MutableList.toArray(list) // => [1, 2, 3, 4, 5]
 * list.length // => 5
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const appendAll = (self, messages) =>
  appendAllUnsafe(self, fromIterable$1(messages), !Array.isArray(messages));
/**
 * Appends all elements from a ReadonlyArray to the end of the MutableList.
 * This is an optimized version that can reuse the array when mutable=true.
 * Returns the number of elements added.
 *
 * **When to use**
 *
 * Use when appending a trusted array directly is worth the optimized path and
 * you can transfer ownership of the input when enabling mutation.
 *
 * **Gotchas**
 *
 * When mutable=true, ownership of the input array transfers to the list. Do not
 * read or modify the array afterward.
 *
 * **Example** (Transferring an array when appending)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.append(list, 1)
 * const items = [2, 3, 4]
 * MutableList.appendAllUnsafe(list, items, true) // => 3
 *
 * MutableList.toArray(list) // => [1, 2, 3, 4]
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const appendAllUnsafe = (self, messages, mutable = false) => {
  if (messages.length === 0) return 0;
  const chunk = {
    array: messages,
    mutable,
    offset: 0,
    next: void 0,
  };
  if (self.head) self.tail = self.tail.next = chunk;
  else self.head = self.tail = chunk;
  self.length += messages.length;
  return messages.length;
};
/**
 * Removes all elements from the MutableList, resetting it to an empty state.
 * This operation is highly optimized and releases all internal memory.
 *
 * **Example** (Clearing a mutable list)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.appendAll(list, [1, 2, 3, 4, 5])
 *
 * MutableList.clear(list)
 *
 * MutableList.toArray(list) // => []
 * list.length // => 0
 * MutableList.take(list) === MutableList.Empty // => true
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const clear$1 = (self) => {
  self.head = self.tail = void 0;
  self.length = 0;
};
/**
 * Takes up to N elements from the beginning of the MutableList and returns them as an array.
 * The taken elements are removed from the list. This operation is optimized for performance
 * and includes zero-copy optimizations when possible.
 *
 * **Details**
 *
 * Finite fractional values of `n` are rounded down. `NaN` and non-positive
 * values leave the list unchanged and return an empty array.
 *
 * **Example** (Taking batches)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.appendAll(list, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 *
 * MutableList.takeN(list, 3) // => [1, 2, 3]
 * MutableList.toArray(list) // => [4, 5, 6, 7, 8, 9, 10]
 * list.length // => 7
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const takeN = (self, n) => {
  n = normalize(n);
  if (n <= 0 || !self.head) return [];
  n = Math.min(n, self.length);
  if (n === self.length && self.head?.offset === 0 && !self.head.next) {
    const array = self.head.array;
    clear$1(self);
    return array;
  }
  const array = new Array(n);
  let index = 0;
  let chunk = self.head;
  while (chunk) {
    while (chunk.offset < chunk.array.length) {
      array[index++] = chunk.array[chunk.offset];
      if (chunk.mutable) chunk.array[chunk.offset] = void 0;
      chunk.offset++;
      if (index === n) {
        self.head = chunk.offset === chunk.array.length && chunk.next ? chunk.next : chunk;
        self.length -= n;
        if (self.length === 0) clear$1(self);
        else compactHead(self);
        return array;
      }
    }
    chunk = chunk.next;
  }
  clear$1(self);
  return array;
};
/**
 * Takes all elements from the MutableList and returns them as an array.
 * The list becomes empty after this operation. This is equivalent to takeN(list, list.length).
 *
 * **Example** (Draining all elements)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 * MutableList.appendAll(list, ["apple", "banana", "cherry"])
 *
 * MutableList.takeAll(list) // => ["apple", "banana", "cherry"]
 * list.length // => 0
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const takeAll$2 = (self) => takeN(self, self.length);
/**
 * Takes a single element from the beginning of the MutableList.
 * Returns the element if available, or the Empty symbol if the list is empty.
 * The taken element is removed from the list.
 *
 * **Example** (Taking one element)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 * MutableList.appendAll(list, ["first", "second", "third"])
 *
 * MutableList.take(list) // => "first"
 * MutableList.toArray(list) // => ["second", "third"]
 * list.length // => 2
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const take$3 = (self) => {
  if (!self.head) return Empty;
  const message = self.head.array[self.head.offset];
  if (self.head.mutable) self.head.array[self.head.offset] = void 0;
  self.head.offset++;
  self.length--;
  if (self.head.offset === self.head.array.length) {
    if (self.head.next) self.head = self.head.next;
    else clear$1(self);
  } else compactHead(self);
  return message;
};
/**
 * Filters the MutableList in place, keeping only elements that satisfy the predicate.
 * This operation modifies the list and rebuilds its internal structure for efficiency.
 * The predicate receives each element's current index.
 *
 * **Example** (Filtering in place)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<number>()
 * MutableList.appendAll(list, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 *
 * MutableList.filter(list, (n) => n % 2 === 0)
 *
 * MutableList.toArray(list) // => [2, 4, 6, 8, 10]
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const filter$2 = (self, f) => {
  const array = [];
  let chunk = self.head;
  let index = 0;
  while (chunk) {
    for (let i = chunk.offset; i < chunk.array.length; i++)
      if (f(chunk.array[i], index++)) array.push(chunk.array[i]);
    chunk = chunk.next;
  }
  if (array.length === 0) {
    clear$1(self);
    return;
  }
  self.head = self.tail = {
    array,
    mutable: true,
    offset: 0,
    next: void 0,
  };
  self.length = array.length;
};
/**
 * Removes all occurrences of a value from the `MutableList` using JavaScript
 * strict equality semantics.
 *
 * **When to use**
 *
 * Use when in-place removal should use JavaScript identity/strict equality
 * rather than Effect structural equality.
 *
 * **Details**
 *
 * The list is modified in place.
 *
 * **Gotchas**
 *
 * Values are compared with `!==`, so this does not use Effect structural
 * equality.
 *
 * **Example** (Removing matching values)
 *
 * ```ts import.meta.vitest
 * import { MutableList } from "effect"
 *
 * const list = MutableList.make<string>()
 * MutableList.appendAll(list, ["apple", "banana", "apple", "cherry", "apple"])
 *
 * MutableList.remove(list, "apple")
 *
 * MutableList.toArray(list) // => ["banana", "cherry"]
 * ```
 *
 * @stability stable
 * @category mutations
 * @since 4.0.0
 */
const remove = (self, value) => filter$2(self, (v) => v !== value);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/PubSub.js
/**
 * Broadcasts values from publishers to many subscribers.
 *
 * Publishers add messages with `publish` or `publishAll`, and each active
 * `Subscription` receives its own copy of every accepted message. Unlike a
 * queue, subscribers do not compete for messages. This module includes bounded,
 * dropping, sliding, and unbounded hubs, optional replay buffers for late
 * subscribers, message-taking helpers, capacity and shutdown operations, a
 * type guard, and low-level types for custom hub strategies.
 *
 * @stability stable
 * @since 2.0.0
 */
const TypeId$5 = "~effect/PubSub";
const SubscriptionTypeId = "~effect/PubSub/Subscription";
/**
 * Creates a PubSub with a custom atomic implementation and strategy.
 *
 * **Example** (Creating a PubSub with a custom strategy)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   // Create custom PubSub with specific atomic implementation and strategy
 *   const pubsub = yield* PubSub.make<string>({
 *     atomicPubSub: () => PubSub.makeAtomicBounded(100),
 *     strategy: () => new PubSub.BackPressureStrategy()
 *   })
 *
 *   // Use the created PubSub
 *   const published = yield* PubSub.publish(pubsub, "Hello")
 *   yield* PubSub.shutdown(pubsub)
 *   return published
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const make$3 = (options) =>
  sync$2(() =>
    makePubSubUnsafe(
      options.atomicPubSub(),
      /* @__PURE__ */ new Map(),
      makeUnsafe$2(),
      makeUnsafe$1(false),
      make$5(false),
      options.strategy(),
      make$5(none()),
    ),
  );
/**
 * Creates a bounded `PubSub` with the sliding strategy. The `PubSub` will add new
 * messages and drop old messages if the `PubSub` is at capacity.
 *
 * **Details**
 *
 * The capacity must be a positive integer or `Infinity` for unbounded storage.
 * Invalid capacities cause the effect to die.
 * For best performance use capacities that are powers of two.
 *
 * **Example** (Sliding old messages when full)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   // Create sliding PubSub that evicts old messages when full
 *   const pubsub = yield* PubSub.sliding<string>(3)
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Fill and overflow the PubSub
 *   yield* PubSub.publish(pubsub, "msg1")
 *   yield* PubSub.publish(pubsub, "msg2")
 *   yield* PubSub.publish(pubsub, "msg3")
 *   yield* PubSub.publish(pubsub, "msg4") // "msg1" is evicted
 *
 *   return yield* PubSub.takeAll(subscription)
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => ["msg2", "msg3", "msg4"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sliding$1 = (capacity) =>
  make$3({
    atomicPubSub: () => makeAtomicBounded(capacity),
    strategy: () => new SlidingStrategy(),
  });
/**
 * Creates an unbounded `PubSub`.
 *
 * **Example** (Creating an unbounded PubSub)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   // Create unbounded PubSub
 *   const pubsub = yield* PubSub.unbounded<string>()
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Can publish unlimited messages
 *   for (let i = 0; i < 3; i++) {
 *     yield* PubSub.publish(pubsub, `message-${i}`)
 *   }
 *
 *   return yield* PubSub.takeAll(subscription)
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => ["message-0", "message-1", "message-2"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unbounded$1 = (options) =>
  make$3({
    atomicPubSub: () => makeAtomicUnbounded(options),
    strategy: () => new DroppingStrategy(),
  });
/**
 * Creates a bounded atomic PubSub implementation with optional replay buffer.
 *
 * **When to use**
 *
 * Use to provide bounded message storage when building a custom `PubSub` with
 * `make` and an explicit delivery strategy.
 *
 * **Details**
 *
 * Pass either a capacity number or an options object with `capacity` and
 * optional `replay`. A positive `replay` value enables a replay buffer for late
 * subscribers, and fractional replay sizes are rounded up.
 *
 * **Gotchas**
 *
 * The capacity must be a positive integer or `Infinity` for unbounded storage;
 * invalid capacities throw synchronously before an atomic implementation is
 * created.
 *
 * @see {@link make} for constructing a `PubSub` from an atomic implementation and delivery strategy
 * @see {@link makeAtomicUnbounded} for an atomic implementation without a bounded capacity
 * @see {@link bounded} for the higher-level backpressure constructor
 * @see {@link dropping} for the higher-level dropping constructor
 * @see {@link sliding} for the higher-level sliding constructor
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeAtomicBounded = (capacity) => {
  const options = typeof capacity === "number" ? { capacity } : capacity;
  ensureCapacity(options.capacity);
  if (options.capacity === Infinity) return makeAtomicUnbounded(options);
  const replayBuffer =
    options.replay && options.replay > 0 ? new ReplayBuffer(Math.ceil(options.replay)) : void 0;
  if (options.capacity === 1) return new BoundedPubSubSingle(replayBuffer);
  else if (nextPow2(options.capacity) === options.capacity)
    return new BoundedPubSubPow2(options.capacity, replayBuffer);
  else return new BoundedPubSubArb(options.capacity, replayBuffer);
};
/**
 * Creates an unbounded atomic PubSub implementation with optional replay buffer.
 *
 * **When to use**
 *
 * Use to create the low-level storage layer for a custom `PubSub` whose active
 * subscribers may retain an unbounded number of pending messages.
 *
 * **Gotchas**
 *
 * Messages published while subscribers are active can be retained without a
 * capacity limit until those subscribers take them or unsubscribe.
 *
 * @see {@link makeAtomicBounded} for a bounded atomic implementation that enforces capacity
 * @see {@link make} for wrapping an atomic implementation with a delivery strategy
 * @see {@link unbounded} for the high-level effectful constructor for unbounded `PubSub` values
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeAtomicUnbounded = (options) => {
  const replay = options?.replay;
  return new UnboundedPubSub(replay && replay > 0 ? new ReplayBuffer(Math.ceil(replay)) : void 0);
};
/**
 * Shuts down the `PubSub`, interrupting suspended publishers and subscribers
 * and finalizing active subscriptions.
 *
 * **Details**
 *
 * After shutdown, `publish` and `publishAll` succeed with `false`,
 * `publishUnsafe` returns `false`, and subscription operations such as `take`
 * interrupt.
 *
 * **Example** (Shutting down a PubSub)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(1)
 *
 *   // Shutdown the PubSub
 *   yield* PubSub.shutdown(pubsub)
 *
 *   const isShutdown = yield* PubSub.isShutdown(pubsub)
 *
 *   // Publishing after shutdown returns false
 *   const published = yield* PubSub.publish(pubsub, "msg1")
 *   return { isShutdown, published }
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => { isShutdown: true, published: false }
 * ```
 *
 * @stability stable
 * @category lifecycle
 * @since 2.0.0
 */
const shutdown$1 = (self) =>
  uninterruptible(
    withFiber((fiber) => {
      set(self.shutdownFlag, true);
      return close(self.scope, interrupt$2(fiber.id)).pipe(
        andThen(self.strategy.shutdown),
        when(self.shutdownHook.open),
        asVoid,
      );
    }),
  );
/**
 * Publishes a message to the `PubSub` as an `Effect`, returning whether the
 * message was accepted.
 *
 * **When to use**
 *
 * Use when you need to publish from effectful code and let the configured
 * PubSub strategy handle surplus messages.
 *
 * **Details**
 *
 * The effect succeeds with `false` if the `PubSub` is shut down. If the message
 * cannot be accepted immediately, the configured strategy decides how surplus
 * messages are handled.
 *
 * **Example** (Publishing a message)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(10)
 *
 *   // Publish a message
 *   const published = yield* PubSub.publish(pubsub, "Hello World")
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   yield* PubSub.publish(pubsub, "Hello")
 *   const message = yield* PubSub.take(subscription)
 *   return { published, message }
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => { published: true, message: "Hello" }
 * ```
 *
 * @see {@link publishUnsafe} for a synchronous non-blocking attempt that does not run effectful surplus handling
 *
 * @stability stable
 * @category publishing
 * @since 2.0.0
 */
const publish = /*#__PURE__*/ dual(2, (self, value) =>
  suspend$2(() => {
    if (self.shutdownFlag.current || isSome(self.ended.current)) return succeed$2(false);
    if (self.pubsub.publish(value)) {
      self.strategy.completeSubscribersUnsafe(self.pubsub, self.subscribers);
      return succeed$2(true);
    }
    return self.strategy.handleSurplus(
      self.pubsub,
      self.subscribers,
      [value],
      self.shutdownFlag,
      self.ended,
    );
  }),
);
/**
 * Attempts to publish a message synchronously without applying the PubSub
 * strategy's effectful surplus handling.
 *
 * **When to use**
 *
 * Use when you need a non-blocking synchronous publish attempt where `false`
 * is an acceptable result when the message cannot be accepted immediately.
 *
 * **Details**
 *
 * Returns `false` if the `PubSub` is shut down or the message cannot be
 * accepted immediately, for example when a bounded PubSub is full. Prefer
 * `publish` when backpressure or sliding behavior should be honored.
 *
 * **Example** (Publishing without suspending)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(2)
 *   return PubSub.publishUnsafe(pubsub, "Hello")
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => true
 * ```
 *
 * @see {@link publish} for effectful publishing that honors the configured surplus strategy
 *
 * @stability stable
 * @category publishing
 * @since 4.0.0
 */
const publishUnsafe = /*#__PURE__*/ dual(2, (self, value) => {
  if (self.shutdownFlag.current || isSome(self.ended.current)) return false;
  if (self.pubsub.publish(value)) {
    self.strategy.completeSubscribersUnsafe(self.pubsub, self.subscribers);
    return true;
  }
  return false;
});
/**
 * Publishes all of the specified messages to the `PubSub`, returning whether they
 * were published to the `PubSub`.
 *
 * **Example** (Publishing multiple messages)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(10)
 *
 *   // Publish multiple messages at once
 *   const allPublished = yield* PubSub.publishAll(pubsub, ["Hello", "World", "from", "Effect"])
 *
 *   // With a smaller capacity and an active subscription
 *   const smallPubsub = yield* PubSub.bounded<string>(2)
 *   const subscription = yield* PubSub.subscribe(smallPubsub)
 *
 *   // Will suspend until space becomes available for all messages
 *   const fiber = yield* Effect.forkChild(PubSub.publishAll(smallPubsub, ["msg1", "msg2", "msg3", "msg4"]))
 *
 *   const firstBatch = yield* PubSub.takeBetween(subscription, 2, 2)
 *   const result = yield* Fiber.join(fiber)
 *   const secondBatch = yield* PubSub.takeAll(subscription)
 *   return { allPublished, firstBatch, result, secondBatch }
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => { allPublished: true, firstBatch: ["msg1", "msg2"], result: true, secondBatch: ["msg3", "msg4"] }
 * ```
 *
 * @stability stable
 * @category publishing
 * @since 2.0.0
 */
const publishAll = /*#__PURE__*/ dual(2, (self, elements) =>
  suspend$2(() => {
    if (self.shutdownFlag.current || isSome(self.ended.current)) return succeed$2(false);
    const surplus = self.pubsub.publishAll(elements);
    self.strategy.completeSubscribersUnsafe(self.pubsub, self.subscribers);
    if (surplus.length === 0) return succeed$2(true);
    return self.strategy.handleSurplus(
      self.pubsub,
      self.subscribers,
      surplus,
      self.shutdownFlag,
      self.ended,
    );
  }),
);
/**
 * Subscribes to receive messages from the `PubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `PubSub`
 * each time.
 *
 * **Example** (Subscribing to messages)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(10)
 *
 *   // Subscribe within a scope for automatic cleanup
 *   const first = yield* Effect.scoped(Effect.gen(function*() {
 *     const subscription = yield* PubSub.subscribe(pubsub)
 *
 *     // Publish some messages
 *     yield* PubSub.publish(pubsub, "Hello")
 *     yield* PubSub.publish(pubsub, "World")
 *
 *     // Take messages one by one
 *     const msg1 = yield* PubSub.take(subscription)
 *     const msg2 = yield* PubSub.take(subscription)
 *
 *     // Subscription is automatically cleaned up when scope exits
 *     return [msg1, msg2]
 *   }))
 *
 *   const second = yield* Effect.scoped(Effect.gen(function*() {
 *     const sub1 = yield* PubSub.subscribe(pubsub)
 *     const sub2 = yield* PubSub.subscribe(pubsub)
 *
 *     // Multiple subscribers can receive the same messages
 *     yield* PubSub.publish(pubsub, "Broadcast")
 *
 *     return yield* Effect.all([
 *       PubSub.take(sub1),
 *       PubSub.take(sub2)
 *     ])
 *   }))
 *   return [first, second]
 * })
 *
 * const actual = await Effect.runPromise(program)
 * actual // => [["Hello", "World"], ["Broadcast", "Broadcast"]]
 * ```
 *
 * @stability stable
 * @category subscriptions
 * @since 2.0.0
 */
const subscribe = (self) =>
  uninterruptible(
    contextWith((services) => {
      const localScope = get(services, Scope);
      const scope = forkUnsafe(self.scope);
      const subscription = makeSubscriptionUnsafe(
        self.pubsub,
        self.subscribers,
        self.strategy,
        self.ended,
      );
      return addFinalizer(scope, unsubscribe(subscription)).pipe(
        andThen(addFinalizerExit(localScope, (exit) => close(scope, exit))),
        as(subscription),
      );
    }),
  );
const unsubscribe = (self) =>
  uninterruptible(
    withFiber((state) => {
      set(self.shutdownFlag, true);
      return forEach$1(takeAll$2(self.pollers), (d) => interruptWith(d, state.id), {
        discard: true,
        concurrency: "unbounded",
      }).pipe(
        tap$1(() =>
          sync$2(() => {
            self.subscribers.delete(self.subscription);
            self.subscription.unsubscribe();
            self.replayWindow.close();
            self.strategy.onPubSubEmptySpaceUnsafe(self.pubsub, self.subscribers);
          }),
        ),
        when(self.shutdownHook.open),
        asVoid,
      );
    }),
  );
/**
 * Takes a single message from the subscription. If no messages are available,
 * this will suspend until a message becomes available.
 *
 * **Example** (Taking a message)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(10)
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Start a fiber to take a message (will suspend)
 *   const takeFiber = yield* Effect.forkChild(PubSub.take(subscription))
 *
 *   // Publish a message
 *   yield* PubSub.publish(pubsub, "Hello")
 *
 *   // The take will now complete
 *   return yield* Fiber.join(takeFiber)
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => "Hello"
 * ```
 *
 * @stability stable
 * @category subscriptions
 * @since 4.0.0
 */
const take$2 = (self) =>
  suspend$2(() => {
    if (self.shutdownFlag.current) return interrupt$3;
    if (self.replayWindow.remaining > 0) {
      const message = self.replayWindow.take();
      return succeed$2(message);
    }
    const message = self.pollers.length === 0 ? self.subscription.poll() : Empty;
    if (message === Empty) return pollForItem(self);
    else {
      self.strategy.onPubSubEmptySpaceUnsafe(self.pubsub, self.subscribers);
      return succeed$2(message);
    }
  });
/**
 * Takes all available messages from the subscription, suspending if no items
 * are available.
 *
 * **Example** (Taking all available messages)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(10)
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Publish multiple messages
 *   yield* PubSub.publishAll(pubsub, ["msg1", "msg2", "msg3"])
 *
 *   // Take all available messages at once
 *   return yield* PubSub.takeAll(subscription)
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => ["msg1", "msg2", "msg3"]
 * ```
 *
 * @stability stable
 * @category subscriptions
 * @since 4.0.0
 */
const takeAll$1 = (self) =>
  suspend$2(function loop(value) {
    if (self.shutdownFlag.current) return interrupt$3;
    let as = self.pollers.length === 0 ? self.subscription.pollUpTo(Number.POSITIVE_INFINITY) : [];
    if (value) as = value.concat(as);
    self.strategy.onPubSubEmptySpaceUnsafe(self.pubsub, self.subscribers);
    if (self.replayWindow.remaining > 0) return succeed$2(self.replayWindow.takeAll().concat(as));
    else if (!isArrayNonEmpty(as)) return flatMap$2(pollForItem(self), (item) => loop([item]));
    return succeed$2(as);
  });
const pollForItem = (self) =>
  callback$1((resume) => {
    if (self.shutdownFlag.current) return resume(interrupt$3);
    if (isSome(self.ended.current)) {
      const message = self.pollers.length === 0 ? self.subscription.poll() : Empty;
      if (message !== Empty) {
        self.strategy.onPubSubEmptySpaceUnsafe(self.pubsub, self.subscribers);
        return resume(succeed$2(message));
      }
      return resume(succeed$2(self.ended.current.value));
    }
    const deferred = makeUnsafe$3();
    let set = self.subscribers.get(self.subscription);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      self.subscribers.set(self.subscription, set);
    }
    set.add(self.pollers);
    append(self.pollers, deferred);
    self.strategy.completePollersUnsafe(
      self.pubsub,
      self.subscribers,
      self.subscription,
      self.pollers,
    );
    if (deferred.effect) return resume(deferred.effect);
    deferred.resumes = [resume];
    return sync$2(() => remove(self.pollers, deferred));
  });
const AbsentValue = /*#__PURE__*/ Symbol.for("effect/PubSub/AbsentValue");
const addSubscribers = (subscribers, subscription, pollers) => {
  if (!subscribers.has(subscription)) subscribers.set(subscription, /* @__PURE__ */ new Set());
  subscribers.get(subscription).add(pollers);
};
const removeSubscribers = (subscribers, subscription, pollers) => {
  if (!subscribers.has(subscription)) return;
  const set = subscribers.get(subscription);
  set.delete(pollers);
  if (set.size === 0) subscribers.delete(subscription);
};
const makeSubscriptionUnsafe = (pubsub, subscribers, strategy, ended) =>
  new SubscriptionImpl(
    pubsub,
    subscribers,
    pubsub.subscribe(),
    make$4(),
    makeUnsafe$1(false),
    make$5(false),
    strategy,
    pubsub.replayWindow(),
    ended,
  );
var BoundedPubSubArb = class {
  array;
  replayIndices;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  capacity;
  replayBuffer;
  constructor(capacity, replayBuffer) {
    this.capacity = capacity;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({ length: capacity });
    this.replayIndices = replayBuffer ? Array.from({ length: capacity }) : [];
    this.subscribers = Array.from({ length: capacity });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) return false;
    const replayIndex = this.replayBuffer?.offer(value);
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex % this.capacity;
      this.array[index] = value;
      if (replayIndex !== void 0) this.replayIndices[index] = replayIndex;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) this.replayBuffer.offerAll(elements);
      return [];
    }
    const chunk = fromIterable$1(elements);
    const n = chunk.length;
    const size = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) return chunk;
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const a = chunk[iteratorIndex++];
      const index = this.publisherIndex % this.capacity;
      this.array[index] = a;
      const replayIndex = this.replayBuffer?.offer(a);
      if (replayIndex !== void 0) this.replayIndices[index] = replayIndex;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return chunk.slice(iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex % this.capacity;
      const value = this.array[index];
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
      this.replayBuffer?.slide(value, this.replayIndices[index]);
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubArbSubscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubArbSubscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return (
      this.unsubscribed ||
      this.self.publisherIndex === this.subscriberIndex ||
      this.self.publisherIndex === this.self.subscribersIndex
    );
  }
  size() {
    if (this.unsubscribed) return 0;
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll() {
    if (this.unsubscribed) return Empty;
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return Empty;
  }
  pollUpTo(n) {
    n = normalize(n);
    if (this.unsubscribed) return [];
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size);
    if (toPoll <= 0) return [];
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const a = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(a);
      this.subscriberIndex += 1;
    }
    return builder;
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex % this.self.capacity;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
};
var BoundedPubSubPow2 = class {
  array;
  replayIndices;
  mask;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  capacity;
  replayBuffer;
  constructor(capacity, replayBuffer) {
    this.capacity = capacity;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({ length: capacity });
    this.replayIndices = replayBuffer ? Array.from({ length: capacity }) : [];
    this.mask = capacity - 1;
    this.subscribers = Array.from({ length: capacity });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) return false;
    const replayIndex = this.replayBuffer?.offer(value);
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex & this.mask;
      this.array[index] = value;
      if (replayIndex !== void 0) this.replayIndices[index] = replayIndex;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) this.replayBuffer.offerAll(elements);
      return [];
    }
    const chunk = fromIterable$1(elements);
    const n = chunk.length;
    const size = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) return chunk;
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const elem = chunk[iteratorIndex++];
      const index = this.publisherIndex & this.mask;
      this.array[index] = elem;
      const replayIndex = this.replayBuffer?.offer(elem);
      if (replayIndex !== void 0) this.replayIndices[index] = replayIndex;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return chunk.slice(iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex & this.mask;
      const value = this.array[index];
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
      this.replayBuffer?.slide(value, this.replayIndices[index]);
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubPow2Subscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubPow2Subscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return (
      this.unsubscribed ||
      this.self.publisherIndex === this.subscriberIndex ||
      this.self.publisherIndex === this.self.subscribersIndex
    );
  }
  size() {
    if (this.unsubscribed) return 0;
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll() {
    if (this.unsubscribed) return Empty;
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return Empty;
  }
  pollUpTo(n) {
    n = normalize(n);
    if (this.unsubscribed) return [];
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size);
    if (toPoll <= 0) return [];
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(elem);
      this.subscriberIndex += 1;
    }
    return builder;
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex & this.self.mask;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
};
var BoundedPubSubSingle = class {
  publisherIndex = 0;
  subscriberCount = 0;
  subscribers = 0;
  value = AbsentValue;
  replayIndex = 0;
  capacity = 1;
  replayBuffer;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  isEmpty() {
    return this.subscribers === 0;
  }
  isFull() {
    return !this.isEmpty();
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  publish(value) {
    if (this.isFull()) return false;
    const replayIndex = this.replayBuffer?.offer(value);
    if (this.subscriberCount !== 0) {
      this.value = value;
      if (replayIndex !== void 0) this.replayIndex = replayIndex;
      this.subscribers = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) this.replayBuffer.offerAll(elements);
      return [];
    }
    const chunk = fromIterable$1(elements);
    if (chunk.length === 0) return chunk;
    if (this.publish(chunk[0])) return chunk.slice(1);
    else return chunk;
  }
  slide() {
    if (this.isFull()) {
      const value = this.value;
      this.subscribers = 0;
      this.value = AbsentValue;
      this.replayBuffer?.slide(value, this.replayIndex);
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubSingleSubscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubSingleSubscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return (
      this.unsubscribed ||
      this.self.subscribers === 0 ||
      this.subscriberIndex === this.self.publisherIndex
    );
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  poll() {
    if (this.isEmpty()) return Empty;
    const elem = this.self.value;
    this.self.subscribers -= 1;
    if (this.self.subscribers === 0) this.self.value = AbsentValue;
    this.subscriberIndex = this.self.publisherIndex;
    return elem;
  }
  pollUpTo(n) {
    if (normalize(n) < 1 || this.isEmpty()) return [];
    return [this.poll()];
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      if (this.self.subscribers !== 0 && this.subscriberIndex !== this.self.publisherIndex) {
        this.self.subscribers -= 1;
        if (this.self.subscribers === 0) this.self.value = AbsentValue;
      }
    }
  }
};
var UnboundedPubSub = class {
  publisherHead = {
    value: AbsentValue,
    replayIndex: void 0,
    subscribers: 0,
    next: null,
  };
  publisherTail = this.publisherHead;
  publisherIndex = 0;
  subscribersIndex = 0;
  capacity = Number.MAX_SAFE_INTEGER;
  replayBuffer;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherHead === this.publisherTail;
  }
  isFull() {
    return false;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    const replayIndex = this.replayBuffer?.offer(value);
    const subscribers = this.publisherTail.subscribers;
    if (subscribers !== 0) {
      const node = {
        value,
        replayIndex,
        subscribers,
        next: null,
      };
      this.publisherTail.next = node;
      this.publisherTail = this.publisherTail.next;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    if (this.publisherTail.subscribers !== 0) for (const a of elements) this.publish(a);
    else if (this.replayBuffer) this.replayBuffer.offerAll(elements);
    return [];
  }
  slide() {
    if (this.publisherHead !== this.publisherTail) {
      const node = this.publisherHead.next;
      const value = node.value;
      this.publisherHead = this.publisherHead.next;
      this.publisherHead.value = AbsentValue;
      this.subscribersIndex += 1;
      this.replayBuffer?.slide(value, node.replayIndex);
    }
  }
  subscribe() {
    this.publisherTail.subscribers += 1;
    return new UnboundedPubSubSubscription(this, this.publisherTail, this.publisherIndex, false);
  }
};
var UnboundedPubSubSubscription = class {
  self;
  subscriberHead;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberHead, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberHead = subscriberHead;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    if (this.unsubscribed) return true;
    let empty = true;
    let loop = true;
    while (loop)
      if (this.subscriberHead === this.self.publisherTail) loop = false;
      else if (this.subscriberHead.next.value !== AbsentValue) {
        empty = false;
        loop = false;
      } else {
        this.subscriberHead = this.subscriberHead.next;
        this.subscriberIndex += 1;
      }
    return empty;
  }
  size() {
    if (this.unsubscribed) return 0;
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll() {
    if (this.unsubscribed) return Empty;
    let loop = true;
    let polled = Empty;
    while (loop)
      if (this.subscriberHead === this.self.publisherTail) loop = false;
      else {
        const elem = this.subscriberHead.next.value;
        if (elem !== AbsentValue) {
          polled = elem;
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
          loop = false;
        }
        this.subscriberHead = this.subscriberHead.next;
        this.subscriberIndex += 1;
      }
    return polled;
  }
  pollUpTo(n) {
    n = normalize(n);
    const builder = [];
    let i = 0;
    while (i !== n) {
      const a = this.poll();
      if (a === Empty) i = n;
      else {
        builder.push(a);
        i += 1;
      }
    }
    return builder;
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.publisherTail.subscribers -= 1;
      while (this.subscriberHead !== this.self.publisherTail) {
        if (this.subscriberHead.next.value !== AbsentValue) {
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
        }
        this.subscriberHead = this.subscriberHead.next;
      }
    }
  }
};
var SubscriptionImpl = class {
  [SubscriptionTypeId] = { _A: identity };
  pubsub;
  subscribers;
  subscription;
  pollers;
  shutdownHook;
  shutdownFlag;
  strategy;
  replayWindow;
  ended;
  constructor(
    pubsub,
    subscribers,
    subscription,
    pollers,
    shutdownHook,
    shutdownFlag,
    strategy,
    replayWindow,
    ended,
  ) {
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.subscription = subscription;
    this.pollers = pollers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
    this.replayWindow = replayWindow;
    this.ended = ended;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var PubSubImpl = class {
  [TypeId$5] = { _A: identity };
  pubsub;
  subscribers;
  scope;
  shutdownHook;
  shutdownFlag;
  strategy;
  ended;
  constructor(pubsub, subscribers, scope, shutdownHook, shutdownFlag, strategy, ended) {
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.scope = scope;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
    this.ended = ended;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makePubSubUnsafe = (
  pubsub,
  subscribers,
  scope,
  shutdownHook,
  shutdownFlag,
  strategy,
  ended,
) => new PubSubImpl(pubsub, subscribers, scope, shutdownHook, shutdownFlag, strategy, ended);
const ensureCapacity = (capacity) => {
  if (capacity <= 0 || (capacity !== Infinity && !Number.isInteger(capacity)))
    throw new Error(`Cannot construct PubSub with capacity of ${capacity}`);
};
/**
 * Represents the dropping strategy for bounded `PubSub` values.
 *
 * **When to use**
 *
 * Use to keep publishers fast by dropping new messages when the `PubSub` is at
 * capacity.
 *
 * **Details**
 *
 * A publish that arrives while the `PubSub` is full is dropped instead of
 * waiting for capacity.
 *
 * **Gotchas**
 *
 * Subscribers may miss messages published while they are subscribed.
 *
 * **Example** (Applying a dropping strategy)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   // Explicitly create a PubSub with a dropping strategy
 *   const pubsub = yield* PubSub.make<string>({
 *     atomicPubSub: () => PubSub.makeAtomicBounded(2),
 *     strategy: () => new PubSub.DroppingStrategy()
 *   })
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Fill the PubSub
 *   const pub1 = yield* PubSub.publish(pubsub, "msg1") // true
 *   const pub2 = yield* PubSub.publish(pubsub, "msg2") // true
 *   const pub3 = yield* PubSub.publish(pubsub, "msg3") // false (dropped)
 *
 *   // Subscribers will only see the first two messages
 *   const messages = yield* PubSub.takeAll(subscription)
 *   return { published: [pub1, pub2, pub3], messages }
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => { published: [true, true, false], messages: ["msg1", "msg2"] }
 * ```
 *
 * @stability stable
 * @category models
 * @since 4.0.0
 */
var DroppingStrategy = class {
  get shutdown() {
    return void_;
  }
  handleSurplus(_pubsub, _subscribers, _elements, _isShutdown) {
    return succeed$2(false);
  }
  onPubSubEmptySpaceUnsafe(_pubsub, _subscribers) {}
  completePollersUnsafe(pubsub, subscribers, subscription, pollers) {
    return strategyCompletePollersUnsafe(this, pubsub, subscribers, subscription, pollers);
  }
  completeSubscribersUnsafe(pubsub, subscribers) {
    return strategyCompleteSubscribersUnsafe(this, pubsub, subscribers);
  }
};
/**
 * Represents the sliding strategy for bounded `PubSub` values.
 *
 * **When to use**
 *
 * Use to keep the most recent messages when the `PubSub` is at capacity.
 *
 * **Details**
 *
 * New messages are accepted by evicting older messages from the bounded
 * `PubSub`.
 *
 * **Gotchas**
 *
 * Slow subscribers may miss older messages that are evicted before they are
 * consumed.
 *
 * **Example** (Applying a sliding strategy)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   // Explicitly create a PubSub with a sliding strategy
 *   const pubsub = yield* PubSub.make<string>({
 *     atomicPubSub: () => PubSub.makeAtomicBounded(2),
 *     strategy: () => new PubSub.SlidingStrategy()
 *   })
 *
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Publish messages that exceed capacity
 *   yield* PubSub.publish(pubsub, "msg1") // stored
 *   yield* PubSub.publish(pubsub, "msg2") // stored
 *   yield* PubSub.publish(pubsub, "msg3") // "msg1" evicted, "msg3" stored
 *   yield* PubSub.publish(pubsub, "msg4") // "msg2" evicted, "msg4" stored
 *
 *   // Subscribers will see the most recent messages
 *   return yield* PubSub.takeAll(subscription)
 * }))
 *
 * const actual = await Effect.runPromise(program)
 * actual // => ["msg3", "msg4"]
 * ```
 *
 * @stability stable
 * @category models
 * @since 4.0.0
 */
var SlidingStrategy = class {
  get shutdown() {
    return void_;
  }
  handleSurplus(pubsub, subscribers, elements, _isShutdown, ended) {
    return sync$2(() => {
      if (isSome(ended.current)) return false;
      this.slidingPublishUnsafe(pubsub, elements);
      this.completeSubscribersUnsafe(pubsub, subscribers);
      return true;
    });
  }
  onPubSubEmptySpaceUnsafe(_pubsub, _subscribers) {}
  completePollersUnsafe(pubsub, subscribers, subscription, pollers) {
    return strategyCompletePollersUnsafe(this, pubsub, subscribers, subscription, pollers);
  }
  completeSubscribersUnsafe(pubsub, subscribers) {
    return strategyCompleteSubscribersUnsafe(this, pubsub, subscribers);
  }
  slidingPublishUnsafe(pubsub, elements) {
    const it = elements[Symbol.iterator]();
    let next = it.next();
    if (!next.done && pubsub.capacity > 0) {
      let a = next.value;
      let loop = true;
      while (loop) {
        pubsub.slide();
        const pub = pubsub.publish(a);
        if (pub && (next = it.next()) && !next.done) a = next.value;
        else if (pub) loop = false;
      }
    }
  }
};
const strategyCompletePollersUnsafe = (strategy, pubsub, subscribers, subscription, pollers) => {
  let keepPolling = true;
  while (keepPolling && !subscription.isEmpty()) {
    const poller = take$3(pollers);
    if (poller === Empty) {
      removeSubscribers(subscribers, subscription, pollers);
      if (pollers.length === 0) keepPolling = false;
      else addSubscribers(subscribers, subscription, pollers);
    } else {
      const pollResult = subscription.poll();
      if (pollResult === Empty) prepend(pollers, poller);
      else {
        doneUnsafe(poller, succeed$3(pollResult));
        strategy.onPubSubEmptySpaceUnsafe(pubsub, subscribers);
      }
    }
  }
};
const strategyCompleteSubscribersUnsafe = (strategy, pubsub, subscribers) => {
  for (const [subscription, pollersSet] of subscribers)
    for (const pollers of pollersSet)
      strategy.completePollersUnsafe(pubsub, subscribers, subscription, pollers);
};
var ReplayBuffer = class {
  capacity;
  head = {
    value: AbsentValue,
    index: 0,
    next: null,
  };
  tail = this.head;
  slideValues = [];
  size = 0;
  index = 0;
  publisherIndex = 0;
  constructor(capacity) {
    this.capacity = capacity;
  }
  slide(value, publisherIndex) {
    this.slideValues[this.index % this.capacity] = {
      value,
      index: publisherIndex,
    };
    this.index++;
  }
  offer(a) {
    const index = this.publisherIndex++;
    this.tail.value = a;
    this.tail.index = index;
    this.tail.next = {
      value: AbsentValue,
      index: 0,
      next: null,
    };
    this.tail = this.tail.next;
    if (this.size === this.capacity) this.head = this.head.next;
    else this.size += 1;
    return index;
  }
  offerAll(as) {
    for (const a of as) this.offer(a);
  }
};
var ReplayWindowImpl = class {
  buffer;
  values;
  index = 0;
  remaining;
  slideIndex;
  newestIndex = -1;
  constructor(buffer) {
    this.buffer = buffer;
    this.remaining = buffer.size;
    this.slideIndex = buffer.index;
    this.values = new Array(this.remaining);
    let node = buffer.head;
    for (let i = 0; i < this.remaining; i++) {
      this.values[i] = node.value;
      this.newestIndex = node.index;
      node = node.next;
    }
  }
  close() {
    this.values.length = 0;
    this.remaining = 0;
  }
  sync() {
    const slides = this.buffer.index - this.slideIndex;
    if (slides === 0 || this.remaining === 0) return;
    const count = Math.min(slides, this.buffer.capacity);
    const start = this.buffer.index - count;
    for (let i = 0; i < count; i++) {
      const entry = this.buffer.slideValues[(start + i) % this.buffer.capacity];
      if (entry.index > this.newestIndex) {
        this.index = (this.index + 1) % this.values.length;
        this.values[(this.index + this.remaining - 1) % this.values.length] = entry.value;
        this.newestIndex = entry.index;
      }
    }
    this.slideIndex = this.buffer.index;
  }
  take() {
    if (this.remaining === 0) return;
    this.sync();
    const value = this.values[this.index];
    this.values[this.index] = AbsentValue;
    this.index = (this.index + 1) % this.values.length;
    this.remaining--;
    if (this.remaining === 0) this.close();
    return value;
  }
  takeN(n) {
    n = normalize(n);
    const len = Math.min(n, this.remaining);
    const items = new Array(len);
    for (let i = 0; i < len; i++) items[i] = this.take();
    return items;
  }
  takeAll() {
    return this.takeN(this.remaining);
  }
};
const emptyReplayWindow = {
  remaining: 0,
  take: () => void 0,
  takeN: () => [],
  takeAll: () => [],
  close: () => void 0,
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Queue.js
/**
 * Passes values asynchronously between fibers.
 *
 * A `Queue<A, E>` accepts values, hands each value to one consumer in offer
 * order, and can complete, fail, interrupt, or shut down. Queues can be bounded
 * or unbounded, and bounded queues can suspend, drop, or slide values when
 * producers are faster than consumers.
 *
 * @stability stable
 * @since 3.8.0
 */
const TypeId$4 = "~effect/Queue";
const EnqueueTypeId = "~effect/Queue/Enqueue";
const DequeueTypeId = "~effect/Queue/Dequeue";
const variance = {
  _A: identity,
  _E: identity,
};
const QueueProto = {
  [TypeId$4]: variance,
  [EnqueueTypeId]: variance,
  [DequeueTypeId]: variance,
  ...PipeInspectableProto,
  toJSON() {
    return {
      _id: "effect/Queue",
      state: this.state._tag,
      size: sizeUnsafe(this),
    };
  },
};
/**
 * Creates a `Queue` with optional capacity and overflow strategy.
 *
 * **Details**
 *
 * By default the queue is unbounded and uses the `"suspend"` strategy. Provide
 * `capacity` for a bounded queue and choose `"suspend"`, `"dropping"`, or
 * `"sliding"` to control what happens when the queue is full. The returned
 * queue can be offered to, taken from, failed, ended, interrupted, or shut down.
 *
 * **Example** (Creating queues)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.make<number, string | Cause.Done>()
 *
 *   // add messages to the queue
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *   yield* Queue.offerAll(queue, [3, 4, 5])
 *
 *   // take messages from the queue
 *   const messages = yield* Queue.takeAll(queue)
 *
 *   // signal that the queue is done
 *   yield* Queue.end(queue)
 *   const done = yield* Effect.flip(Queue.take(queue))
 *
 *   // signal that another queue has failed
 *   const failedQueue = yield* Queue.make<number, string>()
 *   const failed = yield* Queue.fail(failedQueue, "boom")
 *   return { messages, done, failed }
 * })
 *
 * await Effect.runPromise(program) // => { messages: [1, 2, 3, 4, 5], done: Cause.Done(), failed: true }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const make$2 = (options) =>
  withFiber$1((fiber) => {
    const self = Object.create(QueueProto);
    self.dispatcher = fiber.currentDispatcher;
    self.capacity = options?.capacity ?? Number.POSITIVE_INFINITY;
    self.strategy = options?.strategy ?? "suspend";
    self.messages = make$4();
    self.scheduleRunning = false;
    self.state = {
      _tag: "Open",
      takers: /* @__PURE__ */ new Set(),
      offers: /* @__PURE__ */ new Set(),
      awaiters: /* @__PURE__ */ new Set(),
    };
    return succeed$4(self);
  });
/**
 * Creates a bounded queue with the specified capacity that uses backpressure strategy.
 *
 * **Details**
 *
 * When the queue reaches capacity, producers will be suspended until space becomes available.
 * This ensures all messages are processed but may slow down producers.
 *
 * **Example** (Creating bounded queues)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<string>(5)
 *
 *   // This will succeed as queue has capacity
 *   yield* Queue.offer(queue, "first")
 *   yield* Queue.offer(queue, "second")
 *
 *   const size = yield* Queue.size(queue)
 *   return size
 * })
 *
 * await Effect.runPromise(program) // => 2
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const bounded = (capacity) => make$2({ capacity });
/**
 * Creates a bounded queue with sliding strategy. When the queue reaches capacity,
 * new elements are added and the oldest elements are dropped.
 *
 * **When to use**
 *
 * Use when you need producer offers not to block and can accept dropping the
 * oldest messages, such as when maintaining a rolling window of recent values.
 *
 * **Example** (Creating sliding queues)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.sliding<number>(3)
 *
 *   // Fill the queue to capacity
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *   yield* Queue.offer(queue, 3)
 *
 *   // This will succeed, dropping the oldest element (1)
 *   yield* Queue.offer(queue, 4)
 *
 *   const all = yield* Queue.takeAll(queue)
 *   return all
 * })
 *
 * await Effect.runPromise(program) // => [2, 3, 4]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sliding = (capacity) =>
  make$2({
    capacity,
    strategy: "sliding",
  });
/**
 * Creates a bounded queue with dropping strategy. When the queue reaches capacity,
 * new elements are dropped and the offer operation returns false.
 *
 * **When to use**
 *
 * Use when you need producer offers not to block while preserving existing
 * queued messages, even if new messages may be dropped when the queue is full.
 *
 * **Example** (Creating dropping queues)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.dropping<number>(2)
 *
 *   // Fill the queue to capacity
 *   const success1 = yield* Queue.offer(queue, 1)
 *   const success2 = yield* Queue.offer(queue, 2)
 *
 *   // This will be dropped
 *   const success3 = yield* Queue.offer(queue, 3)
 *
 *   const all = yield* Queue.takeAll(queue)
 *   return [success1, success2, success3, all]
 * })
 *
 * await Effect.runPromise(program) // => [true, true, false, [1, 2]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const dropping = (capacity) =>
  make$2({
    capacity,
    strategy: "dropping",
  });
/**
 * Creates an unbounded queue that can grow to any size without blocking producers.
 *
 * **When to use**
 *
 * Use when you need producers to add messages without backpressure and accept
 * unbounded memory growth.
 *
 * **Example** (Creating unbounded queues)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.unbounded<string>()
 *
 *   // Producers can always add messages without blocking
 *   yield* Queue.offer(queue, "message1")
 *   yield* Queue.offer(queue, "message2")
 *   yield* Queue.offerAll(queue, ["message3", "message4", "message5"])
 *
 *   // Check current size
 *   const size = yield* Queue.size(queue)
 *
 *   // Take all messages
 *   const messages = yield* Queue.takeAll(queue)
 *   return { size, messages }
 * })
 *
 * await Effect.runPromise(program) // => { size: 5, messages: ["message1", "message2", "message3", "message4", "message5"] }
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unbounded = () => make$2();
/**
 * Adds a message to the queue. Returns `false` if the queue is done.
 *
 * **Details**
 *
 * For bounded queues, this operation may suspend if the queue is at capacity,
 * depending on the backpressure strategy. For dropping/sliding queues, it may
 * return false or succeed immediately by dropping/sliding existing messages.
 *
 * **Example** (Offering a value)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(3)
 *
 *   // Successfully add messages to queue
 *   const success1 = yield* Queue.offer(queue, 1)
 *   const success2 = yield* Queue.offer(queue, 2)
 *
 *   // Queue state
 *   const size = yield* Queue.size(queue)
 *   return { offered: [success1, success2], size }
 * })
 *
 * await Effect.runPromise(program) // => { offered: [true, true], size: 2 }
 * ```
 *
 * @stability stable
 * @category offering
 * @since 2.0.0
 */
const offer = /*#__PURE__*/ dual(2, (self, message) =>
  suspend$3(() =>
    offerUnsafe(self, message)
      ? exitTrue
      : self.state._tag === "Open" && self.strategy === "suspend"
        ? offerOrWait(self, message)
        : exitFalse,
  ),
);
/**
 * Adds a message to the queue synchronously. Returns `false` if the queue is done.
 *
 * **When to use**
 *
 * Use when you are already in synchronous queue internals or a performance
 * boundary where wrapping the mutation in `Effect` is intentionally avoided.
 *
 * **Gotchas**
 *
 * This is an unsafe operation that directly modifies the queue without Effect wrapping.
 * Use this only when you're certain about the synchronous nature of the operation.
 *
 * **Example** (Offering a value synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * // Create a queue effect and extract the queue for unsafe operations
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(3)
 *
 *   // Add messages synchronously using unsafe API
 *   const success1 = Queue.offerUnsafe(queue, 1)
 *   const success2 = Queue.offerUnsafe(queue, 2)
 *
 *   // Check current size
 *   const size = Queue.sizeUnsafe(queue)
 *   return { offered: [success1, success2], size }
 * })
 *
 * await Effect.runPromise(program) // => { offered: [true, true], size: 2 }
 * ```
 *
 * @stability stable
 * @category offering
 * @since 4.0.0
 */
const offerUnsafe = (self, message) => {
  if (self.state._tag !== "Open") return false;
  else if (self.messages.length >= self.capacity) {
    if (self.strategy === "sliding") {
      take$3(self.messages);
      append(self.messages, message);
      return true;
    } else if (self.capacity <= 0 && self.state.takers.size > 0) {
      append(self.messages, message);
      releaseTakers(self);
      return true;
    }
    return false;
  }
  append(self.messages, message);
  scheduleReleaseTaker(self);
  return true;
};
/**
 * Adds multiple messages to the queue. Returns the remaining messages that
 * were not added.
 *
 * **When to use**
 *
 * Use when producers can submit a batch at once and need to know which messages
 * did not fit under the queue's capacity strategy.
 *
 * **Details**
 *
 * For bounded queues, this operation may suspend if the queue doesn't have
 * enough capacity. The operation returns an array of messages that couldn't
 * be added (empty array means all messages were successfully added).
 *
 * **Example** (Offering multiple values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.dropping<number>(3)
 *
 *   // Try to add more messages than capacity without suspending
 *   const remaining1 = yield* Queue.offerAll(queue, [1, 2, 3, 4, 5])
 *   return remaining1
 * })
 *
 * await Effect.runPromise(program) // => [4, 5]
 * ```
 *
 * @stability stable
 * @category offering
 * @since 2.0.0
 */
const offerAll = /*#__PURE__*/ dual(2, (self, messages) =>
  callback$2((resume) => {
    const remaining = offerAllUnsafe(self, messages);
    if (remaining.length === 0 || self.strategy === "dropping")
      return resume(exitSucceed(remaining));
    return waitToOffer(self, {
      _tag: "Array",
      remaining,
      offset: 0,
      resume,
    });
  }),
);
/**
 * Adds multiple messages to the queue synchronously. Returns the remaining messages that
 * were not added.
 *
 * **When to use**
 *
 * Use when queue internals or a performance boundary need a synchronous batch
 * offer and can handle any messages that do not fit.
 *
 * **Gotchas**
 *
 * This is an unsafe operation that directly modifies the queue without Effect wrapping.
 *
 * **Example** (Offering multiple values synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * // Create a bounded queue and use unsafe API
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(3)
 *
 *   // Try to add 5 messages to capacity-3 queue using unsafe API
 *   const remaining = Queue.offerAllUnsafe(queue, [1, 2, 3, 4, 5])
 *
 *   // Check what's in the queue
 *   const size = Queue.sizeUnsafe(queue)
 *   return { remaining, size }
 * })
 *
 * await Effect.runPromise(program) // => { remaining: [4, 5], size: 3 }
 * ```
 *
 * @stability stable
 * @category offering
 * @since 4.0.0
 */
const offerAllUnsafe = (self, messages) => {
  if (self.state._tag !== "Open") return fromIterable$1(messages);
  else if (self.capacity === Number.POSITIVE_INFINITY || self.strategy === "sliding") {
    appendAll(self.messages, messages);
    if (self.strategy === "sliding") takeN(self.messages, self.messages.length - self.capacity);
    scheduleReleaseTaker(self);
    return [];
  }
  const free = self.capacity <= 0 ? self.state.takers.size : self.capacity - self.messages.length;
  if (free === 0) return fromIterable$1(messages);
  const remaining = [];
  let i = 0;
  for (const message of messages) {
    if (i < free) append(self.messages, message);
    else remaining.push(message);
    i++;
  }
  scheduleReleaseTaker(self);
  return remaining;
};
/**
 * Fails the queue with an error. If the queue is already done, `false` is
 * returned.
 *
 * **Example** (Failing queues with an error)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, string>(10)
 *
 *   // Fail the queue with an error
 *   const failed = yield* Queue.fail(queue, "Something went wrong")
 *
 *   // Taking from the failed queue fails with the error
 *   const exit = yield* Effect.exit(Queue.take(queue))
 *   return [failed, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.fail("Something went wrong")]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const fail$2 = /*#__PURE__*/ dual(2, (self, error) => failCause$2(self, causeFail(error)));
/**
 * Fails the queue with a cause. If the queue is already done, `false` is
 * returned.
 *
 * **Example** (Failing queues with a cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, string>(10)
 *
 *   // Create a cause and fail the queue
 *   const cause = Cause.fail("Queue processing failed")
 *   const failed = yield* Queue.failCause(queue, cause)
 *
 *   // The queue is now done with the specified failure cause
 *   const exit = yield* Effect.exit(Queue.take(queue))
 *   return [failed, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.failCause(Cause.fail("Queue processing failed"))]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const failCause$2 = /*#__PURE__*/ dual(2, (self, cause) =>
  sync$3(() => failCauseUnsafe(self, cause)),
);
/**
 * Fails the queue with a cause synchronously. If the queue is already done, `false` is
 * returned.
 *
 * **When to use**
 *
 * Use when queue completion must be driven from synchronous internals while
 * preserving the full failure `Cause`.
 *
 * **Gotchas**
 *
 * This is an unsafe operation that directly modifies the queue without Effect wrapping.
 *
 * **Example** (Failing queues with a cause synchronously)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, string>(10)
 *
 *   // Create a cause and fail the queue synchronously
 *   const cause = Cause.fail("Processing error")
 *   const failed = Queue.failCauseUnsafe(queue, cause)
 *
 *   // The queue is now done with the specified failure cause
 *   const exit = Queue.takeUnsafe(queue)
 *   return [failed, exit]
 * })
 *
 * await Effect.runPromise(program) // => [true, Exit.failCause(Cause.fail("Processing error"))]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const failCauseUnsafe = (self, cause) => {
  if (self.state._tag !== "Open") return false;
  const exit = exitFailCause(cause);
  const fail = exitZipRight(exit, exitFailDone);
  if (self.state.offers.size === 0 && self.messages.length === 0) {
    finalize(self, fail);
    return true;
  }
  self.state = {
    ...self.state,
    _tag: "Closing",
    exit: fail,
  };
  scheduleReleaseTaker(self);
  return true;
};
/**
 * Signals queue completion.
 *
 * **When to use**
 *
 * Use to stop accepting new offers while allowing already queued messages to be
 * consumed.
 *
 * **Details**
 *
 * Returns `false` if the queue is already done.
 *
 * **Example** (Ending queues)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(10)
 *
 *   // Add some messages
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *
 *   // Signal completion - no more messages will be accepted
 *   const ended = yield* Queue.end(queue)
 *
 *   // Trying to offer more messages will return false
 *   const offerResult = yield* Queue.offer(queue, 3)
 *
 *   // But we can still take existing messages
 *   const message = yield* Queue.take(queue)
 *   return [ended, offerResult, message]
 * })
 *
 * await Effect.runPromise(program) // => [true, false, 1]
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const end = (self) => failCause$2(self, causeFail(Done()));
/**
 * Signals queue completion synchronously.
 *
 * **When to use**
 *
 * Use when implementing low-level queue integrations that must complete a queue
 * without wrapping the operation in `Effect`.
 *
 * **Details**
 *
 * Returns `false` if the queue is already done.
 *
 * **Gotchas**
 *
 * This is an unsafe operation that directly modifies the queue without Effect wrapping.
 *
 * **Example** (Ending queues synchronously)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * // Create a queue and use unsafe operations
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(10)
 *
 *   // Add some messages
 *   Queue.offerUnsafe(queue, 1)
 *   Queue.offerUnsafe(queue, 2)
 *
 *   // End the queue synchronously
 *   const ended = Queue.endUnsafe(queue)
 *
 *   // Existing messages can still be consumed while the queue is closing
 *   const states = [queue.state._tag]
 *
 *   Queue.takeUnsafe(queue)
 *   Queue.takeUnsafe(queue)
 *
 *   // After buffered messages are consumed, the queue is done
 *   states.push(queue.state._tag)
 *   return { ended, states }
 * })
 *
 * await Effect.runPromise(program) // => { ended: true, states: ["Closing", "Done"] }
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const endUnsafe = (self) => failCauseUnsafe(self, causeFail(Done()));
/**
 * Interrupts the queue gracefully, transitioning it to a closing state.
 *
 * **Details**
 *
 * This operation stops accepting new offers but allows existing messages to be consumed.
 * Once all messages are drained, the queue transitions to the Done state with an interrupt cause.
 *
 * **Example** (Interrupting queues gracefully)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(10)
 *
 *   // Add some messages
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *
 *   // Interrupt gracefully - no more offers accepted, but messages can be consumed
 *   const interrupted = yield* Queue.interrupt(queue)
 *
 *   // Trying to offer more messages will return false
 *   const offerResult = yield* Queue.offer(queue, 3)
 *
 *   // But we can still take existing messages
 *   const message1 = yield* Queue.take(queue)
 *
 *   const message2 = yield* Queue.take(queue)
 *
 *   // After all messages are consumed, queue is done
 *   const isDone = queue.state._tag === "Done"
 *   return { interrupted, offerResult, messages: [message1, message2], isDone }
 * })
 *
 * await Effect.runPromise(program) // => { interrupted: true, offerResult: false, messages: [1, 2], isDone: true }
 * ```
 *
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const interrupt = (self) => withFiber$1((fiber) => failCause$2(self, causeInterrupt(fiber.id)));
/**
 * Shuts down the queue immediately, discarding buffered messages and resuming
 * pending operations.
 *
 * **Details**
 *
 * Returns `true` when the queue is shut down by this call, or `false` when it
 * has already been shut down or completed.
 *
 * **Example** (Shutting down queues)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(2)
 *
 *   // Add messages
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *
 *   // Shutdown clears buffered messages and prevents further offers
 *   const wasShutdown = yield* Queue.shutdown(queue)
 *
 *   // Queue is now done and cleared
 *   const size = yield* Queue.size(queue)
 *   return { wasShutdown, size }
 * })
 *
 * await Effect.runPromise(program) // => { wasShutdown: true, size: 0 }
 * ```
 *
 * @see {@link shutdownUnsafe} for synchronous shutdown
 * @stability stable
 * @category completion
 * @since 2.0.0
 */
const shutdown = (self) => sync$3(() => shutdownUnsafe(self));
/**
 * Shuts down the queue synchronously, discarding buffered messages and resuming
 * pending operations.
 *
 * **When to use**
 *
 * Use when a synchronous callback must discard buffered messages and settle
 * pending queue operations before returning.
 *
 * **Details**
 *
 * An open queue completes with an interruption. A queue already closing retains
 * its completion cause. Call `failCauseUnsafe` first to shut down with a specific
 * failure. Returns `true` when the queue is shut down by this call, or `false`
 * when it has already been shut down or completed.
 *
 * @see {@link shutdown} for the effectful variant
 * @see {@link failCauseUnsafe} to set a failure before discarding buffered messages
 * @stability stable
 * @category completion
 * @since 4.0.0
 */
const shutdownUnsafe = (self) => {
  if (self.state._tag === "Done") return false;
  clear$1(self.messages);
  const offers = self.state.offers;
  finalize(self, self.state._tag === "Open" ? exitInterrupt : self.state.exit);
  for (const entry of offers) resumeUnoffered(entry);
  return true;
};
/**
 * Takes and returns all currently buffered messages without waiting for more.
 *
 * **Details**
 *
 * Returns an empty array when the queue is empty or has completed normally. If
 * the queue has failed, the effect fails with the queue's error.
 *
 * **Example** (Clearing queued values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(10)
 *
 *   // Add several messages
 *   yield* Queue.offerAll(queue, [1, 2, 3, 4, 5])
 *
 *   // Clear all messages from the queue
 *   const messages = yield* Queue.clear(queue)
 *
 *   // Queue is now empty
 *   const size = yield* Queue.size(queue)
 *
 *   // Clearing empty queue returns empty array
 *   const empty = yield* Queue.clear(queue)
 *   return { messages, size, empty }
 * })
 *
 * await Effect.runPromise(program) // => { messages: [1, 2, 3, 4, 5], size: 0, empty: [] }
 * ```
 *
 * @stability stable
 * @category taking
 * @since 4.0.0
 */
const clear = (self) =>
  suspendTake(() => {
    if (self.state._tag === "Done") return catchDone(self.state.exit, () => succeed$4([]));
    const messages = takeAllUnsafe(self);
    releaseCapacity(self);
    return succeed$4(messages);
  });
/**
 * Takes all currently available messages, waiting until at least one message
 * is available when the queue is empty.
 *
 * **When to use**
 *
 * Use when consumers should process the next non-empty batch of buffered
 * messages instead of repeatedly taking one message at a time.
 *
 * **Details**
 *
 * Returns a non-empty array. If the queue completes or fails before a message
 * can be taken, the effect fails with the queue's terminal error.
 *
 * **Example** (Taking all available values)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(5)
 *
 *   // Add several messages
 *   yield* Queue.offerAll(queue, [1, 2, 3, 4, 5])
 *
 *   // Take all available messages
 *   const messages1 = yield* Queue.takeAll(queue)
 *   return messages1
 * })
 *
 * await Effect.runPromise(program) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 2.0.0
 */
const takeAll = (self) => takeBetween(self, 1, Number.POSITIVE_INFINITY);
/**
 * Takes all messages from the queue, until the queue has errored or is done.
 *
 * **Example** (Collecting values until completion)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(5)
 *
 *   // Add several messages
 *   yield* Queue.offerAll(queue, [1, 2, 3, 4, 5])
 *   yield* Queue.end(queue)
 *
 *   // Collect all available messages
 *   return yield* Queue.collect(queue)
 * })
 *
 * await Effect.runPromise(program) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 4.0.0
 */
const collect = (self) =>
  suspend$3(() => {
    const out = empty$2();
    return as$1(
      catchDone(
        whileLoop({
          while: constTrue,
          body: constant(takeAll(self)),
          step(items) {
            for (let i = 0; i < items.length; i++) out.push(items[i]);
          },
        }),
        () => void_$1,
      ),
      out,
    );
  });
/**
 * Takes between `min` and `max` messages from the queue.
 *
 * **Details**
 *
 * The operation waits when fewer than the required minimum messages are
 * available. It returns at most `max` messages. Finite fractional bounds are
 * rounded down, while `NaN` and non-positive bounds are treated as `0`. If the
 * queue is closing, drains the currently available messages even when fewer
 * than `min` are available. Once the queue is done, the effect fails with the
 * queue's terminal error.
 *
 * **Example** (Taking a bounded batch of values)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(10)
 *
 *   // Add several messages
 *   yield* Queue.offerAll(queue, [1, 2, 3, 4, 5, 6, 7, 8])
 *
 *   // Take between 2 and 5 messages
 *   const batch1 = yield* Queue.takeBetween(queue, 2, 5)
 *
 *   // Take between 1 and 10 messages (but only 3 remain)
 *   const batch2 = yield* Queue.takeBetween(queue, 1, 10)
 *
 *   // No more messages available, will wait or return done
 *   // const batch3 = yield* Queue.takeBetween(queue, 1, 3)
 *   return [batch1, batch2]
 * })
 *
 * await Effect.runPromise(program) // => [[1, 2, 3, 4, 5], [6, 7, 8]]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 2.0.0
 */
const takeBetween = /*#__PURE__*/ dual(3, (self, min, max) => {
  min = normalize(min);
  max = normalize(max);
  return suspendTake(
    () =>
      takeBetweenUnsafe(self, min, max) ??
      andThen$1(
        awaitTake(self, () => canTake(self, min)),
        takeBetween(self, min, max),
      ),
  );
});
/**
 * Takes a single message from the queue, or wait for a message to be
 * available.
 *
 * **Details**
 *
 * If the queue is done, it will fail with `Done`. If the
 * queue fails, the Effect will fail with the error.
 *
 * **Example** (Taking one value)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<string, Cause.Done>(3)
 *
 *   // Add some messages
 *   yield* Queue.offer(queue, "first")
 *   yield* Queue.offer(queue, "second")
 *
 *   // Take messages one by one
 *   const msg1 = yield* Queue.take(queue)
 *   const msg2 = yield* Queue.take(queue)
 *
 *   // End the queue
 *   yield* Queue.end(queue)
 *
 *   // Taking from an ended queue fails with Done
 *   const result = yield* Effect.exit(Queue.take(queue))
 *   return [[msg1, msg2], result]
 * })
 *
 * await Effect.runPromise(program) // => [["first", "second"], Exit.fail(Cause.Done())]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 2.0.0
 */
const take$1 = (self) =>
  suspendTake(
    () =>
      takeUnsafe(self) ??
      andThen$1(
        awaitTake(self, () => canTake(self, 1)),
        take$1(self),
      ),
  );
/**
 * Attempts to take one item from the queue without waiting.
 *
 * **Details**
 *
 * Returns `Option.some` when an item is immediately available. Returns
 * `Option.none` when no item is available, when the queue is done, or when the
 * immediate take observes a queue failure.
 *
 * **Example** (Polling without blocking)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(10)
 *
 *   // Poll returns Option.none if empty
 *   const maybe1 = yield* Queue.poll(queue)
 *
 *   // Add an item
 *   yield* Queue.offer(queue, 42)
 *
 *   // Poll returns Option.some with the item
 *   const maybe2 = yield* Queue.poll(queue)
 *   return [maybe1, maybe2]
 * })
 *
 * await Effect.runPromise(program) // => [Option.none(), Option.some(42)]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 2.0.0
 */
const poll = (self) =>
  suspendTake(() => {
    const result = takeUnsafe(self);
    if (result === void 0) return succeed$4(none());
    if (result._tag === "Success") return succeed$4(some(result.value));
    return succeed$4(none());
  });
/**
 * Attempts to take one message from the queue synchronously.
 *
 * **When to use**
 *
 * Use when polling queue internals must not suspend or register a waiting taker,
 * and `undefined` is an acceptable result for an empty queue.
 *
 * **Details**
 *
 * Returns an `Exit` for an immediately available message or for the queue's
 * terminal state. Returns `undefined` when no message is immediately available.
 * This operation does not wait or register a taker.
 *
 * **Example** (Taking one value synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Queue } from "effect"
 *
 * // Create a queue and use unsafe operations
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number>(10)
 *
 *   // Add some messages
 *   Queue.offerUnsafe(queue, 1)
 *   Queue.offerUnsafe(queue, 2)
 *
 *   // Take a message synchronously
 *   const result1 = Queue.takeUnsafe(queue)
 *
 *   const result2 = Queue.takeUnsafe(queue)
 *
 *   // No more messages - returns undefined
 *   const result3 = Queue.takeUnsafe(queue)
 *   return [result1, result2, result3]
 * })
 *
 * await Effect.runPromise(program) // => [Exit.succeed(1), Exit.succeed(2), undefined]
 * ```
 *
 * @stability stable
 * @category taking
 * @since 4.0.0
 */
const takeUnsafe = (self) => {
  if (self.state._tag === "Done") return self.state.exit;
  if (self.messages.length > 0) {
    const message = take$3(self.messages);
    releaseCapacity(self);
    return exitSucceed(message);
  } else if (self.capacity <= 0 && self.state.offers.size > 0) {
    const message = takeOfferUnsafe(self.state.offers);
    releaseCapacity(self);
    return exitSucceed(message);
  }
};
/**
 * Returns the current number of buffered messages in the queue synchronously.
 *
 * **When to use**
 *
 * Use when you need an immediate `Queue` size snapshot for diagnostics or
 * internals and do not need the read wrapped in `Effect`.
 *
 * **Details**
 *
 * After `endUnsafe`, a queue remains `Closing` while buffered messages are
 * drained, and its size continues to include those messages. A `Done` queue
 * reports a size of `0`. This unsafe operation reads the queue state directly
 * without Effect wrapping.
 *
 * **Example** (Checking queue size synchronously)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(10)
 *
 *   // Check size of empty queue
 *   const size1 = Queue.sizeUnsafe(queue)
 *
 *   // Add some messages
 *   Queue.offerUnsafe(queue, 1)
 *   Queue.offerUnsafe(queue, 2)
 *   Queue.offerUnsafe(queue, 3)
 *
 *   // Check size after adding messages
 *   const size2 = Queue.sizeUnsafe(queue)
 *
 *   // End the queue
 *   Queue.endUnsafe(queue)
 *
 *   // Ending retains the buffered size while the queue is Closing
 *   const size3 = Queue.sizeUnsafe(queue)
 *   return [size1, size2, size3]
 * })
 *
 * await Effect.runPromise(program) // => [0, 3, 3]
 * ```
 *
 * @stability stable
 * @category sizes
 * @since 4.0.0
 */
const sizeUnsafe = (self) => (self.state._tag === "Done" ? 0 : self.messages.length);
const exitFalse = /*#__PURE__*/ exitSucceed(false);
const exitTrue = /*#__PURE__*/ exitSucceed(true);
const exitFailDone = /*#__PURE__*/ exitFail(/*#__PURE__*/ Done());
const exitInterrupt = /*#__PURE__*/ exitInterrupt$1();
const releaseTakers = (self) => {
  if (self.state._tag === "Done" || self.state.takers.size === 0) return;
  for (const taker of self.state.takers) {
    if (!taker.ready()) continue;
    self.state.takers.delete(taker);
    taker.resume(exitVoid);
    if (self.messages.length === 0) break;
  }
};
const scheduleReleaseTaker = (self) => {
  if (self.scheduleRunning || self.state._tag === "Done" || self.state.takers.size === 0) return;
  self.scheduleRunning = true;
  self.dispatcher.scheduleTask(() => {
    self.scheduleRunning = false;
    releaseTakers(self);
  }, 0);
};
const takeBetweenUnsafe = (self, min, max) => {
  if (self.state._tag === "Done") return self.state.exit;
  else if (max <= 0 || min <= 0) return exitSucceed([]);
  else if (!canTake(self, min)) return;
  const messages =
    self.messages.length > 0 ? takeN(self.messages, max) : [takeOfferUnsafe(self.state.offers)];
  releaseCapacity(self);
  return exitSucceed(messages);
};
const suspendTake = /*#__PURE__*/ makePrimitive({
  op: "QueueTake",
  [evaluate](fiber) {
    const effect = this[args]();
    return isExit(effect) ? effect[evaluate](fiber) : effect;
  },
});
const canTake = (self, min) =>
  self.messages.length >= (self.state._tag === "Closing" ? 1 : Math.min(min, self.capacity || 1)) ||
  (self.capacity <= 0 && self.state._tag !== "Done" && self.state.offers.size > 0);
const awaitTake = (self, ready) =>
  callback$2((resume) => {
    if (self.state._tag === "Done") return resume(self.state.exit);
    if (ready()) return resume(exitVoid);
    const taker = {
      ready,
      resume,
    };
    self.state.takers.add(taker);
    return sync$3(() => {
      if (self.state._tag !== "Done") self.state.takers.delete(taker);
    });
  });
const offerOrWait = (self, message) =>
  callback$2((resume) =>
    offerUnsafe(self, message)
      ? resume(exitTrue)
      : waitToOffer(self, {
          _tag: "Single",
          message,
          resume,
        }),
  );
const waitToOffer = (self, entry) => {
  if (self.state._tag !== "Open") return resumeUnoffered(entry);
  const offers = self.state.offers;
  offers.add(entry);
  return sync$3(() => {
    if (self.state._tag === "Done") return;
    offers.delete(entry);
    if (self.state._tag === "Closing" && offers.size === 0 && self.messages.length === 0)
      finalize(self, self.state.exit);
  });
};
const resumeUnoffered = (entry) =>
  entry._tag === "Single"
    ? entry.resume(exitFalse)
    : entry.resume(exitSucceed(entry.remaining.slice(entry.offset)));
const takeOfferUnsafe = (offers) => {
  const entry = offers.values().next().value;
  if (entry._tag === "Single") {
    offers.delete(entry);
    entry.resume(exitTrue);
    return entry.message;
  }
  const message = entry.remaining[entry.offset++];
  if (entry.offset === entry.remaining.length) {
    offers.delete(entry);
    entry.resume(exitSucceed([]));
  }
  return message;
};
const releaseCapacity = (self) => {
  if (self.state._tag === "Done") return isDoneCause(self.state.exit.cause);
  else if (self.state.offers.size === 0) {
    if (self.state._tag === "Closing" && self.messages.length === 0) {
      finalize(self, self.state.exit);
      return isDoneCause(self.state.exit.cause);
    }
    return false;
  }
  for (const entry of self.state.offers) {
    let n = self.capacity - self.messages.length;
    if (n <= 0) break;
    else if (entry._tag === "Single") {
      append(self.messages, entry.message);
      self.state.offers.delete(entry);
      entry.resume(exitTrue);
    } else {
      for (; entry.offset < entry.remaining.length; entry.offset++) {
        if (n === 0) return false;
        append(self.messages, entry.remaining[entry.offset]);
        n--;
      }
      self.state.offers.delete(entry);
      entry.resume(exitSucceed([]));
    }
    const state = self.state;
    if (state._tag === "Done") return isDoneCause(state.exit.cause);
  }
  return false;
};
const takeAllUnsafe = (self) => {
  if (self.messages.length > 0) {
    const messages = takeAll$2(self.messages);
    releaseCapacity(self);
    return messages;
  } else if (self.state._tag !== "Done" && self.state.offers.size > 0) {
    const messages = [takeOfferUnsafe(self.state.offers)];
    releaseCapacity(self);
    return messages;
  }
  return [];
};
const finalize = (self, exit) => {
  if (self.state._tag === "Done") return;
  const openState = self.state;
  self.state = {
    _tag: "Done",
    exit,
  };
  for (const taker of openState.takers) taker.resume(exit);
  openState.takers.clear();
  for (const awaiter of openState.awaiters) awaiter(exit);
  openState.awaiters.clear();
};
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Semaphore.js
/**
 * Creates a `Semaphore` synchronously with the specified total
 * number of permits.
 *
 * **When to use**
 *
 * Use to construct a semaphore synchronously when an immediate value is
 * required outside an Effect workflow.
 *
 * **Example** (Creating an unsafe semaphore)
 *
 * ```ts import.meta.vitest
 * import { Effect, Semaphore } from "effect"
 *
 * const semaphore = Semaphore.makeUnsafe(3)
 *
 * const task = (id: number) =>
 *   semaphore.withPermits(1)(
 *     Effect.gen(function*() {
 *       yield* Effect.yieldNow
 *       return id
 *     })
 *   )
 *
 * // Only 3 tasks can run concurrently
 * const program = Effect.all([
 *   task(1),
 *   task(2),
 *   task(3),
 *   task(4),
 *   task(5)
 * ], { concurrency: "unbounded" })
 *
 * await Effect.runPromise(program) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const makeUnsafe = (permits) => new SemaphoreImpl(permits);
const waitForPermits = (self, n, effect) =>
  callback$2((resume) => {
    if (self.free >= n) return resume(effect);
    const observer = () => {
      if (self.free < n) return;
      self.waiters.delete(observer);
      resume(effect);
    };
    self.waiters.add(observer);
    return sync$3(() => {
      self.waiters.delete(observer);
    });
  });
var SemaphoreImpl = class {
  waiters = /*#__PURE__*/ new Set();
  taken = 0;
  permits;
  constructor(permits) {
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
  take(n) {
    const take = suspend$3(() => {
      if (this.free < n) return waitForPermits(this, n, take);
      this.taken += n;
      return succeed$4(n);
    });
    return take;
  }
  takeIfAvailable(n) {
    return suspend$3(() => {
      if (this.free < n) return succeed$4(false);
      this.taken += n;
      return succeed$4(true);
    });
  }
  releaseUnsafe(fiber, n) {
    this.taken -= n;
    if (this.waiters.size > 0)
      fiber.currentDispatcher.scheduleTask(() => {
        for (const observer of this.waiters) {
          if (this.free <= 0) break;
          observer();
        }
      }, 0);
    return this.free;
  }
  resize(permits) {
    return withFiber$1((fiber) => {
      this.permits = permits;
      if (this.free < 0) return void_$1;
      this.releaseUnsafe(fiber, 0);
      return void_$1;
    });
  }
  release(n) {
    return withFiber$1((fiber) => succeed$4(this.releaseUnsafe(fiber, n)));
  }
  get releaseAll() {
    return withFiber$1((fiber) => succeed$4(this.releaseUnsafe(fiber, this.taken)));
  }
  withPermits(n) {
    return (self) =>
      uninterruptibleMask((restore) => {
        const acquire = suspend$3(() => {
          if (this.free < n) {
            const wait = waitForPermits(this, n, void_$1);
            return flatMap$3(restore(wait), () => acquire);
          }
          this.taken += n;
          return onExitPrimitive(
            restore(self),
            () => {
              this.releaseUnsafe(getCurrentFiber(), n);
            },
            true,
          );
        });
        return acquire;
      });
  }
  withPermit = /*#__PURE__*/ this.withPermits(1);
  withPermitsIfAvailable(n) {
    return (self) =>
      uninterruptibleMask((restore) => {
        if (this.free < n) return succeedNone;
        this.taken += n;
        return onExitPrimitive(
          restore(asSome(self)),
          () => {
            this.releaseUnsafe(getCurrentFiber(), n);
          },
          true,
        );
      });
  }
};
/**
 * Creates a `Semaphore` initialized with the specified total number of permits.
 *
 * **When to use**
 *
 * Use to create a semaphore inside Effect code for bounding concurrency with
 * automatic or manual permit management.
 *
 * **Example** (Creating a semaphore)
 *
 * ```ts import.meta.vitest
 * import { Effect, Semaphore } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const semaphore = yield* Semaphore.make(2)
 *
 *   const task = (id: number) =>
 *     semaphore.withPermits(1)(
 *       Effect.gen(function*() {
 *         yield* Effect.yieldNow
 *         return id
 *       })
 *     )
 *
 *   // Run 4 tasks, but only 2 can run concurrently
 *   return yield* Effect.all([task(1), task(2), task(3), task(4)])
 * })
 *
 * await Effect.runPromise(program) // => [1, 2, 3, 4]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const make$1 = (permits) => sync$3(() => new SemaphoreImpl(permits));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Channel.js
/**
 * Provides low-level building blocks for streaming data through Effect.
 *
 * A `Channel` can read input elements, write output elements, fail with a typed
 * error, and finish with a typed result while managing resources safely.
 * Streams and sinks are built on channels, so most application code uses those
 * higher-level modules instead. This module is useful when implementing stream
 * operators or specialized streaming workflows.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Runtime identifier stored on `Channel` values and used by `isChannel` to
 * recognize them.
 *
 * @stability stable
 * @category type IDs
 * @since 4.0.0
 */
const TypeId$3 = "~effect/Channel";
/**
 * Checks whether a value is a `Channel`.
 *
 * **Example** (Checking for channels)
 *
 * ```ts import.meta.vitest
 * import { Channel } from "effect"
 *
 * const channel = Channel.succeed(42)
 * Channel.isChannel(channel) // => true
 * Channel.isChannel("not a channel") // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 3.5.4
 */
const isChannel = (u) => hasProperty(u, TypeId$3);
const ChannelProto = {
  [TypeId$3]: {
    _Env: identity,
    _InErr: identity,
    _InElem: identity,
    _OutErr: identity,
    _OutElem: identity,
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Creates a `Channel` from a transformation function that operates on upstream pulls.
 *
 * **Example** (Creating channels from transforms)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.fromTransform((upstream, scope) =>
 *   Effect.succeed(upstream)
 * )
 * await Effect.runPromise(Channel.runCollect(channel)) // => []
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromTransform$1 = (transform) => {
  const self = Object.create(ChannelProto);
  self.transform = (upstream, scope) =>
    catchCause$2(transform(upstream, scope), (cause) => succeed$2(failCause$3(cause)));
  return self;
};
/**
 * Transforms a Channel by applying a function to its Pull implementation.
 *
 * **Example** (Transforming pull behavior)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Transform a channel by modifying its pull behavior
 * const originalChannel = Channel.fromIterable([1, 2, 3])
 *
 * const transformedChannel = Channel.transformPull(
 *   originalChannel,
 *   (pull, scope) =>
 *     Effect.succeed(
 *       Effect.map(pull, (value) => value * 2)
 *     )
 * )
 * await Effect.runPromise(Channel.runCollect(transformedChannel)) // => [2, 4, 6]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const transformPull$1 = (self, f) =>
  fromTransform$1((upstream, scope) =>
    flatMap$2(toTransform(self)(upstream, scope), (pull) => f(pull, scope)),
  );
/**
 * Creates a `Channel` from an `Effect` that produces a `Pull`.
 *
 * **Example** (Creating channels from pulls)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Effect } from "effect"
 *
 * const channel = Channel.fromPull(Effect.sync(() => {
 *   let emitted = false
 *   return Effect.suspend(() => {
 *     if (emitted) return Cause.done()
 *     emitted = true
 *     return Effect.succeed(42)
 *   })
 * }))
 * await Effect.runPromise(Channel.runCollect(channel)) // => [42]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromPull$1 = (effect) => fromTransform$1((_, __) => effect);
/**
 * Creates a `Channel` from a transformation function that operates on upstream
 * pulls, but also provides a forked scope that closes when the resulting
 * Channel completes.
 *
 * **When to use**
 *
 * Use when building channels that require scoped resource lifecycle management,
 * providing both the channel scope and a forked scope that automatically closes
 * when the channel completes.
 *
 * @see {@link fromTransform} for a simpler transformation without a forked scope
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromTransformBracket = (f) =>
  fromTransform$1(
    fnUntraced(function* (upstream, scope) {
      const closableScope = forkUnsafe(scope);
      const onCause = (cause) => close(closableScope, doneExitFromCause(cause));
      const pull = yield* onError(f(upstream, scope, closableScope), onCause);
      return onError(pull, onCause);
    }),
  );
/**
 * Converts a `Channel` back to its underlying transformation function.
 *
 * **Example** (Extracting channel transforms)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.succeed(42)
 * const transform = Channel.toTransform(channel)
 * typeof transform // => "function"
 * Effect.runSync(Channel.runCollect(channel)) // => [42]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toTransform = (channel) => channel.transform;
/**
 * The default chunk size used by channels for batching operations.
 *
 * **Example** (Reading the default chunk size)
 *
 * ```ts import.meta.vitest
 * import { Channel } from "effect"
 *
 * Channel.DefaultChunkSize // => 4096
 * ```
 *
 * @stability stable
 * @category constants
 * @since 4.0.0
 */
const DefaultChunkSize = 4096;
const asyncQueue = (scope, f, options) =>
  make$2({
    capacity: options?.bufferSize,
    strategy: options?.strategy,
  }).pipe(
    tap$1((queue) => addFinalizer(scope, shutdown(queue))),
    tap$1((queue) =>
      provide(f(queue), scope).pipe(
        catchCause$2((cause) => failCause$2(queue, cause)),
        forkIn(scope),
      ),
    ),
  );
/**
 * Creates a `Channel` that interacts with a callback function using a queue, emitting arrays.
 *
 * **Example** (Creating array channels from callbacks)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Queue } from "effect"
 *
 * const channel = Channel.callbackArray<number>(Effect.fn(function*(queue) {
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *   yield* Queue.end(queue)
 * }))
 * await Effect.runPromise(Channel.runCollect(channel)) // => [[1, 2]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const callbackArray = (f, options) =>
  fromTransform$1((_, scope) => map$2(asyncQueue(scope, f, options), takeAll));
/**
 * Creates a `Channel` that lazily evaluates to another channel.
 *
 * **Example** (Suspending channel creation)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.suspend(() => Channel.succeed(42))
 * Effect.runSync(Channel.runCollect(channel)) // => [42]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const suspend$1 = (evaluate) =>
  fromTransform$1((upstream, scope) => suspend$2(() => toTransform(evaluate())(upstream, scope)));
/**
 * Creates a `Channel` from an iterator.
 *
 * **Example** (Creating channels from iterators)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * const channel = Channel.fromIterator(() => numbers[Symbol.iterator]())
 * Effect.runSync(Channel.runCollect(channel)) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromIterator = (iterator) =>
  fromPull$1(
    sync$2(() => {
      const iter = iterator();
      return suspend$2(() => {
        const state = iter.next();
        return state.done ? done(state.value) : succeed$2(state.value);
      });
    }),
  );
/**
 * Creates a `Channel` that emits all elements from an array.
 *
 * **Example** (Creating channels from arrays)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.fromArray([1, 2, 3, 4, 5])
 * Effect.runSync(Channel.runCollect(channel)) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromArray$1 = (array) =>
  fromPull$1(
    sync$2(() => {
      let index = 0;
      return suspend$2(() => (index >= array.length ? done() : succeed$2(array[index++])));
    }),
  );
/**
 * Creates a `Channel` from an iterator that emits arrays of elements.
 *
 * **Details**
 *
 * Finite fractional `chunkSize` values are rounded down. `NaN` and non-positive
 * values are treated as `1` so every successful pull emits a non-empty array.
 *
 * **Example** (Batching iterator output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create a channel from a simple iterator
 * const numberIterator = (): Iterator<number, string> => {
 *   let count = 0
 *   return {
 *     next: () => {
 *       if (count < 3) {
 *         return { value: count++, done: false }
 *       }
 *       return { value: "finished", done: true }
 *     }
 *   }
 * }
 *
 * const channel = Channel.fromIteratorArray(() => numberIterator(), 2)
 * Effect.runSync(Channel.runCollect(channel)) // => [[0, 1], [2]]
 * ```
 *
 * **Example** (Batching generator output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create channel from a generator function
 * function* fibonacci(): Generator<number, void, unknown> {
 *   let a = 0, b = 1
 *   for (let i = 0; i < 5; i++) {
 *     yield a
 *     ;[a, b] = [b, a + b]
 *   }
 * }
 *
 * const fibChannel = Channel.fromIteratorArray(() => fibonacci(), 3)
 * Effect.runSync(Channel.runCollect(fibChannel)) // => [[0, 1, 1], [2, 3]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromIteratorArray = (iterator, chunkSize = DefaultChunkSize) => {
  const size = normalizeNonEmpty(chunkSize);
  return fromPull$1(
    sync$2(() => {
      const iter = iterator();
      let done$15 = none();
      return suspend$2(() => {
        if (done$15._tag === "Some") return done(done$15.value);
        const buffer = [];
        while (buffer.length < size) {
          const state = iter.next();
          if (state.done) {
            if (buffer.length === 0) return done(state.value);
            done$15 = some(state.value);
            break;
          }
          buffer.push(state.value);
        }
        return succeed$2(buffer);
      });
    }),
  );
};
/**
 * Creates a `Channel` that emits arrays of elements from an iterable.
 *
 * **Details**
 *
 * Finite fractional `chunkSize` values are rounded down. `NaN` and non-positive
 * values are treated as `1`.
 *
 * **Example** (Batching iterable output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * const channel = Channel.fromIterableArray(numbers, 4)
 * Effect.runSync(Channel.runCollect(channel)) // => [[1, 2, 3, 4], [5]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromIterableArray = (iterable, chunkSize = DefaultChunkSize) =>
  fromIteratorArray(() => iterable[Symbol.iterator](), chunkSize);
/**
 * Creates a `Channel` that emits a single value and then ends.
 *
 * **Example** (Creating channels that succeed)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.succeed(42)
 * Effect.runSync(Channel.runCollect(channel)) // => [42]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeed$1 = (value) => fromEffect$1(succeed$2(value));
/**
 * Creates a `Channel` that emits a single value computed by a lazy evaluation.
 *
 * **Example** (Computing values lazily)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * let requests = 0
 *
 * const channel = Channel.sync(() => {
 *   requests += 1
 *   return `request-${requests}`
 * })
 * Effect.runSync(Channel.runCollect(channel)) // => ["request-1"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sync$1 = (evaluate) => fromEffect$1(sync$2(evaluate));
/**
 * Represents a `Channel` that emits no elements.
 *
 * **Example** (Creating empty channels)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create an empty channel
 * const emptyChannel = Channel.empty
 *
 * // Use empty channel in composition
 * const combined = Channel.concatWith(emptyChannel, () => Channel.succeed(42))
 * // Will immediately provide the second channel's output
 *
 * // Empty channel can be used as a no-op in conditional logic
 * const conditionalChannel = (shouldEmit: boolean) =>
 *   shouldEmit ? Channel.succeed("data") : Channel.empty
 *
 * Effect.runSync(Channel.runCollect(conditionalChannel(true))) // => ["data"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const empty$1 = /*#__PURE__*/ fromPull$1(/*#__PURE__*/ succeed$2(/*#__PURE__*/ done()));
/**
 * Constructs a channel that fails immediately with the specified error.
 *
 * **Example** (Failing with an error)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Exit } from "effect"
 *
 * const failedChannel = Channel.fail("Something went wrong")
 * Effect.runSync(Effect.exit(Channel.runCollect(failedChannel))) // => Exit.fail("Something went wrong")
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fail$1 = (error) => fromPull$1(succeed$2(fail$3(error)));
/**
 * Constructs a channel that fails immediately with the specified `Cause`.
 *
 * **When to use**
 *
 * Use when the channel failure must preserve a full `Cause`, such as defects,
 * interruptions, or combined failures.
 *
 * **Example** (Failing with causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Effect, Exit } from "effect"
 *
 * const simpleCause = Cause.fail("Simple error")
 * const failedChannel = Channel.failCause(simpleCause)
 * Effect.runSync(Effect.exit(Channel.runCollect(failedChannel))) // => Exit.failCause(simpleCause)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const failCause$1 = (cause) => fromPull$1(failCause$3(cause));
/**
 * Constructs a channel that fails immediately with the specified defect.
 *
 * **Example** (Dying with defects)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Effect, Exit } from "effect"
 *
 * const defect = "Unrecoverable error"
 * const diedChannel = Channel.die(defect)
 * Effect.runSync(Effect.exit(Channel.runCollect(diedChannel))) // => Exit.failCause(Cause.die(defect))
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const die$1 = (defect) => failCause$1(die$2(defect));
/**
 * Uses an effect to write a single value to the channel.
 *
 * **Example** (Creating channels from effects)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const successChannel = Channel.fromEffect(
 *   Effect.succeed("Hello from effect!")
 * )
 * Effect.runSync(Channel.runCollect(successChannel)) // => ["Hello from effect!"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromEffect$1 = (effect) =>
  fromPull$1(
    sync$2(() => {
      let done$16 = false;
      return suspend$2(() => {
        if (done$16) return done();
        done$16 = true;
        return effect;
      });
    }),
  );
/**
 * Uses an effect and discards its result.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromEffectDrain$1 = (effect) => fromPull$1(flatMap$2(effect, () => done()));
/**
 * Creates a channel from a queue that emits arrays of elements.
 *
 * **Example** (Creating batched channels from queues)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Effect, Queue } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.bounded<number, Cause.Done>(4)
 *   yield* Queue.offerAll(queue, [1, 2, 3, 4])
 *   yield* Queue.end(queue)
 *   const arrayChannel = Channel.fromQueueArray(queue)
 *   return yield* Channel.runCollect(arrayChannel)
 * })
 * await Effect.runPromise(program) // => [[1, 2, 3, 4]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromQueueArray = (queue) => fromPull$1(succeed$2(takeAll(queue)));
/**
 * Creates a channel from a PubSub subscription that outputs arrays of values.
 *
 * **Details**
 *
 * This constructor creates a channel that reads from a PubSub subscription and outputs
 * arrays of values in chunks. It's useful when you want to process multiple values at once
 * for better performance.
 *
 * **Example** (Batching subscription values)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Option, PubSub } from "effect"
 *
 * class StreamError extends Data.TaggedError("StreamError")<{
 *   readonly message: string
 * }> {}
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<number>(16)
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Create a channel that reads arrays of values
 *   const channel = Channel.fromSubscriptionArray(subscription)
 *
 *   // Publish some values
 *   yield* PubSub.publish(pubsub, 1)
 *   yield* PubSub.publish(pubsub, 2)
 *   yield* PubSub.publish(pubsub, 3)
 *   yield* PubSub.publish(pubsub, 4)
 *
 *   // The channel will output arrays like [1, 2, 3] and [4]
 *   return channel
 * })
 * const result = Effect.scoped(Effect.flatMap(program, Channel.runHead))
 * await Effect.runPromise(result) // => Option.some([1, 2, 3, 4])
 * ```
 *
 * **Example** (Processing subscription values in batches)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Option, PubSub } from "effect"
 *
 * class BatchProcessingError extends Data.TaggedError("BatchProcessingError")<{
 *   readonly reason: string
 * }> {}
 *
 * const batchProcessor = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.bounded<string>(32)
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   // Create a channel that processes items in batches
 *   const batchChannel = Channel.fromSubscriptionArray(subscription)
 *
 *   // Transform to process each batch
 *   const processedChannel = Channel.map(batchChannel, (batch) =>
 *     batch.map((item) => item.toUpperCase())
 *   )
 *
 *   yield* PubSub.publishAll(pubsub, ["one", "two"])
 *   return processedChannel
 * })
 * const batch = Effect.scoped(Effect.flatMap(batchProcessor, Channel.runHead))
 * await Effect.runPromise(batch) // => Option.some(["ONE", "TWO"])
 * ```
 *
 * **Example** (Aggregating subscription metrics)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Option, PubSub } from "effect"
 *
 * const metricsAggregator = Effect.gen(function*() {
 *   const metricsPubSub = yield* PubSub.bounded<
 *     { timestamp: number; value: number }
 *   >(100)
 *   const subscription = yield* PubSub.subscribe(metricsPubSub)
 *
 *   // Create a channel that collects metrics in chunks
 *   const metricsChannel = Channel.fromSubscriptionArray(subscription)
 *
 *   // Transform to calculate aggregate statistics
 *   const aggregatedChannel = Channel.map(metricsChannel, (metrics) => {
 *     const values = metrics.map((m) => m.value)
 *     const sum = values.reduce((a, b) => a + b, 0)
 *     const avg = sum / values.length
 *     const min = Math.min(...values)
 *     const max = Math.max(...values)
 *
 *     return {
 *       count: values.length,
 *       sum,
 *       average: avg,
 *       min,
 *       max,
 *       firstTimestamp: Math.min(...metrics.map((m) => m.timestamp)),
 *       lastTimestamp: Math.max(...metrics.map((m) => m.timestamp))
 *     }
 *   })
 *
 *   yield* PubSub.publish(metricsPubSub, { timestamp: 1, value: 10 })
 *   return aggregatedChannel
 * })
 * const metric = Effect.scoped(Effect.flatMap(metricsAggregator, Channel.runHead))
 * const result = await Effect.runPromise(metric)
 * Option.map(result, ({ count, sum, average, min, max }) => ({ count, sum, average, min, max })) // => Option.some({ count: 1, sum: 10, average: 10, min: 10, max: 10 })
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromSubscriptionArray = (subscription) =>
  fromPull$1(succeed$2(onInterrupt(takeAll$1(subscription), () => done())));
/**
 * Creates a channel from a PubSub that outputs arrays of values.
 *
 * **Details**
 *
 * This constructor creates a channel that reads from a PubSub by automatically
 * subscribing to it and collecting values into arrays. The channel outputs
 * arrays of values in chunks, making it ideal for batch processing scenarios.
 *
 * **Example** (Batching PubSub values)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Option, PubSub } from "effect"
 *
 * class BatchError extends Data.TaggedError("BatchError")<{
 *   readonly message: string
 * }> {}
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.unbounded<number>({ replay: 4 })
 *
 *   // Create a channel that reads arrays of values
 *   const channel = Channel.fromPubSubArray(pubsub)
 *
 *   // Publish some values
 *   yield* PubSub.publish(pubsub, 1)
 *   yield* PubSub.publish(pubsub, 2)
 *   yield* PubSub.publish(pubsub, 3)
 *   yield* PubSub.publish(pubsub, 4)
 *
 *   // The channel will output arrays like [1, 2, 3] and [4]
 *   return channel
 * })
 * const result = Effect.scoped(Effect.flatMap(program, Channel.runHead))
 * await Effect.runPromise(result) // => Option.some([1, 2, 3, 4])
 * ```
 *
 * **Example** (Processing PubSub orders in batches)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Option, PubSub } from "effect"
 *
 * interface Order {
 *   readonly id: string
 *   readonly customerId: string
 *   readonly items: ReadonlyArray<string>
 *   readonly total: number
 *   readonly submittedAt: number
 * }
 *
 * const orderBatchProcessor = Effect.gen(function*() {
 *   const orderPubSub = yield* PubSub.unbounded<Order>({ replay: 1 })
 *
 *   // Create a channel that processes orders in batches
 *   const orderChannel = Channel.fromPubSubArray(orderPubSub)
 *
 *   // Transform to process each batch of orders
 *   const processedChannel = Channel.map(orderChannel, (orderBatch) => {
 *     const totalRevenue = orderBatch.reduce((sum, order) => sum + order.total, 0)
 *     const customerCount = new Set(orderBatch.map((order) =>
 *       order.customerId
 *     )).size
 *
 *     return {
 *       batchSize: orderBatch.length,
 *       totalRevenue,
 *       uniqueCustomers: customerCount,
 *       firstSubmittedAt: Math.min(...orderBatch.map((order) => order.submittedAt)),
 *       orders: orderBatch
 *     }
 *   })
 *
 *   yield* PubSub.publish(orderPubSub, {
 *     id: "1", customerId: "a", items: ["book"], total: 10, submittedAt: 1
 *   })
 *   return processedChannel
 * })
 * const order = Effect.scoped(Effect.flatMap(orderBatchProcessor, Channel.runHead))
 * const result = await Effect.runPromise(order)
 * Option.map(result, (batch) => [batch.batchSize, batch.totalRevenue, batch.uniqueCustomers]) // => Option.some([1, 10, 1])
 * ```
 *
 * **Example** (Processing PubSub logs in batches)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Option, PubSub } from "effect"
 *
 * interface LogEntry {
 *   readonly timestamp: number
 *   readonly level: "info" | "warn" | "error"
 *   readonly message: string
 *   readonly source: string
 * }
 *
 * const logAggregator = Effect.gen(function*() {
 *   const logPubSub = yield* PubSub.unbounded<LogEntry>({ replay: 1 })
 *
 *   // Create a channel that collects logs in batches
 *   const logChannel = Channel.fromPubSubArray(logPubSub)
 *
 *   // Transform to analyze log batches
 *   const analysisChannel = Channel.map(logChannel, (logBatch) => {
 *     const errorCount = logBatch.filter((log) => log.level === "error").length
 *     const warnCount = logBatch.filter((log) => log.level === "warn").length
 *     const infoCount = logBatch.filter((log) => log.level === "info").length
 *
 *     const timeRange = {
 *       start: Math.min(...logBatch.map((log) => log.timestamp)),
 *       end: Math.max(...logBatch.map((log) => log.timestamp))
 *     }
 *
 *     return {
 *       batchId: `${timeRange.start}-${timeRange.end}`,
 *       totalEntries: logBatch.length,
 *       errorCount,
 *       warnCount,
 *       infoCount,
 *       timeRange,
 *       sources: [...new Set(logBatch.map((log) => log.source))]
 *     }
 *   })
 *
 *   yield* PubSub.publish(logPubSub, {
 *     timestamp: 1,
 *     level: "info",
 *     message: "ready",
 *     source: "app"
 *   } satisfies LogEntry)
 *   return analysisChannel
 * })
 * const log = Effect.scoped(Effect.flatMap(logAggregator, Channel.runHead))
 * const result = await Effect.runPromise(log)
 * Option.map(result, (batch) => [batch.batchId, batch.totalEntries, batch.infoCount]) // => Option.some(["1-1", 1, 1])
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromPubSubArray = (pubsub) => unwrap$2(map$2(subscribe(pubsub), fromSubscriptionArray));
/**
 * Creates a channel from a lazily supplied Web `ReadableStream`.
 *
 * **Example** (Reading from a Web stream)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.fromReadableStream({
 *   evaluate: () => new ReadableStream({
 *     start(controller) {
 *       controller.enqueue(1)
 *       controller.close()
 *     }
 *   }),
 *   onError: (cause) => new Error(String(cause))
 * })
 *
 * await Effect.runPromise(Channel.runCollect(channel)) // => [[1]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromReadableStream$1 = (options) =>
  fromTransform$1((_, scope) =>
    readableStreamToPullUnsafe({
      scope,
      readable: options.evaluate(),
      onError: options.onError,
      releaseLockOnEnd: options.releaseLockOnEnd,
    }),
  );
const readableStreamToPullUnsafe = (options) => {
  const reader = options.readable.getReader();
  const exit = options.exit ?? make$5(void 0);
  const pull = suspend$2(() => {
    if (exit.current) return exit.current;
    return matchCauseEffect(
      tryPromise({
        try: () => reader.read(),
        catch: options.onError,
      }),
      {
        onFailure: (cause) => exit.current ?? failCause$3(cause),
        onSuccess: ({ done: done$10, value }) => {
          if (exit.current) return exit.current;
          return done$10 ? done() : succeed$2(of(value));
        },
      },
    );
  });
  return as(
    addFinalizer(
      options.scope,
      options.releaseLockOnEnd
        ? sync$2(() => reader.releaseLock())
        : promise(() => reader.cancel().catch(constVoid)),
    ),
    pull,
  );
};
/**
 * Creates a channel that pulls values from an `AsyncIterable`.
 *
 * **Details**
 *
 * Each yielded value is emitted as an output element. The iterator's return
 * value becomes the channel's done value. Thrown or rejected iterator errors
 * are converted with `onError`. If the channel scope closes early and the
 * iterator has a `return` method, that method is called. It is awaited unless
 * a `next()` call is still pending, in which case its result is ignored and an
 * async generator may not run its cleanup until that pull settles.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromAsyncIterable$1 = (iterable, onError) =>
  fromTransform$1(
    fnUntraced(function* (_, scope) {
      const iter = iterable[Symbol.asyncIterator]();
      let pulling = false;
      if (iter.return)
        yield* addFinalizer(
          scope,
          suspend$2(() =>
            pulling
              ? sync$2(() => void iter.return().catch(constVoid))
              : promise(() => iter.return()),
          ),
        );
      return flatMap$2(
        tryPromise({
          try: () => {
            const promise = iter.next();
            pulling = true;
            return promise.finally(() => {
              pulling = false;
            });
          },
          catch: onError,
        }),
        (result) => (result.done ? done(result.value) : succeed$2(result.value)),
      );
    }),
  );
/**
 * Creates a channel from an `AsyncIterable`, emitting each yielded value as a
 * single-element non-empty array.
 *
 * **Details**
 *
 * The iterator's return value becomes the channel's done value. Thrown or
 * rejected iterator errors are converted with `onError`. If the channel scope
 * closes early and the iterator has a `return` method, that method is called.
 * It is awaited unless a `next()` call is still pending, in which case its
 * result is ignored and an async generator may not run its cleanup until that
 * pull settles.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromAsyncIterableArray = (iterable, onError) =>
  map$1(fromAsyncIterable$1(iterable, onError), of);
/**
 * Maps the output of this channel using the specified function.
 *
 * **Example** (Mapping channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class TransformError extends Data.TaggedError("TransformError")<{
 *   readonly reason: string
 * }> {}
 *
 * // Basic mapping of channel values
 * const numbersChannel = Channel.fromIterable([1, 2, 3, 4, 5])
 * const doubledChannel = Channel.map(numbersChannel, (n) => n * 2)
 * Effect.runSync(Channel.runCollect(doubledChannel)) // => [2, 4, 6, 8, 10]
 *
 * // Transform string data
 * const wordsChannel = Channel.fromIterable(["hello", "world", "effect"])
 * const upperCaseChannel = Channel.map(wordsChannel, (word) => word.toUpperCase())
 * Effect.runSync(Channel.runCollect(upperCaseChannel)) // => ["HELLO", "WORLD", "EFFECT"]
 *
 * // Complex object transformation
 * type User = { id: number; name: string }
 * type UserDisplay = { displayName: string; isActive: boolean }
 *
 * const usersChannel = Channel.fromIterable([
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" }
 * ])
 * const displayChannel = Channel.map(usersChannel, (user): UserDisplay => ({
 *   displayName: `User: ${user.name}`,
 *   isActive: true
 * }))
 * Effect.runSync(Channel.runCollect(displayChannel)) // => [{ displayName: "User: Alice", isActive: true }, { displayName: "User: Bob", isActive: true }]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const map$1 = /*#__PURE__*/ dual(2, (self, f) =>
  transformPull$1(self, (pull) =>
    sync$2(() => {
      let i = 0;
      return map$2(pull, (o) => f(o, i++));
    }),
  ),
);
/**
 * Maps the done value of this channel using the specified function.
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const mapDone = /*#__PURE__*/ dual(2, (self, f) => mapDoneEffect(self, (o) => succeed$2(f(o))));
/**
 * Maps the done value of this channel using the specified effectful function.
 *
 * **When to use**
 *
 * Use when the terminal done value transformation needs services or can fail,
 * while emitted elements should pass through unchanged.
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const mapDoneEffect = /*#__PURE__*/ dual(2, (self, f) =>
  transformPull$1(self, (pull) =>
    succeed$2(catchDone(pull, (done$13) => flatMap$2(f(done$13), done))),
  ),
);
const concurrencyIsSequential = (concurrency) =>
  concurrency === void 0 || (concurrency !== "unbounded" && concurrency <= 1);
/**
 * Maps each output element with an effectful function, preserving the source
 * channel's done value.
 *
 * **When to use**
 *
 * Use when transforming each channel output needs an Effect, service
 * dependency, failure channel, or configured concurrency.
 *
 * **Details**
 *
 * The mapping function receives the output element and its zero-based index.
 * By default elements are mapped sequentially. Use `options.concurrency` to
 * map multiple elements concurrently, and `options.unordered` to allow
 * concurrently mapped outputs to be emitted as soon as they complete.
 *
 * **Example** (Mapping channel output with effects)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const numbersChannel = Channel.fromIterable([1, 2, 3, 4, 5])
 * const processedChannel = Channel.mapEffect(
 *   numbersChannel,
 *   (n) => Effect.succeed(n * n)
 * )
 * await Effect.runPromise(Channel.runCollect(processedChannel)) // => [1, 4, 9, 16, 25]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const mapEffect$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, f, options) =>
    concurrencyIsSequential(options?.concurrency)
      ? mapEffectSequential(self, f)
      : mapEffectConcurrent(self, f, options),
);
const mapEffectSequential = (self, f) =>
  fromTransform$1((upstream, scope) => {
    let i = 0;
    return map$2(
      toTransform(self)(upstream, scope),
      flatMap$2((o) => f(o, i++)),
    );
  });
const mapEffectConcurrent = (self, f, options) =>
  fromTransformBracket(
    fnUntraced(function* (upstream, scope, forkedScope) {
      let i = 0;
      const pull = yield* toTransform(self)(upstream, scope);
      const concurrencyN =
        options.concurrency === "unbounded" ? Number.MAX_SAFE_INTEGER : options.concurrency;
      const queue = yield* bounded(0);
      yield* addFinalizer(forkedScope, shutdown(queue));
      const runFork = runForkWith(yield* context());
      const trackFiber = runIn(forkedScope);
      if (options.unordered) {
        const semaphore = makeUnsafe(concurrencyN);
        const release = constant(semaphore.release(1));
        const handle = matchCauseEffect({
          onFailure: (cause) => flatMap$2(failCause$2(queue, cause), release),
          onSuccess: (value) => flatMap$2(offer(queue, value), release),
        });
        yield* semaphore.take(1).pipe(
          flatMap$2(() => pull),
          flatMap$2((value) => {
            const index = i++;
            trackFiber(runFork(handle(suspend$2(() => f(value, index)))));
            return void_;
          }),
          forever({ disableYield: true }),
          catchCause$2((cause) =>
            semaphore.withPermits(concurrencyN - 1)(failCause$2(queue, cause)),
          ),
          forkIn(forkedScope),
        );
      } else {
        const effects = yield* bounded(concurrencyN - 2);
        yield* addFinalizer(forkedScope, shutdown(effects));
        yield* take$1(effects).pipe(
          flatten$2,
          flatMap$2((value) => offer(queue, value)),
          forever({ disableYield: true }),
          catchCause$2((cause) => failCause$2(queue, cause)),
          forkIn(forkedScope),
        );
        let errorCause;
        const onExit = (exit) => {
          if (exit._tag === "Success") return;
          errorCause = exit.cause;
          failCauseUnsafe(queue, exit.cause);
        };
        yield* pull.pipe(
          flatMap$2((value) => {
            if (errorCause) return failCause$3(errorCause);
            const index = i++;
            const fiber = runFork(suspend$2(() => f(value, index)));
            trackFiber(fiber);
            fiber.addObserver(onExit);
            return offer(effects, join(fiber));
          }),
          forever({ disableYield: true }),
          catchCause$2((cause) =>
            offer(effects, failCause$4(cause)).pipe(andThen(failCause$2(effects, cause))),
          ),
          forkIn(forkedScope),
        );
      }
      return take$1(queue);
    }),
  );
/**
 * Maps each output element to a channel and flattens the child channel
 * outputs.
 *
 * **Details**
 *
 * The source channel's done value is preserved. Child channel done values are
 * used only for child-channel completion. By default child channels are run
 * sequentially. Use `options.concurrency` and `options.bufferSize` to run child
 * channels concurrently.
 *
 * **Example** (Flat mapping channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class ProcessError extends Data.TaggedError("ProcessError")<{
 *   readonly cause: string
 * }> {}
 *
 * // Create a channel that outputs numbers
 * const numberChannel = Channel.fromIterable([1, 2, 3])
 *
 * // FlatMap each number to create new channels
 * const flatMappedChannel = Channel.flatMap(
 *   numberChannel,
 *   (n) =>
 *     Channel.fromIterable(Array.from({ length: n }, (_, i) => `item-${n}-${i}`))
 * )
 *
 * Effect.runSync(Channel.runCollect(flatMappedChannel)) // => ["item-1-0", "item-2-0", "item-2-1", "item-3-0", "item-3-1", "item-3-2"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, f, options) =>
    concurrencyIsSequential(options?.concurrency)
      ? flatMapSequential(self, f)
      : flatMapConcurrent(self, f, options),
);
const flatMapSequential = (self, f) =>
  fromTransform$1((upstream, scope) =>
    map$2(toTransform(self)(upstream, scope), (pull) => {
      let childPull;
      let childScope;
      const makePull = flatMap$2(pull, (value) => {
        childScope ??= forkUnsafe(scope);
        return flatMapEager(toTransform(f(value))(upstream, childScope), (pull) => {
          childPull = catchHalt(pull);
          return childPull;
        });
      });
      const catchHalt = catchDone((_) => {
        childPull = void 0;
        if (childScope.state._tag === "Empty") return makePull;
        const close$2 = close(childScope, void_$2);
        childScope = void 0;
        return flatMap$2(close$2, () => makePull);
      });
      return suspend$2(() => childPull ?? makePull);
    }),
  );
const flatMapConcurrent = (self, f, options) => self.pipe(map$1(f), mergeAll$1(options));
/**
 * Flattens a channel of channels.
 *
 * **Example** (Flattening nested channels)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class FlattenError extends Data.TaggedError("FlattenError")<{
 *   readonly cause: string
 * }> {}
 *
 * // Create a channel that outputs channels
 * const nestedChannels = Channel.fromIterable([
 *   Channel.fromIterable([1, 2]),
 *   Channel.fromIterable([3, 4]),
 *   Channel.fromIterable([5, 6])
 * ])
 *
 * // Flatten the nested channels
 * const flattenedChannel = Channel.flatten(nestedChannels)
 *
 * Effect.runSync(Channel.runCollect(flattenedChannel)) // => [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const flatten$1 = (channels) => flatMap$1(channels, identity);
/**
 * Flattens a channel that outputs arrays into a channel that outputs individual elements.
 *
 * **Example** (Flattening arrays of channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class FlattenError extends Data.TaggedError("FlattenError")<{
 *   readonly message: string
 * }> {}
 *
 * // Create a channel that outputs arrays
 * const arrayChannel = Channel.fromIterable([
 *   [1, 2, 3],
 *   [4, 5],
 *   [6, 7, 8, 9]
 * ])
 *
 * // Flatten the arrays into individual elements
 * const flattenedChannel = Channel.flattenArray(arrayChannel)
 *
 * Effect.runSync(Channel.runCollect(flattenedChannel)) // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @stability stable
 * @category transforming
 * @since 4.0.0
 */
const flattenArray = (self) =>
  transformPull$1(self, (pull) => {
    let array;
    let index = 0;
    const pump = suspend$2(function loop() {
      if (array === void 0)
        return flatMap$2(pull, (array_) => {
          switch (array_.length) {
            case 0:
              return loop();
            case 1:
              return succeed$2(array_[0]);
            default:
              array = array_;
              return succeed$2(array_[index++]);
          }
        });
      const next = array[index++];
      if (index >= array.length) {
        array = void 0;
        index = 0;
      }
      return succeed$2(next);
    });
    return succeed$2(pump);
  });
/**
 * Creates a new channel that consumes all output from the source channel
 * but emits nothing, preserving only the completion value.
 *
 * **Example** (Draining channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create a channel that outputs values
 * const sourceChannel = Channel.fromIterable([1, 2, 3, 4, 5])
 *
 * // Drain all output, keeping only the completion
 * const drainedChannel = Channel.drain(sourceChannel)
 *
 * Effect.runSync(Channel.runCollect(drainedChannel)) // => []
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const drain$2 = (self) =>
  transformPull$1(self, (pull) => succeed$2(forever(pull, { disableYield: true })));
/**
 * Filters the output elements of a channel using a predicate function.
 * Elements that don't match the predicate are discarded.
 *
 * **Example** (Filtering channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create a channel with mixed numbers
 * const numbersChannel = Channel.fromIterable([1, 2, 3, 4, 5, 6, 7, 8])
 *
 * // Filter to keep only even numbers
 * const evenChannel = Channel.filter(numbersChannel, (n) => n % 2 === 0)
 * Effect.runSync(Channel.runCollect(evenChannel)) // => [2, 4, 6, 8]
 *
 * // Filter with type refinement
 * const mixedChannel = Channel.fromIterable([1, "hello", 2, "world", 3])
 * const numbersOnlyChannel = Channel.filter(
 *   mixedChannel,
 *   (value): value is number => typeof value === "number"
 * )
 * Effect.runSync(Channel.runCollect(numbersOnlyChannel)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filter$1 = /*#__PURE__*/ dual(2, (self, predicate) =>
  fromTransform$1((upstream, scope) =>
    map$2(toTransform(self)(upstream, scope), (pull) =>
      flatMap$2(pull, function loop(elem) {
        return predicate(elem) ? succeed$2(elem) : flatMap$2(pull, loop);
      }),
    ),
  ),
);
/**
 * Filters arrays of elements emitted by a channel, applying the filter
 * to each element within the arrays and only emitting non-empty filtered arrays.
 *
 * **Example** (Filtering array output)
 *
 * ```ts import.meta.vitest
 * import { Array, Channel, Effect } from "effect"
 *
 * const nonEmptyArrayPredicate = Array.isReadonlyArrayNonEmpty
 *
 * // Create a channel that outputs arrays of mixed data
 * const arrayChannel = Channel.fromIterable([
 *   Array.make(1, 2, 3, 4, 5),
 *   Array.make(6, 7, 8, 9, 10),
 *   Array.make(11, 12, 13, 14, 15)
 * ]).pipe(Channel.filter(nonEmptyArrayPredicate))
 *
 * // Filter arrays to keep only even numbers
 * const evenArraysChannel = Channel.filterArray(arrayChannel, (n) => n % 2 === 0)
 * Effect.runSync(Channel.runCollect(evenArraysChannel)) // => [[2, 4], [6, 8, 10], [12, 14]]
 * // Note: Only non-empty filtered arrays are emitted
 *
 * // Arrays that would become empty after filtering are discarded entirely
 * const oddChannel = Channel.fromIterable([
 *   Array.make(1, 3, 5),
 *   Array.make(2, 4),
 *   Array.make(7, 9)
 * ]).pipe(Channel.filter(nonEmptyArrayPredicate))
 * const filteredOddChannel = Channel.filterArray(oddChannel, (n) => n % 2 === 0)
 * Effect.runSync(Channel.runCollect(filteredOddChannel)) // => [[2, 4]]
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterArray = /*#__PURE__*/ dual(2, (self, predicate) =>
  transformPull$1(self, (pull) =>
    succeed$2(
      flatMap$2(pull, function loop(arr) {
        const passes = [];
        for (let i = 0; i < arr.length; i++) if (predicate(arr[i])) passes.push(arr[i]);
        return isReadonlyArrayNonEmpty(passes) ? succeed$2(passes) : flatMap$2(pull, loop);
      }),
    ),
  ),
);
/**
 * Filters and maps each element inside emitted non-empty arrays using a
 * `Filter`.
 *
 * **Details**
 *
 * Successful filter results are kept as mapped values. Failed filter results
 * are removed from the array. Arrays that become empty are discarded.
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterMapArray = /*#__PURE__*/ dual(2, (self, filter) =>
  transformPull$1(self, (pull) =>
    succeed$2(
      flatMap$2(pull, function loop(arr) {
        const passes = [];
        for (let i = 0; i < arr.length; i++) {
          const result = filter(arr[i]);
          if (isSuccess(result)) passes.push(result.success);
        }
        return isReadonlyArrayNonEmpty(passes) ? succeed$2(passes) : flatMap$2(pull, loop);
      }),
    ),
  ),
);
/**
 * Filters each element inside emitted non-empty arrays with an effectful
 * predicate.
 *
 * **When to use**
 *
 * Use when filtering array-valued channel outputs requires Effects or services,
 * and arrays that become empty should be skipped.
 *
 * **Details**
 *
 * The predicate receives the element and its index within the array. Elements
 * for which the predicate succeeds with `true` are kept. Arrays that become
 * empty are discarded. Predicate failures fail the returned channel.
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterArrayEffect = /*#__PURE__*/ dual(2, (self, predicate) =>
  transformPull$1(self, (pull) => {
    const f = flatMap$2(pull, (arr) => filter$3(arr, predicate));
    return succeed$2(
      flatMap$2(f, function loop(arr) {
        return isReadonlyArrayNonEmpty(arr) ? succeed$2(arr) : flatMap$2(f, loop);
      }),
    );
  }),
);
/**
 * Filters and maps each element inside emitted non-empty arrays using an
 * effectful `Filter`.
 *
 * **When to use**
 *
 * Use when array-valued channel outputs need an effectful filter-map that can
 * fail and can discard arrays that become empty.
 *
 * **Details**
 *
 * Successful filter results are kept as mapped values. Failed filter results
 * are removed from the array. Arrays that become empty are discarded. Failures
 * from the effectful filter fail the returned channel.
 *
 * @stability stable
 * @category filtering
 * @since 4.0.0
 */
const filterMapArrayEffect = /*#__PURE__*/ dual(2, (self, filter) =>
  transformPull$1(self, (pull) =>
    succeed$2(
      flatMap$2(pull, function loop(arr) {
        return flatMap$2(filterMapEffect$1(arr, filter), (passes) =>
          isReadonlyArrayNonEmpty(passes) ? succeed$2(passes) : flatMap$2(pull, loop),
        );
      }),
    ),
  ),
);
/**
 * Maps over a channel statefully with an accumulator, where each element can produce multiple output values.
 *
 * **Example** (Mapping with accumulated state)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create a channel with numbers
 * const numbersChannel = Channel.fromIterable([1, 2, 3, 4])
 *
 * // Use mapAccum to create running sums and emit both current and sum
 * const runningSum = Channel.mapAccum(
 *   numbersChannel,
 *   () => 0, // initial accumulator state
 *   (sum, current) => {
 *     const newSum = sum + current
 *     // Return [newState, outputValues]
 *     return [newSum, [current, newSum]] as const
 *   }
 * )
 * // Using with Effect for async processing
 * const asyncMapAccum = Channel.mapAccum(
 *   numbersChannel,
 *   () => "",
 *   (acc, value) =>
 *     Effect.gen(function*() {
 *       const newAcc = acc + value.toString()
 *       return [newAcc, [`${value}-processed`, newAcc]] as const
 *     })
 * )
 * Effect.runSync(Channel.runCollect(runningSum)) // => [1, 1, 2, 3, 3, 6, 4, 10]
 * Effect.runSync(Channel.runCollect(asyncMapAccum)) // => ["1-processed", "1", "2-processed", "12", "3-processed", "123", "4-processed", "1234"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const mapAccum$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, initial, f, options) =>
    fromTransform$1((upstream, scope) =>
      map$2(toTransform(self)(upstream, scope), (pull) => {
        let state = initial();
        let current;
        let index = 0;
        let cause;
        const pullNext = matchCauseEffect(pull, {
          onFailure(cause_) {
            cause = cause_;
            const b = options?.onHalt && options.onHalt(state);
            return b && b.length > 0 ? succeed$2([state, b]) : failCause$3(cause_);
          },
          onSuccess(a) {
            const b = f(state, a);
            return isArray(b) ? succeed$2(b) : b;
          },
        });
        return suspend$2(function loop() {
          if (current === void 0) {
            if (cause) return failCause$3(cause);
            return flatMap$2(pullNext, ([newState, values]) => {
              state = newState;
              if (values.length === 0) return loop();
              else if (values.length === 1) return succeed$2(values[0]);
              current = values;
              return loop();
            });
          }
          const next = current[index++];
          if (index >= current.length) {
            current = void 0;
            index = 0;
          }
          return succeed$2(next);
        });
      }),
    ),
);
/**
 * Catches any cause of failure from the channel and allows recovery by
 * creating a new channel based on the caught cause.
 *
 * **Example** (Recovering from failure causes)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Data, Effect } from "effect"
 *
 * class ProcessError extends Data.TaggedError("ProcessError")<{
 *   readonly reason: string
 * }> {}
 *
 * class RecoveryError extends Data.TaggedError("RecoveryError")<{
 *   readonly message: string
 * }> {}
 *
 * // Create a failing channel
 * const failingChannel = Channel.fail(
 *   new ProcessError({ reason: "network error" })
 * )
 *
 * // Catch the cause and provide recovery
 * const recoveredChannel = Channel.catchCause(failingChannel, (cause) => {
 *   if (Cause.hasFails(cause)) {
 *     return Channel.succeed("Recovered from failure")
 *   }
 *   return Channel.succeed("Recovered from interruption")
 * })
 *
 * Effect.runSync(Channel.runCollect(recoveredChannel)) // => ["Recovered from failure"]
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchCause$1 = /*#__PURE__*/ dual(2, (self, f) =>
  fromTransform$1((upstream, scope) => {
    let forkedScope = forkUnsafe(scope);
    return map$2(toTransform(self)(upstream, forkedScope), (pull) => {
      let currentPull = pull.pipe(
        catchCause$2((cause) => {
          if (isDoneCause(cause)) return failCause$3(cause);
          const toClose = forkedScope;
          forkedScope = forkUnsafe(scope);
          return close(toClose, failCause$4(cause)).pipe(
            andThen(toTransform(f(cause))(upstream, forkedScope)),
            flatMap$2((childPull) => {
              currentPull = childPull;
              return childPull;
            }),
          );
        }),
      );
      return suspend$2(() => currentPull);
    });
  }),
);
/**
 * Runs an effect with the full failure `Cause` when the channel fails, then
 * fails the returned channel with the original cause.
 *
 * **When to use**
 *
 * Use when observing the full channel failure `Cause` is needed without
 * changing successful output or replacing the original cause.
 *
 * **Details**
 *
 * Use this for observing failures, such as logging or metrics. If the observer
 * effect fails, that failure can fail the returned channel.
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const tapCause = /*#__PURE__*/ dual(2, (self, f) =>
  catchCause$1(self, (cause) => fromEffectDrain$1(flatMap$2(f(cause), (_) => failCause$3(cause)))),
);
/**
 * Recovers from channel failures whose full `Cause` is selected by a `Filter`.
 *
 * **When to use**
 *
 * Use when you need to recover a channel only from causes selected by a
 * `Filter`, while giving the recovery both the selected value and the original
 * `Cause`.
 *
 * **Details**
 *
 * When the filter succeeds, the recovery function receives the selected value
 * and the original cause. When the filter fails, the returned channel fails
 * with the residual cause produced by the filter.
 *
 * @see {@link catchCauseIf} for selecting causes with a predicate
 * @see {@link catchFilter} for selecting typed errors with a `Filter`
 * @see {@link catchCause} for recovering from every cause
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchCauseFilter = /*#__PURE__*/ dual(3, (self, filter, f) =>
  catchCause$1(self, (cause) => {
    const result = filter(cause);
    return isFailure(result) ? failCause$1(result.failure) : f(result.success, cause);
  }),
);
const catch_$1 = /*#__PURE__*/ dual(2, (self, f) => catchCauseFilter(self, findError, (e) => f(e)));
/**
 * Recovers from typed channel errors that match a predicate or refinement.
 *
 * **When to use**
 *
 * Use to recover from typed channel errors when a predicate or refinement
 * selects the failures that should switch to a recovery channel.
 *
 * **Details**
 *
 * Matching errors are handled by the recovery function. Non-matching errors
 * are handled by `orElse` when provided. Without `orElse`, non-matching errors
 * are re-failed.
 *
 * @see {@link catch_ catch} for recovering from every typed channel error
 * @see {@link catchFilter} for selecting typed errors with a `Filter`
 * @see {@link catchTag} for selecting tagged typed errors
 * @see {@link catchCauseFilter} for selecting full causes with a `Filter`
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchIf$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, predicate, f, orElse) =>
    catch_$1(self, (err) => {
      return predicate(err) ? f(err) : orElse ? orElse(err) : fail$1(err);
    }),
);
/**
 * Returns a new channel, which is the same as this one, except the failure
 * value of the returned channel is created by applying the specified function
 * to the failure value of this channel.
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const mapError$1 = /*#__PURE__*/ dual(2, (self, f) => catch_$1(self, (err) => fail$1(f(err))));
/**
 * Converts all errors in the channel to defects (unrecoverable failures).
 * This is useful when you want to treat errors as programming errors.
 *
 * **Example** (Converting failures to defects)
 *
 * ```ts import.meta.vitest
 * import { Cause, Channel, Data, Effect, Exit } from "effect"
 *
 * class ValidationError extends Data.TaggedError("ValidationError")<{
 *   readonly field: string
 * }> {}
 *
 * // Create a channel that might fail
 * const error = new ValidationError({ field: "email" })
 * const failingChannel = Channel.fail(error)
 *
 * // Convert failures to defects
 * const fatalChannel = Channel.orDie(failingChannel)
 *
 * Effect.runSync(Effect.exit(Channel.runCollect(fatalChannel))) // => Exit.failCause(Cause.die(error))
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orDie$1 = (self) => catch_$1(self, die$1);
/**
 * Ignores all errors in the channel, converting them to an empty channel.
 *
 * **Details**
 *
 * Use the `log` option to emit the full {@link Cause} when the channel fails.
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const ignore$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, options) => {
    if (!options?.log) return catch_$1(self, () => empty$1);
    const logEffect = logWithLevel(options.log === true ? void 0 : options.log);
    return catch_$1(
      tapCause(self, (cause) => (hasFails(cause) ? logEffect(cause) : void_)),
      () => empty$1,
    );
  },
);
/**
 * Returns a new channel that retries this channel according to the specified
 * schedule whenever it fails.
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const retry$1 = /*#__PURE__*/ dual(2, (self, schedule) =>
  suspend$1(() => {
    let step = void 0;
    let meta = CurrentMetadata.defaultValue();
    const selfWithMeta = provideServiceEffect(
      self,
      CurrentMetadata,
      sync$2(() => meta),
    );
    const withReset = onFirst(selfWithMeta, () => {
      step = void 0;
      return void_;
    });
    const resolvedSchedule = typeof schedule === "function" ? schedule(identity) : schedule;
    const loop = catch_$1(
      withReset,
      fnUntraced(
        function* (error) {
          if (!step) step = yield* toStepWithMetadata(resolvedSchedule);
          meta = yield* step(error);
          return loop;
        },
        (effect, error) => catchDone(effect, () => succeed$2(fail$1(error))),
        unwrap$2,
      ),
    );
    return loop;
  }),
);
/**
 * Maps each output element to a channel and emits values from the most recent
 * active child channels.
 *
 * **Details**
 *
 * With the default concurrency of `1`, starting a new child channel interrupts
 * the previous child channel. Use `options.concurrency` to allow more active
 * child channels. The source channel's done value is preserved.
 *
 * **Example** (Switching mapped channels)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class SwitchError extends Data.TaggedError("SwitchError")<{
 *   readonly reason: string
 * }> {}
 *
 * // Create a channel that outputs numbers
 * const numberChannel = Channel.fromIterable([1, 2, 3])
 *
 * // Switch to new channels based on each value
 * const switchedChannel = Channel.switchMap(
 *   numberChannel,
 *   (n) => Channel.fromIterable([`value-${n}`])
 * )
 *
 * await Effect.runPromise(Channel.runCollect(switchedChannel)) // => ["value-3"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const switchMap$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]),
  (self, f, options) =>
    self.pipe(
      map$1(f),
      mergeAll$1({
        ...options,
        concurrency: options?.concurrency ?? 1,
        switch: true,
      }),
    ),
);
/**
 * Merges multiple channels with specified concurrency and buffering options.
 *
 * **When to use**
 *
 * Use when channel outputs are themselves channels and multiple inner channels
 * should run with configured concurrency and buffering.
 *
 * **Example** (Merging nested channels)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class MergeAllError extends Data.TaggedError("MergeAllError")<{
 *   readonly reason: string
 * }> {}
 *
 * // Create channels that output other channels
 * const nestedChannels = Channel.fromIterable([
 *   Channel.fromIterable([1, 2]),
 *   Channel.fromIterable([3, 4]),
 *   Channel.fromIterable([5, 6])
 * ])
 *
 * // Merge all channels with bounded concurrency
 * const mergedChannel = Channel.mergeAll({
 *   concurrency: 1,
 *   bufferSize: 16
 * })(nestedChannels)
 *
 * await Effect.runPromise(Channel.runCollect(mergedChannel)) // => [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @stability stable
 * @category combining
 * @since 2.0.0
 */
const mergeAll$1 = /*#__PURE__*/ dual(
  2,
  (channels, { bufferSize = 16, concurrency, switch: switch_ = false }) =>
    fromTransformBracket(
      fnUntraced(function* (upstream, scope, forkedScope) {
        const concurrencyN =
          concurrency === "unbounded" ? Number.MAX_SAFE_INTEGER : Math.max(1, concurrency);
        const semaphore = switch_ ? void 0 : makeUnsafe(concurrencyN);
        const doneLatch = yield* make$6(true);
        const fibers = /* @__PURE__ */ new Set();
        const queue = yield* bounded(bufferSize);
        yield* addFinalizer(forkedScope, shutdown(queue));
        const pull = yield* toTransform(channels)(upstream, scope);
        yield* gen(function* () {
          while (true) {
            let pullFiber;
            if (semaphore) {
              if (fibers.size < concurrencyN) yield* semaphore.take(1);
              else {
                pullFiber = yield* forkChild(pull);
                yield* raceFirst(semaphore.take(1), andThen(join(pullFiber), never));
              }
            }
            const channel = pullFiber === void 0 ? yield* pull : yield* join(pullFiber);
            const childScope = forkUnsafe(forkedScope);
            const childPull = yield* toTransform(channel)(upstream, childScope);
            while (fibers.size >= concurrencyN) {
              const fiber = headUnsafe(fibers);
              fibers.delete(fiber);
              if (fibers.size === 0) yield* doneLatch.open;
              yield* interrupt$1(fiber);
            }
            const fiber = yield* childPull.pipe(
              tap$1(() => yieldNow),
              flatMap$2((value) => offer(queue, value)),
              forever({ disableYield: true }),
              onError(
                fnUntraced(function* (cause) {
                  const exit$1 = doneExitFromCause(cause);
                  const closeExit = yield* exit(close(childScope, exit$1));
                  if (!fibers.has(fiber)) return;
                  const failure = asVoidAll([exit$1, closeExit]);
                  if (isFailure$1(failure)) yield* failCause$2(queue, failure.cause);
                  fibers.delete(fiber);
                  if (semaphore) yield* semaphore.release(1);
                  if (fibers.size === 0) yield* doneLatch.open;
                }),
              ),
              forkChild,
            );
            doneLatch.closeUnsafe();
            fibers.add(fiber);
          }
        }).pipe(
          catchCause$2((cause) => {
            const halt = filterDone(cause);
            if (isSuccess(halt)) return doneLatch.whenOpen(failCause$2(queue, cause));
            return failCause$2(queue, cause);
          }),
          forkIn(forkedScope),
        );
        return take$1(queue);
      }),
    ),
);
/**
 * Returns a new channel, which is the merge of this channel and the specified
 * channel.
 *
 * **Example** (Merging channels)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * // Create two channels
 * const leftChannel = Channel.fromIterable([1, 2, 3])
 * const rightChannel = Channel.fromIterable(["a", "b", "c"])
 *
 * // The default "both" strategy waits for both channels to complete
 * const mergedChannel = Channel.merge(leftChannel, rightChannel)
 *
 * const values = await Effect.runPromise(Channel.runCollect(mergedChannel))
 * values.map(String).sort() // => ["1", "2", "3", "a", "b", "c"]
 * ```
 *
 * @stability stable
 * @category combining
 * @since 4.0.0
 */
const merge$1 = /*#__PURE__*/ dual(
  (args) => isChannel(args[0]) && isChannel(args[1]),
  (left, right, options) =>
    fromTransformBracket(
      fnUntraced(function* (upstream, _scope, forkedScope) {
        const strategy = options?.haltStrategy ?? "both";
        const queue = yield* bounded(0);
        yield* addFinalizer(forkedScope, shutdown(queue));
        let done = 0;
        function onExit(side, cause) {
          done++;
          if (!isDoneCause(cause)) return failCause$2(queue, cause);
          switch (strategy) {
            case "both":
              return done === 2 ? failCause$2(queue, cause) : void_;
            case "left":
            case "right":
              return side === strategy ? failCause$2(queue, cause) : void_;
            case "either":
              return failCause$2(queue, cause);
          }
        }
        const runSide = (side, channel, scope) =>
          toTransform(channel)(upstream, scope).pipe(
            flatMap$2((pull) =>
              pull.pipe(
                flatMap$2((value) => offer(queue, value)),
                forever,
              ),
            ),
            onError((cause) =>
              onExitPrimitive$1(doneExitFromCause(cause), (exit) => close(scope, exit)).pipe(
                matchCauseEffect({
                  onFailure: (cause) => onExit(side, cause),
                  onSuccess: () => onExit(side, cause),
                }),
              ),
            ),
            forkIn(forkedScope),
          );
        yield* runSide("left", left, forkUnsafe(forkedScope));
        yield* runSide("right", right, forkUnsafe(forkedScope));
        return take$1(queue);
      }),
    ),
);
/**
 * Splits upstream string chunks into lines, recognizing `\n`, `\r\n`, and
 * standalone `\r` as line terminators. The behavior matches
 * `String.linesIterator` regardless of how the input is chunked.
 *
 * **Details**
 *
 * A line terminator at the very end of the stream does **not** produce a
 * trailing empty line (consistent with `String.linesIterator`). Conversely,
 * if the stream ends without a terminator the final partial line is still
 * emitted.
 *
 * **Example** (Splitting string chunks into lines)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const result = await Effect.runPromise(Stream.runCollect(
 *   Stream.splitLines(Stream.make("hel", "lo\r\nwor", "ld\n"))
 * ))
 * result // => ["hello", "world"]
 * ```
 *
 * @stability stable
 * @category splitting
 * @since 2.0.0
 */
const splitLines$1 = () =>
  fromTransform$1((upstream, _scope) =>
    sync$2(() => {
      let stringBuilder = "";
      let midCRLF = false;
      let done$12 = none();
      function splitLinesArray(chunk) {
        const chunkBuilder = [];
        function pushLine(segment) {
          if (stringBuilder.length === 0) chunkBuilder.push(segment);
          else {
            chunkBuilder.push(stringBuilder + segment);
            stringBuilder = "";
          }
        }
        for (let i = 0; i < chunk.length; i++) {
          const str = chunk[i];
          if (str.length !== 0) {
            let from = 0;
            let indexOfCR = str.indexOf("\r");
            let indexOfLF = str.indexOf("\n");
            if (midCRLF) {
              if (indexOfLF === 0) {
                from = 1;
                indexOfLF = str.indexOf("\n", from);
              }
              midCRLF = false;
            }
            while (indexOfCR !== -1 || indexOfLF !== -1)
              if (indexOfCR === -1 || (indexOfLF !== -1 && indexOfLF < indexOfCR)) {
                pushLine(str.substring(from, indexOfLF));
                from = indexOfLF + 1;
                indexOfLF = str.indexOf("\n", from);
              } else {
                pushLine(str.substring(from, indexOfCR));
                if (str.length === indexOfCR + 1) {
                  midCRLF = true;
                  from = str.length;
                  indexOfCR = -1;
                } else {
                  from = indexOfCR + (indexOfLF === indexOfCR + 1 ? 2 : 1);
                  indexOfCR = str.indexOf("\r", from);
                  indexOfLF = str.indexOf("\n", from);
                }
              }
            stringBuilder = stringBuilder + str.substring(from);
          }
        }
        return isReadonlyArrayNonEmpty(chunkBuilder) ? chunkBuilder : null;
      }
      const pullOrFlush = suspend$2(() => {
        if (done$12._tag === "Some") return done(done$12.value);
        return matchEffect(upstream, {
          onSuccess: loop,
          onFailure: failCause$3,
          onDone: (leftover) => {
            done$12 = some(leftover);
            if (stringBuilder.length > 0) {
              const last = stringBuilder;
              stringBuilder = "";
              midCRLF = false;
              return succeed$2([last]);
            }
            return done(leftover);
          },
        });
      });
      function loop(chunk) {
        const lines = splitLinesArray(chunk);
        return lines !== null ? succeed$2(lines) : pullOrFlush;
      }
      return pullOrFlush;
    }),
  );
/**
 * Decodes incoming `Uint8Array` chunks into strings using `TextDecoder`.
 *
 * **Details**
 *
 * Input chunks are decoded with streaming enabled so multi-byte characters may
 * span `Uint8Array` boundaries. The optional `encoding` and `options` are
 * passed to `TextDecoder`.
 *
 * @stability stable
 * @category decoding
 * @since 4.0.0
 */
const decodeText$1 = (encoding, options) =>
  fromTransform$1((upstream, _scope) =>
    sync$2(() => {
      const decoder = new TextDecoder(encoding, options);
      const streamOptions = { stream: true };
      return map$2(
        upstream,
        map$3((line) => decoder.decode(line, streamOptions)),
      );
    }),
  );
/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel. The returned channel has the input type of this channel,
 * and the output type of the specified channel, terminating with the value of
 * the specified channel.
 *
 * **Example** (Piping one channel into another)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class PipeError extends Data.TaggedError("PipeError")<{
 *   readonly stage: string
 * }> {}
 *
 * // Create source and transform channels
 * const sourceChannel = Channel.fromIterable([1, 2, 3])
 * const transformChannel = Channel.map(sourceChannel, (n: number) => n * 2)
 *
 * // Pipe the source into the transform
 * const pipedChannel = Channel.pipeTo(sourceChannel, transformChannel)
 *
 * Effect.runSync(Channel.runCollect(pipedChannel)) // => [2, 4, 6]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const pipeTo = /*#__PURE__*/ dual(2, (self, that) =>
  fromTransform$1((upstream, scope) =>
    flatMap$2(toTransform(self)(upstream, scope), (upstream) => toTransform(that)(upstream, scope)),
  ),
);
/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel and preserves this channel's failures without providing
 * them to the other channel for observation.
 *
 * **Example** (Piping while preserving failures)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Exit } from "effect"
 *
 * class SourceError extends Data.TaggedError("SourceError")<{
 *   readonly code: number
 * }> {}
 *
 * // Create a failing source channel
 * const error = new SourceError({ code: 404 })
 * const failingSource = Channel.fail(error)
 * const safeTransform = Channel.identity<never, never, never>()
 *
 * // Pipe while preserving source failures
 * const safePipedChannel = Channel.pipeToOrFail(failingSource, safeTransform)
 *
 * Effect.runSync(Effect.exit(Channel.runCollect(safePipedChannel))) // => Exit.fail(error)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const pipeToOrFail = /*#__PURE__*/ dual(2, (self, that) =>
  fromTransform$1((upstream, scope) =>
    flatMap$2(toTransform(self)(upstream, scope), (upstream) => {
      const upstreamPull = catchCause$2(upstream, (cause) =>
        isDoneCause(cause) ? failCause$3(cause) : die$3(Done$1(cause)),
      );
      return map$2(toTransform(that)(upstreamPull, scope), (pull) =>
        catchDefect(pull, (defect) => (isDone(defect) ? failCause$3(defect.value) : die$3(defect))),
      );
    }),
  ),
);
/**
 * Constructs a `Channel` from a scoped effect that will result in a
 * `Channel` if successful.
 *
 * **Example** (Unwrapping channel effects)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class UnwrapError extends Data.TaggedError("UnwrapError")<{
 *   readonly reason: string
 * }> {}
 *
 * // Create an effect that produces a channel
 * const channelEffect = Effect.succeed(
 *   Channel.fromIterable([1, 2, 3])
 * )
 *
 * // Unwrap the effect to get the channel
 * const unwrappedChannel = Channel.unwrap(channelEffect)
 *
 * Effect.runSync(Channel.runCollect(unwrappedChannel)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unwrap$2 = (channel) =>
  fromTransform$1((upstream, scope) => {
    let pull;
    return succeed$2(
      suspend$2(() => {
        if (pull) return pull;
        return channel.pipe(
          provide(scope),
          flatMap$2((channel) => toTransform(channel)(upstream, scope)),
          flatMap$2((pull_) => (pull = pull_)),
        );
      }),
    );
  });
/**
 * Runs a channel with a scope provided for the duration of the channel
 * execution, removing the channel's `Scope` requirement.
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const scoped$1 = (self) =>
  fromTransformBracket((upstream, scope, forkedScope) =>
    map$2(provide(toTransform(self)(upstream, scope), forkedScope), provide(forkedScope)),
  );
/**
 * Interrupts a channel when another effect completes.
 *
 * **When to use**
 *
 * Use to race channel execution against an external effect whose success can
 * become the channel's done value.
 *
 * **Details**
 *
 * If the effect completes first, its success value becomes the returned
 * channel's done value. If the channel completes first, the original channel's
 * done value is preserved.
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interruptWhen$1 = /*#__PURE__*/ dual(2, (self, effect) =>
  merge$1(self, fromPull$1(succeed$2(flatMap$2(effect, done))), { haltStrategy: "either" }),
);
/**
 * Returns a channel with an exit-aware finalizer that is guaranteed to run once
 * the channel begins execution, whether it succeeds or fails.
 *
 * **Example** (Running exit finalizers)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Exit } from "effect"
 *
 * class ExitError extends Data.TaggedError("ExitError")<{
 *   readonly stage: string
 * }> {}
 *
 * // Create a channel
 * const dataChannel = Channel.fromIterable([1, 2, 3])
 *
 * // Attach exit handler
 * const exits: Array<Exit.Exit<void, ExitError>> = []
 * const channelWithExit = Channel.onExit(dataChannel, (exit) => {
 *   exits.push(exit)
 *   return Effect.void
 * })
 * const observed = [await Effect.runPromise(Channel.runCollect(channelWithExit)), exits] // => [[1, 2, 3], [Exit.void]]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 4.0.0
 */
const onExit = /*#__PURE__*/ dual(2, (self, finalizer) =>
  fromTransformBracket((upstream, scope, forkedScope) =>
    addFinalizerExit(forkedScope, finalizer).pipe(andThen(toTransform(self)(upstream, scope))),
  ),
);
/**
 * Runs an effect the first time the channel emits an output element.
 *
 * **When to use**
 *
 * Use when initialization depends on the first output element rather than only
 * on channel startup.
 *
 * **Details**
 *
 * The effect receives the first emitted element. The first element is still
 * emitted unchanged. The effect is not run if the channel completes without
 * emitting an element.
 *
 * @stability stable
 * @category hooks
 * @since 4.0.0
 */
const onFirst = /*#__PURE__*/ dual(2, (self, onFirst) =>
  transformPull$1(self, (pull) =>
    sync$2(() => {
      let isFirst = true;
      const pullFirst = tap$1(pull, (element) => {
        isFirst = false;
        return onFirst(element);
      });
      return suspend$2(() => (isFirst ? pullFirst : pull));
    }),
  ),
);
/**
 * Runs an effect when the channel completes successfully.
 *
 * **Details**
 *
 * The effect runs before the original done value is propagated. The effect is
 * not run when the channel fails. If the effect fails, the returned channel
 * fails with that error.
 *
 * @stability stable
 * @category hooks
 * @since 4.0.0
 */
const onEnd$1 = /*#__PURE__*/ dual(2, (self, onEnd) =>
  transformPull$1(self, (pull) =>
    succeed$2(catchDone(pull, (leftover) => flatMap$2(onEnd, () => done(leftover)))),
  ),
);
/**
 * Returns a channel with a finalizer effect that is guaranteed to run once the
 * channel begins execution, whether it succeeds or fails.
 *
 * **Example** (Ensuring cleanup runs)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class EnsureError extends Data.TaggedError("EnsureError")<{
 *   readonly operation: string
 * }> {}
 *
 * // Create a channel
 * const dataChannel = Channel.fromIterable([1, 2, 3])
 *
 * // Ensure cleanup always runs
 * const events: Array<string> = []
 * const channelWithCleanup = Channel.ensuring(
 *   dataChannel,
 *   Effect.sync(() => events.push("cleanup"))
 * )
 * const observed = [await Effect.runPromise(Channel.runCollect(channelWithCleanup)), events] // => [[1, 2, 3], ["cleanup"]]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const ensuring$1 = /*#__PURE__*/ dual(2, (self, finalizer) => onExit(self, (_) => finalizer));
const runWith = (self, f, onHalt) =>
  suspend$2(() => {
    const scope = makeUnsafe$2();
    const makePull = toTransform(self)(done(), scope);
    return catchDone(flatMap$2(makePull, f), onHalt ? onHalt : succeed$2).pipe(
      onExit$1((exit) => close(scope, exit)),
    );
  });
/**
 * Provides a `Context` to the channel, removing the corresponding service
 * requirements from the returned channel.
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideContext$1 = /*#__PURE__*/ dual(2, (self, context) =>
  fromTransform$1((upstream, scope) =>
    map$2(provideContext$2(toTransform(self)(upstream, scope), context), provideContext$2(context)),
  ),
);
/**
 * Provides a concrete service for a context key, removing that service
 * requirement from the returned channel.
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideService$1 = /*#__PURE__*/ dual(3, (self, key, service) =>
  fromTransform$1((upstream, scope) =>
    map$2(
      provideService$2(toTransform(self)(upstream, scope), key, service),
      provideService$2(key, service),
    ),
  ),
);
/**
 * Provides a service to the channel after obtaining it from an effect.
 *
 * **When to use**
 *
 * Use to supply a channel dependency when constructing the service itself is
 * effectful or can fail.
 *
 * **Details**
 *
 * If the service effect fails, the returned channel fails. The provided service
 * removes the corresponding service requirement from the returned channel.
 *
 * @stability stable
 * @category providing services
 * @since 4.0.0
 */
const provideServiceEffect = /*#__PURE__*/ dual(3, (self, key, service) =>
  fromTransform$1((upstream, scope) =>
    flatMap$2(service, (s) => toTransform(provideService$1(self, key, s))(upstream, scope)),
  ),
);
/**
 * Runs a channel and discards all output elements, returning only the final result.
 *
 * **Example** (Draining channel output at runtime)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class DrainError extends Data.TaggedError("DrainError")<{
 *   readonly stage: string
 * }> {}
 *
 * // Create a channel that outputs elements and completes with a result
 * const resultChannel = Channel.fromIterable([1, 2, 3])
 * const completedChannel = Channel.concat(resultChannel, Channel.end("completed"))
 *
 * // Drain all elements and get only the final result
 * const drainEffect = Channel.runDrain(completedChannel)
 *
 * Effect.runSync(drainEffect) // => "completed"
 * ```
 *
 * @stability stable
 * @category running
 * @since 2.0.0
 */
const runDrain$1 = (self) => runWith(self, (pull) => forever(pull, { disableYield: true }));
/**
 * Runs a channel and applies an effect to each output element.
 *
 * **Example** (Running effects for each output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class ForEachError extends Data.TaggedError("ForEachError")<{
 *   readonly element: unknown
 * }> {}
 *
 * // Create a channel with numbers
 * const numbersChannel = Channel.fromIterable([1, 2, 3])
 *
 * // Run forEach to process each element
 * const processed: Array<number> = []
 * const forEachEffect = Channel.runForEach(
 *   numbersChannel,
 *   (n) => Effect.sync(() => processed.push(n))
 * )
 *
 * await Effect.runPromise(forEachEffect)
 * processed // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runForEach$1 = /*#__PURE__*/ dual(2, (self, f) =>
  runWith(self, (pull) => forever(flatMap$2(pull, f), { disableYield: true })),
);
/**
 * Runs a channel and applies an effectful predicate to each output element
 * until the predicate returns `false`.
 *
 * **Details**
 *
 * Returning `true` continues consuming the channel. Returning `false` stops
 * consumption early. The returned effect completes with `void`.
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runForEachWhile$1 = /*#__PURE__*/ dual(2, (self, f) =>
  runWith(self, (pull) =>
    pull.pipe(
      flatMap$2(f),
      flatMap$2((cont) => (cont ? void_ : done())),
      forever({ disableYield: true }),
    ),
  ),
);
/**
 * Concatenates a channel's `Uint8Array` chunks into a single `Uint8Array`.
 *
 * **Gotchas**
 *
 * This materializes the full content in memory. The source channel must not
 * reuse or mutate emitted buffers, which are retained until collection completes.
 *
 * **Example** (Joining channel byte chunks)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect } from "effect"
 *
 * const channel = Channel.fromArray([
 *   [new Uint8Array([1, 2])],
 *   [new Uint8Array([3, 4])]
 * ] as const)
 *
 * const bytes = Effect.runSync(Channel.mkUint8Array(channel))
 * Array.from(bytes) // => [1, 2, 3, 4]
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const mkUint8Array$1 = (self) =>
  map$2(
    runFold$1(
      self,
      () => ({
        bytes: 0,
        arrays: [],
      }),
      (acc, chunk) => {
        for (let i = 0; i < chunk.length; i++) {
          acc.bytes += chunk[i].length;
          acc.arrays.push(chunk[i]);
        }
        return acc;
      },
    ),
    ({ arrays, bytes }) => {
      const result = new Uint8Array(bytes);
      let offset = 0;
      for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        result.set(array, offset);
        offset += array.length;
      }
      return result;
    },
  );
/**
 * Runs a channel until the first output element is available, returning it in
 * an `Option`.
 *
 * **Details**
 *
 * Returns `Option.some` with the first output element, or `Option.none` if the
 * channel completes without emitting output.
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runHead$1 = (self) =>
  suspend$2(() => {
    let head = none();
    return runWith(
      self,
      (pull) =>
        pull.pipe(
          asSome$1,
          flatMap$2((head_) => {
            head = head_;
            return done();
          }),
        ),
      () => succeed$2(head),
    );
  });
/**
 * Runs a channel to completion and returns the last output element in an
 * `Option`.
 *
 * **Details**
 *
 * Returns `Option.some` with the last emitted element, or `Option.none` if the
 * channel completes without emitting output.
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runLast$1 = (self) =>
  suspend$2(() => {
    const absent = Symbol();
    let last = absent;
    return runWith(
      self,
      (pull) =>
        forever(
          flatMap$2(pull, (item) => {
            last = item;
            return void_;
          }),
          { disableYield: true },
        ),
      () => (last === absent ? succeedNone$1 : succeedSome(last)),
    );
  });
/**
 * Runs a channel and folds over all output elements with an accumulator.
 *
 * **Example** (Folding channel output)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class FoldError extends Data.TaggedError("FoldError")<{
 *   readonly operation: string
 * }> {}
 *
 * // Create a channel with numbers
 * const numbersChannel = Channel.fromIterable([1, 2, 3, 4, 5])
 *
 * // Fold to calculate sum
 * const sumEffect = Channel.runFold(numbersChannel, () => 0, (acc, n) => acc + n)
 *
 * Effect.runSync(sumEffect) // => 15
 * ```
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runFold$1 = /*#__PURE__*/ dual(3, (self, initial, f) =>
  suspend$2(() => {
    let state = initial();
    return runWith(
      self,
      (pull) =>
        whileLoop$1({
          while: constTrue,
          body: () => pull,
          step: (value) => {
            state = f(state, value);
          },
        }),
      () => succeed$2(state),
    );
  }),
);
/**
 * Runs a channel and effectfully folds all output elements with an accumulator.
 *
 * **When to use**
 *
 * Use when folding channel output needs effects, services, or an additional
 * failure channel during accumulation.
 *
 * **Details**
 *
 * The initial accumulator is evaluated lazily. Each output element is passed to
 * the effectful accumulator function. The returned effect succeeds with the
 * final accumulator value.
 *
 * @stability stable
 * @category running
 * @since 4.0.0
 */
const runFoldEffect$1 = /*#__PURE__*/ dual(3, (self, initial, f) =>
  suspend$2(() => {
    let state = initial();
    return runWith(
      self,
      (pull) =>
        whileLoop$1({
          while: constTrue,
          body: constant(
            pull.pipe(
              flatMap$2((o) => f(state, o)),
              map$2((s) => {
                state = s;
              }),
            ),
          ),
          step: constVoid,
        }),
      () => succeed$2(state),
    );
  }),
);
/**
 * Converts a channel to a scoped `Pull` for low-level consumption.
 *
 * **Details**
 *
 * The effect requires a `Scope`. The returned pull should be consumed only
 * while that scope remains open. Pulls are serialized so only one pull is
 * evaluated at a time.
 *
 * **Example** (Converting channels to pulls)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect } from "effect"
 *
 * class PullError extends Data.TaggedError("PullError")<{
 *   readonly step: string
 * }> {}
 *
 * // Create a channel
 * const numbersChannel = Channel.fromIterable([1, 2, 3])
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pull = yield* Channel.toPull(numbersChannel)
 *   return [yield* pull, yield* pull, yield* pull]
 * }))
 * await Effect.runPromise(program) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const toPull$1 = /*#__PURE__*/ fnUntraced(
  function* (self) {
    const semaphore = makeUnsafe(1);
    const context$1 = yield* context();
    const scope = get(context$1, Scope);
    return (yield* toTransform(self)(done(), scope)).pipe(
      provideContext$2(context$1),
      semaphore.withPermits(1),
    );
  },
  /*#__PURE__*/ catchCause$2((cause) => succeed$2(failCause$3(cause))),
);
/**
 * Converts a channel to a Pull within an existing scope.
 *
 * **Example** (Converting channels to scoped pulls)
 *
 * ```ts import.meta.vitest
 * import { Channel, Data, Effect, Scope } from "effect"
 *
 * class ScopedPullError extends Data.TaggedError("ScopedPullError")<{
 *   readonly reason: string
 * }> {}
 *
 * // Create a channel
 * const numbersChannel = Channel.fromIterable([1, 2, 3])
 *
 * // Convert to Pull with explicit scope
 * const scopedPullEffect = Effect.gen(function*() {
 *   const scope = yield* Effect.scope
 *   const pull = yield* Channel.toPullScoped(numbersChannel, scope)
 *   return [yield* pull, yield* pull, yield* pull]
 * })
 * await Effect.runPromise(Effect.scoped(scopedPullEffect)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toPullScoped = (self, scope) => toTransform(self)(done(), scope);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/internal/stream.js
const TypeId$2 = "~effect/Stream";
const streamVariance = {
  _R: identity,
  _E: identity,
  _A: identity,
};
const Stream = function (channel) {
  this.channel = channel;
};
Stream.prototype = {
  [TypeId$2]: streamVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/** @internal */
const fromChannel$2 = (channel) => new Stream(channel);
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Sink.js
const TypeId$1 = "~effect/Sink";
const endVoid = /*#__PURE__*/ succeed$2([void 0]);
const sinkVariance = {
  _A: identity,
  _In: identity,
  _L: identity,
  _E: identity,
  _R: identity,
};
const SinkProto = {
  [TypeId$1]: sinkVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
};
/**
 * Checks whether a value is a Sink.
 *
 * **Example** (Checking for a sink)
 *
 * ```ts import.meta.vitest
 * import { Sink } from "effect"
 *
 * const sink = Sink.never
 * const notStream = { data: [1, 2, 3] }
 *
 * Sink.isSink(sink) // => true
 * Sink.isSink(notStream) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isSink = (u) => hasProperty(u, TypeId$1);
/**
 * Creates a sink from a `Channel`.
 *
 * **When to use**
 *
 * Use to create a `Sink` from a `Channel` that processes non-empty arrays of
 * input values.
 *
 * **Example** (Using channel completion as the sink result)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Sink, Stream } from "effect"
 *
 * const channel = Channel.identity<readonly [number, ...Array<number>], never, void>().pipe(
 *   Channel.drain,
 *   Channel.mapDone(() => ["consumed"] as const)
 * )
 * const sink = Sink.fromChannel(channel)
 *
 * await Effect.runPromise(Stream.run(Stream.make(1, 2, 3), sink)) // => "consumed"
 * ```
 *
 * @see {@link toChannel} for converting a `Sink` back to a `Channel`
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromChannel$1 = (channel) =>
  fromTransform((upstream, scope) =>
    toTransform(channel)(upstream, scope).pipe(
      flatMap$2(forever({ disableYield: true })),
      catchDone(succeed$2),
    ),
  );
/**
 * Creates a `Sink` from a low-level transform function.
 *
 * **Details**
 *
 * The transform receives the upstream pull of non-empty input arrays and the
 * active scope, and returns an effect that completes with the sink's `End`
 * value.
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromTransform = (transform) => {
  const self = Object.create(SinkProto);
  self.transform = transform;
  return self;
};
/**
 * Creates a `Channel` from a Sink.
 *
 * **Example** (Running a sink as a channel)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Sink, Stream } from "effect"
 *
 * const channel = Stream.toChannel(Stream.make(1, 2, 3)).pipe(
 *   Channel.pipeTo(Sink.toChannel(Sink.sum))
 * )
 *
 * await Effect.runPromise(Channel.runDrain(channel)) // => [6]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const toChannel$1 = (self) =>
  fromTransform$1((upstream, scope) => succeed$2(flatMap$2(self.transform(upstream, scope), done)));
/**
 * Consumes and ignores all stream inputs.
 *
 * **When to use**
 *
 * Use to consume all upstream input and complete with void when the input
 * values and any aggregate result are not needed.
 *
 * @see {@link count} for consuming all input while returning the number of elements
 * @see {@link forEach} for consuming all input while running an effect for each element
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const drain$1 = /*#__PURE__*/ fromTransform((upstream) =>
  catchDone(forever(upstream, { disableYield: true }), () => endVoid),
);
/**
 * Transforms this sink's input elements.
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const mapInput = /*#__PURE__*/ dual(2, (self, f) => mapInputArray(self, map$3(f)));
/**
 * Transforms each non-empty array of upstream input before it is fed to this
 * sink.
 *
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const mapInputArray = /*#__PURE__*/ dual(2, (self, f) =>
  fromTransform((upstream, scope) => self.transform(map$2(upstream, f), scope)),
);
/**
 * Collects up to `n` input elements into an array.
 *
 * **Details**
 *
 * Finite fractional values of `n` are rounded down. If `n` is `NaN` or
 * non-positive, the sink completes with an empty array. If more elements are
 * pulled than needed, the remaining elements from the same array are returned
 * as leftovers.
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const take = (n) => {
  const count = normalize(n);
  return fromTransform((upstream) => {
    const taken = [];
    if (count === 0) return succeed$2([taken]);
    let leftover = void 0;
    return upstream.pipe(
      flatMap$2((arr) => {
        if (taken.length + arr.length <= count) {
          taken.push(...arr);
          if (taken.length === count) return done();
          return void_;
        }
        for (let i = 0; i < arr.length; i++) {
          taken.push(arr[i]);
          if (taken.length === count) {
            if (i + 1 < arr.length) leftover = arr.slice(i + 1);
            return done();
          }
        }
        return void_;
      }),
      forever({ disableYield: true }),
      catchDone(() => succeed$2([taken, leftover])),
    );
  });
};
/**
 * A sink that reduces its inputs using the provided function `f` starting from
 * the specified `initial` state.
 *
 * @stability stable
 * @category folding
 * @since 4.0.0
 */
const reduceArray = (initial, f) =>
  fromTransform((upstream) => {
    let state = initial();
    return upstream.pipe(
      flatMap$2((arr) => {
        state = f(state, arr);
        return void_;
      }),
      forever({ disableYield: true }),
      catchDone(() => succeed$2([state])),
    );
  });
const last_ = /*#__PURE__*/ reduceArray(none, (_, arr) => last$1(arr));
/**
 * Creates a sink containing the last value.
 *
 * **When to use**
 *
 * Use when you need to consume all upstream input and keep only the final
 * element.
 *
 * **Details**
 *
 * Returns `Option.some(last)` with the final input value, or `Option.none` when
 * the upstream ends without input.
 *
 * **Gotchas**
 *
 * This sink produces a result only when the upstream ends, so it does not
 * complete for a stream that does not end.
 *
 * @see {@link head} for taking the first input value instead
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const last = () => last_;
/**
 * A sink that executes the provided effectful function for every item fed
 * to it.
 *
 * **Example** (Running effects for each item)
 *
 * ```ts import.meta.vitest
 * import { Effect, Sink, Stream } from "effect"
 *
 * const processed: Array<number> = []
 * const sink = Sink.forEach((item: number) => Effect.sync(() => processed.push(item)))
 *
 * // Use it with a stream
 * const stream = Stream.make(1, 2, 3)
 * await Effect.runPromise(Stream.run(stream, sink))
 * processed // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const forEach = (f) => forEachArray(forEach$1((_) => f(_), { discard: true }));
/**
 * A sink that executes the provided effectful function for every Chunk fed
 * to it.
 *
 * **Example** (Running effects for each chunk)
 *
 * ```ts import.meta.vitest
 * import { Effect, Sink, Stream } from "effect"
 *
 * const processed: Array<Array<number>> = []
 * const sink = Sink.forEachArray((chunk: ReadonlyArray<number>) => Effect.sync(() => processed.push([...chunk])))
 *
 * // Use it with a stream
 * const stream = Stream.make(1, 2, 3, 4, 5)
 * await Effect.runPromise(Stream.run(stream, sink))
 * processed // => [[1, 2, 3, 4, 5]]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const forEachArray = (f) =>
  fromTransform((upstream) =>
    upstream.pipe(
      flatMap$2(f),
      forever({ disableYield: true }),
      catchDone(() => endVoid),
    ),
  );
/**
 * Creates a sink produced from a scoped effect.
 *
 * **Example** (Unwrapping a sink effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Sink, Stream } from "effect"
 *
 * // Create a sink from an effect that produces a sink
 * const processed: Array<number> = []
 * const sinkEffect = Effect.succeed(
 *   Sink.forEach((item: number) => Effect.sync(() => processed.push(item)))
 * )
 * const sink = Sink.unwrap(sinkEffect)
 *
 * // Use it with a stream
 * const stream = Stream.make(1, 2, 3)
 * await Effect.runPromise(Stream.run(stream, sink))
 * processed // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unwrap$1 = (effect) => fromChannel$1(unwrap$2(map$2(effect, toChannel$1)));
// ../../node_modules/.pnpm/effect@4.0.5/node_modules/effect/dist/Stream.js
/**
 * Describes effectful sources that emit values over time.
 *
 * A `Stream<A, E, R>` can emit many `A` values, fail with `E`, and require
 * services `R` while it is being consumed. Streams are useful for data that is
 * pulled in steps, such as values from collections, queues, pubsubs, schedules,
 * callbacks, async iterables, or platform streams. The APIs here cover the full
 * stream lifecycle: create a stream, transform or combine it, control buffering
 * and timing, handle failures, and finally consume it.
 *
 * @stability stable
 * @since 2.0.0
 */
/**
 * Runtime identifier stored on `Stream` values and used by `isStream` to
 * recognize them.
 *
 * **Details**
 *
 * This marker is part of the runtime representation of `Stream` values. Prefer
 * `isStream` when narrowing unknown values.
 *
 * @see {@link isStream} for the public guard that checks this identifier
 *
 * @stability stable
 * @category type IDs
 * @since 4.0.0
 */
const TypeId = "~effect/Stream";
/**
 * Checks whether a value is a Stream.
 *
 * **Example** (Checking whether a value is a Stream)
 *
 * ```ts import.meta.vitest
 * import { Stream } from "effect"
 *
 * Stream.isStream(Stream.make(1, 2, 3)) // => true
 * Stream.isStream({ data: [1, 2, 3] }) // => false
 * ```
 *
 * @stability stable
 * @category guards
 * @since 4.0.0
 */
const isStream = (u) => hasProperty(u, TypeId);
/**
 * Creates a stream from a array-emitting `Channel`.
 *
 * **Example** (Creating a stream from an array-emitting channel)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Stream } from "effect"
 *
 * const channel = Channel.succeed([1, 2, 3] as const)
 * const stream = Stream.fromChannel(channel)
 * await Effect.runPromise(Stream.runCollect(stream)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromChannel = fromChannel$2;
/**
 * Creates a stream from an effect.
 *
 * **Example** (Creating a stream from an effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.fromEffect(Effect.succeed(42))
 * await Effect.runPromise(Stream.runCollect(stream)) // => [42]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromEffect = (effect) => fromChannel(fromEffect$1(map$2(effect, of)));
/**
 * Creates a stream that runs the effect and emits no elements.
 *
 * **Example** (Draining an effect into a stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * let drained = false
 * await Effect.runPromise(
 *   Stream.fromEffectDrain(Effect.sync(() => {
 *     drained = true
 *   })).pipe(Stream.runDrain)
 * )
 * drained // => true
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromEffectDrain = (effect) => fromPull(succeed$2(flatMap$2(effect, () => done())));
/**
 * Creates a stream from an effect producing a value of type `A` which repeats forever.
 *
 * **Example** (Repeating an effect forever)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * let n = 0
 * const stream = Stream.fromEffectRepeat(Effect.sync(() => ++n)).pipe(Stream.take(5))
 * await Effect.runPromise(Stream.runCollect(stream)) // => [1, 2, 3, 4, 5]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromEffectRepeat = (effect) => fromPull(succeed$2(map$2(effect, of)));
/**
 * Creates a stream that emits `void` immediately once, then emits another
 * `void` after each specified interval.
 *
 * **Example** (Emitting ticks on an interval)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Stream.tick(0).pipe(Stream.take(3), Stream.runCollect)) // => [undefined, undefined, undefined]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const tick = (interval) =>
  fromPull(
    sync$2(() => {
      let first = true;
      const effect = succeed$2(of(void 0));
      const delayed = delay(effect, interval);
      return suspend$2(() => {
        if (first) {
          first = false;
          return effect;
        }
        return delayed;
      });
    }),
  );
/**
 * Creates a stream from a pull effect, such as one produced by `Stream.toPull`.
 *
 * **Details**
 *
 * A pull effect yields chunks on demand and completes when the upstream stream ends.
 * See `Stream.toPull` for a matching producer.
 *
 * **Example** (Creating a stream from a pull effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const source = Stream.make(1, 2, 3)
 *     const pull = yield* Stream.toPull(source)
 *     const stream = Stream.fromPull(Effect.succeed(pull))
 *     return yield* Stream.runCollect(stream)
 *   })
 * )
 *
 * await Effect.runPromise(program) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromPull = (pull) => fromChannel(fromPull$1(pull));
/**
 * Derives a stream by transforming its pull effect.
 *
 * **Example** (Transforming a pull effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * const transformed = Stream.transformPull(stream, (pull) => Effect.succeed(pull))
 *
 * await Effect.runPromise(Stream.runCollect(transformed)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const transformPull = (self, f) =>
  fromChannel(
    fromTransform$1((_, scope) =>
      flatMap$2(toPullScoped(self.channel, scope), (pull) => f(pull, scope)),
    ),
  );
/**
 * Creates a channel from a stream.
 *
 * **Example** (Converting a stream to a channel)
 *
 * ```ts import.meta.vitest
 * import { Channel, Effect, Stream } from "effect"
 *
 * const channel = Stream.toChannel(Stream.make(1, 2, 3))
 * const values = await Effect.runPromise(Channel.runCollect(channel))
 * values.flat() // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const toChannel = (stream) => stream.channel;
/**
 * Creates a stream from a callback that can emit values into a queue.
 *
 * **When to use**
 *
 * Use when you need callback-based code to emit stream values by offering to a
 * `Queue`, or signal stream completion through the `Queue` module APIs.
 *
 * By default it uses an "unbounded" buffer size.
 * You can customize the buffer size and strategy by passing an object as the
 * second argument with the `bufferSize` and `strategy` fields.
 *
 * **Example** (Creating a stream from a callback that can emit values into a queue)
 *
 * ```ts import.meta.vitest
 * import { Effect, Queue, Stream } from "effect"
 *
 * const stream = Stream.callback<number>((queue) =>
 *   Effect.sync(() => {
 *     // Emit values to the stream
 *     Queue.offerUnsafe(queue, 1)
 *     Queue.offerUnsafe(queue, 2)
 *     Queue.offerUnsafe(queue, 3)
 *     // Signal completion
 *     Queue.endUnsafe(queue)
 *   })
 * )
 *
 * await Effect.runPromise(Stream.runCollect(stream)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const callback = (f, options) => fromChannel(callbackArray(f, options));
/**
 * Creates an empty stream.
 *
 * **Example** (Creating an empty stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Stream.runCollect(Stream.empty)) // => []
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const empty = /*#__PURE__*/ fromChannel(empty$1);
/**
 * Creates a single-valued pure stream.
 *
 * **Example** (Creating a single-valued pure stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Stream.runCollect(Stream.succeed(3))) // => [3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const succeed = (value) => fromChannel(succeed$1(of(value)));
/**
 * Creates a stream from a sequence of values.
 *
 * **Example** (Creating a stream from a sequence of values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * await Effect.runPromise(Stream.runCollect(stream)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const make = (...values) => fromArray(values);
/**
 * Creates a stream that synchronously evaluates a function and emits the result as a single value.
 *
 * **Details**
 *
 * The function is evaluated each time the stream is run.
 *
 * **Example** (Evaluating a value synchronously)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Stream.sync(() => 2 + 1).pipe(Stream.runCollect)) // => [3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const sync = (evaluate) => fromChannel(sync$1(() => of(evaluate())));
/**
 * Creates a lazily constructed stream.
 *
 * **Details**
 *
 * The stream factory is evaluated each time the stream is run.
 *
 * **Example** (Creating a lazily constructed stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Stream.suspend(() => Stream.make(1, 2, 3)).pipe(Stream.runCollect)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const suspend = (stream) => fromChannel(suspend$1(() => stream().channel));
/**
 * Terminates with the specified error.
 *
 * **Example** (Failing a stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Exit, Stream } from "effect"
 *
 * await Effect.runPromise(Effect.exit(Stream.runCollect(Stream.fail("Uh oh!")))) // => Exit.fail("Uh oh!")
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fail = (error) => fromChannel(fail$1(error));
/**
 * Creates a stream that fails with the specified `Cause`.
 *
 * **Example** (Failing with a cause)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Stream } from "effect"
 *
 * const stream = Stream.failCause(Cause.fail("Database connection failed")).pipe(
 *   Stream.catchCause(() => Stream.succeed("recovered"))
 * )
 *
 * await Effect.runPromise(Stream.runCollect(stream)) // => ["recovered"]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const failCause = (cause) => fromChannel(failCause$1(cause));
/**
 * The stream that dies with the specified defect.
 *
 * **Example** (Dying with a defect)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Exit, Stream } from "effect"
 *
 * const defect = new Error("Boom")
 * const stream = Stream.die(defect)
 *
 * await Effect.runPromise(Effect.exit(Stream.runCollect(stream))) // => Exit.failCause(Cause.die(defect))
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const die = (defect) => fromChannel(die$1(defect));
/**
 * Creates a stream that consumes values from an iterator.
 *
 * **Details**
 *
 * The `maxChunkSize` parameter controls how many values are pulled per chunk.
 * Finite fractional values are rounded down, while `NaN` and non-positive
 * values are treated as `1`.
 *
 * **Example** (Consuming values from an iterator)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * function* numbers() {
 *   yield 1
 *   yield 2
 *   yield 3
 * }
 *
 * const stream = Stream.fromIteratorSucceed(numbers())
 *
 * const program = Effect.gen(function* () {
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromIteratorSucceed = (iterator, maxChunkSize) =>
  fromChannel(fromIteratorArray(() => iterator, maxChunkSize));
/**
 * Creates a new `Stream` from an iterable collection of values.
 *
 * **Details**
 *
 * - `chunkSize`: Maximum number of values emitted per chunk. Finite fractional
 *   values are rounded down, while `NaN` and non-positive values are treated as
 *   `1`.
 *
 * **Example** (Creating a stream from an iterable)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const numbers = [1, 2, 3]
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.fromIterable(numbers)
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromIterable = (iterable, options) =>
  Array.isArray(iterable) && options?.chunkSize === void 0
    ? fromArray(iterable)
    : fromChannel(fromIterableArray(iterable, options?.chunkSize));
/**
 * Creates a stream from an array of values.
 *
 * **Example** (Creating a stream from an array of values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.fromArray([1, 2, 3])
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromArray = (array) =>
  isReadonlyArrayNonEmpty(array) ? fromChannel(succeed$1(array)) : empty;
/**
 * Creates a stream that pulls values from a `Queue.Dequeue`.
 *
 * **Details**
 *
 * The stream emits non-empty batches of queued values and ends when the queue
 * fails with `Cause.Done`; other queue failures are propagated.
 *
 * **Example** (Creating a stream from a queue of values)
 *
 * ```ts import.meta.vitest
 * import { Cause, Effect, Queue, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const queue = yield* Queue.unbounded<number, Cause.Done>()
 *   yield* Queue.offer(queue, 1)
 *   yield* Queue.offer(queue, 2)
 *   yield* Queue.offer(queue, 3)
 *   yield* Queue.end(queue)
 *
 *   const stream = Stream.fromQueue(queue)
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromQueue = (queue) => fromChannel(fromQueueArray(queue));
/**
 * Creates a stream from a subscription to a `PubSub`.
 *
 * **Example** (Creating a stream from a subscription to a PubSub)
 *
 * ```ts import.meta.vitest
 * import { Effect, Fiber, PubSub, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const pubsub = yield* PubSub.unbounded<number>({ replay: 3 })
 *
 *   const fiber = yield* Stream.fromPubSub(pubsub).pipe(
 *     Stream.take(3),
 *     Stream.runCollect,
 *     Effect.forkChild
 *   )
 *
 *   yield* PubSub.publish(pubsub, 1)
 *   yield* PubSub.publish(pubsub, 2)
 *   yield* PubSub.publish(pubsub, 3)
 *
 *   const values = yield* Fiber.join(fiber)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromPubSub = (pubsub) => fromChannel(fromPubSubArray(pubsub));
/**
 * Creates a stream from a lazily supplied Web `ReadableStream`.
 *
 * **Details**
 *
 * The stream reads from a `ReadableStreamDefaultReader`, maps read failures
 * with `onError`, and closes the reader when the stream finalizes. By default
 * the reader is canceled; set `releaseLockOnEnd` to release the lock instead.
 *
 * **Example** (Creating a stream from a ReadableStream)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Stream } from "effect"
 *
 * class StreamError extends Data.TaggedError("StreamError")<{ readonly cause: unknown }> {}
 *
 * const readableStream = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue(1)
 *     controller.enqueue(2)
 *     controller.enqueue(3)
 *     controller.close()
 *   }
 * })
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.fromReadableStream({
 *     evaluate: () => readableStream,
 *     onError: (cause) => new StreamError({ cause })
 *   })
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromReadableStream = (options) => fromChannel(fromReadableStream$1(options));
/**
 * Creates a stream from an AsyncIterable.
 *
 * **Example** (Creating a stream from an AsyncIterable)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Stream } from "effect"
 *
 * class StreamError extends Data.TaggedError("StreamError")<{ readonly cause: unknown }> {}
 *
 * const iterable = (async function*() {
 *   yield 1
 *   yield 2
 *   yield 3
 * })()
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const stream = Stream.fromAsyncIterable(iterable, (cause) => new StreamError({ cause }))
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [1, 2, 3]
 * }))
 *
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const fromAsyncIterable = (iterable, onError) =>
  fromChannel(fromAsyncIterableArray(iterable, onError));
/**
 * Creates a stream from a PubSub subscription.
 *
 * **When to use**
 *
 * Use when you already have a `PubSub.Subscription` and want to expose its
 * messages as a `Stream`, with `Stream.take` or cancellation controlling how
 * many values are consumed.
 *
 * **Example** (Creating a stream from a PubSub subscription)
 *
 * ```ts import.meta.vitest
 * import { Effect, PubSub, Stream } from "effect"
 *
 * const program = Effect.scoped(Effect.gen(function*() {
 *   const pubsub = yield* PubSub.unbounded<number>()
 *   const subscription = yield* PubSub.subscribe(pubsub)
 *
 *   yield* PubSub.publish(pubsub, 1)
 *   yield* PubSub.publish(pubsub, 2)
 *
 *   const stream = Stream.fromSubscription(subscription)
 *   const values = yield* stream.pipe(Stream.take(2), Stream.runCollect)
 *   values // => [1, 2]
 * }))
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 4.0.0
 */
const fromSubscription = (pubsub) => fromChannel(fromSubscriptionArray(pubsub));
/**
 * Creates a stream by repeatedly applying an effectful step function to a
 * state.
 *
 * **Details**
 *
 * Each `readonly [value, nextState]` result emits `value` and continues with
 * `nextState`; returning `undefined` ends the stream.
 *
 * **Example** (Unfolding stream state)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.unfold(1, (n) => Effect.succeed([n, n + 1] as const))
 *   const values = yield* Stream.runCollect(stream.pipe(Stream.take(5)))
 *   values // => [ 1, 2, 3, 4, 5 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unfold = (s, f) =>
  fromPull(
    sync$2(() => {
      let state = s;
      return flatMap$2(
        suspend$2(() => f(state)),
        (next) => {
          if (next === void 0) return done();
          state = next[1];
          return succeed$2(of(next[0]));
        },
      );
    }),
  );
/**
 * Creates a stream by repeatedly evaluating an effectful page function.
 *
 * **When to use**
 *
 * Use to consume paginated APIs where each step returns a batch of values
 * together with an optional next state.
 *
 * **Details**
 *
 * This is similar to {@link unfold}, but each step can emit zero or more values
 * and independently decide whether another state should be requested.
 *
 * **Example** (Paginating stream state)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.paginate(0, (n: number) =>
 *   Effect.succeed(
 *     [
 *       [n],
 *       n < 3 ? Option.some(n + 1) : Option.none<number>()
 *     ] as const
 *   ))
 *
 * await Effect.runPromise(Stream.runCollect(stream)) // => [0, 1, 2, 3]
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const paginate = (s, f) =>
  fromPull(
    sync$2(() => {
      let state = s;
      let done$8 = false;
      return suspend$2(function loop() {
        if (done$8) return done();
        return flatMap$2(f(state), ([a, s]) => {
          if (isNone(s)) done$8 = true;
          else state = s.value;
          if (!isReadonlyArrayNonEmpty(a)) return loop();
          return succeed$2(a);
        });
      });
    }),
  );
/**
 * Creates a stream produced from an `Effect`.
 *
 * **Example** (Unwrapping a stream effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const effect = Effect.succeed(Stream.make(1, 2, 3))
 *
 * const stream = Stream.unwrap(effect)
 *
 * const program = Effect.gen(function*() {
 *   const chunk = yield* Stream.runCollect(stream)
 *   chunk // => [ 1, 2, 3 ]
 * })
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category constructors
 * @since 2.0.0
 */
const unwrap = (effect) => fromChannel(unwrap$2(map$2(effect, toChannel)));
/**
 * Runs a stream that requires `Scope` in a managed scope, ensuring its
 * finalizers are run when the stream completes.
 *
 * **Example** (Scoping a stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const events: Array<string> = []
 * const stream = Stream.scoped(
 *   Stream.fromEffect(
 *     Effect.acquireRelease(
 *       Effect.sync(() => {
 *         events.push("acquire")
 *         return "resource"
 *       }),
 *       () => Effect.sync(() => events.push("release"))
 *     )
 *   )
 * )
 *
 * await Effect.runPromise(Stream.runCollect(stream)) // => ["resource"]
 * events // => ["acquire", "release"]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const scoped = (self) => fromChannel(scoped$1(self.channel));
/**
 * Transforms the elements of this stream using the supplied function.
 *
 * **Example** (Mapping stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.fromArray([1, 2, 3]).pipe(Stream.map((n, i) => n + i))
 * await Effect.runPromise(Stream.runCollect(stream)) // => [1, 3, 5]
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const map = /*#__PURE__*/ dual(2, (self, f) =>
  suspend(() => {
    let i = 0;
    return fromChannel(
      map$1(
        self.channel,
        map$3((o) => f(o, i++)),
      ),
    );
  }),
);
/**
 * Maps over elements of the stream with the specified effectful function.
 *
 * **When to use**
 *
 * Use when each stream element transformation needs an Effect, service
 * dependency, failure channel, or configured concurrency.
 *
 * **Example** (Effectfully mapping stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const events: Array<string> = []
 * const stream = Stream.make(1, 2, 3)
 *
 * const mappedStream = stream.pipe(
 *   Stream.mapEffect((n) =>
 *     Effect.sync(() => {
 *       events.push(`Processing: ${n}`)
 *       return n * 2
 *     })
 *   )
 * )
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(mappedStream)
 *   result // => [2, 4, 6]
 * })
 *
 * await Effect.runPromise(program)
 * events // => ["Processing: 1", "Processing: 2", "Processing: 3"]
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const mapEffect = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, f, options) =>
    self.channel.pipe(flattenArray, mapEffect$1(f, options), map$1(of), fromChannel),
);
/**
 * Maps over non-empty array chunks emitted by the stream effectfully.
 *
 * **When to use**
 *
 * Use when transformation needs to see and replace each non-empty emitted chunk
 * effectfully instead of mapping individual stream elements.
 *
 * **Example** (Effectfully mapping stream chunks)
 *
 * ```ts import.meta.vitest
 * import { Array, Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.fromArray([1, 2, 3, 4]).pipe(
 *     Stream.rechunk(2),
 *     Stream.mapArrayEffect((chunk, index) =>
 *       Effect.succeed(Array.map(chunk, (n) => n + index * 10))
 *     ),
 *     Stream.runCollect
 *   )
 *   result // => [ 1, 2, 13, 14 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 4.0.0
 */
const mapArrayEffect = /*#__PURE__*/ dual(2, (self, f) =>
  fromChannel(mapEffect$1(self.channel, f)),
);
/**
 * Runs the provided effect for each element while preserving the elements.
 *
 * **Example** (Tapping stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const events: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.fromArray([1, 2, 3]).pipe(
 *     Stream.tap((n) => Effect.sync(() => events.push(`before mapping: ${n}`))),
 *     Stream.map((n) => n * 2),
 *     Stream.tap((n) => Effect.sync(() => events.push(`after mapping: ${n}`))),
 *     Stream.runCollect
 *   )
 *
 *   result // => [2, 4, 6]
 * })
 *
 * await Effect.runPromise(program)
 * events // => ["before mapping: 1", "after mapping: 2", "before mapping: 2", "after mapping: 4", "before mapping: 3", "after mapping: 6"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const tap = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, f, options) => mapEffect(self, (a) => as(f(a), a), options),
);
/**
 * Maps each element to a stream and flattens the resulting streams.
 *
 * **Details**
 *
 * With the default sequential concurrency, inner streams are concatenated in
 * input order. When `concurrency` is greater than `1` or `"unbounded"`,
 * multiple inner streams may run at the same time and their outputs are merged
 * as they arrive.
 *
 * **Example** (Flat mapping stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.flatMap((n) => Stream.make(n, n * 2)),
 *     Stream.runCollect
 *   )
 *   values // => [ 1, 2, 2, 4, 3, 6 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatMap = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, f, options) =>
    self.channel.pipe(
      flattenArray,
      flatMap$1((a) => f(a).channel, options),
      fromChannel,
    ),
);
/**
 * Switches to the latest stream produced by the mapping function, interrupting
 * the previous stream when a new element arrives.
 *
 * **Example** (Switching to the latest stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Stream.make(1, 2, 3).pipe(
 *   Stream.switchMap((n) => (n === 3 ? Stream.make(n) : Stream.never)),
 *   Stream.runCollect
 * )
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const result = yield* program
 *   result // => [ 3 ]
 * }))
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const switchMap = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, f, options) =>
    self.channel.pipe(
      flattenArray,
      switchMap$1((a) => f(a).channel, options),
      fromChannel,
    ),
);
/**
 * Flattens a stream of streams into a single stream.
 *
 * **Details**
 *
 * With the default sequential concurrency, inner streams are concatenated in
 * strict order. When `concurrency` is greater than `1` or `"unbounded"`,
 * multiple inner streams may run at the same time and their outputs are merged
 * as they arrive.
 *
 * **Example** (Flattening nested streams)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const streamOfStreams = Stream.make(
 *   Stream.make(1, 2),
 *   Stream.make(3, 4),
 *   Stream.make(5, 6)
 * )
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(Stream.flatten(streamOfStreams))
 *   values // => [ 1, 2, 3, 4, 5, 6 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const flatten = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, options) => flatMap(self, identity, options),
);
/**
 * Converts this stream to one that runs its effects but emits no elements.
 *
 * **Example** (Draining stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.range(1, 6).pipe(Stream.drain, Stream.runCollect)
 *   result // => []
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const drain = (self) => fromChannel(drain$2(self.channel));
/**
 * Switches to a fallback stream if this stream does not emit a value within
 * the specified duration.
 *
 * **When to use**
 *
 * Use when a stream should continue with another stream if an upstream pull
 * waits longer than the allowed duration.
 *
 * **Details**
 *
 * The timeout is checked for each pull. A zero duration uses `orElse`
 * immediately, while an infinite duration leaves the original stream
 * unchanged.
 *
 * **Gotchas**
 *
 * The fallback stream is not timed after the switch.
 *
 * @see {@link timeout} for ending the stream instead of switching to a fallback stream
 *
 * @stability stable
 * @category delays & timeouts
 * @since 4.0.0
 */
const timeoutOrElse = /*#__PURE__*/ dual(2, (self, options) => {
  const duration = fromInputUnsafe(options.duration);
  if (!isFinite(duration)) return self;
  if (isZero(duration)) return suspend(options.orElse);
  const timeoutSymbol = Symbol();
  return catchCause(
    suspend(() => {
      const clock = getCurrent().getRef(Clock);
      const durationMs = toMillis(duration);
      let deadline = void 0;
      const latch = makeUnsafe$1(false);
      return merge(
        transformPull(self, (pull, _scope) =>
          suspend$2(() => {
            deadline = clock.currentTimeMillisUnsafe() + durationMs;
            latch.openUnsafe();
            return pull;
          }).pipe(
            map$2((arr) => {
              latch.closeUnsafe();
              deadline = void 0;
              return arr;
            }),
            succeed$2,
          ),
        ),
        fromEffectDrain(
          gen(function* () {
            while (true) {
              yield* latch.await;
              if (deadline === void 0) continue;
              yield* sleep(deadline - clock.currentTimeMillisUnsafe());
              if (deadline === void 0) continue;
              if (deadline - clock.currentTimeMillisUnsafe() > 0) continue;
              return yield* die$3(timeoutSymbol);
            }
          }),
        ),
        { haltStrategy: "left" },
      );
    }),
    (cause) => {
      if (cause.reasons.find((r) => r._tag === "Die" && r.defect === timeoutSymbol))
        return options.orElse();
      return failCause(cause);
    },
  );
});
/**
 * Flattens the iterables emitted by this stream into the stream's structure.
 *
 * **Example** (Flattening iterable values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.make([1, 2], [3, 4]).pipe(Stream.flattenIterable)
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [ 1, 2, 3, 4 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 4.0.0
 */
const flattenIterable = (self) => flatMap(self, fromIterable);
/**
 * Concatenates two streams, emitting all elements from the first stream
 * followed by all elements from the second stream.
 *
 * **Example** (Concatenating streams)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.concat(Stream.make(1, 2, 3), Stream.make(4, 5, 6))
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [ 1, 2, 3, 4, 5, 6 ]
 * }))
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const concat = /*#__PURE__*/ dual(2, (self, that) => {
  const stream = fromChannel(flatten$1(fromIterator(() => concatChannels(self, that))));
  concatParts.set(stream, [self, that]);
  return stream;
});
const concatParts = /*#__PURE__*/ new WeakMap();
function* concatChannels(self, that) {
  const stack = [that, self];
  while (stack.length > 0) {
    const stream = stack.pop();
    const parts = concatParts.get(stream);
    if (parts === void 0) yield stream.channel;
    else stack.push(parts[1], parts[0]);
  }
}
/**
 * Merges two streams, emitting elements from both as they arrive.
 *
 * **Details**
 *
 * By default, the merged stream ends when both streams end. Use
 * `haltStrategy` to change the termination behavior.
 *
 * **Example** (Merging stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const fast = Stream.make(1, 2, 3)
 * const slow = Stream.fromEffect(Effect.delay(Effect.succeed(4), "50 millis"))
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(Stream.merge(fast, slow))
 *   result // => [ 1, 2, 3, 4 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category merging
 * @since 2.0.0
 */
const merge = /*#__PURE__*/ dual(
  (args) => isStream(args[0]) && isStream(args[1]),
  (self, that, options) => fromChannel(merge$1(toChannel(self), toChannel(that), options)),
);
/**
 * Merges a collection of streams, running up to the specified number concurrently.
 *
 * **When to use**
 *
 * Use to merge an iterable of already-created streams while bounding how many
 * inner streams may run at the same time.
 *
 * **Details**
 *
 * The `concurrency` option is required and may be a number or `"unbounded"`.
 * `bufferSize` controls buffering between inner streams, and outputs are
 * emitted as they arrive under concurrent merging.
 *
 * **Example** (Merging streams with bounded concurrency)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const streams = [
 *   Stream.fromEffect(Effect.delay(Effect.succeed("A"), "20 millis")),
 *   Stream.fromEffect(Effect.delay(Effect.succeed("B"), "10 millis"))
 * ]
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.mergeAll(streams, { concurrency: 2 }).pipe(
 *     Stream.runCollect
 *   )
 *   values // => [ 'B', 'A' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @see {@link merge} for merging exactly two streams and choosing a halt strategy
 * @see {@link flatten} for flattening a stream that already emits streams
 *
 * @stability stable
 * @category merging
 * @since 2.0.0
 */
const mergeAll = /*#__PURE__*/ dual(2, (streams, options) =>
  flatten(fromIterable(streams), options),
);
/**
 * Zips multiple streams so that when a value is emitted by any stream, it is
 * combined with the latest values from the other streams to produce a result.
 *
 * **When to use**
 *
 * Use when each stream should contribute its latest value after all streams have
 * emitted at least once.
 *
 * **Gotchas**
 *
 * Note: tracking the latest value is done on a per-array basis. That means
 * that emitted elements that are not the last value in arrays will never be
 * used for zipping.
 *
 * **Example** (Zipping latest values from many streams)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.zipLatestAll(
 *   Stream.make(1, 2, 3).pipe(Stream.rechunk(1)),
 *   Stream.make("a", "b", "c").pipe(Stream.rechunk(1)),
 *   Stream.make(true, false, true).pipe(Stream.rechunk(1))
 * )
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(stream)
 *   result // => [[1, "a", true], [2, "a", true], [2, "b", true], [2, "b", false], [3, "b", false], [3, "c", false], [3, "c", true]]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category zipping
 * @since 3.3.0
 */
const zipLatestAll = (...streams) =>
  fromChannel(
    suspend$1(() => {
      const latest = [];
      const emitted = /* @__PURE__ */ new Set();
      const readyLatch = makeUnsafe$1();
      const emptyLatch = makeUnsafe$1();
      return mergeAll$1(
        fromArray$1(
          streams.map((s, i) =>
            s.channel.pipe(
              flattenArray,
              mapEffect$1((a) => {
                latest[i] = a;
                if (!emitted.has(i)) {
                  emitted.add(i);
                  if (emitted.size < streams.length) return readyLatch.await;
                  return as(readyLatch.open, of(latest.slice()));
                }
                return succeed$2(of(latest.slice()));
              }),
              filter$1(isNotUndefined),
              mapDoneEffect(() => (emitted.has(i) ? void_ : emptyLatch.open)),
            ),
          ),
        ),
        {
          concurrency: "unbounded",
          bufferSize: 0,
        },
      ).pipe(interruptWhen$1(emptyLatch.await));
    }),
  );
/**
 * Combines the latest values from both streams whenever either emits, using
 * the provided function.
 *
 * **When to use**
 *
 * Use when two streams should start emitting custom combined values after both
 * have produced at least one value.
 *
 * **Gotchas**
 *
 * Note: tracking the latest value is done on a per-array basis. That means
 * that emitted elements that are not the last value in arrays will never be
 * used for zipping.
 *
 * **Example** (Zipping latest values with a function)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const result = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.rechunk(1),
 *     Stream.zipLatestWith(
 *       Stream.make(10, 20).pipe(Stream.rechunk(1)),
 *       (n, m) => n + m
 *     ),
 *     Stream.runCollect
 *   )
 *
 *   result // => [ 11, 12, 22, 23 ]
 * }))
 * ```
 *
 * @stability stable
 * @category zipping
 * @since 2.0.0
 */
const zipLatestWith = /*#__PURE__*/ dual(3, (left, right, f) =>
  map(zipLatestAll(left, right), ([a, a2]) => f(a, a2)),
);
/**
 * Filters a stream to the elements that satisfy a predicate.
 *
 * **Example** (Filtering stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const stream = Stream.make(1, 2, 3, 4).pipe(
 *     Stream.filter((n) => n % 2 === 0)
 *   )
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [ 2, 4 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filter = /*#__PURE__*/ dual(2, (self, predicate) =>
  fromChannel(filterArray(toChannel(self), predicate)),
);
/**
 * Filters and maps stream elements in one pass using a `Filter`.
 *
 * **When to use**
 *
 * Use to keep only stream elements accepted by a `Filter` and emit each filter
 * success value.
 *
 * **Details**
 *
 * `Result.succeed` values are emitted and `Result.fail` values are skipped.
 *
 * @see {@link filter} for keeping original elements with a boolean predicate or refinement
 * @see {@link filterMapEffect} for an effectful `Filter`
 * @see {@link partition} for consuming both filter success and failure values
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterMap = /*#__PURE__*/ dual(2, (self, filter) =>
  fromChannel(filterMapArray(toChannel(self), filter)),
);
/**
 * Filters elements in a single pass effectfully.
 *
 * **Example** (Effectfully filtering stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4).pipe(Stream.filterEffect((n) => Effect.succeed(n > 2)))
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(stream)
 *   result // => [ 3, 4 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterEffect = /*#__PURE__*/ dual(2, (self, predicate) =>
  fromChannel(filterArrayEffect(toChannel(self), predicate)),
);
/**
 * Filters and maps elements in one pass effectfully using a `FilterEffect`.
 *
 * **When to use**
 *
 * Use to apply effectful logic that can reject stream elements or emit
 * transformed values before they continue downstream.
 *
 * **Details**
 *
 * `Result.succeed` values are emitted, `Result.fail` values are skipped, and
 * effect failures fail the stream.
 *
 * @see {@link filterMap} for the synchronous `Filter` variant
 * @see {@link filterEffect} for effectfully keeping original elements
 * @see {@link mapEffect} for effectfully transforming every element
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const filterMapEffect = /*#__PURE__*/ dual(2, (self, filter) =>
  fromChannel(filterMapArrayEffect(toChannel(self), filter)),
);
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails. Allows recovery from all causes of failure, including
 * interruption if the stream is uninterruptible.
 *
 * **Example** (Catching stream causes)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2).pipe(
 *   Stream.concat(Stream.fail("Oops!")),
 *   Stream.concat(Stream.make(3, 4))
 * )
 *
 * const recovered = stream.pipe(
 *   Stream.catchCause(() => Stream.make(999))
 * )
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(recovered)
 *   values // => [ 1, 2, 999 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchCause = /*#__PURE__*/ dual(2, (self, f) =>
  self.channel.pipe(
    catchCause$1((cause) => f(cause).channel),
    fromChannel,
  ),
);
const catch_ = /*#__PURE__*/ dual(2, (self, f) =>
  fromChannel(catch_$1(self.channel, (error) => f(error).channel)),
);
/**
 * Recovers from errors that match a predicate by switching to a recovery stream.
 *
 * **Details**
 *
 * When a failure matches the filter, the stream switches to the recovery
 * stream. Non-matching failures propagate downstream, so the error type is
 * preserved unless the filter narrows it.
 *
 * **Example** (Catching matching failures)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2).pipe(
 *   Stream.concat(Stream.fail(42)),
 *   Stream.catchIf(
 *     (error): error is 42 => error === 42,
 *     () => Stream.make(999)
 *   )
 * )
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [ 1, 2, 999 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const catchIf = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, predicate, f, orElse) =>
    fromChannel(
      catchIf$1(
        toChannel(self),
        predicate,
        (e) => f(e).channel,
        orElse && ((e) => orElse(e).channel),
      ),
    ),
);
/**
 * Recovers from failures whose `_tag` matches the provided value by switching to
 * the stream returned by `f`.
 *
 * **When to use**
 *
 * Use when you need to handle a specific error case from a stream whose error
 * type is a tagged union with a readonly `_tag` field.
 *
 * **Example** (Catching tagged failures)
 *
 * ```ts import.meta.vitest
 * import { Data, Effect, Stream } from "effect"
 *
 * class HttpError extends Data.TaggedError("HttpError")<{ message: string }> {}
 *
 * const stream = Stream.fail(new HttpError({ message: "timeout" }))
 *
 * const recovered = Stream.catchTag(stream, "HttpError", (error) =>
 *   Stream.make(`Recovered: ${error.message}`)
 * )
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(recovered)
 *   values // => [ 'Recovered: timeout' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const catchTag = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, k, f, orElse) => {
    const pred = Array.isArray(k)
      ? (e) => hasProperty(e, "_tag") && k.includes(e._tag)
      : isTagged(k);
    return catchIf(self, pred, f, orElse);
  },
);
/**
 * Transforms the errors emitted by this stream using `f`.
 *
 * **Example** (Mapping stream errors)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.fail("bad").pipe(
 *     Stream.mapError((error) => `mapped: ${error}`),
 *     Stream.catch((error) => Stream.make(`recovered from ${error}`)),
 *     Stream.runCollect
 *   )
 *   result // => [ 'recovered from mapped: bad' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const mapError = /*#__PURE__*/ dual(2, (self, f) => fromChannel(mapError$1(self.channel, f)));
/**
 * Turns typed failures into defects, making the stream infallible.
 *
 * **Example** (Turning failures into defects)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.orDie,
 *     Stream.runCollect
 *   )
 *
 *   values // => [ 1, 2, 3 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const orDie = (self) => fromChannel(orDie$1(self.channel));
/**
 * Ignores failures and ends the stream on error.
 *
 * **When to use**
 *
 * Use when you want a failing stream to end gracefully rather than propagate
 * the error.
 *
 * **Details**
 *
 * The `log` option controls whether the failure is logged before the stream
 * terminates.
 *
 * **Example** (Ignoring stream failures)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.concat(Stream.fail("boom")),
 *     Stream.ignore,
 *     Stream.runCollect
 *   )
 *   values // => [ 1, 2, 3 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * **Example** (Configuring ignore logging)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const values = yield* Stream.fail("boom").pipe(
 *     Stream.ignore({ log: false }),
 *     Stream.runCollect
 *   )
 *   values // => []
 * }))
 *
 * ```
 *
 * @see {@link ignoreCause} for a variant that also ignores defects, not just typed failures
 *
 * @stability stable
 * @category error handling
 * @since 4.0.0
 */
const ignore = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, options) => fromChannel(ignore$1(self.channel, options)),
);
/**
 * Retries the stream according to the given schedule when it fails.
 *
 * **Details**
 *
 * This retries the entire stream, so will re-execute all of the stream's
 * acquire operations.
 *
 * The schedule is reset as soon as the first element passes through the
 * stream again.
 *
 * **Example** (Retrying stream failures)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1).pipe(
 *     Stream.concat(Stream.fail("boom")),
 *     Stream.retry(Schedule.recurs(1)),
 *     Stream.take(2),
 *     Stream.runCollect
 *   )
 *
 *   values // => [ 1, 1 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category error handling
 * @since 2.0.0
 */
const retry = /*#__PURE__*/ dual(2, (self, policy) => fromChannel(retry$1(self.channel, policy)));
/**
 * Takes elements until the predicate matches.
 *
 * **Details**
 *
 * When `excludeLast` is `true`, the matching element is dropped.
 *
 * **Example** (Taking until a predicate matches)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 5)
 *
 * const program = Effect.gen(function*() {
 *   const inclusive = yield* stream.pipe(
 *     Stream.takeUntil((n) => n % 3 === 0),
 *     Stream.runCollect
 *   )
 *   inclusive // => [ 1, 2, 3 ]
 *
 *   const exclusive = yield* stream.pipe(
 *     Stream.takeUntil((n) => n % 3 === 0, { excludeLast: true }),
 *     Stream.runCollect
 *   )
 *   exclusive // => [ 1, 2 ]
 * })
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const takeUntil = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, predicate, options) =>
    transformPull(self, (pull, _scope) =>
      sync$2(() => {
        let i = 0;
        let done$6 = false;
        return flatMap$2(
          suspend$2(() => (done$6 ? done() : pull)),
          (chunk) => {
            const index = chunk.findIndex((a) => predicate(a, i++));
            if (index >= 0) {
              done$6 = true;
              const arr = chunk.slice(0, options?.excludeLast ? index : index + 1);
              return isReadonlyArrayNonEmpty(arr) ? succeed$2(arr) : done();
            }
            return succeed$2(chunk);
          },
        );
      }),
    ),
);
/**
 * Takes stream elements until an effectful predicate returns `true`.
 *
 * **When to use**
 *
 * Use when the stopping condition needs an Effect or service and predicate
 * failure should fail the stream.
 *
 * **Example** (Taking until an effectful predicate matches)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.range(1, 5).pipe(
 *     Stream.takeUntilEffect((n) => Effect.succeed(n % 3 === 0)),
 *     Stream.runCollect
 *   )
 *   result // => [ 1, 2, 3 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const takeUntilEffect = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, predicate, options) =>
    transformPull(self, (pull, _scope) =>
      sync$2(() => {
        let i = 0;
        let done$5 = false;
        return gen(function* () {
          if (done$5) return yield* done();
          const chunk = yield* pull;
          for (let j = 0; j < chunk.length; j++)
            if (yield* predicate(chunk[j], i++)) {
              done$5 = true;
              const arr = chunk.slice(0, options?.excludeLast ? j : j + 1);
              return isReadonlyArrayNonEmpty(arr) ? arr : yield* done();
            }
          return chunk;
        });
      }),
    ),
);
/**
 * Takes the longest initial prefix of elements that satisfy the predicate.
 *
 * **Example** (Taking while a predicate holds)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 5).pipe(
 *   Stream.takeWhile((n) => n % 3 !== 0)
 * )
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(stream)
 *   result // => [ 1, 2 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const takeWhile = /*#__PURE__*/ dual(2, (self, predicate) =>
  transformPull(self, (pull, _scope) =>
    sync$2(() => {
      let i = 0;
      let done$7 = false;
      const pump = flatMap$2(
        suspend$2(() => (done$7 ? done() : pull)),
        (chunk) => {
          const out = [];
          for (let j = 0; j < chunk.length; j++) {
            if (!predicate(chunk[j], i++)) {
              done$7 = true;
              break;
            }
            out.push(chunk[j]);
          }
          return isReadonlyArrayNonEmpty(out) ? succeed$2(out) : done$7 ? done() : pump;
        },
      );
      return pump;
    }),
  ),
);
/**
 * Drops the first `n` elements from this stream.
 *
 * **Details**
 *
 * Finite fractional values of `n` are rounded down. `NaN` and non-positive
 * values return the source stream unchanged.
 *
 * **Example** (Dropping values from the left)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5)
 * const result = Stream.drop(stream, 2)
 *
 * const program = Effect.gen(function*() {
 *   const items = yield* Stream.runCollect(result)
 *   items // => [ 3, 4, 5 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category filtering
 * @since 2.0.0
 */
const drop = /*#__PURE__*/ dual(2, (self, n) => {
  const count = normalize(n);
  if (count === 0) return self;
  return transformPull(self, (pull, _scope) =>
    sync$2(() => {
      let dropped = 0;
      const pump = pull.pipe(
        flatMap$2((chunk) => {
          if (dropped >= count) return succeed$2(chunk);
          dropped += chunk.length;
          if (dropped <= count) return pump;
          return succeed$2(chunk.slice(count - dropped));
        }),
      );
      return pump;
    }),
  );
});
/**
 * Groups the stream into arrays of the specified size, preserving element order.
 *
 * **Details**
 *
 * Finite fractional sizes are rounded down. `NaN` and non-positive sizes are
 * treated as `1`.
 *
 * **Example** (Rechunking stream elements)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.make(1, 2, 3, 4, 5).pipe(
 *     Stream.rechunk(2),
 *     Stream.chunks,
 *     Stream.runCollect
 *   )
 *   result // => [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category grouping
 * @since 2.0.0
 */
const rechunk = /*#__PURE__*/ dual(2, (self, target) => {
  target = normalizeNonEmpty(target);
  return transformPull(self, (pull, _scope) =>
    sync$2(() => {
      let chunk = empty$2();
      let index = 0;
      let current;
      let done$4 = false;
      return suspend$2(function loop() {
        if (done$4) return done();
        else if (current === void 0)
          return flatMap$2(pull, (arr) => {
            if (chunk.length === 0 && arr.length === target) return succeed$2(arr);
            else if (chunk.length + arr.length < target) {
              for (let i = 0; i < arr.length; i++) chunk.push(arr[i]);
              return loop();
            }
            current = arr;
            return loop();
          });
        for (; index < current.length;) {
          chunk.push(current[index++]);
          if (chunk.length === target) {
            const result = chunk;
            chunk = [];
            return succeed$2(result);
          }
        }
        index = 0;
        current = void 0;
        return loop();
      }).pipe(
        catchDone(() => {
          if (chunk.length === 0) return done();
          const result = chunk;
          done$4 = true;
          chunk = [];
          return succeed$2(result);
        }),
      );
    }),
  );
});
/**
 * Maps elements statefully, emitting zero or more outputs per input.
 *
 * **Example** (Statefully mapping stream values)
 *
 * ```ts import.meta.vitest
 * import { Console, Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const totals = yield* Stream.make(0, 1, 2, 3, 4, 5, 6).pipe(
 *     Stream.mapAccum(() => 0, (total, n) => {
 *       const next = total + n
 *       return [next, [next]] as const
 *     }),
 *     Stream.runCollect
 *   )
 *
 *   totals // => [0, 1, 3, 6, 10, 15, 21]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category mapping
 * @since 2.0.0
 */
const mapAccum = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, initial, f, options) =>
    fromChannel(
      mapAccum$1(
        self.channel,
        initial,
        (state, arr) => {
          const acc = empty$2();
          for (let index = 0; index < arr.length; index++) {
            const [newState, values] = f(state, arr[index]);
            state = newState;
            acc.push(...values);
          }
          return [state, isArrayNonEmpty(acc) ? of(acc) : emptyArr];
        },
        options?.onHalt
          ? {
              onHalt(state) {
                const arr = options.onHalt(state);
                return isReadonlyArrayNonEmpty(arr) ? of(arr) : emptyArr;
              },
            }
          : void 0,
      ),
    ),
);
const emptyArr = /*#__PURE__*/ empty$2();
/**
 * Drops earlier elements within the debounce window and emits only the latest element after the pause.
 *
 * **Example** (Debouncing stream elements)
 *
 * ```ts import.meta.vitest
 * import { Duration, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(Stream.debounce(Duration.zero))
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.runCollect(stream)
 *   values // => [ 3 ]
 * })
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category rate limiting
 * @since 2.0.0
 */
const debounce = /*#__PURE__*/ dual(2, (self, duration) =>
  transformPull(
    self,
    fnUntraced(function* (pull, scope) {
      const clock = yield* Clock;
      const durationMs = toMillis(fromInputUnsafe(duration));
      let lastArr;
      let cause;
      let emitAtMs = Infinity;
      const pullLatch = makeUnsafe$1();
      const emitLatch = makeUnsafe$1();
      const endLatch = makeUnsafe$1();
      yield* pull.pipe(
        pullLatch.whenOpen,
        flatMap$2((arr) => {
          emitLatch.openUnsafe();
          lastArr = arr;
          emitAtMs = clock.currentTimeMillisUnsafe() + durationMs;
          return void_;
        }),
        forever({ disableYield: true }),
        onError((cause_) => {
          cause = cause_;
          emitAtMs = clock.currentTimeMillisUnsafe();
          emitLatch.openUnsafe();
          endLatch.openUnsafe();
          return void_;
        }),
        forkIn(scope),
      );
      const sleepLoop = suspend$2(function loop() {
        const now = clock.currentTimeMillisUnsafe();
        const timeMs = emitAtMs < now ? durationMs : Math.min(durationMs, emitAtMs - now);
        return flatMap$2(raceFirst(sleep(timeMs), endLatch.await), () => {
          if (clock.currentTimeMillisUnsafe() < emitAtMs) return loop();
          else if (lastArr) {
            emitLatch.closeUnsafe();
            pullLatch.closeUnsafe();
            const eff = succeed$2(of(lastNonEmpty(lastArr)));
            lastArr = void 0;
            return eff;
          } else if (cause) return failCause$3(cause);
          return loop();
        });
      });
      return suspend$2(() => {
        if (cause) {
          if (lastArr) {
            const eff = succeed$2(of(lastNonEmpty(lastArr)));
            lastArr = void 0;
            return eff;
          }
          return failCause$3(cause);
        }
        pullLatch.openUnsafe();
        return emitLatch.whenOpen(sleepLoop);
      });
    }),
  ),
);
/**
 * Partitions the stream into arrays, emitting when the chunk size is reached
 * or the duration passes.
 *
 * **Details**
 *
 * The duration starts when the first element of a group arrives, so an idle
 * stream does not wake up. Finite fractional chunk sizes are rounded down.
 * `NaN` and non-positive sizes are treated as `1`.
 *
 * **Example** (Grouping elements by size or time)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.groupedWithin(2, "5 seconds"),
 *     Stream.runCollect
 *   )
 *   values // => [ [ 1, 2 ], [ 3 ] ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category grouping
 * @since 2.0.0
 */
const groupedWithin = /*#__PURE__*/ dual(3, (self, chunkSize, duration) =>
  aggregateWithin(self, take(normalizeNonEmpty(chunkSize)), spaced(duration)),
);
/**
 * Applies a sink transducer to the stream and emits each sink result.
 *
 * **Example** (Transducing with a sink)
 *
 * ```ts import.meta.vitest
 * import { Effect, Sink, Stream } from "effect"
 *
 * const program = Effect.gen(function* () {
 *   const result = yield* Stream.make(1, 2, 3, 4).pipe(
 *     Stream.transduce(Sink.take(2)),
 *     Stream.runCollect
 *   )
 *
 *   result // => [ [ 1, 2 ], [ 3, 4 ], [] ]
 * })
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category aggregation
 * @since 2.0.0
 */
const transduce = /*#__PURE__*/ dual(2, (self, sink) =>
  transformPull(self, (upstream, scope) =>
    sync$2(() => {
      let done$1;
      let leftover;
      const upstreamWithLeftover = suspend$2(() => {
        if (leftover !== void 0) {
          const chunk = leftover;
          leftover = void 0;
          return succeed$2(chunk);
        }
        return upstream;
      }).pipe(
        catch_$2((error) => {
          done$1 = fail$4(error);
          return done();
        }),
      );
      const pull = map$2(
        suspend$2(() => sink.transform(upstreamWithLeftover, scope)),
        ([value, leftover_]) => {
          leftover = leftover_;
          return of(value);
        },
      );
      return suspend$2(() => (done$1 ? done$1 : pull));
    }),
  ),
);
/**
 * Aggregates elements with a sink, emitting each result when the sink completes or the schedule triggers.
 *
 * **Details**
 *
 * The schedule can flush the current aggregation even if the sink has not finished.
 * It is stepped at most once per aggregation, when the aggregation receives its
 * first element, with the previous aggregation's output as input. An aggregation
 * the sink completes immediately, such as one built from leftovers, may finish
 * without stepping the schedule.
 *
 * Time between aggregations is hidden from the schedule, so an idle stream does
 * not run it. Time-based schedules such as `Schedule.fixed` and
 * `Schedule.upTo({ duration })` only count time spent aggregating; use
 * `Schedule.spaced` for a flush timer.
 *
 * When the schedule ends, the stream emits the current aggregation and any sink
 * leftovers, then ends without pulling more from upstream.
 *
 * **Example** (Aggregating with a sink and schedule)
 *
 * ```ts import.meta.vitest
 * import { Effect, Schedule, Sink, Stream } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function* () {
 *   const aggregated = yield* Stream.runCollect(
 *     Stream.make(1, 2, 3, 4, 5, 6).pipe(
 *       Stream.aggregateWithin(
 *         Sink.foldUntil(() => 0, 3, (sum, n) => Effect.succeed(sum + n)),
 *         Schedule.forever
 *       )
 *     )
 *   )
 *   aggregated // => [ 6, 15 ]
 * }))
 * ```
 *
 * @stability stable
 * @category aggregation
 * @since 2.0.0
 */
const aggregateWithin = /*#__PURE__*/ dual(3, (self, sink, schedule) =>
  fromChannel(
    fromTransformBracket(
      fnUntraced(function* (_upstream, _, scope) {
        const pull = yield* toPullScoped(self.channel, _);
        const pullLatch = makeUnsafe$1(false);
        const scheduleStep = Symbol();
        const buffer = yield* make$2({ capacity: 0 });
        yield* pull.pipe(
          pullLatch.whenOpen,
          flatMap$2((arr) => {
            pullLatch.closeUnsafe();
            return offer(buffer, arr);
          }),
          forever,
          catchCause$2((cause) => failCause$2(buffer, cause)),
          forkIn(scope),
        );
        const clock = yield* Clock;
        const step = yield* toStep(schedule);
        const hasInput = makeUnsafe$1(false);
        let scheduleTime = clock.currentTimeMillisUnsafe();
        let openedAt = 0;
        let lastOutput = none();
        let leftover;
        const onInput = (chunk) => {
          if (hasInput.openUnsafe()) openedAt = clock.currentTimeMillisUnsafe();
          return succeed$2(chunk);
        };
        const stepToBuffer = hasInput.await.pipe(
          flatMap$2(() => step(scheduleTime, lastOutput)),
          flatMap$2(([, delay]) => sleep(delay)),
          flatMap$2(() => offer(buffer, scheduleStep)),
          catchDone(() => end(buffer)),
          flatMap$2(() => never),
        );
        const sinkUpstream = suspend$2(() => {
          if (leftover !== void 0) {
            const chunk = leftover;
            leftover = void 0;
            return onInput(chunk);
          }
          if (buffer.state._tag === "Open") pullLatch.openUnsafe();
          return flatMap$2(take$1(buffer), (arr) => (arr === scheduleStep ? done() : onInput(arr)));
        });
        const emit = flatMap$2(([value, leftover_]) => {
          if (hasInput.isOpen()) scheduleTime += clock.currentTimeMillisUnsafe() - openedAt;
          else if (buffer.state._tag === "Done") return done();
          lastOutput = some(value);
          leftover = leftover_;
          return succeed$2(of(value));
        });
        return suspend$2(() => {
          if (buffer.state._tag === "Done" && leftover === void 0) return buffer.state.exit;
          hasInput.closeUnsafe();
          const pull = emit(suspend$2(() => sink.transform(sinkUpstream, scope)));
          return buffer.state._tag === "Open" ? raceFirst(pull, stepToBuffer) : pull;
        });
      }),
    ),
  ),
);
/**
 * Pipes this stream through a channel that consumes and emits chunked elements.
 *
 * **Details**
 *
 * The channel receives `NonEmptyReadonlyArray` chunks and can transform both the
 * output elements and error type.
 *
 * **Example** (Piping through a channel)
 *
 * ```ts import.meta.vitest
 * import { Array, Channel, Effect, Stream } from "effect"
 *
 * type NumberChunk = readonly [number, ...Array<number>]
 *
 * const doubleChunks = Channel.identity<NumberChunk, never, unknown>().pipe(
 *   Channel.map((chunk) => Array.map(chunk, (n) => n * 2))
 * )
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.fromArray([1, 2, 3]).pipe(
 *     Stream.rechunk(2),
 *     Stream.pipeThroughChannel(doubleChunks),
 *     Stream.runCollect
 *   )
 *   result // => [ 2, 4, 6 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const pipeThroughChannel = /*#__PURE__*/ dual(2, (self, channel) =>
  fromChannel(pipeTo(self.channel, channel)),
);
/**
 * Pipes values through the provided channel while preserving this stream's
 * failures alongside any channel failures.
 *
 * **Details**
 *
 * Upstream failures are not passed to the channel, so the resulting stream can
 * fail with either the original stream error or the channel error.
 *
 * **Example** (Piping through a channel with failures)
 *
 * ```ts import.meta.vitest
 * import { Array, Channel, Effect, Stream } from "effect"
 *
 * type NumberChunk = readonly [number, ...Array<number>]
 *
 * const stringifyChunks = Channel.identity<NumberChunk, "StreamError", unknown>().pipe(
 *   Channel.map((chunk) => Array.map(chunk, String))
 * )
 *
 * await Effect.runPromise(Effect.gen(function*() {
 *   const result = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.rechunk(2),
 *     Stream.pipeThroughChannelOrFail(stringifyChunks),
 *     Stream.runCollect
 *   )
 *
 *   result // => ["1", "2", "3"]
 * }))
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 2.0.0
 */
const pipeThroughChannelOrFail = /*#__PURE__*/ dual(2, (self, channel) =>
  fromChannel(pipeToOrFail(self.channel, channel)),
);
/**
 * Emits only elements that differ from the previous one.
 *
 * **Example** (Emitting changed values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.fromIterable([1, 1, 2, 2, 3]).pipe(
 *     Stream.changes,
 *     Stream.runCollect
 *   )
 *
 *   values // => [ 1, 2, 3 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category deduplication
 * @since 2.0.0
 */
const changes = (self) => changesWith(self, equals);
/**
 * Returns a stream that only emits elements that are not equal to the previously emitted element, as determined by the specified predicate.
 *
 * **Example** (Emitting values that changed by equivalence)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make("A", "a", "B", "b", "b").pipe(
 *   Stream.changesWith((left, right) => left.toLowerCase() === right.toLowerCase())
 * )
 *
 * await Effect.runPromise(
 *   Effect.gen(function*() {
 *     const values = yield* Stream.runCollect(stream)
 *     values // => [ 'A', 'B' ]
 *   })
 * )
 * ```
 *
 * @stability stable
 * @category deduplication
 * @since 2.0.0
 */
const changesWith = /*#__PURE__*/ dual(2, (self, f) =>
  transformPull(self, (pull, _scope) =>
    sync$2(() => {
      let first = true;
      let last;
      return flatMap$2(pull, function loop(arr) {
        const out = [];
        let i = 0;
        if (first) {
          first = false;
          last = arr[0];
          i = 1;
          out.push(last);
        }
        for (; i < arr.length; i++) {
          const a = arr[i];
          if (f(a, last)) continue;
          last = a;
          out.push(a);
        }
        return isArrayNonEmpty(out) ? succeed$2(out) : flatMap$2(pull, loop);
      });
    }),
  ),
);
/**
 * Decodes Uint8Array chunks into strings using TextDecoder with an optional encoding.
 *
 * **Example** (Decoding Uint8Array chunks into strings using TextDecoder with an optional encoding)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const encoder = new TextEncoder()
 * const stream = Stream.make(
 *   encoder.encode("Hello"),
 *   encoder.encode(" World")
 * )
 *
 * const program = Effect.gen(function*() {
 *   const decoded = yield* stream.pipe(
 *     Stream.decodeText,
 *     Stream.runCollect
 *   )
 *   decoded // => [ 'Hello', ' World' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category text
 * @since 2.0.0
 */
const decodeText = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, options) =>
    suspend(() => {
      const decoder = new TextDecoder(options?.encoding);
      return map(self, (chunk) => decoder.decode(chunk, { stream: true }));
    }),
);
/**
 * Encodes a stream of strings into UTF-8 `Uint8Array` chunks.
 *
 * **Example** (Encoding a stream of strings into UTF-8 Uint8Array chunks)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make("Hello", " ", "World")
 * const program = Effect.gen(function*() {
 *   const encoded = Stream.encodeText(stream)
 *   const chunks = yield* Stream.runCollect(encoded)
 *   const bytes = chunks.map((chunk) => [...chunk])
 *   bytes // => [ [ 72, 101, 108, 108, 111 ], [ 32 ], [ 87, 111, 114, 108, 100 ] ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category text
 * @since 2.0.0
 */
const encodeText = (self) =>
  suspend(() => {
    const encoder = new TextEncoder();
    return map(self, (chunk) => encoder.encode(chunk));
  });
/**
 * Splits a stream of strings into lines, handling `\n`, `\r`, and `\r\n` delimiters across chunks.
 *
 * **Example** (Splitting streamed text into lines)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * await Effect.runPromise(Effect.gen(function* () {
 *   const lines = yield* Stream.runCollect(
 *     Stream.make("a\nb\r\n", "c\n").pipe(Stream.splitLines)
 *   )
 *   lines // => [ 'a', 'b', 'c' ]
 * }))
 * ```
 *
 * @stability stable
 * @category text
 * @since 2.0.0
 */
const splitLines = (self) => self.channel.pipe(pipeTo(splitLines$1()), fromChannel);
/**
 * Interrupts the evaluation of this stream when the provided effect
 * completes. The given effect will be forked as part of this stream, and its
 * success will be discarded. This combinator will also interrupt any
 * in-progress element being pulled from upstream.
 *
 * **Details**
 *
 * If the effect completes with a failure before the stream completes, the
 * returned stream will emit that failure.
 *
 * **Example** (Interrupting when an effect completes)
 *
 * ```ts import.meta.vitest
 * import { Deferred, Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const interrupt = yield* Deferred.make<void>()
 *   const stream = Stream.make(1, 2, 3).pipe(
 *     Stream.tap((value) =>
 *       value === 2
 *         ? Deferred.succeed(interrupt, void 0)
 *         : Effect.void
 *     ),
 *     Stream.interruptWhen(Deferred.await(interrupt))
 *   )
 *
 *   const result = yield* Stream.runCollect(stream)
 *   result // => [ 1 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category interruption
 * @since 2.0.0
 */
const interruptWhen = /*#__PURE__*/ dual(2, (self, effect) =>
  fromChannel(interruptWhen$1(self.channel, effect)),
);
/**
 * Runs the provided effect when the stream ends successfully.
 *
 * **Example** (Running an effect on end)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const events: Array<string> = []
 * const program = Effect.gen(function*() {
 *   const values = yield* Stream.make(1, 2, 3).pipe(
 *     Stream.onEnd(Effect.sync(() => events.push("ended"))),
 *     Stream.runCollect
 *   )
 *   values // => [1, 2, 3]
 * })
 *
 * await Effect.runPromise(program)
 * events // => ["ended"]
 * ```
 *
 * @stability stable
 * @category sequencing
 * @since 3.6.0
 */
const onEnd = /*#__PURE__*/ dual(2, (self, onEnd) => fromChannel(onEnd$1(self.channel, onEnd)));
/**
 * Executes the provided finalizer after this stream's finalizers run.
 *
 * **Example** (Ensuring finalization)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const events: Array<string> = []
 * const stream = Stream.fromArray([1, 2]).pipe(
 *   Stream.ensuring(Effect.sync(() => events.push("cleanup")))
 * )
 *
 * const program = Effect.gen(function*() {
 *   const collected = yield* Stream.runCollect(stream)
 *   collected // => [1, 2]
 * })
 *
 * await Effect.runPromise(program)
 * events // => ["cleanup"]
 * ```
 *
 * @stability stable
 * @category resource management
 * @since 2.0.0
 */
const ensuring = /*#__PURE__*/ dual(2, (self, finalizer) =>
  fromChannel(ensuring$1(self.channel, finalizer)),
);
/**
 * Provides multiple services to the stream using a context.
 *
 * **Example** (Providing multiple services to the stream using a context)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Stream } from "effect"
 *
 * class Config extends Context.Service<Config, { readonly prefix: string }>()("Config") {}
 * class Greeter extends Context.Service<Greeter, { greet: (name: string) => string }>()("Greeter") {}
 *
 * const context = Context.make(Config, { prefix: "Hello" }).pipe(
 *   Context.add(Greeter, { greet: (name: string) => `${name}!` })
 * )
 *
 * const stream = Stream.fromEffect(
 *   Effect.gen(function*() {
 *     const config = yield* Effect.service(Config)
 *     const greeter = yield* Effect.service(Greeter)
 *     return greeter.greet(config.prefix)
 *   })
 * )
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Stream.runCollect(Stream.provideContext(stream, context))
 *   result // => [ 'Hello!' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideContext = /*#__PURE__*/ dual(2, (self, context) =>
  fromChannel(provideContext$1(self.channel, context)),
);
/**
 * Provides the stream with a single required service, eliminating that
 * requirement from its environment.
 *
 * **Example** (Providing a stream service)
 *
 * ```ts import.meta.vitest
 * import { Context, Effect, Stream } from "effect"
 *
 * class Greeter extends Context.Service<Greeter, {
 *   greet: (name: string) => string
 * }>()("Greeter") {}
 *
 * const stream = Stream.fromEffect(
 *   Effect.service(Greeter).pipe(
 *     Effect.map((greeter) => greeter.greet("Ada"))
 *   )
 * )
 *
 * const program = Effect.gen(function*() {
 *   const collected = yield* Stream.runCollect(
 *     stream.pipe(
 *       Stream.provideService(Greeter, {
 *         greet: (name) => `Hello, ${name}`
 *       })
 *     )
 *   )
 *   collected // => [ 'Hello, Ada' ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category providing services
 * @since 2.0.0
 */
const provideService = /*#__PURE__*/ dual(3, (self, key, service) =>
  fromChannel(provideService$1(self.channel, key, service)),
);
/**
 * Runs a stream with a sink and returns the sink result.
 *
 * **Example** (Running a stream with a sink)
 *
 * ```ts import.meta.vitest
 * import { Effect, Sink, Stream } from "effect"
 *
 * const program = Stream.run(Stream.make(1, 2, 3), Sink.sum)
 *
 * await Effect.runPromise(program) // => 6
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const run = /*#__PURE__*/ dual(2, (self, sink) =>
  scopedWith((scope) =>
    toPullScoped(self.channel, scope).pipe(
      flatMap$2((upstream) => sink.transform(upstream, scope)),
      map$2(([a]) => a),
    ),
  ),
);
/**
 * Runs the stream and collects all elements into an array.
 *
 * **Example** (Collecting stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5)
 *
 * const program = Effect.gen(function*() {
 *   const collected = yield* Stream.runCollect(stream)
 *   collected // => [ 1, 2, 3, 4, 5 ]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runCollect = (self) =>
  runFold$1(
    self.channel,
    () => [],
    (acc, chunk) => {
      for (let i = 0; i < chunk.length; i++) acc.push(chunk[i]);
      return acc;
    },
  );
/**
 * Runs the stream and folds elements using a pure reducer.
 *
 * **Example** (Folding stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const total = yield* Stream.runFold(
 *     Stream.make(1, 2, 3),
 *     () => 0,
 *     (acc, n) => acc + n
 *   )
 *   total // => 6
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runFold = /*#__PURE__*/ dual(3, (self, initial, f) =>
  runFold$1(self.channel, initial, (acc, arr) => {
    for (let i = 0; i < arr.length; i++) acc = f(acc, arr[i]);
    return acc;
  }),
);
/**
 * Runs the stream and folds elements using an effectful reducer.
 *
 * **When to use**
 *
 * Use when reducing stream elements needs Effects, services, or failures in the
 * reducer.
 *
 * **Example** (Effectfully folding stream values)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const total = yield* Stream.runFoldEffect(
 *     Stream.make(1, 2, 3),
 *     () => 0,
 *     (acc, n) => Effect.succeed(acc + n)
 *   )
 *   total // => 6
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runFoldEffect = /*#__PURE__*/ dual(3, (self, initial, f) =>
  runFoldEffect$1(self.channel, initial, (acc, arr) => {
    let i = 0;
    let s = acc;
    return map$2(
      whileLoop$1({
        while: () => i < arr.length,
        body: () => f(s, arr[i]),
        step(z) {
          s = z;
          i++;
        },
      }),
      () => s,
    );
  }),
);
/**
 * Runs the stream and returns the first element as an `Option`.
 *
 * **Example** (Getting the first stream value)
 *
 * ```ts import.meta.vitest
 * import { Effect, Option, Stream } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const head = yield* Stream.runHead(Stream.make(1, 2, 3))
 *   Option.getOrThrow(head) // => 1
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runHead = (self) => map$2(runHead$1(self.channel), map$4(getUnsafe(0)));
/**
 * Runs the stream and returns the last element as an `Option`.
 *
 * **When to use**
 *
 * Use to consume a finite stream when only the final emitted element matters.
 *
 * **Details**
 *
 * `Option.some` contains the last emitted element. `Option.none` means the
 * stream completed without emitting.
 *
 * **Gotchas**
 *
 * The returned effect waits for the stream to complete before it can produce a
 * value.
 *
 * @see {@link runHead} for consuming only the first emitted element
 * @see {@link runCollect} for collecting every emitted element
 * @see {@link runDrain} for consuming the stream while discarding emitted elements
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runLast = (self) => map$2(runLast$1(self.channel), map$4(lastNonEmpty));
/**
 * Runs the provided effectful callback for each element of the stream.
 *
 * **Example** (Running an effect for each value)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 * const values: Array<string> = []
 *
 * const program = Effect.gen(function*() {
 *   yield* Stream.runForEach(stream, (n) => Effect.sync(() => values.push(`Processing: ${n}`)))
 * })
 *
 * await Effect.runPromise(program)
 * values // => ["Processing: 1", "Processing: 2", "Processing: 3"]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runForEach = /*#__PURE__*/ dual(2, (self, f) =>
  runForEach$1(self.channel, (arr) => {
    let i = 0;
    return whileLoop$1({
      while: () => i < arr.length,
      body: () => f(arr[i++]),
      step: constVoid,
    });
  }),
);
/**
 * Runs the stream, applying the effectful predicate to each element and
 * stopping when it returns `false`.
 *
 * **Example** (Running effects while a predicate holds)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const values: Array<number> = []
 * const program = Effect.gen(function*() {
 *   const stream = Stream.make(1, 2, 3, 4, 5)
 *
 *   yield* Stream.runForEachWhile(stream, (n) =>
 *     Effect.gen(function*() {
 *       yield* Effect.sync(() => values.push(n))
 *       return n < 3
 *     })
 *   )
 * })
 *
 * await Effect.runPromise(program)
 * values // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runForEachWhile = /*#__PURE__*/ dual(2, (self, f) =>
  runForEachWhile$1(self.channel, (arr) => {
    let done = false;
    let i = 0;
    return map$2(
      whileLoop$1({
        while: () => !done && i < arr.length,
        body: () => f(arr[i]),
        step(b) {
          i++;
          if (!b) done = true;
        },
      }),
      () => !done,
    );
  }),
);
/**
 * Consumes the stream in chunks, passing each non-empty array to the callback.
 *
 * **Example** (Consuming stream chunks)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5)
 * const chunks: Array<string> = []
 * const program = Effect.gen(function*() {
 *   yield* Stream.runForEachArray(
 *     stream,
 *     (chunk) => Effect.sync(() => chunks.push(chunk.join(", ")))
 *   )
 * })
 *
 * await Effect.runPromise(program)
 * chunks // => ["1, 2, 3, 4, 5"]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const runForEachArray = /*#__PURE__*/ dual(2, (self, f) => runForEach$1(self.channel, f));
/**
 * Runs the stream for its effects, discarding emitted elements.
 *
 * **Example** (Draining a stream run)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const values: Array<number> = []
 * const program = Effect.gen(function*() {
 *   const stream = Stream.make(1, 2, 3).pipe(
 *     Stream.mapEffect((n) => Effect.sync(() => values.push(n)))
 *   )
 *
 *   yield* Stream.runDrain(stream)
 * })
 *
 * await Effect.runPromise(program)
 * values // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const runDrain = (self) => runDrain$1(self.channel);
/**
 * Returns a scoped pull for manually consuming the stream's output chunks.
 *
 * **Details**
 *
 * The pull fails with `Cause.Done` when the stream ends and with the stream
 * error on failure.
 *
 * **Example** (Creating a scoped pull)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const pull = yield* Stream.toPull(stream)
 *     const chunk = yield* pull
 *     chunk // => [ 1, 2, 3 ]
 *   })
 * )
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const toPull = (self) => toPull$1(self.channel);
/**
 * Concatenates all emitted strings into a single string.
 *
 * **Example** (Joining strings from a stream)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make("Hello", " ", "World", "!")
 * const program = Effect.gen(function*() {
 *   const text = yield* Stream.mkString(stream)
 *   text // => "Hello World!"
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const mkString = (self) =>
  runFold$1(
    self.channel,
    () => "",
    (acc, chunk) => acc + chunk.join(""),
  );
/**
 * Concatenates the stream's `Uint8Array` chunks into a single `Uint8Array`.
 *
 * **Gotchas**
 *
 * This materializes the full content in memory. The source stream must not
 * reuse or mutate emitted buffers, which are retained until collection completes.
 *
 * **Example** (Joining Uint8Array chunks)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(new Uint8Array([1, 2]), new Uint8Array([3, 4]))
 * const program = Effect.gen(function*() {
 *   const bytes = yield* Stream.mkUint8Array(stream)
 *   const values = Array.from(bytes) // => [1, 2, 3, 4]
 * })
 *
 * await Effect.runPromise(program)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const mkUint8Array = (self) => mkUint8Array$1(self.channel);
/**
 * Converts the stream to a `ReadableStream` using the provided services.
 *
 * **When to use**
 *
 * Use when bridging to Web Streams and you already have the `Context` required
 * to run the stream outside an `Effect`.
 *
 * **Details**
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * When `signal` aborts, the stream is interrupted even if the reader has
 * stopped pulling, and the `ReadableStream` closes.
 *
 * **Example** (Converting to a ReadableStream with services)
 *
 * ```ts import.meta.vitest
 * import { Context, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5)
 * const readableStream = Stream.toReadableStreamWith(stream, Context.empty())
 * const values = await globalThis.Array.fromAsync(readableStream)
 * values // => [ 1, 2, 3, 4, 5 ]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toReadableStreamWith = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, context, options) => {
    let currentResolve = void 0;
    let fiber = void 0;
    let cancelled = false;
    const latch = makeUnsafe$1(false);
    const signal = options?.signal;
    const onAbort = () => fiber.interruptUnsafe();
    return new ReadableStream(
      {
        start(controller) {
          fiber = runFork(
            provideContext$2(
              runForEachArray(self, (chunk) =>
                latch.whenOpen(
                  sync$2(() => {
                    latch.closeUnsafe();
                    for (let i = 0; i < chunk.length; i++) controller.enqueue(chunk[i]);
                    currentResolve();
                    currentResolve = void 0;
                  }),
                ),
              ),
              context,
            ),
          );
          fiber.addObserver((exit) => {
            signal?.removeEventListener("abort", onAbort);
            if (cancelled) return;
            if (exit._tag === "Failure" && signal?.aborted !== true)
              controller.error(squash(exit.cause));
            else controller.close();
          });
          if (signal !== void 0 && fiber.pollUnsafe() === void 0) {
            if (signal.aborted) onAbort();
            else signal.addEventListener("abort", onAbort, { once: true });
          }
        },
        pull() {
          return new Promise((resolve) => {
            currentResolve = resolve;
            latch.openUnsafe();
          });
        },
        cancel() {
          if (!fiber) return;
          cancelled = true;
          return runPromise(asVoid(interrupt$1(fiber)));
        },
      },
      options?.strategy,
    );
  },
);
/**
 * Converts a stream to a `ReadableStream`.
 *
 * **Details**
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * **Example** (Converting a stream to a ReadableStream)
 *
 * ```ts import.meta.vitest
 * import { Stream } from "effect"
 *
 * const readableStream = Stream.toReadableStream(Stream.make(1, 2, 3))
 * const values = await globalThis.Array.fromAsync(readableStream)
 * values // => [ 1, 2, 3 ]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const toReadableStream = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, options) => toReadableStreamWith(self, empty$3(), options),
);
/**
 * Creates an Effect that builds a ReadableStream from the stream.
 *
 * **When to use**
 *
 * Use when bridging to Web Streams from inside an `Effect` so the required
 * services can be captured from the current context.
 *
 * **Details**
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * **Example** (Creating a ReadableStream effect)
 *
 * ```ts import.meta.vitest
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5)
 *
 * const effect = Effect.gen(function*() {
 *   const readableStream = yield* Stream.toReadableStreamEffect(stream)
 *   readableStream instanceof ReadableStream // => true
 * })
 *
 * await Effect.runPromise(effect)
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 2.0.0
 */
const toReadableStreamEffect = /*#__PURE__*/ dual(
  (args) => isStream(args[0]),
  (self, options) => map$2(context(), (context) => toReadableStreamWith(self, context, options)),
);
/**
 * Converts the stream to an `AsyncIterable` using the provided services.
 *
 * **When to use**
 *
 * Use when converting outside an Effect and you already have the `Context`
 * needed to run the stream.
 *
 * **Example** (Converting to an AsyncIterable with services)
 *
 * ```ts import.meta.vitest
 * import { Context, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 * const iterable = Stream.toAsyncIterableWith(stream, Context.empty())
 *
 * await globalThis.Array.fromAsync(iterable) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 4.0.0
 */
const toAsyncIterableWith = /*#__PURE__*/ dual(2, (self, context) => ({
  [Symbol.asyncIterator]() {
    const runPromise = runPromiseWith(context);
    const runFork = runForkWith(context);
    const scope = makeUnsafe$2();
    let pull;
    let currentIter;
    let currentFiber;
    let closePromise;
    const close$1 = (exit) => {
      if (closePromise) return closePromise;
      const fiber = currentFiber;
      closePromise = runPromise(
        as(andThen(fiber ? interrupt$1(fiber) : void_, close(scope, exit)), {
          done: true,
          value: void 0,
        }),
      );
      return closePromise;
    };
    const closeAndReportError = async (exit) => {
      try {
        await close$1(exit);
      } catch (error) {
        await runPromise(logError("Suppressed error while closing Stream async iterator", error));
      }
    };
    return {
      async next() {
        if (closePromise) return closePromise;
        if (currentIter) {
          const next = currentIter.next();
          if (!next.done) return next;
          currentIter = void 0;
        }
        const fiber = runFork(
          pull ??
            flatMap$2(toPullScoped(self.channel, scope), (nextPull) => {
              pull = nextPull;
              return nextPull;
            }),
        );
        currentFiber = fiber;
        const exit = await runPromise(await_(fiber));
        if (currentFiber === fiber) currentFiber = void 0;
        if (isSuccess$1(exit)) {
          currentIter = exit.value[Symbol.iterator]();
          return currentIter.next();
        } else if (isDoneCause(exit.cause)) return close$1(void_$2);
        if (closePromise && hasInterruptsOnly(exit.cause)) return closePromise;
        await closeAndReportError(exit);
        throw squash(exit.cause);
      },
      return() {
        return close$1(void_$2);
      },
      async throw(error) {
        await closeAndReportError(die$4(error));
        throw error;
      },
    };
  },
}));
/**
 * Converts a stream to an `AsyncIterable` for `for await...of` consumption.
 *
 * **Example** (Converting to an async iterable)
 *
 * ```ts import.meta.vitest
 * import { Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * await globalThis.Array.fromAsync(Stream.toAsyncIterable(stream)) // => [1, 2, 3]
 * ```
 *
 * @stability stable
 * @category destructors
 * @since 3.15.0
 */
const toAsyncIterable = (self) => toAsyncIterableWith(self, empty$3());
// ../../packages/shared/src/mcpResponsePayloads.ts
async function* sseDataLines(response) {
  if (response.body === null) return;
  const decoder = new TextDecoder();
  let buffered = "";
  for await (const chunk of response.body) {
    buffered += decoder.decode(chunk, { stream: true });
    let separatorIndex = buffered.search(/\n\n|\r\n\r\n/u);
    while (separatorIndex !== -1) {
      const rawEvent = buffered.slice(0, separatorIndex);
      buffered = buffered.slice(separatorIndex).replace(/^(?:\r?\n){2}/u, "");
      const data = rawEvent
        .split(/\r?\n/u)
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).trimStart())
        .join("\n");
      if (data.length > 0) yield data;
      separatorIndex = buffered.search(/\n\n|\r\n\r\n/u);
    }
  }
}
const discardResponseBody = (response) =>
  promise(() => response.body?.cancel().catch(() => void 0) ?? Promise.resolve());
function responsePayloads(response, onError) {
  if (response.status === 202 || response.status === 204)
    return unwrap(discardResponseBody(response).pipe(as(empty)));
  if ((response.headers.get("content-type") ?? "").includes("text/event-stream"))
    return fromAsyncIterable(sseDataLines(response), onError).pipe(
      mapEffect((data) =>
        try_({
          try: () => JSON.parse(data),
          catch: onError,
        }),
      ),
    );
  return unwrap(
    tryPromise({
      try: () => response.text(),
      catch: onError,
    }).pipe(
      flatMap$2((text) =>
        text.trim().length === 0
          ? succeed$2(empty)
          : try_({
              try: () => JSON.parse(text),
              catch: onError,
            }).pipe(map$2((payload) => fromIterable([payload]))),
      ),
    ),
  );
}
// src/mcp/AcpMcpStdioBridge.ts
/** ACP mandates stdio MCP support; HTTP/SSE support varies. */
var AcpMcpBridgeError = class extends Error {
  _tag = "AcpMcpBridgeError";
};
const bridgeError = (cause) =>
  cause instanceof AcpMcpBridgeError
    ? cause
    : new AcpMcpBridgeError(cause instanceof Error ? cause.message : String(cause), { cause });
const MCP_PROTOCOL_VERSION = "2025-06-18";
function asEnvelope(value) {
  return typeof value === "object" && value !== null ? value : null;
}
function protocolVersionOf(entry) {
  const result = asEnvelope(entry)?.result;
  const version = typeof result === "object" && result !== null ? result.protocolVersion : void 0;
  return typeof version === "string" && version.length > 0 ? version : null;
}
/**
 * One initialized MCP session over T3 Code's HTTP endpoint, terminated when
 * the scope closes. Used by the ACP terminal fallback and `t3 thread`.
 */
const mcpToolSession = (options) => {
  const fetchImplementation = options.fetchImplementation ?? fetch;
  let sessionId = null;
  let protocolVersion = null;
  let nextId = 0;
  const headers = () => ({
    accept: "application/json, text/event-stream",
    authorization: options.authorization,
    ...(sessionId === null ? {} : { "mcp-session-id": sessionId }),
    ...(protocolVersion === null ? {} : { "mcp-protocol-version": protocolVersion }),
  });
  const send = fn("AcpMcpStdioBridge.send")(function* (message) {
    const response = yield* tryPromise({
      try: (signal) =>
        fetchImplementation(options.endpoint, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...headers(),
          },
          body: JSON.stringify(message),
          signal,
        }),
      catch: bridgeError,
    });
    sessionId = response.headers.get("mcp-session-id") ?? sessionId;
    if (!response.ok) {
      yield* discardResponseBody(response);
      return yield* fail$3(
        new AcpMcpBridgeError(`T3 Code MCP endpoint responded with HTTP ${response.status}.`),
      );
    }
    const payloads = yield* runCollect(responsePayloads(response, bridgeError));
    for (const payload of payloads) protocolVersion = protocolVersionOf(payload) ?? protocolVersion;
    return payloads;
  });
  const request = fn("AcpMcpStdioBridge.request")(function* (method, params) {
    const id = `t3-cli-${nextId++}`;
    const envelope = asEnvelope(
      (yield* send({
        jsonrpc: "2.0",
        id,
        method,
        params,
      })).find((entry) => asEnvelope(entry)?.id === id),
    );
    if (envelope === null || envelope.error !== void 0)
      return yield* fail$3(
        new AcpMcpBridgeError(
          `T3 Code MCP ${method} failed${envelope?.error === void 0 ? "." : `: ${JSON.stringify(envelope.error)}`}`,
        ),
      );
    return envelope;
  });
  const terminate = suspend$2(() =>
    sessionId === null
      ? void_
      : tryPromise(() =>
          fetchImplementation(options.endpoint, {
            method: "DELETE",
            headers: headers(),
          }),
        ).pipe(flatMap$2(discardResponseBody), ignore$2),
  );
  return gen(function* () {
    yield* addFinalizer$1(() => terminate);
    yield* request("initialize", {
      protocolVersion: MCP_PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: {
        name: options.clientName,
        version: "0.0.0",
      },
    });
    yield* send({
      jsonrpc: "2.0",
      method: "notifications/initialized",
    });
    return {
      call: (tool, args) =>
        request("tools/call", {
          name: tool,
          arguments: args,
        }).pipe(map$2((envelope) => envelope.result)),
    };
  });
};
/**
 * This is the terminal fallback for ACP agents that accept `mcpServers` in
 * `session/new` but fail to expose those tools to their model. Compliant ACP
 * agents continue to use the stdio bridge above.
 */
function callAcpMcpTool(options) {
  return mcpToolSession({
    ...options,
    clientName: "t3-code-acp-cli",
  }).pipe(
    flatMap$2((session) => session.call(options.tool, options.arguments)),
    scoped$2,
  );
}
function runAcpMcpStdioBridge(options) {
  const fetchImplementation = options.fetchImplementation ?? fetch;
  return gen(function* () {
    let sessionId = null;
    let protocolVersion = null;
    const running = /* @__PURE__ */ new Set();
    const writeMessage = (message) =>
      sync$2(() => {
        options.output.write(`${JSON.stringify(message)}\n`);
      });
    const handleServerPayload = fn("AcpMcpStdioBridge.handleServerPayload")(function* (payload) {
      for (const entry of Array.isArray(payload) ? payload : [payload]) {
        protocolVersion = protocolVersionOf(entry) ?? protocolVersion;
        yield* writeMessage(entry);
      }
    });
    const respondWithError = (requestId, message, code = -32603) =>
      writeMessage({
        jsonrpc: "2.0",
        id: requestId ?? null,
        error: {
          code,
          message,
        },
      });
    const forward = fn("AcpMcpStdioBridge.forward")(
      function* (line, envelope) {
        const response = yield* tryPromise({
          try: (signal) =>
            fetchImplementation(options.endpoint, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                accept: "application/json, text/event-stream",
                authorization: options.authorization,
                ...(sessionId === null ? {} : { "mcp-session-id": sessionId }),
                ...(protocolVersion === null ? {} : { "mcp-protocol-version": protocolVersion }),
              },
              body: line,
              signal,
            }),
          catch: bridgeError,
        });
        sessionId = response.headers.get("mcp-session-id") ?? sessionId;
        if (!response.ok) {
          if (envelope.id !== void 0)
            yield* respondWithError(
              envelope.id,
              `T3 Code MCP endpoint responded with HTTP ${response.status}.`,
            );
          return yield* discardResponseBody(response);
        }
        yield* runForEach(responsePayloads(response, bridgeError), handleServerPayload);
      },
      (effect, _line, envelope) =>
        effect.pipe(
          catchCause$2((cause) => {
            if (envelope.id === void 0) return void_;
            const error = squash(cause);
            return respondWithError(
              envelope.id,
              `T3 Code MCP bridge request failed: ${error instanceof Error ? error.message : String(error)}`,
            );
          }),
        ),
    );
    let sessionBarrier = void_;
    let sessionBarrierPending = false;
    const launch = fn("AcpMcpStdioBridge.launch")(function* (task) {
      const fiber = yield* forkChild(task);
      running.add(fiber);
      yield* forkChild(
        await_(fiber).pipe(
          andThen(
            sync$2(() => {
              running.delete(fiber);
            }),
          ),
        ),
      );
    });
    const dispatch = fn("AcpMcpStdioBridge.dispatch")(function* (line) {
      if (line.trim().length === 0) return;
      const parsed = yield* try_(() => JSON.parse(line)).pipe(result);
      if (isFailure(parsed)) return yield* respondWithError(null, "Parse error", -32700);
      const envelope = asEnvelope(parsed.success);
      if (envelope === null) return;
      const isResponse = envelope.id !== void 0 && ("result" in envelope || "error" in envelope);
      const isSessionHandshake =
        envelope.method === "initialize" || envelope.method === "notifications/initialized";
      if (isResponse) return yield* launch(forward(line, envelope));
      if (isSessionHandshake) {
        const fiber = yield* forkChild(sessionBarrier.pipe(andThen(forward(line, envelope))));
        running.add(fiber);
        const barrier = await_(fiber).pipe(asVoid);
        sessionBarrier = barrier;
        sessionBarrierPending = true;
        yield* forkChild(
          await_(fiber).pipe(
            andThen(
              sync$2(() => {
                running.delete(fiber);
                if (sessionBarrier === barrier) sessionBarrierPending = false;
              }),
            ),
          ),
        );
        return;
      }
      const task = sessionBarrierPending
        ? sessionBarrier.pipe(andThen(forward(line, envelope)))
        : forward(line, envelope);
      return yield* launch(task);
    });
    const reader = NodeReadline.createInterface({ input: options.input });
    yield* runForEach(fromAsyncIterable(reader, bridgeError), dispatch).pipe(ignoreCause);
    yield* awaitAll(running);
  });
}
/** Avoid heavy imports on the ACP first-message path. */
async function runAcpMcpCliFastPath(command, args) {
  const endpoint = process.env.T3_ACP_MCP_ENDPOINT;
  const authorization = process.env.T3_ACP_MCP_AUTHORIZATION;
  if (endpoint === void 0 || authorization === void 0) {
    process.stderr.write(`${command} requires T3_ACP_MCP_ENDPOINT and T3_ACP_MCP_AUTHORIZATION.\n`);
    process.exitCode = 2;
    return;
  }
  if (command === "acp-mcp-bridge") {
    await runPromise(
      runAcpMcpStdioBridge({
        endpoint,
        authorization,
        input: process.stdin,
        output: process.stdout,
      }),
    );
    return;
  }
  const [tool, argumentsJson] = args;
  if (tool === void 0 || argumentsJson === void 0) {
    process.stderr.write("acp-mcp-call requires <tool> and <arguments-json>.\n");
    process.exitCode = 2;
    return;
  }
  let parsed;
  try {
    parsed = JSON.parse(argumentsJson);
  } catch {
    process.stderr.write("acp-mcp-call arguments must be valid JSON.\n");
    process.exitCode = 2;
    return;
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    process.stderr.write("acp-mcp-call arguments must be a JSON object.\n");
    process.exitCode = 2;
    return;
  }
  const result = await runPromise(
    callAcpMcpTool({
      endpoint,
      authorization,
      tool,
      arguments: parsed,
    }),
  );
  process.stdout.write(`${JSON.stringify(result)}\n`);
}
export {
  mkString as $,
  fromTransform$1 as $t,
  fromAsyncIterable as A,
  publishAll as An,
  tick as At,
  fromSubscription as B,
  makeUnsafe$1 as Bn,
  unfold as Bt,
  filter as C,
  shutdown as Cn,
  suspend as Ct,
  flatMap as D,
  takeAll as Dn,
  takeUntilEffect as Dt,
  filterMapEffect as E,
  take$1 as En,
  takeUntil as Et,
  fromIteratorSucceed as F,
  take$2 as Fn,
  toReadableStream as Ft,
  make as G,
  interruptAll as Gn,
  fromChannel$1 as Gt,
  ignore as H,
  await_ as Hn,
  zipLatestWith as Ht,
  fromPubSub as I,
  unbounded$1 as In,
  toReadableStreamEffect as It,
  mapArrayEffect as J,
  joinAll as Jn,
  mapInput as Jt,
  map as K,
  interruptAllAs as Kn,
  isSink as Kt,
  fromPull as L,
  make$5 as Ln,
  toReadableStreamWith as Lt,
  fromEffect as M,
  shutdown$1 as Mn,
  toAsyncIterable as Mt,
  fromEffectRepeat as N,
  sliding$1 as Nn,
  toAsyncIterableWith as Nt,
  flattenIterable as O,
  unbounded as On,
  takeWhile as Ot,
  fromIterable as P,
  subscribe as Pn,
  toPull as Pt,
  mergeAll as Q,
  round as Qn,
  fromPull$1 as Qt,
  fromQueue as R,
  set as Rn,
  transduce as Rt,
  failCause as S,
  poll as Sn,
  succeed as St,
  filterMap as T,
  sliding as Tn,
  sync as Tt,
  interruptWhen as U,
  getCurrent as Un,
  drain$1 as Ut,
  groupedWithin as V,
  awaitAll as Vn,
  unwrap as Vt,
  isStream as W,
  interrupt$1 as Wn,
  forEach as Wt,
  mapError as X,
  Order as Xn,
  decodeText$1 as Xt,
  mapEffect as Y,
  runIn as Yn,
  unwrap$1 as Yt,
  merge as Z,
  parse as Zn,
  filterArray as Zt,
  drop as _,
  interrupt as _n,
  runForEachWhile as _t,
  responsePayloads as a,
  splitLines$1 as an,
  pipeThroughChannelOrFail as at,
  ensuring as b,
  offerAll as bn,
  scoped as bt,
  catchTag as c,
  bounded as cn,
  rechunk as ct,
  changesWith as d,
  dropping as dn,
  runCollect as dt,
  mapDone as en,
  mkUint8Array as et,
  concat as f,
  end as fn,
  runDrain as ft,
  drain as g,
  failCauseUnsafe as gn,
  runForEachArray as gt,
  die as h,
  failCause$2 as hn,
  runForEach as ht,
  runAcpMcpStdioBridge as i,
  pipeTo as in,
  pipeThroughChannel as it,
  fromChannel as j,
  publishUnsafe as jn,
  timeoutOrElse as jt,
  fromArray as k,
  publish as kn,
  tap as kt,
  catch_ as l,
  clear as ln,
  retry as lt,
  decodeText as m,
  fail$2 as mn,
  runFoldEffect as mt,
  mcpToolSession as n,
  mapError$1 as nn,
  orDie as nt,
  callback as o,
  make$1 as on,
  provideContext as ot,
  debounce as p,
  endUnsafe as pn,
  runFold as pt,
  mapAccum as q,
  join as qn,
  last as qt,
  runAcpMcpCliFastPath as r,
  mkUint8Array$1 as rn,
  paginate as rt,
  catchCause as s,
  makeUnsafe as sn,
  provideService as st,
  AcpMcpBridgeError as t,
  mapEffect$1 as tn,
  onEnd as tt,
  changes as u,
  collect as un,
  run as ut,
  empty as v,
  make$2 as vn,
  runHead as vt,
  filterEffect as w,
  shutdownUnsafe as wn,
  switchMap as wt,
  fail as x,
  offerUnsafe as xn,
  splitLines as xt,
  encodeText as y,
  offer as yn,
  runLast as yt,
  fromReadableStream as z,
  make$6 as zn,
  transformPull as zt,
};

//# sourceMappingURL=AcpMcpStdioBridge-Ce4SZ_MY.mjs.map
