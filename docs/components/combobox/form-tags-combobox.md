---
sidebar: auto
---

# FormTagsCombobox

<!-- @include: ./form-tags-combobox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormTagsCombobox, ComboboxItem } from '@wisemen/vue-core'
import { useForm } from 'formango'

interface User {
  firstName: string
  lastName: string
}

const userItems: ComboboxItem<User>[] = [
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

function filterFn(users: User[], searchTerm: string): User[] {
  return users.filter((user) => {
    return displayFn(user).toLowerCase().includes(searchTerm.toLowerCase())
  })
}
</script>

<template>
  <FormTagsCombobox
    v-bind="users"
    :display-fn="displayFn"
    :filter-fn="filterFn"
    :items="userItems"
    class="w-96"
  />

  <!-- Or with custom slots -->
  <FormTagsCombobox
    v-bind="users"
    :display-fn="displayFn"
    :filter-fn="filterFn"
    :items="userItems"
    class="w-96"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
    <template #tag="{ value }">
      <!-- custom html -->
    </template>
  </AppCombobox>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/FormTagsCombobox.vue).