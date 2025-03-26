<script setup lang="ts">
import { computed } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import PopoverTrigger from '@/components/popover/PopoverTrigger.vue'
import SelectValueTag from '@/components/select/blocks/values/SelectValueTag.vue'
import { injectSelectContext } from '@/components/select/select.context'
import { useSelectStyle } from '@/components/select/select.style'
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

const tagsClasses = computed<string>(() => selectStyle.tags({
  hasError: selectContext.hasError.value,
  hasIconLeft: selectContext.iconLeft.value !== null,
  hasIconRight: selectContext.iconRight.value !== null,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => selectStyle.loaderBox())

const loaderClasses = computed<string>(() => selectStyle.loader({
  hasError: selectContext.hasError.value,
  isDisabled: selectContext.isDisabled.value,
  isFocused: selectContext.isFocused.value || selectContext.isOpen.value,
  isHovered: selectContext.isHovered.value,
}))

const isEmpty = computed<boolean>(() => (selectContext.modelValue.value as Array<unknown>).length === 0)
</script>

<template>
  <div :class="[selectBoxClasses]">
    <slot name="left" />

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
          <SelectValueTag :value="value" />
        </slot>
      </template>

      <PopoverTrigger>
        <button
          :id="selectContext.inputId"
          :data-test-id="selectContext.testId.value"
          :disabled="selectContext.isDisabled.value"
          :aria-describedby="ariaDescribedBy"
          :class="{
            'pointer-events-none': selectContext.isDisabled.value,
          }"
          class="cursor-pointer flex size-full min-h-7 min-w-3 flex-1 items-center justify-end bg-transparent outline-none"
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
              <Spinner
                :class="loaderClasses"
              />
            </slot>
          </div>

          <slot
            v-else-if="selectContext.iconRight.value !== null"
            name="icon-right"
          >
            <Icon
              :class="iconRightClasses"
              :icon="selectContext.iconRight.value"
              class="!mr-0"
            />
          </slot>

          <slot name="right" />
        </button>
      </PopoverTrigger>
    </div>
  </div>
</template>
