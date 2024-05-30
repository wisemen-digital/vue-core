<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

import type { SelectItem } from '@/index'
import { AppSelect } from '@/index'

interface User {
  firstName: string
  lastName: string
}

const controls = createControls({
  iconLeft: {
    default: 'alertCircle',
    label: 'Left Icon',
    type: 'icon',
  },
  placeholder: {
    default: 'Placeholder',
    label: 'Placeholder',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is Disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is Invalid',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is Loading',
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
    <AppSelect
      v-model="user"
      :items="userItems"
      :display-fn="(test) => displayFn(test)"
      v-bind="values"
    />
  </ComponentPlayground>
</template>
