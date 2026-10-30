'use client'

import type { AnchorHTMLAttributes } from 'react'
import { trackEssai } from '@/lib/analytics'

interface EssaiLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  position: string
}

/** Lien vers l'essai Uscreen (/join), avec l'événement GA commencer_essai (formule 'join'). */
export default function EssaiLink({ position, ...props }: EssaiLinkProps) {
  return <a {...props} onClick={() => trackEssai('join', position)} />
}
