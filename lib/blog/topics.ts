export type Topic = {
  subject: string
  category: 'Pilates' | 'Bien-être' | 'Conseils' | 'Nutrition'
  length: 'short' | 'long'
  internalLinks?: Array<{ label: string; url: string }>
}

// Liens internes vers les pages du site (les pages cours convertissent mieux que le blog)
const SITE = 'https://www.leclubpilates.com'
const L = {
  hub:      { label: 'nos cours de Pilates en ligne', url: `${SITE}/cours-de-pilates` },
  debutant: { label: 'Pilates pour débutantes',       url: `${SITE}/cours-de-pilates/debutant` },
  dos:      { label: 'Pilates pour le dos',           url: `${SITE}/cours-de-pilates/dos` },
  prenatal: { label: 'Pilates prénatal et postnatal', url: `${SITE}/cours-de-pilates/prenatal` },
  wall:     { label: 'Pilates au mur',                url: `${SITE}/cours-de-pilates/wall` },
  fullBody: { label: 'Pilates full body',             url: `${SITE}/cours-de-pilates/full-body` },
  reformer: { label: 'Pilates Reformer en ligne',     url: `${SITE}/cours-de-pilates/reformer` },
  abdos:    { label: 'Pilates abdos',                 url: `${SITE}/cours-de-pilates/abdos` },
  livre:    { label: 'le livre d\'Alice sur le Pilates au mur', url: `${SITE}/livre` },
}

export const TOPICS: Topic[] = [
  // ── GÉNÉRAL / TENDANCES ────────────────────────────────────────────────

  { subject: 'Pilates vs Yoga : les vraies différences et comment choisir', category: 'Pilates', length: 'long' },
  { subject: 'Ce que le Pilates change dans ton corps après 30 jours', category: 'Pilates', length: 'short' },
  { subject: 'Pilates et santé mentale : ce que dit la science', category: 'Bien-être', length: 'long' },
  { subject: 'Pourquoi le Pilates est la méthode fitness la plus populaire en ce moment', category: 'Pilates', length: 'short' },
  { subject: 'Pilates et douleurs de dos : ce que les kinés recommandent vraiment', category: 'Bien-être', length: 'long' },
  { subject: 'Pilates à 40 ans : pourquoi c\'est le meilleur moment pour commencer', category: 'Conseils', length: 'short' },
  { subject: 'Les 7 bienfaits du Pilates que personne ne te dit', category: 'Pilates', length: 'short' },
  { subject: 'Comment le Pilates améliore ta posture en quelques semaines', category: 'Pilates', length: 'long' },
  { subject: 'Pilates et perte de poids : ce que tu dois vraiment savoir', category: 'Conseils', length: 'short' },
  { subject: 'La respiration en Pilates : la clé que tout le monde oublie', category: 'Pilates', length: 'long' },
  { subject: '5 raisons de commencer le Pilates quand on n\'a jamais fait de sport', category: 'Conseils', length: 'short' },
  { subject: 'Pilates et flexibilité : mythes et réalités', category: 'Pilates', length: 'short' },
  { subject: 'Récupération sportive : pourquoi les athlètes font du Pilates', category: 'Bien-être', length: 'long' },
  { subject: 'Pilates et stress : comment une séance change ton état mental', category: 'Bien-être', length: 'short' },
  { subject: 'Quelle fréquence pour voir des résultats avec le Pilates ?', category: 'Conseils', length: 'short' },
  { subject: 'Joseph Pilates : l\'histoire fascinante du créateur de la méthode', category: 'Pilates', length: 'long' },
  { subject: 'Les 5 principes fondamentaux du Pilates expliqués simplement', category: 'Pilates', length: 'short' },
  { subject: 'Ce que ressent ton corps pendant les premières semaines de Pilates', category: 'Pilates', length: 'short' },
  { subject: 'Pilates et ménopause : une pratique adaptée à chaque étape de la vie', category: 'Bien-être', length: 'long' },
  { subject: '3 erreurs courantes des débutantes en Pilates et comment les éviter', category: 'Conseils', length: 'short' },
  { subject: 'Pilates et gainage : bien plus que les abdos', category: 'Pilates', length: 'long' },
  { subject: 'Pilates debout vs Pilates au sol : quelles différences ?', category: 'Pilates', length: 'short' },
  { subject: 'Comment le Pilates transforme silencieusement ton rapport à ton corps', category: 'Bien-être', length: 'long' },
  { subject: 'Peut-on faire du Pilates tous les jours ?', category: 'Conseils', length: 'short' },
  { subject: 'Pilates et running : la combinaison idéale pour les coureuses', category: 'Bien-être', length: 'long' },
  { subject: 'Pilates et sommeil : la connexion inattendue', category: 'Bien-être', length: 'short' },
  { subject: 'Pilates pour les nuls : par où commencer sans se perdre', category: 'Conseils', length: 'long' },

  // ── NUTRITION ─────────────────────────────────────────────────────────

  { subject: 'Que manger avant et après une séance de Pilates ?', category: 'Nutrition', length: 'short' },
  { subject: 'Anti-inflammatoire et Pilates : l\'alimentation qui amplifie les résultats', category: 'Nutrition', length: 'long' },
  { subject: 'Hydratation et sport : comment bien s\'hydrater quand on fait du Pilates', category: 'Nutrition', length: 'short' },
  { subject: 'Les aliments qui favorisent la récupération musculaire après le sport', category: 'Nutrition', length: 'long' },
  { subject: 'Protéines et Pilates : combien en faut-il vraiment ?', category: 'Nutrition', length: 'short' },
  { subject: 'Manger intuitif et pratique sportive douce : une combinaison gagnante', category: 'Nutrition', length: 'long' },
  { subject: '5 collations saines à avoir toujours sous la main quand on fait du sport', category: 'Nutrition', length: 'short' },

  // ── MAILLAGE INTERNE ───────────────────────────────────────────────────

  {
    subject: 'Pilates Reformer : tout ce qu\'il faut savoir avant de commencer',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Reformer en ligne', url: 'https://www.leclubpilates.com/cours-de-pilates/reformer' }],
  },
  {
    subject: 'Pilates Wall : la tendance qui cartonne en ce moment',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Pilates Wall', url: 'https://www.leclubpilates.com/cours-de-pilates/wall' }],
  },
  {
    subject: 'Pilates Mama : bouger en sécurité pendant et après la grossesse',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'programme Pilates prénatal', url: 'https://www.leclubpilates.com/cours-de-pilates/prenatal' }],
  },
  {
    subject: '5 séances Express pour les semaines où tu manques de temps',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'tous nos cours', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Renforcer ses abdos avec le Pilates (sans se blesser)',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Pilates abdos', url: 'https://www.leclubpilates.com/cours-de-pilates/abdos' }],
  },
  {
    subject: 'Full Body Pilates : sculpter son corps de la tête aux pieds',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Full Body', url: 'https://www.leclubpilates.com/cours-de-pilates/full-body' }],
  },
  {
    subject: 'Stretching et Pilates : pourquoi l\'étirement est aussi crucial que le renforcement',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Pilates Doux : la pratique idéale pour les périodes de fatigue',
    category: 'Bien-être', length: 'short',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Haut du corps et Pilates : bras, épaules et dos sculptés durablement',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Pilates Full Body', url: 'https://www.leclubpilates.com/cours-de-pilates/full-body' }],
  },
  {
    subject: 'Bas du corps et Pilates : jambes et fessiers sculptés sans impact',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Méditation et Pilates : quand le mouvement devient pratique contemplative',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Quels accessoires pour pratiquer le Pilates chez soi efficacement',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Pilates Intense : quand la méthode douce se révèle un vrai défi',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: '6 semaines pour transformer ta pratique Pilates : le programme débutant',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Pilates débutant', url: 'https://www.leclubpilates.com/cours-de-pilates/debutant' }],
  },
  {
    subject: 'Sculpter son corps en 4 semaines avec le Pilates Full Body',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Pilates Full Body', url: 'https://www.leclubpilates.com/cours-de-pilates/full-body' }],
  },
  {
    subject: 'Pilates en ligne : comment tirer le meilleur de sa pratique à la maison',
    category: 'Conseils', length: 'long',
    internalLinks: [{ label: 'tous les cours de Pilates', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },
  {
    subject: 'Comment choisir son programme Pilates selon son niveau et ses objectifs',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'voir tous les cours', url: 'https://www.leclubpilates.com/cours-de-pilates' }],
  },

  // ── CALENDRIER 17 NOV. 2026 → 13 FÉV. 2027 (3 par semaine, lun/mer/ven) ──
  // Traités dans l'ordre de la liste. Chaque sujet vise une recherche absente des 51 sujets
  // précédents (pas de cannibalisation) et renvoie vers une page cours.

  // Semaine du 17/11
  { subject: 'Les 10 exercices de base du Pilates au sol, et les erreurs à éviter', category: 'Pilates', length: 'long', internalLinks: [L.debutant] },
  { subject: 'Pilates après une césarienne : quand et comment reprendre', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Pilates et sciatique : les exercices doux qui soulagent', category: 'Bien-être', length: 'long', internalLinks: [L.dos] },
  // Semaine du 24/11
  { subject: 'Idées cadeaux Pilates : 10 idées pour une passionnée ou une débutante', category: 'Conseils', length: 'short', internalLinks: [L.livre, L.hub] },
  { subject: 'Diastase abdominale : reprendre le Pilates sans aggraver l\'écart', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Pilates au mur : 10 exercices pour débuter chez soi', category: 'Pilates', length: 'long', internalLinks: [L.wall, L.livre] },
  // Semaine du 01/12
  { subject: 'Magic circle Pilates : comment l\'utiliser, exercices et bienfaits', category: 'Pilates', length: 'long', internalLinks: [L.fullBody] },
  { subject: 'Pilates et hernie discale : ce qu\'on peut faire, ce qu\'il faut éviter', category: 'Bien-être', length: 'long', internalLinks: [L.dos] },
  { subject: 'Magnésium et sport : crampes, fatigue et récupération', category: 'Nutrition', length: 'short', internalLinks: [L.hub] },
  // Semaine du 08/12
  { subject: 'Pilates enceinte : quels exercices à chaque trimestre de grossesse', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Séance de Pilates full body de 30 minutes : le déroulé idéal', category: 'Pilates', length: 'long', internalLinks: [L.fullBody] },
  { subject: 'Pilates le matin ou le soir : quel est le meilleur moment ?', category: 'Conseils', length: 'short', internalLinks: [L.debutant] },
  // Semaine du 15/12
  { subject: 'Périnée et Pilates : renforcer son plancher pelvien en douceur', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Pilates et musculation : rivaux ou complémentaires ?', category: 'Pilates', length: 'long', internalLinks: [L.fullBody] },
  { subject: 'Garder une routine sportive pendant les fêtes, sans culpabiliser', category: 'Conseils', length: 'short', internalLinks: [L.hub] },
  // Semaine du 22/12
  { subject: 'Pilates à 50 ans et plus : commencer en toute sécurité', category: 'Conseils', length: 'long', internalLinks: [L.debutant] },
  { subject: 'Fer et fatigue chez les femmes sportives : les bons réflexes alimentaires', category: 'Nutrition', length: 'short', internalLinks: [L.hub] },
  { subject: 'Douleurs de nuque et cervicales : le Pilates pour le télétravail', category: 'Bien-être', length: 'long', internalLinks: [L.dos] },
  // Semaine du 29/12
  { subject: 'Reprendre le sport en janvier : un plan Pilates de 4 semaines pour débuter', category: 'Conseils', length: 'long', internalLinks: [L.debutant] },
  { subject: 'Pilates flow : définition, bienfaits et comment s\'y mettre', category: 'Pilates', length: 'short', internalLinks: [L.hub] },
  { subject: 'Pilates 10 minutes par jour : est-ce suffisant pour avoir des résultats ?', category: 'Conseils', length: 'short', internalLinks: [L.hub] },
  // Semaine du 05/01
  { subject: 'Pilates en studio ou en ligne : comment choisir', category: 'Conseils', length: 'long', internalLinks: [L.hub, L.reformer] },
  { subject: 'Le transverse : le muscle profond clé d\'un ventre plat et d\'un dos solide', category: 'Pilates', length: 'long', internalLinks: [L.abdos] },
  { subject: 'Bien manger quand on reste active pendant la grossesse', category: 'Nutrition', length: 'long', internalLinks: [L.prenatal] },
  // Semaine du 12/01
  { subject: 'Pilates et scoliose : précautions et exercices adaptés', category: 'Bien-être', length: 'long', internalLinks: [L.dos] },
  { subject: 'Le Hundred en Pilates : technique, variantes et erreurs fréquentes', category: 'Pilates', length: 'short', internalLinks: [L.debutant] },
  { subject: 'Pilates et cycle menstruel : adapter sa pratique à chaque phase', category: 'Bien-être', length: 'long', internalLinks: [L.hub] },
  // Semaine du 19/01
  { subject: 'Fuites urinaires à l\'effort : ce que le Pilates peut faire', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Pilates et douleurs aux genoux : bouger sans aggraver', category: 'Bien-être', length: 'short', internalLinks: [L.hub] },
  { subject: 'Combien de temps doit durer une séance de Pilates ?', category: 'Conseils', length: 'short', internalLinks: [L.debutant] },
  // Semaine du 26/01
  { subject: 'Pilates post-partum : reprendre en douceur, semaine après semaine', category: 'Bien-être', length: 'long', internalLinks: [L.prenatal] },
  { subject: 'Pilates et ostéoporose : renforcer ses os en sécurité', category: 'Bien-être', length: 'long', internalLinks: [L.debutant] },
  { subject: 'Batch cooking de sportive : une semaine de repas équilibrés en 2 heures', category: 'Nutrition', length: 'short', internalLinks: [L.hub] },
  // Semaine du 02/02
  { subject: 'Pilates au mur ou au sol : lequel choisir selon son objectif', category: 'Pilates', length: 'short', internalLinks: [L.wall] },
  { subject: 'Pilates et équilibre : prévenir les chutes après 60 ans', category: 'Bien-être', length: 'short', internalLinks: [L.debutant] },
  { subject: 'Pilates et hanches : soulager les tensions et gagner en mobilité', category: 'Bien-être', length: 'short', internalLinks: [L.hub] },
  // Semaine du 09/02
  { subject: 'Le roll up en Pilates : s\'enrouler sans tirer sur la nuque', category: 'Pilates', length: 'short', internalLinks: [L.abdos] },
  { subject: 'Collagène et sport : utile ou simple effet marketing ?', category: 'Nutrition', length: 'short', internalLinks: [L.hub] },
  { subject: 'Préparer ses vacances au ski avec le Pilates', category: 'Conseils', length: 'short', internalLinks: [L.fullBody] },
]

/**
 * Renvoie le premier sujet de TOPICS pas encore utilisé (usedSubjects), dans l'ordre de la liste :
 * l'ordre de TOPICS est le calendrier éditorial (équilibre des catégories réglé dans la liste).
 * Si tous les sujets ont déjà été utilisés, lève une erreur : ne jamais réutiliser un sujet
 * (la réutilisation a créé ~26 articles en double entre septembre et novembre 2026).
 */
export function pickTopic(usedSubjects: string[]): Topic {
  const usedSet = new Set(usedSubjects)
  const next = TOPICS.find(t => !usedSet.has(t.subject))

  if (!next) {
    throw new Error('Plus aucun sujet libre dans lib/blog/topics.ts : ajouter de nouveaux sujets. Aucun article généré.')
  }
  return next
}
