<script setup lang="ts">
import { computed } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import PopoverTrigger from '@/components/popover/PopoverTrigger.vue'
import { injectSelectContext } from '@/components/select-v2/select.context'
import { useSelectStyle } from '@/components/select-v2/select.style'
import Spinner from '@/components/spinner/Spinner.vue'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const selectContext = injectSelectContext()

const selectStyle = useSelectStyle()

const ariaDescribedBy = useAriaDescribedBy({
  id: selectContext.inputId,
  hasErrors: selectContext.hasError,
  hasHint: computed<boolean>(() => selectContext.hint.value !== null),
})

const selectBoxClasses = computed<string>(() => selectStyle.selectBox({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const placeholderClasses = computed<string>(() => selectStyle.placeholder({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const iconLeftClasses = computed<string>(() => selectStyle.iconLeft({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const iconRightClasses = computed<string>(() => selectStyle.iconRight({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const valueClasses = computed<string>(() => selectStyle.value({
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
}))

const loaderBoxClasses = computed<string>(() => selectStyle.loaderBox())

const loaderClasses = computed<string>(() => selectStyle.loader({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const isEmpty = computed<boolean>(() => {
  const value = selectContext.modelValue.value

  if (Array.isArray(value)) {
    return value.length === 0
  }

  return value === null
})
</script>

<template>
  <PopoverTrigger>
    <button
      :id="selectContext.inputId"
      :data-test-id="selectContext.testId.value"
      :class="selectBoxClasses"
      :disabled="selectContext.isDisabled.value"
      :aria-describedby="ariaDescribedBy"
      @focus="selectContext.onTriggerFocus"
      @blur="selectContext.onTriggerBlur"
      @mouseenter="selectContext.onTriggerMouseEnter"
      @mouseleave="selectContext.onTriggerMouseLeave"
      @keydown="selectContext.onTriggerKeyDown"
    >
      <slot
        v-if="selectContext.iconLeft.value !== null"
        name="icon-left"
      >
        <Icon
          :icon="selectContext.iconLeft.value"
          :class="iconLeftClasses"
        />
      </slot>

      <span
        v-if="isEmpty && selectContext.placeholder.value !== null"
        :class="placeholderClasses"
      >
        {{ selectContext.placeholder.value }}
      </span>

      <span
        v-else-if="selectContext.modelValue.value !== null"
        :class="valueClasses"
      >
        <slot
          :value="selectContext.modelValue.value"
          name="value"
        >
          {{ selectContext.displayFn(selectContext.modelValue.value) }}
        </slot>
      </span>

      <span
        v-else
        class="w-full"
      />

      <div
        v-if="selectContext.isLoading.value"
        :class="loaderBoxClasses"
      >
        <slot name="loader">
          <Spinner :class="loaderClasses" />
        </slot>
      </div>

      <slot
        v-else
        name="icon-right"
      >
        <Icon
          v-if="selectContext.iconRight.value !== null"
          :icon="selectContext.iconRight.value"
          :class="iconRightClasses"
        />
      </slot>
    </button>
  </PopoverTrigger>
</template>
