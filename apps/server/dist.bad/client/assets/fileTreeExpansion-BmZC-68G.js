import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { t as n } from "./jsx-runtime-BQExFN_X.js";
import { c as r, l as i, s as a, u as o } from "./pierre-icons-apai9Vrm.js";
var s = `file-tree-container`,
  c = `data-file-tree-style`,
  l = `data-file-tree-unsafe-css`,
  u = `data-file-tree-scrollbar-measure`,
  d = `data-file-tree-scrollbar-gutter-measured`,
  f = `--trees-scrollbar-gutter-measured`,
  p = `header`,
  m = `context-menu`,
  h = `context-menu-trigger`,
  g = e(t(), 1),
  _ = e(n(), 1),
  v = typeof window > `u` ? g.useEffect : g.useLayoutEffect;
function y(e, t, n) {
  let r = e == null ? null : (0, _.jsx)(`div`, { slot: p, children: e }),
    i =
      t != null && n != null
        ? (0, _.jsx)(`div`, { slot: m, children: t(n.item, n.context) })
        : null;
  return r == null && i == null ? null : (0, _.jsxs)(_.Fragment, { children: [r, i] });
}
function b(e, t) {
  return typeof window > `u` && t != null
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`template`, {
            shadowrootmode: `open`,
            dangerouslySetInnerHTML: { __html: t.shadowHtml },
          }),
          e,
        ],
      })
    : (0, _.jsx)(_.Fragment, { children: e });
}
function x(e) {
  let t = e.shadowRoot;
  return (
    t?.querySelector(`[data-file-tree-id]`) instanceof HTMLElement ||
    t?.querySelector(`[data-file-tree-id]`) instanceof SVGElement ||
    e.querySelector(`template[shadowrootmode="open"]`) instanceof HTMLTemplateElement
  );
}
function S(e, t, n, r, i) {
  let a = { ...(e ?? {}) };
  if ((t != null && delete a.header, n)) {
    let t = e?.contextMenu,
      n = t?.onClose,
      o = t?.onOpen;
    ((a.contextMenu = {
      ...(t ?? {}),
      enabled: !0,
      onClose: () => {
        (n?.(), r());
      },
      onOpen: (e, t) => {
        (i(e, t), o?.(e, t));
      },
    }),
      delete a.contextMenu.render);
  }
  return a.header != null || a.contextMenu != null ? a : void 0;
}
function C({ header: e, id: t, model: n, preloadedData: r, renderContextMenu: i, ...a }) {
  let [o, c] = (0, g.useState)(null),
    [l, u] = (0, g.useState)(null),
    d = (0, g.useRef)(n.getComposition()),
    f = (0, g.useRef)(n);
  f.current !== n && ((f.current = n), (d.current = n.getComposition()));
  let p = i != null,
    m = (0, g.useCallback)(() => {
      c(null);
    }, []),
    h = (0, g.useCallback)((e, t) => {
      c({ context: t, item: e });
    }, []),
    C = d.current,
    ee = (0, g.useMemo)(() => S(C, e, p, m, h), [C, m, h, p, e]),
    te = (0, g.useCallback)((e) => {
      u(e);
    }, []);
  ((0, g.useEffect)(() => {
    p || c(null);
  }, [p]),
    v(() => {
      n.setComposition(ee);
    }, [ee, n]),
    v(() => {
      if (l != null)
        return (
          r != null && x(l)
            ? n.hydrate({ fileTreeContainer: l })
            : n.render({ fileTreeContainer: l }),
          () => {
            (n.unmount(), n.setComposition(C));
          }
        );
    }, [C, l, n, r]));
  let ne = b(y(e, i, o), r),
    w = t ?? r?.id,
    T = {
      "--trees-item-height": `${String(n.getItemHeight())}px`,
      "--trees-density-override": n.getDensityFactor(),
      ...a.style,
    };
  return (0, _.jsx)(s, {
    ...a,
    id: w,
    ref: te,
    style: T,
    suppressHydrationWarning: r != null,
    children: ne,
  });
}
var ee = {
  compact: { itemHeight: 24, factor: 0.8 },
  default: { itemHeight: 30, factor: 1 },
  relaxed: { itemHeight: 36, factor: 1.2 },
};
function te(e, t) {
  if (typeof e == `number`) return { itemHeight: t ?? ee.default.itemHeight, factor: e };
  let n = ee[e ?? `default`];
  return { itemHeight: t ?? n.itemHeight, factor: n.factor };
}
var ne = ee.default.itemHeight,
  w = `@layer base {
  :host {
    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(--trees-fg-override, var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1)));
    --trees-fg-muted: var(--trees-fg-muted-override, var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a)));
    --trees-bg: var(--trees-bg-override, var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415)));
    --trees-bg-muted: var(--trees-bg-muted-override, var(--trees-theme-list-hover-bg, light-dark(color-mix(in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)), color-mix(in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)))));
    --trees-input-bg: var(--trees-input-bg-override, light-dark(#f8f8f8, #070707));
    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;
    --trees-border-color: var(--trees-border-color-override, var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707)));
    --trees-indent-guide-bg: var(--trees-indent-guide-bg-override, color-mix(in lab, var(--trees-fg-muted) 25%, transparent));
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(--trees-border-radius-override, calc(6px * var(--trees-density)));
    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(--trees-font-weight-semibold-override, 600);
    --trees-focus-ring-color: var(--trees-focus-ring-color-override, var(--trees-theme-focus-ring, var(--trees-accent)));
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);
    --trees-search-fg: var(--trees-search-fg-override, var(--trees-theme-input-fg, var(--trees-fg)));
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(--trees-search-bg-override, var(--trees-theme-input-bg, var(--trees-input-bg)));
    --trees-scrollbar-thumb: var(--trees-scrollbar-thumb-override, var(--trees-theme-scrollbar-thumb, color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))));
    --trees-selected-fg: var(--trees-selected-fg-override, var(--trees-theme-list-active-selection-fg, var(--trees-fg)));
    --trees-selected-bg: var(--trees-selected-bg-override, var(--trees-theme-list-active-selection-bg, light-dark(color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)), color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg)))));
    --trees-selected-focused-border-color: var(--trees-selected-focused-border-color-override, var(--trees-theme-focus-ring, var(--trees-accent)));
    --trees-status-added: var(--trees-status-added-override, var(--trees-theme-git-added-fg, light-dark(var(--trees-added-light), var(--trees-added-dark))));
    --trees-status-ignored: var(--trees-status-ignored-override, var(--trees-theme-git-ignored-fg, light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))));
    --trees-status-modified: var(--trees-status-modified-override, var(--trees-theme-git-modified-fg, light-dark(var(--trees-modified-light), var(--trees-modified-dark))));
    --trees-status-renamed: var(--trees-status-renamed-override, var(--trees-theme-git-renamed-fg, light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))));
    --trees-status-untracked: var(--trees-status-untracked-override, var(--trees-theme-git-untracked-fg, light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))));
    --trees-status-deleted: var(--trees-status-deleted-override, var(--trees-theme-git-deleted-fg, light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))));
    --trees-git-modified-color: var(--trees-git-modified-color-override, var(--trees-status-modified));
    --trees-git-added-color: var(--trees-git-added-color-override, var(--trees-status-added));
    --trees-git-ignored-color: var(--trees-git-ignored-color-override, var(--trees-status-ignored));
    --trees-git-deleted-color: var(--trees-git-deleted-color-override, var(--trees-status-deleted));
    --trees-git-renamed-color: var(--trees-git-renamed-color-override, var(--trees-status-renamed));
    --trees-git-untracked-color: var(--trees-git-untracked-color-override, var(--trees-status-untracked));
    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);
    --trees-file-icon-color-default: var(--trees-file-icon-color, var(--trees-icon-gray));
    --trees-file-icon-color-astro: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-babel: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-bash: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-biome: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-bootstrap: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-browserslist: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-bun: var(--trees-file-icon-color, var(--trees-icon-mauve));
    --trees-file-icon-color-c: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-cpp: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-claude: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-css: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-database: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-docker: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-eslint: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-git: var(--trees-file-icon-vermilion, var(--trees-icon-vermilion));
    --trees-file-icon-color-go: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-graphql: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-html: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-image: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-javascript: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-json: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-markdown: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-mcp: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-npm: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-oxc: var(--trees-file-icon-cyan, var(--trees-icon-cyan));
    --trees-file-icon-color-postcss: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-prettier: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-python: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-react: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-ruby: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-rust: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-sass: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-svg: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-svelte: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-svgo: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-swift: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-table: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-text: var(--trees-file-icon-color, var(--trees-icon-gray));
    --trees-file-icon-color-tailwind: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-terraform: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-typescript: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-vite: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-vscode: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-vue: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-wasm: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-webpack: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-yml: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-zig: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-zip: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-level-gap: var(--trees-level-gap-override, calc(8px * var(--trees-density)));
    --trees-item-padding-x: var(--trees-item-padding-x-override, calc(8px * var(--trees-density)));
    --trees-item-margin-x: var(--trees-item-margin-x-override, calc(2px * var(--trees-density)));
    --trees-item-row-gap: var(--trees-item-row-gap-override, calc(6px * var(--trees-density)));
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(--trees-icon-nudge-override, calc(1px * var(--trees-density)));
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(--trees-action-lane-width-override, calc(var(--trees-icon-width) + 2px));
    --trees-context-menu-trigger-inline-offset: calc(var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width));
    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);
    color-scheme: light dark;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
    flex-direction: column;
    display: flex;
  }

  :host([data-file-tree-virtualized="true"]) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper="true"], [data-file-tree-virtualized-root="true"] {
    flex-direction: column;
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll="true"], [data-file-tree-scrollbar-measure="true"] {
    --trees-scrollbar-thumb-current: transparent;
    scrollbar-gutter: stable;
    overflow-y: auto;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
      background-clip: content-box;
      border: 1px solid #0000;
    }

    &::-webkit-scrollbar-corner {
      background-color: #0000;
    }
  }

  [data-file-tree-scrollbar-measure="true"] {
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }

  @supports ((-moz-appearance: none)) {
    [data-file-tree-virtualized-scroll="true"], [data-file-tree-scrollbar-measure="true"] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll="true"] {
    min-height: 0;
    padding-inline: max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px)
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(--trees-scrollbar-gutter-measured, var(--trees-scrollbar-gutter))),
        0px);
    flex: 1 1 0;
    position: relative;
    overflow-y: auto;
  }

  @supports ((-moz-appearance: none)) {
    [data-file-tree-virtualized-scroll="true"] {
      padding-inline: max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px)
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)),
          0px);
    }
  }

  [data-file-tree-sticky-overlay="true"] {
    z-index: 4;
    pointer-events: none;
    height: 0;
    position: sticky;
    top: 0;
    overflow: visible;
  }

  [data-file-tree-virtualized-root="true"][data-scroll-at-top="true"]:not([data-overlay-reveal]) [data-file-tree-sticky-overlay="true"] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content="true"] {
    background-color: var(--trees-bg);
    pointer-events: none;
    position: relative;
  }

  [data-file-tree-virtualized-list="true"] {
    background-color: var(--trees-bg);
    overflow-anchor: none;
    width: 100%;
    min-height: 100%;
    position: relative;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset="true"] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky="true"] {
    isolation: isolate;
    will-change: transform;
    flex-direction: column;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
  }

  [data-file-tree-search-container] {
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
    display: flex;
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    height: var(--trees-row-height);
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;
    flex: 1;
    margin-block: 1px;

    &::placeholder {
      color: color-mix(in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg));
    }

    &:focus-visible, &[data-file-tree-search-input-fake-focus="true"] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  [role="tree"] {
    gap: var(--trees-gap-override, 0);
    flex-direction: column;
    display: flex;
    position: relative;
  }

  [data-type="item"] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    background-color: var(--trees-bg);
    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    flex: 0 0 var(--trees-row-height);
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    align-items: center;
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;
    border: none;
    outline: none;
    display: flex;
    position: relative;

    &:hover, &[data-item-context-hover="true"] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused="true"], &:focus-visible {
      z-index: 2;

      & [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &:before {
        content: "";
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
        display: block;
        position: absolute;
        inset: 0;
      }

      &[data-item-selected="true"]:before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected="true"] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      & [data-item-section="icon"] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match="true"] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type="item"][data-file-tree-sticky-row="true"] {
    pointer-events: auto;
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"]:hover:not([data-item-selected="true"]), [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"][data-item-context-hover="true"]:not([data-item-selected="true"]) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected="true"]:has( + [data-item-selected="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  [data-item-selected="true"] + [data-item-selected="true"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [data-item-flattened-subitems] {
    align-items: center;
    gap: 2px;
    display: inline-flex;
  }

  [data-item-flattened-subitem]:hover, [data-item-flattened-subitem-drag-target="true"] {
    text-decoration: underline;
  }

  [data-item-section="icon"] {
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  :where([data-item-section="icon"] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons="true"] {
    & [data-icon-token="astro"] {
      color: var(--trees-file-icon-color-astro);
    }

    & [data-icon-token="babel"] {
      color: var(--trees-file-icon-color-babel);
    }

    & [data-icon-token="bash"] {
      color: var(--trees-file-icon-color-bash);
    }

    & [data-icon-token="biome"] {
      color: var(--trees-file-icon-color-biome);
    }

    & [data-icon-token="bootstrap"] {
      color: var(--trees-file-icon-color-bootstrap);
    }

    & [data-icon-token="browserslist"] {
      color: var(--trees-file-icon-color-browserslist);
    }

    & [data-icon-token="bun"] {
      color: var(--trees-file-icon-color-bun);
    }

    & [data-icon-token="c"] {
      color: var(--trees-file-icon-color-c);
    }

    & [data-icon-token="cpp"] {
      color: var(--trees-file-icon-color-cpp);
    }

    & [data-icon-token="claude"] {
      color: var(--trees-file-icon-color-claude);
    }

    & [data-icon-token="css"] {
      color: var(--trees-file-icon-color-css);
    }

    & [data-icon-token="database"] {
      color: var(--trees-file-icon-color-database);
    }

    & [data-icon-token="default"] {
      color: var(--trees-file-icon-color-default);
    }

    & [data-icon-token="docker"] {
      color: var(--trees-file-icon-color-docker);
    }

    & [data-icon-token="eslint"] {
      color: var(--trees-file-icon-color-eslint);
    }

    & [data-icon-token="git"] {
      color: var(--trees-file-icon-color-git);
    }

    & [data-icon-token="go"] {
      color: var(--trees-file-icon-color-go);
    }

    & [data-icon-token="graphql"] {
      color: var(--trees-file-icon-color-graphql);
    }

    & [data-icon-token="html"] {
      color: var(--trees-file-icon-color-html);
    }

    & [data-icon-token="image"] {
      color: var(--trees-file-icon-color-image);
    }

    & [data-icon-token="javascript"] {
      color: var(--trees-file-icon-color-javascript);
    }

    & [data-icon-token="json"] {
      color: var(--trees-file-icon-color-json);
    }

    & [data-icon-token="markdown"] {
      color: var(--trees-file-icon-color-markdown);
    }

    & [data-icon-token="mcp"] {
      color: var(--trees-file-icon-color-mcp);
    }

    & [data-icon-token="npm"] {
      color: var(--trees-file-icon-color-npm);
    }

    & [data-icon-token="oxc"] {
      color: var(--trees-file-icon-color-oxc);
    }

    & [data-icon-token="postcss"] {
      color: var(--trees-file-icon-color-postcss);
    }

    & [data-icon-token="prettier"] {
      color: var(--trees-file-icon-color-prettier);
    }

    & [data-icon-token="python"] {
      color: var(--trees-file-icon-color-python);
    }

    & [data-icon-token="react"] {
      color: var(--trees-file-icon-color-react);
    }

    & [data-icon-token="ruby"] {
      color: var(--trees-file-icon-color-ruby);
    }

    & [data-icon-token="rust"] {
      color: var(--trees-file-icon-color-rust);
    }

    & [data-icon-token="sass"] {
      color: var(--trees-file-icon-color-sass);
    }

    & [data-icon-token="svg"] {
      color: var(--trees-file-icon-color-svg);
    }

    & [data-icon-token="svelte"] {
      color: var(--trees-file-icon-color-svelte);
    }

    & [data-icon-token="svgo"] {
      color: var(--trees-file-icon-color-svgo);
    }

    & [data-icon-token="swift"] {
      color: var(--trees-file-icon-color-swift);
    }

    & [data-icon-token="table"] {
      color: var(--trees-file-icon-color-table);
    }

    & [data-icon-token="text"] {
      color: var(--trees-file-icon-color-text);
    }

    & [data-icon-token="tailwind"] {
      color: var(--trees-file-icon-color-tailwind);
    }

    & [data-icon-token="terraform"] {
      color: var(--trees-file-icon-color-terraform);
    }

    & [data-icon-token="typescript"] {
      color: var(--trees-file-icon-color-typescript);
    }

    & [data-icon-token="vite"] {
      color: var(--trees-file-icon-color-vite);
    }

    & [data-icon-token="vscode"] {
      color: var(--trees-file-icon-color-vscode);
    }

    & [data-icon-token="vue"] {
      color: var(--trees-file-icon-color-vue);
    }

    & [data-icon-token="wasm"] {
      color: var(--trees-file-icon-color-wasm);
    }

    & [data-icon-token="webpack"] {
      color: var(--trees-file-icon-color-webpack);
    }

    & [data-icon-token="yml"] {
      color: var(--trees-file-icon-color-yml);
    }

    & [data-icon-token="zig"] {
      color: var(--trees-file-icon-color-zig);
    }

    & [data-icon-token="zip"] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  [data-icon-name="file-tree-icon-chevron"] {
    &[data-align-capitals="false"] {
      transform: translate(0, var(--trees-icon-nudge));
    }

    &[data-align-capitals="true"] {
      transform: translate(0);
    }
  }

  [data-item-section="content"] {
    text-align: start;
    text-overflow: ellipsis;
    flex: 0 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }

  [data-item-section="decoration"] {
    text-align: end;
    min-width: 0;
    color: var(--trees-fg-muted);
    flex: 1 1 0;
    justify-content: flex-end;
    display: flex;
    overflow: hidden;
  }

  [data-item-section="decoration"] > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-content: flex-end;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    overflow: hidden;
  }

  [data-item-section="git"], [data-item-section="action"] {
    flex: none;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  [data-item-section="git"] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section="action"] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section="git"] > span, [data-item-section="action"] > span {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: inline-flex;
  }

  [data-item-action-affordance="decorative"] {
    opacity: .85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    box-sizing: border-box;
    background-color: #0000;
    border: 0;
    outline: none;
    padding-inline: 6px;
  }

  [data-item-section="content"]:has([data-item-rename-input]) ~ [data-item-section="action"], [data-item-section="content"]:has([data-item-rename-input]) ~ [data-item-section="decoration"] {
    display: none;
  }

  [aria-expanded="false"][data-item-type="folder"] > [data-item-section="icon"] > [data-icon-name="file-tree-icon-chevron"] {
    &[data-align-capitals="true"] {
      transform: rotate(-90deg)
        translate(calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2));
    }

    &[data-align-capitals="false"] {
      transform: rotate(-90deg)
        translate(calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2));
    }
  }

  [data-item-section="spacing"] {
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - .5px);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;

    &:empty {
      padding-left: 0;
    }
  }

  [data-item-section="spacing-item"] {
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity .15s;
    display: inline-block;
    transform: translateX(-.25px);

    & + & {
      margin-left: calc(var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - .5px);
    }
  }

  :host(:hover) [data-item-section="spacing-item"] {
    opacity: .75;
  }

  [data-item-contains-git-change="true"] > [data-item-section="git"] {
    color: var(--trees-git-modified-color);
    opacity: .5;
    fill: currentColor;
  }

  [data-item-git-status] {
    & > :where([data-item-section="icon"]) > :where(:not([data-icon-name="file-tree-icon-chevron"])), & > [data-item-section="content"] {
      color: var(--trees-item-git-status-color);
    }

    & > [data-item-section="git"] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status="added"] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status="deleted"] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status="ignored"] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section="icon"] {
      opacity: .5;
    }
  }

  [data-item-section="git"] [data-icon-name="file-tree-icon-dot"] {
    transform: translateY(calc(.65ex - 50%));
  }

  [data-item-git-status="modified"] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status="renamed"] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status="untracked"] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  [data-item-drag-target="true"] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging="true"] {
    opacity: .5;
  }

  [data-item-section="lock"] {
    color: var(--trees-fg-muted);
    flex: none;
    align-items: center;
    margin-left: auto;
    display: flex;
  }

  [data-item-section="lock"] svg {
    display: block;
  }

  [data-type="header-slot"] {
    flex: none;
    display: block;
  }

  [data-type="context-menu-wash"] {
    z-index: 3;
    touch-action: none;
    background-color: #0000;
    position: absolute;
    inset: 0;
  }

  [data-type="context-menu-anchor"] {
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    align-items: center;
    display: none;
    position: absolute;

    &[data-visible="true"] {
      display: flex;
    }
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="context-menu-anchor"] {
    display: none;
  }

  [data-type="context-menu-anchor"] > slot[name="context-menu"] {
    flex: 0 0 0;
    width: 0;
    min-width: 0;
    display: block;
    overflow: visible;
  }

  [data-type="context-menu-trigger"] {
    all: unset;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    justify-content: center;
    align-items: center;
    transition: color .12s;
    display: flex;
  }

  [data-type="context-menu-trigger"]:hover, [data-type="context-menu-trigger"][aria-expanded="true"] {
    color: var(--trees-fg);
  }

  [data-truncate-container] {
    --truncate-internal-marker-fade-width: var(--truncate-marker-fade-width, 2px);
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    --truncate-internal-middle-marker-opacity: var(--truncate-middle-marker-opacity, 80%);
    --truncate-internal-marker-background-color: var(--truncate-marker-background-color, light-dark(#fff, #000));
    --truncate-internal-marker-background-overlay-color: var(--truncate-marker-background-overlay-color, transparent);
    --truncate-internal-marker-block-inset: var(--truncate-marker-block-inset, 0px);
    --truncate-internal-marker-fade-out-duration: var(--truncate-marker-fade-out-duration, 0s);
    --truncate-internal-marker-fade-in-duration: var(--truncate-marker-fade-in-duration, .1s);
    --truncate-internal-fade-marker-color: var(--truncate-fade-marker-color, #000);
    --truncate-internal-fade-marker-width: var(--truncate-fade-marker-width, .2lh);
    --truncate-internal-single-line-height: 1lh;
    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    margin-top: -1px;
    margin-bottom: -1px;
    overflow: hidden;
  }

  [data-truncate-marker] {
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    z-index: 2;
    color: color-mix(in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent);
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
    background-clip: content-box;
    align-items: center;
    display: flex;
    position: absolute;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content="visible"] {
    white-space: nowrap;
  }

  [data-truncate-content="overflow"] {
    opacity: 0;
    pointer-events: none;
    user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    user-select: none;
    pointer-events: none;
    overflow: visible;
    container: measure / size;
  }

  [data-truncate-container="truncate"] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }

    & [data-truncate-marker] {
      right: 0;
    }

    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container="fruncate"] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }

    & [data-truncate-content] {
      direction: rtl;
    }

    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }

    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant="default"] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color));
    }

    & [data-truncate-marker]:after, & [data-truncate-marker]:before {
      content: "";
      width: calc(var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap));
      height: max(0px,
        calc(var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2));
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color));
      -webkit-mask-image: linear-gradient(var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%);
      mask-image: linear-gradient(var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%);
      position: absolute;
      inset-block-start: var(--truncate-internal-marker-block-inset);
    }

    & [data-truncate-marker]:after {
      --truncate-internal-fade-dir: to right;
      right: calc(-1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          ));
    }

    & [data-truncate-marker]:before {
      --truncate-internal-fade-dir: to left;
      left: calc(-1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          ));
    }
  }

  [data-truncate-variant="fade"] {
    & [data-truncate-marker] {
      background: none;
    }
  }

  [data-truncate-fade] {
    box-shadow: 0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2));
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container="middle"] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    min-width: 0;
    display: flex;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority="1"] {
      flex: 0 1 max-content;
    }

    & > div[data-truncate-segment-priority="2"] {
      flex: 0 999999 max-content;
    }
  }
}

@layer theme, unsafe;
`,
  T = `@layer base, unsafe;`;
function re(e) {
  return `${T}
@layer base {
  ${e}
}`;
}
function E(e) {
  return `${T}
@layer unsafe {
  ${e}
}`;
}
var ie = new WeakMap();
function D(e) {
  let t = ie.get(e);
  if (t != null) return t;
  let n = document.createElement(`div`);
  n.setAttribute(u, `true`);
  let r = document.createElement(`div`);
  ((r.style.position = `relative`), (r.style.height = `200%`), n.appendChild(r), e.appendChild(n));
  let i = Math.max(n.offsetWidth - n.clientWidth, 0);
  return (n.remove(), ie.set(e, i), i);
}
function ae(e, t) {
  if (!e.isConnected) return;
  let n = D(t);
  if (n == null) return;
  let r = t.querySelector(`style[${d}]`),
    i = r instanceof HTMLStyleElement ? r : document.createElement(`style`);
  (r instanceof HTMLStyleElement || (i.setAttribute(d, ``), t.appendChild(i)),
    (i.textContent = `:host { ${f}: ${n}px; }`));
}
var O;
function oe(e) {
  if (
    typeof CSSStyleSheet < `u` &&
    typeof CSSStyleSheet.prototype.replaceSync == `function` &&
    `adoptedStyleSheets` in e
  ) {
    O ?? ((O = new CSSStyleSheet()), O.replaceSync(re(w)));
    let t = !1;
    try {
      ((e.adoptedStyleSheets = [O]), (t = !0));
    } catch {}
    if (t) {
      e.querySelector(`style[${c}]`)?.remove();
      return;
    }
  }
  if (e.querySelector(`style[data-file-tree-style]`) == null) {
    let t = document.createElement(`style`);
    (t.setAttribute(c, ``), (t.textContent = re(w)), e.prepend(t));
  }
}
function se(e, t) {
  (ce(e, t), oe(t), ae(e, t));
}
function ce(e, t) {
  let n = e.querySelector(
    `template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`,
  );
  n instanceof HTMLTemplateElement &&
    (t.childNodes.length > 0 ||
      (t.appendChild(n.content.cloneNode(!0)), n.hasAttribute(`shadowrootmode`) && n.remove()));
}
if (typeof HTMLElement < `u` && customElements.get(`file-tree-container`) == null) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      let e = this.shadowRoot ?? this.attachShadow({ mode: `open` });
      se(this, e);
    }
  }
  if ((customElements.define(s, e), typeof document < `u`))
    for (let e of Array.from(document.querySelectorAll(s)))
      e instanceof HTMLElement && se(e, e.shadowRoot ?? e.attachShadow({ mode: `open` }));
}
var k = 5,
  le = 32,
  ue = 128;
function de() {
  return {
    childIdByNameId: new Map(),
    childIds: [],
    childPositionById: new Map(),
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function fe() {
  return {
    childIdByNameId: null,
    childIds: [],
    childPositionById: null,
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function A(e, t) {
  if (t.childIdByNameId != null) return t.childIdByNameId;
  let n = new Map();
  for (let r of t.childIds) {
    let t = e[r];
    t != null && n.set(t.nameId, r);
  }
  return ((t.childIdByNameId = n), n);
}
function pe(e) {
  if (e.childPositionById != null) return e.childPositionById;
  let t = new Map();
  for (let n = 0; n < e.childIds.length; n++) {
    let r = e.childIds[n];
    r != null && t.set(r, n);
  }
  return ((e.childPositionById = t), t);
}
function me(e, t) {
  (e.childPositionById != null && e.childPositionById.set(t, e.childIds.length),
    e.childIds.push(t));
}
function he(e, t) {
  if (e.childPositionById != null)
    for (let n = t; n < e.childIds.length; n++) {
      let t = e.childIds[n];
      t != null && e.childPositionById.set(t, n);
    }
}
function ge(e, t) {
  let n = 0,
    r = 0;
  for (let i of t.childIds) {
    let t = e[i];
    t != null && ((n += t.subtreeNodeCount), (r += t.visibleSubtreeCount));
  }
  ((t.totalChildSubtreeNodeCount = n), (t.totalChildVisibleSubtreeCount = r), j(e, t));
}
function _e(e, t, n, r) {
  if (
    ((e.totalChildSubtreeNodeCount += n),
    (e.totalChildVisibleSubtreeCount += r),
    e.childVisibleChunkSums == null || r === 0)
  )
    return;
  let i = pe(e).get(t);
  if (i === void 0) return;
  let a = i >> k;
  e.childVisibleChunkSums[a] += r;
}
function ve(e, t, n) {
  let r = t.childVisibleChunkSums;
  if (r != null) {
    let i = n,
      a = 0;
    for (let o of r) {
      if (i < o) {
        let r = be(e, t, a, i);
        return { ...r, childVisibleIndex: n - r.localVisibleIndex };
      }
      ((i -= o), (a += le));
    }
    throw Error(`Visible child index ${String(n)} is out of range`);
  }
  let i = n;
  for (let r = 0; r < t.childIds.length; r++) {
    let a = t.childIds[r];
    if (a == null) continue;
    let o = e[a];
    if (o != null) {
      if (i < o.visibleSubtreeCount)
        return { childIndex: r, childVisibleIndex: n - i, localVisibleIndex: i };
      i -= o.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(n)} is out of range`);
}
function ye(e, t, n) {
  let r = 0,
    i = t.childVisibleChunkSums,
    a = 0;
  if (i != null) {
    let e = n >> k;
    for (let t = 0; t < e; t += 1) r += i[t] ?? 0;
    a = e << k;
  }
  for (let i = a; i < n; i += 1) {
    let n = t.childIds[i];
    if (n == null) continue;
    let a = e[n];
    a != null && (r += a.visibleSubtreeCount);
  }
  return r;
}
function j(e, t) {
  if (t.childIds.length < ue) {
    t.childVisibleChunkSums = null;
    return;
  }
  let n = Math.ceil(t.childIds.length / le),
    r = new Int32Array(n);
  for (let n = 0; n < t.childIds.length; n++) {
    let i = t.childIds[n];
    if (i == null) continue;
    let a = e[i];
    a != null && (r[n >> k] += a.visibleSubtreeCount);
  }
  t.childVisibleChunkSums = r;
}
function be(e, t, n, r) {
  let i = Math.min(t.childIds.length, n + le),
    a = r;
  for (let r = n; r < i; r++) {
    let n = t.childIds[r];
    if (n == null) continue;
    let i = e[n];
    if (i != null) {
      if (a < i.visibleSubtreeCount) return { childIndex: r, localVisibleIndex: a };
      a -= i.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(r)} is out of range`);
}
var xe = 7,
  Se = 3,
  Ce = 8,
  we = 4;
function Te(e, t, n = 0) {
  return (e << we) | (n << Se) | t;
}
function M(e) {
  return e.depthAndFlags >>> we;
}
function Ee(e) {
  return (e.depthAndFlags & Ce) >> Se;
}
function N(e) {
  return (e.depthAndFlags & Ce) !== 0;
}
function De(e) {
  return e.depthAndFlags & xe;
}
function P(e, t) {
  return (De(e) & t) !== 0;
}
function Oe(e, t) {
  e.depthAndFlags |= t;
}
function ke(e, t) {
  e.depthAndFlags = Te(t, De(e), Ee(e));
}
var Ae = Symbol(`benchmarkInstrumentation`);
function je(e, t) {
  return (
    t == null ||
      Object.defineProperty(e, Ae, { configurable: !0, enumerable: !1, value: t, writable: !1 }),
    e
  );
}
function F(e) {
  return e == null ? null : (e[Ae] ?? null);
}
function I(e, t, n) {
  return e == null ? n() : e.measurePhase(t, n);
}
function Me(e, t, n) {
  Number.isFinite(n) && e != null && e.setCounter(t, n);
}
function Ne(e) {
  return e >= 48 && e <= 57;
}
function Pe(e) {
  let t = [],
    n = 0,
    r = 0;
  for (; r < e.length;) {
    for (; r < e.length && !Ne(e.charCodeAt(r));) r += 1;
    if (r >= e.length) break;
    r > n && t.push(e.slice(n, r));
    let i = 0;
    for (; r < e.length && Ne(e.charCodeAt(r));) ((i = i * 10 + (e.charCodeAt(r) - 48)), (r += 1));
    (t.push(i), (n = r));
  }
  return ((n < e.length || t.length === 0) && t.push(e.slice(n)), t);
}
function Fe(e) {
  let t = e.toLowerCase();
  return { lowerValue: t, tokens: Pe(t) };
}
function Ie(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    let n = e[r],
      i = t[r];
    if (n === i) continue;
    if (typeof n == `number` && typeof i == `number`) return n < i ? -1 : 1;
    let a = String(n),
      o = String(i);
    if (a !== o) return a < o ? -1 : 1;
  }
  return e.length === t.length ? 0 : e.length < t.length ? -1 : 1;
}
function Le(e, t) {
  if (
    e.tokens.length === 1 &&
    t.tokens.length === 1 &&
    typeof e.tokens[0] == `string` &&
    typeof t.tokens[0] == `string`
  )
    return e.lowerValue === t.lowerValue ? 0 : e.lowerValue < t.lowerValue ? -1 : 1;
  let n = Ie(e.tokens, t.tokens);
  return n === 0 ? (e.lowerValue === t.lowerValue ? 0 : e.lowerValue < t.lowerValue ? -1 : 1) : n;
}
function Re(e, t, n) {
  let r = Le(n(e), n(t));
  return r === 0 ? (e === t ? 0 : e < t ? -1 : 1) : r;
}
function ze(e, t) {
  return Re(e, t, Fe);
}
function Be(e, t) {
  return t === e.segments.length - 1 ? +!!e.isDirectory : 1;
}
function Ve(e, t) {
  let n = Math.min(e.segments.length, t.segments.length);
  for (let r = 0; r < n; r++) {
    let n = e.segments[r],
      i = t.segments[r];
    if (n === i) continue;
    let a = Be(e, r);
    return a === Be(t, r) ? ze(n, i) : a === 1 ? -1 : 1;
  }
  return e.segments.length === t.segments.length
    ? e.isDirectory === t.isDirectory
      ? 0
      : e.isDirectory
        ? -1
        : 1
    : e.segments.length < t.segments.length
      ? -1
      : 1;
}
function He(e, t) {
  return Ve(e, t);
}
function Ue(e, t, n) {
  let r = (e) => {
      let t = n.get(e);
      if (t != null) return t;
      let r = Fe(e);
      return (n.set(e, r), r);
    },
    i = Math.min(e.segments.length, t.segments.length);
  for (let n = 0; n < i; n++) {
    let i = e.segments[n],
      a = t.segments[n];
    if (i === a) continue;
    let o = Be(e, n);
    return o === Be(t, n) ? Re(i, a, r) : o === 1 ? -1 : 1;
  }
  return e.segments.length === t.segments.length
    ? e.isDirectory === t.isDirectory
      ? 0
      : e.isDirectory
        ? -1
        : 1
    : e.segments.length < t.segments.length
      ? -1
      : 1;
}
function We(e, t) {
  let n = e.sortKeyById[t];
  if (n !== void 0) return n;
  let r = e.valueById[t],
    i = Fe(r);
  return ((e.sortKeyById[t] = i), i);
}
function Ge(e = {}) {
  return { flattenEmptyDirectories: e.flattenEmptyDirectories !== !1, sort: e.sort ?? `default` };
}
function Ke(e) {
  let t = e.length > 0 && e.charCodeAt(e.length - 1) === 47,
    n = t ? e.length - 1 : e.length,
    r = [],
    i = 0;
  for (let t = 0; t < n; t++) e.charCodeAt(t) === 47 && (r.push(e.slice(i, t)), (i = t + 1));
  return (r.push(e.slice(i, n)), { hasTrailingSlash: t, segments: r });
}
function qe(e) {
  let { hasTrailingSlash: t, segments: n } = Ke(e);
  return { basename: n[n.length - 1] ?? ``, isDirectory: t, path: e, segments: n };
}
function Je(e) {
  if (e.length === 0) return { requiresDirectory: !1, segments: [] };
  let { hasTrailingSlash: t, segments: n } = Ke(e);
  return { requiresDirectory: t, segments: n };
}
function Ye() {
  let e = new Map();
  return (e.set(``, 0), { idByValue: e, valueById: [``], sortKeyById: [Fe(``)] });
}
function Xe(e, t) {
  let n = e.idByValue.get(t);
  if (n !== void 0) return n;
  let r = e.valueById.length;
  return (e.idByValue.set(t, r), e.valueById.push(t), r);
}
function L(e, t) {
  let n = e.valueById[t];
  if (n === void 0) throw Error(`Unknown segment ID: ${String(t)}`);
  return n;
}
var Ze = Symbol(`pathStorePreparedInputKind`);
function Qe(e, t) {
  return ((e[Ze] = t), e);
}
function $e(e) {
  return {
    basename: e.basename,
    depth: e.segments.length,
    isDirectory: e.isDirectory,
    path: e.path,
    segments: e.segments,
  };
}
function et(e, t, n) {
  return n === "default" ? He(e, t) : n($e(e), $e(t));
}
function tt() {
  return {
    depthAndFlags: Te(0, 3, 1),
    nameId: 0,
    parentId: 0,
    subtreeNodeCount: 1,
    visibleSubtreeCount: 1,
  };
}
function nt(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return r;
  return n;
}
function rt(e) {
  return e.isDirectory ? e.segments.length : e.segments.length - 1;
}
function it(e) {
  return (
    Array.isArray(e) &&
    e.every(
      (e) =>
        typeof e == `object` &&
        !!e &&
        typeof e.path == `string` &&
        Array.isArray(e.segments) &&
        typeof e.basename == `string` &&
        typeof e.isDirectory == `boolean`,
    )
  );
}
function at(e) {
  return Array.isArray(e) && e.every((e) => typeof e == `string`);
}
function ot(e, t = {}) {
  return R(e, t).map((e) => e.path);
}
function st(e, t = {}) {
  let n = R(e, t);
  return Qe({ paths: n.map((e) => e.path), preparedPaths: n }, `prepared`);
}
function ct(e) {
  let t = e.length,
    n = !1;
  for (let r = 0; r < t; r += 1) {
    let t = e[r];
    if (t.length > 0 && t.charCodeAt(t.length - 1) === 47) {
      n = !0;
      break;
    }
  }
  return Qe({ paths: e, presortedPaths: e, presortedPathsContainDirectories: n }, `presorted`);
}
function lt(e) {
  let t = e,
    n = t.preparedPaths;
  if (t[Ze] === `prepared` && n != null) return n;
  if (!it(n)) throw Error(`preparedInput must come from PathStore.prepareInput()`);
  return n;
}
function ut(e) {
  let t = e;
  return (t[Ze] === `presorted` && t.presortedPaths != null) || at(t.presortedPaths)
    ? t.presortedPaths
    : null;
}
function dt(e) {
  let t = e;
  return typeof t.presortedPathsContainDirectories == `boolean`
    ? t.presortedPathsContainDirectories
    : null;
}
function R(e, t = {}) {
  let n = Ge(t),
    r = F(t);
  Me(r, `workload.inputFiles`, e.length);
  let i = I(r, `store.preparePathEntries.parse`, () => e.map((e) => qe(e)));
  return (I(r, `store.preparePathEntries.sort`, () => i.sort((e, t) => et(e, t, n.sort))), i);
}
var z = class {
  directories = new Map();
  directoryStack = [0];
  presortedDirectoryNodeIds = [];
  initialExpandedPathSet;
  createdDirectoriesAllExpanded = !1;
  createdDirectoryCount = 0;
  lastPreparedPath = null;
  nodes = [tt()];
  options;
  instrumentation;
  segmentSortKeyCache = new Map();
  segmentTable = Ye();
  hasDeferredDirectoryIndexes = !1;
  constructor(e = {}) {
    ((this.instrumentation = F(e)), (this.options = Ge(e)));
    let t = e.initialExpandedPaths ?? null;
    if (t == null || t.length === 0) this.initialExpandedPathSet = null;
    else {
      let e = new Set(),
        n = t.length;
      for (let r = 0; r < n; r += 1) {
        let n = t[r],
          i = n.length;
        e.add(i > 0 && n.charCodeAt(i - 1) === 47 ? n.slice(0, i - 1) : n);
      }
      ((this.initialExpandedPathSet = e), (this.createdDirectoriesAllExpanded = !0));
    }
    this.directories.set(0, de());
  }
  appendPaths(e) {
    return I(this.instrumentation, `store.builder.appendPaths.parse`, () =>
      this.appendPreparedPaths(e.map((e) => qe(e))),
    );
  }
  appendPreparedPaths(e, t = !0) {
    return (
      (this.createdDirectoriesAllExpanded = !1),
      I(this.instrumentation, `store.builder.appendPreparedPaths`, () => {
        for (let n of e) this.appendPreparedPath(n, t);
      }),
      this
    );
  }
  appendPresortedPaths(e, t = null) {
    return (
      I(this.instrumentation, `store.builder.appendPresortedPaths`, () => {
        if (t === !1) {
          this.appendPresortedFilePaths(e);
          return;
        }
        this.createdDirectoriesAllExpanded = !1;
        let n = null,
          r = 0,
          i = this.nodes,
          a = this.segmentTable,
          o = a.idByValue,
          s = a.valueById,
          c = this.directoryStack,
          l = 0,
          u = ``,
          d = 0;
        for (let t of e) {
          if (n === t) throw Error(`Duplicate path: "${t}"`);
          let e = t.length > 0 && t.charCodeAt(t.length - 1) === 47,
            a = e ? t.length - 1 : t.length,
            f = 0,
            p = 0;
          if (n != null) {
            if (u.length > 0 && t.length > u.length && t.startsWith(u)) ((f = d), (p = u.length));
            else {
              let r = Math.min(a, n.length),
                i = !0;
              for (let e = 0; e < r; e++) {
                let r = t.charCodeAt(e);
                if (r !== n.charCodeAt(e)) {
                  i = !1;
                  break;
                }
                r === 47 && (f++, (p = e + 1));
              }
              i && e && r === a && n.length > a && n.charCodeAt(a) === 47 && (f++, (p = a + 1));
            }
          }
          ((l = f), (r = f));
          let m = p,
            h = t.indexOf(`/`, m);
          for (; h >= 0 && h < a;) {
            let e = c[l];
            if (e === void 0)
              throw Error(`Directory stack underflow while building the path store`);
            r++;
            let n = t.slice(m, h),
              a = o.get(n);
            a === void 0 && ((a = s.length), o.set(n, a), s.push(n));
            let u = i.length;
            (i.push({
              depthAndFlags: Te(r, 0, 1),
              nameId: a,
              parentId: e,
              subtreeNodeCount: 1,
              visibleSubtreeCount: 1,
            }),
              this.recordCreatedDirectoryPath(t.slice(0, h)),
              l++,
              (c[l] = u),
              (m = h + 1),
              (h = t.indexOf(`/`, m)));
          }
          if (e) {
            if (m < a) {
              let e = c[l];
              if (e === void 0) throw Error(`Unable to resolve directory parent for "${t}"`);
              r++;
              let n = t.slice(m, a),
                u = o.get(n);
              u === void 0 && ((u = s.length), o.set(n, u), s.push(n));
              let d = i.length;
              (i.push({
                depthAndFlags: Te(r, 0, 1),
                nameId: u,
                parentId: e,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              }),
                l++,
                (c[l] = d),
                (m = a + 1));
            }
            let e = c[l];
            if (e === void 0) throw Error(`Unable to resolve directory node for "${t}"`);
            this.promoteDirectoryToExplicit(e, t);
          } else {
            let e = c[l];
            if (e === void 0) throw Error(`Unable to resolve file parent for "${t}"`);
            let n = t.slice(m),
              a = o.get(n);
            (a === void 0 && ((a = s.length), o.set(n, a), s.push(n)),
              i.push({
                depthAndFlags: Te(r + 1, 0),
                nameId: a,
                parentId: e,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              }));
          }
          (m !== u.length && ((u = t.substring(0, m)), (d = r)), (n = t));
        }
        ((c.length = l + 1),
          n != null && (this.lastPreparedPath = qe(n)),
          (this.hasDeferredDirectoryIndexes = !0));
      }),
      this
    );
  }
  appendPresortedFilePaths(e) {
    let t = null,
      n = 0,
      r = this.nodes,
      i = this.segmentTable,
      a = i.idByValue,
      o = i.valueById,
      s = this.directoryStack,
      c = 0,
      l = ``,
      u = 0;
    for (let i of e) {
      if (t === i) throw Error(`Duplicate path: "${i}"`);
      let e = i.length,
        d = 0,
        f = 0;
      if (t != null) {
        if (l.length > 0 && i.length > l.length && i.startsWith(l)) ((d = u), (f = l.length));
        else {
          let n = Math.min(e, t.length);
          for (let e = 0; e < n; e++) {
            let n = i.charCodeAt(e);
            if (n !== t.charCodeAt(e)) break;
            n === 47 && (d++, (f = e + 1));
          }
        }
      }
      ((c = d), (n = d));
      let p = f,
        m = i.indexOf(`/`, p);
      for (; m >= 0;) {
        let e = s[c];
        if (e === void 0) throw Error(`Directory stack underflow while building the path store`);
        n++;
        let t = i.slice(p, m),
          l = a.get(t);
        l === void 0 && ((l = o.length), a.set(t, l), o.push(t));
        let u = r.length;
        (r.push({
          depthAndFlags: Te(n, 0, 1),
          nameId: l,
          parentId: e,
          subtreeNodeCount: 1,
          visibleSubtreeCount: 1,
        }),
          this.recordCreatedDirectoryPath(i.slice(0, m)),
          this.presortedDirectoryNodeIds.push(u),
          c++,
          (s[c] = u),
          (p = m + 1),
          (m = i.indexOf(`/`, p)));
      }
      let h = s[c];
      if (h === void 0) throw Error(`Unable to resolve file parent for "${i}"`);
      let g = i.slice(p),
        _ = a.get(g);
      (_ === void 0 && ((_ = o.length), a.set(g, _), o.push(g)),
        r.push({
          depthAndFlags: Te(n + 1, 0),
          nameId: _,
          parentId: h,
          subtreeNodeCount: 1,
          visibleSubtreeCount: 1,
        }),
        p !== l.length && ((l = i.substring(0, p)), (u = n)),
        (t = i));
    }
    ((s.length = c + 1),
      t != null && (this.lastPreparedPath = qe(t)),
      (this.hasDeferredDirectoryIndexes = !0));
  }
  finish(e = {}) {
    let t = e.skipSubtreeCountPass === !0;
    return (
      this.hasDeferredDirectoryIndexes
        ? (I(this.instrumentation, `store.builder.buildDirectoryIndexes`, () =>
            this.buildPresortedFinish(t),
          ),
          (this.hasDeferredDirectoryIndexes = !1))
        : t ||
          I(this.instrumentation, `store.builder.computeSubtreeCounts`, () =>
            this.computeSubtreeCounts(0),
          ),
      {
        directories: this.directories,
        nodes: this.nodes,
        options: this.options,
        rootId: 0,
        segmentTable: this.segmentTable,
        presortedDirectoryNodeIds:
          this.presortedDirectoryNodeIds.length > 0 ? this.presortedDirectoryNodeIds : null,
      }
    );
  }
  didMatchAllInitialExpandedPaths() {
    return (
      this.createdDirectoriesAllExpanded &&
      this.initialExpandedPathSet != null &&
      this.createdDirectoryCount === this.initialExpandedPathSet.size
    );
  }
  appendPreparedPath(e, t) {
    if (
      ((this.hasDeferredDirectoryIndexes &&= (this.buildDirectoryIndexes(), !1)),
      this.lastPreparedPath != null)
    ) {
      if (e.path === this.lastPreparedPath.path) throw Error(`Duplicate path: "${e.path}"`);
      if (
        t &&
        (this.options.sort === "default"
          ? Ue(this.lastPreparedPath, e, this.segmentSortKeyCache)
          : et(this.lastPreparedPath, e, this.options.sort)) > 0
      )
        throw Error(`Builder input must be sorted before appendPaths(): "${e.path}"`);
    }
    let n = this.lastPreparedPath,
      r = rt(e),
      i = n == null ? 0 : rt(n),
      a = n == null ? 0 : nt(n.segments, e.segments),
      o = Math.min(a, r, i);
    this.directoryStack.length = o + 1;
    for (let n = o; n < r; n++) {
      let r = this.directoryStack[this.directoryStack.length - 1];
      if (r === void 0) throw Error(`Directory stack underflow while building the path store`);
      let i = t
        ? this.getOrCreateDirectoryChild(r, e.segments[n])
        : this.createDirectoryChild(r, e.segments[n]);
      this.directoryStack.push(i);
    }
    if (e.isDirectory) {
      let t = this.directoryStack[this.directoryStack.length - 1];
      if (t === void 0) throw Error(`Unable to resolve directory node for "${e.path}"`);
      (this.promoteDirectoryToExplicit(t, e.path), (this.lastPreparedPath = e));
      return;
    }
    let s = this.directoryStack[this.directoryStack.length - 1];
    if (s === void 0) throw Error(`Unable to resolve file parent for "${e.path}"`);
    (t ? this.createFileChild(s, e.basename, e.path) : this.createFileChildUnchecked(s, e.basename),
      (this.lastPreparedPath = e));
  }
  recordCreatedDirectoryPath(e) {
    this.createdDirectoriesAllExpanded &&
      this.initialExpandedPathSet != null &&
      ((this.createdDirectoryCount += 1),
      this.initialExpandedPathSet.has(e) || (this.createdDirectoriesAllExpanded = !1));
  }
  createFileChild(e, t, n) {
    let r = Xe(this.segmentTable, t),
      i = this.getDirectoryIndex(e),
      a = i.childIdByNameId;
    if (a != null && a.get(r) !== void 0)
      throw Error(`Path collides with an existing entry: "${n}"`);
    let o = this.nodes[e];
    if (o === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
    let s = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: Te(M(o) + 1, 0),
        nameId: r,
        parentId: e,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      a?.set(r, s),
      me(i, s),
      s
    );
  }
  createFileChildUnchecked(e, t) {
    let n = Xe(this.segmentTable, t),
      r = this.getDirectoryIndex(e),
      i = this.nodes[e];
    if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
    let a = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: Te(M(i) + 1, 0),
        nameId: n,
        parentId: e,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      r.childIdByNameId != null && r.childIdByNameId.set(n, a),
      me(r, a),
      a
    );
  }
  getOrCreateDirectoryChild(e, t) {
    let n = Xe(this.segmentTable, t),
      r = this.getDirectoryIndex(e);
    if (r.childIdByNameId != null) {
      let e = r.childIdByNameId.get(n);
      if (e !== void 0) {
        let n = this.nodes[e];
        if (n != null && !N(n))
          throw Error(`Path collides with an existing file while creating directory "${t}"`);
        return e;
      }
    }
    let i = this.nodes[e];
    if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
    let a = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: Te(M(i) + 1, 0, 1),
        nameId: n,
        parentId: e,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      r.childIdByNameId != null && r.childIdByNameId.set(n, a),
      me(r, a),
      this.directories.set(a, de()),
      a
    );
  }
  createDirectoryChild(e, t) {
    let n = Xe(this.segmentTable, t),
      r = this.getDirectoryIndex(e),
      i = this.nodes[e];
    if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
    let a = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: Te(M(i) + 1, 0, 1),
        nameId: n,
        parentId: e,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      r.childIdByNameId != null && r.childIdByNameId.set(n, a),
      me(r, a),
      this.directories.set(a, de()),
      a
    );
  }
  promoteDirectoryToExplicit(e, t) {
    let n = this.nodes[e];
    if (n === void 0) throw Error(`Unknown directory node ID: ${String(e)}`);
    if (!N(n)) throw Error(`Path is not a directory: "${t}"`);
    if (P(n, 1)) throw Error(`Duplicate path: "${t}"`);
    Oe(n, 1);
  }
  getDirectoryIndex(e) {
    let t = this.directories.get(e);
    if (t !== void 0) return t;
    throw Error(`Unknown directory child index for node ${String(e)}`);
  }
  buildPresortedFinish(e) {
    let t = this.nodes,
      n = this.directories;
    n.set(0, fe());
    let r = -1,
      i = null;
    for (let e = 1; e < t.length; e++) {
      let a = t[e];
      if (a == null) continue;
      if (N(a)) {
        let t = fe();
        (n.set(e, t), (r = e), (i = t));
      }
      let o;
      (a.parentId === r ? (o = i) : ((o = n.get(a.parentId)), (r = a.parentId), (i = o ?? null)),
        o?.childIds.push(e));
    }
    if (!e)
      for (let e = t.length - 1; e >= 1; e--) {
        let n = t[e];
        if (n == null) continue;
        let r = t[n.parentId];
        r != null &&
          ((r.subtreeNodeCount += n.subtreeNodeCount),
          (r.visibleSubtreeCount += n.visibleSubtreeCount));
      }
  }
  buildDirectoryIndexes() {
    let e = this.nodes;
    for (let t = 1; t < e.length; t++) {
      let n = e[t];
      if (n == null) continue;
      N(n) && this.directories.set(t, de());
      let r = this.directories.get(n.parentId);
      r != null && (r.childIdByNameId != null && r.childIdByNameId.set(n.nameId, t), me(r, t));
    }
  }
  computeSubtreeCounts(e) {
    let t = this.nodes[e];
    if (t === void 0) throw Error(`Unknown node ID: ${String(e)}`);
    if (!N(t)) return ((t.subtreeNodeCount = 1), (t.visibleSubtreeCount = 1), 1);
    let n = this.getDirectoryIndex(e),
      r = 1;
    for (let e of n.childIds) r += this.computeSubtreeCounts(e);
    return (ge(this.nodes, n), (t.subtreeNodeCount = r), (t.visibleSubtreeCount = r), r);
  }
};
function ft(e, t = `closed`, n = null) {
  let r = mt(t);
  return {
    activeNodeCount: e.nodes.length - 1,
    collapsedDirectoryIds: new Set(),
    collapseNewDirectoriesByDefault: !1,
    defaultExpansion: r,
    directoriesOpenByDefault: r === `open`,
    hasCollapsedDirectoryOverrides: !1,
    directoryLoadInfoById: new Map(),
    expandedDirectoryIds: new Set(),
    instrumentation: n,
    listeners: new Map(),
    pathCacheByNodeId: new Map([[e.rootId, { path: ``, version: 0 }]]),
    pathCacheVersion: 0,
    snapshot: e,
    transactionStack: [],
  };
}
function pt() {
  return { affectedAncestorIds: new Set(), affectedNodeIds: new Set(), events: [] };
}
function mt(e) {
  if (typeof e != `number`) return e;
  if (!Number.isInteger(e) || e < 0)
    throw Error(
      `initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`,
    );
  return e;
}
function ht(e, t) {
  return P(t, 2) || e.defaultExpansion === `open`
    ? !0
    : e.defaultExpansion !== `closed` && M(t) <= e.defaultExpansion;
}
function B(e, t, n = e.snapshot.nodes[t]) {
  return n == null || !N(n)
    ? !1
    : e.directoriesOpenByDefault && !e.hasCollapsedDirectoryOverrides
      ? !0
      : e.collapsedDirectoryIds.has(t)
        ? !1
        : e.expandedDirectoryIds.has(t)
          ? !0
          : ht(e, n);
}
function gt(e, t, n, r = e.snapshot.nodes[t]) {
  if (r == null || !N(r)) return;
  let i = ht(e, r);
  if (n) {
    if (i) {
      (e.collapsedDirectoryIds.delete(t),
        (e.hasCollapsedDirectoryOverrides = e.collapsedDirectoryIds.size > 0));
      return;
    }
    e.expandedDirectoryIds.add(t);
  } else
    i
      ? (e.collapsedDirectoryIds.add(t), (e.hasCollapsedDirectoryOverrides = !0))
      : e.expandedDirectoryIds.delete(t);
}
function _t(e, t) {
  let n = e.directoryLoadInfoById.get(t);
  if (n != null) return n;
  let r = { activeAttemptId: null, errorMessage: null, nextAttemptId: 1, state: `loaded` };
  return (e.directoryLoadInfoById.set(t, r), r);
}
function vt(e, t) {
  return e.directoryLoadInfoById.get(t)?.state ?? `loaded`;
}
function yt(e, t) {
  let n = _t(e, t);
  if (n.state === `loading` && n.activeAttemptId != null)
    return { attemptId: n.activeAttemptId, nodeId: t, reused: !0 };
  let r = n.nextAttemptId;
  return (
    (n.activeAttemptId = r),
    (n.errorMessage = null),
    (n.nextAttemptId += 1),
    (n.state = `loading`),
    { attemptId: r, nodeId: t, reused: !1 }
  );
}
function V(e, t) {
  let n = _t(e, t);
  ((n.activeAttemptId = null), (n.errorMessage = null), (n.state = `unloaded`));
}
function bt(e, t, n) {
  let r = e.directoryLoadInfoById.get(t);
  return r == null || r.activeAttemptId !== n
    ? !1
    : ((r.activeAttemptId = null), (r.errorMessage = null), (r.state = `loaded`), !0);
}
function H(e, t, n) {
  return e.directoryLoadInfoById.get(t)?.activeAttemptId === n;
}
function xt(e, t, n, r) {
  let i = e.directoryLoadInfoById.get(t);
  return i == null || i.activeAttemptId !== n
    ? !1
    : ((i.activeAttemptId = null), (i.errorMessage = r ?? null), (i.state = `error`), !0);
}
function St(e, t) {
  e.directoryLoadInfoById.delete(t);
}
function Ct(e, t, n) {
  let r = n,
    i = e.listeners.get(t);
  return (
    i == null ? e.listeners.set(t, new Set([r])) : i.add(r),
    () => {
      let n = e.listeners.get(t);
      n != null && (n.delete(r), n.size === 0 && e.listeners.delete(t));
    }
  );
}
function wt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    operation: `add`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function Tt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    operation: `remove`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    recursive: e.recursive,
    visibleCountDelta: null,
  };
}
function Et(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    from: e.from,
    operation: `move`,
    projectionChanged: e.projectionChanged,
    to: e.to,
    visibleCountDelta: null,
  };
}
function Dt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `expand`,
    path: e.path,
    projectionChanged: !0,
    visibleCountDelta: null,
  };
}
function Ot(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `collapse`,
    path: e.path,
    projectionChanged: !0,
    visibleCountDelta: null,
  };
}
function kt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `mark-directory-unloaded`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function At(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    operation: `begin-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    reused: e.reused,
    visibleCountDelta: null,
  };
}
function jt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: e.childEvents.some((e) => e.canonicalChanged),
    childEvents: e.childEvents,
    operation: `apply-child-patch`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function Mt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    operation: `complete-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    stale: e.stale,
    visibleCountDelta: null,
  };
}
function Nt(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    errorMessage: e.errorMessage,
    operation: `fail-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    stale: e.stale,
    visibleCountDelta: null,
  };
}
function Pt(e) {
  return {
    activeNodeCountAfter: e.activeNodeCountAfter,
    activeNodeCountBefore: e.activeNodeCountBefore,
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    cachedPathEntryCountAfter: e.cachedPathEntryCountAfter,
    cachedPathEntryCountBefore: e.cachedPathEntryCountBefore,
    canonicalChanged: !1,
    idsPreserved: e.idsPreserved,
    loadInfoEntryCountAfter: e.loadInfoEntryCountAfter,
    loadInfoEntryCountBefore: e.loadInfoEntryCountBefore,
    mode: e.mode,
    operation: `cleanup`,
    projectionChanged: e.projectionChanged,
    reclaimedCachedPathEntryCount: e.reclaimedCachedPathEntryCount,
    reclaimedLoadInfoEntryCount: e.reclaimedLoadInfoEntryCount,
    reclaimedNodeSlotCount: e.reclaimedNodeSlotCount,
    reclaimedSegmentCount: e.reclaimedSegmentCount,
    segmentCountAfter: e.segmentCountAfter,
    segmentCountBefore: e.segmentCountBefore,
    totalNodeSlotCountAfter: e.totalNodeSlotCountAfter,
    totalNodeSlotCountBefore: e.totalNodeSlotCountBefore,
    visibleCountDelta: null,
  };
}
function U(e, t, n) {
  return { ...n, visibleCountDelta: Gt(e) - t };
}
function Ft(e, t) {
  let n = Gt(e),
    r = pt();
  e.transactionStack.push(r);
  try {
    t();
  } catch (t) {
    throw (Rt(e, r, !1), t);
  }
  Rt(e, r, !0, Gt(e) - n);
}
function It(e, t) {
  let n = e.instrumentation;
  n == null ? Lt(e, t) : I(n, `store.events.record`, () => Lt(e, t));
}
function Lt(e, t) {
  let n = e.transactionStack[e.transactionStack.length - 1] ?? null;
  n == null ? Ut(e, t) : (n.events.push(t), Ht(n, t));
}
function Rt(e, t, n, r = null) {
  if (e.transactionStack.pop() !== t) throw Error(`Transaction stack underflow`);
  if (!n) return;
  let i = e.transactionStack[e.transactionStack.length - 1] ?? null;
  if (i != null) {
    let n = e.instrumentation;
    n == null ? Vt(i, t) : I(n, `store.events.batch.merge`, () => Vt(i, t));
    return;
  }
  let a = zt(t, r),
    o = e.instrumentation;
  o == null ? Ut(e, a) : I(o, `store.events.batch.commit`, () => Ut(e, a));
}
function zt(e, t) {
  return {
    affectedAncestorIds: [...e.affectedAncestorIds],
    affectedNodeIds: [...e.affectedNodeIds],
    canonicalChanged: e.events.some((e) => e.canonicalChanged),
    events: [...e.events],
    operation: `batch`,
    projectionChanged: e.events.some((e) => e.projectionChanged),
    visibleCountDelta: t,
  };
}
function Bt(e, t) {
  for (let n of t.affectedAncestorIds) e.affectedAncestorIds.add(n);
  for (let n of t.affectedNodeIds) e.affectedNodeIds.add(n);
}
function Vt(e, t) {
  for (let n of t.events) e.events.push(n);
  Bt(e, t);
}
function Ht(e, t) {
  for (let n of t.affectedNodeIds) e.affectedNodeIds.add(n);
  for (let n of t.affectedAncestorIds) e.affectedAncestorIds.add(n);
}
function Ut(e, t) {
  let n = e.instrumentation;
  n == null ? Wt(e, t) : I(n, `store.events.emit`, () => Wt(e, t));
}
function Wt(e, t) {
  (e.listeners.get(t.operation)?.forEach((e) => e(t)), e.listeners.get(`*`)?.forEach((e) => e(t)));
}
function Gt(e) {
  return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount ?? 0;
}
function Kt(e, t) {
  if (e.snapshot.options.flattenEmptyDirectories !== !0) return null;
  let n = e.snapshot.nodes[t];
  if (n == null || !N(n) || P(n, 2)) return null;
  let r = e.snapshot.directories.get(t);
  if (r == null || r.childIds.length !== 1) return null;
  let i = r.childIds[0];
  if (i == null) return null;
  let a = e.snapshot.nodes[i];
  return a == null || !N(a) ? null : i;
}
function qt(e, t) {
  let n = t;
  for (;;) {
    let t = Kt(e, n);
    if (t == null) return n;
    n = t;
  }
}
function Jt(e, t) {
  let n = [t],
    r = t;
  for (;;) {
    let t = Kt(e, r);
    if (t == null) return n;
    (n.push(t), (r = t));
  }
}
function Yt(e, t) {
  let n = t == null ? e.snapshot.rootId : an(e, t);
  return n == null ? [] : sn(e, n);
}
function Xt(e, t) {
  let n = qe(t),
    r = n.isDirectory ? n.segments : n.segments.slice(0, -1),
    i = Sn(e, xn(e, r)),
    { createdNodeIds: a, directoryId: o } = cn(e, r),
    s = new Set(a),
    c = o;
  if (n.isDirectory) {
    let n = K(e, o);
    if (P(n, 1)) throw Error(`Path already exists: "${t}"`);
    (Oe(n, 1), e.pathCacheByNodeId.set(o, { path: t, version: e.pathCacheVersion }), s.add(o));
  } else ((c = un(e, o, n.basename)), s.add(c));
  tn(e, o);
  let l = Sn(e, o);
  return wt({
    affectedAncestorIds: rn(e, c),
    affectedNodeIds: [...s],
    path: t,
    projectionChanged: Cn(i, l),
  });
}
function Zt(e, t, n) {
  let r = an(e, t);
  if (r == null) throw Error(`Path does not exist: "${t}"`);
  let i = K(e, r);
  if (P(i, 2)) throw Error(`The root node cannot be removed`);
  if (N(i) && G(e, r).childIds.length > 0 && n.recursive !== !0)
    throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);
  let a = i.parentId,
    o = Sn(e, a),
    s = yn(e, r);
  (pn(e, a, r, i.nameId), bn(e, a), tn(e, a));
  let c = Sn(e, a);
  return Tt({
    affectedAncestorIds: rn(e, a),
    affectedNodeIds: s,
    path: t,
    projectionChanged: Cn(o, c),
    recursive: n.recursive === !0,
  });
}
function Qt(e, t, n, r) {
  let i = an(e, t);
  if (i == null) throw Error(`Source path does not exist: "${t}"`);
  let a = K(e, i);
  if (P(a, 2)) throw Error(`The root node cannot be moved`);
  let o = r.collision ?? `error`,
    s = _n(e, i, n),
    c = Sn(e, a.parentId),
    l = Sn(e, s.parentId),
    u = L(e.snapshot.segmentTable, a.nameId),
    d = Xe(e.snapshot.segmentTable, s.basename);
  if (s.parentId === a.parentId && u === s.basename) return null;
  if (N(a) && Dn(e, i, s.parentId))
    throw Error(`Cannot move a directory into one of its descendants`);
  let f = A(e.snapshot.nodes, G(e, s.parentId)).get(d),
    p = s.existingNodeId ?? f ?? null;
  if (p != null && p !== i && vn(e, p, o, Ee(a)) === `skip`) return null;
  let m = a.parentId;
  (pn(e, m, i, a.nameId),
    (a.parentId = s.parentId),
    (a.nameId = d),
    e.pathCacheByNodeId.delete(i),
    En(e, i),
    fn(e, s.parentId, i),
    bn(e, m),
    e.pathCacheVersion++,
    tn(e, m),
    s.parentId !== m && tn(e, s.parentId));
  let h = Sn(e, m),
    g = Sn(e, s.parentId);
  return Et({
    affectedAncestorIds: [...new Set([...rn(e, m), ...rn(e, s.parentId)])],
    affectedNodeIds: [i],
    from: t,
    projectionChanged: wn([c, l], [h, g]),
    to: W(e, i),
  });
}
function $t(e, t) {
  let n = e.pathCacheByNodeId.get(t);
  return n != null && n.version === e.pathCacheVersion ? n.path : null;
}
function en(e, t, n) {
  return (e.pathCacheByNodeId.set(t, { path: n, version: e.pathCacheVersion }), n);
}
function W(e, t) {
  let n = K(e, t),
    r = $t(e, t);
  if (r != null) return r;
  if (P(n, 2)) return en(e, t, ``);
  let i = W(e, n.parentId),
    a = L(e.snapshot.segmentTable, n.nameId),
    o = i.length === 0 ? a : `${i}${a}`;
  return en(e, t, N(n) ? `${o}/` : o);
}
function tn(e, t) {
  let n = e.instrumentation;
  n == null ? kn(e, t) : I(n, `store.recomputeCountsUpwardFrom`, () => kn(e, t));
}
function nn(e, t) {
  let n = [[t, 0]],
    { nodes: r, directories: i } = e.snapshot;
  for (; n.length > 0;) {
    let t = n[n.length - 1],
      a = t[0],
      o = r[a];
    if (o == null || !N(o)) {
      (On(e, a, o, !0), n.pop());
      continue;
    }
    let s = i.get(a);
    if (s == null || t[1] >= s.childIds.length) {
      (On(e, a, o, !0), n.pop());
      continue;
    }
    let c = s.childIds[t[1]++];
    n.push([c, 0]);
  }
}
function rn(e, t) {
  let n = [],
    r = t;
  for (; r != null;) {
    let t = K(e, r);
    if ((n.push(r), r === e.snapshot.rootId)) break;
    r = t.parentId;
  }
  return n;
}
function an(e, t) {
  if (t.length === 0) return e.snapshot.rootId;
  let n = Je(t);
  return on(e, n.segments, n.requiresDirectory);
}
function on(e, t, n) {
  let r = e.snapshot.rootId;
  for (let n of t) {
    let t = e.snapshot.segmentTable.idByValue.get(n);
    if (t === void 0) return null;
    let i = G(e, r),
      a = A(e.snapshot.nodes, i).get(t);
    if (a === void 0) return null;
    r = a;
  }
  let i = K(e, r);
  return n && !N(i) ? null : r;
}
function G(e, t) {
  let n = e.snapshot.directories.get(t);
  if (n === void 0) throw Error(`Unknown directory child index for node ${String(t)}`);
  return n;
}
function K(e, t) {
  let n = e.snapshot.nodes[t];
  if (n === void 0 || P(n, 4)) throw Error(`Unknown node ID: ${String(t)}`);
  return n;
}
function sn(e, t) {
  let n = e.snapshot.nodes[t];
  if (n === void 0 || P(n, 4)) return [];
  if (!N(n)) return [W(e, t)];
  if (G(e, t).childIds.length === 0) return P(n, 1) && !P(n, 2) ? [W(e, t)] : [];
  let r = [],
    i = [{ childIndex: 0, nodeId: t }];
  for (; i.length > 0;) {
    let t = i[i.length - 1];
    if (t == null) break;
    let n = e.snapshot.nodes[t.nodeId];
    if (n === void 0 || P(n, 4)) {
      i.pop();
      continue;
    }
    if (!N(n)) {
      (r.push(W(e, t.nodeId)), i.pop());
      continue;
    }
    let a = G(e, t.nodeId);
    if (a.childIds.length === 0) {
      (P(n, 1) && !P(n, 2) && r.push(W(e, t.nodeId)), i.pop());
      continue;
    }
    let o = a.childIds[t.childIndex];
    o == null ? i.pop() : (t.childIndex++, i.push({ childIndex: 0, nodeId: o }));
  }
  return r;
}
function cn(e, t) {
  let n = [],
    r = e.snapshot.rootId;
  for (let i of t) {
    let t = Xe(e.snapshot.segmentTable, i),
      a = G(e, r),
      o = A(e.snapshot.nodes, a).get(t);
    if (o !== void 0) {
      if (!N(K(e, o)))
        throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);
      r = o;
    } else ((r = ln(e, r, t)), n.push(r));
  }
  return { createdNodeIds: n, directoryId: r };
}
function ln(e, t, n) {
  let r = K(e, t),
    i = e.snapshot.nodes.length;
  return (
    e.snapshot.nodes.push({
      depthAndFlags: Te(M(r) + 1, 0, 1),
      nameId: n,
      parentId: t,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    e.snapshot.directories.set(i, de()),
    fn(e, t, i),
    e.collapseNewDirectoriesByDefault &&
      (e.collapsedDirectoryIds.add(i), (e.hasCollapsedDirectoryOverrides = !0)),
    e.activeNodeCount++,
    i
  );
}
function un(e, t, n) {
  let r = Xe(e.snapshot.segmentTable, n),
    i = G(e, t);
  if (A(e.snapshot.nodes, i).has(r)) throw Error(`Path already exists: "${jn(e, t, n)}"`);
  let a = K(e, t),
    o = e.snapshot.nodes.length;
  return (
    e.snapshot.nodes.push({
      depthAndFlags: Te(M(a) + 1, 0),
      nameId: r,
      parentId: t,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    fn(e, t, o),
    e.activeNodeCount++,
    o
  );
}
function dn(e, t, n) {
  let r = 0,
    i = t.childIds.length;
  for (; r < i;) {
    let a = (r + i) >>> 1,
      o = t.childIds[a];
    o == null || mn(e, n, o) < 0 ? (i = a) : (r = a + 1);
  }
  return r;
}
function fn(e, t, n) {
  let r = G(e, t),
    i = K(e, n);
  (A(e.snapshot.nodes, r).set(i.nameId, n), _e(r, n, i.subtreeNodeCount, i.visibleSubtreeCount));
  let a = dn(e, r, n);
  (r.childIds.splice(a, 0, n), he(r, a), j(e.snapshot.nodes, r));
}
function pn(e, t, n, r) {
  let i = G(e, t),
    a = pe(i),
    o = a.get(n) ?? -1;
  (A(e.snapshot.nodes, i).delete(r), a.delete(n));
  let s = e.snapshot.nodes[n];
  (s != null && _e(i, n, -s.subtreeNodeCount, -s.visibleSubtreeCount),
    o >= 0 && (i.childIds.splice(o, 1), he(i, o), j(e.snapshot.nodes, i)));
}
function mn(e, t, n) {
  let r = e.snapshot.options.sort;
  return r === "default" ? hn(e, t, n) : r(gn(e, t), gn(e, n));
}
function hn(e, t, n) {
  let r = K(e, t),
    i = K(e, n),
    a = N(r);
  if (a !== N(i)) return a ? -1 : 1;
  let o = Le(We(e.snapshot.segmentTable, r.nameId), We(e.snapshot.segmentTable, i.nameId));
  if (o !== 0) return o;
  let s = L(e.snapshot.segmentTable, r.nameId),
    c = L(e.snapshot.segmentTable, i.nameId);
  return s === c ? (t < n ? -1 : 1) : s < c ? -1 : 1;
}
function gn(e, t) {
  let n = K(e, t),
    r = W(e, t),
    i = N(n),
    a = i ? r.slice(0, -1) : r;
  return {
    basename: L(e.snapshot.segmentTable, n.nameId),
    depth: M(n),
    isDirectory: i,
    path: r,
    segments: a.length === 0 ? [] : a.split(`/`),
  };
}
function _n(e, t, n) {
  let r = K(e, t),
    i = an(e, n);
  if (i != null) {
    let t = K(e, i);
    if (N(t))
      return { basename: L(e.snapshot.segmentTable, r.nameId), existingNodeId: null, parentId: i };
    let a = Je(n).segments;
    return { basename: a[a.length - 1] ?? ``, existingNodeId: i, parentId: t.parentId };
  }
  let a = Je(n),
    o = a.segments[a.segments.length - 1] ?? ``,
    s = a.segments.slice(0, -1),
    c = s.length === 0 ? e.snapshot.rootId : on(e, s, !0);
  if (c == null) throw Error(`Destination parent does not exist: "${n}"`);
  return { basename: o, existingNodeId: null, parentId: c };
}
function vn(e, t, n, r) {
  if (n === `skip`) return `skip`;
  if (n === `error`) throw Error(`Destination already exists: "${W(e, t)}"`);
  let i = K(e, t);
  if (Ee(i) !== r) throw Error(`replace collision requires the same source and destination kinds`);
  if (N(i) && G(e, t).childIds.length > 0)
    throw Error(`replace collision does not support non-empty directories`);
  let a = i.parentId,
    o = i.nameId;
  return (yn(e, t), pn(e, a, t, o), bn(e, a), tn(e, a), `handled`);
}
function yn(e, t) {
  let n = [],
    r = [{ nodeId: t, visitedChildren: !1 }];
  for (; r.length > 0;) {
    let t = r.pop();
    if (t == null) break;
    let i = K(e, t.nodeId);
    if (t.visitedChildren || !N(i)) {
      (N(i) && e.snapshot.directories.delete(t.nodeId),
        Oe(i, 4),
        e.pathCacheByNodeId.delete(t.nodeId),
        e.collapsedDirectoryIds.delete(t.nodeId) &&
          (e.hasCollapsedDirectoryOverrides = e.collapsedDirectoryIds.size > 0),
        e.expandedDirectoryIds.delete(t.nodeId),
        St(e, t.nodeId),
        e.activeNodeCount--,
        n.push(t.nodeId));
      continue;
    }
    r.push({ nodeId: t.nodeId, visitedChildren: !0 });
    let a = G(e, t.nodeId);
    for (let e = a.childIds.length - 1; e >= 0; e--) {
      let t = a.childIds[e];
      t != null && r.push({ nodeId: t, visitedChildren: !1 });
    }
  }
  return n;
}
function bn(e, t) {
  let n = t;
  for (; n != null;) {
    let t = K(e, n);
    if (!N(t) || P(t, 2) || G(e, n).childIds.length > 0) return;
    (Oe(t, 1), (n = t.parentId === n ? null : t.parentId));
  }
}
function xn(e, t) {
  let n = e.snapshot.rootId;
  for (let r of t) {
    let t = e.snapshot.segmentTable.idByValue.get(r);
    if (t == null) break;
    let i = A(e.snapshot.nodes, G(e, n)).get(t);
    if (i == null || !N(K(e, i))) break;
    n = i;
  }
  return n;
}
function Sn(e, t) {
  let n = Tn(e, t);
  if (n == null) return null;
  let r = qt(e, n),
    i = K(e, r),
    a = n === r ? null : Jt(e, n).map((t) => W(e, t));
  return JSON.stringify({
    flattenedSegmentPaths: a,
    hasChildren: G(e, r).childIds.length > 0,
    path: W(e, r),
    terminalKind: Ee(i),
  });
}
function Cn(e, t) {
  return wn([e], [t]);
}
function wn(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (r == null || i == null || r !== i) return !0;
  }
  return !1;
}
function Tn(e, t) {
  let n = t;
  for (; n != null;) {
    let t = K(e, n);
    if (!N(t) || P(t, 2)) return null;
    if (!B(e, n, t)) return n;
    n = t.parentId;
  }
  return null;
}
function En(e, t) {
  let n = K(e, t);
  if ((ke(n, (t === e.snapshot.rootId ? -1 : M(K(e, n.parentId))) + 1), !N(n))) return;
  let r = G(e, t);
  for (let t of r.childIds) En(e, t);
}
function Dn(e, t, n) {
  let r = n;
  for (; r != null;) {
    if (r === t) return !0;
    let n = K(e, r);
    if (r === e.snapshot.rootId) return !1;
    r = n.parentId;
  }
  return !1;
}
function On(e, t, n = K(e, t), r = !1) {
  let i = e.instrumentation;
  i == null ? An(e, t, n, r) : I(i, `store.recomputeNodeCounts`, () => An(e, t, n, r));
}
function kn(e, t) {
  let n = t;
  for (; n != null;) {
    let t = K(e, n),
      r = t.subtreeNodeCount,
      i = t.visibleSubtreeCount;
    if ((On(e, n, t), n === e.snapshot.rootId)) return;
    let a = t.subtreeNodeCount - r,
      o = t.visibleSubtreeCount - i,
      s = t.parentId;
    ((a !== 0 || o !== 0) && _e(G(e, s), n, a, o), (n = s));
  }
}
function An(e, t, n, r) {
  if (!N(n)) {
    ((n.subtreeNodeCount = 1), (n.visibleSubtreeCount = 1));
    return;
  }
  let i = G(e, t);
  if (r) {
    let t = e.instrumentation;
    t == null
      ? ge(e.snapshot.nodes, i)
      : I(t, `store.recomputeNodeCounts.rebuildChildAggregates`, () => ge(e.snapshot.nodes, i));
  }
  let a = 1 + i.totalChildSubtreeNodeCount,
    o = i.totalChildVisibleSubtreeCount;
  ((n.subtreeNodeCount = a),
    (n.visibleSubtreeCount = P(n, 2) ? o : Kt(e, t) == null ? (B(e, t, n) ? 1 + o : 1) : o));
}
function jn(e, t, n) {
  let r = W(e, t);
  return r.length === 0 ? n : `${r}${n}`;
}
function Mn(e) {
  return e != null && !P(e, 4);
}
function Nn(e, t) {
  let n = e.snapshot.nodes[t];
  return !Mn(n) || !N(n) || P(n, 2) ? null : n;
}
function Pn(e) {
  let t = 0;
  for (let [n, r] of e.pathCacheByNodeId)
    r.version === e.pathCacheVersion && Mn(e.snapshot.nodes[n]) && (t += 1);
  return t;
}
function Fn(e) {
  return Math.max(0, e.valueById.length - 1);
}
function In(e) {
  return {
    activeNodeCount: e.activeNodeCount,
    cachedPathEntryCount: Pn(e),
    loadInfoEntryCount: e.directoryLoadInfoById.size,
    segmentCount: Fn(e.snapshot.segmentTable),
    totalNodeSlotCount: Math.max(0, e.snapshot.nodes.length - 1),
  };
}
function Ln(e, t, n, r) {
  return {
    activeNodeCountAfter: r.activeNodeCount,
    activeNodeCountBefore: n.activeNodeCount,
    cachedPathEntryCountAfter: r.cachedPathEntryCount,
    cachedPathEntryCountBefore: n.cachedPathEntryCount,
    idsPreserved: t,
    loadInfoEntryCountAfter: r.loadInfoEntryCount,
    loadInfoEntryCountBefore: n.loadInfoEntryCount,
    mode: e,
    reclaimedCachedPathEntryCount: n.cachedPathEntryCount - r.cachedPathEntryCount,
    reclaimedLoadInfoEntryCount: n.loadInfoEntryCount - r.loadInfoEntryCount,
    reclaimedNodeSlotCount: n.totalNodeSlotCount - r.totalNodeSlotCount,
    reclaimedSegmentCount: n.segmentCount - r.segmentCount,
    segmentCountAfter: r.segmentCount,
    segmentCountBefore: n.segmentCount,
    totalNodeSlotCountAfter: r.totalNodeSlotCount,
    totalNodeSlotCountBefore: n.totalNodeSlotCount,
  };
}
function Rn(e) {
  let t = [],
    n = [];
  for (let n of e.collapsedDirectoryIds) Nn(e, n) != null && t.push(W(e, n));
  for (let t of e.expandedDirectoryIds) Nn(e, t) != null && n.push(W(e, t));
  return { collapsedPaths: t, expandedPaths: n };
}
function zn(e) {
  let t = [];
  for (let [n, r] of e.directoryLoadInfoById)
    Nn(e, n) != null &&
      vt(e, n) !== `loaded` &&
      t.push({
        info: {
          activeAttemptId: null,
          errorMessage: r.errorMessage,
          nextAttemptId: r.nextAttemptId,
          state: r.state,
        },
        path: W(e, n),
      });
  return t;
}
function Bn(e, t) {
  (e.collapsedDirectoryIds.clear(),
    (e.hasCollapsedDirectoryOverrides = !1),
    e.expandedDirectoryIds.clear());
  for (let n of t.expandedPaths) {
    let t = an(e, n);
    t != null && gt(e, t, !0, K(e, t));
  }
  for (let n of t.collapsedPaths) {
    let t = an(e, n);
    t != null && gt(e, t, !1, K(e, t));
  }
}
function Vn(e, t) {
  e.directoryLoadInfoById.clear();
  for (let n of t) {
    let t = an(e, n.path);
    t != null &&
      Nn(e, t) != null &&
      e.directoryLoadInfoById.set(t, {
        activeAttemptId: null,
        errorMessage: n.info.errorMessage,
        nextAttemptId: n.info.nextAttemptId,
        state: n.info.state,
      });
  }
}
function Hn(e) {
  ((e.pathCacheVersion += 1),
    e.pathCacheByNodeId.clear(),
    e.pathCacheByNodeId.set(e.snapshot.rootId, { path: ``, version: e.pathCacheVersion }));
}
function Un(e) {
  let t = e.snapshot.segmentTable,
    n = Ye();
  for (let r of e.snapshot.nodes) Mn(r) && (r.nameId = P(r, 2) ? 0 : Xe(n, L(t, r.nameId)));
  e.snapshot.segmentTable = n;
}
function Wn(e) {
  for (let [t, n] of e.snapshot.directories) {
    let r = e.snapshot.nodes[t];
    if (!Mn(r) || !N(r)) {
      e.snapshot.directories.delete(t);
      continue;
    }
    let i = n.childIds.filter((n) => {
      let r = e.snapshot.nodes[n];
      return Mn(r) && r.parentId === t;
    });
    ((n.childIds = i),
      (n.childIdByNameId = new Map(i.map((t) => [K(e, t).nameId, t]))),
      (n.childPositionById = new Map(i.map((e, t) => [e, t]))),
      ge(e.snapshot.nodes, n));
  }
}
function Gn(e) {
  let t = e.snapshot.nodes.length - 1;
  for (; t > e.snapshot.rootId;) {
    let n = e.snapshot.nodes[t];
    if (Mn(n)) break;
    --t;
  }
  e.snapshot.nodes.length = t + 1;
}
function Kn(e) {
  let t = Rn(e),
    n = zn(e);
  (I(e.instrumentation, `store.cleanup.stable.clearPathCaches`, () => Hn(e)),
    I(e.instrumentation, `store.cleanup.stable.rebuildSegmentTable`, () => Un(e)),
    I(e.instrumentation, `store.cleanup.stable.rebuildDirectoryIndexes`, () => Wn(e)),
    I(e.instrumentation, `store.cleanup.stable.trimTrailingRemovedNodeSlots`, () => Gn(e)),
    I(e.instrumentation, `store.cleanup.stable.restoreExpansionOverrides`, () => Bn(e, t)),
    I(e.instrumentation, `store.cleanup.stable.restoreDirectoryLoadInfos`, () => Vn(e, n)),
    I(e.instrumentation, `store.cleanup.stable.recomputeCounts`, () => nn(e, e.snapshot.rootId)));
}
function qn(e) {
  let t = Rn(e),
    n = zn(e),
    r = I(e.instrumentation, `store.cleanup.aggressive.listPaths`, () => Yt(e)),
    i = je({ ...e.snapshot.options }, e.instrumentation),
    a = I(e.instrumentation, `store.cleanup.aggressive.rebuildSnapshot`, () => {
      let e = new z(i);
      return (e.appendPaths(r), e.finish());
    });
  ((e.snapshot = a),
    (e.activeNodeCount = a.nodes.length - 1),
    (e.pathCacheByNodeId = new Map([[a.rootId, { path: ``, version: 0 }]])),
    (e.pathCacheVersion = 0),
    I(e.instrumentation, `store.cleanup.aggressive.restoreExpansionOverrides`, () => Bn(e, t)),
    I(e.instrumentation, `store.cleanup.aggressive.restoreDirectoryLoadInfos`, () => Vn(e, n)),
    I(e.instrumentation, `store.cleanup.aggressive.recomputeCounts`, () =>
      nn(e, e.snapshot.rootId),
    ));
}
function Jn(e) {
  for (let t of e.directoryLoadInfoById.values())
    if (t.state === `loading` && t.activeAttemptId != null) return !0;
  return !1;
}
function Yn(e, t) {
  let n = In(e);
  t === `stable`
    ? I(e.instrumentation, `store.cleanup.stable`, () => Kn(e))
    : I(e.instrumentation, `store.cleanup.aggressive`, () => qn(e));
  let r = In(e);
  return Ln(t, t === `stable`, n, r);
}
var Xn = 64;
function Zn(e, t) {
  let n = t + 2;
  if (n <= e.length) return e;
  let r = e.length;
  for (; r < n;) r *= 2;
  let i = new Int32Array(r);
  return (i.fill(-1), i.set(e), i);
}
function q(e) {
  return K(e, e.snapshot.rootId).visibleSubtreeCount;
}
function Qn(e, t, n, r) {
  let i = K(e, t.terminalNodeId),
    a = Math.max(1, i.visibleSubtreeCount);
  return Math.min(r - 1, n + a - 1);
}
function $n(e, t, n, r) {
  return {
    ancestorPaths: r,
    index: t.index,
    posInSet: t.posInSet,
    row: vr(e, t.cursor),
    setSize: t.setSize,
    subtreeEndIndex: Qn(e, t.cursor, t.index, n),
  };
}
function er(e, t, n, r, i, a) {
  let o = G(e, t),
    { childIndex: s, childVisibleIndex: c, localVisibleIndex: l } = ve(e.snapshot.nodes, o, n),
    u = o.childIds[s];
  if (u == null) throw Error(`Visible index ${String(n)} is out of range`);
  return tr(e, u, l, r + c, i + 1, s, o.childIds.length, a);
}
function tr(e, t, n, r, i, a, o, s) {
  if (!N(K(e, t))) {
    if (n === 0)
      return {
        ancestors: s,
        cursor: { headNodeId: t, terminalNodeId: t, visibleDepth: i },
        index: r,
        posInSet: a,
        setSize: o,
      };
    throw Error(`Visible index ${String(n)} is out of range for file`);
  }
  let c = fr(e, t, i);
  if (n === 0) return { ancestors: s, cursor: c, index: r, posInSet: a, setSize: o };
  let l = K(e, c.terminalNodeId);
  if (!N(l) || !B(e, c.terminalNodeId, l))
    throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);
  return er(e, c.terminalNodeId, n - 1, r + 1, c.visibleDepth, [
    ...s,
    { cursor: c, index: r, posInSet: a, setSize: o },
  ]);
}
function nr(e, t) {
  let n = q(e);
  if (t < 0 || t >= n) return null;
  let r = er(e, e.snapshot.rootId, t, 0, -1, []),
    i = r.ancestors.map((t) => W(e, t.cursor.terminalNodeId)),
    a = null;
  return {
    ancestorPaths: i,
    get ancestorRows() {
      if (a != null) return a;
      let t = [],
        i = [];
      for (let a of r.ancestors) {
        let r = $n(e, a, n, [...i]);
        (t.push(r), i.push(r.row.path));
      }
      return ((a = t), a);
    },
    index: r.index,
    posInSet: r.posInSet,
    row: vr(e, r.cursor),
    setSize: r.setSize,
    subtreeEndIndex: Qn(e, r.cursor, r.index, n),
  };
}
function rr(e, t, n) {
  let r = e.instrumentation,
    i = q(e);
  if (i <= 0 || n < t) return [];
  let a = Math.max(0, Math.min(t, i - 1)),
    o = Math.max(a, Math.min(n, i - 1));
  if (r == null) {
    if (a === 0) return _r(e, o + 1);
    let t = [],
      n = lr(e, a);
    for (let r = a; r <= o && n != null; r++) {
      let r = vr(e, n);
      (t.push(r), (n = mr(e, n)));
    }
    return t;
  }
  let s = [],
    c = 0,
    l = 0,
    u = I(r, `store.getVisibleSlice.selectFirstRow`, () => lr(e, a));
  for (let t = a; t <= o && u != null; t++) {
    let t = I(r, `store.getVisibleSlice.materializeRow`, () => vr(e, u));
    (s.push(t),
      t.isFlattened && (c++, (l += t.flattenedSegments?.length ?? 0)),
      (u = I(r, `store.getVisibleSlice.advanceCursor`, () => mr(e, u))));
  }
  return (
    Me(r, `workload.visibleRowsRead`, s.length),
    Me(r, `workload.flattenedRowsRead`, c),
    Me(r, `workload.flattenedSegmentsRead`, l),
    s
  );
}
function ir(e, t = q(e)) {
  let n = e.instrumentation;
  return n == null ? gr(e, t) : I(n, `store.getVisibleTreeProjection`, () => gr(e, t));
}
function ar(e) {
  return hr(ir(e));
}
function or(e, t) {
  let n = an(e, t);
  if (n == null || n === e.snapshot.rootId || (N(K(e, n)) && qt(e, n) !== n)) return null;
  let r = 0,
    i = n,
    { nodes: a, rootId: o } = e.snapshot;
  for (; i !== o;) {
    let t = K(e, i).parentId,
      n = G(e, t),
      s = pe(n).get(i);
    if (s == null) throw Error(`Child ${String(i)} was not found in its parent index`);
    if (((r += ye(a, n, s)), t !== o)) {
      let n = K(e, t),
        a = Kt(e, t);
      if (!B(e, t, n) && a !== i) return null;
      qt(e, t) === t && (r += 1);
    }
    i = t;
  }
  return r;
}
function sr(e, t) {
  let n = an(e, t);
  if (n == null) throw Error(`Path does not exist: "${t}"`);
  let r = K(e, n);
  if (!N(r)) throw Error(`Path is not a directory: "${t}"`);
  return B(e, n, r)
    ? null
    : (gt(e, n, !0, r),
      tn(e, n),
      Dt({ affectedAncestorIds: rn(e, n), affectedNodeIds: [n], path: t, projectionChanged: !0 }));
}
function cr(e, t) {
  let n = an(e, t);
  if (n == null) throw Error(`Path does not exist: "${t}"`);
  let r = K(e, n);
  if (!N(r)) throw Error(`Path is not a directory: "${t}"`);
  return B(e, n, r)
    ? (gt(e, n, !1, r),
      tn(e, n),
      Ot({ affectedAncestorIds: rn(e, n), affectedNodeIds: [n], path: t, projectionChanged: !0 }))
    : null;
}
function lr(e, t) {
  return t < 0 || t >= q(e) ? null : ur(e, e.snapshot.rootId, t, -1);
}
function ur(e, t, n, r) {
  let i = G(e, t),
    a = e.instrumentation,
    { childIndex: o, localVisibleIndex: s } =
      a == null
        ? ve(e.snapshot.nodes, i, n)
        : I(a, `store.getVisibleSlice.selectChildIndex`, () => ve(e.snapshot.nodes, i, n)),
    c = i.childIds[o];
  if (c != null) return dr(e, c, s, r + 1);
  throw Error(`Visible index ${String(n)} is out of range`);
}
function dr(e, t, n, r) {
  if (!N(K(e, t))) {
    if (n === 0) return { headNodeId: t, terminalNodeId: t, visibleDepth: r };
    throw Error(`Visible index ${String(n)} is out of range for file`);
  }
  let i = fr(e, t, r);
  if (n === 0) return i;
  let a = K(e, i.terminalNodeId);
  if (!N(a) || !B(e, i.terminalNodeId, a))
    throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);
  return ur(e, i.terminalNodeId, n - 1, i.visibleDepth);
}
function fr(e, t, n) {
  return N(K(e, t))
    ? e.instrumentation == null
      ? { headNodeId: t, terminalNodeId: qt(e, t), visibleDepth: n }
      : {
          headNodeId: t,
          terminalNodeId: I(
            e.instrumentation,
            `store.getVisibleSlice.flatten.resolveTerminalDirectory`,
            () => qt(e, t),
          ),
          visibleDepth: n,
        }
    : { headNodeId: t, terminalNodeId: t, visibleDepth: n };
}
function pr(e, t) {
  let n = K(e, t);
  if (!N(n)) return !0;
  let r = n.parentId;
  return r === e.snapshot.rootId || Kt(e, r) !== t;
}
function mr(e, t) {
  let n = K(e, t.terminalNodeId);
  if (N(n)) {
    let r = G(e, t.terminalNodeId);
    if (B(e, t.terminalNodeId, n) && r.childIds.length > 0) {
      let n = r.childIds[0];
      return n == null ? null : dr(e, n, 0, t.visibleDepth + 1);
    }
  }
  let r = t.terminalNodeId,
    i = t.visibleDepth;
  for (;;) {
    let t = K(e, r);
    if (r === e.snapshot.rootId) return null;
    let n = t.parentId,
      a = G(e, n),
      o = pe(a).get(r) ?? -1;
    if (o < 0) throw Error(`Child ${String(r)} was not found in its parent index`);
    let s = a.childIds[o + 1] ?? null;
    if (s != null) return dr(e, s, 0, i);
    (pr(e, r) && i--, (r = n));
  }
}
function hr(e) {
  let t = e.paths.length,
    n = Array(t);
  for (let r = 0; r < t; r += 1) {
    let t = e.getParentIndex(r);
    n[r] = {
      index: r,
      parentPath: t >= 0 ? (e.paths[t] ?? null) : null,
      path: e.paths[r] ?? ``,
      posInSet: e.posInSetByIndex[r] ?? 0,
      setSize: e.setSizeByIndex[r] ?? 0,
    };
  }
  return {
    getParentIndex: e.getParentIndex,
    rows: n,
    get visibleIndexByPath() {
      return e.visibleIndexByPath;
    },
  };
}
function gr(e, t) {
  let n = Array(t),
    r = new Int32Array(t),
    i = new Int32Array(t),
    a = new Int32Array(t),
    o = new Int32Array(Xn);
  o.fill(-1);
  let s = 0,
    { nodes: c, directories: l, segmentTable: u } = e.snapshot,
    d = [[l.get(e.snapshot.rootId), 0, -1, ``]],
    f = e.snapshot.options.flattenEmptyDirectories,
    p = e.pathCacheByNodeId,
    m = e.pathCacheVersion,
    h = u.valueById;
  for (; d.length > 0 && s < t;) {
    let t = d[d.length - 1],
      u = t[0];
    if (t[1] >= u.childIds.length) {
      d.pop();
      continue;
    }
    let g = t[1],
      _ = u.childIds[t[1]++],
      v = c[_],
      y = t[2] + 1,
      b = t[3];
    o = Zn(o, y);
    let x,
      S = _;
    if (N(v)) ((S = f ? qt(e, _) : _), (x = S === _ ? `${b}${h[v.nameId]}/` : W(e, S)));
    else {
      let e = p.get(_);
      x = e != null && e.version === m ? e.path : `${b}${h[v.nameId]}`;
    }
    ((r[s] = o[y]), (n[s] = x), (i[s] = g), (a[s] = u.childIds.length), (o[y + 1] = s), (s += 1));
    let C = c[S];
    C != null && N(C) && B(e, S, C) && d.push([l.get(S), 0, y, x]);
  }
  s < t && (n.length = s);
  let g = r.subarray(0, s),
    _ = i.subarray(0, s),
    v = a.subarray(0, s),
    y = null;
  return {
    getParentIndex(e) {
      return e < 0 || e >= s ? -1 : (g[e] ?? -1);
    },
    paths: n,
    posInSetByIndex: _,
    setSizeByIndex: v,
    get visibleIndexByPath() {
      if (y == null) {
        y = new Map();
        for (let e = 0; e < s; e += 1) y.set(n[e] ?? ``, e);
      }
      return y;
    },
  };
}
function _r(e, t) {
  let n = Array(t),
    r = 0,
    { nodes: i, directories: a, segmentTable: o } = e.snapshot,
    s = [[a.get(e.snapshot.rootId), 0, -1]],
    c = o.valueById,
    l = e.snapshot.options.flattenEmptyDirectories,
    u = e.pathCacheByNodeId,
    d = e.pathCacheVersion;
  for (; s.length > 0 && r < t;) {
    let t = s[s.length - 1],
      o = t[0];
    if (t[1] >= o.childIds.length) {
      s.pop();
      continue;
    }
    let f = o.childIds[t[1]++],
      p = i[f],
      m = t[2] + 1;
    if (!N(p)) {
      let t = u.get(f);
      n[r++] = {
        depth: m,
        flattenedSegments: void 0,
        hasChildren: !1,
        id: f,
        isExpanded: !1,
        isFlattened: !1,
        isLoading: !1,
        kind: `file`,
        loadState: void 0,
        name: c[p.nameId],
        path: t != null && t.version === d ? t.path : W(e, f),
      };
      continue;
    }
    let h = l ? qt(e, f) : f,
      g = { headNodeId: f, terminalNodeId: h, visibleDepth: m };
    n[r++] = vr(e, g);
    let _ = i[h];
    _ != null && N(_) && B(e, h, _) && s.push([a.get(h), 0, m]);
  }
  return (r < t && (n.length = r), n);
}
function vr(e, t) {
  let n = K(e, t.terminalNodeId),
    r = N(n) ? yr(e, t) : null,
    i = W(e, t.terminalNodeId),
    a = L(e.snapshot.segmentTable, n.nameId),
    o = N(n) && G(e, t.terminalNodeId).childIds.length > 0,
    s = t.headNodeId !== t.terminalNodeId,
    c = e.instrumentation,
    l = s
      ? c == null
        ? Jt(e, t.headNodeId).map((n) => {
            let r = K(e, n);
            return {
              isTerminal: n === t.terminalNodeId,
              name: L(e.snapshot.segmentTable, r.nameId),
              nodeId: n,
              path: W(e, n),
            };
          })
        : I(c, `store.getVisibleSlice.flatten.collectSegments`, () =>
            Jt(e, t.headNodeId).map((n) => {
              let r = K(e, n);
              return {
                isTerminal: n === t.terminalNodeId,
                name: L(e.snapshot.segmentTable, r.nameId),
                nodeId: n,
                path: W(e, n),
              };
            }),
          )
      : void 0;
  return {
    depth: t.visibleDepth,
    flattenedSegments: l,
    hasChildren: o,
    id: t.terminalNodeId,
    isExpanded: N(n) && B(e, t.terminalNodeId, n),
    isFlattened: s,
    isLoading: r === `loading`,
    kind: N(n) ? `directory` : `file`,
    loadState: r == null || r === `loaded` ? void 0 : r,
    name: a,
    path: i,
  };
}
function yr(e, t) {
  if (t.headNodeId === t.terminalNodeId) return vt(e, t.terminalNodeId);
  let n = Jt(e, t.headNodeId),
    r = !1,
    i = !1;
  for (let t of n) {
    let n = vt(e, t);
    if (n === `loading`) return `loading`;
    n === `error` ? (i = !0) : n === `unloaded` && (r = !0);
  }
  return i ? `error` : r ? `unloaded` : `loaded`;
}
var br = 8;
function xr(e) {
  let { nodes: t, directories: n, rootId: r, options: i } = e,
    a = t.length,
    o = new Int32Array(a),
    s = new Int32Array(a),
    c = new Int32Array(a),
    l = new Int32Array(a),
    u = new Int32Array(a),
    d = new Int32Array(a),
    f = new Int32Array(a);
  for (let e = 0; e < a; e += 1) {
    let n = t[e];
    n != null &&
      ((o[e] = n.parentId),
      (s[e] = n.nameId),
      (c[e] = n.depthAndFlags),
      (l[e] = n.subtreeNodeCount),
      (u[e] = n.visibleSubtreeCount));
  }
  let p = 0;
  for (let e of n.values()) p += e.childIds.length;
  let m = new Int32Array(p),
    h = 0;
  for (let [e, t] of n) {
    let n = t.childIds;
    ((d[e] = h), (f[e] = n.length));
    for (let e = 0; e < n.length; e += 1) ((m[h] = n[e]), (h += 1));
  }
  return {
    nodeCount: a,
    rootId: r,
    flattenEmptyDirectories: i.flattenEmptyDirectories === !0,
    parentId: o,
    nameId: s,
    depthAndFlags: c,
    subtreeNodeCount: l,
    visibleSubtreeCount: u,
    childStart: d,
    childCount: f,
    childIdsFlat: m,
  };
}
function Sr(e) {
  let {
    nodeCount: t,
    rootId: n,
    flattenEmptyDirectories: r,
    depthAndFlags: i,
    subtreeNodeCount: a,
    visibleSubtreeCount: o,
    childStart: s,
    childCount: c,
    childIdsFlat: l,
  } = e;
  for (let e = t - 1; e >= 1; --e) {
    if ((i[e] & br) === 0) continue;
    let t = s[e],
      n = c[e],
      u = 0,
      d = 0;
    for (let e = 0; e < n; e += 1) {
      let n = l[t + e];
      ((u += a[n]), (d += o[n]));
    }
    a[e] = 1 + u;
    let f;
    ((f = r && n === 1 ? ((i[l[t]] & br) === 0 ? 1 + d : d) : 1 + d), (o[e] = f));
  }
  let u = s[n],
    d = c[n],
    f = 0,
    p = 0;
  for (let e = 0; e < d; e += 1) {
    let t = l[u + e];
    ((f += a[t]), (p += o[t]));
  }
  ((a[n] = 1 + f), (o[n] = p));
}
function Cr(e) {
  let {
      directories: t,
      nodes: n,
      options: r,
      rootId: i,
      presortedDirectoryNodeIds: a,
    } = e.snapshot,
    o = r.flattenEmptyDirectories === !0,
    s = (e) => {
      let r = n[e];
      if (r == null || !N(r)) return;
      let i = t.get(e);
      if (i == null) throw Error(`Unknown directory child index for node ${String(e)}`);
      let a = i.childIds,
        s = a.length,
        c = 0,
        l = 0;
      for (let e = 0; e < s; e++) {
        let t = a[e];
        if (t == null) continue;
        let r = n[t];
        ((c += r.subtreeNodeCount), (l += r.visibleSubtreeCount));
      }
      ((i.totalChildSubtreeNodeCount = c),
        (i.totalChildVisibleSubtreeCount = l),
        s >= 128 && j(n, i),
        (r.subtreeNodeCount = 1 + c));
      let u;
      if (o && s === 1) {
        let e = n[a[0]];
        u = e != null && N(e) ? l : 1 + l;
      } else u = 1 + l;
      r.visibleSubtreeCount = u;
    };
  if (a != null) for (let e = a.length - 1; e >= 0; e--) s(a[e]);
  else for (let e = n.length - 1; e >= 1; e--) s(e);
  let c = n[i],
    l = t.get(i);
  if (c == null || l == null) return;
  let u = l.childIds,
    d = 0,
    f = 0;
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    if (t == null) continue;
    let r = n[t];
    ((d += r.subtreeNodeCount), (f += r.visibleSubtreeCount));
  }
  ((l.totalChildSubtreeNodeCount = d),
    (l.totalChildVisibleSubtreeCount = f),
    j(n, l),
    (c.subtreeNodeCount = 1 + d),
    (c.visibleSubtreeCount = f));
}
function wr(e) {
  let { directories: t, nodes: n, rootId: r } = e.snapshot,
    i = xr(e.snapshot);
  Sr(i);
  let a = i.subtreeNodeCount,
    o = i.visibleSubtreeCount;
  for (let e = 0; e < n.length; e += 1) {
    let t = n[e];
    t != null && ((t.subtreeNodeCount = a[e]), (t.visibleSubtreeCount = o[e]));
  }
  for (let [e, i] of t) {
    let t = i.childIds,
      a = t.length,
      o = 0,
      s = 0;
    for (let e = 0; e < a; e++) {
      let r = t[e];
      if (r == null) continue;
      let i = n[r];
      ((o += i.subtreeNodeCount), (s += i.visibleSubtreeCount));
    }
    ((i.totalChildSubtreeNodeCount = o),
      (i.totalChildVisibleSubtreeCount = s),
      (e === r || a >= 128) && j(n, i));
  }
}
function Tr(e) {
  return (
    e.initialExpansion === `open` &&
    (e.initialExpandedPaths == null || e.initialExpandedPaths.length === 0)
  );
}
var Er = class e {
  #e;
  constructor(e = {}) {
    let t = F(e),
      n = I(t, `store.builder.create`, () => new z(e));
    if (e.preparedInput != null) {
      let t = ut(e.preparedInput);
      t == null
        ? n.appendPreparedPaths(lt(e.preparedInput), !1)
        : n.appendPresortedPaths(t, dt(e.preparedInput));
    } else {
      let r = e.paths ?? [];
      e.presorted === !0
        ? n.appendPaths(r)
        : n.appendPreparedPaths(I(t, `store.preparePathEntries`, () => R(r, e)));
    }
    let r = I(t, `store.builder.finish`, () => n.finish({ skipSubtreeCountPass: !0 })),
      i = I(
        t,
        `store.state.detectAllDirectoriesExpanded`,
        () => (e.initialExpansion ?? `closed`) === `closed` && n.didMatchAllInitialExpandedPaths(),
      );
    ((this.#e = I(t, `store.state.create`, () =>
      ft(r, i ? `open` : (e.initialExpansion ?? `closed`), t),
    )),
      i && (this.#e.collapseNewDirectoriesByDefault = !0));
    let a = i
      ? this.#e.snapshot.directories.size - 1
      : I(t, `store.state.initializeExpandedPaths`, () =>
          this.initializeExpandedPaths(e.initialExpandedPaths),
        );
    i ||
    Tr(e) ||
    ((e.initialExpansion ?? `closed`) === `closed` &&
      a === this.#e.snapshot.directories.size - 1) ||
    ((e.initialExpandedPaths?.length ?? 0) > 0 &&
      I(t, `store.state.checkAllDirectoriesExpanded`, () => this.hasAllDirectoriesExpanded()))
      ? e.useSoaCountSweep === !0
        ? I(t, `store.state.initializeOpenVisibleCountsViaSoa`, () => wr(this.#e))
        : I(t, `store.state.initializeOpenVisibleCounts`, () => Cr(this.#e))
      : I(t, `store.state.recomputeCounts`, () => nn(this.#e, this.#e.snapshot.rootId));
  }
  static preparePaths(e, t = {}) {
    return ot(e, t);
  }
  static prepareInput(e, t = {}) {
    return st(e, t);
  }
  static preparePresortedInput(e) {
    return ct(e);
  }
  list(e) {
    return I(this.#e.instrumentation, `store.list`, () => Yt(this.#e, e));
  }
  add(e) {
    I(this.#e.instrumentation, `store.add`, () => {
      let t = q(this.#e);
      It(this.#e, U(this.#e, t, Xt(this.#e, e)));
    });
  }
  remove(e, t = {}) {
    I(this.#e.instrumentation, `store.remove`, () => {
      let n = q(this.#e);
      It(this.#e, U(this.#e, n, Zt(this.#e, e, t)));
    });
  }
  move(e, t, n = {}) {
    I(this.#e.instrumentation, `store.move`, () => {
      let r = q(this.#e),
        i = Qt(this.#e, e, t, n);
      i != null && It(this.#e, U(this.#e, r, i));
    });
  }
  batch(e) {
    Ft(this.#e, () => {
      if (typeof e == `function`) e(this);
      else
        for (let t of e)
          switch (t.type) {
            case `add`:
              this.add(t.path);
              break;
            case `remove`:
              this.remove(t.path, { recursive: t.recursive });
              break;
            case `move`:
              this.move(t.from, t.to, { collision: t.collision });
          }
    });
  }
  getVisibleCount() {
    return I(this.#e.instrumentation, `store.getVisibleCount`, () => q(this.#e));
  }
  getVisibleSlice(e, t) {
    return I(this.#e.instrumentation, `store.getVisibleSlice`, () => rr(this.#e, e, t));
  }
  getVisibleRowContext(e) {
    return I(this.#e.instrumentation, `store.getVisibleRowContext`, () => nr(this.#e, e));
  }
  getVisibleTreeProjection() {
    return ar(this.#e);
  }
  getVisibleTreeProjectionData(e) {
    return ir(this.#e, e);
  }
  getVisibleIndex(e) {
    return I(this.#e.instrumentation, `store.getVisibleIndex`, () => or(this.#e, e));
  }
  getPathInfo(e) {
    return I(this.#e.instrumentation, `store.getPathInfo`, () => {
      let t = an(this.#e, e);
      if (t == null) return null;
      let n = K(this.#e, t);
      return { depth: M(n), kind: N(n) ? `directory` : `file`, path: W(this.#e, t) };
    });
  }
  isExpanded(e) {
    return I(this.#e.instrumentation, `store.isExpanded`, () => {
      let t = this.requireDirectoryNodeId(e),
        n = K(this.#e, t);
      return B(this.#e, t, n);
    });
  }
  expand(e) {
    I(this.#e.instrumentation, `store.expand`, () => {
      let t = q(this.#e),
        n = sr(this.#e, e);
      n != null && It(this.#e, U(this.#e, t, n));
    });
  }
  collapse(e) {
    I(this.#e.instrumentation, `store.collapse`, () => {
      let t = q(this.#e),
        n = cr(this.#e, e);
      n != null && It(this.#e, U(this.#e, t, n));
    });
  }
  on(e, t) {
    return Ct(this.#e, e, t);
  }
  getDirectoryLoadState(e) {
    let t = this.requireDirectoryNodeId(e);
    return vt(this.#e, t);
  }
  markDirectoryUnloaded(e) {
    I(this.#e.instrumentation, `store.markDirectoryUnloaded`, () => {
      let t = this.requireDirectoryNodeId(e);
      if (G(this.#e, t).childIds.length > 0)
        throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);
      let n = q(this.#e);
      (V(this.#e, t),
        It(
          this.#e,
          U(
            this.#e,
            n,
            kt({
              affectedAncestorIds: rn(this.#e, t),
              affectedNodeIds: [t],
              path: e,
              projectionChanged: this.isDirectoryProjectionVisible(t),
            }),
          ),
        ));
    });
  }
  beginChildLoad(e) {
    return I(this.#e.instrumentation, `store.beginChildLoad`, () => {
      let t = this.requireDirectoryNodeId(e),
        n = q(this.#e),
        r = yt(this.#e, t);
      return (
        It(
          this.#e,
          U(
            this.#e,
            n,
            At({
              affectedAncestorIds: rn(this.#e, t),
              affectedNodeIds: [t],
              attemptId: r.attemptId,
              path: e,
              projectionChanged: this.isDirectoryProjectionVisible(t),
              reused: r.reused,
            }),
          ),
        ),
        r
      );
    });
  }
  applyChildPatch(e, t) {
    return I(this.#e.instrumentation, `store.applyChildPatch`, () => {
      let n = this.resolveActiveDirectoryNodeId(e.nodeId);
      if (n == null || vt(this.#e, n) !== `loading` || !H(this.#e, n, e.attemptId)) return !1;
      let r = W(this.#e, n);
      this.validateChildPatch(r, t);
      let i = q(this.#e),
        a = [];
      for (let e of t.operations) {
        Dr(r, e);
        let t = q(this.#e);
        switch (e.type) {
          case `add`:
            a.push(U(this.#e, t, Xt(this.#e, e.path)));
            break;
          case `remove`:
            a.push(U(this.#e, t, Zt(this.#e, e.path, { recursive: e.recursive })));
            break;
          case `move`: {
            let n = Qt(this.#e, e.from, e.to, { collision: e.collision });
            n != null && a.push(U(this.#e, t, n));
            break;
          }
        }
      }
      let o = a.some((e) => e.projectionChanged) || this.isDirectoryProjectionVisible(n);
      return (
        It(
          this.#e,
          U(
            this.#e,
            i,
            jt({
              affectedAncestorIds: rn(this.#e, n),
              affectedNodeIds: [n],
              attemptId: e.attemptId,
              childEvents: a,
              path: W(this.#e, n),
              projectionChanged: o,
            }),
          ),
        ),
        !0
      );
    });
  }
  completeChildLoad(e) {
    return I(this.#e.instrumentation, `store.completeChildLoad`, () => {
      let t = this.resolveActiveDirectoryNodeId(e.nodeId);
      if (t == null) return !1;
      let n = q(this.#e),
        r = bt(this.#e, t, e.attemptId);
      return (
        It(
          this.#e,
          U(
            this.#e,
            n,
            Mt({
              affectedAncestorIds: rn(this.#e, t),
              affectedNodeIds: [t],
              attemptId: e.attemptId,
              path: W(this.#e, t),
              projectionChanged: this.isDirectoryProjectionVisible(t),
              stale: !r,
            }),
          ),
        ),
        r
      );
    });
  }
  failChildLoad(e, t) {
    return I(this.#e.instrumentation, `store.failChildLoad`, () => {
      let n = this.resolveActiveDirectoryNodeId(e.nodeId);
      if (n == null) return !1;
      let r = q(this.#e),
        i = xt(this.#e, n, e.attemptId, t);
      return (
        It(
          this.#e,
          U(
            this.#e,
            r,
            Nt({
              affectedAncestorIds: rn(this.#e, n),
              affectedNodeIds: [n],
              attemptId: e.attemptId,
              errorMessage: t,
              path: W(this.#e, n),
              projectionChanged: this.isDirectoryProjectionVisible(n),
              stale: !i,
            }),
          ),
        ),
        i
      );
    });
  }
  cleanup(e = {}) {
    return I(this.#e.instrumentation, `store.cleanup`, () => {
      if (this.#e.transactionStack.length > 0)
        throw Error(`Cleanup cannot run during an open batch or transaction.`);
      if (Jn(this.#e)) throw Error(`Cleanup cannot run while directory loads are active.`);
      let t = q(this.#e),
        n = Yn(this.#e, e.mode ?? `stable`);
      return (
        It(
          this.#e,
          U(
            this.#e,
            t,
            Pt({
              ...n,
              affectedAncestorIds: [],
              affectedNodeIds: [],
              projectionChanged: n.idsPreserved === !1,
            }),
          ),
        ),
        n
      );
    });
  }
  getNodeCount() {
    return this.#e.activeNodeCount;
  }
  initializeExpandedPaths(e) {
    if (e == null || e.length === 0) return 0;
    let t = 0,
      n = [],
      r = [],
      i = 0,
      a = null,
      o = this.#e.snapshot.segmentTable,
      s = o.valueById,
      c = this.#e.snapshot.nodes,
      l = new Map();
    for (let u of e) {
      a != null && u < a && ((a = null), (i = 0), (n.length = 0), (r.length = 0));
      let e = u.length > 0 && u.charCodeAt(u.length - 1) === 47 ? u.length - 1 : u.length;
      if (e === 0) {
        ((a = u), (i = e), (n.length = 0), (r.length = 0));
        continue;
      }
      let d = 0,
        f = 0;
      if (a != null) {
        let t = Math.min(e, i),
          n = !0;
        for (let e = 0; e < t; e += 1) {
          let t = u.charCodeAt(e);
          if (t !== a.charCodeAt(e)) {
            n = !1;
            break;
          }
          t === 47 && ((d += 1), (f = e + 1));
        }
        (n &&
          (t === i && e > t && u.charCodeAt(t) === 47
            ? ((d += 1), (f = t + 1))
            : t === e && i > t && a.charCodeAt(t) === 47 && ((d += 1), (f = e + 1))),
          (d = Math.min(d, r.length)));
      }
      let p = d === 0 ? this.#e.snapshot.rootId : (r[d - 1] ?? this.#e.snapshot.rootId),
        m = d,
        h = !0,
        g = f;
      for (; g <= e;) {
        let t = u.indexOf(`/`, g),
          i = t === -1 || t > e ? e : t,
          a = u.slice(g, i),
          f = G(this.#e, p).childIds,
          _ = m === d ? (n[m] ?? 0) : 0,
          v = _,
          y,
          b = l.get(a) ?? Fe(a);
        l.set(a, b);
        let x = (e, t) => {
          for (v = e; v < t; v += 1) {
            let e = f[v],
              t = c[e],
              n = s[t.nameId];
            if (n === a) return ((y = e), !0);
            let r = Le(We(o, t.nameId), b);
            if (r > 0 || (r === 0 && n > a)) return !1;
          }
          return !1;
        };
        if ((!x(_, f.length) && _ > 0 && x(0, _), y === void 0 || !N(K(this.#e, y)))) {
          h = !1;
          break;
        }
        if (((n[m] = v), (r[m] = y), (p = y), (m += 1), i === e)) break;
        g = i + 1;
      }
      if (((a = u), (i = e), (n.length = m), (r.length = m), !h))
        ((a = null), (i = 0), (n.length = 0), (r.length = 0));
      else
        for (let e = d; e < m; e += 1) {
          let n = r[e];
          if (n == null) continue;
          let i = K(this.#e, n);
          B(this.#e, n, i) || (gt(this.#e, n, !0, i), (t += 1));
        }
    }
    return t;
  }
  hasAllDirectoriesExpanded() {
    for (let e of this.#e.snapshot.directories.keys()) {
      if (e === this.#e.snapshot.rootId) continue;
      let t = K(this.#e, e);
      if (!B(this.#e, e, t)) return !1;
    }
    return !0;
  }
  requireDirectoryNodeId(e) {
    let t = an(this.#e, e);
    if (t == null) throw Error(`Path does not exist: "${e}"`);
    if (!N(K(this.#e, t))) throw Error(`Path is not a directory: "${e}"`);
    return t;
  }
  resolveActiveDirectoryNodeId(e) {
    try {
      if (!N(K(this.#e, e))) throw Error(`Node is not a directory: ${String(e)}`);
      return e;
    } catch {
      return null;
    }
  }
  isDirectoryProjectionVisible(e) {
    let t = e;
    for (; t !== this.#e.snapshot.rootId;) {
      let e = K(this.#e, t).parentId;
      if (e !== this.#e.snapshot.rootId) {
        let n = K(this.#e, e),
          r = Kt(this.#e, e);
        if (!B(this.#e, e, n) && r !== t) return !1;
      }
      t = e;
    }
    return !0;
  }
  validateChildPatch(t, n) {
    new e({ paths: this.list(t), presorted: !0, sort: this.#e.snapshot.options.sort }).batch(
      n.operations,
    );
  }
};
function Dr(e, t) {
  switch (t.type) {
    case `add`:
    case `remove`:
      if (!t.path.startsWith(e) || t.path === e)
        throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);
      break;
    case `move`:
      if (!t.from.startsWith(e) || !t.to.startsWith(e) || t.from === e || t.to === e)
        throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`);
  }
}
var Or = (e) => (e.startsWith(`f::`) ? e.slice(3) : e);
function kr(e) {
  let t = e.lastIndexOf(`/`);
  return t < 0
    ? { parentPath: ``, baseName: e }
    : { parentPath: e.slice(0, t), baseName: e.slice(t + 1) };
}
function Ar(e, t) {
  return e === `` ? t : `${e}/${t}`;
}
function jr({ files: e, path: t, isFolder: n, nextBasename: r }) {
  let i = Or(t),
    a = r.trim();
  if (a.length === 0) return { error: `Name cannot be empty.` };
  if (a.includes(`/`)) return { error: `Name cannot include "/".` };
  let { parentPath: o, baseName: s } = kr(i);
  if (a === s) return { nextFiles: e, sourcePath: i, destinationPath: i, isFolder: n };
  let c = Ar(o, a),
    l = Array(e.length),
    u = new Set();
  if (!n) {
    let t = `${c}/`,
      r = !1;
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      if (a !== i && a.startsWith(t)) return { error: `"${c}" already exists.` };
      let o = a === i ? c : a;
      if (u.has(o)) return { error: `"${c}" already exists.` };
      (u.add(o), (l[n] = o), a === i && (r = !0));
    }
    return r
      ? { nextFiles: l, sourcePath: i, destinationPath: c, isFolder: n }
      : { error: `Could not find the selected file to rename.` };
  }
  let d = `${i}/`,
    f = `${c}/`,
    p = 0;
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      r = n === i || n.startsWith(d);
    if (!r && (n === c || n.startsWith(f))) return { error: `"${c}" already exists.` };
    let a = r ? `${c}${n.slice(i.length)}` : n;
    if (u.has(a)) return { error: `"${c}" already exists.` };
    (u.add(a), (l[t] = a), r && p++);
  }
  return p === 0
    ? { error: `Could not find the selected folder to rename.` }
    : { nextFiles: l, sourcePath: i, destinationPath: c, isFolder: n };
}
function Mr(e) {
  return e.endsWith(`/`);
}
function Nr(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e,
    n = t.lastIndexOf(`/`),
    r = n < 0 ? t : t.slice(n + 1);
  return e.endsWith(`/`) ? `${r}/` : r;
}
function Pr(e) {
  let t = [],
    n = new Set();
  for (let r of e) n.has(r) || (n.add(r), t.push(r));
  let r = new Set();
  for (let e of t.toSorted((e, t) =>
    e.length === t.length ? e.localeCompare(t) : e.length - t.length,
  )) {
    let t = (e.endsWith(`/`) ? e.slice(0, -1) : e).split(`/`),
      n = !1;
    for (let e = 0; e < t.length - 1; e += 1) {
      let i = `${t.slice(0, e + 1).join(`/`)}/`;
      if (r.has(i)) {
        n = !0;
        break;
      }
    }
    n || r.add(e);
  }
  return t.filter((e) => r.has(e));
}
function Fr(e, t) {
  return t.includes(e) ? Pr(t) : [e];
}
function Ir(e, t) {
  return e === t
    ? !0
    : e == null || t == null
      ? !1
      : e.kind === t.kind &&
        e.directoryPath === t.directoryPath &&
        e.flattenedSegmentPath === t.flattenedSegmentPath &&
        e.hoveredPath === t.hoveredPath;
}
function Lr(e, t) {
  return { draggedPaths: e, target: t };
}
function Rr(e, t) {
  if (t.kind !== `directory` || t.directoryPath == null) return !1;
  for (let n of e) if (Mr(n) && (t.directoryPath === n || t.directoryPath.startsWith(n))) return !0;
  return !1;
}
function zr(e, t) {
  return t.kind === `root` || t.directoryPath == null ? Nr(e) : t.directoryPath;
}
function Br(e, t) {
  let n = e
    .map((e) => {
      let n = zr(e, t);
      return n === e ? null : { from: e, to: n, type: `move` };
    })
    .filter((e) => e != null);
  return n.length === 0
    ? null
    : {
        operations: n,
        result: { draggedPaths: e, operation: n.length === 1 ? `move` : `batch`, target: t },
      };
}
function Vr(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function Hr(e, t, n) {
  let { paths: r, preparedInput: i } = e;
  if (i == null) {
    if (r == null) throw Error(`FileTree requires paths or preparedInput`);
    return { paths: r, preparedInput: void 0 };
  }
  let a = i.paths;
  if (r == null) return { paths: a, preparedInput: i };
  if (!Vr(Er.preparePaths(r, n == null ? {} : { sort: n }), a))
    throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);
  return { paths: a, preparedInput: i };
}
function Ur(e) {
  return (
    e.operation === `add` ||
    e.operation === `remove` ||
    e.operation === `move` ||
    e.operation === `batch`
  );
}
function Wr(e, t, n) {
  if (e === t) return n;
  let r = t.endsWith(`/`) ? t : `${t}/`;
  return e.startsWith(r) ? `${n.endsWith(`/`) ? n : `${n}/`}${e.slice(r.length)}` : e;
}
function Gr(e, t) {
  if (e === t) return !0;
  let n = t.endsWith(`/`) ? t : `${t}/`;
  return e.startsWith(n);
}
function Kr(e, t, n = !1) {
  if (e == null) return null;
  switch (t.operation) {
    case `add`:
    case `expand`:
    case `collapse`:
    case `mark-directory-unloaded`:
    case `begin-child-load`:
    case `apply-child-patch`:
    case `complete-child-load`:
    case `fail-child-load`:
    case `cleanup`:
      return e;
    case `remove`:
      return Gr(e, t.path) ? (n ? e : null) : e;
    case `move`:
      return Wr(e, t.from, t.to);
    case `batch`: {
      let r = e;
      for (let e of t.events) if (((r = Kr(r, e, n)), r == null)) return null;
      return r;
    }
  }
}
function qr(e) {
  return {
    canonicalChanged: e.canonicalChanged,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: e.visibleCountDelta,
  };
}
function Jr(e) {
  switch (e.operation) {
    case `add`:
      return { ...qr(e), operation: `add`, path: e.path };
    case `remove`:
      return { ...qr(e), operation: `remove`, path: e.path, recursive: e.recursive };
    case `move`:
      return { ...qr(e), from: e.from, operation: `move`, to: e.to };
  }
}
function Yr(e) {
  return {
    ...qr(e),
    events: e.events
      .filter((e) => e.operation === `add` || e.operation === `remove` || e.operation === `move`)
      .map((e) => Jr(e)),
    operation: `batch`,
  };
}
function Xr(e) {
  switch (e.operation) {
    case `add`:
    case `remove`:
    case `move`:
      return Jr(e);
    case `batch`:
      return Yr(e);
    default:
      return null;
  }
}
function Zr(e, t) {
  if (e.size !== t.length) return !1;
  for (let n of t) if (!e.has(n)) return !1;
  return !0;
}
function Qr(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e;
  if (t.length === 0) return [];
  let n = t.split(`/`);
  return n.slice(0, -1).map((e, t) => `${n.slice(0, t + 1).join(`/`)}/`);
}
function $r(e) {
  return Qr(e).at(-1) ?? null;
}
function ei(e, t) {
  return t == null ? e : e.startsWith(t) ? e.slice(t.length) : e;
}
function ti(e) {
  return e.endsWith(`/`);
}
var ni = (e) => e.toLowerCase();
function ri(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e,
    n = t.lastIndexOf(`/`);
  return n < 0 ? t : t.slice(n + 1);
}
function ii(e) {
  return e.endsWith(`/`) ? e.slice(0, -1) : e;
}
function ai(e, t) {
  return t && !e.endsWith(`/`) ? `${e}/` : e;
}
var oi = (e) => {
    let t = e.trim();
    return t.length === 0 ? `` : (t.includes(`\\`) ? t.replaceAll(`\\`, `/`) : t).toLowerCase();
  },
  si = Symbol(`FILE_TREE_RENAME_VIEW`),
  ci = 512,
  li = 512;
function ui(e) {
  return e === `top` || e === `center` ? e : `nearest`;
}
function di(e, t, n) {
  if (e === 0) return -1;
  if (n != null) {
    let e = t(n);
    if (e != null) return e;
    let r = Qr(n);
    for (let e = r.length - 1; e >= 0; --e) {
      let n = r[e];
      if (n == null) continue;
      let i = t(n);
      if (i != null) return i;
    }
  }
  return 0;
}
function fi(e, t, n) {
  if (e.paths.length === 0)
    return {
      focusedIndex: -1,
      getParentIndex: e.getParentIndex,
      paths: e.paths,
      posInSetByIndex: e.posInSetByIndex,
      setSizeByIndex: e.setSizeByIndex,
    };
  if (t == null)
    return {
      focusedIndex: 0,
      getParentIndex: e.getParentIndex,
      paths: e.paths,
      posInSetByIndex: e.posInSetByIndex,
      setSizeByIndex: e.setSizeByIndex,
    };
  let r = n ?? ((t) => e.visibleIndexByPath.get(t) ?? null);
  return {
    focusedIndex: di(e.paths.length, r, t),
    getParentIndex: e.getParentIndex,
    paths: e.paths,
    posInSetByIndex: e.posInSetByIndex,
    setSizeByIndex: e.setSizeByIndex,
  };
}
var pi = class e {
    static {
      Object.defineProperty(e.prototype, si, {
        configurable: !0,
        value() {
          return {
            cancel: () => {
              this.#q();
            },
            commit: () => {
              this.#J();
            },
            getPath: () => this.#T,
            getValue: () => this.#E,
            isActive: () => this.#T != null,
            setValue: (e) => {
              this.#Y(e);
            },
          };
        },
        writable: !0,
      });
    }
    #e;
    #t = new Set();
    #n = new Map();
    #r = null;
    #i = null;
    #a = new Map();
    #o = new Map();
    #s = -1;
    #c = null;
    #l = !1;
    #u = (e) => -1;
    #d = new Map();
    #f = null;
    #p = null;
    #m = null;
    #h = null;
    #g = null;
    #_;
    #v;
    #y;
    #b = [];
    #x = new Int32Array();
    #S = new Int32Array();
    #C = void 0;
    #w = !1;
    #T = null;
    #E = ``;
    #D = !1;
    #O = new Set();
    #k = [];
    #A;
    #j = null;
    #M = null;
    #N = null;
    #P = null;
    #F = null;
    #I = null;
    #L = null;
    #R = 0;
    #z = null;
    #B = new Set();
    #V = 0;
    #H;
    #U = 0;
    #W = !1;
    #G = 0;
    #K;
    constructor(e) {
      let {
          dragAndDrop: t,
          fileTreeSearchMode: n,
          initialSearchQuery: r,
          initialSelectedPaths: i,
          renaming: a,
          onSearchChange: o,
          paths: s,
          preparedInput: c,
          ...l
        } = e,
        u = Hr({ paths: s, preparedInput: c }, `constructor`, l.sort);
      ((this.#e = l),
        t != null && t !== !1 && (this.#r = t === !0 ? {} : t),
        (this.#w = a != null && a !== !1),
        a != null &&
          a !== !1 &&
          a !== !0 &&
          ((this.#C = a.canRename), (this.#v = a.onError), (this.#_ = a.onRename)),
        (this.#y = o),
        (this.#A = n ?? `hide-non-matches`),
        (this.#H = this.#le(u.paths, u.preparedInput)));
      let d = i?.map((e) => this.#Ne(e)).filter((e) => e != null) ?? [],
        f = d.at(-1) ?? null;
      (d.length > 0 && ((this.#B = new Set(d)), (this.#z = f), (this.#V = 1)),
        this.#je(f, !1),
        r != null && this.#Te(r, !1),
        (this.#K = this.#Re()));
    }
    destroy() {
      (this.#K?.(),
        (this.#K = null),
        this.#n.clear(),
        this.#t.clear(),
        this.#d.clear(),
        (this.#i = null),
        this.#he());
    }
    focusFirstItem() {
      this.#be().length > 0 && this.#Fe(0);
    }
    focusLastItem() {
      this.#G <= 0 || (this.#Ie(), this.#Fe(this.#G - 1));
    }
    focusNextItem() {
      this.#Ae(1);
    }
    focusParentItem() {
      if (this.#c == null) return;
      let e = $r(this.#c);
      if (e == null) return;
      let t = this.#Z(e);
      t >= 0 && this.#Fe(t);
    }
    focusPath(e) {
      let t = this.#H.getPathInfo(e)?.path ?? null;
      if (t == null) return;
      this.#Ie();
      let n = this.#Z(t);
      n >= 0 && this.#Fe(n);
    }
    scrollToPath(e, t) {
      let n = this.#H.getPathInfo(e)?.path ?? null;
      if (n == null) return;
      this.#Ie();
      let r = this.#xe(n);
      r < 0 ||
        (this.#Me(r) != null &&
          (t?.focus !== !1 && this.#Fe(r, !1),
          (this.#L = { id: (this.#R += 1), offset: ui(t?.offset), visibleIndex: r }),
          this.#De()));
    }
    focusMountedPathFromInput(e) {
      let t = this.#H.getPathInfo(e)?.path ?? null;
      if (t == null) return;
      let n = this.#Z(t);
      n >= 0 && this.#Fe(n);
    }
    focusNearestPath(e) {
      let t = this.resolveNearestVisiblePath(e);
      if (t == null) return null;
      let n = this.#Z(t);
      return n >= 0 ? (this.#Fe(n), this.#be()[n] ?? t) : null;
    }
    focusPreviousItem() {
      this.#Ae(-1);
    }
    getFocusedIndex() {
      return this.#s;
    }
    getFocusedItem() {
      return this.#c == null ? null : this.#Q(this.#c);
    }
    getFocusedPath() {
      return this.#c;
    }
    getScrollRequest() {
      return this.#L;
    }
    clearScrollRequest(e) {
      this.#L?.id === e && (this.#L = null);
    }
    resolveNearestVisiblePath(e) {
      let t = this.#be();
      if (this.#G === 0) return null;
      if (e == null) return this.#c ?? t[0] ?? null;
      let n = this.#H.getPathInfo(e)?.path ?? e,
        r = this.#Z(n);
      return r >= 0 ? (t[r] ?? n) : (this.#X(n) ?? this.#c ?? t[0] ?? null);
    }
    getSelectedPaths() {
      return [...this.#B];
    }
    getSelectionVersion() {
      return this.#V;
    }
    getVisibleCount() {
      return this.#G;
    }
    getVisibleRows(e, t) {
      if (t < e || this.#G === 0) return [];
      let n = Math.max(0, e),
        r = Math.min(this.#G - 1, t);
      if (r < n) return [];
      let i = r - n + 1;
      if (this.#F == null && !this.#l && r >= this.#b.length && i <= li) {
        let e = [];
        for (let t = n; t <= r; t += 1) {
          let n = this.#H.getVisibleRowContext(t);
          if (n == null) break;
          e.push(this.#ee(n));
        }
        return e;
      }
      if ((!this.#l && r >= this.#b.length && this.#Ie(), this.#F != null)) {
        let e = Array.from({ length: r - n + 1 }, (e, t) => this.#Se(n + t)),
          t = new Map(),
          i = e[0] ?? -1,
          a = i;
        for (let n = 1; n <= e.length; n += 1) {
          let r = e[n];
          r != null && r === a + 1
            ? (a = r)
            : (i >= 0 &&
                this.#H.getVisibleSlice(i, a).forEach((e, n) => {
                  t.set(i + n, e);
                }),
              r == null ? ((i = -1), (a = -1)) : ((i = r), (a = r)));
        }
        return Array.from({ length: r - n + 1 }, (e, r) => {
          let i = n + r,
            a = this.#Se(i),
            o = t.get(a),
            s = this.#b[a];
          if (o == null || s == null)
            throw Error(`Missing projection row for filtered visible index ${String(i)}`);
          return this.#$(o, i, a, { ancestorPaths: this.#re(a), path: s });
        });
      }
      return this.#H.getVisibleSlice(n, r).map((e, t) => {
        let r = n + t,
          i = this.#b[r];
        if (i == null) throw Error(`Missing projection path for visible index ${String(r)}`);
        return this.#$(e, r, r, { ancestorPaths: this.#re(r), path: i });
      });
    }
    getStickyRowCandidates(e, t) {
      if (this.#F != null) return null;
      if (this.#G === 0 || e <= 0 || t <= 0) return [];
      let n = [];
      for (let r = 0; r < this.#G; r += 1) {
        let i = e + r * t,
          a = Math.min(this.#G - 1, Math.floor(i / t)),
          o = this.#te(a, r) ?? (a > 0 ? this.#te(a - 1, r) : void 0);
        if (o == null) break;
        n.push({ row: this.#ee(o), subtreeEndIndex: o.subtreeEndIndex });
      }
      return n;
    }
    getItem(e) {
      let t = this.#H.getPathInfo(e);
      return t == null ? null : this.#Q(t.path, t);
    }
    resolveMountedDirectoryPathFromInput(e) {
      let t = this.#H.getPathInfo(e);
      return t?.kind === `directory` ? t.path : null;
    }
    toggleMountedDirectoryFromInput(e) {
      let t = this.resolveMountedDirectoryPathFromInput(e);
      t != null && this.#ze(t);
    }
    selectAllVisiblePaths() {
      this.#Ie();
      let e = [...this.#be()];
      this.#ae(e, this.#c ?? this.#z);
    }
    selectOnlyPath(e) {
      let t = this.#Ne(e);
      t != null && this.#ae([t], t);
    }
    selectOnlyMountedPathFromInput(e) {
      this.#ae([e], e);
    }
    selectPath(e) {
      let t = this.#Ne(e);
      t == null || this.#B.has(t) || this.#ae([...this.#B, t]);
    }
    deselectPath(e) {
      let t = this.#Ne(e);
      t != null && this.#B.has(t) && this.#ae([...this.#B].filter((e) => e !== t));
    }
    toggleFocusedSelection() {
      this.#c != null && this.togglePathSelectionFromInput(this.#c);
    }
    togglePathSelection(e) {
      let t = this.#Ne(e);
      t != null && (this.#B.has(t) ? this.deselectPath(t) : this.selectPath(t));
    }
    togglePathSelectionFromInput(e) {
      let t = this.#Ne(e);
      t != null &&
        (this.#B.has(t)
          ? this.#ae(
              [...this.#B].filter((e) => e !== t),
              t,
            )
          : this.#ae([...this.#B, t], t));
    }
    selectPathRange(e, t) {
      let n = this.#Ne(e);
      if (n == null) return;
      this.#Ie();
      let r = this.#z,
        i = r == null ? -1 : this.#Ce(r),
        a = this.#Ce(n);
      if (i === -1 || a === -1) {
        let e = t ? [...this.#B, n] : [n];
        this.#ae(e, n);
        return;
      }
      let [o, s] = i <= a ? [i, a] : [a, i],
        c = this.#be().slice(o, s + 1),
        l = t ? [...this.#B, ...c] : c;
      this.#ae(l, r);
    }
    extendSelectionFromFocused(e) {
      if (this.#c == null) return;
      let t = this.#s;
      if (t === -1) return;
      let n = Math.min(this.#G - 1, Math.max(0, t + e));
      if (n === t) return;
      !this.#l && n >= this.#b.length && this.#Ie();
      let r = this.#be(),
        i = r[t] ?? null,
        a = r[n] ?? null;
      if (i == null || a == null) return;
      let o = new Set(this.#B);
      (o.has(i) && o.has(a) ? o.delete(i) : o.add(a),
        this.#ae([...o], this.#z ?? i, !1),
        this.#Fe(n));
    }
    getDragAndDropConfig() {
      return this.#r;
    }
    isDragAndDropEnabled() {
      return this.#r != null;
    }
    getDragSession() {
      return this.#i == null
        ? null
        : {
            draggedPaths: [...this.#i.draggedPaths],
            primaryPath: this.#i.primaryPath,
            target: this.#i.target == null ? null : { ...this.#i.target },
          };
    }
    startDrag(e) {
      if (this.#r == null) return !1;
      let t = this.#Ne(e);
      if (t == null || (this.#M != null && this.#M.length > 0)) return !1;
      let n = this.getSelectedPaths(),
        r = Fr(t, n);
      return (
        this.#r.canDrag?.(r) !== !1 &&
        (n.includes(t) || this.#ae([t], t, !1),
        this.#Pe(t),
        (this.#i = { draggedPaths: r, primaryPath: t, target: null }),
        this.#De(),
        !0)
      );
    }
    setDragTarget(e) {
      let t = this.#i;
      if (t == null) return;
      let n = e;
      if (n != null) {
        let e = Lr(t.draggedPaths, n);
        (Rr(t.draggedPaths, n) || this.#r?.canDrop?.(e) === !1) && (n = null);
      }
      Ir(t.target, n) || ((this.#i = { ...t, target: n }), this.#De());
    }
    cancelDrag() {
      this.#i != null && ((this.#i = null), this.#De());
    }
    completeDrag() {
      let e = this.#i;
      if (e == null) return !1;
      this.#i = null;
      let t = e.target == null ? null : { ...e.target };
      if (t == null) return (this.#De(), !1);
      let n = Lr(e.draggedPaths, t);
      if (Rr(e.draggedPaths, t) || this.#r?.canDrop?.(n) === !1) return (this.#De(), !1);
      let r = Br(e.draggedPaths, t);
      if (r == null) return (this.#De(), !1);
      try {
        if (r.operations.length === 1) {
          let e = r.operations[0];
          if (e == null || e.type !== `move`)
            throw Error(`Expected a single move operation for one-item drops`);
          this.#H.move(e.from, e.to, { collision: e.collision });
        } else (this.#ce(r.operations), this.#H.batch(r.operations));
      } catch (e) {
        return (
          this.#De(), this.#r?.onDropError?.(e instanceof Error ? e.message : String(e), n), !1
        );
      }
      return (this.#r?.onDropComplete?.(r.result), !0);
    }
    subscribe(e) {
      return (
        this.#t.add(e),
        e(),
        () => {
          this.#t.delete(e);
        }
      );
    }
    add(e) {
      this.#H.add(e);
    }
    remove(e, t = {}) {
      this.#H.remove(e, t);
    }
    move(e, t, n = {}) {
      this.#H.move(e, t, n);
    }
    batch(e) {
      this.#H.batch(e);
    }
    onMutation(e, t) {
      let n = e,
        r = t,
        i = this.#n.get(n);
      return (
        i ?? ((i = new Set()), this.#n.set(n, i)),
        i.add(r),
        () => {
          let e = this.#n.get(n);
          (e?.delete(r), e?.size === 0 && this.#n.delete(n));
        }
      );
    }
    setSearch(e) {
      this.#Te(e, !0);
    }
    openSearch(e = ``) {
      this.#Te(e, !0);
    }
    closeSearch() {
      this.#Te(null, !0);
    }
    isSearchOpen() {
      return this.#M !== null;
    }
    getSearchValue() {
      return this.#M ?? ``;
    }
    getSearchMatchingPaths() {
      return this.#k;
    }
    focusNextSearchMatch() {
      this.#we(1);
    }
    focusPreviousSearchMatch() {
      this.#we(-1);
    }
    startRenaming(e = this.#c ?? ``, t = {}) {
      if (!this.#w) return !1;
      let n = this.#H.getPathInfo(e);
      if (n == null) return !1;
      let r = n.path,
        i = ti(r),
        a = ii(r);
      if (this.#C?.({ isFolder: i, path: a }) === !1) return !1;
      for (let e of Qr(r)) this.#H.isExpanded(e) || this.#H.expand(e);
      return (
        this.#ae([r], r, !1),
        this.#M != null && (this.#Te(null, !1), this.#y?.(this.#M)),
        this.#Pe(r),
        (this.#T = r),
        (this.#E = ri(r)),
        (this.#D = t.removeIfCanceled ?? !1),
        this.#De(),
        !0
      );
    }
    #q() {
      if (this.#T == null) return;
      let e = this.#T,
        t = this.#D;
      ((this.#T = null),
        (this.#E = ``),
        (this.#D = !1),
        t ? this.remove(e, ti(e) ? { recursive: !0 } : void 0) : (this.#Pe(e), this.#De()));
    }
    #J() {
      let e = this.#T;
      if (e == null) return;
      if (this.#D && this.#E.trim().length === 0) {
        ((this.#T = null),
          (this.#E = ``),
          (this.#D = !1),
          this.remove(e, ti(e) ? { recursive: !0 } : void 0));
        return;
      }
      let t = ti(e),
        n = jr({ files: this.#H.list(), isFolder: t, nextBasename: this.#E, path: ii(e) });
      ((this.#T = null),
        (this.#E = ``),
        (this.#D = !1),
        `error` in n
          ? (this.#Pe(e), this.#v?.(n.error), this.#De())
          : n.sourcePath === n.destinationPath
            ? (this.#Pe(e), this.#De())
            : (this.#_?.({
                destinationPath: n.destinationPath,
                isFolder: n.isFolder,
                sourcePath: n.sourcePath,
              }),
              this.move(ai(n.sourcePath, t), ai(n.destinationPath, t))));
    }
    #Y(e) {
      this.#T != null && this.#E !== e && ((this.#E = e), this.#De());
    }
    resetPaths(e, t = {}) {
      let n = !Array.isArray(e),
        r = n ? void 0 : e,
        i = n ? e : t,
        a = this.#H.list().length,
        o = this.#G,
        s = Hr({ paths: r, preparedInput: i.preparedInput }, `resetPaths`, this.#e.sort),
        c = this.#le(s.paths, s.preparedInput, i.initialExpandedPaths),
        l = this.#c,
        u = this.#T,
        d = this.getSelectedPaths(),
        f = this.#z;
      (this.#K?.(), (this.#H = c), this.#d.clear(), this.#he());
      let p = d.map((e) => c.getPathInfo(e)?.path ?? null).filter((e) => e != null),
        m = !Zr(this.#B, p);
      ((this.#B = new Set(p)),
        m && (this.#V += 1),
        (this.#z = f == null ? null : (c.getPathInfo(f)?.path ?? null)),
        (this.#T = u == null ? null : (c.getPathInfo(u)?.path ?? null)),
        this.#T ?? ((this.#E = ``), (this.#D = !1)),
        this.#je(l, l != null || p.length > 0 || this.#z != null),
        (this.#K = this.#Re()),
        this.#De(),
        this.#Oe({
          canonicalChanged: !0,
          operation: `reset`,
          pathCountAfter: s.paths.length,
          pathCountBefore: a,
          projectionChanged: !0,
          usedPreparedInput: i.preparedInput != null,
          visibleCountDelta: this.#G - o,
        }));
    }
    #X(e) {
      this.#Ie();
      let t = $r(e),
        n = ei(e, t),
        r = null,
        i = null;
      for (let e of this.#be()) {
        if ($r(e) !== t) continue;
        let a = ei(e, t);
        if (a < n) r = e;
        else if (a > n) {
          i = e;
          break;
        }
      }
      return r ?? i;
    }
    #Z(e) {
      let t = this.#Ce(e);
      if (t !== -1) return t;
      let n = Qr(e);
      for (let e = n.length - 1; e >= 0; --e) {
        let t = n[e];
        if (t == null) continue;
        let r = this.#Ce(t);
        if (r !== -1) return r;
      }
      return this.#be().length > 0 ? 0 : -1;
    }
    #Q(e, t) {
      let n = this.#d.get(e);
      if (n != null) return n;
      let r = t ?? this.#H.getPathInfo(e);
      if (r == null) return null;
      let i = r.kind === `directory` ? this.#oe(r.path) : this.#se(r.path);
      return (this.#d.set(r.path, i), i);
    }
    #$(e, t, n, r) {
      return {
        ancestorPaths: r.ancestorPaths,
        depth: e.depth,
        flattenedSegments: e.flattenedSegments?.map((e) => ({
          isTerminal: e.isTerminal,
          name: e.name,
          path: e.path,
        })),
        hasChildren: e.hasChildren,
        index: t,
        isExpanded: e.isExpanded,
        isFlattened: e.isFlattened,
        isFocused: r.path === this.#c,
        isSelected: this.#B.has(r.path),
        kind: e.kind,
        level: e.depth,
        name: e.name,
        path: r.path,
        posInSet: r.posInSet ?? this.#x[n] ?? 0,
        setSize: r.setSize ?? this.#S[n] ?? 0,
      };
    }
    #ee(e) {
      return this.#$(e.row, e.index, e.index, {
        ancestorPaths: e.ancestorPaths,
        path: e.row.path,
        posInSet: e.posInSet,
        setSize: e.setSize,
      });
    }
    #te(e, t) {
      let n = this.#H.getVisibleRowContext(e);
      return n == null
        ? void 0
        : (n.ancestorRows[t] ??
            (t === n.ancestorRows.length && n.row.kind === `directory` && n.row.isExpanded
              ? n
              : void 0));
    }
    #ne(e) {
      let t = this.#a.get(e);
      if (t != null) return t;
      let n = this.#u(e),
        r = n < 0 ? [] : [...this.#ne(n), n];
      return (this.#a.set(e, r), r);
    }
    #re(e) {
      let t = this.#o.get(e);
      if (t != null) return t;
      let n = this.#ne(e)
        .map((e) => this.#b[e] ?? ``)
        .filter((e) => e !== ``);
      return (this.#o.set(e, n), n);
    }
    #ie(e) {
      this.#H.collapse(e);
    }
    #ae(e, t = this.#z, n = !0) {
      let r = [...new Set(e)],
        i = !Zr(this.#B, r),
        a = this.#z !== t;
      (i || a) && ((this.#B = new Set(r)), (this.#z = t), i && (this.#V += 1), n && this.#De());
    }
    #oe(e) {
      return {
        collapse: () => {
          this.#ie(e);
        },
        deselect: () => {
          this.deselectPath(e);
        },
        expand: () => {
          this.#ke(e);
        },
        focus: () => {
          this.focusPath(e);
        },
        getPath: () => e,
        isDirectory: () => !0,
        isExpanded: () => this.#H.isExpanded(e),
        isFocused: () => this.#c === e,
        isSelected: () => this.#B.has(e),
        select: () => {
          this.selectPath(e);
        },
        toggleSelect: () => {
          this.togglePathSelection(e);
        },
        toggle: () => {
          this.#ze(e);
        },
      };
    }
    #se(e) {
      return {
        deselect: () => {
          this.deselectPath(e);
        },
        focus: () => {
          this.focusPath(e);
        },
        getPath: () => e,
        isDirectory: () => !1,
        isFocused: () => this.#c === e,
        isSelected: () => this.#B.has(e),
        select: () => {
          this.selectPath(e);
        },
        toggleSelect: () => {
          this.togglePathSelection(e);
        },
      };
    }
    #ce(e) {
      let t = this.#H.list();
      this.#le(t).batch(e);
    }
    #le(e, t, n) {
      return new Er({
        ...this.#e,
        paths: e,
        preparedInput: t ?? void 0,
        ...(n === void 0 ? {} : { initialExpandedPaths: n }),
      });
    }
    #ue() {
      return ((this.#h ??= this.#H.list()), this.#h);
    }
    #de() {
      if (this.#m != null) return this.#m;
      let e = new Set();
      for (let t of this.#ue()) {
        e.add(t);
        for (let n of Qr(t)) e.add(n);
      }
      return ((this.#m = [...e].sort()), this.#m);
    }
    #fe() {
      return ((this.#g ??= this.#ue().map(ni)), this.#g);
    }
    #pe() {
      return ((this.#f ??= this.#de().filter((e) => e.endsWith(`/`))), this.#f);
    }
    #me() {
      return ((this.#p ??= this.#pe().map(ni)), this.#p);
    }
    #he() {
      ((this.#f = null), (this.#p = null), (this.#m = null), (this.#h = null), (this.#g = null));
    }
    #ge() {
      return this.#pe().filter((e) => this.#H.isExpanded(e));
    }
    #_e(e) {
      let t = new Set(this.#j ?? []);
      if (e) for (let e of this.#B) for (let n of Qr(e)) t.add(n);
      this.#ve(t);
    }
    #ve(e) {
      this.#W = !0;
      try {
        for (let t of this.#pe()) {
          let n = e.has(t),
            r = this.#H.isExpanded(t);
          n && !r ? this.#H.expand(t) : !n && r && this.#H.collapse(t);
        }
      } finally {
        this.#W = !1;
      }
    }
    #ye() {
      if (this.#M == null || this.#M.length === 0) {
        ((this.#k = []), (this.#F = null), (this.#I = null), (this.#P = null), (this.#G = this.#U));
        return;
      }
      let e = this.#b;
      if (
        ((this.#k = e.filter((e) => this.#O.has(e))),
        this.#A !== `hide-non-matches` || this.#O.size === 0)
      ) {
        ((this.#F = null), (this.#I = null), (this.#P = null), (this.#G = this.#U));
        return;
      }
      let t = [],
        n = [],
        r = new Map();
      for (let [i, a] of e.entries())
        this.#N?.has(a) === !0 && (r.set(a, n.length), t.push(i), n.push(a));
      ((this.#F = t), (this.#I = n), (this.#P = r), (this.#G = n.length));
    }
    #be() {
      return this.#I ?? this.#b;
    }
    #xe(e) {
      return this.#I == null ? (this.#H.getVisibleIndex(e) ?? -1) : (this.#P?.get(e) ?? -1);
    }
    #Se(e) {
      return this.#F?.[e] ?? e;
    }
    #Ce(e) {
      return this.#P?.get(e) ?? this.#H.getVisibleIndex(e) ?? -1;
    }
    #we(e) {
      let t = this.#k;
      if (t.length === 0) return;
      let n = this.#c,
        r = n == null ? -1 : t.indexOf(n),
        i = t[r < 0 ? (e > 0 ? 0 : t.length - 1) : Math.min(t.length - 1, Math.max(0, r + e))];
      i != null && this.focusPath(i);
    }
    #Te(e, t) {
      let n = e == null ? null : oi(e),
        r = this.#M;
      if (r !== n) {
        if ((r == null && n != null && (this.#j = this.#ge()), (this.#M = n), n == null))
          (this.#_e(!0),
            (this.#j = null),
            this.#O.clear(),
            (this.#N = null),
            this.#je(this.#c, !0));
        else if (n.length === 0)
          (this.#_e(!1), this.#O.clear(), (this.#N = null), this.#je(this.#c, !0));
        else {
          let e = this.#Ee();
          this.#je(e, !0);
        }
        t && (this.#y?.(this.#M), this.#De());
      }
    }
    #Ee() {
      if (this.#M == null || this.#M.length === 0) return (this.#O.clear(), this.#c);
      let e = this.#M,
        t = this.#ue(),
        n = this.#fe(),
        r = [],
        i = new Set(),
        a = null;
      for (let o = 0; o < t.length; o += 1) {
        if (!n[o].includes(e)) continue;
        let s = t[o];
        (r.push(s), i.add(s), (a ??= s));
      }
      let o = this.#pe(),
        s = this.#me();
      for (let t = 0; t < o.length; t += 1) {
        if (!s[t].includes(e)) continue;
        let n = o[t];
        i.has(n) || (r.push(n), i.add(n), (a ??= n));
      }
      this.#O = i;
      let c = this.#A === `hide-non-matches` && r.length > 0 ? new Set() : null;
      this.#N = c;
      let l = this.#A === `expand-matches` ? new Set(this.#j ?? []) : new Set();
      for (let e of r) {
        (c?.add(e), e.endsWith(`/`) && l.add(e));
        for (let t of Qr(e)) (l.add(t), c?.add(t));
      }
      return (this.#ve(l), a ?? this.#c);
    }
    #De() {
      for (let e of this.#t) e();
    }
    #Oe(e) {
      (this.#n.get(e.operation)?.forEach((t) => {
        t(e);
      }),
        this.#n.get(`*`)?.forEach((t) => {
          t(e);
        }));
    }
    #ke(e) {
      for (let t of Qr(e)) this.#H.isExpanded(t) || this.#H.expand(t);
      this.#H.isExpanded(e) || this.#H.expand(e);
    }
    #Ae(e) {
      let t = this.#G;
      if (t === 0) return;
      let n = this.#s === -1 ? 0 : this.#s,
        r = Math.min(t - 1, Math.max(0, n + e));
      (r !== n || this.#s === -1) &&
        (!this.#l && this.#F == null && r >= this.#b.length && this.#Ie(), this.#Fe(r));
    }
    #je(e, t = !0) {
      let n = this.#H.getVisibleCount();
      this.#U = n;
      let r = fi(
        this.#H.getVisibleTreeProjectionData(t ? void 0 : Math.min(n, ci)),
        e,
        t ? (e) => this.#H.getVisibleIndex(e) : void 0,
      );
      (this.#a.clear(),
        this.#o.clear(),
        (this.#l = r.paths.length >= n),
        (this.#u = r.getParentIndex),
        (this.#b = r.paths),
        (this.#x = r.posInSetByIndex),
        (this.#S = r.setSizeByIndex),
        this.#ye(),
        (this.#s = e == null ? (this.#be().length > 0 ? 0 : -1) : this.#Z(e)),
        (this.#c = this.#s < 0 ? null : this.#Me(this.#s)));
    }
    #Me(e) {
      return (
        this.#be()[e] ??
        (this.#F == null ? (this.#H.getVisibleRowContext(e)?.row.path ?? null) : null)
      );
    }
    #Ne(e) {
      return this.#H.getPathInfo(e)?.path ?? null;
    }
    #Pe(e) {
      if (e == null) return;
      let t = this.#Z(e);
      t >= 0 && this.#Fe(t, !1);
    }
    #Fe(e, t = !0) {
      let n = this.#Me(e);
      n != null &&
        (this.#s !== e || this.#c !== n) &&
        ((this.#s = e), (this.#c = n), t && this.#De());
    }
    #Ie() {
      this.#l || this.#je(this.#c, !0);
    }
    #Le(e) {
      let t = Kr(this.#T, e);
      (t == null && this.#T != null && (this.#E = ``), (this.#T = t));
      let n = Kr(this.#c, e, !0),
        r = [...this.#B]
          .map((t) => Kr(t, e))
          .filter((e) => e != null)
          .map((e) => this.#H.getPathInfo(e)?.path ?? null)
          .filter((e) => e != null),
        i = Kr(this.#z, e),
        a = i == null ? null : (this.#H.getPathInfo(i)?.path ?? null),
        o = [...new Set(r)];
      return (Zr(this.#B, o) || ((this.#B = new Set(o)), (this.#V += 1)), (this.#z = a), n);
    }
    #Re() {
      return this.#H.on(`*`, (e) => {
        if (this.#W) return;
        (e.canonicalChanged && (this.#d.clear(), this.#he()),
          this.#i != null && Ur(e) && (this.#i = null));
        let t = Ur(e) ? this.#Le(e) : this.#c,
          n = this.#M != null && this.#M.length > 0 ? this.#Ee() : this.#M === `` ? this.#c : t,
          r = this.#M != null || (e.operation !== `expand` && e.operation !== `collapse`);
        (this.#je(n, r), this.#De());
        let i = Xr(e);
        i != null && this.#Oe(i);
      });
    }
    #ze(e) {
      this.#H.isExpanded(e) ? this.#ie(e) : this.#ke(e);
    }
  },
  mi = (e) => {
    if (e == null || e.length === 0) return `0`;
    let t = `${e.length}`;
    for (let n of e) t += `\0${n.path}\0${n.status}`;
    return t;
  };
function hi(e) {
  let t = e.endsWith(`/`),
    n = ``,
    r = -1;
  for (let t = 0; t <= e.length; t += 1)
    e[t] !== `/` && t !== e.length
      ? r === -1 && (r = t)
      : r !== -1 && (n !== `` && (n += `/`), (n += e.slice(r, t)), (r = -1));
  return n === `` ? null : { isDirectory: t, path: n };
}
function gi(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e;
  if (t.length === 0) return [];
  let n = [],
    r = 0;
  for (;;) {
    let e = t.indexOf(`/`, r);
    if (e === -1) break;
    (n.push(t.slice(0, e + 1)), (r = e + 1));
  }
  return n;
}
function _i(e, t) {
  return t ? `${e}/` : e;
}
function vi(e, t = null) {
  let n = mi(e == null ? void 0 : [...e]);
  if (n === `0`) return null;
  if (t?.signature === n) return t;
  let r = new Map(),
    i = new Set(),
    a = new Set(),
    o = new Map();
  for (let t of e ?? []) {
    let e = bi(t);
    e != null &&
      Ci({
        canonicalPath: e.canonicalPath,
        changeCountByDirectoryPath: o,
        directoriesWithChanges: i,
        ignoredDirectoryPaths: a,
        isDirectory: e.isDirectory,
        status: t.status,
        statusByPath: r,
      });
  }
  return r.size === 0
    ? null
    : {
        changeCountByDirectoryPath: o,
        directoriesWithChanges: i,
        ignoredDirectoryPaths: a,
        signature: n,
        statusByPath: r,
      };
}
function yi(e, t) {
  let n = t?.remove ?? [],
    r = t?.set ?? [];
  if (n.length === 0 && r.length === 0) return e;
  let i = new Map(e?.statusByPath),
    a = new Set(e?.directoriesWithChanges),
    o = new Set(e?.ignoredDirectoryPaths),
    s = new Map(e?.changeCountByDirectoryPath),
    c = !1;
  for (let e of n) {
    let t = xi(e);
    t != null &&
      (c =
        Si({
          canonicalPath: t.canonicalPath,
          changeCountByDirectoryPath: s,
          directoriesWithChanges: a,
          ignoredDirectoryPaths: o,
          statusByPath: i,
        }) || c);
  }
  for (let e of r) {
    let t = bi(e);
    t != null &&
      (c =
        Ci({
          canonicalPath: t.canonicalPath,
          changeCountByDirectoryPath: s,
          directoriesWithChanges: a,
          ignoredDirectoryPaths: o,
          isDirectory: t.isDirectory,
          status: e.status,
          statusByPath: i,
        }) || c);
  }
  return c
    ? i.size === 0
      ? null
      : {
          changeCountByDirectoryPath: s,
          directoriesWithChanges: a,
          ignoredDirectoryPaths: o,
          signature: Ei(i),
          statusByPath: i,
        }
    : e;
}
function bi(e) {
  return xi(e.path);
}
function xi(e) {
  let t = hi(e);
  if (t != null) return { canonicalPath: _i(t.path, t.isDirectory), isDirectory: t.isDirectory };
}
function Si({
  canonicalPath: e,
  changeCountByDirectoryPath: t,
  directoriesWithChanges: n,
  ignoredDirectoryPaths: r,
  statusByPath: i,
}) {
  let a = i.get(e);
  return (
    a != null && (i.delete(e), a === `ignored` && e.endsWith(`/`) && r.delete(e), Ti(t, n, e), !0)
  );
}
function Ci({
  canonicalPath: e,
  changeCountByDirectoryPath: t,
  directoriesWithChanges: n,
  ignoredDirectoryPaths: r,
  isDirectory: i,
  status: a,
  statusByPath: o,
}) {
  let s = o.get(e);
  return (
    s !== a &&
    (s ?? wi(t, n, e), o.set(e, a), a === `ignored` && i ? r.add(e) : i && r.delete(e), !0)
  );
}
function wi(e, t, n) {
  for (let r of gi(n)) (e.set(r, (e.get(r) ?? 0) + 1), t.add(r));
}
function Ti(e, t, n) {
  for (let r of gi(n)) {
    let n = (e.get(r) ?? 0) - 1;
    n > 0 ? e.set(r, n) : (e.delete(r), t.delete(r));
  }
}
function Ei(e) {
  let t = `${e.size}`;
  for (let [n, r] of e) t += `\0${n}\0${r}`;
  return t;
}
var J,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii = {},
  Li = [],
  Ri = Array.isArray,
  zi = Li.slice,
  Bi = Object.assign;
function Vi(e) {
  e && e.parentNode && e.remove();
}
function Hi(e, t, n) {
  var r,
    i,
    a,
    o = {};
  for (a in t)
    a == `key` ? (r = t[a]) : a == `ref` && typeof e != `function` ? (i = t[a]) : (o[a] = t[a]);
  return (
    arguments.length > 2 && (o.children = arguments.length > 3 ? zi.call(arguments, 2) : n),
    Ui(e, o, r, i, null)
  );
}
function Ui(e, t, n, r, i) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++Di,
    __i: -1,
    __u: 0,
  };
  return (i == null && J.vnode != null && J.vnode(a), a);
}
function Wi(e) {
  return e.children;
}
function Gi(e, t) {
  ((this.props = e), (this.context = t), (this.__g = 0));
}
function Ki(e, t) {
  if (t == null) return e.__ ? Ki(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == `function` ? Ki(e) : null;
}
function qi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = n.__e;
        break;
      }
    return qi(e);
  }
}
function Ji(e) {
  ((8 & e.__g || !(e.__g |= 8) || !Oi.push(e) || Ai++) && ki == J.debounceRendering) ||
    ((ki = J.debounceRendering) || queueMicrotask)(Yi);
}
function Yi() {
  for (var e, t, n, r, i, a, o, s, c = 1; Oi.length;)
    (Oi.length > c && Oi.sort(ji),
      (e = Oi.shift()),
      (c = Oi.length),
      8 & e.__g &&
        ((n = void 0),
        (i = (r = (t = e).__v).__e),
        (a = []),
        (o = []),
        (s = t.__P) &&
          (((n = Bi({}, r)).__v = r.__v + 1),
          J.vnode && J.vnode(n),
          ra(
            s,
            n,
            r,
            t.__n,
            s.namespaceURI,
            32 & r.__u ? [i] : null,
            a,
            i ?? Ki(r),
            !!(32 & r.__u),
            o,
            s.ownerDocument,
          ),
          (n.__v = r.__v),
          (n.__.__k[n.__i] = n),
          aa(a, n, o),
          n.__e != i && qi(n))));
  Ai = 0;
}
function Xi(e, t, n, r, i, a, o, s, c, l, u, d) {
  var f,
    p,
    m,
    h,
    g,
    _,
    v,
    y = (r && r.__k) || Li,
    b = t.length;
  for (c = Zi(n, t, y, c, b), f = 0; f < b; f++)
    (m = n.__k[f]) != null &&
      ((p = m.__i == -1 ? Ii : y[m.__i] || Ii),
      (m.__i = f),
      (_ = ra(e, m, p, i, a, o, s, c, l, u, d)),
      (h = m.__e),
      m.ref && p.ref != m.ref && (p.ref && ca(p.ref, null, m), u.push(m.ref, m.__c || h, m)),
      g == null && h != null && (g = h),
      (v = !!(4 & m.__u)) || p.__k === m.__k
        ? (c = Qi(m, c, e, v))
        : typeof m.type == `function` && _ !== void 0
          ? (c = _)
          : h && (c = h.nextSibling),
      (m.__u &= -7));
  return ((n.__e = g), c);
}
function Zi(e, t, n, r, i) {
  var a,
    o,
    s,
    c,
    l,
    u = n.length,
    d = u,
    f = 0;
  for (e.__k = Array(i), a = 0; a < i; a++)
    (o = t[a]) != null && typeof o != `boolean` && typeof o != `function`
      ? ((c = a + f),
        ((o = e.__k[a] =
          typeof o == `string` ||
          typeof o == `number` ||
          typeof o == `bigint` ||
          o.constructor == String
            ? Ui(null, o, null, null, null)
            : Ri(o)
              ? Ui(Wi, { children: o }, null, null, null)
              : o.constructor == null && o.__b > 0
                ? Ui(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                : o).__ = e),
        (o.__b = e.__b + 1),
        (s = null),
        (l = o.__i = $i(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)),
        s == null || s.__v == null
          ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != `function` && (o.__u |= 4))
          : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, (o.__u |= 4))))
      : (e.__k[a] = null);
  if (d)
    for (a = 0; a < u; a++)
      (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = Ki(s)), la(s, s));
  return r;
}
function Qi(e, t, n, r) {
  var i, a;
  if (typeof e.type == `function`) {
    for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && ((i[a].__ = e), (t = Qi(i[a], t, n, r)));
    return t;
  }
  e.__e != t &&
    (r && (t && e.type && !t.parentNode && (t = Ki(e)), n.insertBefore(e.__e, t || null)),
    (t = e.__e));
  do t &&= t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function $i(e, t, n, r) {
  var i,
    a,
    o,
    s = e.key,
    c = e.type,
    l = t[n],
    u = l != null && !(2 & l.__u);
  if ((l === null && e.key == null) || (u && s == l.key && c == l.type)) return n;
  if (r > +!!u) {
    for (i = n - 1, a = n + 1; i >= 0 || a < t.length;)
      if ((l = t[(o = i >= 0 ? i-- : a++)]) != null && !(2 & l.__u) && s == l.key && c == l.type)
        return o;
  }
  return -1;
}
function ea(e, t, n) {
  t[0] == `-` ? e.setProperty(t, n ?? ``) : (e[t] = n ?? ``);
}
function ta(e, t, n, r, i) {
  var a;
  n: if (t == `style`) {
    if (typeof n == `string`) e.style.cssText = n;
    else {
      if ((typeof r == `string` && (e.style.cssText = r = ``), r))
        for (t in r) (n && t in n) || ea(e.style, t, ``);
      if (n) for (t in n) (r && n[t] == r[t]) || ea(e.style, t, n[t]);
    }
  } else if (t[0] == `o` && t[1] == `n`)
    ((a = t != (t = t.replace(Mi, `$1`))),
      (t = t.slice(2))[0].toLowerCase() != t[0] && (t = t.toLowerCase()),
      (e.__l ||= {}),
      (e.__l[t + a] = n),
      n
        ? r
          ? (n.l = r.l)
          : ((n.l = Ni), e.addEventListener(t, a ? Fi : Pi, a))
        : e.removeEventListener(t, a ? Fi : Pi, a));
  else {
    if (i == `http://www.w3.org/2000/svg`) t = t.replace(/xlink(H|:h)/, `h`).replace(/sName$/, `s`);
    else if (
      t != `width` &&
      t != `height` &&
      t != `href` &&
      t != `list` &&
      t != `form` &&
      t != `tabIndex` &&
      t != `download` &&
      t != `rowSpan` &&
      t != `colSpan` &&
      t != `role` &&
      t != `popover` &&
      t in e
    )
      try {
        e[t] = n ?? ``;
        break n;
      } catch {}
    typeof n == `function` ||
      (n == null || (!1 === n && t[4] != `-`)
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == `popover` && n == 1 ? `` : n));
  }
}
function na(e) {
  return function (t) {
    if (this.__l) {
      var n = this.__l[t.type + e];
      if (t.u == null) t.u = Ni++;
      else if (t.u < n.l) return;
      return n(J.event ? J.event(t) : t);
    }
  };
}
function ra(e, t, n, r, i, a, o, s, c, l, u) {
  var d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    ee,
    te,
    ne,
    w,
    T,
    re,
    E,
    ie,
    D = t.type;
  if (t.constructor != null) return null;
  (128 & n.__u &&
    ((c = !!(32 & n.__u)),
    n.__c.__z && ((s = t.__e = n.__e = (a = n.__c.__z)[0]), (n.__c.__z = null))),
    (d = J.__b) && d(t));
  n: if (typeof D == `function`)
    try {
      if (
        ((v = t.props),
        (y = `prototype` in D && D.prototype.render),
        (b = (d = D.contextType) && r[d.__c]),
        (x = d ? (b ? b.props.value : d.__) : r),
        n.__c
          ? 2 & (f = t.__c = n.__c).__g && ((f.__g |= 1), (_ = !0))
          : (y
              ? (t.__c = f = new D(v, x))
              : ((t.__c = f = new Gi(v, x)), (f.constructor = D), (f.render = ua)),
            b && b.sub(f),
            (f.props = v),
            f.state || (f.state = {}),
            (f.context = x),
            (f.__n = r),
            (p = !0),
            (f.__g |= 8),
            (f.__h = []),
            (f._sb = [])),
        y && f.__s == null && (f.__s = f.state),
        y &&
          D.getDerivedStateFromProps != null &&
          (f.__s == f.state && (f.__s = Bi({}, f.__s)),
          Bi(f.__s, D.getDerivedStateFromProps(v, f.__s))),
        (m = f.props),
        (h = f.state),
        (f.__v = t),
        p)
      )
        (y &&
          D.getDerivedStateFromProps == null &&
          f.componentWillMount != null &&
          f.componentWillMount(),
          y && f.componentDidMount != null && f.__h.push(f.componentDidMount));
      else {
        if (
          (y &&
            D.getDerivedStateFromProps == null &&
            v !== m &&
            f.componentWillReceiveProps != null &&
            f.componentWillReceiveProps(v, x),
          (!(4 & f.__g) &&
            f.shouldComponentUpdate != null &&
            !1 === f.shouldComponentUpdate(v, f.__s, x)) ||
            t.__v == n.__v)
        ) {
          for (
            t.__v != n.__v && ((f.props = v), (f.state = f.__s), (f.__g &= -9)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.some(function (e) {
                e && (e.__ = t);
              }),
              S = 0;
            S < f._sb.length;
            S++
          )
            f.__h.push(f._sb[S]);
          ((f._sb = []), f.__h.length && o.push(f));
          break n;
        }
        (f.componentWillUpdate != null && f.componentWillUpdate(v, f.__s, x),
          y &&
            f.componentDidUpdate != null &&
            f.__h.push(function () {
              f.componentDidUpdate(m, h, g);
            }));
      }
      if (((f.context = x), (f.props = v), (f.__P = e), (f.__g &= -5), (C = J.__r), (ee = 0), y)) {
        for (
          f.state = f.__s,
            f.__g &= -9,
            C && C(t),
            d = f.render(f.props, f.state, f.context),
            te = 0;
          te < f._sb.length;
          te++
        )
          f.__h.push(f._sb[te]);
        f._sb = [];
      } else
        do
          ((f.__g &= -9),
            C && C(t),
            (d = f.render(f.props, f.state, f.context)),
            (f.state = f.__s));
        while (8 & f.__g && ++ee < 25);
      ((f.state = f.__s),
        f.getChildContext != null && (r = Bi({}, r, f.getChildContext())),
        y && !p && f.getSnapshotBeforeUpdate != null && (g = f.getSnapshotBeforeUpdate(m, h)),
        (ne = d),
        d != null && d.type === Wi && d.key == null && (ne = oa(d.props.children)),
        (s = Xi(e, Ri(ne) ? ne : [ne], t, n, r, i, a, o, s, c, l, u)),
        (t.__u &= -161),
        f.__h.length && o.push(f),
        _ && (f.__g &= -4));
    } catch (e) {
      if (((t.__v = null), c || a != null)) {
        if (e.then) {
          for (w = 0, T = !1, t.__u |= c ? 160 : 128, t.__c.__z = [], re = 0; re < a.length; re++)
            (E = a[re]) == null ||
              T ||
              (E.nodeType == 8 && E.data == `$s`
                ? (w > 0 && t.__c.__z.push(E), w++, (a[re] = null))
                : E.nodeType == 8 && E.data == `/$s`
                  ? (--w > 0 && t.__c.__z.push(E), (T = w === 0), (s = a[re]), (a[re] = null))
                  : w > 0 && (t.__c.__z.push(E), (a[re] = null)));
          if (!T) {
            for (; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
            ((a[a.indexOf(s)] = null), (t.__c.__z = [s]));
          }
          t.__e = s;
        } else {
          for (ie = a.length; ie--;) Vi(a[ie]);
          ia(t);
        }
      } else ((t.__e = n.__e), (t.__k = n.__k), e.then || ia(t));
      J.__e(e, t, n);
    }
  else s = t.__e = sa(n.__e, t, n, r, i, a, o, c, l, u);
  return ((d = J.diffed) && d(t), 128 & t.__u ? void 0 : s);
}
function ia(e) {
  (e && e.__c && (e.__c.__g |= 4), e && e.__k && e.__k.forEach(ia));
}
function aa(e, t, n) {
  for (var r = 0; r < n.length; r++) ca(n[r], n[++r], n[++r]);
  (J.__c && J.__c(t, e),
    e.some(function (t) {
      try {
        ((e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          }));
      } catch (e) {
        J.__e(e, t.__v);
      }
    }));
}
function oa(e) {
  return typeof e != `object` || !e || (e.__b && e.__b > 0) ? e : Ri(e) ? e.map(oa) : Bi({}, e);
}
function sa(e, t, n, r, i, a, o, s, c, l) {
  var u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v = n.props,
    y = t.props,
    b = t.type;
  if (
    (b == `svg`
      ? (i = `http://www.w3.org/2000/svg`)
      : b == `math`
        ? (i = `http://www.w3.org/1998/Math/MathML`)
        : (i ||= `http://www.w3.org/1999/xhtml`),
    a != null)
  ) {
    for (u = 0; u < a.length; u++)
      if ((m = a[u]) && `setAttribute` in m == !!b && (b ? m.localName == b : m.nodeType == 3)) {
        ((e = m), (a[u] = null));
        break;
      }
  }
  if (e == null) {
    if (b == null) return l.createTextNode(y);
    ((e = l.createElementNS(i, b, y.is && y)), (s &&= (J.__m && J.__m(t, a), !1)), (a = null));
  }
  if (b == null) v === y || (s && e.data == y) || (e.data = y);
  else {
    if (((a &&= zi.call(e.childNodes)), (v = n.props || Ii), !s && a != null))
      for (v = {}, u = 0; u < e.attributes.length; u++) v[(m = e.attributes[u]).name] = m.value;
    for (u in v)
      if (((m = v[u]), u != `children`)) {
        if (u == `dangerouslySetInnerHTML`) f = m;
        else if (!(u in y)) {
          if ((u == `value` && `defaultValue` in y) || (u == `checked` && `defaultChecked` in y))
            continue;
          ta(e, u, null, m, i);
        }
      }
    for (u in ((_ = 1 & n.__u), y))
      ((m = y[u]),
        u == `children`
          ? (p = m)
          : u == `dangerouslySetInnerHTML`
            ? (d = m)
            : u == `value`
              ? (h = m)
              : u == `checked`
                ? (g = m)
                : (s && typeof m != `function`) || (v[u] === m && !_) || ta(e, u, m, v[u], i));
    if (d)
      (s || (f && (d.__html == f.__html || d.__html == e.innerHTML)) || (e.innerHTML = d.__html),
        (t.__k = []));
    else if (
      (f && (e.innerHTML = ``),
      Xi(
        b == `template` ? e.content : e,
        Ri(p) ? p : [p],
        t,
        n,
        r,
        b == `foreignObject` ? `http://www.w3.org/1999/xhtml` : i,
        a,
        o,
        a ? a[0] : n.__k && Ki(n, 0),
        s,
        c,
        l,
      ),
      a != null)
    )
      for (u = a.length; u--;) Vi(a[u]);
    s ||
      ((u = `value`),
      b == `progress` && h == null
        ? e.removeAttribute(`value`)
        : h == null || (h === e[u] && (b !== `progress` || h)) || ta(e, u, h, v[u], i),
      (u = `checked`),
      g != null && g != e[u] && ta(e, u, g, v[u], i));
  }
  return e;
}
function ca(e, t, n) {
  try {
    if (typeof e == `function`) {
      var r = typeof e.__u == `function`;
      (r && e.__u(), (r && t == null) || (e.__u = e(t)));
    } else e.current = t;
  } catch (e) {
    J.__e(e, n);
  }
}
function la(e, t, n) {
  var r, i;
  if (
    (J.unmount && J.unmount(e),
    (r = e.ref) && ((r.current && r.current != e.__e) || ca(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (e) {
        J.__e(e, t);
      }
    r.__P = null;
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++) r[i] && la(r[i], t, n || typeof e.type != `function`);
  (n || Vi(e.__e), e.__e && e.__e.__l && (e.__e.__l = null), (e.__e = e.__c = e.__ = null));
}
function ua(e, t, n) {
  return this.constructor(e, n);
}
function da(e, t) {
  var n, r, i, a;
  (t == document && (t = document.documentElement),
    J.__ && J.__(e, t),
    (r = (n = !!(e && 32 & e.__u)) ? null : t.__k),
    (e = t.__k = Hi(Wi, null, [e])),
    (i = []),
    (a = []),
    ra(
      t,
      e,
      r || Ii,
      Ii,
      t.namespaceURI,
      r ? null : t.firstChild ? zi.call(t.childNodes) : null,
      i,
      r ? r.__e : t.firstChild,
      n,
      a,
      t.ownerDocument,
    ),
    aa(i, e, a));
}
function fa(e, t) {
  ((e.__u |= 32), da(e, t));
}
((J = {
  __e: function (e, t, n, r) {
    for (var i, a, o; (t = t.__);)
      if ((i = t.__c) && !(1 & i.__g)) {
        i.__g |= 4;
        try {
          if (
            ((a = i.constructor) &&
              a.getDerivedStateFromError != null &&
              (i.setState(a.getDerivedStateFromError(e)), (o = 8 & i.__g)),
            i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), (o = 8 & i.__g)),
            o)
          )
            return void (i.__g |= 2);
        } catch (t) {
          e = t;
        }
      }
    throw ((Ai = 0), e);
  },
}),
  (Di = 0),
  (Gi.prototype.setState = function (e, t) {
    var n = this.__s != null && this.__s != this.state ? this.__s : (this.__s = Bi({}, this.state));
    (typeof e == `function` && (e = e(Bi({}, n), this.props)),
      e && Bi(n, e),
      e != null && this.__v && (t && this._sb.push(t), Ji(this)));
  }),
  (Gi.prototype.forceUpdate = function (e) {
    this.__v && ((this.__g |= 4), e && this.__h.push(e), Ji(this));
  }),
  (Gi.prototype.render = Wi),
  (Oi = []),
  (Ai = 0),
  (ji = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Mi = /(PointerCapture)$|Capture$/i),
  (Ni = 0),
  (Pi = na(!1)),
  (Fi = na(!0)));
var pa = 0;
Array.isArray;
function Y(e, t, n, r, i, a) {
  t ||= {};
  var o,
    s,
    c = t;
  if (`ref` in c && typeof e != `function`)
    for (s in ((c = {}), t)) s == `ref` ? (o = t[s]) : (c[s] = t[s]);
  var l = {
    type: e,
    props: c,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --pa,
    __i: -1,
    __u: 0,
    __source: i,
    __self: a,
  };
  return (J.vnode && J.vnode(l), l);
}
var ma = 16,
  ha = 16,
  ga = {};
function _a({
  name: e,
  remappedFrom: t,
  token: n,
  width: r,
  height: i,
  viewBox: a,
  label: o,
  alignCapitals: s = !1,
}) {
  "use no memo";
  let c = `#${e.replace(/^#/, ``)}`,
    { width: l, height: u, viewBox: d } = ga[e] ?? { width: ma, height: ha },
    f = r ?? l,
    p = i ?? u,
    m = a ?? d ?? `0 0 ${l} ${u}`;
  return Y(`svg`, {
    "data-icon-name": t ?? e,
    "data-icon-token": n,
    "data-align-capitals": s,
    ...(o == null ? { "aria-hidden": !0 } : { "aria-label": o, role: `img` }),
    viewBox: m,
    width: f,
    height: p,
    children: Y(`use`, { href: c }),
  });
}
var va = (e) => e !== void 0 && /\s/.test(e),
  ya = (e, t) => {
    let n = (t) => va(e[t - 1]) || va(e[t]);
    if (!n(t)) return t;
    for (let r = 1; r < e.length; r++) {
      let i = t - r;
      if (i > 0 && !n(i)) return i;
      let a = t + r;
      if (a < e.length && !n(a)) return a;
    }
    return t;
  },
  ba = (e) => ya(e, Math.ceil(e.length / 2)),
  xa = (e) => {
    if (e.length < 2) return [e, ``];
    let t = ba(e);
    return [e.slice(0, t), e.slice(t)];
  },
  Sa = (e) => {
    if (e.length < 4) return [e, ``];
    let t = e.lastIndexOf(`.`) + 1,
      n = e.length - t > 10,
      r = t >= 1 && !n ? t : ba(e);
    return [e.slice(0, r), e.slice(r)];
  },
  Ca = (e) => {
    if (e.length < 4) return [e, ``];
    let t = e.lastIndexOf(`/`) + 1,
      n = e.length - t > 25,
      r = t >= 1 && !n ? t : Math.ceil(e.length / 2);
    return [e.slice(0, r), e.slice(r)];
  },
  wa = (e, { splitIndex: t } = {}) => {
    if (typeof t != `number`) {
      let t = Math.ceil(e.length / 2);
      return [e.slice(0, t), e.slice(t)];
    }
    return [e.slice(0, t), e.slice(t)];
  },
  Ta = (e, { splitOffset: t } = {}) => {
    if (typeof t != `number` || t <= 0 || t >= e.length) {
      let t = Math.ceil(e.length / 2);
      return [e.slice(0, t), e.slice(t)];
    }
    let n = e.length - t;
    return [e.slice(0, n), e.slice(n)];
  },
  Ea = (e, { splitOffset: t } = {}) => {
    if (typeof t != `number` || t <= 0 || t >= e.length) {
      let t = Math.ceil(e.length / 2);
      return [e.slice(0, t), e.slice(t)];
    }
    let n = t;
    return [e.slice(0, n), e.slice(n)];
  };
function Da({ children: e, marker: t, variant: n = `default` }) {
  "use no memo";
  return Y(`div`, {
    "aria-hidden": !0,
    "data-truncate-marker-cell": !0,
    children: Y(`div`, {
      "data-truncate-marker": !0,
      children:
        typeof t == `function`
          ? t({ children: e })
          : n === `fade`
            ? Y(`span`, { "data-truncate-fade": !0 })
            : t,
    }),
  });
}
function Oa(e) {
  "use no memo";
  let { mode: t, children: n } = e;
  return Y(`div`, {
    children: [
      Y(`div`, {
        "data-truncate-content": `visible`,
        children: t === `fruncate` ? Y(`span`, { children: n }) : n,
      }),
      Y(`div`, {
        "data-truncate-content": `overflow`,
        "aria-hidden": !0,
        children: t === `fruncate` ? Y(`span`, { children: n }) : n,
      }),
    ],
  });
}
function ka({ children: e, mode: t = `truncate`, marker: n = `…`, variant: r = `default`, ...i }) {
  "use no memo";
  let a = Y(Oa, { mode: t, children: e }, `content`),
    o = Y(Da, { marker: n, mode: t, variant: r }, `marker`),
    s = Y(`div`, { "data-truncate-fill": !0 }, `fill`);
  return Y(`div`, {
    "data-truncate-container": t,
    "data-truncate-variant": r,
    ...i,
    children: Y(`div`, {
      "data-truncate-grid": !0,
      children: t === `truncate` ? [a, o] : [o, a, s],
    }),
  });
}
function Aa({ children: e, ...t }) {
  "use no memo";
  return Y(ka, { mode: `truncate`, ...t, children: e });
}
function ja({ children: e, ...t }) {
  "use no memo";
  return Y(ka, { mode: `fruncate`, ...t, children: e });
}
function Ma({
  children: e,
  contents: t,
  priority: n = `end`,
  split: r = `center`,
  minimumLength: i = 12,
  className: a,
  style: o,
  ...s
}) {
  "use no memo";
  let c = null,
    l = null;
  if (Array.isArray(t)) {
    if (t.length !== 2)
      return (console.error(`MiddleTruncate: contents must be an array of two items`), null);
    ((c = Y(Aa, { ...s, children: t[0] })), (l = Y(ja, { ...s, children: t[1] })));
  } else {
    if (typeof e != `string`)
      return (console.error(`MiddleTruncate: children must be a string`), null);
    if (e.length === 0) return Y(`div`, { className: a, style: o });
    if (e.length < i)
      return Y(n === `end` ? ja : Aa, { ...s, className: a, style: o, children: e });
    let t = null,
      u = null,
      d = null;
    if (typeof r == `string`)
      r === `center` ? (t = xa) : r === `extension` ? (t = Sa) : r === `leaf-path` && (t = Ca);
    else if (typeof r == `number`) ((t = wa), (u = r));
    else if (Array.isArray(r)) {
      let [e, n] = r;
      ((d = n), e === `last` ? (t = Ta) : e === `first` && (t = Ea));
    } else typeof r == `function` && (t = r);
    t ??= xa;
    let [f, p] = t(e, {
        priority: n,
        variant: s.variant,
        splitIndex: typeof u == `number` ? u : void 0,
        splitOffset: typeof d == `number` ? d : void 0,
      }),
      m = f.length >= p.length,
      h = n === `equal` && !m,
      g = n === `equal` && m,
      _ = {},
      v = {};
    (h && (_.marker = ``),
      g && (v.marker = ``),
      (c = Y(Aa, { ...s, ..._, children: f })),
      (l = Y(ja, { ...s, ...v, children: p })));
  }
  return Y(`div`, {
    "data-truncate-group-container": `middle`,
    className: a,
    style: o,
    children: [
      Y(`div`, {
        "data-truncate-segment-priority": n === `start` || n === `equal` ? `1` : `2`,
        children: c,
      }),
      Y(`div`, {
        "data-truncate-segment-priority": n === `end` || n === `equal` ? `1` : `2`,
        children: l,
      }),
    ],
  });
}
var Na = { endIndex: -1, startIndex: -1 };
function Pa(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Fa(e, t) {
  return e < 0 || t < e ? Na : { endIndex: t, startIndex: e };
}
function Ia(e) {
  return e.startIndex < 0 || e.endIndex < e.startIndex;
}
function La(e, t) {
  return Ia(e) ? 0 : (e.endIndex - e.startIndex + 1) * t;
}
function Ra(e, t, n) {
  if (t <= 0) return -1;
  let r = t * n;
  return e <= 0 ? 0 : e >= r ? t : Math.floor(e / n);
}
function za(e, t, n) {
  return t <= 0 || e <= 0 ? -1 : e >= t * n ? t - 1 : Math.ceil(e / n) - 1;
}
function Ba(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      if (e.kind !== `directory` || !e.isExpanded) return;
      let r = e.ancestorPaths.length,
        i = t.get(r);
      i == null ? t.set(r, [n]) : i.push(n);
    }),
    t
  );
}
function Va(e, t) {
  let n = 0,
    r = e.length - 1,
    i = -1;
  for (; n <= r;) {
    let a = Math.floor((n + r) / 2),
      o = e[a];
    if (o == null) break;
    o <= t ? ((i = a), (n = a + 1)) : (r = a - 1);
  }
  return i;
}
function Ha(e) {
  let t = new Map(),
    n = [];
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i == null) continue;
    let a = i.kind === `directory` && i.isExpanded ? [...i.ancestorPaths, i.path] : i.ancestorPaths,
      o = 0;
    for (; o < n.length && o < a.length && n[o] === a[o];) o += 1;
    for (let e = n.length - 1; e >= o; --e) {
      let i = n[e];
      i != null && t.set(i, r - 1);
    }
    n.length = o;
    for (let e = o; e < a.length; e += 1) {
      let t = a[e];
      t != null && n.push(t);
    }
  }
  let r = e.length - 1;
  for (let e of n) t.set(e, r);
  return t;
}
function Ua(e, t, n) {
  if (e.length === 0 || t <= 0) return [];
  let r = Ha(e),
    i = Ba(e),
    a = [];
  for (let r = 0; r < e.length; r += 1) {
    let o = i.get(r);
    if (o == null || o.length === 0) break;
    let s = t + r * n,
      c = Va(o, Math.min(e.length - 1, Math.floor(s / n))),
      l = null;
    for (; c >= 0;) {
      let t = o[c],
        n = t == null ? null : (e[t] ?? null);
      if (n != null && (r === 0 || n.ancestorPaths[r - 1] === a[r - 1]?.path)) {
        l = n;
        break;
      }
      --c;
    }
    if (l == null) break;
    a.push(l);
  }
  return a
    .map((i, a) => {
      let o = a * n,
        s = (r.get(i.path) ?? e.length - 1) + 1;
      if (s >= e.length) return { row: i, top: o };
      let c = s * n - t;
      return { row: i, top: Math.min(o, c - n) };
    })
    .filter((e) => e.top + n > 0);
}
function Wa(e, t) {
  let n = t.totalRowCount ?? e.length,
    r = n * t.itemHeight,
    i = Math.max(0, t.viewportHeight),
    a = Math.max(0, Math.floor(t.overscan)),
    o = Math.max(0, r - i),
    s = Pa(t.scrollTop, 0, o),
    c = t.stickyRows ?? Ua(e, s, t.itemHeight),
    l = c.reduce((e, n) => Math.max(e, n.top + t.itemHeight), 0),
    u = Math.min(r, s + l),
    d = Math.max(0, i - l),
    f = Math.max(0, r - u),
    p = Ra(s, n, t.itemHeight),
    m = Ra(u, n, t.itemHeight),
    h = l <= 0 || p < 0 || p >= n ? -1 : p,
    g = h === -1 ? -1 : Math.min(n - 1, m - 1),
    _ = h === -1 || g < h ? 0 : g - h + 1,
    v = d <= 0 || m >= n ? Na : Fa(m, za(u + d, n, t.itemHeight)),
    y = g + 1,
    b = Ia(v) ? Na : Fa(Math.max(y, v.startIndex - a), Math.min(n - 1, v.endIndex + a)),
    x = La(b, t.itemHeight);
  return {
    occlusion: { firstOccludedIndex: h, lastOccludedIndex: g, occludedCount: _ },
    physical: {
      itemHeight: t.itemHeight,
      maxScrollTop: o,
      overscan: a,
      scrollTop: s,
      totalHeight: r,
      totalRowCount: n,
      viewportHeight: i,
    },
    projected: { contentHeight: f, paneHeight: d, paneTop: u },
    sticky: { height: l, rows: c },
    visible: v,
    window: {
      endIndex: b.endIndex,
      height: x,
      offsetTop: Ia(b) ? 0 : b.startIndex * t.itemHeight,
      startIndex: b.startIndex,
    },
  };
}
var Ga = { added: `A`, deleted: `D`, ignored: null, modified: `M`, renamed: `R`, untracked: `U` },
  Ka = {
    added: `Git status: added`,
    deleted: `Git status: deleted`,
    ignored: `Git status: ignored`,
    modified: `Git status: modified`,
    renamed: `Git status: renamed`,
    untracked: `Git status: untracked`,
  },
  qa = `Contains git status items`;
function Ja(e) {
  return e.current ? !0 : ((e.current = !0), !1);
}
function Ya(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    topInset: i = 0,
    viewportHeight: a,
  } = e;
  if (n < 0) return null;
  let o = Math.max(0, i),
    s = n * r,
    c = s + r;
  if (s < t + o) {
    let e = Math.max(0, s - o);
    return e === t ? null : e;
  }
  if (c > t + a) {
    let e = c - a;
    return e === t ? null : e;
  }
  return null;
}
function Xa(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    offset: i,
    topInset: a = 0,
    totalHeight: o,
    viewportHeight: s,
  } = e;
  if (i === `nearest`)
    return Ya({
      currentScrollTop: t,
      focusedIndex: n,
      itemHeight: r,
      topInset: a,
      viewportHeight: s,
    });
  if (n < 0) return null;
  let c = Math.max(0, a),
    l = n * r,
    u = Math.max(0, s - c),
    d = i === `center` ? c + Math.max(0, (u - r) / 2) : c,
    f = Math.max(0, o - s),
    p = Math.max(0, Math.min(l - d, f));
  return p === t ? null : p;
}
function Za(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    targetViewportOffset: i,
    totalHeight: a,
    viewportHeight: o,
  } = e;
  if (n < 0) return null;
  let s = Math.max(0, i),
    c = n * r,
    l = c + r,
    u = t + s,
    d = t + o;
  if (c >= u && l <= d) return null;
  let f = Math.max(0, a - o),
    p = Math.max(0, Math.min(c - s, f));
  return p === t ? null : p;
}
function Qa(e) {
  if (e == null || !e.isConnected || e === document.body || e === document.documentElement)
    return !1;
  e.focus({ preventScroll: !0 });
  let t = e.getRootNode();
  return t instanceof ShadowRoot ? t.activeElement === e : document.activeElement === e;
}
function $a(e) {
  let t = e.getRootNode();
  if (t instanceof ShadowRoot) {
    let e = t.activeElement;
    return e instanceof HTMLElement ? e : null;
  }
  let n = document.activeElement;
  return n instanceof HTMLElement && e.contains(n) ? n : null;
}
function eo(e, t) {
  if (e == null) return t;
  let n = e.getBoundingClientRect().height;
  return n > 0 ? n : e.clientHeight > 0 ? e.clientHeight : t;
}
function to(e, t) {
  return e != null && e > 0 ? e : t;
}
function no(e) {
  let t = e.borderBoxSize,
    n = Array.isArray(t) ? t[0] : t;
  return n != null && Number.isFinite(n.blockSize) && n.blockSize > 0
    ? n.blockSize
    : e.contentRect.height > 0
      ? e.contentRect.height
      : null;
}
function ro(e, t, n, r, i = 0) {
  let a = Ya({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    topInset: i,
    viewportHeight: r,
  });
  return a != null && ((e.scrollTop = a), !0);
}
function io(e, t, n, r, i, a, o = 0) {
  let s = Xa({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    offset: a,
    topInset: o,
    totalHeight: i,
    viewportHeight: r,
  });
  return s != null && ((e.scrollTop = s), !0);
}
function ao(e, t, n, r, i, a) {
  let o = Za({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    targetViewportOffset: a,
    totalHeight: i,
    viewportHeight: r,
  });
  return o != null && ((e.scrollTop = o), !0);
}
function oo(e, t, n, r) {
  return n.end < n.start ? null : e < n.start ? -t : e > n.end ? r : null;
}
function so(e) {
  let { renamingPath: t, previousRenamingPath: n, hasRenderedInput: r } = e;
  return t == null ? `reset` : r ? (n === t ? `ignore` : `focus-input`) : `reveal-canonical`;
}
function co({ ariaLabel: e, isFlattened: t = !1, ref: n, value: r, onBlur: i, onInput: a }) {
  return Y(`input`, {
    ref: n,
    "data-item-rename-input": !0,
    ...(t ? { "data-item-flattened-rename-input": !0 } : {}),
    "aria-label": e,
    value: r,
    onBlur: i,
    onInput: a,
    onClick: (e) => e.stopPropagation(),
    onMouseDown: (e) => e.stopPropagation(),
    onPointerDown: (e) => e.stopPropagation(),
  });
}
function lo(e) {
  let {
      row: t,
      mode: n,
      targetPath: r,
      ariaLabel: i,
      domId: a,
      isParked: o,
      itemHeight: s,
      features: c,
      state: l,
      extraStyle: u,
    } = e,
    d = n === `sticky`,
    f = t.ancestorPaths.at(-1) ?? ``,
    p = {};
  return (
    l.isFocusRinged && (p[`data-item-focused`] = !0),
    t.isSelected && (p[`data-item-selected`] = !0),
    l.isContextHovered && (p[`data-item-context-hover`] = `true`),
    l.isDragTarget && (p[`data-item-drag-target`] = !0),
    l.isDragging && (p[`data-item-dragging`] = !0),
    l.effectiveGitStatus != null && (p[`data-item-git-status`] = l.effectiveGitStatus),
    l.containsGitChange && (p[`data-item-contains-git-change`] = `true`),
    {
      "aria-expanded": !d && t.kind === `directory` ? t.isExpanded : void 0,
      "aria-haspopup": c.contextMenuEnabled ? `menu` : void 0,
      "aria-label": i,
      "aria-level": d ? void 0 : t.level + 1,
      "aria-posinset": d ? void 0 : t.posInSet + 1,
      "aria-selected": d ? void 0 : t.isSelected ? `true` : `false`,
      "aria-setsize": d ? void 0 : t.setSize,
      "data-file-tree-sticky-path": d ? r : void 0,
      "data-file-tree-sticky-row": d ? `true` : void 0,
      "data-item-context-menu-button-visibility": c.actionLaneEnabled
        ? c.contextMenuButtonVisibility
        : void 0,
      "data-item-context-menu-trigger-mode": c.contextMenuEnabled
        ? c.contextMenuTriggerMode
        : void 0,
      "data-item-has-context-menu-action-lane": c.actionLaneEnabled ? `true` : void 0,
      "data-item-has-git-lane": c.gitLaneActive ? `true` : void 0,
      "data-item-parent-path": f.length > 0 ? f : void 0,
      "data-item-parked": o ? `true` : void 0,
      "data-item-path": r,
      "data-item-type": t.kind === `directory` ? `folder` : `file`,
      "data-type": `item`,
      id: d ? void 0 : a,
      role: d ? void 0 : `treeitem`,
      style: { minHeight: `${s}px`, ...u },
      tabIndex: !d && t.isFocused ? 0 : -1,
      ...p,
    }
  );
}
function uo(e) {
  let { event: t, mode: n, isSearchOpen: r, isDirectory: i } = e,
    a = t.ctrlKey || t.metaKey,
    o = t.shiftKey || a,
    s = t.shiftKey ? { additive: a, kind: `range` } : a ? { kind: `toggle` } : { kind: `single` };
  return {
    closeSearch: r,
    revealCanonical: n === `sticky`,
    selection: s,
    toggleDirectory: !o && i,
  };
}
var fo,
  X,
  po,
  mo,
  ho = Object.is,
  go = 0,
  _o = [],
  Z = J,
  vo = Z.__b,
  yo = Z.__r,
  bo = Z.diffed,
  xo = Z.__c,
  So = Z.unmount,
  Co = Z.__;
function wo(e, t) {
  (Z.__h && Z.__h(X, e, go || t), (go = 0));
  var n = X.__H || (X.__H = { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function To(e) {
  return ((go = 1), Eo(Io, e));
}
function Eo(e, t, n) {
  var r = wo(fo++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Io(void 0, t),
        function (e) {
          var t = r.__N ? r.__N[0] : r.__[0],
            n = r.t(t, e);
          ho(t, n) || ((r.__N = [n, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = X),
      !X.__f))
  ) {
    var i = function (e, t, n) {
      if (!r.__c.__H) return !0;
      var i = r.__c.__H.__.filter(function (e) {
        return !!e.__c;
      });
      if (
        i.every(function (e) {
          return !e.__N;
        })
      )
        return !a || a.call(this, e, t, n);
      var o = r.__c.props !== e;
      return (
        i.forEach(function (e) {
          if (e.__N) {
            var t = e.__[0];
            ((e.__ = e.__N), (e.__N = void 0), ho(t, e.__[0]) || (o = !0));
          }
        }),
        (a && a.call(this, e, t, n)) || o
      );
    };
    X.__f = !0;
    var a = X.shouldComponentUpdate,
      o = X.componentWillUpdate;
    ((X.componentWillUpdate = function (e, t, n) {
      if (4 & this.__g) {
        var r = a;
        ((a = void 0), i(e, t, n), (a = r));
      }
      o && o.call(this, e, t, n);
    }),
      (X.shouldComponentUpdate = i));
  }
  return r.__N || r.__;
}
function Do(e, t) {
  var n = wo(fo++, 3);
  !Z.__s && Fo(n.__H, t) && ((n.__ = e), (n.u = t), X.__H.__h.push(n));
}
function Oo(e, t) {
  var n = wo(fo++, 4);
  !Z.__s && Fo(n.__H, t) && ((n.__ = e), (n.u = t), X.__h.push(n));
}
function Q(e) {
  return (
    (go = 5),
    ko(function () {
      return { current: e };
    }, [])
  );
}
function ko(e, t) {
  var n = wo(fo++, 7);
  return (Fo(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function $(e, t) {
  return (
    (go = 8),
    ko(function () {
      return e;
    }, t)
  );
}
function Ao() {
  for (var e; (e = _o.shift());)
    if (e.__P && e.__H)
      try {
        (e.__H.__h.forEach(No), e.__H.__h.forEach(Po), (e.__H.__h = []));
      } catch (t) {
        ((e.__H.__h = []), Z.__e(t, e.__v));
      }
}
((Z.__b = function (e) {
  ((X = null), vo && vo(e));
}),
  (Z.__ = function (e, t) {
    (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Co && Co(e, t));
  }),
  (Z.__r = function (e) {
    (yo && yo(e), (fo = 0));
    var t = (X = e.__c).__H;
    (t &&
      (po === X
        ? ((t.__h = []),
          (X.__h = []),
          t.__.forEach(function (e) {
            (e.__N && (e.__ = e.__N), (e.u = e.__N = void 0));
          }))
        : (t.__h.forEach(No), t.__h.forEach(Po), (t.__h = []), (fo = 0))),
      (po = X));
  }),
  (Z.diffed = function (e) {
    bo && bo(e);
    var t = e.__c;
    (t &&
      t.__H &&
      (t.__H.__h.length &&
        ((_o.push(t) !== 1 && mo === Z.requestAnimationFrame) ||
          ((mo = Z.requestAnimationFrame) || Mo)(Ao)),
      t.__H.__.forEach(function (e) {
        (e.u && (e.__H = e.u), (e.u = void 0));
      })),
      (po = X = null));
  }),
  (Z.__c = function (e, t) {
    (t.some(function (e) {
      try {
        (e.__h.forEach(No),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || Po(e);
          })));
      } catch (n) {
        (t.some(function (e) {
          e.__h &&= [];
        }),
          (t = []),
          Z.__e(n, e.__v));
      }
    }),
      xo && xo(e, t));
  }),
  (Z.unmount = function (e) {
    So && So(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          No(e);
        } catch (e) {
          t = e;
        }
      }),
      (n.__H = void 0),
      t && Z.__e(t, n.__v));
  }));
var jo = typeof requestAnimationFrame == `function`;
function Mo(e) {
  var t,
    n = function () {
      (clearTimeout(r), jo && cancelAnimationFrame(t), setTimeout(e));
    },
    r = setTimeout(n, 35);
  jo && (t = requestAnimationFrame(n));
}
function No(e) {
  var t = X,
    n = e.__c;
  (typeof n == `function` && ((e.__c = void 0), n()), (X = t));
}
function Po(e) {
  var t = X;
  ((e.__c = e.__()), (X = t));
}
function Fo(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return !ho(t, e[n]);
    })
  );
}
function Io(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function Lo(e, t = null, n = null) {
  "use no memo";
  let r = e.flattenedSegments;
  return r == null || r.length === 0
    ? (t ?? e.name)
    : Y(`span`, {
        "data-item-flattened-subitems": !0,
        children: r.map((e, i) => {
          let a = i === r.length - 1;
          return Y(
            Wi,
            {
              children: [
                Y(`span`, {
                  "data-item-flattened-subitem": e.path,
                  "data-item-flattened-subitem-drag-target": n === e.path ? `true` : void 0,
                  children: a && t != null ? t : Y(Aa, { children: e.name }),
                }),
                i < r.length - 1 ? ` / ` : ``,
              ],
            },
            e.path,
          );
        }),
      });
}
function Ro(e) {
  return e.isFlattened
    ? (e.flattenedSegments?.findLast((e) => e.isTerminal)?.path ?? e.path)
    : e.path;
}
function zo(e) {
  let t = e.flattenedSegments;
  return t == null || t.length === 0 ? e.name : t.map((e) => e.name).join(` / `);
}
function Bo(e, t, n, r) {
  return e
    .map((e, i) => {
      let a = i * n,
        o = e.subtreeEndIndex + 1;
      if (o >= r) return { row: e.row, top: a };
      let s = o * n - t;
      return { row: e.row, top: Math.min(a, s - n) };
    })
    .filter((e) => e.top + n > 0);
}
function Vo({
  controller: e,
  itemHeight: t,
  overscan: n,
  scrollTop: r,
  stickyFolders: i,
  viewportHeight: a,
}) {
  let o = e.getVisibleCount(),
    s = i && o > 0 ? e.getStickyRowCandidates(r, t) : [],
    c = s == null && i && o > 0 ? e.getVisibleRows(0, o - 1) : [],
    l = Wa(c, {
      itemHeight: t,
      overscan: n,
      scrollTop: r,
      stickyRows: s == null ? void 0 : Bo(s, r, t, o),
      totalRowCount: o,
      viewportHeight: a,
    }),
    u = i && r <= 0 && o > 0 ? e.getStickyRowCandidates(1, t) : [],
    d =
      u != null && r <= 0
        ? Bo(u, 1, t, o)
        : i && r <= 0 && c.length > 0
          ? Ua(c, 1, t)
          : l.sticky.rows;
  return {
    overlayHeight: d.reduce((e, n) => Math.max(e, n.top + t), 0),
    overlayRows: d,
    snapshot: l,
    visibleRows: c,
  };
}
var Ho = 400,
  Uo = 40,
  Wo = 18;
function Go(e, t, n) {
  let r = e,
    i = document.elementFromPoint?.bind(document) ?? null,
    a = r.elementFromPoint?.(t, n) ?? i?.(t, n) ?? null;
  return e instanceof ShadowRoot && (a == null || !e.contains(a))
    ? Ko(e, t, n)
    : a instanceof HTMLElement
      ? a
      : null;
}
function Ko(e, t, n) {
  let r = Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));
  for (let e = r.length - 1; e >= 0; e--) {
    let i = r[e],
      a = i.getBoundingClientRect();
    if (t >= a.left && t <= a.right && n >= a.top && n <= a.bottom) return i;
  }
  return null;
}
function qo(e) {
  let t = e?.closest?.(`[data-type="item"]`);
  if (!(t instanceof HTMLElement)) return null;
  let n = t.dataset.itemPath ?? null;
  if (n == null) return null;
  let r = e?.closest?.(`[data-item-flattened-subitem]`),
    i = r instanceof HTMLElement ? (r.getAttribute(`data-item-flattened-subitem`) ?? null) : null;
  if (i != null && i.endsWith(`/`))
    return { directoryPath: i, flattenedSegmentPath: i, hoveredPath: n, kind: `directory` };
  if (t.dataset.itemType === `folder`)
    return { directoryPath: n, flattenedSegmentPath: null, hoveredPath: n, kind: `directory` };
  let a = t.dataset.itemParentPath ?? null;
  return a == null || a.length === 0
    ? { directoryPath: null, flattenedSegmentPath: null, hoveredPath: n, kind: `root` }
    : { directoryPath: a, flattenedSegmentPath: null, hoveredPath: n, kind: `directory` };
}
function Jo(e) {
  let t = e.cloneNode(!0);
  return (
    t.removeAttribute(`id`),
    (t.dataset.fileTreeDragPreview = `true`),
    t.setAttribute(`aria-hidden`, `true`),
    (t.tabIndex = -1),
    Object.assign(t.style, {
      boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15)`,
      left: `0px`,
      margin: `0`,
      pointerEvents: `none`,
      position: `fixed`,
      top: `0px`,
      willChange: `transform`,
      zIndex: `10000`,
    }),
    t
  );
}
function Yo() {
  return navigator.vendor !== `Apple Computer, Inc.`;
}
function Xo(e, t) {
  let n = e - t.top;
  if (n < Uo) return -Math.ceil(((Uo - Math.max(0, n)) / Uo) * Wo);
  let r = t.bottom - e;
  return r < Uo ? Math.ceil(((Uo - Math.max(0, r)) / Uo) * Wo) : 0;
}
function Zo(e, t) {
  if (e != null) {
    let t = Ga[e];
    return t == null ? null : { text: t, title: Ka[e] };
  }
  return t ? { icon: { name: `file-tree-icon-dot`, width: 6, height: 6 }, title: qa } : null;
}
function Qo(e, t, n) {
  if (t == null || t.size === 0) return null;
  let r = [];
  for (let i = e.length - 1; i >= 0; --i) {
    let a = e[i],
      o = n.get(a);
    if (o != null) {
      for (let e of r) n.set(e, o);
      return o ? `ignored` : null;
    }
    if (t.has(a)) {
      n.set(a, !0);
      for (let e of r) n.set(e, !0);
      return `ignored`;
    }
    r.push(a);
  }
  for (let e of r) n.set(e, !1);
  return null;
}
function $o(e) {
  return e != null && `toggle` in e;
}
function es(e) {
  return e.code === `Space` || e.key === ` ` || e.key === `Spacebar`;
}
function ts(e) {
  return (
    e.key.length === 1 && /^[\p{L}\p{N}]$/u.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey
  );
}
function ns(e) {
  return e == null
    ? ``
    : `[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`, `\\\\`).replaceAll(`"`, `\\"`)}"] { opacity: 1; }`;
}
function rs(e) {
  return (e.shiftKey && e.key === `F10`) || e.key === `ContextMenu`;
}
function is(e, t) {
  return (t && rs(e)) || ((e.ctrlKey || e.metaKey) && es(e))
    ? !0
    : e.key === `ArrowDown` ||
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp`;
}
var as = new Set([
  `ArrowDown`,
  `ArrowLeft`,
  `ArrowRight`,
  `ArrowUp`,
  `End`,
  `Home`,
  `PageDown`,
  `PageUp`,
]);
function os(e) {
  for (let t of e.composedPath())
    if (
      t instanceof HTMLElement &&
      (t.dataset.fileTreeContextMenuRoot === `true` ||
        t.dataset.type === `context-menu-anchor` ||
        t.dataset.type === `context-menu-trigger` ||
        t.getAttribute(`slot`) === `context-menu`)
    )
      return !0;
  return !1;
}
function ss(e) {
  return {
    bottom: e.bottom,
    height: e.height,
    left: e.left,
    right: e.right,
    top: e.top,
    width: e.width,
    x: e.x,
    y: e.y,
  };
}
function cs(e, t) {
  return { bottom: t, height: 0, left: e, right: e, top: t, width: 0, x: e, y: t };
}
function ls(e, t) {
  if (e == null) return t.offsetTop;
  let n = t.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return n.top - r.top;
}
function us(e, t, n) {
  n == null ? e.delete(t) : e.set(t, n);
}
function ds(e, t, n) {
  if (e == null) return null;
  let r = t.get(e) ?? null;
  if (r != null) return r;
  let i = n.get(e) ?? null;
  return i?.dataset.itemParked === `true` ? null : i;
}
function fs(e) {
  if (e == null) return [];
  let t = [];
  for (let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)) {
    if (!(n instanceof HTMLElement)) continue;
    let e = n.dataset.fileTreeStickyPath;
    e != null && t.push(e);
  }
  return t;
}
function ps(e, t) {
  if (e == null || t == null) return null;
  for (let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))
    if (n instanceof HTMLElement && n.dataset.itemPath === t) return n;
  return null;
}
function ms(e, t, n, r, i, a, o) {
  let s = Math.max(0, a - i),
    c = t?.getBoundingClientRect() ?? null,
    l = c == null || n == null ? null : n.getBoundingClientRect().top - c.top,
    u = ps(e, r),
    d = c == null || u == null ? null : u.getBoundingClientRect().top - c.top;
  return Math.max(0, Math.min(d ?? Math.max(l ?? 0, s), Math.max(0, o - i)));
}
function hs(e, t) {
  return { kind: e.kind, name: zo(e), path: t };
}
function gs(e) {
  return e == null ? void 0 : `${e}__tree`;
}
function _s(e, t, n) {
  if (e != null) return `${e}__focused-item-${encodeURIComponent(t)}${n ? `__parked` : ``}`;
}
function vs(e) {
  return (
    e === `file-tree-icon-chevron` ||
    e === `file-tree-icon-dot` ||
    e === `file-tree-icon-file` ||
    e === `file-tree-icon-lock`
  );
}
function ys(e, t) {
  if (e == null) return null;
  if (`text` in e)
    return e.parts == null
      ? Y(`span`, { title: e.title, children: e.text })
      : Y(`span`, {
          title: e.title,
          children: e.parts.map((e, t) =>
            Y(`span`, { style: { color: e.color }, children: e.text }, t),
          ),
        });
  let n =
    typeof e.icon == `string`
      ? vs(e.icon)
        ? t(e.icon)
        : { name: e.icon }
      : vs(e.icon.name)
        ? (() => {
            let n = t(e.icon.name),
              { name: r, ...i } = e.icon;
            return { ...n, ...i };
          })()
        : e.icon;
  return Y(`span`, { title: e.title, children: Y(_a, { ...n }) });
}
function bs(e) {
  e != null &&
    Qa(
      e.querySelector(
        `button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`,
      ) ?? e,
    );
}
function xs(
  e,
  t,
  {
    actionLaneEnabled: n = !1,
    customDecoration: r = null,
    decorationLaneEnabled: i = !1,
    dragTargetFlattenedSegmentPath: a = null,
    gitDecoration: o = null,
    gitLaneActive: s = !1,
    renameInput: c = null,
    showDecorativeActionAffordance: l = !1,
  } = {},
) {
  let u = Ro(e);
  return Y(Wi, {
    children: [
      e.depth > 0
        ? Y(`div`, {
            "data-item-section": `spacing`,
            children: Array.from({ length: e.depth }).map((t, n) =>
              Y(
                `div`,
                { "data-item-section": `spacing-item`, "data-ancestor-path": e.ancestorPaths[n] },
                n,
              ),
            ),
          })
        : null,
      Y(`div`, {
        "data-item-section": `icon`,
        children:
          e.kind === `directory`
            ? Y(_a, { ...t(`file-tree-icon-chevron`) })
            : Y(_a, { ...t(`file-tree-icon-file`, u) }),
      }),
      Y(`div`, {
        "data-item-section": `content`,
        children: e.isFlattened
          ? Lo(e, c, a)
          : (c ?? Y(Ma, { minimumLength: 5, split: `extension`, children: e.name })),
      }),
      i
        ? Y(`div`, { "data-item-section": `decoration`, children: r == null ? null : ys(r, t) })
        : null,
      s ? Y(`div`, { "data-item-section": `git`, children: ys(o, t) }) : null,
      n
        ? Y(`div`, {
            "data-item-section": `action`,
            children: l
              ? Y(`span`, {
                  "aria-hidden": `true`,
                  "data-item-action-affordance": `decorative`,
                  children: Y(_a, { ...t(`file-tree-icon-ellipsis`) }),
                })
              : null,
          })
        : null,
    ],
  });
}
function Ss(e, t, n, r = {}) {
  let {
      controller: i,
      renameView: a,
      visualFocusPath: o,
      contextHoverPath: s,
      draggedPathSet: c,
      dragTarget: l,
      dragAndDropEnabled: u,
      shouldSuppressContextMenu: d,
      handleRowDragStart: f,
      handleRowDragEnd: p,
      handleRowTouchStart: m,
      instanceId: h,
      itemHeight: g,
      gitStatusByPath: _,
      ignoredGitDirectories: v,
      ignoredInheritanceCache: y,
      directoriesWithGitChanges: b,
      gitLaneActive: x,
      contextMenuEnabled: S,
      contextMenuTriggerMode: C,
      contextMenuButtonTriggerEnabled: ee,
      contextMenuButtonVisibility: te,
      contextMenuRightClickEnabled: ne,
      registerRenameInput: w,
      registerButton: T,
      resolveIcon: re,
      renderDecorationForRow: E,
      openContextMenuForRow: ie,
      onRowClick: D,
      onKeyDown: ae,
    } = e,
    O = Ro(t),
    { isParked: oe = !1, mode: se = `flow`, style: ce } = r,
    k = se === `sticky`,
    le = _?.get(O) ?? null ?? Qo(t.ancestorPaths, v, y),
    ue = t.kind === `directory` && (b?.has(O) ?? !1),
    de = E(t, O),
    fe = Zo(le, ue),
    A = S && ee,
    pe = de != null || x || A,
    me = A && te === `always`,
    he = a.getPath() === O,
    ge = he ? a.getValue() : ``,
    _e =
      k || !he
        ? null
        : Y(co, {
            ref: w,
            ariaLabel: `Rename ${zo(t)}`,
            isFlattened: t.isFlattened,
            value: ge,
            onBlur: () => {
              a.commit();
            },
            onInput: (e) => {
              a.setValue(e.currentTarget.value);
            },
          }),
    ve = xs(t, re, {
      actionLaneEnabled: A,
      customDecoration: de,
      decorationLaneEnabled: pe,
      dragTargetFlattenedSegmentPath: l?.flattenedSegmentPath ?? null,
      gitDecoration: fe,
      gitLaneActive: x,
      renameInput: _e,
      showDecorativeActionAffordance: me,
    }),
    ye = {
      ...lo({
        ariaLabel: zo(t),
        domId: t.isFocused ? _s(h, O, oe) : void 0,
        extraStyle: ce,
        features: {
          actionLaneEnabled: A,
          contextMenuButtonVisibility: A ? te : null,
          contextMenuEnabled: S,
          contextMenuTriggerMode: S ? C : null,
          gitLaneActive: x,
        },
        isParked: oe,
        itemHeight: g,
        mode: se,
        row: t,
        state: {
          containsGitChange: ue,
          effectiveGitStatus: le,
          isContextHovered: s === O,
          isDragTarget: l?.kind === `directory` && l.directoryPath === O,
          isDragging: c?.has(O) === !0,
          isFocusRinged: t.isFocused && o === O,
        },
        targetPath: O,
      }),
      key: n,
      onContextMenu:
        S || u
          ? (e) => {
              d()
                ? e.preventDefault()
                : S &&
                  (e.preventDefault(),
                  ne &&
                    (i.focusMountedPathFromInput(O),
                    ie(t, O, { anchorRect: cs(e.clientX, e.clientY), source: `right-click` })));
            }
          : void 0,
      onFocus: k
        ? void 0
        : () => {
            i.focusMountedPathFromInput(O);
          },
      onKeyDown: k ? void 0 : ae,
      ref: (e) => {
        T(O, e);
      },
    };
  return !k && he
    ? Y(`div`, { ...ye, children: ve })
    : Y(`button`, {
        ...ye,
        type: `button`,
        draggable: u && !oe,
        onDragEnd: u && !oe ? p : void 0,
        onDragStart:
          u && !oe
            ? (e) => {
                f(e, t, O);
              }
            : void 0,
        onMouseDown: (e) => {
          (k || i.isSearchOpen()) && e.preventDefault();
        },
        onTouchStart:
          u && !oe
            ? (e) => {
                m(e, t, O);
              }
            : void 0,
        onClick: (e) => {
          D(e, t, O, se);
        },
        children: ve,
      });
}
function Cs(e, t, n) {
  return t.end < t.start
    ? []
    : e.controller
        .getVisibleRows(t.start, t.end)
        .filter((e) => !n.has(Ro(e)))
        .map((n, r) => Ss(e, n, t.start + r));
}
function ws({
  composition: e,
  controller: t,
  gitStatusByPath: n,
  ignoredGitDirectories: r,
  directoriesWithGitChanges: i,
  icons: o,
  instanceId: s,
  itemHeight: c = ne,
  overscan: l = 10,
  renamingEnabled: u = !1,
  renderRowDecoration: d,
  searchBlurBehavior: f = `close`,
  searchEnabled: g = !1,
  searchFakeFocus: _ = !1,
  slotHost: v,
  stickyFolders: y = !1,
  initialViewportHeight: b = 420,
}) {
  "use no memo";
  let x = Q(null),
    S = Q(null),
    C = Q(!1),
    ee = Q(null),
    te = Q(null),
    w = Q(null),
    T = Q(null),
    re = Q(null),
    E = Q(new Map()),
    ie = Q(new Map()),
    D = Q(() => {}),
    ae = Q(null),
    O = Q(0),
    oe = Q(!1),
    se = Q(null);
  se.current !== t && ((oe.current = !1), (se.current = t));
  let ce = Q(!1),
    k = Q(null),
    le = Q(null),
    ue = Q(!1),
    de = Q(null),
    fe = Q(null),
    A = Q(null),
    pe = Q(null),
    me = Q(null),
    he = Q(null),
    ge = Q(null),
    _e = Q(null),
    ve = Q(!1),
    ye = Q(null),
    j = Q(null),
    be = Q(null),
    xe = Q(null),
    Se = ko(() => new Map(), []),
    [, Ce] = To(0),
    we = Q(!1),
    [Te, M] = To(null),
    [Ee, N] = To(null),
    [De, P] = To(null),
    [Oe, ke] = To(null),
    [Ae, je] = To(0),
    [F, I] = To(null),
    Me = Q(F);
  Me.current = F;
  let Ne = Q(null),
    Pe = Q(null),
    Fe = Q(null),
    Ie = Q(null),
    Le = Q(null),
    Re = Q(!1),
    ze = () => {
      ((Pe.current = null), (Fe.current = null), (Ie.current = null));
    },
    Be = (e, t) => {
      ((Pe.current = e),
        (Fe.current = null),
        (Ie.current = t == null ? null : { path: e, scrollTop: t }));
    },
    Ve = (e, t) => {
      ((Pe.current = null), (Fe.current = { path: e, viewportOffset: t }), (Ie.current = null));
    },
    He = Q(f === `retain` && t.isSearchOpen()),
    [Ue, We] = To(_);
  Do(() => {
    _ || We(!1);
  }, [_]);
  let Ge = Q(!1),
    Ke = $(() => {
      ((Ge.current = !0), We((e) => e && !1));
    }, []),
    [qe, Je] = To(() =>
      Vo({
        controller: t,
        itemHeight: c,
        overscan: l,
        scrollTop: 0,
        stickyFolders: y,
        viewportHeight: b,
      }),
    ),
    [Ye, Xe] = To(!1);
  Do(() => {
    Xe(!0);
  }, []);
  let L =
      e?.contextMenu?.enabled === !0 ||
      e?.contextMenu?.render != null ||
      e?.contextMenu?.onOpen != null ||
      e?.contextMenu?.onClose != null,
    Ze = e?.contextMenu?.triggerMode ?? (L ? `right-click` : `both`),
    Qe = Ze === `both` || Ze === `button`,
    $e = e?.contextMenu?.buttonVisibility ?? `when-needed`,
    et = Ze === `both` || Ze === `right-click`;
  Oo(() => {
    let e = w.current;
    if (e == null) return;
    let t = (e) => {
        if (!(e instanceof CustomEvent)) return;
        let t = e.detail?.path ?? null;
        ((Le.current = t), N(t), ke(t == null ? null : `pointer`));
      },
      n = (e) => {
        e instanceof CustomEvent && (Re.current = e.detail?.disabled === !0);
      };
    return (
      e.addEventListener(`file-tree-debug-set-context-menu-trigger`, t),
      e.addEventListener(`file-tree-debug-set-scroll-suppression`, n),
      () => {
        (e.removeEventListener(`file-tree-debug-set-context-menu-trigger`, t),
          e.removeEventListener(`file-tree-debug-set-scroll-suppression`, n));
      }
    );
  }, []);
  let tt = $((e, t) => {
      us(E.current, e, t);
    }, []),
    nt = $((e, t) => {
      us(ie.current, e, t);
    }, []),
    rt = $((e) => {
      te.current = e;
    }, []),
    it = $((e) => ds(e, ie.current, E.current), []),
    at = n != null || r != null || i != null,
    { resolveIcon: ot } = ko(() => a(o), [o]),
    st = t[si](),
    ct = st.getPath(),
    lt = ct != null,
    ut = t.isSearchOpen(),
    dt = t.getSearchValue(),
    R = t.getFocusedPath(),
    z = t.getFocusedIndex(),
    ft = t.getScrollRequest(),
    pt = t.isDragAndDropEnabled(),
    mt = t.getDragSession(),
    ht = ko(() => (mt == null ? null : new Set(mt.draggedPaths)), [mt]),
    B = mt?.target ?? null,
    gt = mt?.primaryPath ?? null,
    _t = gs(s),
    { overlayHeight: vt, overlayRows: yt, snapshot: V, visibleRows: bt } = qe,
    H = V.physical.viewportHeight,
    xt = ko(
      () => ({ end: V.window.endIndex, start: V.window.startIndex }),
      [V.window.endIndex, V.window.startIndex],
    ),
    St = yt,
    Ct = V.sticky.rows,
    wt = V.physical.totalHeight,
    Tt = V.sticky.height,
    Et = ko(() => new Set(Ct.map((e) => Ro(e.row))), [Ct]),
    Dt = z >= 0 && z >= xt.start && z <= xt.end,
    Ot = $((e, t) => d?.({ item: hs(e, t), row: e }) ?? null, [d]),
    kt = $((e) => (Qa(e == null ? null : (E.current.get(e) ?? null)) ? !0 : Qa(w.current)), []),
    At = $(
      (e) => {
        kt(t.focusNearestPath(e));
      },
      [t, kt],
    ),
    jt = Q(At);
  jt.current = At;
  let Mt = Q(!0),
    Nt = Q(() => {}),
    Pt = $(
      (t = !0) => {
        let n = Me.current;
        n != null &&
          ((Mt.current = Mt.current && t),
          I(null),
          e?.contextMenu?.onClose?.(),
          Mt.current && At(n.path));
      },
      [e?.contextMenu, At],
    );
  Nt.current = Pt;
  let U = $((e) => {
      let t = e == null ? null : ls(w.current, e);
      P((e) => (e === t ? e : t));
    }, []),
    Ft = $(
      (e, n, r) => {
        let i = t.getItem(n);
        if (i == null) return;
        let a = it(n);
        if (a?.dataset.fileTreeStickyRow === `true`) {
          let e = T.current;
          (Be(n, e?.scrollTop ?? null), (ce.current = !0), M((e) => (e === n ? e : n)));
        }
        (i.focus(),
          U(a),
          (Mt.current = !0),
          I({
            anchorRect: r?.anchorRect ?? null,
            item: hs(e, n),
            path: n,
            source: r?.source ?? `keyboard`,
          }));
      },
      [t, it, U],
    ),
    It = $(
      (e) => {
        if (u) {
          if (t.isSearchOpen()) {
            let e = T.current,
              t = eo(e, H);
            ((de.current =
              z < 0 || e == null
                ? null
                : Math.max(0, Math.min(z * c - e.scrollTop, Math.max(0, t - c)))),
              (ue.current = !0));
          }
          t.startRenaming(e) !== !1 && (ke(`focus`), Ce((e) => e + 1));
        }
      },
      [t, z, c, u, H],
    ),
    Lt = $(
      (e, { restoreTreeFocus: n = !0, targetOffset: r = `live-overlay` } = {}) => {
        let i = T.current;
        if (i == null) return !1;
        t.focusPath(e);
        let a = t.getFocusedIndex();
        if (a < 0) return !1;
        let o = t.getVisibleRows(a, a)[0] ?? null;
        if (o == null) return !1;
        let s = eo(i, H),
          u = t.getVisibleCount() * c,
          d =
            r === `sticky-parents`
              ? o.ancestorPaths.length * c
              : Vo({
                  controller: t,
                  itemHeight: c,
                  overscan: l,
                  scrollTop: i.scrollTop,
                  stickyFolders: y,
                  viewportHeight: s,
                }).snapshot.sticky.height;
        return (
          (ce.current = !0), ao(i, a, c, s, u, d), D.current(), (Ne.current = n ? e : null), !0
        );
      },
      [t, c, l, H, y],
    ),
    Rt = () => C.current === !0 || xe.current != null || ve.current === !0,
    zt = (e) =>
      typeof window.requestAnimationFrame == `function`
        ? window.requestAnimationFrame(() => {
            e();
          })
        : window.setTimeout(e, 16),
    Bt = (e) => {
      e != null &&
        (typeof window.cancelAnimationFrame == `function`
          ? window.cancelAnimationFrame(e)
          : window.clearTimeout(e));
    },
    Vt = () => {
      (pe.current != null && (clearTimeout(pe.current), (pe.current = null)), (A.current = null));
    },
    Ht = () => {
      (he.current?.remove(), (he.current = null));
    },
    Ut = () => {
      (Bt(fe.current), (fe.current = null), (me.current = null));
    },
    Wt = (e) => {
      let t = w.current?.getRootNode();
      t instanceof ShadowRoot ? t.append(e) : document.body.append(e);
    },
    Gt = () => {
      (_e.current?.(),
        (_e.current = null),
        xe.current != null && (clearTimeout(xe.current), (xe.current = null)),
        (ve.current = !1),
        (ye.current = null),
        (be.current = null),
        j.current != null &&
          (j.current.setAttribute(`draggable`, `true`),
          j.current.style.removeProperty(`touch-action`),
          (j.current = null)),
        Ht(),
        Vt(),
        Ut(),
        (ge.current = null));
    },
    Kt = (e, n) => {
      let r = w.current?.getRootNode(),
        i = qo(Go(r instanceof ShadowRoot ? r : document, e, n));
      return (t.setDragTarget(i), t.getDragSession()?.target ?? null);
    },
    qt = (e) => {
      let n = t.getDragAndDropConfig()?.openOnDropDelay ?? 800;
      if (e == null || e.kind !== `directory` || e.directoryPath == null || n <= 0) {
        Vt();
        return;
      }
      let r = t.getItem(e.directoryPath),
        i = $o(r) ? r : null;
      if (i == null || i.isExpanded()) {
        Vt();
        return;
      }
      let a = `${e.directoryPath}::${e.flattenedSegmentPath ?? ``}`;
      A.current !== a &&
        (Vt(),
        (A.current = a),
        (pe.current = setTimeout(() => {
          let n = t.getDragSession()?.target;
          n?.kind === `directory` &&
            n.directoryPath === e.directoryPath &&
            n.flattenedSegmentPath === e.flattenedSegmentPath &&
            i.expand();
        }, n)));
    },
    Jt = () => {
      fe.current = null;
      let e = me.current,
        n = T.current;
      if (e == null || n == null || t.getDragSession() == null) return;
      let r = n.getBoundingClientRect(),
        i = Xo(e.clientY, r);
      if (i === 0) return;
      let a = Math.max(0, n.scrollHeight - n.clientHeight),
        o = Math.max(0, Math.min(a, n.scrollTop + i));
      (o !== n.scrollTop && ((n.scrollTop = o), D.current()),
        qt(Kt(e.clientX, e.clientY)),
        (fe.current = zt(Jt)));
    },
    Yt = (e, t) => {
      ((me.current = { clientX: e, clientY: t }), (fe.current ??= zt(Jt)));
    },
    Xt = (e, n, r) => {
      let i = e.currentTarget;
      if (i != null) {
        if ((Gt(), Ht(), Vt(), Ut(), t.startDrag(r) === !1)) e.preventDefault();
        else if (
          ((ge.current = n),
          e.dataTransfer != null &&
            ((e.dataTransfer.effectAllowed = `move`),
            (e.dataTransfer.dropEffect = `move`),
            e.dataTransfer.setData(`text/plain`, r),
            Yo()))
        ) {
          let t = Jo(i),
            n = i.getBoundingClientRect();
          (Object.assign(t.style, {
            height: `${n.height}px`,
            opacity: `0.85`,
            transform: `translate3d(-9999px, 0px, 0)`,
            width: `${n.width}px`,
          }),
            Wt(t),
            (he.current = t),
            e.dataTransfer.setDragImage(
              t,
              Math.max(0, e.clientX - n.left),
              Math.max(0, e.clientY - n.top),
            ));
        }
      }
    },
    Zt = () => {
      (Ht(), Vt(), Ut(), (ge.current = null), t.cancelDrag());
    },
    Qt = (e, n, r) => {
      if (xe.current != null || ve.current) return;
      let i = e.touches[0],
        a = e.currentTarget;
      if (i == null || a == null) return;
      ((be.current = { clientX: i.clientX, clientY: i.clientY }),
        (j.current = a),
        a.setAttribute(`draggable`, `false`));
      let o = (e = {}) => {
          let t = e.restoreNativeDraggable ?? !ve.current;
          (xe.current != null && (clearTimeout(xe.current), (xe.current = null)),
            document.removeEventListener(`touchmove`, s),
            document.removeEventListener(`touchend`, c),
            document.removeEventListener(`touchcancel`, c),
            _e.current === o && (_e.current = null),
            t &&
              (a.setAttribute(`draggable`, `true`),
              j.current === a && (j.current = null),
              (be.current = null)));
        },
        s = (e) => {
          let t = e.touches[0],
            n = be.current;
          if (t == null || n == null) return;
          let r = t.clientX - n.clientX,
            i = t.clientY - n.clientY;
          r * r + i * i <= 100 || o();
        },
        c = () => {
          o();
        };
      (document.addEventListener(`touchmove`, s, { passive: !0 }),
        document.addEventListener(`touchend`, c),
        document.addEventListener(`touchcancel`, c),
        (_e.current = o),
        (xe.current = setTimeout(() => {
          if ((o({ restoreNativeDraggable: !1 }), t.startDrag(r) === !1)) {
            (a.setAttribute(`draggable`, `true`),
              j.current === a && (j.current = null),
              (be.current = null));
            return;
          }
          ((ve.current = !0),
            (j.current = a),
            a.setAttribute(`draggable`, `false`),
            a.style.setProperty(`touch-action`, `none`),
            (ge.current = n));
          let e = a.getBoundingClientRect(),
            s = Jo(a);
          (Object.assign(s.style, {
            height: `${e.height}px`,
            opacity: `0.85`,
            transform: `translate3d(${e.left}px, ${e.top}px, 0)`,
            width: `${e.width}px`,
          }),
            Wt(s),
            (he.current = s),
            (ye.current = { x: i.clientX - e.left, y: i.clientY - e.top }));
          let c = (e) => {
              let t = e.touches[0];
              if (t == null) return;
              e.preventDefault();
              let n = ye.current;
              (n != null &&
                he.current != null &&
                (he.current.style.transform = `translate3d(${t.clientX - n.x}px, ${t.clientY - n.y}px, 0)`),
                qt(Kt(t.clientX, t.clientY)),
                Yt(t.clientX, t.clientY));
            },
            l = (e) => {
              let n = e.changedTouches[0];
              (n != null && Kt(n.clientX, n.clientY), t.completeDrag(), Gt());
            },
            u = () => {
              (t.cancelDrag(), Gt());
            };
          ((_e.current = () => {
            (document.removeEventListener(`touchmove`, c),
              document.removeEventListener(`touchend`, l),
              document.removeEventListener(`touchcancel`, u));
          }),
            document.addEventListener(`touchmove`, c, { passive: !1 }),
            document.addEventListener(`touchend`, l),
            document.addEventListener(`touchcancel`, u));
        }, Ho)));
    },
    $t = (e) => {
      if (F != null) {
        if (e.key === `Escape`) {
          (Pt(), e.preventDefault(), e.stopPropagation());
          return;
        }
        as.has(e.key) && (e.preventDefault(), e.stopPropagation());
        return;
      }
      if (st.isActive()) {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === `Escape`) st.cancel();
        else if (e.key === `Enter`) st.commit();
        else return;
        (ke(`focus`), Ce((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (u && e.key === `F2`) {
        (It(R ?? void 0), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (ut) {
        if (e.key === `Escape`) ((ue.current = !1), (de.current = null), t.closeSearch());
        else if (e.key === `Enter`) {
          let e = t.getFocusedPath();
          e != null && t.selectOnlyPath(e);
          let n = T.current,
            r = eo(n, H);
          ((de.current =
            z < 0 || n == null
              ? null
              : Math.max(0, Math.min(z * c - n.scrollTop, Math.max(0, r - c)))),
            (ue.current = !0),
            t.closeSearch());
        } else if (e.key === `ArrowDown`) t.focusNextSearchMatch();
        else if (e.key === `ArrowUp`) t.focusPreviousSearchMatch();
        else return;
        (ke(`focus`), Ce((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (g && ts(e)) {
        (t.openSearch(e.key), Ce((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      let n = L && rs(e),
        r = is(e, L),
        i = r && w.current != null ? $a(w.current) : null,
        a = r ? new Set(fs(w.current)) : new Set(),
        o = i?.dataset.fileTreeStickyPath ?? null,
        s = i?.dataset.fileTreeStickyRow === `true` && o != null;
      if (s && o !== R && a.has(o)) {
        let e = T.current;
        (Be(o, e?.scrollTop ?? null), t.focusPath(o));
      }
      let l = t.getFocusedPath(),
        d = t.getFocusedIndex(),
        f = t.getFocusedItem();
      if (f == null) return;
      let p = $o(f) ? f : null,
        m = l != null && (Et.has(l) || (s && o === l && a.has(l))),
        h =
          e.key === `ArrowDown` ||
          e.key === `ArrowUp` ||
          (e.key === `ArrowRight` && p != null && p.isExpanded()),
        _ = e.key === `ArrowLeft` && m && p != null && p.isExpanded(),
        v = T.current,
        y = !0;
      if (e.shiftKey && e.key === `ArrowDown`) t.extendSelectionFromFocused(1);
      else if (e.shiftKey && e.key === `ArrowUp`) t.extendSelectionFromFocused(-1);
      else if (n && l != null && d >= 0) {
        let e = t.getVisibleRows(d, d)[0] ?? null,
          n = ds(l, ie.current, E.current);
        e == null || n == null ? (y = !1) : Ft(e, l);
      } else if ((e.ctrlKey || e.metaKey) && es(e)) t.toggleFocusedSelection();
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === `a`) t.selectAllVisiblePaths();
      else
        switch (e.key) {
          case `ArrowDown`:
            t.focusNextItem();
            break;
          case `ArrowUp`:
            t.focusPreviousItem();
            break;
          case `ArrowRight`:
            p == null || p.isExpanded() ? t.focusNextItem() : p.expand();
            break;
          case `ArrowLeft`:
            p != null && p.isExpanded() ? p.collapse() : t.focusParentItem();
            break;
          case `Home`:
            t.focusFirstItem();
            break;
          case `End`:
            t.focusLastItem();
            break;
          default:
            y = !1;
        }
      if (!y) return;
      ke(`focus`);
      let b = t.getFocusedPath(),
        x = b != null && (Et.has(b) || a.has(b)),
        S = h && b !== l,
        C = n && s && o === l && b === l;
      if ((m || C) && b != null && ((S && x) || C))
        (Be(b, v?.scrollTop ?? null), (ce.current = !0), M((e) => (e === b ? e : b)));
      else {
        let t = e.key === `ArrowUp` && m && b !== l;
        b != null && (t || (_ && b === l))
          ? (Ve(b, ms(w.current, v, i, l, c, Tt, H)),
            (ce.current = !0),
            M((e) => (e === b ? e : b)))
          : ze();
      }
      (Ce((e) => e + 1), e.preventDefault(), e.stopPropagation());
    };
  (Oo(() => {
    g && ut && (He.current ? (He.current = !1) : Qa(re.current));
  }, [ut, g]),
    Oo(() => {
      let e = te.current;
      switch (
        so({ hasRenderedInput: e != null, previousRenamingPath: le.current, renamingPath: ct })
      ) {
        case `reset`:
          le.current = null;
          return;
        case `reveal-canonical`:
          ct != null && Lt(ct, { restoreTreeFocus: !1, targetOffset: `live-overlay` });
          return;
        case `ignore`:
          return;
        case `focus-input`:
          e != null && ((Ne.current = null), (le.current = ct), Qa(e), e.select());
          return;
      }
    }, [xt.end, xt.start, ct, Lt, Et]),
    Oo(() => {
      let e = w.current;
      if (e == null) return;
      let t = null,
        n = () => {
          t != null && (clearTimeout(t), (t = null));
        },
        r = () => {
          let t = $a(e)?.dataset.itemPath ?? null;
          M((e) => (e === t ? e : t));
        },
        i = () => {
          (n(), (ce.current = !0), r());
        },
        a = (i) => {
          let a = i.relatedTarget;
          if (a == null) {
            (n(),
              (t = setTimeout(() => {
                ((t = null), $a(e) == null ? ((ce.current = !1), M(null)) : r());
              }, 0)));
            return;
          }
          if (!(a instanceof Node) || !e.contains(a)) {
            (n(), (ce.current = !1), M(null));
            return;
          }
          let o = a instanceof HTMLElement ? (a.dataset.itemPath ?? null) : null;
          M((e) => (e === o ? e : o));
        };
      return (
        e.addEventListener(`focusin`, i),
        e.addEventListener(`focusout`, a),
        () => {
          (n(), e.removeEventListener(`focusin`, i), e.removeEventListener(`focusout`, a));
        }
      );
    }, []),
    Oo(() => {
      let e = w.current;
      e != null &&
        (V.physical.scrollTop <= 0
          ? (e.dataset.scrollAtTop = `true`)
          : delete e.dataset.scrollAtTop);
    }, [V.physical.scrollTop]),
    Oo(() => {
      let e = null,
        n = T.current,
        r = ee.current,
        i = w.current;
      if (n == null) return;
      ae.current = eo(n, b);
      let a = () => {
        let e = t.getVisibleCount(),
          r = to(ae.current, b),
          i = Math.max(0, e * c - r);
        (n.scrollTop > i && (n.scrollTop = i),
          Je(
            Vo({
              controller: t,
              itemHeight: c,
              overscan: l,
              scrollTop: Math.min(n.scrollTop, i),
              stickyFolders: y,
              viewportHeight: r,
            }),
          ));
      };
      if (!oe.current) {
        oe.current = !0;
        let e = t.getFocusedIndex();
        if (e >= 0) {
          let r = to(ae.current, b),
            i = t.getVisibleRows(e, e)[0] ?? null;
          ro(
            n,
            e,
            c,
            r,
            y && i != null
              ? Math.max(0, Math.min(i.ancestorPaths.length * c, Math.max(0, r - c)))
              : 0,
          );
        }
      }
      D.current = a;
      let o = t.subscribe(() => {
          (Ja(we) && Ce((e) => e + 1), a());
        }),
        s = () => {
          Re.current !== !0 &&
            (r != null && (r.dataset.isScrolling ??= ``),
            i != null && (i.dataset.isScrolling ??= ``),
            (C.current = !0),
            e != null && clearTimeout(e),
            (e = setTimeout(() => {
              (r != null && delete r.dataset.isScrolling,
                i != null && delete i.dataset.isScrolling,
                (C.current = !1),
                je((e) => e + 1),
                (e = null));
            }, 50)));
        },
        u = null,
        d = () => {
          (i != null && delete i.dataset.overlayReveal, u != null && (clearTimeout(u), (u = null)));
        },
        f = () => {
          i != null &&
            Re.current !== !0 &&
            (n.scrollTop > 0 ||
              ((i.dataset.overlayReveal = `true`),
              u != null && clearTimeout(u),
              (u = setTimeout(() => {
                d();
              }, 200))));
        },
        p = () => {
          (a(),
            n.scrollTop > 0 && d(),
            Me.current != null && C.current && Nt.current(),
            Re.current === !0 ? (C.current = !1) : (N((e) => (e == null ? e : null)), s()));
        },
        m = () => {
          (s(), f());
        },
        h = new Set([
          `ArrowUp`,
          `ArrowDown`,
          `ArrowLeft`,
          `ArrowRight`,
          `PageUp`,
          `PageDown`,
          `Home`,
          `End`,
          ` `,
          `Spacebar`,
        ]),
        g = (e) => {
          h.has(e.key) && m();
        };
      (n.addEventListener(`scroll`, p, { passive: !0 }),
        n.addEventListener(`wheel`, m, { passive: !0 }),
        n.addEventListener(`touchmove`, m, { passive: !0 }),
        n.addEventListener(`keydown`, g));
      let _ =
        typeof ResizeObserver < `u`
          ? new ResizeObserver((e) => {
              ((ae.current = (e[0] == null ? null : no(e[0])) ?? eo(n, b)), a());
            })
          : null;
      return (
        _?.observe(n),
        () => {
          ((D.current = () => {}),
            o(),
            n.removeEventListener(`scroll`, p),
            n.removeEventListener(`wheel`, m),
            n.removeEventListener(`touchmove`, m),
            n.removeEventListener(`keydown`, g),
            e != null && clearTimeout(e),
            u != null && clearTimeout(u),
            r != null && delete r.dataset.isScrolling,
            i != null && (delete i.dataset.isScrolling, delete i.dataset.overlayReveal),
            (C.current = !1),
            (ae.current = null),
            _?.disconnect());
        }
      );
    }, [t, b, c, l, y]),
    Oo(() => {
      L || F == null || Pt(!1);
    }, [Pt, L, F]));
  let en = ko(() => (F == null ? null : `${F.path}::${F.source}`), [F]);
  (Oo(() => {
    if (en == null) {
      v?.clearSlotContent(m);
      return;
    }
    let t = Me.current;
    if (t == null) return;
    let n = S.current ?? x.current;
    if (n == null) return;
    let r = {
        anchorElement: n,
        anchorRect: t.anchorRect ?? ss(n.getBoundingClientRect()),
        close: (e) => {
          Nt.current(e?.restoreFocus ?? !0);
        },
        restoreFocus: () => {
          Mt.current && jt.current(Me.current?.path ?? null);
        },
      },
      i = e?.contextMenu?.render?.(t.item, r) ?? null;
    return (
      v?.setSlotContent(m, i),
      e?.contextMenu?.onOpen?.(t.item, r),
      bs(i),
      queueMicrotask(() => {
        i != null && i.isConnected && document.activeElement === i && bs(i);
      }),
      () => {
        v?.clearSlotContent(m);
      }
    );
  }, [en, e?.contextMenu, v]),
    Oo(() => {
      F != null && t.getItem(F.path) == null && Pt();
    }, [Pt, F, t]),
    Oo(() => {
      if (F == null) return;
      let e = w.current?.getRootNode(),
        t = e instanceof ShadowRoot ? e.host : w.current,
        n = (e) => {
          let n = e.target;
          n instanceof Node &&
            (os(e) || (x.current?.contains(n) !== !0 && t?.contains(n) !== !0 && Pt()));
        },
        r = (e) => {
          e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), Pt());
        };
      return (
        document.addEventListener(`mousedown`, n, !0),
        document.addEventListener(`keydown`, r, !0),
        () => {
          (document.removeEventListener(`mousedown`, n, !0),
            document.removeEventListener(`keydown`, r, !0));
        }
      );
    }, [Pt, F]),
    Oo(() => {
      let e = T.current,
        n = w.current;
      if (e == null || n == null) {
        k.current = R;
        return;
      }
      let r = R == null ? null : (E.current.get(R) ?? null),
        i = $a(n),
        a = i?.dataset.itemPath ?? null,
        o = lt && te.current === i,
        s = g && re.current === i,
        l = ue.current && !ut,
        u = de.current ?? 0,
        d = Ne.current,
        f = Pe.current,
        p = Fe.current,
        m = Ie.current,
        h = i != null,
        _ = ce.current || h,
        v = k.current !== R,
        b = f != null && f === R && R != null,
        x = !1,
        S = !1;
      if (ft != null && ft.id !== O.current) {
        O.current = ft.id;
        let n = ft.visibleIndex,
          r = t.getVisibleRows(n, n)[0] ?? null;
        if (r != null) {
          let t = y ? Math.max(0, Math.min(r.ancestorPaths.length * c, Math.max(0, H - c))) : Tt;
          ((x = !0), (S = io(e, n, c, H, wt, ft.offset, t)));
        }
        t.clearScrollRequest(ft.id);
      }
      let C = !x && l && ao(e, z, c, H, wt, u),
        ee = !x && d != null && d === R && ao(e, z, c, H, wt, Tt),
        ne = !x && p != null && p.path === R && ao(e, z, c, H, wt, p.viewportOffset),
        ie = !x && m != null && m.path === R && e.scrollTop !== m.scrollTop;
      (ie && (e.scrollTop = m.scrollTop),
        (ie || S || ee || ne || C || (_ && v && d !== R && !b && ro(e, z, c, H, Tt))) &&
          D.current(),
        x
          ? (k.current = R)
          : _
            ? o || (s && !l)
              ? (k.current = R)
              : r == null
                ? (l && z >= 0 && (ao(e, z, c, H, wt, u), D.current()), (k.current = R))
                : ((v ||
                    l ||
                    d === R ||
                    f === R ||
                    p?.path === R ||
                    m?.path === R ||
                    a == null ||
                    a !== R) &&
                    (Qa(r),
                    d === R && (Ne.current = null),
                    f === R && (Pe.current = null),
                    p?.path === R && (Fe.current = null),
                    m?.path === R && (Ie.current = null),
                    (ue.current = !1),
                    (de.current = null)),
                  (k.current = R))
            : (k.current = R));
    }, [t, z, R, Dt, c, lt, ut, xt, H, g, ft, y, Tt, wt, bt]));
  let W = z >= 0 && z >= V.visible.startIndex && z <= V.visible.endIndex,
    tn = R != null && St.some((e) => Ro(e.row) === R),
    nn = W || tn,
    rn = Qe && ce.current === !0 && nn ? R : null,
    an = Oe === `pointer` ? Ee : null,
    on = F?.path ?? Le.current ?? an ?? rn ?? Ee,
    G = F?.source === `right-click`;
  Oo(() => {
    (C.current && F == null) || U(it(on));
  }, [F, it, xt, H, Ae, St, on, U, bt]);
  let K = $((e) => {
      if (C.current || os(e)) return;
      let t = e.target;
      if (!(t instanceof HTMLElement) || t.closest?.(`[data-type="context-menu-trigger"]`) != null)
        return;
      let n = t.closest?.(`[data-file-tree-sticky-row="true"]`),
        r = t.closest?.(`[data-type="item"]`),
        i =
          n instanceof HTMLElement
            ? (n.dataset.fileTreeStickyPath ?? null)
            : r instanceof HTMLElement
              ? (r.dataset.itemPath ?? null)
              : null;
      (i != null && ke((e) => (e === `pointer` ? e : `pointer`)), N((e) => (e === i ? e : i)));
    }, []),
    sn = $(() => {
      N(null);
    }, []);
  Oo(() => {
    if (!pt) return;
    let e = () => {
      (Gt(), t.cancelDrag());
    };
    return (
      window.addEventListener(`dragend`, e),
      () => {
        (window.removeEventListener(`dragend`, e), Gt(), t.cancelDrag());
      }
    );
  }, [t, pt]);
  let cn = (e) => {
      if (!pt || t.getDragSession() == null || ve.current) return;
      let n = qo(e.target instanceof HTMLElement ? e.target : null);
      (t.setDragTarget(n),
        qt(t.getDragSession()?.target ?? null),
        Yt(e.clientX, e.clientY),
        e.dataTransfer != null && (e.dataTransfer.dropEffect = `move`),
        e.preventDefault());
    },
    ln = (e) => {
      if (!pt || t.getDragSession() == null || ve.current) return;
      let n = e.relatedTarget;
      (n instanceof Node && w.current?.contains(n) === !0) || (Vt(), Ut(), t.setDragTarget(null));
    },
    un = (e) => {
      pt &&
        t.getDragSession() != null &&
        !ve.current &&
        (e.preventDefault(),
        Kt(e.clientX, e.clientY),
        t.completeDrag(),
        Ht(),
        Vt(),
        Ut(),
        (ge.current = null));
    },
    dn = V.window.height,
    fn = V.window.offsetTop,
    pn = Math.min(0, H - dn),
    mn = Math.min(0, H - dn - Tt),
    hn = Te === R || ue.current,
    gn = R != null && hn && !Dt && z >= 0 ? (bt[z] ?? t.getVisibleRows(z, z)[0] ?? null) : null,
    _n = gn == null ? null : oo(z, c, xt, dn),
    vn = ge.current,
    yn = gt != null && vn != null && vn.path === gt && vn.index >= xt.start && vn.index <= xt.end,
    bn = gt != null && vn != null && vn.path === gt && !yn && vn.path !== gn?.path ? vn : null,
    xn = bn == null ? null : oo(bn.index, c, xt, dn),
    Sn = ns(
      (z >= 0 ? (bt[z] ?? t.getVisibleRows(z, z)[0] ?? null) : null)?.ancestorPaths.at(-1) ?? null,
    ),
    Cn = ut && R != null ? _s(s, R, !Dt) : void 0,
    wn = F?.path ?? (ut ? R : Te),
    Tn = F?.path ?? Ee,
    En = it(on),
    Dn = L && Qe && !G && !lt && En != null && De != null && on != null,
    On = L && (Dn || F != null),
    kn = F?.anchorRect,
    An = kn == null && En != null && De != null && (F != null || Dn) ? De : null,
    jn =
      kn == null
        ? An == null
          ? void 0
          : { top: `${An}px` }
        : { left: `${kn.left}px`, position: `fixed`, right: `auto`, top: `${kn.top}px` },
    Mn = G ? { opacity: `0` } : void 0,
    Nn = $(
      (e, n, r, i) => {
        let a = uo({
            event: { ctrlKey: e.ctrlKey, metaKey: e.metaKey, shiftKey: e.shiftKey },
            isDirectory: n.kind === `directory`,
            isSearchOpen: ut,
            mode: i,
          }),
          o = a.toggleDirectory && n.kind === `directory`,
          s = o ? t.resolveMountedDirectoryPathFromInput(r) : null;
        if (o && s == null) return;
        let c = s ?? r;
        switch (a.selection.kind) {
          case `range`:
            t.selectPathRange(c, a.selection.additive);
            break;
          case `toggle`:
            t.togglePathSelectionFromInput(c);
            break;
          case `single`:
            t.selectOnlyMountedPathFromInput(c);
        }
        let l = e.currentTarget instanceof HTMLElement ? e.currentTarget : null,
          u = n.index >= V.visible.startIndex && n.index <= V.visible.endIndex,
          d = i === `flow` && u && l != null && l.dataset.itemParked !== `true`;
        (t.focusMountedPathFromInput(c),
          d && ((ce.current = !0), M((e) => (e === c ? e : c)), ke(`focus`)),
          o && t.toggleMountedDirectoryFromInput(c),
          a.closeSearch && t.closeSearch(),
          a.revealCanonical && Lt(c, { targetOffset: `sticky-parents` }));
      },
      [t, ut, V.visible.endIndex, V.visible.startIndex, Lt],
    ),
    Pn = () => {
      if (C.current || !Qe || on == null || En == null) return;
      let e = t.getItem(on);
      e != null &&
        (U(En),
        (Mt.current = !0),
        I({
          anchorRect: null,
          item: {
            kind: e.isDirectory() ? `directory` : `file`,
            name: En.getAttribute(`aria-label`) ?? on,
            path: e.getPath(),
          },
          path: e.getPath(),
          source: `button`,
        }));
    },
    Fn = {
      contextHoverPath: Tn,
      contextMenuButtonTriggerEnabled: Qe,
      contextMenuButtonVisibility: $e,
      contextMenuEnabled: L,
      contextMenuRightClickEnabled: et,
      contextMenuTriggerMode: Ze,
      controller: t,
      directoriesWithGitChanges: i,
      dragAndDropEnabled: pt,
      draggedPathSet: ht,
      dragTarget: B,
      gitLaneActive: at,
      gitStatusByPath: n,
      handleRowDragEnd: Zt,
      handleRowDragStart: Xt,
      handleRowTouchStart: Qt,
      ignoredGitDirectories: r,
      ignoredInheritanceCache: Se,
      instanceId: s,
      itemHeight: c,
      onKeyDown: $t,
      onRowClick: Nn,
      openContextMenuForRow: Ft,
      registerButton: tt,
      registerRenameInput: rt,
      renameView: st,
      renderDecorationForRow: Ot,
      resolveIcon: ot,
      shouldSuppressContextMenu: Rt,
      visualFocusPath: wn,
    },
    In = { ...Fn, registerButton: nt };
  return Y(`div`, {
    ref: w,
    id: _t,
    "data-file-tree-context-menu-button-visibility": L && Qe ? $e : void 0,
    "data-file-tree-context-menu-trigger-mode": L ? Ze : void 0,
    "data-file-tree-has-context-menu-action-lane": L && Qe ? `true` : void 0,
    "data-file-tree-has-git-lane": at ? `true` : void 0,
    "data-file-tree-virtualized-root": `true`,
    onDragLeave: pt ? ln : void 0,
    onDragOver: pt ? cn : void 0,
    onDrop: pt ? un : void 0,
    onKeyDown: $t,
    onPointerLeave: L ? sn : void 0,
    onPointerOver: L ? K : void 0,
    role: `tree`,
    tabIndex: -1,
    style: { outline: `none`, position: `relative` },
    children: [
      Y(`style`, { "data-file-tree-guide-style": `true`, dangerouslySetInnerHTML: { __html: Sn } }),
      Y(`slot`, { name: p, "data-type": `header-slot` }),
      g
        ? Y(`div`, {
            "data-file-tree-search-container": !0,
            "data-open": ut ? `true` : `false`,
            children: Y(`input`, {
              ref: re,
              "aria-activedescendant": Cn,
              "aria-controls": _t,
              placeholder: `Search…`,
              "data-file-tree-search-input": !0,
              "data-file-tree-search-input-fake-focus": Ue ? `true` : void 0,
              value: dt,
              onBlur: () => {
                (f !== `retain` || Ge.current) && t.closeSearch();
              },
              onFocus: Ke,
              onPointerDown: Ke,
              onInput: (e) => {
                Ke();
                let n = e.currentTarget;
                t.setSearch(n.value);
              },
            }),
          })
        : null,
      Y(`div`, {
        ref: T,
        "data-file-tree-virtualized-scroll": `true`,
        children: [
          y && Ye && St.length > 0
            ? Y(`div`, {
                "aria-hidden": `true`,
                "data-file-tree-sticky-overlay": `true`,
                children: Y(`div`, {
                  "data-file-tree-sticky-overlay-content": `true`,
                  style: { height: `${vt}px` },
                  children: St.map((e, t) =>
                    Ss(In, e.row, `sticky:${Ro(e.row)}`, {
                      mode: `sticky`,
                      style: {
                        left: `0`,
                        position: `absolute`,
                        right: `0`,
                        top: `${e.top}px`,
                        zIndex: `${St.length - t}`,
                      },
                    }),
                  ),
                }),
              })
            : null,
          Y(`div`, {
            ref: ee,
            "data-file-tree-virtualized-list": `true`,
            style: { height: `${wt}px` },
            children: [
              Y(`div`, {
                "data-file-tree-virtualized-sticky-offset": `true`,
                "aria-hidden": `true`,
                style: { height: `${fn}px` },
              }),
              Y(`div`, {
                "data-file-tree-virtualized-sticky": `true`,
                style: { height: `${dn}px`, top: `${pn}px`, bottom: `${mn}px` },
                children: [
                  Cs(Fn, xt, Et),
                  gn != null && _n != null
                    ? Ss(Fn, gn, `parked:${gn.path}`, {
                        isParked: !0,
                        style: {
                          left: `0`,
                          opacity: `0`,
                          pointerEvents: gt === gn.path ? `none` : void 0,
                          position: `absolute`,
                          right: `0`,
                          top: `${_n}px`,
                        },
                      })
                    : null,
                  bn != null && xn != null
                    ? Ss(Fn, bn, `parked-drag:${bn.path}`, {
                        isParked: !0,
                        style: {
                          left: `0`,
                          opacity: `0`,
                          pointerEvents: `none`,
                          position: `absolute`,
                          right: `0`,
                          top: `${xn}px`,
                        },
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      }),
      L
        ? Y(`div`, {
            ref: x,
            "data-type": `context-menu-anchor`,
            "data-visible": On ? `true` : `false`,
            style: jn,
            children: [
              Y(`button`, {
                ref: S,
                type: `button`,
                "data-type": h,
                "aria-label": `Options`,
                "aria-haspopup": `menu`,
                "aria-expanded": F == null ? `false` : `true`,
                "data-visible": Dn ? `true` : `false`,
                onMouseDown: (e) => {
                  e.preventDefault();
                },
                onClick: (e) => {
                  (e.preventDefault(), e.stopPropagation(), F == null ? Pn() : Pt());
                },
                tabIndex: -1,
                style: Mn,
                children: Y(_a, { ...ot(`file-tree-icon-ellipsis`) }),
              }),
              F == null ? null : Y(`slot`, { name: m }),
            ],
          })
        : null,
      F == null
        ? null
        : Y(`div`, {
            "data-type": `context-menu-wash`,
            "aria-hidden": `true`,
            onMouseDownCapture: (e) => {
              (e.preventDefault(), Pt());
            },
            onTouchStartCapture: (e) => {
              (e.preventDefault(), e.stopPropagation(), Pt());
            },
            onTouchMoveCapture: (e) => {
              (e.preventDefault(), e.stopPropagation());
            },
            onWheelCapture: (e) => {
              (e.preventDefault(), e.stopPropagation());
            },
          }),
    ],
  });
}
var Ts = {
  hydrateRoot: (e, t) => {
    fa(Hi(ws, t), e);
  },
  renderRoot: (e, t) => {
    da(Hi(ws, t), e);
  },
  unmountRoot: (e) => {
    da(null, e);
  },
};
function Es(e, t) {
  Ts.renderRoot(e, t);
}
function Ds(e, t) {
  Ts.hydrateRoot(e, t);
}
function Os(e) {
  Ts.unmountRoot(e);
}
var ks = class {
  #e = new Map();
  #t = null;
  clearAll() {
    for (let e of this.#e.values()) e.remove();
    this.#e.clear();
  }
  clearSlotContent(e) {
    let t = this.#n(e);
    t != null && (t.remove(), this.#e.delete(e));
  }
  setHost(e) {
    if (((this.#t = e), e != null)) {
      this.#i(e);
      for (let [e, t] of this.#e) this.#r(e, t);
    }
  }
  setSlotContent(e, t) {
    let n = this.#n(e);
    n === t
      ? t != null && (this.#e.set(e, t), this.#r(e, t))
      : (n?.remove(), t == null ? this.#e.delete(e) : (this.#e.set(e, t), this.#r(e, t)));
  }
  setSlotHtml(e, t) {
    let n = t?.trim() ?? ``;
    if (n.length === 0) {
      this.setSlotContent(e, null);
      return;
    }
    let r = this.#n(e);
    if (r != null && r.innerHTML === n) {
      (this.#e.set(e, r), this.#r(e, r));
      return;
    }
    let i = document.createElement(`div`);
    ((i.innerHTML = n), this.setSlotContent(e, i));
  }
  #n(e) {
    let t = this.#e.get(e) ?? null;
    if (t != null) return t;
    let n = this.#t;
    if (n == null) return null;
    for (let t of Array.from(n.children))
      if (t instanceof HTMLElement && t.dataset.fileTreeManagedSlot === e) return t;
    return null;
  }
  #r(e, t) {
    ((t.slot = e),
      (t.dataset.fileTreeManagedSlot = e),
      this.#t != null && t.parentNode !== this.#t && this.#t.appendChild(t));
  }
  #i(e) {
    for (let t of Array.from(e.children)) {
      if (!(t instanceof HTMLElement)) continue;
      let e = t.dataset.fileTreeManagedSlot;
      e == null || this.#e.has(e) || this.#e.set(e, t);
    }
  }
};
Array.isArray;
var As = 0;
function js(e) {
  return e != null && e.length > 0 ? e : ((As += 1), `pst_ft_${As}`);
}
function Ms({ initialVisibleRowCount: e, itemHeight: t }) {
  return e == null ? 420 : Math.max(0, e) * (t ?? ne);
}
function Ns(e) {
  if (typeof document > `u`) return;
  let t = document.createElement(`div`);
  t.innerHTML = e;
  let n = t.querySelector(`svg`);
  return n instanceof SVGElement ? n : void 0;
}
function Ps(e) {
  return (
    e.querySelector(`#file-tree-icon-chevron`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-file`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-dot`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-lock`) instanceof SVGElement
  );
}
function Fs(e) {
  return Array.from(e.children).filter((e) => e instanceof SVGElement);
}
var Is = class {
  static LoadedCustomComponent = !0;
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l = new ks();
  #u;
  #d;
  #f;
  #p;
  #m;
  #h;
  #g;
  #_;
  #v;
  #y = null;
  #b;
  #x = !1;
  #S = !1;
  constructor(e) {
    let {
      composition: t,
      density: n,
      fileTreeSearchMode: r,
      gitStatus: i,
      id: a,
      initialSearchQuery: o,
      icons: s,
      itemHeight: c,
      onSearchChange: l,
      onSelectionChange: u,
      overscan: d,
      renderRowDecoration: f,
      renaming: p,
      search: m,
      searchBlurBehavior: h,
      searchFakeFocus: g,
      stickyFolders: _,
      unsafeCSS: v,
      initialVisibleRowCount: y,
      ...b
    } = e;
    ((this.#e = t),
      (this.#n = js(a)),
      (this.#p = vi(i)),
      (this.#m = s),
      (this.#h = v),
      (this.#r = u),
      (this.#i = f),
      (this.#a = p != null && p !== !1),
      (this.#o = h),
      (this.#s = m === !0),
      (this.#c = g === !0),
      (this.#u = te(n, c)),
      (this.#d = {
        itemHeight: this.#u.itemHeight,
        overscan: d,
        stickyFolders: _,
        initialVisibleRowCount: y,
      }),
      (this.#t = new pi({
        ...b,
        fileTreeSearchMode: r,
        initialSearchQuery: o,
        onSearchChange: l,
        renaming: p,
      })),
      (this.#v = this.#t.getSelectionVersion()),
      (this.#y =
        this.#r == null
          ? null
          : this.subscribe(() => {
              this.#D();
            })));
  }
  unmount() {
    (this.#b != null &&
      (Os(this.#b), delete this.#b.dataset.fileTreeVirtualizedWrapper, (this.#b = void 0)),
      this.#l.clearAll(),
      this.#l.setHost(null),
      this.#f != null &&
        (delete this.#f.dataset.fileTreeVirtualized, this.#I(this.#f), (this.#f = void 0)));
  }
  cleanUp() {
    (this.unmount(), this.#y?.(), (this.#y = null), this.#t.destroy());
  }
  getFileTreeContainer() {
    return this.#f;
  }
  getItem(e) {
    return this.#t.getItem(e);
  }
  getFocusedItem() {
    return this.#t.getFocusedItem();
  }
  getFocusedPath() {
    return this.#t.getFocusedPath();
  }
  getFocusedIndex() {
    return this.#t.getFocusedIndex();
  }
  getVisibleCount() {
    return this.#t.getVisibleCount();
  }
  getVisibleRows(e, t) {
    return this.#t.getVisibleRows(e, t);
  }
  getSelectedPaths() {
    return this.#t.getSelectedPaths();
  }
  getComposition() {
    return this.#e;
  }
  getItemHeight() {
    return this.#u.itemHeight;
  }
  getDensityFactor() {
    return this.#u.factor;
  }
  subscribe(e) {
    let t = !1;
    return this.#t.subscribe(() => {
      t ? e() : (t = !0);
    });
  }
  focusPath(e) {
    this.#t.focusPath(e);
  }
  focusFirstItem() {
    this.#t.focusFirstItem();
  }
  focusLastItem() {
    this.#t.focusLastItem();
  }
  focusNextItem() {
    this.#t.focusNextItem();
  }
  focusPreviousItem() {
    this.#t.focusPreviousItem();
  }
  focusParentItem() {
    this.#t.focusParentItem();
  }
  scrollToPath(e, t) {
    this.#t.scrollToPath(e, t);
  }
  focusNearestPath(e) {
    return this.#t.focusNearestPath(e);
  }
  add(e) {
    this.#t.add(e);
  }
  batch(e) {
    this.#t.batch(e);
  }
  applyGitStatusPatch(e) {
    let t = yi(this.#p, e);
    if (t === this.#p) return;
    this.#p = t;
    let n = this.#T();
    n != null && Es(n.wrapper, this.#w());
  }
  move(e, t, n) {
    this.#t.move(e, t, n);
  }
  onMutation(e, t) {
    return this.#t.onMutation(e, t);
  }
  setSearch(e) {
    this.#t.setSearch(e);
  }
  openSearch(e) {
    this.#t.openSearch(e);
  }
  closeSearch() {
    this.#t.closeSearch();
  }
  isSearchOpen() {
    return this.#t.isSearchOpen();
  }
  getSearchValue() {
    return this.#t.getSearchValue();
  }
  getSearchMatchingPaths() {
    return this.#t.getSearchMatchingPaths();
  }
  focusNextSearchMatch() {
    this.#t.focusNextSearchMatch();
  }
  focusPreviousSearchMatch() {
    this.#t.focusPreviousSearchMatch();
  }
  startRenaming(e, t) {
    return this.#t.startRenaming(e, t);
  }
  remove(e, t) {
    this.#t.remove(e, t);
  }
  resetPaths(e, t) {
    Array.isArray(e) ? this.#t.resetPaths(e, t) : this.#t.resetPaths(e);
  }
  setComposition(e) {
    this.#e = e;
    let t = this.#T();
    t != null && (this.#O(), Es(t.wrapper, this.#w()));
  }
  setGitStatus(e) {
    let t = vi(e, this.#p);
    if (t === this.#p) return;
    this.#p = t;
    let n = this.#T();
    n != null && Es(n.wrapper, this.#w());
  }
  setIcons(e) {
    this.#m = e;
    let t = this.#T();
    t != null && (this.#E(t.host, t.wrapper), Es(t.wrapper, this.#w()));
  }
  hydrate({ fileTreeContainer: e }) {
    let t = this.#P(e),
      n = this.#N(t);
    (this.#O(), Ds(n, this.#w()));
  }
  render({ containerWrapper: e, fileTreeContainer: t }) {
    let n = this.#P(t ?? this.#f, e),
      r = this.#N(n);
    (this.#O(), Es(r, this.#w()));
  }
  #C() {
    return {
      initialViewportHeight: Ms({
        initialVisibleRowCount: this.#d.initialVisibleRowCount,
        itemHeight: this.#d.itemHeight,
      }),
      itemHeight: this.#d.itemHeight,
      overscan: this.#d.overscan,
      stickyFolders: this.#d.stickyFolders,
    };
  }
  #w() {
    return {
      composition: this.#e,
      controller: this.#t,
      gitStatusByPath: this.#p?.statusByPath,
      ignoredGitDirectories: this.#p?.ignoredDirectoryPaths,
      directoriesWithGitChanges: this.#p?.directoriesWithChanges,
      icons: this.#m,
      instanceId: this.#n,
      renamingEnabled: this.#a,
      renderRowDecoration: this.#i,
      searchBlurBehavior: this.#o,
      searchEnabled: this.#s,
      searchFakeFocus: this.#c,
      slotHost: this.#l,
      ...this.#C(),
    };
  }
  #T() {
    let e = this.#f,
      t = this.#b;
    return e == null || t == null ? null : { host: e, wrapper: t };
  }
  #E(e, t) {
    let n = e.shadowRoot;
    (n != null && (this.#k(n), this.#A(n)), this.#j(t));
  }
  #D() {
    let e = this.#r;
    if (e == null) return;
    let t = this.#t.getSelectionVersion();
    t !== this.#v && ((this.#v = t), e(this.#t.getSelectedPaths()));
  }
  #O() {
    let e = this.#e?.header?.render;
    e == null
      ? this.#l.setSlotHtml(p, this.#e?.header?.html ?? null)
      : this.#l.setSlotContent(p, e());
  }
  #k(e) {
    let t = Fs(e).find((e) => Ps(e)),
      n = Ns(i(r(this.#m).set));
    n != null &&
      (t == null || t.outerHTML !== n.outerHTML) &&
      (t == null ? e.prepend(n) : t.replaceWith(n));
  }
  #A(e) {
    let t = Fs(e),
      n = t.find((e) => Ps(e)),
      i = t.filter((e) => e !== n),
      a = r(this.#m).spriteSheet?.trim() ?? ``;
    if (a.length === 0) {
      for (let e of i) e.remove();
      return;
    }
    let o = Ns(a);
    if (o == null) for (let e of i) e.remove();
    else if (i.length !== 1 || i[0].outerHTML !== o.outerHTML) {
      for (let e of i) e.remove();
      e.appendChild(o);
    }
  }
  #j(e) {
    let t = r(this.#m);
    t.colored && o(t.set)
      ? (e.dataset.fileTreeColoredIcons = `true`)
      : delete e.dataset.fileTreeColoredIcons;
  }
  #M(e) {
    let t = e.querySelector(`style[${l}]`);
    (this.#g == null && t instanceof HTMLStyleElement && (this.#g = t),
      this.#h == null || this.#h === ``
        ? (this.#g?.remove(), (this.#g = void 0), (this.#_ = void 0))
        : (this.#g?.parentNode !== e || this.#_ !== this.#h) &&
          ((this.#g ??= document.createElement(`style`)),
          this.#g.setAttribute(l, ``),
          this.#g.parentNode !== e && e.appendChild(this.#g),
          (this.#g.textContent = E(this.#h)),
          (this.#_ = this.#h)));
  }
  #N(e) {
    if (this.#b != null) return this.#b;
    let t = e.shadowRoot;
    if (t == null) throw Error(`FileTree requires a shadow root`);
    let n = Array.from(t.children).filter(
        (e) =>
          e instanceof HTMLDivElement &&
          typeof e.dataset.fileTreeId == `string` &&
          e.dataset.fileTreeId.length > 0,
      ),
      r = n.find((e) => e.dataset.fileTreeId === this.#n) ?? n[0];
    return (
      r != null && (this.#n = r.dataset.fileTreeId ?? this.#n),
      (this.#b = r ?? document.createElement(`div`)),
      (this.#b.dataset.fileTreeId = this.#n),
      (this.#b.dataset.fileTreeVirtualizedWrapper = `true`),
      this.#E(e, this.#b),
      this.#b.parentNode !== t && t.appendChild(this.#b),
      this.#b
    );
  }
  #P(e, t) {
    let n = e ?? this.#f ?? document.createElement(`file-tree-container`);
    t != null && n.parentNode !== t && t.appendChild(n);
    let r = n.shadowRoot ?? n.attachShadow({ mode: `open` });
    return (
      se(n, r),
      this.#M(r),
      (n.dataset.fileTreeVirtualized = `true`),
      (n.style.display = `flex`),
      this.#F(n),
      this.#l.setHost(n),
      (this.#f = n),
      n
    );
  }
  #F(e) {
    (e.style.getPropertyValue(`--trees-item-height`) === `` &&
      (e.style.setProperty(`--trees-item-height`, `${String(this.#u.itemHeight)}px`),
      (this.#x = !0)),
      e.style.getPropertyValue(`--trees-density-override`) === `` &&
        (e.style.setProperty(`--trees-density-override`, String(this.#u.factor)), (this.#S = !0)));
  }
  #I(e) {
    ((this.#x &&= (e.style.removeProperty(`--trees-item-height`), !1)),
      (this.#S &&= (e.style.removeProperty(`--trees-density-override`), !1)));
  }
};
function Ls(e) {
  let [t] = (0, g.useState)(() => new Is(e)),
    n = (0, g.useRef)({ timeout: null, model: t });
  return (
    (0, g.useEffect)(() => {
      let { current: e } = n;
      return (
        e.timeout != null && (clearTimeout(e.timeout), (e.timeout = null)),
        () => {
          e.timeout = setTimeout(() => e.model.cleanUp(), 1);
        }
      );
    }, []),
    { model: t }
  );
}
function Rs(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
  return !0;
}
function zs(e, t, n) {
  return Object.is(e, t) || n?.(e, t) === !0;
}
function Bs(e, t, n) {
  let r = (0, g.useRef)({ hasValue: !1, model: null, selector: null, value: void 0 }),
    i = (0, g.useCallback)((t) => e.subscribe(t), [e]),
    a = (0, g.useCallback)(() => {
      let i = r.current,
        a = t(e);
      if (i.model !== e || i.selector !== t || !i.hasValue)
        return ((i.hasValue = !0), (i.model = e), (i.selector = t), (i.value = a), a);
      let o = i.value;
      return zs(o, a, n) ? o : ((i.value = a), a);
    }, [n, e, t]);
  return (0, g.useSyncExternalStore)(i, a, a);
}
var Vs = `
  :host {
    --trees-bg-override: transparent;
    --trees-selected-bg-override: color-mix(in srgb, currentColor 12%, transparent);
    --trees-hover-bg-override: color-mix(in srgb, currentColor 7%, transparent);
    --trees-border-color-override: color-mix(in srgb, currentColor 14%, transparent);
    --trees-font-family-override: var(--font-sans);
    --trees-font-size-override: 0.75rem;
  }
  [data-truncate-content='visible'] { overflow: hidden; text-overflow: ellipsis; }
  [data-truncate-marker] { display: none; }
  button[data-type='item'], button[data-type='item']::before { border-radius: var(--radius-md); }
  svg[data-icon-name='t3-tree-icon-loading'] { opacity: 0.6; }
  @media (prefers-reduced-motion: no-preference) {
    svg[data-icon-name='t3-tree-icon-loading'] { animation: t3-tree-spin 1s linear infinite; }
  }
  @keyframes t3-tree-spin { to { transform: rotate(360deg); } }
`;
function Hs(e) {
  return { colorScheme: e, "--trees-fg-override": `var(--contrast-foreground)` };
}
function Us(e) {
  return typeof e != `object` ||
    !e ||
    !(`isDirectory` in e) ||
    typeof e.isDirectory != `function` ||
    !e.isDirectory() ||
    !(`isExpanded` in e) ||
    typeof e.isExpanded != `function` ||
    !(`expand` in e) ||
    typeof e.expand != `function` ||
    !(`collapse` in e) ||
    typeof e.collapse != `function`
    ? null
    : e;
}
function Ws(e, t) {
  return (
    t.length > 0 &&
    t.every((t) => {
      let n = Us(e.getItem(t));
      return n !== null && n.isExpanded();
    })
  );
}
function Gs(e, t, n) {
  for (let r of t) {
    let t = Us(e.getItem(r));
    t !== null && t.isExpanded() !== n && (n ? t.expand() : t.collapse());
  }
}
export { Rs as a, C as c, Hs as i, Gs as n, Bs as o, Vs as r, Ls as s, Ws as t };
//# sourceMappingURL=fileTreeExpansion-BmZC-68G.js.map
