<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxRoot as RekaListboxRoot,
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
import { useSelect } from '@/packages/@next/select/select.composable'
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
  remainOpenOnValueChange: false,
  virtualList: null,
})

const modelValue = defineModel<TValue>({
  required: true,
})

const searchTerm = defineModel<string>('searchTerm', {
  default: '',
  required: false,
})

const isDropdownVisible = ref<boolean>(false)
const searchInputElementRef = ref<HTMLInputElement | null>(null)

const { isMultiple } = useSelect({
  ...toComputedRefs(props),
  modelValue: computed<SelectValue>(() => modelValue.value),
})

const selectStyle = computed<CreateSelectStyle>(() => createSelectStyle({}))

const customClassConfig = useComponentClassConfig('select', {})

function setIsDropdownVisible(value: boolean): void {
  if (props.isOpenControlled) {
    return
  }

  isDropdownVisible.value = value
}

function onModelValueChange(): void {
  if (props.remainOpenOnValueChange) {
    return
  }

  setIsDropdownVisible(false)
}

function focusInlineSearchInputElement(isDropdownVisible: boolean): void {
  if (isDropdownVisible) {
    searchInputElementRef.value?.focus()
  }
  else {
    setTimeout(() => {
      searchInputElementRef.value?.focus()
    }, 0)
  }
}

watch(isDropdownVisible, (isDropdownVisible) => {
  const isInline = (props.filter?.isEnabled && props.filter?.isInline) ?? false

  if (!isInline) {
    return
  }

  focusInlineSearchInputElement(isDropdownVisible)
})

watch(modelValue, onModelValueChange)

useProvideSelectContext({
  ...toComputedRefs(props),
  isDropdownVisible: computed<boolean>(() => isDropdownVisible.value),
  isMultiple,
  customClassConfig,
  modelValue,
  searchInputElementRef,
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
    <InteractableElement
      :is-disabled="props.isDisabled"
      :aria-disabled="props.isLoading"
      :aria-busy="props.isLoading"
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
