import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface IconStyleConfig extends BaseStyleConfig {
  '--icon-color': string
  '--icon-size': string
}

defineStyleConfig({
  config: {
    '--icon-color': 'inherit',
    '--icon-size': '1rem',
  },
  selector: '.icon-variant-default',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '0.875rem',
  },
  selector: '.icon-sm',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '0.75rem',
  },
  selector: '.icon-xs',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '1.125rem',
  },
  selector: '.icon-lg',
  component: 'icon',
})

defineStyleConfig({
  config: {
    '--icon-size': '1.5rem',
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
