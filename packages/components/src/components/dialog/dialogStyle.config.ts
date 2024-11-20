import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface DialogStyleConfig {
  '--dialog-bg-color-default': string
  '--dialog-border-color-default': string
  '--dialog-border-radius-default': string
  '--dialog-shadow-default': string
}

export function setupDefaultDialogStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--dialog-bg-color-default': 'var(--bg-primary)',
      '--dialog-border-color-default': 'var(--border-secondary)',
      '--dialog-border-radius-default': 'var(--radius-lg)',
      '--dialog-shadow-default': 'var(--shadow-lg)',
    },
    theme: '*',
    variant: 'default',
    component: 'dialog',
  })
}
