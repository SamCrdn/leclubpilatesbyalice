# Guide du site — Le Club Pilates
*Document à destination d'Alice — mai 2026*

---

## En résumé : comment tout fonctionne

Ton site est composé de **3 éléments distincts** qui travaillent ensemble :

```
GitHub (code)  →  Vercel (site en ligne)  ←→  Sanity (contenus)
                                    ↑
                             Anthropic / Claude
                           (génération articles IA)
```

- **GitHub** = le tiroir où le code est rangé et sauvegardé
- **Vercel** = le serveur qui fait tourner ton site sur Internet
- **Sanity** = ton tableau de bord pour modifier les textes et données
- **Anthropic** = l'IA qui rédige les articles de blog automatiquement

---

## 1. Vercel — Hébergement du site

### C'est quoi ?
Vercel est l'hébergeur de ton site. C'est lui qui le rend accessible sur **www.leclubpilates.com**. Dès qu'une modification de code est envoyée sur GitHub, Vercel reconstruit automatiquement le site en quelques minutes — sans intervention manuelle.

### Accès
| | |
|---|---|
| **URL** | https://vercel.com |
| **Login** | cardonsamuel78@gmail.com |
| **Mot de passe** | [à compléter] |

### Abonnement
| Plan | Prix | Inclus |
|---|---|---|
| **Hobby (gratuit)** | 0 €/mois | 1 site, déploiements illimités, HTTPS, domaine custom |
| Pro | 20 $/mois | Si besoin d'équipe ou analytics avancés |

> Le site tourne actuellement sur le **plan gratuit** — suffisant pour un site marketing.

---

## 2. Sanity — Gestion du contenu (CMS)

### C'est quoi ?
Sanity est ton **outil de gestion de contenu**. C'est là que tu vas pour modifier les textes, chiffres et informations visibles sur le site — sans toucher au code.

### Accès
| | |
|---|---|
| **URL Studio** | https://leclubpilates.sanity.studio |
| **Login** | alice.pilates.paris@gmail.com |
| **Mot de passe** | [à compléter] |
| **Gestion du projet** | https://sanity.io/manage/project/71c7c0vz |

### Ce que tu peux modifier

| Section | Ce que tu peux changer |
|---|---|
| **Paramètres du site** | Bannière promo (activer/désactiver, texte, lien) + chiffres clés (+350 cours, +1000 membres…) |
| **Retraite** | Dates, prix, participants max, liste inclus/non inclus |
| **Témoignages** | Ajouter, modifier ou supprimer des avis membres |
| **Professeurs** | Modifier les biographies, formations, photo, ajouter un prof |
| **Tarifs** | Mettre à jour les prix des abonnements |
| **Articles de blog** | Valider et publier les articles générés par l'IA |

### Comment modifier un contenu ?
1. Connecte-toi sur **leclubpilates.sanity.studio**
2. Clique sur la section dans le menu gauche
3. Modifie les champs
4. Clique sur **Publish** (bouton vert, en bas à droite)
5. Le site se met à jour dans l'heure

> ⚠️ Tant que tu ne cliques pas "Publish", les modifications restent en brouillon — invisibles sur le site.

### Abonnement
| Plan | Prix | Inclus |
|---|---|---|
| **Free (gratuit)** | 0 €/mois | 2 utilisateurs, 10 000 requêtes/jour, 5 Go de stockage |
| Growth | 99 $/mois | Si besoin de plus d'utilisateurs ou de volume |

> Actuellement sur le **plan gratuit** — largement suffisant.

---

## 3. GitHub — Sauvegarde du code

### C'est quoi ?
GitHub est comme **Google Drive pour le code**. Il stocke toutes les versions du code avec l'historique complet. Si quelque chose se casse, on peut toujours revenir à une version précédente.

### Accès
| | |
|---|---|
| **URL** | https://github.com/SamCrdn/leclubpilatesbyalice |
| **Login** | cardonsamuel78@gmail.com |
| **Mot de passe** | [à compléter] |

### Abonnement
| Plan | Prix |
|---|---|
| **Free (gratuit)** | 0 €/mois — dépôts publics illimités |

> Tu n'as jamais besoin d'aller sur GitHub. C'est l'espace du développeur.

---

## 4. Anthropic / Claude — Intelligence artificielle pour le blog

### C'est quoi ?
Anthropic est la société qui a créé **Claude**, l'IA utilisée pour rédiger automatiquement les articles de blog. 3 fois par semaine (lundi, mercredi, vendredi à 7h), Claude génère un article sur le Pilates et l'envoie en brouillon dans Sanity pour que tu le valides.

### Comment ça marche concrètement ?
1. Un déclencheur automatique (cron-job.org) appelle le site à 7h
2. Le site demande à Claude de planifier puis rédiger un article
3. L'article arrive en **brouillon** dans Sanity
4. **Tu lis, tu corriges si besoin, puis tu publies**

Tu as toujours le dernier mot — rien n'est publié sans ton accord.

### Accès
| | |
|---|---|
| **URL** | https://console.anthropic.com |
| **Login** | cardonsamuel78@gmail.com |
| **Mot de passe** | [à compléter] |

### Budget et coût
Anthropic fonctionne à la **consommation** (pas d'abonnement fixe) — tu pagues uniquement les articles générés.

| | Détail |
|---|---|
| **Coût par article** | ~0,10 à 0,20 $ (planification + rédaction) |
| **Fréquence** | 3 articles/semaine = ~12/mois |
| **Budget mensuel estimé** | **1 à 3 €/mois** |
| **Budget annuel estimé** | **15 à 30 €/an** |

> C'est le coût le plus faible de toute l'infrastructure — moins d'un café par mois.

> ⚠️ Si le solde Anthropic tombe à zéro, la génération d'articles s'arrête (le reste du site continue de fonctionner normalement). Penser à recharger le crédit de temps en temps sur console.anthropic.com.

---

## 5. cron-job.org — Déclencheur automatique du blog

### C'est quoi ?
cron-job.org est un service qui "appuie sur le bouton" automatiquement 3 fois par semaine pour déclencher la génération d'articles. C'est l'équivalent d'un réveil programmé.

### Accès
| | |
|---|---|
| **URL** | https://cron-job.org |
| **Login** | [à compléter] |
| **Mot de passe** | [à compléter] |

### Abonnement
| Plan | Prix |
|---|---|
| **Free (gratuit)** | 0 €/mois — largement suffisant |

---

## 6. Google Analytics — Statistiques du site

### C'est quoi ?
Google Analytics te permet de voir combien de personnes visitent ton site, d'où elles viennent, quelles pages elles consultent, etc.

### Accès
| | |
|---|---|
| **URL** | https://analytics.google.com |
| **Login** | [à compléter] |
| **Identifiant de mesure** | G-1EPTX63F02 |

### Abonnement
Gratuit.

---

## 7. Récapitulatif des coûts

| Service | Rôle | Coût mensuel |
|---|---|---|
| Vercel | Hébergement site | **Gratuit** |
| Sanity | CMS (gestion contenus) | **Gratuit** |
| GitHub | Sauvegarde code | **Gratuit** |
| cron-job.org | Déclencheur blog IA | **Gratuit** |
| Google Analytics | Statistiques | **Gratuit** |
| **Anthropic (Claude)** | Génération articles IA | **~1–3 €/mois** |
| **Nom de domaine** | leclubpilates.com | **~15 €/an** |
| | | |
| **TOTAL** | | **~2–4 €/mois** |

---

## 8. Schéma général

```
┌──────────────────────────────────────────────────────────────────┐
│                         TON SITE WEB                             │
│                    www.leclubpilates.com                         │
│                      (hébergé sur Vercel)                        │
└──────────┬──────────────────────────────────┬───────────────────┘
           │                                  │
┌──────────▼──────────┐            ┌──────────▼──────────┐
│       GITHUB        │            │       SANITY         │
│  Code du site       │            │  Textes & données    │
│  (développeurs)     │            │  (Alice modifie ici) │
└─────────────────────┘            └─────────────────────┘
                                              ▲
                                   ┌──────────┴──────────┐
                                   │  ANTHROPIC (Claude)  │
                                   │  Génère les articles │
                                   │  ~1-3 €/mois        │
                                   └─────────────────────┘
```

---

## 9. Que faire si...

| Situation | Action |
|---|---|
| Je veux modifier un prix, un texte, une date | Aller sur **leclubpilates.sanity.studio** |
| Le site est en panne | Vérifier **vercel.com** → contacter le dev |
| Le blog ne génère plus d'articles | Vérifier le solde sur **console.anthropic.com** |
| Je veux ajouter un professeur | Sanity > Professeurs > "New" |
| Je veux changer la bannière promo | Sanity > Paramètres du site > Bannière |
| Je veux désactiver la bannière | Sanity > Paramètres du site > Bannière > décocher "Afficher" |

---

*Document rédigé en mai 2026 — à mettre à jour lors de chaque évolution majeure du projet.*
