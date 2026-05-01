'use client'

import Script from 'next/script'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'feed-id': string }
    }
  }
}

export default function InstagramSection() {
  return (
    <section aria-labelledby="instagram-title" className="pt-0 pb-section bg-chalk">
      <div className="section-wrapper">

        <div className="text-center mb-12" data-animate>
          <p className="eyebrow mb-4">Rejoins la communauté</p>
          <h2 id="instagram-title">
            Le Club, <em className="italic">au quotidien</em>
          </h2>
          <a
            href="https://www.instagram.com/alice.leclubpilates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-mink hover:text-cocoa transition-colors font-body font-light tracking-widest uppercase"
          >
            @alice.leclubpilates
          </a>
        </div>

        <div data-animate>
          <behold-widget feed-id={process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? 'gsk2W3Na8VY7jC4jc8lG'} />
        </div>

        <div className="text-center mt-10" data-animate>
          <a
            href="https://app.leclubpilates.com/join?utm_source=site&utm_medium=cta&utm_campaign=homepage&utm_content=instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Rejoindre le club — 7 jours gratuits
          </a>
        </div>

      </div>

      <Script
        id="behold-widget"
        strategy="lazyOnload"
        type="module"
        src="https://w.behold.so/widget.js"
      />
    </section>
  )
}
