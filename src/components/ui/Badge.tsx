import m from "mithril";

interface Attrs { class?: string; }

export class Badge implements Mithril.ClassComponent<Attrs> {
  view({ attrs, children }: Mithril.CVnode<Attrs>) {
    return (
      <span class={`rounded-full font-bold ${attrs.class ?? ""}`}>{children}</span>
    );
  }
}
