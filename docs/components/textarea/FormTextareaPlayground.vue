<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppText, FormTextarea } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Label',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Type your text here...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  heightClass: {
    default: 'h-32',
    cols: 2,
    label: 'Height class',
    type: 'text',
  },
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
  },
  resize: {
    default: 'none',
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
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
  isTouched: {
    default: false,
    label: 'Is touched',
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
        <FormTextarea
          v-bind="values"
          v-model="model"
          :errors="{ _errors: ['This is an error'] }"
          class="mb-3"
        />

        <AppText variant="caption">
          {{ `Model value: ${model}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
