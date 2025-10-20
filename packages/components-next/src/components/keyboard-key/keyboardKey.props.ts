import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type { KeyboardKey } from '@/types/keyboard.type'
import type { PublicProps } from '@/types/props.type'

export interface KeyboardKeyProps extends CustomizableElement<'keyboardKey'> {
  /**
   * The keyboard key to display.
   */
  keyboardKey: KeyboardKey
  /**
   * Defines the visual style of the keyboard key.
   */
  variant?: GetComponentProp<'keyboardKey', 'variant'> | null
}

export type KeyboardKeyPublicProps = PublicProps<KeyboardKeyProps>
