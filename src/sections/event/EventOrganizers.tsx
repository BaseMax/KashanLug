import m from "mithril";
import { eventInfo, organizers, sponsors } from "@/data/event";

export class EventOrganizers implements Mithril.ClassComponent {
  view() {
    return (
      <>
        <div class="grid sm:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 class="text-xl font-black text-fore mb-5">برگزارکنندگان</h2>
            <div class="space-y-3">
              {organizers.map((o) => (
                <div key={o.name} class="flex items-center gap-4 p-4 rounded-2xl bg-card border border-ui">
                  <div class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 font-black flex items-center justify-center text-sm">
                    {o.name[0]}
                  </div>
                  <div>
                    <div class="text-fore font-bold text-sm">{o.name}</div>
                    <div class="text-dim text-xs mt-0.5">{o.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 class="text-xl font-black text-fore mb-5">حامیان</h2>
            <div class="flex flex-wrap gap-3">
              {sponsors.map((s) => (
                <span key={s} class="px-4 py-2 rounded-xl bg-card2 border border-ui text-fore2 text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <section class="rounded-3xl bg-card border border-ui p-8 mb-8">
          <h2 class="text-xl font-black text-fore mb-4">مسیریابی</h2>
          <p class="text-muted text-sm mb-4">{eventInfo.venueDetail}</p>
          <a href={eventInfo.mapUrl} target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-fore2 bg-ui border border-ui hover:bg-ui2 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            مشاهده در نقشه
          </a>
        </section>
      </>
    );
  }
}
