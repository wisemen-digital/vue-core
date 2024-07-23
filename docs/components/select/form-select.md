---
sidebar: auto
---

# FormSelect

<!-- @include: ./form-select-meta.md -->

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
