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
 * Id 37 dropped the `projection_thread_tasks` table once background-task state
 * moved onto the run/subagent projections; live databases already recorded it,
 * so there is nothing left to do here.
 */
export default Effect.void;
