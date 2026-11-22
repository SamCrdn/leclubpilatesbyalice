'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { LIENS_PAIEMENT } from '@/lib/offres'
import { trackBanniere } from '@/lib/analytics'

// Black Friday 2026 : l'annuel à −30 % la 1re année avec le code, du dimanche 22 novembre
// (avancé le 22, prévu le 24) au lundi 30 novembre 23 h 59 (heure de Paris).
// Le bandeau s'affiche et disparaît tout seul. Aperçu avant le début : ajouter ?apercu-bf à l'URL.
const DEBUT = Date.parse('2026-11-22T00:00:00+01:00')
const FIN = Date.parse('2026-12-01T00:00:00+01:00')
const CODE = 'BLACKFRIDAY26'
const STORAGE_KEY = 'promo-black-friday-2026'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const maintenant = Date.now()
    const apercu = new URLSearchParams(window.location.search).has('apercu-bf')
    const pendantOffre = maintenant >= DEBUT && maintenant < FIN
    if ((pendantOffre || apercu) && !sessionStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  const lien = (position: string, className: string, texte: string) => (
    <a
      href={LIENS_PAIEMENT.annuel}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBanniere('black-friday-2026', position)}
      className={className}
    >
      {texte}
    </a>
  )

  return (
    <div className="relative bg-cocoa text-cream py-2.5 px-10">

      {/* ── Mobile ── */}
      <div className="flex md:hidden items-center justify-center gap-3">
        <div className="flex flex-col items-center leading-tight text-center">
          <span className="text-xs font-medium tracking-wide">🖤 Black Friday : l’année à −30 % + coaching privé</span>
          <span className="text-2xs text-cream/70 tracking-wide">
            Code <span className="font-semibold text-cream select-all">{CODE}</span> · jusqu’au 30/11
          </span>
        </div>
        {lien(
          'mobile',
          'shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-3 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors',
          'J’en profite',
        )}
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <p className="text-xs tracking-wide text-cream/90">
          <span className="font-medium uppercase tracking-widest mr-2 text-cream">🖤 Black Friday</span>
          L’année au Club à −30 % <span className="font-semibold text-cream">+ 30 min de coaching privé</span> avec Alice. Code{' '}
          <span className="font-semibold text-cream select-all">{CODE}</span>, 7 jours d’essai gratuits, jusqu’au 30 novembre.
        </p>
        {lien(
          'desktop',
          'shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-4 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors whitespace-nowrap',
          'J’en profite →',
        )}
      </div>

      {/* Fermer */}
      <button
        onClick={dismiss}
        aria-label="Fermer la bannière"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors"
      >
        <X size={13} />
      </button>
    </div>
  )
}
