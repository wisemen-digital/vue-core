import type {
  ComputedRef,
  MaybeRef,
  Ref,
} from 'vue'

import type { Icon } from '../icons/icons'

export type ToastType = 'error' | 'info' | 'success'

export interface ToastAction {
  isLoading?: ComputedRef<boolean> | Ref<boolean>
  label: MaybeRef<string>
  onClick: (onClose: () => void) => void
}

export interface Toast {
  action?: ToastAction
  description?: string
  duration?: number
  icon: Icon
  title: string
  type: ToastType
}
