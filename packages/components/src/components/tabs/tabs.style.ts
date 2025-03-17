import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useTabsStyle = tv({
  slots: {
    container: new StyleBuilder()
      .withClasses('relative')
      .withBorder('border border-solid border-b-(--tabs-container-border-bottom-color-default) border-l-(--tabs-container-border-left-color-default) border-r-(--tabs-container-border-right-color-default) border-t-(--tabs-container-border-top-color-default)')
      .withBackgroundColor('bg-(--tabs-container-bg-color-default)')
      .withPadding('px-(--tabs-container-padding-x-default) py-(--tabs-container-padding-y-default)')
      .withBorderRadius('rounded-(--tabs-container-border-radius-default)')
      .build(),
    indicator: new StyleBuilder()
      .withClasses('absolute bottom-0 left-0 duration-200')
      .withSize('h-(--tabs-indicator-height-default) w-(--reka-tabs-indicator-size)')
      .withTranslate('translate-x-(--reka-tabs-indicator-position)')
      .withBorderRadius('rounded-(--tabs-indicator-border-radius-default)')
      .withBorder('border border-solid border-b-(--tabs-indicator-border-bottom-color-default) border-l-(--tabs-indicator-border-left-color-default) border-r-(--tabs-indicator-border-right-color-default) border-t-(--tabs-indicator-border-top-color-default)')
      .withBackgroundColor('bg-(--tabs-indicator-bg-color-default)')
      .withShadow('shadow-(--tabs-indicator-shadow-default)')
      .build(),
    item: new StyleBuilder()
      .withClasses('cursor-pointer group outline-none')
      .withPadding('px-(--tabs-item-container-padding-x-default) py-(--tabs-item-container-padding-y-default)')
      .build(),
    itemContent: new StyleBuilder()
      .withClasses('relative z-tabs-item flex items-center duration-200')
      .withBorderRadius('rounded-(--tabs-item-border-radius-default)')
      .withBackgroundColor('bg-(--tabs-item-bg-color-default) group-hover:bg-(--tabs-item-bg-color-hover) group-focus-visible:!bg-(--tabs-item-bg-color-focus) group-data-[disabled]:bg-(--tabs-item-bg-color-disabled) group-data-[state=active]:bg-(--tabs-item-bg-color-active) group-hover:group-data-[state=active]:bg-(--tabs-item-bg-color-active)')
      .withPadding('px-(--tabs-item-padding-x-default) py-(--tabs-item-padding-y-default)')
      .withFontSize('text-(length:--tabs-item-font-size-default)')
      .withFontWeight('font-(--tabs-item-font-weight-default)')
      .withColor('text-(color:--tabs-item-text-color-default) group-hover:text-(color:--tabs-item-text-color-hover) group-focus-visible:!text-(color:--tabs-item-text-color-focus) group-data-[disabled]:text-(color:--tabs-item-text-color-disabled) group-data-[state=active]:text-(color:--tabs-item-text-color-active) group-hover:group-data-[state=active]:text-(color:--tabs-item-text-color-active)')
      .withRing('ring-offset-1 ring-(--tabs-item-ring-color-default)')
      .withShadow('shadow-(--tabs-item-shadow-default)')
      .build(),
  },
})
