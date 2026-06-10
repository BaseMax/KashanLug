export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: "home", label: "خانه", href: "/index.html" },
  { key: "event", label: "رویداد", href: "/pages/event.html" },
  { key: "schedule", label: "برنامه زمانی", href: "/pages/schedule.html" },
  { key: "team", label: "تیم اجرایی", href: "/pages/team.html" },
  { key: "blog", label: "پست‌های آزاد", href: "/pages/blog.html" },
  { key: "about", label: "درباره ما", href: "/pages/about.html" },
  { key: "contact", label: "تماس با ما", href: "/pages/contact.html" },
];

export const secondaryNav: NavItem[] = [
  { key: "join", label: "همکاری با ما", href: "/pages/join.html" },
  { key: "charter", label: "مرام‌نامه", href: "/pages/charter.html" },
];

export const site = {
  name: "کاشان‌لاگ",
  nameEn: "KashanLUG",
  tagline: "گروه کاربران لینوکس کاشان",
  email: "kashanlugsupport@gmail.com",
  telegram: "https://t.me/KashanLUG",
  telegramGroup: "https://t.me/KashanLUG_gp",
  instagram: "https://instagram.com/kashanlug",
  github: "https://github.com/baseMax/kashanlug",
  authHref: "/pages/auth.html",
  logo: "/assets/images/KL1-02.png",
} as const;
