import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TagStyleConfig {
  '--tag-bg-color-default': string
  '--tag-bg-color-disabled': string
  '--tag-border-color-default': string
  '--tag-border-color-disabled': string
  '--tag-border-radius-default': string
  '--tag-font-size-default': string
  '--tag-font-weight-default': string
  '--tag-padding-x-default': string
  '--tag-padding-y-default': string
  '--tag-text-color-default': string
  '--tag-text-color-disabled': string
}

export function setupDefaultTagStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--tag-bg-color-default': 'var(--bg-primary)',
      '--tag-bg-color-disabled': 'var(--bg-disabled-subtle)',
      '--tag-border-color-default': 'var(--border-primary)',
      '--tag-border-color-disabled': 'var(--border-disabled)',
      '--tag-border-radius-default': 'var(--radius-md)',
      '--tag-font-size-default': 'var(--text-sm)',
      '--tag-font-weight-default': '500',
      '--tag-padding-x-default': 'var(--spacing-sm)',
      '--tag-padding-y-default': 'var(--spacing-none)',
      '--tag-text-color-default': 'var(--text-primary)',
      '--tag-text-color-disabled': 'var(--text-disabled)',
    },
    theme: '*',
    variant: 'default',
    component: 'tag',
  })
}
