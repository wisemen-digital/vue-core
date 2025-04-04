import type { TabsStyle } from '@/components/tabs/shared/tabs.style'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
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
  variant?: GetComponentPropCustomValues<'tabs', 'variant'> | TabsStyle['variant']
}

export interface RouterLinkTabsItemProps extends PrimitiveElement {
  /**
   * The route to navigate to when the tab is clicked.
   */
  // @ts-expect-error no matching signature
  to: Routes[number]
}
