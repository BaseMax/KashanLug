import { site } from "@/data/site";

export interface ContactItem {
  icon:  "email" | "telegram" | "location";
  title: string;
  val:   string;
  href:  string | null;
  ltr:   boolean;
}

export const contactItems: ContactItem[] = [
  { icon: "email",    title: "ایمیل",          val: site.email,            href: `mailto:${site.email}`, ltr: true  },
  { icon: "telegram", title: "کانال تلگرام",   val: "@KashanLUG",          href: site.telegram,          ltr: true  },
  { icon: "telegram", title: "گروه پشتیبانی",  val: "@KashanLUG_gp",       href: site.telegramGroup,     ltr: true  },
  { icon: "location", title: "موقعیت",         val: "کاشان، استان اصفهان", href: null,                   ltr: false },
];
