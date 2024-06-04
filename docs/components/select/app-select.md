---
sidebar: auto
---

# AppSelect
<script setup>
import AppSelectPlayground from './AppSelectPlayground.vue'
</script>

<AppSelectPlayground />

## Props

| Prop                      | Type                   | Description                                               | Default     |
| ------------------------- | ---------------------- | --------------------------------------------------------- | -------     |
| items*                    | `SelectItem<T>[]`      | The items to display in the select.                       |             |
| displayFn*                | `(value: T) => string` | Display function for the selected value.                  |             |
| id                        | `string \| null`       | The id of the select                                      | `null`      |
| isDisabled                | `boolean`              | Whether the select is disabled.                           | `false`     |
| isInvalid                 | `boolean`              | Whether the select is in an invalid state.                | `false`     |
| isLoading                 | `boolean`              | Whether the select is loading.                            | `false`     |
| iconLeft                  | `Icon`                 | The icon to display on the left side of the select.       | `undefined` |
| placeholder               | `null` \| `string`     | The placeholder text to display when the select is empty. | `null`      |

## v-model

| Prop                   | Type                   | Description              |
| ---------------------- | ---------------------- | ------------------------ |
| v-model **(required)** | `SelectItem` \| `null` | The value of the select. |

## Events

| Event Name | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| blur       | Emitted when the select loses focus.                         |
| filter     | Emitted when the select filters options based on user input. |

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