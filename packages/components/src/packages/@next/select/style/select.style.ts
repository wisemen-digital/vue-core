import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const createSelectStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withBase('overflow-hidden')
      .withFlex('flex items-center')
      .withSize('size-full')
      .build(),
    baseMultiple: new StyleBuilder()
      .withPadding('px-3 group-data-[has-icon-left=true]/select:pl-2 group-data-[has-icon-right=true]/select:pr-2')
      .withFlex('flex items-center gap-xs')
      .withSize('size-full')
      .build(),
    baseSingle: new StyleBuilder()
      .withPadding('px-3 group-data-[has-icon-left=true]/select:pl-2 group-data-[has-icon-right=true]/select:pr-2')
      .withFlex('flex items-center')
      .build(),
    content: new StyleBuilder()
      .withBase('outline-none')
      .withBase('overflow-auto')
      .withPadding('p-sm')
      .withHeight('max-h-80')
      .build(),
    empty: new StyleBuilder()
      .withColor('text-tertiary')
      .withFontSize('text-sm')
      .withPadding('p-sm')
      .build(),
    group: new StyleBuilder()
      .withFlex('flex flex-col gap-y-xxs')
      .build(),
    groupLabel: new StyleBuilder()
      .withColor('text-tertiary')
      .withFontSize('text-sm')
      .withFontWeight('font-medium')
      .withSpacing('py-xs')
      .build(),
    iconLeft: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('ml-3')
      .withColor('text-quaternary group-data-[is-disabled=true]/select:text-fg-disabled')
      .build(),
    iconRight: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('mr-3')
      .withColor('text-quaternary group-data-[is-disabled=true]/select:text-fg-disabled')
      .build(),
    inlineSearchInput: new StyleBuilder()
      .withBase('z-10')
      .withSize('size-full')
      .withColor('text-primary')
      .withPadding('px-3 group-data-[has-icon-left=true]/select:pl-2 group-data-[has-icon-right=true]/select:pr-2')
      .withCursor('disabled:cursor-not-allowed')
      .build(),
    item: new StyleBuilder()
      .withBase('outline-none')
      .withSize('w-full')
      .withCursor('cursor-pointer data-disabled:cursor-not-allowed')
      .withBorderRadius('rounded-md')
      .withPadding('p-md')
      .withSpacing('my-xxs')
      .withFlex('flex items-center justify-between')
      .withFontSize('text-sm')
      .withColor('text-primary data-disabled:text-disabled')
      .withBackgroundColor('data-[state=checked]:bg-secondary not-data-disabled:data-highlighted:bg-secondary-hover not-data-disabled:hover:bg-secondary-hover')
      .withTransition('not-data-disabled:data-highlighted:data-[state=checked]:brightness-98')
      .build(),
    itemIndicator: new StyleBuilder()
      .withSize('size-4')
      .withColor('text-secondary')
      .build(),
    loader: new StyleBuilder()
      .withBase('pointer-events-none')
      .withBase('shrink-0')
      .withSpacing('mr-3')
      .withSize('size-4')
      .withColor('text-quaternary')
      .build(),
    root: new StyleBuilder()
      .withBase('relative group/select overflow-hidden')
      .withFlex('flex items-center')
      .withHeight('h-10')
      // Default
      .withBorder('border border-solid border-primary focus-within:border-brand-500')
      // Disabled
      .withBorder('data-[is-disabled=true]:border-disabled-subtle')
      // Invalid
      .withBorder('data-[is-invalid=true]:border-error data-[is-invalid=true]:focus-within:border-error')
      .withBackgroundColor('bg-primary data-[is-disabled=true]:bg-disabled-subtle')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-xs')
      .withRing('ring-brand-500 focus-within:ring data-[is-invalid=true]:ring-error-500')
      .withTransition('duration-200')
      .withCursor('data-[is-disabled=true]:cursor-not-allowed')
      .build(),
    searchInput: '',
    separator: new StyleBuilder()
      .withHeight('h-px')
      .withBackgroundColor('bg-quaternary')
      .withSpacing('my-xs')
      .build(),
  },
})

export type SelectStyle = VariantProps<typeof createSelectStyle>
export type CreateSelectStyle = ReturnType<typeof createSelectStyle>
