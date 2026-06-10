import m from "mithril";
import { navItems, site } from "../data/site";

/** Compute the href for hash-based routing (prefix "#"). */
function hashHref(path: string): string {
  return `#${path}`;
}

export class Header implements Mithril.ClassComponent {
  open = false;
  scrolled = false;

  private onScroll = () => {
    this.scrolled = window.scrollY > 50;
    m.redraw();
  };

  oninit() {
    this.scrolled = window.scrollY > 50;
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  onremove() {
    window.removeEventListener("scroll", this.onScroll);
  }

  view() {
    const { open, scrolled } = this;
    const current = m.route.get() ?? "/";

    const linkCls = (href: string) => {
      const active = current === href || (href !== "/" && current.startsWith(href));
      return `relative text-sm font-medium transition-colors ${
        active
          ? "text-brand-400 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand-500"
          : "text-gray-300 hover:text-white"
      }`;
    };

    return (
      <header class={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-ink-950/80 border-b border-white/5 shadow-xl shadow-black/30" : "bg-transparent"
      }`}>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex items-center justify-between h-16 sm:h-20">
            <a href={hashHref("/")} class="flex items-center gap-3 shrink-0">
              <img src={site.logo} alt="لوگوی کاشان‌لاگ" class="w-9 h-9 rounded-xl object-contain" />
              <div class="hidden sm:block">
                <div class="font-black text-white text-base leading-tight">{site.name}</div>
                <div class="text-[10px] text-gray-500 leading-tight" dir="ltr">{site.nameEn}</div>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a href={hashHref(item.href)} class={linkCls(item.href)}>{item.label}</a>
              ))}
            </nav>

            <div class="hidden lg:flex items-center gap-3">
              <a href={hashHref("/join")}
                class="px-4 py-2 rounded-xl text-sm font-bold text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                همکاری
              </a>
              <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                class="px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:opacity-90 transition-opacity shadow-lg shadow-brand-900/30">
                خرید بلیت
              </a>
            </div>

            <button
              class="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              onclick={() => { this.open = !open; }}
              aria-label="منوی ناوبری"
            >
              {open ? (
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div class="lg:hidden bg-ink-900/95 backdrop-blur-xl border-b border-white/10">
            <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  href={hashHref(item.href)}
                  class={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    current === item.href ? "bg-brand-500/10 text-brand-400" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onclick={() => { this.open = false; }}
                >
                  {item.label}
                </a>
              ))}
              <div class="mt-3 pt-3 border-t border-white/10 flex gap-3">
                <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                  class="flex-1 text-center py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500">
                  خرید بلیت
                </a>
                <a href={hashHref("/join")}
                  class="flex-1 text-center py-3 rounded-xl text-sm font-bold text-gray-200 bg-white/5 border border-white/10"
                  onclick={() => { this.open = false; }}>
                  همکاری
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  }
}
