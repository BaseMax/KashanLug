export interface Prereq {
  icon:  string;
  title: string;
  desc:  string;
}

export const joinRoles: string[] = [
  "توسعه‌دهنده", "طراح", "DevOps", "محتوا",
  "مارکتینگ", "منابع انسانی", "مالی", "عکاسی/فیلمبرداری", "سایر",
];

export const joinPrereqs: Prereq[] = [
  { icon: "❤️", title: "علاقهٔ واقعی",  desc: "به متن‌باز، لینوکس یا جامعه‌سازی فنی علاقه داری." },
  { icon: "🤝", title: "روحیهٔ تیمی",   desc: "کار گروهی و همکاری برایت لذت‌بخش است." },
  { icon: "⏱️", title: "تعهد زمانی",   desc: "می‌توانی حداقل چند ساعت در هفته وقت بگذاری." },
];
