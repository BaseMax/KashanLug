import m from "mithril";
import { TerminalBlock } from "@/components/TerminalBlock";

export class AboutStory implements Mithril.ClassComponent {
  view() {
    return (
      <div class="grid lg:grid-cols-2 gap-12 mb-20 items-start">
        <div class="space-y-5 text-fore2 leading-relaxed">
          <h2 class="text-2xl font-black text-fore">داستان ما</h2>
          <p>
            کاشان‌لاگ از دل یک ایده ساده بیرون آمد: می‌خواستیم جمعی از علاقه‌مندان
            به فناوری متن‌باز در کاشان داشته باشیم که بتوانند با هم یاد بگیرند، تجربه
            تبادل کنند و در فضایی دوستانه رشد کنند.
          </p>
          <p>
            اولین رویداد ما، «فناوری برای همه»، با موضوع نرم‌افزار آزاد و تأثیر آن بر زندگی،
            کسب‌وکار و جامعه برگزار می‌شود. این رویداد آغازی است برای یک مسیر طولانی‌تر.
          </p>
          <p>
            باور داریم که دانش فنی باید آزادانه منتقل شود، ابزارهای آزاد در اختیار
            همه باشد، و جامعه‌های محلی بتوانند مستقل از شرکت‌های بزرگ، مهارت و دانش خود را بسازند.
          </p>
        </div>

        <TerminalBlock filename="about.sh">
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
        </TerminalBlock>
      </div>
    );
  }
}
