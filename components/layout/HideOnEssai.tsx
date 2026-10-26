'use client'

import { usePathname } from 'next/navigation'

/** Masque son contenu (header, footer) sur la page /essai, sans navigation ni sortie. */
export default function HideOnEssai({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/essai') return null
  return <>{children}</>
}
