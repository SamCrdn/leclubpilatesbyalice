import { client } from '@/lib/sanity'
import { testimonialsQuery } from '@/lib/sanity.queries'
import TestimonialsCarousel, { type Testimonial } from './TestimonialsCarousel'

const FALLBACK: Testimonial[] = [
  { name: 'Sarah',      role: '26 ans · Membre',                    initials: 'S',  quote: 'Je suis devenue complètement addict ! Je mixe plusieurs cours courts selon mon humeur, et j\'adore pouvoir pratiquer à n\'importe quelle heure. En quelques semaines, j\'ai vu des résultats que je n\'aurais jamais espérés avec une salle classique.' },
  { name: 'Noémie',     role: '38 ans · Membre',                    initials: 'N',  quote: 'Je fais du Pilates depuis une dizaine d\'années, mais depuis que je suis les cours d\'Alice, c\'est devenu une véritable hygiène de vie. Alice a sauvé mon dos, qui a été ma bête noire pendant des années, et je me sens réellement plus forte et plus souple dans mon quotidien.' },
  { name: 'Marie',      role: '41 ans · Membre',                    initials: 'M',  quote: 'Après avoir essayé des dizaines d\'applis fitness, Le Club Pilates est de loin la meilleure. Les cours sont variés, la progression est logique et Alice a une énergie communicative. Mon corps a changé de façon visible en 2 mois.' },
  { name: 'Clara',      role: '45 ans · Membre',                    initials: 'C',  quote: 'Je ne pensais pas aimer le Pilates, et pourtant ! L\'approche d\'Alice est tellement motivante que j\'ai accroché dès le premier cours. Mon dos et mes épaules vont beaucoup mieux, et je me sens vraiment plus à l\'aise dans mon corps.' },
  { name: 'Fabienne',   role: '51 ans · Membre',                    initials: 'F',  quote: 'Des cours en ligne au top ! Des séances variées et tellement efficaces : des cours toniques pour galber, affiner la silhouette et des séances plus douces pour s\'étirer, se relaxer. Le parfait équilibre ! Alice est une super prof, très pédagogue et bienveillante.' },
  { name: 'Emilie',     role: '31 ans · Membre',                    initials: 'E',  quote: 'J\'ai découvert Le Club Pilates pendant ma grossesse grâce aux séances Mama. Après l\'accouchement, j\'ai pu reprendre doucement avec les cours post-natal. Six mois plus tard, mon corps est même mieux qu\'avant ! Alice prend vraiment soin de nous avec des cours adaptés à chaque étape.' },
  { name: 'Laurence',   role: '58 ans · Membre',                    initials: 'L',  quote: 'À 58 ans, je cherchais une pratique douce mais efficace. Les cours sont variés, très bien construits, et les résultats sont là. C\'est exactement ce qu\'il me fallait pour prendre soin de moi sans me mettre en danger.' },
  { name: 'Lesley-Ann', role: '35 ans · Ostéopathe · Membre',       initials: 'LA', quote: 'J\'adore les cours d\'Alice. Ils sont accessibles à tous les niveaux et toujours de grande qualité. En tant qu\'ostéopathe, j\'apprécie particulièrement sa précision et son écoute.' },
  { name: 'Audrey',     role: '34 ans · Membre',                    initials: 'A',  quote: 'J\'ai pris l\'abonnement et je suis passée de zéro sport à un cours quotidien. Je ne peux plus m\'en passer ! Alice est douce, gentille et surtout donne des explications très claires. C\'est mon rendez-vous quotidien qui me donne la pêche.' },
  { name: 'Anaïs',      role: '28 ans · Membre',                    initials: 'A',  quote: 'Je viens de télécharger l\'application mobile et j\'adore : je peux faire mes séances directement sur mon téléphone et n\'importe où ! Les explications sont claires et il y a toujours des rappels pour ajuster notre posture ou notre respiration.' },
]

export default async function TestimonialsSection() {
  const data = client ? await client.fetch(testimonialsQuery).catch(() => null) : null
  const testimonials: Testimonial[] = data?.length ? data : FALLBACK
  return <TestimonialsCarousel testimonials={testimonials} />
}
