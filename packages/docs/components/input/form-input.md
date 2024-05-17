---
sidebar: auto
---

# FormInput
<script setup>
import FormInputPlayground from './FormInputPlayground.vue'
</script>

<FormInputPlayground />

## Props

| Prop        | Type                                                                                      | Description                                      | Default     |
|-------------|-------------------------------------------------------------------------------------------|--------------------------------------------------|-------------|
| label*      | `string`                                                                                 | The label of the input.                           |             |
| errors*     | `FormFieldErrors`                                                                        | The errors associated with the input.             |             |
| isTouched*  | `boolean`                                                                                | Whether the input is touched.                     |             |
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`     |
| isRequired  | `boolean`                                                                                | Whether the input is required.                    | `false`     |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |


## Slots

| Slot name | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| `left`    | None | Replace the left icon with custom content |
| `right`   | None | Replace the right icon with custom content|


## v-model

| Prop     | Type                | Description              |
|----------|---------------------|--------------------------|
| v-model* | `string` \| `null`  | The value of the input.  |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur     | Emitted when the input loses focus.                  |
| focus     | Emitted when the input gains focus.                  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    name: z.string()
  })
})

const name = form.register('name')
</script>

<template>
  <FormInput 
    v-bind="name" 
    label="Name"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormInput.vue).