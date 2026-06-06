# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## À lire au démarrage de chaque session

**Lire ces fichiers dans l'ordre pour comprendre l'état du projet :**

1. `CLAUDE.md` ← ce fichier (architecture, stack, env vars)
2. `TODO.md` — tâches en cours et backlog (code uniquement, hors SEO)
3. `SEO_AUDIT_COMPLET.md` — TODO SEO en tête du fichier + stratégie complète

**Référence complémentaire :**
- `GUIDE-ALICE.md` — guide non-technique pour Alice (Infomaniak, Sanity, Vercel, Anthropic)
- `SEO_AUDIT_CHANGELOG.md` — historique des corrections SEO déjà faites

## Règle de mise à jour

**À chaque tâche terminée :** cocher la case correspondante dans `TODO.md` ou `SEO_AUDIT_COMPLET.md` (section TODO SEO) immédiatement, sans attendre que l'utilisateur le demande.

**À chaque nouvelle page ou fonctionnalité ajoutée :** mettre à jour la section "Pages" et "What's done" de ce fichier.

---

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js config)
npm start        # Run production server (after build)
```

No test suite is configured yet.

## Lancement du serveur de développement

Avant de lancer `npm run dev`, toujours tuer le processus existant sur le port 3000 pour éviter les conflits :

```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue).OwningProcess -Force -ErrorAction SilentlyContinue
npm run dev
```

> **Note SSL locale** : le script `dev` inclut `cross-env NODE_OPTIONS=--use-system-ca` (via `package.json`) pour contourner l'erreur `UNABLE_TO_VERIFY_LEAF_SIGNATURE` due au proxy/antivirus Windows qui intercepte le HTTPS. Sans cette option, les appels Sanity échouent silencieusement en local et les sections blog restent vides.
> Pour `npm install`, si le même problème survient : `$env:NODE_OPTIONS='--use-system-ca'; npm install ...`

Après chaque modification de composant ou de page, ouvrir automatiquement http://localhost:3000 pour vérifier le rendu.

---

## Architecture

**Next.js 15 / React 19 App Router** marketing site for an online Pilates studio. Most pages are statically generated (SSG). API routes handle contact form, newsletter, and AI article generation.

### Key patterns

- `app/` — pages using Next.js App Router. Each page composes section components.
- `app/api/` — API routes: `contact` (Brevo SMTP), `newsletter` (Brevo contacts), `generate-article` (Anthropic → Sanity).
- `components/sections/` — full-page sections (Hero, Benefits, Classes, etc.) used by pages.
- `components/ui/` — small reusable components (CTAButton, NewsletterForm, ScrollReveal, CookieBanner).
- `components/layout/` — Header and Footer, included in `app/layout.tsx`.
- `lib/sanity.ts` + `lib/sanity.queries.ts` — Sanity client and GROQ queries.
- `lib/blog/` — AI article generation pipeline (topics picker, Markdown→PortableText converter, Claude pipeline).
- `sanity-studio/` — standalone Sanity Studio (deployed separately at leclubpilates.sanity.studio).

### Pages

- `/` — Homepage
- `/about` — About (Alice)
- `/profs` — Team
- `/cours-de-pilates/` — Hub landing page (redirected from `/classes`)
- `/cours-de-pilates/debutant` `/dos` `/prenatal` `/wall` `/full-body` `/reformer` — Specialty landing pages
- `/retraite` — Retreat Ibiza 2026
- `/livre` — Livre "Mon cahier Pilates au mur" (éditions Solar, avril 2025) — galerie, FAQ, maillage vers /cours-de-pilates/wall
- `/blog/` — Blog listing (Sanity ISR)
- `/blog/[slug]` — Blog article (Sanity ISR)
- `/contact` — Contact form
- `/legal/mentions-legales` `/cgv` `/confidentialite` — Legal pages (noindex)

### Styling

Tailwind CSS with a custom brand palette defined in `tailwind.config.js`: `cream`, `sand`, `cocoa`, `mink`, `chalk`. Custom fonts: **Cormorant Garamond** (display/headings), **DM Sans** (body), **DM Mono**. Component-layer classes (`.btn-primary`, `.input-base`, etc.) are defined in `app/globals.css`.

### Animations

Scroll-reveal animations use `[data-animate]` attributes on elements — the `ScrollReveal` component in `app/layout.tsx` attaches an `IntersectionObserver` that adds `data-visible` when elements enter the viewport. Framer Motion is installed but used minimally.

### Forms

- Contact form (`app/contact/ContactForm.tsx`) → `POST /api/contact` → **Brevo** SMTP
- Newsletter form (`components/ui/NewsletterForm.tsx`) → `POST /api/newsletter` → **Brevo** contacts list

### Blog (Sanity CMS)

- Sanity project ID: `71c7c0vz` (account: alice.pilates.paris@gmail.com)
- Studio deployed at: https://leclubpilates.sanity.studio (Alice reviews and publishes drafts here)
- AI pipeline: Claude (opus-4-6 planner + sonnet-4-6 writer) generates drafts 3×/week via **GitHub Actions** (`.github/workflows/generate-article.yml`, lun/mer/ven 7h Paris) → script `scripts/generate-article.ts` → Sanity draft
- `lib/blog/topics.ts` — 44 subjects (general + internal linking to landing pages)
- Blog pages use ISR; Sanity webhook triggers Vercel revalidation on publish/update/delete

### SEO

- Metadata set via Next.js `metadata` export in each page.
- JSON-LD structured data: WebSite, Organization, HealthClub, FAQPage, BreadcrumbList, BlogPosting, Person, ItemList across multiple pages.
- `app/sitemap.ts` — static routes + Sanity blog articles dynamically.
- `app/robots.ts` — allows AI crawlers (GPTBot, Anthropic-AI, PerplexityBot, CCBot).
- `NEXT_PUBLIC_SITE_URL` must be set for sitemap URLs to resolve correctly.

---

## Deployment & Hosting

| Service | Rôle |
|---|---|
| **Vercel** | Déploiement auto du site Next.js sur `git push main` |
| **Infomaniak** | Registraire du domaine leclubpilates.com |
| **app.leclubpilates.com** | Plateforme Uscreen (streaming membres, hors ce repo) |
| **leclubpilates.sanity.studio** | Sanity Studio standalone (déployé depuis `sanity-studio/`) |

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (used in sitemap, OG tags) |
| `BREVO_API_KEY` | Brevo API key (contact form + newsletter) |
| `CONTACT_TO_EMAIL` | Email address receiving contact messages |
| `BREVO_NEWSLETTER_LIST_ID` | Optional — Brevo list ID for newsletter subscribers |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID (`71c7c0vz`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_API_TOKEN` | Sanity Editor token (write access for article generation) |
| `ANTHROPIC_API_KEY` | Anthropic API key (AI article generation) |
| `CRON_SECRET` | Secret protecting `POST /api/generate-article` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-1EPTX63F02`) |
| `NEXT_PUBLIC_BEHOLD_FEED_ID` | Behold Instagram feed ID |

---

## What's done

- Déploiement Vercel + domaine Infomaniak
- Blog Sanity complet (studio, pipeline IA, webhook Vercel, cron-job.org)
- Formulaires Brevo (contact + newsletter)
- Security headers (HSTS, X-Frame-Options, nosniff, XSS, Referrer, Permissions)
- GA4 + cookie banner RGPD
- JSON-LD complet sur toutes les pages
- Sitemap dynamique + robots.txt
- 6 landing pages SEO + hub + maillage interne (RelatedCourses)
- Page Livre (/livre) — JSON-LD Book + FAQPage, galerie slider, maillage interne
- Page Retraite Ibiza 2026
- Vercel Speed Insights

## Still to do

→ Voir `TODO.md` pour le code et `SEO_AUDIT_COMPLET.md` pour le SEO.
