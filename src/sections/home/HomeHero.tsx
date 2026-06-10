import m from "mithril";
import { TerminalCard } from "@/components/TerminalCard";
import { hashPath } from "@/lib/utils";

export class HomeHero implements Mithril.ClassComponent {
  view() {
    return (
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
                فناوری‌های متن‌باز است؛ فضایی دوستانه برای یادگیری، تبادل تجربه و ساختن در کنار یکدیگر.
              </p>

              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 fade-in-up" style="animation-delay:.24s">
                <a href={hashPath("/event")}
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 shadow-xl shadow-brand-900/40 hover:-translate-y-1 transition-all">
                  مشاهدهٔ رویداد «زندگی در سایه»
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
                </a>
                <a href={hashPath("/join")}
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  همکاری با ما
                </a>
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
    );
  }
}
