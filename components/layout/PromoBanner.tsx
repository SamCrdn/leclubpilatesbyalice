'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const ABONNEMENTS_URL = 'https://app.leclubpilates.com'
const STORAGE_KEY = 'promo-rentree30-2026'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative bg-cocoa text-cream py-2.5 px-10">

      {/* ── Mobile ── */}
      <div className="flex md:hidden items-center justify-center gap-3">
        <span className="text-base">🍂</span>
        <div className="flex flex-col items-center leading-tight">
          <span className="text-xs font-medium tracking-wide">Offre de rentrée de −30%</span>
          <span className="text-2xs text-cream/60 tracking-wide">Code : RENTREE30</span>
        </div>
        <a
          href={ABONNEMENTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-3 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors"
        >
          J'en profite
        </a>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <span className="text-lg">🍂</span>
        <p className="text-xs tracking-wide text-cream/90">
          <span className="font-medium uppercase tracking-widest mr-2 text-cream">Offre de rentrée de −30%</span>
          Code&nbsp;
          <span className="font-semibold tracking-widest text-cream">RENTREE30</span>
        </p>
        <a
          href={ABONNEMENTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-4 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors whitespace-nowrap"
        >
          S'abonner →
        </a>
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
