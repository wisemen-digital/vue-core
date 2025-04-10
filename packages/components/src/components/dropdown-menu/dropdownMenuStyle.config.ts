import { defineStyleConfig } from '@/styling/defineStyleConfig'

// TODO: group padding x y niet

export interface DropdownMenuStyleConfig {
  '--dropdown-menu-bg-color-default': string
  '--dropdown-menu-border-color-default': string
  '--dropdown-menu-border-radius-default': string
  '--dropdown-menu-destructive-item-bg-color-default': string
  '--dropdown-menu-destructive-item-bg-color-disabled': string
  '--dropdown-menu-destructive-item-bg-color-highlighted': string
  '--dropdown-menu-destructive-item-bg-color-hover': string
  '--dropdown-menu-destructive-item-icon-color-default': string
  '--dropdown-menu-destructive-item-icon-color-disabled': string
  '--dropdown-menu-destructive-item-icon-color-highlighted': string
  '--dropdown-menu-destructive-item-icon-color-hover': string
  '--dropdown-menu-destructive-item-text-color-default': string
  '--dropdown-menu-destructive-item-text-color-disabled': string
  '--dropdown-menu-destructive-item-text-color-highlighted': string
  '--dropdown-menu-destructive-item-text-color-hover': string
  '--dropdown-menu-group-label-font-size-default': string
  '--dropdown-menu-group-label-font-weight-default': string
  '--dropdown-menu-group-label-spacing-bottom-default': string
  '--dropdown-menu-group-label-spacing-top-default': string
  '--dropdown-menu-group-label-spacing-x-default': string
  '--dropdown-menu-group-label-text-color-default': string
  '--dropdown-menu-group-spacing-bottom-default': string
  '--dropdown-menu-group-spacing-top-default': string
  '--dropdown-menu-group-spacing-x-default': string
  '--dropdown-menu-item-bg-color-default': string
  '--dropdown-menu-item-bg-color-disabled': string
  '--dropdown-menu-item-bg-color-highlighted': string
  '--dropdown-menu-item-bg-color-hover': string
  '--dropdown-menu-item-border-radius-default': string
  '--dropdown-menu-item-font-size-default': string
  '--dropdown-menu-item-font-weight-default': string
  '--dropdown-menu-item-icon-color-default': string
  '--dropdown-menu-item-icon-color-disabled': string
  '--dropdown-menu-item-icon-color-highlighted': string
  '--dropdown-menu-item-icon-color-hover': string
  '--dropdown-menu-item-icon-size-default': string
  '--dropdown-menu-item-icon-spacing-default': string
  '--dropdown-menu-item-padding-x-default': string
  '--dropdown-menu-item-padding-y-default': string
  '--dropdown-menu-item-separator-color-default': string
  '--dropdown-menu-item-separator-spacing-y-default': string
  '--dropdown-menu-item-text-color-default': string
  '--dropdown-menu-item-text-color-disabled': string
  '--dropdown-menu-item-text-color-highlighted': string
  '--dropdown-menu-item-text-color-hover': string
  '--dropdown-menu-max-width-default': string
  '--dropdown-menu-min-width-default': string
  '--dropdown-menu-padding-x-default': string
  '--dropdown-menu-padding-y-default': string
  '--dropdown-menu-shadow-default': string
}

export function setupDefaultDropdownMenuStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--dropdown-menu-bg-color-default': 'var(--bg-primary)',
      '--dropdown-menu-border-color-default': 'var(--border-secondary)',
      '--dropdown-menu-border-radius-default': 'var(--radius-lg)',
      '--dropdown-menu-destructive-item-bg-color-default': 'transparent',
      '--dropdown-menu-destructive-item-bg-color-disabled': 'transparent',
      '--dropdown-menu-destructive-item-bg-color-highlighted': 'var(--bg-error-primary)',
      '--dropdown-menu-destructive-item-bg-color-hover': 'var(--bg-error-primary)',
      '--dropdown-menu-destructive-item-icon-color-default': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-icon-color-disabled': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-icon-color-highlighted': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-icon-color-hover': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-text-color-default': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-text-color-disabled': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-text-color-highlighted': 'var(--fg-error-secondary)',
      '--dropdown-menu-destructive-item-text-color-hover': 'var(--fg-error-secondary)',
      '--dropdown-menu-group-label-font-size-default': 'var(--text-sm)',
      '--dropdown-menu-group-label-font-weight-default': '500',
      '--dropdown-menu-group-label-spacing-bottom-default': 'var(--spacing-none)',
      '--dropdown-menu-group-label-spacing-top-default': 'var(--spacing-none)',
      '--dropdown-menu-group-label-spacing-x-default': '0px',
      '--dropdown-menu-group-label-text-color-default': 'var(--text-quaternary)',
      '--dropdown-menu-group-spacing-bottom-default': '0px',
      '--dropdown-menu-group-spacing-top-default': '0px',
      '--dropdown-menu-group-spacing-x-default': '0px',
      '--dropdown-menu-item-bg-color-default': 'transparent',
      '--dropdown-menu-item-bg-color-disabled': 'transparent',
      '--dropdown-menu-item-bg-color-highlighted': 'var(--bg-primary-hover)',
      '--dropdown-menu-item-bg-color-hover': 'var(--bg-primary-hover)',
      '--dropdown-menu-item-border-radius-default': 'var(--radius-md)',
      '--dropdown-menu-item-font-size-default': 'var(--text-sm)',
      '--dropdown-menu-item-font-weight-default': '400',
      '--dropdown-menu-item-icon-color-default': 'var(--fg-tertiary)',
      '--dropdown-menu-item-icon-color-disabled': 'var(--text-disabled)',
      '--dropdown-menu-item-icon-color-highlighted': 'var(--fg-tertiary)',
      '--dropdown-menu-item-icon-color-hover': 'var(--fg-tertiary)',
      '--dropdown-menu-item-icon-size-default': '1rem',
      '--dropdown-menu-item-icon-spacing-default': 'var(--spacing-md)',
      '--dropdown-menu-item-padding-x-default': 'var(--spacing-lg)',
      '--dropdown-menu-item-padding-y-default': 'var(--spacing-sm)',
      '--dropdown-menu-item-separator-color-default': 'var(--bg-tertiary)',
      '--dropdown-menu-item-separator-spacing-y-default': 'var(--spacing-xs)',
      '--dropdown-menu-item-text-color-default': 'var(--text-secondary)',
      '--dropdown-menu-item-text-color-disabled': 'var(--text-disabled)',
      '--dropdown-menu-item-text-color-highlighted': 'var(--text-primary)',
      '--dropdown-menu-item-text-color-hover': 'var(--text-primary)',
      '--dropdown-menu-max-width-default': '20rem',
      '--dropdown-menu-min-width-default': '12.5rem',
      '--dropdown-menu-padding-x-default': 'var(--spacing-sm)',
      '--dropdown-menu-padding-y-default': 'var(--spacing-sm)',
      '--dropdown-menu-shadow-default': 'var(--shadow-lg)',
    },
    theme: '*',
    variant: 'default',
    component: 'dropdownMenu',
  })

  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--dropdown-menu-destructive-item-icon-color-highlighted': 'white',
      '--dropdown-menu-destructive-item-icon-color-hover': 'white',
      '--dropdown-menu-destructive-item-text-color-highlighted': 'white',
      '--dropdown-menu-destructive-item-text-color-hover': 'white',
    },
    theme: '*',
    variant: 'default',
    component: 'dropdownMenu',
  })
}
