import { SignupCTA } from '@/components/ui/CTAButton'
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function CTABanner() {
  return (
    <section aria-labelledby="cta-title" className="pt-section pb-12 md:pb-16 bg-cocoa relative overflow-hidden">
      {/* Decorative background text */}
      <p
        className="absolute inset-0 flex items-center justify-center font-display text-[20vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight"
        aria-hidden="true"
      >
        pilates
      </p>

      <div className="section-wrapper relative z-10 text-center">
        <p className="eyebrow text-cream/40 mb-6" data-animate>
          Rejoins-nous
        </p>

        <h2
          id="cta-title"
          className="text-cream mb-6 mx-auto md:max-w-none"
          data-animate
          style={{ transitionDelay: '100ms' }}
        >
          Commence ta <em className="italic">transformation</em> aujourd&apos;hui
        </h2>

        <p
          className="text-cream/60 font-light mb-10 mx-auto md:max-w-none"
          data-animate
          style={{ transitionDelay: '200ms' }}
        >
          Rejoins +1 000 femmes qui ont déjà choisi de prendre soin d&apos;elles.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-animate
          style={{ transitionDelay: '300ms' }}
        >
          <SignupCTA
            label="Essai gratuit 7 jours"
            className="bg-cream text-cocoa hover:bg-cream/90"
            utmContent="ctabanner"
          />
          <a
            href="https://app.leclubpilates.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-cream/40 text-cream hover:bg-cream/10 hover:border-cream"
          >
            Explorer les cours
          </a>
        </div>

        <div
          className="mt-10 pt-10 border-t border-cream/10"
          data-animate
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-xs text-cream/40 tracking-widest uppercase mb-3">Newsletter</p>
          <p className="text-cream/60 font-light text-sm mb-5">
            Conseils Pilates, nouvelles séances &amp; offres exclusives — chaque semaine dans ta boîte mail.
          </p>
          <NewsletterForm dark className="max-w-sm mx-auto" />
        </div>

      </div>
    </section>
  )
}
