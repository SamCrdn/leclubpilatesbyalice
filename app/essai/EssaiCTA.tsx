'use client'

import { trackEssai } from '@/lib/analytics'

type Formule = 'annuel' | 'mensuel'
type Position = 'haut' | 'bas' | 'flottant'

export function track(formule: Formule, position: Position) {
  trackEssai(formule, position)
}

interface EssaiCTAProps {
  position: Exclude<Position, 'flottant'>
  lienAnnuel: string
  lienMensuel: string
  fond?: 'clair' | 'sombre'
  className?: string
}

export default function EssaiCTA({ position, lienAnnuel, lienMensuel, fond = 'clair', className = '' }: EssaiCTAProps) {
  const sombre = fond === 'sombre'
  return (
    <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
      <a
        href={lienAnnuel}
        onClick={() => track('annuel', position)}
        className={`btn-primary w-full max-w-sm whitespace-normal text-center px-6 py-4 leading-snug ${sombre ? 'bg-cream text-cocoa hover:bg-sand' : ''}`}
      >
        Commencer mes 7 jours gratuits
      </a>
      <p className={`text-xs font-light leading-relaxed ${sombre ? 'text-cream/75' : 'text-mink'}`}>
        <span className={`text-sm ${sombre ? 'text-cream' : 'text-cocoa/80'}`}>0 € aujourd&apos;hui, puis 229 €/an (environ 19 €/mois)</span>
        <br />
        Carte demandée · annulable avant la fin de l&apos;essai
      </p>
      <a
        href={lienMensuel}
        onClick={() => track('mensuel', position)}
        className={`text-sm font-light underline underline-offset-4 transition-colors ${sombre ? 'text-cream/75 hover:text-cream' : 'text-cocoa/70 hover:text-cocoa'}`}
      >
        ou choisir l&apos;abonnement au mois
      </a>
    </div>
  )
}
