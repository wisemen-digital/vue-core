import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface DialogProps extends PrimitiveElement, CustomizableElement<'dialog', [
  {
    name: 'closeButton'
    component: 'iconButton'
  },
]> {
  /**
   * The ID of the element to teleport the dialog content to.
   * By default, the dialog content is teleported to the body.
   * Should be without the leading `#`.
   * @default null
   */
  teleportTargetId?: string | null
  /**
   * Whether to hide the overlay.
   * @default false
   */
  hideOverlay?: boolean
  /**
   * Prevent clicks outside the dialog content to close the dialog.
   * @default false
   */
  preventClickOutside?: boolean
  /**
   * Prevent pressing the ESC key to close the dialog.
   * @default false
   */
  preventEsc?: boolean
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'dialog', 'variant'> | null
}
