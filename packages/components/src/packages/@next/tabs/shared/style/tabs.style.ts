import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const createTabsStyle = tv({
  slots: {
    content: new StyleBuilder()
      .withBase('outline-none')
      .build(),
    indicator: new StyleBuilder()
      .withBase('absolute group-data-[orientation=horizontal]:bottom-0 group-data-[orientation=vertical]:left-0')
      .withSize('group-data-[orientation=horizontal]:w-(--reka-tabs-indicator-size) group-data-[orientation=vertical]:h-(--reka-tabs-indicator-size)')
      .withTranslate('group-data-[orientation=horizontal]:translate-x-(--reka-tabs-indicator-position) group-data-[orientation=vertical]:translate-y-(--reka-tabs-indicator-position)')
      .withTransition('duration-200')
      .build(),
    item: new StyleBuilder()
      .withBase('relative outline-none data-[orientation=vertical]:text-left')
      .withFontSize('text-sm')
      .withFontWeight('font-semibold')
      .withTransition('duration-200')
      .withCursor('cursor-pointer disabled:cursor-not-allowed')
      .withZIndex('z-10')
      .build(),
    list: new StyleBuilder()
      .withBase('group relative flex data-[orientation=vertical]:flex-col')
      .build(),
    root: new StyleBuilder()
      .build(),
  },
  variants: {
    variant: {
      'button-border': {
        indicator: new StyleBuilder()
          .withBackgroundColor('bg-primary-alt')
          .withBorderRadius('rounded-sm')
          .withSize('group-data-[orientation=horizontal]:h-full group-data-[orientation=vertical]:w-full')
          .withShadow('shadow-xs')
          .build(),
        item: new StyleBuilder()
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withColor('data-[state=active]:text-secondary data-[state=inactive]:text-quaternary enabled:data-[state=inactive]:hover:text-tertiary disabled:opacity-75')
          .withSpacing('py-md px-lg')
          .withBorderRadius('rounded-sm')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-xs')
          .build(),
        root: new StyleBuilder()
          .withBackgroundColor('bg-secondary-alt')
          .withBorder('border border-secondary')
          .withBorderRadius('rounded-lg')
          .withSpacing('p-xs')
          .build(),
      },
      'button-brand': {
        indicator: new StyleBuilder()
          .withSize('group-data-[orientation=horizontal]:h-full group-data-[orientation=vertical]:w-full')
          .withBorderRadius('rounded-sm')
          .withBackgroundColor('bg-brand-primary-alt')
          .build(),
        item: new StyleBuilder()
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary enabled:data-[state=inactive]:hover:text-tertiary disabled:opacity-75')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withBorderRadius('rounded-sm')
          .withSpacing('py-md px-lg')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-xs')
          .build(),
      },
      'underline': {
        indicator: new StyleBuilder()
          .withSize('group-data-[orientation=horizontal]:h-0.5 group-data-[orientation=vertical]:w-0.5')
          .withBackgroundColor('bg-fg-brand-primary-alt')
          .build(),
        item: new StyleBuilder()
          .withPadding('px-md py-sm')
          .withMargin('group-data-[orientation=horizontal]:my-sm group-data-[orientation=vertical]:mx-sm')
          .withBorderRadius('rounded-md')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .withBackgroundColor('enabled:hover:bg-primary-hover enabled:data-[state=active]:hover:bg-brand-primary-alt')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-lg')
          .build(),
      },
    },
  },
})

export type TabsStyle = VariantProps<typeof createTabsStyle>
export type CreateTabsStyle = ReturnType<typeof createTabsStyle>
