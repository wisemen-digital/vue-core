<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppTagsInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  id: {
    default: 'id-app-tags-input',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  max: {
    default: '5',
    cols: 2,
    label: 'Max',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
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

const model = ref<string[]>([])
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppTagsInput
        v-bind="values"
        v-model="model"
      />
    </template>
  </ComponentPlayground>
</template>
