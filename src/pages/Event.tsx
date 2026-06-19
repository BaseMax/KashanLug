import m from "mithril";
import { Layout }           from "@/components/Layout";
import { EventHero }        from "@/sections/event/EventHero";
import { EventTopics }      from "@/sections/event/EventTopics";
import { EventLead }        from "@/sections/event/EventLead";
import { EventSpeakers }    from "@/sections/event/EventSpeakers";
import { EventSchedule }    from "@/sections/event/EventSchedule";
import { EventOrganizers }  from "@/sections/event/EventOrganizers";
import { setTitle }         from "@/lib/utils";

export class Event implements Mithril.ClassComponent {
  oninit() { setTitle("رویداد دانش بی‌مرز"); }

  view() {
    return (
      <Layout>
        <main class="pt-24 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-brand-500/8 -top-10 right-0"></div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <EventHero />
            <EventTopics />
            <EventLead />
            <EventSpeakers />
            <EventSchedule />
            <EventOrganizers />
          </div>
        </main>
      </Layout>
    );
  }
}
