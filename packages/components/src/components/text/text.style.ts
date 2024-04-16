import type { VariantProps } from '../../libs/cva.lib'
import { cva } from '../../libs/cva.lib'

export const variantOptions = {
  body: 'text-body',
  caption: 'text-caption',
  heading: 'text-heading',
  hero: 'text-hero',
  subtext: 'text-subtext',
  subtitle: 'text-subtitle',
  title: 'text-title',
}

export const textVariants = cva({
  base: null,
  defaultVariants: {
    variant: 'body',
  },
  variants: {
    variant: variantOptions,
  },
})

export type TextProps = VariantProps<typeof textVariants>

export const textVariantOptions = Object.keys(variantOptions)
