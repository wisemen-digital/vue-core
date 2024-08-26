import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useInputStyle = tv({
  slots: {
    container: 'relative flex h-10 items-center rounded-input border border-solid bg-input outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2',
    input: 'block size-full truncate bg-transparent px-3 text-sm text-input-foreground outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed',
    leftIcon: 'ml-3 text-muted-foreground',
    loader: 'mr-3 size-4 text-muted-foreground',
    numberControls: 'mr-0.5 flex flex-col items-center justify-center',
    numberDownButton: 'h-4 w-7 rounded-t-none',
    numberSuffix: 'border-l border-solid border-border p-2',
    numberUpButton: 'h-4 w-7 rounded-b-none',
    passwordIcon: 'm-1 size-8 shrink-0',
    rightIcon: 'mr-3 text-muted-foreground',
  },
  variants: {
    isInvalid: {
      false: {
        container: 'border-input-border [&:has(:focus-visible)]:ring-ring',
      },
      true: {
        container: 'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive',
      },
    },
    isDisabled: {
      false: {},
      true: {
        container: 'cursor-not-allowed opacity-50',
      },
    },
  },
})

export type InputStyleProps = VariantProps<typeof useInputStyle>
