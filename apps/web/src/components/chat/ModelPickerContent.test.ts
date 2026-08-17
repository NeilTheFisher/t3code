import { ProviderDriverKind, ProviderInstanceId } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { buildModelPickerItems } from "./ModelPickerContent";

describe("buildModelPickerItems", () => {
  it("preserves provider model capabilities for the picker row tooltip", () => {
    const instanceId = ProviderInstanceId.make("opencode");
    const capabilities = {
      optionDescriptors: [],
      inputModalities: ["text", "image", "video"] as const,
      supportsReasoning: true,
      supportsToolCalls: true,
    };

    const items = buildModelPickerItems(
      new Map([
        [
          instanceId,
          [
            {
              slug: "opencode-go/qwen3.7-plus",
              name: "Qwen3.7 Plus",
              capabilities,
            },
          ],
        ],
      ]),
      new Map([
        [
          instanceId,
          {
            driverKind: ProviderDriverKind.make("opencode"),
            displayName: "OpenCode",
          },
        ],
      ]),
      new Set([instanceId]),
    );

    expect(items[0]?.capabilities).toEqual(capabilities);
  });
});
