import Link from 'next/link'
import { SignupCTA } from '@/components/ui/CTAButton'

const points = [
  {
    title: 'Pour tous les niveaux',
    body: 'Débutant complet ou pratiquant confirmé, chaque cours précise son niveau. Commencez par les fondamentaux et progressez à votre rythme sans jamais vous sentir perdu.',
  },
  {
    title: 'Depuis chez vous',
    body: 'Pas de salle, pas de transport. Un tapis, 20 à 55 minutes et vous êtes prêt. Pratiquez le matin avant le travail, le midi ou le soir, le studio est ouvert 24h/24.',
  },
  {
    title: 'Guidé par de vrais experts',
    body: 'Alice et les professeurs certifiés vous guident avec précision : placement, respiration, corrections. Exactement comme un cours en studio, depuis votre salon.',
  },
  {
    title: 'Des résultats durables',
    body: 'Posture, galbe, souplesse, gestion du stress : le Pilates agit en profondeur. Avec une pratique régulière de 3 séances par semaine, les premières transformations sont visibles en 4 semaines.',
  },
]

export default function OnlinePilatesSection() {
  return (
    <section aria-labelledby="online-pilates-title" className="py-section bg-cream border-t border-cocoa/10">
      <div className="section-wrapper">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Texte gauche */}
          <div>
            <p className="eyebrow mb-6" data-animate>Le studio en ligne</p>
            <h2
              id="online-pilates-title"
              className="font-display font-light text-cocoa leading-tight mb-6"
              data-animate
              style={{ transitionDelay: '100ms' }}
            >
              Cours de Pilates<br />
              <em className="italic text-mink">en ligne</em>
            </h2>
            <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed" data-animate style={{ transitionDelay: '150ms' }}>
              <p>
                Le Club Pilates est un studio de cours de Pilates en ligne accessible par abonnement. Plus de 350 cours disponibles sur web et application mobile, avec de nouveaux contenus ajoutés chaque semaine.
              </p>
              <p>
                Notre approche du Pilates en ligne repose sur la qualité pédagogique : chaque séance est filmée en studio, avec des explications claires sur le placement, la respiration et les sensations à rechercher. Vous n'êtes pas seul face à une vidéo, vous êtes accompagné par un vrai professeur certifié.
              </p>
              <p>
                <Link href="/cours-de-pilates/debutant" className="underline underline-offset-2 decoration-sand hover:text-cocoa transition-colors">Cours de Pilates débutant</Link>,{' '}
                <Link href="/cours-de-pilates/prenatal" className="underline underline-offset-2 decoration-sand hover:text-cocoa transition-colors">programme prénatal</Link>,{' '}
                séances de renforcement intense, stretching doux ou{' '}
                <Link href="/cours-de-pilates/wall" className="underline underline-offset-2 decoration-sand hover:text-cocoa transition-colors">Pilates Wall</Link>{' '}
                il existe une séance pour chaque objectif, chaque niveau et chaque moment de la journée.
              </p>
            </div>
            <div className="mt-10" data-animate style={{ transitionDelay: '200ms' }}>
              <SignupCTA label="Commencer — 7 jours gratuits" utmContent="online-pilates-section" />
            </div>
          </div>

          {/* Points droite — slider mobile / grid desktop */}
          <div className="relative">
            <div className="flex sm:grid sm:grid-cols-2 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0 overscroll-x-contain">
              {points.map((p, i) => (
                <div key={p.title} className="shrink-0 w-[78vw] sm:w-auto snap-start">
                  <div className="w-6 h-px bg-sand mb-4" />
                  <h3 className="font-body font-light text-cocoa text-sm tracking-wide mb-2">{p.title}</h3>
                  <p className="text-xs text-cocoa/50 font-light leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-end pr-2" aria-hidden="true">
              <span className="text-cocoa/40 text-base">→</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
