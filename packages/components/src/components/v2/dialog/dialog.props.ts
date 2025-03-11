import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export type DialogMode = 'inline' | 'overlay'

export interface DialogProps extends PrimitiveElement, CustomizableElement<'dialog'> {
  /**
   * The ID of the element to teleport the dialog content to.
   * By default, the dialog content is teleported to the body.
   * Should be without the leading `#`.
   * @default null
   */
  teleportTargetId?: string | null
  /**
   * Determines how the dialog is rendered in the DOM.
   * Popup mode renders the dialog as a popup, while inline mode renders the dialog as a child of the parent element.
   * @default 'overlay'
   */
  mode?: DialogMode
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
