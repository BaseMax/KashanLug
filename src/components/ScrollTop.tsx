import m from "mithril";

export class ScrollTop implements Mithril.ClassComponent {
  visible = false;

  private onScroll = () => {
    this.visible = window.scrollY > 500;
    m.redraw();
  };

  oninit() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  onremove() {
    window.removeEventListener("scroll", this.onScroll);
  }

  view() {
    if (!this.visible) return null;
    return (
      <button
        onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        class="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-2xl bg-brand-500 text-white shadow-xl shadow-brand-900/40 flex items-center justify-center hover:-translate-y-1 hover:bg-brand-400 transition-all"
        aria-label="بازگشت به بالا"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    );
  }
}
