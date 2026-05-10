# Audit SEO Complet — Le Club Pilates
*Mai 2026 — Analyse approfondie*

---

## TODO SEO

### 🟠 Moyen terme — 1 à 3 mois

- [ ] **Homepage** — Ajouter une section "Derniers articles" → booste l'autorité du blog
- [ ] **JSON-LD** — Ajouter `ItemList` sur `/blog` quand ≥ 5 articles publiés
- [ ] **Title `/about`** — Améliorer : *"Le Studio — Alice & la méthode Pilates · Le Club Pilates"*
- [ ] **Annuaires wellness** — Soumettre le site sur Doctissimo, Aufeminin, Femme Actuelle (gratuit, 30 min)

### 🟡 Long terme — 3 à 6 mois

- [ ] **Presse** — Interviews Alice dans presse féminine (Madame Figaro, Elle, Marie Claire) — backlink le plus puissant possible
- [ ] **Backlinks** — Partenariats influenceurs Pilates / wellness FR
- [ ] **Landing page** — Créer `/cours-de-pilates/stretching` (1 300 recherches/mois)
- [ ] **Suivi ranking** — Configurer Ahrefs ou Semrush pour mesurer les positions mensuellement

---

## Score global estimé

| Dimension | Score | Tendance |
|---|---|---|
| SEO Technique | 78/100 | ↑ (était ~50) |
| Contenu & sémantique | 65/100 | ↑ |
| Maillage interne | 70/100 | ↑ (ajout RelatedCourses) |
| Autorité de domaine | 15/100 | → (peu de backlinks) |
| Core Web Vitals | ~70/100 | À mesurer (Vercel) |
| **Global** | **~50/100** | ↑ (était 32) |

> L'autorité de domaine est le principal frein à la progression SEO. Le contenu et la technique sont bons — les backlinks et le blog feront la différence à 6 mois.

---

## 1. Recherche de mots-clés

### 1.1 Mots-clés principaux — Cœur de cible

| Mot-clé | Volume FR/mois* | Difficulté | Position actuelle | Page ciblée |
|---|---|---|---|---|
| pilates en ligne | 8 100 | Haute | Non classé | Homepage |
| cours de pilates en ligne | 4 400 | Haute | Non classé | /cours-de-pilates |
| studio pilates en ligne | 1 300 | Moyenne | Non classé | Homepage |
| abonnement pilates en ligne | 720 | Moyenne | Non classé | Homepage |
| pilates à la maison | 2 900 | Haute | Non classé | Homepage |
| programme pilates en ligne | 1 600 | Moyenne | Non classé | /cours-de-pilates |

### 1.2 Mots-clés longue traîne — Landing pages

| Mot-clé | Volume FR/mois* | Difficulté | Page ciblée |
|---|---|---|---|
| pilates wall | 4 400 | Faible–Moyenne | /cours-de-pilates/wall |
| wall pilates débutant | 1 000 | Faible | /cours-de-pilates/wall |
| pilates mal de dos | 2 900 | Moyenne | /cours-de-pilates/dos |
| pilates lombaires | 880 | Faible | /cours-de-pilates/dos |
| pilates hernie discale | 590 | Faible | /cours-de-pilates/dos |
| pilates enceinte | 2 400 | Faible–Moyenne | /cours-de-pilates/prenatal |
| pilates prénatal | 1 300 | Faible | /cours-de-pilates/prenatal |
| pilates postnatal diastase | 390 | Faible | /cours-de-pilates/prenatal |
| pilates débutant | 880 | Moyenne | /cours-de-pilates/debutant |
| commencer pilates maison | 590 | Faible | /cours-de-pilates/debutant |
| pilates full body | 1 600 | Moyenne | /cours-de-pilates/full-body |
| pilates reformer sans machine | 480 | Faible | /cours-de-pilates/reformer |
| pilates reformer en ligne | 720 | Faible | /cours-de-pilates/reformer |

### 1.3 Mots-clés blog — Trafic informationnel (objectif 6–12 mois)

| Mot-clé | Volume FR/mois* | Difficulté | Intention |
|---|---|---|---|
| pilates vs yoga | 3 600 | Haute | Informationnelle |
| bienfaits du pilates | 2 400 | Moyenne | Informationnelle |
| comment maigrir avec le pilates | 1 900 | Moyenne | Transactionnelle |
| exercices pilates dos | 1 600 | Faible | Informationnelle |
| pilates résultats combien de temps | 1 300 | Faible | Informationnelle |
| pilates périnée | 1 000 | Faible | Informationnelle |
| pilates ménopause | 720 | Faible | Informationnelle |
| pilates running | 590 | Faible | Informationnelle |
| respiration pilates | 480 | Faible | Informationnelle |
| Joseph Pilates méthode | 390 | Faible | Informationnelle |

### 1.4 Mots-clés opportunités — Non couverts

| Mot-clé | Volume FR/mois* | Opportunité |
|---|---|---|
| pilates stretch | 1 300 | Créer landing /cours-de-pilates/stretching |
| pilates abdos | 2 200 | Créer landing /cours-de-pilates/abdos |
| pilates fessiers jambes | 1 600 | Créer landing /cours-de-pilates/bas-du-corps |
| retraite pilates france | 880 | Page /retraite déjà présente ✅ |
| retraite pilates ibiza | 480 | Page /retraite déjà présente ✅ |
| pilates app ios android | 720 | Non couvert — opportunité |

> *Volumes estimés d'après données marché FR Pilates. À valider avec Semrush/Ahrefs sur les vrais projets.

---

## 2. Audit Technique

### 2.1 Crawlabilité & indexation ✅

| Point | Statut | Détail |
|---|---|---|
| robots.txt | ✅ OK | Crawlers IA autorisés, API bloquée |
| Sitemap.xml | ✅ OK | 14 URLs, soumission GSC en attente |
| Canonical tags | ✅ OK | Présents sur toutes les pages |
| Redirections 301 | ✅ OK | /classes → /cours-de-pilates, /a-propos → /about |
| Pagination | N/A | Pas de pagination |
| Hreflang | ❌ Absent | Site FR uniquement, acceptable |

### 2.2 Performance

| Point | Statut | Détail |
|---|---|---|
| Next.js SSG | ✅ | Pages statiques — excellent pour le SEO |
| Image formats | ✅ | AVIF + WebP configurés |
| Font loading | ✅ | `next/font` avec `display: swap` |
| LCP | ⚠️ À mesurer | Objectif < 2.5s — vérifier Vercel Speed Insights |
| CLS | ⚠️ À mesurer | Fonts swap peut causer du CLS |
| FID/INP | ⚠️ À mesurer | Client components limités |
| Vercel Speed Insights | ✅ | Installé et actif |

### 2.3 Sécurité & headers HTTP

| Header | Statut |
|---|---|
| HSTS | ✅ max-age=31536000 |
| X-Frame-Options | ✅ DENY |
| X-Content-Type-Options | ✅ nosniff |
| X-XSS-Protection | ✅ |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| Permissions-Policy | ✅ |
| HTTPS | ✅ Vercel |

### 2.4 Mobile

| Point | Statut |
|---|---|
| Responsive design | ✅ Tailwind CSS |
| Viewport meta | ✅ |
| Touch targets | ✅ Boutons ≥ 44px |
| Menu mobile | ✅ Drawer avec focus trap |

### 2.5 Problèmes techniques restants

| Problème | Impact | Fix |
|---|---|---|
| GSC non vérifié (DNS) | 🔴 Bloquant — pas de données de ranking | Accès DNS requis |
| robots.txt Uscreen non mis à jour | 🔴 Cannibalisation possible | Accès Uscreen requis |
| `?trk=` non déclaré dans GSC | 🟠 Duplication homepage | GSC requis |

---

## 3. Audit On-Page

### 3.1 Titres & méta-descriptions

| Page | Title (actuel) | Chars | Statut |
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
| /about | Le Studio | 10 | ⚠️ Trop court, peu descriptif |
| /profs | Professeurs de Pilates certifiés | 32 | ✅ |
| /retraite | Retraite Pilates à Ibiza — 5 jours bien-être · Le Club Pilates | 61 | ✅ |

**Action :** améliorer le title de `/about` → ex. *"Le Studio — Alice & la méthode Pilates · Le Club Pilates"*

### 3.2 Structure des headings

| Page | H1 | H2 présents | Problème |
|---|---|---|---|
| Homepage | ✅ | ✅ | — |
| /cours-de-pilates | ✅ | ✅ | — |
| Toutes landing cours | ✅ | ✅ | — |
| /blog | ✅ | ✅ (titres articles) | — |
| /about | ✅ | ✅ | — |
| /profs | ✅ | ✅ | — |

### 3.3 Images

| Point | Statut |
|---|---|
| `next/image` utilisé | ✅ Partout |
| `alt` sur toutes les images | ✅ |
| `sizes` appropriés | ✅ |
| Formats AVIF/WebP | ✅ |
| Images OG spécifiques par page | ✅ (corrigé le 8 mai) |

---

## 4. Schémas JSON-LD

| Page | Schema | Statut |
|---|---|---|
| Homepage | WebSite + Organization + HealthClub + AggregateRating + FAQPage | ✅ |
| /cours-de-pilates | ItemList | ✅ |
| /cours-de-pilates/* (x6) | FAQPage + BreadcrumbList | ✅ |
| /blog | — | ⚠️ Manque ItemList articles |
| /blog/[slug] | BlogPosting + BreadcrumbList | ✅ |
| /about | Person | ✅ |
| /profs | Person (équipe) | ✅ |
| /retraite | Event | ✅ |
| /contact | ContactPage | ✅ |

**Action :** ajouter `ItemList` sur `/blog` quand ≥ 5 articles publiés.

---

## 5. Maillage interne

### 5.1 État actuel

| Source | Destination | Type |
|---|---|---|
| Homepage `ClassesPreview` | /cours-de-pilates/full-body, /prenatal, /wall, /reformer | Lien image |
| Homepage `OnlinePilatesSection` | /cours-de-pilates/debutant, /prenatal, /wall | Lien texte |
| /cours-de-pilates | 4 spécialités (débutant, dos, prénatal, wall) | Cartes |
| Toutes landing /cours-de-pilates/* | 4 autres landing pages (RelatedCourses) | Liens |
| Articles blog | Landing pages cours | Liens contextuels |
| Header | Toutes pages principales | Navigation |

### 5.2 Opportunités manquantes

| Opportunité | Impact |
|---|---|
| Footer avec liens vers toutes les landing pages | Moyen |
| Homepage → /blog (section "Derniers articles") | Fort — booste autorité blog |
| Landing pages → articles blog liés | Fort — maillage thématique |
| /retraite → /cours-de-pilates (cross-sell) | Faible |

---

## 6. Analyse Concurrentielle

### 6.1 Concurrents directs (pilates en ligne FR)

| Concurrent | Forces SEO | Faiblesses | Opportunité pour LCP |
|---|---|---|---|
| **Les Mills** (international) | Autorité de domaine très haute, brand | Pas spécialisé Pilates, prix élevé | Niche Pilates pur |
| **Manon Fleur** | Forte notoriété Instagram, bon blog | Peu de landing pages SEO | Meilleure structure technique |
| **Pilates Anytime** (US/FR) | Backlinks forts, contenu ancien | Interface datée, peu adapté mobile FR | UX + contenu FR de qualité |
| **Move Your Ass** | Bon SEO technique, variété | Pilates = petite partie du catalogue | Spécialisation Pilates |
| **Maia Active** | Bonne UX, blog actif | Yoga-dominant, Pilates secondaire | Pilates-first positioning |

### 6.2 Positionnement actuel Le Club Pilates

**Avantages concurrentiels :**
- Spécialiste Pilates pur (vs généraliste fitness)
- Alice = fondatrice visible, expertise authentique
- Landing pages ultra-ciblées par intention (dos, wall, prénatal)
- Blog IA → volume de contenu scalable
- Prix probablement compétitif

**Désavantages :**
- Domaine jeune → faible autorité
- Peu ou pas de backlinks
- Pas encore de présence en SERP

---

## 7. Backlinks & Autorité

### 7.1 État actuel estimé

| Métrique | Estimation |
|---|---|
| Domain Rating (Ahrefs) | < 10 (domaine récent) |
| Referring domains | < 10 |
| Backlinks totaux | < 20 |

> À vérifier avec Ahrefs ou Semrush après GSC activé.

### 7.2 Stratégie backlinks — Priorités

| Action | Effort | Impact | Délai |
|---|---|---|---|
| **Inscription annuaires** : Doctissimo, Aufeminin, Femme Actuelle | Faible | Moyen | Immédiat |
| **Partenariats influenceurs** Pilates/wellness FR | Moyen | Fort | 1–3 mois |
| **Interviews / tribunes** Alice dans presse féminine (Madame Figaro, Elle) | Haut | Très fort | 3–6 mois |
| **Guest posts** blogs fitness/santé FR | Moyen | Fort | 1–3 mois |
| **HARO France** (répondre aux journalistes) | Faible | Variable | En continu |
| **Communiqués de presse** retraite Ibiza | Faible | Moyen | Avant sept. 2026 |
| **Forums** (Doctissimo, Aufeminin) — mentions naturelles | Faible | Faible–Moyen | En continu |

---

## 8. Contenu — Plan éditorial blog

### 8.1 Priorité haute (fort volume, faible difficulté)

| Sujet | Mot-clé cible | Volume | Type |
|---|---|---|---|
| Pilates pour le mal de dos : guide complet | pilates mal de dos | 2 900 | Guide long |
| Wall Pilates : qu'est-ce que c'est et comment commencer | pilates wall débutant | 1 000 | Guide |
| Pilates enceinte : les exercices autorisés trimestre par trimestre | pilates enceinte | 2 400 | Guide long |
| Bienfaits du Pilates : ce que dit la science | bienfaits pilates | 2 400 | Informatif |
| Pilates vs Yoga : comment choisir | pilates vs yoga | 3 600 | Comparatif |

### 8.2 Priorité moyenne (trafic qualifié, conversions)

| Sujet | Mot-clé cible | Volume | Type |
|---|---|---|---|
| Comment maigrir avec le Pilates (vraiment) | maigrir pilates | 1 900 | Informatif |
| Pilates à 40 ans : par où commencer | pilates 40 ans | 720 | Ciblé |
| Pilates et ménopause | pilates ménopause | 720 | Ciblé |
| Résultats Pilates : combien de temps | résultats pilates | 1 300 | FAQ |
| Programme Pilates 30 jours débutant | programme pilates 30 jours | 880 | Programme |

### 8.3 Landing pages manquantes (fort potentiel)

| Page à créer | Mot-clé | Volume | Priorité |
|---|---|---|---|
| /cours-de-pilates/stretching | pilates stretching | 1 300 | 🟠 Moyenne |
| /cours-de-pilates/abdos | pilates abdos | 2 200 | 🟠 Moyenne |
| /cours-de-pilates/express | pilates express | 1 000 | 🟡 Faible |

---

## 9. Plan d'action prioritaire

### Court terme (0–30 jours)

| # | Action | Responsable | Impact |
|---|---|---|---|
| 1 | Vérifier domaine dans GSC (accès DNS) | Toi | 🔴 Critique |
| 2 | robots.txt Uscreen (accès back-office) | Toi | 🔴 Critique |
| 3 | Soumettre sitemap dans GSC | Toi (après DNS) | 🟠 Fort |
| 4 | Demander indexation des 6 landing pages | Toi (après GSC) | 🟠 Fort |
| 5 | Push + déploiement Vercel | Samuel | 🟠 Fort |
| 6 | Améliorer title `/about` | Samuel | 🟡 Moyen |

### Moyen terme (1–3 mois)

| # | Action | Impact |
|---|---|---|
| 7 | 12+ articles blog publiés (pipeline IA en place) | 🔴 Très fort |
| 8 | Inscription annuaires wellness FR (Doctissimo, etc.) | 🟠 Moyen |
| 9 | Section "Derniers articles" sur la homepage | 🟠 Moyen |
| 10 | Créer landing /cours-de-pilates/abdos | 🟠 Moyen |
| 11 | Segment GA4 trafic IA configuré | 🟡 Moyen |

### Long terme (3–6 mois)

| # | Action | Impact |
|---|---|---|
| 12 | Partenariats backlinks (influenceurs, presse) | 🔴 Très fort |
| 13 | Interviews Alice dans presse féminine | 🔴 Très fort |
| 14 | Ahrefs / Semrush — suivi ranking mensuel | 🟠 Mesure |
| 15 | Créer landing /cours-de-pilates/stretching | 🟠 Moyen |

---

## 10. KPIs à suivre

| KPI | Outil | Fréquence | Objectif 6 mois |
|---|---|---|---|
| Impressions Google | GSC | Mensuel | +500% |
| Clics organiques | GSC | Mensuel | +300% |
| Position moyenne | GSC | Mensuel | < 30 sur mots-clés cibles |
| Trafic organique | GA4 | Mensuel | 500+ sessions/mois |
| Taux de conversion blog → essai | GA4 | Mensuel | > 2% |
| Core Web Vitals LCP | Vercel / PageSpeed | Mensuel | < 2.5s |
| Referring domains | Ahrefs/Semrush | Trimestriel | +20 domaines |
| Articles blog publiés | Sanity | Mensuel | 12/mois |

---

*Audit réalisé le 8 mai 2026 — À mettre à jour trimestriellement ou après déploiement majeur.*
