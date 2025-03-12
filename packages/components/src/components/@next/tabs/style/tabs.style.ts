import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const createTabsStyle = tv({
  slots: {
    base: new StyleBuilder()
      .build(),
    content: new StyleBuilder()
      .withBase('outline-none')
      .build(),
    indicator: new StyleBuilder()
      .withBase('absolute bottom-0')
      .withSize('w-(--reka-tabs-indicator-size)')
      .withTranslate('translate-x-(--reka-tabs-indicator-position)')
      .withTransition('duration-200')
      .build(),
    item: new StyleBuilder()
      .withBase('relative outline-none')
      .withFontSize('text-sm')
      .withFontWeight('font-semibold')
      .withTransition('duration-200')
      .withCursor('cursor-pointer disabled:cursor-not-allowed')
      .withZIndex('z-10')
      .build(),
    list: new StyleBuilder()
      .withBase('relative flex')
      .build(),
  },
  variants: {
    variant: {
      'button-border': {
        base: new StyleBuilder()
          .withBackgroundColor('bg-secondary-alt')
          .withBorder('border border-secondary')
          .withBorderRadius('rounded-lg')
          .withSpacing('p-xs')
          .build(),
        indicator: new StyleBuilder()
          .withBackgroundColor('bg-primary-alt')
          .withBorderRadius('rounded-sm')
          .withHeight('h-full')
          .withShadow('shadow-xs')
          .build(),
        item: new StyleBuilder()
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withColor('data-[state=active]:text-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .withSpacing('py-md px-lg')
          .withBorderRadius('rounded-sm')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-x-xs')
          .build(),
      },
      'button-brand': {
        indicator: new StyleBuilder()
          .withHeight('h-full')
          .withBorderRadius('rounded-sm')
          .withBackgroundColor('bg-brand-primary-alt')
          .build(),
        item: new StyleBuilder()
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withBorderRadius('rounded-sm')
          .withSpacing('py-md px-lg')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-x-xs')
          .build(),
      },
      'underline': {
        indicator: new StyleBuilder()
          .withSize('h-0.5')
          .withBackgroundColor('bg-fg-brand-primary-alt')
          .build(),
        item: new StyleBuilder()
          .withPadding('px-xs py-lg')
          .withBorderRadius('rounded-md')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-x-lg')
          .build(),
      },
    },
  },
})

export type TabsStyle = VariantProps<typeof createTabsStyle>
export type CreateTabsStyle = ReturnType<typeof createTabsStyle>
