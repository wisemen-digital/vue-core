import { createTV } from 'tailwind-variants'

import { twMerge } from '@/libs/twMerge.lib'

export type { VariantProps } from 'tailwind-variants'

export const tv = createTV({
  twMergeConfig: twMerge,
})
