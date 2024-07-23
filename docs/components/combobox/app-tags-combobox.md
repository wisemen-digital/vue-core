---
sidebar: auto
---

# AppTagsCombobox

<!-- @include: ./app-tags-combobox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTagsCombobox, ComboboxItem } from '@wisemen/vue-core'
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

const user = ref<User[]>([])

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
  <AppTagsCombobox
    v-model="user"
    :display-fn="displayFn"
    :filter-fn="filterFn"
    :items="userItems"
    class="w-96"
  />

  <!-- Or with custom slots -->
  <AppTagsCombobox
    v-model="user"
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

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/AppTagsCombobox.vue).