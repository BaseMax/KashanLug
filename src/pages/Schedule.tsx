import m from "mithril";
import { Layout } from "../components/Layout";
import { schedule } from "../data/event";
import { setTitle } from "../lib/utils";

const KIND_META: Record<string, { dot: string; badge: string; bar: string; label: string }> = {
  talk:     { dot: "bg-brand-500",  badge: "bg-brand-500/15 text-brand-400",  bar: "bg-brand-500",  label: "سخنرانی"  },
  ceremony: { dot: "bg-sky-500",    badge: "bg-sky-500/15 text-sky-400",      bar: "bg-sky-500",    label: "مراسم"    },
  network:  { dot: "bg-term-500",   badge: "bg-term-500/15 text-term-400",    bar: "bg-term-500",   label: "نتورکینگ" },
  break:    { dot: "bg-gray-600",   badge: "bg-gray-600/15 text-gray-400",    bar: "bg-gray-600",   label: "استراحت"  },
};

const FILTERS = ["همه", "سخنرانی", "مراسم", "نتورکینگ"];

interface State { filter: string; }

export const Schedule: m.Component<Record<string, never>, State> = {
  oninit(vnode) {
    setTitle("برنامهٔ زمانی");
    vnode.state.filter = "همه";
  },
  view(vnode) {
    const { filter } = vnode.state;
    const visible = schedule.filter((s) => {
      if (filter === "همه") return true;
      const k = s.kind ?? "ceremony";
      return KIND_META[k]?.label === filter;
    });

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-600/10 -top-10 right-0"></div>

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-black text-white title-underline pb-2 mb-6 inline-block">برنامهٔ زمانی</h1>
              <p class="text-gray-400 max-w-lg mx-auto">برنامهٔ رویداد «زندگی در سایه» - پنج‌شنبه ۲۱ خرداد ۱۴۰۵، ساعت ۱۷:۰۰ تا ۲۱:۰۰</p>
            </div>

            {/* Filters */}
            <div class="flex flex-wrap justify-center gap-2 mb-12">
              {FILTERS.map((f) => (
                <button
                  onclick={() => { vnode.state.filter = f; }}
                  class={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    filter === f
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-900/30"
                      : "bg-ink-900 border border-white/10 text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div class="flex flex-wrap gap-4 mb-8 justify-center">
              {Object.entries(KIND_META).map(([, v]) => (
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <div class={`w-3 h-3 rounded-full ${v.dot}`}></div>
                  {v.label}
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div class="relative">
              <div class="absolute right-7 top-0 bottom-0 w-px bg-white/5"></div>
              <div class="space-y-4">
                {visible.map((slot, i) => {
                  const k = slot.kind ?? "ceremony";
                  const st = KIND_META[k] ?? KIND_META.ceremony;
                  return (
                    <div class="relative flex items-start gap-6 fade-in-up" style={`animation-delay:${i * 0.05}s`}>
                      <div class={`relative z-10 w-3.5 h-3.5 rounded-full ${st.dot} mt-5 shrink-0 ring-4 ring-ink-950`}></div>
                      <div class="flex-1 min-w-0 bg-ink-900 border border-white/10 rounded-3xl p-5 hover:-translate-y-0.5 transition-transform">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                          <div class="flex-1 min-w-0">
                            <h3 class="text-white font-bold leading-snug mb-1">{slot.title}</h3>
                            {slot.speaker && (
                              <div class="text-gray-500 text-sm">{slot.speaker}</div>
                            )}
                          </div>
                          <div class="flex items-center gap-3 shrink-0">
                            <span class={`px-2.5 py-1 rounded-full text-xs font-bold ${st.badge}`}>{st.label}</span>
                            <div class="text-gray-400 text-sm tabular-nums" dir="ltr">{slot.start}–{slot.end}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Register CTA */}
            <div class="mt-16 text-center">
              <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-xl shadow-brand-900/30 hover:-translate-y-1 transition-all">
                ثبت‌نام در رویداد - ۲۵۰٬۰۰۰ تومان
              </a>
              <p class="text-gray-500 text-sm mt-3">
                با کد <span dir="ltr" class="ltr-inline text-brand-400 font-bold">KLUG</span>، ۲۰ بلیت نخست با ۳۰٪ تخفیف
              </p>
            </div>
          </div>
        </main>
      </Layout>
    );
  },
};
