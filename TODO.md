# TODO — Le Club Pilates
*Mis à jour : 10 mai 2026*

> SEO détaillé → voir `SEO_AUDIT_COMPLET.md` (section TODO SEO)

---

## 🔴 Priorité haute (impact SEO direct)

- [ ] **Section "Derniers articles"** — Ajouter sur la homepage → booste l'autorité du blog (maillage interne + signal fraîcheur pour Google)
- [ ] **Avis Google dynamiques** — Google Places API (clé + Place ID) + composant ISR 24h → active les étoiles dans les résultats Google (rich snippets)

---

## 🟠 Priorité moyenne

- [ ] **Page Livre** — Présentation du livre d'Alice, résumé, extrait, redirections vers plateformes de vente (Amazon, Fnac, etc.)
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
