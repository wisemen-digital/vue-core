import { tv } from '@/libs/twVariants.lib'

export const dropdownMenuStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm border border-solid border-popover-border-color-default bg-popover-bg-color-default shadow-popover-shadow-default',
    arrowBox: 'relative z-50 -mb-4 h-4 w-10 overflow-hidden',
    dropdown: 'custom-popover-content z-popover min-w-dropdown-menu-min-width-default max-w-dropdown-menu-max-width-default rounded-dropdown-menu-border-radius-default border border-solid border-dropdown-menu-border-color-default bg-dropdown-menu-bg-color-default shadow-dropdown-menu-shadow-default',
    dropdownContent: 'relative size-full overflow-hidden px-dropdown-menu-padding-x-default py-dropdown-menu-padding-y-default',
    group: 'px-dropdown-menu-group-spacing-x-default pb-dropdown-menu-group-spacing-bottom-default pt-dropdown-menu-group-spacing-top-default',
    groupContent: 'px-dropdown-menu-group-spacing-x-default pb-dropdown-menu-group-spacing-bottom-default pt-dropdown-menu-group-spacing-top-default',
    groupLabel: 'px-dropdown-menu-group-label-spacing-x-default pb-dropdown-menu-group-label-spacing-bottom-default pt-dropdown-menu-group-label-spacing-top-default text-dropdown-menu-group-label-font-size-default font-dropdown-menu-group-label-font-weight-default text-dropdown-menu-group-label-text-color-default',
    item: 'group flex cursor-default items-center rounded-dropdown-menu-item-border-radius-default px-dropdown-menu-item-padding-x-default py-dropdown-menu-item-padding-y-default text-dropdown-menu-item-font-size-default font-dropdown-menu-item-font-weight-default text-dropdown-menu-item-text-color-default outline-none duration-200 hover:bg-dropdown-menu-item-bg-color-hover hover:text-dropdown-menu-item-text-color-hover data-[disabled]:cursor-not-allowed data-[disabled]:bg-dropdown-menu-item-bg-color-disabled data-[highlighted]:bg-dropdown-menu-item-bg-color-highlighted data-[disabled]:text-dropdown-menu-item-text-color-disabled data-[highlighted]:text-dropdown-menu-item-text-color-highlighted',
    itemIcon: 'mr-dropdown-menu-item-icon-spacing-default shrink-0 duration-200 [--icon-color:var(--dropdown-menu-item-icon-color-default)] [--icon-size:var(--dropdown-menu-item-icon-size-default)] group-hover:[--icon-color:var(--dropdown-menu-item-icon-color-hover)] group-data-[disabled]:[--icon-color:var(--dropdown-menu-item-icon-color-disabled)] group-data-[highlighted]:[--icon-color:var(--dropdown-menu-item-icon-color-highlighted)]',
    separator: 'my-dropdown-menu-item-separator-spacing-y-default h-px bg-dropdown-menu-item-separator-color-default',
  },
  variants: {
    isDestructive: {
      true: {
        item: 'bg-dropdown-menu-destructive-item-bg-color-default text-dropdown-menu-destructive-item-text-color-default hover:text-dropdown-menu-destructive-item-text-color-hover data-[disabled]:bg-dropdown-menu-destructive-item-bg-color-disabled data-[highlighted]:bg-dropdown-menu-destructive-item-bg-color-highlighted data-[disabled]:text-dropdown-menu-destructive-item-text-color-disabled data-[highlighted]:text-dropdown-menu-destructive-item-text-color-highlighted',
        itemIcon: '[--icon-color:var(--dropdown-menu-destructive-item-icon-color-default)] [--icon-size:var(--dropdown-menu-item-icon-size-default)] group-hover:[--icon-color:var(--dropdown-menu-destructive-item-icon-color-hover)] group-data-[disabled]:[--icon-color:var(--dropdown-menu-destructive-item-icon-color-disabled)] group-data-[highlighted]:[--icon-color:var(--dropdown-menu-destructive-item-icon-color-highlighted)]',
      },
    },
  },
})
