'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const RETRAITE_URL = '/retraite'
const STORAGE_KEY = 'promo-retraite-ibiza-2026'

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
        <span className="text-base">☀️</span>
        <div className="flex flex-col items-center leading-tight">
          <span className="text-xs font-medium tracking-wide">Retraite Pilates · Ibiza</span>
          <span className="text-2xs text-cream/60 tracking-wide">Juin 2026 · Places limitées</span>
        </div>
        <a
          href={RETRAITE_URL}
          className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-3 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors"
        >
          Découvrir
        </a>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <span className="text-lg">☀️</span>
        <p className="text-xs tracking-wide text-cream/90">
          <span className="font-medium uppercase tracking-widest mr-2 text-cream">Retraite Pilates</span>
          Ibiza · Juin 2026
          <span className="mx-2 opacity-40">·</span>
          Places limitées
        </p>
        <a
          href={RETRAITE_URL}
          className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-4 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors whitespace-nowrap"
        >
          Découvrir la retraite →
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
