import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'
import NewsletterForm from '@/components/ui/NewsletterForm'

function PinterestIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

const studioLinks = [
  { href: `${APP_URL}/`,    label: 'Nos cours',      external: true },
  { href: `${APP_URL}/join`, label: 'Abonnements',   external: true },
  { href: '/about',          label: 'À propos'                      },
  { href: '/profs',          label: 'Les professeurs'               },
  { href: '/blog',           label: 'Blog & conseils'               },
]

const contactLinks = [
  { href: '/contact',                              label: 'Nous contacter'          },
  { href: 'mailto:contact@leclubpilates.com',      label: 'contact@leclubpilates.com', external: true },
  { href: 'https://www.instagram.com/alice.leclubpilates/', label: '@alice.leclubpilates', external: true },
]

const legalLinks = [
  { href: '/legal/mentions-legales', label: 'Mentions légales' },
  { href: '/legal/confidentialite',  label: 'Confidentialité'  },
  { href: '/legal/cgv',              label: 'CGV'              },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-cocoa text-cream/80">
      <div className="section-wrapper py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <p className="font-satoshi font-medium tracking-[0.2em] uppercase text-sm text-cream mb-4">
              Le Club Pilates
            </p>
            <p className="text-sm font-light leading-relaxed max-w-xs text-cream/50 mb-8">
              Cours de Pilates en ligne accessibles partout, à tout moment. Rejoignez une communauté engagée dans son bien-être.
            </p>
            <div className="flex gap-4 mb-10">
              <a
                href="https://www.instagram.com/alice.leclubpilates/"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream hover:text-cream transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.youtube.com/@leclubpilates"
                aria-label="YouTube"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream hover:text-cream transition-colors"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://pin.it/Li1IQ29l8"
                aria-label="Pinterest"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream hover:text-cream transition-colors"
              >
                <PinterestIcon />
              </a>
            </div>
            <p className="text-xs text-cream/40 uppercase tracking-widest mb-3">Newsletter</p>
            <p className="text-xs font-light text-cream/40 leading-relaxed mb-4">
              Conseils bien-être et nouveaux cours.
            </p>
            <NewsletterForm dark />
          </div>

          {/* Studio */}
          <div>
            <p className="text-xs text-cream/40 uppercase tracking-widest mb-5">Studio</p>
            <ul className="flex flex-col gap-3">
              {studioLinks.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank" rel="noopener noreferrer"
                      className="text-sm font-light text-cream/60 hover:text-cream transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-sm font-light text-cream/60 hover:text-cream transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-cream/40 uppercase tracking-widest mb-5">Contact</p>
            <ul className="flex flex-col gap-3">
              {contactLinks.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank" rel="noopener noreferrer"
                      className="text-sm font-light text-cream/60 hover:text-cream transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-sm font-light text-cream/60 hover:text-cream transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-cream/30 font-light">
            © {new Date().getFullYear()} Le Club Pilates. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-xs text-cream/30 hover:text-cream/60 transition-colors font-light">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
