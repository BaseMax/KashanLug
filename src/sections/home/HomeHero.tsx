import m from "mithril";
import { TerminalCard } from "@/components/TerminalCard";
import { hashPath } from "@/lib/utils";

const HERO_STATS: readonly { val: string; label: string }[] = [
  { val: "۷+", label: "سخنران"         },
  { val: "۱۳", label: "عضو تیم اجرایی" },
  { val: "۴h", label: "برنامهٔ فشرده"  },
];

export class HomeHero implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700">

        {/* ── Background layers ── */}
        {/* Grid pattern */}
        <div class="absolute inset-0 bg-hero-pattern opacity-100 pointer-events-none"></div>

        {/* Radial glow blobs */}
        <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-400/40 blur-[100px] pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-orange-700/50 blur-[80px] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-600/30 blur-[120px] pointer-events-none"></div>

        {/* Decorative floating circles */}
        <div class="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-white/30 animate-float pointer-events-none"></div>
        <div class="absolute top-[35%] left-[5%] w-2 h-2 rounded-full bg-white/25 pointer-events-none" style="animation:float 7s ease-in-out infinite;animation-delay:1s"></div>
        <div class="absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-white/20 pointer-events-none" style="animation:float 9s ease-in-out infinite;animation-delay:2s"></div>
        <div class="absolute top-[20%] right-[8%] w-2.5 h-2.5 rounded-full bg-white/25 pointer-events-none" style="animation:float 8s ease-in-out infinite;animation-delay:0.5s"></div>
        <div class="absolute bottom-[25%] right-[5%] w-3.5 h-3.5 rounded-full bg-white/20 pointer-events-none" style="animation:float 6s ease-in-out infinite;animation-delay:1.5s"></div>

        {/* Decorative rings */}
        <div class="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-white/10 pointer-events-none"></div>
        <div class="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-white/8 pointer-events-none"></div>
        <div class="absolute top-10 left-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none"></div>

        {/* Gradient fade to page background at bottom */}
        <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-brand-700/60 pointer-events-none"></div>

        {/* ── Content ── */}
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* Left: Text content */}
            <div class="text-center lg:text-right order-2 lg:order-1">

              {/* Live badge */}
              <div class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-light text-white text-sm font-bold mb-8 fade-in-up">
                <span class="relative flex h-2.5 w-2.5 shrink-0">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
                </span>
                ثبت‌نام رویداد آغاز شد
              </div>

              {/* Heading */}
              <h1
                class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 fade-in-up"
                style="animation-delay:.08s"
              >
                جایی برای{" "}
                <span class="text-gradient">دانشِ آزاد</span>
                <br class="hidden sm:block" />
                و جامعهٔ متن‌باز کاشان
              </h1>

              {/* Description */}
              <p
                class="text-white/85 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 fade-in-up"
                style="animation-delay:.16s"
              >
                کاشان‌لاگ اجتماع کاربران و علاقه‌مندان به گنو/لینوکس، نرم‌افزار آزاد و
                فناوری‌های متن‌باز است؛ فضایی دوستانه برای یادگیری، تبادل تجربه و ساختن در کنار یکدیگر.
              </p>

              {/* CTA buttons */}
              <div
                class="flex flex-wrap items-center justify-center lg:justify-start gap-4 fade-in-up"
                style="animation-delay:.24s"
              >
                <a
                  href={hashPath("/event")}
                  class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-brand-700 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all shadow-xl"
                >
                  مشاهدهٔ رویداد «زندگی در سایه»
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                  </svg>
                </a>
                <a
                  href={hashPath("/join")}
                  class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-white glass-light hover:-translate-y-1 transition-all"
                >
                  همکاری با ما
                </a>
              </div>

              {/* Stats */}
              <div
                class="grid grid-cols-3 gap-px max-w-md mx-auto lg:mx-0 mt-12 rounded-2xl overflow-hidden fade-in-up"
                style="animation-delay:.32s"
              >
                {HERO_STATS.map((s) => (
                  <div key={s.label} class="glass-light px-4 py-5 text-center lg:text-right">
                    <div class="text-3xl font-black text-white">{s.val}</div>
                    <div class="text-xs text-white/70 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Terminal card */}
            <div class="fade-in-up order-1 lg:order-2" style="animation-delay:.2s">
              <TerminalCard />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div class="absolute bottom-6 inset-x-0 flex justify-center">
          <button
            class="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-0 p-0"
            onclick={() => document.getElementById("home-event")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span class="text-xs font-medium">اسکرول کنید</span>
            <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      </section>
    );
  }
}
