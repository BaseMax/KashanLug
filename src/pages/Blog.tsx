import m from "mithril";
import { Layout } from "../components/Layout";
import { posts } from "../data/blog";
import { setTitle } from "../lib/utils";

const RouteLink = m.route.Link;

interface State {
  query: string;
  category: string;
}

const ALL_CATS = ["همه", ...Array.from(new Set(posts.map((p) => p.category)))];

export const Blog: m.Component<Record<string, never>, State> = {
  oninit(vnode) {
    setTitle("پست‌های آزاد");
    vnode.state.query = "";
    vnode.state.category = "همه";
  },
  view(vnode) {
    const { query, category } = vnode.state;
    const filtered = posts.filter((p) => {
      const matchCat = category === "همه" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-600/10 -top-10 left-0"></div>

          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-black text-white title-underline pb-2 mb-6 inline-block">پست‌های آزاد</h1>
              <p class="text-gray-400 max-w-xl mx-auto">مقالاتی از اعضای جامعهٔ لینوکس کاشان دربارهٔ نرم‌افزار آزاد، زیرساخت و توسعه.</p>
            </div>

            {/* Controls */}
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-10">
              <div class="relative flex-1">
                <svg class="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  value={query}
                  oninput={(e: InputEvent) => { vnode.state.query = (e.target as HTMLInputElement).value; }}
                  placeholder="جستجو در مقاله‌ها..."
                  class="w-full pr-12 pl-4 py-3 rounded-2xl bg-ink-900 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
                />
              </div>
              <div class="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
                {ALL_CATS.map((cat) => (
                  <button
                    onclick={() => { vnode.state.category = cat; }}
                    class={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      category === cat
                        ? "bg-brand-500 text-white"
                        : "bg-ink-900 text-gray-300 border border-white/10 hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <RouteLink href={`/blog/${p.slug}`}
                    class="card-glow group bg-ink-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 flex flex-col block">
                    <div class="relative h-40 bg-gradient-to-br from-ink-800 to-ink-850 flex items-center justify-center overflow-hidden">
                      <div class="absolute inset-0 bg-grid opacity-40"></div>
                      <span class="relative font-mono text-3xl text-brand-400/80 group-hover:scale-110 transition-transform">
                        ~/{p.tag}
                      </span>
                      <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur text-[11px] text-gray-300 border border-white/10">
                        {p.category}
                      </span>
                    </div>
                    <div class="p-6 flex flex-col flex-1">
                      <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span>{p.author}</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{p.date}</span>
                      </div>
                      <h3 class="text-white font-bold leading-snug mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{p.excerpt}</p>
                      <div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span class="text-brand-400 text-sm font-bold inline-flex items-center gap-1">
                          بیشتر بخوانید
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/>
                          </svg>
                        </span>
                        <span class="text-gray-500 text-xs">{p.readMinutes} دقیقه مطالعه</span>
                      </div>
                    </div>
                  </RouteLink>
                ))}
              </div>
            ) : (
              <div class="py-20 text-center text-gray-500">
                <p class="font-mono" dir="ltr">$ grep "{query}" posts/ → no results</p>
                <p class="mt-2">مقاله‌ای با این مشخصات یافت نشد.</p>
              </div>
            )}

            {filtered.length > 0 && (
              <p class="mt-12 text-center text-gray-600 text-sm font-mono" dir="ltr">- end of list -</p>
            )}
          </div>
        </main>
      </Layout>
    );
  },
};
