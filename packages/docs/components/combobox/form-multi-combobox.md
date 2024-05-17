---
sidebar: auto
---

# FormMultiCombobox
<script setup>
import FormMultiComboboxPlayground from './FormMultiComboboxPlayground.vue'
</script>

<FormMultiComboboxPlayground />

For single value select, see [FormCombobox](/components/combobox/form-combobox.md).

## Props

| Prop            | Type                                                  | Description                                                 | Default                          |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| isChevronHidden | `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled      | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isLoading       | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| isRequired      | `boolean`                                             | Whether the combobox is required.                           | `false`                          |
| isTouched*      | `boolean`                                             | Whether the combobox has been touched (focused and blurred).|                                  |
| emptyText       | `null` \| `string`                                    | The text to display when there are no options.              | `t('components.combobox.empty')` |
| errors*         | `FormFieldErrors`                                     | The errors associated with the combobox.                    |                                  |
| iconLeft        | `Icon` \| `null`                                      | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight       | `Icon` \| `null`                                      | The icon to display on the right side of the combobox.      | `null`                           |
| items*          | `ComboboxItem<TValue>[]`                              | The options of the combobox.                                |                                  |
| label*          | `string`                                              | The label of the combobox.                                  |                                  |
| placeholder     | `null` \| `string`                                    | The placeholder of the combobox.                            | `null`                           |
| displayFn*      | `(value: T) => string`                                | Display function for the selected value.                    |                                  |
| filterFn*       | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         |                                  |


## v-model

| Prop            | Type                 | Description                |
| --------------- | -------------------- | -------------------------- |
| v-model*        | `TValue[]`           | The value of the combobox. |
| v-model:search  | `string` \| `null`   | The search term.           |

## Events

| Event Name | Description                            |
| ---------- | -------------------------------------- |
| blur       | Emitted when the combobox loses focus. |

## Code

::: code-group
```vue [Usage]
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

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/FormMultiCombobox.vue).