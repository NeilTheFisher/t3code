import { Gl as e, Kl as t, Lp as n, Vl as r, Wl as i } from "./utils-CPoejuy5.js";
import { a, i as o, t as s } from "./vcsRefInvalidation-C9yI5o9q.js";
import { t as c } from "./runtime-CY2dlMEg.js";
function l(c) {
  let l = r();
  return {
    discovery: e(c, {
      label: `environment-data:server:source-control-discovery`,
      tag: n.serverDiscoverSourceControl,
    }),
    repository: e(c, {
      label: `environment-data:source-control:repository`,
      tag: n.sourceControlLookupRepository,
    }),
    cloneRepository: i(c, {
      label: `environment-data:source-control:clone-repository`,
      tag: n.sourceControlCloneRepository,
      scheduler: l,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    startProjectClone: i(c, {
      label: `environment-data:source-control:project-clone-start`,
      tag: n.projectCloneStart,
      scheduler: l,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    cancelProjectClone: i(c, {
      label: `environment-data:source-control:project-clone-cancel`,
      tag: n.projectCloneCancel,
      scheduler: l,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    retryProjectClone: i(c, {
      label: `environment-data:source-control:project-clone-retry`,
      tag: n.projectCloneRetry,
      scheduler: l,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    projectClones: t(c, {
      label: `environment-data:source-control:project-clones`,
      tag: n.subscribeProjectClones,
    }),
    publishRepository: i(c, {
      label: `environment-data:source-control:publish-repository`,
      tag: n.sourceControlPublishRepository,
      scheduler: a,
      concurrency: o,
      onSettled: (e, t) => s(t, { environmentId: e.environmentId, cwd: e.input.cwd }),
    }),
  };
}
var u = l(c);
export { u as t };
//# sourceMappingURL=sourceControl-DEiLEb7m.js.map
