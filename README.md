# Kashan LUG - کاشان‌لاگ

> Official website of **KashanLUG** (Kashan Linux User Group) - a community dedicated to open-source, Linux, and free-software culture in Kashan, Iran.

**Live site:** [kashanlug.ir](https://kashanlug.ir/) &nbsp;|&nbsp; **GitHub:** [baseMax/kashanlug](https://github.com/baseMax/kashanlug)

---

## About

**Kashan LUG** is a non-profit technical community that organises in-person events, talks, and workshops around Linux, open-source software, and tech culture. This repository contains the full source code of the community website, built as a fast, fully-Persian (RTL) single-page application.

The first event - **«زندگی در سایه»** (Life in the Shadow) - is a collaboration with **تهلاگ** (Tehran LUG) and takes place on **Thursday, 21 Khordad 1405** at Islamic Azad University, Kashan.

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

No PostCSS, no React, no heavy runtime - Mithril renders the whole app with a ~10 kB gzipped core.

---

## Features

- Full **RTL** layout with Persian locale (Farsi digits, Jalali dates)
- **Light / Dark** theme toggle - persisted in `localStorage`, toggled via `data-theme` attribute
- **Atomic design** component system under `src/components/ui/`
- Fully typed with strict TypeScript; zero `any` escapes in production code
- `@/` path aliases throughout - no `../../` relative imports
- Accessible custom `<Select>` dropdown with outside-click detection
- OTP authentication flow (`/auth`)
- Countdown timer to the event
- Responsive navigation with mobile hamburger menu
- Orange branded header - transparent over the home hero, solid gradient on all inner pages

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/event` | Event - «زندگی در سایه» |
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
git clone https://github.com/baseMax/kashanlug.git
cd kashanlug

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

Copyright © 2025 **Seyyed Ali Mohammadiyeh (MAX BASE)**
