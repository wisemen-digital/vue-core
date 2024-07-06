import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useDropdownMenuStyle = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    arrow: 'size-4 -translate-y-2.5 rotate-45 rounded-sm border border-solid border-border bg-popover',
    arrowContainer: 'relative z-10 -mb-4 size-4 -translate-y-px overflow-hidden',
    content: 'max-h-96 overflow-y-auto rounded-popover border border-solid border-border',
    contentContainer: 'custom-popover-content z-popover rounded-popover bg-popover shadow-popover-shadow',
    divider: 'h-px bg-border',
    group: 'p-1',
    itemCheckbox: 'flex size-4 items-center justify-center rounded border border-solid border-transparent duration-100 group-data-[highlighted]:border-input-border group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary',
    itemCheckboxIndicator: 'text-primary-foreground',
    itemContainer: 'group flex cursor-default items-center justify-between overflow-hidden rounded-md px-2 py-1.5 outline-none focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    itemContent: 'flex items-center gap-x-3 overflow-hidden',
    itemLabel: 'px-2 py-1.5 text-muted-foreground',
    itemOptionIcon: 'shrink-0',
    itemRadioIndicator: 'flex size-4 items-center justify-center',
    itemRadioIndicatorContainer: 'text-muted-foreground',
    itemSubContent: 'custom-popover-content z-popover min-w-40 max-w-60 overflow-hidden rounded-popover border border-solid border-border bg-popover shadow-popover-shadow',
    itemSubTriggerIcon: 'ml-4 text-[8px] text-muted-foreground/50',
    itemText: 'truncate',
  },
  variants: {
    inheritTriggerWidth: {
      false: {
        contentContainer: 'min-w-40 max-w-60',
      },
      true: {
        contentContainer: 'w-[--radix-dropdown-menu-trigger-width]',
      },
    },
    variant: {
      default: {
        itemOptionIcon: 'text-muted-foreground group-focus:text-foreground',
        itemText: 'text-muted-foreground group-focus:text-foreground',
      },
      destructive: {
        itemOptionIcon: 'text-destructive group-focus:text-destructive',
        itemText: 'text-destructive group-focus:text-destructive',
      },
    },
  },
})

export type DropdownMenuStyleProps = VariantProps<typeof useDropdownMenuStyle>
