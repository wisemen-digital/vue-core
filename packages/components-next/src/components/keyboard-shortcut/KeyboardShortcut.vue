<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import KeyboardKey from '@/components/keyboard-key/KeyboardKey.vue'
import type { KeyboardShortcutProps } from '@/components/keyboard-shortcut/keyboardShortcut.props'
import type { KeyboardKey as KeyboardKeyType } from '@/types/keyboard.type'
import { isMobileDevice } from '@/utils/device.util'

const props = defineProps<KeyboardShortcutProps>()

const { areKeyboardShortcutHintsHidden } = useInjectConfigContext()
const { t } = useI18n()

function isModifier(key: KeyboardKeyType): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keyboardKeys.some((keyboardKey) => isModifier(keyboardKey))
})
</script>

<template>
  <div
    v-if="!areKeyboardShortcutHintsHidden && !isMobileDevice()"
    class="flex items-center gap-x-1"
  >
    <template
      v-for="(keyboardKey, index) of keyboardKeys"
      :key="index"
    >
      <KeyboardKey :keyboard-key="keyboardKey" />

      <template v-if="index < props.keyboardKeys.length - 1 && isSequence">
        <span class="text-tertiary font-regular text-xs">
          {{ t('component.keyboard_shortcut.then') }}
        </span>
      </template>
    </template>
  </div>
</template>
