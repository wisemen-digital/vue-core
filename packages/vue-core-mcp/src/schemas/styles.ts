import { z } from 'zod'

import { createArtifactSchema } from './common'

export const StylesSchema = z.object({
  cssVars: z.array(z.string()).default([]),
  classes: z.array(z.string()).default([]),
  tokens: z.record(z.string()).optional(),
  sources: z.array(z.string()).optional(),
})

export type Styles = z.infer<typeof StylesSchema>

export const StylesCollectionSchema = z.object({
  byComponent: z.record(StylesSchema),
  globalTokens: z.record(z.string()).optional(),
})

export type StylesCollection = z.infer<typeof StylesCollectionSchema>

export const StylesArtifactSchema = createArtifactSchema(StylesCollectionSchema)

export type StylesArtifact = z.infer<typeof StylesArtifactSchema>
