# SEO Audit — Le Club Pilates

> Dernière mise à jour : **10 mai 2026**
> Score global estimé : **~50/100** → objectif 60/100 à 90 jours

---

## ✅ Fait — Actions manuelles Search Console (10 mai 2026)

- Domaine `leclubpilates.com` vérifié dans Google Search Console (DNS TXT via Infomaniak)
- Sitemap soumis → 17 pages découvertes
- Toutes les landing pages `/cours-de-pilates/*` + `/abdos` déjà indexées
- `/blog` : indexation demandée (24-48h)
- `?trk=` : fonctionnalité supprimée par Google, géré automatiquement
- Uscreen : `/programs/`, `/categories/`, `/pages/`, `/join` supprimés via Search Console (renouveler dans 6 mois)

## ✅ Fait — Code (10 mai 2026)

- Sitemap dynamique branché Sanity → articles `/blog/[slug]` inclus automatiquement
- GA4 conditionné au consentement cookie (composant `GoogleAnalytics` + événement `cookieConsent`)
- JSON-LD retraite : champ `performer` (Alice) ajouté

---

## ✅ Fait — Blog & navigation (8 mai 2026)

- Pipeline IA fonctionnel (claude-opus-4-6 + claude-sonnet-4-6) — testé et déployé
- CORS Sanity production configuré (`www.leclubpilates.com`)
- Webhook Sanity → Vercel (create/update/delete sur `_type == "post"`)
- cron-job.org configuré (lun/mer/ven 7h, `0 7 * * 1,3,5`)
- Blog `/blog` : canonical absolu, OG image, filtre catégories fonctionnel (URL params)
- Blog `/blog/[slug]` : canonical absolu, liens internes sans `_blank`, `dateModified` JSON-LD, BreadcrumbJsonLd
- "Blog" ajouté dans le menu de navigation (desktop + mobile)
- Dropdown "Le Studio" regroupant `/about` et `/profs`

## ✅ Fait — Maillage interne 2 (8 mai 2026)

- Composant `RelatedCourses` ajouté sur les 6 landing pages `/cours-de-pilates/*` → liens croisés entre toutes les spécialités
- Sitemap `lastModified` mis à jour au 8 mai 2026 pour les pages modifiées

---

## 🟠 À faire — Code (priorité moyenne)

> Tout traité — voir section ✅ ci-dessous.

---

## ✅ Fait — Priorité moyenne (8 mai 2026)

- OG images spécifiques sur `/dos` (doux), `/wall`, `/full-body`, `/reformer` — fini le générique `og-image.jpg`
- Core Web Vitals : `<SpeedInsights />` Vercel déjà en place → vérifier le dashboard Vercel
- Segment GA4 "Trafic IA" : **action manuelle dans GA4** → Explore → Segments → Sessions → Référent contient `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`, `copilot.microsoft.com`

---

## ✅ Fait — Technique

- Pages légales `/legal/*` → `noindex, follow`
- Blog → `noindex` temporaire (contenu vide)
- Crawlers IA autorisés dans `robots.ts` (GPTBot, Anthropic-AI, PerplexityBot, CCBot)
- Security headers (HSTS, X-Frame-Options, etc.)

## ✅ Fait — Sémantique & contenu

- Section "Cours de Pilates en ligne" ajoutée homepage (H2 ciblé + 300 mots LSI)
- Titles raccourcis < 60 chars : `/about`, `/profs`, `/blog`
- Meta descriptions < 155 chars : `/`, `/about`, `/profs`
- Landing `/cours-de-pilates/debutant` — "pilates débutant" 880/mois
- Landing `/cours-de-pilates/prenatal` — "pilates enceinte" 2 400/mois
- Landing `/cours-de-pilates/dos` — "pilates dos" 2 900/mois
- Landing `/cours-de-pilates/wall` — "pilates wall" 4 400/mois
- Landing `/cours-de-pilates/full-body` — "pilates full body" 1 600/mois
- Landing `/cours-de-pilates/reformer` — "pilates reformer en ligne" 720/mois
- Hub `/cours-de-pilates/` + redirection 301 depuis `/classes`
- Page Retraite Ibiza 2026 (`/retraite`)

## ✅ Fait — Schémas JSON-LD

- FAQPage sur la homepage (11 questions)
- FAQPage sur chaque landing `/cours-de-pilates/*`
- Organization + HealthClub + AggregateRating (homepage)
- Person enrichi sur `/about` (hasCredential Polestar, DE, Instagram)
- Person enrichi sur `/profs` (équipe complète)
- ItemList sur `/cours-de-pilates/`
- BreadcrumbList sur toutes les landing pages

## ✅ Fait — Maillage interne

- `ClassesPreview` : Full Body, Mama, Wall, Reformer → liens internes (au lieu de l'app)
- `OnlinePilatesSection` : liens internes vers débutant, prénatal, Wall dans le texte
- Sitemap complet avec toutes les URLs (11 pages + légales)
