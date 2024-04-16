---
sidebar: auto
---

# FormSelect

## Props

| Prop       | Type                      | Description                                                  | Default          |
|------------|---------------------------|--------------------------------------------------------------|------------------|
| label **(required)**      | `string`                  | The label of the select.                                   |                 |
| items **(required)**    | `SelectItem<T>[]`           | The items of the select.                                 |                 |
| displayFn  **(required)**      | `(value: T) => string` | Display function for the selected value.                           |                                  |
| isTouched **(required)**  | `boolean`                 | Whether the select has been touched (focused and blurred). | `false`          |
| errors **(required)**     | `FormFieldErrors`         | The errors associated with the select.                     |                 |
| isDisabled | `boolean`                 | Whether the select is disabled.                            | `false`          |
| isLoading  | `boolean`                 | Whether the select is loading.                             | `false`          |
| isRequired | `boolean`                 | Whether the select is required.                            | `false`          |
| placeholder| `null` \| `string`          | The placeholder of the select.                             | `null`           |

## v-model

| Prop       | Type           | Description                                          |
|------------|----------------|------------------------------------------------------|
| v-model    | `T` \| `null` | The value of the select.                           |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the select loses focus.               |
| filter      | Emitted when the select is filtered.              |

## Example Usage

```vue
<script setup lang="ts">
import { FormSelect } from '@wisemen/vue-core'

interface User {
  firstName: string
  lastName: string
}

const userItems: SelectItem<User>[] = [
  {
    type: 'option',
    value: {
      firstName: 'John',
      lastName: 'Doe',
    },
  },
  {
    type: 'divider'
  },
  {
    type: 'option',
    value: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
]

const { form } = useForm({
  schema: z.object({
    user: z.object({
      firstName: z.string(),
      lastName: z.string(),
    })
  })
})

const user = form.register('user')
</script>

<template>
  <FormSelect
    v-bind="user"
    label="Users"
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <FormSelect 
    v-bind="user"
    label="Users"
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </FormSelect>
</template>
