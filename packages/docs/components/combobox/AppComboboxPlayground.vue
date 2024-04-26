<script setup lang="ts">
import AppButton from '@components/components/button/AppButton.vue'
import { ref } from 'vue'

import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols';
import AppCombobox from '@components/components/combobox/AppCombobox.vue';


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
    default: 'alertCircle',
    label: 'Left icon',
    type: 'icon',
  },
  iconRight: {
    default: 'alertCircle',
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
  <ComponentPlayground v-slot="{ values }" :controls="controls">
  </ComponentPlayground>
</template>
