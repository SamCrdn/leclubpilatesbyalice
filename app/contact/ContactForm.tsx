'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim())                                     e.name    = 'Requis'
    if (!form.email.trim())                                    e.email   = 'Requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'Email invalide'
    if (!form.subject.trim())                                  e.subject = 'Requis'
    if (!form.message.trim())                                  e.message = 'Requis'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    if (!FORM_ID) { setStatus('error'); return }
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => { const { [e.target.name]: _, ...rest } = er; return rest })
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact', href: '/contact' }]} />

      {/* ── HEADER FONCÉ ── */}
      <section className="bg-cocoa pt-36 pb-16 min-h-[380px] flex flex-col justify-end relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[20vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight" aria-hidden="true">
          contact
        </p>
        <div className="section-wrapper relative z-10">
          <p className="eyebrow text-cream/40 mb-6" data-animate>Contact</p>
          <h1 className="font-display font-light text-cream leading-[0.95] mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            <em className="italic text-cream/50">Parlons.</em>
          </h1>
          <div className="flex gap-8 text-sm font-light" data-animate style={{ transitionDelay: '200ms' }}>
            <a href="mailto:contact@leclubpilates.com" className="text-cream/30 hover:text-cream/60 transition-colors">
              contact@leclubpilates.com
            </a>
            <a href="https://www.instagram.com/alice.leclubpilates/" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-cream/60 transition-colors">
              @alice.leclubpilates
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section className="py-20 bg-cream">
        <div className="section-wrapper max-w-3xl">

          {status === 'success' ? (
            <div className="flex flex-col gap-5 py-16" data-animate>
              <CheckCircle2 size={32} className="text-sand-dark" />
              <p className="font-display text-3xl font-light text-cocoa">Message envoyé !</p>
              <p className="text-sm text-cocoa/50 font-light">Nous vous répondrons dans les 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8" data-animate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="name" className="text-xs text-cocoa/40 uppercase tracking-widest">Nom & Prénom</label>
                    {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                  </div>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                    className={`input-base ${errors.name ? 'border-red-300' : ''}`} placeholder="Marie Dupont" maxLength={100} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="email" className="text-xs text-cocoa/40 uppercase tracking-widest">Email</label>
                    {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                  </div>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    className={`input-base ${errors.email ? 'border-red-300' : ''}`} placeholder="marie@email.com" maxLength={254} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="subject" className="text-xs text-cocoa/40 uppercase tracking-widest">Sujet</label>
                  {errors.subject && <span className="text-xs text-red-400">{errors.subject}</span>}
                </div>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange} className={`input-base ${errors.subject ? 'border-red-300' : ''}`}>
                  <option value="">Choisir un sujet...</option>
                  <option value="abonnement">Question sur un abonnement</option>
                  <option value="technique">Problème technique</option>
                  <option value="programme">Aide pour choisir un programme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="message" className="text-xs text-cocoa/40 uppercase tracking-widest">Message</label>
                  {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                </div>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={6}
                  className={`input-base resize-none ${errors.message ? 'border-red-300' : ''}`}
                  placeholder="Bonjour, je souhaitais..." maxLength={5000} />
              </div>

              <div className="pt-2">
                <button type="submit" disabled={status === 'loading'} className="btn-primary">
                  {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                  <ArrowRight size={14} />
                </button>
                {status === 'error' && (
                  <p className="mt-3 text-xs text-red-400 font-light">Une erreur est survenue. Réessayez ou écrivez-nous directement.</p>
                )}
              </div>

            </form>
          )}

        </div>
      </section>
    </>
  )
}
