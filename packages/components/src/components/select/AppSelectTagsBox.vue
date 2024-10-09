<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
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
</script>

<template>
  <div :class="triggerClasses">
    <span
      v-if="selectContext.isEmpty.value && selectContext.placeholder.value !== null"
      :class="placeholderClasses"
      class="pointer-events-none absolute pl-select-padding-left-default"
    >
      {{ selectContext.placeholder.value }}
    </span>

    <div class="flex size-full flex-wrap items-center gap-1">
      <slot
        v-for="value of selectContext.value.value"
        :key="value"
        name="tag"
      >
        <div class="flex items-center gap-x-1 rounded-md bg-gray-100 py-1 pl-2 pr-1 text-xs">
          {{ value }}

          <AppIconButton
            :style-config="{
              '--icon-button-size-default': '18px',
              '--icon-button-icon-size-default': '14px',
            }"
            icon="xClose"
            variant="ghost"
            label="Remove"
          />
        </div>
      </slot>

      <PopoverTrigger :as-child="true">
        <button
          class="flex size-full min-h-5 min-w-3 flex-1 items-center justify-end bg-transparent outline-none"
          @keydown="selectContext.onTriggerKeyDown"
          @focus="selectContext.onFocus"
          @blur="selectContext.onBlur"
          @mouseenter="selectContext.onMouseEnter"
          @mouseleave="selectContext.onMouseLeave"
        >
          <AppIcon
            :class="caretClasses"
            icon="chevronDown"
          />
        </button>
      </PopoverTrigger>
    </div>
  </div>
</template>
