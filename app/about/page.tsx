import type { Metadata } from 'next'
import Image from 'next/image'
import { SignupCTA } from '@/components/ui/CTAButton'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'À propos d\'Alice — Fondatrice du Club Pilates en ligne',
  description:
    'Découvrez l\'histoire d\'Alice, fondatrice du Club Pilates. Ancienne danseuse, instructrice certifiée Polestar, elle propose des cours de Pilates en ligne depuis 2020.',
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: 'À propos d\'Alice — Fondatrice du Club Pilates en ligne',
    description: 'Ancienne danseuse, instructrice certifiée Polestar. Découvrez l\'histoire d\'Alice et sa vision du Pilates en ligne.',
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/images/alice-fondatrice-club-pilates.jpg`, width: 1200, height: 630, alt: 'Alice, fondatrice du Club Pilates' }],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alice',
  jobTitle: 'Fondatrice & Instructrice Pilates',
  image: `${siteUrl}/images/alice-fondatrice-club-pilates.jpg`,
  url: `${siteUrl}/about`,
  worksFor: { '@type': 'Organization', name: 'Le Club Pilates', url: siteUrl },
  knowsAbout: ['Pilates', 'Bien-être', 'Danse', 'Renforcement musculaire'],
  sameAs: ['https://www.instagram.com/alice.leclubpilates/'],
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'À propos', href: '/about' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* ── HERO éditorial ── */}
      <section className="relative bg-cream overflow-hidden min-h-screen flex items-end">

        {/* Image — pleine largeur mobile, panneau droit 45% desktop */}
        <div className="absolute inset-0 lg:left-[55%]">
          <Image
            src="/images/class-5.jpg"
            alt="Alice en pratique de Pilates"
            fill
            className="object-cover object-top"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/30 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/20 to-transparent hidden lg:block" />
        </div>

        {/* Desktop top gradient for nav visibility */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cocoa/40 to-transparent hidden lg:block z-[1]" aria-hidden="true" />

        <div className="section-wrapper relative z-10 pt-32 pb-16 lg:pb-24 w-full">
          <p className="eyebrow mb-6 text-left text-cream/70 lg:text-cocoa" data-animate>La fondatrice</p>
          <h1
            className="font-display font-light leading-[0.95] mb-8 max-w-xl text-left text-cream lg:text-cocoa"
            data-animate
            style={{ transitionDelay: '100ms' }}
          >
            Alice,<br />
            <em className="italic text-cream/70 lg:text-mink">passionnée</em><br />
            de mouvement.
          </h1>
          <div className="flex gap-12 pt-8 border-t border-cream/20 lg:border-cocoa/10 max-w-sm" data-animate style={{ transitionDelay: '200ms' }}>
            {[
              { value: '10+', label: 'ans d\'expérience dans le Pilates' },
              { value: '2020', label: 'Création du studio en ligne' },
              { value: '+42k', label: 'Followers' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-light text-cream lg:text-cocoa">{value}</p>
                <p className="text-xs text-cream/50 lg:text-cocoa/40 font-light tracking-wide mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOC 1 — texte pleine largeur ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper">
          <div className="max-w-2xl" data-animate>
            <p className="font-mono text-xs text-sand-dark tracking-widest mb-8">01 / Parcours</p>
            <div className="space-y-5 text-sm text-cocoa/70 font-light leading-relaxed">
              <p>
                Mon histoire avec le mouvement commence dans la danse classique, que j&apos;ai pratiqué pendant plus de 15 ans, notamment à l&apos;École Nationale Supérieure de Danse de Marseille. C&apos;est là que j&apos;ai découvert le Pilates pour la première fois.
              </p>
              <p>
                Après un master en marketing à l&apos;ISEM Paris et plusieurs années dans l&apos;industrie du luxe, j&apos;ai pris conscience de l&apos;importance de la connexion au corps dans nos vies marquées par le stress et la sédentarité.
              </p>
              <p>
                Sous les conseils d&apos;un kinésithérapeute, j&apos;ai redécouvert le Pilates pour mieux gérer mes crises d&apos;asthme. Cette méthode est devenue essentielle à mon bien-être : pour mieux respirer, apaiser mon anxiété, améliorer ma souplesse et renforcer mon corps sans blessure. J&apos;ai suivi la formation Polestar Rehab &amp; Studio Teacher Training, complétée par un diplôme d&apos;État.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-20 bg-sand/20 overflow-hidden">
        <div className="section-wrapper">
          <p
            className="font-display text-3xl md:text-5xl font-light italic text-cocoa leading-snug max-w-3xl"
            data-animate
          >
            &ldquo;Le Pilates est bien plus qu&apos;un sport&nbsp;: c&apos;est une invitation à redéfinir son rapport au corps et à se reconnecter à soi-même avec patience et gratitude&rdquo;
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-cocoa/30 font-light" data-animate style={{ transitionDelay: '150ms' }}>
            — Alice
          </p>
        </div>
      </section>

      {/* ── BLOC 2 — texte gauche, image droite ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 lg:gap-24 items-center">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-8">02 / Le studio</p>
              <div className="space-y-5 text-sm text-cocoa/70 font-light leading-relaxed">
                <p>
                  J&apos;ai commencé à enseigner en 2017 en cabinet de kinésithérapie, puis dans de nombreux studios, hôtels, entreprises et lors de retraites. En 2020, j&apos;ai lancé mes cours en ligne, qui ont rencontré un succès inattendu, me permettant de toucher une clientèle plus large, au-delà de la France.
                </p>
                <p>
                  Aujourd&apos;hui, je suis heureuse de transmettre ma passion pour le mouvement à travers les cours en ligne. En cultivant une discipline bienveillante, on développe non seulement sa force et sa souplesse, mais aussi une profonde connexion à soi-même.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-sm overflow-hidden" data-animate style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/alice-fondatrice-club-pilates.jpg"
                alt="Alice, fondatrice du Club Pilates"
                fill
                className="object-cover object-top scale-x-[-1]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── CITATION FINALE ── */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-cocoa relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight" aria-hidden="true">
          pilates
        </p>
        <div className="section-wrapper relative z-10 max-w-2xl mx-auto text-center">
          <blockquote className="font-display text-xl md:text-2xl font-light italic text-cream/80 leading-relaxed mb-6" data-animate>
            &ldquo;L&apos;objectif du studio digital est de proposer des cours de Pilates de qualité, simples et accessibles, afin de permettre à chacun, quel que soit son mode de vie, d&apos;obtenir des résultats durables grâce à une routine à suivre depuis son salon.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-12" data-animate style={{ transitionDelay: '100ms' }}>Alice</p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Rejoindre le club" utmContent="about-quote" />
          </div>
        </div>
      </section>

      <div className="[&>section]:pt-10 [&>section]:pb-12 md:[&>section]:pt-12 md:[&>section]:pb-16">
        <TestimonialsSection />
      </div>
    </>
  )
}
