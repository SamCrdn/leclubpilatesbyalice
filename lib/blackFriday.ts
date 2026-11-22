'use client'

import { useEffect, useState } from 'react'

// Black Friday 2026 sur /essai : du 22 novembre au 30 novembre 23 h 59 (heure de Paris).
// Encart, fond et prix s'affichent et disparaissent tout seuls. Aperçu hors période : ?apercu-bf
// (Le bandeau du haut des pages a ses propres dates : components/layout/PromoBanner.tsx.)
export const BF_DEBUT = Date.parse('2026-11-22T00:00:00+01:00')
export const BF_FIN = Date.parse('2026-12-01T00:00:00+01:00')
export const BF_CODE = 'BLACKFRIDAY26'

export function useBlackFriday(): boolean {
  const [actif, setActif] = useState(false)
  useEffect(() => {
    const maintenant = Date.now()
    const apercu = new URLSearchParams(window.location.search).has('apercu-bf')
    setActif((maintenant >= BF_DEBUT && maintenant < BF_FIN) || apercu)
  }, [])
  return actif
}
