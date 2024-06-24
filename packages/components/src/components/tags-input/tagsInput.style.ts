import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useTagsInputStyle = tv({
  slots: {
    container: 'flex min-h-10 w-full flex-wrap items-center gap-1 rounded-input border border-solid bg-input py-1 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
    input: 'flex-1 bg-transparent p-1 text-sm outline-none placeholder:text-input-placeholder',
    itemContainer: 'group flex items-center gap-x-1 overflow-hidden rounded-tag border border-solid border-border bg-muted-background px-2 py-0.5 aria-[current=true]:border-foreground aria-[current=true]:bg-foreground aria-[current=true]:text-background',
    itemDeleteButton: '!bg-transparent !duration-0 aria-[current=true]:text-background',
    itemText: 'truncate text-inherit',
  },
  variants: {
    isDisabled: {
      true: {
        input: 'cursor-not-allowed opacity-50',
        itemContainer: 'opacity-50',
      },
    },
    isInvalid: {
      false: {
        container: 'border-input-border focus-within:ring-ring',
      },
      true: {
        container: 'border-destructive focus-within:ring-destructive',
      },
    },
    isModelEmpty: {
      false: {
        container: 'px-1',
      },
      true: {
        container: 'px-2',
      },
    },
  },
})

export type TagsInputStyleProps = VariantProps<typeof useTagsInputStyle>
