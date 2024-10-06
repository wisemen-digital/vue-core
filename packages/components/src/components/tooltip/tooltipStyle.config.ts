import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TooltipStyleConfig {
  '--tooltip-bg-color-default': string
  '--tooltip-border-color-default': string
  '--tooltip-border-radius-default': string
  '--tooltip-shadow-default': string
}

defineStyleConfig({
  config: {
    '--tooltip-bg-color-default': '#ffffff',
    '--tooltip-border-color-default': '#e7eaef',
    '--tooltip-border-radius-default': '6px',
    '--tooltip-shadow-default': '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
  },
  selector: ':root',
  component: 'tooltip',
})
