---
sidebar: auto
---

# AppInput

## Props

| Prop        | Type                                                                                      | Description                                       | Default     |
|-------------|-------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| id          | `null` \| `string`                                                                       | The id of the input.                              | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isInvalid   | `boolean`                                                                                | Whether the input is invalid.                     | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`           |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |

## v-model

| Prop     | Type                 | Description  |
|----------|----------------------|--------------|
| v-model **(required)**  | `string` \| `null`  | The value of the input.        |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the input loses focus.                  |
| focus       | Emitted when the input gains focus.                  |

## Example Usage

```vue
<script setup lang="ts">
import { AppInput } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppInput v-model="value" />
</template>
