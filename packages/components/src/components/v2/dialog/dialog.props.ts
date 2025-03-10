import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface DialogProps extends PrimitiveElement, CustomizableElement<'dialog'> {
  /**
   * The ID of the element to teleport the dialog content to. By default, the dialog content is teleported to the body.
   * @default null
   */
  teleportTargetId?: string | null
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
}
