import { SourceControlProviderKind } from "@t3tools/contracts";
import {
  defineSourceControl,
  isChangeRequestInProjectRepository,
  isChangeRequestOnProjectHost,
  projectChangeRequestHost,
} from "@t3tools/source-control-core/shared/definition";

const KIND = SourceControlProviderKind.make("gerrit");

// Gerrit serves any hostname, so a change request is recognised by its route rather than its
// domain: `/c/{project}/+/{number}`.
const CHANGE_REQUEST_PATH = /^\/c\/(.+?)\/\+\/(\d+)(?:\/|$)/u;

// An SSH remote names Gerrit by its review port, which is the only fixed part of a self-hosted
// install's address.
const SSH_REVIEW_PORT = /:\d+\//u;

const changeRequestHeadRef = (number: number) =>
  // Gerrit also accepts the shorthand `change/{number}`, which the server resolves to the newest
  // patch set, so a checkout does not need to know which one is current.
  `change/${number}`;

/**
 * Gerrit reads change requests over SSH, so nothing here names a web service or a CLI: the server
 * provider talks to `ssh` and the optional REST token. Kept in the shared registry so remotes,
 * links and terminology resolve the same way as the hosts that do have their own package.
 */
export const definition = defineSourceControl({
  kind: KIND,
  label: "Gerrit",
  pickerLabel: "Gerrit",
  icon: null,
  searchKeywords: ["gerrit", "change", "refs/changes", "review"],
  changeRequest: {
    shortLabel: "CL",
    shortLabelWithArticle: "a CL",
    singular: "change request",
    plural: "change requests",
  },
  repositoryPathHint: "project path",
  // A Gerrit host is whatever the operator runs; the review port is the only hint, and it is not
  // part of a web address.
  publicHost: null,
  publishDescription: "Your Gerrit host",
  publishHost: (signedInHost) => signedInHost ?? "your Gerrit host",
  newRepositoryOwner: () => null,
  defaultCloneTransport: "ssh",
  changeRequestUrl: ({ host, repository, number, webUrl }) => {
    if (webUrl) {
      try {
        const url = new URL(webUrl);
        url.pathname = `/c/${repository}/+/${number}`;
        url.search = "";
        url.hash = "";
        return url.toString();
      } catch {
        // Fall through to the host-only form.
      }
    }
    return `https://${host}/c/${repository}/+/${number}`;
  },
  // Gerrit's project path is the repository, and the port belongs to the host's identity.
  parseChangeRequestUrl: (url) => {
    const match = CHANGE_REQUEST_PATH.exec(url.pathname);
    if (!match?.[1] || !match[2]) return null;
    return {
      host: url.hostname.toLowerCase(),
      repository: match[1],
      number: Number(match[2]),
      authority: url.host.toLowerCase(),
      repositoryUrl: `${url.origin}/${match[1]}`,
    };
  },
  changeRequestUrlFromReferenceAutolink: () => null,
  changeRequestActions: new Set(["merge", "reopen", "close", "update-branch"] as const),
  checkoutCommand: ({ headBranch }) =>
    headBranch.startsWith("refs/changes/")
      ? `git fetch origin ${headBranch} && git checkout FETCH_HEAD`
      : `git fetch origin ${changeRequestHeadRef(0)} && git checkout FETCH_HEAD`,
  authorProfileUrl: () => null,
  reviewSummaryRequired: () => false,
  checkoutCommandArgument: () => null,
  isChangeRequestReference: () => false,
  checkoutChangeRequestHost: () => null,
  changeRequestHeadRef,
  recognizeRemote: ({ host, hostname, remoteUrl }) =>
    hostname.split(".").includes("gerrit") ||
    (remoteUrl.toLowerCase().startsWith("ssh://") && SSH_REVIEW_PORT.test(remoteUrl))
      ? {
          kind: KIND,
          name: "Gerrit",
          baseUrl: /^https?:/iu.test(remoteUrl) ? new URL(remoteUrl).origin : `https://${host}`,
        }
      : null,
  isChangeRequestInRepository: (identity, link) =>
    isChangeRequestInProjectRepository(
      projectChangeRequestHost(identity, KIND) as string,
      identity,
      link,
    ),
  canReadChangeRequestOnHost: (identity, link) =>
    isChangeRequestOnProjectHost(
      projectChangeRequestHost(identity, KIND) as string,
      identity,
      link,
    ),
});
