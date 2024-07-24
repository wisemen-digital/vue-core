---
sidebar: auto
---

# AppCombobox

For multi value select, see [AppMultiCombobox](/components/combobox/app-multi-combobox.md)

<!-- @include: ./app-combobox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppCombobox, ComboboxItem } from '@wisemen/vue-core'
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

const user = ref<User | null>(null)

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
  <AppCombobox 
    v-model="user" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  />

  <!-- Or with a custom option slot -->
  <AppCombobox 
    v-model="value" 
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
  >
    <template #option="{ value, dataTestid }">
      <!-- custom html -->
    </template>
  </AppCombobox>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/AppCombobox.vue).