<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppButton } from '@wisemen/vue-core'

const controls = createControls({
  slot: {
    default: 'Test Button',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
  variant: {
    default: 'default',
    cols: 2,
    items: [
      'default',
      'muted',
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
  type: {
    default: 'button',
    items: [
      'button',
      'reset',
      'submit',
    ],
    label: 'Type',
    type: 'select',
  },
  iconLeft: {
    default: null,
    label: 'Left icon',
    type: 'icon',
  },
  iconRight: {
    default: null,
    label: 'Right icon',
    type: 'icon',
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
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppButton v-bind="values">
        {{ values.slot }}
      </AppButton>
    </template>
  </ComponentPlayground>
</template>
