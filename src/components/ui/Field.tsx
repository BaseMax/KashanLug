import m from "mithril";
import { toFaDigits, toEnDigits } from "@/lib/utils";

interface Attrs {
  label:        string;
  type?:        string;
  required?:    boolean;
  value:        string;
  oninput:      (val: string) => void;
  onblur?:      () => void;
  placeholder?: string;
  rows?:        number;
  bg?:          string;
  ltr?:         boolean;
  error?:       string;
}

export class Field implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const bg      = attrs.bg ?? "bg-card3";
    const hasErr  = !!attrs.error;
    const ring    = hasErr
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-ui focus:border-brand-500 focus:ring-brand-500/30";
    const base    = `w-full px-4 py-3 rounded-2xl ${bg} border ${ring} text-fore placeholder:text-dim focus:ring-2 outline-none transition`;
    const isTel   = attrs.type === "tel";

    return (
      <div>
        <label class="block text-sm text-muted mb-1.5">
          {attrs.label}
          {attrs.required && <span class="text-red-500 mr-0.5"> *</span>}
        </label>

        {attrs.rows ? (
          <textarea
            rows={attrs.rows}
            required={attrs.required}
            value={attrs.value}
            placeholder={attrs.placeholder}
            oninput={(e: InputEvent) => attrs.oninput((e.target as HTMLTextAreaElement).value)}
            onblur={() => attrs.onblur?.()}
            class={`${base} resize-none`}
          />
        ) : (
          <input
            type={attrs.type ?? "text"}
            required={attrs.required}
            value={isTel ? toFaDigits(attrs.value) : attrs.value}
            dir={attrs.ltr ? "ltr" : undefined}
            placeholder={attrs.placeholder}
            oninput={(e: InputEvent) => {
              const raw = (e.target as HTMLInputElement).value;
              attrs.oninput(isTel ? toEnDigits(raw) : raw);
            }}
            onblur={() => attrs.onblur?.()}
            class={base}
          />
        )}

        {hasErr && (
          <p class="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            {attrs.error}
          </p>
        )}
      </div>
    );
  }
}
