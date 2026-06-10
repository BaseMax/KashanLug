import m from "mithril";
import { Header }    from "@/components/Header";
import { Footer }    from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";

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
