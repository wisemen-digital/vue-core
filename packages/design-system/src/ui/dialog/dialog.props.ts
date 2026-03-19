export type DialogSize = 'full-screen' | 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxs'

export interface DialogProps {
  /**
   * Whether the dialog is open.
   */
  isOpen: boolean
  /**
   * Whether to prevent closing the dialog by clicking outside.
   * @default false
   */
  preventClickOutside?: boolean
  /**
   * Whether to prevent closing the dialog by pressing Escape.
   * @default false
   */
  preventEsc?: boolean

  /**
   * The size of the dialog.
   * @default 'md'
   */
  size?: DialogSize
}
