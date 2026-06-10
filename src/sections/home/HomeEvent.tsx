import m from "mithril";
import { Countdown } from "@/components/Countdown";
import { eventInfo } from "@/data/event";
import { hashPath } from "@/lib/utils";

export class HomeEvent implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-20 sm:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-ink-900 to-ink-850">
            <div class="absolute inset-0 bg-dots opacity-40"></div>
            <div class="glow w-96 h-96 bg-brand-600/20 -top-20 -left-20"></div>
            <div class="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold mb-5">
                  <span dir="ltr" class="ltr-inline">EVENT 0</span> • رویداد پیشِ‌رو
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">{eventInfo.title}</h2>
                <p class="text-gray-400 leading-relaxed mb-8">{eventInfo.tagline}</p>
                <div class="mb-8 max-w-sm"><Countdown /></div>
                <div class="flex flex-wrap gap-4">
                  <a href={eventInfo.registerUrl} target="_blank" rel="noopener"
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-lg shadow-brand-900/40 hover:-translate-y-1 transition-all">
                    خرید بلیت — {eventInfo.price}
                  </a>
                  <a href={hashPath("/event")}
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    جزئیات رویداد
                  </a>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div class="w-11 h-11 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <div class="text-white font-bold">زمان برگزاری</div>
                    <div class="text-gray-400 text-sm mt-1">{eventInfo.dateFa} — {eventInfo.timeFa}</div>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div class="w-11 h-11 rounded-xl bg-term-500/15 text-term-400 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <div class="text-white font-bold">محل برگزاری</div>
                    <div class="text-gray-400 text-sm mt-1">{eventInfo.venue}</div>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div class="w-11 h-11 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
                  </div>
                  <div>
                    <div class="text-white font-bold">کد تخفیف ویژه</div>
                    <div class="text-gray-400 text-sm mt-1">
                      با کد <span dir="ltr" class="ltr-inline font-bold text-brand-400">{eventInfo.discountCode}</span>، {eventInfo.discountNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
