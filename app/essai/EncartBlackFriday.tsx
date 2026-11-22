'use client'

import { useBlackFriday, BF_CODE } from '@/lib/blackFriday'

// Encart du code Black Friday sur /essai, au-dessus des boutons d'essai (dates : lib/blackFriday.ts).
export default function EncartBlackFriday({ fond = 'clair', className = '' }: { fond?: 'clair' | 'sombre'; className?: string }) {
  const visible = useBlackFriday()

  if (!visible) return null

  const sombre = fond === 'sombre'
  return (
    <p
      className={`rounded-2xl border px-4 py-3 text-sm font-light leading-relaxed ${
        sombre ? 'border-[#C9A86A]/60 bg-black/30 text-cream' : 'border-cocoa/15 bg-chalk text-cocoa'
      } ${className}`}
    >
      🖤 <span className={`font-medium uppercase tracking-widest ${sombre ? 'text-[#D9BC85]' : ''}`}>Black Friday</span> : l’année à −30 % <strong className="font-semibold">+ 30 min de coaching privé</strong> avec Alice. Code{' '}
      <span className={`font-semibold select-all ${sombre ? 'text-[#D9BC85]' : ''}`}>{BF_CODE}</span> à saisir au paiement, jusqu’au 30 novembre.
    </p>
  )
}
