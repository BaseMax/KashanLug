import m from "mithril";

interface Attrs {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  oninput: (val: string) => void;
  placeholder?: string;
  rows?: number;
  bg?: string;
  ltr?: boolean;
}

export class Field implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const bg = attrs.bg ?? "bg-ink-900";
    const base = `w-full px-4 py-3 rounded-2xl ${bg} border border-white/10 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition`;
    return (
      <div>
        <label class="block text-sm text-gray-400 mb-1.5">{attrs.label}</label>
        {attrs.rows ? (
          <textarea
            rows={attrs.rows}
            required={attrs.required}
            value={attrs.value}
            placeholder={attrs.placeholder}
            oninput={(e: InputEvent) => attrs.oninput((e.target as HTMLTextAreaElement).value)}
            class={`${base} resize-none`}
          />
        ) : (
          <input
            type={attrs.type ?? "text"}
            required={attrs.required}
            value={attrs.value}
            dir={attrs.ltr ? "ltr" : undefined}
            oninput={(e: InputEvent) => attrs.oninput((e.target as HTMLInputElement).value)}
            class={base}
          />
        )}
      </div>
    );
  }
}
