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
  value: TabsValue
}

export interface TabsContentProps extends PrimitiveElement {
  value: TabsValue
}
