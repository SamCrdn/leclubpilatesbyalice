import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'
import NewsletterForm from '@/components/ui/NewsletterForm'

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
  { href: 'https://instagram.com/leclubpilates',   label: '@leclubpilates',            external: true },
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
