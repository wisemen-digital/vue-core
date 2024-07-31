---
sidebar: auto
---

# AppMultiSelect

For single value select, see [AppSelect](/components/select/app-select.md).

<!-- @include: ./app-multi-select-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppMultiSelect, SelectItem } from '@wisemen/vue-core'
import { ref } from 'vue'

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

const users = ref<User[]>([])

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
  <AppMultiSelect
    v-model="users"
    :items="userItems"
    :display-fn="displayFn"
  />

  <!-- Or with a custom option slot -->
  <AppMultiSelect
    v-model="users"
    :items="userItems"
    :display-fn="displayFn"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppMultiSelect>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/select/AppMultiSelect.vue)