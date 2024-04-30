<script setup lang="ts">
import { computed } from 'vue'

<<<<<<< HEAD
import type { KeyboardKey } from '@/types/keyboard.type'
=======
import type { KeyboardKey } from '../../types/keyboard.type'
import type { KeyboardKeyStyleProps } from './keyboardKey.style'
import { keyboardKey } from './keyboardKey.style'
>>>>>>> origin/master

const props = withDefaults(defineProps<{
  keyboardKey: KeyboardKey
  variant?: KeyboardKeyStyleProps['variant']
}>(), {
  variant: 'default',
})

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

const key = computed<string>(() => keyMap.get(props.keyboardKey) ?? props.keyboardKey)

const keyboardKeyClasses = computed<string>(() => keyboardKey({
  variant: props.variant,
}))
</script>

<template>
  <kbd :class="keyboardKeyClasses">
    {{ key }}
  </kbd>
</template>
