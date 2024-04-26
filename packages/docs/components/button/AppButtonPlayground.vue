<script setup lang="ts">
import AppButton from '@components/components/button/AppButton.vue'
import { ref } from 'vue'

import ComponentPlayground from '../../playground/components/ComponentPlayground.vue'
import { createControls } from '../../playground/types/controls.type'

// default: 'h-10 px-4 py-2 text-sm',
//       icon: 'size-10 text-sm',
//       lg: 'h-11 px-8 text-base',
//       sm: 'h-9 px-3 text-xs',
//       unset: '',
//       xs: 'h-6 px-2 text-xs',

// default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline

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

const model = ref<string>('')
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <AppButton
      v-bind="values"
      v-model="model"
    >
      {{ values.slot }}
    </AppButton>
  </ComponentPlayground>
</template>
