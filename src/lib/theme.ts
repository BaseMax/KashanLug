const KEY = "kashanlug-theme";

export function isDark(): boolean {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

function apply(dark: boolean): void {
  if (dark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export function toggleTheme(): void {
  const next = !isDark();
  apply(next);
  try { localStorage.setItem(KEY, next ? "dark" : "light"); } catch {}
}

export function initTheme(): void {
  let stored: string | null = null;
  try { stored = localStorage.getItem(KEY); } catch {}
  apply(stored === "dark");
}
