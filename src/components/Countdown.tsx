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
      { v: this.cd.days,  l: "روز",   grad: "from-amber-400/30 to-amber-700/10",    border: "border-amber-300/40",   num: "text-amber-950 dark:text-amber-100",   dot: "bg-amber-300"   },
      { v: this.cd.hours, l: "ساعت",  grad: "from-sky-400/30 to-sky-700/10",        border: "border-sky-300/40",     num: "text-sky-950 dark:text-sky-100",       dot: "bg-sky-300"     },
      { v: this.cd.mins,  l: "دقیقه", grad: "from-violet-400/30 to-violet-700/10",  border: "border-violet-300/40",  num: "text-violet-950 dark:text-violet-100", dot: "bg-violet-300"  },
      { v: this.cd.secs,  l: "ثانیه", grad: "from-emerald-400/30 to-emerald-700/10",border: "border-emerald-300/40", num: "text-emerald-950 dark:text-emerald-100",dot: "bg-emerald-300" },
    ];
    return (
      <div dir="ltr" class="grid grid-cols-4 gap-2.5">
        {items.map((item) => (
          <div key={item.l} class={`relative overflow-hidden bg-gradient-to-b ${item.grad} border ${item.border} rounded-2xl py-3.5 text-center backdrop-blur-sm`}>
            <div class={`absolute top-0 inset-x-0 h-[2px] ${item.dot} opacity-60`}></div>
            <div class={`text-2xl sm:text-3xl font-black tabular-nums ${item.num}`}>{item.v}</div>
            <div class="flex items-center justify-center gap-1 mt-1.5">
              <div class={`w-1 h-1 rounded-full ${item.dot} opacity-50`}></div>
              <div class="text-[10px] text-black/60 dark:text-white/55">{item.l}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
