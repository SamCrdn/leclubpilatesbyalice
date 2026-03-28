import NewsletterForm from '@/components/ui/NewsletterForm'

export default function NewsletterStrip() {
  return (
    <section aria-labelledby="newsletter-title" className="py-16 md:py-20 bg-cocoa">
      <div className="section-wrapper">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow text-cream/40 mb-4" data-animate>Newsletter</p>
          <h2 id="newsletter-title" className="text-cream mb-3" data-animate style={{ transitionDelay: '100ms' }}>
            Conseils, routines &amp; <em className="italic">inspiration</em>
          </h2>
          <p className="text-cream/60 font-light text-sm mb-8" data-animate style={{ transitionDelay: '200ms' }}>
            Reçois chaque semaine nos conseils Pilates, nouvelles séances et offres exclusives. Sans spam, résiliable à tout moment.
          </p>
          <div data-animate style={{ transitionDelay: '300ms' }}>
            <NewsletterForm dark className="max-w-sm mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
