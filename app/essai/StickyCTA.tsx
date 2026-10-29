'use client'

import { useEffect, useState } from 'react'
import { track } from './EssaiCTA'

/**
 * Bouton fixe en bas d'écran : visible une fois le bouton du haut dépassé,
 * masqué quand le bloc d'action du bas est à l'écran.
 */
export default function StickyCTA({ lienAnnuel }: { lienAnnuel: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const haut = document.getElementById('cta-haut')
    const bas = document.getElementById('cta-bas')
    if (!haut || !bas) return

    let hautDepasse = false
    let basVisible = false
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === haut) hautDepasse = !e.isIntersecting && e.boundingClientRect.top < 0
        if (e.target === bas) basVisible = e.isIntersecting
      }
      setVisible(hautDepasse && !basVisible)
    })
    observer.observe(haut)
    observer.observe(bas)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-cocoa/10 bg-cream/95 px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 ease-smooth ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-1.5">
        <a
          href={lienAnnuel}
          tabIndex={visible ? 0 : -1}
          onClick={() => track('annuel', 'flottant')}
          className="btn-primary w-full whitespace-normal text-center px-6 py-3.5 leading-snug"
        >
          Commencer mes 7 jours gratuits
        </a>
        <p className="text-2xs font-light text-mink">0 € aujourd&apos;hui · annulable avant la fin de l&apos;essai</p>
      </div>
    </div>
  )
}
