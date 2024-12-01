import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useSelectStyle = tv({
  slots: {
    dropdownContent: new StyleBuilder()
      .withClasses('outline-none')
      .build(),
    error: new StyleBuilder()
      .withFontSize('[--input-field-error-font-size-default:var(--select-error-font-size-default)]')
      .withSpacing('[--input-field-error-spacing-default:var(--select-error-spacing-default)]')
      .withColor('[--input-field-error-text-color-default:var(--select-error-text-color-default)]')
      .build(),
    groupContent: new StyleBuilder()
      .withPadding('px-(--select-group-content-padding-x-default) py-(--select-group-content-padding-y-default)')
      .build(),
    groupLabel: new StyleBuilder()
      .withPadding('px-(--select-group-label-spacing-x-default) pb-(--select-group-label-spacing-bottom-default) pt-(--select-group-label-spacing-top-default)')
      .withFontSize('text-(size:--select-group-label-font-size-default)')
      .withFontWeight('font-(--select-group-label-font-weight-default)')
      .withColor('text-(color:--select-group-label-text-color-default)')
      .build(),
    hint: new StyleBuilder()
      .withFontSize('[--input-field-hint-font-size-default:var(--select-hint-font-size-default)]')
      .withColor('[--input-field-hint-text-color-default:var(--select-hint-text-color-default)]')
      .build(),
    iconLeft: new StyleBuilder()
      .withClasses('box-content shrink-0 duration-200')
      .withSpacing('ml-(--select-icon-left-spacing-default)')
      .withColor('text-(color:--select-icon-color-default)')
      .withSize('size-(--select-icon-left-size-default)')
      .build(),
    iconRight: new StyleBuilder()
      .withClasses('box-content shrink-0 duration-200')
      .withSpacing('mr-(--select-icon-right-spacing-default)')
      .withColor('text-(color:--select-icon-color-default)')
      .withSize('size-(--select-icon-right-size-default)')
      .build(),
    label: new StyleBuilder()
      .withFontSize('[--input-field-label-font-size-default:var(--select-label-font-size-default)]')
      .withFontWeight('[--input-field-label-font-weight-default:var(--select-label-font-weight-default)]')
      .withSpacing('[--input-field-label-spacing-default:var(--select-label-spacing-default)]')
      .withColor('[--input-field-label-text-color-default:var(--select-label-text-color-default)]')
      .build(),
    listboxContent: new StyleBuilder()
      .withClasses('!inset-ring-0')
      .withSize('max-h-(--select-dropdown-max-height-default)')
      .withPadding('px-(--select-dropdown-padding-x-default)')
      .build(),
    loader: new StyleBuilder()
      .withSize('size-(--select-loader-size-default)')
      .withColor('text-(color:--select-loader-color-default)')
      .build(),
    loaderBox: new StyleBuilder()
      .withSpacing('mr-(--select-icon-right-spacing-default)')
      .build(),
    option: new StyleBuilder()
      .withClasses('group flex w-full cursor-pointer items-center justify-between outline-none duration-200 data-[disabled]:cursor-not-allowed')
      .withSize('min-h-(--select-option-min-height-default)')
      .withBorderRadius('rounded-(--select-option-border-radius-default)')
      .withBackgroundColor('bg-(--select-option-bg-color-default) hover:bg-(--select-option-bg-color-hover) data-[disabled]:bg-(--select-option-bg-color-disabled) data-[highlighted]:bg-(--select-option-bg-color-highlighted) data-[state=checked]:bg-(--select-option-bg-color-selected) data-[state=checked]:data-[highlighted]:bg-(--select-option-bg-color-highlighted) data-[disabled]:hover:bg-(--select-option-bg-color-disabled) data-[highlighted]:hover:bg-(--select-option-bg-color-hover) data-[state=checked]:hover:bg-(--select-option-bg-color-hover) hover:data-[disabled]:bg-(--select-option-bg-color-disabled)')
      .withPadding('px-(--select-option-padding-x-default) py-(--select-option-padding-y-default)')
      .withFontSize('text-(size:--select-option-font-size-default)')
      .withFontWeight('font-(--select-option-font-weight-default)')
      .withColor('text-(color:--select-option-text-color-default) hover:text-(color:--select-option-text-color-hover) data-[disabled]:text-(color:--select-option-text-color-disabled) data-[state=checked]:text-(color:--select-option-text-color-selected)')
      .build(),
    optionIndicator: new StyleBuilder()
      .withClasses('flex-shrink-0')
      .withSize('size-(--select-option-indicator-size-default)')
      .withColor('text-(color:--select-option-indicator-color-default)')
      .build(),
    placeholder: new StyleBuilder()
      .withClasses('pointer-events-none block w-full truncate duration-200')
      .withPadding('pl-(--select-padding-left-default) pr-(--select-padding-right-default)')
      .withColor('text-(color:--select-placeholder-color-default)')
      .build(),
    selectBox: new StyleBuilder()
      .withClasses('relative cursor-pointer flex outline-none duration-200 w-full items-center text-left')
      .withSize('min-h-(--select-min-height-default)')
      .withBorderRadius('rounded-bl-(--select-border-radius-bottom-left-default) rounded-br-(--select-border-radius-bottom-right-default) rounded-tl-(--select-border-radius-top-left-default) rounded-tr-(--select-border-radius-top-right-default)')
      .withBorder('border border-solid border-b-(--select-border-bottom-color-default) border-l-(--select-border-left-color-default) border-r-(--select-border-right-color-default) border-t-(--select-border-top-color-default)')
      .withBackgroundColor('bg-(--select-bg-color-default)')
      .withPadding('py-(--select-padding-y-default)')
      .withFontSize('text-(size:--select-font-size-default)')
      .withFontWeight('font-(--select-font-weight-default)')
      .withColor('text-(color:--select-text-color-default)')
      .withShadow('shadow-(--select-shadow-default)')
      .build(),
    separator: new StyleBuilder()
      .withClasses('h-px')
      .withBackgroundColor('bg-(--select-separator-color-default)')
      .withSpacing('my-(--select-separator-spacing-y-default)')
      .build(),
    tags: new StyleBuilder()
      .withClasses('flex w-full flex-wrap items-center gap-1 py-1.5')
      .withPadding('pl-[calc(var(--select-padding-left-default)/2)] pr-(--select-padding-right-default)')
      .build(),
    value: new StyleBuilder()
      .withClasses('w-full truncate')
      .withPadding('pl-(--select-padding-left-default) pr-(--select-padding-right-default)')
      .build(),
  },
  variants: {
    isFilterVisible: {
      false: {
        listboxContent: new StyleBuilder()
          .withPadding('py-(--select-dropdown-padding-y-default)')
          .build(),
      },
    },
    isDisabled: {
      true: {
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-disabled:var(--select-hint-text-color-disabled)]')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-disabled)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-disabled)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-default:var(--select-label-text-color-disabled)]')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--select-loader-color-disabled)')
          .build(),
        placeholder: new StyleBuilder()
          .withColor('[--input-field-placeholder-color-default:var(--select-placeholder-color-disabled)]')
          .build(),
        selectBox: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBorder('border-b-(--select-border-bottom-color-disabled) border-l-(--select-border-left-color-disabled) border-r-(--select-border-right-color-disabled) border-t-(--select-border-top-color-disabled)')
          .withBackgroundColor('bg-(--select-bg-color-disabled)')
          .withColor('text-(color:--select-text-color-disabled)')
          .withShadow('shadow-(--select-shadow-disabled)')
          .build(),
      },
    },
    isHovered: {
      true: {
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-hover:var(--select-hint-text-color-hover)]')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-hover)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-hover)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-default:var(--select-label-text-color-hover)]')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--select-loader-color-hover)')
          .build(),
        placeholder: new StyleBuilder()
          .withColor('[--input-field-placeholder-color-default:var(--select-placeholder-color-hover)]')
          .build(),
        selectBox: new StyleBuilder()
          .withBorder('border-b-(--select-border-bottom-color-hover) border-l-(--select-border-left-color-hover) border-r-(--select-border-right-color-hover) border-t-(--select-border-top-color-hover)')
          .withBackgroundColor('bg-(--select-bg-color-hover)')
          .withColor('text-(color:--select-text-color-hover)')
          .withShadow('shadow-(--select-shadow-hover)')
          .build(),
      },
    },
    isFocused: {
      true: {
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-focus:var(--select-hint-text-color-focus)]')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-focus)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('text-(color:--select-icon-color-focus)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-default:var(--select-label-text-color-focus)]')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--select-loader-color-focus)')
          .build(),
        placeholder: new StyleBuilder()
          .withColor('[--input-field-placeholder-color-default:var(--select-placeholder-color-focus)]')
          .build(),
        selectBox: new StyleBuilder()
          .withBorder('border-b-(--select-border-bottom-color-focus) border-l-(--select-border-left-color-focus) border-r-(--select-border-right-color-focus) border-t-(--select-border-top-color-focus)')
          .withBackgroundColor('bg-(--select-bg-color-focus)')
          .withColor('text-(color:--select-text-color-focus)')
          .withShadow('shadow-(--select-shadow-focus)')
          .withRing('ring ring-(--select-ring-color-focus)')
          .build(),
      },
    },
    hasError: {
      true: {
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-error:var(--select-hint-text-color-error)]')
          .build(),
        iconLeft: new StyleBuilder()
          .withColor('!text-(color:--select-icon-color-error)')
          .build(),
        iconRight: new StyleBuilder()
          .withColor('!text-(color:--select-icon-color-error)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-default:var(--select-label-text-color-error)]')
          .build(),
        loader: new StyleBuilder()
          .withColor('text-(color:--select-loader-color-error)')
          .build(),
        placeholder: new StyleBuilder()
          .withColor('text-(color:--select-placeholder-color-error)')
          .build(),
        selectBox: new StyleBuilder()
          .withBorder('border-b-(--select-border-bottom-color-error) border-l-(--select-border-left-color-error) border-r-(--select-border-right-color-error) border-t-(--select-border-top-color-error)')
          .withBackgroundColor('bg-(--select-bg-color-error)')
          .withColor('text-(color:--select-text-color-error)')
          .withShadow('shadow-(--select-shadow-error)')
          .withRing('ring-(--select-ring-color-error)')
          .build(),
      },
    },
    hasIconLeft: {
      true: {
        placeholder: new StyleBuilder()
          .withPadding('pl-(--select-with-icon-left-padding-left-default)')
          .build(),
        value: new StyleBuilder()
          .withPadding('pl-(--select-with-icon-left-padding-left-default)')
          .build(),
      },
    },
    hasIconRight: {
      true: {
        placeholder: new StyleBuilder()
          .withPadding('pr-(--select-with-icon-right-padding-right-default)')
          .build(),
        value: new StyleBuilder()
          .withPadding('pr-(--select-with-icon-right-padding-right-default)')
          .build(),
      },
    },
  },
})
