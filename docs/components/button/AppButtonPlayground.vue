<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppButton } from '@wisemen/vue-core'

const controls = createControls({
  slot: {
    default: 'Button',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is loading',
    type: 'switch',
  },
  size: {
    default: 'default',
    items: [
      'default',
      'sm',
    ],
    label: 'Size',
    type: 'select',
  },
  variant: {
    default: 'default',
    cols: 2,
    items: [
      'default',
      'muted',
      'outline',
      'ghost',
      'destructive',
    ],
    label: 'Variant',
    type: 'select',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppButton v-bind="values">
        {{ values.slot }}
      </AppButton>
    </template>
  </ComponentPlayground>
</template>
