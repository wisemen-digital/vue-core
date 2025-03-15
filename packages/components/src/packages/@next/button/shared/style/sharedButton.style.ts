import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

// Do not use `enabled:` since this won't work for the router link button.

export const createSharedButtonStyle = tv({
  slots: {
    contentContainer: new StyleBuilder()
      .withClasses('[grid-area:stack] group-data-[is-loading=true]/button:invisible group-data-[is-loading=true]/button:opacity-0')
      .withHeight('h-full')
      .withFlex('flex items-center justify-center')
      .withTransition('duration-200')
      .build(),
    loader: new StyleBuilder()
      .withClasses('[grid-area:stack] mx-auto group-data-[is-loading=false]/button:invisible group-data-[is-loading=false]/button:opacity-0')
      .withSize('size-5')
      .withTransition('duration-200')
      .build(),
    root: new StyleBuilder()
      .withBase('group/button outline-none whitespace-nowrap')
      .withGrid('grid items-center justify-center justify-self-start [grid-template-areas:"stack"]')
      .withRing('focus-visible:ring-2 focus-visible:ring-offset-1 ring-brand-600')
      .withBorder('border border-solid')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-button')
      .withCursor('cursor-pointer disabled:cursor-not-allowed data-[is-loading=true]:cursor-not-allowed')
      .withTransition('duration-100 data-[is-loading=false]:not-disabled:active:scale-99')
      .build(),
  },
  variants: {
    variant: {
      'destructive-primary': {
        root: new StyleBuilder()
          .withColor('text-white disabled:text-fg-disabled')
          .withBackgroundColor('bg-error-600 disabled:bg-disabled')
          .withBorder('border-error-600 disabled:border-disabled-subtle')
          .withRing('ring-error-600')
          .withTransition('data-[is-loading=false]:not-disabled:hover:brightness-95 data-[is-loading=false]:not-disabled:active:brightness-90')
          .build(),
      },
      'destructive-secondary': {
        root: new StyleBuilder()
          .withColor('text-error-700 dark:text-error-200 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent dark:bg-error-950 data-[is-loading=false]:not-disabled:hover:bg-error-50 dark:data-[is-loading=false]:not-disabled:hover:bg-error-900 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-error-300 dark:border-error-800 disabled:border-disabled-subtle')
          .withRing('ring-error-600')
          .build(),
      },
      'destructive-tertiary': {
        root: new StyleBuilder()
          .withColor('text-error-700 dark:text-error-300 dark:data-[is-loading=false]:not-disabled:hover:text-error-200 disabled:text-fg-disabled')
          .withBackgroundColor('bg-transparent data-[is-loading=false]:not-disabled:hover:bg-error-50 dark:data-[is-loading=false]:not-disabled:hover:bg-error-900 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .withRing('ring-error-600')
          .build(),
      },
      'primary': {
        root: new StyleBuilder()
          .withColor('text-white disabled:text-fg-disabled')
          .withBackgroundColor('bg-brand-600 disabled:bg-disabled')
          .withBorder('border-brand-600 disabled:border-disabled-subtle')
          .withTransition('data-[is-loading=false]:not-disabled:hover:brightness-95 data-[is-loading=false]:not-disabled:active:brightness-90')
          .build(),
      },
      'secondary-color': {
        root: new StyleBuilder()
          .withColor('text-brand-700 disabled:text-fg-disabled dark:text-gray-300')
          .withBackgroundColor('bg-transparent data-[is-loading=false]:not-disabled:hover:bg-brand-50 data-[is-loading=false]:not-disabled:hover:dark:bg-gray-800 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-brand-300 disabled:border-disabled-subtle dark:border-gray-700')
          .build(),
      },
      'secondary-gray': {
        root: new StyleBuilder()
          .withColor('text-gray-700 disabled:text-fg-disabled dark:text-gray-300')
          .withBackgroundColor('bg-transparent data-[is-loading=false]:not-disabled:hover:bg-gray-50 data-[is-loading=false]:not-disabled:hover:dark:bg-gray-800 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-gray-300 disabled:border-disabled-subtle dark:border-gray-700')
          .build(),
      },
      'tertiary-color': {
        root: new StyleBuilder()
          .withColor('text-brand-700 disabled:text-fg-disabled dark:text-gray-300')
          .withBackgroundColor('bg-transparent data-[is-loading=false]:not-disabled:hover:bg-brand-50 data-[is-loading=false]:not-disabled:dark:hover:bg-gray-800 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .build(),
      },
      'tertiary-gray': {
        root: new StyleBuilder()
          .withColor('text-gray-600 disabled:text-fg-disabled dark:text-gray-300')
          .withBackgroundColor('bg-transparent data-[is-loading=false]:not-disabled:hover:bg-gray-50 data-[is-loading=false]:not-disabled:dark:hover:bg-gray-800 data-[is-loading=false]:not-disabled:active:brightness-98')
          .withBorder('border-transparent')
          .withShadow('shadow-none')
          .build(),
      },
    },
    size: {
      '2xl': {
        root: new StyleBuilder()
          .withHeight('min-w-15 h-15')
          .withBorderRadius('rounded-lg')
          .build(),
      },
      'lg': {
        root: new StyleBuilder()
          .withHeight('min-w-11 h-11')
          .build(),
      },
      'md': {
        root: new StyleBuilder()
          .withHeight('min-w-10 h-10')
          .build(),
      },
      'sm': {
        root: new StyleBuilder()
          .withHeight('min-w-9 h-9')
          .build(),
      },
      'xl': {
        root: new StyleBuilder()
          .withHeight('min-w-12 h-12')
          .build(),
      },
    },
  },
})

export type SharedButtonStyle = VariantProps<typeof createSharedButtonStyle>
export type CreateSharedButtonStyle = ReturnType<typeof createSharedButtonStyle>
