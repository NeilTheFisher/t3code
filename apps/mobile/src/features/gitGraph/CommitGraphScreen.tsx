import { LegendList } from "@legendapp/list/react-native";
import { layoutGraph } from "@t3tools/client-runtime/gitGraph/graphLayout";
import { EnvironmentId, type VcsGraphCommit } from "@t3tools/contracts";
import { useNavigation, type StaticScreenProps } from "@react-navigation/native";
import { useGT } from "gt-react-native";
import { useMemo, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppBar } from "../../components/ui/AppBar";
import { AppActivityIndicator } from "../../components/ui/AppActivityIndicator";
import { AppText as Text } from "../../components/ui/AppText";
import { Button } from "../../components/ui/Button";
import { EmptyState } from "../../components/ui/EmptyState";
import { RowPressable } from "../../components/ui/RowPressable";
import { SegmentedControl } from "../../components/ui/SegmentedControl";
import { useNowMinuteMs } from "../../lib/clock";
import { NativeScrollView } from "../../native/NativeScrollViewMarker";
import { COMMIT_ROW_HEIGHT, CommitGraphRow } from "./CommitGraphRow";
import { COMMIT_GRAPH_INITIAL_LIMIT, nextCommitGraphLimit } from "./commitGraphPresentation";
import { useCommitGraph } from "./useCommitGraph";

export type CommitGraphParams = {
  readonly environmentId: string;
  readonly cwd: string;
  readonly repository: string;
  /** The checked-out branch the caller already knows, until the graph answers. */
  readonly branch: string | null;
};

type CommitGraphScope = "local" | "remotes";

const NO_COMMITS: ReadonlyArray<VcsGraphCommit> = [];

function CommitGraphSkeleton() {
  return (
    <NativeScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      {Array.from({ length: 8 }, (_, index) => (
        <View
          key={`skeleton:${index}`}
          accessible={false}
          importantForAccessibility="no-hide-descendants"
          className="flex-row bg-screen"
          style={{ height: COMMIT_ROW_HEIGHT }}
        >
          <View className="w-8 items-center justify-center border-r border-separator">
            <View className="size-2 rounded-full bg-subtle-strong" />
          </View>
          <View className="flex-1 justify-center gap-2 border-b border-border-subtle px-3 py-2">
            <View
              className="h-3.5 rounded bg-subtle-strong"
              style={{ width: index % 2 === 0 ? "80%" : "62%" }}
            />
            <View className="h-2.5 w-2/5 rounded bg-subtle-strong" />
          </View>
        </View>
      ))}
    </NativeScrollView>
  );
}

export function CommitGraphScreen({ route }: StaticScreenProps<CommitGraphParams>) {
  const gt = useGT();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { environmentId, cwd, repository, branch } = route.params;
  const [includeRemotes, setIncludeRemotes] = useState(true);
  const [limit, setLimit] = useState(COMMIT_GRAPH_INITIAL_LIMIT);
  const [selectedSha, setSelectedSha] = useState<string | null>(null);
  const nowMs = useNowMinuteMs();
  const graphRead = useCommitGraph({
    environmentId: EnvironmentId.make(environmentId),
    cwd,
    includeRemotes,
    limit,
  });
  const graph = graphRead.graph;
  const commits = graph?.commits ?? NO_COMMITS;
  const layout = useMemo(() => layoutGraph(commits), [commits]);
  const rows = useMemo(
    () => commits.map((commit, index) => ({ commit, row: layout.rows[index]! })),
    [commits, layout],
  );
  // The caller's branch only stands in until the graph answers; a detached head must not
  // keep showing it.
  const currentBranch = graph === null ? branch : graph.currentBranch;
  const commitCountLabel =
    graph?.truncated === true
      ? gt("{count, plural, one {at least {count} commit} other {at least {count} commits}}", {
          count: commits.length,
        })
      : gt("{count, plural, one {{count} commit} other {{count} commits}}", {
          count: commits.length,
        });
  const scopeOptions = [
    { value: "local" as const, label: gt("Local"), accessibilityLabel: gt("Local branches only") },
    {
      value: "remotes" as const,
      label: gt("Remotes"),
      accessibilityLabel: gt("Include remote branches"),
    },
  ];

  const footer =
    graphRead.error !== null || graph?.truncated === true ? (
      <>
        {graphRead.error !== null ? (
          <View className="gap-2 px-4 py-4">
            <Text textRole="footnote" className="text-danger-foreground">
              {graphRead.error}
            </Text>
            <Button
              label={gt("Try again")}
              size="compact"
              tone="secondary"
              onPress={graphRead.refresh}
            />
          </View>
        ) : null}
        {graph?.truncated === true ? (
          <RowPressable
            accessibilityRole="button"
            accessibilityLabel={gt("Load more commits")}
            disabled={graphRead.loadingMore}
            onPress={() => setLimit((current) => nextCommitGraphLimit(current))}
            className="flex-row items-center justify-center gap-2 bg-screen px-4 py-4"
          >
            {graphRead.loadingMore ? <AppActivityIndicator /> : null}
            <Text textRole="body" className="text-primary-text">
              {gt("Load more")}
            </Text>
          </RowPressable>
        ) : null}
      </>
    ) : null;

  return (
    <View className="flex-1 bg-screen">
      <AppBar
        title={currentBranch ?? gt("Detached HEAD")}
        subtitle={graph === null ? repository : `${repository} · ${commitCountLabel}`}
        onBack={() => navigation.goBack()}
        hideBottomBorder
        actions={[
          {
            accessibilityLabel: gt("Refresh history"),
            icon: "arrow.clockwise",
            disabled: graphRead.loading || graphRead.loadingMore,
            onPress: graphRead.refresh,
          },
        ]}
      />
      {graph === null ? (
        graphRead.error === null ? (
          <CommitGraphSkeleton />
        ) : (
          <View className="flex-1 items-center justify-center px-4">
            <EmptyState
              variant="plain"
              title={gt("Couldn't load history")}
              detail={graphRead.error}
              actionLabel={gt("Try again")}
              onAction={graphRead.refresh}
            />
          </View>
        )
      ) : (
        <>
          <View className="px-4 py-2">
            <SegmentedControl
              size="compact"
              options={scopeOptions}
              selected={includeRemotes ? "remotes" : "local"}
              onSelect={(scope: CommitGraphScope) => setIncludeRemotes(scope === "remotes")}
            />
          </View>
          <LegendList
            data={rows}
            extraData={{ selectedSha, currentBranch, laneCount: layout.laneCount, nowMs }}
            keyExtractor={(entry) => entry.commit.sha}
            estimatedItemSize={COMMIT_ROW_HEIGHT}
            recycleItems
            renderScrollComponent={NativeScrollView}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 18) + 24 }}
            renderItem={({ item }) => (
              <CommitGraphRow
                commit={item.commit}
                row={item.row}
                laneCount={layout.laneCount}
                currentBranch={currentBranch}
                nowMs={nowMs}
                selected={selectedSha === item.commit.sha}
                onPress={() =>
                  setSelectedSha((current) =>
                    current === item.commit.sha ? null : item.commit.sha,
                  )
                }
              />
            )}
            ListEmptyComponent={
              <View className="px-4 py-8">
                <EmptyState
                  variant="plain"
                  title={graph.isRepo ? gt("No commits yet") : gt("Not a git repository")}
                  detail={
                    graph.isRepo
                      ? gt("This repository has no commits on the loaded branches.")
                      : gt("This checkout is no longer a git repository.")
                  }
                />
              </View>
            }
            ListFooterComponent={footer}
          />
        </>
      )}
    </View>
  );
}
