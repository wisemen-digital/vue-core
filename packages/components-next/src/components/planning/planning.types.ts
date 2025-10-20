export interface PlanningItem {
  id: string
  title: string
  endsAt: string | Date
  startsAt: string | Date
  backgroundColor?: string
  category?: string
  color?: string
  description?: string
}

type PlanningStartHours
  = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23

type PlanningEndHours
  = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24

export interface PlanningConfig {
  allowDragAndDrop?: boolean
  endHour?: PlanningEndHours
  hiddenDays?: number[]
  hourHeight?: number
  scrollToHour?: number
  showLiveIndicator?: boolean
  startHour?: PlanningStartHours
}

export interface PlanningDragPayload {
  day: string
  end: Date
  start: Date
}

export interface PlanningMovePayload<T extends PlanningItem = PlanningItem> {
  item: T
  updatedDay: string
  updatedEnd: Date
  updatedStart: Date
}

export interface PlanningResizePayload<T extends PlanningItem = PlanningItem> {
  edge: 'end' | 'start'
  item: T
  updatedDay: string
  updatedEnd: Date
  updatedStart: Date
}

export interface PlanningTimeSlot {
  hour: number
  label: string
}

export interface PlanningDay {
  isToday: boolean
  isWeekend?: boolean
  date: string
  label: string
}

export interface PlanningWeekInfo {
  days: PlanningDay[]
  end: Date
  label: string
  start: Date
  weekNumber: number
}
