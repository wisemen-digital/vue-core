<script setup lang="ts">
import { ref } from 'vue'

import { useKeyboardShortcut } from '../../composables/keyboardShortcut.composable'
import type { KeyboardKey } from '../../types/keyboard.type'

const props = withDefaults(defineProps<{
  keys: KeyboardKey[]
  /**
   * Whether to prevent the default action of the keyboard event.
   */
  preventDefault?: boolean
  /**
   * Whether to prevent the propagation of the keyboard event.
   */
  preventPropagation?: boolean
}>(), {
  preventDefault: false,
  preventPropagation: false,
})

const wrapperRef = ref<HTMLElement | null>(null)

useKeyboardShortcut({
  keys: props.keys,
  onTrigger: (event) => {
    const firstElement = wrapperRef.value?.firstElementChild ?? null

    if (props.preventDefault) {
      event.preventDefault()
    }

    if (props.preventPropagation) {
      event.stopPropagation()
    }

    if (firstElement instanceof HTMLElement) {
      firstElement.click()
    }
  },
})
</script>

<template>
  <div ref="wrapperRef">
    <slot />
  </div>
</template>
