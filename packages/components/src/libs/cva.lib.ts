import { defineConfig } from 'cva'

import { twMerge } from './twMerge.lib'

export type { VariantProps } from 'cva'
export const {
  compose,
  cva,
  cx,
} = defineConfig({
  hooks: {
    onComplete: className => twMerge(className),
  },
})
