import { z } from 'zod'

export const ComponentPropSchema = z.object({
  name: z.string(),
  type: z.string(),
  required: z.boolean(),
  default: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  since: z.string().optional(),
  deprecated: z.boolean().optional(),
})

export type ComponentProp = z.infer<typeof ComponentPropSchema>

export const PropSearchResultSchema = z.object({
  component: z.string(),
  prop: ComponentPropSchema,
})

export type PropSearchResult = z.infer<typeof PropSearchResultSchema>

export const PropChangeSchema = z.object({
  name: z.string(),
  from: z.string().optional(),
  to: z.string().optional(),
  description: z.string().optional(),
})

export type PropChange = z.infer<typeof PropChangeSchema>
