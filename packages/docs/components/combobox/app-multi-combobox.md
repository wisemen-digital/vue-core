---
sidebar: auto
---

# AppMultiCombobox
<script setup>
import AppMultiComboboxPlayground from './AppMultiComboboxPlayground.vue'
</script>

<AppMultiComboboxPlayground />

For single value select, see [AppCombobox](/components/combobox/app-combobox.md).

## Props

| Prop           | Type                                                  | Description                                                 | Default                          |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| id             | `null` \| `string`                                    | The id of the combobox.                                     |                                  |
| isChevronHidden| `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled     | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isInvalid      | `boolean`                                             | Whether the combobox is in an invalid state.                | `false`                          |
| isLoading      | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| emptyText      | `null` \| `string`                                    | The text to display when there are no options.              | `t('components.combobox.empty')` |
| iconLeft       | `Icon` \| `null`                                      | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight      | `Icon` \| `null`                                      | The icon to display on the right side of the combobox.      | `null`                           |
| items          | `ComboboxItem<TValue>[]`                              | The options to display in the combobox.                     |                                  |
| placeholder    | `null` \| `string`                                    | The placeholder text to display when the combobox is empty. | `null`                           |
| displayFn      | `(value: TValue) => string`                           | Display function for the selected value.                    |                                  |
| filterFn       | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         |                                  |


## v-model

| Prop           | Type               | Description                |
| -------------- | ------------------ | -------------------------- |
| v-model        | `TValue[]`         | The value of the combobox. |
| v-model:search | `string` \| `null` | The search term.           |


## Events

| Event Name       | Type | Description                                    |
| ---------------- | ---- | ---------------------------------------------- |
| blur             | None | Emitted when the combobox loses focus.         |
| update:modelValue| None | Emitted when value of the combobox is updated. |


## Example Usage

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
</script>

<template>
  <AppMultiCombobox 
    v-model="users" 
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <AppMultiCombobox 
    v-model="value" 
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppMultiCombobox>
</template>
```

```vue [Source code]
<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxPortal,
  ComboboxRoot,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppComboboxContent from '@/components/combobox/AppComboboxContent.vue'
import AppComboboxEmpty from '@/components/combobox/AppComboboxEmpty.vue'
import AppComboboxInput from '@/components/combobox/AppComboboxInput.vue'
import AppComboboxItem from '@/components/combobox/AppComboboxItem.vue'
import AppComboboxViewport from '@/components/combobox/AppComboboxViewport.vue'
import { useCombobox } from '@/components/combobox/combobox.composable'
import type { Icon } from '@/icons/icons'
import type { ComboboxItem } from '@/types/comboboxItem.type'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = withDefaults(
  defineProps<{
    /**
     * The id of the combobox.
     */
    id?: null | string
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
     * Whether the combobox is in an invalid state.
     * @default false
     */
    isInvalid?: boolean
    /**
     * Whether the combobox is loading.
     * @default false
     */
    isLoading?: boolean
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
     * The options to display in the combobox.
     */
    items: ComboboxItem<TValue>[]
    /**
     * The value of the combobox.
     */
    modelValue: TValue[]
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    id: null,
    isChevronHidden: false,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    emptyText: null,
    iconLeft: undefined,
    iconRight: undefined,
    placeholder: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: TValue[]]
}>()

const searchModel = defineModel<null | string>('search', {
  default: '',
  required: false,
})

const isOpen = ref<boolean>(false)

const model = computed<TValue[]>({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value ?? [])
  },
})

const search = computed<string | undefined>({
  get: () => searchModel.value ?? undefined,
  set: (value) => {
    searchModel.value = value ?? null
  },
})

const { canOpenDropdown } = useCombobox({
  isLoading: computed<boolean>(() => props.isLoading),
  items: computed<ComboboxItem<TValue>[]>(() => props.items),
  search: computed<null | string>(() => searchModel.value),
})

const placeholderValue = computed<null | string>(() => {
  if (model.value.length === 0) {
    return props.placeholder
  }

  return model.value.map(value => props.displayFn(value)).join(', ')
})

const isEmpty = computed<boolean>(() => {
  return model.value.length === 0
})

function onBlur(): void {
  if (!isOpen.value) {
    emit('blur')
  }
}
</script>

<template>
  <div>
    <ComboboxRoot
      v-model="model"
      v-model:open="isOpen"
      v-model:search-term="search"
      :filter-function="(props.filterFn as any)"
      :display-value="displayFn"
      :disabled="props.isDisabled"
      :multiple="true"
    >
      <ComboboxAnchor>
        <AppComboboxInput
          :id="props.id"
          :icon-left="props.iconLeft ?? null"
          :icon-right="props.iconRight ?? null"
          :is-chevron-hidden="props.isChevronHidden"
          :is-disabled="props.isDisabled"
          :is-invalid="props.isInvalid"
          :is-loading="props.isLoading"
          :placeholder="placeholderValue"
          :show-placeholder-as-value="!isEmpty && !isOpen"
          @blur="onBlur"
        >
          <template #left>
            <slot name="left" />
          </template>

          <template #right>
            <slot name="right" />
          </template>
        </AppComboboxInput>
      </ComboboxAnchor>

      <ComboboxPortal>
        <Transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isOpen && canOpenDropdown"
            class="z-popover"
          >
            <AppComboboxContent>
              <AppComboboxViewport>
                <AppComboboxEmpty :empty-text="props.emptyText">
                  <slot name="empty" />
                </AppComboboxEmpty>

                <AppComboboxItem
                  v-for="item of props.items"
                  :key="JSON.stringify(item)"
                  :item="item"
                  :display-fn="displayFn"
                  :is-multiple="true"
                >
                  <template #default="{ item: itemValue }">
                    <slot
                      v-if="itemValue.type === 'option'"
                      :value="itemValue.value"
                      name="option"
                    />
                  </template>
                </AppComboboxItem>
              </AppComboboxViewport>

              <ComboboxArrow />
            </AppComboboxContent>
          </div>
        </Transition>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>
```
:::