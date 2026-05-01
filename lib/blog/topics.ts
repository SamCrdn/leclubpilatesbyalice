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
    internalLinks: [{ label: 'cours Pilates Full Body', url: 'https://www.leclubpilates.com/cours-de-pilates/full-body' }],
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
]

export function pickTopic(): Topic {
  return TOPICS[Math.floor(Math.random() * TOPICS.length)]
}
