import m from "mithril";
import { Layout }         from "@/components/Layout";
import { posts }          from "@/data/blog";
import { hashPath, setTitle } from "@/lib/utils";

export class BlogPost implements Mithril.ClassComponent {
  oninit() {
    const slug = m.route.param("slug") as string;
    const post = posts.find((p) => p.slug === slug);
    setTitle(post?.title ?? "مقاله");
    window.scrollTo(0, 0);
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
              <p class="font-mono text-gray-500 mb-4" dir="ltr">404 - post not found</p>
              <a href={hashPath("/blog")} class="text-brand-400 hover:text-brand-300 font-bold">بازگشت به بلاگ</a>
            </div>
          </main>
        </Layout>
      );
    }

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-600/8 -top-10 right-0"></div>

          <div class="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <a href={hashPath("/blog")} class="hover:text-white transition-colors">پست‌های آزاد</a>
              <span>/</span>
              <span class="text-gray-300">{post.category}</span>
            </div>

            <div class="mb-10">
              <div class="flex flex-wrap items-center gap-3 mb-5">
                <span class="px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 text-xs font-bold">{post.category}</span>
                <span class="text-gray-500 text-sm">{post.readMinutes} دقیقه مطالعه</span>
              </div>
              <h1 class="text-3xl sm:text-4xl font-black text-white leading-snug mb-5">{post.title}</h1>
              <div class="flex items-center gap-4 pb-6 border-b border-white/10">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-black text-sm">
                  {post.author[0]}
                </div>
                <div>
                  <div class="text-white font-bold text-sm">{post.author}</div>
                  <div class="text-gray-500 text-xs">{post.date}</div>
                </div>
                <div class="mr-auto font-mono text-brand-400/60 text-sm" dir="ltr">~/{post.tag}</div>
              </div>
            </div>

            <div class="relative h-28 rounded-2xl bg-ink-900 border border-white/10 flex items-center justify-center overflow-hidden mb-10">
              <div class="absolute inset-0 bg-grid opacity-30"></div>
              <span dir="ltr" class="relative font-mono text-4xl text-brand-400/70">~/{post.tag}</span>
            </div>

            <article class="space-y-5 mb-12">
              {post.content.map((para, i) => (
                <p key={i} class="text-gray-300 leading-[1.9] text-base sm:text-lg">{para}</p>
              ))}
            </article>

            <div class="flex flex-wrap items-center gap-3 py-6 border-y border-white/10 mb-10">
              <span class="text-gray-500 text-sm">دسته‌بندی:</span>
              <span class="px-3 py-1 rounded-full bg-ink-800 border border-white/10 text-gray-300 text-sm">{post.category}</span>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              {next && (
                <a href={hashPath(`/blog/${next.slug}`)}
                  class="group flex flex-col p-5 rounded-2xl bg-ink-900 border border-white/10 hover:border-brand-500/30 transition-all">
                  <span class="text-gray-500 text-xs mb-2">مطلب بعدی</span>
                  <span class="text-white font-bold text-sm leading-snug group-hover:text-brand-400 transition-colors line-clamp-2">{next.title}</span>
                </a>
              )}
              {prev && (
                <a href={hashPath(`/blog/${prev.slug}`)}
                  class="group flex flex-col p-5 rounded-2xl bg-ink-900 border border-white/10 hover:border-brand-500/30 transition-all sm:text-left">
                  <span class="text-gray-500 text-xs mb-2">مطلب قبلی</span>
                  <span class="text-white font-bold text-sm leading-snug group-hover:text-brand-400 transition-colors line-clamp-2">{prev.title}</span>
                </a>
              )}
            </div>

            <div class="mt-8 text-center">
              <a href={hashPath("/blog")} class="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                </svg>
                بازگشت به همهٔ مقاله‌ها
              </a>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
