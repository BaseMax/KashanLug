import m from "mithril";
import { Header }    from "@/components/Header";
import { Footer }    from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";

export class Layout implements Mithril.ClassComponent {
  view(vnode: Mithril.CVnode) {
    const isHome = (m.route.get() ?? "/") === "/";
    return (
      <div class="min-h-screen bg-page text-fore antialiased overflow-x-hidden">
        <Header />
        {/* Orange ambient glow from the header into inner-page content */}
        {!isHome && (
          <div class="pointer-events-none fixed top-0 inset-x-0 z-40 overflow-hidden" style="height:320px">
            <div class="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-brand-500/12 to-transparent"></div>
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-[560px] h-[220px] rounded-full bg-brand-500/10 blur-[80px]"></div>
          </div>
        )}
        {vnode.children}
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}
