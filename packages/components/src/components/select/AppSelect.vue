<script setup lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  useId,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import {
  type AppSelectProps,
  appSelectPropsDefaultValues,
} from '@/components/select/select.props.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const props = withDefaults(defineProps<AppSelectProps>(), appSelectPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = selectStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const triggerClasses = computed<string>(() => style.trigger({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => style.error())

const dropdownClasses = computed<string>(() => style.dropdown())

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}

const fruit = ref()

const options = [
  'Apple',
  'Banana',
  'Blueberry',
  'Grapes',
  'Pineapple',
]
</script>

<template>
  <div>
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <label
        :for="inputId"
        :class="inputLabelClasses"
      >
        {{ props.label }} <template v-if="props.isRequired">*</template>
      </label>
    </slot>

    <SelectRoot v-model="fruit">
      <SelectTrigger
        :id="inputId"
        :data-test-id="props.testId"
        :disabled="props.isDisabled"
        :class="triggerClasses"
        @focus="onFocus"
        @blur="onBlur"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <AppIcon
          v-if="props.iconLeft !== null"
          :icon="props.iconLeft"
          :class="iconLeftClasses"
        />

        <SelectValue
          placeholder="Select a fruit..."
          class="w-full text-left"
        />

        <slot
          :is-focused="isFocused"
          :is-hovered="isHovered"
          :is-disabled="props.isDisabled"
          :has-error="hasError"
          name="right"
        />

        <div
          v-if="props.isLoading"
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
            :class="iconRightClasses"
            icon="chevronDown"
          />
        </slot>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          :class="dropdownClasses"
          position="popper"
        >
          <SelectViewport>
            <SelectItem
              v-for="option of options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>

    <slot
      v-if="hasError"
      name="error"
    >
      <span :class="errorClasses">
        {{ props.errors?._errors[0] }}
      </span>
    </slot>

    <slot
      v-else-if="props.hint !== null"
      name="hint"
    >
      <span :class="hintClasses">
        {{ props.hint }}
      </span>
    </slot>
  </div>
</template>
