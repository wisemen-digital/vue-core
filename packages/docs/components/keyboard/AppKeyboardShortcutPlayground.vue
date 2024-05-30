<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'

const controls = createControls({
  variant: {
    default: 'default',
    cols: 2,
    items: [
      'default',
      'bordered',
      'ghost',
      'secondary',
    ],
    label: 'Variant',
    type: 'select',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppKeyboardShortcut
        v-bind="values"
        :keys="['ctrl', 's']"
      />
    </template>
  </ComponentPlayground>
</template>
