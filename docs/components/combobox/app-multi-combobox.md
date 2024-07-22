---
sidebar: auto
---

# AppMultiCombobox

For single value select, see [AppCombobox](/components/combobox/app-combobox.md).

<!-- @include: ./app-multi-combobox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppMultiCombobox, ComboboxItem } from '@wisemen/vue-core'
import { ref } from 'vue'

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
    type: 'divider',
  },
  {
    type: 'group',
    label: 'Group 1',
    items: [
      {
        type: 'option',
        value: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
      },
      {
        type: 'option',
        value: {
          firstName: 'James',
          lastName: 'Doe',
        },
      },
    ],
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
  <AppMultiCombobox 
    v-model="users" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  />

  <!-- Or with a custom option slot -->
  <AppMultiCombobox 
    v-model="value" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  >
    <template #option="{ value, dataTestid }">
      <!-- custom html -->
    </template>
  </AppMultiCombobox>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/AppMultiCombobox.vue).