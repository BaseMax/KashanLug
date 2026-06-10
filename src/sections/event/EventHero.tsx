import m from "mithril";
import { Countdown }    from "@/components/Countdown";
import { DiscountNote } from "@/components/DiscountNote";
import { eventInfo }    from "@/data/event";

const INFO_ROWS = [
  { label: "تاریخ",  val: eventInfo.dateFa },
  { label: "ساعت",   val: eventInfo.timeFa },
  { label: "مکان",   val: eventInfo.city + " - دانشگاه آزاد کاشان" },
  { label: "ظرفیت", val: eventInfo.capacity },
];

export class EventHero implements Mithril.ClassComponent {
  view() {
    return (
      <div class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 border border-brand-400/30 mb-16 p-8 sm:p-14">
        <div class="absolute inset-0 bg-hero-pattern pointer-events-none"></div>
        <div class="glow w-80 h-80 bg-brand-400/30 -top-20 -left-10"></div>

        <div class="relative grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: info */}
          <div class="lg:col-span-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-light text-white text-xs font-bold mb-5">
              <span dir="ltr" class="ltr-inline">EVENT 0</span> • {eventInfo.coorganizer} × کاشان‌لاگ
            </div>
            <h1 class="text-4xl sm:text-5xl font-black text-white mb-4">{eventInfo.title}</h1>
            <p class="text-white/80 text-lg leading-relaxed mb-8">{eventInfo.tagline}</p>

            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              {INFO_ROWS.map((r) => (
                <div key={r.label} class="flex items-center gap-3 p-4 rounded-2xl glass-light">
                  <div class="text-white/60 text-xs w-14 shrink-0">{r.label}</div>
                  <div class="text-white font-bold text-sm">{r.val}</div>
                </div>
              ))}
            </div>

            <div class="flex items-center gap-3 p-4 rounded-2xl glass-light mb-6">
              <svg class="w-5 h-5 text-white/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A2 2 0 013 10V5a2 2 0 012-2z"/>
              </svg>
              <span class="text-white/90 text-sm">
                <DiscountNote variant="hero" />
              </span>
            </div>
          </div>

          {/* Right: price/register card */}
          <div class="lg:col-span-2">
            <div class="sticky top-24 glass-light rounded-3xl p-7">
              <div class="text-center mb-6">
                <div class="text-3xl font-black text-white">{eventInfo.price}</div>
                <div class="text-white/60 text-sm mt-1">هر نفر</div>
              </div>
              <div class="mb-6"><Countdown /></div>
              <a href={eventInfo.registerUrl} target="_blank" rel="noopener"
                class="block w-full text-center py-4 rounded-2xl font-bold text-brand-700 bg-white hover:-translate-y-1 transition-all shadow-xl mb-4">
                ثبت‌نام و خرید بلیت
              </a>
              <div class="flex items-center gap-2 text-xs text-white/60 justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                {eventInfo.venueDetail}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
