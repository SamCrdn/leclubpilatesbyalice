'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-cream flex items-center">
      <div className="section-wrapper text-center">
        <p
          className="font-display text-[20vw] font-light text-sand/30 leading-none select-none mb-0"
          aria-hidden="true"
        >
          500
        </p>
        <h1 className="font-display text-3xl font-light -mt-4 mb-4">Une erreur est survenue</h1>
        <p className="text-cocoa/60 font-light mb-8 max-w-sm mx-auto">
          Quelque chose s&apos;est mal passé. Veuillez réessayer ou revenir à l&apos;accueil.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={reset} className="btn-primary">Réessayer</button>
          <Link href="/" className="btn-secondary">Retour à l&apos;accueil</Link>
        </div>
      </div>
    </div>
  )
}
