import type { KeyboardShortcutProviderProps } from '@/components/keyboard-shortcut-provider/keyboardShortcutProvider.props'

export type VcKeyboardShortcutProviderProps = Omit<KeyboardShortcutProviderProps, 'classConfig' | 'size' | 'variant'>
export { default as VcKeyboardShortcutProvider } from '@/components/keyboard-shortcut-provider/KeyboardShortcutProvider.vue'
