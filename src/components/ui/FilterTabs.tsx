import m from "mithril";

interface Attrs {
  items:    string[];
  active:   string;
  onchange: (item: string) => void;
  class?:   string;
}

export class FilterTabs implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    return (
      <div class={`flex flex-wrap gap-2 ${attrs.class ?? ""}`}>
        {attrs.items.map((item) => (
          <button
            key={item}
            onclick={() => attrs.onchange(item)}
            class={`cursor-pointer px-5 py-2 rounded-xl text-sm font-bold transition-all ${
              attrs.active === item
                ? "bg-brand-500 text-white shadow-lg shadow-brand-700/20"
                : "bg-card border border-ui text-fore2 hover:bg-ui"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}
