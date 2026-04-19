export type Topic = {
  subject: string
  category: 'Pilates' | 'Bien-être' | 'Conseils' | 'Nutrition'
  length: 'short' | 'long'
  internalLinks?: Array<{ label: string; url: string }>
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

  // ── MAILLAGE INTERNE ───────────────────────────────────────────────────

  {
    subject: 'Pilates Reformer : tout ce qu\'il faut savoir avant de commencer',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Reformer', url: 'https://app.leclubpilates.com/categories/reformer' }],
  },
  {
    subject: 'Pilates Wall : la tendance qui cartonne en ce moment',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Pilates Wall', url: 'https://app.leclubpilates.com/categories/pilates-wall' }],
  },
  {
    subject: 'Pilates Mama : bouger en sécurité pendant et après la grossesse',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'programme Pilates Mama', url: 'https://app.leclubpilates.com/programs/pilates-mama' }],
  },
  {
    subject: '5 séances Express pour les semaines où tu manques de temps',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'cours Express', url: 'https://app.leclubpilates.com/categories/express' }],
  },
  {
    subject: 'Renforcer ses abdos avec le Pilates (sans se blesser)',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Abdos', url: 'https://app.leclubpilates.com/categories/abdos' }],
  },
  {
    subject: 'Full Body Pilates : sculpter son corps de la tête aux pieds',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Full Body', url: 'https://app.leclubpilates.com/categories/full-body' }],
  },
  {
    subject: 'Stretching et Pilates : pourquoi l\'étirement est aussi crucial que le renforcement',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'cours Stretching', url: 'https://app.leclubpilates.com/categories/stretching' }],
  },
  {
    subject: 'Pilates Doux : la pratique idéale pour les périodes de fatigue',
    category: 'Bien-être', length: 'short',
    internalLinks: [{ label: 'cours Pilates Doux', url: 'https://app.leclubpilates.com/categories/doux' }],
  },
  {
    subject: 'Haut du corps et Pilates : bras, épaules et dos sculptés durablement',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Haut du corps', url: 'https://app.leclubpilates.com/categories/haut-du-corps' }],
  },
  {
    subject: 'Bas du corps et Pilates : jambes et fessiers sculptés sans impact',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'cours Bas du corps', url: 'https://app.leclubpilates.com/categories/bas-du-corps' }],
  },
  {
    subject: 'Méditation et Pilates : quand le mouvement devient pratique contemplative',
    category: 'Bien-être', length: 'long',
    internalLinks: [{ label: 'cours Méditation', url: 'https://app.leclubpilates.com/categories/meditation' }],
  },
  {
    subject: 'Quels accessoires pour pratiquer le Pilates chez soi efficacement',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'cours avec Accessoires', url: 'https://app.leclubpilates.com/categories/accessoires' }],
  },
  {
    subject: 'Pilates Intense : quand la méthode douce se révèle un vrai défi',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'cours Intense', url: 'https://app.leclubpilates.com/categories/intense' }],
  },
  {
    subject: '6 semaines pour transformer ta pratique Pilates : le programme débutant',
    category: 'Pilates', length: 'long',
    internalLinks: [{ label: 'programme Fondamentaux', url: 'https://app.leclubpilates.com/programs/debutant' }],
  },
  {
    subject: 'Sculpter son corps en 4 semaines avec le Pilates Full Body',
    category: 'Pilates', length: 'short',
    internalLinks: [{ label: 'programme Full Body Sculpt', url: 'https://app.leclubpilates.com/programs/pilates-sculpt' }],
  },
  {
    subject: 'Pilates en ligne : comment tirer le meilleur de sa pratique à la maison',
    category: 'Conseils', length: 'long',
    internalLinks: [{ label: 'tous les cours', url: 'https://www.leclubpilates.com/classes' }],
  },
  {
    subject: 'Comment choisir son programme Pilates selon son niveau et ses objectifs',
    category: 'Conseils', length: 'short',
    internalLinks: [{ label: 'voir les programmes', url: 'https://www.leclubpilates.com/classes' }],
  },
]

export function pickTopic(): Topic {
  return TOPICS[Math.floor(Math.random() * TOPICS.length)]
}
