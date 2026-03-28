import type { Metadata } from 'next'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Le Club Pilates',
  description: 'Politique de confidentialité et protection des données personnelles du Club Pilates.',
  alternates: { canonical: '/legal/confidentialite' },
}

export default function ConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Politique de confidentialité', href: '/legal/confidentialite' }]} />

      <section className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="section-wrapper max-w-3xl">
          <p className="eyebrow mb-6">Légal</p>
          <h1 className="font-display font-light text-cocoa mb-4">Politique de confidentialité</h1>
          <p className="text-sm text-cocoa/50 font-light mb-12">Dernière mise à jour : mars 2025</p>

          <div className="space-y-10 text-sm text-cocoa/70 font-light leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">1. Qui sommes-nous ?</h2>
              <p>
                Le Club Pilates, édité par Alice Parquet, exploite la plateforme de cours de Pilates en ligne accessible sur <strong className="font-normal text-cocoa">leclubpilates.com</strong> et <strong className="font-normal text-cocoa">app.leclubpilates.com</strong>. Nous sommes responsables du traitement de vos données personnelles au sens du Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="mt-3">
                Pour toute question relative à vos données : <a href="mailto:leclubpilates@gmail.com" className="underline underline-offset-2 hover:text-cocoa">leclubpilates@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">2. Données collectées et finalités</h2>
              <p className="mb-4">Nous collectons uniquement les données strictement nécessaires à la fourniture de nos services :</p>
              <div className="space-y-4">
                <div className="pl-4 border-l border-sand">
                  <p className="font-normal text-cocoa mb-1">Données d&apos;inscription</p>
                  <p>Nom, prénom, adresse e-mail, mot de passe (chiffré). Utilisées pour créer et gérer votre compte membre.</p>
                </div>
                <div className="pl-4 border-l border-sand">
                  <p className="font-normal text-cocoa mb-1">Données de facturation</p>
                  <p>Informations de paiement traitées par notre prestataire sécurisé (Stripe). Nous ne stockons pas vos numéros de carte bancaire.</p>
                </div>
                <div className="pl-4 border-l border-sand">
                  <p className="font-normal text-cocoa mb-1">Données de navigation</p>
                  <p>Adresse IP, type de navigateur, appareil, pages visitées, durée des sessions. Collectées via cookies d&apos;analyse pour améliorer nos services.</p>
                </div>
                <div className="pl-4 border-l border-sand">
                  <p className="font-normal text-cocoa mb-1">Communications</p>
                  <p>Adresse e-mail pour l&apos;envoi de la newsletter et des notifications liées à votre abonnement, sous réserve de votre consentement.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">3. Bases légales du traitement</h2>
              <ul className="space-y-2 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Exécution du contrat :</strong> gestion de votre compte, accès aux cours, facturation.</li>
                <li><strong className="font-normal text-cocoa">Consentement :</strong> envoi de la newsletter et communications marketing.</li>
                <li><strong className="font-normal text-cocoa">Intérêt légitime :</strong> amélioration de nos services, sécurité du site, statistiques anonymes.</li>
                <li><strong className="font-normal text-cocoa">Obligation légale :</strong> conservation des données de facturation (10 ans selon la loi française).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">4. Durée de conservation</h2>
              <ul className="space-y-2 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Données de compte :</strong> conservées pendant la durée de votre abonnement, puis supprimées dans les 30 jours suivant la clôture du compte.</li>
                <li><strong className="font-normal text-cocoa">Données de facturation :</strong> 10 ans (obligation légale comptable).</li>
                <li><strong className="font-normal text-cocoa">Données de navigation :</strong> 13 mois maximum.</li>
                <li><strong className="font-normal text-cocoa">Newsletter :</strong> jusqu&apos;à désinscription.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">5. Partage des données</h2>
              <p className="mb-3">Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec :</p>
              <ul className="space-y-2 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Stripe</strong> — traitement des paiements</li>
                <li><strong className="font-normal text-cocoa">Vercel</strong> — hébergement du site</li>
                <li><strong className="font-normal text-cocoa">Google Analytics</strong> — statistiques anonymisées (si vous avez accepté les cookies)</li>
                <li><strong className="font-normal text-cocoa">Brevo</strong> — envoi des e-mails et newsletters</li>
              </ul>
              <p className="mt-3">Ces prestataires sont soumis à des obligations de confidentialité strictes et ne peuvent utiliser vos données qu&apos;aux fins pour lesquelles elles leur sont transmises.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">6. Transferts hors Union européenne</h2>
              <p>
                Certains de nos prestataires (Stripe, Vercel, Google) sont établis aux États-Unis. Ces transferts sont encadrés par les garanties appropriées (clauses contractuelles types de la Commission européenne ou certification Privacy Shield successeur).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">7. Cookies</h2>
              <p className="mb-3">Nous utilisons les cookies suivants :</p>
              <ul className="space-y-2 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Cookies essentiels :</strong> nécessaires au fonctionnement du site (session, panier). Aucun consentement requis.</li>
                <li><strong className="font-normal text-cocoa">Cookies analytiques :</strong> Google Analytics pour comprendre comment vous utilisez le site. Activés uniquement avec votre consentement.</li>
              </ul>
              <p className="mt-3">Vous pouvez gérer vos préférences de cookies à tout moment via la bannière de consentement.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">8. Vos droits</h2>
              <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="space-y-2 pl-4 border-l border-sand">
                <li><strong className="font-normal text-cocoa">Droit d&apos;accès :</strong> obtenir une copie de vos données.</li>
                <li><strong className="font-normal text-cocoa">Droit de rectification :</strong> corriger des données inexactes.</li>
                <li><strong className="font-normal text-cocoa">Droit à l&apos;effacement :</strong> demander la suppression de vos données.</li>
                <li><strong className="font-normal text-cocoa">Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
                <li><strong className="font-normal text-cocoa">Droit d&apos;opposition :</strong> vous opposer au traitement pour des motifs légitimes.</li>
                <li><strong className="font-normal text-cocoa">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment (ex : désinscription newsletter).</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à <a href="mailto:leclubpilates@gmail.com" className="underline underline-offset-2 hover:text-cocoa">leclubpilates@gmail.com</a>. Nous répondons dans un délai d&apos;un mois. En cas de réponse insatisfaisante, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-cocoa">CNIL</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">9. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement SSL/TLS, accès restreint aux données, mots de passe hashés. Aucun système n&apos;est infaillible, mais nous faisons tout notre possible pour minimiser les risques.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-light text-cocoa mb-4">10. Modifications</h2>
              <p>
                Cette politique peut être mise à jour. Tout changement significatif vous sera notifié par e-mail ou via une bannière sur le site. La date de dernière mise à jour est indiquée en haut de cette page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
