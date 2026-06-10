import m from "mithril";
import { Layout }      from "@/components/Layout";
import { Countdown }   from "@/components/Countdown";
import { SpeakerCard } from "@/components/SpeakerCard";
import { eventInfo, speakers, schedule, topics, organizers, sponsors, lead } from "@/data/event";
import { hashPath, setTitle, initials, avatarGradient } from "@/lib/utils";

const KIND_STYLE: Record<string, { dot: string; badge: string; label: string }> = {
  talk:     { dot: "bg-brand-500",  badge: "bg-brand-500/10 text-brand-600 dark:text-brand-400",  label: "سخنرانی" },
  ceremony: { dot: "bg-sky-500",    badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400",        label: "مراسم"   },
  network:  { dot: "bg-term-500",   badge: "bg-term-500/10 text-term-600 dark:text-term-400",     label: "نتورکینگ"},
  break:    { dot: "bg-gray-400",   badge: "bg-gray-400/10 text-gray-600 dark:text-gray-400",     label: "استراحت" },
};

const INFO_ROWS = [
  { label: "تاریخ",  val: eventInfo.dateFa },
  { label: "ساعت",   val: eventInfo.timeFa },
  { label: "مکان",   val: eventInfo.city + " - دانشگاه آزاد کاشان" },
  { label: "ظرفیت", val: eventInfo.capacity },
];

export class Event implements Mithril.ClassComponent {
  oninit() { setTitle("رویداد زندگی در سایه"); }

  view() {
    return (
      <Layout>
        <main class="pt-24 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-brand-500/8 -top-10 right-0"></div>

          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Hero card */}
            <div class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 border border-brand-400/30 mb-16 p-8 sm:p-14">
              <div class="absolute inset-0 bg-hero-pattern pointer-events-none"></div>
              <div class="glow w-80 h-80 bg-brand-400/30 -top-20 -left-10"></div>
              <div class="relative grid lg:grid-cols-5 gap-10 items-start">
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
                      با کد <span dir="ltr" class="ltr-inline font-bold text-white">{eventInfo.discountCode}</span>، {eventInfo.discountNote}
                    </span>
                  </div>
                </div>

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

            {/* Topics */}
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

            {/* Lead */}
            <section class="mb-16">
              <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 mb-8 inline-block">راهبر رویداد</h2>
              <div class="flex items-center gap-6 p-6 rounded-3xl bg-card border border-brand-500/20 max-w-md">
                {lead.avatar ? (
                  <img src={lead.avatar} alt={lead.name} class="w-20 h-20 rounded-2xl object-cover" />
                ) : (
                  <div class={`w-20 h-20 rounded-2xl bg-gradient-to-br ${avatarGradient(lead.name)} flex items-center justify-center text-white font-black text-2xl`}>
                    {initials(lead.name)}
                  </div>
                )}
                <div>
                  <div class="font-bold text-xl text-fore">{lead.name}</div>
                  <div class="text-brand-600 dark:text-brand-400 text-sm mt-1">{lead.title}</div>
                </div>
              </div>
            </section>

            {/* Speakers */}
            <section class="mb-16">
              <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 mb-8 inline-block">سخنرانان</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {speakers.map((s) => (
                  <SpeakerCard key={s.name} speaker={s} />
                ))}
              </div>
            </section>

            {/* Schedule preview */}
            <section class="mb-16">
              <div class="flex items-end justify-between gap-4 mb-8">
                <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 inline-block">برنامهٔ زمانی</h2>
                <a href={hashPath("/schedule")} class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold text-sm">جزئیات بیشتر ›</a>
              </div>
              <div class="space-y-3">
                {schedule.map((slot) => {
                  const k = slot.kind ?? "ceremony";
                  const st = KIND_STYLE[k] ?? KIND_STYLE.ceremony;
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

            {/* Organizers & sponsors */}
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

            {/* Map */}
            <section class="rounded-3xl bg-card border border-ui p-8">
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
          </div>
        </main>
      </Layout>
    );
  }
}
