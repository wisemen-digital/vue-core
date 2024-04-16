import type { VariantProps } from '../../libs/cva.lib'
import { cva } from '../../libs/cva.lib'

export const sizeOptions = {
  default: 'h-4 w-4',
  full: 'h-full w-full',
  lg: 'h-5 w-5',
  sm: 'h-3 w-3',
  xl: 'h-6 w-6',
  xs: 'h-2 w-2',
  xxl: 'h-8 w-8',
}

export const iconVariants = cva({
  base: 'flex-shrink-0',
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: sizeOptions,
  },
})

export type IconStyleProps = VariantProps<typeof iconVariants>

export const iconSizeOptions = Object.keys(sizeOptions)
