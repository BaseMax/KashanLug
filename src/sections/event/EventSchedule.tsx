import m from "mithril";
import { schedule, KIND_META } from "@/data/event";
import { hashPath }            from "@/lib/utils";

export class EventSchedule implements Mithril.ClassComponent {
  view() {
    return (
      <section class="mb-16">
        <div class="flex items-end justify-between gap-4 mb-8">
          <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 inline-block">برنامهٔ زمانی</h2>
          <a href={hashPath("/schedule")} class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold text-sm">جزئیات بیشتر ›</a>
        </div>
        <div class="space-y-3">
          {schedule.map((slot) => {
            const k  = slot.kind ?? "ceremony";
            const st = KIND_META[k] ?? KIND_META.ceremony;
            return (
              <div key={slot.start} class="flex items-center gap-4 p-4 rounded-2xl bg-card border border-ui">
                <div class="flex items-center gap-2 w-28 shrink-0" dir="ltr">
                  <div class={`w-2.5 h-2.5 rounded-full ${st.dot}`}></div>
                  <span class="text-muted text-sm tabular-nums">{slot.start}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-fore font-medium text-sm">{slot.title}</div>
                  {slot.speaker && <div class="text-dim text-xs mt-0.5">{slot.speaker}</div>}
                </div>
                <span class={`hidden sm:block px-2.5 py-1 rounded-full text-xs font-bold ${st.badge}`}>{st.label}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
