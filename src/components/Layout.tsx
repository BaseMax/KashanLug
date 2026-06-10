import m from "mithril";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollTop } from "./ScrollTop";

export class Layout implements Mithril.ClassComponent {
  view(vnode: Mithril.CVnode) {
    return (
      <div class="min-h-screen bg-ink-950 text-gray-200 antialiased overflow-x-hidden">
        <Header />
        {vnode.children}
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}
