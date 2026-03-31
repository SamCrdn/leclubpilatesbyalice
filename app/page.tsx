import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection       from '@/components/sections/HeroSection'
import StatsBar          from '@/components/sections/StatsBar'
import BenefitsSection   from '@/components/sections/BenefitsSection'
import ClassesPreview    from '@/components/sections/ClassesPreview'
import AboutTeaser       from '@/components/sections/AboutTeaser'
import FounderSection    from '@/components/sections/FounderSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingPreview    from '@/components/sections/PricingPreview'
import FAQSection        from '@/components/sections/FAQSection'
import InstagramSection  from '@/components/sections/InstagramSection'
import CTABanner         from '@/components/sections/CTABanner'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Cours de Pilates en ligne — Le Club Pilates',
  description:
    'Cours de Pilates en ligne guidés par des expertes. Plus de 350 cours disponibles, programmes personnalisés, essai gratuit 7 jours. Rejoignez 1 000 membres actives.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Cours de Pilates en ligne — Le Club Pilates',
    description: 'Cours de Pilates en ligne guidés par des expertes. Plus de 350 cours, essai gratuit 7 jours.',
    url: siteUrl,
    siteName: 'Le Club Pilates',
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Le Club Pilates' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cours de Pilates en ligne — Le Club Pilates',
    description: 'Cours de Pilates en ligne guidés par des expertes. Plus de 350 cours, essai gratuit 7 jours.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Le Club Pilates',
      description: 'Studio de Pilates en ligne',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Le Club Pilates',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/og-image.jpg`,
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://www.instagram.com/alice.leclubpilates/',
        'https://www.youtube.com/@leclubpilates',
      ],
    },
    {
      '@type': 'HealthClub',
      '@id': `${siteUrl}/#business`,
      name: 'Le Club Pilates',
      url: siteUrl,
      image: `${siteUrl}/images/og-image.jpg`,
      description: 'Studio de Pilates en ligne avec cours guidés par des expertes',
      priceRange: '€€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '71',
        bestRating: '5',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <StatsBar />
      <BenefitsSection />
      <PricingPreview />
      <TestimonialsSection />
      <ClassesPreview />
      <AboutTeaser />
      <FounderSection />
      <FAQSection />
      <InstagramSection />

      {/* ── Mini Contact ── */}
      <section className="py-section bg-cream border-t border-cocoa/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">Une question ?</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cocoa leading-tight mb-4">
                On est là<br />
                <em className="italic text-mink">pour vous.</em>
              </h2>
              <p className="text-xs text-cocoa/40 font-light tracking-widest">
                Abonnements · Technique · Programmes · Cours
              </p>
            </div>

            <div className="flex flex-col gap-6" data-animate style={{ transitionDelay: '150ms' }}>
              {[
                { label: 'Email', value: 'contact@leclubpilates.com', href: 'mailto:contact@leclubpilates.com' },
                { label: 'Instagram', value: '@alice.leclubpilates', href: 'https://www.instagram.com/alice.leclubpilates/' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-cocoa/10 pb-6 group"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div>
                    <p className="font-mono text-xs text-sand-dark tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm text-cocoa font-light group-hover:text-mink transition-colors">{item.value}</p>
                  </div>
                  <span className="text-cocoa/20 group-hover:text-mink transition-colors text-lg">→</span>
                </a>
              ))}
              <div className="flex flex-wrap gap-6 pt-2">
                <Link href="/contact" className="text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light">
                  Formulaire de contact →
                </Link>
                <Link href="/profs" className="text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light">
                  Notre équipe →
                </Link>
                <Link href="/blog" className="text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light">
                  Notre blog →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
