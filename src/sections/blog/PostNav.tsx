import m from "mithril";
import { type Post } from "@/data/blog";
import { hashPath } from "@/lib/utils";

interface Attrs {
  prev: Post | null;
  next: Post | null;
}

export class PostNav implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { prev, next } = attrs;
    return (
      <>
        <div class="grid sm:grid-cols-2 gap-4">
          {next && (
            <a href={hashPath(`/blog/${next.slug}`)} onclick={() => window.scrollTo(0, 0)}
              class="group flex flex-col p-5 rounded-2xl bg-card border border-ui hover:border-brand-500/30 transition-all">
              <span class="text-dim text-xs mb-2">مطلب بعدی</span>
              <span class="text-fore font-bold text-sm leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">{next.title}</span>
            </a>
          )}
          {prev && (
            <a href={hashPath(`/blog/${prev.slug}`)} onclick={() => window.scrollTo(0, 0)}
              class="group flex flex-col p-5 rounded-2xl bg-card border border-ui hover:border-brand-500/30 transition-all sm:text-left">
              <span class="text-dim text-xs mb-2">مطلب قبلی</span>
              <span class="text-fore font-bold text-sm leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">{prev.title}</span>
            </a>
          )}
        </div>

        <div class="mt-8 text-center">
          <a href={hashPath("/blog")} class="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            بازگشت به همهٔ مقاله‌ها
          </a>
        </div>
      </>
    );
  }
}
