import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type TabsVariant = 'button-border' | 'button-brand' | 'underline'

export interface TabsProps {
  /**
   * Whether the tabs should stretch to fill the full width of the container.
   * @default false
   */
  isFullWidth?: boolean
  /**
   * Defines the orientation of the tabs.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Defines the visual style of the tabs.
   * @default 'underline'
   */
  variant?: TabsVariant
}

export interface TabsItemProps {
  /**
   * Whether the tab item is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * A count to display as a badge on the right side of the tab.
   */
  count?: number | null
  /**
   * An optional icon to be displayed alongside the tab label.
   */
  icon?: Component
  /**
   * The label text for the tab.
   */
  label?: string | null
  /**
   * Unique identifier for the tab item.
   */
  value: string

}

export interface TabsContentProps {
  /**
   * The value corresponding to a specific tab item.
   * It determines which content is displayed when a tab is selected.
   */
  value: string
}

export interface TabsRouterLinkItemProps {
  /**
   * Whether the tab item is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * A count to display as a badge on the right side of the tab.
   */
  count?: number | null
  /**
   * An optional icon to be displayed alongside the tab label.
   */
  icon?: Component
  /**
   * The label text for the tab.
   */
  label?: string | null
  /**
   * The route location to navigate to when the tab is clicked.
   */
  to: RouteLocationRaw
}
