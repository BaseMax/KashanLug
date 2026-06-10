import m from "mithril";
import { navItems, secondaryNav, site } from "@/data/site";
import { hashPath } from "@/lib/utils";
import { isDark } from "@/lib/theme";

export class Footer implements Mithril.ClassComponent {
  view() {
    const logo = isDark()
      ? "/assets/images/logo-dark.png"
      : "/assets/images/logo-light.png";

    return (
      <footer class="bg-card2 border-t border-ui pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div class="lg:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src={logo} alt="کاشان‌لاگ" class="w-10 h-10 rounded-xl" />
                <div class="font-black text-fore text-lg">{site.name}</div>
              </div>
              <p class="text-muted text-sm leading-relaxed max-w-xs mb-6">
                جامعه‌ای مستقل از علاقه‌مندان به گنو/لینوکس، نرم‌افزار آزاد و فناوری‌های متن‌باز در کاشان.
              </p>
              <div class="flex items-center gap-3">
                <a href={site.telegram} target="_blank" rel="noopener"
                  class="w-9 h-9 rounded-xl bg-ui border border-ui flex items-center justify-center text-muted hover:text-brand-500 hover:bg-brand-500/10 hover:border-brand-500/30 transition-all"
                  aria-label="تلگرام">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.45.7-.91.43l-2.5-1.84-1.21 1.16c-.13.13-.25.24-.5.24l.18-2.52 4.56-4.12c.2-.18-.04-.27-.3-.1L7.74 14.6 5.27 13.8c-.55-.17-.56-.55.12-.82l9-3.47c.46-.17.86.11.25.29z"/>
                  </svg>
                </a>
                <a href={site.instagram} target="_blank" rel="noopener"
                  class="w-9 h-9 rounded-xl bg-ui border border-ui flex items-center justify-center text-muted hover:text-brand-500 hover:bg-brand-500/10 hover:border-brand-500/30 transition-all"
                  aria-label="اینستاگرام">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href={site.github} target="_blank" rel="noopener"
                  class="w-9 h-9 rounded-xl bg-ui border border-ui flex items-center justify-center text-muted hover:text-brand-500 hover:bg-brand-500/10 hover:border-brand-500/30 transition-all"
                  aria-label="گیت‌هاب">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-fore font-bold mb-4 text-sm">صفحات</h3>
              <ul class="space-y-2.5">
                {[...navItems, ...secondaryNav].map((item) => (
                  <li key={item.key}>
                    <a href={hashPath(item.href)} class="text-muted hover:text-brand-500 text-sm transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 class="text-fore font-bold mb-4 text-sm">ارتباط با ما</h3>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} class="text-muted hover:text-brand-500 transition-colors break-all" dir="ltr">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.telegram} target="_blank" rel="noopener" class="text-muted hover:text-brand-500 transition-colors">
                    کانال تلگرام <span dir="ltr" class="ltr-inline">@KashanLUG</span>
                  </a>
                </li>
                <li>
                  <a href={site.telegramGroup} target="_blank" rel="noopener" class="text-muted hover:text-brand-500 transition-colors">
                    گروه تلگرام <span dir="ltr" class="ltr-inline">@KashanLUG_gp</span>
                  </a>
                </li>
                <li class="text-dim">کاشان، ایران</li>
              </ul>
            </div>
          </div>

          <div class="pt-8 border-t border-ui flex flex-wrap items-center justify-between gap-4 text-xs text-dim">
            <span>
              © ۱۴۰۵ کاشان‌لاگ. قالب تحت لایسنس{" "}
              <span dir="ltr" class="ltr-inline">GPL-3.0</span>{" "}
              و همهٔ محتوا تحت لایسنس{" "}
              <span dir="ltr" class="ltr-inline">CC BY 4.0</span>{" "}
              منتشر می‌شود.
            </span>
            <span dir="ltr" class="ltr-inline">KashanLUG - Event Zero</span>
          </div>
        </div>
      </footer>
    );
  }
}
