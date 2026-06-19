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
  { icon: "telegram", title: "کانال تلگرام",   val: site.telegramHandle,          href: site.telegram,          ltr: true  },
  { icon: "telegram", title: "گروه پشتیبانی",  val: site.telegramGroupHandle,     href: site.telegramGroup,     ltr: true  },
  { icon: "location", title: "موقعیت",         val: site.cityProvince,     href: null,                  ltr: false },
];
