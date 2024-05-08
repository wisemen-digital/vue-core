<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { computed, ref } from 'vue'

import AppText from '@/components/text/AppText.vue'
import AppTextarea from '@/components/textarea/AppTextarea.vue'

const controls = createControls({
  id: {
    default: 'text-area-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  heightClass: {
    default: 'h-32',
    cols: 2,
    label: 'Height class',
    type: 'text',
  },
  placeholder: {
    default: 'Type your text here...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  resize: {
    default: 'none',
    cols: 2,
    items: [
      'both',
      'horizontal',
      'none',
      'vertical',
    ],
    label: 'Resize',
    type: 'select',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  },
})

const model = ref<null | string>(null)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <AppTextarea
          v-bind="values"
          v-model="model"
          class="mb-3"
        />

        <AppText variant="caption">
          {{ `Model value: ${model}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
