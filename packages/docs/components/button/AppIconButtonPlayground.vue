<script setup lang="ts">
import AppButton from '@components/components/button/AppButton.vue'
import { ref } from 'vue'

import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols';
import AppIconButton from '@components/components/button/AppIconButton.vue';


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
  iconSize: {
    default: 'default',
    items: [
      'full',
      'xs',
      'sm',
      'default',
      'lg',
      'xl',
      'xxl',
    ],
    label: 'Icon Size',
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

const model = ref<string>('')
</script>

<template>
  <ComponentPlayground v-slot="{ values }" :controls="controls">
    <AppIconButton v-bind="values" />
  </ComponentPlayground>
</template>
