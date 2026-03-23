import type {
  ComputedRef,
  Ref,
} from 'vue'

import { useContext } from '@/composables/context.composable'

export interface DetailPaneContext {
  isFloatingDetailPane: ComputedRef<boolean>
  isOpen: Ref<boolean>
  sidebarWidth: ComputedRef<string>
  toggleIsOpen: () => void
}

export const [
  useProvideDetailPaneContext,
  useInjectDetailPaneContext,
] = useContext<DetailPaneContext>('DetailPaneContext')
