import { Mh as e, Op as t, Rs as n, Yn as r, c as i, r as a, wp as o } from "./utils-CPoejuy5.js";
import { L as s } from "./runtime-CY2dlMEg.js";
import { n as c } from "./settingsScope-ohK4TuKq.js";
import { a as l } from "./KeybindingsSettings.logic-B3BUIgft.js";
var u = {
  "/settings/diagnostics": `Diagnostics`,
  "/settings/projects": `Project`,
  "/settings/general": `General`,
  "/settings/appearance": `Appearance`,
  "/settings/keybindings": `Keybindings`,
  "/settings/snap-shot": `SnapShots`,
  "/settings/providers": `Providers`,
  "/settings/integrations": `Integrations`,
  "/settings/scheduled-tasks": `Scheduled Tasks`,
  "/settings/source-control": `Source Control`,
  "/settings/storage": `Storage`,
  "/settings/connections": `Connections`,
  "/settings/beta": `Beta`,
  "/settings/archived": `Archive`,
  "/settings/voice": `Voice`,
};
function d(e) {
  return `keybinding-${e}`;
}
var f = e
  .toSorted((e, t) => l(e).localeCompare(l(t)))
  .map((e) => {
    let t = o.filter((t) => t.command === e).map((e) => e.key);
    return {
      id: d(e),
      title: l(e),
      to: `/settings/keybindings`,
      searchTerms: [e, ...t],
      secondary: !0,
      ...(t.length === 0 ? { targetId: `keybindings` } : {}),
    };
  });
function p(e) {
  return `source-control-host-${e}`;
}
function m(e) {
  return e.flatMap((e) => {
    if (!e.settings) return [];
    let t = [e.label, ...(e.searchKeywords ?? [])].join(` `),
      { credentials: n } = e;
    return [
      {
        id: p(e.kind),
        title: n ? `${e.label} accounts and token` : `${e.label} credentials`,
        to: `/settings/source-control`,
        searchTerms: [
          n
            ? `${t} ${n.cliName} account login user host switch multiple accounts disable sign in token personal access token pat api key credential`
            : `${t} ${Object.keys(e.settings.fields).join(` `)} token credentials sign in`,
        ],
        environmentOnly: !0,
        scope: `environment-defaults`,
      },
    ];
  });
}
var h = n.definitions.map((e) => e.label).join(` `),
  g = n.definitions.flatMap((e) => [e.label, ...(e.searchKeywords ?? [])]).join(` `),
  _ = [
    {
      id: `storage-worktree-keep-when`,
      targetId: `storage-worktrees`,
      title: `Keep worktrees with local changes`,
      to: `/settings/storage`,
      scope: `project-defaults`,
      searchTerms: [
        `any local files uncommitted changes edited tracked files ignored env build output cleanup`,
      ],
    },
    {
      id: `storage-delete-now`,
      title: `Delete now`,
      to: `/settings/storage`,
      scope: `environment-defaults`,
      searchTerms: [`storage cleanup run now results report removed kept failed`],
    },
    {
      id: `storage-worktrees`,
      title: `Worktree cleanup`,
      to: `/settings/storage`,
      scope: `project-defaults`,
      searchTerms: [
        `disk storage delete deleted archived threads old inactive merged unchanged worktrees retention days project inherit off custom`,
      ],
    },
    {
      id: `storage-worktrees-location`,
      title: `Worktree location`,
      to: `/settings/storage`,
      scope: `environment-defaults`,
      searchTerms: [`worktree location folder directory path drive external disk`],
    },
    {
      id: `storage-artifacts`,
      title: `Artifacts and logs`,
      to: `/settings/storage`,
      scope: `environment-defaults`,
      searchTerms: [`disk storage browser screenshots captures rotated logs cleanup retention`],
    },
    {
      id: `project-defaults`,
      title: `Project defaults and overrides`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`model workspace environments projects inheritance checkout`],
    },
    {
      id: `project-overview`,
      title: `Project overview`,
      to: `/settings/projects`,
      searchTerms: [`name icon emoji image checkout remove delete`],
    },
    {
      id: `default-model`,
      title: `Default model`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`new thread project provider reasoning effort`],
    },
    {
      id: `default-permissions`,
      title: `Permissions`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [
        `new thread default runtime mode supervised approvals auto accept edits full access`,
      ],
    },
    {
      id: `color-scheme`,
      title: `Color scheme`,
      to: `/settings/appearance`,
      searchTerms: [`appearance light dark system mode`],
      targetId: `appearance`,
    },
    {
      id: `theme`,
      title: `Themes`,
      to: `/settings/appearance`,
      searchTerms: [`appearance colors palette custom import`],
      targetId: `appearance`,
    },
    {
      id: `setting-appearance-contrast`,
      title: `Contrast`,
      to: `/settings/appearance`,
      searchTerms: [`colors borders interface`],
    },
    {
      id: `setting-glass-opacity`,
      title: `Glass opacity`,
      to: `/settings/appearance`,
      searchTerms: [`transparent transparency solid menus dialogs composer`],
    },
    {
      id: `diff-color-scheme`,
      title: `Diff colors`,
      to: `/settings/appearance`,
      searchTerms: [`red green blue orange additions deletions changes counts palette colorblind`],
    },
    {
      id: `chat-width`,
      title: `Chat width`,
      to: `/settings/appearance`,
      searchTerms: [`wide full width column layout messages composer monitor`],
    },
    {
      id: `sidebar-project-icon-colors`,
      title: `Colored project icons`,
      to: `/settings/appearance`,
      searchTerms: [`sidebar favicon logo grayscale gray color`],
      redesignOnly: !0,
    },
    {
      id: `math-rendering`,
      title: `Render math`,
      to: `/settings/appearance`,
      searchTerms: [`latex tex katex equations formulas markdown`],
    },
    { id: `panel-animations`, title: `Panel animations`, to: `/settings/appearance` },
    {
      id: `environment-identification`,
      title: `Environment identification`,
      to: `/settings/appearance`,
      searchTerms: [`dev nightly artwork pill label hide none`],
      targetId: `appearance-interface`,
    },
    {
      id: `interface-font`,
      title: `Interface font`,
      to: `/settings/appearance`,
      searchTerms: [`typography family size system sans`],
    },
    {
      id: `prompt-font`,
      title: `Prompt font`,
      to: `/settings/appearance`,
      searchTerms: [`typography family size composer input`],
    },
    {
      id: `code-font`,
      title: `Code font`,
      to: `/settings/appearance`,
      searchTerms: [`typography family size monospace code blocks diffs file previews`],
    },
    {
      id: `terminal-font`,
      title: `Terminal font`,
      to: `/settings/appearance`,
      searchTerms: [`typography family size monospace output`],
    },
    {
      id: `font-smoothing`,
      title: `Font smoothing`,
      to: `/settings/appearance`,
      searchTerms: [`typography text grayscale anti aliasing macos thin`],
      macOnly: !0,
    },
    {
      id: `word-wrap`,
      title: `Word wrap`,
      to: `/settings/appearance`,
      searchTerms: [`long lines code blocks tables diffs file previews`],
    },
    { id: `composer-context`, title: `Composer context`, to: `/settings/appearance` },
    {
      id: `project-grouping`,
      title: `Project grouping`,
      to: `/settings/general`,
      searchTerms: [`combine matching repositories environments sidebar`],
    },
    {
      id: `project-order`,
      title: `Project order`,
      to: `/settings/general`,
      searchTerms: [`sort projects sidebar manual created recent`],
    },
    {
      id: `snooze-limited-threads`,
      title: `Snooze until limits reset`,
      to: `/settings/general`,
      searchTerms: [`usage quota rate limit reset wake recover continue`],
    },
    {
      id: `auto-resume-limited-threads`,
      title: `Resume after usage limits`,
      to: `/settings/general`,
      searchTerms: [`usage quota rate limit reset recover continue`],
    },
    {
      id: `new-design`,
      title: `New design`,
      to: `/settings/beta`,
      searchTerms: [`beta redesign look style sidebar composer gray quieter classic`],
    },
    {
      id: `working-shelf`,
      title: `Working section`,
      to: `/settings/beta`,
      searchTerms: [`beta hide fold running monitoring threads inbox sidebar shelf`],
    },
    {
      id: `guest-links`,
      title: `Guest links`,
      to: `/settings/beta`,
      scope: `environment`,
      searchTerms: [`beta share guest invite link teammate watch t3 connect tunnel`],
    },
    {
      id: `thread-workspaces`,
      title: `Thread workspaces (beta)`,
      to: `/settings/general`,
      searchTerms: [
        `workspace group threads personal work office sidebar footer strip drag organize context`,
      ],
    },
    {
      id: `auto-settle-inactive-threads`,
      title: `Auto-settle inactive threads`,
      to: `/settings/general`,
      searchTerms: [`sidebar inactivity days no activity automatically`],
      requiresThreadAutoSettlement: !0,
      scope: `project-defaults`,
    },
    {
      id: `compact-idle-threads`,
      title: `Compact idle threads`,
      to: `/settings/general`,
      scope: `environment-defaults`,
      searchTerms: [`claude context compaction idle cache tokens usage summary resume`],
    },
    {
      id: `auto-settle-merged-threads`,
      title: `Auto-settle merged threads`,
      to: `/settings/general`,
      searchTerms: [`pull request merge closed automatically sidebar`],
      requiresThreadAutoSettlement: !0,
      scope: `project-defaults`,
    },
    {
      id: `days-before-auto-settle`,
      title: `Days of inactivity before auto-settle`,
      to: `/settings/general`,
      targetId: `auto-settle-inactive-threads`,
      searchTerms: [`thread timeout activity sidebar`],
      requiresThreadAutoSettlement: !0,
      scope: `project-defaults`,
    },
    {
      id: `thread-notifications`,
      title: `Thread notifications`,
      to: `/settings/general`,
      searchTerms: [`notification sound alert completion input approval desktop`],
    },
    {
      id: `in-app-notifications`,
      title: `In-app notifications`,
      to: `/settings/general`,
      searchTerms: [`notification toast popup completion input approval failure`],
    },
    {
      id: `time-format`,
      title: `Time format`,
      to: `/settings/general`,
      searchTerms: [`timestamp clock locale system browser os 12 hour 24 hour`],
    },
    {
      id: `response-streaming`,
      title: `Response streaming`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`output token paragraph buffered wait turn legacy`],
    },
    {
      id: `hide-whitespace-changes`,
      title: `Hide whitespace changes`,
      to: `/settings/general`,
      searchTerms: [`diff ignore spaces edits default`],
    },
    {
      id: `default-diff-file-state`,
      title: `Default diff file state`,
      to: `/settings/general`,
      searchTerms: [`collapsed expanded collapse expand files pull request pr code tab`],
    },
    {
      id: `diff-layout`,
      title: `Diff layout`,
      to: `/settings/general`,
      searchTerms: [`stacked split side by side unified inline view`],
    },
    {
      id: `proactive-panels`,
      title: `Proactive panels`,
      to: `/settings/general`,
      searchTerms: [`automatically open diff pull request pr right panel agent completion`],
    },
    {
      id: `skills-in-slash-menu`,
      title: `Show skills in slash menu`,
      to: `/settings/general`,
      searchTerms: [`command menu dollar $ slash /`],
    },
    {
      id: `composer-rich-text`,
      title: `Rich text composer`,
      to: `/settings/general`,
      searchTerms: [`composer rich text tiptap bold italic markdown styled wysiwyg`],
    },
    {
      id: `composer-collapse`,
      title: `Collapse composer on scroll`,
      to: `/settings/general`,
      searchTerms: [`composer rest resting scroll wheel conversation timeline shrink minimize`],
    },
    {
      id: `send-shortcut`,
      title: `Send shortcut`,
      to: `/settings/general`,
      searchTerms: [`enter return command ctrl multiline prompt new line composer`],
    },
    {
      id: `follow-up-behavior`,
      title: `Follow-up behavior`,
      to: `/settings/general`,
      searchTerms: [`queue steer running turn send default behavior composer`],
    },
    {
      id: `provider-update-checks`,
      title: `Provider update checks`,
      to: `/settings/general`,
      searchTerms: [`installed cli versions newer available codex claude cursor grok opencode`],
      scope: `environment-defaults`,
    },
    {
      id: `continue-threads-after-server-update`,
      title: `Continue threads after restarts`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [
        `resume running active interrupted work restart reboot machine crash desktop update automatically`,
      ],
    },
    {
      id: `background-activity`,
      title: `Background activity`,
      to: `/settings/general`,
      scope: `environment-defaults`,
      searchTerms: [
        `balanced performance battery saver advanced git fetch provider health refresh host power monitor idle policy`,
      ],
    },
    {
      id: `new-threads`,
      title: `New threads`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`default workspace mode draft local worktree`],
    },
    {
      id: `worktree-submodules`,
      title: `Submodules`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`git submodule init recursive top-level none worktree t3.json`],
    },
    {
      id: `start-from-origin`,
      title: `Start from remote`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`new worktrees start remote origin latest fetched branch local`],
    },
    {
      id: `add-project-starts-in`,
      title: `Add project starts in`,
      to: `/settings/general`,
      scope: `environment-defaults`,
      searchTerms: [`base directory folder browser path home`],
    },
    {
      id: `unpin-confirmation`,
      title: `Unpin confirmation`,
      to: `/settings/general`,
      searchTerms: [`ask before thread pinned section`],
    },
    {
      id: `archive-confirmation`,
      title: `Archive confirmation`,
      to: `/settings/general`,
      searchTerms: [`ask before thread second click inline action`],
    },
    {
      id: `delete-confirmation`,
      title: `Delete confirmation`,
      to: `/settings/general`,
      searchTerms: [`ask before thread chat history`],
    },
    {
      id: `quit-confirmation`,
      title: `Quit shortcut`,
      to: `/settings/general`,
      searchTerms: [`confirmation desktop app exit direct hold double click press twice`],
      desktopOnly: !0,
    },
    {
      id: `text-generation-model`,
      title: `Text generation model`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`generated thread titles source control content default provider`],
    },
    {
      id: `thread-title-instructions`,
      title: `Thread title instructions`,
      to: `/settings/general`,
      scope: `project-defaults`,
      searchTerms: [`generated thread titles prompt custom style naming rename regenerate`],
    },
    {
      id: `app-version`,
      title: `Version`,
      to: `/settings/general`,
      searchTerms: [`about check for updates download install upgrade release`],
    },
    {
      id: `update-track`,
      title: `Update track`,
      to: `/settings/general`,
      searchTerms: [`release channel stable latest nightly prerelease`],
      releaseChannelOnly: !0,
    },
    {
      id: `cli-command`,
      title: `t3 command`,
      to: `/settings/general`,
      searchTerms: [`cli terminal shell path install command line`],
      desktopOnly: !0,
    },
    {
      id: `mobile-app`,
      title: `Mobile app`,
      to: `/settings/general`,
      searchTerms: [`phone tablet iPhone iPad iOS Android App Store Google Play QR`],
    },
    {
      id: `privacy-policy`,
      title: `Privacy policy`,
      to: `/settings/general`,
      searchTerms: [`telemetry analytics usage data tracking legal opt out`],
    },
    {
      id: `telemetry-export`,
      title: `OpenTelemetry export`,
      to: `/settings/diagnostics`,
      targetId: `telemetry-export`,
      scope: `environment`,
      searchTerms: [`OTel OTLP telemetry export endpoints logs traces metrics Grafana`],
    },
    {
      id: `diagnostics`,
      title: `Diagnostics`,
      to: `/settings/general`,
      searchTerms: [`logs traces processes resource history failures spans cpu memory`],
    },
    { id: `open-source-licenses`, title: `Open source licenses`, to: `/settings/general` },
    {
      id: `legacy-plan-mode`,
      title: `Plan mode (legacy)`,
      to: `/settings/general`,
      searchTerms: [`build plan composer old`],
    },
    {
      id: `legacy-context-window-indicator`,
      title: `Context window indicator (legacy)`,
      to: `/settings/general`,
      searchTerms: [`composer meter usage tokens circle old`],
    },
    {
      id: `legacy-sidebar`,
      title: `Sidebar (legacy)`,
      to: `/settings/general`,
      searchTerms: [`project thread tree old flat list`],
    },
    {
      id: `keybindings`,
      title: `Keybindings`,
      to: `/settings/keybindings`,
      searchTerms: [`keyboard shortcuts hotkeys commands bindings json`],
    },
    ...f,
    {
      id: `snap-shot-enabled`,
      title: `SnapShots`,
      searchTerms: [`window capture screenshot`],
      to: `/settings/snap-shot`,
    },
    {
      id: `snap-shot-accessibility`,
      title: `Include app text`,
      to: `/settings/snap-shot`,
      targetId: `snap-shot-enabled`,
      searchTerms: [
        `capture accessibility data text UI structure elements privacy omit agent context`,
      ],
    },
    {
      id: `snap-shot-shortcut`,
      title: `Capture shortcut`,
      to: `/settings/snap-shot`,
      targetId: `snap-shot-enabled`,
    },
    {
      id: `snap-shot-sound`,
      title: `Capture sound`,
      to: `/settings/snap-shot`,
      targetId: `snap-shot-enabled`,
    },
    {
      id: `snap-shot-flash`,
      title: `Capture flash`,
      to: `/settings/snap-shot`,
      targetId: `snap-shot-enabled`,
    },
    {
      id: `snap-shot-animations`,
      title: `Capture animations`,
      to: `/settings/snap-shot`,
      targetId: `snap-shot-enabled`,
    },
    {
      id: `providers`,
      title: `Providers`,
      to: `/settings/providers`,
      searchTerms: [
        `agents cli codex claude cursor grok opencode antigravity google sign in sign out install subscription instances authentication api key models configuration binary path config directory endpoint arguments environment variables display name accent color custom favorite hidden auto compact`,
      ],
    },
    {
      id: `usage-providers`,
      title: `Usage providers`,
      to: `/settings/providers`,
      searchTerms: [
        `usage sources CLIProxyAPI CLI proxy hub quota subscription limits management key add remove`,
      ],
      providerSettingsOnly: !0,
    },
    {
      id: `cursor-keychain-usage`,
      title: `Cursor account usage`,
      to: `/settings/providers`,
      searchTerms: [`cursor macOS keychain usage tokens cost limits permission`],
      providerSettingsOnly: !0,
      macProviderSettingsOnly: !0,
    },
    {
      id: `provider-health-check-interval`,
      title: `Health check interval`,
      to: `/settings/providers`,
      searchTerms: [
        `refresh availability versions auth state models background probes seconds off`,
      ],
      providerSettingsOnly: !0,
    },
    {
      id: `agent-browser-access`,
      title: `Agent browser access`,
      to: `/settings/integrations`,
      scope: `project-defaults`,
      searchTerms: [`allow disable enable open drive preview tools sessions project override`],
    },
    {
      id: `device-hosts`,
      title: `Device hosts`,
      to: `/settings/integrations`,
      searchTerms: [`ssh remote simulator emulator ios android mac mini identity key connection`],
    },
    {
      id: `agent-device-access`,
      title: `Agent device access`,
      to: `/settings/integrations`,
      targetId: `devices`,
      searchTerms: [`allow simulator emulator ios android drive tools sessions`],
    },
    {
      id: `device-hub`,
      title: `Device hub`,
      to: `/settings/integrations`,
      targetId: `devices`,
      searchTerms: [`simulator emulator ios android install start`],
    },
    {
      id: `device-platform-support`,
      title: `Simulator support`,
      to: `/settings/integrations`,
      targetId: `devices`,
      searchTerms: [`xcode android studio sdk avd runtime`],
    },
    {
      id: `browser-profiles`,
      title: `Browser profiles`,
      to: `/settings/integrations`,
      targetId: `browser`,
    },
    {
      id: `browser-default-profile`,
      title: `Default browser profile`,
      to: `/settings/integrations`,
      targetId: `browser-profiles`,
    },
    {
      id: `browser-default-viewport`,
      title: `Default browser viewport`,
      to: `/settings/integrations`,
      searchTerms: [`preview size width height device desktop mobile rotate`],
    },
    {
      id: `browser-default-zoom`,
      title: `Default browser zoom`,
      to: `/settings/integrations`,
      searchTerms: [`preview page scale tabs percent`],
    },
    {
      id: `browser-default-appearance`,
      title: `Default browser appearance`,
      to: `/settings/integrations`,
      searchTerms: [`preview color scheme light dark system os`],
    },
    {
      id: `browser-recording-frame-rate`,
      title: `Browser recording frame rate`,
      to: `/settings/integrations`,
    },
    {
      id: `browser-recording-key-presses`,
      title: `Show key presses in recordings`,
      to: `/settings/integrations`,
      searchTerms: [`browser preview keyboard shortcuts keystrokes overlay capture`],
    },
    {
      id: `browser-recording-mouse-presses`,
      title: `Show mouse presses in recordings`,
      to: `/settings/integrations`,
      searchTerms: [`browser preview clicks buttons drag overlay capture`],
    },
    {
      id: `browser-link-target`,
      title: `Open links in`,
      to: `/settings/integrations`,
      searchTerms: [`links default browser in-app browser external open`],
    },
    {
      id: `browser-search-engine`,
      title: `Search engine`,
      to: `/settings/integrations`,
      searchTerms: [`address bar duckduckgo google bing brave kagi ecosia custom`],
    },
    {
      id: `pull-request-links-open-in-app`,
      title: `Open pull requests in T3 Code`,
      to: `/settings/integrations`,
      searchTerms: [`pr links ${h} browser external click default pull request view panel`],
    },
    {
      id: `browser-auto-show-floating-preview`,
      title: `Auto-show floating preview`,
      to: `/settings/integrations`,
      searchTerms: [`agent opens browser device simulator pop into view hide`],
    },
    {
      id: `automatic-pull`,
      title: `Automatically pull`,
      to: `/settings/source-control`,
      scope: `project-defaults`,
      searchTerms: [`auto pull default branch current checkout fast forward upstream`],
    },
    {
      id: `remove-agent-credits-on-merge`,
      title: `Remove agent credits when merging`,
      to: `/settings/source-control`,
      scope: `project-defaults`,
      searchTerms: [`pull request ${h} squash co-authored-by attribution claude codex generated`],
    },
    {
      id: `pull-request-merge-method`,
      title: `Default merge method`,
      to: `/settings/source-control`,
      scope: `project-defaults`,
      searchTerms: [`pull request merge squash rebase last selected`],
    },
    {
      id: `source-control`,
      title: `Source control`,
      to: `/settings/source-control`,
      scope: `environment-defaults`,
      searchTerms: [
        `version control git ${g} hosting integrations credentials scan server environment`,
      ],
    },
    {
      id: `git-fetch-interval`,
      title: `Git fetch interval`,
      to: `/settings/source-control`,
      searchTerms: [
        `automatic remote branch refresh background credentials security keys seconds off`,
      ],
      environmentOnly: !0,
      scope: `environment-defaults`,
    },
    {
      id: `worktree-branch-naming`,
      title: `Worktree branch naming`,
      to: `/settings/source-control`,
      searchTerms: [`static semantic prefix custom prompt instructions feat fix refactor chore`],
      environmentOnly: !0,
      scope: `project-defaults`,
    },
    ...m(n.definitions),
    {
      id: `gerrit-credentials`,
      title: `Gerrit HTTP credentials`,
      to: `/settings/source-control`,
      searchTerms: [`gerrit http base url username password credentials replies reviewers`],
      environmentOnly: !0,
      scope: `environment-defaults`,
    },
    {
      id: `source-control-writing-style`,
      title: `Source control writing style`,
      to: `/settings/source-control`,
      searchTerms: [
        `repository conventions conventional commits custom instructions change descriptions request titles`,
      ],
      environmentOnly: !0,
    },
    {
      id: `follow-change-request-templates`,
      title: `Follow change request templates`,
      to: `/settings/source-control`,
      searchTerms: [`repository pr pull request description structure`],
      environmentOnly: !0,
    },
    {
      id: `source-control-writer-model`,
      title: `Source control writer model`,
      to: `/settings/source-control`,
      searchTerms: [
        `override generated commit change request pr titles descriptions branch bookmark`,
      ],
      environmentOnly: !0,
      scope: `project-defaults`,
    },
    {
      id: `review-guides`,
      title: `Review guides (beta)`,
      to: `/settings/source-control`,
      searchTerms: [`pull request pr guided review guide tour beta experimental`],
      environmentOnly: !0,
    },
    {
      id: `review-guide-model`,
      title: `Review guide model`,
      to: `/settings/source-control`,
      targetId: `review-guides`,
      searchTerms: [`pull request pr guided review guide brief maintainer`],
      environmentOnly: !0,
      scope: `project-defaults`,
    },
    {
      id: `review-guide-instructions`,
      title: `Review guide instructions`,
      to: `/settings/source-control`,
      targetId: `review-guides`,
      searchTerms: [`pull request pr guided review guide preferences taste prompt custom`],
      environmentOnly: !0,
      scope: `project-defaults`,
    },
    {
      id: `project-actions`,
      title: `Actions`,
      to: `/settings/projects`,
      searchTerms: [`commands scripts setup run dev server checkout worktree t3.json import`],
    },
    {
      id: `environment-icon`,
      title: `Environment icon`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`machine glyph sidebar mac mini studio laptop desktop server cloud vm`],
    },
    {
      id: `local-environment`,
      title: `Local environment`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`turn off on disable enable local server agents remote only restart`],
      desktopOnly: !0,
    },
    {
      id: `network-access`,
      title: `Network access`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`expose backend remote pairing local machine interfaces host restart`],
      localBackendManagementOnly: !0,
    },
    {
      id: `tailscale-https`,
      title: `Tailscale HTTPS`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`serve magicdns endpoint remote secure network`],
      desktopOnly: !0,
      localBackendManagementOnly: !0,
    },
    {
      id: `wsl-backend`,
      title: `WSL backend`,
      to: `/settings/connections`,
      searchTerms: [
        `windows subsystem linux distro second server projects stop windows backend restart`,
      ],
      desktopOnly: !0,
      windowsOnly: !0,
      localBackendManagementOnly: !0,
      wslAvailableOnly: !0,
    },
    {
      id: `t3-connect`,
      localEnvironmentOnly: !0,
      title: `T3 Connect`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`managed tunnel cloud other devices remote`],
      desktopOnly: !0,
      cloudOnly: !0,
    },
    {
      id: `hold-webhooks-while-offline`,
      localEnvironmentOnly: !0,
      title: `Hold webhooks while offline`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`webhook automations offline queue mailbox t3 connect`],
      cloudOnly: !0,
      managedTunnelOnly: !0,
    },
    {
      id: `publish-agent-activity`,
      localEnvironmentOnly: !0,
      title: `Publish agent activity`,
      to: `/settings/connections`,
      targetId: `connections-environment`,
      searchTerms: [`mobile push notifications live activities cloud tunnel`],
      cloudOnly: !0,
    },
    {
      id: `connections-environment`,
      title: `This machine`,
      to: `/settings/connections`,
      searchTerms: [
        `connections server backend local remote access administrative permissions scope pairing links qr code authorized clients sessions revoke endpoint`,
      ],
    },
    {
      id: `remote-environments`,
      title: `Environments`,
      to: `/settings/connections`,
      searchTerms: [`add pair backend host code ssh config agent tunnel saved t3 connect`],
    },
    {
      id: `load-balancing`,
      title: `Load balancing`,
      to: `/settings/connections`,
      searchTerms: [
        `automatic machine environment resources cpu memory capacity preference weight shared projects`,
      ],
    },
    {
      id: `pull-request-routing`,
      title: `Pull request sharing`,
      to: `/settings/connections`,
      searchTerms: [
        `pull request routing trusted environments shared credentials permissions read actions source control ${h}`,
      ],
    },
    {
      id: `archive`,
      title: `Archived threads`,
      to: `/settings/archived`,
      searchTerms: [`restore reopen deleted history projects`],
    },
  ],
  v = new Map(_.map((e) => [e.id, e])),
  y = {
    "/settings/diagnostics": `environment`,
    "/settings/projects": `project`,
    "/settings/general": null,
    "/settings/appearance": null,
    "/settings/snap-shot": null,
    "/settings/keybindings": null,
    "/settings/providers": null,
    "/settings/integrations": null,
    "/settings/source-control": `environment-defaults`,
    "/settings/storage": `project-defaults`,
    "/settings/connections": `connections`,
    "/settings/scheduled-tasks": null,
    "/settings/beta": null,
    "/settings/archived": `project-defaults`,
    "/settings/voice": null,
  };
function b(e) {
  let t = _,
    n = t.find((t) => t.id === e) ?? t.find((t) => t.targetId === e);
  return n
    ? {
        title: n.title,
        scope: n.scope ?? y[n.to],
        ...(n.requiresThreadAutoSettlement ? { requiresThreadAutoSettlement: !0 } : {}),
      }
    : null;
}
function x(e, t) {
  let n = e.filter((e) => e.connection.phase === `connected` && e.serverConfig !== null),
    r = n
      .filter((e) => e.serverConfig?.environment.capabilities.threadAutoSettlement === !0)
      .map((e) => e.environmentId),
    i = n.filter((e) => t?.environmentIds.includes(e.environmentId));
  return {
    eligibleEnvironmentIds: r,
    isTargetAvailable:
      t !== void 0 &&
      t.kind !== `unavailable` &&
      i.length > 0 &&
      i.every((e) => r.includes(e.environmentId)),
  };
}
function S(e, t) {
  switch (e) {
    case null:
    case `connections`:
      return !0;
    case `environment`:
    case `checkout`:
      return e === t;
    case `project`:
      return t === `project` || t === `checkout`;
    case `environment-defaults`:
      return t === `environment` || t === `all`;
    case `project-defaults`:
      return t === `environment` || t === `all` || t === `project` || t === `checkout`;
  }
}
function C(e) {
  let t = c({ ...e });
  return t.checkout && !t.project
    ? `unavailable`
    : t.project
      ? t.checkout
        ? `checkout`
        : `project`
      : t.machine
        ? `environment`
        : `all`;
}
function w(e) {
  let t = C(e);
  return t === `project` || t === `checkout`;
}
function T(e) {
  let { id: t, title: n } = v.get(e);
  return { id: t, title: n };
}
function E(e) {
  return _.filter(
    (t) =>
      (!t.cloudOnly || e.hasCloudPublicConfig) &&
      (!t.environmentOnly || e.hasEnvironment) &&
      (!t.providerSettingsOnly || e.hasProviderSettingsEnvironment) &&
      (!t.macProviderSettingsOnly || e.hasMacProviderSettingsEnvironment) &&
      (!t.localBackendManagementOnly || e.canManageLocalBackend) &&
      (!t.localEnvironmentOnly || !e.localEnvironmentDisabled) &&
      (!t.wslAvailableOnly || e.isWslSettingsRowVisible) &&
      (!t.requiresThreadAutoSettlement || e.hasThreadAutoSettlement) &&
      (!t.managedTunnelOnly || e.managedTunnelActive === !0) &&
      (!t.redesignOnly || e.redesignEnabled === !0),
  );
}
function D(e) {
  let n = typeof navigator > `u` ? `` : navigator.platform;
  return e.filter(
    (e) =>
      (r || e.desktopOnly !== !0) &&
      (!e.releaseChannelOnly || r || s !== null) &&
      (!e.macOnly || t(n)) &&
      (!e.windowsOnly || a(n)),
  );
}
function O(e, t = _) {
  let n = i(e);
  if (n.length === 0) return [];
  let r = n.split(` `);
  return D(t)
    .flatMap((e, t) => {
      let a = i(e.title),
        o = [a, i(u[e.to]), ...(e.searchTerms ?? []).map(i)];
      if (!r.every((e) => o.some((t) => t.includes(e)))) return [];
      let s = o.findIndex((e) => e.includes(n));
      return [
        {
          item: e,
          index: t,
          rank:
            a === n
              ? 5
              : a.startsWith(n)
                ? 4
                : a.includes(n)
                  ? 3
                  : r.every((e) => a.includes(e))
                    ? 2
                    : +(s >= 0),
        },
      ];
    })
    .toSorted(
      (e, t) =>
        Number(e.item.secondary ?? !1) - Number(t.item.secondary ?? !1) ||
        t.rank - e.rank ||
        e.index - t.index,
    )
    .map(({ item: e }) => e);
}
export { w as a, O as c, p as d, x as i, T as l, E as n, S as o, b as r, d as s, u as t, D as u };
//# sourceMappingURL=settingsSearch-CrEaqXdW.js.map
