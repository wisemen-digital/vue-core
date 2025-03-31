import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { KeyboardKey } from '@/types/keyboard.type'
import type { CustomizableElement } from '@/utils/props.util'

export interface KeyboardKeyProps extends CustomizableElement<'keyboardKey'> {
  /**
   * The keyboard key to display.
   */
  keyboardKey: KeyboardKey
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'keyboardKey', 'variant'> | null
}
