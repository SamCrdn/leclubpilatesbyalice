'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface Props {
  dark?: boolean
  className?: string
}

export default function NewsletterForm({ dark = false, className = '' }: Props) {
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
        setMessage('Merci ! Vérifiez votre boîte mail.')
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
      setMessage('Une erreur est survenue. Réessayez.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 text-sm ${dark ? 'text-cream/70' : 'text-cocoa/70'} ${className}`}>
        <CheckCircle2 size={16} className={dark ? 'text-sand' : 'text-sand-dark'} />
        <span className="font-light">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`group ${className}`} noValidate>
      <div className={`flex items-center border-b ${dark ? 'border-cream/20 focus-within:border-cream/60' : 'border-cocoa/20 focus-within:border-cocoa'} transition-colors`}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          aria-label="Adresse e-mail"
          className={`flex-1 bg-transparent py-2.5 text-sm font-light placeholder:opacity-40 focus:outline-none ${
            dark ? 'text-cream placeholder:text-cream' : 'text-cocoa placeholder:text-cocoa'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-label="S'inscrire à la newsletter"
          className={`p-2 transition-opacity ${dark ? 'text-cream/60 hover:text-cream' : 'text-cocoa/60 hover:text-cocoa'} ${
            status === 'loading' ? 'opacity-40 cursor-wait' : ''
          }`}
        >
          <ArrowRight size={16} />
        </button>
      </div>
      {status === 'error' && (
        <p className={`mt-2 text-xs font-light ${dark ? 'text-red-300' : 'text-red-600'}`}>{message}</p>
      )}
    </form>
  )
}
