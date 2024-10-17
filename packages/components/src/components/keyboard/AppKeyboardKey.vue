<script setup lang="ts">
import { computed } from 'vue'

import { keyboardStyle } from '@/components/keyboard/keyboard.style.js'
import type { KeyboardKey } from '@/types/keyboard.type.js'

const props = defineProps<{
  keyboardKey: KeyboardKey
}>()

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
  <kbd :class="keyClasses">
    {{ keyboardKey }}
  </kbd>
</template>
