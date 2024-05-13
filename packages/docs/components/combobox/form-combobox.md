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

| Prop                     | Type                                                  | Description                                                  | Default                          |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| displayFn **(required)** | `(value: TValue) => string`                           | Display function for the selected value.                     | -                                |
| emptyText                | `null \| string`                                      | The text to display when there are no options.               | `t('components.combobox.empty')` |
| errors **(required)**    | `FormFieldErrors`                                     | The errors associated with the combobox.                     | -                                |
| filterFn **(required)**  | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                          | -                                |
| iconLeft                 | `Icon \| null`                                        | The icon to display on the left side of the combobox.        | `null`                           |
| iconRight                | `Icon \| null`                                        | The icon to display on the right side of the combobox.       | `null`                           |
| isChevronHidden          | `boolean`                                             | Whether the chevron icon is hidden.                          | `false`                          |
| isDisabled               | `boolean`                                             | Whether the combobox is disabled.                            | `false`                          |
| isLoading                | `boolean`                                             | Whether the select is loading.                               | `false`                          |
| isRequired               | `boolean`                                             | Whether the combobox is required.                            | `false`                          |
| isTouched **(required)** | `boolean`                                             | Whether the combobox has been touched (focused and blurred). | -                                |
| items **(required)**     | `ComboboxItem<TValue>[]`                              | The options of the combobox.                                 | -                                |
| label **(required)**     | `string`                                              | The label of the combobox.                                   | -                                |
| placeholder              | `null \| string`                                      | The placeholder of the combobox.                             | `null`                           |

## Slots

| Slot name | Type            | Description                                     |
| --------- | --------------- | ----------------------------------------------- |
| left      | none            | Override the left content of the combobox input |
| option    | `value: TValue` | Override the option rendering of the combobox   |

## v-model

| Prop                   | Type               | Description                |
| ---------------------- | ------------------ | -------------------------- |
| v-model **(required)** | `TValue` \| `null` | The value of the combobox. |
| v-model:search         | `string` \| `null` | The search term            |

## Events

| Event Name | Type     | Description                            |
| ---------- | -------- | -------------------------------------- |
| blur       | None     | Emitted when the combobox loses focus. |
| filter     | `string` | Emitted when the filter term changes.  |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import FormCombobox from '@components/components/form-combobox/FormCombobox.vue'
import { ref } from 'vue'
import type { ComboboxItem } from '@components/index'
import type { FormFieldErrors } from '@components/index'

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
</template>
```

```vue [Source code]
<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { Icon } from '../../icons/icons'
import type { ComboboxItem } from '../../types/comboboxItem.type'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppCombobox from '../combobox/AppCombobox.vue'
import FormElement from '../form-element/FormElement.vue'

const props = withDefaults(
  defineProps<{
    /**
     * Display function for the selected value
     */
    displayFn: (value: TValue) => string
    /**
     * The text to display when there are no options.
     * @default t('components.combobox.empty')
     */
    emptyText?: null | string
    /**
     * The errors associated with the combobox.
     */
    errors: FormFieldErrors
    /**
     * The function to filter the options.
     */
    filterFn: (options: TValue[], searchTerm: string) => TValue[]
    /**
     * The icon to display on the left side of the combobox.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The icon to display on the right side of the combobox.
     * @default null
     */
    iconRight?: Icon | null
    /**
     * Whether the chevron icon is hidden.
     * @default false
     */
    isChevronHidden?: boolean
    /**
     * Whether the combobox is disabled.
     * @default false
     */
    isDisabled?: boolean
    /**
     * Whether the select is loading.
     * @default false
     */
    isLoading?: boolean
    /**
     * Whether the combobox is required.
     * @default false
     */
    isRequired?: boolean
    /**
     * Whether the combobox has been touched (focused and blurred).
     */
    isTouched: boolean
    /**
     * The options of the combobox.
     */
    items: ComboboxItem<TValue>[]
    /**
     * The label of the combobox.
     */
    label: string
    /**
     * The placeholder of the combobox.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    emptyText: null,
    iconLeft: undefined,
    iconRight: undefined,
    isChevronHidden: false,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
  filter: [value: string]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const search = defineModel<null | string>('search', {
  default: '',
  required: false,
})

function onBlur(): void {
  emit('blur')
}

function onFilter(filter: string): void {
  emit('filter', filter)
}
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppCombobox
      :id="id"
      v-model:search="search"
      v-model="model"
      :is-invalid="isInvalid"
      :items="props.items"
      :display-fn="props.displayFn"
      :filter-fn="props.filterFn"
      :empty-text="props.emptyText"
      :is-disabled="props.isDisabled"
      :is-required="props.isRequired"
      :placeholder="props.placeholder"
      :is-loading="props.isLoading"
      :icon-left="props.iconLeft"
      :icon-right="props.iconRight"
      :is-chevron-hidden="props.isChevronHidden"
      @blur="onBlur"
      @filter="onFilter"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #option="{ value }">
        <slot
          :value="value"
          name="option"
        />
      </template>
    </AppCombobox>
  </FormElement>
</template>
```