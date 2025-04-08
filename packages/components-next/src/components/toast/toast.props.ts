import type { VNode } from 'vue'

import type { ButtonProps } from '@/components/button/default-button/button.props'
import type { Icon } from '@/icons/icons'
import type { TestId } from '@/utils/props.util'

export type ToastType = 'error' | 'info' | 'success' | 'warning'

export interface ToastAction extends ButtonProps {
  label: string
  onClick: () => void
}

export interface ToastProps extends TestId {
  title: string
  actions?: ToastAction[]
  description: string
  icon?: Icon | null
  preview?: VNode | null
  type: ToastType
}
