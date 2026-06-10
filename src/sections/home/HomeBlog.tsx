import m from "mithril";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/blog";
import { hashPath } from "@/lib/utils";

export class HomeBlog implements Mithril.ClassComponent {
  view() {
    return (
      <section class="relative py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 class="text-3xl sm:text-4xl font-black text-white title-underline pb-2 inline-block">از پست‌های آزاد</h2>
              <p class="text-gray-400 mt-4">مقالاتی از اعضای جامعهٔ کاشان‌لاگ</p>
            </div>
            <a href={hashPath("/blog")} class="text-brand-400 hover:text-brand-300 font-bold text-sm">همهٔ مقاله‌ها ›</a>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} compact />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
