export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: "home",     label: "خانه",          href: "/"         },
  { key: "event",    label: "رویداد",         href: "/event"    },
  { key: "schedule", label: "برنامه زمانی",  href: "/schedule" },
  { key: "team",     label: "تیم اجرایی",    href: "/team"     },
  { key: "blog",     label: "پست‌های آزاد",  href: "/blog"     },
  { key: "about",    label: "درباره ما",      href: "/about"    },
  { key: "contact",  label: "تماس با ما",    href: "/contact"  },
];

export const secondaryNav: NavItem[] = [
  { key: "join",    label: "همکاری با ما", href: "/join"    },
  { key: "charter", label: "مرام‌نامه",    href: "/charter" },
];

export const site = {
  name:         "کاشان‌لاگ",
  nameEn:       "KashanLUG",
  tagline:      "گروه کاربران لینوکس کاشان",
  email:        "kashanlugsupport@gmail.com",
  telegram:     "https://t.me/KashanLUG",
  telegramGroup:"https://t.me/KashanLUG_gp",
  instagram:    "https://instagram.com/kashanlug",
  github:       "https://github.com/baseMax/kashanlug",
  logo:         "/assets/images/logo-light.png",
} as const;
