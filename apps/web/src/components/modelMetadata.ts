import type { ServerProviderModel } from "@t3tools/contracts";

export function formatModelContextWindowTokens(
  tokens: number,
  locales?: Intl.LocalesArgument,
): string {
  return new Intl.NumberFormat(locales).format(tokens);
}

export function getModelCapabilityLabels(
  capabilities: ServerProviderModel["capabilities"],
): string[] {
  const descriptors = capabilities?.optionDescriptors ?? [];
  const labels: string[] = [];

  if (descriptors.some((descriptor) => descriptor.id === "fastMode")) {
    labels.push("Fast mode");
  }
  if (descriptors.some((descriptor) => descriptor.id === "thinking")) {
    labels.push("Thinking");
  }
  if (
    descriptors.some(
      (descriptor) =>
        descriptor.type === "select" &&
        (descriptor.id === "reasoningEffort" ||
          descriptor.id === "effort" ||
          descriptor.id === "reasoning" ||
          descriptor.id === "variant"),
    )
  ) {
    labels.push("Reasoning");
  }

  return labels;
}
