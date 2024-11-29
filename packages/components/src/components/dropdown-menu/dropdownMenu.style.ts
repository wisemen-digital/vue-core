import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const dropdownMenuStyle = tv({
  slots: {
    arrow: new StyleBuilder()
      .withClasses('absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-xxs')
      .withBorder('border border-solid border-(--dropdown-menu-border-color-default)')
      .withBackgroundColor('bg-(--dropdown-menu-bg-color-default)')
      .withShadow('shadow-(--dropdown-menu-shadow-default)')
      .build(),
    arrowBox: new StyleBuilder()
      .withClasses('relative z-50 -mb-4 h-4 w-10 overflow-hidden')
      .build(),
    dropdown: new StyleBuilder()
      .withClasses('custom-popover-content z-popover')
      .withSize('min-w-(--dropdown-menu-min-width-default) max-w-(--dropdown-menu-max-width-default)')
      .withBorderRadius('rounded-(--dropdown-menu-border-radius-default)')
      .withBorder('border border-solid border-(--dropdown-menu-border-color-default)')
      .withBackgroundColor('bg-(--dropdown-menu-bg-color-default)')
      .withShadow('shadow-(--dropdown-menu-shadow-default)')
      .build(),
    dropdownContent: new StyleBuilder()
      .withClasses('relative size-full overflow-hidden')
      .withPadding('px-(--dropdown-menu-padding-x-default) py-(--dropdown-menu-padding-y-default)')
      .build(),
    group: new StyleBuilder()
      .withSpacing('px-(--dropdown-menu-group-spacing-x-default) pb-(--dropdown-menu-group-spacing-bottom-default) pt-(--dropdown-menu-group-spacing-top-default)')
      .build(),
    groupContent: new StyleBuilder()
      .withSpacing('px-(--dropdown-menu-group-spacing-x-default) pb-(--dropdown-menu-group-spacing-bottom-default) pt-(--dropdown-menu-group-spacing-top-default)')
      .build(),
    groupLabel: new StyleBuilder()
      .withSpacing('px-(--dropdown-menu-group-label-spacing-x-default) pb-(--dropdown-menu-group-label-spacing-bottom-default) pt-(--dropdown-menu-group-label-spacing-top-default)')
      .withFontSize('text-(size:--dropdown-menu-group-label-font-size-default)')
      .withFontWeight('font-(--dropdown-menu-group-label-font-weight-default)')
      .withColor('text-(color:--dropdown-menu-group-label-text-color-default)')
      .build(),
    item: new StyleBuilder()
      .withClasses('cursor-pointer data-[disabled]:cursor-not-allowed group flex items-center justify-between overflow-hidden outline-none duration-200')
      .withBorderRadius('rounded-(--dropdown-menu-item-border-radius-default)')
      .withPadding('px-(--dropdown-menu-item-padding-x-default) py-(--dropdown-menu-item-padding-y-default)')
      .withFontSize('text-(size:--dropdown-menu-item-font-size-default)')
      .withFontWeight('font-(--dropdown-menu-item-font-weight-default)')
      .withColor('text-(color:--dropdown-menu-item-text-color-default) hover:text-(color:--dropdown-menu-item-text-color-hover) data-[disabled]:text-(color:--dropdown-menu-item-text-color-disabled) data-[highlighted]:text-(color:--dropdown-menu-item-text-color-highlighted)')
      .withBackgroundColor('bg-(--dropdown-menu-item-bg-color-default) hover:bg-(--dropdown-menu-item-bg-color-hover) data-[disabled]:bg-(--dropdown-menu-item-bg-color-disabled) data-[highlighted]:bg-(--dropdown-menu-item-bg-color-highlighted)')
      .build(),
    itemIcon: new StyleBuilder()
      .withClasses('shrink-0 duration-200')
      .withMargin('mr-(--dropdown-menu-item-icon-spacing-default)')
      .withColor('text-(color:--dropdown-menu-item-icon-color-default) group-hover:text(color:--dropdown-menu-item-icon-color-hover) group-data-[disabled]:text(color:--dropdown-menu-item-icon-color-disabled) group-data-[highlighted]:text(color:--dropdown-menu-item-icon-color-highlighted)')
      .withSize('size-(--dropdown-menu-item-icon-size-default)')
      .build(),
    separator: new StyleBuilder()
      .withClasses('h-px')
      .withMargin('my-(--dropdown-menu-item-separator-spacing-y-default)')
      .withBackgroundColor('bg-(--dropdown-menu-item-separator-color-default)')
      .build(),
  },
  variants: {
    isDestructive: {
      true: {
        item: new StyleBuilder()
          .withBackgroundColor('bg-(--dropdown-menu-destructive-item-bg-color-default) hover:bg-(--dropdown-menu-destructive-item-bg-color-hover) data-[disabled]:bg-(--dropdown-menu-destructive-item-bg-color-disabled) data-[highlighted]:bg-(--dropdown-menu-destructive-item-bg-color-highlighted)')
          .withColor('!text-(color:--dropdown-menu-destructive-item-text-color-default) hover:!text-(color:--dropdown-menu-destructive-item-text-color-hover) data-[disabled]:!text-(color:--dropdown-menu-destructive-item-text-color-disabled) data-[highlighted]:!text-(color:--dropdown-menu-destructive-item-text-color-highlighted)')
          .build(),
        itemIcon: new StyleBuilder()
          .withClasses('shrink-0 duration-200')
          .withMargin('mr-(--dropdown-menu-item-icon-spacing-default)')
          .withColor('!text-(color:--dropdown-menu-destructive-item-icon-color-default) group-hover:!text-(color:--dropdown-menu-destructive-item-icon-color-hover) group-data-[disabled]:!text-(color:--dropdown-menu-destructive-item-icon-color-disabled) group-data-[highlighted]:!text-(color:--dropdown-menu-destructive-item-icon-color-highlighted)')
          .withSize('size-(--dropdown-menu-item-icon-size-default)')
          .build(),
      },
    },
  },
})
