export interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  badge?: string;
  lead?: boolean;
}

import { asset } from "@/lib/utils";

const img = () => asset("assets/images/avatar-placeholder.svg");

export const members: Member[] = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "راهبر ارشد",
    lead: true,
    avatar: img(),
    bio: "DevOps Engineer - راهبری و هماهنگی کلان کاشان‌لاگ.",
    linkedin: "https://www.linkedin.com/in/sara-mohammadi-example",
  },
  {
    id: 2,
    name: "کاوه رضایی",
    role: "مدیر اجرایی",
    lead: true,
    avatar: img(),
    bio: "Data Scientist - راهبر رویداد و مدیریت اجرایی.",
    github: "https://github.com/kaveh-rezaei-example",
    linkedin: "https://www.linkedin.com/in/kaveh-rezaei-example",
  },
  {
    id: 3,
    name: "نازنین حسینی",
    role: "منابع انسانی",
    avatar: img(),
    bio: "Data Scientist - مدیریت منابع انسانی و جذب نیرو.",
    linkedin: "https://www.linkedin.com/in/nazanin-hosseini-example",
  },
  {
    id: 4,
    name: "دلارام صادقی",
    role: "مارکتینگ",
    avatar: img(),
    bio: "AI Engineer - بازاریابی و ارتباطات.",
    github: "https://github.com/delaram-sadeghi-example",
    linkedin: "https://www.linkedin.com/in/delaram-sadeghi-example",
  },
  {
    id: 5,
    name: "آرمان کریمی",
    role: "مدیر مالی",
    avatar: img(),
    bio: "Network Engineer (Passive & Active) - مدیریت مالی.",
    linkedin: "https://www.linkedin.com/in/arman-karimi-example",
  },
  {
    id: 6,
    name: "سینا جعفری",
    role: "تیم فنی / Backend",
    badge: "Backend",
    avatar: img(),
    bio: "توسعه‌دهنده نرم‌افزار - تیم فنی بک‌اند.",
    github: "https://github.com/sina-jafari-example",
    linkedin: "https://www.linkedin.com/in/sina-jafari-example",
  },
  {
    id: 7,
    name: "رامین علوی",
    role: "تیم فنی / Backend",
    badge: "Backend",
    avatar: img(),
    bio: "Backend Developer - تیم فنی بک‌اند.",
    github: "https://github.com/ramin-alavi-example",
    linkedin: "https://www.linkedin.com/in/ramin-alavi-example",
  },
  {
    id: 8,
    name: "آناهیتا موسوی",
    role: "تیم فنی / Frontend",
    badge: "Frontend",
    avatar: img(),
    bio: "Frontend Developer - تیم فنی فرانت‌اند.",
    github: "https://github.com/anahita-mousavi-example",
    linkedin: "https://www.linkedin.com/in/anahita-mousavi-example",
  },
  {
    id: 9,
    name: "پانیذ کمالی",
    role: "مسئول سوشال مدیا",
    badge: "سوشال مدیا",
    avatar: img(),
    bio: "Data Scientist - مدیریت شبکه‌های اجتماعی.",
    linkedin: "https://www.linkedin.com/in/paniz-kamali-example",
  },
  {
    id: 10,
    name: "میلاد رضایی",
    role: "کادر اجرایی",
    avatar: img(),
    bio: "AI Engineer - کادر اجرایی رویداد.",
    github: "https://github.com/milad-rezaei-example",
    linkedin: "https://www.linkedin.com/in/milad-rezaei-example",
  },
  {
    id: 11,
    name: "حانیه کریمیان",
    role: "کادر اجرایی",
    avatar: img(),
    bio: "Data Analyst - کادر اجرایی رویداد.",
    linkedin: "https://www.linkedin.com/in/haniyeh-karimian-example",
  },
  {
    id: 12,
    name: "امیر فرحانی",
    role: "طراح لوگو",
    badge: "طراح",
    avatar: img(),
    bio: "Visual Artist - طراحی هویت بصری و لوگو.",
  },
  {
    id: 13,
    name: "ستاره نوروزی",
    role: "محتوا",
    avatar: img(),
    bio: "تولید محتوای فنی و مقالات جامعه.",
    github: "https://github.com/setareh-noruzi-example",
    linkedin: "https://www.linkedin.com/in/setareh-noruzi-example",
  },
];
