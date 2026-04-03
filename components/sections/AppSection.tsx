import Image from 'next/image'
import { Infinity, CalendarClock, Monitor, Heart, Download, MessageCircle, Video, Gift, X } from 'lucide-react'
import { SignupCTA, CTAButton } from '@/components/ui/CTAButton'

const features = [
  { icon: Infinity,       label: 'Accès illimité au studio en ligne' },
  { icon: CalendarClock,  label: 'Pratique quand tu le souhaites' },
  { icon: Monitor,        label: 'Sur tous tes appareils — mobile, tablette, TV' },
  { icon: Heart,          label: 'Espace membre & listes de lecture favoris' },
  { icon: Download,       label: 'Vidéos téléchargeables pour pratiquer hors-ligne' },
  { icon: MessageCircle,  label: 'Commente et échange sous chaque cours' },
  { icon: Video,          label: 'Cours en live visio chaque mois' },
  { icon: Gift,           label: '7 jours d\'essai gratuit' },
  { icon: X,              label: 'Annulation à tout moment, sans engagement' },
]

export default function AppSection() {
  return (
    <section aria-labelledby="app-title" className="pt-0 pb-24 md:pb-32 bg-white">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Mockup */}
          <div data-animate className="relative w-full aspect-[4/3]">
            <Image
              src="/images/mockup-application-studio-pilates.jpg"
              alt="Application Le Club Pilates sur iPhone"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Texte + features + CTA */}
          <div>
            <p className="eyebrow mb-4" data-animate>Le studio dans ta poche</p>

            <h2 id="app-title" className="mb-6" data-animate style={{ transitionDelay: '100ms' }}>
              Pilates partout,{' '}
              <em className="italic">tout le temps</em>
            </h2>

            <p className="text-cocoa/70 font-light leading-relaxed mb-8" data-animate style={{ transitionDelay: '200ms' }}>
              Sur ton téléphone, ta tablette ou ton ordinateur — ton studio t&apos;accompagne
              partout, à chaque moment de ta journée.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {features.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className="flex items-center gap-3"
                  data-animate
                  style={{ transitionDelay: `${(i + 3) * 60}ms` }}
                >
                  <span className="shrink-0 text-cocoa/40">
                    <Icon size={14} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-light text-cocoa/80">{label}</span>
                </li>
              ))}
            </ul>

            <div data-animate style={{ transitionDelay: '600ms' }}>
              <CTAButton href="https://app.leclubpilates.com/" label="Accéder au studio" external />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
