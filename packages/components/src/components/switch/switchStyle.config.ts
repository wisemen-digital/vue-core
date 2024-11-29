import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface SwitchStyleConfig extends BaseStyleConfig {
  //
}

export function setupDefaultSwitchStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--switch-bg-color-checked': 'var(--bg-brand-solid)',
      '--switch-bg-color-default': 'var(--bg-tertiary)',
      '--switch-bg-color-disabled': 'var(--bg-disabled)',
      '--switch-bg-color-error': 'var(--bg-error-primary)',
      '--switch-bg-color-focus': 'var(--bg-tertiary)',
      '--switch-bg-color-hover': 'var(--bg-tertiary)',

      '--switch-border-color-checked': 'var(--bg-brand-solid)',
      '--switch-border-color-default': 'var(--bg-tertiary)',
      '--switch-border-color-disabled': 'var(--bg-disabled)',
      '--switch-border-color-error': 'var(--border-error-subtle)',
      '--switch-border-color-focus': 'var(--bg-tertiary)',
      '--switch-border-color-hover': 'var(--bg-tertiary)',

      '--switch-border-radius-default': 'var(--radius-full)',

      '--switch-error-font-size-default': 'var(--text-sm)',
      '--switch-error-font-weight-default': 'var(--text-medium)',
      '--switch-error-spacing-default': 'var(--spacing-none)',
      '--switch-error-text-color-default': 'var(--text-error-primary)',

      '--switch-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
      '--switch-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
      '--switch-hint-spacing-default': 'var(--spacing-none)',
      '--switch-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',

      '--switch-icon-color-checked': 'var(--fg-tertiary)',
      '--switch-icon-color-default': 'var(--fg-tertiary)',
      '--switch-icon-color-disabled': 'var(--fg-tertiary)',
      '--switch-icon-color-error': 'var(--fg-error-secondary)',
      '--switch-icon-color-focus': 'var(--fg-tertiary)',
      '--switch-icon-color-hover': 'var(--fg-tertiary)',
      '--switch-icon-size-default': '0.875rem',

      '--switch-label-font-size-default': 'var(--text-base)',
      '--switch-label-font-weight-default': 'var(--font-weight-medium)',
      '--switch-label-spacing-default': 'var(--spacing-lg)',
      '--switch-label-text-color-checked': 'var(--text-primary)',
      '--switch-label-text-color-default': 'var(--text-secondary)',
      '--switch-label-text-color-disabled': 'var(--text-disabled)',
      '--switch-label-text-color-error': 'var(--text-primary)',
      '--switch-label-text-color-focus': 'var(--text-primary)',
      '--switch-label-text-color-hover': 'var(--text-primary)',

      '--switch-ring-color-focus': 'var(--brand-primary-500)',

      '--switch-thumb-bg-color-default': 'white',
      '--switch-thumb-padding-default': 'var(--spacing-xxs)',
      '--switch-thumb-shadow-default': 'var(--shadow-sm)',
      '--switch-thumb-size-default': '1.25rem',

    },
    theme: '*',
    variant: 'default',
    component: 'switch',
  })

  // defineStyleConfig({
  //   colorScheme: '*',
  //   config: {
  //     '--switch-indicator-bg-color-disabled': 'var(--gray-600)',
  //     '--switch-indicator-border-color-disabled': 'var(--gray-600)',
  //   },
  //   theme: 'dark',
  //   variant: 'default',
  //   component: 'switch',
  // })

  // defineStyleConfig({
  //   colorScheme: '*',
  //   config: {
  //     '--switch-height-default': '1.5rem',
  //     '--switch-indicator-size-default': '1.25rem',
  //     '--switch-width-default': '2.75rem',
  //   },
  //   theme: '*',
  //   variant: 'md',
  //   component: 'switch',
  // })

  // defineStyleConfig({
  //   colorScheme: '*',
  //   config: {
  //     '--switch-height-default': '1.25rem',
  //     '--switch-indicator-size-default': '1.01rem',
  //     '--switch-width-default': '2.25rem',
  //   },
  //   theme: '*',
  //   variant: 'sm',
  //   component: 'switch',
  // })
}
