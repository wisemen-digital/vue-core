<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppKeyboardKey from '@/components/keyboard/AppKeyboardKey.vue'
import {
  type KeyboardStyleProps,
  useKeyboardStyle,
} from '@/components/keyboard/keyboardKey.style'
import AppText from '@/components/text/AppText.vue'
import type {
  KeyboardKey,
} from '@/types/keyboard.type'

const props = withDefaults(defineProps<{
  keys: KeyboardKey[]
  variant?: KeyboardStyleProps['variant']
}>(), {
  variant: 'default',
})

const { t } = useI18n()

function isModifier(key: KeyboardKey): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keys.some((key) => isModifier(key))
})

const keyboardStyle = useKeyboardStyle()
const shortcutContainerClasses = computed<string>(() => keyboardStyle.shortcutContainer())
const shortcutTextClasses = computed<string>(() => keyboardStyle.shortcutText({
  variant: props.variant,
}))
</script>

<template>
  <div :class="shortcutContainerClasses">
    <template
      v-for="(keyboardKey, index) of props.keys"
      :key="keyboardKey"
    >
      <AppKeyboardKey
        :variant="props.variant"
        :keyboard-key="keyboardKey"
      />

      <template v-if="index < props.keys.length - 1 && isSequence">
        <AppText
          :class="shortcutTextClasses"
          variant="caption"
        >
          {{ t('components.keyboard_shortcut.then') }}
        </AppText>
      </template>
    </template>
  </div>
</template>
