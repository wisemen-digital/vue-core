---
sidebar: auto
---

# AppCombobox
<script setup>
import AppComboboxPlayground from './AppComboboxPlayground.vue'
</script>

<AppComboboxPlayground />

For multi value select, see [AppMultiCombobox](/components/app-multi-combobox.md).


## Props

| Prop            | Type                                                  | Description                                                 | Default                          |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| displayFn       | `(value: TValue) => string`                           | Display function for the selected value.                    | -                                |
| emptyText       | `null \| string`                                      | The text to display when there are no options.              | `t('components.combobox.empty')` |
| filterFn        | `(options: TValue[], searchTerm: string) => TValue[]` | The function to filter the options.                         | -                                |
| iconLeft        | `Icon \| null`                                        | The icon to display on the left side of the combobox.       | `null`                           |
| iconRight       | `Icon \| null`                                        | The icon to display on the right side of the combobox.      | `null`                           |
| id              | `null \| string`                                      | The HTML id of the combobox.                                | -                                |
| isChevronHidden | `boolean`                                             | Whether the chevron icon is hidden.                         | `false`                          |
| isDisabled      | `boolean`                                             | Whether the combobox is disabled.                           | `false`                          |
| isInvalid       | `boolean`                                             | Whether the combobox is in an invalid state.                | `false`                          |
| isLoading       | `boolean`                                             | Whether the combobox is loading.                            | `false`                          |
| items           | `ComboboxItem<TValue>[]`                              | The options to display in the combobox.                     | -                                |
| placeholder     | `null \| string`                                      | The placeholder text to display when the combobox is empty. | `null`                           |

## Slots

| Slot name | Type            | Description                                       |
| --------- | --------------- | ------------------------------------------------- |
| option    | `value: TValue` | Override the option rendering of the combobox     |
| empty     | none            | Override the empty state of the combobox dropdown |
| left      | none            | Override the left content of the combobox input   |
| right     | none            | Override the right content of the combobox input  |


## v-model

| Prop                          | Type               | Description                |
| ----------------------------- | ------------------ | -------------------------- |
| v-model **(required)**        | `TValue` \| `null` | The value of the combobox. |
| v-model:search **(required)** | `string` \| `null` | The search term            |

## Events

| Event Name | Type | Description                            |
| ---------- | ---- | -------------------------------------- |
| blur       | None | Emitted when the combobox loses focus. |

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
</script>

<template>
  <AppCombobox 
    v-model="user" 
    :items="userItems"
  />

  <!-- Or with a custom option slot -->
  <AppCombobox 
    v-model="value" 
    :items="userItems"
  >
    <template #option="{ value }">
      <!-- custom html -->
    </template>
  </AppCombobox>
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
import {
  computed,
  ref,
} from 'vue'

import type { Icon } from '@/icons/icons'

import type { ComboboxItem } from '../../types/comboboxItem.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppComboboxContent from './AppComboboxContent.vue'
import AppComboboxEmpty from './AppComboboxEmpty.vue'
import AppComboboxInput from './AppComboboxInput.vue'
import AppComboboxItem from './AppComboboxItem.vue'
import AppComboboxViewport from './AppComboboxViewport.vue'
import { useCombobox } from './combobox.composable'

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
     * The html id of the combobox.
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
     * The options to display in the combobox.
     */
    items: ComboboxItem<TValue>[]
    /**
     * The value of the combobox.
     */
    modelValue: TValue | null
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    emptyText: null,
    iconLeft: undefined,
    iconRight: undefined,
    id: null,
    isChevronHidden: false,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: TValue | null]
}>()

const searchModel = defineModel<null | string>('search', {
  default: '',
  required: false,
})

const isOpen = ref<boolean>(false)

const model = computed<TValue | undefined>({
  get: () => props.modelValue ?? undefined,
  set: (value) => {
    emit('update:modelValue', value ?? null)
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
  if (model.value === undefined) {
    return props.placeholder
  }

  return props.displayFn(model.value as TValue)
})

function onBlur(): void {
  emit('blur')
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
          <div v-if="isOpen && canOpenDropdown">
            <AppComboboxContent>
              <AppComboboxViewport>
                <AppComboboxEmpty :empty-text="props.emptyText">
                  <slot name="empty" />
                </AppComboboxEmpty>

                <AppComboboxItem
                  v-for="item of props.items"
                  :key="JSON.stringify(item)"
                  :item="item"
                  :is-multiple="false"
                  :display-fn="props.displayFn"
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