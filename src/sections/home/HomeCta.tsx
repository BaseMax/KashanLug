import m from "mithril";
import { hashPath } from "@/lib/utils";

export class HomeCta implements Mithril.ClassComponent {
  view() {
    return (
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
                <a href={hashPath("/join")}
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-brand-700 bg-white hover:-translate-y-1 transition-all shadow-xl">
                  همکاری با ما
                </a>
                <a href="https://t.me/KashanLUG" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-white/15 border border-white/30 hover:bg-white/25 transition-all">
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
