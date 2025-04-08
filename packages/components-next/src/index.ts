import '@/styles/index.css'

export * from './components'
export * from './composables'
export {
  type ComponentVariants,
  defineComponentVariant,
} from './customClassVariants'
export { PaginationParamsBuilder } from '@/utils/paginationParamsBuilder.util'

// Icons
export type {
  Icon,
  Icons,
} from '@/icons/icons'
export { extendIcons } from '@/icons/icons'
export type { Routes } from '@/types/routes.type'
