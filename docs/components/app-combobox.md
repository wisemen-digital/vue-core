---
sidebar: auto
---

# AppCombobox

For multi value select, see [AppMultiCombobox](/components/app-multi-combobox.md).

## Props

| Prop         | Type           | Description                                                        | Default                          |
|--------------|----------------|--------------------------------------------------------------------|----------------------------------|
| items  **(required)**      | `ComboboxItem<T>[]` | The items to display in the combobox.                           |                                  |
| displayFn  **(required)**      | `(value: T) => string` | Display function for the selected value.                           |                                  |
| emptyText    | `null` \| `string` | The text to display when there are no options.                    | `t('components.combobox.empty')` |
| isDisabled   | `boolean`        | Whether the combobox is disabled.                                 | `false`                          |
| isInvalid    | `boolean`        | Whether the combobox is in an invalid state.                      | `false`                          |
| isLoading    | `boolean`        | Whether the combobox is loading.                                  | `false`                          |
| placeholder  | `null` \| `string` | The placeholder text to display when the combobox is empty.       | `null`                           |

## v-model

| Prop       | Type          | Description                               |
|------------|---------------|-------------------------------------------|
| v-model **(required)** | `ComboboxItem` \| `null` | The value of the combobox.                |
| v-model:search **(required)** | `string` \| `null` | The search term                |

## Events

| Event Name  | Description                             |
|-------------|-----------------------------------------|
| blur        | Emitted when the combobox loses focus.  |
| filter      | Emitted when the combobox filters options based on user input. |

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
