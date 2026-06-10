import m from "mithril";
import { calcCountdown, type CountdownData } from "@/lib/utils";

export class Countdown implements Mithril.ClassComponent {
  cd: CountdownData = { days: "۰۰", hours: "۰۰", mins: "۰۰", secs: "۰۰", done: false };
  interval: ReturnType<typeof setInterval> | null = null;

  oninit() {
    this.cd = calcCountdown();
    this.interval = setInterval(() => {
      this.cd = calcCountdown();
      m.redraw();
    }, 1000);
  }

  onremove() {
    if (this.interval != null) clearInterval(this.interval);
  }

  view() {
    const items = [
      { v: this.cd.days,  l: "روز"   },
      { v: this.cd.hours, l: "ساعت"  },
      { v: this.cd.mins,  l: "دقیقه" },
      { v: this.cd.secs,  l: "ثانیه" },
    ];
    return (
      <div class="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.l} class="bg-black/25 border border-white/15 rounded-2xl py-4 text-center backdrop-blur-sm">
            <div class="text-2xl sm:text-3xl font-black text-white tabular-nums">{item.v}</div>
            <div class="text-[11px] text-white/50 mt-1">{item.l}</div>
          </div>
        ))}
      </div>
    );
  }
}
