import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useSelectStyle = tv({
  slots: {
    clearButton: 'absolute right-7 top-1/2 -translate-y-1/2 p-2',
    contentContainer: 'custom-select-content custom-popover-content relative z-popover min-w-min overflow-hidden rounded-popover bg-background shadow-popover-shadow',
    contentViewport: 'max-h-[25rem] p-1.5',
    divider: 'my-1 h-px bg-border',
    groupLabelContainer: 'px-2 py-1',
    groupLabelSlot: 'pl-2',
    groupLabelText: 'text-secondary-foreground',
    iconLeft: 'ml-3 text-muted-foreground',
    input: 'block size-full cursor-pointer truncate bg-transparent py-2 pl-3 pr-8 text-sm outline-none duration-200 placeholder:text-input-foreground disabled:cursor-not-allowed',
    loader: 'mr-3 size-4 text-muted-foreground',
    multiInputContainer: 'relative flex h-10 items-center rounded-input border border-solid bg-input outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2',
    multiTrigger: 'absolute right-0 top-0 mr-1 flex size-full items-center justify-end p-2',
    optionContainer: 'cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50',
    optionIndicator: 'text-muted-foreground',
    optionIndicatorContainer: 'w-4',
    optionWrapper: 'flex items-center justify-between gap-x-3',
    popoverContainer: 'z-popover',
    scrollButtonDown: 'absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent to-popover p-2',
    scrollButtonIcon: 'text-muted-foreground',
    scrollButtonUp: 'absolute top-0 z-10 flex w-full justify-center bg-gradient-to-t from-transparent to-popover p-2',
    trigger: 'flex h-10 w-full items-center justify-between rounded-input border border-solid bg-input ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
    triggerIcon: 'size-4 text-muted-foreground',
    value: 'w-full truncate px-3 text-left text-subtext',
  },
  variants: {
    isInvalid: {
      false: {
        multiInputContainer: 'border-input-border [&:has(:focus-visible)]:ring-ring',
        trigger: 'border-input-border focus-visible:ring-ring',
      },
      true: {
        multiInputContainer: 'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive',
        trigger: 'border-destructive focus-visible:border-input-border focus-visible:ring-destructive',
      },
    },
    isEmpty: {
      false: {
        input: 'placeholder:text-input-foreground',
      },
      true: {
        input: 'placeholder:text-input-placeholder',
        value: 'text-input-placeholder',
      },
    },
    isDisabled: {
      true: {
        multiInputContainer: 'cursor-not-allowed opacity-50',
        multiTrigger: 'cursor-not-allowed',
        trigger: 'cursor-not-allowed opacity-50',
      },
    },
  },
})

export type SelectStyleProps = VariantProps<typeof useSelectStyle>
