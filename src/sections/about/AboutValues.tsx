import m from "mithril";
import { values } from "@/data/about";

export class AboutValues implements Mithril.ClassComponent {
  view() {
    return (
      <div class="mb-20">
        <h2 class="text-2xl font-black text-fore mb-8 text-center">ارزش‌های ما</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} class="flex items-start gap-4 p-5 rounded-2xl bg-card border border-ui">
              <div class="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0"></div>
              <div>
                <div class="text-fore font-bold mb-1">{v.title}</div>
                <p class="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
