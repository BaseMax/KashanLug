import m from "mithril";
import { Layout }     from "@/components/Layout";
import { Btn }        from "@/components/ui/Btn";
import { Field }      from "@/components/ui/Field";
import { Select }     from "@/components/ui/Select";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { setTitle }   from "@/lib/utils";

const ROLES = ["توسعه‌دهنده", "طراح", "DevOps", "محتوا", "مارکتینگ", "منابع انسانی", "مالی", "عکاسی/فیلمبرداری", "سایر"];

const PREREQS = [
  { icon: "❤️", title: "علاقهٔ واقعی",  desc: "به متن‌باز، لینوکس یا جامعه‌سازی فنی علاقه داری." },
  { icon: "🤝", title: "روحیهٔ تیمی",   desc: "کار گروهی و همکاری برایت لذت‌بخش است." },
  { icon: "⏱️", title: "تعهد زمانی",   desc: "می‌توانی حداقل چند ساعت در هفته وقت بگذاری." },
];

export class Join implements Mithril.ClassComponent {
  name    = "";
  email   = "";
  role    = "";
  bio     = "";
  sending = false;
  sent    = false;

  oninit() { setTitle("همکاری با ما"); }

  submit(e: Event) {
    e.preventDefault();
    this.sending = true;
    setTimeout(() => { this.sending = false; this.sent = true; m.redraw(); }, 900);
  }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-term-500/6 -top-10 right-0"></div>

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-term-500/10 text-term-600 dark:text-term-400 text-sm font-bold mb-7 border border-term-500/20">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-400 opacity-75"></span>
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-term-500"></span>
                </span>
                جذب همکار فعال
              </div>
              <h1 class="text-4xl sm:text-5xl font-black text-fore mb-5">جای تو خالی است</h1>
              <p class="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                کاشان‌لاگ یک پروژهٔ مشارکتی است. با هر مهارت و سطح تجربه‌ای که داری،
                می‌توانی در ساختن این جامعه سهیم باشی.
              </p>
            </div>

            <div class="grid sm:grid-cols-3 gap-5 mb-14">
              {PREREQS.map((c) => (
                <div key={c.title} class="bg-card border border-ui rounded-3xl p-7 text-center">
                  <div class="text-3xl mb-4">{c.icon}</div>
                  <h3 class="text-fore font-bold mb-2">{c.title}</h3>
                  <p class="text-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div class="mb-14">
              <h2 class="text-xl font-black text-fore mb-5">نقش‌های مورد نیاز</h2>
              <div class="flex flex-wrap gap-3">
                {ROLES.map((r) => (
                  <span key={r} class="px-4 py-2 rounded-xl bg-card2 border border-ui text-fore2 text-sm font-medium hover:border-brand-500/30 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-default">{r}</span>
                ))}
              </div>
            </div>

            <div class="bg-card border border-ui rounded-3xl p-8 sm:p-10">
              <h2 class="text-xl font-black text-fore mb-7">فرم درخواست همکاری</h2>
              {this.sent ? (
                <SuccessCard
                  title="درخواست شما ثبت شد!"
                  subtitle="تیم ما در اسرع وقت با شما تماس خواهد گرفت."
                  class="py-12"
                  iconSize="w-16 h-16"
                />
              ) : (
                <form onsubmit={(e: Event) => this.submit(e)} class="space-y-5">
                  <div class="grid sm:grid-cols-2 gap-5">
                    <Field label="نام" required value={this.name} oninput={(v: string) => { this.name = v; }} />
                    <Field label="ایمیل" type="email" required ltr value={this.email} oninput={(v: string) => { this.email = v; }} />
                  </div>
                  <Select
                    label="نقش مورد نظر"
                    value={this.role}
                    onchange={(v: string) => { this.role = v; }}
                    options={ROLES}
                    placeholder="انتخاب کنید..."
                  />
                  <Field
                    label="دربارهٔ خودت بنویس"
                    required
                    rows={4}
                    placeholder="مهارت‌ها، تجربیات و انگیزهٔ همکاری..."
                    value={this.bio}
                    oninput={(v: string) => { this.bio = v; }}
                  />
                  <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl">
                    {this.sending ? "در حال ارسال..." : "ارسال درخواست"}
                  </Btn>
                </form>
              )}
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
