'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ReservationForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Requis'
    if (!form.email.trim())   e.email   = 'Requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.message.trim()) e.message = 'Requis'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: 'Réservation Retraite Ibiza 2026',
          message: form.message,
        }),
      })
      if (res.ok) setStatus('success')
      else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => { const { [e.target.name]: _, ...rest } = er; return rest })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-5 py-10">
        <CheckCircle2 size={32} className="text-sand-dark" />
        <p className="font-display text-3xl font-light text-cocoa">Demande envoyée !</p>
        <p className="text-sm text-cocoa/50 font-light">Nous vous recontacterons dans les plus brefs délais pour confirmer votre réservation.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6" data-animate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="res-name" className="text-xs text-cocoa/40 uppercase tracking-widest">Nom & Prénom</label>
            {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
          </div>
          <input
            id="res-name" name="name" type="text" value={form.name} onChange={handleChange}
            className={`input-base ${errors.name ? 'border-red-300' : ''}`}
            placeholder="Marie Dupont" maxLength={100}
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="res-email" className="text-xs text-cocoa/40 uppercase tracking-widest">Email</label>
            {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
          </div>
          <input
            id="res-email" name="email" type="email" value={form.email} onChange={handleChange}
            className={`input-base ${errors.email ? 'border-red-300' : ''}`}
            placeholder="marie@email.com" maxLength={254}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <label htmlFor="res-message" className="text-xs text-cocoa/40 uppercase tracking-widest">Votre message</label>
          {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
        </div>
        <textarea
          id="res-message" name="message" value={form.message} onChange={handleChange} rows={5}
          className={`input-base resize-none ${errors.message ? 'border-red-300' : ''}`}
          placeholder="Je souhaite réserver une place pour la retraite d'Ibiza…" maxLength={2000}
        />
      </div>

      <div className="pt-1">
        <button type="submit" disabled={status === 'loading'} className="btn-primary">
          {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
          <ArrowRight size={14} />
        </button>
        {status === 'error' && (
          <p className="mt-3 text-xs text-red-400 font-light">
            Une erreur est survenue. Écrivez-nous directement à{' '}
            <a href="mailto:contact@leclubpilates.com" className="underline">contact@leclubpilates.com</a>
          </p>
        )}
      </div>
    </form>
  )
}
