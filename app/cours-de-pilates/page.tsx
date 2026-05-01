import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'
import { safeBgUrl } from '@/lib/safeBgUrl'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Cours de Pilates en ligne — Tous niveaux',
  description: 'Découvrez +350 cours de Pilates en ligne : débutant, dos, prénatal, Wall Pilates. Guidés par des instructeurs certifiés. Accès illimité, essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates` },
  openGraph: {
    title: 'Cours de Pilates en ligne — Tous niveaux',
    description: '+350 cours de Pilates en ligne : débutant, dos, prénatal, Wall. Essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cours de Pilates en ligne' }],
  },
}

const specialties = [
  {
    href: '/cours-de-pilates/debutant',
    eyebrow: 'Débutant',
    title: 'Commencer le Pilates',
    desc: 'Programme 4 semaines, fondamentaux, respiration, placement. Parfait si vous n\'avez jamais pratiqué.',
    volume: '880 / mois',
  },
  {
    href: '/cours-de-pilates/dos',
    eyebrow: 'Pilates & dos',
    title: 'Pilates pour le dos',
    desc: 'Soulager le mal de dos, renforcer les lombaires, corriger la posture. Méthode reconnue par les kinés.',
    volume: '2 900 / mois',
  },
  {
    href: '/cours-de-pilates/prenatal',
    eyebrow: 'Prénatal & postnatal',
    title: 'Pilates enceinte',
    desc: 'Programme Mama 12 mois : grossesse trimestre par trimestre, reprise post-accouchement, diastase.',
    volume: '2 400 / mois',
  },
  {
    href: '/cours-de-pilates/wall',
    eyebrow: 'Wall Pilates',
    title: 'Pilates au mur',
    desc: 'Le mur comme outil de Pilates : alignement, renforcement, étirements en décompression. Sans matériel.',
    volume: '4 400 / mois',
  },
]

const courses = [
  { slug: 'fondamentaux',        cat: 'Débutant',     title: 'Fondamentaux du Pilates',   duration: '30 min', level: 'Débutant',      image: '/images/class-1.jpg' },
  { slug: 'core-stabilite',      cat: 'Renforcement', title: 'Core & Stabilité',          duration: '45 min', level: 'Intermédiaire', image: '/images/class-2.jpg' },
  { slug: 'etirements-mobilite', cat: 'Souplesse',    title: 'Étirements & Mobilité',     duration: '40 min', level: 'Tous niveaux',  image: '/images/class-3.jpg' },
  { slug: 'barre-sol',           cat: 'Renforcement', title: 'Barre au Sol',              duration: '50 min', level: 'Intermédiaire', image: '/images/class-4.jpg' },
  { slug: 'pilates-prenatal',    cat: 'Prénatal',     title: 'Pilates Prénatal',          duration: '35 min', level: 'Tous niveaux',  image: '/images/class-5.jpg' },
  { slug: 'full-body-flow',      cat: 'Renforcement', title: 'Full Body Flow',            duration: '55 min', level: 'Avancé',        image: '/images/class-6.jpg' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Cours de Pilates en ligne — Le Club Pilates',
  description: '+350 cours de Pilates en ligne, tous niveaux, guidés par des instructeurs certifiés.',
  url: `${siteUrl}/cours-de-pilates`,
  itemListElement: specialties.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${siteUrl}${s.href}`,
    name: s.title,
  })),
}

export default function CourseDePilatesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Cours de Pilates', href: '/cours-de-pilates' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Studio en ligne</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] max-w-2xl mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            Cours de Pilates<br />
            <em className="italic text-mink">en ligne</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            +350 cours disponibles, nouvelles séances chaque semaine. Débutant ou confirmé, dos fragile ou grossesse — il y a un cours fait pour vous, guidé par des instructeurs certifiés.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="cours-de-pilates-hero" />
          </div>
        </div>
      </section>

      {/* ── SPÉCIALITÉS ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-10" data-animate>Cours par objectif</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-cocoa/10 rounded-sm p-6 bg-cream hover:border-cocoa/30 transition-colors"
                data-animate
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="eyebrow mb-3 text-sand-dark">{s.eyebrow}</p>
                <h2 className="font-display text-xl font-light text-cocoa mb-3 leading-snug group-hover:opacity-70 transition-opacity">
                  {s.title}
                </h2>
                <p className="text-xs text-cocoa/50 font-light leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-mink font-light group-hover:gap-2.5 transition-all">
                  Découvrir <ArrowRight size={10} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURS ── */}
      <section aria-label="Aperçu des cours" className="py-section bg-chalk">
        <div className="section-wrapper">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-10" data-animate>Aperçu du studio</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <a
                key={c.slug}
                href={`${APP_URL}/classes/${c.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-animate
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/3] bg-sand/30 overflow-hidden mb-4 rounded-sm">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                    style={{ backgroundImage: safeBgUrl(c.image) }}
                    role="img"
                    aria-label={c.title}
                  />
                </div>
                <p className="eyebrow mb-1.5">{c.cat}</p>
                <h3 className="font-display text-xl font-light mb-2 group-hover:opacity-70 transition-opacity">{c.title}</h3>
                <div className="flex items-center gap-3 text-xs text-mink font-light">
                  <span>{c.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-sand" />
                  <span>{c.level}</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16" data-animate>
            <p className="text-sm text-cocoa/50 font-light mb-6">
              Accédez aux +350 cours avec un abonnement
            </p>
            <SignupCTA label="Commencer l'essai gratuit" utmContent="cours-de-pilates-grid" />
          </div>
        </div>
      </section>
    </>
  )
}
