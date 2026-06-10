import m from "mithril";
import { joinPrereqs } from "@/data/join";

export class JoinPrereqs implements Mithril.ClassComponent {
  view() {
    return (
      <div class="grid sm:grid-cols-3 gap-5 mb-14">
        {joinPrereqs.map((c) => (
          <div key={c.title} class="bg-card border border-ui rounded-3xl p-7 text-center">
            <div class="text-3xl mb-4">{c.icon}</div>
            <h3 class="text-fore font-bold mb-2">{c.title}</h3>
            <p class="text-muted text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    );
  }
}
