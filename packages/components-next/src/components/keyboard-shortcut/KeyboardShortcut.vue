<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import KeyboardKey from '@/components/keyboard-key/KeyboardKey.vue'
import type { KeyboardShortcutProps } from '@/components/keyboard-shortcut/keyboardShortcut.props'
import type { CreatekeyboardShortcutStyle } from '@/components/keyboard-shortcut/keyboardShortcut.style'
import { createkeyboardShortcutStyle } from '@/components/keyboard-shortcut/keyboardShortcut.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import type { KeyboardKey as KeyboardKeyType } from '@/types/keyboard.type'
import { isMobileDevice } from '@/utils/device.util'

const props = withDefaults(defineProps<KeyboardShortcutProps>(), { classConfig: null })

const { areKeyboardShortcutHintsHidden } = useInjectConfigContext()
const { t } = useI18n()

function isModifier(key: KeyboardKeyType): boolean {
  return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
}

const isSequence = computed<boolean>(() => {
  return !props.keyboardKeys.some((keyboardKey) => isModifier(keyboardKey))
})

const keyboardShortcutStyle = computed<CreatekeyboardShortcutStyle>(
  () => createkeyboardShortcutStyle(),
)

const customClassConfig = useComponentClassConfig('keyboardShortcut', {})
</script>

<template>
  <div
    v-if="!areKeyboardShortcutHintsHidden && !isMobileDevice()"
    :class="keyboardShortcutStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
  >
    <template
      v-for="(keyboardKey, index) of keyboardKeys"
      :key="index"
    >
      <KeyboardKey
        :keyboard-key="keyboardKey"
        :class-config="props.classConfig?.keyboardKey"
      />

      <template v-if="index < props.keyboardKeys.length - 1 && isSequence">
        <span
          :class="keyboardShortcutStyle.thenLabel({
            class: mergeClasses(customClassConfig.thenLabel, props.classConfig?.thenLabel),
          })"
        >
          {{ t('component.keyboard_shortcut.then') }}
        </span>
      </template>
    </template>
  </div>
</template>
