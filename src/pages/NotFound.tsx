import m from "mithril";
import { Layout }   from "@/components/Layout";
import { hashPath } from "@/lib/utils";

export class NotFound implements Mithril.ClassComponent {
  view() {
    return (
      <Layout>
        <main class="min-h-screen flex items-center justify-center pt-20">
          <div class="text-center px-4">
            <div class="font-mono text-9xl font-black text-brand-500/20 mb-4" dir="ltr">404</div>
            <h1 class="text-3xl font-black text-fore mb-3">صفحه‌ای یافت نشد</h1>
            <p class="text-muted mb-8">صفحه‌ای که دنبالش می‌گردید وجود ندارد یا جابه‌جا شده.</p>
            <a href={hashPath("/")}
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:-translate-y-1 transition-all">
              بازگشت به خانه
            </a>
          </div>
        </main>
      </Layout>
    );
  }
}
