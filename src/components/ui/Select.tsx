import m from "mithril";

interface Attrs {
  label:      string;
  value:      string;
  onchange:   (val: string) => void;
  options:    string[];
  placeholder?: string;
  required?:  boolean;
  bg?:        string;
}

export class Select implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const bg = attrs.bg ?? "bg-ink-800";
    return (
      <div>
        <label class="block text-sm text-gray-400 mb-1.5">{attrs.label}</label>
        <select
          value={attrs.value}
          onchange={(e: Event) => attrs.onchange((e.target as HTMLSelectElement).value)}
          class={`w-full px-4 py-3 rounded-2xl ${bg} border border-white/10 text-white focus:border-brand-500 outline-none transition appearance-none`}
        >
          {attrs.placeholder && <option value="">{attrs.placeholder}</option>}
          {attrs.options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }
}
