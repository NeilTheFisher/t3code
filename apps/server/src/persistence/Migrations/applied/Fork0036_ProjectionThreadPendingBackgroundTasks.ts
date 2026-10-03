import * as Effect from "effect/Effect";

/**
 * Ids 36 and 37 were fork migrations (`ProjectionThreadPendingBackgroundTasks`,
 * `ProjectionThreadTasks`) that shipped and ran before the upstream orchestrator
 * rewrite. Upstream reclaims both ids, so this build re-declares them as no-ops
 * to keep the fork's id space contiguous with what live databases already
 * recorded. The migrator applies only `id > max(effect_sql_migrations)`, so
 * upstream's own migrations must be numbered above the fork's high-water mark
 * (56) or they are silently skipped.
 *
 * The columns these migrations added are still created by the projections
 * bootstrap, so nothing depends on them running again.
 */
export default Effect.void;
