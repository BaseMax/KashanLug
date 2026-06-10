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

const img = (f: string) => `/assets/images/${f}`;

export const members: Member[] = [
  {
    id: 1,
    name: "مهلا برگزینی",
    role: "راهبر ارشد",
    lead: true,
    avatar: img("mahla.jpg"),
    bio: "DevOps Engineer - راهبری و هماهنگی کلان کاشان‌لاگ.",
    linkedin:
      "https://www.linkedin.com/in/mahla-bargoziny-a33459365",
  },
  {
    id: 2,
    name: "علیرضا حسن‌زاده",
    role: "مدیر اجرایی",
    lead: true,
    avatar: img("alireza.jpg"),
    bio: "Data Scientist - راهبر رویداد و مدیریت اجرایی.",
    github: "https://github.com/AlirezaXZC",
    linkedin: "https://www.linkedin.com/in/alirezahassanzade",
  },
  {
    id: 3,
    name: "نگار رنجبر",
    role: "منابع انسانی",
    avatar: img("negar.png"),
    bio: "Data Scientist - مدیریت منابع انسانی و جذب نیرو.",
    linkedin: "https://www.linkedin.com/in/negar-ranjbar-81b230338",
  },
  {
    id: 4,
    name: "تینا رستمی",
    role: "مارکتینگ",
    avatar: img("tina.jpg"),
    bio: "AI Engineer - بازاریابی و ارتباطات.",
    github: "https://github.com/tinars",
    linkedin: "https://www.linkedin.com/in/tina-rostami-8403a830a",
  },
  {
    id: 5,
    name: "پارسا فرخیان",
    role: "مدیر مالی",
    avatar: img("parsa.jpg"),
    bio: "Network Engineer (Passive & Active) - مدیریت مالی.",
    linkedin: "https://www.linkedin.com/in/parsa-farrokhian-3b0166339",
  },
  {
    id: 6,
    name: "حسین اصغری",
    role: "تیم فنی / Backend",
    badge: "Backend",
    avatar: img("hossein.jpg"),
    bio: "توسعه‌دهنده نرم‌افزار - تیم فنی بک‌اند.",
    github: "https://github.com/hos8ein",
    linkedin: "https://www.linkedin.com/in/hosein-asghari-54710a238",
  },
  {
    id: 7,
    name: "بهمن رنجبر",
    role: "تیم فنی / Backend",
    badge: "Backend",
    avatar: img("bahman.png"),
    bio: "Backend Developer - تیم فنی بک‌اند.",
    github: "https://github.com/devbybahman",
    linkedin: "https://www.linkedin.com/in/devbybahman",
  },
  {
    id: 8,
    name: "نیلوفر استادمحمدی",
    role: "تیم فنی / Frontend",
    badge: "Frontend",
    avatar: img("niloufar.jpg"),
    bio: "Frontend Developer - تیم فنی فرانت‌اند.",
    github: "https://github.com/solitudeofme",
    linkedin: "https://www.linkedin.com/in/niloufar-ostadmohammadi-1b4728300",
  },
  {
    id: 9,
    name: "آتنا معصومی",
    role: "مسئول سوشال مدیا",
    badge: "سوشال مدیا",
    avatar: img("atena.jpg"),
    bio: "Data Scientist - مدیریت شبکه‌های اجتماعی.",
    linkedin: "https://www.linkedin.com/in/atena-masoomi-ghalhari-05338928a",
  },
  {
    id: 10,
    name: "نیما احمدی",
    role: "کادر اجرایی",
    avatar: img("nima.jpg"),
    bio: "AI Engineer - کادر اجرایی رویداد.",
    github: "https://github.com/Niwmua",
    linkedin: "https://www.linkedin.com/in/nima-ahmadi81/",
  },
  {
    id: 11,
    name: "سید جلال‌الدین سید محمدی",
    role: "کادر اجرایی",
    avatar: img("jalal.jpg"),
    bio: "Data Analyst - کادر اجرایی رویداد.",
    linkedin: "https://www.linkedin.com/in/jalal-mahabadi-312345286",
  },
  {
    id: 12,
    name: "فردین سراج",
    role: "طراح لوگو",
    badge: "طراح",
    avatar: img("fardin.jpg"),
    bio: "Visual Artist - طراحی هویت بصری و لوگو.",
  },
  {
    id: 13,
    name: "امیرحسین مبینی",
    role: "محتوا",
    avatar: img("amirhossein.jpg"),
    bio: "تولید محتوای فنی و مقالات جامعه.",
    github: "https://github.com/TheAmirhosssein",
    linkedin: "https://www.linkedin.com/in/amirhossein-mobini",
  },
];
