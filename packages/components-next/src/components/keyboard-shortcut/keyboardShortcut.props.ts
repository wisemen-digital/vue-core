import type { KeyboardKey } from '@/types/keyboard.type'
import type { CustomizableElement } from '@/utils/props.util'

export interface KeyboardShortcutProps extends CustomizableElement<'keyboardShortcut', [
  {
    name: 'keyboardKey'
    component: 'keyboardKey'
  },
]> {
  /**
   * A list of keyboard keys that represent the shortcut combination.
   */
  keyboardKeys: KeyboardKey[]
}
