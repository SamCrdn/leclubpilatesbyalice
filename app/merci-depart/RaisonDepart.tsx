'use client'

import { useEffect } from 'react'

/**
 * Envoie l'événement GA raison_depart une seule fois au chargement.
 * GA se charge après la page (lazyOnload, et seulement si les cookies sont acceptés) :
 * on attend jusqu'à 10 s que gtag existe, sinon on n'envoie rien.
 */
export default function RaisonDepart({ raison }: { raison: string }) {
  useEffect(() => {
    let essais = 0
    const timer = setInterval(() => {
      essais++
      if (window.gtag) {
        try {
          window.gtag?.('event', 'raison_depart', { raison })
        } catch {}
        clearInterval(timer)
      } else if (essais >= 40) {
        clearInterval(timer)
      }
    }, 250)
    return () => clearInterval(timer)
  }, [raison])

  return null
}
