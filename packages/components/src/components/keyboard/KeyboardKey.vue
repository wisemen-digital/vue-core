<script setup lang="ts">
import { computed } from 'vue'

import { keyboardStyle } from '@/components/keyboard/keyboard.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { KeyboardKey } from '@/types/keyboard.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  keyboardKey: KeyboardKey
}>()

const themeProviderContext = injectThemeProviderContext()

const keyMap = new Map<KeyboardKey, string>([
  [
    'alt',
    '⌥',
  ],
  [
    'arrowdown',
    '↓',
  ],
  [
    'arrowleft',
    '←',
  ],
  [
    'arrowright',
    '→',
  ],
  [
    'arrowup',
    '↑',
  ],
  [
    'backspace',
    '⌫',
  ],
  [
    'ctrl',
    '⌃',
  ],
  [
    'enter',
    '↵',
  ],
  [
    'escape',
    'ESC',
  ],
  [
    'meta',
    '⌘',
  ],
  [
    'shift',
    '⇧',
  ],
])

const style = keyboardStyle()

const keyboardKey = computed<string>(() => keyMap.get(props.keyboardKey) ?? props.keyboardKey)

const keyClasses = computed<string>(() => style.key())
// const keyboardStyle = useKeyboardStyle()
// const keyboardKeyClasses = computed<string>(() => keyboardStyle.key({
//   variant: props.variant,
// }))
</script>

<template>
  <kbd
    :class="[
      keyClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.isDarkModeEnabled.value),
    ]"
  >
    {{ keyboardKey }}
  </kbd>
</template>
