import Link from 'next/link'
import { SignupCTA } from '@/components/ui/CTAButton'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center">
      <div className="section-wrapper text-center">
        <p
          className="font-display text-[20vw] font-light text-sand/30 leading-none select-none mb-0"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="font-display text-3xl font-light -mt-4 mb-4">Page introuvable</h1>
        <p className="text-cocoa/60 font-light mb-8 max-w-sm mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <SignupCTA label="Découvrir les cours" />
          <Link href="/" className="btn-secondary">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  )
}
