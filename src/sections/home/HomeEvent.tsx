import m from "mithril";
import { Countdown }    from "@/components/Countdown";
import { DiscountNote } from "@/components/DiscountNote";
import { eventInfo }    from "@/data/event";
import { hashPath }     from "@/lib/utils";

interface InfoRow {
  iconBg:    string;
  icon:      m.Vnode;
  title:     string;
  body?:     string;
  discount?: true;
}

const INFO_ROWS: InfoRow[] = [
  {
    iconBg: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    icon: (
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: "زمان برگزاری",
    body: `${eventInfo.dateFa} - ${eventInfo.timeFa}`,
  },
  {
    iconBg: "bg-term-500/10 text-term-600 dark:text-term-400",
    icon: (
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "محل برگزاری",
    body: eventInfo.venue,
  },
  {
    iconBg: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    icon: (
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
      </svg>
    ),
    title: "کد تخفیف ویژه",
    discount: true,
  },
];

export class HomeEvent implements Mithril.ClassComponent {
  view(): m.Vnode {
    return (
      <section id="home-event" class="relative py-20 sm:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-ui bg-card2">
            <div class="absolute inset-0 bg-dots dark:bg-dots-dark opacity-40 pointer-events-none"></div>
            <div class="glow w-96 h-96 bg-brand-500/15 -top-20 -left-20"></div>
            <div class="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold mb-5 border border-brand-500/20">
                  <span dir="ltr" class="ltr-inline">EVENT 0</span> • رویداد پیشِ‌رو
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-fore mb-4">{eventInfo.title}</h2>
                <p class="text-muted leading-relaxed mb-8">{eventInfo.tagline}</p>
                <div class="mb-8 max-w-sm"><Countdown /></div>
                <div class="flex flex-wrap gap-4">
                  <a href={eventInfo.registerUrl} target="_blank" rel="noopener"
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-lg shadow-brand-700/20 hover:-translate-y-1 transition-all">
                    خرید بلیت - {eventInfo.price}
                  </a>
                  <a href={hashPath("/event")}
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-fore2 bg-ui border border-ui hover:bg-ui2 transition-all">
                    جزئیات رویداد
                  </a>
                </div>
              </div>
              <div class="space-y-4">
                {INFO_ROWS.map((item) => (
                  <div key={item.title} class="flex items-start gap-4 p-5 rounded-2xl bg-ui border border-ui">
                    <div class={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div class="text-fore font-bold">{item.title}</div>
                      {item.body && <div class="text-muted text-sm mt-1">{item.body}</div>}
                      {item.discount && <div class="text-muted text-sm mt-1"><DiscountNote variant="card" /></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
