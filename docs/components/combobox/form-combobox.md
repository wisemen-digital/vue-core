---
sidebar: auto
---

# FormCombobox
<script setup>
import FormComboboxPlayground from './FormComboboxPlayground.vue'
</script>

<FormComboboxPlayground />

For multi value select, see [FormMultiCombobox](/components/combobox/form-multi-combobox.md).

## Props

| Prop            | Type                                                  | Description                                                  | Default                          |
|-----------------|-------------------------------------------------------|--------------------------------------------------------------|----------------------------------|
| displayFn*      | `(value: TValue) => string`                           | Display function for the selected value.                     |                                  |
| emptyText       | `null \| string`                                      | The text to display when there are no options.               | `t('components.combobox.empty')` |
| errors*         | `FormFieldErrors`                                     | The errors associated with the combobox.                     |                                  |
| filterFn*       | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                          |                                  |
| iconLeft        | `Icon \| null`                                        | The icon to display on the left side of the combobox.        | `null`                           |
| iconRight       | `Icon \| null`                                        | The icon to display on the right side of the combobox.       | `null`                           |
| isChevronHidden | `boolean`                                             | Whether the chevron icon is hidden.                          | `false`                          |
| isDisabled      | `boolean`                                             | Whether the combobox is disabled.                            | `false`                          |
| isLoading       | `boolean`                                             | Whether the select is loading.                               | `false`                          |
| isRequired      | `boolean`                                             | Whether the combobox is required.                            | `false`                          |
| isTouched*      | `boolean`                                             | Whether the combobox has been touched (focused and blurred). |                                  |
| items*          | `ComboboxItem<TValue>[]`                              | The options of the combobox.                                 |                                  |
| label*          | `string`                                              | The label of the combobox.                                   |                                  |
| placeholder     | `null \| string`                                      | The placeholder of the combobox.                             | `null`                           |
| tooltip         | `string`                                              | The tooltip of the combobox.                                 |                                  |

## Slots

| Slot name | Type            | Description                                     |
|-----------|-----------------|-------------------------------------------------|
| left      | none            | Override the left content of the combobox input |
| option    | `value: TValue` | Override the option rendering of the combobox   |

## v-model

| Prop           | Type               | Description                |
|----------------|--------------------|----------------------------|
| v-model*       | `TValue` \| `null` | The value of the combobox. |
| v-model:search | `string` \| `null` | The search term            |

## Events

| Event Name | Type     | Description                            |
|------------|----------|----------------------------------------|
| blur       | None     | Emitted when the combobox loses focus. |
| filter     | `string` | Emitted when the filter term changes.  |

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
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </FormCombobox>
</template>
```
::: 

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/combobox/FormCombobox.vue).
