---
sidebar: auto
---

# FormSelect

## Props

| Prop         | Type                                      | Description                                       | Default   |
|--------------|-------------------------------------------|---------------------------------------------------|-----------|
| label **(required)**        | `string`                                  | The label of the select.                          |           |
| options **(required)**      | `DataItem<T>[]`                           | The options of the select.                        |           |
| errors **(required)**       | `FormFieldErrors`                         | The errors associated with the select.            |           |
| isTouched **(required)**    | `boolean`                                 | Whether the select has been touched.              |           |
| isDisabled   | `boolean`                                 | Whether the select is disabled.                   | `false`   |
| isLoading    | `boolean`                                 | Whether the select is loading.                    | `false`   |
| isRequired   | `boolean`                                 | Whether the select is required.                   | `false`   |
| placeholder  | `null` \| `string`                          | The placeholder of the select.                    | `null`    |

## v-model

| Prop    | Type           | Description                          |
|---------|----------------|--------------------------------------|
| v-model | `string` \| `null`    | The value of the select.             |

## Events

| Event Name | Description                      |
|------------|----------------------------------|
| blur       | Emitted when the select loses focus. |

## Example Usage

```vue
<script setup lang="ts">
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    user: z.string()
  })
})

const user = form.register('user')

const users = [
  { label: 'John', value: 'john' },
  { label: 'Rick', value: 'rick' },
  { label: 'Emma', value: 'emma' }
]
</script>

<template>
  <AppSelect 
    v-bind="user"
    :options="users"
    label="User"
  />
</template>
