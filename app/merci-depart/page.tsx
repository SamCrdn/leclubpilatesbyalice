import type { Metadata } from 'next'
import RaisonDepart from './RaisonDepart'

// Valeurs acceptées pour ?raison= (lien envoyé dans l'email de résiliation)
const RAISONS = ['temps', 'prix', 'pause', 'contenu', 'autre'] as const
type Raison = (typeof RAISONS)[number]

export const metadata: Metadata = {
  title: 'Merci',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

type Props = { searchParams: Promise<{ raison?: string | string[] }> }

export default async function MerciDepartPage({ searchParams }: Props) {
  const { raison: valeur } = await searchParams
  const raison = RAISONS.find((r) => r === valeur) as Raison | undefined

  return (
    <div className="flex min-h-screen flex-col bg-cocoa text-cream">
      {raison && <RaisonDepart raison={raison} />}

      {/* Logo, sans lien */}
      <p className="mx-auto w-full max-w-6xl px-6 pt-5 text-center font-body font-medium tracking-[0.2em] uppercase text-sm text-cream/90 md:px-10 lg:pt-10 lg:text-left">
        Le Club Pilates
      </p>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 pb-24 text-center md:max-w-xl">
        <h1 className="font-display font-light text-[2.5rem] leading-[1.05] text-cream text-balance md:text-5xl lg:text-[4.25rem]">
          Merci, c&apos;est noté 💛
        </h1>
        {raison === 'autre' && (
          <p className="mt-5 font-light text-cream/85 text-balance md:text-lg">
            Tu veux m&apos;en dire plus ? Réponds simplement à l&apos;email, je lis tout.
          </p>
        )}
        <p className="mt-5 font-light text-cream/85 text-balance md:text-lg">
          Si tu changes d&apos;avis, ton espace t&apos;attend.
        </p>
        <a
          href="https://app.leclubpilates.com"
          className="mt-10 text-xs tracking-[0.15em] uppercase font-light text-cream/60 underline underline-offset-4 transition-colors hover:text-cream"
        >
          Retrouver mon espace
        </a>
      </main>
    </div>
  )
}
