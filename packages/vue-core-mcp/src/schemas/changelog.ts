import { z } from 'zod'

import { createArtifactSchema } from './common'

export const ChangelogEntrySchema = z.object({
  version: z.string(),
  date: z.string().optional(),
  notes: z.string(),
  component: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export type ChangelogEntry = z.infer<typeof ChangelogEntrySchema>

export const ChangelogCollectionSchema = z.object({
  entries: z.array(ChangelogEntrySchema),
})

export type ChangelogCollection = z.infer<typeof ChangelogCollectionSchema>

export const ChangelogArtifactSchema = createArtifactSchema(ChangelogCollectionSchema)

export type ChangelogArtifact = z.infer<typeof ChangelogArtifactSchema>
