import m from "mithril";
import { type Post } from "@/data/blog";
import { hashPath, faDigit } from "@/lib/utils";

interface Attrs { post: Post }

export class PostHeader implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { post } = attrs;
    return (
      <div class="mb-10">
        <div class="flex items-center gap-2 text-sm text-dim mb-8">
          <a href={hashPath("/blog")} class="hover:text-fore transition-colors">پست‌های آزاد</a>
          <span>/</span>
          <span class="text-fore2">{post.category}</span>
        </div>

        <div class="flex flex-wrap items-center gap-3 mb-5">
          <span class="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold">{post.category}</span>
          <span class="text-dim text-sm">{faDigit(post.readMinutes)} دقیقه مطالعه</span>
        </div>
        <h1 class="text-3xl sm:text-4xl font-black text-fore leading-snug mb-5">{post.title}</h1>
        <div class="flex items-center gap-4 pb-6 border-b border-ui">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-black text-sm">
            {post.author[0]}
          </div>
          <div>
            <div class="text-fore font-bold text-sm">{post.author}</div>
            <div class="text-dim text-xs">{post.date}</div>
          </div>
          <div class="mr-auto font-mono text-brand-500/50 text-sm" dir="ltr">~/{post.tag}</div>
        </div>

        <div class="relative h-28 rounded-2xl bg-card border border-ui flex items-center justify-center overflow-hidden mt-8">
          <div class="absolute inset-0 bg-grid dark:bg-grid-dark opacity-60"></div>
          <span dir="ltr" class="relative font-mono text-4xl text-brand-500/50">~/{post.tag}</span>
        </div>
      </div>
    );
  }
}
