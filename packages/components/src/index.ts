import '@/styles/index.css'

export * from '@/components'
export * from '@/composables'
export * from '@/types'

// Styling
export { defineStyleConfig, setStyleConfigSsrCallback } from '@/styling/defineStyleConfig'
export { setupDefaultStyles } from '@/styling/setupDefaultStyles'

// Icons
export type { Icon, Icons } from '@/icons/icons'
export { extendIcons } from '@/icons/icons'
