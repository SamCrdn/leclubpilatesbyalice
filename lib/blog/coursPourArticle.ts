/** Page cours associée à un article de blog (encadré au milieu de l'article, bloc « À lire » des pages cours). */

export type CoursSlug = 'prenatal' | 'reformer' | 'wall' | 'full-body' | 'dos' | 'abdos' | 'debutant' | 'hub'

export type Cours = {
  slug: CoursSlug
  href: string
  titre: string
  accroche: string
  lien: string
}

export const COURS: Record<CoursSlug, Cours> = {
  prenatal:    { slug: 'prenatal',  href: '/cours-de-pilates/prenatal',  titre: 'Le Pilates prénatal et postnatal', accroche: 'Des séances adaptées à chaque étape de la grossesse et à la reprise après l\'accouchement, guidées pas à pas.', lien: 'Découvrir le programme Mama' },
  reformer:    { slug: 'reformer',  href: '/cours-de-pilates/reformer',  titre: 'Le Pilates Reformer, sans machine', accroche: 'Les exercices du reformer adaptés au tapis, pour l\'efficacité du studio depuis chez toi.', lien: 'Découvrir les cours Reformer' },
  wall:        { slug: 'wall',      href: '/cours-de-pilates/wall',      titre: 'Le Pilates au mur', accroche: 'Des cours au mur, sans matériel, pour renforcer ton corps, ta posture et ta mobilité.', lien: 'Découvrir le Pilates au mur' },
  'full-body': { slug: 'full-body', href: '/cours-de-pilates/full-body', titre: 'Le Pilates full body', accroche: 'Des séances qui travaillent tout le corps en une fois, pour tonifier et renforcer en profondeur.', lien: 'Découvrir le Pilates full body' },
  dos:         { slug: 'dos',       href: '/cours-de-pilates/dos',       titre: 'Le Pilates pour le dos', accroche: 'Des séances douces et sans impact pour soulager le dos, renforcer les lombaires et mieux te tenir.', lien: 'Découvrir le Pilates pour le dos' },
  abdos:       { slug: 'abdos',     href: '/cours-de-pilates/abdos',     titre: 'Le Pilates abdos', accroche: 'Renforcer ta sangle abdominale en profondeur, sans abîmer ton dos, et sans matériel.', lien: 'Découvrir le Pilates abdos' },
  debutant:    { slug: 'debutant',  href: '/cours-de-pilates/debutant',  titre: 'Débuter le Pilates en ligne', accroche: 'Le Programme Pilates pour Débutant : 15 séances guidées sur 4 semaines pour poser les bases.', lien: 'Découvrir le programme débutant' },
  hub:         { slug: 'hub',       href: '/cours-de-pilates',           titre: 'Les cours de Pilates en ligne', accroche: 'Plus de 350 cours en ligne pour tous les niveaux : débutant, dos, prénatal, au mur, full body.', lien: 'Découvrir tous les cours' },
}

// L'ordre compte : la première règle qui correspond l'emporte.
const REGLES: Array<[CoursSlug, RegExp]> = [
  ['hub',       /cadeau/],
  ['prenatal', /pr[ée]natal|postnatal|post-partum|grossesse|enceinte|mama|c[ée]sarienne|diastase|p[ée]rin[ée]e|accouchement|fuites urinaires/],
  ['reformer',  /reformer/],
  ['wall',      /\bmur\b|wall/],
  ['full-body', /full body|sculpt|haut du corps|bas du corps|fessiers|musculation|magic circle/],
  ['abdos',     /abdo|gainage|transverse|ventre|roll up|hundred/],
  ['dos',       /\bdos\b|sciatique|hernie|nuque|cervical|scoliose|lomba|posture/],
  ['debutant',  /d[ée]butant|d[ée]buter|commencer|pour les nuls|principes|respiration|premi[eè]res semaines|erreurs|jamais fait|exercices de base|choisir (son )?programme|\b[456]0 ans\b/],
]

export function coursPourArticle(post: { title?: string; topicSubject?: string | null }): Cours {
  const texte = `${post.title ?? ''} ${post.topicSubject ?? ''}`.toLowerCase()
  const regle = REGLES.find(([, rx]) => rx.test(texte))
  return COURS[regle ? regle[0] : 'hub']
}
