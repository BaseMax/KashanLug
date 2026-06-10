import m from "mithril";
import { hashPath } from "@/lib/utils";

export class HomeCta implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-20">
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-10 sm:p-16 text-center shadow-2xl shadow-brand-700/30">
            <div class="absolute inset-0 bg-hero-pattern pointer-events-none"></div>
            {/* Decorative glows */}
            <div class="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand-400/30 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-orange-700/40 blur-3xl pointer-events-none"></div>
            <div class="relative">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-white text-xs font-bold mb-5">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                همکاری باز است
              </div>
              <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">جای تو در تیم ما خالی است</h2>
              <p class="text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
                اگر به فعالیت‌های اوپن‌سورس علاقه‌مندی و از کار تیمی لذت می‌بری،
                با هر مهارت و تجربه‌ای که داری، در ساختن این مسیر همراه ما باش.
              </p>
              <div class="flex flex-wrap items-center justify-center gap-4">
                <a href={hashPath("/join")}
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-brand-700 bg-white hover:-translate-y-1 hover:shadow-xl transition-all shadow-lg">
                  همکاری با ما
                </a>
                <a href="https://t.me/KashanLUG" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white glass-light hover:-translate-y-1 transition-all">
                  کانال تلگرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
