import type { RouteLocationNamedRaw } from 'vue-router'

export interface TabItem {
  id: string
  label: string
}

export interface RouteTabItem {
  label: string
  to: RouteLocationNamedRaw
}
