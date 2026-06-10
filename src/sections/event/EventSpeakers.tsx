import m from "mithril";
import { SpeakerCard } from "@/components/SpeakerCard";
import { speakers }    from "@/data/event";

export class EventSpeakers implements Mithril.ClassComponent {
  view() {
    return (
      <section class="mb-16">
        <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 mb-8 inline-block">سخنرانان</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} speaker={s} />
          ))}
        </div>
      </section>
    );
  }
}
