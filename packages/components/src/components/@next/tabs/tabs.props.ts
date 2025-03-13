import type { RouteLocationNamedRaw } from 'vue-router'

import type { TabsStyle } from '@/components/@next/tabs/style/tabs.style'
import type { TabsValue } from '@/components/@next/tabs/tabs.type'
import type {
  CustomizableElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface TabsProps extends PrimitiveElement, InteractableElement, CustomizableElement<'tabs'> {
  /**
   * Defines the visual style of the tabs.
   * @default 'underline'
   */
  variant?: TabsStyle['variant']
}

export interface TabItemProps extends PrimitiveElement, InteractableElement {
  /**
   * Unique identifier for the tab item.
   */
  value: TabsValue
}

export interface TabsContentProps extends PrimitiveElement {
  /**
   * The value corresponding to a specific tab item.
   * It determines which content is displayed when a tab is selected.
   */
  value: TabsValue
}

export interface RouteTabItemProps extends PrimitiveElement {
  /**
   * The route to navigate to when the tab is clicked.
   */
  to: RouteLocationNamedRaw
}
