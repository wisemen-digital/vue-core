<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'radix-vue/dist/shared/types.js'

import AppCombobox from '@/components/combobox/AppCombobox.vue'
import type { Icon } from '@/icons/icons.js'
import type { ComboboxItem } from '@/types/comboboxItem.type.js'
import type { ComboboxProps } from '@/types/comboboxProps.type.js'

const props = withDefaults(
  defineProps<{
    /**
     * The html id of the combobox.
     */
    id?: null | string
    /**
     * Whether the combobox has a clear button.
     * @default false
     */
    hasClearButton?: boolean
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
     */
    isLoading: boolean
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
    modelValue: TValue | null
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
    /**
     * The props of the popover.
     * @default null
     */
    popoverProps?: ComboboxProps['popoverProps']
  }>(),
  {
    id: null,
    hasClearButton: false,
    isDisabled: false,
    isInvalid: false,
    emptyText: null,
    iconLeft: null,
    iconRight: null,
    placeholder: null,
    popoverProps: null,
  },
)

const emit = defineEmits<{
  'search': [searchTerm: null | string]
  'update:modelValue': [value: TValue | null]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

function onSearch(searchTerm: null | string): void {
  emit('search', searchTerm ?? null)
}

// TODO: show chevron when default options are shown.
</script>

<template>
  <AppCombobox
    v-model="model"
    :is-loading="props.isLoading"
    :items="props.items"
    :display-fn="props.displayFn"
    :filter-fn="(options) => options"
    :empty-text="props.emptyText"
    :has-clear-button="props.hasClearButton"
    :icon-left="props.iconLeft"
    :icon-right="props.iconRight"
    :is-chevron-hidden="true"
    :is-disabled="props.isDisabled"
    :is-invalid="props.isInvalid"
    :placeholder="props.placeholder"
    :popover-props="props.popoverProps ?? null"
    @update:search="onSearch"
  />
</template>
