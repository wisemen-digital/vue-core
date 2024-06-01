---
sidebar: auto
---


# AppTextarea
<script setup>
import AppTextareaPlayground from './AppTextareaPlayground.vue'
</script>

<AppTextareaPlayground />


## Props

| Prop       | Type                                                                    | Description                                          | Default     |
| ---------- | ----------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| id         | `null` \| `string`                                                      | The id of the input.                                 | `null`      |
| isDisabled | `boolean`                                                               | Whether the input is disabled.                       | `false`     |
| isInvalid  |  `boolean`                                                              | Whether the input is invalid.                        | `false`     |
| heightClass| `null` \| `string`                                                      | The height class of the textarea.                    | `null`      |
| placeholder| `null` \| `string`                                                      | The placeholder of the input.                        | `null`      |
| resize     | `'both'` \|  `'hoprizontal'` \|  `'none'` \|  `'vertical'`              | The resize property of the textarea.                 | `'none'`    |


## v-model

| Model                  | Type               | Description                               |
|------------------------|--------------------|-------------------------------------------|
| v-model*               | `null` \| `string` | The value of the text.                    |


## Events

| Event Name | Type | Description                            |
| ---------- | ---- | -------------------------------------- |
| blur       | None | Emitted when the combobox loses focus. |
| focus      | None | Emitted when the input gains focus.    |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTextarea } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppTextarea v-model="value" />
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/textarea/AppTextarea.vue).