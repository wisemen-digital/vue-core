import type {
  KeyboardKey,
} from '@/types/keyboard.type'

export interface KeyboardShortcutProviderProps {
  isDisabled?: boolean
  keyboardKeys: KeyboardKey[]
  preventDefault?: boolean
  stopPropagation?: boolean
}
