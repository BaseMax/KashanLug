export interface Speaker {
  name: string;
  title: string;
  avatar?: string; // optional; falls back to initials block
  lead?: boolean;
}

export interface Slot {
  title: string;
  start: string;
  end: string;
  kind?: "talk" | "break" | "ceremony" | "network"; // for color coding
  speaker?: string;
}

export interface Org {
  name: string;
  desc: string;
}

export const eventInfo = {
  title: "زندگی در سایه",
  subtitle: "نخستین رویداد کاشان‌لاگ - رویداد ۰",
  tagline:
    "گفت‌وگویی درباره اینترنت؛ نه فقط به‌عنوان یک فناوری، بلکه به‌عنوان بخشی از زندگی، جامعه، آموزش، کسب‌وکار و توسعه.",
  dateFa: "پنج‌شنبه ۲۱ خرداد ۱۴۰۵",
  timeFa: "۱۷:۰۰ تا ۲۱:۰۰",
  city: "کاشان",
  venue: "دانشگاه آزاد واحد کاشان - سالن غیاث‌الدین جمشید کاشانی",
  venueDetail: "دانشکده تحصیلات تکمیلی، بلوار قطب راوندی، خیابان استادان",
  price: "۲۵۰٬۰۰۰ تومان",
  discountCode: "KLUG",
  discountNote: "۲۰ بلیت نخست با ۳۰٪ تخفیف",
  registerUrl: "https://evnd.co/H45r2",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Islamic+Azad+University+Kashan",
  coorganizer: "تهلاگ",
  capacity: "۱۲۰ نفر",
} as const;

export const lead: Speaker = {
  name: "علیرضا حسن‌زاده",
  title: "راهبر رویداد",
  avatar: "/assets/images/alireza.jpg",
  lead: true,
};

export const speakers: Speaker[] = [
  { name: "شایان کهنگی", title: "مهندس DevOps در شرکت رسا، علاقه‌مند به دنیای اوپن‌سورس" },
  { name: "بهاره حلاجی", title: "مدیر فنی شرکت الگوریتم برتر" },
  { name: "مهدی میرسلطانی", title: "کارشناس امنیت سایبری، هم‌بنیان‌گذار آکادمی راوین" },
  { name: "حامد بیدی", title: "مدیرعامل پلتفرم کارزار، کنشگر حقِ اینترنت" },
  { name: "مسعود امامیان", title: "مدیر فنی شرکت فرش محتشم" },
  { name: "محمد مخملی", title: "مدیر واحد زیرساخت و شبکه شرکت تسنا" },
  { name: "میثم حلوایی", title: "مشاور IT، دکترای فناوری اطلاعات" },
];

export const schedule: Slot[] = [
  { title: "درود", start: "۱۷:۰۰", end: "۱۷:۳۰", kind: "ceremony" },
  { title: "خوش‌آمدگویی", start: "۱۷:۳۰", end: "۱۷:۳۵", kind: "ceremony" },
  {
    title: "اینترنت ملی، معماری محدودیت و راه‌های بقا",
    start: "۱۷:۳۵",
    end: "۱۸:۰۰",
    kind: "talk",
    speaker: "محمد مخملی",
  },
  { title: "نقش ERP در شرایط بحران", start: "۱۸:۰۰", end: "۱۸:۲۰", kind: "talk", speaker: "بهاره حلاجی" },
  {
    title: "فراتر از واکنش؛ چگونه یک متخصص به بحران نگاه می‌کند؟",
    start: "۱۸:۲۰",
    end: "۱۸:۵۰",
    kind: "talk",
    speaker: "مهدی میرسلطانی",
  },
  { title: "نتورکینگ", start: "۱۸:۵۰", end: "۱۹:۲۵", kind: "network" },
  { title: "شروعی بر کاشان‌لاگ (راهبری)", start: "۱۹:۲۵", end: "۱۹:۳۵", kind: "ceremony", speaker: "علیرضا حسن‌زاده" },
  {
    title: "فرسایش در سکوت؛ اینترنت، روان جمعی و جامعه مدنی",
    start: "۱۹:۳۵",
    end: "۲۰:۰۰",
    kind: "talk",
    speaker: "حامد بیدی",
  },
  {
    title: "روایت تاب‌آوری؛ تجربه شرکت‌ها در عصر محدودیت",
    start: "۲۰:۱۰",
    end: "۲۰:۴۰",
    kind: "talk",
    speaker: "مسعود امامیان",
  },
  { title: "دانشگاه", start: "۲۰:۴۰", end: "۲۰:۵۰", kind: "ceremony" },
  { title: "بدرود", start: "۲۰:۵۰", end: "۲۱:۰۰", kind: "ceremony" },
];

export const topics: string[] = [
  "مفهوم اینترنت ملی، محدودیت‌های زیرساختی و راهکارهای ادامه فعالیت در شرایط اختلال",
  "نقش ERP در شرایط بحران",
  "نقش اینترنت در گردش آزاد اطلاعات، جامعه مدنی و قدرت افکار عمومی",
  "تفاوت نگاه احساسی و نگاه تخصصی در مواجهه با بحران‌های حوزه فناوری",
  "تجربه شرکت‌ها و تیم‌های فنی در حفظ پایداری زیرساخت در شرایط محدودیت اینترنت",
  "روایت‌ها و دیدگاه‌های فعالان فناوری درباره اینترنت و تأثیر آن بر جامعه و کسب‌وکارها",
  "فرصتی برای آشنایی، گفت‌وگو و شبکه‌سازی میان علاقه‌مندان و متخصصان حوزه فناوری",
];

export const organizers: Org[] = [
  { name: "کاشان‌لاگ", desc: "گروه علاقه‌مندان به جریان متن‌باز کاشان" },
  { name: "تهلاگ", desc: "گروهی مستقل از کاربران لینوکس ساکن تهران" },
];

export const sponsors: string[] = [
  "تسنا",
  "ساربوک",
  "گلدینو",
  "Pixotech",
  "الوقسطی",
  "الگوریتم برتر",
];
