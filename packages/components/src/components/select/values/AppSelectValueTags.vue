<script setup lang="ts">
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'
import { injectSelectContext } from '@/components/select/select.context.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSelectValueTag from '@/components/select/values/AppSelectValueTag.vue'
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

const tagsClasses = computed<string>(() => style.tags({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const isEmpty = computed<boolean>(() => (selectContext.modelValue.value as Array<unknown>).length === 0)
</script>

<template>
  <div :class="[selectBoxClasses]">
    <AppIcon
      v-if="selectContext.iconLeft.value !== null"
      :icon="selectContext.iconLeft.value"
      :class="iconLeftClasses"
    />

    <span
      v-if="isEmpty && selectContext.placeholder.value !== null"
      :class="[
        placeholderClasses,
        {
          'ml-[calc(var(--select-padding-left-default)+var(--select-icon-left-size-default))]': selectContext.iconLeft.value !== null,
        },
      ]"
      class="absolute"
    >
      {{ selectContext.placeholder.value }}
    </span>

    <div :class="tagsClasses">
      <template
        v-for="value of selectContext.modelValue.value"
        :key="value"
      >
        <slot
          :value="value"
          name="tag"
        >
          <AppSelectValueTag :value="value" />
        </slot>
      </template>

      <AppPopoverTrigger>
        <button
          :id="selectContext.inputId.value"
          :data-test-id="selectContext.testId.value"
          :disabled="selectContext.isDisabled.value"
          :aria-describedby="`${selectContext.inputId.value}-error ${selectContext.inputId.value}-hint`"
          :class="{
            'pointer-events-none': selectContext.isDisabled.value,
          }"
          class="flex size-full min-h-7 min-w-3 flex-1 items-center justify-end bg-transparent outline-none"
          @keydown="selectContext.onTriggerKeyDown"
          @focus="selectContext.onTriggerFocus"
          @blur="selectContext.onTriggerBlur"
          @mouseenter="selectContext.onTriggerMouseEnter"
          @mouseleave="selectContext.onTriggerMouseLeave"
        >
          <div
            v-if="selectContext.isLoading.value"
            :class="loaderBoxClasses"
            class="!mr-0"
          >
            <slot name="loader">
              <AppSpinner
                :class="loaderClasses"
              />
            </slot>
          </div>

          <AppIcon
            v-else
            :class="iconRightClasses"
            :icon="selectContext.iconRight.value"
            class="!mr-0"
          />
        </button>
      </AppPopoverTrigger>
    </div>
  </div>
</template>
