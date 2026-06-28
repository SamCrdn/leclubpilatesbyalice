# Audit SEO Complet — Le Club Pilates
*Mis à jour : 17 juin 2026 — Nouvel audit technique externe (Screaming Frog + crawl live + Lighthouse mobile)*

---

## TODO SEO

### 🔴 Priorité absolue — Audit 17 juin 2026 (score technique : 74/100)

- [x] **P0 — `robots.txt` bloque `/_next/`** — Retiré `Disallow: /_next/` dans `app/robots.ts`.
- [x] **P1 — Articles doublons à fusionner** — Doublons supprimés dans Sanity + 301 ajoutées dans `next.config.js` :
  - `pilates-bas-du-corps-jambes-fesses-sans-impact` → 301 vers `…-fessiers-sans-impact` ✅
  - `pilates-et-perte-de-poids` → 301 vers `pilates-perte-de-poids` ✅
  - `pilates-intense-methode-douce-defi` → 301 vers `…-vrai-defi` ✅
  - `erreurs-courantes-debutantes-pilates-solutions` → 301 vers `erreurs-courantes-debutantes-pilates` ✅
- [x] **P1 — Pages `noindex` dans le sitemap** — Retiré `/legal/mentions-legales`, `/legal/confidentialite`, `/legal/cgv` du sitemap (`app/sitemap.ts`)
- [x] **P1 — Homepage mobile lente** — Vidéo hero recompressée (MP4 3,93→1,59 MB, WebM 1,75→1,56 MB) + poster pendant le chargement. Reste à remesurer le score Lighthouse mobile pour confirmer l'impact. Bug d'autoplay iOS pré-existant repéré en parallèle (voir `TODO.md`), non résolu, hors périmètre de cette tâche.
- [ ] **P2 — Titles trop longs** — 28/37 titles > 65 chars, double marque `— Le Club Pilates | Le Club Pilates` sur les articles blog. Supprimer le suffixe en double, viser 50–60 chars.
- [ ] **P2 — Meta descriptions trop longues** — 11 metas > 160 chars sur pages cours + retraite + livre. Réécrire à 130–155 chars.
- [ ] **P2 — Maillage articles faible** — La plupart des articles n'ont que 2 inlinks entrants. Ajouter liens contextuels articles ↔ pages cours. `/livre` aussi : 2 inlinks seulement.
- [ ] **P2 — Images 3840px** — Certaines images servies à `w=3840` inutilement. Vérifier les props `sizes` sur `next/image`.

### 🟠 Moyen terme — 1 à 3 mois

- [x] **Homepage** — Section "Derniers articles" ajoutée → 3 articles Sanity + ISR 1h
- [x] **JSON-LD** — `ItemList` ajouté sur `/blog` — s'adapte automatiquement au nombre d'articles
- [x] **Title `/about`** — Mis à jour : *"Le Studio — Alice & la méthode Pilates"*
- [ ] **Annuaires wellness** — Soumettre le site sur Doctissimo, Aufeminin, Femme Actuelle (gratuit, 30 min)
- [x] **TL;DR blog** — Intégré dans le pipeline IA (planner + rédacteur) + affiché visuellement sur la page article
- [ ] **GA4 segment trafic IA** — Créer dans GA4 → Explore → Segments → Sessions → Référent contient : `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`, `copilot.microsoft.com`
- [x] **PageSpeed Insights** — Audit 06/06/2026 : 96 Performance, 100 SEO, 100 Bonnes pratiques, 90 Accessibilité (FCP 1,1s / TBT 20ms / CLS 0,009). Supprimé : Fontshare render-blocking + Gilroy.
- [x] **Preconnect Fontshare résiduel** — Retiré du `<head>` dans `layout.tsx`
- [ ] **LCP homepage mobile** — Audit 17/06/2026 Lighthouse : **48/100**, LCP 4,6s, TBT 3990ms (régressé vs juin — vidéos hero non optimisées mobile)
- [ ] **Accessibilité 90 → 95** — Contraste insuffisant, structure `<dl>` FAQ, ARIA behold-widget

### 🟡 Long terme — 3 à 6 mois

- [ ] **Presse** — Interviews Alice dans presse féminine (Madame Figaro, Elle, Marie Claire) — backlink le plus puissant possible
- [ ] **Backlinks** — Partenariats naturels kiné/maternité (Alice a formation Polestar → crédibilité médicale)
- [ ] **Communiqué de presse** — Retraite Ibiza septembre 2026 → soumettre à presse bien-être avant juillet
- [ ] **HARO France** — Répondre aux journalistes en recherche d'experts Pilates (en continu)
- [ ] **Landing page** — Créer `/cours-de-pilates/stretching` (1 300 recherches/mois)
- [ ] **Suivi ranking** — Configurer Ahrefs ou Semrush pour mesurer les positions mensuellement

---

## Score global

| Dimension | Score avril 2026 | Score mai 2026 | Score juin 2026 | Tendance |
|---|---|---|---|---|
| SEO Technique | 42/100 | **78/100** | **74/100** | ↓ (robots.txt + doublons) |
| Contenu & sémantique | 28/100 | **65/100** | **65/100** | → |
| GEO | 25/100 | **45/100** | **45/100** | → |
| Netlinking | 45/100 | **45/100** | **45/100** | → |
| **Global** | **32/100** | **~55/100** | **~57/100** | → |

> **Audit externe 17/06/2026 (Screaming Frog + crawl live + Lighthouse mobile)** : score technique 74/100. Régression vs mai sur le technique à cause des doublons blog détectés et du `robots.txt` qui bloque `/_next/`. Performance homepage mobile : 48/100 Lighthouse (LCP 4,6s, vidéos 3,65 MB).

> **Trafic organique réel (SEMrush avril 2026) : 706 visites/mois** — majorité Local Pack + requêtes marque. Trafic organique pur encore très faible. Objectif : 2 000+/mois à 6 mois.

---

## 1. Positions réelles (SEMrush — avril 2026)

### 1.1 Quick wins — Positions 6 à 15 (prêts à passer top 3)

| Mot-clé | Volume | Position | Écart | Action |
|---|---|---|---|---|
| **cours de pilates en ligne** | 1 000 | **15** | −12 | Enrichir homepage H2 dédié ✅ fait |
| pilates en ligne | 590 | **6** | −3 | Optimiser title + meta ✅ fait |
| cours de pilate en ligne | 590 | **7** | −4 | Couvert par l'optimisation principale |
| cours pilates en ligne | 480 | **8** | −5 | Enrichir le contenu ✅ fait |
| pilate en ligne | 260 | **8** | −5 | Mots-clés LSI dans le contenu |

> Estimation : passer "cours de pilates en ligne" de pos 15 → pos 5 = **+80 à +120 visites/mois** sur ce seul mot-clé.

### 1.2 Potentiel inexploité — Gros volumes (pos 20+)

| Mot-clé | Volume | Position actuelle | Potentiel |
|---|---|---|---|
| cours de pilates | 6 600 | 28 | 🔴 Énorme — nécessite blog + maillage |
| cours de pilate | 4 400 | 45 | 🔴 Énorme |
| cours pilates | 3 600 | 21 | 🔴 Très fort |
| pilates debutant | 880 | 39 (APP!) | 🔴 Landing page ✅ faite |
| pilates doux | — | 17 (APP!) | 🟠 Récupérer via blog |
| pilates flow | 480 | 29-57 (APP!) | 🟠 Blog + landing |
| magic circle | 1 000 | 12-31 (APP!) | 🟠 Article blog à créer |

### 1.3 Mots-clés marque (Local Pack — déjà top)

| Mot-clé | Position | Type |
|---|---|---|
| club pilates | 1 | Local Pack ✅ |
| le club pilates | 1 | Local Pack ✅ |
| cours de pilates débutant | 1 | Local Pack ✅ |

### 1.4 Mots-clés cibles — Landing pages

| Mot-clé | Volume FR/mois | Difficulté | Page ciblée | Statut |
|---|---|---|---|---|
| pilates wall | 4 400 | Faible–Moyenne | /cours-de-pilates/wall | ✅ Fait |
| pilates mal de dos | 2 900 | Moyenne | /cours-de-pilates/dos | ✅ Fait |
| pilates enceinte | 2 400 | Faible–Moyenne | /cours-de-pilates/prenatal | ✅ Fait |
| pilates abdos | 2 200 | Faible | /cours-de-pilates/abdos | ✅ Fait |
| pilates full body | 1 600 | Moyenne | /cours-de-pilates/full-body | ✅ Fait |
| pilates débutant | 880 | Moyenne | /cours-de-pilates/debutant | ✅ Fait |
| pilates reformer en ligne | 720 | Faible | /cours-de-pilates/reformer | ✅ Fait |
| pilates stretching | 1 300 | Faible | /cours-de-pilates/stretching | ⏳ À créer |

### 1.5 Mots-clés blog — Trafic informationnel (objectif 6–12 mois)

| Mot-clé | Volume FR/mois | Difficulté | Intention |
|---|---|---|---|
| pilates vs yoga | 3 600 | Haute | Informationnelle |
| bienfaits du pilates | 2 400 | Moyenne | Informationnelle |
| comment maigrir avec le pilates | 1 900 | Moyenne | Transactionnelle |
| exercices pilates dos | 1 600 | Faible | Informationnelle |
| magic circle pilates | 1 000 | Faible | Informationnelle |
| pilates résultats combien de temps | 1 300 | Faible | Informationnelle |
| pilates ménopause | 720 | Faible | Informationnelle |
| respiration pilates | 480 | Faible | Informationnelle — récupère trafic app |

---

## 2. Audit Technique

### 2.1 Crawlabilité & indexation

| Point | Statut | Détail |
|---|---|---|
| robots.txt site principal | ❌ CRITIQUE | `Disallow: /_next/` bloque CSS/JS/images Next.js pour Googlebot — à corriger en priorité absolue |
| robots.txt app Uscreen | ✅ Partiel | /programs/ /categories/ /pages/ /join bloqués via GSC (renouveler dans 6 mois) |
| Sitemap.xml | ⚠️ À corriger | 38 URLs dont 3 pages `noindex` (`/legal/*`) — incohérence à corriger |
| Canonical tags | ✅ OK | Présents sur toutes les pages |
| Redirections 301 | ✅ OK | /classes → /cours-de-pilates, /a-propos → /about, /les-cours → / |
| Pages légales | ✅ OK | noindex, follow |
| Blog | ✅ OK | index, follow (contenu publié) |
| Hreflang | N/A | Site FR uniquement, acceptable |

### 2.2 Performance

| Point | Statut | Détail |
|---|---|---|
| Next.js SSG | ✅ | Pages statiques — excellent pour le SEO |
| Image formats | ✅ | AVIF + WebP configurés |
| Font loading | ✅ | `next/font` avec `display: swap` |
| LCP homepage mobile | ❌ 4,6s | Lighthouse mobile 17/06/2026 : 48/100 perf, TBT 3990ms, 4MB total (3,65MB vidéos) — vidéos hero à optimiser |
| CLS | ✅ 0,009 | Excellent |
| Vercel Speed Insights | ✅ | Installé et actif |

### 2.3 Sécurité & headers HTTP

| Header | Statut |
|---|---|
| HSTS | ✅ max-age=31536000 |
| X-Frame-Options | ✅ DENY |
| X-Content-Type-Options | ✅ nosniff |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| HTTPS | ✅ Vercel |

### 2.4 Cannibalisation

**Résolue (mai 2026) :**
- App vs site principal : app/programs/ et app/categories/ bloqués via GSC
- Vieilles URLs Webflow `/les-cours`, `/a-propos` : re-indexation GSC demandée
- Paramètre `?trk=` : géré automatiquement par Google

**Active — à traiter (audit 17/06/2026) :**

| Groupe | URLs en doublon | Statut |
|---|---|---|
| Bas du corps | `pilates-bas-du-corps-jambes-fesses-sans-impact` vs `…-fessiers-sans-impact` | ❌ Mêmes title + H1 |
| Perte de poids | `pilates-et-perte-de-poids` vs `pilates-perte-de-poids` | ❌ Mêmes title + H1 |
| Pilates intense | `pilates-intense-methode-douce-defi` vs `…-vrai-defi` | ❌ Mêmes title + H1 |
| Erreurs débutant | 3 URLs quasi-identiques sur la même intention | ⚠️ Quasi-doublons |

Action : choisir 1 URL cible par groupe, 301 les variantes dans `next.config.js`.

---

## 3. Audit On-Page

### 3.1 Titres & méta-descriptions

| Page | Title | Chars | Statut |
|---|---|---|---|
| Homepage | Le Club Pilates — Studio de Pilates en ligne | 44 | ✅ |
| /cours-de-pilates | Cours de Pilates en ligne — Tous niveaux | 40 | ✅ |
| /cours-de-pilates/wall | Pilates Wall — Cours de Pilates au mur en ligne | 47 | ✅ |
| /cours-de-pilates/dos | Pilates pour le dos — Soulager et renforcer le dos | 50 | ✅ |
| /cours-de-pilates/debutant | Pilates débutant — Commencer le Pilates en ligne | 48 | ✅ |
| /cours-de-pilates/prenatal | Pilates prénatal & postnatal — Enceinte ou après accouchement | 60 | ✅ |
| /cours-de-pilates/full-body | Pilates Full Body — Cours corps entier en ligne | 47 | ✅ |
| /cours-de-pilates/reformer | Pilates Reformer en ligne — Sans machine, depuis chez vous | 57 | ✅ |
| /blog | Blog Pilates — Conseils & bien-être | 36 | ✅ |
| /about | Le Studio | 10 | ⚠️ Trop court — à améliorer |
| /profs | Professeurs de Pilates certifiés | 32 | ✅ |
| /retraite | Retraite Pilates à Ibiza — 5 jours bien-être · Le Club Pilates | 61 | ✅ |

---

## 4. Schémas JSON-LD

| Page | Schema | Statut |
|---|---|---|
| Homepage | WebSite + Organization + HealthClub + AggregateRating + FAQPage | ✅ |
| /cours-de-pilates | ItemList | ✅ |
| /cours-de-pilates/* (x7) | FAQPage + BreadcrumbList | ✅ |
| /blog | — | ⚠️ ItemList à ajouter quand ≥ 5 articles |
| /blog/[slug] | BlogPosting + BreadcrumbList | ✅ |
| /about | Person (Alice + certifications Polestar, DE) | ✅ |
| /profs | Person (équipe complète) | ✅ |
| /retraite | Event + performer (Alice) | ✅ |
| /contact | ContactPage | ✅ |

---

## 5. Maillage interne

### État actuel

| Source | Destination | Type |
|---|---|---|
| Homepage `ClassesPreview` | /cours-de-pilates/full-body, /prenatal, /wall, /reformer | Lien image |
| Homepage `OnlinePilatesSection` | /cours-de-pilates/debutant, /prenatal, /wall | Lien texte |
| /cours-de-pilates | 6 landing pages | Cartes |
| Toutes landing /cours-de-pilates/* | 4 autres landing pages (RelatedCourses) | Liens |
| Articles blog | Landing pages cours (via topics.ts) | Liens contextuels |
| Header | Toutes pages principales | Navigation |

### Opportunités restantes

| Opportunité | Impact |
|---|---|
| Homepage → /blog (section "Derniers articles") | Fort |
| Footer avec liens vers toutes les landing pages | Moyen |
| /retraite → /cours-de-pilates (cross-sell) | Faible |

---

## 6. Module GEO (Générateur IA)

*Score GEO : 25/100 → ~45/100 (mai 2026)*

### Ce qui est fait ✅
- Crawlers IA autorisés dans robots.ts (GPTBot, Anthropic-AI, PerplexityBot, CCBot)
- Schema FAQPage sur homepage + toutes les landing pages
- Schema Organization, Person, HealthClub
- E-E-A-T : formation Polestar, diplôme d'État, certifications sur /about et /profs

### Ce qui reste à faire
- [ ] **TL;DR** en haut de chaque article de blog (2-3 phrases extractibles par les IA)
- [ ] **FAQ** en fin d'article (5-8 questions + réponses < 60 mots) + schema FAQPage
- [ ] **Stats propriétaires** dans les articles ("nos 1 000 membres rapportent...")
- [ ] **Suivi mensuel** : tester 10 prompts sur ChatGPT + Perplexity + Google AIO
- [ ] **GA4 segment trafic IA** : chatgpt.com, perplexity.ai, claude.ai, gemini.google.com

### Format obligatoire pour chaque article de blog

```
H1 : [Question principale — mot-clé cible]
TL;DR : Réponse en 2-3 phrases (extractible par les IA)
H2 : Sous-question 1 → Réponse directe + liste
H2 : Sous-question 2...
FAQ : 5-8 questions + réponses < 60 mots chacune
Schema FAQPage JSON-LD obligatoire
CTA final : invitation douce ("Si tu veux aller plus loin...")
```

---

## 7. Analyse Concurrentielle

### Benchmark trafic organique réel (SEMrush — avril 2026)

| Concurrent | Mots-clés | Trafic/mois | Écart |
|---|---|---|---|
| **Le Club Pilates** | ~113 | **706** | — |
| clarisse-ernoux.com | 6 788 | **20 871** | ×30 |
| poses-studio.com | 5 877 | **25 848** | ×37 |
| reformation-pilates.com | 589 | **14 520** | ×21 |
| club-pilates.fr | 406 | **7 926** | ×11 |
| clublulu.paris | 137 | **4 511** | ×6 |
| pilatesocialclub.fr | 319 | **3 453** | ×5 |
| e-pilates.fr | 243 | **917** | ×1.3 |
| coachpilatesbyingrid.com | 112 | **278** | ~égal |

> **Modèle à étudier en priorité :** clarisse-ernoux.com (30× plus de trafic via stratégie blog intensive).

### Avantages concurrentiels Le Club Pilates

- Spécialiste Pilates pur (vs généraliste fitness)
- Alice = fondatrice visible, expertise authentique (Polestar, DE, 42k Instagram, 10 ans)
- ★ 5/5 avec 71 avis Google → rich snippet étoiles potentiel
- Landing pages ultra-ciblées par intention (7 spécialités)
- Blog IA scalable → pipeline GitHub Actions opérationnel
- Programme Mama 12 mois unique sur le marché FR

### Désavantages

- Domaine jeune → autorité faible (DR < 10)
- Peu de backlinks
- Trafic organique pur encore très faible (706/mois dont majorité marque)

---

## 8. Backlinks & Autorité

### État actuel estimé

| Métrique | Estimation |
|---|---|
| Domain Rating (Ahrefs) | < 10 |
| Referring domains | < 10 |
| Backlinks totaux | < 20 |

### Stratégie backlinks — Priorités

| Action | Effort | Impact | Délai |
|---|---|---|---|
| **Interviews Alice** presse féminine (Madame Figaro, Elle, Marie Claire) | Haut | Très fort | 3–6 mois |
| **Partenariats kiné/maternité** — Alice a formation Polestar → crédibilité médicale naturelle | Moyen | Fort | 1–3 mois |
| **Communiqué de presse** retraite Ibiza → presse bien-être avant juillet 2026 | Faible | Moyen | Immédiat |
| **HARO France** — répondre aux journalistes recherchant experts Pilates | Faible | Variable | En continu |
| **Annuaires wellness** : Doctissimo, Aufeminin, Femme Actuelle | Faible | Faible–Moyen | Immédiat |
| **Guest posts** blogs fitness/santé FR | Moyen | Fort | 1–3 mois |

---

## 9. Contenu — Plan éditorial blog

### Plan vidéo → blog (récupérer trafic app)

Chaque vidéo populaire de l'app devient un article blog donnant la valeur gratuite → renvoie vers l'app pour la pratique guidée.

| Titre article | Mot-clé ciblé | Volume | URL app à récupérer |
|---|---|---|---|
| Pilates pour le dos : exercices qui soulagent vraiment | pilates dos / mal de dos | 4 800/mois | app/programs/stretching-mobilite-du-dos |
| Pilates débutant : par où commencer ? | pilates débutant | 880/mois | Récupère trafic app pos 39 |
| Pilates prénatal : guide complet par trimestre | pilates enceinte / prénatal | 4 000/mois | — |
| Pilates Wall : qu'est-ce que c'est et comment pratiquer ? | pilates wall | 4 400/mois | — |
| Programme Pilates full body 30 min | pilates full body | 1 600/mois | — |
| Magic circle Pilates : comment l'utiliser ? | magic circle | 1 000/mois | Récupère trafic app pos 12 |
| Pilates et respiration : la technique de base | respiration pilates | 480/mois | app/programs/pilates-et-respiration pos 36 |
| Pilates abdos et fessiers : le guide | pilates abdos fessiers | 260/mois | app/programs/abdos-fessiers pos 21 |
| Pilates postnatal : reprendre après l'accouchement | pilates postnatal | 880/mois | — |
| Diastase abdominale : reprendre le Pilates | diastase pilates | 320/mois | — |

### Priorité haute (fort volume, faible difficulté)

| Sujet | Mot-clé cible | Volume | Type |
|---|---|---|---|
| Pilates vs Yoga : comment choisir | pilates vs yoga | 3 600 | Comparatif |
| Bienfaits du Pilates : ce que dit la science | bienfaits pilates | 2 400 | Informatif |
| Comment maigrir avec le Pilates (vraiment) | maigrir pilates | 1 900 | Informatif |
| Pilates résultats : combien de temps | résultats pilates | 1 300 | FAQ |

### Landing pages restantes

| Page | Mot-clé | Volume | Priorité |
|---|---|---|---|
| /cours-de-pilates/stretching | pilates stretching | 1 300 | 🟠 Moyenne |

---

## 10. KPIs à suivre

| KPI | Outil | Fréquence | Objectif 6 mois |
|---|---|---|---|
| Trafic organique total | GA4 | Mensuel | 2 000+ sessions/mois (vs 706 aujourd'hui) |
| Impressions Google | GSC | Mensuel | +500% |
| Clics organiques | GSC | Mensuel | +300% |
| Position "cours de pilates en ligne" | GSC | Mensuel | Top 5 (pos 15 aujourd'hui) |
| Trafic IA (ChatGPT, Perplexity...) | GA4 segment | Mensuel | Mesurer la croissance |
| Taux de conversion blog → essai | GA4 | Mensuel | > 2% |
| Core Web Vitals LCP | PageSpeed Insights | Mensuel | < 2.5s |
| Referring domains | Ahrefs/Semrush | Trimestriel | +20 domaines |
| Articles blog publiés | Sanity | Mensuel | 12/mois |

---

*Audit initial : 9 avril 2026 (données SEMrush + Screaming Frog)*
*Mis à jour : 17 juin 2026 — audit externe complet (Screaming Frog + crawl live + Lighthouse mobile)*
*À mettre à jour trimestriellement ou après déploiement majeur.*
