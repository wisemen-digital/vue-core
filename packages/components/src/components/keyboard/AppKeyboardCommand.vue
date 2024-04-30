<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppKeyboardKey from '@/components/keyboard/AppKeyboardKey.vue'
import AppText from '@/components/text/AppText.vue'
import type { CommandType, KeyboardKey } from '@/types/keyboard.type'

const props = withDefaults(defineProps<{
  commandType: CommandType
  hasBorder?: boolean
  keys: KeyboardKey[]
}>(), {
  hasBorder: false,
})

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center gap-x-1">
    <template
      v-for="(keyboardKey, index) of props.keys"
      :key="keyboardKey"
    >
      <AppKeyboardKey
        :has-border="props.hasBorder"
        :keyboard-key="keyboardKey"
      />

      <template v-if="index < props.keys.length - 1 && props.commandType === 'sequence'">
        <AppText
          variant="caption"
          class="text-muted-foreground"
        >
          {{ t('components.keyboard_command.then') }}
        </AppText>
      </template>
    </template>
  </div>
</template>
