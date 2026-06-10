import m from "mithril";
import { Layout } from "../components/Layout";
import { setTitle } from "../lib/utils";

interface FormState {
  name: string; email: string; role: string; bio: string;
  sending: boolean; sent: boolean;
}

const ROLES = ["توسعه‌دهنده", "طراح", "DevOps", "محتوا", "مارکتینگ", "منابع انسانی", "مالی", "عکاسی/فیلمبرداری", "سایر"];

export const Join: m.Component<Record<string, never>, FormState> = {
  oninit(vnode) {
    setTitle("همکاری با ما");
    Object.assign(vnode.state, { name:"", email:"", role:"", bio:"", sending:false, sent:false });
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
          <div class="glow w-[36rem] h-96 bg-term-600/10 -top-10 right-0"></div>

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
            {/* Hero */}
            <div class="text-center mb-14">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-term-500/10 text-term-400 text-sm font-bold mb-7">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-400 opacity-75"></span>
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-term-500"></span>
                </span>
                جذب همکار فعال
              </div>
              <h1 class="text-4xl sm:text-5xl font-black text-white mb-5">جای تو خالی است</h1>
              <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                کاشان‌لاگ یک پروژهٔ مشارکتی است. با هر مهارت و سطح تجربه‌ای که داری،
                می‌توانی در ساختن این جامعه سهیم باشی.
              </p>
            </div>

            {/* Criteria */}
            <div class="grid sm:grid-cols-3 gap-5 mb-14">
              {[
                { icon: "❤️", title: "علاقهٔ واقعی", desc: "به متن‌باز، لینوکس یا جامعه‌سازی فنی علاقه داری." },
                { icon: "🤝", title: "روحیهٔ تیمی", desc: "کار گروهی و همکاری برایت لذت‌بخش است." },
                { icon: "⏱️", title: "تعهد زمانی", desc: "می‌توانی حداقل چند ساعت در هفته وقت بگذاری." },
              ].map((c) => (
                <div class="bg-ink-900 border border-white/10 rounded-3xl p-7 text-center">
                  <div class="text-3xl mb-4">{c.icon}</div>
                  <h3 class="text-white font-bold mb-2">{c.title}</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Role tags */}
            <div class="mb-14">
              <h2 class="text-xl font-black text-white mb-5">نقش‌های مورد نیاز</h2>
              <div class="flex flex-wrap gap-3">
                {ROLES.map((r) => (
                  <span class="px-4 py-2 rounded-xl bg-ink-800 border border-white/10 text-gray-300 text-sm font-medium hover:border-brand-500/30 transition-colors cursor-default">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <div class="bg-ink-900 border border-white/10 rounded-3xl p-8 sm:p-10">
              <h2 class="text-xl font-black text-white mb-7">فرم درخواست همکاری</h2>
              {s.sent ? (
                <div class="flex flex-col items-center py-12 gap-4">
                  <div class="w-16 h-16 rounded-full bg-term-500/15 text-term-400 flex items-center justify-center">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="text-center">
                    <p class="text-white font-bold text-lg">درخواست شما ثبت شد!</p>
                    <p class="text-gray-500 text-sm mt-1">تیم ما در اسرع وقت با شما تماس خواهد گرفت.</p>
                  </div>
                </div>
              ) : (
                <form onsubmit={submit} class="space-y-5">
                  <div class="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm text-gray-400 mb-1.5">نام</label>
                      <input type="text" required value={s.name}
                        oninput={(e: InputEvent) => { s.name = (e.target as HTMLInputElement).value; }}
                        class="w-full px-4 py-3 rounded-2xl bg-ink-800 border border-white/10 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition" />
                    </div>
                    <div>
                      <label class="block text-sm text-gray-400 mb-1.5">ایمیل</label>
                      <input type="email" required value={s.email} dir="ltr"
                        oninput={(e: InputEvent) => { s.email = (e.target as HTMLInputElement).value; }}
                        class="w-full px-4 py-3 rounded-2xl bg-ink-800 border border-white/10 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm text-gray-400 mb-1.5">نقش مورد نظر</label>
                    <select value={s.role}
                      onchange={(e: Event) => { s.role = (e.target as HTMLSelectElement).value; }}
                      class="w-full px-4 py-3 rounded-2xl bg-ink-800 border border-white/10 text-white focus:border-brand-500 outline-none transition appearance-none">
                      <option value="">انتخاب کنید...</option>
                      {ROLES.map((r) => <option value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm text-gray-400 mb-1.5">دربارهٔ خودت بنویس</label>
                    <textarea rows={4} required value={s.bio}
                      oninput={(e: InputEvent) => { s.bio = (e.target as HTMLTextAreaElement).value; }}
                      placeholder="مهارت‌ها، تجربیات و انگیزهٔ همکاری..."
                      class="w-full px-4 py-3 rounded-2xl bg-ink-800 border border-white/10 text-white placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition resize-none" />
                  </div>
                  <button type="submit" disabled={s.sending}
                    class="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-900/30 disabled:opacity-60">
                    {s.sending ? "در حال ارسال..." : "ارسال درخواست"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>
      </Layout>
    );
  },
};
