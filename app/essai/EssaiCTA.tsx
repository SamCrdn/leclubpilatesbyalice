'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type Formule = 'annuel' | 'mensuel'
type Position = 'haut' | 'bas' | 'flottant'

/** Envoie l'événement sans jamais bloquer la navigation (GA absent = lien inchangé). */
export function track(formule: Formule, position: Position) {
  try {
    window.gtag?.('event', 'commencer_essai', { formule, position, transport_type: 'beacon' })
  } catch {
    // ne jamais empêcher le clic
  }
}

interface EssaiCTAProps {
  position: Exclude<Position, 'flottant'>
  lienAnnuel: string
  lienMensuel: string
  className?: string
}

export default function EssaiCTA({ position, lienAnnuel, lienMensuel, className = '' }: EssaiCTAProps) {
  return (
    <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
      <a
        href={lienAnnuel}
        onClick={() => track('annuel', position)}
        className="btn-primary w-full max-w-sm whitespace-normal text-center px-6 py-4 leading-snug"
      >
        Commencer mes 7 jours gratuits
      </a>
      <p className="text-xs font-light text-mink leading-relaxed">
        <span className="text-cocoa/80">0 € aujourd&apos;hui, puis 229 €/an (environ 19 €/mois)</span>
        <br />
        Carte demandée · annulable avant la fin de l&apos;essai
      </p>
      <a
        href={lienMensuel}
        onClick={() => track('mensuel', position)}
        className="text-sm font-light text-cocoa/70 underline underline-offset-4 hover:text-cocoa transition-colors"
      >
        ou choisir l&apos;abonnement au mois
      </a>
    </div>
  )
}
