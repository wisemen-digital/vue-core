<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { injectConfigContext } from '@/components/config-provider/config.context'
import KeyboardKey from '@/components/keyboard/KeyboardKey.vue'
import type { KeyboardKey as KeyboardKeyType } from '@/types/keyboard.type'

const props = withDefaults(defineProps<{
  /**
   * Keyboard classes
   */
  keyboardClasses?: string | null
  /**
   * The keyboard key(s) to display
   */
  keyboardKeys: KeyboardKeyType[]
}>(), {
  keyboardClasses: null,
})

const { t } = useI18n()

const globalConfigContext = injectConfigContext()

function isModifier(key: KeyboardKeyType): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keyboardKeys.some((keyboardKey) => isModifier(keyboardKey))
})
</script>

<template>
  <div
    v-if="globalConfigContext.areKeyboardShortcutHintsHidden.value"
    class="flex items-center gap-x-1"
  >
    <template
      v-for="(keyboardKey, index) of keyboardKeys"
      :key="index"
    >
      <KeyboardKey
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
