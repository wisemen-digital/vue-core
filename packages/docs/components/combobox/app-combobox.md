---
sidebar: auto
---

# AppCombobox
<script setup>
import AppComboboxPlayground from './AppComboboxPlayground.vue'
</script>

<AppComboboxPlayground />

For multi value select, see [AppMultiCombobox](/components/app-multi-combobox.md).


## Props

| Prop            | Type                                                  | Description                                                 | Default                          |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| displayFn       | `(value: TValue) => string`                           | Display function for the selected value.                    | -                                |
| emptyText       | `null \| string`                                      | The text to display when there are no options.              | `t('components.combobox.empty')` |
| filterFn        | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         | -                                |
| iconLeft        | `Icon \| null`                                        | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight       | `Icon \| null`                                        | The icon to display on the right side of the combobox.      | `null`                           |
| id              | `null \| string`                                      | The HTML id of the combobox.                                | -                                |
| isChevronHidden | `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled      | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isInvalid       | `boolean`                                             | Whether the combobox is in an invalid state.                | `false`                          |
| isLoading       | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| items           | `ComboboxItem<TValue>[]`                              | The options to display in the combobox.                     | -                                |
| placeholder     | `null \| string`                                      | The placeholder text to display when the combobox is empty. | `null`                           |

## v-model

| Prop                          | Type               | Description                |
| ----------------------------- | ------------------ | -------------------------- |
| v-model **(required)**        | `TValue` \| `null` | The value of the combobox. |
| v-model:search **(required)** | `string` \| `null` | The search term            |

## Events

| Event Name | Description                            |
| ---------- | -------------------------------------- |
| blur       | Emitted when the combobox loses focus. |

## Example Usage

```vue
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
</script>

<template>
  <AppCombobox 
    v-model="user" 
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <AppCombobox 
    v-model="value" 
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppCombobox>
</template>
