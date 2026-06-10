import m from "mithril";
import { type Speaker } from "@/data/event";
import { initials, avatarGradient } from "@/lib/utils";

interface Attrs { speaker: Speaker; }

export class SpeakerCard implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { speaker: s } = attrs;
    return (
      <div class="card-glow bg-ink-900 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-1">
        <div class={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${avatarGradient(s.name)} flex items-center justify-center text-white font-black text-xl`}>
          {initials(s.name)}
        </div>
        <div class="font-bold text-white text-sm leading-snug">{s.name}</div>
        <div class="text-gray-500 text-xs mt-1.5 leading-relaxed">{s.title}</div>
      </div>
    );
  }
}
