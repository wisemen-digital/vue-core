<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type {
  KeyboardKey,
} from '../../types/keyboard.type'
import AppText from '../text/AppText.vue'
import AppKeyboardKey from './AppKeyboardKey.vue'
import type { KeyboardKeyStyleProps } from './keyboardKey.style'

const props = withDefaults(defineProps<{
  keys: KeyboardKey[]
  variant?: KeyboardKeyStyleProps['variant']
}>(), {
  variant: 'default',
})

const { t } = useI18n()

function isModifier(key: KeyboardKey): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keys.some(key => isModifier(key))
})
</script>

<template>
  <div class="flex items-center gap-x-1">
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
          variant="caption"
          class="text-muted-foreground"
        >
          {{ t('components.keyboard_shortcut.then') }}
        </AppText>
      </template>
    </template>
  </div>
</template>
