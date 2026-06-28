# TODO — Le Club Pilates
*Mis à jour : 17 juin 2026*

> SEO détaillé → voir `SEO_AUDIT_COMPLET.md` (section TODO SEO)

---

## 🔴 P0 — Blocage SEO critique (audit 17/06/2026)

- [x] **`robots.txt` bloque `/_next/`** — Retiré `Disallow: /_next/` dans `app/robots.ts`.
- [x] **Articles doublons — 301** — 6 doublons supprimés dans Sanity (4 détectés par l'audit + 2 trouvés en plus : `pilates-en-ligne-pratiquer-a-la-maison`, `3-erreurs-courantes-en-pilates-debutant-et-solutions`), 301 ajoutées dans `next.config.js`.
- [x] **Pipeline IA — prévention doublons** — `pickTopic()` excluait pas les sujets déjà publiés (sélection 100% aléatoire) → cause racine des doublons. Ajout d'un champ `topicSubject` sur le schéma Sanity (`sanity-studio/schemas/post.ts`), rétro-rempli sur les 15 articles restants, et `scripts/generate-article.ts` exclut maintenant les sujets déjà utilisés avant de générer un nouvel article.
- [x] **Pipeline IA — équilibrage des catégories** — Répartition publiée déséquilibrée (8 Pilates / 5 Conseils / 2 Bien-être / 0 Nutrition). `pickTopic()` priorise désormais la catégorie la moins représentée parmi les articles déjà publiés avant de tirer un sujet au hasard dans cette catégorie.
- [x] **Pages `noindex` hors sitemap** — Retiré `/legal/*` de `app/sitemap.ts`
- [x] **Homepage mobile — poids vidéo hero** — Vidéo hero recompressée (`public/videos/video-hero-pilates.mp4` 3,93 MB → 1,59 MB, `.webm` 1,75 MB → 1,56 MB, qualité visuelle inchangée). Ajout d'un poster (`public/images/hero-poster.jpg`, aplat couleur marque) affiché pendant le chargement. `HeroSection.tsx` passé en composant client avec appel explicite à `.play()` au montage.
  - ⚠️ Note : un bug d'autoplay vidéo pré-existant sur certains iPhone (la vidéo ne se lance qu'après avoir navigué puis être revenu sur la page) a été repéré pendant les tests — confirmé antérieur à ces changements, pas encore résolu, à investiguer séparément (probablement lié au mode Économie d'énergie iOS qui bloque l'autoplay sans interaction).

---

## 🔴 Priorité haute (impact SEO direct)

- [x] **Section "Derniers articles"** — Ajouter sur la homepage → booste l'autorité du blog (maillage interne + signal fraîcheur pour Google)
- [ ] **Avis Google dynamiques** — Google Places API (clé + Place ID) + composant ISR 24h → active les étoiles dans les résultats Google (rich snippets)

---

## 🟠 Priorité moyenne

- [x] **Page Livre** — Présentation du livre d'Alice, résumé, extrait, redirections vers plateformes de vente (Amazon, Fnac, etc.)
- [ ] **Titles blog trop longs** — 28/37 titles > 65 chars avec double marque `| Le Club Pilates`. Supprimer le suffixe en double, viser 50–60 chars.
- [ ] **Meta descriptions trop longues** — 11 metas > 160 chars (pages cours, retraite, livre). Réécrire à 130–155 chars.
- [ ] **Maillage interne articles** — Articles n'ont que 2 inlinks. Ajouter liens contextuels articles ↔ cours. Même problème pour `/livre`.
- [ ] **Tests mobiles** — Vérifier le rendu sur vrais appareils iOS + Android (Core Web Vitals)

---

## 🟡 Priorité basse

- [ ] **Page Shop** — Boutique équipement / accessoires Pilates (Stripe ou Shopify)
- [ ] **Page Formation** — Formations instructeurs, programme, tarifs, inscription
- [ ] **Tests automatisés** — Vitest + Playwright
- [ ] **Nouveaux schémas Sanity** — cours, témoignages, tarifs, retraite gérables par Alice sans passer par le code

---

## ✅ Terminé (historique)

- Sitemap dynamique branché Sanity — articles `/blog/[slug]` inclus automatiquement
- Optimisation articles blog — TL;DR + FAQ structurée + LSI keywords dans le pipeline IA. FAQPage JSON-LD auto. TL;DR affiché sur la page article.
- GA4 conditionné au consentement cookie (composant `GoogleAnalytics` + événement `cookieConsent`)
- Déploiement Vercel + domaine Infomaniak (leclubpilates.com)
- Blog Sanity complet — studio, pipeline IA GitHub Actions (lun/mer/ven 7h), webhook Vercel
- 6 landing pages SEO (`/cours-de-pilates/*`) + hub + maillage interne RelatedCourses
- Page Retraite Ibiza 2026 (`/retraite`)
- Formulaires Brevo — contact (`/api/contact`) + newsletter (`/api/newsletter`)
- Security headers (HSTS, X-Frame-Options, nosniff, XSS, Referrer, Permissions)
- GA4 (`G-1EPTX63F02`) + cookie banner RGPD
- JSON-LD complet (WebSite, Organization, HealthClub, FAQPage, BreadcrumbList, BlogPosting, Person, ItemList)
- Robots.txt avec crawlers IA autorisés
- Redirections 301 (Webflow → Next.js, `/classes` → `/cours-de-pilates`, `/pricing` → app)
- Vercel Speed Insights
- Mentions légales complètes (SIRET, adresse, CNIL)
- OG images spécifiques sur les landing pages
- Dropdown navigation "Le Studio" + lien Blog dans le menu
