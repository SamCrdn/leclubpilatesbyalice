'use client'

import Script from 'next/script'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': { 'feed-id': string }
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
          <behold-widget feed-id="gsk2W3Na8VY7jC4jc8lG" />
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
