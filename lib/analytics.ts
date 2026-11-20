declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export type Formule = 'annuel' | 'trimestriel' | 'mensuel'

/** Clic sur « commencer l'essai ». N'empêche jamais la navigation (GA absent = lien inchangé).
 *  formule 'join' = bouton vers la page d'inscription Uscreen (/join), sans formule choisie. */
export function trackEssai(formule: Formule | 'join', position: string) {
  try {
    window.gtag?.('event', 'commencer_essai', { formule, position, transport_type: 'beacon' })
  } catch {
    // ne jamais empêcher le clic
  }
}

/** Clic sur le bandeau promo du haut des pages. Événement séparé de commencer_essai,
 *  pour ne pas changer le calcul du KPI 3 (clics sur les boutons d'essai). */
export function trackBanniere(campagne: string, position: string) {
  try {
    window.gtag?.('event', 'clic_banniere', { campagne, position, transport_type: 'beacon' })
  } catch {
    // ne jamais empêcher le clic
  }
}
