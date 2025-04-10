import type { MaybeRef } from 'vue'

import type { Icon } from '@/icons/icons'

interface ToastAction {
  label: MaybeRef<string>
  onClick: (onClose: () => void) => void
}

export interface Toast {
  testId?: string
  action?: ToastAction
  icon?: Icon
  message: string
}
