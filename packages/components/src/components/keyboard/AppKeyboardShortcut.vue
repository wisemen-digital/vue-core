<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppKeyboardKey from '@/components/keyboard/AppKeyboardKey.vue'
import type { KeyboardKeyStyleProps } from '@/components/keyboard/keyboardKey.style'
import AppText from '@/components/text/AppText.vue'
import type {
  KeyboardKey,
} from '@/types/keyboard.type'

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

const foregroundColorClass = computed<string>(() => {
  if (props.variant === 'bordered' || props.variant === 'ghost') {
    return 'text-muted-foreground'
  }

  if (props.variant === 'secondary') {
    return 'text-primary-foreground'
  }

  return 'text-secondary-foreground'
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
          :class="foregroundColorClass"
          variant="caption"
        >
          {{ t('components.keyboard_shortcut.then') }}
        </AppText>
      </template>
    </template>
  </div>
</template>
