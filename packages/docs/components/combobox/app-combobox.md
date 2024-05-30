---
sidebar: auto
---

# AppCombobox
<script setup>
import AppComboboxPlayground from './AppComboboxPlayground.vue'
</script>

<AppComboboxPlayground />

For multi value select, see [AppMultiCombobox](/components/combobox/app-multi-combobox.md)


## Props

| Prop            | Type                                                  | Description                                                 | Default                          |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| id              | `null \| string`                                      | The HTML id of the combobox.                                |                                  |
| isChevronHidden | `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled      | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isLoading       | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| isInvalid       | `boolean`                                             | Whether the combobox is in an invalid state.                | `false`                          |
| emptyText       | `null \| string`                                      | The text to display when there are no options.              | `t('components.combobox.empty')` |
| iconLeft        | `Icon \| null`                                        | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight       | `Icon \| null`                                        | The icon to display on the right side of the combobox.      | `null`                           |
| items*          | `ComboboxItem<TValue>[]`                              | The options to display in the combobox.                     |                                  |
| placeholder     | `null \| string`                                      | The placeholder text to display when the combobox is empty. | `null`                           |
| displayFn*      | `(value: TValue) => string`                           | Display function for the selected value.                    |                                  |
| filterFn*       | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         |                                  |

## Slots

| Slot name | Type            | Description                                       |
| --------- | --------------- | ------------------------------------------------- |
| option    | `value: TValue` | Override the option rendering of the combobox     |
| empty     | none            | Override the empty state of the combobox dropdown |
| left      | none            | Override the left content of the combobox input   |
| right     | none            | Override the right content of the combobox input  |


## v-model

| Prop            | Type               | Description                |
| --------------- | ------------------ | -------------------------- |
| v-model*        | `TValue` \| `null` | The value of the combobox. |
| v-model:search  | `string` \| `null` | The search term            |

## Events

| Event Name       | Type | Description                                    |
| ---------------- | ---- | ---------------------------------------------- |
| blur             | None | Emitted when the combobox loses focus.         |
| update:modelValue| None | Emitted when value of the combobox is updated. |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppCombobox, ComboboxItem } from '@wisemen/vue-core'
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
    type: 'divider'
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
  <AppCombobox 
    v-model="user" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  />

  <!-- Or with a custom option slot -->
  <AppCombobox 
    v-model="value" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppCombobox>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/AppCombobox.vue).