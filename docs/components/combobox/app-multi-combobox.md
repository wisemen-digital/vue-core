---
sidebar: auto
---

# AppMultiCombobox
<script setup>
import AppMultiComboboxPlayground from './AppMultiComboboxPlayground.vue'
</script>

<AppMultiComboboxPlayground />

For single value select, see [AppCombobox](/components/combobox/app-combobox.md).

## Props

| Prop           | Type                                                  | Description                                                 | Default                          |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| id             | `null` \| `string`                                    | The id of the combobox.                                     |                                  |
| isChevronHidden| `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled     | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isInvalid      | `boolean`                                             | Whether the combobox is in an invalid state.                | `false`                          |
| isLoading      | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| emptyText      | `null` \| `string`                                    | The text to display when there are no options.              | `t('components.combobox.empty')` |
| iconLeft       | `Icon` \| `null`                                      | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight      | `Icon` \| `null`                                      | The icon to display on the right side of the combobox.      | `null`                           |
| items*         | `ComboboxItem<TValue>[]`                              | The options to display in the combobox.                     |                                  |
| placeholder    | `null` \| `string`                                    | The placeholder text to display when the combobox is empty. | `null`                           |
| displayFn*     | `(value: TValue) => string`                           | Display function for the selected value.                    |                                  |
| filterFn*      | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         |                                  |


## v-model

| Prop           | Type               | Description                |
| -------------- | ------------------ | -------------------------- |
| v-model*       | `TValue[]`         | The value of the combobox. |
| v-model:search | `string` \| `null` | The search term.           |


## Events

| Event Name       | Type | Description                                    |
| ---------------- | ---- | ---------------------------------------------- |
| blur             | None | Emitted when the combobox loses focus.         |
| update:modelValue| None | Emitted when value of the combobox is updated. |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppMultiCombobox, ComboboxItem } from '@wisemen/vue-core'
import { ref } from 'vue'

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

function filterFn(users: User[], searchTerm: string): User[] {
  return users.filter((user) => {
    return displayFn(user).toLowerCase().includes(searchTerm.toLowerCase())
  })
}
</script>

<template>
  <AppMultiCombobox 
    v-model="users" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  />

  <!-- Or with a custom option slot -->
  <AppMultiCombobox 
    v-model="value" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppMultiCombobox>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/AppMultiCombobox.vue).