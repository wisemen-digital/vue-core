import type { AcceptableValue } from 'reka-ui'

import type {
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export type ButtonTabsValue = boolean | AcceptableValue

export interface ButtonTabsItemProps extends PrimitiveElement, InteractableElement {
  /**
   * Unique identifier for the tab item.
   */
  value: ButtonTabsValue
}

export interface ButtonTabsContentProps extends PrimitiveElement {
  /**
   * The value corresponding to a specific tab item.
   * It determines which content is displayed when a tab is selected.
   */
  value: ButtonTabsValue
}
