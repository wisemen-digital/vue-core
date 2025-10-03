import { z } from 'zod'

export const ArtifactMetaSchema = z.object({
  generatedAt: z.string(),
  hash: z.string(),
  sourceVersion: z.string().optional(),
  sourceRevision: z.string().optional(),
})

export type ArtifactMeta = z.infer<typeof ArtifactMetaSchema>

export function createArtifactSchema<T extends z.ZodTypeAny>(payload: T) {
  return z.object({
    meta: ArtifactMetaSchema,
    data: payload,
  })
}

export type ArtifactShape<T extends z.ZodTypeAny> = z.infer<ReturnType<typeof createArtifactSchema<T>>>

export const ManifestEntrySchema = z.object({
  hash: z.string(),
  updatedAt: z.string(),
})

export const ArtifactManifestSchema = z.record(ManifestEntrySchema)

export type ArtifactManifest = z.infer<typeof ArtifactManifestSchema>
