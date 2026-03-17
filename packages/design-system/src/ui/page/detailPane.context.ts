import type {
  ComputedRef,
  Ref,
} from 'vue'

import { useContext } from '@/composables/context.composable'

export interface DetailPaneContext {
  isFloatingDetailPane: ComputedRef<boolean>
  isOpen: Ref<boolean>
  isResizable: boolean
  isResizing: Ref<boolean>
  sidebarWidth: Ref<string>
  toggleIsOpen: () => void
  onResizeStart: (event: PointerEvent) => void
  onResizeKeyDown: (event: KeyboardEvent) => void
}

export const [
  useProvideDetailPaneContext,
  useInjectDetailPaneContext,
] = useContext<DetailPaneContext>('DetailPaneContext')
