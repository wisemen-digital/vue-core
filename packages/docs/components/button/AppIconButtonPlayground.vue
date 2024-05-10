<script setup lang="ts">
import AppIconButton from '@components/components/button/AppIconButton.vue'
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  label: {
    default: 'Test Button',
    label: 'Label (Accessbility)',
    type: 'text',
  },
  icon: {
    default: 'alertCircle',
    label: 'Icon',
    type: 'icon',
  },
  variant: {
    default: 'default',
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
      'lg',
      'sm',
      'unset',
      'xs',
    ],
    label: 'Size',
    type: 'select',
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
})
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <AppIconButton v-bind="values" />
  </ComponentPlayground>
</template>
