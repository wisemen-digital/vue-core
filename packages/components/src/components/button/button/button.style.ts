import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useButtonStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('relative overflow-hidden cursor-pointer flex items-center justify-center outline-none duration-200')
      .withBackgroundColor('bg-(--button-bg-color-default)')
      .withBorder('border border-solid border-(--button-border-color-default)')
      .withBorderRadius('rounded-(--button-border-radius-default)')
      .withColor('text-(color:--button-text-color-default)')
      .withFontSize('text-(size:--button-font-size-default)')
      .withFontWeight('font-(--button-font-weight-default)')
      .withPadding('px-(--button-padding-left-default)')
      .withShadow('shadow-(--button-shadow-default)')
      .withSize('h-(--button-height-default)')
      .withRing('focus-visible:ring-offset-1 focus-visible:ring-2 ring-offset-(--button-ring-offset-color-focus)')
      .build(),
    iconLeft: new StyleBuilder()
      .withClasses('shrink-0 duration-200')
      .withSize('size-(--button-icon-size-default)')
      .withMargin('mr-(--button-icon-left-spacing-default)')
      .withColor('text-(color:--button-icon-color-default)')
      .build(),
    iconRight: new StyleBuilder()
      .withClasses('shrink-0 duration-200')
      .withSize('size-(--button-icon-size-default)')
      .withMargin('ml-(--button-icon-right-spacing-default)')
      .withColor('text-(color:--button-icon-color-default)')
      .build(),
    loader: new StyleBuilder()
      .withSize('size-(--button-loader-size-default)')
      .withColor('text-(color:--button-loader-color-default)')
      .build(),
    loaderBox: new StyleBuilder()
      .withClasses('absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center')
      .withBackgroundColor('bg-(--button-bg-color-default)')
      .build(),
  },
  variants: {
    variant: {
      'default': {
        base: 'button-primary',
      },
      'destructive-primary': {
        base: 'button-destructive-primary',
      },
      'destructive-secondary': {
        base: 'button-destructive-secondary',
      },
      'destructive-tertiary': {
        base: 'button-destructive-tertiary',
      },
      'secondary': {
        base: 'button-secondary-gray',
      },
      'secondary-color': {
        base: 'button-secondary-color',
      },
      'tertiary': {
        base: 'button-tertiary-gray',
      },
      'tertiary-color': {
        base: 'button-tertiary-color',
      },
    },
    size: {
      '2xl': {
        base: 'button-2xl',
      },
      'default': {},
      'lg': {
        base: 'button-lg',
      },
      'sm': {
        base: 'button-sm',
      },
      'xl': {
        base: 'button-xl',
      },
    },
    isDisabled: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBorder('border-(--button-border-color-disabled)')
          .withBackgroundColor('bg-(--button-bg-color-disabled)')
          .withColor('text-(color:--button-text-color-disabled)')
          .withShadow('shadow-(--button-shadow-disabled)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-disabled)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-disabled)')
          .build(),
      },
    },
    isFocused: {
      true: {
        base: new StyleBuilder()
          .withRing('ring-(--button-ring-color-focus)')
          .withBorder('border-(--button-border-color-focus)')
          .withBackgroundColor('bg-(--button-bg-color-focus)')
          .withColor('text-(color:--button-text-color-focus)')
          .withShadow('shadow-(--button-shadow-focus)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-focus)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-focus)')
          .build(),
      },
    },
    isHovered: {
      true: {
        base: new StyleBuilder()
          .withBorder('border-(--button-border-color-hover)')
          .withBackgroundColor('bg-(--button-bg-color-hover)')
          .withColor('text-(color:--button-text-color-hover)')
          .withShadow('shadow-(--button-shadow-hover)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-hover)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-hover)')
          .build(),
      },
    },
    isActive: {
      true: {
        base: new StyleBuilder()
          .withBorder('border-(--button-border-color-active)')
          .withBackgroundColor('bg-(--button-bg-color-active)')
          .withColor('text-(color:--button-text-color-active)')
          .withShadow('shadow-(--button-shadow-active)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-active)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--button-icon-color-active)')
          .build(),
      },
    },
    isLoading: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .build(),
      },
    },
  },
})
