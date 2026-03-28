import type { Metadata } from 'next'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Le Club Pilates',
  description: 'Conditions générales de vente des abonnements Le Club Pilates.',
  alternates: { canonical: '/legal/cgv' },
}

export default function CGVPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'CGV', href: '/legal/cgv' }]} />

      <section className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="section-wrapper max-w-3xl">
          <p className="eyebrow mb-6">Légal</p>
          <h1 className="font-display font-light text-cocoa mb-4">Conditions Générales de Vente</h1>
          <p className="text-sm text-cocoa/50 font-light mb-12">Dernière mise à jour : mars 2025</p>

          <div className="space-y-10 text-sm text-cocoa/70 font-light leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong className="font-normal text-cocoa">Le Club Pilates</strong> (Alice Parquet) et tout utilisateur souscrivant un abonnement sur la plateforme <strong className="font-normal text-cocoa">leclubpilates.com</strong> ou <strong className="font-normal text-cocoa">app.leclubpilates.com</strong>.
              </p>
              <p className="mt-3">Toute souscription implique l&apos;acceptation pleine et entière des présentes CGV.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">2. Description du service</h2>
              <p>
                Le Club Pilates propose une plateforme de cours de Pilates en ligne comprenant : vidéos de cours à la demande, programmes structurés, cours en live, accès sur web et application mobile, espace membre avec favoris et commentaires.
              </p>
              <p className="mt-3">
                Le contenu peut évoluer dans le temps — de nouvelles séances sont régulièrement ajoutées. Toute modification majeure du service sera communiquée aux abonnés.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">3. Abonnements et tarifs</h2>
              <p className="mb-3">Plusieurs formules d&apos;abonnement sont proposées. Les tarifs sont affichés en euros TTC sur la page de souscription et peuvent être modifiés à tout moment, sans effet sur les abonnements en cours.</p>
              <p>L&apos;accès au service est personnel et non transférable. Un compte correspond à un utilisateur.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">4. Essai gratuit</h2>
              <p>
                Un essai gratuit de 7 jours peut être proposé aux nouveaux membres. À l&apos;issue de cette période, l&apos;abonnement se renouvelle automatiquement sauf résiliation avant la fin de la période d&apos;essai. Aucune facturation n&apos;intervient pendant l&apos;essai.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">5. Paiement et renouvellement</h2>
              <p>
                Le paiement est effectué par carte bancaire via notre prestataire sécurisé <strong className="font-normal text-cocoa">Stripe</strong>. Vos coordonnées bancaires ne sont jamais stockées sur nos serveurs.
              </p>
              <p className="mt-3">
                Les abonnements sont à renouvellement automatique. Le montant est débité à chaque échéance (mensuelle ou annuelle selon la formule choisie). Vous recevez une confirmation par e-mail à chaque renouvellement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">6. Droit de rétractation</h2>
              <p>
                Conformément à l&apos;article L.221-28 du Code de la consommation, <strong className="font-normal text-cocoa">le droit de rétractation de 14 jours ne s&apos;applique pas</strong> aux contenus numériques fournis immédiatement après la souscription, dès lors que vous avez expressément renoncé à ce droit en cochant la case correspondante lors de votre inscription.
              </p>
              <p className="mt-3">
                Si vous n&apos;avez pas accédé aux contenus dans les 14 jours suivant la souscription, vous pouvez exercer votre droit de rétractation en nous contactant à <a href="mailto:leclubpilates@gmail.com" className="underline underline-offset-2 hover:text-cocoa">leclubpilates@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">7. Résiliation</h2>
              <p>
                Vous pouvez résilier votre abonnement à tout moment depuis votre espace membre, sans frais ni justification. La résiliation prend effet à la fin de la période en cours — vous conservez l&apos;accès jusqu&apos;à cette date.
              </p>
              <p className="mt-3">
                Aucun remboursement au prorata ne sera accordé pour la période restante, sauf obligation légale.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">8. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus disponibles sur la plateforme (vidéos, programmes, textes, images, marque) sont la propriété exclusive de Le Club Pilates et protégés par le droit d&apos;auteur.
              </p>
              <p className="mt-3">
                La licence accordée est strictement personnelle, non exclusive et non transférable. Il est interdit de télécharger, copier, redistribuer, revendre ou partager les contenus, sauf dans le cadre d&apos;un usage strictement privé et non commercial.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">9. Responsabilité</h2>
              <p>
                Les cours sont conçus par des professeurs certifiés et à visée bien-être. Il vous appartient d&apos;évaluer votre condition physique avant de pratiquer. Le Club Pilates ne pourra être tenu responsable de tout incident survenant lors de la pratique des cours.
              </p>
              <p className="mt-3">
                Nous nous engageons à maintenir la disponibilité du service au mieux, sans pouvoir garantir une disponibilité ininterrompue. Des interventions de maintenance peuvent occasionner des coupures ponctuelles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">10. Service client</h2>
              <p>
                Pour toute question, réclamation ou demande, contactez-nous à <a href="mailto:leclubpilates@gmail.com" className="underline underline-offset-2 hover:text-cocoa">leclubpilates@gmail.com</a>. Nous répondons dans un délai de 48 heures ouvrées.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">11. Loi applicable et litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux français seront compétents.
              </p>
              <p className="mt-3">
                Conformément à l&apos;article L.612-1 du Code de la consommation, vous pouvez recourir à un médiateur de la consommation en cas de litige non résolu.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
