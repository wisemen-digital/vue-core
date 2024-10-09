<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { injectSelectContext } from '@/components/select/select.context.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import AppTag from '@/components/tag/AppTag.vue'

const style = selectStyle()

const selectContext = injectSelectContext()

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

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
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
        <AppTag
          :is-removable="true"
          :is-disabled="selectContext.isDisabled.value"
        >
          {{ value }}
        </AppTag>
      </slot>

      <PopoverTrigger :as-child="true">
        <button
          :id="selectContext.id.value"
          :data-test-id="selectContext.testId.value"
          :disabled="selectContext.isDisabled.value"
          :class="{
            'pointer-events-none': selectContext.isDisabled.value,
          }"
          class="flex size-full min-h-5 min-w-3 flex-1 items-center justify-end bg-transparent outline-none"
          @keydown="selectContext.onTriggerKeyDown"
          @focus="selectContext.onFocus"
          @blur="selectContext.onBlur"
          @mouseenter="selectContext.onMouseEnter"
          @mouseleave="selectContext.onMouseLeave"
        >
          <div
            v-if="selectContext.isLoading.value"
            :class="loaderBoxClasses"
          >
            <slot name="loader">
              <AppSpinner :class="loaderClasses" />
            </slot>
          </div>

          <AppIcon
            v-else
            :class="caretClasses"
            icon="chevronDown"
          />
        </button>
      </PopoverTrigger>
    </div>
  </div>
</template>
