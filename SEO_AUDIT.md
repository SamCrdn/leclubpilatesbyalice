# SEO Audit — Le Club Pilates

> Dernière mise à jour : **27 avril 2026**
> Score global estimé : **32/100** → objectif 60/100 à 90 jours

---

## ⚠️ Actions manuelles — À faire par toi

| # | Action | Où | Impact |
|---|---|---|---|
| 1 | Bloquer `/programs/` `/categories/` `/pages/` `/join` `/sign_in` dans le `robots.txt` | Tableau de bord de **app.leclubpilates.com** (hébergeur/Uscreen) | 🔴 Critique — stoppe la cannibalisation |
| 2 | Déclarer le paramètre `?trk=` à ignorer | **Google Search Console** → Paramètres d'URL | 🟠 Important — élimine la duplication homepage |
| 3 | Demander la re-indexation des nouvelles URLs | **Google Search Console** → Inspection d'URL → pour chaque `/cours-de-pilates/*` | 🟠 Important — accélère le ranking |
| 4 | Soumettre le sitemap | **Google Search Console** → Sitemaps → `https://www.leclubpilates.com/sitemap.xml` | 🟠 Important |

---

## 🔴 À faire — Code (priorité haute)

| Tâche | Mot-clé cible | Volume |
|---|---|---|
| Articles blog (nécessite Sanity CMS actif) | pilates dos, débutant, Wall, prénatal... | 4 000–4 800/mois chacun |

> Le blog est le seul levier code restant à fort impact. Tout le reste est fait.

---

## 🟠 À faire — Code (priorité moyenne)

| Tâche | Impact |
|---|---|
| Tester Core Web Vitals (PageSpeed Insights) et corriger si LCP > 2.5s | Performance mobile |
| Configurer segment GA4 "trafic IA" (chatgpt.com, perplexity.ai) | Mesure GEO |

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
