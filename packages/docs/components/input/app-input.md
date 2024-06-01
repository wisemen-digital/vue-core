---
sidebar: auto
---

# AppInput
<script setup>
import AppInputPlayground from './AppInputPlayground.vue'
</script>

<AppInputPlayground />


## Props

| Prop        | Type                                                                                     | Description                                       | Default     |
|-------------|------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| id          | `null` \| `string`                                                                       | The id of the input.                              | `null`      |
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isInvalid   | `boolean`                                                                                | Whether the input is invalid.                     | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`     |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |


## Slots

| Slot name | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| `left`      | None | Replace the left icon with custom content |
| `right`     | None | Replace the right icon with custom content|


## v-model

| Prop     | Type                 | Description  |
|----------|----------------------|--------------|
| v-mode*  | `string` \| `null`  | The value of the input.        |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur     | Emitted when the input loses focus.                  |
| focus     | Emitted when the input gains focus.                  |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppInput } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppInput v-model="value" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/AppInput.vue).
