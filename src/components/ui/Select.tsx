import m from "mithril";

interface Attrs {
  label:        string;
  value:        string;
  onchange:     (val: string) => void;
  onblur?:      () => void;
  options:      string[];
  placeholder?: string;
  required?:    boolean;
  disabled?:    boolean;
  bg?:          string;
  error?:       string;
}

export class Select implements Mithril.ClassComponent<Attrs> {
  open  = false;
  root: Element | null = null;

  private closeOnOutside = (e: MouseEvent) => {
    if (this.root && !this.root.contains(e.target as Node) && this.open) {
      this.open = false;
      m.redraw();
    }
  };

  oninit()   { document.addEventListener("click",    this.closeOnOutside); }
  onremove() { document.removeEventListener("click", this.closeOnOutside); }

  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { label, value, onchange, onblur, options, placeholder, required, disabled, bg, error } = attrs;
    const triggerBg = bg ?? "bg-card3";
    const hasValue  = !!value;
    const hasErr    = !!error;

    return (
      <div oncreate={(vnode: { dom: Element }) => { this.root = vnode.dom; }}>
        <label class="block text-sm text-muted mb-1.5">
          {label}
          {required && <span class="text-red-500 mr-0.5"> *</span>}
        </label>

        <div class="relative">
          {/* ── Trigger ── */}
          <button
            type="button"
            disabled={disabled}
            onclick={(e: MouseEvent) => { e.stopPropagation(); if (!disabled) this.open = !this.open; }}
            class={[
              "cursor-pointer w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border",
              "text-right transition-all outline-none",
              triggerBg,
              this.open
                ? (hasErr ? "border-red-500 ring-2 ring-red-500/20" : "border-brand-500 ring-2 ring-brand-500/20")
                : (hasErr ? "border-red-500 hover:border-red-400" : "border-ui hover:border-brand-500/40"),
              disabled ? "opacity-50 cursor-not-allowed" : "",
            ].filter(Boolean).join(" ")}
            onblur={() => { onblur?.(); }}
          >
            <span class={`truncate text-sm ${hasValue ? "text-fore" : "text-dim"}`}>
              {hasValue ? value : (placeholder ?? "")}
            </span>
            <svg
              class={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${this.open ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {/* ── Dropdown panel ── */}
          {this.open && (
            <ul
              role="listbox"
              class="absolute z-50 right-0 left-0 mt-1.5 bg-card border border-ui rounded-2xl shadow-xl shadow-black/10 overflow-hidden py-1 max-h-60 overflow-y-auto"
            >
              {placeholder && (
                <li
                  role="option"
                  aria-selected={!hasValue}
                  onclick={(e: MouseEvent) => { e.stopPropagation(); onchange(""); this.open = false; }}
                  class={[
                    "cursor-pointer flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors select-none",
                    !hasValue ? "bg-brand-500/5 text-brand-600 dark:text-brand-400 font-semibold" : "text-dim hover:bg-ui",
                  ].join(" ")}
                >
                  {!hasValue && (
                    <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  )}
                  <span class={!hasValue ? "" : "mr-6"}>{placeholder}</span>
                </li>
              )}

              {options.map((o) => {
                const selected = value === o;
                return (
                  <li
                    key={o}
                    role="option"
                    aria-selected={selected}
                    onclick={(e: MouseEvent) => { e.stopPropagation(); onchange(o); this.open = false; }}
                    class={[
                      "cursor-pointer flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors select-none",
                      selected
                        ? "bg-brand-500/5 text-brand-600 dark:text-brand-400 font-semibold"
                        : "text-fore hover:bg-ui",
                    ].join(" ")}
                  >
                    {selected ? (
                      <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    ) : (
                      <span class="w-3.5 h-3.5 shrink-0 block"></span>
                    )}
                    {o}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {hasErr && (
          <p class="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
}
