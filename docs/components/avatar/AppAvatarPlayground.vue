<script lang="ts" setup>
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppAvatar } from '@wisemen/vue-core'

const controls = createControls({
  src: {
    default: 'https://images.pexels.com/photos/736532/pexels-photo-736532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Source',
    cols: 2,
    type: 'text',
  },
  fallback: {
    default: 'CAT',
    label: 'Fallback',
    type: 'text',
  },

  slot: {
    default: 'This is a cat',
    label: 'Slot (tooltip content)',
    type: 'text',
  },
  variant: {
    default: 'default',
    items: [
      'default',
      'muted',
      'secondary',
      'ghost',
    ],
    label: 'Variant of the fallback',
    type: 'select',
  },
  size: {
    default: 'default',
    items: [
      'default',
      'full',
      'sm',
      'lg',
      'xl',
      'xxl',
    ],
    label: 'Size',
    type: 'select',
  },
  hasTooltip: {
    default: false,
    label: 'Has tooltip',
    type: 'switch',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex gap-4">
        <AppAvatar
          v-bind="values"
        >
          <template #tooltip>
            <div class="p-4 text-center">
              {{ values.slot }}
            </div>
          </template>
        </AppAvatar>
      </div>
    </template>
  </ComponentPlayground>
</template>
