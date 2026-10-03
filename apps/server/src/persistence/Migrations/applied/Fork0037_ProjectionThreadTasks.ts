import * as Effect from "effect/Effect";

/**
 * Ids 36 and 37 are fork migrations live databases already recorded, shipped
 * before the upstream rewrite reclaimed both numbers. This build re-declares
 * them as no-ops because the runner applies only ids above the recorded maximum.
 * The columns they added come from the projections bootstrap.
 */
export default Effect.void;
