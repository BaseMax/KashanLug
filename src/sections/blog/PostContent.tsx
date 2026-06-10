import m from "mithril";
import { type Post } from "@/data/blog";

interface Attrs { post: Post }

export class PostContent implements Mithril.ClassComponent<Attrs> {
  view({ attrs }: Mithril.CVnode<Attrs>) {
    const { post } = attrs;
    return (
      <>
        <article class="space-y-5 mb-12">
          {post.content.map((para, i) => (
            <p key={i} class="text-fore2 leading-[1.9] text-base sm:text-lg">{para}</p>
          ))}
        </article>

        <div class="flex flex-wrap items-center gap-3 py-6 border-y border-ui mb-10">
          <span class="text-dim text-sm">دسته‌بندی:</span>
          <span class="px-3 py-1 rounded-full bg-card2 border border-ui text-fore2 text-sm">{post.category}</span>
        </div>
      </>
    );
  }
}
