import m from "mithril";
import { lead } from "@/data/event";
import { initials, avatarGradient } from "@/lib/utils";

export class EventLead implements Mithril.ClassComponent {
  view() {
    return (
      <section class="mb-16">
        <h2 class="text-2xl sm:text-3xl font-black text-fore title-underline pb-2 mb-8 inline-block">راهبر رویداد</h2>
        <div class="flex items-center gap-6 p-6 rounded-3xl bg-card border border-brand-500/20 max-w-md">
          {lead.avatar ? (
            <img src={lead.avatar} alt={lead.name} class="w-20 h-20 rounded-2xl object-cover" />
          ) : (
            <div class={`w-20 h-20 rounded-2xl bg-gradient-to-br ${avatarGradient(lead.name)} flex items-center justify-center text-white font-black text-2xl`}>
              {initials(lead.name)}
            </div>
          )}
          <div>
            <div class="font-bold text-xl text-fore">{lead.name}</div>
            <div class="text-brand-600 dark:text-brand-400 text-sm mt-1">{lead.title}</div>
          </div>
        </div>
      </section>
    );
  }
}
