import type { Metadata } from 'next'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Mentions légales — Le Club Pilates',
  description: 'Mentions légales du site leclubpilates.com',
  alternates: { canonical: '/legal/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Mentions légales', href: '/legal/mentions-legales' }]} />

      <section className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="section-wrapper max-w-3xl">
          <p className="eyebrow mb-6">Légal</p>
          <h1 className="font-display font-light text-cocoa mb-12">Mentions légales</h1>

          <div className="space-y-10 text-sm text-cocoa/70 font-light leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">1. Éditeur du site</h2>
              <p>Le site <strong className="font-normal text-cocoa">leclubpilates.com</strong> est édité par :</p>
              <ul className="mt-3 space-y-1.5 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Raison sociale :</strong> Le Club Pilates</li>
                <li><strong className="font-normal text-cocoa">Responsable de publication :</strong> Alice Parquet</li>
                <li><strong className="font-normal text-cocoa">SIRET :</strong> [À compléter]</li>
                <li><strong className="font-normal text-cocoa">Siège social :</strong> [À compléter]</li>
                <li><strong className="font-normal text-cocoa">Email :</strong> <a href="mailto:leclubpilates@gmail.com" className="underline underline-offset-2 hover:text-cocoa">leclubpilates@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">2. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul className="mt-3 space-y-1.5 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Société :</strong> Vercel Inc.</li>
                <li><strong className="font-normal text-cocoa">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
                <li><strong className="font-normal text-cocoa">Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-cocoa">vercel.com</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos, graphismes) sont la propriété exclusive de Le Club Pilates ou de leurs auteurs respectifs, et sont protégés par le droit d&apos;auteur en vigueur en France.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">4. Responsabilité</h2>
              <p>
                Le Club Pilates s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
              </p>
              <p className="mt-3">
                Les contenus pédagogiques (cours de Pilates) sont fournis à titre d&apos;information et de pratique sportive. Il est recommandé de consulter un professionnel de santé avant de débuter toute activité physique, notamment en cas de blessure ou de condition médicale particulière.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">5. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers des sites externes. Le Club Pilates n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">6. Données personnelles</h2>
              <p>
                La collecte et le traitement de vos données personnelles sont décrits dans notre{' '}
                <a href="/legal/confidentialite" className="underline underline-offset-2 hover:text-cocoa">Politique de confidentialité</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <p className="text-xs text-cocoa/40 pt-4 border-t border-sand/40">Dernière mise à jour : mars 2025</p>

          </div>
        </div>
      </section>
    </>
  )
}
