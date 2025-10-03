import { z } from 'zod'

import { createArtifactSchema } from './common'

export const StorySchema = z.object({
  id: z.string(),
  title: z.string(),
  component: z.string(),
  file: z.string(),
  code: z.string().optional(),
  description: z.string().optional(),
})

export type Story = z.infer<typeof StorySchema>

export const StoriesCollectionSchema = z.object({
  stories: z.array(StorySchema),
})

export type StoriesCollection = z.infer<typeof StoriesCollectionSchema>

export const StoriesArtifactSchema = createArtifactSchema(StoriesCollectionSchema)

export type StoriesArtifact = z.infer<typeof StoriesArtifactSchema>
