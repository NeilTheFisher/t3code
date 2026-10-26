import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./plus-B20TfFan.js";
import { Dr as i, Yn as a } from "./utils-CPoejuy5.js";
import { P as o } from "./useSettings-N-JG2LFZ.js";
import { i as s, o as c, r as l, t as u } from "./empty-CgJfsiJ2.js";
import { Jr as d, do as f, js as p, vl as m } from "./main-BZa0O6xN.js";
import { t as h } from "./WorkspacePageHeader-Dwf68L7C.js";
var g = t(),
  _ = e(n(), 1);
function v() {
  let e = (0, g.c)(16),
    t = o(),
    { scratchEnvironmentId: n, startScratchThread: f } = d(),
    v;
  e[0] !== t || e[1] !== n ? ((v = n(t)), (e[0] = t), (e[1] = n), (e[2] = v)) : (v = e[2]);
  let b = v,
    x;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = a ? (0, _.jsx)(h, { electron: !0 }) : null), (e[3] = x))
    : (x = e[3]);
  let S;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, _.jsx)(c, { children: `What should we work on?` })), (e[4] = S))
    : (S = e[4]);
  let C =
      b === null
        ? `Add a project to start your first thread.`
        : `Add a project, or start without one.`,
    w;
  e[5] === C ? (w = e[6]) : ((w = (0, _.jsx)(l, { children: C })), (e[5] = C), (e[6] = w));
  let T;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, _.jsxs)(i, {
        size: `sm`,
        onClick: y,
        children: [(0, _.jsx)(r, { className: `size-4` }), `Add project`],
      })),
      (e[7] = T))
    : (T = e[7]);
  let E;
  e[8] !== b || e[9] !== f
    ? ((E =
        b === null
          ? null
          : (0, _.jsxs)(i, {
              size: `sm`,
              variant: `outline`,
              onClick: () => void f(b),
              children: [(0, _.jsx)(m, { className: `size-4` }), `Start without a project`],
            })),
      (e[8] = b),
      (e[9] = f),
      (e[10] = E))
    : (E = e[10]);
  let D;
  e[11] === E
    ? (D = e[12])
    : ((D = (0, _.jsxs)(`div`, { className: `mt-6 flex justify-center gap-2`, children: [T, E] })),
      (e[11] = E),
      (e[12] = D));
  let O;
  return (
    e[13] !== w || e[14] !== D
      ? ((O = (0, _.jsx)(p, {
          className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
          children: (0, _.jsxs)(`div`, {
            className: `flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden bg-background`,
            children: [
              x,
              (0, _.jsx)(u, {
                size: `hero`,
                className: `flex-1`,
                children: (0, _.jsx)(`div`, {
                  className: `w-full max-w-lg px-8 py-12`,
                  children: (0, _.jsxs)(s, { className: `max-w-none`, children: [S, w, D] }),
                }),
              }),
            ],
          }),
        })),
        (e[13] = w),
        (e[14] = D),
        (e[15] = O))
      : (O = e[15]),
    O
  );
}
function y() {
  return f({ open: `add-project` });
}
export { v as t };
//# sourceMappingURL=NoProjectsHero-D9E-sihU.js.map
