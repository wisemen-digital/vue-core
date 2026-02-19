import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type MainSidebarVariant = 'icons-only' | 'icons-with-labels'

export interface DashboardSidebarNavLink {
  /**
   * Icon component to display alongside the label
   */
  icon: Component
  /**
   * Text label for the navigation link
   */
  label: string
  /**
   * Route location to navigate to
   */
  to: RouteLocationRaw
}

export interface DashboardSidebarGroup {
  /**
   * Optional label for the group
   */
  label?: string
  /**
   * Links within the group
   */
  links: DashboardSidebarNavLink[]
}
