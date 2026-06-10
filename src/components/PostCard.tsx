import m from "mithril";
import { type Post } from "@/data/blog";
import { hashPath, faDigit } from "@/lib/utils";

interface Attrs {
  post:     Post;
  compact?: boolean;
}

export class PostCard implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { post: p, compact } = attrs;
    return (
      <a
        href={hashPath(`/blog/${p.slug}`)}
        class="card-glow group bg-card border border-ui rounded-3xl overflow-hidden hover:-translate-y-2 flex flex-col transition-all"
      >
        <div class={`relative ${compact ? "h-36" : "h-40"} bg-card2 flex items-center justify-center overflow-hidden`}>
          <div class="absolute inset-0 bg-grid dark:bg-grid-dark opacity-60"></div>
          <span dir="ltr" class="relative font-mono text-3xl text-brand-500/60 group-hover:scale-110 transition-transform">~/{p.tag}</span>
          {!compact && (
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/70 backdrop-blur text-[11px] text-fore2 border border-ui">
              {p.category}
            </span>
          )}
        </div>
        <div class="p-6 flex flex-col flex-1">
          {compact ? (
            <div class="text-xs text-dim mb-3">{p.author} - {p.date}</div>
          ) : (
            <div class="flex items-center gap-3 text-xs text-dim mb-3">
              <span>{p.author}</span>
              <span class="w-1 h-1 rounded-full bg-dim/50"></span>
              <span>{p.date}</span>
            </div>
          )}
          <h3 class="text-fore font-bold leading-snug mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
            {p.title}
          </h3>
          <p class={`text-muted text-sm leading-relaxed flex-1 ${compact ? "line-clamp-2" : "mb-5 line-clamp-3"}`}>
            {p.excerpt}
          </p>
          <div class={`${compact ? "mt-4" : "mt-auto"} pt-4 border-t border-ui flex items-center justify-between`}>
            <span class="text-brand-600 dark:text-brand-400 text-sm font-bold inline-flex items-center gap-1">
              بیشتر بخوانید
              {!compact && (
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/>
                </svg>
              )}
            </span>
            <span class="text-dim text-xs">{faDigit(p.readMinutes)} {compact ? "دقیقه" : "دقیقه مطالعه"}</span>
          </div>
        </div>
      </a>
    );
  }
}
