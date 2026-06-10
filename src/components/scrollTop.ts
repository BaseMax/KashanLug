export function renderScrollTop(): string {
  return `
  <div x-data="{ show: false }"
    @scroll.window="show = (window.pageYOffset > 500)"
    class="fixed bottom-6 left-6 z-40">
    <button x-show="show" x-cloak
      x-transition:enter="transition ease-out duration-200"
      x-transition:enter-start="opacity-0 scale-75"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-150"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-75"
      @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
      aria-label="بازگشت به بالا"
      class="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-500 text-white shadow-xl shadow-brand-900/50 hover:bg-brand-400 hover:-translate-y-1 transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/></svg>
    </button>
  </div>`;
}
