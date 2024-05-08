<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

import AppIcon from '@/components/icon/AppIcon.vue'

const controls = createControls({
  icon: {
    default: 'search',
    label: 'Icon',
    type: 'icon',
  },
  size: {
    default: 'default',
    items: [
      'default',
      'full',
      'xs',
      'sm',
      'lg',
      'xl',
      'xxl',
    ],
    label: 'Size',
    type: 'select',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppIcon v-bind="values" />
    </template>
  </ComponentPlayground>
</template>
