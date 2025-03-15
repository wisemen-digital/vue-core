import type { RouteLocationNamedRaw } from 'vue-router'

import type { TabsStyle } from '@/packages/@next/tabs/shared/style/tabs.style'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface TabsProps extends PrimitiveElement, CustomizableElement<'tabs'> {
  /**
   * Defines the orientation of the tabs.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Defines the visual style of the tabs.
   * @default 'underline'
   */
  variant?: TabsStyle['variant']
}

export interface RouterLinkTabsItemProps extends PrimitiveElement {
  /**
   * The route to navigate to when the tab is clicked.
   */
  to: RouteLocationNamedRaw
}
