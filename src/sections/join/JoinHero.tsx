import m from "mithril";

export class JoinHero implements Mithril.ClassComponent {
  view() {
    return (
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-term-500/10 text-term-600 dark:text-term-400 text-sm font-bold mb-7 border border-term-500/20">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-400 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-term-500"></span>
          </span>
          جذب همکار فعال
        </div>
        <h1 class="text-4xl sm:text-5xl font-black text-fore mb-5">جای تو خالی است</h1>
        <p class="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          کاشان‌لاگ یک پروژهٔ مشارکتی است. با هر مهارت و سطح تجربه‌ای که داری،
          می‌توانی در ساختن این جامعه سهیم باشی.
        </p>
      </div>
    );
  }
}
