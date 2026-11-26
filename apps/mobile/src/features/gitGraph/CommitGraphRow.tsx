import type { GraphRow } from "@t3tools/client-runtime/gitGraph/graphLayout";
import type { VcsGraphCommit } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import { useGT, useMessages } from "gt-react-native";
import { useState } from "react";
import { Platform, View, type ColorValue, type LayoutChangeEvent } from "react-native";
import { Circle, Line, Path, Svg } from "react-native-svg";
import { useResolveClassNames } from "uniwind";

import { AppText as Text } from "../../components/ui/AppText";
import { RowPressable } from "../../components/ui/RowPressable";
import { relativeTime } from "../../lib/time";
import { formatMessageTimestamp } from "../threads/messageTimestamp";
import { commitRefBadges, shortCommitSha, type CommitRefBadge } from "./commitGraphPresentation";

export const COMMIT_ROW_HEIGHT = 76;

const LANE_WIDTH = 14;
const LANE_INSET = 9;
/** Beyond this the lane spacing tightens rather than the graph eating the row. */
const MAX_GRAPH_WIDTH = 84;

const LANE_COLORS = ["#4a7fd4", "#2f9e6e", "#c08a2e", "#c85a54", "#8f6bd1"] as const;

function LaneGraph(props: {
  readonly row: GraphRow;
  readonly laneCount: number;
  readonly height: number;
  readonly tip: boolean;
  readonly selected: boolean;
  readonly background: ColorValue;
}) {
  const { row, laneCount, height, tip, selected, background } = props;
  const lanes = Math.max(1, laneCount);
  const spacing = Math.min(LANE_WIDTH, (MAX_GRAPH_WIDTH - LANE_INSET * 2) / lanes);
  const width = LANE_INSET * 2 + lanes * spacing;
  const mid = height / 2;
  const x = (lane: number) => LANE_INSET + lane * spacing;
  const color = (lane: number) => LANE_COLORS[lane % LANE_COLORS.length]!;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} accessible={false}>
      {row.hasIncoming ? (
        <Line
          x1={x(row.lane)}
          y1={0}
          x2={x(row.lane)}
          y2={mid}
          stroke={color(row.lane)}
          strokeWidth={1.75}
          strokeLinecap="round"
          opacity={0.85}
        />
      ) : null}
      {row.through.map((lane) => (
        <Line
          key={`through-${lane}`}
          x1={x(lane)}
          y1={0}
          x2={x(lane)}
          y2={height}
          stroke={color(lane)}
          strokeWidth={1.75}
          strokeLinecap="round"
          opacity={0.6}
        />
      ))}
      {row.parentLanes.map((parent) => {
        const fromX = x(row.lane);
        const toX = x(parent.lane);
        return (
          <Path
            key={`parent-${parent.sha}`}
            d={
              fromX === toX
                ? `M ${fromX} ${mid} V ${height}`
                : `M ${fromX} ${mid} C ${fromX} ${mid + 9}, ${toX} ${height - 9}, ${toX} ${height}`
            }
            fill="none"
            stroke={color(parent.lane)}
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.85}
          />
        );
      })}
      <Circle
        cx={x(row.lane)}
        cy={mid}
        r={tip ? 4.5 : 3.5}
        fill={tip || selected ? color(row.lane) : background}
        stroke={color(row.lane)}
        strokeWidth={2}
      />
    </Svg>
  );
}

const BADGE_STYLES: Record<CommitRefBadge["kind"], { container: string; label: string }> = {
  head: { container: "border-primary bg-primary/15", label: "text-primary-text" },
  branch: { container: "border-primary bg-primary/15", label: "text-primary-text" },
  remote: { container: "border-border-subtle bg-subtle", label: "text-foreground-muted" },
  tag: { container: "border-warning-border bg-warning", label: "text-warning-foreground" },
};

function RefBadge(props: { readonly badge: CommitRefBadge }) {
  const style = BADGE_STYLES[props.badge.kind];
  return (
    <View
      className={`max-w-40 shrink flex-row items-center rounded border px-1 py-px ${style.container}`}
    >
      <Text
        textRole="footnote"
        className={`shrink ${style.label}`}
        numberOfLines={1}
        ellipsizeMode="middle"
      >
        {props.badge.name}
      </Text>
    </View>
  );
}

export function CommitGraphRow(props: {
  readonly commit: VcsGraphCommit;
  readonly row: GraphRow;
  readonly laneCount: number;
  readonly currentBranch: string | null;
  readonly nowMs: number;
  readonly selected: boolean;
  readonly onPress: () => void;
}) {
  const gt = useGT();
  const m = useMessages();
  const { commit, row, selected } = props;
  const [graphHeight, setGraphHeight] = useState(COMMIT_ROW_HEIGHT);
  const screen = useResolveClassNames("bg-screen");
  const ripple = useResolveClassNames("bg-subtle-strong");
  const onContentLayout = (event: LayoutChangeEvent) =>
    setGraphHeight(event.nativeEvent.layout.height);
  const authoredAt = DateTime.toDateUtc(commit.authoredAt).toISOString();
  const age = relativeTime(authoredAt, props.nowMs, m);
  const { badges, hidden } = commitRefBadges(commit.refs, props.currentBranch);
  const detailsBadges = commitRefBadges(
    commit.refs,
    props.currentBranch,
    commit.refs.length,
  ).badges;

  return (
    <>
      <RowPressable
        accessibilityRole="button"
        accessibilityLabel={`${commit.subject}, ${gt("Commit {sha}", {
          sha: shortCommitSha(commit.sha),
        })}, ${gt("Author: {author}", { author: commit.authorName })}, ${age}`}
        accessibilityState={{ selected }}
        onPress={props.onPress}
        android_ripple={{ color: ripple.backgroundColor }}
        unstable_pressDelay={Platform.OS === "android" ? 50 : undefined}
        className={selected ? "flex-row bg-primary/10" : "flex-row bg-screen"}
      >
        <View className="border-r border-separator">
          <LaneGraph
            row={row}
            laneCount={props.laneCount}
            height={graphHeight}
            tip={commit.refs.length > 0}
            selected={selected}
            background={screen.backgroundColor ?? "transparent"}
          />
        </View>
        <View
          className="min-w-0 flex-1 justify-center gap-1 border-b border-border-subtle px-3 py-2"
          onLayout={onContentLayout}
        >
          {badges.length > 0 ? (
            <View className="flex-row items-center gap-1 overflow-hidden">
              {badges.map((badge) => (
                <RefBadge key={badge.key} badge={badge} />
              ))}
              {hidden > 0 ? (
                <Text textRole="footnote" className="shrink-0 text-foreground-muted">
                  {gt("+{count}", { count: hidden })}
                </Text>
              ) : null}
            </View>
          ) : null}
          <Text textRole="body" className="text-foreground" numberOfLines={1}>
            {commit.subject}
          </Text>
          <Text textRole="footnote" className="text-foreground-muted" numberOfLines={1}>
            {shortCommitSha(commit.sha)}
            {commit.authorName.length > 0 ? ` · ${commit.authorName}` : ""}
            {` · ${age}`}
          </Text>
        </View>
      </RowPressable>
      {selected ? (
        <View className="gap-1.5 border-b border-border-subtle bg-card-alt px-4 py-3">
          <Text selectable textRole="footnote" className="font-mono text-foreground-muted">
            {commit.sha}
          </Text>
          <Text textRole="body" className="text-foreground">
            {commit.subject}
          </Text>
          <Text textRole="footnote" className="text-foreground-muted">
            {gt("Authored by {author} on {date}", {
              author: commit.authorName,
              date: formatMessageTimestamp(authoredAt),
            })}
          </Text>
          {detailsBadges.length > 0 ? (
            <View className="flex-row flex-wrap items-center gap-1 pt-1">
              {detailsBadges.map((badge) => (
                <RefBadge key={badge.key} badge={badge} />
              ))}
            </View>
          ) : null}
        </View>
      ) : null}
    </>
  );
}
