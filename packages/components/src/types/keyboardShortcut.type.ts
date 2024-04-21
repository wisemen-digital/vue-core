import type { Ref } from 'vue'

import type { KeyboardKey } from './keyboard.type'

export interface KeyboardShortcut {
  /**
   * The element to bind the keyboard shortcut to
   * @default document
   */
  element?: HTMLElement
  /**
   * Whether the keyboard shortcut is disabled
   * @default false
   */
  isDisabled?: Ref<boolean>
  /**
   * The keys to trigger the shortcut
   * @example ['ctrl', 'shift', 'a'] will trigger on ctrl + shift + a in combination mode
   * @example ['a', 'b', 'c'] will trigger in sequence mode
   */
  keys: KeyboardKey[]
}

export interface KeyboardShortcutConfig {
  keys: KeyboardKey[]
  preventDefault?: boolean
  stopPropagation?: boolean
}
