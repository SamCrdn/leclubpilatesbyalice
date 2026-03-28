# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js config)
npm start        # Run production server (after build)
```

No test suite is configured yet (planned for Phase 2 with Vitest + Playwright).

## Architecture

**Next.js 14 App Router** marketing site for an online Pilates studio. All pages are statically generated (SSG). No API routes or backend — forms are handled client-side via FormSpree.

### Key patterns

- `app/` — pages using Next.js App Router. Each page composes section components.
- `components/sections/` — full-page sections (Hero, Benefits, Classes, etc.) used by pages.
- `components/ui/` — small reusable components (CTAButton, NewsletterForm, ScrollReveal).
- `components/layout/` — Header and Footer, included in `app/layout.tsx`.

### Styling

Tailwind CSS with a custom brand palette defined in `tailwind.config.js`: `cream`, `sand`, `cocoa`, `mink`, `chalk`. Custom fonts: **Cormorant Garamond** (display/headings), **DM Sans** (body). Component-layer classes (`.btn-primary`, `.input-base`, etc.) are defined in `app/globals.css`.

### Animations

Scroll-reveal animations use `[data-animate]` attributes on elements — the `ScrollReveal` component in `app/layout.tsx` attaches an `IntersectionObserver` that adds `data-visible` when elements enter the viewport. Framer Motion is installed but used minimally.

### Forms

Both the contact form (`app/contact/page.tsx`) and newsletter form (`components/ui/NewsletterForm.tsx`) use `@formspree/react`. FormSpree IDs come from `NEXT_PUBLIC_FORMSPREE_CONTACT` and `NEXT_PUBLIC_FORMSPREE_NEWSLETTER` env vars.

### SEO

- Metadata set via Next.js `metadata` export in each page.
- JSON-LD structured data (WebSite, Organization, HealthClub, AggregateRating) embedded in `app/page.tsx`.
- `app/sitemap.ts` and `app/robots.ts` auto-generate sitemap/robots files.
- `NEXT_PUBLIC_SITE_URL` must be set for sitemap URLs to resolve correctly.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (used in sitemap, OG tags) |
| `NEXT_PUBLIC_FORMSPREE_NEWSLETTER` | FormSpree form ID for newsletter |
| `NEXT_PUBLIC_FORMSPREE_CONTACT` | FormSpree form ID for contact page |

## Phase 2 roadmap (not yet implemented)

- CMS: Sanity.io — will add `/blog/[slug]` and individual class pages
- Analytics: GA4 or Plausible
- i18n: `next-intl` (French-only today)
- Tests: Vitest + Playwright
- GDPR cookie banner
- Real images (currently using `PlaceholderImage` component)
