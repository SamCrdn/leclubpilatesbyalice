'use client'

import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

/** Vidéo de présentation, muette par défaut, avec un bouton pour écouter Alice. */
export default function EssaiVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [son, setSon] = useState(false)

  function basculerSon() {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    // Le son activé, on repart du début pour entendre tout le message
    if (!video.muted) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
    setSon(!video.muted)
  }

  return (
    <div className="relative mx-auto w-[260px] aspect-[9/16] overflow-hidden rounded-3xl bg-cocoa-mid shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-cream/15 md:w-[300px] lg:w-[340px]">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src={src}
        poster={poster || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <button
        type="button"
        onClick={basculerSon}
        aria-pressed={son}
        className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-pill bg-cocoa/60 px-4 py-2 text-xs font-light tracking-wide text-cream backdrop-blur-md transition-colors hover:bg-cocoa/80"
      >
        {son ? <Volume2 size={14} aria-hidden="true" /> : <VolumeX size={14} aria-hidden="true" />}
        {son ? 'Couper le son' : 'Écouter Alice'}
      </button>
    </div>
  )
}
