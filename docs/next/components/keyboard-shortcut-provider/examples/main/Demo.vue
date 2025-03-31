<script setup lang="ts">
import {
  VcKeyboardShortcut,
  VcKeyboardShortcutProvider,
  VcTextField,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcKeyboardShortcutProvider
    v-slot="{ keys }"
    :keyboard-keys="['ctrl', 'k']"
    :prevent-default="true"
  >
    <VcTextField
      :model-value="null"
      placeholder="Press Ctrl+K to focus"
      class="w-72"
    >
      <template #right>
        <VcKeyboardShortcut
          :keyboard-keys="keys"
          class="mr-md"
        />
      </template>
    </VcTextField>
  </VcKeyboardShortcutProvider>
</template>
