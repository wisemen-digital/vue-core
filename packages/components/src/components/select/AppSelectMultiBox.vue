<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { injectSelectContext } from '@/components/select/select.context.js'
import { selectStyle } from '@/components/select/select.style.js'

const style = selectStyle()

const selectContext = injectSelectContext()

const caretClasses = computed<string>(() => style.caret({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const placeholderClasses = computed<string>(() => style.placeholder())

const triggerClasses = computed<string>(() => style.trigger({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value,
  isHovered: selectContext.isHovered.value,
}))

const valueClasses = computed<string>(() => style.value())
</script>

<template>
  <PopoverTrigger
    :as-child="true"
    :class="triggerClasses"
    @keydown="selectContext.onTriggerKeyDown"
    @focus="selectContext.onFocus"
    @blur="selectContext.onBlur"
    @mouseenter="selectContext.onMouseEnter"
    @mouseleave="selectContext.onMouseLeave"
  >
    <!-- TODO: id, textId -->
    <button
      :class="triggerClasses"
      :disabled="selectContext.isDisabled.value"
      @keydown="selectContext.onTriggerKeyDown"
      @focus="selectContext.onFocus"
      @blur="selectContext.onBlur"
      @mouseenter="selectContext.onMouseEnter"
      @mouseleave="selectContext.onMouseLeave"
    >
      <!-- TODO: icon left -->
      <!-- <AppIcon
        v-if="props.iconLeft !== null"
        :icon="props.iconLeft"
        :class="iconLeftClasses"
      /> -->

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

      <!-- TODO: loading -->
      <!-- <div
        v-if="props.isLoading"
        :class="loaderBoxClasses"
      >
        <slot name="loader">
          <AppSpinner :class="loaderClasses" />
        </slot>
      </div> -->

      <!-- TODO: v-else -->
      <div
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
    </button>
  </PopoverTrigger>
</template>
