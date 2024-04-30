<script setup lang="ts">
import FormCombobox from '@components/components/combobox/FormCombobox.vue'
import type { ComboboxItem } from '@components/index'
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Label',
    label: 'Label',
    type: 'text',
    cols: 2,
  },
  emptyText: {
    default: 'Empty Text',
    label: 'Empty Text',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder',
    label: 'Placeholder',
    type: 'text',
  },
  iconLeft: {
    default: null,
    label: 'Left Icon',
    type: 'icon',
  },
  iconRight: {
    default: null,
    label: 'Right Icon',
    type: 'icon',
  },
  isChevronHidden: {
    default: false,
    label: 'Is Chevron Hidden',
    type: 'switch',
  },
  isDisabled: {
    default: false,
    label: 'Is Disabled',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is Loading',
    type: 'switch',
  },
  isTouched: {
    default: false,
    label: 'Is Touched',
    type: 'switch',
  },
})

interface User {
  firstName: string
  lastName: string
}

const userItems: ComboboxItem<User>[] = [
  {
    type: 'option',
    value: {
      firstName: 'John',
      lastName: 'Doe',
    },
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

function filterFn(users: User[], searchTerm: string): User[] {
  return users.filter((user) => {
    return displayFn(user).toLowerCase().includes(searchTerm.toLowerCase())
  })
}
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <FormCombobox
      v-model="user"
      :errors="{ _errors: ['This is an error'] }"
      :items="userItems"
      :display-fn="displayFn"
      :filter-fn="filterFn"

      v-bind="values"
    />
  </ComponentPlayground>
</template>
