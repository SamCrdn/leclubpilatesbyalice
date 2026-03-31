# TODO — Le Club Pilates

## En cours
- [ ] **Brevo domaine** — DNS DKIM en attente de propagation (ajoutés le 31 mars), relancer l'authentification Brevo une fois visible

---

## Corrections UI (28 mars 2026)
- [x] Sujets de contact ajoutés sous le titre "On est là pour vous" (homepage)
- [x] Menu burger mobile : espacement du bandeau augmenté
- [x] Hero : poster retiré, fond crème au chargement
- [x] Titres h1 mobile agrandis sur `/profs` et `/contact` (clamp 2.75rem)
- [x] Bandeau contact aligné sur le layout de la page profs

---

## À faire

### Intégrations techniques
- [ ] **Avis Google dynamiques** — Google Places API (clé API + Place ID) + composant async Next.js avec ISR 24h. ~30 req/mois, gratuit (seuil : 11 700 req/mois). Prérequis : créer projet Google Cloud, activer Places API, générer clé API, trouver le Place ID. Ajouter `GOOGLE_PLACES_API_KEY` et `GOOGLE_PLACE_ID` dans `.env.local`.
- [ ] **Branchement CMS** — Création projet Sanity.io, installation `next-sanity`, configuration client + token, studio Sanity accessible sur `/studio`. Prérequis avant l'automatisation blog.
- [ ] **Automatisation blog** — Création des pages `/blog/[slug]`, schéma de contenu Sanity, ISR pour les articles. Nécessite le branchement CMS.

### Mise en ligne
- [x] **Déploiement** — Repo GitHub créé, projet importé sur Vercel, variables d'env configurées. Site live sur `leclubpilatesbyalice.vercel.app`.
- [ ] **Domaine** — Connecter `leclubpilates.com` sur Vercel (DNS).
- [x] **Compléter les mentions légales** — SIRET, adresse siège social (obligatoire CNIL avant live).

### Nouvelles pages
- [ ] **Page Retraite** — Présentation des retraites Pilates, dates, lieux, inscription.
- [ ] **Page Shop** — Boutique (équipement, accessoires Pilates), intégration e-commerce (Shopify / Stripe).
- [ ] **Page Formation** — Formations instructeurs, programme, tarifs, inscription.

---

## Audit — Points restants par domaine

### 🔒 Sécurité
- [x] Security headers (CSP, HSTS, X-Frame-Options, etc.)
- [x] `.env.local` non tracké dans git
- [x] Validation et sanitisation formulaires (contact + newsletter)
- [x] `rel="noopener noreferrer"` sur tous les liens externes
- [x] `safeBgUrl()` pour les injections CSS backgroundImage
- [x] Compléter les mentions légales (SIRET, adresse) — obligatoire CNIL

### ⚡ Performance & Optimisation
- [x] `next/image` avec `fill` + `sizes` sur toutes les images
- [x] Fonts via `next/font/google` avec `display: swap`
- [x] GA4 en `lazyOnload` (ne bloque pas le rendu)
- [x] Vidéo hero : `preload="metadata"` + `poster`
- [x] Carousel testimonials : `offsetWidth` mis en cache
- [x] Behold widget en `lazyOnload`
- [ ] Tests Lighthouse post-déploiement (Core Web Vitals)
- [ ] Mettre en place Vitest + Playwright (Phase 2)

### 🔍 SEO
- [x] Metadata (title, description) optimisées sur toutes les pages
- [x] Canonicals absolus sur toutes les pages
- [x] OG tags + og:image sur toutes les pages
- [x] JSON-LD : WebSite, Organization, HealthClub, FAQPage, Blog, ContactPage, Person, ItemList
- [x] Sitemap (9 pages, dates réelles)
- [x] Robots.txt configuré
- [x] Redirect `/pricing` → app (301 permanent)
- [ ] E-E-A-T : renforcer les signaux d'autorité sur `/about` et `/profs` (certifications, presse, citations)
- [ ] Avis Google dynamiques (renforce le schema AggregateRating)
- [ ] Pages blog individuelles `/blog/[slug]` (contenu long → SEO)
- [ ] Backlinks : soumettre le site à des annuaires Pilates / bien-être

### 🎨 Design & UX
- [x] Scroll reveal (`data-animate` + IntersectionObserver)
- [x] Header transparent sur hero sombre, fond crème au scroll
- [x] Menu mobile avec focus trap + ESC + fermeture au resize
- [x] Lien "Aller au contenu" (accessibilité clavier)
- [x] Page 404 personnalisée
- [x] Page 500 personnalisée
- [ ] Tester le rendu mobile sur vrais appareils (iOS + Android)
- [ ] Dark mode (optionnel, Phase 2)

### 📈 Acquisition & CRO
- [x] CTA hero : "7 jours gratuits" visible sur mobile et desktop
- [x] CTA header mobile : "7 jours gratuits"
- [x] PromoBanner avec date limite d'urgence
- [x] Réordonnancement homepage (Pricing + Testimonials remontés)
- [x] CTA sous le feed Instagram
- [x] FAQ enrichie (objections : blessures, résultats, grossesse)
- [x] StatsBar : ★ 5/5 · 71 avis Google
- [x] UTM params sur CTAs principaux (hero, header, banner)
- [ ] CTA après succès formulaire de contact
- [ ] UTM params sur liens footer vers l'app
- [ ] A/B test copy CTA hero (Phase 2)
- [ ] Popup exit-intent (Phase 2)

### 🤖 Automatisation
- [x] Sitemap auto-généré (`app/sitemap.ts`)
- [x] Robots auto-généré (`app/robots.ts`)
- [ ] Blog : CMS Sanity + pages dynamiques `/blog/[slug]`
- [ ] Cours : pages dynamiques `/classes/[slug]` (Phase 2)
- [ ] Emails transactionnels automatisés (bienvenue, relance essai) — hors scope Next.js
- [ ] Avis Google dynamiques (Places API + ISR)

---

## Terminé
- [x] Audit sécurité & performance
- [x] Audit SEO complet (metadata, JSON-LD, sitemap, canonicals)
- [x] Audit CRO / Design / Acquisition
- [x] Renommage et nettoyage des images
- [x] Security headers (next.config.js)
- [x] Google Analytics GA4 (lazyOnload)
- [x] Cookie banner
- [x] Page erreur 500
- [x] Formulaire de contact (validation, maxLength)
- [x] Formulaire de contact branché Brevo (API route `/api/contact`)
- [x] Message de succès formulaire contact (fix data-animate)
- [x] Message confirmation newsletter mis à jour
- [x] Suppression "& planning" section contact homepage
- [x] Fix artefact visuel photos abonnements (transform-gpu)
- [x] Brevo : domaine leclubpilates.com enregistré + code TXT + DMARC vérifiés
