---
sidebar: auto
---

# AppSelect

## Props

| Prop        | Type                                      | Description                                             | Default   |
|-------------|-------------------------------------------|---------------------------------------------------------|-----------|
| options **(required)**     | `DataItem<T>[]`                           | The options of the select.                              |           |
| id          | `string` \| `null`                          | The id of the select.                                   | `null`    |
| isDisabled  | `boolean`                                 | Whether the select is disabled.                         | `false`   |
| isInvalid   | `boolean`                                 | Whether the select is invalid.                          | `false`   |
| isLoading   | `boolean`                                 | Whether the select is loading.                          | `false`   |
| placeholder | `string` \| `null`                          | The placeholder of the select.                          | `null`    |

## v-model

| Prop       | Type               | Description                          |
|------------|--------------------|--------------------------------------|
| v-model **(required)**    | `string` \| `null`        | The value of the select.             |

## Events

| Event Name | Description                      |
|------------|----------------------------------|
| blur       | Emitted when the select loses focus. |

## Example Usage

```vue
<script setup lang="ts">
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<string | null>(null)
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]
</script>

<template>
  <AppSelect 
    v-model="value" 
    :options="options"
  />
</template>
