'use client'

import { trackSeanceOfferte } from '@/lib/analytics'

export default function SeanceOfferteLien({ href }: { href: string }) {
  return (
    <a
      href={href}
      onClick={() => trackSeanceOfferte('essai')}
      className="text-sm font-light text-cocoa/70 underline underline-offset-4 hover:text-cocoa"
    >
      Pas prête ? Reçois une séance offerte
    </a>
  )
}
