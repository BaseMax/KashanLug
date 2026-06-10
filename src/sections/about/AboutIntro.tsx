import m from "mithril";

export class AboutIntro implements Mithril.ClassComponent {
  view() {
    return (
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ui border border-ui text-sm text-fore2 mb-7 font-mono" dir="ltr">
          whoami → kashanlug
        </div>
        <h1 class="text-4xl sm:text-5xl font-black text-fore mb-5">دربارهٔ کاشان‌لاگ</h1>
        <p class="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          جامعه‌ای مستقل از علاقه‌مندان به گنو/لینوکس، نرم‌افزار آزاد و فناوری‌های متن‌باز در کاشان.
        </p>
      </div>
    );
  }
}
