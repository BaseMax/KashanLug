import "./style.css";
import Alpine from "alpinejs";
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { renderScrollTop } from "./components/scrollTop";
import { registerComponents } from "./alpine";

function mount(id: string, html: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.outerHTML = html;
  }
}

const activeKey = document.body.dataset.page ?? "";
mount("header", renderHeader(activeKey));
mount("footer", renderFooter());
mount("scroll-top", renderScrollTop());

registerComponents(Alpine);

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}
window.Alpine = Alpine;
Alpine.start();
