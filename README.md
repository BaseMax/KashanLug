# Kashan LUG - کاشان‌لاگ

> Website of **KashanLUG** (Kashan Linux User Group) - a community dedicated to open-source, Linux, and free-software culture in Kashan, Iran.

**Live site:** [basemax.github.io/KashanLug](https://basemax.github.io/KashanLug/) &nbsp;|&nbsp; **GitHub:** [baseMax/KashanLug](https://github.com/baseMax/KashanLug)

---

## About

**KashanLUG** is a non-profit technical community that organises in-person events, talks, and workshops around Linux, open-source software, and tech culture. This repository contains the full source code of the community website, built as a fast, fully-Persian (RTL) single-page application.

The first event - **«دانش بی‌مرز»** (Knowledge Without Borders) - takes place on **Friday, 18 Mehr 1405** at the University of Kashan (تالار فردوسی), Kashan, Isfahan Province.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Mithril.js](https://mithril.js.org/) 2.x (TSX / JSX) |
| Language | TypeScript 6 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Font | Vazirmatn 5 (Persian / Latin) |
| Routing | `m.route` with hash prefix (`#`) |

No PostCSS, no React, no heavy runtime — Mithril renders the whole app with a ~10 kB gzipped core.

---

## Features

- Full **RTL** layout with Persian locale (Farsi digits, Jalali dates)
- **Light / Dark** theme toggle — persisted in `localStorage`, toggled via `data-theme` attribute
- **Atomic design** component system under `src/components/ui/`
- Fully typed with strict TypeScript; zero `any` escapes in production code
- `@/` path aliases throughout — no `../../` relative imports
- Centralized site config in `src/data/site.ts` (name, city, social handles, etc.)
- Dynamic hero stats derived from actual data (speaker count, team size, event duration)
- Accessible custom `<Select>` dropdown with outside-click detection
- OTP authentication flow (`/auth`)
- Countdown timer to the event
- Responsive navigation with mobile hamburger menu
- Orange branded header — transparent over the home hero, solid gradient on all inner pages

---

## Project Structure

```
src/
├── components/       # Shared UI components
│   └── ui/           # Atomic design primitives
├── data/             # All content data (single source of truth)
│   ├── site.ts       # Org info, city, social links
│   ├── event.ts      # Event info, speakers, schedule, sponsors
│   ├── team.ts       # Executive team members
│   ├── about.ts      # About page stats & values
│   ├── blog.ts       # Blog posts
│   ├── contact.ts    # Contact items (reads from site.ts)
│   └── charter.ts    # Community charter
├── lib/              # Utilities (utils.ts, theme.ts)
├── pages/            # Page-level components
└── sections/         # Page sections (home/, event/, about/, …)
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/event` | Event — «دانش بی‌مرز» |
| `/schedule` | Schedule |
| `/team` | Executive Team |
| `/blog` | Blog list |
| `/blog/:slug` | Blog post |
| `/about` | About KashanLUG |
| `/contact` | Contact |
| `/join` | Join / Volunteer |
| `/charter` | Community Charter |
| `/auth` | Login / Register (OTP) |
| `/resume` | Resume |
| `/:404...` | Not Found |

---

## Getting Started

**Prerequisites:** Node.js ≥ 20, npm ≥ 10

```bash
# Clone
git clone https://github.com/baseMax/KashanLug.git
cd KashanLug

# Install dependencies
npm install

# Start dev server  (http://localhost:5173)
npm run dev

# Type-check
npm run type-check

# Production build  → dist/
npm run build

# Preview production build
npm run preview
```

---

## License

Copyright © 2026 **Seyyed Ali Mohammadiyeh (MAX BASE)**
