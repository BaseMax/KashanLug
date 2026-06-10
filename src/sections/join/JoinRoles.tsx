import m from "mithril";
import { joinRoles } from "@/data/join";

export class JoinRoles implements Mithril.ClassComponent {
  view() {
    return (
      <div class="mb-14">
        <h2 class="text-xl font-black text-fore mb-5">نقش‌های مورد نیاز</h2>
        <div class="flex flex-wrap gap-3">
          {joinRoles.map((r) => (
            <span key={r} class="px-4 py-2 rounded-xl bg-card2 border border-ui text-fore2 text-sm font-medium hover:border-brand-500/30 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-default">
              {r}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
