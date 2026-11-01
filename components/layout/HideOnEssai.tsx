'use client'

import { usePathname } from 'next/navigation'

// Pages sans menu ni footer
const PAGES_SANS_NAVIGATION = ['/essai', '/merci-depart']

/** Masque son contenu (header, footer) sur /essai et /merci-depart, sans navigation ni sortie. */
export default function HideOnEssai({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (PAGES_SANS_NAVIGATION.includes(pathname)) return null
  return <>{children}</>
}
