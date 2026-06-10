import m from "mithril";

interface Attrs {
  title: string;
  subtitle: string;
  class?: string;
  iconSize?: string;
}

export class SuccessCard implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const iconSize = attrs.iconSize ?? "w-14 h-14";
    const svgSize = attrs.iconSize ? "w-8 h-8" : "w-7 h-7";
    return (
      <div class={`flex flex-col items-center justify-center gap-4 bg-ink-900 border border-term-500/20 rounded-3xl ${attrs.class ?? "h-64"}`}>
        <div class={`${iconSize} rounded-full bg-term-500/15 text-term-400 flex items-center justify-center`}>
          <svg class={svgSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div class="text-center">
          <p class="text-white font-bold">{attrs.title}</p>
          <p class="text-gray-500 text-sm mt-1">{attrs.subtitle}</p>
        </div>
      </div>
    );
  }
}
