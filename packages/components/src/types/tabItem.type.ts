import type { RouteLocationNamedRaw } from 'vue-router'

export interface TabItem {
  id: string
  testId?: string
  label: string
}

export interface RouteTabItem {
  testId?: string
  label: string
  to: RouteLocationNamedRaw
}
