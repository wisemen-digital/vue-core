import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const createTabsStyle = tv({
  slots: {
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
    root: new StyleBuilder()
      .build(),
  },
  variants: {
    variant: {
      'button-border': {
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
          .withTransition('enabled:hover:brightness-90')
          .build(),
        list: new StyleBuilder()
          .withSpacing('gap-x-xs')
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
          .withHeight('h-full')
          .withBorderRadius('rounded-sm')
          .withBackgroundColor('bg-brand-primary-alt')
          .build(),
        item: new StyleBuilder()
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withBorderRadius('rounded-sm')
          .withSpacing('py-md px-lg')
          .withBackgroundColor('enabled:hover:data-[state=inactive]:bg-primary-hover')
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
          .withPadding('px-md py-sm')
          .withMargin('my-sm')
          .withBorderRadius('rounded-md')
          .withRing('focus-visible:ring-2 ring-offset-2 ring-fg-brand-primary-alt')
          .withColor('data-[state=active]:text-brand-secondary data-[state=inactive]:text-quaternary disabled:opacity-75')
          .withBackgroundColor('enabled:hover:bg-primary-hover enabled:data-[state=active]:hover:bg-brand-primary-alt')
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
