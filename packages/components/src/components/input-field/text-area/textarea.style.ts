import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const textareaStyle = tv({
  slots: {
    textarea: new StyleBuilder()
      .withClasses('w-full outline-none duration-200 transition-[color,border-color,background-color,box-shadow]')
      .withSize('max-h-(--textarea-max-height-default) min-h-(--textarea-min-height-default)')
      .withBorderRadius('rounded-bl-(--textarea-border-radius-bottom-left-default) rounded-br-(--textarea-border-radius-bottom-right-default) rounded-tl-(--textarea-border-radius-top-left-default) rounded-tr-(--textarea-border-radius-top-right-default)')
      .withBorder('border border-solid border-b-(--textarea-border-bottom-color-default) border-l-(--textarea-border-left-color-default) border-r-(--textarea-border-right-color-default) border-t-(--textarea-border-top-color-default)')
      .withBackgroundColor('bg-(--textarea-bg-color-default)')
      .withPadding('px-(--textarea-padding-x-default) py-(--textarea-padding-y-default)')
      .withFontSize('text-(length:--textarea-font-size-default)')
      .withFontWeight('font-(--textarea-font-weight-default)')
      .withLeading('leading-(--textarea-line-height-default)')
      .withColor('text-(color:--textarea-text-color-default)')
      .withShadow('shadow-(--textarea-shadow-default)')
      .withRing('ring-offset-(--textarea-ring-offset-color-focus)')
      .withPlaceholderColor('placeholder:text-(--textarea-placeholder-color-default)')
      .build(),
  },
  variants: {
    isDisabled: {
      true: {
        textarea: new StyleBuilder()
          .withClasses('cursor-not-allowed duration-200')
          .withBorder('border-b-(--textarea-border-bottom-color-disabled) border-l-(--textarea-border-left-color-disabled) border-r-(--textarea-border-right-color-disabled) border-t-(--textarea-border-top-color-disabled)')
          .withBackgroundColor('bg-(--textarea-bg-color-disabled)')
          .withColor('text-(--textarea-text-color-disabled)')
          .withShadow('shadow-(--textarea-shadow-disabled)')
          .withPlaceholderColor('placeholder:text-(--textarea-placeholder-color-disabled)')
          .build(),
      },
    },
    isHovered: {
      true: {
        textarea: new StyleBuilder()
          .withBorder('border-b-(--textarea-border-bottom-color-hover) border-l-(--textarea-border-left-color-hover) border-r-(--textarea-border-right-color-hover) border-t-(--textarea-border-top-color-hover)')
          .withBackgroundColor('bg-(--textarea-bg-color-hover)')
          .withColor('text-(--textarea-text-color-hover)')
          .withShadow('shadow-(--textarea-shadow-hover)')
          .withPlaceholderColor('placeholder:text-(--textarea-placeholder-color-hover)')
          .build(),
      },
    },
    isFocused: {
      true: {
        textarea: new StyleBuilder()
          .withBorder('border-b-(--textarea-border-bottom-color-focus) border-l-(--textarea-border-left-color-focus) border-r-(--textarea-border-right-color-focus) border-t-(--textarea-border-top-color-focus)')
          .withBackgroundColor('bg-(--textarea-bg-color-focus)')
          .withColor('text-(--textarea-text-color-focus)')
          .withShadow('shadow-(--textarea-shadow-focus)')
          .withRing('ring ring-(--textarea-ring-color-focus)')
          .withPlaceholderColor('placeholder:text-(--textarea-placeholder-color-focus)')
          .build(),
      },
    },
    hasError: {
      true: {
        textarea: new StyleBuilder()
          .withBorder('border-b-(--textarea-border-bottom-color-error) border-l-(--textarea-border-left-color-error) border-r-(--textarea-border-right-color-error) border-t-(--textarea-border-top-color-error)')
          .withBackgroundColor('bg-(--textarea-bg-color-error)')
          .withColor('text-(--textarea-text-color-error)')
          .withShadow('shadow-(--textarea-shadow-error)')
          .withRing('ring-(--textarea-ring-color-error)')
          .withPlaceholderColor('placeholder:text-(--textarea-placeholder-color-error)')
          .build(),
      },
    },
    resizeMode: {
      'auto-vertical': { textarea: 'resize-none' },
      'both': { textarea: 'resize' },
      'horizontal': { textarea: 'resize-x' },
      'none': { textarea: 'resize-none' },
      'vertical': { textarea: 'resize-y' },
    },
  },
})
