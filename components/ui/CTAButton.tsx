import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'secondary' | 'ghost'

interface CTAButtonProps {
  href: string
  label: React.ReactNode
  variant?: Variant
  external?: boolean
  icon?: boolean
  className?: string
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

function withUtm(url: string, content: string) {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'site')
  u.searchParams.set('utm_medium', 'cta')
  u.searchParams.set('utm_campaign', 'homepage')
  u.searchParams.set('utm_content', content)
  return u.toString()
}

export function CTAButton({
  href,
  label,
  variant = 'primary',
  external = false,
  icon = true,
  className,
}: CTAButtonProps) {
  const base = variant === 'primary'
    ? 'btn-primary'
    : variant === 'secondary'
    ? 'btn-secondary'
    : 'btn-ghost'

  const classes = twMerge(base, className)
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={classes} {...props}>
        {label}
        {icon && <ArrowRight size={14} />}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {label}
      {icon && <ArrowRight size={14} />}
    </Link>
  )
}

/** Convenience: always points to app.leclubpilates.com/join */
export function SignupCTA({
  label = 'Commencer maintenant',
  variant = 'primary' as Variant,
  className = '',
  utmContent = 'generic',
}) {
  return (
    <CTAButton
      href={withUtm(`${APP_URL}/join`, utmContent)}
      label={label}
      variant={variant}
      external
      className={className}
    />
  )
}
