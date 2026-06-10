import m from "mithril";
import { SpeakerCard } from "@/components/SpeakerCard";
import { speakers } from "@/data/event";
import { hashPath } from "@/lib/utils";

export class HomeSpeakers implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-16 sm:py-20 bg-ink-900/40 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 inline-block">سخنرانان رویداد</h2>
              <p class="text-gray-400 mt-4">متخصصان و فعالان حوزهٔ فناوری و متن‌باز</p>
            </div>
            <a href={hashPath("/event")} class="text-brand-400 hover:text-brand-300 font-bold text-sm">مشاهدهٔ همه ›</a>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {speakers.slice(0, 4).map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
