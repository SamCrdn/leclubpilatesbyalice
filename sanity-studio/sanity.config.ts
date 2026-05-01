import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { postType }         from './schemas/post'
import { siteSettingsType } from './schemas/siteSettings'
import { testimonialType }  from './schemas/testimonial'
import { profType }         from './schemas/prof'
import { pricingPlanType }  from './schemas/pricingPlan'
import { retraiteType }     from './schemas/retraite'

const singletons = new Set(['siteSettings', 'retraite'])

export default defineConfig({
  name: 'le-club-pilates',
  title: 'Le Club Pilates',
  projectId: '71c7c0vz',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Paramètres du site')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Retraite')
              .child(S.document().schemaType('retraite').documentId('retraite')),
            S.divider(),
            S.documentTypeListItem('post')        .title('Articles de blog'),
            S.documentTypeListItem('testimonial') .title('Témoignages'),
            S.documentTypeListItem('prof')        .title('Professeurs'),
            S.documentTypeListItem('pricingPlan') .title('Tarifs'),
          ]),
    }),
  ],

  schema: {
    types: [postType, siteSettingsType, testimonialType, profType, pricingPlanType, retraiteType],
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
})
