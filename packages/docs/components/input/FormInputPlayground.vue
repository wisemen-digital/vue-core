<script setup lang="ts">
import FormInput from '@/components/input/FormInput.vue';
import AppText from '@/components/text/AppText.vue';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue';

const controls = createControls({
  label: {
    default: 'Name',
    cols: 2,
    label: 'Label',
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
    default: 'Name',
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
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is loading',
    type: 'switch',
  },  
})

const model = ref<string | null>(null)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <FormInput
          class="mb-3"
          v-bind="values"
          :is-touched="false"
          :errors="null"
          v-model="model"
        />

        <AppText variant="caption">
          Model value: {{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
