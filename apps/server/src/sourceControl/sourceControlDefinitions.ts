import * as AzureDevOpsDriver from "@t3tools/source-control-azure-devops/server/driver";
import * as BitbucketDriver from "@t3tools/source-control-bitbucket/server/driver";
import { builtInSourceControlDefinitions } from "@t3tools/source-control-definitions/registry";
import * as ForgejoDriver from "@t3tools/source-control-forgejo/server/driver";
import * as GitCafeDriver from "@t3tools/source-control-gitcafe/server/driver";
import * as GitHubDriver from "@t3tools/source-control-github/server/driver";
import * as GitLabDriver from "@t3tools/source-control-gitlab/server/driver";
import { SourceControlProviderKind } from "@t3tools/contracts";
import type { SourceControlDriver } from "@t3tools/source-control-core/server/driver";
import { withOwnServices } from "@t3tools/source-control-core/server/driver";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as VcsProcess from "../vcs/VcsProcess.ts";

import * as GerritCli from "./GerritCli.ts";
import * as GerritRestApi from "./GerritRestApi.ts";
import * as GerritSourceControlProvider from "./GerritSourceControlProvider.ts";
import * as GerritPullRequestProvider from "../pullRequest/GerritPullRequestProvider.ts";
import { definition as gerritDefinition } from "@t3tools/source-control-definitions/gerrit";

/**
 * Gerrit ships inside the server rather than its own package in this fork. Its providers read
 * server-level services the package drivers never touch — the settings store for the optional REST
 * token and the Node process spawner behind `ssh` — so the driver is declared directly instead of
 * through `defineSourceControlDriver`, which narrows `make` to the package services.
 */
const gerritDriver = {
  kind: SourceControlProviderKind.make("gerrit"),
  definition: gerritDefinition,
  make: withOwnServices(
    Effect.all({
      sourceControl: GerritSourceControlProvider.make,
      discovery: Effect.succeed(GerritSourceControlProvider.discovery),
      pullRequests: GerritPullRequestProvider.make,
    }),
    Layer.mergeAll(GerritCli.layer, GerritRestApi.layer).pipe(Layer.provideMerge(VcsProcess.layer)),
  ),
} as unknown as SourceControlDriver;

/** In the shared registry's order, which is the order hosts are listed and probed in. */
export const BUILT_IN_SOURCE_CONTROL_DRIVER_LIST = [
  GitHubDriver.driver,
  GitLabDriver.driver,
  GitCafeDriver.driver,
  ForgejoDriver.driver,
  BitbucketDriver.driver,
  gerritDriver,
  AzureDevOpsDriver.driver,
] as const;

export const sourceControlDefinitions = builtInSourceControlDefinitions;
