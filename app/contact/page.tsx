import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Nous contacter',
  description: 'Une question sur vos cours de Pilates, votre abonnement ou un problème technique ? Contactez l\'équipe du Club Pilates, nous répondons sous 24h.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactForm />
}
