import type { Icon } from '@/icons/icons'

export interface StepItem {
  stepId: number
  title: string
  isCompleted?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  description?: string
  icon?: Icon
}
