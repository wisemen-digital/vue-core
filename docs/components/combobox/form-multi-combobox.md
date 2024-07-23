---
sidebar: auto
---

# FormMultiCombobox

For single value select, see [FormCombobox](/components/combobox/form-combobox.md).

<!-- @include: ./form-multi-combobox-meta.md -->

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
    <template #option="{ value, dataTestid }">
      <!-- custom html -->
    </template>
  </FormMultiCombobox>
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/FormMultiCombobox.vue).
