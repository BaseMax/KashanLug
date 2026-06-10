import m from "mithril";
import { Layout } from "../components/Layout";
import { site } from "../data/site";
import { setTitle } from "../lib/utils";

interface FormState {
  name: string; email: string; subject: string; message: string;
  sending: boolean; sent: boolean;
}

export const Contact: m.Component<Record<string, never>, FormState> = {
  oninit(vnode) {
    setTitle("تماس با ما");
    vnode.state.name = "";
    vnode.state.email = "";
    vnode.state.subject = "";
    vnode.state.message = "";
    vnode.state.sending = false;
    vnode.state.sent = false;
  },
  view(vnode) {
    const s = vnode.state;

    const submit = (e: Event) => {
      e.preventDefault();
      s.sending = true;
      setTimeout(() => { s.sending = false; s.sent = true; m.redraw(); }, 900);
    };

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-term-600/8 -top-10 right-0"></div>

          <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <h1 class="text-4xl sm:text-5xl font-black text-white title-underline pb-2 mb-6 inline-block">تماس با ما</h1>
              <p class="text-gray-400 max-w-xl mx-auto">سوال دارید، پیشنهادی دارید یا می‌خواهید همکاری کنید؟ با ما در ارتباط باشید.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
              {/* Contact cards */}
              <div class="space-y-4">
                <h2 class="text-xl font-black text-white mb-6">راه‌های ارتباطی</h2>
                {[
                  {
                    icon: "email",
                    title: "ایمیل",
                    val: site.email,
                    href: `mailto:${site.email}`,
                    ltr: true,
                  },
                  {
                    icon: "telegram",
                    title: "کانال تلگرام",
                    val: "@KashanLUG",
                    href: site.telegram,
                    ltr: true,
                  },
                  {
                    icon: "telegram",
                    title: "گروه پشتیبانی",
                    val: "@KashanLUG_gp",
                    href: site.telegramGroup,
                    ltr: true,
                  },
                  {
                    icon: "location",
                    title: "موقعیت",
                    val: "کاشان، استان اصفهان",
                    href: null,
                    ltr: false,
                  },
                ].map((c) => (
                  <div class="flex items-center gap-4 p-5 rounded-2xl bg-ink-900 border border-white/10">
                    <div class="w-11 h-11 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                      {c.icon === "email" && (
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      )}
                      {c.icon === "telegram" && (
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.45.7-.91.43l-2.5-1.84-1.21 1.16c-.13.13-.25.24-.5.24l.18-2.52 4.56-4.12c.2-.18-.04-.27-.3-.1L7.74 14.6 5.27 13.8c-.55-.17-.56-.55.12-.82l9-3.47c.46-.17.86.11.25.29z"/></svg>
                      )}
                      {c.icon === "location" && (
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                      )}
                    </div>
                    <div class="min-w-0">
                      <div class="text-white font-bold text-sm">{c.title}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                          class={`text-brand-400 text-sm hover:text-brand-300 transition-colors ${c.ltr ? "ltr-inline" : ""}`}>
                          {c.val}
                        </a>
                      ) : (
                        <span class="text-gray-400 text-sm">{c.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div>
                <h2 class="text-xl font-black text-white mb-6">فرم تماس</h2>
                {s.sent ? (
                  <div class="flex flex-col items-center justify-center h-64 gap-4 bg-ink-900 border border-term-500/20 rounded-3xl">
                    <div class="w-14 h-14 rounded-full bg-term-500/15 text-term-400 flex items-center justify-center">
                      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="text-center">
                      <p class="text-white font-bold">پیام شما ارسال شد!</p>
                      <p class="text-gray-500 text-sm mt-1">در اسرع وقت با شما در ارتباط خواهیم بود.</p>
                    </div>
                  </div>
                ) : (
                  <form onsubmit={submit} class="space-y-4">
                    <div class="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm text-gray-400 mb-1.5">نام و نام خانوادگی</label>
                        <input type="text" required value={s.name}
                          oninput={(e: InputEvent) => { s.name = (e.target as HTMLInputElement).value; }}
                          class="w-full px-4 py-3 rounded-2xl bg-ink-900 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition" />
                      </div>
                      <div>
                        <label class="block text-sm text-gray-400 mb-1.5">ایمیل</label>
                        <input type="email" required value={s.email} dir="ltr"
                          oninput={(e: InputEvent) => { s.email = (e.target as HTMLInputElement).value; }}
                          class="w-full px-4 py-3 rounded-2xl bg-ink-900 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm text-gray-400 mb-1.5">موضوع</label>
                      <input type="text" required value={s.subject}
                        oninput={(e: InputEvent) => { s.subject = (e.target as HTMLInputElement).value; }}
                        class="w-full px-4 py-3 rounded-2xl bg-ink-900 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition" />
                    </div>
                    <div>
                      <label class="block text-sm text-gray-400 mb-1.5">پیام</label>
                      <textarea rows={5} required value={s.message}
                        oninput={(e: InputEvent) => { s.message = (e.target as HTMLTextAreaElement).value; }}
                        class="w-full px-4 py-3 rounded-2xl bg-ink-900 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition resize-none" />
                    </div>
                    <button type="submit" disabled={s.sending}
                      class="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-900/30 disabled:opacity-60">
                      {s.sending ? "در حال ارسال..." : "ارسال پیام"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  },
};
