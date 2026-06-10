import m from "mithril";

interface Attrs {
  title: string;
  subtitle?: string;
  mb?: string;
}

export class PageHero implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    return (
      <div class={`text-center ${attrs.mb ?? "mb-12"}`}>
        <h1 class="text-4xl sm:text-5xl font-black text-fore title-underline pb-2 mb-6 inline-block">{attrs.title}</h1>
        {attrs.subtitle && (
          <p class="text-muted max-w-xl mx-auto">{attrs.subtitle}</p>
        )}
      </div>
    );
  }
}
