import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useTextFieldStyle = tv({
  slots: {
    box: new StyleBuilder()
      .withClasses('group relative flex items-center overflow-hidden duration-200')
      .withSize('h-(--text-field-height-default)')
      .withBorderRadius('rounded-bl-(--text-field-border-radius-bottom-left-default) rounded-br-(--text-field-border-radius-bottom-right-default) rounded-tl-(--text-field-border-radius-top-left-default) rounded-tr-(--text-field-border-radius-top-right-default)')
      .withBorder('border border-solid border-b-(--text-field-border-bottom-color-default) border-l-(--text-field-border-left-color-default) border-r-(--text-field-border-right-color-default) border-t-(--text-field-border-top-color-default)')
      .withBackgroundColor('bg-(--text-field-bg-color-default)')
      .withShadow('shadow-(--text-field-shadow-default)')
      .build(),
    iconLeft: new StyleBuilder()
      .withClasses('box-content shrink-0 duration-200')
      .withSpacing('ml-(--text-field-icon-left-spacing-default)')
      .withColor('text-(color:--text-field-icon-color-default)')
      .withSize('size-(--text-field-icon-size-default)')
      .build(),
    iconRight: new StyleBuilder()
      .withClasses('box-content shrink-0 duration-200')
      .withSpacing('mr-(--text-field-icon-right-spacing-default)')
      .withColor('text-(color:--text-field-icon-color-default)')
      .withSize('size-(--text-field-icon-size-default)')
      .build(),
    input: new StyleBuilder()
      .withClasses('size-full bg-transparent outline-none')
      .withPadding('pl-(--text-field-padding-left-default) pr-(--text-field-padding-right-default)')
      .withFontSize('text-(length:--text-field-font-size-default)')
      .withFontWeight('font-(--text-field-font-weight-default)')
      .withColor('text-(color:--text-field-text-color-default)')
      .withPlaceholderColor('placeholder:text-(color:--text-field-placeholder-color-default)')
      .build(),
    loader: new StyleBuilder()
      .withSize('size-(--text-field-loader-size-default)')
      .withColor('text-(color:--text-field-loader-color-default)')
      .build(),
    loaderBox: new StyleBuilder()
      .withSpacing('mr-(--text-field-icon-right-spacing-default)')
      .build(),
  },
  variants: {
    isDisabled: {
      true: {
        box: new StyleBuilder()
          .withBorder('border-b-(--text-field-border-bottom-color-disabled) border-l-(--text-field-border-left-color-disabled) border-r-(--text-field-border-right-color-disabled) border-t-(--text-field-border-top-color-disabled)')
          .withBackgroundColor('bg-(--text-field-bg-color-disabled)')
          .withShadow('shadow-(--text-field-shadow-disabled)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-disabled)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-disabled)')
          .build(),
        input: new StyleBuilder()
          .withClasses('!cursor-not-allowed')
          .withColor('text-(color:--text-field-text-color-disabled)')
          .withPlaceholderColor('placeholder:text-(color:--text-field-placeholder-color-disabled)')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--text-field-loader-color-disabled)')
          .build(),
      },
    },
    isHovered: {
      true: {
        box: new StyleBuilder()
          .withBorder('border-b-(--text-field-border-bottom-color-hover) border-l-(--text-field-border-left-color-hover) border-r-(--text-field-border-right-color-hover) border-t-(--text-field-border-top-color-hover)')
          .withBackgroundColor('bg-(--text-field-bg-color-hover)')
          .withShadow('shadow-(--text-field-shadow-hover)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-hover)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-hover)')
          .build(),
        input: new StyleBuilder()
          .withColor('text-(color:--text-field-text-color-hover)')
          .withPlaceholderColor('placeholder:text-(color:--text-field-placeholder-color-hover)')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--text-field-loader-color-hover)')
          .build(),
      },
    },
    isFocused: {
      true: {
        box: new StyleBuilder()
          .withRing('ring-1 ring-(--text-field-ring-color-focus)')
          .withBorder('border-b-(--text-field-border-bottom-color-focus) border-l-(--text-field-border-left-color-focus) border-r-(--text-field-border-right-color-focus) border-t-(--text-field-border-top-color-focus)')
          .withBackgroundColor('bg-(--text-field-bg-color-focus)')
          .withShadow('shadow-(--text-field-shadow-focus)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-focus)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--text-field-icon-color-focus)')
          .build(),
        input: new StyleBuilder()
          .withColor('text-(color:--text-field-text-color-focus)')
          .withPlaceholderColor('placeholder:text-(color:--text-field-placeholder-color-focus)')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--text-field-loader-color-focus)')
          .build(),
      },
    },
    hasError: {
      true: {
        box: new StyleBuilder()
          .withBorder('border-b-(--text-field-border-bottom-color-error) border-l-(--text-field-border-left-color-error) border-r-(--text-field-border-right-color-error) border-t-(--text-field-border-top-color-error)')
          .withBackgroundColor('bg-(--text-field-bg-color-error)')
          .withShadow('shadow-(--text-field-shadow-error)')
          .withRing('focus-visible:ring ring-(--text-field-ring-color-error)')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('!text-(color:--text-field-icon-color-error)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('!text-(color:--text-field-icon-color-error)')
          .build(),
        input: new StyleBuilder()
          .withColor('text-(color:--text-field-text-color-error)')
          .withPlaceholderColor('placeholder:text-(color:--text-field-placeholder-color-error)')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--text-field-loader-color-error)')
          .build(),
      },
    },
    hasIconLeft: {
      true: {
        input: new StyleBuilder()
          .withPadding('pl-(--text-field-with-icon-left-padding-left-default)')
          .build(),
      },
    },
    hasIconRight: {
      true: {
        input: new StyleBuilder()
          .withPadding('pr-(--text-field-with-icon-right-padding-right-default)')
          .build(),
      },
    },
  },
})
