import m from "mithril";
import { type Member } from "@/data/team";

interface Attrs {
  member:  Member;
  onclick: () => void;
}

export class MemberCard implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { member, onclick } = attrs;
    return (
      <button
        onclick={onclick}
        class="cursor-pointer card-glow group bg-card border border-ui rounded-3xl p-6 text-center hover:-translate-y-2 w-full transition-all"
      >
        <div class="relative w-20 h-20 mx-auto mb-4">
          <img src={member.avatar} alt={member.name} class="w-20 h-20 rounded-2xl object-cover" loading="lazy" />
          {member.lead && (
            <div class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-500 rounded-full border-2 border-card flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          )}
        </div>
        <div class="font-bold text-fore text-sm leading-snug">{member.name}</div>
        <div class="text-dim text-xs mt-1.5">{member.role}</div>
        {member.badge && (
          <span class="mt-3 inline-block px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-bold">
            {member.badge}
          </span>
        )}
      </button>
    );
  }
}
