<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { SelectItem } from '@wisemen/vue-core'
import { FormMultiSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
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
  iconLeft: {
    default: null,
    label: 'Left Icon',
    type: 'icon',
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
})

interface User {
  firstName: string
  lastName: string
}

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
    type: 'group',
    label: 'Group 1',
    items: [
      {
        type: 'option',
        value: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
      },
      {
        type: 'option',
        value: {
          firstName: 'James',
          lastName: 'Doe',
        },
      },
    ],
  },
]

const users = ref<User[]>([])

function displayFn(user: User): string {
  return `${user.firstName} ${user.lastName}`
}
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <FormMultiSelect
      v-model="users"
      :items="userItems"
      :errors="{ _errors: ['This is an error'] }"
      :display-fn="displayFn"
      v-bind="values"
    />
  </ComponentPlayground>
</template>
