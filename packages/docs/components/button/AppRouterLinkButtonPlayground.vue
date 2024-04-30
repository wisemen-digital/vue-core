<script setup lang="ts">
import AppButton from '@components/components/button/AppButton.vue'
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  slot: {
    default: 'Test Button',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
  variant: {
    default: 'default',
    cols: 1,
    items: [
      'default',
      'secondary',
      'outline',
      'ghost',
      'destructive',
      'destructive-outline',
    ],
    label: 'Variant',
    type: 'select',
  },
  size: {
    default: 'default',
    items: [
      'default',
      'icon',
      'lg',
      'sm',
      'unset',
      'xs',
    ],
    label: 'Size',
    type: 'select',
  },
  iconLeft: {
    default: 'alertCircle',
    label: 'Left icon',
    type: 'icon',
  },
  iconRight: {
    default: 'alertCircle',
    label: 'Right icon',
    type: 'icon',
  },
})
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <AppButton v-bind="values">
      {{ values.slot }}
    </AppButton>
  </ComponentPlayground>
</template>
