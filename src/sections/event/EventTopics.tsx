import m from "mithril";
import { topics } from "@/data/event";

export class EventTopics implements Mithril.ClassComponent {
  view() {
    return (
      <section class="mb-16">
        <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 mb-8 inline-block">محورهای رویداد</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          {topics.map((t, i) => (
            <div key={i} class="flex items-start gap-4 p-5 rounded-2xl bg-card border border-ui">
              <span class="shrink-0 w-7 h-7 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-black flex items-center justify-center">{i + 1}</span>
              <p class="text-fore2 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
