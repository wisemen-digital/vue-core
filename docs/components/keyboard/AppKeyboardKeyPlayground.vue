<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppKeyboardKey } from '@wisemen/vue-core'

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
      <AppKeyboardKey
        v-bind="values"
        keyboard-key="shift"
      />
    </template>
  </ComponentPlayground>
</template>
