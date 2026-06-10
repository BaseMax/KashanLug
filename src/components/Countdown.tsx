import m from "mithril";
import { calcCountdown, type CountdownData } from "@/lib/utils";

interface CellConfig {
  readonly key:    keyof Omit<CountdownData, "done">;
  readonly label:  string;
  readonly grad:   string;
  readonly border: string;
  readonly num:    string;
  readonly dot:    string;
}

const CELLS: readonly CellConfig[] = [
  { key: "days",  label: "روز",   grad: "from-amber-400/30 to-amber-700/10",     border: "border-amber-300/40",   num: "text-amber-950 dark:text-amber-100",    dot: "bg-amber-300"   },
  { key: "hours", label: "ساعت",  grad: "from-sky-400/30 to-sky-700/10",         border: "border-sky-300/40",     num: "text-sky-950 dark:text-sky-100",        dot: "bg-sky-300"     },
  { key: "mins",  label: "دقیقه", grad: "from-violet-400/30 to-violet-700/10",   border: "border-violet-300/40",  num: "text-violet-950 dark:text-violet-100",  dot: "bg-violet-300"  },
  { key: "secs",  label: "ثانیه", grad: "from-emerald-400/30 to-emerald-700/10", border: "border-emerald-300/40", num: "text-emerald-950 dark:text-emerald-100", dot: "bg-emerald-300" },
];

export class Countdown implements Mithril.ClassComponent {
  cd: CountdownData = { days: "۰۰", hours: "۰۰", mins: "۰۰", secs: "۰۰", done: false };
  interval: ReturnType<typeof setInterval> | null = null;

  oninit(): void {
    this.cd = calcCountdown();
    this.interval = setInterval(() => {
      this.cd = calcCountdown();
      m.redraw();
    }, 1000);
  }

  onremove(): void {
    if (this.interval != null) clearInterval(this.interval);
  }

  view(): m.Vnode {
    return (
      <div dir="ltr" class="grid grid-cols-4 gap-2.5">
        {CELLS.map((c) => (
          <div key={c.key} class={`relative overflow-hidden bg-gradient-to-b ${c.grad} border ${c.border} rounded-2xl py-3.5 text-center backdrop-blur-sm`}>
            <div class={`absolute top-0 inset-x-0 h-[2px] ${c.dot} opacity-60`}></div>
            <div class={`text-2xl sm:text-3xl font-black tabular-nums ${c.num}`}>{this.cd[c.key]}</div>
            <div class="flex items-center justify-center gap-1 mt-1.5">
              <div class={`w-1 h-1 rounded-full ${c.dot} opacity-50`}></div>
              <div class="text-[10px] text-black/60 dark:text-white/55">{c.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
