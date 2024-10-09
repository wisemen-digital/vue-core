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

defineStyleConfig({
  config: {
    '--tag-bg-color-default': '#f9fafb',
    '--tag-bg-color-disabled': '#f9fafb',
    '--tag-border-color-default': '#e4e7ec',
    '--tag-border-color-disabled': '#e4e7ec',
    '--tag-border-radius-default': '6px',
    '--tag-font-size-default': '14px',
    '--tag-font-weight-default': '500',
    '--tag-padding-x-default': '6px',
    '--tag-padding-y-default': '3px',
    '--tag-text-color-default': '#3d4658',
    '--tag-text-color-disabled': '#b2b6bf',
  },
  selector: ':root',
  component: 'tag',
})
