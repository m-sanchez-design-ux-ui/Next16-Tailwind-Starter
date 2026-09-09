# Next.js + Tailwind Backoffice Starter Kit

> **Portfolio demo.** This is a personal fork of a real starter kit I
> worked on as UI Designer & UI Developer at Origin Solutions. The
> original git history is not included here — this fork runs
> standalone, with no backend of any kind.

## About this project

A reusable Next.js + Tailwind CSS starter kit for backoffice-style admin
panels: authentication screens, a UI Kit page showcasing the design
system's components, grids, dark mode, and a data table — meant as a
base for new internal projects rather than a client-specific product.

**My role:** UI Designer & UI Developer — design in Figma, and the
front-end implementation in Next.js (this repo), including the reusable
component library and design system.

**Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4.

## About this fork

Unlike the other starter kit in this portfolio (Angular), this one has
**zero backend dependency of any kind out of the box** — no API calls,
no environment variables, no credentials to mock. Every screen is
self-contained. The only functional addition made for this demo:

- **Sign-in** originally validated the form but didn't navigate
  anywhere on success. It now simulates a short delay and redirects to
  the dashboard, so the flow feels complete.
- **Dark/light mode toggle** — the original only followed the OS
  theme. Added a manual toggle (`src/context/ThemeContext.tsx`) next to
  the notifications button, persisted in `localStorage`, with an inline
  script in `layout.tsx` that applies the saved theme before paint (no
  flash of the wrong theme).
- **`/error-500-preview`** — Next.js's `error.tsx` only renders when a
  real error is thrown, so it isn't a page you can just visit. This
  route renders the same shared `Error500Screen` component directly,
  so it's reachable from the "Show Error 500" button on the template
  components page for demo purposes.

No other logic was changed — the rest of the starter kit behaves
exactly as it did originally.

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

**Sign in:** any email with a valid format and any password with 6+
characters will work.

## What you can try

- **Sign in** (`/signin`)
- **Dashboard** (`/`)
- **UI Kit / component library** (`/components`) — includes
  modals, the data table, and a button to preview the 500 error screen.
- **Grids** (`/grids`)
- **Help** (`/help`)
- **Password recovery / change** (`/password-recover`, `/password-change`)
- Toggle dark/light mode from the header, on any screen.

## Code quality

- **ESLint** (Next.js's own config) — 0 errors, 0 warnings.
- `npm run build` produces a fully static production build (every
  route is prerendered — there's nothing dynamic to break).

## Notes

- No automated tests are included (this starter kit predates that
  effort on the rest of the portfolio's code projects).

---
Miguel Sánchez — UX/UI Designer & UI Developer
m.sanchez.visual@gmail.com · linkedin.com/in/m-sanchez-murillo
