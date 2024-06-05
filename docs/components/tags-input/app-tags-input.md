---
sidebar: auto
---


# AppTagsInput
<script setup>
import AppTagsInputPlayground from './AppTagsInputPlayground.vue'
</script>

<AppTagsInputPlayground />


## Props

| Prop        | Type                                                                                     | Description                                       | Default     |
|-------------|------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| id          | `null` \| `string`                                                                       | The id of the input.                              | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isInvalid   | `boolean`                                                                                | Whether the input is invalid.                     | `false`     |
| max         | `null` \| `number`                                                                       | The maximum amount of tags allowed.               | `null`      |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |


## Slots

| Slot name | Type            | Description                |
| --------- | --------------- | -------------------------- |
| `tag`     | `value: TValue` | Override the tag rendering |


## v-model

| Prop                    | Type        | Description               |
|------------------------ | ----------- | ------------------------- |
| v-model*                | `TValue[]`  | The value of the input.   |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur      | Emitted when the input loses focus.                  |
| focus     | Emitted when the input gains focus.                  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTagsInput } from '@wisemen/vue-core'

const model = ref<string[]>([])
</script>
  
<template>
  <AppTagsInput
    v-model="model"
    id="id-app-tags-input"
    placeholder="Placeholder"
    :max="5"
    :is-disabled="false"
    :is-invalid="false"
  />

    <!-- Or with a custom option slot -->
  <AppTagsInput 
    v-model="model"
    id="id-app-tags-input"
    placeholder="Placeholder"
    :max="5"
    :is-disabled="false"
    :is-invalid="false"
  >
    <template #tag="{ value }">
      <!-- custom html -->
    </template>
  </AppTagsInput>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tags-input/AppTagsInput.vue).
