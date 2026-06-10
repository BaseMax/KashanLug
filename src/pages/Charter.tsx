import m from "mithril";
import { Layout }           from "@/components/Layout";
import { charterSections }  from "@/data/charter";
import { hashPath, setTitle } from "@/lib/utils";

export class Charter implements Mithril.ClassComponent {
  oninit() { setTitle("مرام‌نامه"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-500/8 -top-10 right-0"></div>

          <div class="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <h1 class="text-4xl sm:text-5xl font-black text-fore mb-4">مرام‌نامهٔ کاشان‌لاگ</h1>
              <p class="text-muted max-w-xl mx-auto">اصول، ارزش‌ها و چارچوب حاکمیتی جامعهٔ کاشان‌لاگ</p>
            </div>

            <div class="relative rounded-2xl bg-brand-500/8 border border-brand-500/20 p-7 mb-12">
              <div class="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-bl-[5rem]"></div>
              <p class="text-fore2 leading-relaxed relative z-10">
                این مرام‌نامه اصول بنیادین، ارزش‌ها و چارچوب فعالیت کاشان‌لاگ را تعریف
                می‌کند. هدف ما ایجاد یک جامعهٔ فنی سالم، آزاد و مستقل در کاشان است که
                بر پایهٔ اشتراک دانش و احترام متقابل بنا شده باشد.
              </p>
            </div>

            <div class="space-y-10">
              {charterSections.map((sec) => (
                <section key={sec.n}>
                  <div class="flex items-center gap-4 mb-6">
                    <span class="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-400 font-black text-sm flex items-center justify-center">{sec.n}</span>
                    <h2 class="text-2xl font-black text-fore">{sec.title}</h2>
                  </div>
                  <div class="space-y-3 pr-14">
                    {sec.articles.map((a) => (
                      <div key={a.n} class="flex items-start gap-4 p-5 rounded-2xl bg-card border border-ui">
                        <span class="text-brand-500/70 text-xs font-mono shrink-0 mt-0.5 w-8">{a.n}</span>
                        <p class="text-fore2 text-sm leading-relaxed">{a.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div class="mt-14 pt-8 border-t border-ui text-center">
              <p class="text-dim text-sm">
                این مرام‌نامه توسط هستهٔ اجرایی کاشان‌لاگ نوشته شده و در صورت اجماع جامعه قابل ویرایش است.
              </p>
              <div class="flex justify-center gap-4 mt-6">
                <a href={hashPath("/about")} class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold text-sm transition-colors">دربارهٔ ما</a>
                <span class="text-dim">·</span>
                <a href={hashPath("/join")} class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold text-sm transition-colors">همکاری</a>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
