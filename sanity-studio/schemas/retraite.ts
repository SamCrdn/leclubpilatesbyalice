import { defineType, defineField } from 'sanity'

export const retraiteType = defineType({
  name: 'retraite',
  title: 'Retraite',
  type: 'document',
  fields: [
    defineField({ name: 'active',           title: 'Afficher sur le site',          type: 'boolean', initialValue: true }),
    defineField({ name: 'title',            title: 'Titre (ex: Retraite Pilates)',   type: 'string' }),
    defineField({ name: 'destination',      title: 'Destination (ex: à Ibiza)',      type: 'string' }),
    defineField({ name: 'startDate',        title: 'Date de début',                 type: 'date' }),
    defineField({ name: 'endDate',          title: 'Date de fin',                   type: 'date' }),
    defineField({ name: 'heroDescription',  title: 'Description courte (hero)',     type: 'text', rows: 2 }),
    defineField({ name: 'price',            title: 'Prix (€)',                      type: 'number' }),
    defineField({ name: 'priceNote',        title: 'Note sur le prix (ex: Paiement en 2 fois possible)', type: 'string' }),
    defineField({ name: 'maxParticipants',  title: 'Participants maximum',          type: 'number' }),
    defineField({
      name: 'locationName',
      title: 'Nom du lieu (ex: Villa Ibiza — Cala de Bou)',
      type: 'string',
    }),
    defineField({
      name: 'inclus',
      title: 'Inclus dans le prix (un élément par entrée)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'nonInclus',
      title: 'Non inclus (un élément par entrée)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'destination' },
  },
})
