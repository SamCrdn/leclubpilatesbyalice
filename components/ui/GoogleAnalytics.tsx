'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

// Analytics uniquement sur le vrai site : ni localhost, ni prévisualisations Vercel (*.vercel.app)
const DOMAINES_MESURES = ['www.leclubpilates.com', 'leclubpilates.com']

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    if (!DOMAINES_MESURES.includes(window.location.hostname)) return

    // Consentement déjà enregistré
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      setConsented(true)
    }

    // Réagir immédiatement quand l'utilisateur accepte/refuse dans le banner
    function onConsent(e: Event) {
      setConsented((e as CustomEvent).detail === 'accepted')
    }
    window.addEventListener('cookieConsent', onConsent)
    return () => window.removeEventListener('cookieConsent', onConsent)
  }, [])

  if (!consented) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `}</Script>
    </>
  )
}
