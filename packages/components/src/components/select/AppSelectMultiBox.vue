<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { injectSelectContext } from '@/components/select/select.context.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const style = selectStyle()

const selectContext = injectSelectContext()

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const caretClasses = computed<string>(() => style.caret({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const placeholderClasses = computed<string>(() => style.placeholder({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const triggerClasses = computed<string>(() => style.trigger({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const valueClasses = computed<string>(() => style.value({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())
const loaderClasses = computed<string>(() => style.loader({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))
</script>

<template>
  <PopoverTrigger
    :id="selectContext.id.value"
    :data-test-id="selectContext.testId.value"
    :class="triggerClasses"
    :disabled="selectContext.isDisabled.value"
    @keydown="selectContext.onTriggerKeyDown"
    @focus="selectContext.onFocus"
    @blur="selectContext.onBlur"
    @mouseenter="selectContext.onMouseEnter"
    @mouseleave="selectContext.onMouseLeave"
  >
    <AppIcon
      v-if="selectContext.iconLeft.value !== null"
      :icon="selectContext.iconLeft.value"
      :class="iconLeftClasses"
    />

    <div :class="valueClasses">
      <span
        v-if="selectContext.isEmpty.value && selectContext.placeholder.value !== null"
        :class="placeholderClasses"
      >
        {{ selectContext.placeholder.value }}
      </span>

      <slot
        v-else-if="selectContext.value.value"
        :value="selectContext.value.value"
        name="value"
      >
        value
      </slot>
    </div>

    <slot name="right" />

    <div
      v-if="selectContext.isLoading.value"
      :class="loaderBoxClasses"
    >
      <slot name="loader">
        <AppSpinner :class="loaderClasses" />
      </slot>
    </div>

    <div
      v-else
      :class="caretClasses"
    >
      <slot
        name="caret"
      >
        <AppIcon
          icon="chevronDown"
        />
      </slot>
    </div>
  </PopoverTrigger>
</template>
