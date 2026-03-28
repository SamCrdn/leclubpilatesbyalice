import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

export default function HeroSection() {
  return (
    <section
      aria-label="Bienvenue au Club Pilates"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden bg-[#EDE6D8]"
    >
      {/* Video — bg-[#EDE6D8] sert de fond pendant le chargement */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
        aria-hidden="true"
      >
        <source src="/videos/video-hero-pilates.webm" type="video/webm" />
        <source src="/videos/video-hero-pilates.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/20 to-transparent" aria-hidden="true" />

      <div className="section-wrapper relative z-10 w-full">
        <div className="max-w-none">
          <h1
            className="font-display font-light text-cream mb-8 animate-fade-up leading-[1.05]"
            style={{ animationDelay: '350ms' }}
          >
            Transforme ton corps<br />
            avec le <em className="italic">Pilates, depuis chez toi.</em>
          </h1>

          <p
            className="text-cream/80 font-body font-light text-lg mb-10 max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            Des cours de Pilates guidés par des experts, pour sculpter ton corps, te renforcer, retrouver de l&apos;énergie.{' '}
            <br />À ton rythme, sur web et mobile.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '650ms' }}
          >
            <CTAButton href="https://app.leclubpilates.com/join?utm_source=site&utm_medium=cta&utm_campaign=homepage&utm_content=hero" label={<><span className="sm:hidden">7 jours gratuits</span><span className="hidden sm:inline">Commencer — 7 jours gratuits</span></>} external />
            <a
              href="https://app.leclubpilates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-cream text-cream hover:bg-cream hover:text-cocoa"
            >
              Découvrir les cours
            </a>
          </div>

          <p
            className="mt-6 text-xs text-cream/40 font-light tracking-wider uppercase animate-fade-in"
            style={{ animationDelay: '800ms' }}
          >
            Séances entre 5 et 55 min · Challenges chaque semaine · Essai gratuit 7 jours
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-cream/40">
        <span className="text-2xs tracking-[0.25em] uppercase font-mono rotate-90 origin-center translate-x-8">scroll</span>
        <div className="w-px h-16 bg-cream/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-cream/50 animate-[scrollBar_2s_ease_infinite]" />
        </div>
      </div>
    </section>
  )
}
