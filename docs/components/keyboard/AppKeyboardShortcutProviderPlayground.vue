<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import type { KeyboardShortcutConfig } from '@wisemen/vue-core'
import {
  AppButton,
  AppKeyboardShortcut,
  AppKeyboardShortcutProvider,
  AppText,
} from '@wisemen/vue-core'

const exampleConfig: KeyboardShortcutConfig = {
  keys: [
    'e',
  ],
  preventDefault: false,
  stopPropagation: false,
}

function onClick(): void {
  // eslint-disable-next-line no-alert
  alert('Alert')
}
</script>

<template>
  <ComponentPlayground
    :controls="null"
  >
    <template #default>
      <AppKeyboardShortcutProvider
        :config="exampleConfig"
      >
        <AppButton @click="onClick">
          <div class="flex gap-2">
            <AppText variant="subtext">
              Alert
            </AppText>
            <AppKeyboardShortcut :keys="['e']" />
          </div>
        </AppButton>
      </AppKeyboardShortcutProvider>
    </template>
  </ComponentPlayground>
</template>
