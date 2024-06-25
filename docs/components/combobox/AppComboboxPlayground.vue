<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { ComboboxItem } from '@wisemen/vue-core'
import { AppCombobox } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
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
  hasSearchInDropdown: {
    default: false,
    label: 'Has search in dropdown',
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
    <AppCombobox
      v-model="user"
      :items="userItems"
      :display-fn="displayFn"
      :filter-fn="filterFn"
      v-bind="values"
    />
  </ComponentPlayground>
</template>
