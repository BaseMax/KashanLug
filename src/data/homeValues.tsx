import m from "mithril";

export interface HomeValue {
  bg:    string;
  title: string;
  desc:  string;
  icon:  m.Vnode;
}

export const homeValues: HomeValue[] = [
  {
    bg:    "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    title: "آزادی دانش",
    desc:  "هرچه در کاشان‌لاگ تولید می‌شود، آزادانه و تحت لایسنس CC BY منتشر و در اختیار همگان قرار می‌گیرد.",
    icon:  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    bg:    "bg-term-500/10 text-term-600 dark:text-term-400",
    title: "احترام بی‌قیدوشرط",
    desc:  "جایی برای تبعیض نیست؛ سطح فنی، جنسیت، سن، پیشینه و باور هیچ‌کس ملاک ارزش‌گذاری نیست.",
    icon:  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4z"/></svg>,
  },
  {
    bg:    "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    title: "استقلال",
    desc:  "هیچ شرکت، شخص یا نهادی نمی‌تواند روی روند رشد لاگ تعیین‌کننده باشد.",
    icon:  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
  {
    bg:    "bg-term-500/10 text-term-600 dark:text-term-400",
    title: "شفافیت",
    desc:  "تمام تصمیم‌های هستهٔ اجرایی به‌صورت شفاف با جامعه در میان گذاشته می‌شود.",
    icon:  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
  },
];
