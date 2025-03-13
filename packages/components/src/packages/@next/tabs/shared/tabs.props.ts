import type { RouteLocationNamedRaw } from 'vue-router'

import type { TabsStyle } from '@/packages/@next/tabs/shared/style/tabs.style'
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

export interface RouteTabsItemProps extends PrimitiveElement {
  /**
   * The route to navigate to when the tab is clicked.
   */
  to: RouteLocationNamedRaw
}
