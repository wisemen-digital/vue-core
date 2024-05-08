<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

import AppInput from '@/components/input/AppInput.vue'
import AppText from '@/components/text/AppText.vue'

const controls = createControls({
  id: {
    default: 'input-id',
    cols: 2,
    label: 'Id',
    type: 'text',
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
  placeholder: {
    default: 'Placeholder...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  type: {
    default: 'text',
    cols: 2,
    items: [
      'date',
      'datetime-local',
      'email',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
    ],
    label: 'Type',
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
  isLoading: {
    default: false,
    label: 'Is loading',
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
        <AppInput
          v-bind="values"
          v-model="model"
          class="mb-3"
        />

        <AppText variant="caption">
          Model value: {{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
