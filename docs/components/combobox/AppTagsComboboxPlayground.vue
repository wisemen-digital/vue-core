<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { ComboboxItem } from '@wisemen/vue-core'
import { AppTagsCombobox } from '@wisemen/vue-core'
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
    type: 'group',
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
          firstName: 'Jimmy',
          lastName: 'Doe',
        },
      },
    ],
    label: 'Group 1',
    icon: 'warning',
  },
]

const user = ref<User[]>([])

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
    :controls="controls"
  >
    <template #default="{ values }">
      <AppTagsCombobox
        v-bind="values"
        v-model="user"
        :display-fn="displayFn"
        :filter-fn="filterFn"
        :items="userItems"
        class="w-96"
      />
    </template>
  </ComponentPlayground>
</template>
