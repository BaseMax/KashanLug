import m from "mithril";
import { stats } from "@/data/about";

export class AboutStats implements Mithril.ClassComponent {
  view() {
    return (
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-20">
        {stats.map((s) => (
          <div key={s.n} class="bg-card border border-ui rounded-2xl p-6 text-center">
            <div class="text-3xl font-black text-brand-600 dark:text-brand-400 mb-2">{s.n}</div>
            <div class="text-dim text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    );
  }
}
