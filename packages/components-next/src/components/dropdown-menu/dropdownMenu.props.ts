import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { PopperPropsWithArrowVisibleByDefault } from '@/types/popperProps.type'
import type {
  CustomizableElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface DropdownMenuProps extends PrimitiveElement,
  InteractableElement,
  PopperPropsWithArrowVisibleByDefault,
  CustomizableElement<'dropdownMenu'> {
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'dropdownMenu', 'variant'> | null
}

export interface DropdownMenuItemProps extends PrimitiveElement, InteractableElement {
  /**
   * Whether the item is destructive or dangerous.
   * @default false
   */
  isDestructive?: boolean
  /**
   * The icon of the item.
   * @default null
   */
  icon?: Icon | null
  /**
   * The label of the item.
   */
  label: string
}
