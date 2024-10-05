import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface IconButtonStyleConfig {
  '--icon-button-icon-size-default': string
  '--icon-button-size-default': string
}

defineStyleConfig({
  config: {
    '--icon-button-icon-size-default': '16px',
    '--icon-button-size-default': '40px',
  },
  selector: ':root',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-icon-size-default': '14px',
    '--icon-button-size-default': '32px',
  },
  selector: '.icon-btn-sm',
  component: 'iconButton',
})
