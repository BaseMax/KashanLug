import m from "mithril";
import { Layout }        from "@/components/Layout";
import { ContactForm }   from "@/components/ContactForm";
import { contactItems }  from "@/data/contact";
import { setTitle }      from "@/lib/utils";

const ICONS: Record<string, m.Vnode> = {
  email: (
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  ),
  telegram: (
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.45.7-.91.43l-2.5-1.84-1.21 1.16c-.13.13-.25.24-.5.24l.18-2.52 4.56-4.12c.2-.18-.04-.27-.3-.1L7.74 14.6 5.27 13.8c-.55-.17-.56-.55.12-.82l9-3.47c.46-.17.86.11.25.29z"/>
    </svg>
  ),
  location: (
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    </svg>
  ),
};

export class Contact implements Mithril.ClassComponent {
  oninit() { setTitle("تماس با ما"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-term-500/6 -top-10 right-0"></div>

          <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <h1 class="text-4xl sm:text-5xl font-black text-fore title-underline pb-2 mb-6 inline-block">تماس با ما</h1>
              <p class="text-muted max-w-xl mx-auto">سوال دارید، پیشنهادی دارید یا می‌خواهید همکاری کنید؟ با ما در ارتباط باشید.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
              <div class="space-y-4">
                <h2 class="text-xl font-black text-fore mb-6">راه‌های ارتباطی</h2>
                {contactItems.map((c) => (
                  <div key={c.title} class="flex items-center gap-4 p-5 rounded-2xl bg-card border border-ui">
                    <div class="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      {ICONS[c.icon]}
                    </div>
                    <div class="min-w-0">
                      <div class="text-fore font-bold text-sm">{c.title}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                          class={`text-brand-600 dark:text-brand-400 text-sm hover:text-brand-700 dark:hover:text-brand-300 transition-colors ${c.ltr ? "ltr-inline" : ""}`}>
                          {c.val}
                        </a>
                      ) : (
                        <span class="text-muted text-sm">{c.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 class="text-xl font-black text-fore mb-6">فرم تماس</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
