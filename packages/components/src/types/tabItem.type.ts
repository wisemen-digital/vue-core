import type { RouteLocationNamedRaw } from 'vue-router'

export interface TabItem {
  id: string
  testId?: string
  badge?: {
    class?: string
    label: string
  }
  label: string
}

export interface RouteTabItem {
  testId?: string
  badge?: {
    class?: string
    label: string
  }
  label: string
  to: RouteLocationNamedRaw
}
