import type { RouteLocationNamedRaw } from 'vue-router'

export interface TabItem {
  id: string
  badge?: {
    class?: string
    label: string
  }
  label: string
}

export interface RouteTabItem {
  badge?: {
    class?: string
    label: string
  }
  label: string
  to: RouteLocationNamedRaw
}
