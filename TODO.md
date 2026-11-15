# TODO — Le Club Pilates
*Mis à jour : 15 novembre 2026*

> SEO détaillé → voir `SEO_AUDIT_COMPLET.md` (section TODO SEO)

---

## 🔴 Plan essais gratuits (étude du 14/11/2026)

- [x] **#1 Stopper les doublons du pipeline** (15/11) — Les 51 sujets de `lib/blog/topics.ts` étaient épuisés fin septembre et `pickTopic()` recommençait la liste → ~26 doublons sur 77 articles publiés (16 sujets). `pickTopic()` lève maintenant une erreur s'il n'y a plus de sujet libre, et la génération refuse un slug déjà pris. Logique commune dans `lib/blog/generate.ts`, utilisée par `scripts/generate-article.ts` et `/api/generate-article` (la route tirait au hasard sans exclure les sujets publiés ni enregistrer `topicSubject`). ⚠️ Plus aucun article généré tant que de nouveaux sujets ne sont pas ajoutés.
- [x] **Calendrier éditorial 17/11/2026 → 13/02/2027** (15/11) — 39 nouveaux sujets dans `lib/blog/topics.ts`, traités dans l'ordre de la liste (`pickTopic()` ne tire plus au hasard). Chaque sujet renvoie vers une page cours du site. Fiches programmes du pipeline corrigées d'après Uscreen (`lib/blog/pipeline.ts` : débutant 4 semaines et 15 séances, Sculpt 1 mois et 12 séances, Mama 26 séances, Express déconseillé aux débutantes) + consigne de prudence sur les sujets de santé. À compléter avant le 13/02/2027.
- [x] **#2 Fusionner les doublons existants** (15/11, en ligne, vérifié : 26 redirections OK, sitemap 66 URL) — Garder l'URL qui reçoit les clics Search Console, supprimer les copies dans Sanity, 301 dans `next.config.js`.
  - [x] 26 redirections 301 ajoutées dans `next.config.js` (16 sujets, copie → article le plus ancien, vérifié sans chaîne) (15/11)
  - [x] Sanity : `topicSubject` recopié sur les 3 articles gardés qui n'en avaient pas (`premieres-semaines-pilates-ressenti-corps`, `programme-pilates-debutant-6-semaines`, `pilates-et-gainage-bien-plus-que-les-abdos`) (15/11)
  - [x] Sauvegarde des 26 copies + 1 brouillon doublon de `frequence-pilates-resultats` (créé le 13/11, à ne pas publier) dans `..\leclubpilates-sauvegardes\sanity-doublons-2026-11-15.json` (15/11)
  - [x] 27 documents supprimés le 15/11, le jour de la mise en ligne des 301 : `..\leclubpilates-sauvegardes\supprimer-doublons.cjs`
- [ ] **#3 Corriger les infos fausses** — « 1 000 membres » (`app/page.tsx`, `CTABanner.tsx`, `StatsBar.tsx`, Sanity), programme débutant en 4 semaines (`lib/blog/pipeline.ts`, `topics.ts`, 2 articles).
  - [x] Blog (15/11, en ligne) : article `programme-pilates-debutant-6-semaines` corrigé (programme du Club = 4 semaines, 15 séances de 15 à 35 min ; le texte reste une progression générale sur 6 semaines). Noms de programmes corrigés dans 25 articles (39 passages) : « Fondamentaux du Pilates » → « Programme Pilates pour Débutant », « Full Body Sculpt » → « Programme Pilates Sculpt ». Sauvegardes dans `..\leclubpilates-sauvegardes\`.
  - [x] « Pilates Mama sur 12 mois » remplacé par « 26 séances, grossesse et post-partum » dans 3 articles (15/11, en ligne).
  - [x] Site : « 1 000 membres » retiré (15/11, en ligne au commit) : description de l'accueil (« Notés 5/5 sur Google »), `CTABanner.tsx` (« un club noté 5/5 sur Google »), `StatsBar.tsx` et `scripts/seed-sanity.ts` (« 7 jours d'essai gratuit » à la place de « +1 000 membres »). Nombre d'avis Google (81 dans le code) à confirmer sur la fiche.
- [ ] **#4 Titres et descriptions Google** — Accueil, perte de poids, Joseph Pilates, récupération, collations, stretching, retraite (marque en double).
  - [x] Blog (15/11, en ligne, date de référence pour Search Console) : perte de poids, Joseph Pilates, récupération musculaire, collations, stretching ; « en 2025 » retiré de « Pilates pour les nuls »
  - [x] Accueil : « Cours de Pilates en ligne, 7 jours gratuits | Le Club Pilates » + nouvelle description ; `/retraite` sans marque en double (15/11, en ligne au commit)
- [x] **#6 Encadré au milieu des articles** (15/11, en ligne au commit) — `components/ui/ArticleCoursCTA.tsx`, inséré avant la 2e section dans `app/blog/[slug]/page.tsx`. Page cours choisie par `lib/blog/coursPourArticle.ts` (titre + `topicSubject`). Lien d'essai : **nouvelle position `blog-milieu`** (`utm_content=blog-milieu`). Bouton du bas `blog-article` inchangé. ⚠️ Fait bouger le KPI 3 : noter la date de mise en ligne.
- [x] **#7 Pipeline sans liens vers l'app** (15/11, en ligne au commit) — `lib/blog/pipeline.ts` : liens vers les pages cours uniquement ; filet de sécurité dans `lib/blog/generate.ts` via `lib/blog/liensApp.ts`.
- [x] **#8 Liens vers l'app dans les articles existants** (15/11, en ligne) — 89 liens remplacés dans 51 articles (`..\leclubpilates-sauvegardes\corriger-liens-app.ts`), contrôle : 0 restant.
- [x] **#9 Bloc « À lire » sur les 7 pages cours** (15/11, en ligne au commit) — `components/ui/ArticlesLies.tsx` (3 articles les plus récents du thème, même règle que #6), `revalidate = 3600` sur les pages cours.
- [x] **#5 (code) Analytics seulement sur le vrai site** (15/11, en ligne au commit) — `components/ui/GoogleAnalytics.tsx` ne charge GA que sur `www.leclubpilates.com` / `leclubpilates.com` (plus de localhost ni de `*.vercel.app`). Choisi plutôt que `VERCEL_ENV`, qui dépend d'un réglage Vercel.
- [ ] **#5 (à la main)** — (GA4 « sites référents indésirables » abandonné le 15/11 : localhost et prévisualisations déjà bloqués par le code, les visites `vercel.com` sont de vraies visites de l'équipe.) ~~cron-job.org : désactiver la tâche `/api/generate-article`~~ fait le 15/11. ~~Vercel : redirection `leclubpilates.com` → `www` en 308~~ fait le 15/11 (vérifié : 308). Chemin : projet → Networking → Domains. ~~Search Console : inspecter `http://www.leclubpilates.com/`~~ fait le 15/11 : « non indexée, page avec redirection » (normal). Découverte via des liens externes en http (podcast Ausha « Parlons PMA » épisode 37, réel Instagram). Rien à corriger ; suivre la baisse des clics sur cette URL dans Performances.
- [x] **#10 Dates du sitemap** (15/11, en ligne au commit) — `app/sitemap.ts` : pages modifiées datées du 15/11, et chaque article daté de sa dernière modification Sanity (`_updatedAt`).
- [ ] **#11** — Compteur de visites sans cookie (facultatif).
- [x] **Search Console, 404** (15/11) — Sur 51 URL en 404, seules 2 sont du site : `/home` → `/` et `/retraite/ibiza` → `/retraite` (301 dans `next.config.js`). Les 49 autres sont dans l'app Uscreen (fils de commentaires `/contents/…/replies`, programmes supprimés) : rien à faire côté site.
- [ ] **Search Console, « Explorée, actuellement non indexée » (18)** — vérifier si ce sont des articles (lecture interrompue, Chrome ne répondait plus). (« Indexée malgré robots.txt » = 1 page de paiement Uscreen `app.leclubpilates.com/checkout/new?o=198380`, rien à faire.)
- [x] **Mise en ligne du 15/11/2026** (commit 56a1828) : date de référence pour le KPI 3 (`blog-milieu`) et Search Console.

## 🔴 P0 — Blocage SEO critique (audit 17/06/2026)

- [x] **`robots.txt` bloque `/_next/`** — Retiré `Disallow: /_next/` dans `app/robots.ts`.
- [x] **Articles doublons — 301** — 6 doublons supprimés dans Sanity (4 détectés par l'audit + 2 trouvés en plus : `pilates-en-ligne-pratiquer-a-la-maison`, `3-erreurs-courantes-en-pilates-debutant-et-solutions`), 301 ajoutées dans `next.config.js`.
- [x] **Pipeline IA — prévention doublons** — `pickTopic()` excluait pas les sujets déjà publiés (sélection 100% aléatoire) → cause racine des doublons. Ajout d'un champ `topicSubject` sur le schéma Sanity (`sanity-studio/schemas/post.ts`), rétro-rempli sur les 15 articles restants, et `scripts/generate-article.ts` exclut maintenant les sujets déjà utilisés avant de générer un nouvel article. ⚠️ Rouvert le 14/11/2026 : la liste épuisée était réutilisée, voir « Plan essais gratuits #1 ».
- [x] **Pipeline IA — équilibrage des catégories** — Répartition publiée déséquilibrée (8 Pilates / 5 Conseils / 2 Bien-être / 0 Nutrition). `pickTopic()` priorise désormais la catégorie la moins représentée parmi les articles déjà publiés avant de tirer un sujet au hasard dans cette catégorie.
- [x] **Pages `noindex` hors sitemap** — Retiré `/legal/*` de `app/sitemap.ts`
- [x] **Homepage mobile — poids vidéo hero** — Vidéo hero recompressée (`public/videos/video-hero-pilates.mp4` 3,93 MB → 1,59 MB, `.webm` 1,75 MB → 1,56 MB, qualité visuelle inchangée). Ajout d'un poster (`public/images/hero-poster.jpg`, aplat couleur marque) affiché pendant le chargement. `HeroSection.tsx` passé en composant client avec appel explicite à `.play()` au montage.
  - ⚠️ Note : un bug d'autoplay vidéo pré-existant sur certains iPhone (la vidéo ne se lance qu'après avoir navigué puis être revenu sur la page) a été repéré pendant les tests — confirmé antérieur à ces changements, pas encore résolu, à investiguer séparément (probablement lié au mode Économie d'énergie iOS qui bloque l'autoplay sans interaction).
  - [x] 15/11/2026 : encodage vérifié sain (H.264 bt709, faststart). `HeroSection.tsx` relance la vidéo au premier toucher/clic/défilement si iOS refuse la lecture, et au retour sur la page (`pageshow`, `visibilitychange`). En mode Économie d'énergie, iOS ne permet aucune lecture avant un geste : l'aplat de couleur (poster) reste affiché jusque-là. [ ] À tester sur iPhone (mode Économie d'énergie activé).

---

## 🔴 Priorité haute (impact SEO direct)

- [x] **Section "Derniers articles"** — Ajouter sur la homepage → booste l'autorité du blog (maillage interne + signal fraîcheur pour Google)
- [ ] **Avis Google dynamiques** (priorité basse) — Google Places API (clé + Place ID, facturation Google Cloud à activer) + mise à jour quotidienne du nombre d'avis. ⚠️ N'affiche PAS les étoiles dans Google : depuis 2019 Google ignore les avis qu'une entreprise publie sur elle-même. Seul gain : chiffre toujours exact (équivalent : mise à jour manuelle 2 fois par an).

---

## 🟠 Priorité moyenne

- [x] **Page Livre** — Présentation du livre d'Alice, résumé, extrait, redirections vers plateformes de vente (Amazon, Fnac, etc.)
- [x] **Titles blog trop longs** — Suffixe `— Le Club Pilates` retiré du title des articles (`app/blog/[slug]/page.tsx`), le template du layout (`%s | Le Club Pilates`) s'en charge seul. Double marque supprimée.
- [x] **Meta descriptions trop longues** — 9 pages corrigées à 130–155 chars : débutant, dos, prénatal, wall, full-body, reformer, abdos, retraite, livre.
- [x] **Maillage interne articles** — Bloc "Nos programmes" ajouté en bas de chaque article blog (6 liens vers les pages cours). Lien `/livre` ajouté sur `/cours-de-pilates/wall`.
- [ ] **Tests mobiles** — Vérifier le rendu sur vrais appareils iOS + Android (Core Web Vitals)
- [x] **Page `/essai` (lien en bio Instagram)** — Page sans menu ni footer, noindex, envoi direct au paiement Uscreen, événement GA `commencer_essai` (`formule`, `position`).
- [x] **`/essai` — liens et médias** — Lien annuel Uscreen, vidéo allégée sans son (`public/videos/essai-alice.mp4`, 960 Ko), poster, photo d'Alice en haut, prix « puis 229 €/an » sous le bouton.
- [x] **`/essai` — bannière vidéo** — Haut de page sombre avec la vidéo de présentation floutée en fond (`essai-alice-fond.mp4`, 155 Ko), vidéo nette avec bouton « Écouter Alice » (`essai-alice-presentation.mp4`, 720×1280, 1,7 Mo). Bouton flottant masqué sur ordinateur.
- [x] **Liens courts Instagram** — `/ig`, `/story`, `/dm` → `/essai?utm_source=ig&utm_medium=social&utm_content=…` (redirections temporaires, `next.config.js`).
- [x] **Suivi des autres boutons d'essai** — Restent vers Uscreen `/join` (pas de page « 3 formules » sur le site). Chaque bouton envoie `commencer_essai` avec `formule: 'join'` et une `position` unique, égale à son `utm_content` (`components/ui/EssaiLink.tsx`, prop `essai` de `CTAButton`, `SignupCTA`). Liens « Abonnements » (menu, footer) volontairement non suivis.
- [ ] **`/essai` — tester le paiement depuis l'appli Instagram** (iPhone + Android) avant de mettre le lien en bio.
- [ ] **`/essai` — séance offerte** — `LIEN_SEANCE_OFFERTE` + emails de suite (Brevo).
- [x] **Tarifs homepage** — Alignés sur Uscreen (Annuel, Trimestriel, Mensuel), Annuel en premier, chaque bouton vers le paiement de sa formule (`lib/offres.ts`), événement `commencer_essai` avec `position: 'tarifs'`.

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
