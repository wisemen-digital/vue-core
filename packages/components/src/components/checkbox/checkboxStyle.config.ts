import { lightThemeColors } from '@/styling/defaultColors'
import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface CheckboxStyleConfig extends BaseStyleConfig {
  // Background
  '--checkbox-bg-color-checked': string
  '--checkbox-bg-color-default': string
  '--checkbox-bg-color-disabled': string
  '--checkbox-bg-color-error': string
  '--checkbox-bg-color-focus': string
  '--checkbox-bg-color-hover': string
  '--checkbox-bg-color-indeterminate': string

  // Border
  '--checkbox-border-color-checked': string
  '--checkbox-border-color-default': string
  '--checkbox-border-color-disabled': string
  '--checkbox-border-color-error': string
  '--checkbox-border-color-focus': string
  '--checkbox-border-color-hover': string
  '--checkbox-border-color-indeterminate': string

  '--checkbox-border-radius-default': string
  '--checkbox-border-width-default': string

  // Error
  '--checkbox-error-font-size-default': string
  '--checkbox-error-font-weight-default': string
  '--checkbox-error-spacing-default': string
  '--checkbox-error-text-color-default': string

  // Hint
  '--checkbox-hint-font-size-default': string
  '--checkbox-hint-font-weight-default': string
  '--checkbox-hint-spacing-default': string

  '--checkbox-hint-text-color-default': string

  '--checkbox-hint-text-color-disabled': string

  '--checkbox-hint-text-color-error': string

  '--checkbox-hint-text-color-focus': string
  '--checkbox-hint-text-color-hover': string

  // Indicator
  '--checkbox-indicator-color-checked': string
  '--checkbox-indicator-color-default': string
  '--checkbox-indicator-color-disabled': string
  '--checkbox-indicator-color-error': string
  '--checkbox-indicator-color-focus': string
  '--checkbox-indicator-color-hover': string

  '--checkbox-indicator-color-indeterminate': string
  '--checkbox-indicator-size-default': string
  // Label
  '--checkbox-label-font-size-default': string
  '--checkbox-label-font-weight-default': string

  '--checkbox-label-spacing-default': string
  '--checkbox-label-text-color-checked': string
  '--checkbox-label-text-color-default': string
  '--checkbox-label-text-color-disabled': string
  '--checkbox-label-text-color-error': string
  '--checkbox-label-text-color-focus': string
  '--checkbox-label-text-color-hover': string

  '--checkbox-label-text-color-indeterminate': string
  // Ring
  '--checkbox-ring-color-checked': string
  '--checkbox-ring-color-default': string
  '--checkbox-ring-color-disabled': string

  '--checkbox-ring-color-error': string

  '--checkbox-ring-color-focus': string
  '--checkbox-ring-color-hover': string
  '--checkbox-ring-color-indeterminate': string
  // Shadow
  '--checkbox-shadow-checked': string

  '--checkbox-shadow-default': string
  '--checkbox-shadow-disabled': string
  '--checkbox-shadow-error': string
  '--checkbox-shadow-focus': string
  '--checkbox-shadow-hover': string
  '--checkbox-shadow-indeterminate': string

  // Size
  '--checkbox-size-default': string
}

defineStyleConfig({
  config: {
    '--checkbox-bg-color-checked': lightThemeColors.primary,
    '--checkbox-bg-color-default': lightThemeColors.inputFieldBgColorDefault,
    '--checkbox-bg-color-disabled': lightThemeColors.inputFieldBgColorDisabled,
    '--checkbox-bg-color-error': lightThemeColors.inputFieldBgColorDefault,
    '--checkbox-bg-color-focus': lightThemeColors.inputFieldBgColorDefault,
    '--checkbox-bg-color-hover': lightThemeColors.inputFieldBgColorDefault,
    '--checkbox-bg-color-indeterminate': lightThemeColors.primary,
    '--checkbox-border-color-checked': lightThemeColors.inputFieldBorderColorDefault,
    '--checkbox-border-color-default': lightThemeColors.inputFieldBorderColorDefault,
    '--checkbox-border-color-disabled': lightThemeColors.inputFieldBorderColorDisabled,
    '--checkbox-border-color-error': lightThemeColors.error,
    '--checkbox-border-color-focus': lightThemeColors.inputFieldBorderColorFocus,
    '--checkbox-border-color-hover': lightThemeColors.inputFieldBorderColorHover,
    '--checkbox-border-color-indeterminate': lightThemeColors.inputFieldBorderColorDefault,
    '--checkbox-border-radius-default': '6px',
    '--checkbox-border-width-default': '1px',
    '--checkbox-error-font-size-default': '12px',
    '--checkbox-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
    '--checkbox-error-spacing-default': '4px',
    '--checkbox-error-text-color-default': lightThemeColors.error,
    '--checkbox-hint-font-size-default': '12px',
    '--checkbox-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
    '--checkbox-hint-spacing-default': '4px',
    '--checkbox-hint-text-color-default': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-hint-text-color-disabled': lightThemeColors.inputFieldHinttextColorDisabled,
    '--checkbox-hint-text-color-error': lightThemeColors.error,
    '--checkbox-hint-text-color-focus': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-hint-text-color-hover': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-indicator-color-checked': lightThemeColors.primaryForeground,
    '--checkbox-indicator-color-default': lightThemeColors.primaryForeground,
    '--checkbox-indicator-color-disabled': lightThemeColors.primaryForeground,
    '--checkbox-indicator-color-error': lightThemeColors.error,
    '--checkbox-indicator-color-focus': lightThemeColors.primaryForeground,
    '--checkbox-indicator-color-hover': lightThemeColors.primaryForeground,
    '--checkbox-indicator-color-indeterminate': lightThemeColors.primaryForeground,
    '--checkbox-indicator-size-default': '14px',
    '--checkbox-label-font-size-default': 'var(--input-field-label-font-size-default)',
    '--checkbox-label-font-weight-default': 'var(--input-field-label-font-weight-default)',
    '--checkbox-label-spacing-default': '8px',
    '--checkbox-label-text-color-checked': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-label-text-color-default': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-label-text-color-disabled': lightThemeColors.inputFieldHinttextColorDisabled,
    '--checkbox-label-text-color-error': lightThemeColors.error,
    '--checkbox-label-text-color-focus': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-label-text-color-hover': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-label-text-color-indeterminate': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-ring-color-checked': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-ring-color-default': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-ring-color-disabled': lightThemeColors.inputFieldHinttextColorDisabled,
    '--checkbox-ring-color-error': lightThemeColors.error,
    '--checkbox-ring-color-focus': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-ring-color-hover': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-ring-color-indeterminate': lightThemeColors.inputFieldHintTextColorDefault,
    '--checkbox-shadow-checked': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-default': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-disabled': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-error': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-focus': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-hover': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-indeterminate': '0px 0px 0px 0px #000000',
    '--checkbox-size-default': '20px',
  },
  selector: ':root',
  component: 'checkbox',
})
