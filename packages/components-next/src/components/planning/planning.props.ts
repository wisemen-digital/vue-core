import type {
  PlanningConfig,
  PlanningDragPayload,
  PlanningItem,
  PlanningMovePayload,
  PlanningResizePayload,
} from './planning.types'

export interface PlanningProps<T extends PlanningItem = PlanningItem> extends PlanningConfig {
  items: T[]
  onDragEnd?: (payload: PlanningDragPayload) => void
  onItemClick?: (item: T) => void
  onItemMove?: (payload: PlanningMovePayload<T>) => void
  onItemResize?: (payload: PlanningResizePayload<T>) => void
  onWeekChange?: (weekStart: Date) => void
}

export interface PlanningSlots<T extends PlanningItem = PlanningItem> {
  'day-header'?: { isToday: boolean
    day: string
    label: string }
  'header-actions'?: any
  'hour-label'?: { hour: number
    label: string }
  'item-content'?: { item: T }
  'subheader'?: any
}
