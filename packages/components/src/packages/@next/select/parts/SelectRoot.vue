<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxRoot as RekaListboxRoot,
  useFilter,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { useProvideSelectContext } from '@/packages/@next/select/select.context'
import type { SelectProps, SelectValue } from '@/packages/@next/select/select.props'
import {
  type CreateSelectStyle,
  createSelectStyle,
} from '@/packages/@next/select/style/select.style'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isOpenControlled: false,
  classConfig: null,
  filter: null,
  filterFn: null,
  filterPlaceholder: null,
  iconLeft: null,
  iconRight: 'selectIconRight',
  placeholder: null,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 0,
  popoverContainerElement: null,
  popoverOffsetInPx: 6,
  popoverSide: 'bottom',
  popoverWidth: 'anchor-width',
  remainOpenOnValueChange: null,
  searchInputPlaceholder: null,
  virtualList: null,
})

const modelValue = defineModel<TValue>({
  required: true,
})

const searchTerm = defineModel<string>('searchTerm', {
  default: '',
  required: false,
})

// We need to track every item in the listbox to determine if it should be displayed or not
const allItems = ref<Map<string, unknown>>(new Map())
const allGroups = ref<Map<string, Set<string>>>(new Map())

const isDropdownVisible = ref<boolean>(false)
const inlinesearchInputElementRef = ref<HTMLInputElement | null>(null)

// A search term is always present when an option is selected
// since we set the search term to the displayFn of the selected option.
// However, when the dropdown is first opened, all options should be displayed, even if a search term is entered.
const hasInteractedWithInlineSearchInput = ref<boolean>(false)

const { contains } = useFilter()

const selectStyle = computed<CreateSelectStyle>(() => createSelectStyle({}))

const customClassConfig = useComponentClassConfig('select', {})

const isMultiple = computed<boolean>(() => Array.isArray(modelValue.value))

const remainOpenOnValueChange = computed<boolean>(() => (
  props.remainOpenOnValueChange ?? isMultiple.value
))

const hasInlineSearchInput = computed<boolean>(() => {
  if (props.filter === null) {
    return false
  }

  return (props.filter.isEnabled && props.filter.isInline) ?? false
})

function defaultFilterFn(value: unknown, searchTerm: string): boolean {
  const displayValue = props.displayFn(value as any)

  return contains(displayValue.toLowerCase(), searchTerm.toLowerCase())
}

const filteredItems = computed<Map<string, unknown>>(() => {
  if (props.filter === null || !props.filter.isEnabled) {
    return allItems.value
  }

  if (hasInlineSearchInput.value && !hasInteractedWithInlineSearchInput.value) {
    return allItems.value
  }

  return new Map(
    Array.from(allItems.value.entries())
      .filter(([
        _key,
        value,
      ]) => {
        const filterFn = props.filter?.fn ?? defaultFilterFn

        return filterFn(value as any, searchTerm.value)
      }),
  )
})

const filteredGroups = computed<Map<string, Set<string>>>(() => {
  return new Map(
    Array.from(allGroups.value.entries())
      .filter(([
        _key,
        value,
      ]) => {
        return Array.from(value).some((itemId) => filteredItems.value.has(itemId))
      }),
  )
})

function setIsDropdownVisible(value: boolean): void {
  if (props.isOpenControlled) {
    return
  }

  isDropdownVisible.value = value
}

function onModelValueChange(): void {
  if (remainOpenOnValueChange.value) {
    return
  }

  setIsDropdownVisible(false)
}

function resetSearchTerm(): void {
  if (isMultiple.value || !hasInlineSearchInput.value || modelValue.value === null) {
    searchTerm.value = ''

    return
  }

  searchTerm.value = props.displayFn(modelValue.value as any)
}

function focusInlineSearchInputElement(): void {
  if (hasInlineSearchInput.value) {
    inlinesearchInputElementRef.value?.focus()
  }
}

function onOpenDropdown(): void {
  focusInlineSearchInputElement()
}

function onCloseDropdown(): void {
  resetSearchTerm()
  hasInteractedWithInlineSearchInput.value = false

  setTimeout(() => {
    focusInlineSearchInputElement()
  })
}

watch(isDropdownVisible, (isDropdownVisible) => {
  if (isDropdownVisible) {
    onOpenDropdown()
  }
  else {
    onCloseDropdown()
  }
})

watch(modelValue, onModelValueChange)

useProvideSelectContext({
  ...toComputedRefs(props),
  hasInlineSearchInput,
  hasInteractedWithInlineSearchInput,
  isDropdownVisible: computed<boolean>(() => isDropdownVisible.value),
  isMultiple,
  allGroups,
  allItems,
  customClassConfig,
  filteredGroups,
  filteredItems,
  inlinesearchInputElementRef,
  modelValue,
  remainOpenOnValueChange,
  searchTerm,
  setIsDropdownVisible,
  style: selectStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <!-- TODO: data-is-invalid -->
    <InteractableElement
      :is-disabled="props.isDisabled"
      :aria-disabled="props.isLoading"
      :aria-busy="props.isLoading"
      :data-has-icon-left="iconLeft !== null"
      :data-has-icon-right="iconRight !== null"
      :data-is-disabled="props.isDisabled"
    >
      <RekaListboxRoot
        v-model="modelValue"
        :selection-behavior="isMultiple ? 'toggle' : 'replace'"
        :multiple="isMultiple"
        :class="selectStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
      >
        <slot />
      </RekaListboxRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
