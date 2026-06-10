import m from "mithril";
import { Layout }     from "@/components/Layout";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { schedule }   from "@/data/event";
import { setTitle }   from "@/lib/utils";

const KIND_META: Record<string, { dot: string; badge: string; label: string }> = {
  talk:     { dot: "bg-brand-500",  badge: "bg-brand-500/10 text-brand-600 dark:text-brand-400",  label: "سخنرانی"  },
  ceremony: { dot: "bg-sky-500",    badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400",        label: "مراسم"    },
  network:  { dot: "bg-term-500",   badge: "bg-term-500/10 text-term-600 dark:text-term-400",     label: "نتورکینگ" },
  break:    { dot: "bg-gray-400",   badge: "bg-gray-400/10 text-gray-600 dark:text-gray-400",     label: "استراحت"  },
};

const FILTERS = ["همه", "سخنرانی", "مراسم", "نتورکینگ"];

export class Schedule implements Mithril.ClassComponent {
  filter = "همه";

  oninit() { setTitle("برنامهٔ زمانی"); }

  view() {
    const visible = schedule.filter((s) => {
      if (this.filter === "همه") return true;
      const k = s.kind ?? "ceremony";
      return KIND_META[k]?.label === this.filter;
    });

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-500/8 -top-10 right-0"></div>

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-black text-fore title-underline pb-2 mb-6 inline-block">برنامهٔ زمانی</h1>
              <p class="text-muted max-w-lg mx-auto">برنامهٔ رویداد «زندگی در سایه» - پنج‌شنبه ۲۱ خرداد ۱۴۰۵، ساعت ۱۷:۰۰ تا ۲۱:۰۰</p>
            </div>

            <div class="flex justify-center mb-12">
              <FilterTabs items={FILTERS} active={this.filter} onchange={(f: string) => { this.filter = f; }} />
            </div>

            <div class="flex flex-wrap gap-4 mb-8 justify-center">
              {Object.entries(KIND_META).map(([k, v]) => (
                <div key={k} class="flex items-center gap-2 text-sm text-muted">
                  <div class={`w-3 h-3 rounded-full ${v.dot}`}></div>
                  {v.label}
                </div>
              ))}
            </div>

            <div class="relative">
              <div class="absolute right-7 top-0 bottom-0 w-px bg-ui"></div>
              <div class="space-y-4">
                {visible.map((slot, i) => {
                  const k = slot.kind ?? "ceremony";
                  const st = KIND_META[k] ?? KIND_META.ceremony;
                  return (
                    <div key={slot.start} class="relative flex items-start gap-6 fade-in-up" style={`animation-delay:${i * 0.05}s`}>
                      <div class={`relative z-10 w-3.5 h-3.5 rounded-full ${st.dot} mt-5 shrink-0 ring-4 ring-[var(--c-page)]`}></div>
                      <div class="flex-1 min-w-0 bg-card border border-ui rounded-3xl p-5 hover:-translate-y-0.5 transition-transform">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                          <div class="flex-1 min-w-0">
                            <h3 class="text-fore font-bold leading-snug mb-1">{slot.title}</h3>
                            {slot.speaker && <div class="text-dim text-sm">{slot.speaker}</div>}
                          </div>
                          <div class="flex items-center gap-3 shrink-0">
                            <span class={`px-2.5 py-1 rounded-full text-xs font-bold ${st.badge}`}>{st.label}</span>
                            <div class="text-muted text-sm tabular-nums" dir="ltr">{slot.start}–{slot.end}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div class="mt-16 text-center">
              <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-xl shadow-brand-700/20 hover:-translate-y-1 transition-all">
                ثبت‌نام در رویداد — ۲۵۰٬۰۰۰ تومان
              </a>
              <p class="text-dim text-sm mt-3 text-right" dir="rtl">
                با کد‌
                <span dir="ltr" class="text-brand-600 dark:text-brand-400 font-bold inline-block">
                  KLUG
                </span>
                ‌، ۲۰ بلیت نخست با ۳۰٪ تخفیف
              </p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
