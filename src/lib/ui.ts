import type { Speaker } from "../data/event";
import type { Post } from "../data/blog";

const GRADIENTS = [
  "from-brand-500 to-brand-700",
  "from-term-500 to-term-600",
  "from-orange-500 to-rose-600",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-700",
  "from-sky-500 to-indigo-700",
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export function avatarBlock(name: string, sizeClass = "w-full h-full"): string {
  const grad = GRADIENTS[hash(name) % GRADIENTS.length];
  return `<div class="${sizeClass} rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-white font-black select-none">
    <span class="text-2xl">${initials(name)}</span>
  </div>`;
}

export function speakerCard(s: Speaker): string {
  const avatar = s.avatar
    ? `<img src="${s.avatar}" alt="${s.name}" class="w-full h-full object-cover rounded-full" />`
    : avatarBlock(s.name);
  return `
  <div class="card-glow group bg-ink-900 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2">
    <div class="relative w-24 h-24 mx-auto mb-4">
      <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 to-term-500 opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
      <div class="relative w-full h-full ring-2 ring-white/10 rounded-full overflow-hidden">${avatar}</div>
      ${
        s.lead
          ? `<span class="absolute -bottom-2 inset-x-0 mx-auto w-max px-2 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold shadow">راهبر</span>`
          : ""
      }
    </div>
    <h3 class="text-white font-bold mb-1 group-hover:text-brand-400 transition-colors">${s.name}</h3>
    <p class="text-gray-500 text-xs leading-relaxed px-1">${s.title}</p>
  </div>`;
}

export function postCard(p: Post): string {
  return `
  <article class="card-glow group bg-ink-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 flex flex-col">
    <div class="relative h-40 bg-gradient-to-br from-ink-800 to-ink-850 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-40"></div>
      <span class="relative font-mono text-3xl text-brand-400/80 group-hover:scale-110 transition-transform">~/${p.tag}</span>
      <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur text-[11px] text-gray-300 border border-white/10">${p.category}</span>
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span>${p.author}</span><span class="w-1 h-1 rounded-full bg-gray-600"></span><span>${p.date}</span>
      </div>
      <h3 class="text-white font-bold leading-snug mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">${p.title}</h3>
      <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">${p.excerpt}</p>
      <div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <span class="text-brand-400 text-sm font-bold inline-flex items-center gap-1">بیشتر بخوانید
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7"/></svg>
        </span>
        <span class="text-gray-500 text-xs">${p.readMinutes} دقیقه مطالعه</span>
      </div>
    </div>
  </article>`;
}

export function sponsorChip(name: string): string {
  return `<div class="px-6 py-4 rounded-2xl bg-ink-900 border border-white/10 text-gray-300 font-bold hover:border-brand-500/50 hover:text-white transition-colors">${name}</div>`;
}
