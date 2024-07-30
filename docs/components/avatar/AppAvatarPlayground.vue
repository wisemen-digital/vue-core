<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppAvatar } from '@wisemen/vue-core'

const controls = createControls({
  fallback: {
    default: 'CAT',
    cols: 2,
    label: 'Fallback',
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
})

const catImage = 'https://images.pexels.com/photos/736532/pexels-photo-736532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex gap-4">
        <AppAvatar
          :src="catImage"
          is-tooltip
          v-bind="values"
        >
          <template #tooltip>
            <div class="p-4 text-center">
              <p class="text-sm">
                This is a cat
              </p>
            </div>
          </template>
        </AppAvatar>
        <AppAvatar
          :src="catImage"
          v-bind="values"
        />
        <AppAvatar
          :src="null"
          v-bind="values"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
