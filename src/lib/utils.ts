const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

export function faDigit(n: number, pad = 0): string {
  return String(n)
    .padStart(pad, "0")
    .replace(/\d/g, (d) => FA_DIGITS[+d]);
}

export function setTitle(title: string): void {
  document.title = title ? `${title} | کاشان‌لاگ` : "کاشان‌لاگ | گروه کاربران لینوکس کاشان";
}

/** Wrap English/code text so it renders LTR inside RTL context. */
export function ltr(text: string): string {
  return `<span dir="ltr" class="ltr-inline">${text}</span>`;
}

/** Simple string hash for deterministic color picks. */
export function strHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const AVATAR_GRADIENTS = [
  "from-brand-600 to-brand-800",
  "from-term-600 to-teal-800",
  "from-violet-600 to-purple-800",
  "from-sky-600 to-blue-800",
  "from-rose-600 to-red-800",
  "from-amber-600 to-yellow-800",
];

export function avatarGradient(name: string): string {
  return AVATAR_GRADIENTS[strHash(name) % AVATAR_GRADIENTS.length];
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0][0] ?? "") + (parts[parts.length - 1][0] ?? "")
    : (parts[0]?.slice(0, 2) ?? "?");
}

const EVENT_TS = Date.parse("2026-06-11T17:00:00+03:30");

export interface CountdownData {
  days: string;
  hours: string;
  mins: string;
  secs: string;
  done: boolean;
}

export function calcCountdown(): CountdownData {
  const diff = EVENT_TS - Date.now();
  if (diff <= 0) {
    return { days: "۰۰", hours: "۰۰", mins: "۰۰", secs: "۰۰", done: true };
  }
  return {
    days:  faDigit(Math.floor(diff / 86_400_000), 2),
    hours: faDigit(Math.floor((diff % 86_400_000) / 3_600_000), 2),
    mins:  faDigit(Math.floor((diff % 3_600_000) / 60_000), 2),
    secs:  faDigit(Math.floor((diff % 60_000) / 1_000), 2),
    done:  false,
  };
}
