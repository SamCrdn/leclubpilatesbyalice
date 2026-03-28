import type { Metadata } from 'next'
import ContactForm from './ContactForm'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Nous contacter — Le Club Pilates',
  url: `${siteUrl}/contact`,
  description: 'Contactez l\'équipe du Club Pilates pour toute question sur vos cours, abonnement ou problème technique.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Le Club Pilates',
    url: siteUrl,
    email: 'contact@leclubpilates.com',
    sameAs: ['https://www.instagram.com/alice.leclubpilates/'],
  },
}

export const metadata: Metadata = {
  title: 'Nous contacter — Le Club Pilates | Réponse sous 24h',
  description: 'Une question sur vos cours de Pilates, votre abonnement ou un problème technique ? Contactez l\'équipe du Club Pilates, nous répondons sous 24h.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Nous contacter — Le Club Pilates',
    description: 'Une question ? Contactez l\'équipe du Club Pilates. Réponse garantie sous 24h.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactForm />
    </>
  )
}
