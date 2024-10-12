import { tv } from '@/libs/twVariants.lib'

export const dropdownMenuStyle = tv({
  slots: {
    dropdown: 'z-popover custom-popover-content min-w-dropdown-menu-min-width-default max-w-dropdown-menu-max-width-default overflow-hidden rounded-dropdown-menu-border-radius-default border border-solid border-dropdown-menu-border-color-default bg-dropdown-menu-bg-color-default px-dropdown-menu-padding-x-default py-dropdown-menu-padding-y-default shadow-dropdown-menu-shadow-default',
    group: 'px-dropdown-menu-group-spacing-x-default pb-dropdown-menu-group-spacing-bottom-default pt-dropdown-menu-group-spacing-top-default',
    groupLabel: 'px-dropdown-menu-group-label-spacing-x-default pb-dropdown-menu-group-label-spacing-bottom-default pt-dropdown-menu-group-label-spacing-top-default text-dropdown-menu-group-label-font-size-default font-dropdown-menu-group-label-font-weight-default text-dropdown-menu-group-label-text-color-default',
    item: 'group flex cursor-default items-center rounded-dropdown-menu-item-border-radius-default px-dropdown-menu-item-padding-x-default py-dropdown-menu-item-padding-y-default text-dropdown-menu-item-font-size-default font-dropdown-menu-item-font-weight-default text-dropdown-menu-item-text-color-default outline-none hover:bg-dropdown-menu-item-bg-color-hover hover:text-dropdown-menu-item-text-color-hover data-[disabled]:cursor-not-allowed data-[disabled]:bg-dropdown-menu-item-bg-color-disabled data-[highlighted]:bg-dropdown-menu-item-bg-color-highlighted data-[disabled]:text-dropdown-menu-item-text-color-disabled data-[highlighted]:text-dropdown-menu-item-text-color-highlighted',
    itemIcon: 'mr-dropdown-menu-item-icon-spacing-default shrink-0 [--icon-color:var(--dropdown-menu-item-icon-color-default)] [--icon-size:var(--dropdown-menu-item-icon-size-default)] group-hover:[--icon-color:var(--dropdown-menu-item-icon-color-hover)] group-data-[disabled]:[--icon-color:var(--dropdown-menu-item-icon-color-disabled)] group-data-[highlighted]:[--icon-color:var(--dropdown-menu-item-icon-color-highlighted)]',
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
