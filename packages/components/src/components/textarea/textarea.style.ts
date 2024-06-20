import type { VariantProps } from '@/libs/cva.lib'
import { tv } from '@/libs/twVariants.lib'

export const useTextareaStyle = tv({
  slots: {
    textarea: 'size-full rounded-input border border-solid bg-input px-3 py-2 text-sm text-input-foreground outline-none ring-offset-background duration-200 placeholder:text-input-placeholder focus-visible:ring-2 disabled:cursor-not-allowed',
  },
  variants: {
    isDisabled: {
      true: {
        textarea: 'cursor-not-allowed opacity-50',
      },
    },
    isInvalid: {
      false: {
        textarea: 'border-input-border focus-visible:ring-ring',
      },
      true: {
        textarea: 'border-destructive focus-visible:border-input-border focus-visible:ring-destructive',
      },
    },
    resize: {
      both: {
        textarea: 'resize',
      },
      horizontal: {
        textarea: 'resize-x',
      },
      none: {
        textarea: 'resize-none',
      },
      vertical: {
        textarea: 'resize-y',
      },
    },
  },
})

export type TextAreaStyleProps = VariantProps<typeof useTextareaStyle>
