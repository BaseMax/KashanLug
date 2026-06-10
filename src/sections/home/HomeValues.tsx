import m from "mithril";
import { hashPath } from "@/lib/utils";

const VALUES = [
  { bg: "bg-brand-500/15 text-brand-400", title: "آزادی دانش",        desc: "هرچه در کاشان‌لاگ تولید می‌شود، آزادانه و تحت لایسنس CC BY منتشر و در اختیار همگان قرار می‌گیرد.", icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg> },
  { bg: "bg-term-500/15 text-term-400",   title: "احترام بی‌قیدوشرط", desc: "جایی برای تبعیض نیست؛ سطح فنی، جنسیت، سن، پیشینه و باور هیچ‌کس ملاک ارزش‌گذاری نیست.",          icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4z"/></svg> },
  { bg: "bg-brand-500/15 text-brand-400", title: "استقلال",           desc: "هیچ شرکت، شخص یا نهادی نمی‌تواند روی روند رشد لاگ تعیین‌کننده باشد.",                              icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { bg: "bg-term-500/15 text-term-400",   title: "شفافیت",            desc: "تمام تصمیم‌های هستهٔ اجرایی به‌صورت شفاف با جامعه در میان گذاشته می‌شود.",                           icon: <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> },
];

export class HomeValues implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 mb-5 inline-block">چرا کاشان‌لاگ؟</h2>
            <p class="text-gray-400 leading-relaxed">باور ما این است که دانش زمانی بیشترین ارزش را دارد که آزادانه به اشتراک گذاشته شود.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} class="card-glow group bg-ink-900 border border-white/10 rounded-3xl p-7 hover:-translate-y-2">
                <div class={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-5`}>{v.icon}</div>
                <h3 class="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div class="text-center mt-10">
            <a href={hashPath("/charter")} class="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold transition-colors">
              مطالعهٔ مرام‌نامهٔ کاشان‌لاگ
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/></svg>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
