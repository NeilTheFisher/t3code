import type { RepositoryIdentity, SourceControlProviderInfo } from "@t3tools/contracts";
import { SourceControlProviderKind } from "@t3tools/contracts";

const SCP_SSH_REMOTE_PATTERN = /^[a-zA-Z0-9._-]+@([^:/]+):/;

export function isSshRemoteUrl(remoteUrl: string): boolean {
  const trimmed = remoteUrl.trim();
  return SCP_SSH_REMOTE_PATTERN.test(trimmed) || trimmed.toLowerCase().startsWith("ssh://");
}

function parseRemoteHost(remoteUrl: string): string | null {
  const trimmed = remoteUrl.trim();
  if (trimmed.length === 0) {
    return null;
  }

  const scpMatch = SCP_SSH_REMOTE_PATTERN.exec(trimmed);
  if (scpMatch?.[1]) {
    return scpMatch[1].toLowerCase();
  }

  try {
    const url = new URL(trimmed);
    return (url.protocol === "ssh:" ? url.hostname : url.host).toLowerCase();
  } catch {
    return null;
  }
}

function parseHostName(host: string): string {
  try {
    return new URL(`https://${host}`).hostname.toLowerCase();
  } catch {
    return host.replace(/:\d+$/u, "").toLowerCase();
  }
}

function toBaseUrl(host: string): string {
  return `https://${host}`;
}

function hasDnsLabel(host: string, label: string): boolean {
  return host.split(".").includes(label);
}

/** `*.ghe.com` is GitHub Enterprise Cloud with data residency, one subdomain per enterprise. */
function isGitHubHost(host: string): boolean {
  return host === "github.com" || host.endsWith(".ghe.com") || hasDnsLabel(host, "github");
}

function isGitLabHost(host: string): boolean {
  return host === "gitlab.com" || hasDnsLabel(host, "gitlab");
}

function isAzureDevOpsHost(host: string): boolean {
  // `ssh.dev.azure.com` is the default Azure DevOps SSH clone host
  // (git@ssh.dev.azure.com:v3/org/project/repo), so match any `*.dev.azure.com`
  // subdomain, not just the bare `dev.azure.com`. Legacy hosts stay under
  // `.visualstudio.com` (including `vs-ssh.visualstudio.com`).
  return (
    host === "dev.azure.com" ||
    host.endsWith(".dev.azure.com") ||
    host.endsWith(".visualstudio.com")
  );
}

function isGitCafeHost(host: string): boolean {
  return host === "git.cafe" || host === "staging.git.cafe";
}

function isBitbucketHost(host: string): boolean {
  return host === "bitbucket.org" || hasDnsLabel(host, "bitbucket");
}

function isGerritHost(host: string): boolean {
  return hasDnsLabel(host, "gerrit");
}

/**
 * Gerrit's own SSH port. A remote that carries it — `ssh://user@host:29418/project` — is on a
 * Gerrit instance even when the hostname says nothing about it, which is the norm on an internal
 * review server.
 */
function isGerritRemote(remoteUrl: string): boolean {
  const trimmed = remoteUrl.trim();
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)) {
    try {
      return new URL(trimmed).port === "29418";
    } catch {
      // Fall through to the scp-style check.
    }
  }
  const scp = /^[^@\s]+@[^:\s]+:(\d+)\//.exec(trimmed);
  return scp?.[1] === "29418";
}

export function detectSourceControlProviderFromRemoteUrl(
  remoteUrl: string,
): SourceControlProviderInfo | null {
  const host = parseRemoteHost(remoteUrl);
  if (!host) {
    return null;
  }
  const hostname = parseHostName(host);

  if (isGitCafeHost(hostname)) {
    return {
      kind: SourceControlProviderKind.make("gitcafe"),
      name: "GitCafe",
      baseUrl: toBaseUrl(hostname),
    };
  }

  if (
    hostname === "codeberg.org" ||
    hasDnsLabel(hostname, "forgejo") ||
    hasDnsLabel(hostname, "gitea")
  ) {
    return {
      kind: SourceControlProviderKind.make("forgejo"),
      name: "Forgejo",
      baseUrl: /^https?:/iu.test(remoteUrl.trim())
        ? new URL(remoteUrl.trim()).origin
        : toBaseUrl(host),
    };
  }

  if (isGitHubHost(hostname)) {
    return {
      kind: SourceControlProviderKind.make("github"),
      name: hostname === "github.com" ? "GitHub" : "GitHub Self-Hosted",
      baseUrl: toBaseUrl(host),
    };
  }

  if (isGitLabHost(hostname)) {
    return {
      kind: SourceControlProviderKind.make("gitlab"),
      name: hostname === "gitlab.com" ? "GitLab" : "GitLab Self-Hosted",
      baseUrl: toBaseUrl(host),
    };
  }

  if (isAzureDevOpsHost(hostname)) {
    return {
      kind: SourceControlProviderKind.make("azure-devops"),
      name: "Azure DevOps",
      baseUrl: toBaseUrl(host),
    };
  }

  if (isBitbucketHost(hostname)) {
    return {
      kind: SourceControlProviderKind.make("bitbucket"),
      name: hostname === "bitbucket.org" ? "Bitbucket" : "Bitbucket Self-Hosted",
      baseUrl: toBaseUrl(host),
    };
  }

  if (isGerritHost(hostname) || isGerritRemote(remoteUrl)) {
    // Gerrit is recognised by a `gerrit` DNS label or its conventional SSH port. An HTTP(S)
    // remote keeps its own origin, because a self-hosted install may serve the review UI on a
    // non-default port; an SSH remote's port is not the web port, so it is dropped.
    const trimmed = remoteUrl.trim();
    const baseUrl = /^https?:/iu.test(trimmed)
      ? new URL(trimmed).origin
      : toBaseUrl(parseHostName(host));
    return {
      kind: SourceControlProviderKind.make("gerrit"),
      name: "Gerrit",
      baseUrl,
    };
  }

  return {
    kind: SourceControlProviderKind.make("unknown"),
    name: host,
    baseUrl: toBaseUrl(host),
  };
}

/**
 * Azure DevOps is the exception: `az repos pr list --repository` takes a repository name, and
 * takes the organisation and project from the checkout it detects — so the recorded
 * `org/project/_git/repo` path is refused outright and the whole repository reads as
 * unavailable. Its name is the last segment, which is what this hands over.
 */
export function sourceControlRepositorySelector(
  identity:
    | Pick<RepositoryIdentity, "provider" | "displayName" | "owner" | "name">
    | null
    | undefined,
): string | null {
  if (!identity) return null;
  if (identity.provider === "azure-devops") {
    const segments = (identity.displayName ?? "").split("/").filter((part) => part !== "_git");
    return identity.name || segments.at(-1) || null;
  }
  if (identity.displayName) return identity.displayName;
  return identity.owner && identity.name ? `${identity.owner}/${identity.name}` : null;
}

export function canonicalRepositoryKey(key: string): string {
  return key
    .replace(
      /^(?:ssh\.dev\.azure\.com|vs-ssh\.visualstudio\.com)\/v3\/([^/]+)\/([^/]+)\/([^/]+)$/u,
      "dev.azure.com/$1/$2/_git/$3",
    )
    .replace(
      /^([^.]+)\.visualstudio\.com\/(?:defaultcollection\/)?([^/]+)\/_git\/([^/]+)$/u,
      "dev.azure.com/$1/$2/_git/$3",
    );
}
