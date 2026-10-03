import * as Effect from "effect/Effect";
import * as Migrator from "effect/sql/Migrator";
import * as SqlClient from "effect/sql/SqlClient";

import PullRequestFilesViewed from "./Migrations/055_PullRequestFilesViewed.ts";
import AutoSettleDisabledAt from "./Migrations/056_ProjectionThreadsAutoSettleDisabledAt.ts";

// Published previews assigned V2 to 53, then 54. Keep their schema and import
// progress intact while reserving main's migration ids for upgrades from main.
//
// Every id below is offset by +2 from upstream: this fork shipped migrations 36
// (ProjectionThreadPendingBackgroundTasks) and 37 (ProjectionThreadTasks) before
// the orchestrator rewrite reclaimed those numbers, and it keeps them as no-ops so
// live databases stay contiguous. See Migrations.ts.
export const reconcileV2PreviewMigration = Effect.fn("reconcileV2PreviewMigration")(function* () {
  const sql = yield* SqlClient.SqlClient;
  return yield* sql.withTransaction(
    Effect.gen(function* () {
      const tables = yield* sql`
        SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'effect_sql_migrations'
      `;
      if (tables.length === 0) return [];
      const history = yield* sql<{ readonly migration_id: number; readonly name: string }>`
        SELECT migration_id, name FROM effect_sql_migrations WHERE migration_id >= 57
      `;
      const legacy = history.find(
        (row) =>
          row.name === "OrchestrationV2" && (row.migration_id === 55 || row.migration_id === 56),
      );
      if (!legacy) return [];
      const valid = history.every(
        (row) =>
          row === legacy ||
          (legacy.migration_id === 56 &&
            ((row.migration_id === 55 && row.name === "PullRequestFilesViewed") ||
              (row.migration_id === 57 && row.name === "RemoveRedundantProjectionIndexes"))),
      );
      if (!valid) {
        return yield* new Migrator.MigrationError({
          kind: "BadState",
          message: "Cannot upgrade V2 preview with unexpected later migrations.",
        });
      }
      const executed: Array<readonly [number, string]> = [];
      if (legacy.migration_id === 55) {
        yield* PullRequestFilesViewed;
        executed.push([55, "PullRequestFilesViewed"]);
      }
      yield* AutoSettleDisabledAt;
      executed.push([56, "ProjectionThreadsAutoSettleDisabledAt"]);
      // Move the later entry first to avoid a primary-key collision.
      yield* sql`UPDATE effect_sql_migrations SET migration_id = 58 WHERE migration_id = 57 AND name = 'RemoveRedundantProjectionIndexes'`;
      yield* sql`UPDATE effect_sql_migrations SET migration_id = 57 WHERE migration_id = ${legacy.migration_id} AND name = 'OrchestrationV2'`;
      if (legacy.migration_id === 55) {
        yield* sql`INSERT INTO effect_sql_migrations (migration_id, name) VALUES (55, 'PullRequestFilesViewed')`;
      }
      yield* sql`INSERT INTO effect_sql_migrations (migration_id, name) VALUES (56, 'ProjectionThreadsAutoSettleDisabledAt')`;
      return executed;
    }),
  );
});
