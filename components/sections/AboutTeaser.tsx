import Image from 'next/image'

import { Library, Clock, Monitor, Bookmark, Download, MessageCircle, Video, Gift, ShieldCheck } from 'lucide-react'
import { SignupCTA, CTAButton } from '@/components/ui/CTAButton'

const features = [
  { icon: Library,        label: "Accès illimité au studio en ligne" },
  { icon: Clock,          label: "Pratique quand tu le souhaites" },
  { icon: Monitor,        label: "Visionne sur n'importe quel appareil" },
  { icon: Bookmark,       label: "Espace membre et listes de lecture favoris" },
  { icon: Download,       label: "Télécharge des vidéos pour les faire hors-ligne" },
  { icon: MessageCircle,  label: "Laisse des commentaires" },
  { icon: Video,          label: "Rejoins les cours en live visio" },
  { icon: Gift,           label: "7 jours d'essai gratuit" },
  { icon: ShieldCheck,    label: "Annulation à tout moment" },
]

export default function AboutTeaser() {
  return (
    <section aria-labelledby="about-title" className="py-section bg-white overflow-hidden">
      <div className="section-wrapper">

        {/* En-tête pleine largeur */}
        <div className="mb-10" data-animate>
          <p className="eyebrow mb-4">100% ONLINE</p>
          <h2 id="about-title" className="mb-4">
            Le studio Pilates{' '}
            <em className="italic">digital.</em>
          </h2>
          <p className="text-cocoa/70 font-light leading-relaxed max-w-xl">
            Offre-toi une pause Pilates en te connectant à ton espace membre depuis le web, l'application mobile, ta tablette ou ta TV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Colonne gauche : mockup + badges */}
          <div className="flex flex-col gap-1" data-animate>

            {/* Badges stores */}
            <div className="flex flex-row gap-2">
              <a
                href="https://apps.apple.com/fr/app/le-club-pilates/id6743005979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white pl-3 pr-3.5 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="leading-none">
                  <p className="text-[9px] font-light tracking-wide text-white">Télécharger sur</p>
                  <p className="text-sm font-semibold tracking-tight text-white">App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=tv.uscreen.leclubpilates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white pl-3 pr-3.5 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 23.76c.3.16.64.18.96.07l11.37-6.57-2.55-2.55-9.78 9.05z" fill="#EA4335"/>
                  <path d="M22.54 10.21 19.1 8.26l-2.87 2.87 2.87 2.87 3.48-2.01c.99-.57.99-2.01-.04-2.78z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.83.1 2.44.14 2.13.37L13.96 12.2l2.55-2.55L3.18.24z" fill="#4285F4"/>
                  <path d="M2.13.37C1.74.67 1.5 1.14 1.5 1.7v20.6c0 .56.24 1.03.63 1.33l.05.04L13.96 12.2v-.28L2.13.37z" fill="#34A853"/>
                </svg>
                <div className="leading-none">
                  <p className="text-[9px] font-light tracking-wide text-white">Disponible sur</p>
                  <p className="text-sm font-semibold tracking-tight text-white">Google Play</p>
                </div>
              </a>
            </div>

          <div className="relative overflow-hidden">

            {/* Mockup laptop + phone */}
            <Image
              src="/images/mockup-application-studio-pilates.jpg"
              alt="Interface Le Club Pilates sur laptop et mobile"
              width={900}
              height={650}
              className="w-full h-auto object-contain -mb-8"
              priority
            />

          </div>
          </div>

          {/* Colonne droite : liste + CTA */}
          <div className="flex flex-col justify-center lg:pl-16">

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-sand/30 text-cocoa shrink-0">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-light text-cocoa/80">{label}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div data-animate style={{ transitionDelay: '600ms' }}>
              <CTAButton href="https://app.leclubpilates.com/" label="Accéder au studio" external />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
