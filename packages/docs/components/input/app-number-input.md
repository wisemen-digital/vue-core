---
sidebar: auto
---


# AppNumberInput
<script setup>
import AppNumberInputPlayground from './AppNumberInputPlayground.vue'
</script>

<AppNumberInputPlayground />

## Props

| Prop          | Type                                         | Description                                          | Default     |
| ------------ | ----------------------------------------------| ---------------------------------------------------- | ----------- |
| id           | `string` \| `null`                            | The id of the input.                                 | `null`      |
| isDisabled   | `boolean`                                     | Whether the input is disabled.                       | `false`     |
| isInvalid    | `boolean`                                     | Whether the input is invalid.                        | `false`     |
| isLoading    | `boolean`                                     | Whether the input is loading.                        | `false`     |
| hideControls | `boolean`                                     | Whether to hide the increment and decrement controls.| `false`     |
| iconLeft     | `Icon` \| `null`                              | The left icon of the input.                          | `null`      |
| max          | `number` \| `null`                            | The maximum value of the input.                      | `null`      |
| min          | `number` \| `null`                            | The minimum value of the input.                      | `0`         |
| placeholder  | `string` \| `null`                            | The placeholder of the input.                        | `null`      |



## Slots

| Slot      | Type | Description                                |
| --------- | ---- | ------------------------------------------ |
| `right`   | None | Optional content on the right of the input |

## v-model

| Model   | Type               | Description        |
| ------- | ------------------ | ------------------ |
| `model`*| `number` \| `null` | Value of the input |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <AppButton>
    Button Text      
  </AppButton>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/AppNumberInput.vue).