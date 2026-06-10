import m from "mithril";
import { Layout }     from "@/components/Layout";
import { PostCard }   from "@/components/PostCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { posts }      from "@/data/blog";
import { setTitle }   from "@/lib/utils";

const ALL_CATS = ["همه", ...Array.from(new Set(posts.map((p) => p.category)))];

export class Blog implements Mithril.ClassComponent {
  query    = "";
  category = "همه";

  oninit() { setTitle("پست‌های آزاد"); }

  view() {
    const filtered = posts.filter((p) => {
      const matchCat = this.category === "همه" || p.category === this.category;
      const q = this.query.trim().toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.author.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-500/8 -top-10 left-0"></div>

          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-black text-fore title-underline pb-2 mb-6 inline-block">پست‌های آزاد</h1>
              <p class="text-muted max-w-xl mx-auto">مقالاتی از اعضای جامعهٔ لینوکس کاشان دربارهٔ نرم‌افزار آزاد، زیرساخت و توسعه.</p>
            </div>

            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-10">
              <div class="relative flex-1">
                <svg class="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  value={this.query}
                  oninput={(e: InputEvent) => { this.query = (e.target as HTMLInputElement).value; }}
                  placeholder="جستجو در مقاله‌ها..."
                  class="w-full pr-12 pl-4 py-3 rounded-2xl bg-card border border-ui text-fore placeholder:text-dim focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
                />
              </div>
              <div class="overflow-x-auto no-scrollbar">
                <FilterTabs
                  items={ALL_CATS}
                  active={this.category}
                  onchange={(cat: string) => { this.category = cat; }}
                />
              </div>
            </div>

            {filtered.length > 0 ? (
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            ) : (
              <div class="py-20 text-center text-dim">
                <p class="font-mono" dir="ltr">$ grep "{this.query}" posts/ → no results</p>
                <p class="mt-2">مقاله‌ای با این مشخصات یافت نشد.</p>
              </div>
            )}

            {filtered.length > 0 && (
              <p class="mt-12 text-center text-dim text-sm font-mono" dir="ltr">- end of list -</p>
            )}
          </div>
        </main>
      </Layout>
    );
  }
}
