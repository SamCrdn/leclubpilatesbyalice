import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { postType } from './schemas/post'

export default defineConfig({
  name: 'le-club-pilates',
  title: 'Le Club Pilates',
  projectId: '71c7c0vz',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [postType] },
})
