<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols.js'
import type { ComboboxItem } from '@wisemen/vue-core'
import { AppAutocomplete } from '@wisemen/vue-core'
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
  hasClearButton: {
    default: false,
    label: 'Has Clear Button',
    type: 'switch',
  },
})

interface User {
  uuid: string
  firstName: string
  lastName: string
}

const allUsers = [
  {
    uuid: '1',
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    uuid: '2',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    uuid: '3',
    firstName: 'Alice',
    lastName: 'Smith',
  },
  {
    uuid: '4',
    firstName: 'Bob',
    lastName: 'Brown',
  },
  {
    uuid: '5',
    firstName: 'Charlie',
    lastName: 'White',
  },
  {
    uuid: '6',
    firstName: 'David',
    lastName: 'Black',
  },
  {
    uuid: '7',
    firstName: 'Eve',
    lastName: 'Green',
  },
  {
    uuid: '8',
    firstName: 'Frank',
    lastName: 'Yellow',
  },
  {
    uuid: '9',
    firstName: 'Grace',
    lastName: 'Red',
  },
  {
    uuid: '10',
    firstName: 'Hank',
    lastName: 'Blue',
  },
  {
    uuid: '11',
    firstName: 'Ivy',
    lastName: 'Purple',
  },
  {
    uuid: '12',
    firstName: 'Jack',
    lastName: 'Orange',
  },
  {
    uuid: '13',
    firstName: 'Kelly',
    lastName: 'Pink',
  },
  {
    uuid: '14',
    firstName: 'Liam',
    lastName: 'Grey',
  },
  {
    uuid: '15',
    firstName: 'Mia',
    lastName: 'Brown',
  },
  {
    uuid: '16',
    firstName: 'Noah',
    lastName: 'White',
  },
  {
    uuid: '17',
    firstName: 'Olivia',
    lastName: 'Black',
  },
  {
    uuid: '18',
    firstName: 'Parker',
    lastName: 'Green',
  },
  {
    uuid: '19',
    firstName: 'Quinn',
    lastName: 'Yellow',
  },
  {
    uuid: '20',
    firstName: 'Riley',
    lastName: 'Red',
  },
  {
    uuid: '21',
    firstName: 'Sophia',
    lastName: 'Blue',
  },
  {
    uuid: '22',
    firstName: 'Thomas',
    lastName: 'Purple',
  },
  {
    uuid: '23',
    firstName: 'Uma',
    lastName: 'Orange',
  },
  {
    uuid: '24',
    firstName: 'Vincent',
    lastName: 'Pink',
  },
]

const value = ref<User | null>({
  firstName: 'Alian',
  lastName: 'Smith',
  uuid: '2309',
})
const items = ref<ComboboxItem<User>[]>([])
const isLoading = ref<boolean>(false)

let timeout: ReturnType<typeof setTimeout> | null = null

function displayFn(user: User): string {
  return `${user.firstName} ${user.lastName}`
}

function onSearch(searchTerm: null | string): void {
  if (searchTerm === null) {
    items.value = []

    return
  }

  isLoading.value = true

  if (timeout !== null) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    isLoading.value = false
    items.value = allUsers
      .filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((user) => ({
        type: 'option',
        value: user,
      }))
  }, 1000)
}
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppAutocomplete
        v-bind="values"
        v-model="value"
        :display-fn="displayFn"
        :items="items"
        :is-loading="isLoading"
        class="w-52"
        @search="onSearch"
      />
    </template>
  </ComponentPlayground>
</template>
