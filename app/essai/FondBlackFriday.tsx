'use client'

import { useBlackFriday } from '@/lib/blackFriday'

// Fond Black Friday de la bannière de /essai : plus noir, avec « Black Friday » en filigrane très léger.

// Motif horizontal (rien n'est coupé au bord), incliné ensuite en CSS.
const MOTIF = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='180'>
    <g fill='#FFFFFF' fill-opacity='0.11' font-family='Georgia, serif' font-style='italic' font-size='30' letter-spacing='5'>
      <text x='20' y='60'>Black Friday</text>
      <text x='320' y='150'>Black Friday</text>
    </g>
  </svg>`,
)}")`

export default function FondBlackFriday() {
  const visible = useBlackFriday()

  if (!visible) return null

  return (
    <>
      {/* Voile noir chaud par-dessus la vidéo floutée */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0705]/65 via-[#0B0705]/50 to-[#0B0705]/90" aria-hidden="true" />
      {/* Filigrane « Black Friday », incliné */}
      <div
        className="absolute -inset-1/2 -z-10 -rotate-12"
        style={{ backgroundImage: MOTIF, backgroundSize: '600px 180px' }}
        aria-hidden="true"
      />
      {/* Filet doré en bas de la bannière, et lueur dorée en haut à droite */}
      <div className="absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#C9A86A]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-0.5 bg-gradient-to-r from-transparent via-[#C9A86A]/80 to-transparent" aria-hidden="true" />
    </>
  )
}
