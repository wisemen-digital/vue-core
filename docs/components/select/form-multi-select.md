---
sidebar: auto
---

# FormMultiSelect

For single value select, see [FormSelect](/components/select/form-select.md).

<!-- @include: ./form-multi-select-meta.md -->
## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormMultiSelect, SelectItem } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

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
    users: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }).array()
  })
})

const users = form.register('users')

function displayFn(user: User): string {
  return `${user.firstName} ${user.lastName}`
}

</script>

<template>
  <FormMultiSelect
    v-bind="users"
    :items="userItems"
    :display-fn="displayFn"
    label="Users"
  />

  <!-- Or with a custom option slot -->
  <FormMultiSelect
    v-bind="users"
    :items="userItems"
    :display-fn="displayFn"
    label="Users"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </FormMultiSelect>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/select/FormMultiSelect.vue)