import { asset, toEnDigits, faDigit } from "@/lib/utils";
import { site } from "@/data/site";

export interface Speaker {
  name: string;
  title: string;
  avatar?: string;
  lead?: boolean;
}

export interface Slot {
  title: string;
  start: string;
  end: string;
  kind?: "talk" | "break" | "ceremony" | "network";
  speaker?: string;
}

export interface Org {
  name: string;
  desc: string;
}

export const eventInfo = {
  title: "دانش بی‌مرز",
  subtitle: "نخستین رویداد کاشان‌لاگ - رویداد ۰",
  tagline:
    "گفت‌وگویی درباره نرم‌افزار آزاد؛ نه فقط به‌عنوان یک ابزار، بلکه به‌عنوان بخشی از جامعه، آموزش، کسب‌وکار و توسعه.",
  dateFa: "جمعه ۱۸ مهر ۱۴۰۵",
  timeFa: "۱۶:۰۰ تا ۲۰:۰۰",
  city: site.city,
  venue: "دانشگاه کاشان - تالار فردوسی",
  venueDetail: "خیابان دانشگاه، دانشکده مهندسی برق و کامپیوتر",
  price: "۱۸۰٬۰۰۰ تومان",
  discountCode: "KLUG",
  discountNote: "۱۵ بلیت نخست با ۲۵٪ تخفیف",
  registerUrl: "https://evnd.co/example",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=University+of+Kashan",
  coorganizer: "کاشان‌لاگ",
  capacity: "۱۰۰ نفر",
} as const;

export const lead: Speaker = {
  name: "کاوه رضایی",
  title: "راهبر رویداد",
  avatar: asset("assets/images/avatar-placeholder.svg"),
  lead: true,
};

export const speakers: Speaker[] = [
  { name: "رضا صادقی", title: "مهندس DevOps در شرکت آریاسرور، علاقه‌مند به دنیای اوپن‌سورس" },
  { name: "فاطمه کریمی", title: "مدیر فنی شرکت ارتباط‌گستر" },
  { name: "علی موسوی", title: "کارشناس امنیت سایبری، هم‌بنیان‌گذار آکادمی سپهر" },
  { name: "سارا رضایی", title: "مدیرعامل پلتفرم کدباز، فعال حقوق دیجیتال" },
  { name: "محمدرضا تهرانی", title: "مدیر فنی شرکت نوین‌پارس" },
  { name: "زهرا احمدی", title: "مدیر واحد زیرساخت و شبکه شرکت آرتا" },
  { name: "کیوان میرزایی", title: "مشاور فناوری، دکترای علوم کامپیوتر" },
];

export const schedule: Slot[] = [
  { title: "افتتاحیه", start: "۱۶:۰۰", end: "۱۶:۲۰", kind: "ceremony" },
  { title: "خوش‌آمدگویی", start: "۱۶:۲۰", end: "۱۶:۲۵", kind: "ceremony" },
  {
    title: "هوش مصنوعی و آینده توسعه نرم‌افزار",
    start: "۱۶:۲۵",
    end: "۱۷:۰۰",
    kind: "talk",
    speaker: "رضا صادقی",
  },
  { title: "امنیت زیرساخت ابری در سازمان‌های کوچک", start: "۱۷:۰۰", end: "۱۷:۲۵", kind: "talk", speaker: "فاطمه کریمی" },
  {
    title: "چگونه متخصص امنیت فکر می‌کند؟",
    start: "۱۷:۲۵",
    end: "۱۸:۰۰",
    kind: "talk",
    speaker: "علی موسوی",
  },
  { title: "نتورکینگ", start: "۱۸:۰۰", end: "۱۸:۳۵", kind: "network" },
  { title: "شروعی بر کاشان‌لاگ (راهبری)", start: "۱۸:۳۵", end: "۱۸:۴۵", kind: "ceremony", speaker: "کاوه رضایی" },
  {
    title: "متن‌باز و کسب‌وکار: تجربه‌های واقعی",
    start: "۱۸:۴۵",
    end: "۱۹:۱۵",
    kind: "talk",
    speaker: "سارا رضایی",
  },
  {
    title: "پایداری زیرساخت فنی در شرایط دشوار",
    start: "۱۹:۱۵",
    end: "۱۹:۵۰",
    kind: "talk",
    speaker: "محمدرضا تهرانی",
  },
  { title: "جمع‌بندی و پرسش‌وپاسخ", start: "۱۹:۵۰", end: "۲۰:۱۵", kind: "ceremony" },
  { title: "اختتامیه", start: "۲۰:۱۵", end: "۲۰:۳۰", kind: "ceremony" },
];

export const topics: string[] = [
  "هوش مصنوعی در توسعه نرم‌افزار و چشم‌انداز آینده برای برنامه‌نویسان",
  "امنیت زیرساخت‌های ابری و چالش‌های سازمان‌های کوچک و متوسط",
  "تفاوت نگاه تخصصی و غیرتخصصی در مواجهه با مسائل امنیتی",
  "متن‌باز در کسب‌وکار: تجربه‌های موفق و درس‌های آموخته",
  "پایداری زیرساخت فنی و مدیریت بحران در تیم‌های کوچک",
  "جامعه‌سازی و توسعه اکوسیستم فناوری در شهرستان‌ها",
  "فرصتی برای آشنایی، گفت‌وگو و شبکه‌سازی میان علاقه‌مندان و متخصصان",
];

export const KIND_META: Record<string, { dot: string; badge: string; label: string }> = {
  talk:     { dot: "bg-brand-500", badge: "bg-brand-500/10 text-brand-600 dark:text-brand-400", label: "سخنرانی"  },
  ceremony: { dot: "bg-sky-500",   badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400",       label: "مراسم"    },
  network:  { dot: "bg-term-500",  badge: "bg-term-500/10 text-term-600 dark:text-term-400",    label: "نتورکینگ" },
  break:    { dot: "bg-gray-400",  badge: "bg-gray-400/10 text-gray-600 dark:text-gray-400",    label: "استراحت"  },
};

export const organizers: Org[] = [
  { name: "کاشان‌لاگ", desc: "گروه علاقه‌مندان به جریان متن‌باز کاشان" },
  { name: "کاشان‌لاگ", desc: "جامعه‌ای مستقل از توسعه‌دهندگان و علاقه‌مندان فناوری کاشان" },
];

export function eventDurationFa(): string {
  const [s, e] = eventInfo.timeFa.split(" تا ");
  const toMin = (t: string) => { const [h, m] = toEnDigits(t).split(":").map(Number); return h * 60 + m; };
  const total = toMin(e) - toMin(s);
  const h = total / 60;
  const display = Number.isInteger(h) ? String(h) : h.toFixed(1);
  return display.replace(/\d/g, d => faDigit(+d));
}

export const sponsors: string[] = [
  "نوین‌پارس",
  "داناطرح",
  "آریاسرور",
  "WebHost24",
  "ارتباط‌گستر",
];
