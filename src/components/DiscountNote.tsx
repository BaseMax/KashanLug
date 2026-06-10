import m from "mithril";
import { eventInfo } from "@/data/event";

interface Attrs {
  variant?: "hero" | "card";
}

export class DiscountNote implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const onHero = attrs.variant === "hero";
    return (
      <span dir="rtl">
        با کد{" "}
        <span dir="ltr" class={`ltr-inline font-bold ${onHero ? "text-white" : "text-brand-600 dark:text-brand-400"}`}>
          {eventInfo.discountCode}
        </span>
        <span dir="rtl">، {eventInfo.discountNote}</span>
      </span>
    );
  }
}
