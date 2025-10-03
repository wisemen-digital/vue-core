import { z } from 'zod'

import {
  ComponentPropSchema,
  PropChangeSchema,
} from './props'
import {
  ArtifactMetaSchema,
  createArtifactSchema,
} from './common'

export const ComponentTagSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export type ComponentTag = z.infer<typeof ComponentTagSchema>

export const ComponentSummarySchema = z.object({
  name: z.string(),
  displayName: z.string().optional(),
  path: z.string(),
  since: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export type ComponentSummary = z.infer<typeof ComponentSummarySchema>

export const EventPayloadSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  description: z.string().optional(),
})

export const ComponentEventSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  payload: z.array(EventPayloadSchema).optional(),
  since: z.string().optional(),
  deprecated: z.boolean().optional(),
})

export type ComponentEvent = z.infer<typeof ComponentEventSchema>

export const ComponentSlotPropSchema = EventPayloadSchema

export const ComponentSlotSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  props: z.array(ComponentSlotPropSchema).optional(),
})

export type ComponentSlot = z.infer<typeof ComponentSlotSchema>

export const ComponentMethodSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  signature: z.string().optional(),
  returns: z.string().optional(),
  since: z.string().optional(),
})

export type ComponentMethod = z.infer<typeof ComponentMethodSchema>

export const UsageExampleSchema = z.object({
  title: z.string(),
  code: z.string(),
  source: z.string().optional(),
  description: z.string().optional(),
})

export type UsageExample = z.infer<typeof UsageExampleSchema>

export const ComponentImportSchema = z.object({
  name: z.string(),
  path: z.string(),
  isDefault: z.boolean().optional(),
})

export type ComponentImport = z.infer<typeof ComponentImportSchema>

export const ComponentDetailSchema = ComponentSummarySchema.extend({
  description: z.string().optional(),
  props: z.array(ComponentPropSchema).default([]),
  events: z.array(ComponentEventSchema).default([]),
  slots: z.array(ComponentSlotSchema).default([]),
  emits: z.array(ComponentEventSchema).default([]),
  methods: z.array(ComponentMethodSchema).default([]),
  usage: z.array(UsageExampleSchema).default([]),
  imports: z.array(ComponentImportSchema).default([]),
  tagsDetailed: z.record(ComponentTagSchema).optional(),
})

export type ComponentDetail = z.infer<typeof ComponentDetailSchema>

export const ComponentCollectionSchema = z.object({
  summaries: z.array(ComponentSummarySchema),
  details: z.record(ComponentDetailSchema),
  propsIndex: z.array(z.object({
    component: z.string(),
    prop: ComponentPropSchema,
  })),
})

export type ComponentCollection = z.infer<typeof ComponentCollectionSchema>

export const ComponentsArtifactSchema = createArtifactSchema(ComponentCollectionSchema)

export type ComponentsArtifact = z.infer<typeof ComponentsArtifactSchema>

export const DiffResultSchema = z.object({
  component: z.string(),
  from: z.string(),
  to: z.string(),
  addedProps: z.array(ComponentPropSchema).default([]),
  removedProps: z.array(ComponentPropSchema).default([]),
  changedProps: z.array(PropChangeSchema).default([]),
  deprecations: z.array(z.string()).default([]),
  notes: z.array(z.string()).optional(),
})

export type DiffResult = z.infer<typeof DiffResultSchema>

export const ComponentArtifactMetaSchema = ArtifactMetaSchema.extend({
  components: z.number(),
})
