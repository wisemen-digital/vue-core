import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface IconStyleConfig extends BaseStyleConfig {
  '--icon-color': string
  '--icon-size': string
}

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-color': 'inherit',
    '--icon-size': '1rem',
  },
  theme: '*',
  variant: 'default',
  component: 'icon',
})

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-size': '0.875rem',
  },
  theme: '*',
  variant: 'sm',
  component: 'icon',
})

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-size': '0.75rem',
  },
  theme: '*',
  variant: 'xs',
  component: 'icon',
})

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-size': '1.125rem',
  },
  theme: '*',
  variant: 'lg',
  component: 'icon',
})

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-size': '1.5rem',
  },
  theme: '*',
  variant: 'xl',
  component: 'icon',
})

defineStyleConfig({
  colorScheme: '*',
  config: {
    '--icon-size': '100%',
  },
  theme: '*',
  variant: 'full',
  component: 'icon',
})
