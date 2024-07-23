---
sidebar: auto
---

# FormCombobox

For multi value select, see [FormMultiCombobox](/components/combobox/form-multi-combobox.md).

<!-- @include: ./form-combobox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormCombobox } from '@wisemen/vue-core'
import { ref } from 'vue'
import type { ComboboxItem, FormFieldErrors } from '@wisemen/vue-core'

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
    type: 'option',
    value: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
]

const errors: FormFieldErrors = {
  required: 'This field is required',
}

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
  <FormCombobox
    v-model="user"
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
    :empty-text="'No options available'"
    :errors="errors"
    :label="'Select a user'"
    :is-required="true"
    :is-touched="true"
  />

    <!-- Or with a custom option slot -->
  <FormCombobox
    v-model="user"
    :items="userItems"
    :display-fn="displayFn"
    :filter-fn="filterFn"
    :empty-text="'No options available'"
    :errors="errors"
    :label="'Select a user'"
    :is-required="true"
    :is-touched="true"
  />
    <template #option="{ value, dataTestid }">
      <!-- custom html -->
    </template>
  </FormCombobox>
</template>
```
::: 

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/FormCombobox.vue).
