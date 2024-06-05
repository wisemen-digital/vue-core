---
sidebar: auto
---


# FormPasswordInput
<script setup>
import FormPasswordInputPlayground from './FormPasswordInputPlayground.vue'
</script>

<FormPasswordInputPlayground />


## Props

| Prop        | Type                   | Description                           | Default |
| ----------- | ---------------------- | ------------------------------------- | ------- |
| label*      | `string`               | The label of the input.               |         |
| errors*     | `FormFieldErrors`      | The errors associated with the input. |         |
| isDisabled  | `boolean`              | Whether the input is disabled.        | `false` |
| isLoading   | `boolean`              | Whether the input is loading.         | `false` |
| isRequired  | `boolean`              | Whether the input is required.        | `false` |
| isTouched*  | `boolean`              | Whether the input is touched.         | `false` |
| iconLeft    | `Icon` \| `null`       | The left icon of the input.           | `null`  |
| placeholder | `null` \| `string`     | The placeholder of the input.         | `null`  |


## v-model

| Model    | Type                | Description              |
|----------|---------------------|--------------------------|
| v-model* | `string` \| `null`  | The value of the input.  |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the input loses focus.                  |
| focus       | Emitted when the input gains focus.                  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormPasswordInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    password: z.string()
  })
})

const password = form.register('password')
</script>

<template>
  <FormPasswordInput 
    v-bind="password" 
    label="Password"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormPasswordInput.vue).