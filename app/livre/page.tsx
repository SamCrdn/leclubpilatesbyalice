import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'
import BookGallery from '@/components/ui/BookGallery'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Mon cahier Pilates au mur, le livre d\'Alice Parquet',
  description: 'Alice Parquet signe son premier livre aux éditions Solar : Pilates au mur, exercices ciblés et programme 30 jours. Méthode fun et efficace. Disponible sur Amazon et Fnac.',
  alternates: { canonical: `${siteUrl}/livre` },
  openGraph: {
    title: 'Mon cahier Pilates au mur, le livre d\'Alice Parquet',
    description: 'Le Pilates au mur par Alice Parquet. Exercices ciblés, programme 30 jours, éditions Solar.',
    url: `${siteUrl}/livre`,
    siteName: 'Le Club Pilates',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Mon cahier Pilates au mur, Alice Parquet' }],
  },
}

const AMAZON_URL = 'https://www.amazon.fr/Mon-cahier-Pilates-au-mur/dp/2263189637'
const FNAC_URL = 'https://www.fnac.com/a21145297/Alice-Parquet-Mon-cahier-Pilates-au-mur'

const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Mon cahier Pilates au mur',
  alternativeHeadline: 'Le Pilates tendance, fun et efficace !',
  author: {
    '@type': 'Person',
    name: 'Alice Parquet',
    url: `${siteUrl}/about`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Solar',
  },
  datePublished: '2025-04-03',
  numberOfPages: 112,
  isbn: '9782263189630',
  inLanguage: 'fr-FR',
  bookFormat: 'https://schema.org/Paperback',
  description:
    'Le Pilates au mur : une nouvelle façon de se tonifier, s\'étirer et renforcer son corps. Fondamentaux, séances ciblées, étirements anti-stress et défi 30 jours.',
  offers: [
    {
      '@type': 'Offer',
      url: AMAZON_URL,
      price: '8.90',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Amazon' },
    },
    {
      '@type': 'Offer',
      url: FNAC_URL,
      price: '8.90',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Fnac' },
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Où acheter le livre Mon cahier Pilates au mur d\'Alice Parquet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le livre est disponible sur Amazon, à la Fnac, et dans la plupart des librairies. Il est également disponible en version numérique.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\'est quoi le Pilates au mur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Pilates au mur est une pratique qui utilise le mur comme appui pour intensifier et stabiliser les exercices de Pilates classiques. Il permet de travailler la force, la souplesse et la posture sans matériel, depuis chez soi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le livre convient-il aux débutants ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le livre commence par les fondamentaux du Pilates au mur et propose des exercices progressifs adaptés à tous les niveaux, y compris les débutants complets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte le livre Pilates au mur d\'Alice Parquet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le livre est vendu 8,90 € en version papier et 4,99 € en version numérique, aux éditions Solar.',
      },
    },
  ],
}

const contents = [
  {
    num: '01',
    title: 'Les fondamentaux',
    desc: 'Les bases du Pilates au mur expliquées clairement pour pratiquer efficacement dès la première séance, sans matériel.',
  },
  {
    num: '02',
    title: 'Séances ciblées',
    desc: 'Ventre plat, fessiers sculptés, renforcement global : des programmes courts et progressifs adaptés à tous les niveaux.',
  },
  {
    num: '03',
    title: 'Relaxation & étirements',
    desc: 'Des routines anti-stress et anti-jambes lourdes pour récupérer, s\'étirer et retrouver légèreté après chaque journée.',
  },
  {
    num: '04',
    title: 'Défi 30 jours',
    desc: 'Un programme journalier complet pour ancrer une pratique régulière et ressentir de vrais résultats en un mois.',
  },
]

const retailers = [
  { name: 'Amazon', url: AMAZON_URL, note: 'Livraison rapide' },
  { name: 'Fnac', url: FNAC_URL, note: 'Retrait en magasin' },
]


export default function LivrePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Le Livre', href: '/livre' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cocoa min-h-screen flex items-end relative overflow-hidden">
        <p
          className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight leading-none"
          aria-hidden="true"
        >
          pilates
        </p>

        <div className="section-wrapper relative z-10 pt-36 pb-16 lg:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">

            <div>
              <p className="eyebrow mb-6 text-cream/40" data-animate>Éditions Solar</p>
              <h1
                className="font-display font-light leading-[0.95] text-cream mb-6"
                data-animate
                style={{ transitionDelay: '80ms' }}
              >
                Mon cahier<br />
                <em className="italic text-sand">Pilates au mur</em>
              </h1>
              <p
                className="text-sm text-cream/60 font-light leading-relaxed max-w-md mb-10"
                data-animate
                style={{ transitionDelay: '160ms' }}
              >
                Le mur comme seul accessoire. Des séances courtes, ciblées, efficaces.
                Alice partage sa méthode dans un premier livre pensé pour pratiquer
                chez soi, à son rythme.
              </p>
              <div
                className="flex flex-wrap gap-4"
                data-animate
                style={{ transitionDelay: '240ms' }}
              >
                {retailers.map(r => (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-cream text-cocoa hover:bg-sand font-body font-light text-sm tracking-widest uppercase px-8 py-4 rounded-pill transition-all duration-300"
                  >
                    Commander sur {r.name}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-sm overflow-hidden"
              data-animate
              style={{ transitionDelay: '100ms' }}
            >
              <Image
                src="/images/livre/couverture-mon-cahier-pilates-au-mur.jpg"
                alt="Couverture du livre Mon cahier Pilates au mur, par Alice Parquet, éditions Solar"
                fill
                className="object-cover object-center"
                priority
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTENU DU LIVRE ── */}
      <section className="py-section bg-cream border-t border-cocoa/10">
        <div className="section-wrapper">
          <div className="max-w-2xl mb-16" data-animate>
            <p className="eyebrow mb-4">Au programme</p>
            <h2>
              Ce que vous trouverez<br />
              <em className="italic">dans ce livre</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cocoa/10">
            {contents.map((item, i) => (
              <div
                key={item.num}
                className="bg-cream p-8 lg:p-10"
                data-animate
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">{item.num}</p>
                <h3 className="font-display text-2xl font-light text-cocoa mb-4">{item.title}</h3>
                <p className="text-sm text-cocoa/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <BookGallery />

      {/* ── PULL QUOTE ── */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="section-wrapper">
          <p className="font-display text-3xl md:text-5xl font-light italic text-cocoa leading-snug max-w-3xl" data-animate>
            &ldquo;Le mur devient un outil de précision : il guide, stabilise et intensifie chaque mouvement pour des résultats visibles, sans jamais forcer.&rdquo;
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-cocoa/30 font-light" data-animate style={{ transitionDelay: '150ms' }}>
            Alice Parquet
          </p>
        </div>
      </section>

      {/* ── À PROPOS DE L'AUTRICE ── */}
      <section className="py-section bg-cream border-t border-cocoa/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">

            <div className="relative aspect-[3/4] rounded-sm overflow-hidden" data-animate>
              <Image
                src="/images/livre/alice-parquet-avec-livre-pilates-au-mur.jpg"
                alt="Alice Parquet avec son livre Mon cahier Pilates au mur, éditions Solar"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>

            <div data-animate style={{ transitionDelay: '150ms' }}>
              <p className="eyebrow mb-6">L'autrice</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cocoa leading-tight mb-6">
                Alice Parquet,<br />
                <em className="italic text-mink">instructrice certifiée</em>
              </h2>
              <div className="space-y-4 text-sm text-cocoa/70 font-light leading-relaxed mb-8">
                <p>
                  Ancienne danseuse classique, instructrice Pilates certifiée Polestar et fondatrice
                  du Club Pilates en ligne, Alice accompagne depuis 2017 des centaines d&apos;élèves
                  vers une pratique durable et bienveillante.
                </p>
                <p>
                  Ce livre est la synthèse de ses années d&apos;enseignement : une méthode
                  accessible, efficace, adaptée à la vie quotidienne, avec rien d&apos;autre
                  qu&apos;un mur.
                </p>
              </div>
              <Link
                href="/about"
                className="text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light"
              >
                En savoir plus sur Alice →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ACHAT ── */}
      <section className="py-section bg-cocoa relative overflow-hidden">
        <p
          className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight"
          aria-hidden="true"
        >
          pilates
        </p>
        <div className="section-wrapper relative z-10 text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-6 text-cream/40" data-animate>Disponible en librairie et en ligne</p>
          <h2
            className="font-display text-4xl md:text-5xl font-light text-cream leading-tight mb-10"
            data-animate
            style={{ transitionDelay: '80ms' }}
          >
            Commandez votre exemplaire
          </h2>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-animate
            style={{ transitionDelay: '160ms' }}
          >
            {retailers.map(r => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream text-cocoa hover:bg-sand text-xs tracking-[0.15em] uppercase font-light py-4 px-8 rounded-pill transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>{r.name}</span>
                <span className="text-cocoa/30 group-hover:text-cocoa/60 transition-colors">·</span>
                <span className="text-cocoa/40 group-hover:text-cocoa/70 transition-colors">{r.note}</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
          <p
            className="mt-8 text-xs text-cream/20 font-light"
            data-animate
            style={{ transitionDelay: '240ms' }}
          >
            8,90 € · Éditions Solar · Également disponible en numérique
          </p>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section className="py-section bg-cream border-t border-cocoa/10">
        <div className="section-wrapper">
          <div className="max-w-2xl mb-12" data-animate>
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <h2>
              Tout ce qu&apos;il faut<br />
              <em className="italic">savoir sur le livre</em>
            </h2>
          </div>
          <dl className="max-w-2xl space-y-8">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="border-b border-cocoa/10 pb-8" data-animate style={{ transitionDelay: `${i * 60}ms` }}>
                <dt className="font-display text-lg font-light text-cocoa mb-3">{item.name}</dt>
                <dd className="text-sm text-cocoa/60 font-light leading-relaxed">{item.acceptedAnswer.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section className="py-16 bg-sand/20 border-t border-cocoa/10">
        <div className="section-wrapper">
          <p className="eyebrow mb-10 text-center" data-animate>Envie de pratiquer en ligne ?</p>
          <div className="relative">
            <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0 overscroll-x-contain">
              {[
                {
                  href: '/cours-de-pilates/wall',
                  label: 'Cours Pilates Wall',
                  desc: 'Les mêmes exercices au mur, guidés en vidéo par Alice.',
                },
                {
                  href: '/cours-de-pilates',
                  label: 'Tous les cours',
                  desc: 'Plus de 350 cours en ligne pour tous les niveaux.',
                },
                {
                  href: '/about',
                  label: 'Le Studio',
                  desc: 'Découvrez l\'histoire d\'Alice et sa méthode.',
                },
              ].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block shrink-0 w-[78vw] sm:w-auto snap-start border border-cocoa/10 bg-cream rounded-sm p-6 hover:border-cocoa/30 transition-colors"
                >
                  <h3 className="font-display text-lg font-light text-cocoa mb-2 group-hover:opacity-70 transition-opacity">
                    {link.label}
                  </h3>
                  <p className="text-xs text-cocoa/50 font-light leading-relaxed mb-4">{link.desc}</p>
                  <span className="text-xs text-mink group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-sand/20 to-transparent pointer-events-none sm:hidden flex items-center justify-end pr-2" aria-hidden="true">
              <span className="text-cocoa/40 text-base">→</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
