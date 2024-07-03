---
sidebar: auto
---


# FormTagsInput
<script setup>
import FormTagsInputPlayground from './FormTagsInputPlayground.vue'
</script>

<FormTagsInputPlayground />


## Props

| Prop        | Type                                            | Description                                       | Default     |
|-------------|-------------------------------------------------|---------------------------------------------------|-------------|
| label*      | `null` \| `string`                              | The label of the input.                           |             |
| errors*     | `FormFieldErrors`                               | The errors associated with the input.             |             |
| isDisabled  | `boolean`                                       | Whether the input is disabled.                    | `false`     |
| isRequired  | `boolean`                                       | Whether the input is required.                    | `false`     |
| isTouched*  | `boolean`                                       | Whether the input is touched.                     |             |
| max         | `null` \| `number`                              | The maximum amount of tags allowed.               | `null`      |
| placeholder | `null` \| `string`                              | The placeholder of the input.                     | `null`      |
| tooltip     | `string`                                        | The tooltip of the input.                         |             |


## Slots

| Slot name | Type            | Description                |
|-----------|-----------------|----------------------------|
| `tag`     | `value: string` | Override the tag rendering |


## v-model

| Prop     | Type       | Description             |
|----------|------------|-------------------------|
| v-model* | `string[]` | The value of the input. |


## Events

| Event Name | Description                         |
|------------|-------------------------------------|
| blur       | Emitted when the input loses focus. |
| focus      | Emitted when the input gains focus. |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormTagsInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    names: z.string().array()
  })
})

const names = form.register('names')
</script>
  
<template>
  <FormTagsInput
    v-bind="names"
    label="Names"
    placeholder="Placeholder"
    :max="5"
  />

      <!-- Or with a custom option slot -->
  <FormTagsInput 
    v-bind="names"
    label="Names"
    placeholder="Placeholder"
    :max="5"
  >
    <template #tag="{ value }">
      <!-- custom html -->
    </template>
  </FormTagsInput>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tags-input/FormTagsInput.vue).
