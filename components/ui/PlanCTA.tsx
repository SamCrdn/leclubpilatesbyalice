'use client'

import { ArrowRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { trackEssai, type Formule } from '@/lib/analytics'

interface PlanCTAProps {
  href: string
  formule: Formule
  position: string
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

/** Bouton vers le paiement d'une formule Uscreen, avec l'événement GA commencer_essai. */
export default function PlanCTA({ href, formule, position, label = "Commencer l'essai", variant = 'primary', className }: PlanCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEssai(formule, position)}
      className={twMerge(variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)}
    >
      {label}
      <ArrowRight size={14} />
    </a>
  )
}
