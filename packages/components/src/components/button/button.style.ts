import type { VariantProps } from '../../libs/cva.lib'
import { cva } from '../../libs/cva.lib'

export const button = cva({
  base: 'relative flex items-center justify-center rounded-button border border-solid outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: 'h-10 px-4 py-2 text-sm',
      icon: 'size-10 text-sm',
      lg: 'h-11 px-8 text-base',
      sm: 'h-9 px-3 text-xs',
      unset: '',
      xs: 'h-6 px-2 text-xs',
    },
    variant: {
      'default':
        'border-primary bg-primary text-primary-foreground ring-ring',
      'destructive': 'border-destructive bg-destructive text-destructive-foreground focus-visible:ring-destructive',
      'destructive-outline': 'border-destructive bg-transparent text-destructive ring-destructive',
      'ghost':
        'border-transparent bg-transparent text-muted-foreground ring-ring hover:enabled:bg-muted-background focus:enabled:bg-muted-background',
      'outline':
        'border-primary bg-background text-primary ring-ring',
      'secondary':
        'border-muted-background bg-muted-background text-muted-foreground ring-ring',
    },
  },
})

export const buttonIcon = cva({
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      default: '!size-3.5',
      icon: '!size-3.5',
      lg: '!size-8',
      sm: '!size-3.5',
      unset: '',
      xs: '!size-2.5',
    },
  },
})

export type ButtonStyleProps = VariantProps<typeof button>
