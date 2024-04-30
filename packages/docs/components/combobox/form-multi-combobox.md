---
sidebar: auto
---

# FormMultiCombobox

For single value select, see [FormCombobox](/components/form-combobox.md).

## Props

| Prop       | Type                      | Description                                                  | Default          |
|------------|---------------------------|--------------------------------------------------------------|------------------|
| label **(required)**      | `string`                  | The label of the combobox.                                   |                 |
| items **(required)**    | `ComboboxItem<T>[]`           | The items of the combobox.                                 |                 |
| displayFn  **(required)**      | `(value: T) => string` | Display function for the selected value.                           |                                  |
| isTouched **(required)**  | `boolean`                 | Whether the combobox has been touched (focused and blurred). | `false`          |
| errors **(required)**     | `FormFieldErrors`         | The errors associated with the combobox.                     |                 |
| emptyText  | `null` \| `string`          | The text to display when there are no options.               | `t('components.combobox.empty')` |
| isDisabled | `boolean`                 | Whether the combobox is disabled.                            | `false`          |
| isLoading  | `boolean`                 | Whether the combobox is loading.                             | `false`          |
| isRequired | `boolean`                 | Whether the combobox is required.                            | `false`          |
| placeholder| `null` \| `string`          | The placeholder of the combobox.                             | `null`           |

## v-model

| Prop       | Type          | Description                               |
|------------|---------------|-------------------------------------------|
| v-model **(required)** | `ComboboxItem[]` \| `null` | The value of the combobox.                |
| v-model:search **(required)** | `string` \| `null` | The search term                |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the combobox loses focus.               |
| filter      | Emitted when the combobox is filtered.              |

## Example Usage

```vue
<script setup lang="ts">
import { FormMultiCombobox } from '@wisemen/vue-core'

interface User {
  firstName: string
  lastName: string
}

const search = ref<string | null>(null)

const filteredUsers = computed<User[]>(() => {
  return users.filter(...)
})


const filteredUserItems = computed<ComboboxItem<User>[]>(
  () => filteredUsers.map((user) => ({
    type: 'option',
    value: user,
  })
))

const { form } = useForm({
  schema: z.object({
    users: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }).array()
  })
})

const users = form.register('users')
</script>

<template>
  <FormMultiCombobox
    v-bind="users"
    v-model:search="search"
    label="Users"
    :items="users"
  />

  <!-- Or with a custom option slot -->
  <FormMultiCombobox 
    v-bind="users"
    v-model:search="search"
    label="Users"
    :items="users"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </FormMultiCombobox>
</template>
