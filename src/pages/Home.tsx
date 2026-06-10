import m from "mithril";
import { Layout } from "../components/Layout";
import { Countdown } from "../components/Countdown";
import { eventInfo, speakers } from "../data/event";
import { posts } from "../data/blog";
import { setTitle, initials, avatarGradient } from "../lib/utils";

const RouteLink = m.route.Link;

export const Home: m.Component = {
  oninit() { setTitle(""); },
  view() {
    return (
      <Layout>
        {/* HERO */}
        <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
          <div class="absolute inset-0 bg-grid opacity-60"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/70 to-ink-950"></div>
          <div class="glow w-[40rem] h-[40rem] bg-brand-600/20 -top-40 -right-40"></div>
          <div class="glow w-[32rem] h-[32rem] bg-term-600/10 bottom-0 -left-40"></div>

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div class="text-center lg:text-right">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-7 fade-in-up">
                  <span class="relative flex h-2.5 w-2.5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-400 opacity-75"></span>
                    <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-term-500"></span>
                  </span>
                  ثبت‌نام رویداد آغاز شد
                </div>

                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6 fade-in-up" style="animation-delay:.08s">
                  جایی برای <span class="text-gradient">دانشِ آزاد</span>
                  <br class="hidden sm:block" />
                  و جامعهٔ متن‌باز کاشان
                </h1>

                <p class="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 fade-in-up" style="animation-delay:.16s">
                  کاشان‌لاگ اجتماع کاربران و علاقه‌مندان به گنو/لینوکس، نرم‌افزار آزاد و
                  فناوری‌های متن‌باز است؛ فضایی دوستانه برای یادگیری، تبادل تجربه و
                  ساختن در کنار یکدیگر.
                </p>

                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 fade-in-up" style="animation-delay:.24s">
                  <RouteLink href="/event"
                    class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-xl shadow-brand-900/40 hover:-translate-y-1 transition-all">
                    مشاهدهٔ رویداد «زندگی در سایه»
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
                  </RouteLink>
                  <RouteLink href="/join"
                    class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    همکاری با ما
                  </RouteLink>
                </div>

                <div class="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 mt-12 fade-in-up" style="animation-delay:.32s">
                  <div class="text-center lg:text-right">
                    <div class="text-3xl font-black text-white">۷+</div>
                    <div class="text-xs text-gray-500 mt-1">سخنران</div>
                  </div>
                  <div class="text-center lg:text-right border-x border-white/10">
                    <div class="text-3xl font-black text-white">۱۳</div>
                    <div class="text-xs text-gray-500 mt-1">عضو تیم اجرایی</div>
                  </div>
                  <div class="text-center lg:text-right">
                    <div class="text-3xl font-black text-white">۴ ساعت</div>
                    <div class="text-xs text-gray-500 mt-1">برنامهٔ فشرده</div>
                  </div>
                </div>
              </div>

              {/* Terminal card */}
              <div class="fade-in-up" style="animation-delay:.2s">
                <TerminalCard />
              </div>
            </div>
          </div>

          <div class="absolute bottom-6 inset-x-0 flex justify-center">
            <svg class="w-6 h-6 text-gray-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </section>

        {/* EVENT HIGHLIGHT */}
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

                  <div class="mb-8 max-w-sm">
                    <Countdown />
                  </div>

                  <div class="flex flex-wrap gap-4">
                    <a href={eventInfo.registerUrl} target="_blank" rel="noopener"
                      class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-lg shadow-brand-900/40 hover:-translate-y-1 transition-all">
                      خرید بلیت - {eventInfo.price}
                    </a>
                    <RouteLink href="/event"
                      class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      جزئیات رویداد
                    </RouteLink>
                  </div>
                </div>

                <div class="space-y-4">
                  <InfoCard icon="calendar" title="زمان برگزاری"
                    text={`${eventInfo.dateFa} - ${eventInfo.timeFa}`} color="brand" />
                  <InfoCard icon="location" title="محل برگزاری"
                    text={eventInfo.venue} color="term" />
                  <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div class="w-11 h-11 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-bold">کد تخفیف ویژه</div>
                      <div class="text-gray-400 text-sm mt-1">
                        با کد <span dir="ltr" class="ltr-inline font-bold text-brand-400">{eventInfo.discountCode}</span>،
                        {" "}{eventInfo.discountNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section class="relative py-16 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center max-w-2xl mx-auto mb-14">
              <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 mb-5 inline-block">چرا کاشان‌لاگ؟</h2>
              <p class="text-gray-400 leading-relaxed">باور ما این است که دانش زمانی بیشترین ارزش را دارد که آزادانه به اشتراک گذاشته شود.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => (
                <div class="card-glow group bg-ink-900 border border-white/10 rounded-3xl p-7 hover:-translate-y-2">
                  <div class={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-5`}>{v.icon}</div>
                  <h3 class="text-white font-bold text-lg mb-2">{v.title}</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
            <div class="text-center mt-10">
              <RouteLink href="/charter" class="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold transition-colors">
                مطالعهٔ مرام‌نامهٔ کاشان‌لاگ
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/>
                </svg>
              </RouteLink>
            </div>
          </div>
        </section>

        {/* SPEAKERS PREVIEW */}
        <section class="relative py-16 sm:py-20 bg-ink-900/40 border-y border-white/5">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 inline-block">سخنرانان رویداد</h2>
                <p class="text-gray-400 mt-4">متخصصان و فعالان حوزهٔ فناوری و متن‌باز</p>
              </div>
              <RouteLink href="/event" class="text-brand-400 hover:text-brand-300 font-bold text-sm">مشاهدهٔ همه ›</RouteLink>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {speakers.slice(0, 4).map((s) => (
                <div class="card-glow bg-ink-900 border border-white/10 rounded-3xl p-6 text-center">
                  <div class={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${avatarGradient(s.name)} flex items-center justify-center text-white font-black text-xl`}>
                    {initials(s.name)}
                  </div>
                  <div class="font-bold text-white text-sm leading-snug">{s.name}</div>
                  <div class="text-gray-500 text-xs mt-1 leading-relaxed">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section class="relative py-16 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 inline-block">از پست‌های آزاد</h2>
                <p class="text-gray-400 mt-4">مقالاتی از اعضای جامعهٔ کاشان‌لاگ</p>
              </div>
              <RouteLink href="/blog" class="text-brand-400 hover:text-brand-300 font-bold text-sm">همهٔ مقاله‌ها ›</RouteLink>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              {posts.slice(0, 3).map((p) => (
                <RouteLink href={`/blog/${p.slug}`}
                  class="card-glow group bg-ink-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 flex flex-col block">
                  <div class="relative h-36 bg-gradient-to-br from-ink-800 to-ink-850 flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 bg-grid opacity-40"></div>
                    <span class="relative font-mono text-3xl text-brand-400/80 group-hover:scale-110 transition-transform">
                      ~/{ p.tag}
                    </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1">
                    <div class="text-xs text-gray-500 mb-3">{p.author} - {p.date}</div>
                    <h3 class="text-white font-bold leading-snug mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">{p.title}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{p.excerpt}</p>
                    <div class="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span class="text-brand-400 text-sm font-bold">بیشتر بخوانید</span>
                      <span class="text-gray-500 text-xs">{p.readMinutes} دقیقه</span>
                    </div>
                  </div>
                </RouteLink>
              ))}
            </div>
          </div>
        </section>

        {/* SPONSORS */}
        <section class="relative py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <p class="text-center text-gray-500 text-sm mb-8">حامیان و برگزارکنندگان</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
              {["تسنا","ساربوک","گلدینو","Pixotech","الوقسطی","الگوریتم برتر"].map((s) => (
                <span class="px-4 py-2 rounded-xl bg-ink-800 border border-white/10 text-gray-300 text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="relative py-20">
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <div class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-600 to-brand-700 p-10 sm:p-16 text-center">
              <div class="absolute inset-0 bg-grid opacity-20"></div>
              <div class="relative">
                <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">جای تو در تیم ما خالی است</h2>
                <p class="text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
                  اگر به فعالیت‌های اوپن‌سورس علاقه‌مندی و از کار تیمی لذت می‌بری،
                  با هر مهارت و تجربه‌ای که داری، در ساختن این مسیر همراه ما باش.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                  <RouteLink href="/join"
                    class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-brand-700 bg-white hover:-translate-y-1 transition-all shadow-xl">
                    همکاری با ما
                  </RouteLink>
                  <a href="https://t.me/KashanLUG" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-white/15 border border-white/30 hover:bg-white/25 transition-all">
                    کانال تلگرام
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  },
};

/* ---- Sub-components ---- */

interface InfoCardAttrs { icon: "calendar" | "location"; title: string; text: string; color: "brand" | "term"; }
const InfoCard: m.Component<InfoCardAttrs> = {
  view({ attrs }) {
    const c = attrs.color === "brand" ? "bg-brand-500/15 text-brand-400" : "bg-term-500/15 text-term-400";
    const icon = attrs.icon === "calendar"
      ? <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      : <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    return (
      <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
        <div class={`w-11 h-11 rounded-xl ${c} flex items-center justify-center shrink-0`}>{icon}</div>
        <div>
          <div class="text-white font-bold">{attrs.title}</div>
          <div class="text-gray-400 text-sm mt-1">{attrs.text}</div>
        </div>
      </div>
    );
  },
};

interface TerminalState { typed: string; done: boolean; _interval: ReturnType<typeof setInterval> | null; }
const TerminalCard: m.Component<Record<string, never>, TerminalState> = {
  oninit(vnode) {
    const full = "sudo apt-get install kashanlug";
    vnode.state.typed = "";
    vnode.state.done = false;
    let i = 0;
    vnode.state._interval = setInterval(() => {
      vnode.state.typed += full[i++] ?? "";
      if (i >= full.length) {
        clearInterval(vnode.state._interval!);
        vnode.state._interval = null;
        setTimeout(() => { vnode.state.done = true; m.redraw(); }, 300);
      }
      m.redraw();
    }, 70);
  },
  onremove(vnode) { if (vnode.state._interval) clearInterval(vnode.state._interval); },
  view(vnode) {
    const { typed, done } = vnode.state;
    return (
      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-tr from-brand-600/30 to-term-600/20 rounded-3xl blur-xl"></div>
        <div class="relative bg-ink-900/90 backdrop-blur border border-white/10 rounded-3xl overflow-hidden shadow-2xl" dir="ltr">
          <div class="flex items-center gap-2 px-4 py-3 bg-ink-850 border-b border-white/5">
            <div class="w-3 h-3 rounded-full bg-red-500/90"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/90"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/90"></div>
            <span class="ml-auto font-mono text-xs text-gray-500">kashanlug@server: ~</span>
          </div>
          <div class="p-5 sm:p-6 font-mono text-sm leading-relaxed">
            <div class="flex flex-wrap items-center">
              <span class="text-term-400">user@kashanlug</span>
              <span class="text-gray-500">:</span>
              <span class="text-brand-400">~</span>
              <span class="text-gray-500">$ </span>
              <span class="text-gray-200">{typed}</span>
              {!done && <span class="caret"></span>}
            </div>
            {done && (
              <div class="mt-3 space-y-1 text-gray-400">
                <p>Reading package lists... <span class="text-term-400">Done</span></p>
                <p>Building dependency tree... <span class="text-term-400">Done</span></p>
                <p class="text-gray-300">The following NEW packages will be installed:</p>
                <p class="text-brand-300 pl-4">community knowledge open-source linux freedom</p>
                <p class="text-gray-500">Need to get 0 B. Membership is <span class="text-term-400">free</span>.</p>
                <p class="text-white">✔ <span dir="rtl" class="font-sans">به کاشان‌لاگ خوش آمدید!</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};

const VALUES = [
  {
    bg: "bg-brand-500/15 text-brand-400",
    title: "آزادی دانش",
    desc: "هرچه در کاشان‌لاگ تولید می‌شود، آزادانه و تحت لایسنس CC BY منتشر و در اختیار همگان قرار می‌گیرد.",
    icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    bg: "bg-term-500/15 text-term-400",
    title: "احترام بی‌قیدوشرط",
    desc: "جایی برای تبعیض نیست؛ سطح فنی، جنسیت، سن، پیشینه و باور هیچ‌کس ملاک ارزش‌گذاری نیست.",
    icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4z"/></svg>,
  },
  {
    bg: "bg-brand-500/15 text-brand-400",
    title: "استقلال",
    desc: "هیچ شرکت، شخص یا نهادی نمی‌تواند روی روند رشد لاگ تعیین‌کننده باشد.",
    icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
  {
    bg: "bg-term-500/15 text-term-400",
    title: "شفافیت",
    desc: "تمام تصمیم‌های هستهٔ اجرایی به‌صورت شفاف با جامعه در میان گذاشته می‌شود.",
    icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
  },
];
