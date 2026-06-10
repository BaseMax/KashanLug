import m from "mithril";
import { Layout }       from "@/components/Layout";
import { PostHeader }   from "@/sections/blog/PostHeader";
import { PostContent }  from "@/sections/blog/PostContent";
import { PostNav }      from "@/sections/blog/PostNav";
import { posts }        from "@/data/blog";
import { hashPath, setTitle } from "@/lib/utils";

export class BlogPost implements Mithril.ClassComponent {
  oninit()   { this.syncTitle(); window.scrollTo(0, 0); }
  onupdate() { this.syncTitle(); window.scrollTo(0, 0); }

  private syncTitle() {
    const post = posts.find((p) => p.slug === m.route.param("slug"));
    setTitle(post?.title ?? "مقاله");
  }

  view() {
    const slug = m.route.param("slug") as string;
    const post = posts.find((p) => p.slug === slug);
    const idx  = post ? posts.indexOf(post) : -1;
    const prev = idx > 0 ? posts[idx - 1] : null;
    const next = idx < posts.length - 1 ? posts[idx + 1] : null;

    if (!post) {
      return (
        <Layout>
          <main class="pt-32 pb-24 min-h-screen flex items-center justify-center">
            <div class="text-center">
              <p class="font-mono text-dim mb-4" dir="ltr">404 - post not found</p>
              <a href={hashPath("/blog")} class="text-brand-600 dark:text-brand-400 font-bold">بازگشت به بلاگ</a>
            </div>
          </main>
        </Layout>
      );
    }

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-500/6 -top-10 right-0"></div>
          <div class="relative max-w-3xl mx-auto px-4 sm:px-6">
            <PostHeader post={post} />
            <PostContent post={post} />
            <PostNav prev={prev} next={next} />
          </div>
        </main>
      </Layout>
    );
  }
}
