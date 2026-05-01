# Le Club Pilates — Site web

Site marketing pour Le Club Pilates, studio de Pilates en ligne fondé par Alice.

## Stack technique

- **Next.js 15** + **React 19** — framework front-end, pages statiques (SSG)
- **Tailwind CSS** — styles, palette custom (cream, sand, cocoa, mink, chalk)
- **Sanity** — CMS headless pour le blog
- **Vercel** — hébergement et déploiement automatique via GitHub
- **Claude AI (Anthropic)** — génération automatique des articles de blog

---

## Lancer le projet en local

```bash
npm install
npm run dev       # → http://localhost:3000
```

Copier `.env.example` → `.env.local` et remplir les variables (voir section ci-dessous).

---

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL du site (`https://www.leclubpilates.com`) |
| `NEXT_PUBLIC_FORMSPREE_NEWSLETTER` | ID FormSpree newsletter |
| `NEXT_PUBLIC_FORMSPREE_CONTACT` | ID FormSpree contact |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID projet Sanity (`71c7c0vz`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity (`production`) |
| `SANITY_API_TOKEN` | Token Sanity avec droits **Editor** — créer sur sanity.io |
| `ANTHROPIC_API_KEY` | Clé API Claude — créer sur console.anthropic.com |
| `CRON_SECRET` | Mot de passe pour sécuriser l'endpoint de génération d'articles |

---

## Architecture des dossiers

```
app/                    → pages Next.js (App Router)
  page.tsx              → Homepage
  blog/
    page.tsx            → Liste des articles (branché Sanity)
    [slug]/page.tsx     → Article individuel (branché Sanity)
  cours-de-pilates/     → Landing pages SEO
    page.tsx            → Hub toutes spécialités
    debutant/           → Landing débutant (880 vol/mois)
    prenatal/           → Landing prénatal (2 400 vol/mois)
    dos/                → Landing dos (2 900 vol/mois)
    wall/               → Landing Wall Pilates (4 400 vol/mois)
    full-body/          → Landing Full Body (1 600 vol/mois)
    reformer/           → Landing Reformer (720 vol/mois)
  retraite/             → Page Retraite Ibiza 2026
  about/                → Page Alice
  profs/                → Page équipe
  contact/              → Formulaire contact

components/
  sections/             → Sections pleine page (Hero, FAQ, Pricing...)
  ui/                   → Composants réutilisables (CTAButton, ScrollReveal...)
  layout/               → Header et Footer

lib/
  sanity.ts             → Client Sanity
  sanity.queries.ts     → Requêtes GROQ (fetch articles)
  blog/
    pipeline.ts         → Pipeline IA : Agent 1 (plan) + Agent 2 (rédaction)
    topics.ts           → 44 sujets d'articles pré-définis
    markdown-to-pt.ts   → Convertisseur Markdown → Portable Text Sanity

sanity/
  schemas/post.ts       → Schéma article Sanity (utilisé par le site)

sanity-studio/          → Studio Sanity STANDALONE (indépendant du site)
  schemas/post.ts       → Copie du schéma (synchroniser si modifié)
  sanity.config.ts      → Config studio
  sanity.cli.ts         → Config déploiement → leclubpilates.sanity.studio
```

---

## Blog automatique

### Comment ça marche

1. **cron-job.org** appelle `POST /api/generate-article` 3x/semaine (lun/mer/ven à 7h)
2. L'IA génère un article (plan via Claude Opus, rédaction via Claude Sonnet)
3. L'article est créé en **brouillon** dans Sanity
4. **Alice** ouvre **leclubpilates.sanity.studio**, lit le brouillon, corrige si besoin, clique **Publier**
5. Le webhook Sanity → Vercel recharge la page `/blog` en quelques secondes

### Déclencher manuellement (test)

```bash
curl -X POST http://localhost:3000/api/generate-article \
  -H "x-cron-secret: <CRON_SECRET>"
```

### Coût estimé

~3-5€/mois en clé API Anthropic pour 12 articles/mois.

---

## Studio Sanity (interface Alice)

URL : **https://leclubpilates.sanity.studio**
Connexion : compte Google `alice.pilates.paris@gmail.com`

Pour redéployer le studio après modification du schéma :
```bash
cd sanity-studio
npx sanity deploy
```

---

## Déploiement

Le déploiement est automatique : tout push sur la branche `main` déclenche un build Vercel.

```bash
git add .
git commit -m "description des changements"
git push
```

Vercel build + déploiement : ~2 minutes.

---

## SEO

Audit complet disponible dans `SEO_AUDIT.md`.

Score actuel : **32/100** — objectif 60/100 à 90 jours.

Mots-clés principaux ciblés :
- "cours de pilates en ligne" (1 000/mois) → position 15 → objectif top 5
- "pilates wall" (4 400/mois) → landing `/cours-de-pilates/wall`
- "pilates dos" (2 900/mois) → landing `/cours-de-pilates/dos`
- "pilates enceinte" (2 400/mois) → landing `/cours-de-pilates/prenatal`
