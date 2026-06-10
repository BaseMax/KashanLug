import { navItems, secondaryNav, site } from "../data/site";

export function renderHeader(activeKey: string): string {
  const link = (key: string, label: string, href: string) => {
    const active = key === activeKey;
    return `<a href="${href}"
        class="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
          active
            ? "text-brand-400"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }">
        ${label}
        ${
          active
            ? `<span class="absolute -bottom-px inset-x-3 h-0.5 rounded-full bg-brand-500"></span>`
            : ""
        }
      </a>`;
  };

  const mobileLink = (key: string, label: string, href: string) => {
    const active = key === activeKey;
    return `<a href="${href}" @click="open = false"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
          active
            ? "bg-brand-500/10 text-brand-400"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }">
        <span class="text-brand-500 font-mono text-xs">~/</span>${label}
      </a>`;
  };

  const desktopLinks = navItems
    .map((n) => link(n.key, n.label, n.href))
    .join("");
  const mobileLinks = [...navItems, ...secondaryNav]
    .map((n) => mobileLink(n.key, n.label, n.href))
    .join("");

  return `
  <header x-data="{ open: false, scrolled: false }"
    @scroll.window="scrolled = (window.pageYOffset > 20)"
    class="fixed inset-x-0 top-0 z-50">
    <nav :class="scrolled ? 'bg-ink-950/85 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40' : 'bg-transparent border-transparent'"
      class="border-b transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 lg:h-20">

          <!-- Logo -->
          <a href="/index.html" class="flex items-center gap-3 shrink-0 group">
            <div class="relative">
              <div class="absolute inset-0 bg-brand-500/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src="${site.logo}" alt="${site.nameEn}"
                class="relative w-10 h-10 lg:w-11 lg:h-11 object-contain" />
            </div>
            <div class="leading-tight">
              <div class="font-black text-white text-lg tracking-tight">${site.name}</div>
              <div class="font-mono text-[10px] text-brand-400/80 -mt-0.5">${site.nameEn}</div>
            </div>
          </a>

          <!-- Desktop nav -->
          <div class="hidden lg:flex items-center gap-1">${desktopLinks}</div>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <a href="${site.authHref}"
              class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-900/40 transition-all hover:-translate-y-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
              ورود / ثبت‌نام
            </a>

            <!-- Mobile toggle -->
            <button @click="open = !open" aria-label="منو"
              class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-gray-200 hover:bg-white/10 transition-colors">
              <svg x-show="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              <svg x-show="open" x-cloak class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div x-show="open" x-cloak
      x-transition:enter="transition ease-out duration-200"
      x-transition:enter-start="opacity-0 -translate-y-4"
      x-transition:enter-end="opacity-100 translate-y-0"
      x-transition:leave="transition ease-in duration-150"
      x-transition:leave-start="opacity-100 translate-y-0"
      x-transition:leave-end="opacity-0 -translate-y-4"
      class="lg:hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
        ${mobileLinks}
        <a href="${site.authHref}"
          class="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500">
          ورود / ثبت‌نام
        </a>
      </div>
    </div>
  </header>`;
}
