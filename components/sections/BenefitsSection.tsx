const benefits = [
  {
    number: '01',
    title: 'Des résultats visibles.',
    body:
      '+ de 350 cours répartis en 17 catégories pour sculpter, renforcer et assouplir ton corps, à ton rythme et où tu veux. Au fil des semaines, retrouve un corps dans lequel tu te sens bien.',
  },
  {
    number: '02',
    title: 'Un bien-être durable.',
    body:
      "Une approche bienveillante et motivante, guidée par de vrais professeurs de Pilates, pour t’accompagner dans une pratique régulière et efficace. Sans pression, avec douceur et motivation, toujours dans la bonne humeur pour te faire aimer le sport.",
  },
  {
    number: '03',
    title: 'Une plateforme claire et intuitive',
    body:
      'Accède facilement à ton espace membre sur le web et sur l’application mobile avec un seul compte. Ajoute tes séances en favoris pour bouger dès que tu en as envie, et pose tes questions au coach directement sous les vidéos.',
  },
  {
    number: '04',
    title: 'Une routine que tu vas adorer !',
    body:
      'On se motive ensemble avec un nouveau challenge chaque semaine, des cours en live et une communauté engagée pour rester motivée et ne jamais abandonner.',
  },
]

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-title" className="py-section bg-chalk">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20" data-animate>
          <p className="eyebrow mb-4">Pourquoi rejoindre le club</p>
          <h2 id="benefits-title" className="text-balance">
            Le Pilates en ligne, enfin <em className="italic">à portée de main</em>
          </h2>
        </div>

        {/* Grid — slider mobile / grid desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0">
          {benefits.map((b, i) => (
            <div
              key={b.number}
              className="group shrink-0 w-[78vw] sm:w-auto snap-start"
              data-animate
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <p className="font-mono text-xs text-sand-dark mb-5">{b.number}</p>

              {/* Divider line */}
              <div className="w-8 h-px bg-sand mb-6 transition-all duration-300 group-hover:w-12" />

              {/* Content */}
              <h3 className="font-display text-xl font-light mb-3">{b.title}</h3>
              <p className="text-sm font-light text-cocoa/60 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
