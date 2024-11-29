import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useIconButtonStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('relative overflow-hidden cursor-pointer flex items-center justify-center border border-solid outline-none duration-200')
      .withBackgroundColor('bg-(--icon-button-bg-color-default)')
      .withBorder('border-(--icon-button-border-color-default)')
      .withBorderRadius('rounded-(--icon-button-border-radius-default)')
      .withColor('text-(color:--icon-button-text-color-default)')
      .withPadding('px-(--icon-button-padding-left-default)')
      .withShadow('shadow-(--icon-button-shadow-default)')
      .withSize('size-(--icon-button-size-default)')
      .withRing('ring-offset-1 focus-visible:ring-2 ring-offset-(--icon-button-ring-offset-color-focus)')
      .build(),
    icon: new StyleBuilder()
      .withClasses('shrink-0 duration-200')
      .withSize('size-(--icon-button-icon-size-default)')
      .withMargin('mr-(--icon-button-icon-left-spacing-default)')
      .withColor('text-(color:--icon-button-icon-color-default)')
      .build(),
    loader: new StyleBuilder()
      .withSize('size-(--icon-button-loader-size-default)')
      .withColor('text-(color:--icon-button-loader-color-default)')
      .build(),
    loaderBox: new StyleBuilder()
      .withClasses('absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center')
      .withBackgroundColor('bg-(--icon-button-bg-color-default)')
      .build(),
    tooltip: new StyleBuilder()
      .withColor('text-(color:--icon-button-tooltip-text-color-default)')
      .withFontSize('text-(size:--icon-button-tooltip-font-size-default)')
      .withFontWeight('font-(--icon-button-tooltip-font-weight-default)')
      .withPadding('px-(--icon-button-tooltip-padding-x-default)')
      .withPadding('py-(--icon-button-tooltip-padding-y-default)')
      .build(),
  },
  variants: {
    variant: {
      'default': {
        base: 'icon-button-primary',
      },
      'destructive-primary': {
        base: 'icon-button-destructive-primary',
      },
      'destructive-secondary': {
        base: 'icon-button-destructive-secondary',
      },
      'destructive-tertiary': {
        base: 'icon-button-destructive-tertiary',
      },
      'secondary': {
        base: 'icon-button-secondary-gray',
      },
      'secondary-color': {
        base: 'icon-button-secondary-color',
      },
      'tertiary': {
        base: 'icon-button-tertiary-gray',
      },
      'tertiary-color': {
        base: 'icon-button-tertiary-color',
      },
    },
    size: {
      '2xl': {
        base: 'icon-button-2xl',
      },
      'default': {},
      'lg': {
        base: 'icon-button-lg',
      },
      'sm': {
        base: 'icon-button-sm',
      },
      'xl': {
        base: 'icon-button-xl',
      },
    },
    isDisabled: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBorder('border-(--icon-button-border-color-disabled)')
          .withBackgroundColor('bg-(--icon-button-bg-color-disabled)')
          .withColor('text-(color:--icon-button-text-color-disabled)')
          .withShadow('shadow-(--icon-button-shadow-disabled)')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(color:--icon-button-icon-color-disabled)')
          .build(),
      },
    },
    isFocused: {
      true: {
        base: new StyleBuilder()
          .withRing('ring-(--icon-button-ring-color-focus)')
          .withBorder('border-(--icon-button-border-color-focus)')
          .withBackgroundColor('bg-(--icon-button-bg-color-focus)')
          .withColor('text-(color:--icon-button-text-color-focus)')
          .withShadow('shadow-(--icon-button-shadow-focus)')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(color:--icon-button-icon-color-focus)')
          .build(),
      },
    },
    isHovered: {
      true: {
        base: new StyleBuilder()
          .withBorder('border-(--icon-button-border-color-hover)')
          .withBackgroundColor('bg-(--icon-button-bg-color-hover)')
          .withColor('text-(color:--icon-button-text-color-hover)')
          .withShadow('shadow-(--icon-button-shadow-hover)')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(color:--icon-button-icon-color-hover)')
          .build(),
      },
    },
    isActive: {
      true: {
        base: new StyleBuilder()
          .withBorder('border-(--icon-button-border-color-active)')
          .withBackgroundColor('bg-(--icon-button-bg-color-active)')
          .withColor('text-(color:--icon-button-text-color-active)')
          .withShadow('shadow-(--icon-button-shadow-active)')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(color:--icon-button-icon-color-active)')
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
