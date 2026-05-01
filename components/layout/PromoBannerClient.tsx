'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export type BannerData = {
  active: boolean
  emoji?: string
  line1?: string
  line2?: string
  ctaLabel?: string
  href?: string
  storageKey?: string
}

export default function PromoBannerClient({ banner }: { banner: BannerData }) {
  const [visible, setVisible] = useState(false)
  const key = banner.storageKey ?? 'promo-banner'

  useEffect(() => {
    if (banner.active && !sessionStorage.getItem(key)) setVisible(true)
  }, [banner.active, key])

  function dismiss() {
    sessionStorage.setItem(key, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative bg-cocoa text-cream py-2.5 px-10">

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-center gap-3">
        {banner.emoji && <span className="text-base">{banner.emoji}</span>}
        <div className="flex flex-col items-center leading-tight">
          <span className="text-xs font-medium tracking-wide">{banner.line1}</span>
          {banner.line2 && <span className="text-2xs text-cream/60 tracking-wide">{banner.line2}</span>}
        </div>
        {banner.ctaLabel && banner.href && (
          <a
            href={banner.href}
            className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-3 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors"
          >
            {banner.ctaLabel}
          </a>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {banner.emoji && <span className="text-lg">{banner.emoji}</span>}
        <p className="text-xs tracking-wide text-cream/90">
          {banner.line1 && <span className="font-medium uppercase tracking-widest mr-2 text-cream">{banner.line1}</span>}
          {banner.line2}
        </p>
        {banner.ctaLabel && banner.href && (
          <a
            href={banner.href}
            className="shrink-0 bg-cream text-cocoa text-2xs tracking-widest uppercase px-4 py-1.5 rounded-pill font-light hover:bg-cream/90 transition-colors whitespace-nowrap"
          >
            {banner.ctaLabel} →
          </a>
        )}
      </div>

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
