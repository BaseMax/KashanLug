import m from "mithril";
import { navItems, site } from "@/data/site";
import { hashPath } from "@/lib/utils";
import { toggleTheme, isDark } from "@/lib/theme";

function themeIcon(dark: boolean): m.Vnode {
  return dark ? (
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" stroke-width="2"/>
      <path stroke-linecap="round" stroke-width="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  ) : (
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

export class Header implements Mithril.ClassComponent {
  open     = false;
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
    const current  = m.route.get() ?? "/";
    const dark     = isDark();
    const isHome   = current === "/";
    const isOrange = !isHome || scrolled;

    const linkCls = (href: string) => {
      const active = current === href || (href !== "/" && current.startsWith(href));
      return `relative text-sm font-medium transition-colors duration-200 ${
        active
          ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-white/70"
          : "text-white/85 hover:text-white"
      }`;
    };

    return (
      <header class={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isOrange
          ? "bg-gradient-to-l from-brand-700 via-brand-600 to-brand-500 shadow-lg shadow-brand-900/25"
          : "bg-transparent"
      }`}>
        {/* Top accent line */}
        <div class="h-[2px] w-full bg-gradient-to-l from-transparent via-white/30 to-transparent opacity-60"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex items-center justify-between h-14 sm:h-18">

            {/* Logo */}
            <a href={hashPath("/")} class="flex items-center gap-3 shrink-0 group">
              <div class="relative">
                <div class="absolute inset-0 rounded-xl bg-white/15 blur-md group-hover:bg-white/25 transition-all"></div>
                <img
                  src="/assets/images/logo-dark.png"
                  alt="لوگوی کاشان‌لاگ"
                  class="relative w-9 h-9 rounded-xl object-contain"
                />
              </div>
              <div class="hidden sm:block">
                <div class="font-black text-white text-base leading-tight">{site.name}</div>
                <div class="text-[10px] text-white/60 leading-tight" dir="ltr">{site.nameEn}</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav class="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a key={item.key} href={hashPath(item.href)} class={linkCls(item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA + theme toggle */}
            <div class="hidden lg:flex items-center gap-2">
              <button
                onclick={() => { toggleTheme(); m.redraw(); }}
                class="cursor-pointer w-9 h-9 rounded-xl flex items-center justify-center text-white/75 hover:text-white hover:bg-white/15 transition-all"
                aria-label={dark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
                title={dark ? "حالت روشن" : "حالت تاریک"}
              >
                {themeIcon(dark)}
              </button>

              <a href={hashPath("/join")}
                class="px-4 py-2 rounded-xl text-sm font-bold text-white bg-white/15 border border-white/25 hover:bg-white/25 transition-all">
                همکاری
              </a>
              <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                class="px-4 py-2 rounded-xl text-sm font-bold text-brand-700 bg-white hover:bg-white/90 transition-all shadow-lg shadow-brand-900/20">
                خرید بلیت
              </a>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div class="flex lg:hidden items-center gap-1">
              <button
                onclick={() => { toggleTheme(); m.redraw(); }}
                class="cursor-pointer p-2 rounded-xl text-white/75 hover:text-white hover:bg-white/15 transition-all"
                aria-label={dark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
              >
                {themeIcon(dark)}
              </button>
              <button
                class="cursor-pointer p-2 rounded-xl text-white/85 hover:text-white hover:bg-white/15 transition-all"
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
        </div>

        {/* Mobile menu */}
        {open && (
          <div class="lg:hidden bg-brand-700/95 backdrop-blur-xl border-b border-white/15">
            <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={hashPath(item.href)}
                  class={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    current === item.href
                      ? "bg-white/15 text-white font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  onclick={() => { this.open = false; }}
                >
                  {item.label}
                </a>
              ))}
              <div class="mt-3 pt-3 border-t border-white/15 flex gap-3">
                <a href="https://evnd.co/H45r2" target="_blank" rel="noopener"
                  class="flex-1 text-center py-3 rounded-xl text-sm font-bold text-brand-700 bg-white">
                  خرید بلیت
                </a>
                <a href={hashPath("/join")}
                  class="flex-1 text-center py-3 rounded-xl text-sm font-bold text-white bg-white/15 border border-white/25"
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
