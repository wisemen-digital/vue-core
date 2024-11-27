import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TooltipStyleConfig {
  '--tooltip-bg-color-default': string
  '--tooltip-border-color-default': string
  '--tooltip-border-radius-default': string
  '--tooltip-shadow-default': string
  '--tooltip-text-color-default': string
}

export function setupDefaultTooltipStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--tooltip-bg-color-default': 'var(--bg-primary-solid)',
      '--tooltip-border-color-default': 'var(--bg-primary-solid)',
      '--tooltip-border-radius-default': 'var(--radius-lg)',
      '--tooltip-shadow-default': 'var(--shadow-lg)',
      '--tooltip-text-color-default': 'var(--white)',
    },
    theme: '*',
    variant: 'default',
    component: 'tooltip',
  })
}
