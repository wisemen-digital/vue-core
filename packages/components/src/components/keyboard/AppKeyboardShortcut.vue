<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppKeyboardKey from '@/components/keyboard/AppKeyboardKey.vue'
import type { KeyboardKey } from '@/types/keyboard.type'

const props = withDefaults(defineProps<{
  /**
   * Keyboard classes
   */
  keyboardClasses?: null | string
  /**
   * The keyboard key(s) to display
   */
  keyboardKeys: KeyboardKey[]
}>(), {
  keyboardClasses: null,
})

const { t } = useI18n()

function isModifier(key: KeyboardKey): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keyboardKeys.some((keyboardKey) => isModifier(keyboardKey))
})
</script>

<template>
  <div class="flex items-center gap-x-1">
    <template
      v-for="(keyboardKey, index) of keyboardKeys"
      :key="index"
    >
      <AppKeyboardKey
        :keyboard-key="keyboardKey"
        :class="keyboardClasses"
      />

      <template v-if="index < props.keyboardKeys.length - 1 && isSequence">
        <span class="text-xs font-normal">
          {{ t('component.keyboard_shortcut.then') }}
        </span>
      </template>
    </template>
  </div>
</template>
