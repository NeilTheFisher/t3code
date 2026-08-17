import { describe, expect, it } from "vite-plus/test";

import { getModelCapabilityLabels } from "./modelMetadata";

describe("getModelCapabilityLabels", () => {
  it("presents the model options exposed by provider metadata", () => {
    expect(
      getModelCapabilityLabels({
        optionDescriptors: [
          { id: "fastMode", type: "boolean", label: "Fast mode" },
          { id: "thinking", type: "boolean", label: "Thinking" },
          {
            id: "reasoningEffort",
            type: "select",
            label: "Reasoning effort",
            options: [],
          },
        ],
      }),
    ).toEqual(["Fast mode", "Thinking", "Reasoning"]);
  });

  it("presents advertised OpenCode model capabilities", () => {
    expect(
      getModelCapabilityLabels({
        optionDescriptors: [],
        inputModalities: ["text", "image", "pdf"],
        outputModalities: ["text"],
        supportsReasoning: true,
        supportsToolCalls: true,
        supportsAttachments: true,
      }),
    ).toEqual(["Image input", "PDF input", "Attachments", "Tool calling", "Reasoning"]);
  });
});
