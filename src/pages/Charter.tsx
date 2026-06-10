import m from "mithril";
import { Layout }         from "@/components/Layout";
import { hashPath, setTitle } from "@/lib/utils";

const SECTIONS = [
  {
    n: "۱", title: "هویت",
    articles: [
      { n: "۱.۱", text: "کاشان‌لاگ یک گروه داوطلبانه و مستقل از کاربران لینوکس و علاقه‌مندان به نرم‌افزار آزاد و متن‌باز در کاشان است." },
      { n: "۱.۲", text: "این گروه غیرتجاری، غیرسیاسی و غیرمذهبی است." },
      { n: "۱.۳", text: "هیچ شرکت یا نهادی مالک کاشان‌لاگ نیست. کاشان‌لاگ متعلق به جامعهٔ اعضای آن است." },
      { n: "۱.۴", text: "کاشان‌لاگ با الهام از مدل لاگ‌های دیگر سراسر جهان، به‌ویژه تهلاگ، و در همکاری با آن‌ها فعالیت می‌کند." },
    ],
  },
  {
    n: "۲", title: "ارزش‌ها",
    articles: [
      { n: "۲.۱", text: "آزادی دانش: هرچه در کاشان‌لاگ تولید می‌شود، آزادانه و تحت لایسنس CC BY 4.0 منتشر می‌شود." },
      { n: "۲.۲", text: "احترام بی‌قیدوشرط: هیچ‌گونه تبعیضی بر اساس جنسیت، سن، سطح فنی، نژاد، مذهب یا پیشینهٔ اجتماعی پذیرفته نیست." },
      { n: "۲.۳", text: "استقلال: هیچ شرکت، شخص یا نهاد خارجی نمی‌تواند روی روند رشد یا تصمیم‌گیری‌های لاگ تعیین‌کننده باشد." },
      { n: "۲.۴", text: "شفافیت: تمام تصمیم‌های هستهٔ اجرایی به‌صورت شفاف با جامعه در میان گذاشته می‌شود." },
      { n: "۲.۵", text: "بی‌طرفی سیاسی: کاشان‌لاگ یک انجمن فنی است و جانب هیچ حزب، گروه یا جریان سیاسی را نمی‌گیرد." },
    ],
  },
  {
    n: "۳", title: "مالکیت معنوی",
    articles: [
      { n: "۳.۱", text: "تمام محتوای آموزشی تولیدشده در رویدادها و کارگاه‌های کاشان‌لاگ تحت لایسنس Creative Commons Attribution 4.0 International منتشر می‌شود." },
      { n: "۳.۲", text: "ارائه‌دهندگان محتوا مالکیت معنوی آثار خود را حفظ می‌کنند، اما با شرکت در رویدادهای کاشان‌لاگ موافقت می‌کنند که محتوا به صورت CC BY 4.0 منتشر شود." },
      { n: "۳.۳", text: "لوگو، نام و هویت بصری کاشان‌لاگ متعلق به جامعهٔ کاشان‌لاگ است و استفادهٔ تجاری از آن‌ها بدون اجازه مجاز نیست." },
    ],
  },
  {
    n: "۴", title: "ارتباط بیرونی",
    articles: [
      { n: "۴.۱", text: "کاشان‌لاگ می‌تواند با سازمان‌ها و نهادها همکاری کند، مشروط بر اینکه این همکاری با ارزش‌های مندرج در این مرام‌نامه در تعارض نباشد." },
      { n: "۴.۲", text: "حمایت مالی از سوی شرکت‌ها مجاز است، اما حامیان مالی هیچ‌گونه حقی در تعیین جهت‌گیری محتوایی یا تصمیمات کاشان‌لاگ ندارند." },
      { n: "۴.۳", text: "کاشان‌لاگ هیچ‌گاه نام یا هویت خود را به نام یک شرکت، محصول یا برند تجاری گره نمی‌زند." },
    ],
  },
];

export class Charter implements Mithril.ClassComponent {
  oninit() { setTitle("مرام‌نامه"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-600/10 -top-10 right-0"></div>

          <div class="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <h1 class="text-4xl sm:text-5xl font-black text-white mb-4">مرام‌نامهٔ کاشان‌لاگ</h1>
              <p class="text-gray-400 max-w-xl mx-auto">اصول، ارزش‌ها و چارچوب حاکمیتی جامعهٔ کاشان‌لاگ</p>
            </div>

            <div class="relative rounded-2xl bg-ink-900 border border-brand-500/20 p-7 mb-12">
              <div class="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-bl-[5rem]"></div>
              <p class="text-gray-300 leading-relaxed relative z-10">
                این مرام‌نامه اصول بنیادین، ارزش‌ها و چارچوب فعالیت کاشان‌لاگ را تعریف
                می‌کند. هدف ما ایجاد یک جامعهٔ فنی سالم، آزاد و مستقل در کاشان است که
                بر پایهٔ اشتراک دانش و احترام متقابل بنا شده باشد.
              </p>
            </div>

            <div class="space-y-10">
              {SECTIONS.map((sec) => (
                <section key={sec.n}>
                  <div class="flex items-center gap-4 mb-6">
                    <span class="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 font-black text-sm flex items-center justify-center">{sec.n}</span>
                    <h2 class="text-2xl font-black text-white">{sec.title}</h2>
                  </div>
                  <div class="space-y-3 pr-14">
                    {sec.articles.map((a) => (
                      <div key={a.n} class="flex items-start gap-4 p-5 rounded-2xl bg-ink-900 border border-white/10">
                        <span class="text-brand-500/70 text-xs font-mono shrink-0 mt-0.5 w-8">{a.n}</span>
                        <p class="text-gray-300 text-sm leading-relaxed">{a.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div class="mt-14 pt-8 border-t border-white/10 text-center">
              <p class="text-gray-500 text-sm">
                این مرام‌نامه توسط هستهٔ اجرایی کاشان‌لاگ نوشته شده و در صورت اجماع جامعه قابل ویرایش است.
              </p>
              <div class="flex justify-center gap-4 mt-6">
                <a href={hashPath("/about")} class="text-brand-400 hover:text-brand-300 font-bold text-sm transition-colors">دربارهٔ ما</a>
                <span class="text-gray-600">·</span>
                <a href={hashPath("/join")} class="text-brand-400 hover:text-brand-300 font-bold text-sm transition-colors">همکاری</a>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
