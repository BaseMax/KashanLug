import m from "mithril";

interface Attrs {
  filename: string;
}

export class TerminalBlock implements Mithril.ClassComponent<Attrs> {
  view({ attrs, children }: Mithril.CVnode<Attrs>) {
    return (
      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-tr from-brand-600/15 to-term-600/8 rounded-3xl blur-lg"></div>
        <div class="relative bg-ink-900 border border-white/10 rounded-3xl overflow-hidden" dir="ltr">
          <div class="flex items-center gap-2 px-4 py-3 bg-ink-850 border-b border-white/5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            <span class="ml-auto font-mono text-xs text-gray-500">{attrs.filename}</span>
          </div>
          <div class="p-5 font-mono text-sm space-y-2 text-gray-300">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
