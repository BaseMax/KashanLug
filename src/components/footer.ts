import { navItems, secondaryNav, site } from "../data/site";

export function renderFooter(): string {
  const links = [...navItems, ...secondaryNav]
    .map(
      (n) =>
        `<li><a href="${n.href}" class="text-gray-400 hover:text-brand-400 transition-colors inline-flex items-center gap-2 group">
          <span class="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">›</span>${n.label}
        </a></li>`,
    )
    .join("");

  const social = (href: string, label: string, svg: string) =>
    `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}"
      class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-300 hover:bg-brand-500 hover:text-white transition-all hover:-translate-y-1">${svg}</a>`;

  return `
  <footer class="relative bg-ink-950 border-t border-white/10 overflow-hidden">
    <div class="glow w-96 h-96 bg-brand-600/10 -bottom-40 -right-20"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        <!-- Brand -->
        <div class="lg:col-span-2 max-w-md">
          <div class="flex items-center gap-3 mb-5">
            <img src="${site.logo}" alt="${site.nameEn}" class="w-11 h-11 object-contain" />
            <div>
              <div class="font-black text-white text-xl">${site.name}</div>
              <div class="font-mono text-xs text-brand-400/80">${site.nameEn}</div>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed text-sm mb-6">
            جامعه‌ای برای دوست‌داران لینوکس، نرم‌افزارهای آزاد و فناوری‌های متن‌باز در شهر زیبای کاشان.
            ما بر این باوریم که دانش باید برای همه آزاد باشد.
          </p>
          <div class="flex items-center gap-3">
            ${social(
              site.telegram,
              "تلگرام",
              `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
            )}
            ${social(
              site.instagram,
              "اینستاگرام",
              `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.13 8.5 3.13 8.85 3.13 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06zm0 8.15A3.21 3.21 0 1 0 12 8.8a3.21 3.21 0 0 0 0 6.41zM18.4 6.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg>`,
            )}
            ${social(
              site.github,
              "گیت‌هاب",
              `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.74 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>`,
            )}
          </div>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-white font-bold mb-5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-500"></span>دسترسی سریع
          </h4>
          <ul class="space-y-3 text-sm">${links}</ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold mb-5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-term-500"></span>ارتباط با ما
          </h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><a href="mailto:${site.email}" class="hover:text-brand-400 transition-colors break-all font-mono text-xs">${site.email}</a></li>
            <li><a href="${site.telegram}" target="_blank" rel="noopener" class="hover:text-brand-400 transition-colors">کانال تلگرام</a></li>
            <li><a href="${site.telegramGroup}" target="_blank" rel="noopener" class="hover:text-brand-400 transition-colors">گروه پشتیبانی</a></li>
            <li><a href="/pages/join.html" class="hover:text-brand-400 transition-colors">همکاری با ما</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-xs text-center sm:text-right">
          © ۱۴۰۵ ${site.name}. تمامی محتوا تحت لایسنس
          <span class="font-mono text-gray-400">CC BY 4.0</span> منتشر می‌شود.
        </p>
        <p class="text-gray-500 text-xs font-mono flex items-center gap-2">
          <span class="text-term-500">$</span> made with
          <span class="text-brand-500">&hearts;</span> by KashanLUG
        </p>
      </div>
    </div>
  </footer>`;
}
