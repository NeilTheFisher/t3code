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

  const modalityLabel = (modality: string, direction: "input" | "output") =>
    `${modality === "pdf" ? "PDF" : `${modality[0]?.toUpperCase()}${modality.slice(1)}`} ${direction}`;

  for (const modality of capabilities?.inputModalities ?? []) {
    if (modality !== "text") labels.push(modalityLabel(modality, "input"));
  }
  for (const modality of capabilities?.outputModalities ?? []) {
    if (modality !== "text") labels.push(modalityLabel(modality, "output"));
  }
  if (capabilities?.supportsAttachments) labels.push("Attachments");
  if (capabilities?.supportsToolCalls) labels.push("Tool calling");

  if (descriptors.some((descriptor) => descriptor.id === "fastMode")) {
    labels.push("Fast mode");
  }
  if (descriptors.some((descriptor) => descriptor.id === "thinking")) {
    labels.push("Thinking");
  }
  if (
    capabilities?.supportsReasoning !== true &&
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
  if (capabilities?.supportsReasoning) labels.push("Reasoning");

  return labels;
}
