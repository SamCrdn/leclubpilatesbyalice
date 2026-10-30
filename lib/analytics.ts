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
