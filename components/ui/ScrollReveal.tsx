'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'))

    const show = (el: HTMLElement) => el.classList.add('in-view')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )

    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      // Si déjà visible au chargement, déclencher immédiatement
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        show(el)
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
