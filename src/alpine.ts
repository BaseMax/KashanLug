import type { Alpine as AlpineType } from "alpinejs";
import { members } from "./data/team";
import { posts } from "./data/blog";
import { schedule } from "./data/event";

const faDigit = (n: number, pad = 2) =>
  n
    .toString()
    .padStart(pad, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

const EVENT_TS = Date.parse("2026-06-11T17:00:00+03:30");

export function registerComponents(Alpine: AlpineType): void {
  Alpine.data("countdown", () => ({
    days: "۰۰",
    hours: "۰۰",
    mins: "۰۰",
    secs: "۰۰",
    live: false,
    finished: false,
    tick(): void {
      const diff = EVENT_TS - Date.now();
      if (diff <= 0) {
        this.live = diff > -4 * 3600 * 1000;
        this.finished = !this.live;
        this.days = this.hours = this.mins = this.secs = "۰۰";
        return;
      }
      const s = Math.floor(diff / 1000);
      this.days = faDigit(Math.floor(s / 86400));
      this.hours = faDigit(Math.floor((s % 86400) / 3600));
      this.mins = faDigit(Math.floor((s % 3600) / 60));
      this.secs = faDigit(s % 60);
    },
    init(): void {
      this.tick();
      setInterval(() => this.tick(), 1000);
    },
  }));

  Alpine.data("teamApp", () => ({
    members,
    modalOpen: false,
    activeMember: null as (typeof members)[number] | null,
    openModal(m: (typeof members)[number]): void {
      this.activeMember = m;
      this.modalOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeModal(): void {
      this.modalOpen = false;
      document.body.style.overflow = "";
    },
  }));

  Alpine.data("blogApp", () => ({
    posts,
    query: "",
    category: "همه",
    get categories(): string[] {
      return ["همه", ...Array.from(new Set(posts.map((p) => p.category)))];
    },
    get filtered() {
      return this.posts.filter((p) => {
        const matchCat = this.category === "همه" || p.category === this.category;
        const q = this.query.trim();
        const matchQ =
          !q || p.title.includes(q) || p.excerpt.includes(q) || p.tag.includes(q);
        return matchCat && matchQ;
      });
    },
  }));

  const kindMeta: Record<string, { label: string; dot: string; bar: string }> = {
    talk: { label: "ارائه", dot: "bg-brand-500", bar: "bg-brand-500" },
    ceremony: { label: "مراسم", dot: "bg-sky-500", bar: "bg-sky-500" },
    network: { label: "شبکه‌سازی", dot: "bg-term-500", bar: "bg-term-500" },
    break: { label: "استراحت", dot: "bg-gray-500", bar: "bg-gray-500" },
  };
  Alpine.data("scheduleApp", () => ({
    schedule,
    filter: "all",
    filters: [
      { id: "all", label: "همه" },
      { id: "talk", label: "ارائه‌ها" },
      { id: "ceremony", label: "مراسم" },
      { id: "network", label: "شبکه‌سازی" },
    ],
    meta(kind: string) {
      return kindMeta[kind] ?? kindMeta.talk;
    },
    get visible() {
      return this.filter === "all"
        ? this.schedule
        : this.schedule.filter((s) => s.kind === this.filter);
    },
  }));

  Alpine.data("authApp", () => ({
    step: "phone" as "phone" | "otp",
    phone: "",
    code: ["", "", "", "", "", ""],
    error: "",
    loading: false,
    resendIn: 0,
    get phoneValid(): boolean {
      return /^9\d{9}$/.test(this.phone);
    },
    sendCode(): void {
      this.error = "";
      if (!this.phoneValid) {
        this.error = "شماره موبایل را درست وارد کنید (مثال: ۹۱۲۳۴۵۶۷۸۹).";
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.step = "otp";
        this.startResend();
      }, 900);
    },
    startResend(): void {
      this.resendIn = 90;
      const t = setInterval(() => {
        this.resendIn--;
        if (this.resendIn <= 0) clearInterval(t);
      }, 1000);
    },
    onCodeInput(i: number, e: Event): void {
      const el = e.target as HTMLInputElement;
      el.value = el.value.replace(/\D/g, "").slice(-1);
      this.code[i] = el.value;
      if (el.value && i < 5) {
        (el.nextElementSibling as HTMLInputElement | null)?.focus();
      }
    },
    onCodeKey(i: number, e: KeyboardEvent): void {
      const el = e.target as HTMLInputElement;
      if (e.key === "Backspace" && !el.value && i > 0) {
        (el.previousElementSibling as HTMLInputElement | null)?.focus();
      }
    },
    verify(): void {
      this.error = "";
      if (this.code.some((c) => c === "")) {
        this.error = "کد ۶ رقمی را کامل وارد کنید.";
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.error = "این یک نسخه نمایشی است؛ سرویس احراز هویت واقعی هنوز متصل نشده.";
      }, 900);
    },
    get faResend(): string {
      return faDigit(this.resendIn);
    },
  }));

  Alpine.data("resumeApp", () => ({
    profile: {
      name: "نیلوفر استادمحمدی",
      title: "Frontend Developer",
      avatar: "/assets/images/niloufar.jpg",
      location: "کاشان، ایران",
      email: "niloufar@example.com",
      about:
        "توسعه‌دهندهٔ فرانت‌اند و عضو تیم فنی کاشان‌لاگ؛ علاقه‌مند به نرم‌افزار آزاد، رابط کاربری و تجربهٔ کاربری. این پروفایل نمونه‌ای از کارت شبکه‌سازی NFC کاشان‌لاگ است.",
      skills: ["TypeScript", "Vue.js", "Tailwind CSS", "Alpine.js", "Git", "Linux", "Figma", "Vite"],
      github: "https://github.com/solitudeofme",
      linkedin: "https://www.linkedin.com/in/niloufar-ostadmohammadi-1b4728300",
      telegram: "https://t.me/KashanLUG",
      website: "",
    },
    print(): void {
      window.print();
    },
  }));

  Alpine.data("contactForm", () => ({
    sent: false,
    sending: false,
    submit(): void {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
        this.sent = true;
      }, 900);
    },
  }));
}
