import type { Formule } from './analytics'

/** Liens de paiement Uscreen, un par formule (essai gratuit 7 jours inclus). */
export const LIENS_PAIEMENT: Record<Formule, string> = {
  annuel:      'https://app.leclubpilates.com/r/buy/fc127c46-d962-47ff-94cb-2151870a3f2a?o=198383',
  trimestriel: 'https://app.leclubpilates.com/checkout/new?o=198385',
  mensuel:     'https://app.leclubpilates.com/r/buy/faad11e0-c222-4745-b434-06a089c4f372?o=198380',
}
