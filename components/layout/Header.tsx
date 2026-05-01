'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useSelectedLayoutSegments } from 'next/navigation'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

const coursItems = [
  { href: '/cours-de-pilates',           label: 'Tous les cours' },
  { href: '/cours-de-pilates/debutant',  label: 'Débutant' },
  { href: '/cours-de-pilates/dos',       label: 'Pilates & dos' },
  { href: '/cours-de-pilates/prenatal',  label: 'Prénatal' },
  { href: '/cours-de-pilates/wall',      label: 'Pilates Wall' },
  { href: '/cours-de-pilates/full-body', label: 'Full Body' },
  { href: '/cours-de-pilates/reformer',  label: 'Reformer' },
]

const navLinks = [
  { href: 'https://app.leclubpilates.com/join', label: 'Abonnements', external: true },
  { href: '/about',                             label: 'Le Studio'                   },
  { href: '/profs',                             label: 'Les Profs'                   },
  { href: '/retraite',                          label: 'Retraite'                    },
  { href: '/contact',                           label: 'Contact'                     },
]

// Pages dont le hero est sombre (image/vidéo) — le header peut rester transparent avec texte crème
const DARK_HERO_PAGES = new Set(['', 'about'])

export default function Header() {
  const segments = useSelectedLayoutSegments()
  const hasDarkHero = DARK_HERO_PAGES.has(segments[0] ?? '')

  const [open, setOpen] = useState(false)
  const [coursOpen, setCoursOpen] = useState(false)
  const [coursOpenMobile, setCoursOpenMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const coursRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Focus trap + ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        hamburgerRef.current?.focus()
        return
      }
      if (e.key === 'Tab' && open && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Focus first element when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>('a, button')
      first?.focus()
    }
  }, [open])

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50">
      <header
        ref={navRef}
        role="banner"
        className={`transition-all duration-500 ${
          scrolled || !hasDarkHero ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <span className={`font-satoshi font-medium tracking-[0.2em] uppercase text-sm whitespace-nowrap transition-colors duration-500 ${scrolled || !hasDarkHero ? 'text-cocoa' : 'text-cream'}`}>
                Le Club Pilates
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">

              {/* Dropdown Cours */}
              <div
                ref={coursRef}
                className="relative"
                onMouseEnter={() => setCoursOpen(true)}
                onMouseLeave={() => setCoursOpen(false)}
              >
                <button className={`flex items-center gap-1 text-xs tracking-[0.15em] uppercase transition-colors duration-300 font-body font-light ${scrolled || !hasDarkHero ? 'text-cocoa/70 hover:text-cocoa' : 'text-cream/80 hover:text-cream'}`}>
                  Cours <ChevronDown size={12} className={`transition-transform duration-200 ${coursOpen ? 'rotate-180' : ''}`} />
                </button>
                {coursOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-cream border border-cocoa/10 shadow-lg rounded-sm py-2 min-w-[180px]">
                      {coursItems.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-2.5 text-xs tracking-[0.12em] uppercase font-light text-cocoa/60 hover:text-cocoa hover:bg-sand/20 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map(({ href, label, external }) => external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 font-body font-light ${scrolled || !hasDarkHero ? 'text-cocoa/70 hover:text-cocoa' : 'text-cream/80 hover:text-cream'}`}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 font-body font-light ${scrolled || !hasDarkHero ? 'text-cocoa/70 hover:text-cocoa' : 'text-cream/80 hover:text-cream'}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`${APP_URL}/sign_in`}
                className={`text-xs tracking-[0.15em] uppercase transition-colors font-body font-light ${scrolled || !hasDarkHero ? 'text-cocoa/70 hover:text-cocoa' : 'text-cream/80 hover:text-cream'}`}
              >
                Connexion
              </a>
              <a href={`${APP_URL}/join?utm_source=site&utm_medium=nav&utm_campaign=homepage&utm_content=header`} className="btn-primary py-2.5 px-6 text-xs">
                Essai gratuit
              </a>
            </div>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`md:hidden p-2 transition-colors duration-500 ${scrolled || !hasDarkHero ? 'text-cocoa' : 'text-cream'}`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>
      </div>

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-cream flex flex-col pt-20 px-6 pb-10 transition-transform duration-400 ease-expo md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-6 mt-16">

          {/* Cours accordion mobile */}
          <div>
            <button
              onClick={() => setCoursOpenMobile(!coursOpenMobile)}
              className="flex items-center gap-2 font-display text-3xl font-light text-cocoa"
            >
              Cours <ChevronDown size={18} className={`transition-transform duration-200 ${coursOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {coursOpenMobile && (
              <div className="flex flex-col gap-3 mt-4 pl-4 border-l border-sand">
                {coursItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-light text-cocoa/60 hover:text-cocoa transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(({ href, label, external }, i) => external ? (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-light text-cocoa"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {label}
            </a>
          ) : (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-light text-cocoa"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <a href={`${APP_URL}/join?utm_source=site&utm_medium=nav&utm_campaign=homepage&utm_content=mobile-menu`} className="btn-primary w-full text-center">
            7 jours gratuits
          </a>
          <a
            href={`${APP_URL}/sign_in`}
            className="text-center text-xs tracking-[0.15em] uppercase text-cocoa/60 font-body font-light py-3"
          >
            Déjà membre ? Connexion
          </a>
        </div>
      </div>
    </>
  )
}
