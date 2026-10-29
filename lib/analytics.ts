declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export type Formule = 'annuel' | 'trimestriel' | 'mensuel'

/** Clic sur « commencer l'essai ». N'empêche jamais la navigation (GA absent = lien inchangé). */
export function trackEssai(formule: Formule, position: string) {
  try {
    window.gtag?.('event', 'commencer_essai', { formule, position, transport_type: 'beacon' })
  } catch {
    // ne jamais empêcher le clic
  }
}
