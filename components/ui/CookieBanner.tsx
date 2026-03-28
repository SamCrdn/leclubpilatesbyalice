'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 inset-x-0 z-50 bg-cocoa text-cream px-6 py-5 md:py-4 shadow-lg"
    >
      <div className="section-wrapper flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm font-light text-cream/80 flex-1">
          Nous utilisons des cookies pour mesurer l&apos;audience et améliorer votre expérience.{' '}
          <a href="/legal/confidentialite" className="underline underline-offset-2 hover:text-cream transition-colors">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs tracking-widest uppercase font-light text-cream/50 hover:text-cream transition-colors py-2 px-4 border border-cream/20 rounded-pill"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-widest uppercase font-light bg-cream text-cocoa hover:bg-cream/90 transition-colors py-2 px-5 rounded-pill"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
