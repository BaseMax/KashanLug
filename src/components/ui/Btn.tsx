import m from "mithril";

export type BtnVariant = "primary" | "ghost" | "outline" | "danger";
export type BtnSize    = "sm" | "md" | "lg";

interface Attrs {
  variant?:  BtnVariant;
  size?:     BtnSize;
  href?:     string;
  type?:     "submit" | "button";
  disabled?: boolean;
  target?:   string;
  rel?:      string;
  class?:    string;
  onclick?:  (e: MouseEvent) => void;
}

const VARIANT: Record<BtnVariant, string> = {
  primary: "bg-gradient-to-l from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-700/20",
  ghost:   "bg-ui border border-ui text-fore2 hover:bg-ui2",
  outline: "border border-ui text-fore2 hover:bg-ui",
  danger:  "bg-red-600/90 text-white hover:bg-red-500",
};

const SIZE: Record<BtnSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 rounded-2xl",
  lg: "px-7 py-3.5 rounded-2xl",
};

export class Btn implements Mithril.ClassComponent<Attrs> {
  view({ attrs, children }: Mithril.CVnode<Attrs>) {
    const cls = [
      "cursor-pointer inline-flex items-center justify-center gap-2 font-bold",
      "transition-all hover:-translate-y-0.5 disabled:opacity-60",
      VARIANT[attrs.variant ?? "primary"],
      attrs.size ? SIZE[attrs.size] : "",
      attrs.class ?? "",
    ].filter(Boolean).join(" ");

    if (attrs.href) {
      return (
        <a href={attrs.href} class={cls} target={attrs.target} rel={attrs.rel}>
          {children}
        </a>
      );
    }
    return (
      <button
        type={attrs.type ?? "button"}
        disabled={attrs.disabled}
        class={cls}
        onclick={attrs.onclick}
      >
        {children}
      </button>
    );
  }
}
