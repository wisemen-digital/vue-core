import type { Icon } from '@/icons/icons'

export interface StepItem {
  stepId: number
  title: string
  description?: string
  icon: Icon
}
