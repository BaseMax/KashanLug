import m from "mithril";
import { Layout }         from "@/components/Layout";
import { hashPath, setTitle } from "@/lib/utils";

const STATS = [
  { n: "۱۴۰۵", l: "سال تأسیس" },
  { n: "۱۳",   l: "عضو تیم اجرایی" },
  { n: "۷+",   l: "سخنران رویداد" },
  { n: "۱۲۰",  l: "ظرفیت رویداد" },
];

const VALUES = [
  { title: "آزادی دانش",      desc: "هرچه در کاشان‌لاگ تولید می‌شود، تحت لایسنس CC BY منتشر می‌شود." },
  { title: "احترام",          desc: "سطح فنی، جنسیت، سن و پیشینه هیچ‌کس ملاک ارزش‌گذاری نیست." },
  { title: "استقلال",         desc: "هیچ شرکت یا نهادی بر روند رشد لاگ تعیین‌کننده نیست." },
  { title: "شفافیت",          desc: "تمام تصمیم‌های هستهٔ اجرایی با جامعه در میان گذاشته می‌شود." },
  { title: "بی‌طرفی سیاسی",  desc: "کاشان‌لاگ یک انجمن فنی است و جانب هیچ حزب یا گروه سیاسی را نمی‌گیرد." },
  { title: "غیرتجاری",        desc: "تمام رویدادها با هدف آموزش و شبکه‌سازی برگزار می‌شوند." },
];

export class About implements Mithril.ClassComponent {
  oninit() { setTitle("درباره ما"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-brand-600/10 -top-10 right-0"></div>

          <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-16">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-7 font-mono" dir="ltr">
                whoami → kashanlug
              </div>
              <h1 class="text-4xl sm:text-5xl font-black text-white mb-5">دربارهٔ کاشان‌لاگ</h1>
              <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                جامعه‌ای مستقل از علاقه‌مندان به گنو/لینوکس، نرم‌افزار آزاد و فناوری‌های متن‌باز در کاشان.
              </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 mb-20 items-start">
              <div class="space-y-5 text-gray-300 leading-relaxed">
                <h2 class="text-2xl font-black text-white">داستان ما</h2>
                <p>
                  کاشان‌لاگ از دل یک ایده ساده بیرون آمد: می‌خواستیم جمعی از علاقه‌مندان
                  به فناوری متن‌باز در کاشان داشته باشیم که بتوانند با هم یاد بگیرند، تجربه
                  تبادل کنند و در فضایی دوستانه رشد کنند.
                </p>
                <p>
                  اولین رویداد ما، «زندگی در سایه»، با موضوع اینترنت و تأثیر آن بر زندگی،
                  کسب‌وکار و جامعه مدنی برگزار می‌شود. این رویداد آغازی است برای یک مسیر طولانی‌تر.
                </p>
                <p>
                  باور داریم که دانش فنی باید آزادانه منتقل شود، ابزارهای آزاد در اختیار
                  همه باشد، و جامعه‌های محلی بتوانند مستقل از شرکت‌های بزرگ، مهارت و دانش خود را بسازند.
                </p>
              </div>

              <div class="relative">
                <div class="absolute -inset-1 bg-gradient-to-tr from-brand-600/20 to-term-600/10 rounded-3xl blur-lg"></div>
                <div class="relative bg-ink-900 border border-white/10 rounded-3xl overflow-hidden" dir="ltr">
                  <div class="flex items-center gap-2 px-4 py-3 bg-ink-850 border-b border-white/5">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span class="ml-auto font-mono text-xs text-gray-500">about.sh</span>
                  </div>
                  <div class="p-5 font-mono text-sm space-y-2">
                    <p><span class="text-term-400">$</span> <span class="text-gray-200">cat /etc/kashanlug/info</span></p>
                    <p class="text-gray-400">NAME="KashanLUG"</p>
                    <p class="text-gray-400">TYPE="Linux Users Group"</p>
                    <p class="text-gray-400">CITY="Kashan, Iran"</p>
                    <p class="text-gray-400">FOUNDED="1405"</p>
                    <p class="text-gray-400">LICENSE="CC BY 4.0"</p>
                    <p class="text-gray-400">POLITICAL="Neutral"</p>
                    <p class="text-gray-400">COMMERCIAL="Non-profit"</p>
                    <p><span class="text-term-400">$</span> <span class="text-gray-200">echo $WELCOME</span></p>
                    <p class="text-brand-300">به جامعهٔ متن‌باز کاشان خوش آمدید!</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-20">
              {STATS.map((s) => (
                <div key={s.n} class="bg-ink-900 border border-white/10 rounded-2xl p-6 text-center">
                  <div class="text-3xl font-black text-brand-400 mb-2">{s.n}</div>
                  <div class="text-gray-500 text-sm">{s.l}</div>
                </div>
              ))}
            </div>

            <div class="mb-20">
              <h2 class="text-2xl font-black text-white mb-8 text-center">ارزش‌های ما</h2>
              <div class="grid sm:grid-cols-2 gap-5">
                {VALUES.map((v) => (
                  <div key={v.title} class="flex items-start gap-4 p-5 rounded-2xl bg-ink-900 border border-white/10">
                    <div class="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                    <div>
                      <div class="text-white font-bold mb-1">{v.title}</div>
                      <p class="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <a href={hashPath("/charter")}
                class="flex flex-col p-6 rounded-2xl bg-ink-900 border border-white/10 hover:border-brand-500/30 transition-all">
                <div class="text-brand-400 font-bold mb-2">مرام‌نامه ›</div>
                <p class="text-gray-400 text-sm leading-relaxed">اصول، ارزش‌ها و چارچوب حاکمیتی کاشان‌لاگ را بخوانید.</p>
              </a>
              <a href={hashPath("/join")}
                class="flex flex-col p-6 rounded-2xl bg-brand-500/10 border border-brand-500/20 hover:border-brand-500/40 transition-all">
                <div class="text-brand-400 font-bold mb-2">همکاری با ما ›</div>
                <p class="text-gray-400 text-sm leading-relaxed">به تیم اجرایی کاشان‌لاگ بپیوندید.</p>
              </a>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
