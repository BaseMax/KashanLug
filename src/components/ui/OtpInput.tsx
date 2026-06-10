import m from "mithril";

interface Attrs {
  values:    string[];
  oninput:   (index: number, val: string) => void;
  onkeydown: (index: number, e: KeyboardEvent) => void;
}

export class OtpInput implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    return (
      <div class="flex gap-2 justify-center" dir="ltr">
        {attrs.values.map((v, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            inputmode="numeric"
            maxlength={1}
            value={v}
            oninput={(e: InputEvent) => attrs.oninput(i, (e.target as HTMLInputElement).value)}
            onkeydown={(e: KeyboardEvent) => attrs.onkeydown(i, e)}
            class="w-11 h-14 rounded-xl bg-ink-800 border border-white/10 text-white text-center text-xl font-black focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
          />
        ))}
      </div>
    );
  }
}
