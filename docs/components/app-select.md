---
sidebar: auto
---

# AppSelect

## Props

| Prop         | Type           | Description                                                        | Default                          |
|--------------|----------------|--------------------------------------------------------------------|----------------------------------|
| items  **(required)**      | `SelectItem<T>[]` | The items to display in the select.                           |                                  |
| displayFn  **(required)**      | `(value: T) => string` | Display function for the selected value.                           |                                  |
| isDisabled   | `boolean`        | Whether the select is disabled.                                 | `false`                          |
| isInvalid    | `boolean`        | Whether the select is in an invalid state.                      | `false`                          |
| isLoading    | `boolean`        | Whether the select is loading.                                  | `false`                          |
| placeholder  | `null` \| `string` | The placeholder text to display when the select is empty.       | `null`                           |

## v-model

| Prop       | Type          | Description                               |
|------------|---------------|-------------------------------------------|
| v-model **(required)** | `SelectItem` \| `null` | The value of the select.                |

## Events

| Event Name  | Description                             |
|-------------|-----------------------------------------|
| blur        | Emitted when the select loses focus.  |
| filter      | Emitted when the select filters options based on user input. |

## Example Usage

```vue
<script setup lang="ts">
import { AppSelect, SelectItem } from '@wisemen/vue-core'
import { ref } from 'vue'

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

const value = ref<User | null>(null)
</script>

<template>
  <AppSelect 
    v-model="value" 
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <AppSelect 
    v-model="value" 
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppSelect>
</template>
