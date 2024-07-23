<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { SelectItem } from '@wisemen/vue-core'
import { FormSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

interface User {
  firstName: string
  lastName: string
}

const controls = createControls({
  iconLeft: {
    default: null,
    label: 'Left Icon',
    type: 'icon',
  },
  label: {
    default: 'Label',
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder',
    label: 'Placeholder',
    type: 'text',
  },
  tooltip: {
    default: 'Tooltip',
    label: 'Tooltip',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is Disabled',
    type: 'switch',
  },
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is Loading',
    type: 'switch',
  },
  isTouched: {
    default: false,
    label: 'Is touched',
    type: 'switch',
  },
  hasClearButton: {
    default: false,
    label: 'Has Clear Button',
    type: 'switch',
  },
})

const userItems: SelectItem<User>[] = [
  {
    type: 'option',
    value: {
      firstName: 'John',
      lastName: 'Doe',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'option',
    value: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
]

const user = ref<User | null>(null)

function displayFn(user: User): string {
  return `${user.firstName} ${user.lastName}`
}
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <FormSelect
      v-model="user"
      :errors="{ _errors: ['This is an error'] }"
      :items="userItems"
      :display-fn="displayFn"
      v-bind="values"
    />
  </ComponentPlayground>
</template>
