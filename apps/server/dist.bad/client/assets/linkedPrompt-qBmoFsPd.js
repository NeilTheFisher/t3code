import { A as e } from "./utils-CPoejuy5.js";
import { i as t } from "./toast-B4KPIJDZ.js";
function n(e) {
  e.hiddenCharacters !== 0 &&
    t.add({
      type: `warning`,
      title: `This prompt had hidden characters, it may be malicious`,
      description: `T3 Code removed ${e.hiddenCharacters} hidden character${e.hiddenCharacters === 1 ? `` : `s`}. Read the prompt before you send it.`,
      timeout: 0,
    });
}
function r(r, i, a = []) {
  n(i);
  let o = () => {
      (e.getState().setPrompt(r, i.text),
        t.add({
          type: `info`,
          title: `Prompt added from a link`,
          description: [`Read it before you send.`, ...a].join(` `),
        }));
    },
    s = e.getState().getComposerDraft(r)?.prompt ?? ``;
  if (s.trim().length === 0 || s === i.text) {
    o();
    return;
  }
  let c = t.add({
    type: `info`,
    title: `Linked prompt ready`,
    description: `This thread already has a draft. Replace it with the linked prompt?`,
    timeout: 0,
    actionProps: {
      children: `Replace draft`,
      onClick: () => {
        (t.close(c), o());
      },
    },
  });
}
export { n, r as t };
//# sourceMappingURL=linkedPrompt-qBmoFsPd.js.map
