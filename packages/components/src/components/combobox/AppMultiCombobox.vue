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
import type { ComboboxProps } from '@/types/comboboxProps.type'
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

    /**
     * The props to pass to the popover.
     */
    popoverProps?: ComboboxProps['popoverProps']
  }>(),
  {
    id: null,
    isChevronHidden: false,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    emptyText: null,
    iconLeft: null,
    iconRight: null,
    placeholder: null,
    popoverProps: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: TValue[]]
}>()

defineSlots<{
  /** Override the empty state of the combobox dropdown */
  empty: () => void
  /** Override the left content of the combobox input */
  left: () => void
  /** Override the option rendering of the combobox, and have access to the dataTestId */
  option: (props: {
    dataTestid?: string
    value: TValue
  }) => any
  /** Override the right content of the combobox input */
  right: () => void
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

  return model.value.map((value) => props.displayFn(value)).join(', ')
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
          :icon-left="props.iconLeft"
          :icon-right="props.iconRight"
          :has-clear-button="false"
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
            <AppComboboxContent :popover-props="props.popoverProps">
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
                      :data-test-id="itemValue.testId"
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
