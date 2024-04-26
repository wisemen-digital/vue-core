---
sidebar: auto
---

# FormInput Component

## Props

| Prop        | Type                                                                                      | Description                                       | Default     |
|-------------|-------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| label **(required)**       | `string`                                                                                 | The label of the input.                           |            |
| errors **(required)**      | `FormFieldErrors`                                                                        | The errors associated with the input.             |            |
| isTouched **(required)**   | `boolean`                                                                                | Whether the input is touched.                     |      |
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`     |
| isRequired  | `boolean`                                                                                | Whether the input is required.                    | `false`     |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |

## v-model

| Prop     | Type                 | Description              |
|----------|----------------------|--------------------------|
| v-model **(required)**  | `string` \| `null`  | The value of the input. |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the input loses focus.                  |
| focus       | Emitted when the input gains focus.                  |

## Example Usage

```vue
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

