import { describe, expect, it } from "@effect/vitest";

import {
  COMPOSER_COMMIT_DRAG_TYPE,
  COMPOSER_MENTION_DRAG_TYPE,
  type ComposerMentionDropHost,
  encodeCommitDragPayload,
  makeComposerMentionDragHandlers,
} from "./composerMentionDrag.ts";

const makeDragEvent = (options?: {
  mention?: string;
  types?: ReadonlyArray<string>;
  format?: string;
}) => {
  const mention = options?.mention ?? "[index.md](docs/index.md)";
  const format = options?.format ?? COMPOSER_MENTION_DRAG_TYPE;
  const calls: Array<string> = [];
  const event = {
    dataTransfer: {
      types: options?.types ?? [format, "text/plain"],
      getData: (requested: string) => (requested === format ? mention : ""),
      dropEffect: "none",
    },
    nativeEvent: {
      stopPropagation: () => void calls.push("nativeStopPropagation"),
    },
    preventDefault: () => void calls.push("preventDefault"),
    stopPropagation: () => void calls.push("stopPropagation"),
  };
  return { event, calls };
};

const makeHost = (insertResult = true) => {
  const log: Array<string> = [];
  const host: ComposerMentionDropHost = {
    insertMentionAtEnd: (text) => {
      log.push(`insert:${text}`);
      return insertResult;
    },
    insertPullRequestAtEnd: (pullRequest) => {
      log.push(`pr:${pullRequest.number}`);
      return insertResult;
    },
    insertCommitAtEnd: (commit) => {
      log.push(`commit:${commit.sha}`);
      return insertResult;
    },
    setDragActive: (active) => void log.push(`active:${active}`),
    onInsertRejected: () => void log.push("rejected"),
  };
  return { host, log };
};

describe("makeComposerMentionDragHandlers", () => {
  it("leaves drags without the mention payload alone", () => {
    const { host, log } = makeHost();
    const handlers = makeComposerMentionDragHandlers(host);
    const { event, calls } = makeDragEvent({ types: ["Files"] });
    handlers.onDragEnter(event);
    handlers.onDragOver(event);
    handlers.onDrop(event);
    expect(calls).toEqual([]);
    expect(log).toEqual([]);
  });

  it("stops the native event too, not just the synthetic one", () => {
    const { host } = makeHost();
    const handlers = makeComposerMentionDragHandlers(host);
    const { event, calls } = makeDragEvent();
    handlers.onDrop(event);
    expect(calls).toContain("preventDefault");
    expect(calls).toContain("stopPropagation");
    expect(calls).toContain("nativeStopPropagation");
  });

  it('answers dragover with the "move" effect the tree allows', () => {
    const { host } = makeHost();
    const handlers = makeComposerMentionDragHandlers(host);
    const { event } = makeDragEvent();
    handlers.onDragOver(event);
    expect(event.dataTransfer.dropEffect).toBe("move");
  });

  it("drops a dragged commit as a commit chip", () => {
    const { host, log } = makeHost();
    const handlers = makeComposerMentionDragHandlers(host);
    const payload = encodeCommitDragPayload({
      sha: "0123456789abcdef0123456789abcdef01234567",
      subject: "Add commit chips",
      repositoryPath: "/work/repo",
      threadIds: [],
    });
    const calls: Array<string> = [];
    const event = {
      dataTransfer: {
        types: [COMPOSER_COMMIT_DRAG_TYPE],
        getData: (requested: string) => (requested === COMPOSER_COMMIT_DRAG_TYPE ? payload : ""),
        dropEffect: "none",
      },
      nativeEvent: { stopPropagation: () => void calls.push("nativeStopPropagation") },
      preventDefault: () => void calls.push("preventDefault"),
      stopPropagation: () => void calls.push("stopPropagation"),
    };
    handlers.onDrop(event);
    expect(log).toEqual(["active:false", "commit:0123456789abcdef0123456789abcdef01234567"]);
  });
});
