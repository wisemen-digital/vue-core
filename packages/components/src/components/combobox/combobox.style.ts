import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useComboboxStyle = tv({
  defaultVariants: {},
  slots: {
    content: 'custom-combobox-content custom-popover-content relative z-popover max-h-[--radix-combobox-content-available-height] w-[--radix-combobox-trigger-width] min-w-min overflow-hidden rounded-popover border border-solid border-border bg-background shadow-popover-shadow',
    divider: 'my-1 h-px bg-border',
    dropdownSearch: 'w-full p-1.5 text-sm outline-none placeholder:text-input-placeholder',
    groupText: 'text-secondary-foreground',
    icon: 'text-muted-foreground',
    input: 'block size-full truncate bg-transparent px-3 py-2 text-sm text-input-foreground outline-none duration-200 disabled:cursor-not-allowed',
    inputContainer: 'flex h-10 items-center rounded-input border border-solid bg-input outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2',
    inputLoader: 'pointer-events-none size-4 text-muted-foreground',
    multiOptionContainer: 'group cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50',
    multiOptionIndicator: 'text-primary-foreground',
    multiOptionIndicatorContainer: 'flex size-4 items-center justify-center rounded border border-solid border-transparent duration-100 group-data-[highlighted]:border-input-border group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary',
    multiOptionSpacer: 'flex items-center gap-x-3',
    optionContainer: 'cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50',
    optionIndicator: 'text-muted-foreground',
    optionIndicatorContainer: 'w-4',
    optionSpacer: 'flex items-center justify-between gap-x-3',
    tagsInput: 'size-full min-w-10 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-input-placeholder',
    tagsInputContainer: 'flex min-h-10 w-full flex-wrap items-center gap-1 truncate rounded-input border border-solid bg-input p-1.5 ring-offset-background transition-shadow duration-200 placeholder:text-input-placeholder focus-within:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
    trigger: 'box-content p-3 outline-none',
    viewport: 'max-h-[25rem] p-1.5',
  },
  variants: {
    isInvalid: {
      false: {
        inputContainer: 'border-input-border [&:has(:focus-visible)]:ring-ring',
        tagsInputContainer: 'border-input-border focus-within:ring-ring',
      },
      true: {
        inputContainer: 'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive',
        tagsInputContainer: 'border-destructive focus-within:border-input-border focus-within:ring-destructive',
      },
    },
    placeholderAsValue: {
      false: {
        input: 'placeholder:text-input-placeholder',
      },
      true: {
        input: 'placeholder:text-input-foreground',
      },
    },
    isDisabled: {
      true: {
        inputContainer: 'cursor-not-allowed opacity-50',
        trigger: 'cursor-not-allowed opacity-50',
      },
    },
  },
})

export type ComboboxStyleProps = VariantProps<typeof useComboboxStyle>
