import m from "mithril";
import { calcCountdown, type CountdownData } from "../lib/utils";

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
    const { days, hours, mins, secs } = this.cd;
    const items = [
      { v: days,  l: "روز"   },
      { v: hours, l: "ساعت"  },
      { v: mins,  l: "دقیقه" },
      { v: secs,  l: "ثانیه" },
    ];
    return (
      <div class="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <div class="bg-ink-950/60 border border-white/10 rounded-2xl py-4 text-center">
            <div class="text-2xl sm:text-3xl font-black text-white tabular-nums">{item.v}</div>
            <div class="text-[11px] text-gray-500 mt-1">{item.l}</div>
          </div>
        ))}
      </div>
    );
  }
}
