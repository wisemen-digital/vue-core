<script setup lang="ts">
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'
import { injectSelectContext } from '@/components/select/select.context'
import { selectStyle } from '@/components/select/select.style'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const selectContext = injectSelectContext()

const style = selectStyle()

const selectBoxClasses = computed<string>(() => style.selectBox({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const placeholderClasses = computed<string>(() => style.placeholder({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconRight({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const valueClasses = computed<string>(() => style.value({
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
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
  <AppPopoverTrigger>
    <button
      :id="selectContext.inputId.value"
      :data-test-id="selectContext.testId.value"
      :class="selectBoxClasses"
      :disabled="selectContext.isDisabled.value"
      :aria-describedby="`${selectContext.inputId.value}-error ${selectContext.inputId.value}-hint`"
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
        <AppIcon
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
          <AppSpinner :class="loaderClasses" />
        </slot>
      </div>

      <slot
        v-else
        name="icon-right"
      >
        <AppIcon
          :icon="selectContext.iconRight.value"
          :class="iconRightClasses"
        />
      </slot>
    </button>
  </AppPopoverTrigger>
</template>
