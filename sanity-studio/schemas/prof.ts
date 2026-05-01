import { defineType, defineField } from 'sanity'

export const profType = defineType({
  name: 'prof',
  title: 'Professeurs',
  type: 'document',
  fields: [
    defineField({ name: 'name',       title: 'Prénom',                        type: 'string' }),
    defineField({ name: 'role',       title: 'Rôle (ex: Fondatrice & instructrice)', type: 'string' }),
    defineField({ name: 'index',      title: 'Numéro (ex: 01)',               type: 'string' }),
    defineField({ name: 'photo',      title: 'Photo',                         type: 'image', options: { hotspot: true } }),
    defineField({ name: 'photoAlt',   title: 'Texte alternatif photo',        type: 'string' }),
    defineField({ name: 'formation',  title: 'Formation (résumé court)',      type: 'string' }),
    defineField({
      name: 'credentials',
      title: 'Certifications (une par ligne)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bio',
      title: 'Biographie (un paragraphe par entrée)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'sameAs',
      title: 'Liens réseaux sociaux',
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({ name: 'imageRight', title: 'Photo à droite',               type: 'boolean', initialValue: true }),
    defineField({ name: 'order',      title: 'Ordre d\'affichage',            type: 'number',  initialValue: 0 }),
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
