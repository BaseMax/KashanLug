import m from "mithril";
import { Layout }        from "@/components/Layout";
import { AboutIntro }    from "@/sections/about/AboutIntro";
import { AboutStory }    from "@/sections/about/AboutStory";
import { AboutStats }    from "@/sections/about/AboutStats";
import { AboutValues }   from "@/sections/about/AboutValues";
import { hashPath, setTitle } from "@/lib/utils";

export class About implements Mithril.ClassComponent {
  oninit() { setTitle("درباره ما"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-brand-500/8 -top-10 right-0"></div>

          <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
            <AboutIntro />
            <AboutStory />
            <AboutStats />
            <AboutValues />

            <div class="grid sm:grid-cols-2 gap-4">
              <a href={hashPath("/charter")}
                class="flex flex-col p-6 rounded-2xl bg-card border border-ui hover:border-brand-500/30 transition-all">
                <div class="text-brand-600 dark:text-brand-400 font-bold mb-2">مرام‌نامه ›</div>
                <p class="text-muted text-sm leading-relaxed">اصول، ارزش‌ها و چارچوب حاکمیتی کاشان‌لاگ را بخوانید.</p>
              </a>
              <a href={hashPath("/join")}
                class="flex flex-col p-6 rounded-2xl bg-brand-500/8 border border-brand-500/20 hover:border-brand-500/40 transition-all">
                <div class="text-brand-600 dark:text-brand-400 font-bold mb-2">همکاری با ما ›</div>
                <p class="text-muted text-sm leading-relaxed">به تیم اجرایی کاشان‌لاگ بپیوندید.</p>
              </a>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
