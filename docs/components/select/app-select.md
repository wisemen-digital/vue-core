---
sidebar: auto
---

# AppSelect
For multiple value select, see [AppMultiSelect](/components/select/app-multi-select.md).

<!-- @include: ./app-select-meta.md -->

## Types

::: code-group
```ts [SelectItem]
export type AcceptableValue = Record<string, any>
  | boolean
  | number
  | string

export interface SelectItemDivider {
  type: 'divider'
}

export interface SelectItemGroup<TValue extends AcceptableValue> {
  items: SelectItem<TValue>[]
  label: string
  type: 'group'
}

export interface SelectItemOption<TValue extends AcceptableValue> {
  isDisabled?: boolean
  type: 'option'
  value: TValue
}

export type SelectItem<TValue extends AcceptableValue> = SelectItemDivider
  | SelectItemGroup<TValue>
  | SelectItemOption<TValue>
```
:::

## Code

```vue
<script setup lang="ts">
import { AppSelect, SelectItem } from '@wisemen/vue-core'
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

const value = ref<User | null>(null)
</script>

<template>
  <AppSelect 
    v-model="value" 
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <AppSelect 
    v-model="value" 
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppSelect>
</template>
```

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/select/AppSelect.vue)
