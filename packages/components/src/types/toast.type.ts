import type { Icon } from '@/icons/icons'

interface ToastAction {
  label: string
  onClick: () => void
}

export interface Toast {
  testId?: string
  action?: ToastAction
  icon?: Icon
  message: string
}
