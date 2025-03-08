import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const createButtonStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withBase('group/button outline-none grid items-center justify-center [grid-template-areas:"stack"] whitespace-nowrap')
      .withRing('focus-visible:ring-2 focus-visible:ring-offset-1 ring-brand-600')
      .withFontWeight('font-medium')
      .withBorder('border border-solid')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-button')
      .withCursor('cursor-pointer disabled:cursor-not-allowed')
      .withTransition('duration-100 enabled:active:scale-99')
      .build(),
    contentContainer: new StyleBuilder()
      .withClasses('flex items-center justify-center [grid-area:stack]')
      .withTransition('duration-200')
      .build(),
    iconLeft: new StyleBuilder()
      .withBase('shrink-0')
      .build(),
    iconRight: new StyleBuilder()
      .withBase('shrink-0')
      .build(),
    loader: new StyleBuilder()
      .withClasses('min-w-5 min-h-5 [grid-area:stack] mx-auto')
      .withTransition('duration-200')
      .build(),
  },
  variants: {
    variant: {
      'destructive-primary': {
        base: new StyleBuilder()
          .withColor('text-white disabled:text-fg-disabled')
          .withBackgroundColor('bg-error-600 disabled:bg-disabled')
          .withBorder('border-error-600 disabled:border-disabled-subtle')
          .withRing('ring-error-600')
          .withTransition('enabled:hover:brightness-95 enabled:active:brightness-90')
          .build(),
      },
      'destructive-secondary': {
        base: new StyleBuilder()
          .withColor('text-error-700 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-error-50 enabled:active:brightness-98')
          .withBorder('border-error-300 disabled:border-disabled-subtle')
          .withRing('ring-error-600')
          .build(),
      },
      'destructive-tertiary': {
        base: new StyleBuilder()
          .withColor('text-error-700 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-error-50 enabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .withRing('ring-error-600')
          .build(),
      },
      'primary': {
        base: new StyleBuilder()
          .withColor('text-white disabled:text-fg-disabled')
          .withBackgroundColor('bg-brand-600 disabled:bg-disabled')
          .withBorder('border-brand-600 disabled:border-disabled-subtle')
          .withTransition('enabled:hover:brightness-95 enabled:active:brightness-90')
          .build(),
      },
      'secondary-color': {
        base: new StyleBuilder()
          .withColor('text-brand-700 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-brand-50 enabled:active:brightness-98')
          .withBorder('border-brand-300 disabled:border-disabled-subtle')
          .build(),
      },
      'secondary-gray': {
        base: new StyleBuilder()
          .withColor('text-gray-700 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-gray-50 enabled:active:brightness-98')
          .withBorder('border-gray-300 disabled:border-disabled-subtle')
          .build(),
      },
      'tertiary-color': {
        base: new StyleBuilder()
          .withColor('text-brand-700 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-brand-50 enabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .build(),
      },
      'tertiary-gray': {
        base: new StyleBuilder()
          .withColor('text-gray-600 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent enabled:hover:bg-gray-50 enabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .build(),
      },
    },
    size: {
      '2xl': {
        base: new StyleBuilder()
          .withHeight('h-15')
          .withPadding('px-5.5')
          .withFontSize('text-lg')
          .withBorderRadius('rounded-lg')
          .build(),
        iconLeft: new StyleBuilder()
          .withMargin('mr-md')
          .withSize('size-5')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-md')
          .withSize('size-5')
          .build(),
      },
      'lg': {
        base: new StyleBuilder()
          .withHeight('h-11')
          .withPadding('px-xl')
          .withFontSize('text-md')
          .build(),
        iconLeft: new StyleBuilder()
          .withMargin('mr-sm')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-sm')
          .withSize('size-4')
          .build(),
      },
      'md': {
        base: new StyleBuilder()
          .withHeight('h-10')
          .withPadding('px-3.5')
          .withFontSize('text-sm')
          .build(),
        iconLeft: new StyleBuilder()
          .withMargin('mr-xs')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-xs')
          .withSize('size-4')
          .build(),
      },
      'sm': {
        base: new StyleBuilder()
          .withHeight('h-9')
          .withPadding('px-lg')
          .withFontSize('text-sm')
          .build(),
        iconLeft: new StyleBuilder()
          .withMargin('mr-xs')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-xs')
          .withSize('size-4')
          .build(),
      },
      'xl': {
        base: new StyleBuilder()
          .withHeight('h-12')
          .withPadding('px-4.5')
          .withFontSize('text-md')
          .build(),
        iconLeft: new StyleBuilder()
          .withMargin('mr-sm')
          .withSize('size-5')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-sm')
          .withSize('size-5')
          .build(),
      },
    },
    isLoading: {
      false: {
        loader: new StyleBuilder()
          .withClasses('opacity-0 invisible')
          .build(),
      },
      true: {
        contentContainer: new StyleBuilder()
          .withClasses('opacity-0 invisible')
          .build(),
      },
    },
  },
})

export type ButtonStyle = VariantProps<typeof createButtonStyle>
export type CreateButtonStyle = ReturnType<typeof createButtonStyle>
