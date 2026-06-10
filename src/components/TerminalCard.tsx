import m from "mithril";

export class TerminalCard implements Mithril.ClassComponent {
  typed = "";
  done  = false;
  private interval: ReturnType<typeof setInterval> | null = null;

  oninit() {
    const full = "sudo apt-get install kashanlug";
    let i = 0;
    this.interval = setInterval(() => {
      this.typed += full[i++] ?? "";
      if (i >= full.length) {
        clearInterval(this.interval!);
        this.interval = null;
        setTimeout(() => { this.done = true; m.redraw(); }, 300);
      }
      m.redraw();
    }, 70);
  }

  onremove() { if (this.interval) clearInterval(this.interval); }

  view() {
    return (
      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-tr from-brand-600/30 to-term-600/20 rounded-3xl blur-xl"></div>
        <div class="relative bg-ink-900/90 backdrop-blur border border-white/10 rounded-3xl overflow-hidden shadow-2xl" dir="ltr">
          <div class="flex items-center gap-2 px-4 py-3 bg-ink-850 border-b border-white/5">
            <div class="w-3 h-3 rounded-full bg-red-500/90"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/90"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/90"></div>
            <span class="ml-auto font-mono text-xs text-gray-500">kashanlug@server: ~</span>
          </div>
          <div class="p-5 sm:p-6 font-mono text-sm leading-relaxed">
            <div class="flex flex-wrap items-center">
              <span class="text-term-400">user@kashanlug</span>
              <span class="text-gray-500">:</span>
              <span class="text-brand-400">~</span>
              <span class="text-gray-500">$ </span>
              <span class="text-gray-200">{this.typed}</span>
              {!this.done && <span class="caret"></span>}
            </div>
            {this.done && (
              <div class="mt-3 space-y-1 text-gray-400">
                <p>Reading package lists... <span class="text-term-400">Done</span></p>
                <p>Building dependency tree... <span class="text-term-400">Done</span></p>
                <p class="text-gray-300">The following NEW packages will be installed:</p>
                <p class="text-brand-300 pl-4">community knowledge open-source linux freedom</p>
                <p class="text-gray-500">Need to get 0 B. Membership is <span class="text-term-400">free</span>.</p>
                <p class="text-white">✔ <span dir="rtl" class="font-sans">به کاشان‌لاگ خوش آمدید!</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
