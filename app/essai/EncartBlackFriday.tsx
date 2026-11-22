'use client'

import { useEffect, useState } from 'react'

// Black Friday 2026 sur /essai : même période que le bandeau (components/layout/PromoBanner.tsx).
// S'affiche et disparaît tout seul. Aperçu hors période : ajouter ?apercu-bf à l'URL.
const DEBUT = Date.parse('2026-11-22T00:00:00+01:00')
const FIN = Date.parse('2026-12-01T00:00:00+01:00')
const CODE = 'BLACKFRIDAY26'

export default function EncartBlackFriday({ fond = 'clair', className = '' }: { fond?: 'clair' | 'sombre'; className?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const maintenant = Date.now()
    const apercu = new URLSearchParams(window.location.search).has('apercu-bf')
    setVisible((maintenant >= DEBUT && maintenant < FIN) || apercu)
  }, [])

  if (!visible) return null

  const sombre = fond === 'sombre'
  return (
    <p
      className={`rounded-2xl border px-4 py-3 text-sm font-light leading-relaxed ${
        sombre ? 'border-[#C9A86A]/60 bg-black/30 text-cream' : 'border-cocoa/15 bg-chalk text-cocoa'
      } ${className}`}
    >
      🖤 <span className={`font-medium uppercase tracking-widest ${sombre ? 'text-[#D9BC85]' : ''}`}>Black Friday</span> : l’année à −30 % avec le code{' '}
      <span className={`font-semibold select-all ${sombre ? 'text-[#D9BC85]' : ''}`}>{CODE}</span>, à saisir au paiement. Jusqu’au 30 novembre.
    </p>
  )
}
