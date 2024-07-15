import { z } from 'zod'

export const ProgressBarEnum = z.enum([
  'inside',
  'outside',
])
export type ProgressBarEnumType = z.infer<typeof ProgressBarEnum>
