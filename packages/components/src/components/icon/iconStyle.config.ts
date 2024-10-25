import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface IconStyleConfig extends BaseStyleConfig {
  '--icon-color': string
  '--icon-size': string
}

defineStyleConfig({
  config: {
    '--icon-color': 'inherit',
    '--icon-size': '16px',
  },
  selector: '.icon-variant-default',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '14px',
  },
  selector: '.icon-sm',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '12px',
  },
  selector: '.icon-xs',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '18px',
  },
  selector: '.icon-lg',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '24px',
  },
  selector: '.icon-lg',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '100%',
  },
  selector: '.icon-full',
  component: 'icon',
})
