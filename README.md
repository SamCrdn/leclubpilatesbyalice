# Le Club Pilates — Site Marketing

Site marketing de conversion pour studio de Pilates en ligne.  
**Stack :** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion · FormSpree

---

## Table des matières

1. [Architecture & stack](#architecture--stack)
2. [Installation rapide](#installation-rapide)
3. [Variables d'environnement](#variables-denvironnement)
4. [Structure du projet](#structure-du-projet)
5. [Design system](#design-system)
6. [SEO & performance](#seo--performance)
7. [Formulaires](#formulaires)
8. [Déploiement (Vercel)](#déploiement-vercel)
9. [Phase 2 — feuille de route](#phase-2--feuille-de-route)

---

## Architecture & stack

### Pourquoi Next.js 14 App Router ?

| Critère | Choix | Raison |
|---------|-------|--------|
| Performance | SSG + ISR | Pages statiques → Lighthouse 95+, temps de chargement <1.5 s |
| SEO | SSR/SSG | Rendu serveur, métadonnées dynamiques, sitemap auto |
| DX | App Router | Layouts imbriqués, Server Components, streaming |
| Images | `next/image` | WebP/AVIF auto, lazy loading, `srcset` |
| Animations | CSS natif + Framer Motion | Performance, réduction des dépendances JS |
| Déploiement | Vercel | Zéro config, CDN Edge, analytics intégrés |

### Pourquoi Tailwind CSS ?

- Aucun CSS mort en production (tree-shaking)
- Design tokens centralisés dans `tailwind.config.js`
- Composants utilitaires via `@layer components`

### Alternative CMS (Phase 2)

**Recommandation : Sanity.io**  
- Studio visuel intégré (édition de contenu sans dev)
- GROQ queries flexibles
- Streaming + ISR natif avec Next.js
- Gratuit jusqu'à 2 utilisateurs

---

## Installation rapide

```bash
# 1. Cloner & installer
git clone <repo>
cd leclubpilates
npm install

# 2. Configurer l'environnement
cp .env.example .env.local
# → Éditer .env.local (voir section suivante)

# 3. Lancer en développement
npm run dev
# → http://localhost:3000

# 4. Build de production
npm run build && npm start
```

**Node.js requis : ≥ 18.17.0**

---

## Variables d'environnement

```bash
# .env.local (ne jamais commiter ce fichier)

# URLs
NEXT_PUBLIC_SITE_URL=https://www.leclubpilates.com
NEXT_PUBLIC_APP_URL=https://app.leclubpilates.com

# FormSpree — créer un compte sur https://formspree.io
NEXT_PUBLIC_FORMSPREE_NEWSLETTER=xxxxxxxx
NEXT_PUBLIC_FORMSPREE_CONTACT=xxxxxxxx

# Analytics (optionnel Phase 1)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Obtenir les IDs FormSpree

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer deux formulaires : "Newsletter" et "Contact"
3. Copier l'ID de chaque formulaire (8 caractères) dans `.env.local`

---

## Structure du projet

```
leclubpilates/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx                # Root layout, fonts, SEO global
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Styles globaux, Tailwind
│   ├── sitemap.ts                # Sitemap XML auto-généré
│   ├── robots.ts                 # robots.txt auto-généré
│   ├── not-found.tsx             # Page 404
│   ├── about/page.tsx            # Page À propos
│   ├── classes/page.tsx          # Catalogue de cours
│   ├── pricing/page.tsx          # Abonnements & tarifs
│   ├── blog/page.tsx             # Blog index
│   └── contact/page.tsx          # Formulaire de contact
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation responsive
│   │   └── Footer.tsx            # Footer avec newsletter
│   ├── sections/                 # Sections de pages
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ClassesPreview.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTABanner.tsx
│   └── ui/                       # Composants réutilisables
│       ├── CTAButton.tsx
│       ├── NewsletterForm.tsx
│       ├── ScrollReveal.tsx
│       └── PlaceholderImage.tsx
│
├── public/
│   ├── images/                   # Images statiques (remplacer les placeholders)
│   └── og-image.jpg              # Open Graph image (1200×630)
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── .env.example
```

---

## Design system

### Palette de couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `cream` | `#F5F0E8` | Fond principal |
| `chalk` | `#FAFAF7` | Fond secondaire |
| `sand` | `#C9B9A0` | Accents, bordures |
| `mink` | `#9B8A7A` | Texte secondaire, labels |
| `cocoa` | `#2C1A0E` | Texte principal, CTA dark |

### Typographie

| Variable | Police | Usage |
|----------|--------|-------|
| `--font-cormorant` | Cormorant Garamond | Titres, display |
| `--font-dm-sans` | DM Sans | Corps, UI |
| `--font-dm-mono` | DM Mono | Labels, numéros |

### Composants CSS

Définis dans `globals.css` via `@layer components` :

- `.btn-primary` — CTA principal (fond cocoa)
- `.btn-secondary` — CTA secondaire (bordure cocoa)
- `.btn-ghost` — Lien avec underline
- `.section-wrapper` — Container centré avec padding responsive
- `.eyebrow` — Label de section (uppercase, tracking large)
- `.input-base` — Input avec bordure bottom seulement

### Animations scroll

Ajoutez `data-animate` à n'importe quel élément pour déclencher le fade-up à l'entrée dans le viewport.  
Ajoutez `style={{ transitionDelay: '200ms' }}` pour le stagger.

```tsx
<div data-animate>Contenu animé</div>
<div data-animate style={{ transitionDelay: '100ms' }}>Contenu décalé</div>
```

---

## SEO & performance

### Automatique (Next.js)

- Métadonnées par page via `export const metadata`
- Open Graph & Twitter Cards
- Sitemap XML (`/sitemap.xml`)
- `robots.txt` (`/robots.txt`)

### JSON-LD Structured Data

- **Homepage** : `WebSite`, `Organization`, `HealthClub` + `AggregateRating`
- **FAQ** : `FAQPage` avec toutes les questions/réponses

### Images

En production, remplacer les backgrounds CSS par `next/image` :

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="Studio Pilates"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>
```

### Core Web Vitals cibles

| Métrique | Cible | Stratégie |
|----------|-------|-----------|
| LCP | <2.5s | `priority` sur l'image hero |
| FID/INP | <100ms | Server Components, peu de JS client |
| CLS | <0.1 | Dimensions d'images explicites |

---

## Formulaires

Les formulaires utilisent [FormSpree](https://formspree.io) (gratuit jusqu'à 50 soumissions/mois).

**Alternatives si volume plus important :**
- [EmailJS](https://emailjs.com) — côté client, templates email
- [Resend](https://resend.com) — API email moderne, 100 emails/jour gratuit
- Route API Next.js + Nodemailer

**Pour passer à une Route API :**

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'noreply@leclubpilates.com',
    to: 'hello@leclubpilates.com',
    subject: `Contact: ${body.subject}`,
    text: body.message,
  })
  return NextResponse.json({ ok: true })
}
```

---

## Déploiement (Vercel)

```bash
# 1. Installer Vercel CLI (optionnel)
npm i -g vercel

# 2. Déployer
vercel --prod

# Ou connecter le repo GitHub dans https://vercel.com/new
# → Vercel détecte Next.js automatiquement
```

**Variables d'environnement Vercel :**  
Settings → Environment Variables → copier depuis `.env.local`

**Domaine custom :**  
Settings → Domains → Ajouter `www.leclubpilates.com`

---

## Phase 2 — Feuille de route

### Priorité haute (semaines 2-4)

- [ ] **CMS Sanity** — Édition du blog, cours, témoignages sans code
- [ ] **Blog article page** — `/blog/[slug]` avec MDX ou Sanity Portable Text
- [ ] **Vraies images** — Remplacer tous les placeholders par les photos du projet
- [ ] **Analytics** — Google Analytics 4 ou Plausible (privacy-first)
- [ ] **Cookie banner** — Conformité RGPD

### Priorité moyenne (semaines 5-8)

- [ ] **Internationalisation** — FR / EN avec `next-intl`
- [ ] **Page cours individuelle** — `/classes/[slug]` avec aperçu vidéo
- [ ] **Recherche blog** — Recherche full-text côté client ou Algolia
- [ ] **Programme page** — Présentation détaillée des programmes
- [ ] **Tests** — Vitest + Playwright pour les pages critiques

### Priorité basse (Phase 3)

- [ ] **Espace membres** — Next-Auth + intégration app.leclubpilates.com
- [ ] **Pop-in exit intent** — Capture email avant sortie
- [ ] **A/B testing** — Vercel Edge Config
- [ ] **Performance** — ISR pour les pages blog, prefetch agressif

---

*Dernière mise à jour : Phase 1 complète*
