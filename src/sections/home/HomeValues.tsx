import m from "mithril";
import { homeValues } from "@/data/homeValues";
import { hashPath }   from "@/lib/utils";

export class HomeValues implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-fore title-underline pb-2 mb-5 inline-block">چرا کاشان‌لاگ؟</h2>
            <p class="text-muted leading-relaxed">باور ما این است که دانش زمانی بیشترین ارزش را دارد که آزادانه به اشتراک گذاشته شود.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeValues.map((v) => (
              <div key={v.title} class="card-glow group bg-card border border-ui rounded-3xl p-7 hover:-translate-y-2 transition-all">
                <div class={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-5`}>{v.icon}</div>
                <h3 class="text-fore font-bold text-lg mb-2">{v.title}</h3>
                <p class="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div class="text-center mt-10">
            <a href={hashPath("/charter")} class="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold transition-colors">
              مطالعهٔ مرام‌نامهٔ کاشان‌لاگ
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/></svg>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
